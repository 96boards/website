---
author: davidm
comments: false
date: 2015-10-15 10:17:06+00:00
layout: post
link: http://www.96boards.org/blog/the-beginning-of-96boards/
slug: the-beginning-of-96boards
title: The beginning of 96Boards
wordpress_id: 8724
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DragonBoard
- Freedreno
- HiKey
- Linux
- Open Embedded
- Windows 10
---

Something big in the world changed for me in February of this year when [Linaro](http://www.linaro.org/news/linaro-announces-96boards-initiative-accelerate-arm-software-development/) published the [96Boards Consumer Edition (CE) Specification](https://www.96boards.org/products/ce/). A standard board design that will allow different SoC vendors and hardware manufacturers to build low-cost boards to the same electrical, pinout and physical format. It’s designed to allow interoperability of mezzanine products (daughter boards that connect to a 96Boards CE/EE edition board) between different boards. YEA, it’s been a very long time coming.

For years I’ve talked with various ARM SoC manufacturers about building low-cost, more standardized development boards that were completely supported upstream in Linux, with little to no success. TI did build the Beagle and Panda board series of boards (I can’t take credit for those) and other vendors built other boards at various price points - all had different degrees of upstream support. A team of guys designed the Raspberry PI, a super-cool, little 32-bit board (which I also can’t take credit for) that set a new standard for low-cost computing power. It has since gone through several designs which have kept to the low cost standard, but are not really upwardly compatible with themselves and certainly don’t have consistently great upstream linux support.

Today, some months after the announcement of the 96Boards CE standard we have two boards available with several in the pipeline. They both make use of 64-bit ARM SoC’s, one from [HiSilicon](https://www.96boards.org/products/ce/hikey/) and the other from [Qualcomm](https://www.96boards.org/products/ce/dragonboard410c/). One is a quad-core design , while the other is an octa-core (!) and the price to feature set is stunning (at least to me). People are designing mezzanine products that bring out serial ports, add Arduino boards to the power of the already awesome set of boards. Is it perfect? No, because it’s taking time to get code upstream, but it’s getting closer slowly. One of the boards even has a GPU that uses the Freedreno open source driver. But that is a story for a different blog entry. It is not a requirement that the SoC be a 64-bit system, in fact one of the boards in the pipeline is based on a 32-bit SoC. With the 96Boards CE Boards you should find a choice of platforms that, with a bit of luck, will offer at least one board to fit your needs. :-D Will all boards be fully binary blob free? No, not likely given today’s state of the art on GPU’s and some other chipsets, but you will have a choice of boards and you can select what you need based on what is important to you.

What is most stunning to me is that you can get a Linux desktop image (my personal favorite), or an Android AOSP image for both of the available boards and, on one of the boards, Microsoft has committed to providing support for Windows 10. Now I’m a Linux Open Source guy but to see a proprietary vendor get excited about the 96Boards CE specification is exciting even if it’s not open source! If all that does not suit you, you could spin your own image with OpenEmbedded (OE), which might take some work, but hey, it’s open source, you can do it :)

In future posts, I’ll be writing more about the [HiKey](https://www.96boards.org/products/ce/hikey/), the [DragonBoard 410c](https://www.96boards.org/products/ce/dragonboard410c/), other boards as they come out and use of the boards for things like programming a GPIO library to standardize I/O between 96Boards and why that’s needed. I’ll also be writing about [mezzanine boards](https://www.96boards.org/products/mezzanine/) as I get to try them. I can’t wait,... this is going to be fun.
