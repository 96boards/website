---
author: Manivannan Sadhasivam
comments: true
date: 2017-07-19 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/device-tree-overlay-on-96Boards/
slug: device-tree-overlay-on-96Boards
featured_image: devicetree.png
thumbnail_image: devicetree-thumb.png
title: Device Tree Overlay on 96Boards
wordpress_id: 20365
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Device Tree
- DT Overlay
- Configfs
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- HiKey
- I Squared C
- I2C
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
---

# **Introduction**

Ever wondered how to modify the device trees on 96Boards dynamically (i.e., without rebooting)? Isn’t it nice to
have this cool feature on 96Boards to allow userspace modification to device tree in running kernel?
This blogpost addresses all of the above mentioned issues!

# **Device tree in Linux kernel**

[Device tree](http://elinux.org/Device_Tree_Reference) is the most commonly used tool in Linux world for describing hardware. There are times when the
entire hardware description was hard coded within the kernel itself. That actually worked well for x86 based systems
but not for ARM based systems. In ARM even though the architecture is same between processors, they might be
implementing their own set of peripherals. So, hard coding all of the board specific information caused lot of
overhead and finally the developers switched to Device tree solution which was used by PowerPC.

In Layman terms, a device tree is a structure **(dts/dtsi)** which resembles tree for a platform. It has parent
child relationship between its nodes. Because of its simplicity (not always :P) describing the hardware became
easy and more importantly it can be built outside of the linux kernel using device tree compiler **(dtc)**.
So, the bootloader needs to load kernel image and device tree binary **(dtbo)** into SRAM and pass the dtbo address to kernel.

Then kernel can parse the device tree binary to identify the machine type and all of its peripherals etc…
Device tree finds its usage for describing about the devices which couldn’t be hot plugged like USB, PCI etc…

The specification for device tree is maintained by [Device tree Org](https://www.devicetree.org/) in which Linaro
is also one of the member.

# **Device tree Overlay**

Having said the use of device tree, one question will pop up in our mind. Can we modify device tree without
rebooting the systems? Yes we can :) That mechanism is called Device tree Overlays. This cool feature would
allow us to describe the hardware present on add-on boards (Mezzanine in 96Boards) which could be stacked on
top of the SBC any time.

But why do we need that? Can’t we specify the Mezzanine information on primary device tree itself? We can!
But that makes no sense. Because, we are telling the kernel that so and so hardware has been attached to the
system without actually having them.

So, the ideal scenario is to inform the kernel about hardware when the Mezzanine has been attached. This is
the point where device tree overlay comes into picture. It allows specifying the device tree nodes for devices
which is going to get attached into system. The resulting binary (dtbo) could be inserted into the kernel.

# **Inserting Overlays into Kernel**

The support for device tree overlay was already merged into kernel. But there is no mechanism available in
the mainline kernel to load device tree from userspace. **Pantelis Antoniou**, proposed a way of inserting device
overlays using configfs dynamically. But due to some security concerns it was not manlined.

Eventhough, his work has been utilized by most of the popular SBC’s available in market, for instance *Capemgr* in BBB.  
We have followed the same approach and patched a custom kernel for this feature.

All of the instructions were documented in 96Boards/documentation git repository
[here](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Guides/dt-overlays.md). The changes were included in **configs_overlay** branch of my custom kernel tree. For making it compatible with
the release branch, you need to merge those changes which is well documented in those instrucitons. For making the
life easier for developers, example overlays were also provided. User can just modify them according to their needs.

As of now, instruction is only provided for DragonBoard410c, but extending this to all of our 96Boards is not a
big deal though.

# **Conclusion**

Well, I clearly mentioned that the above method is not our way forward, since this is not a mainline feature.
There are some other ways to do it properly. One of which is loading the overlays via Uboot. Since, there has
been a Uboot port already available for Dragonboard410c and overlay support is mainlined, it should be straightforward.

So, that’s the end of this blogpost about Device tree Overlays on 96Boards. Hope you found it useful and do
let us know your valuable feedback in comments.
