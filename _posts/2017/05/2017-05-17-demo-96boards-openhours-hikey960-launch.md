---
author: Vishal Bhoj
comments: true
date: 2017-05-17 15:23:02+00:00
layout: post
link: https://www.96boards.org/blog/demo-96boards-openhours-hikey960-launch/
slug: demo-96boards-openhours-hikey960-launch
image:
    featured: true
    path: /assets/images/blog/image006.png
    name: image006.png
title: Demo during 96Boards OpenHours, HiKey960 launch
wordpress_id: 20375
categories:
- blog
tags:
- 96Boards
- HiKey
- HiKey960
- huawei
- Kirin
- Lemaker
- Linaro
- Linux
- Open Hours
- OpenHours
- Robert Wolff
- OpenHoursRecap
---

As part of one of the special OpenHours session for HiKey960 launch, we did a demo on Hikey and HiKey960 to compare the performance of the 2 boards. We ran a [1080p/30fps](http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4) video on vlc using software decoder on both the devices running same codebase from AOSP master for the comparision. Here is the link to the Openhours session in which we did the demo: [https://www.youtube.com/watch?v=-6AVlw4VwRQ](https://www.youtube.com/watch?v=-6AVlw4VwRQ)

{% include media.html media_url="https://www.youtube.com/embed/-6AVlw4VwRQ" %}

We saw that HiKey could decode and render the video with an average load of ~50% on the board. HiKey was running at 960Mhz and occasionally dropping to 729 Mhz for most part of the video playback with all 8 cores getting actively used. Below is the graphical representation of CPU usage on HiKey while playing the clip:

![Demo 96boards Openhours Hikey960 launch Image 1]({% asset_path "demo-96boards-openhours-hikey960-launch-img-1.png" %}){:class="img-responsive lazyload"}

One can see that there is portion of the timeline where the load has reduced but during which there were frame drops happening as system was trying to catchup.

We captured the CPU usage for the same portion of the clip on HiKey960. We saw that the load was less than 10% consistently. HiKey960 was running at 533 Mhz for most part of the video playback and occasionally frequency jumped to 999 Mhz.

![Demo 96boards Openhours Hikey960 launch Image 2]({% asset_path "demo-96boards-openhours-hikey960-launch-img-2.png" %}){:class="img-responsive lazyload"}

We further tried to stress the boards by trying to play a [1080p/60fps](http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4) video but there were too many frame drops and stutters on HiKey where as HiKey960 was able to play the video smoothly with an average load of ~35% at 999Mhz consistently:

![Demo 96boards Openhours Hikey960 launch Image 3]({% asset_path "demo-96boards-openhours-hikey960-launch-img-3.png" %}){:class="img-responsive lazyload"}

We have used a debug build of [VLC player](https://wiki.videolan.org/AndroidCompile/) and [Android Monitor](https://developer.android.com/studio/profile/android-monitor.html) for the above demo. Users can follow the instructions available on [source.android.com](https://source.android.com/source/devices) on how to build AOSP for HiKey960






* * *











# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
