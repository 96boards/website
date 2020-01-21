---
title: Rock960 Mainlining Update - Part 1
author: Manivannan Sadhasivam
date: 2018-09-28 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/rock960_front.jpg
    name: rock960_front.jpg
    thumb: rock960_thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Rockchip, RK3399, Rock960, Ficus, Vamrs, U-Boot, SoC, Enterprise, Mainlining, Devicetree
---

# Introduction

After a busy [Linaro Connect YVR](https://connect.linaro.org/resources/yvr18/),
now it is the time to provide some update on my recent work towards upstreaming
the [Rock960](https://www.96boards.org/product/rock960/) board from
[Vamrs Limited](http://vamrs.com/). This is the 4th board for me to do the
upstreaming activity but this one lies close to my heart. To know the reason,
please read below ;-)

# Rock960 - Why so much love?

We at 96Boards treat all of our boards equally. But the board which gets
more vendor support seems to be popular all the time. And this Rock960 is
one among them. Before going further, let me give a short introduction to
this board. Rock960 is a Consumer Edition board based on the Rockchip's popular
RK3399 (Armv8 dual-core Cortex-A72 and quad-core Cortex-A53) SoC. Even though
the board complies to the 96Boards CE standard, it has some notable features
like M.2 PCI-E (Key M) connector, External Debug port, Type C OTG port etc...

More love towards Rock960 comes from the fact that the SoC is well supported
in most of the OpenSource projects such as [Arm Trusted Firmware](https://github.com/ARM-software/arm-trusted-firmware), [U-Boot](http://git.denx.de/?p=u-boot.git;a=tree), Linux
Kernel (https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git),
[Yocto](https://www.yoctoproject.org/) etc... This makes the life easy
for us to support/promote the board. Also, the board vendor **Vamrs** has put
in a lot of efforts to provide the board documentation, user guides, and all bits
and pieces necessary to get started with the board, which is very commendable
in my opinion.

So, the above factors make the board more popular among the community and we
are so happy to see that :)

# Mainlining Update

Since I said that the SoC is already well supported in OS projects, my focus
was only on getting the board support merged. So, I started with Linux kernel
first. While looking into the existing supported boards based on RK3399, I came
to know that the [Ficus](https://www.96boards.org/documentation/enterprise/ficus/)
96Boards Enterprise board was already upstreamed by folks from Collabora.

Since both Ficus and Rock960 comes from Vamrs, they share the common design
and are more similar with base functionalities. So, after discussing with the
Ficus board maintainer, I decided to create a common devicetree include for the
Rock960 family and individual board DTS files for Rock960 and Ficus.

It should be noted that in Linux kernel and U-boot, we only need to add a
devicetree file for adding a board support. This is the major benefit of using
devicetree for hardware representation. So, after sorting out the common nodes,
I pushed out the below patches for adding Rock960 board and adapting Ficus to
the common Rock960 board family.

https://lore.kernel.org/patchwork/cover/985787/

The patchset received some quick response from the maintainer and after 3
iterations, all patches got applied to the Rockchip maintainer's tree for 4.20.
This was quick :)

Then comes the U-Boot support. Here Ficus board support patches were just
submitted and not yet merged into the tree. So after discussion, I took the
patches and adapted it based on the common Rock960 family as per Linux kernel.
Finally, I submitted those patches and it is in 4th iteration now.

https://lists.denx.de/pipermail/u-boot/2018-September/341417.html

I should mention that the U-Boot support was somewhat challenging when compared
to Linux kernel. The reason was, U-Boot has the DRAM initialization part when
built as SPL and that varies between Rock960 and Ficus.

Rock960 has the LPDDR3 memory while Ficus has the DDR3 memory. Luckily for
Ficus, the DRAM configuration was already present in u-boot, so we used it. But
for Rock960, I have to add the DRAM configuration and that took some time.

# Conclusion

Finally, we were able to upstream Rock960 in Linux kernel and U-Boot is also
so close. Here we leveraged the SoC support in both projects and that really
helped us... Kudos to Rockchip folks :D

But I should thank the timely help from below people in the community for making
the upstream activity smooth and quick.

1. Ezequiel Garcia - Ficus board maintainer
2. Peter Robinson - Redhat Fellow
3. Heiko Stubner - Rockchip maintainer in Linux Kernel

Soon we should be able to see Fedora #29 booting with the mainline kernel/u-boot
on Rock960. Stay tuned for next part :)
