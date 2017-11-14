---
author: Sahaj Sarup
comments: true
date: 2017-09-13 12:00:00+00:00
layout: post
title: SX1509 i2c GPIO Expander with 8bit PWM Support
image:
    featured: true
    path: /assets/images/blog/sx1509.jpg
    name: sx1509.jpg
tags:
- 64-Bit
- 96Boards
- Dragonboard
- Hikey
- GPIO
- mraa
- libmraa
- pwm
- expantion
- i2c
- multiplex
- sx1509
---
# **SX1509 i2c GPIO Expander with 8bit PWM Support**

### Introduction

Welcome to a small blog about the SX1509 GPIO Expander. It's main fuction is to expend the number of GPIOs to upto 16 pins per module, all of which are 8bit PWM compatible and uses the i2c bus to communicate with the 96Boards platform.

At a time four SX1509 modules can operate on a single bus, given that 96boards platforms have two i2c buses, a total of eight modules can be used giving a total of 128 extra GPIOs all of which are PWM compatible.

Apart from that, SX1509 has an inbuild Logic Level Shifter and each bank, A(Pins 0-7) and B(8-15), can have It's own VCC. So for the purpose of 96Boards, the module itself could be powered at 1v8, and both banks can operate at 5v, 3v3 or each of them at separate voltages*.

### Usage: Software

There are two ways to make this module work, the harder way is to go though the [datasheet](http://cdn.sparkfun.com/datasheets/BreakoutBoards/sx1509.pdf)

The more simpler way is to use the [libsx1509 C++ Library](https://github.com/96boards-projects/libsx1509). This library is based on libMRAA and has been tested on the Dragonboard 410c.
It provides funtions that are similar to that of the Arduino IDE, like: digitalRead() digitalWrite() analogWrite() etc.

A full documentation and example can be found at the library's [GitHub Page](https://github.com/96boards-projects/libsx1509).

Please feel free to submit patches and pull requests.

### Usage: Hardware

I used the SX1509 Module from [SparkFun](https://www.sparkfun.com/products/13601), Its a nice little pre assembled kit*.

### Foot Notes:

*Remember to to the appropriate [modifications](https://learn.sparkfun.com/tutorials/sx1509-io-expander-breakout-hookup-guide) to the SparkFun Kit in order to have the GPIOs run at a higher voltage than 1v8 since the kit comes preconfigured with the VCC of the GPIOs to be connected with the VCC of the module.

So it is very easy to short the 1v8 with the 5v, I did it and my Dragonboard survived, but you may not be so lucky.

### Demo Video:

{% include media.html media_url="https://youtu.be/_RPqBBij43g" %}

