---
author: Radhika Paralkar
featured_blog: true
date: 2017-07-05 12:00:00+00:00
title: Introduction to Google Assistant using 96Boards
featured_image: google-assistant-96boards-feature.jpg
categories:
- blog
tags:
- 64-Bit
- 96Boards
- Android
- ARM Arm32
- Arm64
- ARMv8
- B2260
- Breakout
- Bubblegum
- Bubblegum-96
- CE
- Consumer
- Edition
- Consumer
- IoT
- DB410c
- Debugging
- Docker
- DragonBoard
- Dragonboard410c
- DragonBoard
- 410c
- F-Cue
- Gdb
- General
- Purpose
- Input
- Output
- GPIO
- Gui
- HiKey
- I2C
- I
- Squared
- C
- Library
- Linaro
- Linux
- Low
- Speed
- Expansion
- Header
- Maker
- MediaTek
- X20
- Mezzanine
- Open
- Embedded
- OpenHours
- Open
- Hours
- Open
- Source
- Qualcomm
- Reference
- Platform
- Rpb
- Sensors
- UART
---
# **Introduction**

**Google Assistant**, developed by Google in May 2016, acts as your virtual personal assistant and is available on a range of devices such as certain smart home appliances, your phone, wearables and more. The job of the assistant is to help the user with tasks such as carrying out searches on the internet, setting reminders or alarms etc. Now, how about implementing this using a DragonBoard? Sounds exciting? Well it is! These two blogs present to you a project that aims at deploying Google Assistant on a DragonBoard 410c by 96Boards.

This year in April, Google released a software development kit (SDK) which allows third party developers to build their own Google Assistant on hardware of their choice. The SDK lets us add features such as hotword detection, voice control and natural language processing to devices of our choice. In this project we will make our own version of Google Assistant using a DragonBoard 410c, a USB microphone and speakers.


{% include image.html name="google-assistant-96boards-feature.jpg" alt="Google Assistant with 96boards feature image" %}

# **Bill Of Materials**

Now here’s what you will need in order to get the Google Assistant up and running on your DragonBoard:

1.  [96Boards Consumer Edition DragonBoard 410c](https://www.96boards.org/product/dragonboard410c/)
2.  [USB Mic](https://www.amazon.com/Kinobo-Microphone-Desktop-Recognition-Software/dp/B00IR8R7WQ/ref=sr_1_1?s=pc&ie=UTF8&qid=1497040889&sr=1-1&keywords=adafruit+usb+microphone)
3.  Speakers (Any Bluetooth speakers would work)
4.  I/O Devices such as Mouse, Keyboard and a Monitor.

**That’s all!**

# **Why this project?**

Well why not! Like I mentioned earlier, Google just released the SDK a few months ago so that the Assistant can be implemented on a wide range of platforms. So as 96Boards enthusiasts, it is essential that we test it out on one of the boards. It would be a great learning process and nothing beats the feeling of having a fully working project in your hands.

By the end of this project you should be able to interface an external microphone as well as bluetooth speaker with the DragonBoard, create and configure a Google Developer Project on Google Cloud Platform (a developer project basically gives your device, a DragonBoard in this case, access to the Google Assistant API), use and understand gRPC bindings.

# **Game Plan!**

The next blog will provide detailed instructions on how to get started with the project. There are various aspects that need to be taken care of for the proper functioning of the application. We will go through each of them as thoroughly as possible. This should give you an idea of what to expect in the next blog.

* Setup the board with the necessary hardware.
* Configuring a developer project on Google Cloud Platform as well as the Google account settings.
* Download all the required packages and software dependencies
* Finally, integrating the Assistant onto DragonBoard

# **Conclusion**

So that’s all for now. In the next blog we will discuss the initial steps required for this project. So stay tuned!

* * *

# Resources

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124; [Facebook](https://www.facebook.com/96Boards/) &#124; [YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](https://www.96boards.org/newsletter/)” and our “[Weekly Digest](https://www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience – [OpenHours](https://www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea 😀

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
