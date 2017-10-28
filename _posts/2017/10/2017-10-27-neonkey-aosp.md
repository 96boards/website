---
author: Sahaj Sarup
comments: true
date: 2017-10-27 00:00:00+00:00
layout: post
slug: neonkey-aosp
featured_image:
thumbnail_image:
title: Implementing Neonkey Sensor Mezzanine on AOSP
categories:
- blog
tags:
- Cortex-M4
- 96Boards
- ARM
- Android
- Hikey
- Hikey960
- HAL
- Contexthub
- Sensor HAL
- GPIO
- Carbon
- Neonkey
- Nitrogen
---

# **Introduction**

The Neonkey packs a Cortex-M4 chip, 512 Kb flash, 128 Kb SRAM, and a hub of the following sensors: Temperature, Humidity, Pressure, Ambient Light Sensor, Proximity, Geomagnetic, Accelerator and Gyroscope.

Kernel source and ContextHub board support is available in AOSP to help developers create and debug new sensors, make new HAL and kernel changes, etc. with fewer OEM encumbrances.

# **The Nanaohub, Cantexthub and Sensor HAL**

***What is a HAL?***

A HAL(Hardware Abstraction Layer) defines a standard interface for hardware vendors to implement, which enables Android to be agnostic about lower-level driver implementations. Using a HAL allows you to implement functionality without affecting or modifying the higher level system. HAL implementations are packaged into modules and loaded by the Android system at the appropriate time.

***HALs Required by the Neonkey Mezzanine:***

  - ***[Contexthub HAL](https://source.android.com/reference/hal/structcontext__hub__t) which also impliments the Nanohub HAL:*** This includes the hardware specific code for devices like Neonkey.

  - ***[Sensor HAL](https://source.android.com/devices/sensors/):*** Android sensors give applications access to a mobile device's underlying physical sensors. They are data-providing virtual devices defined by sensors.h, the sensor Hardware Abstraction Layer (HAL).

***HAL Implementation:*** You can take a look at the implementation following [this commit](https://android.googlesource.com/device/linaro/hikey/+/b9e25d10c021d21356bb751af3f5e00a84b502bf%5E1..b9e25d10c021d21356bb751af3f5e00a84b502bf/) on AOSP.

... and finally

# **[Guide to build AOSP with support for Neonkey](https://github.com/96boards/documentation/blob/master/mezzanine/neonkey/guides/neonkey-aosp-build.md)**

![](http://i.imgur.com/Uw3oaL2.gif)
