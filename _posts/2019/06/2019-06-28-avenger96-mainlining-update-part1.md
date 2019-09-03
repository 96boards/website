---
title: Avenger96 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2019-06-28 01:01:54+00:00
image:
    path: /assets/images/blog/avenger96.png
    name: avenger96.png
categories: blog
series: Avenger96 Mainlining Update
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, Zephyr, STMicroelectronics, STM32MP1, U-Boot, TF-A, Mainlining, Devicetree, Pinctrl, GPIO, Upstream, Avenger96, ARMv7, Cortex-M4
---

# Introduction

Hello and Welcome to the blog on "Avenger96 Mainlining Update - Part 1". This
blog will summarise the recent mainlining efforts for [Avenger96 board](/product/avenger96/) in Linux kernel, U-Boot, Trusted Firmware and
Zephyr RTOS.

# Avenger96 Board

[Avenger96](/product/avenger96/) board is one of the
96Boards Consumer Edition of the 96Boards platform. Avenger96 board is based
on STM32MP1 heterogeneous SoC (dual Arm Cortex-A7 cores and an Arm Cortex-M4
core) from STMicroelectronics. In addition, an extensive set of interfaces and
connectivity peripherals are included to interface to cameras, touch-screen
displays an MMC/SD cards. It also fully supports wireless communication,
including WLAN, Ethernet and BLE.

Following are the features of the board:

**SoC:** STM32MP157AAC
**PMIC:** STPMIC1A
**RAM:** 1024 Mbyte @ 533MHz
**Storage:** eMMC v4.51: 8 Gbyte
         microSD Socket: UHS-1 v3.01
**Ethernet Port:** 10/100/1000 Mbit/s, IEEE 802.3 Compliant
**Wireless:** WiFi 5 GHz & 2.4GHz IEEE 802.11a/b/g/n/ac
          Bluetooth®v4.2 (BR/EDR/BLE)
**USB:** 2x Type A (USB 2.0) Host and 1x Micro B (USB 2.0) OTG
**Display:** HDMI: WXGA (1366x768)@ 60 fps, HDMI 1.4
**LED:** 4x User LED, 1x WiFi LED, 1x BT LED

# Mainlining Update

STMicroelectronics did a great job in upstreaming the SoC and eval boards
support to various open source projects such as Linux kernel, U-Boot, ARM Trusted
Firmware-A, Zephyr, etc... So it became very easy for me to upstream the
Avenger96 board to all open source projects mentioned above. This is the
kind of base support we expect from our partners and STMicroelectronics really
stood out and lead from the front.

## Linux Kernel

Linux kernel upstreaming started with adapting the existing `STM32MP157A-DK1`
evaluation board. I had to add few missing pinmux definitions for this board
and rest of the stuffs were mostly same. At that time, only basic features were
supported in mainline for STM32MP1, so just enabled the ones which were
supported and submitted the patchset to LKML.

During the initial review, Rob Herring (Devicetree/bindings Maintainer) spotted
some corrections in the way STM32MP1 SoC bindings are laid out. So, I went ahead
and converted the old platform binding (.txt) to the newly introduced JSON schema
format. The JSON schema format really helps in validating the devicetree before
getting processed by the devicetee compiler, so conversion seemed obvious to me.

And at the 4th iteration of the patchset, the STM32MP1 platform maintainer
merged the series to his stm32-next branch for v5.3.

Link to final patchset: https://lkml.org/lkml/2019/6/12/161

## U-Boot

As like Linux kernel, U-Boot board support was also pretty easy since the SoC
was already well supported. I just added the missing pinmux definitions and
rest of the stuffs were mostly same with `STM32MP157A-DK1` board. During the
testing, I faced some issues with board not booting when SPL way of booting
was used. After debugging, it turned out that I had to add `u-boot,dm-pre-alloc`
property to some devicetree nodes in order to make it available in SPL.

Finally, I submitted the patchset and at 2nd iteration, it was merged by the
platform maintainer.

Link to final patchset: https://www.mail-archive.com/u-boot@lists.denx.de/msg324986.html

## ARM Trusted Firmware-A

Trusted firmware support was necessary to boot the board since it provides
the second stage bootloader which loads u-boot. Hence, I also added
support for Avenger96 board by following the existing `STM32MP157A-DK1` board.

As like Linux kernel and u-boot, only pinmux changes were required along with
some board specific bits. So after finishing those, I quickly submitted the
board support as a gerrit review and it got merged smoothly.

Link to gerrit review: https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/960

## Zephyr RTOS

After finishing all the board support needed to run Linux kernel on Cortex A7
cores, there was one remaining but interesting work left! It was the firmware
to run on Cortex-M4 core. Since STMicroelectronics has been contributing
heavily to the [Zephyr RTOS](https://github.com/zephyrproject-rtos/zephyr)
project, they decided to run Zephyr RTOS on M4 core to offload the real time
tasks. And as like other projects, they also added basic SoC and evaluation
board support in Zephyr. So, I just adapted the existing board support to
Avenger96 and boom!!!, Zephyr RTOS was running on M4 core along with Linux
kernel on A7 cores.

At that time, the Zephyr support was very basic such that there was no proper
IPC mechanisms were available to communicate to the Linux kernel over mailbox. But,
ST folks already started working on [OpenAMP](https://github.com/OpenAMP/open-amp)
library support and very soon we should see both Linux and Zephyr talking to
each other :-)

Link to PR: https://github.com/zephyrproject-rtos/zephyr/pull/16784

> Note: For loading the Zephyr binary to M4 core, I used u-boot.

# Conclusion

So this ends the quick summary of the upstreaming efforts for Avenger96
board from Arrow Electronics. Lots of features are being added to the above
mentioned open source projects, so we will keep an eye on it and enable the
relevant features on Avenger96 when available. Stay tuned for Part-2 blog!
