---
title: External PCIe GPU on the Oxalis
author: Sahaj Sarup
date: 2019-03-13 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/oxalis-gpu.png
    name: oxalis-gpu.png
    thumb: oxalis-gpu-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# The Oxalis

The [96Boards Oxalis](/product/oxalis/) is a Enterprise Edition board powered by the NXP Layerscape LS1012A SoC.
The main purpose of the SoC and the board itself is for a IoT Edge Gateway device and other similar usecases like NAS which high-speed data transmission might be required.

However, today let's forget what the main purpose of The Oxalis is... And let's plug in a external gaming GPU!!!

# The GPUs

The two GPUs I tested were:
- ATI Radeon HD 4350:
    - Launched in September 2008
    - Linux friendly firmware available in linux-firmware package
- Nvidia GT710:
    - Launched in March 2014
    - Firmware is not linux friendly, needs to be extracted from vendor binary

The ATI Radeon HD4350 has the advantage of working without any firmware related issues due to the driver and device firmware being open and free respectively, this means we can get a console on the display connected to this GPU without much hassle.

The reason behind choosing the Nvidia GT710 was that it was the only GPU I had ever seen running on Arm on the [96Boards DeveloperBox](/product/developerbox/). Part of the reason it works well is that the DeveloperBox as SBBA/SBSA compliant UEFI bios that supports ACPI, and runs qemu to for emulating x86 and running the driver for the Nvidia GPU. And so the GT710 was out of the question for the moment.

# GPU on MiniPCIe

The Oxalis has a single lane mini-PCIe slot at the bottom of the board, so how do you add a standard full size x16 GPU to a mini-PCIe slot?

Like everything else these days, the answerer lies within BlockChain :p

Jokes aside, the GPU crypto mining rage brought with it many creative ways to add as many GPU's as possible in as little space as possible. And one of the products was a mini-PCIe to x16 dongle with external power pins which fits perfectly for our use case.

[Something like this.](https://www.newegg.com/Product/Product.aspx?Item=17Z-0007-003E6)

# The drivers and woes

So here is the current status:

A Linux/GNU setup requires 3 main drivers to get a GPU fully functional:
- 1: Kernel DRM Driver:
    - DRM aka Direct Rendering Manager  exposes an API that user-space programs can use to send commands and data to the GPU, and to perform operations such as configuring the mode setting of the display
    - This driver is responsible for creating the `/dev/fb0` framebuffer node and the `/dev/card0` KMS node.
    - Along with fbdev, this driver is responsible for getting the console up on the display, which worked well for us.
- 2: XOrg xf86-video-ati Driver:
    - Xorg driver for ATI/AMD Radeon GPUs responsible for getting X up and running for GUI.
    - We were able to get xterm running without any issues with this diver.
- 3: Mesa:
    - Mesa is the open-source 3D driver for Linux, it exposes graphics and compute APIs like OpenGL and OpenCL to 3D applications like games and renders them on the GPU.
    - This didn't work for us.

So although 3D rendering isn't working for us at the moment, I am pretty excited to have gotten this far and get Xorg up and running.

This is something I am definitely looking to come back to on a future date, but for now I'll leave you with a segment of OpenHours where this was demoed.

# Demoed on OpenHours

{% include media.html media_url="https://youtu.be/rPHahahbheo?t=772" %}
