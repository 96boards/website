---
author: sdrobertw
comments: true
date: 2016-05-17 15:33:34+00:00
layout: post
link: https://www.96boards.org/blog/96boards-box-experience-guide-2/
slug: 96boards-box-experience-guide-2
image:
    featured: true
    path: /assets/images/blog/Screenshot-22.png
    name: Screenshot-22.png
title: 96Boards Out of box experience guide - part 2
wordpress_id: 14479
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- bubblegum-96
- Consumer Edition
- DragonBoard
- dragonboard410c
- guide
- HiKey
- Lemaker
- Linaro
- Linux
- Open Embedded
- Open Hours
- OpenHours
- operating system
- out of the box
- Qualcomm
- Snapdragon
- ucRobotics
---

In the last issue of this blog series, we took a quick look at the 96Boards unboxing process. I talked about gathering all the out of box necessities, setting up a safe work station, and powering up your 96Boards for the first time. For those of you who missed this blog, it can be found [here](/blog/96boards-box-experience-guide-1/).
For this part of the blog series, we will do as promised and take a closer look at what makes the 96Boards unique. We will examine and compare each operating system so that by the end of this blog, you will have a better idea of what mix (96Board+OS) best suits your development or hobby project needs.

There will be a lot to cover in this part of the blog series. Let’s talk about each 96Boards platform which is currently available. While this blog will focus primarily on CE boards, please keep in mind that there are two types of 96Boards editions: [Consumer Edition (CE) 96Boards](/products/ce/), and [Enterprise Edition(EE) 96Boards](/products/ee/). Let’s start by listing some of the CE board characteristics individually:

**HiKey**




  * First 96Boards certified Consumer Edition platform


  * Two versions of this board are available: CircuitCo (1GB RAM) and LeMaker (1GB or 2GB RAM)


  * Based on 64-bit Kirin 620 eight-core ARM Cortex A53 processor, clocked at 1.2GHz


  * Includes 1GB or 2GB, 800MHz LPDDR3 DRAM


  * Includes 8GB eMMC Flash Storage, and SD card slot for extra storage


  * Built in Bluetooth and WiFi


  * ARM Mali 450-MP4 GPU


  * Currently supports Debian Linux and [AOSP](https://source.android.com/source/devices.html)


**DragonBoard™ 410c**




  * First development board based on mid-tier QualcommⓇ Snapdragon™ 400 series processor


  * Based on 64-bit Snapdragon 410 quad-core ARM Cortex A53 processor, clocked at 1.2GHz


  * Includes 1GB, 533MHz LPDDR3 RAM


  * Includes 8GB eMMC Flash Storage, and SD card slot for extra storage


  * Built in Bluetooth, WiFi, and GPS


  * Adreno™ 306 GPU


  * Currently supports Android, Debian Linux, and Windows 10 IoT Core


**Bubblegum-96**




  * First shown in mid 2015 at trade shows in Asia


  * Based on Actions s900 quad-core ARM 64-bit Cortex A53 processor, clocked at 1.8GHz


  * Includes 2GB, 800MHz LPDDR3 DRAM


  * Includes 8GB eMMC Flash Storage, and SD card slot for extra storage


  * Built in Bluetooth and WiFi


  * Imagination 600MHz PowerVR G6230 GPU


  * Currently supports Android, Debian Linux, and Remix OS




A comparison table with this information can be found [here](/documentation/consumer/guides/compare_96boards_ce.md.html). As more CE boards are released, the table will continue to be updated. This is a quick way to compare the 96Boards for their core differences. In addition, it is important to note the subtle customizations each board chose to go with (outside of the [CE Specification](https://linaro.co/ce-specification)), as well as the operating systems available to you with each board. You will see some of these subtle differences when looking at the available operating systems, GPU, and built in components. Here you can see how all boards have built in Bluetooth and WiFi, but only the DragonBoard 410c has built in GPS. If your development or project involves working with GPS, then this might be the board you would choose. In any case, you most likely already own a 96Boards platform. Hopefully I have through this blog post been able to shine some light on a few defining characteristics of the board you chose.

It’s time to switch our focus to the operating system (OS). You will have noticed, after booting up your board for the first time, which default OS pertaining to the 96Boards you are using. As mentioned in the last issue of this series, each 96Boards platform has a different default OS:

**HiKey**: Debian Linux
**DragonBoard 410c**: Android
**Bubblegum-96**: Debian Linux

In some cases the differences can be subtle while in others very drastic. Take some differences between Android and Debian Linux for example:




  * **Android** is a tablet/mobile platform environment. This environment is primarily used to test applications/software developed remotely on a host computer using an assortment of IDE’s(integrated development environments) and SDK’s(software development kits).
Later issues in this series will touch on the use of IDE’s and SDK’s for development


  * **Debian Linux** is a desktop/window or console(command line) based development environment comprised of some basic programs and utilities. Development can happen directly on the board, and within the OS. While applications and programs can be built directly on the board, they can also be built remotely and cross-compiled for the particular system.
In later issues in this series we plan to cover cross-compiling for building from source and making applications/programs.


The core of both these operating systems is the kernel which is the most fundamental program on the device as it is directly in charge of controlling everything on the board. For now, we can start by looking at the kernel as the place on which our applications sit and use in order to communicate with the system. Further discussion on the kernel will surface throughout this blog series.

So you have explored your current operating system. Maybe you had some fun poking around the Android OS or maybe you got a chance to dive into the Debian Linux desktop. Either way, it’s time to decide which operating system you would like to proceed with for developing and/or working on our hobby project. Once you have decided, you will either want to get the latest version/release of the OS you are currently using, or swap it out completely to one of the other available operating systems. In order to do this, you will need to go through the following steps:


  1. Visit the [96Boards Consumer Edition landing page](/documentation/ConsumerEdition/README.md/).


  2. Make your way through “Quickstart” and “Installation” sections of this landing page


  3. Choose an installation method (SD card or Fastboot) and download the appropriate files


  4. Proceed to the instruction set that matches your host computer.


  5. Follow the instructions to install your new operating system.


Keep in mind, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](https://webchat.freenode.net) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

In next week’s blog we will dive deeper into the 96Boards add-ons such as the Mezzanine product line, audio jack additions through the analog expansion header of the DragonBoard 410c, and 3D printed 96Boards cases (STL files available now!).

**Video from [OpenHours](/openhours/)**

{% include media.html media_url="https://www.youtube.com/embed/EJutUfI8WRc?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk" %}


[**In this series**](/tag/openhours/)




  * [96Boards Out of box experience guide – part 1](/blog/96boards-box-experience-guide-1/) 


  * [96Boards Out of box experience guide – part 2](/blog/96boards-box-experience-guide-2/) (This)


  * [96Boards Out of box experience guide – part 3](/blog/96boards-box-experience-guide-3/)
