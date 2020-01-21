---
title: Mozilla IoT on 96Boards | Part 1
author: Sahaj Sarup
date: 2018-09-05 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/sensors-pc.jpg
    name: sensors-pc.jpg
    thumb: sensors-pc-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Devconf, Enterprise Edition, IoT, product, single board computer, linaro, linux, open source, openhours, software, embedded, mezzanine, community, Ardiono, IDE, ISP, ISCP
---

# Introduction

This blog and probably the following blogs in this series will just be a quick look at what I am currently working on and my experience. We do plan to have a longer and detailed blog later this month.

# Mozilla IoT

The Mozilla IoT is a project dedicated to working towards a decentralized IoT with new standards around security, privacy and interoperability.

Also known as Project Things, it consist of three main components:

- **[Things Gateway](https://iot.mozilla.org/gateway/):** An implementation of a Web of Things gateway.

- **Things Cloud:** A collection of IoT cloud services.

- **[Things Framework(https://iot.mozilla.org/things/):** A collection of re-useable software components for building Web Things.

# Compatibility with 96Boards

## Gateway
I'd say the Things Gateway is a pretty hardware agnostic bit of code. Largely thanks to it being implemented using [node](https://nodejs.org/en/). So as long as you are running linux, it should work.

In fact, with just replacing the Ubuntu package names with their Fedora counter parts I was able to run it on Fedora 28 running on the DragonBoard410c.

Gateway also supports a bunch of commercial IoT devices that you can buy now, the have a full list [here](https://github.com/mozilla-iot/wiki/wiki/Supported-Hardware):

[Give it a try](https://github.com/mozilla-iot/gateway).

## Things Framework
This is more or less the edge client side of things. This framework will run on devices that directly will control you smart light bulbs, provide data from motion sensors etc. So its more or less expected to work on MCU based devices like Arduino, but that doesn't stop us from running it on Arm SoCs.

As of today the following platforms are supported:
- Node.js
- Python
- Java
- Rust
- Arduino

For 96Boards, running on Python is looking pretty good specially since we rely heavily on [MRAA](https://github.com/intel-iot-devkit/mraa) for I/O control which also runs on python fairly well.

## Sample code

I had this demo running on OpenHours. If you want to take a look and try it on your own, take a look at our [Project Repository](https://github.com/96boards-projects/mozilla-iot-neopixel-demo)

# Finally

I'm pretty excited where this is going. Stay tuned for more updates!
