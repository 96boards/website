---
title: Sophon Edge Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2019-02-04 01:01:54+00:00
image:
    path: /assets/images/blog/sophon.png
    name: sophon.png
categories: blog
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, Bitmain, BM1880, Edge, Mining, ASIC, Mainlining, Devicetree, Serial, IRQCHIP, Timer, Clocksource, Interrupts, Sophon
---

# Introduction

Hello and Welcome to the blog on "Sophon Edge Mainlining Update - Part 1". This
blog will summarise the recent mainlining efforts for [Sophon Edge board](https://www.96boards.org/product/sophon-edge/) in Linux kernel.

# Sophon Edge Board

Sophon Edge board is one of the 96Boards Consumer Edition and AI platform.
This board is designed for bringing powerful Deep Learning capability to
various types of applications through its quick prototype development.
Sophon Edge Developer Board is powered by a BM1880 SoC, equipped with tailored
TPU (Tensor Processing Unit) for deploying Neural networks. While looking
at the board, it seems very obvious that it doesn't follow some of the 96Boards
specification like no High speed expansion header, no HDMI port etc... But
there is an obvious reason for it to be published as the 96Boards.

The reason is the heterogeneous nature of the SoC. BM1880 SoC consists of
following processing Units:

* Dual ARM Cortex A53
* MCU grade RISC-V core
* Tensor Processing Unit

This will allow developers to leverage the processing capability of the
multiple processing units thus increasing the performance. Because of this
reason, this board got the waiver and released as the 96Boards compatible
board.

# Mainlining Update

We decided to upstream the Linux kernel support for this board focussing only
the Dual ARM cores. One of commandable feature of this SoC is the usage of
the standard IPs like Synopsys Designware Serial IP, Synopsys Designware GPIO IP,
Synopsys Designware DMA IP and so on. These IPs are already well supported in
mainline thus require minimal work to upstream this SoC platform.

As a first step, I added a minimal devicetree for this board which would
just allow the board to boot into initramfs console with both CPUs. There
was no driver support needed since I reused the existing drivers. Once the
patchset was ready, I tested and submitted it to LKML.

https://lkml.org/lkml/2019/1/25/909

It was reviewed quickly and got the approval.

# Conclusion

Now the next step is to send a Pull Request to ARM SoC maintainers to add this
platform support. This could end up being in the mainline tree soon. This will
be followed by the peripheral support to make the board fully functional in
mainline. Stay tuned for updates!
