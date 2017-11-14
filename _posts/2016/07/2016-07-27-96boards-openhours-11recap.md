---
author: jennifer.castelino
comments: true
date: 2016-07-27 22:15:11+00:00
layout: post
link: https://www.96boards.org/blog/96boards-openhours-11recap/
slug: 96boards-openhours-11recap
image:
    featured: true
    path: /assets/images/blog/OpenHours-03.png
    name: OpenHours-03.png
title: 96Boards OpenHours 11Recap
wordpress_id: 16021
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
- Bubblegum
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- Docker
- dragonboard410c
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

96Boards OpenHours just finished season 1 and between now and when we kick off season 2 with guest speakers and structured hour presentations we are having informal openhours where anyone can join us with questions regarding 96Boards.   We started these open sessions Q&A with our session 10 and continued it this week with session 11.  This was an hour to have people hangout and ask whatever questions people may have about 96Boards.  There were many 96Boards developers on the call ready to answer questions from those on the call.  To watch this weeks’ session see below or go to ([https://www.youtube.com/watch?v=YV_17Zru-3k&feature=em-subs_digest](https://www.youtube.com/watch?v=YV_17Zru-3k&feature=em-subs_digest)):

{% include media.html media_url="https://www.youtube.com/embed/YV_17Zru-3k?feature=oembed" %}

This week began by taking questions from those calling in, the first question was regarding Google voice search and using the HiKey board.  There was a long discussion about audio and getting this to work correctly.  The next question was what are the thresholds on GPIO inputs?  The team discussed what the current limits are, what will work well and different types of input.  Next they discussed an issue a member was having with WIFI coming on when booting up but not able to get onto the internet.  Finally the session ended with a question about using a bluetooth device as opposed to connecting directly.  Join us Thursday for another open session to ask the developers any of your questions.

Don't forget about the upcoming Linaro Connect where attendees have an opportunity to meet with Linaro in person and learn a lot more about what is going on in the community.  There are still openings available to attend this conference in Las Vegas, Nevada September 26-30, 2016 --[http://connect.linaro.org/](http://connect.linaro.org/).

Be sure to join us for the next OpenHours  [https://www.96boards.org/openhours/](/openhours/).  Next week during session 12 we will have another open hour to just answer questions.  So join us and bring all your 96Board questions and we will try to answer them all for you.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today because there was a long exchange on Bluetooth and audio:**








Q













Question - what happens if you connect a Bluetooth headset instead (that sample rate is the only way you can do two-way in Bluetooth)?







Bluetooth does not work for recording itself












it only playsback























A












Bluetooth audio has two profiles: A2DP (aka "HiFi" audio) is playback only, there is also a headset profile (which IIRC maxs out at 16KHz in both directions).

















Q







how to select headset profile?



















A


















Modern Bluetooth headsets can usually dynamically switch between modes.




















A












on the internet issue, maybe $ dhclient -r?




















A









Not sure on android [though I know how to do it for pusleaudio ;-) ]

















Q












The reason I bring this up is that, USB audio and BT audio are both hotpluggable and Android uses similar infrastructure to permit them.






















I think that's why it was fairly cheap for Google to add USB audio support.




















A












actually first I tried with BT, it does not allow me for record ,then i moved to usb




















A












So playing with Bluetooth (and contrasting with "real" android device) might give us some clues...




















A












All my experiments we are doing on Android only























Info












[https://discuss.96boards.org/t/wi-fi-not-connecting-at-boot/](https://discuss.96boards.org/t/wi-fi-not-connecting-at-boot/)





























Info





















[builds.96boards.org](http://builds.96boards.org/)























A















WiFi works fine on Hikey with the latest Android Images




















Info












[http://builds.96boards.org/releases/dragonboard410c/qualcomm/android/](http://builds.96boards.org/releases/dragonboard410c/qualcomm/android/)




















A












Niran: Too much background noice for me to figure out which mic is being used...






















(it keeps picking up Robert's conversation and searching for that)




















A










It looked to me like Android will dynamically choose profile (e.g. if its a phone call it will use headphone profile, it your playing music it will adopt A2DP). However I've not been able to prove it... Will try once the call finishes and PM you via forum.








[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)
[n](/blog/installing-docker-aarch64-96boards-ce/)
