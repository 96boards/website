---
author: linaro
comments: true
date: 2016-10-05 17:53:18+00:00
layout: post
link: https://www.96boards.org/blog/recap-of-the-96boards-openhours-21-dragonboard-410c-mini-series-part-3/
slug: recap-of-the-96boards-openhours-21-dragonboard-410c-mini-series-part-3
featured_image: OpenHours-03.png
title: Recap of the 96Boards OpenHours 21 - DragonBoard 410c Mini-Series Part 3
wordpress_id: 17633
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Breakout
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- debugging
- dragonboard410c
- gdb
- gui
- HiKey
- Library
- Linux
- Low speed expansion header
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- rpb
- sensors
- UART
---

This week was episode 3 or our 3 part series on the DragonBoard 410c and was Live from Linaro Connect Las Vegas 2016 (LAS16).   This week was a panel discuss held during Linaro Connect, it was attended by both a live audience and by those on the OpenHours hangout as well.  There was a lively discussion about 96Boards and several questions from the audience.

To watch episode 21 go to [https://www.youtube.com/watch?v=iR1YzwGwGQE ](https://www.youtube.com/watch?v=iR1YzwGwGQE) or watch below:

{% include media.html media_url="https://www.youtube.com/embed/29yWWbXa8p8?feature=oembed" %}

**Be sure to join us for next week's OpenHours:  [https://www.96boards.org/openhours/](https://www.96boards.org/openhours/)**

As always there is a lot of good information and resources that is available in the chat below, this is a great place to get more detailed information mentioned during the call.  Also a while ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https://discuss.96boards.org/t/openhours-topic-suggestion/ ](https://discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**




welcome

[connect.linaro.org](http://connect.linaro.org/)



* * *



AK

Do db410c supports u-boot apart from LK?



* * *



PR

Is anyone here familiar with Qualcomm Adreno GPU ? and specially opensource drivers ?





* * *



PR

this page was edited in January :https://github.com/freedreno/freedreno/wiki/Status





* * *



S

Is there chance for dp 410c to get full Google support for OS like Android



* * *



S

Why can't serial port just made available on board.. its 1st hand requirement for developer.. ultimately need to spent peeny either from developer's pocket or from board cost..





* * *



I hope it boots GNU/Linux



* * *



RW

It can



* * *





PR

One question, is there any 96 board with full support using 100% opensource BSP ?



* * *



S

want to use Creative webcam with dragonboard (via usb), for open CV program, is it possible?

Sure



* * *



PR

does v4l supports your device ?



* * *



RW

@sushant yes

USB camera should work out of box



* * *



PR

if yes I think you need to try , and benchmark performance...

Maybe you're expecting hardware acceleration for OpenCV ?

I am not familiar on this subject, but I think OpenMAX API are suposed to provide hardware abstraction API



* * *



S

thanks!



* * *



T

[https://www.96boards.org/products/mezzanine/uarts/](https://www.96boards.org/products/mezzanine/uarts/)



* * *



RW

I'm hoping when I filled out the form last week I did it right =p



* * *



PR

For instance, RPi BCM VC1 uses omxplayer for video, but I think it's more than just codecs, there are also algorithms like FFTs etc





* * *



do i need any specific library for camera (python)

Here is welcome keynote from Linaro Connect, there are some 96Boards announcement in here [https://www.youtube.com/watch?v=BnQZiXpN3cQ](https://www.youtube.com/watch?v=BnQZiXpN3cQ)



* * *



S

can we get tutorials( videos or documents ) to access hardware part of db 410 using Android IDE platform



* * *



PR

S: openCV

is providing python bindings isnt it ?

[http://docs.opencv.org/3.0-beta/doc/py_tutorials/py_tutorials.html](http://docs.opencv.org/3.0-beta/doc/py_tutorials/py_tutorials.html)



* * *



RW

[https://developer.qualcomm.com/project/breakerball](https://developer.qualcomm.com/project/breakerball)



* * *



PR

Isnt neon part of ARMv8 ?



* * *



RW

Ill ask in a second Phil



* * *



PR

NEON is included in all Cortex-A8 devices but is optional in Cortex-A9



* * *



RW

@sushant you minght want to look for a good Debian packae



* * *



PR

according to wikipedia



* * *



RW

package

@phil, you should speak up

challenge our panel



* * *





One question, what about support of ARM TrustZone ?



* * *



RW

where to find it? or on what board?



* * *



T

adding a serial port is as easy as buying the mezanine UART



* * *





PR

This is a trendy feature, specially in IoT domain where security matters.





* * *



RW

I wish more companies in the IoT space felt security matters.

Instead of being first to market



* * *



RW

Anyone have questions for the panel?





* * *



PR

I keep mine old lappy w/ RS232 DB9



* * *



RW

lol



* * *



T

it's rare to do board bringup on a laptop



* * *



RW

My responsibility is IoT security for my job and every day a new product comes out and I just /facepalm



* * *



J

We use FTDI USB Serial



* * *



PR

I used a RPI as a UART console long time



* * *



RW

At least my company lets me play with all the new stuff



* * *



RW

How we get the chat on the screen

nvm



* * *



J

yes



* * *



PR

Max232 adapters are not that expensives



* * *



J

IoT has a lot of interfaces serial and we need them



* * *



PR

what is everyone focused on UART?



* * *



RW

More uart talks! Lol



* * *



PR

-What+Why



* * *



RW

Hehr

Hehe



* * *



RW

[www.96boards.org/documentation](https://www.96boards.org/documentation)

this is the new Carbon



* * *



PR

is that a MCU or CPU unit ?

Carbon is MCU

running Zephyr ?



* * *



T

stm32f401

a SoC from 3 years ago...



* * *



RW

lol



* * *



PR

yea Zephyr OS

what protocol is used in this demo ?

[96boards.org/carbon](https://96boards.org/carbon)



* * *



PR

Pi0 has CPU

Carbon is MCU

and no RAM :P



* * *



RW

Phil knows his stuff =)



* * *



J

like the nrf51/52??



* * *



RW

lol yes



* * *



S

so how carbon from particle device

so how carbon different from particle*



* * *



TH

What is outlook for BT 5.0 on Carbon?



* * *



J

Particle Photon?



* * *



S

yes



* * *



J

Particle is WIFI

This will be Bluetooth as I understood

Bluetooth LE



* * *



RW

Bluetooth



* * *



J

OK



* * *



S

ok thanx Marc , Robert



* * *



PR

Sorry I was distracted, didnt someone asked about Opensource hardware ?

-ed



* * *








[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](https://www.96boards.org/openhours/)



Click here to join us for [next OpenHours ](https://www.96boards.org/openhours/)
