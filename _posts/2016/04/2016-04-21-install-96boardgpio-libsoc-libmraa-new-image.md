---
author: davidm
comments: true
date: 2016-04-21 13:00:42+00:00
layout: post
link: https://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/
slug: install-96boardgpio-libsoc-libmraa-new-image
featured_image: lcelc-elc-edited2.jpg
title: How do you install 96BoardGPIO, libsoc and libmraa on a new image?
wordpress_id: 13778
categories:
- blog
tags:
- 64-bit
- Android
- ARM
- ARMv8
- Consumer IoT
- dragonboard410c
- GPIO
- HiKey
- libsoc
- Linux
- mraa
- Open Embedded
---

As I mentioned in a [prior blog post](/blog/access-gpio-pins-programmatically/), I’m just back from the Embedded Linux Conference 2016 in San Diego. There I attended some keynote sessions, had a lot of hallway conversations and worked in the Linaro booth. I was also asked to do some training on how to easily access the GPIO, I2C and SPI on 96Boards hardware. With all of that happening I have a few blogs to write about the week. I first addressed how to access the hardware using one of three libraries. In this blog entry I’ll address how to download and install the libraries onto a new pristine image. In the future this may not be required because the libraries will be packaged up and installed by default on all 96Boards Reference platform images, but for now, here is a path to installing the libraries. That said, if you roll your own image you might need these instructions even in the future.

This blog entry assumes you just flashed a clean, new Linux 96Boards build image onto your 96Boards hardware (Ubuntu or Debian), you’ve powered it up, attached it to an HDMI monitor with a keyboard and mouse, and you have connected to WiFi, or installed a USB-Ethernet dongle and have that hooked up. In any event, you must be connected to the Internet.


## Update the installed image


First things first, the image might be slightly out of date so let’s use the built-in tools to update the image as needed.


    $ sudo apt-get update


This will run for a bit; when it’s finished, do:


    $ sudo apt-get upgrade


This too will run for a while, but if prompted for Y/N select Y. When it’s finished, do:


    $ sudo apt-get dist-upgrade


This step might be quick or might take some time;t when it’s finished we need to install some software as below.


## Install package dependencies




    $ sudo apt-get install git build-essential autoconf automake libtool swig3.0 python-dev nodejs-dev cmake pkg-config libpcre3-dev


This will run for a bit, depending on your connection. It will download a bunch of software and install it. If prompted for Y/N select Y. Once it’s finished run:


    $ sudo apt-get clean




## Install 96Boards configuration files




    $ git clone https://github.com/96boards/96boards-tools.git<Enter>

    $ sudo cp 96board-tools/70-96boards-common.rules /etc/udev/rules.d/<Enter>


As root and using your favorite text editor edit /etc/profile.d/96boards-sensors.sh and add/update the following lines (For this example I use the “vi” text editor):
export JAVA_TOOL_OPTIONS=”-Dgnu.io.rxtx.SerialPorts=/dev/tty96B0”
export MONITOR_PORT=/dev/tty96B0
export PYTHONPATH=”$PYTHONPATH:/usr/local/lib/python2.7/site-packages”


    $ sudo vi /etc/profile.d/96boards-sensors.sh<Enter>

    $ sudo cp /etc/profile.d/96boards-sensors.sh /etc/X11/Xsession.d/96boards-sensors <Enter>




## Installing Libraries


Before you can install libraries, you must have updated the installed image and installed the extra package dependencies. You do not have to install all of the libraries, you can install just libsoc or just mraa but if you want 96BoardsGPIO you MUST install libsoc first. If you want the upm library (an extra helper library for mraa), you MUST install mraa first.
96BoardsGPIO and libsoc are “C” libraries, mraa and upm are “C++” libraries so if you prefer to use “C” then 96BoardsGPIO and libsoc are for you. If you prefer to use “C++” then mraa and upm are for you.


### Install and build libsoc:




    $ git clone https://github.com/jackmitch/libsoc.git<Enter>
    $ cd libsoc<Enter>
    $ ./autogen.sh<Enter>
    $ ./configure --enable-python2 --enable-board=<your board><Enter>
    Where <your board> is dragonboard410c or hikey or another supported board in the future.
    $ make && sudo make install<Enter>
    $ sudo ldconfig /usr/local/lib<Enter>




### Install and build 96BoardsGPIO




    This library requires libsoc to be installed first.

    $ git clone https://github.com/96boards/96BoardsGPIO.git<Enter>
    $ cd 96BoardsGPIO<Enter>
    $ ./autogen.sh<Enter>
    $ ./configure<Enter>
    $ make && sudo make install<Enter>
    $ sudo ldconfig /usr/local/lib<Enter>




### Install and build MRAA library




    $ git clone https://github.com/intel-iot-devkit/mraa.git<Enter>
    $ mkdir -p mraa/build<Enter>
    $ cd mraa/build<Enter>
    $ cmake ..<Enter>
    $ make <Enter>
    $ sudo make install<Enter>
    $ sudo ldconfig /usr/local/lib<Enter>




### Install and build UPM library


UPM is an object oriented library of drivers for many I2C devices. This library takes more than 20 minutes to build.


    $ sudo ln -s /usr/bin/swig3.0 /usr/bin/swig
    $ git clone https://github.com/intel-iot-devkit/upm.git<Enter>
    $ mkdir -p upm/build<Enter>
    $ cd upm/build<Enter>
    $ cmake -DBUILDSWIGNODE=OFF ..<Enter>
    $ make <Enter>
    $ sudo make install<Enter>
    $ sudo ldconfig /usr/local/lib/libump-*<Enter>




### Reset the system to pick up all of the changes




    $ sudo reboot<Enter>




## Use the installed libraries


Now that the library or libraries of your choice are installed you can start development. As a test you can go to github.com and download some very simple code that is known to compile, link and run. The sample code will use GPIO-A and GPIO-C. When GPIO-A is toggled high, GPIO-C will change state to the opposite state. If you have an [Arrow LinkSprite board](https://www.arrow.com/en/products/96boards-starter-kit/linksprite-technologies-inc) or a [Seeed Studios Sensor Board Starter Kit](http://www.seeedstudio.com/depot/Grove-Starter-Kit-for-96Boards-p-2618.html) you can connect the touch switch on GPIO A and the LED on GPIO-C and turn it on and off as a test. The code used in this post can be found [here](https://github.com/dmandala/library_test)


### Install and build test code




    $ git clone https://github.com/dmandala/library_test.git<Enter>
    $ cd library_test<Enter>
    $ cat README.md<Enter>


Follow the instructions in the README.md file and you will exercise the libraries.

Once you have validated the board and the code is working, think about how you would prefer to work and look at the sources to that library. Have fun.
