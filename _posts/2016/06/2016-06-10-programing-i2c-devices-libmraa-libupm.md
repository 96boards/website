---
author: ldts-atsuka
comments: true
date: 2016-06-10 17:18:42+00:00
layout: post
link: https://www.96boards.org/blog/programing-i2c-devices-libmraa-libupm/
slug: programing-i2c-devices-libmraa-libupm
featured_image: akira-blog-image.jpg
title: Programing I2C devices with libmraa and libupm
wordpress_id: 15078
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- apt-get
- ARM
- ARMv8
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- LCD
- LED
- libmraa
- libsoc
- libupm
- Linux
- Open Embedded
- Reference Platform
- rpb
- SCL
- SDA
- Sensor
- Source
---

Thank you everyone who participated in this week’s [Open Hours](/openhours/). Today I had the opportunity to speak about the I2C (Inter-integrated Circtui) and GPIO (General Purpose input/output) interfaces, taking what Robert spoke about these last two weeks and going a little more in depth. I decided to use the libmraa library and paired it with the UPM library to program the [LCD screen](https://www.seeedstudio.com/item_detail.html?p_id=1643) included in the [96Boards Sensors Mezzanine kit](https://www.seeedstudio.com/item_detail.html?p_id=2618).

During the open hours I tried showing several printed diagram, those diagrams are available in this blog. The diagrams might help you gain a better understanding of the pros and cons for each of these interfaces (GPIO and I2C)


## What is GPIO?


General purpose Input/Output pins or GPIO are pins that go generally unused by default and are said to have no defined special purpose. This means the user maintains decisive control over the GPIO pins and their actions. That being said, these GPIO are capable of performing a variety of user driven actions. Below is a list of potential capabilities of the GPIO pins as seen on [https://en.wikipedia.org/wiki/General-purpose_input/output](https://en.wikipedia.org/wiki/General-purpose_input/output)

**GPIO capabilities may include:**




  * GPIO pins can be configured to be input or output


  * GPIO pins can be enabled/disabled


  * Input values are readable (typically high=1, low=0)


  * Output values are writable/readable


  * Input values can often be used as IRQs (Interrupt), typically for wakeup events


Here it is important to note the GPIO pins are configurable, and can be set as an input or output. With that, we see values can be written onto, or read from these interfaces (GPIO), typically as discrete values of 0 and 1 (High or Low). Being able to read and write values to these pins allows simple and quick communication with peripheral devices. These devices in turn help the 96Boards to interpret and communicate with the environment or other devices. All Single Board Computers are not the same, and will usually differ in many ways. 96Boards have 12 GPIO pins, one of which is multi-purpose.

![GPIO-S]({% asset_path "ic2-devices-img-1.png" %}){:class="img-responsive lazyload"}

**Pros**




  * Very easy to use for both software and hardware engineers


  * Only two states for direction (“in” or “out”)


  * Only two states for value (“0 → low” or “1 → high”)


  * Value of high is usually set to a standard voltage


    * 1.8V, 2.5V, 3.3V or 5V





  * Input values can often be used as IRQs (Interrupt), typically for wakeup events


**Cons**




  * Pins can only send or read one bit per line.


  * More pins are required to do simple tasks


GPIO pins are especially good to use when programming simple sensors or actuators which only require a single data line. For example:


  * LEDs


  * Relays


  * Buzzers


  * Buttons


  * Passive Infrared sensor (PIR)


  * Many more!




## What is I2C?


The Inter-integrated Circuit (I2C, also read as “eye squared see”) is essentially a serial computer bus (a bus is something that communicates/transfers data between components) which allows lower speed peripheral ICs to be connected with processors and microcontrollers. They permit multiple synchronized master-slave connections to be formed. It is used in short distance communications within a single device. Although it is slower, it can be used for many devices. Requires two signal wires to transfer information.

Source: [https://en.wikipedia.org/wiki/I%C2%B2C](https://en.wikipedia.org/wiki/I%C2%B2C)

![Ic2 Devices Image 2]({% asset_path "ic2-devices-img-2.png" %}){:class="img-responsive lazyload"}

**Pros ([Source](http://www.allaboutcircuits.com/technical-articles/introduction-to-the-i2c-bus/))**




  * Maintains low pin/signal count even with numerous devices on bus


  * Adapts to the needs of different slave devices


  * Readily supports multiple masters


  * Incorporates ACK/NACK functionality for improved handling


**Cons ([Source](http://www.allaboutcircuits.com/technical-articles/introduction-to-the-i2c-bus/))**




  * Increases the complexity of firmware or low-level hardware


  * Imposes protocol overhead that reduces throughput


  * Requires pull-up resistors, which


    * Limit clock speed


    * Consume valuable PCB real estate in extremely space-constrained systems


    * Increase power dissipation





I2C pins are especially good to use when programming more complex sensors or actuators which require multiple data lines. For example:


  * Ultrasonic sensors


  * Stepper motors and servos


  * LCD screen


  * LED matrices


  * Many more!




## What is libmraa and libupm?


In the past, GPIO and I2C code had to be different, when programming for different boards. By using the libmraa and libupm libraries, the code can be unified across a variety of Single Board Computers. These libraries allow us to eliminate code redundancies and create higher quality software.

![Ic2 Devices Image 3]({% asset_path "ic2-devices-img-3.png" %}){:class="img-responsive lazyload"}

![Ic2 Devices Image 4]({% asset_path "ic2-devices-img-4.png" %}){:class="img-responsive lazyload"}


## How to unify code for all sensors on GPIO and I2C?


Bringing in an abstraction layer will allow for multiple boards to access these interfaces (without the need of multiple libraries). The abstraction layer can also be looked at as a translation layer. This layer is used to translate each board’s GPIO values to a generic set of command variables. The layer is translated differently though used in the same way by each board. You can see this layer in the diagrams below (labeled as Common API layer). I would suggest reading more about the abstraction layer by visiting it’s [wiki page](https://en.wikipedia.org/wiki/Abstraction_layer).

![Ic2 Devices Image 5]({% asset_path "ic2-devices-img-5.png" %}){:class="img-responsive lazyload"}

Which part is libmraa and which part is libupm?
Good isn’t it? (^\_^)

![Ic2 Devices Image 6]({% asset_path "ic2-devices-img-6.png" %}){:class="img-responsive lazyload"}

A complete list of UPM enabled sensors can be found here:
[http://iotdk.intel.com/docs/master/upm/modules.html](http://iotdk.intel.com/docs/master/upm/modules.html)

In this blog we will be working with a pre-enabled UPM sensor. Just like the project you saw during the open hours, and will also find below. Other UPM sensors are easy to pick up and program using the same libraries we are using (libmraa and libupm).


## Libmraa and UPM programming languages






  * C


  * C++


  * Python


  * Java


  * Node.js




## Programing I2C devices on 96Boards


_Note: Your 96Boards is required to have an internet connection_

For using WiFi simply connect to a network by using the desktop UI. Choose your network, enter password (if secure), and connect. Otherwise, connect to WiFi through the terminal:

**Start menu > other > LXTerminal (right click this to add to desktop if you desire)**

**Commands:**

`$ nmtui`

You can always connect to the Internet by using a USB type-A to ethernet adapter. This can be seen in the picture below.

![Ic2 Devices Image 7]({% asset_path "ic2-devices-img-7.jpg" %}){:class="img-responsive lazyload"}

USB-Ethernet dongle to the USB-Type-A connector.

Once we are connected to the internet, we can make sure packets are being exchanged by updating the system time.

**Commands:**

`$ ntpdate pool.ntp.org
8 Jun 04:03:38 ntpdate[2163]: adjust time server 129.250.35.251 offset 0.00031c……`


## Installing libmraa and libupm.


_Note: The following procedure is confirmed with Debian Linux on DragonBoard 410C and HiKey._

**Step 1: Update your system**

**Commands:**

`$ sudo apt-get update
$ sudo sudo apt-get dist-upgrade -u`

**Step 2: Install libmraa and libupm**

**Commands:**

`$ sudo apt-get install libmraa-dev libupm-dev`

The command above will install the following four packages:




  * **libmraa0:** contains only libraa run-time library


  * **libmraa-dev:** includes header files to compile program using libmraa


  * **libupm0:** contains only libupm run-time library


  * **libupm-dev:** includes header files to compile program using libupm




## Connecting Grove RGB backlight LCD


![where-to-connect-lcd]({% asset_path "ic2-devices-img-8.png" %}){:class="img-responsive lazyload"}


## Sample program #1: Grove RGB backlight LCD module using I2C


_Download, build and run sample program:_

**Commands:**
```bash
$ git clone https://github.com/96boards/Starter_Kit_for_96Boards
$ cd Starter_Kit_for_96Boards
$ cd rgb_lcd_demo
$ make
$ sudo ./rgb_lcd_demo
```

The LCD will show some sample messages and the backlight will cycle between red, blue
and green.

_Note: Press ctr-c to stop the program._


### _Inside the sample program #1_


Below you will see the insides of the sample program you just ran. It is written in C++. There is no immediate need to write you own code for controlling the LCD display, reading this code over should give you a good start to designing your own I2C programs.

This can be accessed through the terminal using your favorite text editor. Make sure you are in the right directory and simply open the rgb-lcd-demo.cpp file.

Example using vim text editor:

`$ vim rgb-lcd-demo.cpp`

------ rgb-lcd-demo.cpp -----


```cpp

    /*
     * Author: Akira Tsukamoto
     * Copyright (c) 2016 Linaro Ltd.
     * All rights reserved.
     * SPDX-License-Identifier: BSD-2-Clause
     */

    #include
    #include "upm/jhd1313m1.h"

    /* Note:
            LCD_I2C_ADDRESS 0x7C>>1 62 0x3E
            RGB_I2C_ADDRESS 0xC4>>1 98 0x62
    */

    #define I2C_BUS  0
    #define RGB_WHT 0xff,0xff,0xff
    #define RGB_RED 0xff,0x00,0x00
    #define RGB_GRN 0x00,0xff,0x00
    #define RGB_BLU 0x00,0x00,0xff
    #define SLEEP_TIME 2

    using namespace std;

    void display(upm::Jhd1313m1* lcd, string str1, string str2, int red, int green,
            int blue)
    {
        lcd->clear();
        lcd->setColor(red, green, blue);
        lcd->setCursor(0,0); /* first row */
        lcd->write(str1);
        lcd->setCursor(1,2); /* second row */
        lcd->write(str2);
        sleep(SLEEP_TIME);
    }

    int main(int argc, char* argv[])
    {
        upm::Jhd1313m1* lcd;

        string str1 = "96Boards!";
        string str2 = "Sensors!";
        string str3 = "Linaro!";

        string red = "fantastic :)";
        string grn = "nice :)";
        string blu = "great :)";

        lcd = new upm::Jhd1313m1(I2C_BUS, 0x3e, 0x62);

        while (true) {
                display(lcd, str1, red, RGB_RED);
                display(lcd, str2, grn, RGB_GRN);
                display(lcd, str3, blu, RGB_BLU);
        }

        delete lcd;

        return 0;
    }

```



### Compiling


For those of you who wish to compile the program manually please use the following command. This is important for those who wish to try other sensors, you will need to find the linking library before compilation.

**Commands:**

`$ g++ rgb-lcd-demo.cpp -o rgb-lcd-demo -g -Wall -lupm-i2clcd`

The way to find the linking library, goto
[http://iotdk.intel.com/docs/master/upm/classupm_1_1_jhd1313m1.html#details](http://iotdk.intel.com/docs/master/upm/classupm_1_1_jhd1313m1.html#details)


###




###




### Running


Once you have successfully written your code and compiled your program, you are ready to run it. This is the fun part.

**Commands:**

`$ sudo ./rgb-lcd-demo`


## Connecting Grove LED module


![where-to-connect-led]({% asset_path "ic2-devices-img-9.png" %}){:class="img-responsive lazyload"}


## Sample Program #2: LED module using GPIO


This particular code is very straightforward and works will all 96Boards running Debian Linux. The code seen below is found in the same folder as the code we dissected above (the LCD display)


### Inside the sample program #1


Below you will see the insides of another sample program. It is also written in C++. Reading this code over should give you a good start to designing your own GPIO programs.

This can be accessed through the terminal using your favorite text editor. Make sure you are in the right directory and simply open the rgb-gpio-demo.cpp file.

**Example using vim text editor:**

`$ vim rgb-gpio-demo.cpp`

------ led-gpio-demo.cpp -----

```cpp
    /*    -
     * Author: Akira Tsukamoto
     * Copyright (c) 2016 Linaro Ltd.
     * All rights reserved.
     * SPDX-License-Identifier: BSD-2-Clause
     */

    #include
    #include "mraa.hpp"

    #define GPIO_A 23
    #define GPIO_B 24
    #define GPIO_C 25
    #define GPIO_D 26
    #define GPIO_E 27
    #define GPIO_F 28
    #define GPIO_G 29
    #define GPIO_H 30
    #define GPIO_I 31
    #define GPIO_J 32
    #define GPIO_K 33
    #define GPIO_L 34

    #define SLEEP_TIME 1

    using namespace std;

    int main(int argc, char* argv[])
    {
        mraa::Gpio* gpio;

        gpio = new mraa::Gpio(GPIO_E);
        gpio->dir(mraa::DIR_OUT);

        while (true) {
            gpio->write(0);
            sleep(SLEEP_TIME);
            gpio->write(1);
            sleep(SLEEP_TIME);
        }

        delete gpio;

        return 0;
    }

```

_Note: This program is using GPIO_E. You can always change the value inside the code to a GPIO you prefer to use. If you do not change the value, you will have to connect your LED to GPIO_E in order for this program to work._


### Compiling


**Commands:**

`$ g++ led-gpio-demo.cpp -o led-gpio-demo -g -Wall -lmraa`

Running
Once you have successfully written your code and compiled your program, you are ready to run it. This is the fun part.

**Commands:**

`$ sudo ./led-gpio-demo`

After execution, you will see your the LED you have connected to your Mezzanine board begin to blink.




## **Forum**


[https://discuss.96boards.org/c/products/](https://discuss.96boards.org/c/products/)




## **Web page**


[https://www.96boards.org/documentation/](/documentation/)

[http://www.github.com/96boards/documentation/](http://www.github.com/96boards/documentation/)

https://www.96boards.org/openhours/
