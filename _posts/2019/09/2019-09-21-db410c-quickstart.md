---
title: The Ultimate Quick, Quick Start Guide for DragonBoard410c   
author: Sahaj Sarup
date: 2019-09-21 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shield, hat
---

# What is this guide ?

This guide's purpose is to serve as an index to all the documentation related to getting started with the Qualcomm DragonBoard 410c already available on the 96Boards website.

This guide assumes that you are new to the DragonBoard410c.

Also:
- You have access to:
    - A HDMI Display
    - A USB Keyboard
    - A USB Mouse
    - A 12v 2A Power Supply
    - A 8GB or larger micro SDCard
    - 2.4Ghz Wifi Network

- You have minimal knowledge about linux terminology like Terminal, shell etc
- You are not afraid of the CLI

***

# What this guide is not?

This won't make you an expert on the DragonBoard410c, that is an adventure that you'll need to embark on your own.

***

# The First Boot.

Its alway good to check that your peripheral play well with the db410c.

- Plugin the HDMI Display
- Plugin USB mouse and keyboard
- Plug in the 12v power supply and power it on
- Make sure the display comes up
- And Keyboard and mouse work

***

# WHAAAT, My DragonBoard410c runs Android but I want to run Debian... Or just fresh install a new Debian build.

Follow the Debian installation guide:
    - [https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/installation/](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/installation/)

***

# Connecting to WiFi

Well, I guess the users are smart enough to figure out how to connect using the GUI, so let's try a fun way using CLI

- Method 1: Using `nmcli`
    - [https://www.96boards.org/documentation/consumer/guides/wifi_commandline.md.html](https://www.96boards.org/documentation/consumer/guides/wifi_commandline.md.html)
- Method 2: using `nmtui`
    - Enter the command `nmtui`
    - Follow the onscreen instructions

***

# Okay now to the good stuff, GPIOs, LEDs and Sensors etc

- A basic GPIO toggle for testing:
    - [https://www.96boards.org/documentation/consumer/guides/gpio.md.html](https://www.96boards.org/documentation/consumer/guides/gpio.md.html)

- MRAA: Is a Linux Library for low speed IO Communication in C with bindings for C++, Python, Node.js & Java. Like WiringPi but more generic and crossplatform compatible
    - Installing MRAA: [https://www.96boards.org/documentation/consumer/guides/mraa/install.md.html](https://www.96boards.org/documentation/consumer/guides/mraa/install.md.html)
    - Toggling GPIO: [https://www.96boards.org/documentation/consumer/guides/mraa/gpio/](https://www.96boards.org/documentation/consumer/guides/mraa/gpio/)
    - Working with I2C Sensors: [https://www.96boards.org/documentation/consumer/guides/mraa/i2c/](https://www.96boards.org/documentation/consumer/guides/mraa/i2c/)
    - Onboard User LED: [https://www.96boards.org/documentation/consumer/guides/mraa/led/](https://www.96boards.org/documentation/consumer/guides/mraa/led/)
    - UART Sensors and Devices: [https://www.96boards.org/documentation/consumer/guides/mraa/uart/](https://www.96boards.org/documentation/consumer/guides/mraa/uart/)

***

# Some more interesting guides

- ZRAM: [https://www.96boards.org/documentation/consumer/guides/zram_swapspace.md.html](https://www.96boards.org/documentation/consumer/guides/zram_swapspace.md.html)
- Disable GUI: [https://www.96boards.org/documentation/consumer/guides/disable_gui.md.html](https://www.96boards.org/documentation/consumer/guides/disable_gui.md.html)
-  Using Multiple USB Cameras on a single USB Hub: [https://www.96boards.org/documentation/consumer/guides/multi-usb-camera.md.html](https://www.96boards.org/documentation/consumer/guides/multi-usb-camera.md.html)
- Enabling DMIC: [https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/enable-dmic.md.html](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/enable-dmic.md.html)
-  Customizing eMMC partition in Linux: [https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/customize-emmc-partition.md.html](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/customize-emmc-partition.md.html)
-  How to force display resolution and bypass EDID: [https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/force-display-res.md.html](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/force-display-res.md.html)
-  Enabling SPI on Dragonboard 410c with SPIDEV: [https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/enable-spi.md.html](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/guides/enable-spi.md.html)

***

# Some Example Projects that use DragonBoard410c

- IMU-MPU6050 interfacing: [https://github.com/96boards-projects/imu](https://github.com/96boards-projects/imu)
- Digital Hourglass: [https://github.com/96boards-projects/hourglass](https://github.com/96boards-projects/hourglass)
- Magic 8 Ball: [https://github.com/96boards-projects/magic8](https://github.com/96boards-projects/magic8)
- Magic Mirror: [https://github.com/96boards-projects/magic-mirror](https://github.com/96boards-projects/magic-mirror)
- Photobooth: [https://github.com/96boards-projects/photobooth](https://github.com/96boards-projects/photobooth)
- Projects By 96Boards Team: [https://github.com/96boards-projects](https://github.com/96boards-projects)
- Projects By the Community: [https://www.96boards.org/projects/](https://www.96boards.org/projects/)



