---
title: Magic Mirror Part 1 | The Qt Quick UI
author: Sahaj Sarup
date: 2018-04-18 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/mirror-feature.jpg
    name: mirror-feature.jpg
    thumb:  mirror-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, hiKey, MRAA, GPIO, I2C, UART, qt5
---

# Magic-Mirror

## Magical or just really smart ?

The magic-mirror or as many would call it "smart-mirror" is a simple concept of using an bright screen running a Black and White (!Grey-scale) UI behind a translucent mirror to give an effect of a "futuristic" digital mirror of sorts. And from there on you can do whatever you want like live updates and some extreme demos also showing the ability to [control smart-cars from your dressing table.](https://www.youtube.com/watch?v=frP1UjUR8EM)

## Lets try something different, something not-Python or JS

It is understandable why if you google "Magic mirror", almost every result is written in python and uses pygame or in JavaScript and runs in a browser but nothing that runs on a native code like c/cpp or utilizes OpenGL. Now to be clear, i'm not talking about programming directly with OpenGL, instead using an IDE or toolkit that does it for us.

## Enter Qt5, Qt Quick and Qt Creator

"Qt is a cross-platform application framework that is used for developing application software that can be run on various software and hardware platforms with little or no change in the underlying codebase, while still being a native application with native capabilities and speed." -[Wikipedia](https://en.wikipedia.org/wiki/Qt_(software))

Qt makes use of it own JavaScript based markup language called 'qml' but, QML and JavaScript code can be compiled into native C++ binaries with the Qt Quick Compiler. Moreover Qt Quick Apllications utilize OpenGL by default, so that means we get super smooth UI on the DragonBoard 410c thanks to the freedreno Open-Source GPU driver that is enabled by default.

Being compatible with JavaScript means that you can parse JSON data and make use of APIs that provide data in JSON.

Here is a quick demo of what we end up with:

{% include media.html media_url="https://youtu.be/uuV1PCl3g5A" %}

Check out the Source: [magic-mirror](https://github.com/96boards-projects/magic-mirror)

# Whats Up for Part 2

Part 2 will see a closure of this project with a proper Magic-Mirror implementation and hopefully some unique ways to control the UI.
