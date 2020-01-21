---
title: I2S In Dragonboard410c
author: Manivannan Sadhasivam
date: 2018-06-07 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
    thumb: DragonBoard-UpdatedImages-front.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Dragonboard410c, Qualcomm, I2S, Audio, ALSA
---

# Introduction

When you look at the spec of [Dragonboard410c](/documentation/consumer/dragonboard/dragonboard410c/hardware-docs/hardware-user-manual.md.html), there will be 2 I2S ports mentioned.
However, on the [release image](http://releases.linaro.org/96boards/dragonboard410c/linaro/debian/)
provided by Qualcomm Landing team, only one I2S will be used (for HDMI). The other
one will be on the Low Speed Expansion header but since nothing is connected to those
pins, the configuration for enabling the I2S is not provided in the release image(kernel).
This blog outlines the internal structure of I2S in Dragonboard410c and instructions
on enabling the I2S on Low speed expansion header.

# I2S in Dragonboard410c

I2S (Inter-IC Sound) is a serial protocol for transferring analog audio signals
as a digital data. This interface primarily consists of following lines:

* SCK - Serial Clock
* WS - Word Select
* SD - Serial Data

In I2S communication, the bus master will generate the SCK and WS signals.
Occasionally there will be also high frequency MCLK signal driven by the
master which can be utilized by codecs.

The standard I2S specification defined by Philip Semiconductors, calls for
one data line (SD) but I2S in APQ8016 adds one or more data lines and hence
called Multiple I2S (MI2S). It should be noted that the protocol is same as
per standard but with increased channels.

APQ8016 consists of 4 internal MI2S interfaces:

* **Primary MI2S**   - Supports only playback
* **Secondary MI2S** - Supports only playback
* **Teritary MI2S**  - Supports only capture
* **Quatenary MI2S** - Supports both playback and capture

Primary and Secondary I2S interfaces are connected to External Primary TLMM via Mux1.
Teritary and Quatenary I2S interfaces are connected to External Secondary TLMM via Mux2.

By default, internal WCD codec in APQ8016 occupies Primary MI2S for playback and
Teritary MI2S for capture. On the other hand, external codec (ADV7533) present
on the Dragonboard410c occupies Quatenary MI2S for playback through HDMI.

## Pin Mapping

**External Primary MI2S**

|   Pin   | Function |
|---------|----------|
| GPIO110 | WS       |
| GPIO113 | SCLK     |
| GPIO114 | SD       |

> Note: Since External Primary MI2S (on LS header) is muxed to Internal Primary
>       and Secondary I2S interfaces, which only supports playback, it is not
>       possible to do **Full Duplex** communication by any means. For this
>       purpose External Secondary MI2S should be used.

**External Secondary MI2S**

|   Pin   | Function |
|---------|----------|
| GPIO117 | WS       |
| GPIO118 | SCLK     |
| GPIO119 | SD       |

# Modifying the kernel

For using I2S signals on External Primary MI2S port available at Low Speed
Expansion header, we need to patch the kernel. Following instructions specify
the process of modifying the kernel to use LS-I2S on Dragonboard410c.

1. Clone the kernel

```shell
$ git clone -n http://git.linaro.org/landing-teams/working/qualcomm/kernel.git
$ cd kernel
$ git checkout -b kernel-<RELEASE> debian-qcom-dragonboard410c-<RELEASE>
```
> Note: Replace < RELEASE > with latest release version found
[here](http://releases.linaro.org/96boards/dragonboard410c/linaro/debian/latest/)

2. Add LS I2S support

Apply the following diff to the cloned kernel.

```
diff --git a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
index 9ff848792712..7615b804da94 100644
--- a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
+++ b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
@@ -442,7 +442,7 @@
                         reg-names = "mic-iomux", "spkr-iomux";

                         status = "okay";
-                        pinctrl-0 = <&cdc_pdm_lines_act &ext_sec_tlmm_lines_act &ext_mclk_tlmm_lines_act>;
+                        pinctrl-0 = <&cdc_pdm_lines_act &ext_sec_tlmm_lines_act &ext_mclk_tlmm_lines_act &ext_pri_tlmm_lines_act &ext_pri_ws_act>;
                         pinctrl-1 = <&cdc_pdm_lines_sus &ext_sec_tlmm_lines_sus &ext_mclk_tlmm_lines_sus>;
                         pinctrl-names = "default", "sleep";
                         qcom,model = "DB410c";
diff --git a/sound/soc/qcom/apq8016_sbc.c b/sound/soc/qcom/apq8016_sbc.c
index 704428735e3c..6da13cc573f2 100644
--- a/sound/soc/qcom/apq8016_sbc.c
+++ b/sound/soc/qcom/apq8016_sbc.c
@@ -38,6 +38,10 @@ struct apq8016_sbc_data {
 #define MIC_CTRL_QUA_WS_SLAVE_SEL_10	BIT(17)
 #define MIC_CTRL_TLMM_SCLK_EN		BIT(1)
 #define	SPKR_CTL_PRI_WS_SLAVE_SEL_11	(BIT(17) | BIT(16))
+#define SPKR_CTL_SCLK_EN		BIT(2)
+#define SPKR_CTL_DATA1_EN		BIT(3)
+#define SPKR_CTL_DATA0_EN		BIT(4)
+
 #define DEFAULT_MCLK_RATE		9600000

 static int apq8016_sbc_dai_init(struct snd_soc_pcm_runtime *rtd)
@@ -51,7 +55,9 @@ static int apq8016_sbc_dai_init(struct snd_soc_pcm_runtime *rtd)

 	switch (cpu_dai->id) {
 	case MI2S_PRIMARY:
-		writel(readl(pdata->spkr_iomux) | SPKR_CTL_PRI_WS_SLAVE_SEL_11,
+		writel(readl(pdata->spkr_iomux) | SPKR_CTL_PRI_WS_SLAVE_SEL_11 |
+				SPKR_CTL_SCLK_EN | SPKR_CTL_DATA0_EN |
+				SPKR_CTL_DATA1_EN,
 			pdata->spkr_iomux);
 		break;

--
2.16.2
```

# Building and Flashing the kernel

After applying the above diff, build and flash the kernel on to Dragonboard410c
using the instructions specified [here](https://github.com/96boards/documentation/blob/master/consumer/dragonboard/dragonboard410c/build/kernel.md#3-build-linux-kernel).

# Testing LS I2S Output

Login to Dragnoboard410c and execute the following commands to test
I2S signals on LS header. By default, the internal codec will be used.

```shell
$ amixer cset iface=MIXER,name='RX1 MIX1 INP1' 'RX1'
$ amixer cset iface=MIXER,name='RX2 MIX1 INP1' 'RX2'
$ amixer cset iface=MIXER,name='RDAC2 MUX' 'RX2'
$ amixer cset iface=MIXER,name='HPHL' 1
$ amixer cset iface=MIXER,name='HPHR' 1
$ amixer set 'RX1 Digital' 0dB
$ amixer set 'RX2 Digital' 0dB
$ amixer cset iface=MIXER,name='RX1 Mute Switch' 0
$ amixer cset iface=MIXER,name='RX2 Mute Switch' 0
$ aplay -D plughw:0,1 /usr/share/sounds/alsa/F*
```

# Connecting External Codec

After successfully executing the above instructions, you can see the I2S
signals on the LS header pins. This also gives the option for the user to
interface any external codec to the Dragonboard410c. For doing this, below
diff can be used as a template:

```shell
diff --git a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
index 4c3dda5..0b10036 100644
--- a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
+++ b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
@@ -315,7 +315,7 @@
                                         sound-dai = <&lpass MI2S_PRIMARY>;
                                 };
                                 codec {
-                                        sound-dai = <&lpass_codec 0>, <&wcd_codec 0>;
+                                        sound-dai = <&your_codec 0>;
                                 };
                         };
```

> Note: Just define a node for your_codec beforehand. For reference you can
see how ADV7533 (adv_bridge) is used.

# Conclusion

Alright, we are at the end of this blog :) I hope that this blog provided much
information for understanding the I2S block in Dragonboard410c and instructions
to use LS I2S. If you have any queries on the provided information, please feel
free to throw it in comments. We'd love to hear back from community!
