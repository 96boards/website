---
author: sdrobertw
comments: true
date: 2016-06-01 08:41:42+00:00
layout: post
link: https://www.96boards.org/blog/96boards-box-experience-guide-4/
slug: 96boards-box-experience-guide-4
featured_image: 96Boards_LS_pinout-1.jpg
title: 96Boards Out of box experience guide - part 4
wordpress_id: 14887
Boards:
- DragonBoard 410c
- HiKey
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
- Library
- Linux
- Low speed expansion header
- Maker
- Mezzanine
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- rpb
- sensors
- UART
---

Hello again, and welcome to part 4 of the out of box experience guide. This week we will be looking at the low speed expansion header on your 96Boards. The low-speed expansion header is where all of your “usable” general purpose input/output (GPIO) interfaces are located. In [last week’s blog](/blog/96boards-box-experience-guide-3/) we spoke about the mezzanine product line and sensors, in [open hours](https://youtu.be/k7QR_KlXMRc?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk), we talked about how these boards help us to gain physical access to these interfaces. Now, in this part of the series we will access the GPIOs programmatically using the command line on your favorite 96Boards.

First things first, what is the low speed expansion header? As mentioned, the low-speed expansion header is where all of your GPIO interfaces are located. This particular header is 2x20, 2.0mm pitch, with female pins. Lets answer a couple questions on the low speed expansion header before we move on:

**Where is the low speed expansion header?**
The low-speed expansion header is the black protrusion found on the same side as the DC barrel jack (the component between the barrel jack and the low speed expansion header will differ based on your 96Boards)

**What is a 2x20 header?**
A 2x20 (read as “two by twenty”) header has 40 pins, two pins in each row, and twenty pins in each column.

**What is a 2.0mm pitch?**
The pitch is the distance between the center of each pin in either direction. By convention the 2.0mm pitch tells us that devices with a pitch other than 2.0mm should not be used with this header. The voltage will most likely differ.
{% include image.html name="96boards-box-5-img-1.png" alt="Screen Shot 2016-05-04 at 3.19.00 PM"%}

Below is an image of the DragonBoard™ 410c (one of our 96Boards), and a diagram illustrating the interfaces available on the low-speed expansion header. Even though the DragonBoard 410c is used in this example, all 96Boards can be paired to this diagram.

{% include image.html name="96boards-box-5-img-2.png" alt="Screen Shot 2016-05-05 at 1.25.25 PM" %}
{% include image.html name="96boards-box-5-img-3.jpg" alt="96Boards_LS_pinout" %}


As you can see, this particular header is home to the many usable GPIO interfaces: [GPIO](), [I2C](), [SPI](), and [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver/transmitter). If you would recall from last week’s blog, members of the 96Boards community and other third party vendors have created a variety of "Mezzanine" products to make accessing these interfaces easier. To read more about the line of Mezzanine products please visit the [Mezzanine Products Page](https://github.com/96boards/documentation/blob/master/mezzanine/README.md).

In the part of the series, we will only focus on GPIOs (Green columns). In later parts we will go over some of the other interfaces available on this header.

Looking at the green columns in the diagram, we see the GPIOs valued from A to L, this is according to the 96Boards specification. In reality each board (more specifically, each SoC) has different values for each of their usable GPIOs. This means the GPIO value for GPIO_A on a DragonBoard 410c will most likely not be the same as the GPIO value of GPIO_A on a HiKey or a Bubblegum-96.

Since each SoC has different GPIO values I had uploaded several of these diagrams, one or more for each 96Boards.

**96Boards**
{% include image.html name="96Boards_LS_pinout.jpg" alt="Lettered" %}
**HiKey**
{% include image.html name="HiKey_Debian_pinout.jpg" alt="Debian" %}
**DragonBoard 410c**
{% include image.html name="DB410c_Debian_pinout.jpg" alt="Debian" %}

 ([Debian]()  / [Android]() )
**Bubblegum-96** ([Debian]() )

Now that you have gained some familiarity with the low speed expansion header on your 96Boards, it’s time to take a closer look at the GPIO interface. This is the interface we will be interacting with in just a bit.


## **GPIO Defined**


General purpose Input/Output pins or GPIO are pins that go generally unused by default and are said to have no defined special purpose. This means the user maintains decisive control over the GPIO pins and their actions. That being said, these GPIO are capable of performing a variety of user driven actions. Below is a list of potential capabilities of the GPIO pins as seen on [https://en.wikipedia.org/wiki/General-purpose_input/output](https://en.wikipedia.org/wiki/General-purpose_input/output)

**GPIO capabilities may include:**




  * GPIO pins can be configured to be input or output


  * GPIO pins can be enabled/disabled


  * Input values are readable (typically high=1, low=0)


  * Output values are writable/readable


  * Input values can often be used as IRQs (Interrupt), typically for wakeup events


Here it is important to note the GPIO pins are configurable, and can be set as an input or output. With that, we see values can be written onto, or read from these interfaces (GPIO), typically as discrete values of 0 and 1 (High or Low). Being able to read and write values to these pins allows simple and quick communication with peripheral devices. These devices in turn help the 96Boards to interpret and communicate with the environment or other devices. All Single Board Computers are not the same, and will usually differ in many ways. 96Boards have 12 GPIO pins, one of which is multi-purpose (note the diagram).

Okay! You should know enough about the GPIO, I think it’s time to get your hands dirty. In this next part you will be working directly on your 96Boards. Regardless of the 96Boards you are using, you should be able to follow these steps by making sure to use the correct GPIO_# corresponding to the GPIO pin you wish to toggle (Remember: usable GPIOs occupy the same pins on all 96Boards, the GPIO_# is what changes).

The remainder of this blog will focus on programming GPIOs using the terminal, this will require you to be running Debian Linux on your 96Boards. If you are not already running this OS, please visit your 96Boards landing page for installation instructions. ([HiKey](https://github.com/96boards/documentation/blob/master/ConsumerEdition/HiKey/Installation/README.md), [DragonBoard 410c](https://github.com/96boards/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Installation/README.md), [Bubblegum-96](https://github.com/96boards/documentation/blob/master/ConsumerEdition/Bubblegum-96/Installation/README.md))




## **Toggle a GPIO using the command line**


Your 96Boards should be booted into the Debian Linux desktop environment before you proceed.

**Step 1: Item check list**




  * 96Boards booted up into Debian Linux desktop ([Blog P1](/blog/96boards-box-experience-guide-1/), [Blog P2](/blog/96boards-box-experience-guide-2/))


  * Mezzanine board with LED ([Blog 3](/blog/96boards-box-experience-guide-3/)) or equivalent. (a multimeter can be used to measure the voltage change when toggling GPIO pin. You can probe the pin directly, use this if you do not have a Mezzanine board. Voltage should toggle between zero and ~1.8 volts)


**Step 2: Connect the desired device you wish to toggle**

It is recommended to use a Mezzanine board with the LED add-on. Note the GPIO you are using on the Mezzanine board, they are labeled with letters. Each letter corresponds to a pin, and each pin corresponds to your board specific GPIO number.

Using the diagrams above, you should be able to match the pin number to a letter, and that letter to the value of the GPIO on your particular board.

For Example: Pin#23 by convention is GPIO_A, for the DragonBoard 410c Pin#23 is GPIO_36. If you wish to toggle GPIO_A on your Mezzanine, you must toggle GPIO_36 within your terminal.

**Step 3: Open the terminal application on your 96Boards**

Start menu > other > LXTerminal (right click this to add to desktop if you desire)

**Step 4: Give yourself Super User access**
`$ sudo su`
Giving yourself superuser access will allow you to modify the GPIOs (if you get an access denied for a GPIO, it means you’re trying to modify a GPIO the board is using for itself)

**Step 5: Navigate to the gpio folder**
`$ cd /sys/class/gpio`
**Step 6: Export desired GPIO**
`$ echo GPIO_# > export`
Example:
`$ echo 36 > export`
**Step 7: Navigate to the exported GPIO folder**
`$ cd gpio[GPIO_#]`
Example:
`$ cd gpio36`
**Step 8: Check direction of GPIO (optional)**
`$ cat direction`
This will tell you the current direction of the GPIO pin you are currently planning to use.

**Step 9: Change direction of GPIO**
`$ echo "out/in" > direction`
Example:
`$ echo "out" > direction`
This will set the direction of the GPIO to “out”. This will only change the direction of my current GPIO directory.

**Step 10: Change value of GPIO**
`$ echo 0/1 > value`
Example:
`$ echo 1 > value`
This will set the value of the GPIO to “high”. This will only change the value of my current GPIO directory.

You can then set the GPIO back to “0” to turn off your device.
`$ echo 0 > value`
If all went well, you should have toggled an LED using the basic GPIO commands in the terminal!

This is only the beginning when it comes to using your 96Boards GPIO interfaces. I encourage you all to read the following blogs by Linaro’s Davin Mandala. In these blogs he discusses more advanced ways to access the GPIOs programmatically, this includes downloading, building, and installing several 96Boards enabled GPIO libraries.

[How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)
[How do you install 96BoardGPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)

Once you have read through these blogs, you can check out our new [96Boards GPIO landing page](https://github.com/96boards/documentation/blob/master/ConsumerEdition/guides/gpio.md) to get even easier access to these libraries. The landing page includes tutorials for library installation, sample code, and multiple fun gpio projects.

Since the beginning of this series, it has been my goal to take it slow. A good foundation is important, and it must be built with correct information and a well organized bank of resources. As we steer deeper into the 96Boards universe, you will find yourself collecting links, cheatsheets, sample code, examples, diagrams, schematics, and so much more! It is important to stay organized. I would suggest starting your collection now, it will pay off in the long run.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

In next week’s blog we will continue to explore the 96boards GPIO interfaces. We will take a better look at the various 96Boards enabled libraries, and go through the download and installation process using the [GPIO beginner’s guide]()https://github.com/96boards/documentation/blob/master/ConsumerEdition/GPIO/Beginner/README.md. Once we have mastered our sample code, we will begin with our next GPIO interface, the [I2C](https://en.wikipedia.org/wiki/I²C).

--

[**In this series**](/tag/openhours/)




  * [96Boards Out of box experience guide – part 1](/blog/96boards-box-experience-guide-1/)


  * [96Boards Out of box experience guide – part 2](/blog/96boards-box-experience-guide-2/)


  * [96Boards Out of box experience guide – part 3](/blog/96boards-box-experience-guide-3/)


  * [96Boards Out of box experience guide – part 4](/blog/96boards-box-experience-guide-4/) (This)
