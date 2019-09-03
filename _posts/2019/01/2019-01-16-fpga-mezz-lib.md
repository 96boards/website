---
title: WIP FPGA Mezzanine GPIO Library
author: Sahaj Sarup
date: 2019-01-16 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/fpga-mezz.jpg
    name: fpga-mezz.jpg
    thumb: fpga-mezz-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# The FPGA Mezzanine

[Shiratech FPGA Mezzanine](/documentation/mezzanine/shiratech-fpga/) is a 96Boards compatible mezzanine board accommodating Intel MAX10 FPGA. It is 96Boards compatible board, both consumer addition(CE) and enterprise edition (EE). The mezzanine has Arduino, Raspberry PI and Grove connectors and can serve as HW bridge between those development platforms to 96Boards.

For today's blog post we are specifically interested in the Arduino headers for today's blog.

## The Problem: Everything is controlled over I2C

While my intuition before the release of Firmware v1.0 was that all the i/o pins will just be passed through to the lowspeed header without much logic running on the FPGA itself, that didn't turn out to be the case, at least for the most part.

In order to maintain compatibility with other mezzanines that might be stacked beneath the FPGA Mezzanine all GPIO pins are controlled via I2C commands.

The communication pins such as UART, SPI and I2C can however be configured as passed through and be directly connected to the lowspeed header.

## The Solution: A Library to do the heavy lifting

So the obvious solution at this point is to have a dedicated library to do all the heavy lifting.
The library is still largely a work in progress but the arduino header support is done.
The current feature set is:
- Toggle multifunction pins like i2c, spi, uart as gpio or pass through pins.
- Toggle GPIO as input and output.
- Toggle Output GPIO as high or low.
- Read Input GPIO values.
- A test function to test i2c communication with the mezzanine
- Check firmware revision.

The WIP library is hosted at my repository for now and can be downloaded using.
`git clone https://github.com/ric96/fpga_mezz_lib`

And a WIP documentation [here](https://github.com/ric96/documentation/blob/guide-update/mezzanine/shiratech-fpga/guides/fpga-mezzanine-library.md).

The following feature sets are planned for future revisions:
- RaspberryPi header
- LCD Shield specific functions
- PWM and ADC support if and when the feature gets added to the FPGA Mezzanine.
