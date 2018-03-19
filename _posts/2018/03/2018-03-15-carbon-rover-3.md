---
title: Carbon Rover Part 3
author: Sahaj Sarup
date: 2018-03-15 01:01:54+00:00
image:
    featured: true
    path: /assets/images/carbon-rover.jpg
    name: iew-2018.jpg
    thumb: carbon-rover.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, Automotive, Conference, ElectronicsForU, EFY, Machine Learning
---

# Carbon Rover Part 3

In this final revision of the Carbon Rover Project I'll be mostly taking about adding Bluetooth control, using a not-so-expected method.

### So what changed:
- Bluetooth Control
- Reset Switch
- Saturated all GPIO Pins, due to addition of HC-05 Bt. Controller
- Switching between Automated and Bluetooth Control.

You may want to check out the video before proceeding:

{% include media.html media_url="https://youtu.be/29QP8BR0EsM" %}

### Bluetooth Hardware Implementation
So here is the reason this implementation took a lot of time, I was trying two methods:

#### 1. On-Board Bluetooth
- **Pros**
  - More control and flexibility over Bluetooth Functionality
  - Saves GPIO as the Bluetooth is integrated.
- **Cons**
  - Comparatively Complex to implement
  - Requires building a new App or implement a Bluetooth Controller
  - May be hard to replicate on other hardware

#### 2. External Bluetooth-UART Module HC-05
- **Pros**
  - Easy to implement since its basically UART input
  - Easy to replicate
  - Commonly available apps on Android app store.

- **Cons**
  - No direct control over Device name or Password directly from the MCU.
  - Uses excess GPIO.

So as you would have guessed, I went with using an external HC-05 Bluetooth Module.

### Bluetooth Software Implementation: Continuous Stream vs Single Char
The functionality that I needed was to press the "Forward Button" and the rover moves as long as my finger stays on that button ans stops as soon as I lift my finger.

Now instead of sending a continuous stream of the char 'F', the more preferred method for me was to instead send a single character say 'F' when the button is presses and then send another character say 'S' as soon as the button gets "un-pressed".

It has the same effect as streaming, but uses less bandwidth.

# Conclusion
So this is basically the end on the Carbon Rover project, but that doesn't mean I'll never come back with another project using a similar concept... a Drone maybe? Who knows!
