---
title: Qualcomm RB3 Robotic Arm Project | Introduction
author: Sahaj Sarup
date: 2019-05-30 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# Introduction to the Qualcomm RB3

**The [Qualcomm RB3](/product/rb3-platform/) is one of the newly released 96Boards belonging to the [consumer edition](/products/ce/) family based around the Qualcomm® SDA845 processor.**

The Qualcomm SDA845 processor is a heterogeneous computing architecture and integrates an Octa-Core Qualcomm® Kryo™ CPU with performance up to 2.8GHz a Qualcomm® Adreno™ 630 Visual Processing Subsystem (including GPU, VPU and DPU), and a Qualcomm® Hexagon™ 685 DSP with Hexagon Vector Extensions (HVX) delivering sophisticated, on-device AI processing and mobile-optimized computer vision (CV) capabilities for perception, navigation and manipulation.

The development board supports Linux and Robotics Operating System (ROS), while also including support for the Qualcomm® Neural Processing software development kit (SDK) for advanced on-device AI, the Qualcomm® Computer Vision Suite, the Qualcomm® Hexagon DSP SDK, and AWS RoboMaker.

The development board supports new architecture for AI, 4K@60fps H.264/H.265 Encode & Decode, rich interfaces, and many I/O expansion headers. It is an ideal platform for developers to quickly start the product development work.

The RB3 boasts extensive amounts of IO apart from the 96Boards Spec'd LS and HS headers it the a few more such headers, the complete list being:
- HS1:1 x 60 pin High-Speed connector (4L-MIPI DSI, USB 2.0 x2,I2C x2, 2L+4L-MIPI CSI)
- HS2:1x 60 pin High-Speed connector (4L-MIPI CSI x 2, SSC SPI, PCIe 3.0,USB 3.0 x1, GPIO x 9)
- LS1:1x 96boards 40 pin Low-Speed connector (UART x2, SPI, I2S, I2C x2, GPIO x12, DC power)
- LS2:1x 96boards 40 pin Low-Speed connector(headset, stereospeaker, DMIC I/F x3, CAN, I2S, GPIO x 7, PWM x 2, ADC x 2)
- LS3:1x 96boards 20 pin Low-Speed connector (SSC SPI x 3, SSC I2C, sensor interrupt x 5)

The RB3 board includes the following on-board sensors as well:
- 6-axis accelerometer/gyroscope: INVENSENSE ICM-42688
- Light sensor and proximity sensor: LITEON LTR-553ALS-WA

![](/product/ce/rb3-platform/images/rb3-frame2-sd.jpg)

***

# Introduction to the Robotic Arm Project


This project aims at providing a demonstrative use-case for the RB3. It will cover the following spectrum:
- Robotics: A 6 DOF(Degree-Of-Freedom) Robotic Arm will be directly controlled by the RB3
- Vision: A 1080/30p or 720/60p video input will be used for object recognition using OpenCV
- Voice: Voice commands will be used to instruct the Arm to perform a set of actions.

Brining it all together:
- A camera will be used to detect objects placed on a table.
- The user will send a voice command to pick and place a particular object.
- The Robotic Arm then works along with the camera to track the object and perform the requested action.

Remember Tony Stark's Dummy ?
![](http://66.media.tumblr.com/tumblr_mcfy9s5bTZ1r60h6bo8_r1_250.gif)

***

# Some considerations about the project before starting out

## Hardware Parts Selection

Since one of the side goals of this project is to be easily reproducible, all the parts that are selected are either off-the-shelf or easily available maker parts.

I will be uploading another blog with a full BOM, along with reasons why we selected some particular parts over others.

## Controlling The Arm:

Since the entire Arm has 6 servos, instead of some fancy-pants hydraulics,  to give it the 6 DOF required. We'll be using an I2C based Servo Controller, aka I2C PWM Driver.

A userspace driver for this is available in [MRAA](https://mraa.io/)/[UPM](https://upm.mraa.io/) which makes life much easier for us in the long run.

My personal objective on this particular topic will be to make the Arm motion really smooth, something that looks nice on the demo. Most demos just have the arm jerking around as there is no speed control on the servos.

## Object Detection using OpenCV

Planing on using OpenCV for image detection, mostly because of its popularity but also because I've seen it working REALLY well on the older generation DragonBoard 820c.

[This](https://github.com/96boards/opencv-color-tracking-demo) particular project by Don Harbin has been around the world and on many trade shows, he uses OpenCV to count the number, by color, of M&M's falling in a box. And I was pretty impressed by the performance of OpenCV.

## OS

Since a proper Debian release is still WIP by the Qualcomm Landing Team, with good progress so far, I will be using a hacked together Debian build that might not be available to all.

However, I will always be tracking the official Debian release progress and change over as it becomes usable.

We are also going to be using Open-Source graphics driver for the Adreno GPU in the official release, so that should open up a lot of possibilities as well.

***

# Signing Off

So, almost every week from now on, I will be releasing a progress blog either with minor or major project updates with a full blog once it is completed.
