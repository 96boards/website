---
author: linaro
comments: true
date: 2016-10-17 23:14:29+00:00
layout: post
link: https//www.96boards.org/blog/recap-96boards-openhours-23-season-2-announcement-sneak-peak/
slug: recap-96boards-openhours-23-season-2-announcement-sneak-peak
featured_image: OpenHours-03.png
title: Recap of the 96Boards OpenHours 23 - Season 2 announcement and sneak peak
wordpress_id: 17799
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

This week was episode 23 in our OpenHours series.  We are gearing up for the official launch of season 2 which will begin on Thursday October 20th.  This episode started by talking about the several announcements and demos that took place at Linaro Connect LAS16, beginning with the new IoT edition Carbon Board, the GumStick board, and several boards that were shown at tables by Arrow - to see all the videos of the new boards and what happened at Connect you can visit:  [http://connect.linaro.org/las16/resources/](http://connect.linaro.org/las16/resources/) and Youtube: [https://www.youtube.com/user/LinaroOrg/videos](https://www.youtube.com/user/LinaroOrg/videos).

Robert announced that there will hopefully be more give-aways during season 2 and we are working on this now.  Robert then talked about the next episode of OpenHours which will be the start of season 2.  In the first episode we will interview Keith Lee from Gumstix. He will talk about Gumstix the company, Geppetto the drafting tool, and lead into a drone demo.

The OpenHours then got started with a question about a Mezzanine board, which Jean-Marc and Grant then discussed making modifications to the 96Boards Sensors Mezzanine board.  This was a great in-depth discussion about the board and options that Jean-Marc can try to find a solution.  As always there is documentation available as well:  [https://github.com/96boards/96boards-kicad-mezzanine-template](https://github.com/96boards/96boards-kicad-mezzanine-template) and [https//www.96boards.org/products/mezzanine/sensors-mezzanine/](https//www.96boards.org/products/mezzanine/sensors-mezzanine/)

The next question (12:28) was regarding the grove sensor board.  Dave asked, "I am interested in using the servo. I am trying to use the example code for a sketch that uses the servo. However, the code attaches the servo to pin 9. I am not sure how to map this a connector on the board."  Robert got out his board to discuss board and the schematics with Dave.   Robert tabled the discussion since he did not have the answer and said he will find the answer for him and get back to him.

Robert then mentioned a great blog by Andy from Qualcomm: [ https://developer.qualcomm.com/blog/dom/andy-clark-blends-mechanics-electronics-software-makes-wonderful-things ](https://developer.qualcomm.com/blog/dom/andy-clark-blends-mechanics-electronics-software-makes-wonderful-things) Great example of what you can build with 96Boards.

The question (24:41) after that was from an attend that wrote "I have a question about using SPI on the Dragonboard. I installed a Debian version including Spidev but when I connect a sensor board to the SPI pins of the Dragonboard I don't see any data. Is there an SPI program to use? Did anyone ever tried interfacing the Dragonboard with SPI?"  Robert gave a link to an instruction set that gives you a way to set this up: [https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md)

There was a question on e health sensor serial port communication with dragonbaord? The team did not have the answer to that question but will follow-up.  The next question was "Would be interest to know if anyone has successfully used a camera with the DragonBoard other than a USB one?"  Robert mentioned that he did see this some at Linaro Connect, but it was mostly done with prototype cameras because there are not any on the market right now that do this.  Robert then gave 3 links that have more information about this:  [https//www.96boards.org/products/mezzanine/stm32sensor/](https//www.96boards.org/products/mezzanine/stm32sensor/) , [https//www.96boards.org/product/aerocore/](https//www.96boards.org/product/aerocore/)  and [https://developer.qualcomm.com/download/db410c/creating-camera-mezzanine-and-camera-flex-circuit-dragonboard.pdf](https://developer.qualcomm.com/download/db410c/creating-camera-mezzanine-and-camera-flex-circuit-dragonboard.pdf).

Mark, who attended the last Linaro Connect, gave some feedback on the event and what his thoughts were and impressions of the event.  Shovan then announced that the next Linaro Connect will be open for registration in November and will take place in Budapest, Hungary.

Robert then closed the hangout with some announcements:

To watch episode 21 go to[ https://www.youtube.com/watch?v=iR1YzwGwGQE ](https://www.youtube.com/watch?v=bcqyrxxJeOM) or watch below:

{% include media.html media_url="https://www.youtube.com/embed/bcqyrxxJeOM?feature=oembed" %}

**Be sure to join us for next week's OpenHours:  [https://www.96boards.org/openhours/](https://www.96boards.org/openhours/)**

As always there is a lot of good information and resources that is available in the chat below, this is a great place to get more detailed information mentioned during the call.  Also a while ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https//discuss.96boards.org/t/openhours-topic-suggestion/ ](https//discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https//discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**














RW





















You can watch all the videos and slides here






















[http://connect.linaro.org/las16/resources/](http://connect.linaro.org/las16/resources/)






















Youtube: [https://www.youtube.com/user/LinaroOrg/videos](https://www.youtube.com/user/LinaroOrg/videos)

















Robert Wolff







RW












Season 2 starting with a featured guest, Keneth Lee. He will join us to talk about Gumstix AeroCore 2 Mezzanine board, and teach us to set up a drone using 96Boards!






















Season 2 starts Oct 20th

















Andy from Workshopshed







AW












Hi all. Running without sound or video as usual.

















Robert Wolff







RW












Jean-Marc and Grant are talking about making modifications to the 96Boards Sensors Mezzanine board






















[https://github.com/96boards/96boards-kicad-mezzanine-template](https://github.com/96boards/96boards-kicad-mezzanine-template)






















[https//www.96boards.org/products/mezzanine/sensors-mezzanine/](https//www.96boards.org/products/mezzanine/sensors-mezzanine/)

















Dave Trower







DT












I have a question about the grove sensor board. I am interested in using the servo. I am trying to use the example code for a sketch that uses the servo. However, the code attaches the servo to pin 9. I am not sure how to map this a connector on the board.

















Deepak Mishra







DM












Could you please share the link for the code you ref ?






















I can have a look ..






















Which other pin you want to use ?






















[https//discuss.96boards.org](https//discuss.96boards.org)

















Andy from Workshopshed







AW












Looking at the schematic, the schematic D5 appears to be connected to pin 9 [https://github.com/96boards/96boards-sensors/raw/master/Sensors.pdf](https://github.com/96boards/96boards-sensors/raw/master/Sensors.pdf)

















Dave Trower







DT












[https//discuss.96boards.org/t/using-micro-servo-on-grove-mezzanine-board/](https//discuss.96boards.org/t/using-micro-servo-on-grove-mezzanine-board/)

















Jeff







J












I do not, just hanging out...

















Andy from Workshopshed







AW












[https://developer.qualcomm.com/blog/dom/andy-clark-blends-mechanics-electronics-software-makes-wonderful-things](https://developer.qualcomm.com/blog/dom/andy-clark-blends-mechanics-electronics-software-makes-wonderful-things)

















CB







C












Hi, I have a question about using SPI on the Dragonboard. I installed a Debian version including Spidev but when I connect a sensor board to the SPI pins of the Dragonboard I don't see any data. Is there an SPI program to use? Did anyone ever tried interfacing the Dragonboard with SPI?

















Madhukar







M












Do you have any idea about e health sensor serial port communication with dragonbaord?

















Andy from Workshopshed







AW












Cheers

















Robert Wolff







RW












[https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md)

















CB







C












I already followed it but how do I trigger the data from the sensor board? Maybe there is an existing program?

















jean-marc







J












I do something like that with bluetooth <BLE

















Robert Wolff







RW












[https://developer.qualcomm.com/blogs](https://developer.qualcomm.com/blogs)

















Madhukar







M












ok thank you

















CB







C












ok great thanks

















Celine







C












No

























I am good, listening from Gumstix. :D

















Andy from Workshopshed







AW












Would be interest to know if anyone has successfully used a camera with the DragonBoard other than a USB one

















JCobos







J












Thanks. I am new at this. Just listening

















Robert Wolff







RW












[https//www.96boards.org/products/mezzanine/stm32sensor/](https//www.96boards.org/products/mezzanine/stm32sensor/)






















[https//www.96boards.org/product/aerocore/](https//www.96boards.org/product/aerocore/)






















[https://developer.qualcomm.com/download/db410c/creating-camera-mezzanine-and-camera-flex-circuit-dragonboard.pdf](https://developer.qualcomm.com/download/db410c/creating-camera-mezzanine-and-camera-flex-circuit-dragonboard.pdf)

















Andy from Workshopshed







AW












Ah yes, that camera flex one is a bit hardcore even for me

















Jeff







J












I have not

















Robert Wolff







RW












[http://connect.linaro.org/las16/](http://connect.linaro.org/las16/)






















[http://connect.linaro.org/las16/resources/](http://connect.linaro.org/las16/resources/)






















[https://www.youtube.com/user/LinaroOrg/videos](https://www.youtube.com/user/LinaroOrg/videos)

















Ragnar







R












no, just hanging out. unfortunately not a winner

















Robert Wolff







RW












Michael! Welling!






















Hi, I have a question about using SPI on the Dragonboard. I installed a Debian version including Spidev but when I connect a sensor board to the SPI pins of the Dragonboard I don't see any data. Is there an SPI program to use? Did anyone ever tried interfacing the Dragonboard with SPI?






















[https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Configuration/EnableSPI.md)






















I already followed it but how do I trigger the data from the sensor board? Maybe there is an existing program?

















jean-marc







J












here is the like for Daniel






















[https//discuss.96boards.org/t/uart0-android-sensors-mezzanine/](https//discuss.96boards.org/t/uart0-android-sensors-mezzanine/)

















Mark Bolzern







MB












I bet Michel would know the "Arduino Pin" answer from earlier

















Andy from Workshopshed







AW












[https://www.arduino.cc/en/Tutorial/Sweep](https://www.arduino.cc/en/Tutorial/Sweep)

















jean-marc







J












Daniel did you see the link?

















Andy from Workshopshed







AW












Cheers Robert





![](https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif)

















[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](https//www.96boards.org/openhours/)



Click here to join us for [next OpenHours ](https//www.96boards.org/openhours/)
