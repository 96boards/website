---
author: sdrobertw
comments: true
featured_blog: true
date: 2017-06-20 12:00:00+00:00
layout: post
link: http://www.96boards.org/blog/d3-designcore-camera-mezzanine-and-openhours/
slug: d3-designcore-camera-mezzanine-and-openhours
title: D3 DesignCore™ Camera Mezzanine Board on OpenHours
wordpress_id: 20519
featured_image: d3-camera-img-1.jpg
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DB410c
- DragonBoard
- Freedreno
- HiKey
- Linux
- Open Embedded
- Windows 10

---

# Introduction

Since I started with Linaro/96Boards I have had the fortunate opportunity to participate in a variety of product releases, and today marks yet another exciting milestone. We would like to officially invite the **D3 DesignCore™ Camera Mezzanine** to our 96Boards family.

When I first heard of this mezzanine, I was of course excited. Who wouldn’t want to add two camera sensors to their 96Boards projects? Now you can.

![D3 Deisgncore Image 1]({% asset_path "designcore-img-1.jpg" %}){:class="img-responsive lazyload"}
![D3 Deisgncore Image 1]({% asset_path "designcore-img-2.jpg" %}){:class="img-responsive lazyload"}

Not only does this mezzanine offer the possibility of adding multiple camera sensors to your 96Boards, but it also breaks out the many I/O coming from the low-speed expansion header. Basically, bringing up all the signals you are used to using straight from the low-speed header or through other 96Boards mezzanines. On this header you will have access to the following two UARTs, two SPIs, two I2Cs and 12 GPIOs. An on built on reset and power button add to the functionality of this board

# Out of the box

This board is shipped clean directly from [Arrow Electronics](https://www.arrow.com/), and from what I can tell there are a couple of options when purchasing this mezzanine for yourself. While poking through the D3 website, I came across a “DragonBoard 410c Camera Kit” and a “D3 DesignCore Camera Mezzanine Board OV5640” option. Both come with product descriptions and “Buy Now” links for Arrow. These items can be found under the “[Embedded Vision](http://www.d3engineering.com/solutions/embedded-vision)” section of the website along with other cool D3 products.

![D3 Deisgncore Image 3]({% asset_path "designcore-img-3.jpg" %}){:class="img-responsive lazyload"}

The **“**[**DragonBoard 410c Camera Kit**](https://www.arrow.com/en/products/dragonboard410ccamera/d3-engineering)**”** includes a 96Boards DragonBoard 410c, the D3 DesignCore Camera Mezzanine, a 5MP OV5640 camera module, and a 96Boards compliant power supply (12V, 2000mA).

The **“**[**D3 DesignCore Camera Mezzanine Board OV5640**](https://www.arrow.com/en/products/d3cameramezzov5640/d3-engineering)**”** comes with the D3 Camera Mezzanine and a 5MP OV5640 camera module. Clearly, this option would ring best for those who already possess a DragonBoard 410c (or other compatible 96Boards) and power supply.

96Boards teamed up with Qualcomm to have some fun while unboxing the D3 mezzanine! If you are interested in seeing how this mezzanine arrives at your door, the ~5 minute video below will show you our experience. We also talk about the board’s basic features and share some resources in the video description.


{% include media.html media_url="https://www.youtube.com/embed/1gpMbZf4x8w?list=PL-NF6S9MM_W3jC6vE9XtdbZvMWAMX2E8-" %}

# Getting Started

This board comes with a lot of resources! Not only does it come with [a wiki full of downloads and installation instructions](https://github.com/D3Engineering/410c_camera_support/wiki), but as of today you will begin to see more videos and support make its way to the surface.

Currently when wanting to use the D3 Camera Mezzanine with your DragonBoard 410c, you will need to install custom boot and rootfs images. Instructions for doing this can be found in the wiki as mentioned above. For those who would like a quick visual and walkthrough of this software and the board’s capabilities, be sure to watch the video below.

As mentioned in the video, we only went through the process of using fastboot to flash D3’s custom images onto the DragonBoard 410c (briefly skimmed) and the execution of a simple example provided in these images (using a single camera).

We are offering a more in depth look of this mezzanine during [96Boards OpenHours](http://www.96boards.org/openhours/) on [June 22nd, 2017](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWxyNWlsZzFibDVwZzNrZjJ0b2s5aWtjdm9fMjAxNzA2MjJUMTYwMDAwWiBhMXFxdjZqaHIxYTBhdDJzbGxuazVpNzRpNEBn&tmsrc=a1qqv6jhr1a0at2sllnk5i74i4%40group.calendar.google.com). On this day, we will be joined by the D3 Engineering team and engineers from both Qualcomm and Arrow! 96Boards representatives will of course be there, and I will do my best (as always) to bring out some great content from our guests.

**All are welcome to join this broadcast,** [**live at the end of the countdown**](http://www.96boards.org/openhours/)**! As a special added extra, we will be giving away several DragonBoard 410c / D3 Mezzanine kits. You MUST attend the LIVE broadcast to be entered into this contest to win!**

**After the live broadcast, we will be sure to upload the video to the** [**96Boards YouTube channel**](https://www.youtube.com/c/96boards)**.**

# Resources

*   [https://d3engineering.com/solutions/embedded-vision](https://d3engineering.com/solutions/embedded-vision)
*   [https://github.com/d3engineering/410c_camera_support/wiki](https://github.com/d3engineering/410c_camera_support/wiki)
*   [https://www.youtube.com/c/96boards](https://www.youtube.com/c/96boards)
*   [https://discuss.96boards.org/](https://discuss.96boards.org/)

**Want more?** [Check out another great blog](https://developer.qualcomm.com/blog/developing-mezzanine-boards-and-dragonboard-410) from my friend Rajan Mistry of Qualcomm about 96Boards, DragonBoard 410c, and mezzanines!

* * *

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

**D3 Engineering:** [Linkedin](https://www.linkedin.com/company/d3-engineering )

**96Boards:** [Twitter](https://twitter.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124; [Facebook](https://www.facebook.com/96Boards/) &#124; [YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](http://www.96boards.org/newsletter/)” and our “[Weekly Digest](http://www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience – [OpenHours](http://www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea 😀

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
