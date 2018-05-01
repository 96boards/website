---
title: Gigabit NAS using Poplar
author: Sahaj Sarup
date: 2018-01-10 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/poplar-gigabit-nas.jpg
    name: poplar-gigabit-nas.jpg
    thumb: poplar-gigabit-nas-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Enterprise Edition, Poplar, Linaro, Linux, gigabit, nas, arm64, aarch64
---

# Gigabit Network Attached Storage using Poplar

In the last episode of OpenHours, Episode #85, I demonstrated my NAS setup using the Poplar Enterprise Edition Board. Poplar, at the moment, is the only 96Boards that has USB3.0 as well as Gigabit LAN On-Board as well as an option to expand the number of Hard Drives using PCIE. This makes it extremely suitable for a high speed Gigabit NAS.

You can take a look at the OpenHours Episode on YouTube:

{% include media.html media_url="https://www.youtube.com/watch?v=LZDeWVo_GW0" %}

Now, the OpenHours demo did have some hiccups due to the old age of the Hard Drive, but after swapping it for a new WD RED NAS Drive, these are the final results:
- **Windows:** 120MB/s Down and 100MB/s Up
- **Linux:** 50MB/s Down and 30MB/s Up

As you can notice, there is a significant speed drop in Linux, that is mostly due to some overhead caused by samba as well as lack of tweaking, this can be further improved by using protocols like NFS or SSHFS that are more native to a Linux environment.

[**You can follow this guide to setup a Gigabit NAS using Poplar**](https://github.com/96boards/documentation/blob/master/enterprise/poplar/guides/gigabit-nas.md)
