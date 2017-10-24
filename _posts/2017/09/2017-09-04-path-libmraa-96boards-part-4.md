---
author: Manivannan Sadhasivam
comments: true
date: 2017-09-04 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-4/
slug: path-libmraa-96boards-part-4
featured_image: path-libmraa-96boards-part-2-featured.png
thumbnail_image: path-libmraa-96boards-part-2-featured-thumb.png
title: Our path to libmraa on 96Boards – Part 4
wordpress_id: 
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
- LED
---

# **Introduction**

Welcome to **Part - 4** of **Our path to libmraa with 96Boards** series. In this blog, I'll give an update on recently
added(yet to be merged) support for using onboard LED's on all platforms in [libmraa](https://github.com/intel-iot-devkit/mraa/). 
This has been one of the support missing in [libmraa](https://github.com/intel-iot-devkit/mraa/)
interms of peripherals for some time, but now we have addressed.

# **LED**

LED (Light Emitting Diode) is one of the most heard electronic component of all times. This little device attracts everyone
with its illuminance property. **Blinking LED** is the first TODO project for all embedded platforms, just like the **Hello World!**
program for all programming languages. Linux has the support for using LEDs through a distinct [subsystem](https://www.kernel.org/doc/Documentation/leds/leds-class.txt).

The control for LED's in linux is exported to user space through **sysfs** filesystem under */sys/class/leds*. Mostly, each onboard
LED's would appear as an individual soft link. For instance, [Dragonboard410c](/product/dragonboard410c/)
contains the following entries:

```
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:blue:bt -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:blue:bt
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:green:user1 -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:green:user1
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:green:user2 -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:green:user2
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:green:user3 -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:green:user3
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:green:user4 -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:green:user4
lrwxrwxrwx 1 root root 0 Sep  4 12:43 apq8016-sbc:yellow:wlan -> ../../devices/platform/soc/soc:leds/leds/apq8016-sbc:yellow:wlan
lrwxrwxrwx 1 root root 0 Sep  4 12:43 mmc0:: -> ../../devices/platform/soc/7824900.sdhci/leds/mmc0::
lrwxrwxrwx 1 root root 0 Sep  4 12:43 mmc1:: -> ../../devices/platform/soc/7864900.sdhci/leds/mmc1::
```

And each entry contains the following contents:

```
-rw-r--r-- 1 root root 4096 Sep  4 13:18 brightness
lrwxrwxrwx 1 root root    0 Sep  4 13:18 device -> ../../../soc:leds
-rw-r--r-- 1 root root 4096 Sep  4 13:18 invert
-r--r--r-- 1 root root 4096 Sep  4 13:18 max_brightness
drwxr-xr-x 2 root root    0 Sep  4 13:18 power
lrwxrwxrwx 1 root root    0 Jan  1  1970 subsystem -> ../../../../../../class/leds
-rw-r--r-- 1 root root 4096 Sep  4 13:18 trigger
-rw-r--r-- 1 root root 4096 Jan  1  1970 uevent
```
The best place to understand all of the contents is [Linux kernel Documentation](https://www.kernel.org/doc/Documentation/leds/leds-class.txt).
But the matter of interest when it comes to controlling LED's would be the following files:

### brightness

This file contains value which controls the LED brightness. Maximum value it can accept depends on the value of **max_brightness**.
If your LED has the hardware brightness support, then this file can be used to control the brightness level. In absence of that,
any value greater than zero(>0) will turn the LED on and the value of Zero will turn LED off.

### max_brightness

This file controls the maximum brightness value in which **brightness** file can accept. Some platforms may forbid changing this
value, resulting the file to be read only.

### trigger

This is the most interesting part of the Linux LED subsystem. Instead of manually controlling the behaviour of LED, we can make
LED blink at a predefined pattern! To make things interesting further, LED's can also be set to blink at rate proportional to
disk activity. The default trigger for LED's would be mentioned in the device tree of each platform.

Following is the list of triggers available in Dragonboard410c:

```
none kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock mmc 
```

# **LED support in libmraa**

A [Pull Request](https://github.com/intel-iot-devkit/mraa/pull/811) has been opened for adding LED support to libmraa. It is 
still under review but looks like will make its way through. Programming interface for accessing LED's in libmraa are 
C, C++ and Python. No Node.js & Java support has been added till now.

### Source code organization

Source code: *src/led/led.c*
C API: *api/mraa/led.h*
C++ API: *api/mraa/led.hpp*

### Sample Application

Here is the sample C application to access this interface in libmraa:

```c

#include <stdio.h>
#include "mraa.h"

int main(void)
{
	mraa_led_context led;
	mraa_result_t res = MRAA_SUCCESS;
	int val;

	/* access user1 led */
	led = mraa_led_init("user1");
	if (led == NULL) {
		fprintf(stderr, "unable to initialize requested led\n");
		exit(1);
	}

	val = mraa_led_read_max_brightness(led);
	printf("maximum brightness value is: %d\n", val);
	if (val >= 1)
		val = 0;
	else
		/* never reached mostly */
		val = 1;

	res = mraa_led_set_brightness(led, val);
	if (res != MRAA_SUCCESS) {
		fprintf(stderr, "unable to set led brightness\n");
		exit(1);
	}

	usleep(10000);

	res = mraa_led_set_trigger("heartbeat");
        if (res != MRAA_SUCCESS) {
                fprintf(stderr, "unable to set led trigger\n");
                exit(1);
        }

	printf("led trigger set\n");

	return 0;
}
```

# **Conclusion**

That's it about the LED support in libmraa. Hope this support will help the community to easily access
LED interface in libmraa and that being said we are approaching **Part-5** of **Our path to libmraa with 96Boards**.
Our goal is to make libmraa a defacto library for accessing Low speed peripherals in linux for all 96Boards.
