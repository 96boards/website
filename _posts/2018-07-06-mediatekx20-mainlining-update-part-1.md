---
title: Mediatek X20 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2018-07-06 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/Helio-X20-front.png
    name: Helio-X20-front.png
    thumb: Helio-X20-front.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Mediatek X20, MediaTek, Helio X20, SoC, Mainlining, Devicetree, DecaCore
---

# Introduction

Hello and Welcome to the blog on "Mediatek X20 Mainlining Update - Part 1". This
blog provides the update on the Mainlining efforts from 96Boards team for the
[Mediatek X20 board](https://www.96boards.org/product/mediatek-x20/) in Linux kernel.

# Reason for Mainlining Mediatek X20 board

The Mediatek X20 Development Board is a 96Boards compliant community board based on the MediaTek X20 series of SoCs. X20 is a highly integrated application processor that includes Dual-core ARM Cortex-A72 processors operating at up to 2.3GHz, Quad-core ARM Cortex-A53 processors operating at up to 1.95GHz, Quad core ARM Cortex-A53 processors operating at up to 1.4GHz and a Mali T880 GPU operating at up to 800MHz. In addition, an extensive set of interfaces and connectivity peripherals are included to interface to cameras, touch-screen displays and MMC/SD cards. It also fully supports wireless communication, including WLAN, Bluetooth and GPS.

Eventhough the SoC is powerful, the vendor support is very limited for this board.
The vendor kernel is based on legacy 3.10 kernel, which is not very recent LTS
kernel. For 96Boards we rely on the board/SoC manufacturer to provide the kernel
support their boards. But since we get limited support from the vendor for this
board, we decided to take up the upstreaming task in our spare time.

# Mainlining Update

First of all, we started with the basic Devicetree support for this board.
Our motive is to just have a minimal changes required to have the board boot
the mainline kernel into Initramfs.

Since the basic support for [MT6797 SoC](https://github.com/torvalds/linux/blob/master/arch/arm64/boot/dts/mediatek/mt6797.dtsi) is already mainlined, it became very
easy for us to add the board support. So, we submitted the below revisions
of the board DTS patches which received positive feedback from the Maintainer.

Rev 1 - https://lkml.org/lkml/2018/5/29/20
Rev 2 - https://lkml.org/lkml/2018/6/5/624

Although, the Maintainer insisted that "we need to add further support for this
board in the upcoming days, else it will become a dead board support in
mainline", quite understandably.

While comparing the vendor kernel for this board, we moved the debug UART port
to port 1 on the Low Speed Expansion header following the [96Boards Consumer
Edition Spec](https://linaro.co/ce-specification).

# Conclusion

Eventhough the patchset is not yet accepted, we are very hopeful of seeing
our board in mainline very soon. If time permits, our next goal would be to
add pinctrl/gpio support for this SoC/board in recent weeks. Stay tuned!
