---
title: Waveshare SPI 2.9inch E-ink RaspberryPi HAT - Shiratech FFPGA Mezzanine and RPi HAts Pt. 2 
author: Sahaj Sarup
date: 2019-05-13 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/eink.jpg
    name: eink.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

A bit more complex.

In my [last blog](https://www.96boards.org/blog/max7219-shiratech-fpga/) I talked about running a MAX7219 LED matrix HAT using the Shiratech FPGA Mezzanine. In this one we'll talk about using a SPI based E-Ink display.

# [Waveshare E-Ink HAT](https://www.waveshare.com/2.9inch-e-paper-module.htm)

This E-Ink display module is 2.9inch with a 296x128 resolution and embedded controller that communicats over SPI interface and supports partial refresh.
Due to the advantages like ultra low power consumption, wide viewing angle, clear display without electricity, it is an ideal choice for applications such as shelf label, industrial instrument, and so on.

**Features**

- Operating voltage: 3.3V/5V
- Interface: 3-wire SPI, 4-wire SPI
- Outline dimension: 89.5mm × 38mm
- Display size: 66.89mm × 29.05mm
- Dot pitch: 0.138 × 0.138
- Resolution: 296 × 128
- Display color: black, white
- Grey level: 2
- Partial refresh time: 0.3s
- Full refresh time: 2s
- Refresh power: 26.4mW(typ.)
- Standby power: <0.017mW
- Viewing angle: >170°

# How to make it work with the Shiratech FPGA Mezzanine

This Hat is a bit more complex, apart from just the 4-wire SPI inteface, this also requires separate connections for a `Reset Pin`, a `Busy Pin` and a `DC Pin`.

Since the FPGA Mezzanine doesn't pass through GPIOs like it can for SPI, we need to manually toggle the three extra pins over i2c.

To make life easier I have modified a user-space e-ink display library to do it for us.

You can try out this library available at [https://github.com/ric96/edp-29-fpga_mezzi](https://github.com/ric96/edp-29-fpga_mezzi).

For a more detailed guide checkout the [Shiratech FPGA Mezzanine Documentation](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/).

# Video Demo During OpenHours

{% include media.html media_url="https://youtu.be/IaAZmscX6Xc?t=1786" %}