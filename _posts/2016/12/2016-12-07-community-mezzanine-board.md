---
author: davidm
comments: true
date: 2016-12-07 19:23:59+00:00
layout: post
link: https://www.96boards.org/blog/community-mezzanine-board/
slug: community-mezzanine-board
image:
    featured: true
    path: /assets/images/blog/CommunityBoard.png
    name: CommunityBoard.png
title: Community Mezzanine Board
wordpress_id: 18920
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- community board
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- Linux
- Mezzanine
- Open Embedded
- Reference Platform
- rpb
---

Having worked with the Sensors Mezzanine board ([By itself](/product/sensors-mezzanine/), and [in a kit](/product/grove-starter-kit/)) extensively over the last year I can say there are changes I would love to see. After speaking with others who have used the board, many agree changes should be made. The sensors board was developed by the Fellow who worked at Linaro, Grant Likely. He also developed the [96boards-uart board](/product/uarts/). There was an amazing amount of discussion between Grant and a lot of us about the sensors board, It went through several revisions, each time getting better for a purpose.

The more I think about it, the more a particular change comes to mind. I would like to fix the sensor board so the level shifting voltage is selectable on all grove connectors(3.3V or 5V), and dump the idea that some Grove connectors are 3.3V and others are 5V, it just does not work all that well. On top of that I’d dump all the Grove connectors for the “Arduino like” Atmel chip, the “Arduino like” headers are there. If you want to use Grove connectors with the Atmel chip, simply add an [Arduino Grove connector shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) it’s less than $9.00 USD and gives you a bunch of Grove connections. In the place of the Grove connectors you dump, I’d add back the C and D GPIO pins which were left off due to lack of space.

I really think the purpose of the sensors board was to allow people to easily experiment with 96Boards. While this is accomplished by the Sensor’s board, it’s not what I need or want for serious project development. What I really want is a new board. We will call it the “Community Mezzanine” and it will be very similar to the sensors board. The goal is to targets project development with the least amount of extra hardware as possible. Below you will find a list of what my colleagues, community and I have considered to be the good, the bad, and the things I want in the new “Community Mezzanine”.  I’m sure some of you will agree with me, and I’m equally sure more of you will disagree with my ideas.

**Don’t hold back, jump in let’s all thrash this out**. There is a chance someone might actually build the design, but first we need to get on the same page.


# **In my view:**




## **The good:**






  1. **The Atmel ATMEGA328P chip** which offers Arduino compatibility and optional shield connectors.


    1. There are some really good uses for a small bare metal hardware chip. Linux is a great OS, but unless you are running “Real Time Linux” it has a hard time dealing with some sensors, they require very predictable timing, and this is hard to come by with a full blown OS. Being able to mount Arduino shields is super handy. There are lots of shields which address sensors, motor drivers, and other cool things. We can use them for our own projects with little to no changes.





  2. **The micro USB serial port.** This could be improved by adding jumpers to select which serial port is coming out (like the original serial to usb [tiny mezzanine board](/product/uarts/)).


  3. **Level shifting from 1.8V.**  


    1. While the shifting is definitely necessary, I’d like to see the entire low speed connector I/O level shifted. First off the level shifting should be to 3.3V or 5V selectable by a jumper.  Everything shifts to one voltage or another. Drop the bit that some I/O is 3.3 and some is 5V, this is just confusing. I would like to make it selectable, everything goes to the selection.  





  4. **The 12 x GPIO pins.** They should be high current(in or out) and selectable by pin. Let’s avoid using the lower power bidirectional level shifters. Some might argue this point but I know what pins I’m going to use and in what direction. I need current handling more than auto direction. On the I2C and the SPI, we can use high quality bidirectional level shifters designed for I2C and SPI communications. I think TI has some which actually make sure the signal, as it passes through is sane.


    1. Both serial ports should be level shifted like the GPIO, 3.3V or 5V (in or out) as appropriate. This way you can use the UART at 3.3V or 5V directly. This can be very very handy.





  5. **Power Reset buttons**, handy and worth having if there is no space issue.




## **The Bad:**






  1. **The grove connectors**, they are nice for an experimenting board but they take up too much space for a project board, drop all of them.


  2. **The pass through 40 pin low speed connector**.  It’s sort of nice to have but I don’t really care, if everything is brought out, then I don’t really need this, but I do need the space it takes up.




## **Things I want which are not there now:**






  1. **Bring out the high speed connector**, all of it, and level shift it.


    1. **Bring out the USB line** to a standard USB A connector, there are too many times I could really use a 3rd USB connector.


    2. **Bring out the camera connectors**.


    3. **Bring out the display connector**.





  2. **Add a more standard low speed header** .1”/2.54 mm pitch 40 pin socket connector that is equivalent to the low speed connector that is totally level shifted.


  3. **Add a second connector** that is RPi compatible .1”/2.54 mm pitch 40 pin connector that you could plug in RPi shields into.  There are a lot of RPi compatible parts out there, would be handy if I could easily use them.  Make this a close to the real RPi header as possible, I have not explored this as far as I would like but I “think” it’s possible to accomplish.


  4. **Pin headers for SPI, I2C, I2S and Clocks** are a good idea if there is room for them.  You could just add another connector that had all of them on it.  I don’t really care how the SPI, I2C, I2S and the Clocks come off the board I just care that they are level shifted and available for me to use them easily.


  5. **I’d love an Ethernet jack** but you would just have to add the hardware on the board to go from the 3rd onboard USB to a USB Ethernet since most of the CE 96Boards don’t have onboard Ethernet Hardware.  Also I suspect this adds a really hard space issue, you’d have to use some kind of a cut away connecter that fit 3mm below the board and the rest above.  Seems hard to me for little return.


  6. **3.5mm Audio jack**. For boards which support audio, this jack would not take up too much space on the mezzanine and offer users the ability to use headsets and possibly microphones.




## **Hand Drawn Sketch of my proposal**


![Communtiy Board Image]({% asset_path "community-mezzanine-board-img-1.png" %}){:class="img-responsive lazyload"}

The community board idea was discussed on [last week's episode of OpenHours](https://youtu.be/LJzHpvpMEMY)! Please visit our Y[ouTube channel for other 96Boards videos](https://www.youtube.com/channel/UCjawhk_W1QnJs3pKIsKLJNg).

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

**Other Blogs from David Mandala:**






  * [How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Board GPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](/blog/eclipse-remote-development-debugging/)


  * [96Boards Survery: What do 96Boards users care about?](/blog/96boards-survey-1/)
