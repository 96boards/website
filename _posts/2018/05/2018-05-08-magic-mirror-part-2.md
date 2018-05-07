---
title: Magic Mirror Part 2
author: Sahaj Sarup
date: 2018-05-08 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/mirror-feature.jpg
    name: mirror-feature.jpg
    thumb:  mirror-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, hiKey, MRAA, GPIO, I2C, UART, qt5
---

# Magic-Mirror Part 2

The magic-mirror or as many would call it “smart-mirror” is a simple concept of using an bright screen running a Black and White (!Grey-scale) UI behind a translucent mirror to give an effect of a “futuristic” digital mirror of sorts.

**[Check out Part 1](https://www.96boards.org/blog/magic-mirror-part-1/)**

### What's improved over Revision 1:
- **Gesture Sensing using flick 3D:** The [Flick 3D](https://www.96boards.org/blog/flick3d/) gesture sensing board is used that to "Swipe" between different Mirror-Faces.
- **PIR Sensor:** A PIR sensor is used to detect motion, or lack there of, to turn the screen on or off.
- **Actual Magic Mirror:** In Part-1, I hadn't installed the actual mirror, this time I ended up making one using some acrylic sheet and a two way mirror sheet.

### Here is a quick demo of what we end up with:

{% include media.html media_url="https://youtu.be/Dk_QRbD0xl4" %}

Check out the Source: [magic-mirror](https://github.com/96boards-projects/magic-mirror)
