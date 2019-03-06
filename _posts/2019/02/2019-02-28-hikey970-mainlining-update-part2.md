---
title: HiKey970 Mainlining Update - Part 2
author: Manivannan Sadhasivam
date: 2019-02-28 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/hikey970.png
    name: hikey970.png
categories: blog
series: HiKey970 Mainlining Update
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, HiKey, HiKey970, SoC, Mainlining, Reset, UFS, SD, MMC, WiFi, Bluetooth, SDIO, Upstreaming, AI, NPU
---

# Introduction

Hello and Welcome to the blog on "HiKey970 Mainlining Update - Part 2". This
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

### Reset Controller support

Once the initial SoC and board support patches are merged mainline, I started
working on the Reset controller support. Reset controller in HI3670 SoC is
exposed under the clock controller register mapping. So, we need to reuse the
clock register base, which is done using
[System Controller
(Syscon)](https://github.com/torvalds/linux/blob/master/Documentation/devicetree/bindings/mfd/syscon.txt)
node. Since the HI3670 SoC is architecturally same as HI3660 SoC, we can reuse
the same reset controller driver. So, I added a new compatible for the HI3670
SoC and submitted the first version of the patchset.

But I got a comment from the reset maintainer to use the DT fallback approach
instead of creating a new compatible which does nothing. For those who don't
know what DT compatible fallback approach, it is nothing but adding a dummy DT
compatible to the node and adding a second compatible. So if the first
compatible driver is not found, the node (device) will bound to the driver with
second compatible. This way, we can avoid adding dummy compatibles to the
driver. By incorporating his review comment, I posted the second version of the
patchset which got Acked by the maintainer.

Link to Patchset: https://lkml.org/lkml/2019/2/15/10

### UFS Controller support

Next, I targeted the [Universal Flash Storage
(UFS)](https://en.wikipedia.org/wiki/Universal_Flash_Storage) controller for
booting a distro from a non-volatile memory. As like reset controller, the UFS
controller is almost same with the HI3660 SoC, but with a subtle difference in
the PHY layer used. HI3670 SoC uses the 10nm PHY. So, with the modifications
required to handle the 10nm PHY, I submitted the UFS patchset to the mailing
list. It took a while for getting a maintainer to review this patchset since the
original UFS maintainer vanished. Finally, the driver and bindings patches are
accepted by the maintainer following the Ack from HiSi dev.

Link to Patchset: https://patchwork.ozlabs.org/cover/1020952/

### SD and WiFi support

Finally, I decided to add the SD card and WiFi support. This required me to add
the Designware MMC controller support for this SoC. As like the former
subsystems, this was also same as that of HI3660 SoC. Hence, I just added the
required DT nodes with DT compatible fallback approach and submitted to the
mailing list. For getting the WiFi to work, one has to place the TI connectivity
firmware to `/lib/firmware`.

Link to Patchset: https://lkml.org/lkml/2019/2/28/888

# Conclusion

At the end, we have the HiKey970 board booting a distro with mainline linux
kernel from UFS or SD card with WiFi :-) Still there are plenty of features to
be added in order to get a fully functional board support in mainline. So stay
tuned for the updates and happy hacking!
