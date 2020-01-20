---
author: Manivannan Sadhasivam
comments: true
date: 2018-01-29 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-6/
slug: path-libmraa-96boards-part-6
image:
    featured: true
    path: /assets/images/blog/path-libmraa-96boards-part-2-featured.png
    name: path-libmraa-96boards-part-2-featured.png
    thumb: path-libmraa-96boards-part-2-featured-thumb.png
title: Our path to libmraa on 96Boards – Part 6
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

Welcome to **Part - 6** of **Our path to libmraa with 96Boards** series. In
this part I will provide a quick summary of the examples cleanup done in
[libmraa](https://github.com/intel-iot-devkit/mraa).

# Libmraa tough for newcomers?

I often heard that libmraa library is pretty tough to be able to work for the
newcomers. When a newbie lands on this library, the first intention would be
to look at the library provided examples. And this is where libmraa struggled
to provide a generic set of examples for the newcomers to work with.

Since for 96Boards, we aim to make use of libmraa library for accessing most
of the peripherals like GPIO, I2C, LED, etc... on the Linux enabled platforms.
It is our due duty to make this library as much more user-friendly as possible.
For aiding that cause, I have submitted a series of Pull Requests to cleanup the
examples in libmraa.

# Creating a tools/ directory

Libmraa provided some very useful tools for testing the peripherals quickly.
They often get installed when we build and install the library from source.
But they were kept inside the **examples** directory. So, as a first step
towards cleaning up the examples directory, I moved these tools to a new [tools](https://github.com/intel-iot-devkit/mraa/tree/master/tools)
directory and provided a separate flag **INSTALLTOOLS** for installing these
tools.

By default this flag will be set. But if the users wants to avoid installing these
tools for some strange reasons, they can do it by passing the below cmake option.

```shell
-DINSTALLTOOLS=OFF
```

# Cleaning up the examples/ directory

Next step is to cleanup the examples itself. I planned to provide examples for
accessing each peripherals in different languages supported by mraa. For instance, there will be examples for accessing **GPIO** in C, C++, Python, Java, Javascript.
Also, I kept in mind that these examples should follow same coding style and should
reflect how libmraa library should be used by the community.

Since there were already examples in place, I just need to make sure they are following
the same coding style and in a working state to be able to consume by the users.

Also, one more challenge was to move the platform-specific examples into an already
existing [platform](https://github.com/intel-iot-devkit/mraa/tree/master/examples/platform)
subdirectory. I discussed this with Mraa developers and after a brief conversation, they agreed to move platform-specific examples in all languages to platform/ subdirectory.
In my point of view, this will make the examples look more generic.

As a result of the above work, **C** and **C++** examples have been cleaned up
and looking nice in mraa.

* [C examples](https://github.com/intel-iot-devkit/mraa/tree/master/examples/c)
* [C++ examples](https://github.com/intel-iot-devkit/mraa/tree/master/examples/c++)

Pull requests for the relevant work:

* https://github.com/intel-iot-devkit/mraa/pull/838
* https://github.com/intel-iot-devkit/mraa/pull/853
* https://github.com/intel-iot-devkit/mraa/pull/857

# Conclusion

That's it about the summary of the examples cleanup done in mraa. I would like
to thank the Mraa developers for their continued support in reviewing my Pull
Requests and responding to my queries. This makes the libmraa library more
user-friendly and developer friendly. I still need to cleanup the rest of the
examples in other languages such as Python and that will be covered in another
blog post. Thanks for reading and live good with Mraa :)
