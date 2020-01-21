---
title: Bubblegum96 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2018-04-23 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/bubblegum96.png
    name: bubblegum96.png
    thumb: bubblegum96-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Bubblegum96, Actions, S900, SoC, Mainlining
---

# Introduction

Hello and Welcome to the blog on "Bubblegum96 Mainlining Update - Part 1". This
blog provides the update on the Mainlining efforts from 96Boards team for the
[Bubblegum96 board](https://www.96boards.org/product/bubblegum-96/) in Linux kernel.

# Bubblegum96

Bubblegum96 board is based on Actions Semiconductor S900 64bit ARM-v8 SoC. SoC
has 4 ARM Cortex-A53 cores clocked up to 1.8GHz. The clock speed itself is very
unique from other A53 cores. While most of the A53 cores clocks 1.2GHz, this SoC
clocks 1.8GHz. The board also has 2GB LPDDR3 RAM, 8GB on board eMMC and Power
VR G6230 GPU supporting OpenGL ES 3.1, OpenGL 3.2, DirectX 10, OpenCL 1.2 EP along
with other standard peripherals required by [96Boards Consumer Edition Spec](https://linaro.co/ce-specification).

Eventhough the SoC is powerful, the vendor support is very limited for this board.
The vendor kernel is based on legacy 3.10 kernel, which is not very recent LTS
kernel. For 96Boards we rely on the board/SoC manufacturer to provide the kernel
support their boards. But since we get limited support from the vendor for this
board, we decided to take up the upstreaming task in our spare time.

# Mainlining Update

The initial board and SoC support was mainlined by Andreas Faerber from OpenSUSE.
He did a great job by pushing the core platform support which is enough to boot
the board into console with mainline kernel.

We then decided to join him in the upstream process and submitted the patches
for the below subsystems:

1. Clock - https://lkml.org/lkml/2018/3/26/496
2. Pinctrl/GPIO - https://lkml.org/lkml/2018/4/4/608
3. SPS - https://lkml.org/lkml/2018/4/11/566

As of now, both Clock and Pinctrl/GPIO subsystems are accepted by the repective
subsystem maintainers and are queued up for 4.18. Still the dts patches are
not yet accepted and we hope that the Actions SoC Platform maintainer Andreas
will merge it when he gets time.

# Conclusion

The upstreaming process has been fairly smooth with the help of the SoC
datasheet and the downstream kernel. We hope to add more subsystem support
in the upcoming days with our limited spare time :)
