---
title: "OpenGLES 3 Demo on the Rock960 running Panfrost drivers"
author: Sahaj Sarup
date: 2020-05-27 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/kmscube.jpg
    name: kmscube.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey970, Linaro, Linux, arm64, protein folding, aerocore2
---

Hi all,

Just a quick blog showing OpenGLES 3 applications now running on the Rock960 using the Panfrost GPU drivers.

**A Quick Recap on Panfrost:**

[Panfrost](https://panfrost.freedesktop.org/) is a free and open source driver for Mali Midgard and Bifrost GPUs.

The driver is capable of running a few demos and has been upstream to Mesa & Linux (currently in linux-next). It has been tested on Rockchip RK3288/R3399, and Amlogic S912 with the Arm Mali-T764, Arm Mali-T864, and Arm Mali-T820MP3 GPUs respectively.

For more details you can look at [one of my previous blog](https://www.96boards.org/blog/panfrost-rock960/)


**A Status Update on Panfrost's Accessability**

As of now, many Linux distributions like Fedora, Arch etc already build and use Panfrost based mesa drivers for compatible GPUs, provided that the SBC's device-tree has it enabled upstream.


**GLES 3 Demo: SuperTuxKart**

{% include media.html media_url=" https://youtu.be/1w7rboTZmvw" %}