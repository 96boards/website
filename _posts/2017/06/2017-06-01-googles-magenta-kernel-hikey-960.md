---
author: sdrobertw
comments: true
date: 2017-06-01 16:20:04+00:00
layout: post
link: https://www.96boards.org/blog/googles-magenta-kernel-hikey-960/
slug: googles-magenta-kernel-hikey-960
title: Google’s Magenta Kernel On The Hikey 960
wordpress_id: 20437
image:
    featured: true
    path: /assets/images/blog/Screenshot-360.png
    name: Screenshot-360.png
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- bubblegum-96
- Consumer IoT
- Fuchsia OS
- HiKey
- HiKey960
- Kernel
- Linaro
- Linux
- Magenta
- Open Embedded
- Open Hours
- open source
- OpenHours
- Robert Wolff
- Sahaj Sarup
---

# **Introduction**


_**- Written by guest Author, [Sahaj Sarup](https://twitter.com/sahajsarup)**_

_I would like to start off by thanking Sahaj Sarup for providing all of the necessary materials for this blog. Including draft material, images, BoM, preliminary instructions and code._

Magenta is a new kernel developed by Google from scratch, written mainly in C and C++. It follows the microkernel architecture and is the core platform that powers the Fuchsia OS. Magenta is composed of a microkernel (source in kernel/...) as well as a small set of userspace services, drivers, and libraries (source in system/...) necessary for the system to boot, talk to hardware, load userspace processes and run them, etc.

Magenta is heavily based on the Little Kernel (LK). However unlike LK which is designed for embedded applications, Magenta targets modern phones and modern personal computers with fast processors, non-trivial amounts of ram with arbitrary peripherals doing open ended computation.

{% include media.html media_url="https://www.youtube.com/embed/Cknc3_A5PLo" %}



# **Getting it to run on the Hikey 960**


With a recent update to the source, Google added initial support for the HiKey960.

And the instructions to get it running on the HiKey960 can be found here:

[https://github.com/fuchsia-mirror/magenta/blob/master/docs/targets/hikey960.md]()


# **Prerequisites and Troubleshooting**


Before we get started with building Magenta, I would recommend going through the “Getting Started Guide” which would help you setup your build environment.

**NOTE:** I would recommend sticking with Ubuntu, I have tried Arch Linux and Ubuntu running under docker and had issues with both.

After that I would recommend cloning the [https://github.com/96boards-hikey/tools-images-hikey960](https://github.com/96boards-hikey/tools-images-hikey960) repository and adding the build-from-source folder to your PATH variable for the mkdtimg command.


    export PATH=$PATH:<path to tools-images-hikey960>/build-from-source


Next, I’ve had issues with running the ./scripts/flash-hikey script using sudo, for some reason it cannot find the mkdtimg command even though it is in the env PATH.

To resolve that we need to run the script without using sudo and for that we need to add sudo at the beginning of the last three in in the <work dir>/scripts/flash-hikey file where it executes the fastboot command.


# **What works and what doesn’t**


At the moment the implementation of the Magenta kernel on the HiKey960 is at a very early stage, keeping that in mind:

**What works:**




  1. Boots up to shell


  2. UART


**What Doesn’t:**




  1. HDMI


  2. USB


  3. Wifi / Bt


  4. Everything else not mentioned above





* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!




  * **Sahaj Sarup:** [Twitter](https://twitter.com/sahajsarup) &#124;[YouTube](http://youtube.com/sahajsarup) &#124;[Blog](http://geektillithertz.com/wordpress)


  * **96Boards:** [Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)


For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
