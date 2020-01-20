---
title: 96Boards Upstreaming Summary
author: Manivannan Sadhasivam
date: 2019-07-15 01:01:54+00:00
image:
    path: /assets/images/blog/96boards-logo.png
    name: 96boards-logo.png
categories: blog
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, Zephyr, STMicroelectronics, STM32MP1, U-Boot, TF-A, Mainlining, Devicetree, Pinctrl, GPIO, Upstream, Avenger96, ARMv7, Cortex-M4
---

# Introduction

Hello and Welcome to the blog on "96Boards Upstreaming Summary". This
blog will summarise the 96Boards upstreaming efforts for the first half of 2019 in Linux kernel, U-Boot, Trusted Firmware
Zephyr RTOS, and MRAA.

# Why 96Boards is involved in upstreaming activities?

Those who are following my recent blogs will definitely have this question in their mind.
96Boards doing the upstreaming support for our boards is definitely not the goal
of the 96Boards project itself. Then why we started doing it in recent times? The reason
is simple, we want our users to run latest and greatest software on our boards, which
can only be achieved when all of the softwares are upstreamed to respective opensource
projects (Yeah, just rebasing to latest release won't work well).

Then the next question which might arise is, "Can you guys do the upstream support for
all 96Boards?" Definitely NO! As said earlier, this is not our job at all. As expressed
multiple times, we rely on the partners to take care of the upstream support for their
boards. 96Boards doesn't have resources to take of the upstream support for all of our
boards which partners can't handle. But this stance created inconvenience for the
community users since no one is doing the upstream support for the boards, also the vendors
don't care about updating the kernel regularly and as a result, most of our boards were
running age old kernels and bootloaders.

Then we had a big discussion inside the team on how to tackle this scenario. At the end
of the discussion, we came to a conclusion that 96Boards will provide basic upstream
support for the boards which are more attractive to the users.

Till then, we have been involved heavily in the upstreaming activities for the selected
96Boards and the situation has improved a lot! Following are some of the achievements
we had in the upstreaming space for the first half of 2019.

# Linux kernel

Following are the functionalities we have upstreamed (also in the process) to Linux
kernel for the first half of 2019.

## Hikey970

* Upstreamed UFS controller support
* Upstreamed MMC controller support
* Upstreamed WiFi and BT support
* Upstreamed Reset controller support

## Dragonboard410c

* Fixed the OV5645 I2C address issue
* Standardized LED labels

## Bubblegum96

* Upstreamed Reset controller support
* Submitted patches for adding MMC controller support (Under review)
* Submitted patches for adding PMIC ATC2601 (Under review)

## OrangePi i96

* Upstreamed initial RDA Micro RDA8810PL SoC and OrangePi i96 board support

## Sophon Edge

* Upstreamed initial Bitmain BM1880 SoC and Sophon Edge board support
* Upstreamed GPIO controller support
* Upstreamed Pinctrl support
* Submitted patches for adding Common clock support

## Chameleon96

* Upstreamed initial board support

## Meerkat96

* Upstreamed initial board support

## Oxalis

* Upstreamed initial board support

## Rock960

* Upstreamed WiFi and BT support

## Ficus

* Upstreamed WiFi and BT support

## MediaTek X20

* Upstreamed Pinctrl support

## Avenger96

* Upstreamed initial board support

## IMX290 CMOS Image Sensor

* Submitted patches for adding V4L2/Media driver

# U-Boot

Following are the functionalities we have upstreamed (also in the process) to U-Boot
for the first half of 2019.

## HiKey

* Converted HI6220 MMC driver to driver model
* Modified the board support to use eMMC for storing environment variables

## Avenger96

* Upstreamed initial board support

# ARM Trusted Firmware-A

Following are the functionalities we have upstreamed to TF-A for the first half of 2019.

## Avenger96

* Upstreamed initial board support

# Zephyr RTOS

Following are the functionalities we have upstreamed to Zephyr project for the first half of 2019.

## STM32 Sensor Mezzanine

* Upstreamed on-board PWM support
* Upstreamed on-board DMIC support
* STM32 DMA driver bug fix

## WisTrio

* Upstreamed initial board support

## Avenger96

* Upstreamed initial board support

## Meerkat96

* Upstreamed initial board support

# MRAA

Following are the functionalities we have upstreamed to MRAA for the first half of 2019.

## Rock960

* Added Chardev support

## Core MRAA

* Added a new GPIO API for using line names in kernel

# Conclusion

So this ends the quick summary of the upstreaming efforts of the 96Boards team for
the first half of 2019. As you can see, we provided basic board support for the boards
which are creating interests among the community with limited resources. We will continue
to go with the same approach for the later half the year also.

In the next blog, I'll try to predict what we are trying to achieve in second half of 2019.
