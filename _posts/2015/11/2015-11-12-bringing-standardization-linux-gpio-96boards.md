---
author: davidm
comments: true
date: 2015-11-12 11:16:10+00:00
layout: post
link: https://www.96boards.org/blog/bringing-standardization-linux-gpio-96boards/
slug: bringing-standardization-linux-gpio-96boards
featured_image: DragonBoard-UpdatedImages-side.png
title: Bringing Standardization to Linux GPIO for 96Boards
wordpress_id: 9175
Boards:
- DragonBoard 410c
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DragonBoard 410c
- HiKey
- Linaro
- Linux
- Open Embedded
---

Last time I published I talked about the DragonBoard 410c and the challenges I had working with the GPIOs when running Linux; they work well, but if you try and port the code to another board in the 96Boards family you probably have to rewrite the code a bit with different designated SoC GPIO pin numbers, which IMHO, is not so good.

Here is the problem as I see it, in the same way that the low- and high-speed connectors are electrically standardized you should be able to write an application that can use GPIO across the entire [96Boards](/) family of hardware, and that application should be independent of specific boards (beyond running on the supported generic hardware, i.e. 32-bit or 64-bit). An app compiled on a 64-bit machine should run on all of them and the same for 32-bit. No recompile, no tweaking code, no fuss no muss. It would be ideal if the application programmer did not need to care or even know what board they were running/developing on.

How do we get there?... Well, a shared library has potential.

When running Linux, how do we know what board we are on programmatically? Look in /sys right? Nope, sometimes we have the SoC name but not the board name, why does that matter? You could build two different boards both to the 96Boards CE spec, both using the same SoC but exporting different pins, so that won’t always work, so looking in /sys today won’t work. How about /proc? Nope, no board name there either. Can we import the name via DeviceTree? Well we could…. but, some of these boards don’t have to use DeviceTree. In fact, in the future, many of them will use UEFI and will not use DeviceTree at all. Oh well, this is an issue for the kernel guys to figure out somehow. So where does that leave me? Well we can add a conf file in /etc when you install the library, so I wrote a little C application that took a board name and output data to stdio. You have to tell it what board you are on but once the data is in a configuration (conf) file in /etc any applications on the board can simply look at the conf file to know what it’s running on to do the correct thing. Simple. And if we can bypass that step in the future, even better.

What do we put in the conf file? I decided on a lookup table, the 96Boards GPIO identifier and the SoC activation pin number. Easy, clean and easy to parse into a shared library on startup. I still want to be able to use the low-speed pin numbers but that is a direct lookup array so it works. Now on to the library. Need Init_library call to look at the conf file, an open call to activate a GPIO pin, a read and write call and a close call. Simple, good enough for the demo, not quite good enough for the real world, but I can get to the rest once I prove the concept.

To get started, I need to create a shared library and be able to read and write to the GPIO pins and I want that to be as easy as possible for folks that are not full time developers. After thinking about this for a bit I realized that a lot of people that are not full time developers have been developing things on an Arduino and that has a nice simple interface: digitalRead and digitalWrite so that’s what I’ll use. That will need a few calls to set it up, close it down and such so I ended up with the following calls:

  1. init_96Boards_GPIO_library
  2. open_GPIO_Board_pin_number
  3. open_GPIO_by_letter
  4. setup_GPIO
  5. digitalWrite
  6. digitalRead
  7. close_GPIO
  8. close_96Boards_GPIO_library

Not bad, for the first implementation. I used a C struct to track the data needed by the calls and by the end of the week I had a shared library that worked for what I needed for the demo and the demo binary worked on both a [DragonBoard 410c](/products/ce/dragonboard410c/) and the [HiKey](/products/ce/hikey/) with no changes. All good so far, I put it under the LGPL 2.1 license, called it 96BoardsGPIO (maybe not the best or most original name) and loaded it up to the [https://github.com/96boards/96BoardsGPIO](https://github.com/96boards/96BoardsGPIO) on github. Now you have to understand, the make files were rudimentary, the code was not as well tested or designed as I would want long term, but it was good enough for a demo.

Fun fun, within an hour I had an open issue, one of the many engineers at Linaro posted the question “Have you looked at [https://github.com/jackmitch/libsoc](https://github.com/jackmitch/libsoc)?” My answer was “nope, I did not know about it,” so I took a look. To quote the github repository “libsoc: C library for interfacing with common SoC peripherals through generic kernel interfaces”. It’s a really nice shared library designed to make using I2C, SPI, and GPIO. It suffered from two problems from my point of view: 1) While very robust it was very complex. 2) It did not address all the areas I wanted targeted in making all 96Boards accessible in the same way from code. I chose not to use it for my demo as it was not suitable in its current state. That said, it was very clear that the library was about 2 years further along than 96BoardsGPIO library was and it had features that were clearly needed: Interrupt driven I/O, better control of the GPIO pins and it had I2C and SPI already nicely coded, all of which we need on 96Boards. I looked up the maintainers name and email address (no big trick since he supplies it on github), and sent off an email explaining what I was trying to do and asked if he would be willing to accept patches to bring libsoc into line with my desires for 96Boards. Took a little bit of time but I got an email back saying if we took advantage of autoconf and configured our patches so that only people using 96Boards had to pull in the extra code he would be willing to take patches. This is great! We don’t have to spend huge amounts of time rewriting code that already exists. File this away for the future, when we are a bit further along.

On to the next problem, while I’m a default C coder I know lots of people don’t code in C. Today a lot of the people I know, code in Python. I reached out to another engineer (Andy) at Linaro whom I know, knows C but mostly prefers to code in Python these days and asked him to brainstorm with me how we could go about this. I was thinking we use the C library and put Python wrappers around it, he was wondering if just re-coding it in Python might be better. We kicked it around for a couple of days, during which I made a bunch of changes to the C library and then we both agreed that having two codes bases in flux was not good. So using the C library under Python was the way to go, we also brainstormed that we would add Java, Perl and other language support in the future as time allows also another reason for having a core library and language wrappers around it.

Some of the work we added to the library during this time was not strictly speaking part of the shared library, but important none the less. We added shell variables GPIO_A - GPIO_L that are set to the proper info so that even in shell you can open and use GPIO’s the exact same way across the 96Boards family:

READ:

```bash
$ cd /sys/class/gpio
$ echo $GPIO_A | sudo tee export # GPIO_A is 488 on HiKey & 36 on DragonBoard 410c
$ cd gpio $GPIO_A
$ cat value # value LOW 0
$ cat value # value HIGH 1
```

In the above example something like a switch would have needed to be hooked to the GPIO pin to cause the state change causing the ping to go HIGH or LOW.

WRITE:

```bash
$ sudo -i # become root
$ cd /sys/class/gpio
$ echo $GPIO_C > export # GPIO_C is 490 on HiKey
$ cd gpio $GPIO_C
$ echo out > direction
$ echo 1 > value # set value to HIGH
$ echo 0 > value # set value to LOW
```

There is a subtle change in the two examples above, under Linux you must be root to control the hardware 1 (GPIO pins). In the READ example we used a pipe to push data to tee and gave tee root permissions via sudo. In the WRITE example we switched to root via sudo -i and then did all commands AS root. Both ways work, the former is a bit safer than the latter, but what will not work is $ sudo echo $GPIO_C > export. This has to do with the way shell works, explaining it is a longer topic that we won’t go into here, suffice it to say, be a regular user and use \| sudo tee or become root sudo -i echo >.

We got the C library stable, the Python wrappers stable and realized it was time to start moving code into libsoc. Andy prepared some patches that added a contrib directory to libsoc and put all of our code under there and introduced the concept of pin mapping by board into libsoc. That allows any board in the 96Boards family to just “work”. It has a side effect that some other boards that are not part of the 96Boards family could use this too, for example if TI was to build a new BeagleBone with a new TI SoC but kept the exact same form factor they could use the pin mapping ability to get code written for the original BeagleBone to just run on either the new or the old versions. It would require a one time conversion to libsoc but after that code just runs. Raspberry Pi could do the same thing with the different versions of the Raspberry PI, of course they still have the differences between ARMv6 and ARMv7 but still the code would be more directly portable. We also provided patches to add Python mapping to libsoc which it did not have. At the same time we removed the small application I had coded to output the board info to stdio and used autoconf to get the info into the /etc conf file. (one less thing to maintain). Actually we relocated the file from /etc/ to /usr/local/etc/ also so we have less impact on the /etc filesystem. We normalized the file format removing extra fields that were not really needed. # signs are comments in the file.

The final format of the /usr/local/etc/libsoc_gpio.conf is:

```cpp
    # dragonboard 410c pin layout
    #<Pin Name> <SoC Num>
    GPIO_A = 36
    GPIO_B = 12
    GPIO_C = 13
    GPIO_D = 69
    GPIO_E = 115
    GPIO_F = 4
    GPIO_G = 24
    GPIO_H = 25
    GPIO_I = 35
    GPIO_J = 34
    GPIO_K = 28
    GPIO_L = 33
```

Now it was clear that libsoc had most of what we needed but I felt that it was still was somewhat intimidating to folks that are not professional programmers. How to fix? We decided the easiest way was to rewrite 96BoardsGPIO against libsoc and make it totally dependant on libsoc being present. What does that buy us? Well we get the solid support of a well tested 2+ year old library and yet we can have simpler calls for folks that don’t code for a living. So we did it.

96BoardsGPIO now looks like:

```cpp
    gpio_id(const char *pin_name);
    gpio_by_letter(char alpha);
    gpio_by_pin(char pin_number);
    gpio_open(unsigned int gpio_id, const char *direction);
    digitalRead(unsigned int gpio_id);
    digitalWrite(unsigned int gpio_id, unsigned int value);
```

The library got even simpler, there is an open call, read and a write calls. The first 3 calls allow you to call the open function anyway you prefer. `gpio_by_pin()` takes the low speed I/O connector pin number and returns the proper info for the open call, `gpio_by_letter()` takes the char A - L (derived by the 96Boards CE spec GPIO-A - GPIO-L and sometimes written as GPIO_A - GPIO_L) so you pass it A-L and it likewise returns the proper info for the open call, and finally the gpio_id() takes a char string “GPIO-A” - “GPIO-L” or “GPIO_A” - “GPIO_L” and it also returns the proper info for the open call.

So call it the way you want:

```cpp
    gpio_open(gpio_id("GPIO-A"),"out");
    gpio_open(gpio_id("GPIO_A"),"out");
    gpio_open(gpio_by_letter('A'),"out");
    gpio_open(gpio_by_pin(23),"out");
```

All four examples above do the exact same thing open the first GPIO pin for use in the output direction.

With the GPIO pin in output you would use:

```cpp
    digitalWrite(gpio_id("GPIO-A"), HIGH or LOW)
    digitalWrite(gpio_id("GPIO_A"), HIGH or LOW)
    digitalWrite(gpio_by_letter('A'), HIGH or LOW)
    digitalWrite(gpio_by_pin(23), HIGH or LOW)
```

All four examples above do the exact same thing, set the pin either high or low respectively.

Conversely:

```cpp
    gpio_open(gpio_id("GPIO-A"),"in");
    gpio_open(gpio_id("GPIO_A"),"in");
    gpio_open(gpio_by_letter('A'),"in");
    gpio_open(gpio_by_pin(23),"in");
```

All four examples above do the exact same thing open the first GPIO pin for use in the input direction.

With the GPIO pin in input you could use:

```cpp
    digitalRead(gpio_id("GPIO-A"))
    digitalRead(gpio_id("GPIO_A"))
    digitalRead(gpio_by_letter('A'))
    digitalRead(gpio_by_pin(23))
```

All four examples above do the exact same thing retrieve the value of the pin either high or low.

So the rewritten 96BoardsGPIO shared library continues to be under LGPL v2.1 and it is currently on github.

Why use one library over the other? If you are just looking to do a quick program, just want to quickly read or write to a GPIO pin, or if you have written code for an Arduino or one of the clones out there and you want to use something that is familiar, then using 96BoardsGPIO will be the easiest point of access, either via C or Python. If on the other hand you do need need interrupts, callbacks, triggering on specific signal edges, I2C or SPI features, libsoc is the best access point.
The libsoc library deserves more than one blog entry, it covers a lot. So it will show up here in the future. It is powerful and we may yet have more patches to add to it, we still have not had time to explore standardizing I2C or SPI, but like GPIO it should be the same across the 96Board family and I am guessing here, but I suspect we will have work in that area too.

--

1 Not entirely true, you can add permissions such that the user has access rights to the hardware but that is a different conversation, for this blog entry you have to have root permission to access the hardware.
