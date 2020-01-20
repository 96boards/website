---
title: OrangePi-i96 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2018-11-28 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/i96-front.jpg
    name: i96-front.jpg
    thumb: i96-thumb.jpg
categories: blog
tags: 32-bit, 96Boards, ARM, ARMv7, IoT Edition, Kernel, Linux, RDA, RDA8810PL, UniSoC, OrangePi, OrangePi-i96,  Mainlining, Devicetree, Serial, IRQCHIP, Timer, Clocksource, Interrupts
---

# Introduction

Hello and Welcome to the blog on "OrangePi-i96 Mainlining Update - Part 1". This
blog will summarise the recent mainlining efforts for [OrangePi-i96 board](https://www.96boards.org/product/orangepi-i96/) in Linux kernel and the reason behind it.

# OrangePi-i96 - Why no love?

We at 96Boards treat all of our boards equally. But the board which gets
more vendor support seems to be popular all the time. One prime example is
the [Dragonboard410c](https://www.96boards.org/product/dragonboard410c/), a
Consumer edition board from Qualcomm. But this OrangePi-i96 board falls into
the category of vendor ignored boards. As soon as the board launched, there
was a bit of hype around it but the lack of vendor support made it fall under
the shadow quickly. But nevertheless, this board has got potential as it offers
plenty of interfaces in a small form factor as per 96Boards [IoT Edition Specification](https://linaro.co/ie-specification).

Coming to the board features, it has RDA8810PL SoC from RDA Microelectronics (now Unisoc),
Vivante GC860 3D GPU, 256MB LPDDR2 SDRAM, 500MB NAND Flash, Wifi, BT, 2x USB2.0 ports,
MIPI CSI2 connector and much more.

# Mainlining Update

Since I'm doing the upstreaming activities in my spare time for other 96Boards
such as [Bubblegum-96](https://www.96boards.org/product/bubblegum-96/), [MediaTek X20](https://www.96boards.org/product/mediatek-x20/), and [HiKey970](https://www.96boards.org/product/hikey970/),
I decided to hunt this one also. A quick look at the current upstream support
for RDA SoCs revealed that there is none existed in both Linux kernel and U-Boot.
But, there was a patch series submitted by Andreas Farber from OpenSUSE which
adds support for RDA8810PL SoC and OrangePi 2G IoT, i96 boards. That patch series
was forgotten in the early stage itself due to the lack of IRQCHIP support.

So, I reached out to Andreas to ask about the status of that patchset. He told
me that he doesn't have any time to work on that and he is okay for me to take it up
if I desire. And I said "Yes, of course!" and started the work from there on. It took
me couple of weekends to add the IRQCHIP driver and a proper serial driver before
submitting the initial patchset.

https://lkml.org/lkml/2018/11/19/813

As expected, various subsystem maintainers quickly reviewed the series and provided
feedbacks/suggestions. I just worked on it too quickly and posted the second
version within a day, hoping to keep the momentum (yes, we work till late night).

https://lkml.org/lkml/2018/11/21/285

But that made one of the maintainers to be not happy since I posted two revisions in
3 days. He specifically asked me to leave a week gap between revisions as that
may occupy his bandwidth and hinder reviewing other people's patches. So,
taking his words into account I left one week time before posting the third
revision of the series.

https://lore.kernel.org/patchwork/cover/1018219/

# Conclusion

Now, it is up to the maintainers to do the final set of review on the series (hopefully)
and provide feedback. And this makes this board one of my first Armv7 board
targetting upstream ;-) Will be delighted if this makes its way into the mainline
kernel. Soon there will be more work towards enabling other subsystems in near
future. Keep watching 96Boards social media channels for further updates.
