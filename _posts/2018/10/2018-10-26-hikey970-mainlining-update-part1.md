---
title: HiKey970 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2018-10-26 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/hikey970.png
    name: hikey970.png
    thumb: hikey970-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, HiKey, HiKey970, SoC, Mainlining, Clock, Upstreaming, AI, NPU
---

# Introduction

Hello and Welcome to the blog on "HiKey970 Mainlining Update - Part 1". This
blog will summarise the recent mainlining efforts for [HiKey970 board](https://www.96boards.org/product/hikey970/) in Linux kernel.

# HiKey970

HiKey970 is the first 96Boards from the HiKey family to join the 96Boards.ai
initiative. The HiKey970 features the HiSilicon Kirin 970 SoC with HiAI
Architecture and a dedicated NPU. Stacked with LPDDR4X 1866MHz memory, 64GB
UFS 2.1 storage, Bluetooth, WIFI, GPS among many other features, this board
is made for developers, looking maximize accelerated AI capabilities. Since
this board falls under the CE Extended Edition form factor, it offers
interfaces such as Ethernet port, PCIE-Mini connector, PCIE M.2 connector,
on-board UART, CAN port etc...

The Kirin970(Hi3670) SoC is just a superset of Hi3660 SoC with an added AI
processing element.

# Mainlining Update

### Initial SoC and Board Support

In order to fully make use of this high potential board, I started the work
towards upstreaming the SoC and board support in Linux kernel in my spare time.
Initially, I pushed out the basic SoC and board support patches, which got
merged by the HiSilicon platform maintainer! With those patches, the board
can boot into initramfs with a console on the onboard UART(6). One of the
added advantage of this board compared to other 96Boards is that it offers
an onboard UART based on the USB Type-C connector. So developers can make use
of it instead of connecting any other Mezzanines for the console.

Link to Patchset: https://patchwork.kernel.org/cover/10562969/

### Common Clock Support

As a next step, I worked on adding the common clock support for the SoC, based
on the HiSilicon's clock framework. The effort was not much since most of the
underlying clock pieces were abstracted by the HiSilicon's clock framework. So,
I just had to add the Hi3670 SoC specific clock configurations.

After adding that, I pushed out the patches and it got merged for next release
by the common clock maintainer.

Link to Patchset: https://patchwork.kernel.org/cover/10609077/

### Pinctrl/GPIO Support

Since the clock support is in, I decided to hunt down the next basic element
Pinctrl/GPIO support. The Kirin970(Hi3670) SoC integrates ARM's standard IP's
like PL011, PL061 etc... So it becomes very easy to add the peripheral support
since the drivers for those IPs are already present in the Linux kernel.

So I went and added the necessary devicetree bits for making these IPs work.
Along with that, I also added the GPIO line names property for this board for
accessing the GPIOs based on their names.

Link to Patchset: https://lkml.org/lkml/2018/10/23/691

While working on the Pinctrl/GPIO support I encountered the below kernel
warning:

"detected irqchip that is shared with multiple gpiochips: please fix the
driver."

This comes from the PL061 GPIO driver, where the irqchip struct is declared
as static. This makes the irqchip to be shared with all gpiochips and it is
considered to be a bad practice because the irqchip assignment will be
overridden for each gpiochip. In order to fix this issue, I submitted a follow-up patch.

Link to the Patch: https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1791960.html

# Conclusion

This ends up the quick summary of the recent mainlining efforts for [HiKey970 board](https://www.96boards.org/product/hikey970/). There are many items in the pipeline and it just
asks me to sacrifice few weekends for upstreaming ;-) Stay tuned for further
updates on this effort!
