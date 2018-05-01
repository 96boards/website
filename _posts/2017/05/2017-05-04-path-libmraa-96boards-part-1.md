---
author: Mani_S
comments: true
date: 2017-05-04 21:40:27+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-1/
slug: path-libmraa-96boards-part-1
image:
    featured: true
    path: /assets/images/blog/path-libmraa-96boards-part-2-featured.png
    name: path-libmraa-96boards-part-2-featured.png
title: Our path to libmraa on 96Boards - Part 1
wordpress_id: 20355
categories:
- blog
tags:
- 96Boards
- ARM
- dragon board 410c
- DragonBoard
- embedded
- libmraa
- Linaro
- Linux
- mraa
- Open Hours
- open source
- OpenHours
- Robert Wolff
---

# **Introduction**


It's been about 2 weeks since I came to know about the existence of this cool library [‘libmraa’](https://github.com/intel-iot-devkit/mraa) This library was an initiative from Intel for their work towards building IoT ecosystem and later as like many open source projects it also utilized community efforts.  As of now, three of our CE boards are supported in this library ([Dragonboard410c](/product/dragonboard410c/), [Hikey620](/product/hikey/) and [Bubblegum](/product/bubblegum-96/)).


# **What's so special about this?**


Well, the first thing I like about this library is its ability to support many peripherals like gpio, i2c, spi, uart, pwm, iio, firmata and aio. In Order to develop any IoT project, you’d need to interface sensors/actuators and this library will take care of all low level framework, and in turn it provides easy to use api’s.

One more important thing to note is the programming interface. Although Linux kernel is completely written in C, for a vast majority of applications, developers prefer to use other crafty languages like C++, Python, Java etc… Similarly, libmraa also supports bindings(interfaces) in all languages mentioned above. This makes the library readily available to one who wants to quickly develop some projects.


# **Library breakdown**


Now it's time to look into the source of libmraa to get hold of its architecture. Well, this blog is not about explaining libmraa but indeed mentioning some important blocks of it. Major directories to watch out are:




  1. [api](https://github.com/intel-iot-devkit/mraa/tree/master/api) - contains headers for all peripherals/boards supported


  2. [examples](https://github.com/intel-iot-devkit/mraa/tree/master/examples) - contains examples in different languages


  3. [include](https://github.com/intel-iot-devkit/mraa/tree/master/include) - contains architecture and board specific files


  4. [src](https://github.com/intel-iot-devkit/mraa/tree/master/src) - contains source code for all peripherals/boards supported


Since this is a Linux library, the underlying code which interfaces to kernel must be written in C. So, the authors decided to write the low level code in C and provided bindings in different languages.


# **How to start?**


Before you start building projects with the help of libmraa, the library needs to be installed in the target system. Libmraa provides the library as package, so you can just install it like other packages and start using it. But there are people who want to customize the library and install it on their system like me :P

For these people, libmraa provides set of instructions on how to build and install the library in target. Link to instructions can be found below:




  1. [Install as package](https://github.com/intel-iot-devkit/mraa/blob/master/README.md)


  2. [Build and install](https://github.com/intel-iot-devkit/mraa/blob/master/docs/building.md)




# **Current support for 96Boards**


It’s worth mentioning the limitations in the library for 96Boards. Not all the peripherals supported by libmraa are enabled in 96Boards. As of now only gpio, i2c and spi support is enabled.

We are currently pushing more support for our 96Boards and their peripherals. 96Boards specific files can be found in below links:




  1. [Boards header](https://github.com/intel-iot-devkit/mraa/blob/master/include/arm/96boards.h)


  2. [Boards source](https://github.com/intel-iot-devkit/mraa/blob/master/src/arm/96boards.c)




# **libupm**


[libupm](https://github.com/intel-iot-devkit/upm) is another library created by Intel for providing high level api’s for commonly used sensors and actuators. This library makes use of libmraa for interacting with the hardware so you can’t use this library standalone. The combination of libmraa and libupm will allow developers to start programming on Linux boards seamlessly.


# **What is missing?**







  * **96Boards support**


    * This one is going to be the top priority for us. We are working on adding support for more boards in libmraa and also enabling the peripherals.





  * **Chardev access**


    * We planned to integrate new [chardev](https://patchwork.ozlabs.org/patch/580307/) gpio access introduced in Kernel 4.8 to libmraa.  This will replace the legacy sysfs interface for gpios in newer kernels. Also, this new way of accessing gpios seems to be faster and efficient.







# **Conclusion**


So, that’s it about libmraa and libupm from 96Boards perspective. If you think that I missed something about the library or if you have any idea for 96Boards support to this, do let us know in comments :)



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
