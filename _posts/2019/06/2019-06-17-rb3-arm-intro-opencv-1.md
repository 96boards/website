---
title: OpenCV on RB3 Pt. 1 | Qualcomm RB3 Robotic Arm Project
author: Sahaj Sarup
date: 2019-06-17 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# Vision

## OpenCV

OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in the commercial products. Being a BSD-licensed product, OpenCV makes it easy for businesses to utilize and modify the code.

tldr; It helps your computer "see" and "infer"

## The Robotic Arm

For the Robotic Arm Project, OpenCV will be used to detect the shape and color of the object, position of the object relative to the claw and that data will then be used to pick and/or place said object.

## OpenCV on RB3

The entire 96Boards DragonBoard line up have very straightforward and a generic userspace experience, with Open-source graphics based on Mesa and running close-to mainline linux kernel on Debian Buster, there aren't (m)any kinks to be worked out.

OpenCV installation is very straight-forward, any instructions form the inter-webs just works without any modification, so let's take a look at a few of them.


#### Don Harbin's M&M Counting Demo:
This demo was originally created for the DragonBoard 820c but in reality can run on any device with a webcam.

The original purpose of this demo was to count M&M rolling down a shoot, but this demo also serves very well just to test opencv and color+object detection and counting. Definitely an excellent starting point.

Source: https://github.com/96boards/opencv-color-tracking-demo

Demo Video:

{% include media.html media_url="https://youtu.be/Mk79hG7hqZ4" %}

Running On the RB3:

![](https://github.com/ric96/website/raw/blog/assets/images/blog/rb3-cv-1.png)


### pyimagesearch's Ball Tracking with OpenCV
This is a generic demo for OpenCV beginners and also has been used a lot to show the capabilities of the DragonBoard410c on many occasions.

This demo tracks a green colored ball across the screen and draws a red trace line as it moves.

Source: https://www.pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/

Demo:

![](https://www.pyimagesearch.com/wp-content/uploads/2015/09/ball-tracking-animated-02.gif)

Running on the RB3:

![](https://github.com/ric96/website/raw/blog/assets/images/blog/rb3-cv-2.png)

### Object Tracking + Color Detection + Shape Detection
This is the frankenstein code that, in a much more sophisticated form, will drive the robotic arm. So you could just say "Pick up the red ball" and this is how the arm knows what to pick up.

Source: https://github.com/ric96/RB3-RoboticArm/blob/master/shape.py

Running on the RB3: ![](https://github.com/ric96/website/raw/blog/assets/images/blog/rb3-cv-3.png)


RB3 doesn't break a sweat ;)

