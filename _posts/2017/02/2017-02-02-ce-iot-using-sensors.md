---
author: davidm
comments: true
date: 2017-02-02 18:38:37+00:00
layout: post
link: http://www.96boards.org/blog/ce-iot-using-sensors/
slug: ce-iot-using-sensors
featured_image: 110060157-1.jpg
title: 96Boards Consumer Edition, IoT and using sensors
wordpress_id: 19770
categories:
- blog
tags:
- 32-bit Linux
- 64-bit
- 96Boards
- aarch32
- aarch64
- actuation
- ARM
- ARMv8
- autiomation
- calaos
- community
- consumer
- Consumer Edition
- Consumer IoT
- DB410c
- domoticz
- dragonboard410c
- HiKey
- home assistant
- home automation
- IoT
- Linaro
- linux home
- misterhouse
- openHAB
- OpenHours
- openmotics
- Reference Platform
- rpb
- smart home
---

I’ve been playing with the CE version of the 96Boards for more than a year now and I’ve done a few things with it, I’ve controlled relays, valves, I’ve read a few sensors and I‘ve lit more than a few LED’s. What I have not done is done a project from end to end. It’s time to change that, so what I’m going to do is first get a bunch of 1.8v and 3.3v i2c sensors and get them working with 96Boards both CE and IoT boards. I’m planning on using temperature, humidity, air/barometric pressure, ground and air moisture sensors, ambient light detection. Level Shifters, i2c translators, some servo motor control, and maybe some stepper motor control.

I’m going to target Home Automation. From sprinkler control, to HVAC rezoning, maybe some home security, who knows. Now I’m not going to write an entire home automation system from scratch. No first I’m going to get the sensors working, servos being controlled, etc, hopefully you the community will pitch in, we will use a CE 96Board where it makes sense, use a Carbon or other IoT board where that makes sense. We’ll also look at Open Source Home Control software applications out there and see what might make sense for us to use together. Maybe we can add a Google Home or Amazon Alexa control too! So I’ll kick this off with mating sensors to CE and IoT 96Boards, and if everyone pitches in we can build a complete Home Automation System.

First place folks can jump in is short blog entries of sensors you have already succeeded in connecting to a 96Board. We will publish that on the 96Boards web site and give you a chance to talk about it on an OpenHours session. Remember how far we take this depends on your contributions and interest.

Another area you can help is looking at existing Open Source Home Automation software suites/frameworks. Are you already using one? Have you written one because you could not find one you like? Let's talk about it. I did a quick google search and came up with following:


<div style="overflow-x:auto;">
<table class="table-responsive">
<thead>
<tr>

<th>Software
</th>

<th>License
</th>

<th>Source Code Type
</th>
</tr>
</thead>
<tbody>
<tr>

<td markdown="1">[Calaos](https://calaos.fr/en/)
</td>

<td >GLPv3
</td>

<td >C++
</td>
</tr>
<tr >

<td markdown="1">[Domoticz](https://domoticz.com/)
</td>

<td >GPLv3
</td>

<td >C++
</td>
</tr>
<tr >

<td markdown="1">
[Home Assistant](https://home-assistant.io/)
</td>

<td >MIT
</td>

<td >Python 3
</td>
</tr>
<tr >

<td markdown="1">
[OpenHAB](http://www.openhab.org/)
</td>

<td markdown="1">
[Eclipse Public License](https://github.com/openhab/openhab/blob/master/LICENSE.TXT)
</td>

<td >Java
</td>
</tr>
<tr >

<td markdown="1">
[OpenMotics](https://www.openmotics.com/)
</td>

<td >GPLv2, GPLv3 and AGPLv3
</td>

<td >Python, PHP and JavaScript
</td>
</tr>
<tr >

<td markdown="1">
[MisterHouse](http://misterhouse.sourceforge.net/)
</td>

<td >unknown
</td>

<td >Perl
</td>
</tr>
<tr >

<td markdown="1">
[Linux Home Automation](http://www.linuxha.com/)
</td>

<td >
</td>

<td >Seems to rely in MisterHouse as it’s core, but has lots of links and interesting info at this site.
</td>
</tr>
</tbody>
</table>
</div>

I tend to be biased toward C/C++ and some variant of the GPL license or MIT, and I don’t like code that I can’t find a license statement for. But let’s see what else might be out there and if anyone has tried any of the above software I’d love to know what you think of it.



* * *



For all you audio/visual folks, get caught up by visiting the **[96Boards YouTube channel](https://www.youtube.com/c/96boards?sub_confirmation=1)**. There you will find several playlists to help maneuver through the content. **Don’t forget to subscribe**!

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

**[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/)**

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “**[Monthly Newsletter](http://www.96boards.org/newsletter/)**” and our “**[Weekly Digest](http://www.96boards.org/newsletter/digest/)**”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Remember, you are all the reason this is possible. Please join us in welcoming a vibrant and new twist on community engagement. With OpenHours we will take on some exciting challenges this year.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience. All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the **[96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards)** channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!

**Other Blogs from David Mandala:**




  * [How do you access the GPIO pins programmatically?](http://www.96boards.org/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Board GPIO, libsoc and libmraa on a new image?](http://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](http://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](http://www.96boards.org/blog/eclipse-remote-development-debugging/)


  * [96Boards Survery: What do 96Boards users care about?](http://www.96boards.org/blog/96boards-survey-1/)


  * [Community Mezzanine Board](http://www.96boards.org/blog/community-mezzanine-board/)


  * [Setting up a home 96Boards media server](http://www.96boards.org/blog/96boards-media-server/)
