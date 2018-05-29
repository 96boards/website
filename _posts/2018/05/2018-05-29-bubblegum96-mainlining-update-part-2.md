---
title: Bubblegum96 Mainlining Update - Part 2
author: Manivannan Sadhasivam
date: 2018-05-29 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/bubblegum96.png
    name: bubblegum96.png
    thumb: bubblegum96-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Bubblegum96, Actions, S900, SoC, Mainlining, Pinctrl, GPIO, OWL, S900
---

# Introduction

Hello and Welcome to the blog on "Bubblegum96 Mainlining Update - Part 2". This
blog provides the update on the Mainlining efforts from 96Boards team for the
[Bubblegum96 board](https://www.96boards.org/product/bubblegum-96/) in Linux kernel.

# Reason for Mainlining Bubblegum96

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

After merging the separate pinctrl and gpio drivers in the patchseries:
**Add Actions Semi S900 pinctrl and gpio support**, we worked on adding
IRQ support for GPIO driver. During this development, we realised that
the pinctrl and gpio subsystems in OWL SoC's are closely coupled and so
their register sets are. Having a separate pinctrl and gpio drivers will
make the life harder for future development since configuring mux for
individual pins would require to disable GPIO functionality in driver.

There are API's in kernel to do this in other way! i.e., disabling pinctrl
functionality while requesting GPIO (GPIO ---> Pinctrl) but no API's in the
way we wanted (Pinctrl ---> GPIO). So we decided to merge GPIO functionality
into the pinctrl driver and drop the previously merged GPIO driver commits.
Since the patches were still in [linux-next](https://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git/)at that time, Linus Walleij(Pinctrl/GPIO Maintainer) dropped the patches
upon our request comfortably.

Then we submitted a patch series for merging the GPIO functionality into
pinctrl driver.

V1 - https://lkml.org/lkml/2018/5/17/1074

As a part of the review, Christian Lamparter pointed out the **gpio-ranges**
issue in the driver. The issue is, *gpiochip_add_pin_range* function usage
in DT based systems are known to create issues with **gpio-hog** mechanism.
Since, DT based pinctrl subsystem looks to add **gpio-hog** functionality before
populating the GPIO ranges through *gpiochip_add_pin_range* function, it will
result in -EPROBE_DEFER as the pin ranges won't be available at that time.
And since **gpio-hog** gets added in the *gpiochip_add* function, the error
prohibits the board from booting. So he suggested to use **gpio-ranges**
property in DT for specifying the pinctrl/GPIO mapping, which provides the
mapping at the time of adding **gpio-hog**.

Finally, we sent a V2 of the driver incorporating his comments and soon
Linus Walleij applied the patch series followed by Acks from Andy and Rob!

V2 - https://lkml.org/lkml/2018/5/20/5
