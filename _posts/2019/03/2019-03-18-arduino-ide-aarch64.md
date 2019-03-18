---
title: Testing the Arduino IDE v1.8.9 for aarch64 on the DragonBoard 410c
author: Sahaj Sarup
date: 2019-03-13 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/arduino.jpg
    name: arduino.jpg
    thumb: arduino-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# What's new with Arduino IDE v1.8.9?

The [Arduino IDE](https://www.arduino.cc/en/main/software) has supported Arm architecture for a while now, but they only released 32bit binaries, which was fine for older devices like the raspberry pi that still uses 32bit OS, but became an issue for modern Arm64 development boards, you could still run the 32bit IDE but it required a lot of multi-lib and 32bit binaries to be installed on top your current linux installation.

Finally with v1.8.9, we now have a native Arm64/aarch64 build!

> Note: for the purpose of this blog I will be using aarch64 and Arm64 interchangeably while talking about 64bit Arm binaries and executable.

# What works?

I only ended up testing a few boards:

- All AVR boards like the Arduino UNO, Nano, mini etc work just fine.
- SAM based boards like Arduino Due don't seem to work yet because the Board package contains compiler and flasher binaries for the x86 architecture and not Arm.

# What does it mean for for 96Boards?

For us it means that we can install the Arduino IDE on Arm64 boards like the DragonBoard, Hikey and others. Not only to flash Arduino boards over USB but also we can now flash the [SeeedStudio Sensors mezzanine](https://www.96boards.org/product/sensors-mezzanine/) directly over UART0 on LS header without using any external host or cables.

# How to flash SeeedStudio Sensors Mezzanine?

- Make sure the DragonBoard is powered off.
- Plug in the SeeedStudio sensors mezzanine.
- Power on and launch the Arduino IDE.
- Under Tools -> Board. Select Arduino Uno.
- Under Tools -> Port. Select /dev/ttyMSM1.
- Upload!

Installation instructions for Arduino IDE can be found online, and remain the same as any other linux distro.
- [Official Installation Instructions](https://www.arduino.cc/en/guide/linux)

