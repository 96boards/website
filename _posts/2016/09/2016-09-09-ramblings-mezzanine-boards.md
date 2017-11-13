---
author: davidm
comments: true
date: 2016-09-09 17:09:09+00:00
layout: post
link: https://www.96boards.org/blog/ramblings-mezzanine-boards/
slug: ramblings-mezzanine-boards
image:
    featured: true
    path: /assets/images/blog/Screenshot-39.png
    name: Screenshot-39.png
title: Ramblings of Mezzanine boards
wordpress_id: 17252
categories:
- blog
tags:
- 32-bit Linux
- 64-bit
- 96Boards
- aarch64
- ARM
- armhf
- ARMv7
- ARMv8
- Bubblegum
- Consumer IoT
- cross compiler
- DB410c
- debugging
- dragonboard410c
- Eclipse
- gdb
- HiKey
- Reference Platform
- remote access
- remote debugging
- rpb
---

In my [last blog](/blog/eclipse-remote-development-debugging/) I showed how to get Eclipse remote running and debugging working for your [96Boards](https://www.96boards.org). In fact it’s been a series of blogs which started with Linux based command line cross compilation, right through to getting [Eclipse](http://www.eclipse.org) to do the remote running and debugging (using the installed command line tools). It’s really been quite the journey for someone who, until this series of blogs, had never used Eclipse ever. I have to say I am impressed with Eclipse at one level, for people who like integrated development environments (IDE’s) Eclipse is a monster, it does just about everything I can imagine and then some. It also needs a huge display to work the easiest, so many panels, so much info to display. Me I’m old school, I like make files, separate editors and debuggers. Part of that is I’m firmly stuck in the past with my editor, I have a specific keyboard layout I prefer (Wordstar from the CP/M days) and the default in Eclipse is not my favorite. Still if I ever need to use an IDE for some reason, I think I’d use Eclipse. I can even use jstar (a joe alias) in a console and Eclipse picks up when I’ve changed the source code, this allows me to use my prefered editor, but I find it easier to use a text console to edit and run make when I feel like it.

I’m sitting at my desk trying to think of what my next series of blogs will be about, and I decided this blog is going to be a easy one. I’ve spent huge amounts of time learning and researching the cross-compiling and Eclipse series of blogs, and this week I’d really like a rest. After all, it was a short week due to the US National holiday (Labor Day) on Monday. Figuring out Eclipse for remote running and debugging took a huge amount of time and effort to research, lots and lots of conflicting information on the web, and I had to try most of it to find out it did not work. Ugh. I’m still a bit frustrated, while quite certain that in the last 3 weeks I tried the setup described last week’s blog except for making the binary at the specific time. I’m sure I remember using the menus and manually entering the filenames and paths, but since I had not built the binary at the correct step it simply would not work. :-(

What would everyone think about a series of blogs which used the Sensor Mezzanine board and code running on the 96Boards, I could also tie in the ATMega328 (Mega) microcontroller to test the GPIO and the I2C functions? We would wire up the GPIO from the 96Boards to the Mega and the I2C from the 96Boards and the Mega and then write some test code on the 96Boards for the Mega, compile and upload it on to the Mega. Then we write some Linux test code to run on the 96Boards which would communicate with the Mega via the serial port and test the ports. On the 96Boards side we’d use the libsoc library to standardize the GPIO pin calls so the code would run on any CE 96Boards. Feedback would be appreciated.

You know, in speaking of the Sensor Mezzanine Board, we now have quite a few Mezzanine boards: [STM32 Sensor mezzanine board](/products/mezzanine/stm32sensor/) (in development), [Linker mezzanine card starter kit](/products/mezzanine/linker-mezzanine-starter-kit/) (shipping, I have one on my desk), [96Boards UART Serial Adapter](/products/mezzanine/uarts/) (shipping, I have one on my desk), [Sensors mezzanine](/products/mezzanine/sensors-mezzanine/) (shipping, I have one on my desk) and the [Grove Starter Kit for 96Boards](/products/mezzanine/grove-starter-kit/) (shipping, contains the sensor board and some sensors, and yes I have a couple), [96Boards Display Mezzanine Kit ](https://www.arrow.com/en/products/96boards-display-7/linksprite-technologies-inc)(back order, I have seen this at a trade show), [Robomezzi](https://github.com/mwelling/96boards-robomezzi) (in active development, I have seen this at a trade show) and last but not least the [AeroCore 2 for 96Boards](https://store.gumstix.com/aerocore-2-for-dragonboard.html) (shipping, I have one on my desk). Those are all the boards I know about, however I would not be surprised if there are more out there in the community which I’ve not heard of yet. In this blog I thought I’d talk a bit about the one’s I’ve used. Of course since I’m not a Android programmer I’ll talk about my experience under Linux (and bare metal for one board). Finally a reminder, all mezzanine cards can be used with all [CE 96Boards](/products/ce/), that is intentional, the 96Boards CE standard insures cross compatibility.


# My Experience with Mezzanine Boards


[Click here to visit 96Boards Mezzanine products pages](/products/mezzanine/)


## Linker Mezzanine card starter kit


[More information here](/products/mezzanine/linker-mezzanine-starter-kit/)

Nice, well made board. This board connects only to the low speed interface with a hole in the board through which you could reach the high speed interface connector. It has the expected level shifters for the GPIO and I2C and SPI. The level shifters can be 3.3 VDC or 5 VDC, selected by a jumper. The SPI bus has 2 analog to digital converters so you can have analog input and convert it for the 96Boards. It also has the UART on a micro USB connector so you can plug in a USB cable from the board to a PC and get a serial console on the 96Boards, quite nice. It has a bunch of devices it comes with: Button Module, 5mm Red LED Module, LDR Module Thermal Module, Linear/Slide Potentiometer Module, Tilt Module, Touch Sensor Module, Relay Module, and (8) 20cm Connector Cables, and you can get more of them from LinkSprite. This is sold by [Arrow](https://www.arrow.com/en/products/96boards-starter-kit/linksprite-technologies-inc) but produced by [LinkSprite Technologies, Inc.](http://www.linksprite.com/)


## 96Boards UART Serial Adapter


[More information here](/products/mezzanine/uarts/)

This was the first shipping mezzanine boards, it connects only to the low speed connector and it simply provides a level shifter for the serial consoles, bring them out to serial on USB, you select which via jumpers and a reset button. It was very handy back when 96Boards first came out, still handy but several mezzanine cards now include the same functionality so if you are using a Linker mezzanine, a Sensor board mezzanine, or the AeroCore 2 mezzanine you don’t need this board as all three include the functionality. Still, if you need quick access for early console boot access it can’t be beat.


## Sensors Mezzanine & Grove Starter Kit for 96Boards


[More information here](/products/mezzanine/sensors-mezzanine/)

The Grove Starter Kit for 96Boards contains one Sensors Mezzanine board so I’ll just talk about both the board and the kit here. The board is well made, hooks to the low speed connector only and does not allow easy access to the high speed interface, it could be reached with a ribbon cable but it can be a bit tricky. The board has a co-processor on it, an ATMega328 microcontroller which will run most Arduino UNO sketches unchanged. It has the standard Arduino I/O connectors so it can utilize most if not all Arduino shields.

There are several ways to program this ATMega328, you can use the Linux Arduino IDE, or the Linux Arduino command line tools. The command line tools can be accessed via a text console from X, the serial console provided by the UART to USB level shifter on the board or you can use a USB programmer from your PC though that takes a bit of extra wiring depending on your programmer.

Since the UART is directly connected from the 96Boards to the ATMega328 you can flash the ATMega328 and then use that channel to set up serial communications between the boards. This gives you 8 channels of analog to digital conversion and about 14 pins of digital GPIO, and of course the analog pins can be used as digital, just like any Arduino. So, lots of extra GPIO if you need it, also since the ATMega328 is running bare metal you have much tighter control of semi real time events then you do running Linux (unless you are running RealTime Linux) So this allows you to read certain sensors which are quite hard to read from Linux on the ATMega328 quite easily and then communicate the data to the 96Boards over the serial channel for integration into a larger program. Counting all I/O, you have: The Arduino UNO compatible expansion headers, + 5x GPIO, 4x I2C and 9 Grove connectors for ATMega328 IO (all 5V): 5x GPIO, 3x ADC, and 1x I2C, 2 6-pin SPI headers (1 from 96Board, 1 from ATMega328, 9 Grove connectors for 96Boards IO (mixed 3.3V and 5V; all 5V tolerant), and a MicroUSB interface to 96Boards console serial port.

Lots of options for accessing the real world, and for the ATMega328 both the standard Arduino UNO headers and Grove connectors. It is a slightly complex board to use with onboard co-processor but it really allows great flexibility.


## AeroCore 2 Mezzanine Board


[More information here](/product/aerocore/)

This board is interesting, it’s a full autopilot board for a drone. The folks from Gumstix designed it using their online design tool “Geppetto”. Gumstix thought they were only building the board for the DragonBoard 410c but because of the inherent cross compatibility of the 96Boards CE family the board actually works with the HiKey and Bubblegum-96 boards too! It connects to both the low speed and high speed connectors and has the ability to connect to cameras, though I haven’t tried this yet. I’ve not built a drone with this board (yet), but I did test it for very basic functionality on three CE 96Boards, and it worked as expected on all of them. I have to admit I am hoping at some point to build a drone using this board as it seems to have some really nice features. The board also has an onboard co-processor that communicates over other serial UART. It’s an ARM M4 microcontroller, that does a lot of the real time functions such as monitor the 9-axis internal measurement unit, along with an altimeter, combined with geopositioning with the optional GPS, gives you accurate positional feedback. As I say, I’ve done some basic testing of the board so I can’t speak to all of it’s built in functionality but I’m looking forward to using this board more fully at some point.

So those are the boards I’ve used. I’m looking forward to getting my hands on some of the other mezzanine boards mentioned above, and I will as they come out. Please send me some feedback about what else you might want to hear about, and I’ll see if I can write something up or get someone from the community to write something up. Have a really great day…..

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the[ 96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

**Other Blogs from David Mandala:**




  * [How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Boards GPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](/blog/eclipse-remote-development-debugging/)
