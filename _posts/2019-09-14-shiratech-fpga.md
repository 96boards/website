---
title: Getting Started Resource - Shiratech FFPGA Mezzanine  
author: Sahaj Sarup
date: 2019-09-14 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/fpga-mezz.jpg
    name: fpga-mezz.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# The Shiratech FPGA Mezzanine

The Shiratech FPGA Mezzanine for 96Boards adds configurability to your embedded environment using the Intel MAX-10 FPGA.

With the CPU and FPGA combo, you can connect to any interface and add real time performance to your project.

It offers unparalleled design flexibility through the use of Rasberry Pi, Arduino & Grove connectors, which allow you to use any combination of 3rd party sensors and actuators

## Main Benefits

- Add any interface and boost real time performance using Intel MAX-10 10M04 FPGA
- Enable connection between 96Boards and Rasberry Pi, Arduino & Grove
- Full design flexibility to mix and match sensors and actuators from any environment
- Enables migration to the 96Boards environment

# ELI5 What is an FPGA?

A regular processor is hard-wired; it's versatile and there's lots you can do with it, but on the hardware level, you can't change anything. When you program for a standard CPU, you're limited by the way the hardware was laid out, because different arrangements are better at different things (think of how a GPU is better than a CPU at certain tasks).

A "pure" FPGA is a chip that can be changed on the hardware level. You use software to change the way the chip operates, so, in essence, you can build your own chip for whatever application you're doing. When you're writing some types of code, there are optimizations that you simply can't make on a regular CPU because the manufacturer designed it to be versatile.

Generally, the applications are limited. The times when people use FPGAs are when they have a really specific task, and it's unique enough that manufacturers aren't making chips specifically for that purpose. An FPGA will always be slower than a hard-wired chip set up in the same way, so the only time it's better is when the upside of using an FPGA outweighs the inherent slowdown.

Now, what he's talking about is that modern FPGAs incorporate "standard" hardware so that they're just as good as the hard-wired chips at general tasks, which means an intelligent programmer can exploit the inherent speed of a hard-wired chip and the flexibility of an FPGA at the same time.

***
***

# Getting Started with The FPGA Mezzanine - Factory Configuration

**The default factory configuration sets up the FPGA Mezzanine as a level-translator between Arduino IO and Raspberry Pi IO Headers allowing us to use various 3v3 based Hats and Shields on the 1v8 based 96Boards platform.**

## How to communicate with the FPGA Mezzanine?

- It is primarily connected over I2C0 on the Low-Speed header using address 0x6f
- Interfaces like UART, I2C and SPI on the Arduino and RPi Header can be passed through to the 96Boards Low-Speed header. This setup needs to be configured via I2C (explained later-on in this blog). In this configurations the FPGA Mezzanine acts as a Level-Shifter from 3v3 to 1v8
- GPIO only pins and other dual configuration pins in GPIO mode on the Arduino and Pi headers can only be toggled and read over i2c, these cannot be passed-through to the LS header.
- [**Pinout and I2C Register configuration Documentation PDF**](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/files/shiratech-fpga-user-manual-0-9.pdf)

## List of useful guides
> Note: The following guides and example have been tested on a Dragonboard410c running debian

- I2C Sensors in pass-through mode: [Interfacing with I2C Shields and Sensors](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/i2c-shields.md.html)
    - MPU6050 IMU Module
    - I2C LCD Module 1602
    - PCA9685 Servo Shield
- GPIO Control Examples:
    - [Interfacing with L298n Motor Controller](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/l298n.md.html)
    - [Interfacing with Relay Shield](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/relay.md.html)
- SPI Guide: [Interfacing with Simple SPI HATS and Sensors](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/simple-spi-hats.md.html)

## Sample Projects that use FPGA Mezzanine:
- [Binary JukeBox Project](https://www.96boards.org/blog/binary-jukebox/)
- [Waveshare SPI 2.9inch E-ink RaspberryPi HAT - Shiratech FFPGA Mezzanine](https://www.96boards.org/blog/waveshare-spi-eink/)

***

## FPGA Mezzanine Library for Arduino

This library was specifically designed to make it easy to port over arduino code to 96boards using the fpga mezzanine. This library is mostly a wrapper around mraa and converts arduino funtions to i2c calls to the fpga mezzanine.

[**Interfacing with Arduino IO**](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/fpga-mezzanine-library.md.html)

***
***

# Getting Started with The FPGA Mezzanine - Custom FPGA Design

> Before proceeding make sure you have pre-requisite knowledge of programming Intel/Altera FPGAs ain VHDL or Verilog. I only go through the board-specific setup process.

- [Getting Started with FPGA Programming](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/fpga-getting-started.md.html)
- Incase you want to revert back to Factory Firmware: [Restore Factory Firmware](https://www.96boards.org/documentation/mezzanine/shiratech-fpga/guides/restore-factory-firmware.md.html)

