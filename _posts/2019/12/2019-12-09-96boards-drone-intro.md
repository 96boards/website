---
title: "The 96boards Drone Project"
author: Sahaj Sarup
date: 2019-12-09 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/drone.png
    name: drone.png
categories: blog
series: "96boards Drone Project"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey970, Linaro, Linux, arm64, real time, ROS2, Autoware
---

# Introduction

The 96boards drone platform is an experimental smart drone platform with the following objectives:

1. Continuously Evolving
2. OpenSource 
3. Test-bed

## Continuously Evolving

I am starting out small with this platform. Right now it comprises of mostly DIY grade parts for a small drone:
- 10 inch Wheel Base drone body made of wood and reinforced with carbon fiber sheets.
- Racerstar Racing Edition 2205 BR2205 2300KV Motors
- 5 inch Rotors
- [96Boards STM32 Mezzanine](https://www.96boards.org/product/stm32/) as the onboard controller.

Here is how the drone currently looks like:
![](https://i.imgur.com/qbApIOe.jpg)

The plan is to improve the platform gradually over time. Starting with larger base to accommodate more hardware. Replacing and/or adding a 9Boards CE board to the STM32 Mezzanine for additional functionalities.

These updates are planned to be done by leveraging our partnership with our members and what they envision this platform to grow into.


## OpenSource

All code ever written for this platform will be completely open-sourced and the entire project will be made reproducible.

Current firmware is written for the Zephyr RTOS that runs on the STM32 Mezzanine. It is still under heavy WIP. ( Stay tuned for Part-1 of this Blog ;-) )

## Test-Bed

Most importantly this project aims to be used as a test-bed for any new 96Boards product that might be worth flown, for example ToF sensor mezzanines, Camera mezzanines and various other sensor mezzanines in our portfolio.

This leads to a bunch of new project ideas and ways to demonstrate our platform.
