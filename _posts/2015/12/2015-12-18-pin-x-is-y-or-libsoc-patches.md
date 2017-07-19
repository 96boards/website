---
author: andy.doan
comments: true
date: 2015-12-18 15:13:11+00:00
layout: post
link: http://www.96boards.org/blog/pin-x-is-y-or-libsoc-patches/
slug: pin-x-is-y-or-libsoc-patches
featured_image: pinx-y-libsoc.png
title: Pin X is Y or libsoc patches
wordpress_id: 10163
categories:
- blog
---

There's a tendency to think your problems are unique. When work was started on handling GPIOs for 96Boards this [happened](https://www.96boards.org/blog/bringing-standardization-linux-gpio-96boards/), and we built a 96BoardsGPIO library. A suggestion was made to look at the [libsoc](https://github.com/jackmitch/libsoc/) project as it provided an interface to GPIOs plus other things like i2c. However, when I started playing around with [libsoc test code](https://github.com/jackmitch/libsoc/blob/4d5c5af71e225cc4e792d2166da3f3e432b08735/test/gpio_test.c#L12), I was amused to see _“uses pins P9_42(gpio7)"_. The issue of pin name to GPIO ID mapping might be more annoying on 96Boards since they all have the same pin layout, but it's not unique. Even though libsoc didn’t handle GPIO mappings, we still felt it was important to move as much code as we could out of 96BoardsGPIO and into active upstream project.

We reached out to the maintainer of libsoc about making some potentially 96Boards specific changes to the project. He seemed willing to accept patches as long as they there were enabled/disabled via autoconf. While the maintainer seemed flexible, I thought it was really important to try and do things in a way that wouldn’t hijack the project with 96Boards tweaks. The solution we came up with was a simple mapping file stored under /etc/libsoc_gpio.conf. Our initial merge included a mapping file for the [beaglebone](https://github.com/jackmitch/libsoc/blob/2919c35e706fe7c311f83f9343865420fa4b37fe/contrib/board_files/beaglebone/libsoc_gpio.conf) so that we could prove this feature wasn’t 96Boards specific, and we also included mappings for the [dragonboard410c](https://github.com/jackmitch/libsoc/blob/2919c35e706fe7c311f83f9343865420fa4b37fe/contrib/board_files/dragonboard410c/libsoc_gpio.conf), [bubblegum](https://github.com/jackmitch/libsoc/blob/2919c35e706fe7c311f83f9343865420fa4b37fe/contrib/board_files/bubblegum/libsoc_gpio.conf), and [hikey](https://github.com/jackmitch/libsoc/blob/2919c35e706fe7c311f83f9343865420fa4b37fe/contrib/board_files/hikey/libsoc_gpio.conf) boards.

With the new feature enabled, you can now avoid code comments like “_//Pin X is Y_”, and instead make a GPIO almost feel like a constant by including the following snippet in your code:

```c
    unsigned int GPIO_A;
     __attribute__((constructor)) static void _init()
     {
     board_config *config = libsoc_board_init();
     GPIO_A = libsoc_board_gpio_id(config, "GPIO_A");
     libsoc_board_free(config);
     }
     
```

This snippet might look a little too clever, but it takes advantage of the “constructor” attribute in glibc to do module-type initialization. At program startup this snippet will load the board config, assign GPIO’s based on the defined mapping, and free the board config.


## What’s Next


There are still some improvement we need to make to libsoc. The first item is to introduce a mechanism for language bindings and include a Python API. The second item would be adding the ability to automatically probe for mapping information rather having to use a mapping file. The difficult part of this feature will be coming up with a mechanism that works across different types of boards.  Some boards use Device Tree, some use ACPI somewhere in there we will need to find a method that works with both systems.
