---
author: Radhika Paralkar
comments: true
featured_blog: true
date: 2017-06-22 12:00:00+00:00
layout: post
link: https://www.96boards.org/blog/96boards-magic-8-ball-digital-hourglass/
slug: 96boards-magic-8-ball-digital-hourglass
title: Story of a 96Boards Magic 8-Ball and Digital Hourglass
wordpress_id: 20519
image:
    featured: true
    path: /assets/images/blog/8-ball-feature.jpg
    name: 8-ball-feature.jpg
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

# **Introduction**

New to using DragonBoards? We have for you two really simple projects to help you get started with some basics. We will be using a DragonBoard and a Sensors Mezzanine Board for the same. Meant for beginners, these projects go through some of the very basic concepts like connecting the Mezzanine board with the DragonBoard, interfacing an LCD and a Touch Sensor Module with the board and installing the necessary libraries.

In the Digital Hourglass project, we will basically build a timer which takes in user input for the time to be measured and prints a character on the display at certain intervals till the time is up. Here, I have implemented a count-up timer which flashes “TIME UP” on the display in the end.

The Magic 8 Ball application displays messages on the LCD when the touch sensor module is tapped. There are 20 statements out of which any one can appear randomly at each tap on the sensor. So let’s begin!

# **Prerequisites**

## **Hardware requirements**

1.  [DragonBoard 410c](/product/dragonboard410c/)
2.  [Sensors Mezzanine](/product/sensors-mezzanine/)
3.  Micro USB Cable
4.  [Grove-LCD 16×2 RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)
5.  [Grove Touch Sensor Module](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## **Package dependencies**

Make sure you have the following two libraries installed along with the source code.

**UPM Library**

`$ sudo apt-get install libupm-dev`

**MRAA Library**

`$ sudo apt-get install libmraa-dev`


**Source Code**

```bash
$ git clone https://github.com/96boards-projects/hourglass
$ git clone https://github.com/96boards-projects/magic8
```

# **Instructions**

Now that you have the libraries and the source code ready, let’s begin with hardware connections. Always make sure that the power supply is NOT connected while making or modifying any connections. First, connect the Sensors Mezzanine board onto the DragonBoard via the low-speed expansion connector on both boards. Instructions to do that can be found [here](https://github.com/96boards/Sensor_Mezzanine_Getting_Started/blob/master/README.md). Use the Grove Universal 4 pin cables to connect the LCD to I2C0 and the touch sensor module on GPIO G3\. That’s it! We’re all set to run our application.

![8Ball Digital Hourglass Image 1]({% asset_path "8-ball-img-1.png" %}){:class="img-responsive lazyload"}
![8Ball Digital Hourglass Image 2]({% asset_path "8-ball-img-2.jpg" %}){:class="img-responsive lazyload"}

![8Ball Digital Hourglass Image Feature]({% asset_path "8-ball-feature.jpg" %}){:class="img-responsive lazyload"}

If you change the working directory to hourglass, you will find a makefile and the source code. You can go through the code to get an idea of what exactly is happening. While including the .h files, make sure that the path to the library matches the one in your system. Now, you can go ahead to build and execute the program.

```bash
$ cd hourglass
$ make
$ ./hourglass
```

{% include media.html media_url="https://www.youtube.com/embed/LXQDQ833CT4" %}


You can see that the display has the initial message printed on it which prompts the user to enter time in minutes. Once you enter the time, you will find the LCD filling up with characters till the time is up.

Similarly for the magic 8 ball application,

```bash
$ cd magic8
$ make
$ ./magic8
```

{% include media.html media_url="https://www.youtube.com/embed/nY3zzHqJplk" %}


In this application, the input is nothing but the touch sensor readings. Every time a tap gets detected on the sensor, it generates a random number from 0-19 using the rand() function. Associated with each number is a string that is displayed onto the LCD. You can play around with the code to modify the statements

# **Conclusion**

So that’s about it in this one! These projects should help you get started with 96Boards and get comfortable with the working environment.

* * *

# Resources

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) "| ["Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) "| ["Facebook](https://www.facebook.com/96Boards/) "| ["YouTube](https://www.youtube.com/c/96boards)

"For those of you who prefer a mailing list, we have just the one for you! You can choose between our “["Monthly Newsletter](/digest/)"” and our “["Weekly Digest](/digest/)"”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

"Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience – ["OpenHours](/openhours/)". All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea 😀

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

"Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the ["96Boards forums](https://discuss.96boards.org/)", ["96Boards documenation landing page](https://github.com/96boards/documentation/)", and/or ["Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) "channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
