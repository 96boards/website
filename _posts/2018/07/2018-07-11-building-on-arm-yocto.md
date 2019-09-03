---
title: Building on Arm - OpenEmbedded Edition
author: Sahaj Sarup
date: 2018-07-11 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/yocto.jpg
    name: yocto.jpg
    thumb: yocto-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, hikey, hikey970, yocto, openembedded, morty, oe
---

# Building on Arm, for Arm: OpenEmbedded Edition

With how fast Arm processors have gotten in the past few years, compiling the Linux Kernel natively on Arm is more than just bearable.

But what about an ENTIRE operating system, complete with boot-loader, init and user-space (GUI optional)?

My goal was to see what OS I can build, in a reasonable amount of time, using an Arm based SBC, so i can't just rent a 128 thread Arm server...

**So what are my choices** (considering it has a decent build system with its own toolchain):
1. AOSP (N): Although I am very much interested in this, but looks like its not ready yet, the prebuilt folder seems to house just the x86 compiler and cross-compiler.
2. RedoxOS (N): An experimental OS based on 'rust', seems to be adding support for Arm, but still at a [very early stage](https://www.redox-os.org/rsoc/#aarch64).
3. OpenEmbedded (Y): OE has a neat trick, it ALWAYS cross-compiles even if its building for x86 on an x86 machine, this makes it easier to build natively on Arm, and that's why its already supported.

**The hardware requirements:** To have the Poky distro built in a considerable amount of time.
1. CPU: Octa-core: 2Ghz on at least 4 cores
2. RAM:
  - GUI: > 8GB
  - CLI-only: > 4GB
3. Storage: >30GB

So from in my collection of Arm SBC's, one matched the requirement... The [Hikey970](/product/hikey970/)

It has an octa-core CPU that does more than 2GHz, 6GB of RAM, so I can comfortably have a CLI-only build and 64GB of UFS Storage.

**A couple Caveats:**
1. Poky distro seems to have an odd issue with building on aarch64, but a simple workaround is to remove: ```INHERIT += "uninative"``` from: ```meta-poky/conf/distro/poky.conf```
> [What is uninative?](https://www.yoctoproject.org/docs/2.5/ref-manual/ref-manual.html#ref-classes-uninative)

2. Under continuous heavy load, Hikey970 gets HOT... add a small cooling fan.

**The Result:**

Surprisingly, the Hikey970 did pull off a core-image-minimal build successfully and only took as long as one of the quicker crock-pot recipes. Nice!


**Whats next?**

[*literally builds an army of Arm SBC's*](https://www.instagram.com/p/Bk_CNI_AQ6U/?hl=en&taken-by=ric_96)
