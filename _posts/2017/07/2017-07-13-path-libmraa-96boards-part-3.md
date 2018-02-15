---
author: Manivannan Sadhasivam
comments: true
date: 2017-07-17 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-3/
slug: path-libmraa-96boards-part-3
image:
    featured: true
    path: /assets/images/blog/path-libmraa-96boards-part-2-featured.png
    name: path-libmraa-96boards-part-2-featured.png
    thumb: path-libmraa-96boards-part-2-featured-thumb.png
title: Our path to libmraa on 96Boards – Part 3
wordpress_id: 20365
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- intel
- libmraa
- libupm
- Linaro
- Linux
- MediaTek X20
- mraa
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
- UPM
---

# **Introduction**

Welcome to **Part - 3** of **Our path to libmraa with 96Boards** series. This blog series is intended to provide a roadmap of our
work towards standardizing libmraa library for 96Boards. Before going into the current part, I’d like to give a quick recap
of the previous parts.

1. [Part 1](/blog/path-libmraa-96boards-part-1/) - **Getting started with libmraa for 96Boards** - This is the introductory blog focussed on providing a roadmap to libmraa from 96Boards perspective. Also, this blog provided library breakdown, how to get started instructions, introduction to libupm and much more.
2. [Part 2](/blog/path-libmraa-96boards-part-2/) - **Our Path to libmraa with 96Boards** - Here we discussed briefly about the organization of libupm on top of libmraa. Towards the end, libupm library breakdown was also provided along with an example to interface Accelerometer and LCD with Dragonboard.

# **GPIO input pull-up/down support**

GPIO (General Purpose Input Output) is one of the most common subsystem present in all Single Board Computers. It provides the IO access to control LED’s, switches etc… A single GPIO line can be configured as Input or Output depending upon the configuration (It might not be the case sometimes).

    |     Output    |     Input     |
    | ------------- | ------------- |
    |     High      |     Pull Up   |
    |     Low       |     Pull Down |
    ---------------------------------

![Pull Up Down Image]({% asset_path "pull-up-down.png" %}){:class="img-responsive lazyload"}

You might be wondering about the need of Pull-up/down modes in input, since we are only sampling the pin. But there are times when you would want the input pin to be in a stable state (High/Low) in order to detect an event.

Following code snippet is one of the use case:

```C
While (gpio->HIGH); // Wait here until GPIO becomes low
/* Do something */
```

If the pin is in floating state (neither high nor low), it will be difficult to provide waiting condition for detecting an event. For aiding this purpose, there are two methods employed.

1. Pull-up/down in Software
2. External Pull-up/down circuitry

First method requires no external circuit to be present but the second one requires some crafty circuitry work to be present. This might increase the BoM cost unnecessarily.

As we saw in [Part 1](/blog/path-libmraa-96boards-part-1/), libmraa still uses the sysfs interface for accessing GPIO’s and our support for adding chardev interface is in progress. Sysfs interface supports the GPIO input to be configured as pull-up/down mode using the **active_low** node present under **_/sys/class/gpio/gpioN/_**.

But there was no support present in libmraa for GPIO pull-up/down mode [Thanks to [Sahaj Sarup](https://twitter.com/sahajsarup) for pointing this]. Then we decided to add this support to libmraa. So, I created an initial Pull Request consists of support for pull-up/down mode along with C++ binding.

Pull Request: (https://github.com/intel-iot-devkit/mraa/pull/768)

After few days of the submission, it was accepted into libmraa by one of its maintainers.

# **Pull request breakdown**

API for setting pull-up/down mode is **mraa_gpio_input_mode**. You need to specify the input mode using two enum types:

#### C:

1. MRAA_GPIO_ACTIVE_HIGH
2. MRAA_GPIO_ACTIVE_LOW

#### C++:

1. MODE_IN_ACTIVE_HIGH
2. MODE_IN_ACTIVE_LOW


Core support has been added to gpio source in **_src/gpio/gpio.c_** and C++ binding in **_api/mraa/gpio.hpp_**.

# **Example Usage**:

The following code snippet could be used to leverage the pull-up/down support in libmraa.

```c
#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <signal.h>
#include <stdlib.h>

#include "mraa.h"

#define PIN 23

int
main(int argc, char** argv)
{
    mraa_result_t res = MRAA_SUCCESS;
    int iopin = PIN;

    mraa_init();
    mraa_gpio_context gpio;
    gpio = mraa_gpio_init(iopin);
    if (gpio == NULL) {
        fprintf(stderr, "Are you sure that pin%d you requested is valid on your platform?",    iopin);
        exit(1);
    }
    printf("Initialised pin%d\n", iopin);

    // set direction to IN
    res = mraa_gpio_dir(gpio, MRAA_GPIO_IN);
    if (res != MRAA_SUCCESS) {
        mraa_result_print(res);
        exit(1);
    }

    //Set pull up mode
    res = mraa_gpio_input_mode(gpio, MRAA_GPIO_ACTIVE_LOW);
    if (res != MRAA_SUCCESS) {
        mraa_result_print(res);
        exit(1);
    }

    printf("Pin%d set to pull up mode\n", iopin);

    return res;
}
```

There are further plans to add more binding support to this API and to read the state of pull-up/down mode.

# **Conclusion**

That’s it for the Part 3 of **Our Path to libmraa with 96Boards** blog series. I hope this blog series will help libmraa to emerge as a de-facto standard for our 96Boards. See you with something more in next part :-) As we always say, please provide your valuable feedback/queries in comments.

# Resources

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
