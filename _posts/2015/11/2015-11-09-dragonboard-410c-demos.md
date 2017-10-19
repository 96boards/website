---
author: davidm
comments: true
date: 2015-11-09 15:08:06+00:00
layout: post
link: https://www.96boards.org/blog/dragonboard-410c-demos/
slug: dragonboard-410c-demos
featured_image: DragonBoard-UpdatedImages-front.png
title: DragonBoard 410c and demos
wordpress_id: 9137
Boards:
- DragonBoard 410c
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DragonBoard 410c
- Freedreno
- HiKey
- Linux
- Open Embedded
- Windows 10
---

Last time I published, I talked about 96Boards in general and my [feelings about the initiative](/blog/the-beginning-of-96boards/). This time I’m going to talk about the [DragonBoard 410c](/products/ce/dragonboard410c/) which is built by Arrow Electronics, and uses a Qualcomm® Snapdragon 410 SoC as its core. It follows the Consumer Edition [specification](/products/ce/), with credit card size of it’s 54mm x 85mm. It has some really nice features and I’ve crafted a demo that I’ve used at different trade shows and Maker events. More about the demo later.

[![DragonBoard-UpdatedImages-front]({% asset_path "DragonBoard-UpdatedImages-front.png" %}){:class="img-responsive lazyload"} ](/assets/DragonBoard-UpdatedImages-front.png){:class="img-responsive lazyload"}
[![DragonBoard-UpdatedImages-back]({% asset_path "DragonBoard-UpdatedImages-back.png" %}){:class="img-responsive lazyload"} ](/assets/DragonBoard-UpdatedImages-back.png){:class="img-responsive lazyload"}

So what are the technical specifications of this board? It’s a quad-core, ARM Cortex-A53 processor running at up to 1.2GHz per core; which means it’s a 64-bit CPU with 1GB 533MHz LPDDR3 RAM, 8GB eMMC 4.5 storage and a micro SD card slot and integrated WiFi, Bluetooth, and GPS including an antenna. It has the required 40-pin low speed and 60-pin high speed connectors. It also has a Qualcomm Adreno 306 400MHz GPU with a Freedreno[1] open source Linux driver for PC-class graphics with support for advanced APIs, including OpenGL ES 3.0. The power jack is connected to a wide band 6.5-18V DC capable DC-DC converter that supplies the board with 1.8v to run on and 5V DC that can be used externally. The wide band power supply is really nice if you want to use the board in a battery-powered device. If you are doing robotics or building a drone, you can typically just connect the board directly to a battery and usually not need another DC-DC converter to convert battery power to something the board can use, saving parts and space.

The low-speed I/O consists of 12 GPIO pins; SPI, I2C and 2 UART channels; 1.8V DC, 5V DC and input DC and of course ground. The high speed I/O consists of a MIPI DSI port, 2 more I2C ports, 2 MIPI CSI ports and another USB port. Talk about lots of I/O! Of course all of the I/O is at 1.8V which is quite nice, meaning the board will not drain much power from a battery.

The DragonBoard 410c is a really nice board with a quad core processor that is powerful and easy to use. It is supported by three operating systems out of the box: Linux, Android, and Windows 10. My strong preference is for Linux. I only use Android on my phone and I have never been a fan of Windows, but some folks love them and I’m glad they’re available for them. I have demonstrated the DragonBoard at the San Francisco Bay Area Maker Faire earlier this year, but we just showed the board running Linux and did not really take full advantage of the GPIO. So I decided to start off using Linux and put together a GPIO demo for the next trade show. What I wanted to do was drive some 5V DC relays, and have one of them drive a 12V DC ball valve to show how easy it easy to work with multiple external voltages.

Easy enough, I could do everything from the low speed I/O connector :-) and I could write the code in “C” (my prefered language). I used eight GPIO pins and some NPN signal transistors to do level shifting from 1.8V DC to 5V DC to power the relays. I then connected  a 12V DC wall wart (AC-DC transformer) to the DC power in pin to power the board and pass through ground and power for the 12V DC ball valve. I had it up, running and tested in a day: relays clattering, LED’s on the relay board flashing, and the 12V DC ball valve opening and closing. All good right? Then one of the senior Linaro folks called and asked me to test something on a HiKey board so I did and I had a great idea... I could test the demo on the HiKey board, since both boards are compliant with the 96Boards CE spec, it should just work right?

And that was when my house of cards came crashing down, NO it won’t work (well it would not work then), :-(, to access the GPIO pins you need the pin numbers specific to the SoC, not the 96Boards CE spec. So my working demo on DragonBoard failed on the HiKey board. I jumped back into the code, put in the correct numbers for the HiKey board and sure enough the demo started working again.

What did I have? I had a working demo that was easy to code, it opened the GPIO pins, controlled them and closed them on command. All good, but not good enough, I wanted to have the demo run on any 96Board without change, recompilation or special command line options.

I talked to some of the Linaro engineers, and decided a shared library was the way to go, something that abstracted the specific SoC GPIO pins into the common 96Boards pin designations. A week later and I had the 96Boards GPIO shared library written, and up on github in the 96Boards repository. I rewrote the demo using the new shared library - and when tested it, it worked! But the full story of the 96Boards GPIO shared library is a topic for another blog entry.

Since then, the demo has been shown at LinuxCon, Linux Plumbers, Linaro Connect SFO15, and also at the New York World Makers’ Faire. It attracted attention as, flashing LED’s and the clatter of relays always does, and it let me point out to people that it’s really easy to interface the DragonBoard 410c or, in fact, any 96Boards product to the real world via its GPIO. Of course, the really important thing is it let people see a new class of low cost 64-bit development board that is available today.

--

1. The freedreno project is a free and open source linux driver for the 2D/3D GPUs in Qualcomm Snapdragon SoCs.
