---
author: sdrobertw
comments: true
date: 2016-06-08 19:22:58+00:00
layout: post
link: https://www.96boards.org/blog/96boards-box-experience-guide-5/
slug: 96boards-box-experience-guide-5
featured_image: Screen-Shot-2016-06-08-at-12.33.49-AM.png
title: 96Boards Out of box experience guide - part 5
wordpress_id: 15029
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
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
- dragonboard410c
- GPIO
- HiKey
- I Squared C
- I2C
- LED
- libmraa
- Library
- libsoc
- Linux
- Low speed expansion header
- Maker
- Mezzanine
- mraaU
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- rpb
- sensors
- UART
- UPM
---

Congratulations! Four whole blogs down and ready for the fifth. In this last month we have been through a lot of material, I think it deserves a short recap:




  * [Part 1](https://www.96boards.org/blog/96boards-box-experience-guide-1/): 96Boards delivery and unboxing, we explored the bare essentials for booting up your 96Boards for the first time!


  * [Part 2](https://www.96boards.org/blog/96boards-box-experience-guide-2/): 96Boards Consumer Edition comparison, which 96Boards is best for you? This blog will help you choose!


  * [Part 3](https://www.96boards.org/blog/96boards-box-experience-guide-3/): 96Boards add-ons, from mezzanine products to 3D printed accessories and fun! Plenty of resources were handed out during this blog!


  * [Part 4](https://www.96boards.org/blog/96boards-box-experience-guide-4/): General Purpose Input/Output (GPIO) and low speed expansion header, these interfaces help us manipulate and interpret data from the environment using our 96Boards! Diagrams, GPIO examples and plenty more resources can be found through this blog.


If you missed any of these sections you can always go back to read them and pair them with their recordings in the [96Boards Open Hours YouTube channel](https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk).

For this particular part of the blog we will not be diverging from the GPIO just yet. Since in the last blog we talked about this interface and went through a simple command line example, I thought it would be a good to expand from there. Here we will take a look at the 96Boards enabled GPIO libraries (as discussed by David Mandala in [last week’s Open Hours](https://www.youtube.com/watch?v=vzOy_WV_HwU)), then we will use one of them! Since David Mandala has already created a blog which outlines how to build these libraries ([Found here](https://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)), we will take a different approach.

Thanks to a few Linaro engineers, we are now able to use apt-get (in Debian Linux) to retrieve our 96Boards enabled libraries! This means it is no longer necessary to build from source, instead we can execute a simple command in our terminal to download and install the library of our choice. Before jumping into an example, we will first try to provide a small definition for each available library.



* * *





### [96BoardsGPIO](https://github.com/96Boards/96BoardsGPIO)


This is the rudimentary beginnings of the 96BoardGPIO library to control real world hardware via the GPIO on the 96Boards family of boards that confirm to the CE spec.
One of the cool things about the 96Boards CE project is that all of the boards use the same pins for the Low Speed Expansion Connector so you can plug any expansion board into any 96Board and it will connect electrically BUT there is an issue where GPIO is concerned. Different SoC's have different GPIO pins. So even though electrically the pins are in the same place it takes different code to enable and use the GPIO on pins 23 - 34. Not so fun.
The 96BoardGPIO library tries to abstract the info so that you can just tell it what board you are using and what pins you want to use and the library does the rest.

- Summary taken from [96BoardsGPIO github repository](https://github.com/96Boards/96BoardsGPIO)


### [Libsoc](https://github.com/jackmitch/libsoc)


Libsoc is a C library to interface with common peripherals found in System on Chips (SoC) through generic Linux Kernel interfaces.
It is aimed at new Linux users, and intends to be a stepping stone to enable a user to get started quickly. It is optimised for reliability rather than speed. While the library should be fast, no guarantees are made on it's determinism and it should not be used in time critical routines.

- Summary taken from [Libsoc github repository](https://github.com/jackmitch/libsoc)


### [Libmraa](https://github.com/intel-iot-devkit/mraa)


Libmraa is a C/C++ library with bindings to Java, Python and JavaScript to interface with the IO on Galileo, Edison & other platforms, with a structured and sane API where port names/numbering matches the board that you are on. Use of libmraa does not tie you to specific hardware with board detection done at runtime you can create portable code that will work across the supported platforms.
The intent is to make it easier for developers and sensor manufacturers to map their sensors & actuators on top of supported hardware and to allow control of low level communication protocol by high level languages & constructs.

- Summary taken from [Libmraa github repository](https://github.com/intel-iot-devkit/mraa)


### [UPM](https://github.com/intel-iot-devkit/upm)


The UPM repository provides software drivers for a wide variety of commonly used sensors and actuators. These software drivers interact with the underlying hardware platform (or microcontroller), as well as with the attached sensors, through calls to [MRAA](https://github.com/intel-iot-devkit/mraa) APIs.

Programmers can access the interfaces for each sensor by including the sensor’s corresponding header file and instantiating the associated sensor class. In the typical use case, a constructor initializes the sensor based on parameters that identify the sensor, the I/O protocol used and the pin location of the sensor.

C++ interfaces have been defined for the following sensor/actuator types, but they are subject to change:




  * Light controller


  * Light sensor


  * Temperature sensor


  * Humidity sensor


  * Pressure sensor


  * Gas sensor


  * Analog to digital converter


The developer community is encouraged to help expand the list of supported sensors and actuators and provide feedback on interface design.

- Summary was taken from [UPM github repository](https://github.com/intel-iot-devkit/upm)



* * *



As you may have noticed, a couple of these libraries have dependencies. This is to say, some libraries are unusable without the other:




  * 96BoardsGPIO library is dependent on the libsoc library


  * UPM library is dependent on the libmraa library.


I think that is enough information about the libraries. I would suggest taking some time to check out each repository (provided in the links above), pick through the source, and get familiar with what exactly is happening later. In just a little bit we will install one of those libraries on our 96Boards. Once the library is installed, we will pull down some sample code, build it, and run the program.


## Sample Application using libsoc


Let’s get started! As always, we want to make sure we have everything we need to execute our sample code.

_Please note: This example is meant to be run on Debian Linux_

**Step 1: Item check list**




  * 96Boards booted up into Debian Linux desktop ([Blog P1](https://www.96boards.org/blog/96boards-box-experience-guide-1/), [Blog P2](https://www.96boards.org/blog/96boards-box-experience-guide-2/))


  * [Power Supply](https://www.96boards.org/products/accessories/power/)


  * HDMI monitor


  * USB Keyboard and Mouse


  * [Linker Mezzanine kit](https://www.96boards.org/products/mezzanine/linker-mezzanine-starter-kit/) or [96Boards Sensor Mezzanine kit](https://www.96boards.org/products/mezzanine/grove-starter-kit/)


  * 96Boards baseboard mezzanine spacers, these spacers come with either Mezzanine kit


  * This example will make use of two sensors: Touch Sensor and LED or Buzzer


**Step 2: Safety first!**

In the following example we are going to take what we learned in the last part of this blog series (Part 4) and apply the concepts through the use of the [libsoc library](https://github.com/jackmitch/libsoc).

First things first, if you would recall from [Part 1](https://www.96boards.org/blog/96boards-box-experience-guide-1/), 96Boards safe handling is paramount, especially when using the GPIOs on the low speed expansion header. Bridging the gap between two pins on the low speed expansion header (more commonly known as “shorting”) could not only cause your board to restart or act weird on the software side, it could destroy it all together by frying essential hardware components.

This is why we will be very careful when connecting our mezzanine board. Whether you are using the Linker kit or the 96Boards Sensor kit, they both plug unto the low speed expansion header in the same way.

**Step 3: Connect your mezzanine board (must have GPIO breakout, example found in parts list above)**




  * Your 96Boards should NOT be plugged into the power


  * Screw in all four 96Boards baseboard spacers


    * These spacers will keep the mezzanine board at the perfect distance from the baseboard.





  * Carefully connect your mezzanine board to your 96Boards


    * Make sure all pins are aligned properly! This is very important


    * If your pins are not aligned properly, the board WILL short when it is plugged into power (magic white smoke warning!)





  * Sensors can be plugged into GPIO breakouts on mezzanine (if desired)


  * Once we pull down the sample code, we will be able to choose which GPIOs we want to use for our two sensors.


![Screen Shot 2016-06-08 at 12.33.49 AM]({% asset_path "oob-experience-img-1.png" %}){:class="img-responsive lazyload"}  ![Screen Shot 2016-06-08 at 12.33.29 AM]({% asset_path "oob-experience-img-2.png" %}){:class="img-responsive lazyload"}

**Left:** Mezzanine connected to 96Boards baseboard
**Right:** Top view of 96Boards Sensors kit board with GPIO location enclosed in red boxes.

**Step 4: Connect everything else**




  * Connect HDMI cable to 96boards and monitor


  * Connect USB mouse and keyboard


**Step 5: Plug your 96Boards baseboard into power**




  * Once again, it is important to make sure all low speed expansion header pins are lined up properly and flush with spacers between the mezzanine board and baseboard.


**Step 6: Open the terminal application on your 96Boards**

Start menu > other > LXTerminal (right click this to add to desktop if you desire)

**Step 7: Update 96Boards system**

The image on your board might be out of date. This is possible even when using the stock image (the operating system your board was shipped with), or a newly flashed version from the 96Boards.org website.

A few useful commands will help us make sure everything on the board is current:




  * **apt-get update:** Downloads package lists from online repositories and "updates" them to get information on the newest versions of packages and their dependencies.


  * **apt-get upgrade:** Fetches and installs newest package versions which currently exist on the system. APT must know about these new versions by way of 'apt-get update'


  * **apt-get dist-upgrade:** In addition to performing the function of upgrade, this option also intelligently handles changing dependencies with new versions of packages


**Commands:**

$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade

If you do not have git, it is suggested to get it:

$ sudo apt-get install git

_Note: If at any point during this process you are prompted with a 'Y/N', select Y and press Enter._

**Step 8: Install Library**

This will install the libsoc developer package on your 96Boards.

**Commands:**

$ sudo apt-get install libsoc-dev

**Step 9: Clone the sample code!**




  * Create a new folder and `cd` into this new directory, this is where we will clone our sample code.


  * Clone code and `cd` into sample code directory


**Commands:**

$ git clone [https://github.com/dmandala/library_test.git](https://github.com/dmandala/library_test.git)
$ cd library_test
You can check the contents of this directory by executing the `ls` or `ls -la` command

You should have:




  * AC-ledGPIO.c (push button led code using 96BoardsGPIO library)


  * AC-ledMRAA.cpp (push button led code using libmraa library)


  * AC.ledSOC.c (push button led code using libsoc library)


  * README.md (Readme document with full compilation and run instructions!)


**Step 10: Check README.md and desired sample code file for more information**

Use your favorite text editor to view the readme.md and AC-ledSOC.c files for more information. For this example I will use vim. We are only reviewing the AC-ledSOC.c code because we are only using the libsoc library in this blog.

$ vim README.md

$ vim AC-ledSOC.c

There is one crucial section of code in the AC-ledSOC.c file! This is where we will choose the GPIOs we wish to use. Let’s take a look:

Found on lines 42-47

{
board_config *config = libsoc_board_init();
GPIO_BUTTON = libsoc_board_gpio_id(config, "GPIO-A");
GPIO_LED = libsoc_board_gpio_id(config, "GPIO-C");
libsoc_board_free(config);
}

Here it is important to note the GPIO values that are set by default for this sample program. You can change these values to which ever GPIOs you wish to use on your board.

**Step 11: Plug in sensors**




  * GPIO_BUTTON should be plugged into GPIO-A on your mezzanine


  * GPIO_LED should be plugged into GPIO-C on your mezzanine


**Step 12: Compile code**

$ gcc AC-ledSOC.c -o AC-ledSOC -lsoc

**Step 13: Run program**

$ sudo ./AC-ledSOC

DONE!

At this point you should have a functioning program! The hope is that when you use the touch sensor/button, it will activate whatever sensor is set to the output end (the GPIO_LED variable)

Hopefully this basic walkthrough has helped you gain a better understanding of how the 96Boards enabled libraries work, and how to use them. This particular blog has already been turned into a permanent useful resource located on our [documentations page](https://www.96boards.org/documentation/ConsumerEdition/GPIO/Beginner/README.md/)! I would suggest using the other two examples found in David Mandala’s README.md file as practice. Once you have executed the sample code with all three libraries you can move on to a larger set of examples found [here](https://www.96boards.org/documentation/ConsumerEdition/GPIO/Examples/README.md/)!

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](https://webchat.freenode.net/) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](https://www.96boards.org/openhours/)

Don’t forget about the [Open Hours](https://www.96boards.org/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

--

[**In this series**](https://www.96boards.org/tag/openhours/)




  * [96Boards Out of box experience guide – part 1](https://www.96boards.org/blog/96boards-box-experience-guide-1/)


  * [96Boards Out of box experience guide – part 2](https://www.96boards.org/blog/96boards-box-experience-guide-2/)


  * [96Boards Out of box experience guide – part 3](https://www.96boards.org/blog/96boards-box-experience-guide-3/)


  * [96Boards Out of box experience guide – part 4](https://www.96boards.org/blog/96boards-box-experience-guide-4/)


  * [96Boards Out of box experience guide – part 5](https://www.96boards.org/blog/96boards-box-experience-guide-5/) (This)
