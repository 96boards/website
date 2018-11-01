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

The new 96Boards [Secure96 mezzanine](https://www.96boards.org/product/secure96/) introduced at [Linaro Connect SFO17](https://youtu.be/JGkl3oC9gtA) contains a Trusted Computing Group TPM chip. Secure96 is a 1.8V mezzanine for cryptography applications that plugs into the low-speed connector on e,g a Dragonboard or Hikey. The TPM on board communicates with the host via SPI. It is an Infineon SLB 9670 and conforms to the latest TPM 2.0 specification.

# **TPM - What is it good for?**

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

Remotely, the system with a TPM can support* remote attestation* in well-defined manner and authorization for functionality provided by the TPM. This means that TPMs can e.g. replace smart cards or VPN tokens for proving that a hardware client is who it claims to be.

[**Remote attestation** is a method by which a host (client) authenticates it's hardware and software configuration to a **remote** host (server). The goal of **remote attestation** is to enable a **remote** system (challenger) to determine the level of trust in the integrity of platform of another system (attestator) *- Stanford Security Lab*]

# **The Dark Side of the TPM**

The TPM has a capability to store a measure typically of the overall system state in a one-way hash which can be progressively updated (extended) at each boot stage but not rolled back. This has been controversial in allowing commercial OS and end applications to look at the final hash and decide if they accept the ‘health’ or modification level of the system before unlocking certain secure functionality. This concern has been exacerbated by the inclusion of TPMs in most laptops, giving rise to concerns that non-standard boot or OS configurations could result in disabled functionality. 

This ubiquity, coupled with concerns that it’s not possible to prove that the private unique key in a TPM is not also perhaps disclosed to some intelligence services, meant that TPMs have been the focus of some disapproval as the potential ‘big brother’ in your PC from freedom advocates and the open source community, at least until the ME came along.

# **Bringing Up the Secure96 TPM**

Assuming you’re still willing to give a TPM a go as a root-of-trust, rather than viewing it as the potential root-of-all-evil, you need 

* [a Secure96 board](https://www.96boards.org/product/secure96/), 

* [a host (e.g. a 96Boards CE edition board)](https://www.96boards.org/products/ce/), 

* a kernel and modules with the SPI TPM driver

* device tree with changes to enable SPI and to configure the correct GPIO as the SPI chip select

* Some user-space TPM tools

Infineon have been working to get the TPM SPI driver support upstream sometime post 4.9. Unfortunately I did not have a kernel newer than 4.9 at the time of writing for DB410, so for this post I’ve been using Infineon’s out-of-tree SPI driver released for 4.4, but on 4.9. I can’t claim to have forward ported it. I just sort of wedged it in-place and rebuilt the kernel. When there’s a newer version I’ll try to post an update.

My kernel tree and some pre-built images are here: 

[http://people.linaro.org/~bill.fletcher/Dragonboard_TPM/](http://people.linaro.org/~bill.fletcher/Dragonboard_TPM/)

I’ve built the TPM driver as a module primarily to separate any concerns about power on and reset from initialising the driver. The module is called tpm_spi_tis.

To get started using the Dragonboard, use the patched kernel and device tree.

# **Detailed Steps**

Initially start with a [Dragonboard](https://www.96boards.org/product/dragonboard410c/) flashed and running a recent Debian release. 

Copy the kernel modules across to the Dragonboard for the modified tpm kernel and unpack them under /lib/modules/kernel alongside the ones that are currently there. Don’t skip this step or you won’t have a TPM driver. 

Power off the board, insert the Secure96 mezzanine into the low speed connector on the Dragonboard, taking care before you power on to ensure that it’s aligned and not offset by one or more pins either way.

Connect your Linux PC to the Dragonboard via the OTG connector and put the Dragonboard in fastboot mode (power off, hold down S4 and power on).

On the host:

```shell
$ sudo fastboot devices

$ sudo fastboot flash boot boot-tpm-db410c.img
```

Remove the OTG cable and reboot the board. 

```shell
$ lsmod
```

should show that the tpm_spi_tis module was loaded. If not, you can load it manually with modprobe

```shell
$ ls /dev
```

should show that tpm0 was created and you can use the userspace tools to access the functionality inside the TPM.

A dump of all the SPI traffic between the host and the TPM device in order to initialise it is [here](http://people.linaro.org/~bill.fletcher/Dragonboard_TPM/tpm_init_001.pdf).

# **Using the TPM - The IBM TSS Stack**

There are 3 open source TPM Software Stacks (TSS)  which I evaluated that allow user space access to TPM functionality. They are:

<table>
  <tr>
    <td>Package </td>
    <td>URL</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>TrouSerS</td>
    <td>http://trousers.sourceforge.net/faq.html</td>
    <td>TrouSerS has been in existence for a long time, but unfortunately only supports the TPM 1.2 spec with no plan to move. Although the TPM on the Secure96 can support both 1.2 and 2.0 specs, the driver built above defaults to 2.0</td>
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


I used the IBM TPM 2.0 TSS. It has a companion software TPM simulator which you can also install. Download the code from the link above (tarfile or git). Build is a simple case of typing make, although I did already have build-essential and the typical build packages installed.

To configure it to use the hardware TPM (/dev/tpm0), edit the file tssproperties.c to set TPM_INTERFACE_TYPE_DEFAULT to be "dev". the stack worked out of the box for me once I pointed it at the hardware TPM.

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

# **Don’t Generate RSA Keys**

A fatal flaw in the RSA key generation has been recently discovered in the Infineon-developed RSA Library version v1.02.013. The library runs on Infineon smartcard chips and TPMs <sup>[3]</sup>. This means that any generated RSA keys are vulnerable to a factorization attack.

The flaw affects only keys generated with the RSA algorithm on a smartcard or other embedded device that uses the Infineon library internally, and that currently includes the TPM on the Secure96. Infineon’s own vulnerability advisory is here: [https://www.ncsc.gov.uk/guidance/roca-infineon-tpm-and-secure-element-rsa-vulnerability-guidance](https://www.ncsc.gov.uk/guidance/roca-infineon-tpm-and-secure-element-rsa-vulnerability-guidance)

So for secure asymmetric keys, use ECC (Elliptic Curve) key generation in the Secure96 TPM instead of RSA, at least until further notice.

# **Details of the Code Changes**

## **Device Tree**

In file msm8916.dtsi for adding the low-speed connector SPI chip select (gpio18):

```
                blsp_spi5: spi@78b9000 {

                        compatible = "qcom,spi-qup-v2.2.1";

                        reg = <0x078b9000 0x600>;

                        interrupts = <GIC_SPI 99 IRQ_TYPE_LEVEL_HIGH>;

                        clocks = <&gcc GCC_BLSP1_QUP5_SPI_APPS_CLK>,

                                 <&gcc GCC_BLSP1_AHB_CLK>;

                        clock-names = "core", "iface";

                        dmas = <&blsp_dma 13>, <&blsp_dma 12>;

                        dma-names = "rx", "tx";

                        pinctrl-names = "default", "sleep";

                        pinctrl-0 = <&spi5_default>;

                        pinctrl-1 = <&spi5_sleep>;

                        #address-cells = <1>;

                        #size-cells = <0>;

                        num-cs = <1>;

                        cs-gpios = <0x28 0x12 0x1>;

                        spi-max-frequency = <5000000>;

                        status = "disabled";

                };
```
In file apq8016-sbc.dtsi, setting up the SPI to reference the tpm driver

```
                spi@78b9000 {

                /* On Low speed expansion */

                        label = "LS-SPI0";

                        status = "okay";

                        tpm_tis_spi@0 {

                            compatible = "tcg,tpm_spi_tis";

                            spi-max-frequency = <5000000>;

                            reg = <0>;

                        };
```
## **Kernel config**

```
#
# PCMCIA character devices
#

CONFIG_TCG_TPM=y
CONFIG_TCG_TIS_SPI=m
```

# **Drivers**

The drivers source in drivers/char/tpm is from the 4.4.9 kernel, with SLB 9670 patches applied as per the Infineon TPM application note [2]. In order to get these drivers to run in a 4.9 kernel, you also need the linux/tpm.h header from 4.4.9.

My patched kernel is here [http://people.linaro.org/~bill.fletcher/Dragonboard_TPM/](http://people.linaro.org/~bill.fletcher/Dragonboard_TPM/)

# **Troubleshooting**

In order to create the /dev/tpm0 instance, the tpm_spi_tis kernel driver has to complete its initialisation successfully. This requires a large number of SPI bus transactions between the host and the TPM chip. If you have access to a logic analyser, you can follow along, or alternatively you can instrument the low level SPI driver in the kernel. There is SPI TPM driver code in the 4.9 kernel but it gives up after a few tens of bytes exchanged.

There is a potential TPM reset issues with early versions of the mezzanine. If the TPM doesn’t respond sensibly to the driver initialization attempts, it’s possible to toggle the reset line to the chip via a connected GPIO and then manually load the driver module. There’s a file tpm_reset.c that toggles the reset line. One clue that there’s a reset issue is if the SPI driver spins reading zeros from the TPM and then times out. 

{% include media.html media_url="https://youtu.be/JGkl3oC9gtA" %}

# **References**

[1] A Practical Guide to TPM 2.0 - Will Arthur, David Challener Apress Open

[2] Infineon Application Note TPM20_Embedded_SLB_9670_AppNote_Rev1.0_2017-03-16

[3] [https://arstechnica.com/information-technology/2017/10/crypto-failure-cripples-millions-of-high-security-keys-750k-estonian-ids/
](https://arstechnica.com/information-technology/2017/10/crypto-failure-cripples-millions-of-high-security-keys-750k-estonian-ids/)




