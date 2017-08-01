---
author: Mani_S
comments: true
date: 2017-05-23 03:00:48+00:00
layout: post
link: https//www.96boards.org/blog/part-1-home-surveillance-project-96boards/
slug: part-1-home-surveillance-project-96boards
featured_image: 96Boards-Web-Cam.jpg
title: Part 1 - Introduction to ‘Home Surveillance’ using 96Boards
wordpress_id: 20389
categories:
- blog
tags:
- 96Boards
- ARM
- arm32
- arm64
- ARMv7
- bubblegum-96
- Cloud
- computer vision
- DIY
- dragonboard410c
- HiKey
- Home Surveillance
- IoT
- Linaro
- Linux
- Maker
- Mezzanine
- Open Hours
- OpenCV
- OpenHours
- PZT
- Raspberry Pi
- servo
- Servos
---

# **Introduction**


Ever imagined implementing a home surveillance system as a DIY project that could be used in our day to day life? That’s what I thought and decided to post a blog series on how to do it from scratch. This project would span across multiple domains such as Cloud computing, Image processing, Machine learning, Security and more… Along with the blogpost describing the work for each part, a demonstration video and instructions on how to recreate will also be attached. Alright, let’s dive into the core part!

By the end of this project, you will have a foundational setup for implementing a complete '**Home Surveillance**' system. Using a [96Boards (Consumer Edition board)](https//www.96boards.org/products/ce/), the [Grove Seeed Sensor Mezzanine](https//www.96boards.org/product/sensors-mezzanine/), and a variety of other sensors and actuators(See Bill of Materials later in the series), you will build out and implement a fully functional home surveillance system.


## Bill of Materials






  * [96Boards CE - DragonBoard 410c](https://www.arrow.com/en/products/dragonboard410c/arrow-development-tools)


  * [USB Webcam](https://www.logitech.com/en-in/product/hd-webcam-c270?crid=34)


  * [Pan/Tilt Camera Mount with micro servos](https://www.arrow.com/en/products/1967/adafruit-industries)


  * [Sensors Mezzanine (Kit optional)](https://www.seeedstudio.com/96Boards-Sensors-p-2617.html)




# **Why Home Surveillance?**


Home Surveillance is the home monitoring process accompanied with the decision making ability. If you were outside and want to see what’s going on inside your house, like raring to see your cat or what if you want to grant specific access to your best friend or family member?  Why would you want to spend thousands of bucks to buy a ready made home surveillance system to monitor your home, if you have the skills and some love towards doing cool things :) All this exciting stuff is possible if you follow this ‘**Home Surveillance**’ blog series.


# **Why 96Boards?**


There isn’t any justification needed if you were following us in [OpenHours](https//www.96boards.org/openhours/). Our 96Boards specification is designed to be the industry standard and also to be easily accessed by the developer/hobbyist community. The high performance GPUs available in all of our CE boards makes 96Boards the best fit for doing pretty much any Image processing.

One of the key requirements of the hobbyist’s community is to easily interface sensors/actuators to a development board. For satisfying this requirement, we have lot of [Mezzanines](https//www.96boards.org/products/mezzanine/) available in the market. Just grab one, place it on top of your favourite 96Boards and install any operating system of interest! That’s it, you can start playing :)


# **Roadmap to the end goal**


This ‘**Home Surveillance**’ project has been broken down into a series of parts. Each part will act as a building block, and at the end everything we will integrate it all into a final project. Below is the breakdown of the full blog series.




  1. **Introduction to ‘Home Surveillance’ using 96Boards - Part 1 (this blog)**


  2. Facial recognition using OpenCV - Part 2


  3. Webcam tracking - Part 3


  4. Communication to cloud - Part 4


  5. Controlling webcam using Sensor mezzanine - Part 5


  6. Final project - Home Surveillance - Part 6




# **Platform support**


This project can be executed on all of our 96Boards [Consumer Edition (CE) ](https//www.96boards.org/products/ce/)boards. There is no dependency; however, the boards are expected to be running debian distribution.


# **Can I contribute?**


Well yes :) Community contributions are welcome at the last stage of the series, where the full blown project would be showcased. We expect community members to implement ‘Home Surveillance’ in their own places and share their experience by making a video out of it. It could also be modified to incorporate more security solutions. At the end, your content would get showcased in 96Boards website and even OpenHours :D

**Want more? [Continue on to Part - 2 of the series](https//www.96boards.org/blog/part-2-home-surveillance-project-96boards/)**.



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](https//www.96boards.org/newsletter/)” and our “[Weekly Digest](https//www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](https//www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https//discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
