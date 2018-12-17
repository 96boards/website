---
title: Automated Indoor Irrigation
author: Sahaj Sarup
date: 2018-12-10 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/indoor.png
    name: indoor.png
    thumb: indoor-thumb.png
categories: blog
tags: 64-bit, 96Boards, Cortex-M, ARM64, irrigation, python, Bot, script, mraa, automation, ADC
---

# The 96Boards Social Media Ticker

**Currently this is what the functionality is:**
- Reads soil moisture content
- Demonstrates use of MCP3004 ADC on LinkSprite Mezzanine
- Controls Water pump when the soil starts to run dry.
- Displays Status on I2C 16x2 LCD Character Display

**Notable Python and External Libraries and Programs**
- [MRAA:](https://mraa.io) Low Level Skeleton Library for I/O Communication on GNU/Linux platforms. This is the recommended 96Boards I/O library.
- [UPM:](https://upm.mraa.io) UPM is a sensor library with high-level APIs that make it easy to connect and use sensors and actuators in IoT solutions. It is based on MRAA.

**Source**
The source for this project is available at: [https://github.com/96boards-projects/automated-indoor-irrigation](https://github.com/96boards-projects/automated-indoor-irrigation)


# Video

{% include media.html media_url="https://youtu.be/Zm9nkoy7KIo" %}
