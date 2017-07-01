---
author: jennifer.castelino
comments: true
date: 2016-06-05 22:22:23+00:00
layout: post
link: http://www.96boards.org/blog/96boards-openhours-session-4-recap/
slug: 96boards-openhours-session-4-recap
title: 96Boards OpenHours Session 4 Recap
wordpress_id: 14970
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Breakout
- Bubblegum
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- GPIO
- HiKey
- Library
- Linux
- Low speed expansion header
- Maker
- Mezzanine
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- rpb
- sensors
- UART
---

In our fourth installment of the 96Boards OpenHours session the team discussed the [low-speed expansion header](http://www.96boards.org/documentation/ConsumerEdition/GPIO/LSExpansionHeader/README.md/) and it’s many GPIO interfaces. Robert also highlighted some great examples and resources to help any hobbyist/developer get started with any 96Boards.  To watch this weeks’ session go to: [https://www.youtube.com/watch?v=vzOy_WV_HwU](https://www.youtube.com/watch?v=vzOy_WV_HwU)
Below is an overview of what was discussed including the time in the video where this topic was discussed.

**The week started off with a recap from last week:**

Last week the team discussed  available Mezzanine product line with sensors and 3D printed accessories including compatible enhancements, design tools, and add-ons.  To watch last weeks’ session go to:[ https://www.youtube.com/watch?v=k7QR_KlXMRc&feature=youtu.be](https://www.youtube.com/watch?v=k7QR_KlXMRc&feature=youtu.be)



* * *



**This week: (begins at 2:18)  --**To watch this weeks’ session go to: [https://www.youtube.com/watch?v=vzOy_WV_HwU](https://www.youtube.com/watch?v=vzOy_WV_HwU)



 	
  * **Introduction of guest speaker: David Mandala – work on enabling 96Boards libraries to gain access to GPIO’s**

 	
  *  Link to YouTube channel: [https://www.youtube.com/channel/UCjawhk_W1QnJs3pKIsKLJNg](https://www.youtube.com/channel/UCjawhk_W1QnJs3pKIsKLJNg)

 	
  * Began discussion of this week’s blog topic:  [http://www.96boards.org/blog/96boards-box-experience-guide-4/](http://www.96boards.org/blog/96boards-box-experience-guide-4/)



 	
  * Definition of GPIO: General purpose input/output pins – unused GPIO’s by system

 	
  * Very simple and easy to use, can use as a single to a device or take information from a device as a sensor

 	
  * 3:30 – mentions cool video on Dragon detector: a great example of a sensor [https://www.youtube.com/watch?v=9NGkGyWplvQ&feature=youtu.be](https://www.youtube.com/watch?v=9NGkGyWplvQ&feature=youtu.be)

 	
  * 4:35 – questions

 	
    1. Question about open embedded, specifically around PREEMPT_RT and validation that will be addressed in a later OpenHours

 	
    2. I haven't seen anyone use or mention the high speed connector yet. Is it actually PCI?




 	
  * **9:41**** – David Mandala discusses the GPIO 96Boards enabled libraries that he has been working on**

 	
    1. **David Mandala’s blogs on this topic to give you further details: **

 	
      1. [How do you access the GPIO pins programmatically?](http://www.96boards.org/blog/access-gpio-pins-programmatically/)

 	
      2. [How do you install 96BoardGPIO, libsoc and libmraa on a new image?](http://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)




 	
    2. 3 libraries that are directly accessing the GPIO pins

 	
      1. First is the 96Boards GPIO – which at first had a fatal flaw because it was not specified at a SoC level

 	
        1. David then discusses how he had to work to solve this issue and the creation of the library

 	
        2. David then discusses the teams current work with the library and what is coming soon

 	
        3. 19:53 – Question: Libsoc: Why did I have to move the headers into file with my code before compilation?

 	
        4. 21:54 – Question: Python GPIO access without 'sudo' on Linux _[http://www.96boards.org/forums/topic/python-gpio-access-without-sudo-on-linux/](http://www.96boards.org/forums/topic/python-gpio-access-without-sudo-on-linux/) _

 	
        5. 25:15 – Question: How to access GPIO? android, linux or windows?

 	
        6. 28:43 – Question: Is programming GPIO the same for all 96Boards?

 	
        7. Robert discussed some documentation that was available on github: [https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/README.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/README.md)




 	
      2. 35:10 – question from community member on some challenges he has had getting his Dragonboard to work with his project

 	
      3. 40:55 – question – Do you know when the release of the extended Dragonboard will be?

 	
      4. 42:00 – Question – What is the best way to add an Ethernet RJ-45 port to the DragonBoard?








The last several minutes of the call there was much discussion on the Dragonboard.  Robert then mentioned next week’s topic and demos that would be given next week.

Be sure to stay tune in next week where we will continue to explore the 96boards GPIO interfaces. Robert will take a more in-depth look at the various 96Boards enabled libraries, and go through the download and installation process using the [GPIO beginner’s guide](https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/Beginner/README.md).  [http://www.96boards.org/openhours/](http://www.96boards.org/openhours/)

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours-04](/assets/images/blog/2016/05/OpenHours-04.png){:class="img-responsive"} ](http://www.96boards.org/openhours/)

**_Transcript from the Chat during the call:  Please see below for a lot of great detailed references_**



* * *



RW

I saw your Dragon Sensor! Very cool

[https://youtu.be/9NGkGyWplvQ](https://youtu.be/9NGkGyWplvQ)



* * *



AW

Many thanks



* * *



RW

[https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk](https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk)



* * *



MB

I've not heard anyone talk about the high speed connector. Is it PCI Express?



* * *



RS

we can't hear you robert



* * *



RW

[http://www.96boards.org/blog/96boards-box-experience-guide-3/](http://www.96boards.org/blog/96boards-box-experience-guide-3/)

[http://www.96boards.org/blog/96boards-box-experience-guide-4/](http://www.96boards.org/blog/96boards-box-experience-guide-4/)

[https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk](https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk)

[https://www.youtube.com/watch?v=9NGkGyWplvQ](https://www.youtube.com/watch?v=9NGkGyWplvQ)



* * *



JR

PREEMPT_RT I dont think it has been validated

Fathi is on 30 Jun 2016 OpenHours



* * *



JR

there are early releases of Xenomai



* * *



MB

Question: I haven't seen anyone use or mention the high speed connector yet. Is it actually PCI



* * *



RW

96BoardsGPIO: [https://github.com/96boards/96BoardsGPIO](https://github.com/96boards/96BoardsGPIO)

Libsoc: [https://github.com/jackmitch/libsoc](https://github.com/jackmitch/libsoc)

MRAA: [https://github.com/intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

UPM: [https://github.com/intel-iot-devkit/upm](https://github.com/intel-iot-devkit/upm)

Device Tree: [http://www.devicetree.org/](http://www.devicetree.org/)

[http://www.96boards.org/forums/topic/python-gpio-access-without-sudo-on-linux/](http://www.96boards.org/forums/topic/python-gpio-access-without-sudo-on-linux/)

[https://docs.google.com/a/linaro.org/document/d/1xnmkSB3IZV6KwIXVJi7UG1e0dtqXR3l_V0Ey_sN0-sg/edit?usp=sharing](https://docs.google.com/a/linaro.org/document/d/1xnmkSB3IZV6KwIXVJi7UG1e0dtqXR3l_V0Ey_sN0-sg/edit?usp=sharing)

Is programming GPIO the same for all 96Boards?



* * *



AW

Is there any plan to add PWM output support?



* * *



AT

yes, if you use libsoc, 96boardsGPIO, libmraa, then programming GPIO the same for all 96boards.



* * *



AW

Is there a download link for that diagram



* * *



AT

[http://www.96boards.org/blog/96boards-box-experience-guide-4/](http://www.96boards.org/blog/96boards-box-experience-guide-4/)



* * *



RW

[/assets/images/blog/2016/06/96Boards_LS_pinout.jpg](/assets/images/blog/2016/06/96Boards_LS_pinout.jpg){:class="img-responsive"} 

Pinout



* * *



AW

[https://github.com/96boards/documentation/tree/master/ConsumerEdition/GPIO/PinOuts](https://github.com/96boards/documentation/tree/master/ConsumerEdition/GPIO/PinOuts)

Thanks



* * *



RW

[https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/README.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/README.md)



* * *



AW

I used a bidirectional level shifter to drive my LEDs and get the input from the PIR [https://www.element14.com/community/servlet/JiveServlet/downloadImage/38-23170-281599/399-350/LevelShifterSchematic.png](https://www.element14.com/community/servlet/JiveServlet/downloadImage/38-23170-281599/399-350/LevelShifterSchematic.png){:class="img-responsive"} 



* * *



D(

usb 1-5: device descriptor read/64, error -32 usb 1-5: new high speed USB device using ehci_hcd and address 6 usb 1-5: device not accepting address 6, error -32`



* * *



RW

Thank you Andy!

Akira: do we have a forum thread for this?



* * *



D(

[http://www.96boards.org/forums/topic/dragonboard-keyboardmouse-and-micro-usb-not-responding/](http://www.96boards.org/forums/topic/dragonboard-keyboardmouse-and-micro-usb-not-responding/)



* * *



T

i'd like to ask a question "off-line", there are pictures of the extended dragon board floating around, has it been released? if not, any ETA?



* * *



MB

What is the best way to add an Ethernet RJ-45 port to the DragonBoard?



* * *



T

mark: get the extended dragon board



* * *



MB

I'd prefer not to use one of the USB 2.0 for that



* * *



T

[http://www.cnx-software.com/2016/05/08/qualcomm-dragonboard-600c-96boards-development-board-includes-ethernet-and-sata/](http://www.cnx-software.com/2016/05/08/qualcomm-dragonboard-600c-96boards-development-board-includes-ethernet-and-sata/)



* * *



AT

USB-Ethernet dongle do well



* * *



MB

I need the smaller form factor of the 410



* * *



AW

USB-Ethernet dongle worked well for me. Alternatively have you looked at a serial to Ethernet module?



* * *



RW

[https://www.96boards.org/products/accessories/adapter/](https://www.96boards.org/products/accessories/adapter/)



* * *



MB

I need the USBs for other things, and they are not fast

I'm putting it in a very small box... may need to try to use grove or i2c for Ethernet



* * *



S

In response to Tervor's question, take a look at the SD 600eval here: [https://eragon.einfochips.com/products/single-board-computers/sd-600eval.html](https://eragon.einfochips.com/products/single-board-computers/sd-600eval.html)



* * *



T

steve: thanks



* * *



MB

Ahh, that is why I asked about the high-speed... and Yes I probably have to build a Mezzanine. Can I use a ribbon connectore to get high speed out from under Seed Mezzanine?

length limitation on ribbon?

right, thank you

usb3.0 from High Speed?

I'll be using Linaro



* * *



RW

[https://github.com/96boards/documentation/blob/master/ConsumerEdition/Compare96BoardsCE.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/Compare96BoardsCE.md)



* * *



MB

So the high speed connector extension is still limeted to USB 2.0

on dragonboard



* * *



PG

I notice Bubblegum has IMG PowerVR GPU. Is it supported in the software builds?



* * *



MB

this is all new, great start!



* * *





[**In this series**](http://www.96boards.org/tag/openhours/)



 	
  * [96Boards Out of box experience guide – part 1](http://www.96boards.org/blog/96boards-box-experience-guide-1/)

 	
  * [96Boards Out of box experience guide – part 2](http://www.96boards.org/blog/96boards-box-experience-guide-2/)

 	
  * [96Boards Out of box experience guide – part 3](http://www.96boards.org/blog/96boards-box-experience-guide-3/)

 	
  * [96Boards Out of box experience guide – part 4](http://www.96boards.org/blog/96boards-box-experience-guide-4/) (This)



