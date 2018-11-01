---
title: Up and Running With The Secure96 TPM
description: Leveraging upstream SPI TPM support for the 96Boards Secure96 mezzanine. 
author: Bill Fletcher
date: 2018-11-01 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/secure96-tpm.jpg
    name: secure96-tpm.jpg
    thumb: secure96-tpm-thumb.jpg
categories: blog
tags: aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, Crypto, Secure96, Security, Secure, TPM, Cryptography, Trusted, Trusted Computing, Remote Attestation
---

# **Introduction**

The 96Boards Secure96 mezzanine was introduced last year (https://youtu.be/JGkl3oC9gtA) and it contains a Trusted Computing Group TPM chip. Secure96 is a 1.8V mezzanine for cryptography applications that plugs into the low-speed connector on e.g. a 96Boards Dragonboard DB410C or similar host. The TPM on board communicates with the host via SPI. It is an Infineon SLB 9670 and conforms to the most recent TPM 2.0 specification.  This post describes how to get the TPM to initialize and running some basic operations via the TSS stack using the 4.14 kernel on the Dragonboard DB410C.

# **What is a TPM?**

A TPM (Trusted Platform Module) is an international standard for a secure cryptoprocessor <sup>[1]</sup>. The TPM technical specification was written by a computer industry consortium called Trusted Computing Group (TCG) and it’s standardised as ISO/IEC 11889.

One way to think of a TPM is as a cryptographic swiss army knife providing a lot of useful hardware crypto function implementations that might otherwise be difficult to implement and/or secure on a particular system. These crypto functions include: 

* a cryptographically secure random number generator, 
* a unique secret key embedded in the device, 
* public-key cryptographic algorithms, 
* cryptographic hash functions, 
* symmetric-key algorithms, 
* digital signature generation and verification, 
* ECC-based Direct Anonymous Attestation,
* secure hash and key storage,
* key generation and key derivation.

Using these functions allow a developer to establish a hardware root of trust, and then locally carry out key generation and key use with TPM-resident keys, use the TPM as an engine for encryption / decryption and signing, also for hash algorithms and symmetric ciphers and implement non-volatile storage of one-way hashes of messages and measurements of the overall system’s level of modification. 

Remotely, the system with a TPM can support *remote attestation* in well-defined manner and authorization for functionality provided by the TPM. This means that TPMs can e.g. replace smart cards or VPN tokens for proving that a hardware client is who it claims to be.

[**Remote attestation** is a method by which a host (client) authenticates it's hardware and software configuration to a **remote** host (server). The goal of **remote attestation** is to enable a **remote** system (challenger) to determine the level of trust in the integrity of platform of another system (attestator) *- Stanford Security Lab*]

The TPM has a capability to store a measure of the overall system state in a one-way hash which can be progressively updated (extended) at each boot stage but not rolled back. This extended hash is stored in the TPM’s Platform Configuration Registers (PCRs). The TPM does no measurement of the system state itself. It just provides a cryptographically verifiable storage mechanism. 

# **Interacting with the Secure96 TPM**

To get the TPM running, you need 

* a Secure96 board
* a host such as a Dragonboard DB410C with a 1.8V low-speed connector
* a kernel built with the SPI TPM driver configured
* device tree with necessary changes to enable the low speed connector SPI bus and to configure the correct GPIO as the SPI chip select
* Some user-space TPM tools

# **Kernel**

These instructions are based on the Qualcomm Landing Team kernel 4.14.69, cloned from http://git.linaro.org/landing-teams/working/qualcomm/kernel.git

Details on building the kernel from source for the Dragonboard are here

Modifications to the following files are needed to enable the TPM SPI driver and the SPI interface chip select:
arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
arch/arm64/boot/dts/qcom/msm8916-pins.dtsi
drivers/spi/spi-qup.c

A full description of these changes are described in this patch (and also reproduced at the end of this post).

In the kernel config, as a minimum you need the TPM core functionality, the TPM SPI driver and support for the Infineon device. Here’s a TPM-related snippet from the config I used: 

```
CONFIG_HW_RANDOM_TPM=m
CONFIG_TCG_TPM=y
CONFIG_TCG_TIS_CORE=y
CONFIG_TCG_TIS=y
CONFIG_TCG_TIS_SPI=y
# CONFIG_TCG_TIS_I2C_ATMEL is not set
# CONFIG_TCG_TIS_I2C_INFINEON is not set
# CONFIG_TCG_TIS_I2C_NUVOTON is not set
# CONFIG_TCG_ATMEL is not set
CONFIG_TCG_INFINEON=y
# CONFIG_TCG_XEN is not set
CONFIG_TCG_CRB=y
# CONFIG_TCG_VTPM_PROXY is not set
# CONFIG_TCG_TIS_ST33ZP24_I2C is not set
# CONFIG_TCG_TIS_ST33ZP24_SPI is not set
```

Modify your config using menuconfig to enable the above options.
Build the kernel, device tree blobs and modules. 
Follow the instructions to create a boot-db410c.img file

I’ve uploaded my boot-db410c.img along with the other files (CS patch, config) at http://people.linaro.org/~bill.fletcher/Up_and_running_with_the_Secure96_TPM/


# **Using the TPM - The IBM TSS Stack**

There are 3 open source TPM Software Stacks (TSS)  which I previously evaluated that allow user space access to TPM functionality. They are:

<table>
  <tr>
    <td>Package </td>
    <td>URL</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>TrouSerS</td>
    <td>http://trousers.sourceforge.net/faq.html</td>
    <td>TrouSerS has been in existence for a long time, but unfortunately only supports the TPM 1.2 spec with no plan to move. Although the TPM on the Secure96 can support both 1.2 and 2.0 specs, the driver defaults to 2.0</td>
  </tr>
  <tr>
    <td>Intel TPM Software Stack for TPM 2.0</td>
    <td>https://github.com/01org/TPM2.0-TSS.git</td>
    <td>The Intel Open Source Technology Center (01org) provides some TPM 2.0 tools, also referenced in <sup>[2</sup>. It’s complex, with a TPM stack, d-bus integrated resource manager and toolkit.</td>
  </tr>
  <tr>
    <td>IBM TPM 2.0 TSS</td>
    <td>https://sourceforge.net/projects/ibmtpm20tss/</td>
    <td>A simple user space TSS for TPM 2.0. It implements the functionality equivalent to the TCG TSS working group's ESAPI, SAPI, and TCTI API's. Written by previous users of TrouSerS.</td>
  </tr>
</table>


I’ve stuck with the IBM TPM 2.0 TSS. It has a companion software TPM simulator which you can also install. Download the code from the link above (tarfile or git). 

To configure it to use the hardware TPM (/dev/tpm0), edit the file tssproperties.c to set TPM_INTERFACE_TYPE_DEFAULT to be “dev”. i.e. add
```
#define TPM_INTERFACE_TYPE_DEFAULT “dev”
```
as the first definition in the file. Build is a simple case of typing make, although I did already have build-essential and the typical build packages installed. The stack worked out of the box for me once I pointed it at the hardware TPM.

After building this change, the getcapability utility in the IBM TSS stack (in utils/)

```shell
$ sudo ./getcapability -cap 6
```

will list the internal capabilities of the TPM on the board. With the IBM stack, there’s no resource manager, utilities talk directly to the TPM device.

As an example of TPM functionality, the signapp.c source shows how several TPM commands from user space can be chained together to form an application that uses the TPM.  It does the following:

1. Start an authorization HMAC session
2. Create a primary storage key, using the session
3. Create a signing key under the storage key
4. Load the signing key, using the session
5. Sign a digest, using the session
6. Verify the signature
7. Flush the primary key
8. Flush the signing key
9. Flush the session

You can invoke the signapp utility with a quoted string as the input to the above process

```shell
$ sudo ./signapp -ic "one two three"
```

The code in the IBM TSS stack is not only a toolkit of TPM utilities but also intended to be used as examples on how to develop user space code to leverage the TPM and if necessary can be re-used in your applications. 

# **TPMs in Real Life**

A TPM is a passive device hanging off (in this case) the SPI bus. On its own, it doesn’t check or measure anything except what code running on the CPU sends to it. That raises the obvious question as to how to trust the code that is talking to the TPM - especially at boot time, and that implies an initial root of trust in microcode or firmware external to the TPM. x86 systems, as far as I can ascertain[3], boot trusted microcode that sends measurements from that boot phase directly to the TPM over the LPC bus at boot.

Once you have some kind of trusted firmware booted, you can use the TPM. For example:

“If a machine has a TPM, then … it could be used to store a key pair used to sign the OS that a user wants to boot. That way the user has full control over what he or she “blesses”.  I imaging a BIOS/UEFI/EBBS command that says: Use the platform key at *this* location to bless the current install, and use *this* public key to verify a blessed install.This would get around the problem of needing to go to a particular vendor to get a blessing of your kernel, and also allow people to experiment.”*

(thanks to David Challener for this suggestion)


# **Troubleshooting**

In order to create the /dev/tpm0 instance, the tpm_spi_tis kernel driver has to complete its initialisation successfully. This requires a large number of SPI bus transactions between the host and the TPM chip. If you have access to a logic analyser, you can follow along, or alternatively you can instrument the low level SPI driver in the kernel.

You can expect to see the log message in dmesg:
```
[    1.159875] tpm tpm0: A TPM error (256) occurred continue selftest
[    1.159912] tpm tpm0: starting up the TPM manually
```
This is normal according to previous Infineon documentation. My suspicion is that the driver mis-interprets the V-bit in the return code as an error.

There is a potential TPM reset issue with the mezzanine.The TPM reset line is connected to a GPIO rather than a reset circuit. I didn’t ultimately see problems with this, but if the TPM doesn’t respond sensibly to the driver initialization attempts, it’s possible to toggle the reset line to the chip via a connected GPIO. One clue that there’s a reset issue is if the SPI driver spins reading zeros from the TPM and then times out. 

# **Code Changes**

See http://people.linaro.org/~bill.fletcher/Up_and_running_with_the_Secure96_TPM/db410c_spi_cs.patch

```
diff --git a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
index 4c3dda5f3a83..bc16493ac139 100644
--- a/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
+++ b/arch/arm64/boot/dts/qcom/apq8016-sbc.dtsi
@@ -136,10 +136,16 @@
 		};
 
 		spi@78b9000 {
-		/* On Low speed expansion */
-			label = "LS-SPI0";
-			status = "okay";
-		};
+                /* On Low speed expansion */
+                        label = "LS-SPI0";
+                        /* cs-gpios = <&msmgpio 18 0> */
+                        status = "okay";
+                        tpm_tis_spi@0 {
+                            compatible = "tcg,tpm_tis-spi";
+                            spi-max-frequency = <5000000>;
+                            reg = <0>;
+                        };
+                };
 
 		leds {
 			pinctrl-names = "default";
diff --git a/arch/arm64/boot/dts/qcom/msm8916-pins.dtsi b/arch/arm64/boot/dts/qcom/msm8916-pins.dtsi
index b1ed8dcf7543..bdb936a18686 100644
--- a/arch/arm64/boot/dts/qcom/msm8916-pins.dtsi
+++ b/arch/arm64/boot/dts/qcom/msm8916-pins.dtsi
@@ -208,7 +208,7 @@
 			pins = "gpio16", "gpio17", "gpio19";
 		};
 		pinmux_cs {
-			function = "gpio";
+			function = "blsp_spi5";
 			pins = "gpio18";
 		};
 		pinconf {
@@ -218,7 +218,7 @@
 		};
 		pinconf_cs {
 			pins = "gpio18";
-			drive-strength = <16>;
+			drive-strength = <12>;
 			bias-disable;
 			output-high;
 		};
diff --git a/drivers/spi/spi-qup.c b/drivers/spi/spi-qup.c
index 974a8ce58b68..072f17cf7e26 100644
--- a/drivers/spi/spi-qup.c
+++ b/drivers/spi/spi-qup.c
@@ -754,6 +754,7 @@ static int spi_qup_io_config(struct spi_device *spi, struct spi_transfer *xfer)
 	else
 		control &= ~SPI_IO_C_CLK_IDLE_HIGH;
 
+        config |= SPI_IO_C_MX_CS_MODE;
 	writel_relaxed(control, controller->base + SPI_IO_CONTROL);
 
 	config = readl_relaxed(controller->base + SPI_CONFIG);
@@ -1113,7 +1114,7 @@ static int spi_qup_probe(struct platform_device *pdev)
 			base + QUP_ERROR_FLAGS_EN);
 
 	writel_relaxed(0, base + SPI_CONFIG);
-	writel_relaxed(SPI_IO_C_NO_TRI_STATE, base + SPI_IO_CONTROL);
+        writel_relaxed(SPI_IO_C_NO_TRI_STATE|SPI_IO_C_MX_CS_MODE, base + SPI_IO_CONTROL);
 
 	ret = devm_request_irq(dev, irq, spi_qup_qup_irq,
 			       IRQF_TRIGGER_HIGH, pdev->name, controller);

```

{% include media.html media_url="https://youtu.be/JGkl3oC9gtA" %}

# **References**

[1] A Practical Guide to TPM 2.0 - Will Arthur, David Challener Apress Open

[2] Infineon Application Note TPM20_Embedded_SLB_9670_AppNote_Rev1.0_2017-03-16

[3] [https://arstechnica.com/information-technology/2017/10/crypto-failure-cripples-millions-of-high-security-keys-750k-estonian-ids/
](https://arstechnica.com/information-technology/2017/10/crypto-failure-cripples-millions-of-high-security-keys-750k-estonian-ids/)




