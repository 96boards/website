---
title: Our path to libmraa with 96Boards – Part 7
author: Manivannan Sadhasivam
date: 2018-04-13 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/path-libmraa-96boards-part-2-featured.png
    name: path-libmraa-96boards-part-2-featured.png
    thumb: path-libmraa-96boards-part-2-featured-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, hiKey, MRAA, GPIO, I2C, UART
---

# Introduction

Welcome to **Part - 7** of **Our path to libmraa with 96Boards** series. In
this part I will provide a quick summary of the recent support added to 96Boards
board support in [libmraa](https://github.com/intel-iot-devkit/mraa).

# Chardev support in MRAA

One big feature addition happened in MRAA library last month, which is the
addition of Chardev support for accessing GPIO's in latest kernel. This is
a descriptor based interface and relatively new way of accessing GPIO's
in linux kernel starting from 4.8. Comparing the legacy **sysfs** way of
accessing GPIOs, this interface exposes each
GPIO chip in the hardware as its own char device under `/dev`. This addresses
most of the drawbacks with the sysfs interface, including accessing multiple
GPIOs at once.

* Chardev MRAA source - https://github.com/intel-iot-devkit/mraa/blob/master/src/gpio/gpio_chardev.c

For a detailed information of this interface, please take a look at the kernel
[documentation](https://www.kernel.org/doc/Documentation/gpio/gpio.txt). Eventhough
the interface is very robust and useful, we can't really use it from userspace
as we did with sysfs. We always need to write some code or depend on a library
like [libgpiod](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/).

But MRAA library just provides a neat abstraction layer (not very neat since it needs to
be compatible with old API). We can access GPIO's using the same API as we used
for sysfs, MRAA will do the heavy lifting for you underneath. Only thing required
is the new kernel (>=4.8) and chardev mapping in board support.

Now you can ask a question, why can't MRAA just depend on **libgpiod** instead of
reinventing the wheel? Well, we are not reinventing the wheel here, chardev is
the generic interface, which provides useful API's for accessing GPIO's and using
them is not that difficult. One more issue with libgpiod is its license, MRAA is
based on **MIT** license where **libgpiod** is based on **LGPL** license. So the
maintainers didn't favour dependency on incompatible (not much) licensed library.

96Boards team submitted a [Pull Request](https://github.com/intel-iot-devkit/mraa/pull/887)
to MRAA for adding the chardev support to [Dragonboard410c](/product/dragonboard410c/)
and [HiKey](/product/hikey/). Since our release/snapshot images
are based on latest kernel, chardev support will be turned on by default.

# Conclusion

This concludes the summary of **Part - 7** of **Our path to libmraa with 96Boards**
blog. I hope that this blog provided information around chardev support in MRAA
with regards to 96Boards. In the upcoming blogs, I will provide more information
on the new board support and feature additions. Stay tuned!
