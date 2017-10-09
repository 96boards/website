---
author: Manivannan Sadhasivam
comments: true
date: 2017-10-09 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-5/
slug: path-libmraa-96boards-part-5
featured_image: path-libmraa-96boards-part-2-featured.png
thumbnail_image: path-libmraa-96boards-part-2-featured-thumb.png
title: Our path to libmraa on 96Boards – Part 5
wordpress_id: 
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- intel
- libmraa
- libupm
- Linaro
- Linux
- MediaTek X20
- mraa
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
- UPM
- LED
---

# **Introduction**

Welcome to **Part - 5** of **Our path to libmraa with 96Boards** series. In this part, I am going to give an update of
the recently added **mmap** support for [Dragonboard410c](https://www.96boards.org/product/dragonboard410c/) in [libmraa](https://github.com/intel-iot-devkit/mraa).

# **What is mmap and its need?**

[mmap](https://linux.die.net/man/2/mmap) is a syscall in linux for mapping the virtual address to particular physical address.
This is essential for controlling the memory mapped IO peripherals. There are good reasons to avoid and use mmap in linux. One
particular usage of mmap is to directly control the peripherals without going into the device driver model. This is used predominently
for the below mentioned reasons:

1. Faster access of the peripherals
2. No interface provided to use the functionality.

Basically reason 1 seems to suit most of the time, particularly for simple peripherals such as GPIO. For the mraa library,
GPIO is controlled (till now) using old sysfs interface. This suits well for most of the use cases like turning ON and OFF a
gpio line. But, when it comes to toggle the gpio continuously to generate PWM, sysfs interface will fall back. Because, there
will be cretain delay in accessing the gpio which may cause the PWM waveform to be unstable.

So, the solution is to use mmap for faster access to gpio pins. But I'm not saying that the mmap interface will be lightning fast
to be able to generate PWM at MHz frequency range but will be handy most of the times.

When talking about the delay in accessing GPIO in linux, we have to include context switch delay introduced by the scheduler too.
This cannot be avoided even by using mmap and addressing this issue will be done in another blog post.

# **mmap support in libmraa for Dragonboard410c**

mmap support for Dragonboard410c in libmraa resides in [96Boards source file](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c).
There are 4 API's introduced for adding mmap support:

1. [mraa_db410c_mmap_setup](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c#L130)
2. [mraa_db410c_mmap_write](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c#L102)
3. [mraa_db410c_mmap_read](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c#L116)
4. [mraa_db410c_mmap_unsetup](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c#L88)

> Note: The support has been added for accessing GPIO only.

## **Internal mapping**

According to the **Hardware Register Description** manual for Dragonboard410c, GPIO registers are fixed starting from address
0x01000000. So, mmap call maps the physical address 0x01000000 of size 0x00120004.

For reading or writing to a particular pin, below calculation is used:

```
*(volatile uint32_t*) (mmap_reg + offset + 0x04)
```

# **Conclusion**

We are at the end of this blog post. I hope that this blog post gave much info on mmap and its usage in libmraa. We will
be working more on libmraa in upcoming days. So, stay tuned for further parts. Meanwhile, it'd be
great if someone can benchmark the performance on using regular sysfs support and mmap support in libmraa and share with the
community :-).


