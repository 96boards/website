---
author: linaro
comments: true
date: 2016-09-16 20:56:16+00:00
layout: post
link: https://www.96boards.org/blog/recap-of-the-96boards-openhours-19/
slug: recap-of-the-96boards-openhours-19
image:
    featured: true
    path: /assets/images/blog/OpenHours-03.png
    name: OpenHours-03.png
title: Recap of the 96Boards OpenHours 19 - DragonBoard 410c Mini-Series Part 1
wordpress_id: 17357
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

This was first episode of the DragonBoard 410c mini-series.  We are kicking off the new season starting with an exciting three part series and a chance to win one of several DragonBoards.  The three part series began with this episode that included an out-of-box experience of a new DragonBoard 410c.  The next episode will be a demo with Lawrence King from his desk at Qualcomm Canada (during this episode we will be taking down names for those that want to be part of the drawing) and the final part of the series will be a live panel at our [Linaro Connect ](http://connect.linaro.org/las16/)event in Las Vegas, Nevada to discuss the DragonBoard and to answer any questions.  At the end of the Live Panel we will draw names from those that entered the contest during episode 2 and announce the winners live.  To watch this weeks’ session go to [(https://www.youtube.com/watch?v=LtF7xIsgfNM)](https://www.youtube.com/watch?v=V6gN2-6VZYA)

{% include media.html media_url="https://www.youtube.com/embed/V6gN2-6VZYA?feature=oembed" %}


  * **3:19 - 12:46:  **Robert asked Lawrence King to describe how the Qualcomm DragonBoard 410c went from idea to actual product.  Lawrence talked about the many different boards that came before the DragonBoard 410c and how he worked with George to create the specifications for a standardized board.  He talked about what he recommends to developers run on it.  Lawrence talked about his years of experience in the industry and what he has worked on in the past which included a large variety of different projects in different fields that eventually lead him to his current position at Qualcomm.  Next week Lawrence will show a demo with the DragonBoard 410c and a sensors mezzanine card showing the flow from the sensors mezzanine card through the Arduino down to the DragonBoard and up into a high-level app.


  * **12:47 -13:54** :  Question - Will the chip have a good life cycle?  Lawrence answered that the chip is planned to at least 2023


  * **14:00** -  Robert began the out-of-box demo, he discussed best practices for out-of-boxing.  He showed flashing the system from Android to Debian and best practices for this.  He then added the desktop and had a ready terminal when he was done.


  * **42:01** - Question:  On flashing Debian from a MicroSD card with 0-1-1-0 switches configuration, no problem?  After that; should I put all the switches to 0-0-0-0?


  * **42:01** - Question:  What are the other working combinations of the Boot switch settings we can have? Or I mean what other combinations of the boot switch does?


  * **45:11** - Discussed common problems with monitor displays and how to solve them


  * **49:08** - Discussed advantages of 96Boards for some developers


  * **52:00** - Discussion on what is going on in the community


**Be sure to join us for part two next week where Lawrence King will show a demo of the DragonBoard 410c in action.  Also during this episode that you will be able to register to win a DragonBoard 410c. Join us at:  [https://www.96boards.org/openhours/](/openhours/) **

As always there is a lot of good information and resources that is available in the chat below, this is a great place to get more detailed information mentioned during the call.  Also a while ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https://discuss.96boards.org/t/openhours-topic-suggestion/ ](https://discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

Don't forget about the upcoming Linaro Connect where attendees have an opportunity to meet with Linaro in person and learn a lot more about what is going on in the community.  There are still openings available to attend this conference in Las Vegas, Nevada September 26-30, 2016 --[http://connect.linaro.org/](http://connect.linaro.org/).

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**






































Youtube: [http://link.linaro.org/openhoursyoutube](http://link.linaro.org/openhoursyoutube)
















[https://www.96boards.org/openhours/](/openhours/)












Competition Rules: N/A






* * *




















DragonBoard 410: [https://www.96boards.org/product/dragonboard410c/](/product/dragonboard410c/)












Mezzanine Products: [https://www.96boards.org/products/mezzanine/](/products/mezzanine/)






* * *

















J









Lawrence, when you thought the 410 chip would be great for embedded systems, did you do any kind of market analysis to see what competition there was currently?






* * *




















MB







Google doc - QC presentation, DB410c Workshophttps://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharingBlog: [https://www.96boards.org/blog/dragonboard-410c-workshop-96boards-visits-qualcomm/](/blog/dragonboard-410c-workshop-96boards-visits-qualcomm/)










Google doc - QC presentation, DB410c Workshophttps://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharing










Blog: [https://www.96boards.org/blog/dragonboard-410c-workshop-96boards-visits-qualcomm/](/blog/dragonboard-410c-workshop-96boards-visits-qualcomm/)










 Front screen










 You can see it here: [https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit#slide=id.g14e3d25dac_1_56](https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit#slide=id.g14e3d25dac_1_56)














* * *














MB









HDMI includes audio too


 or the cell radio either
















DB410c Landing page:[https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/README.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/README.md)










DB410c Landing page: [https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/README.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/README.md)














* * *














MB









boot switch?






* * *























DT









Missed the context of the boot switch comment but does this mean SW2 (DIP switched) on board underside?






* * *




















LK












correct\



















* * *











G












I think I flashed Debian from a MicroSD card with 0-1-1-0 switches configuration... and no problem... right Lawrence? And after that; should I put all the switches to 0-0-0-0?



















* * *











DM












Lowrence , what are the other working combincations of the Boot switch settings we can have? Or I mean what other combinations of the boot switch does?



















* * *











LK












The USB switch is for loading Win10




















David Mandala's Blogs: [https://www.96boards.org/blog/](/blog/)



















* * *











DM












Wow.. thats gr8 to know the meaning of different switches..




















Mostly people face issues when they use HDMI converters



* * *





 MB





















not to mention ability to actually take and redesign an exisitng 96board without having to re-engineer everything




















[http://connect.linaro.org/](http://connect.linaro.org/)




















We will be live streaming Keynotes on Linaro's Youtube [https://www.youtube.com/c/linaroorg](https://www.youtube.com/c/linaroorg)



















* * *











T












or 1.8v?






* * *























MB









Seeed's Arduino I/O shield does have a 3.3 or 5v switch.... would be nice to have consistency



* * *




















RW












Thanks John!




















Come back next week for Competition sign up




















[/assets/images/blog/2015/03/96Boards-Competition-DragonBoard-Give-away-Rules.pdf]()






* * *




















DM






Make one for yourself for your AVR.. .. [http://www.fischl.de/usbasp/](http://www.fischl.de/usbasp/)






* * *




















RW












[/assets/images/blog/2015/03/96Boards-Competition-DragonBoard-Give-away-Rules.pdf]()






* * *


I have to leave now. Have a great day...


[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)



Click here to join us for [next OpenHours ](/openhours/)
