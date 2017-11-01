---
author: Manivannan Sadhasivam
comments: true
date: 2017-11-01 01:01:54+00:00
layout: post
featured_image: self_balancing_bot.png
title: Self Balancing Bot using 96Boards - Rev 2
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- ARM
- ARMv8
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- HiKey
- I Squared C
- I2C
- Linaro
- Linux
- MediaTek X20
- Bot
- Self balancing Bot
- Robotics
---

# **Introduction**

Hello and Welcome to the final part of our **Self Balancing Bot using 96Boards** blog series. After hitting several roadblocks, we are
finally able to stablize the bot with the help of few tweaks. Before getting into the details, here is the quick recap of what
happened in the previous parts:

1. [Introductory blog](/blog/introducing-self-balancing-bot-using-96boards/) - This is the introductory
blog for the **Self Balancing Bot**. Here we introduced the project, BoM and roadmap.

2. [Part - 1](/blog/self-balancing-bot-using-96boards-part1/) - In this blog, we discussed about
interfacing **IMU** with [96Boards CE](/products/ce/). This involves 3D rendering the IMU data using
python OpenGL.

3. [Part - 2](/blog/self-balancing-bot-using-96boards-part2/) - This blog showcased the first revision
of the Self Balancing Bot with the help of 96Boards CE doing the processing of IMU data, PID and arduino
doing the motor control.

# **Self Balancing Bot - Rev 2**

In the first revision of the Balancing bot, I have mentioned couple of painpoints which hindered the stability of the bot. This revision addresses all of those and makes the balancing bot completely balancing ;-)

For making it to stabilize, below changes are done:

**1. Using the DMP in MPU6050**

This is the most important change required to handle the gyroscope drift and accelerometer noise from IMU. In the first part, we
used the simple Complimentary filter for fusing the accel and gyro values. But, that means there was no heavy filtering of data done
which will eventually have no control over the IMU drift and noise.

In order to overcome this issue, I planned to make use of the DMP (Digital Motion Processor) present in MPU6050. But, the documentation for using DMP is very vague and that will lead to reverse engineer the DMP. But thankfully there was a library exists which
makes use of DMP, [i2cdevlib](https://github.com/jrowberg/i2cdevlib) written by **Jeff Rowberg** and it is a collection of C++ based I2C libraries for AVR/Arduino and other MCU's.

So, I decided to integrate this library with our source code. That helped me to overcome the gyroscope drift and accelerometer noise to provide smooth and steady IMU data. Generally DMP can be used in two methods: interrupt and polling modes. I used the later which avoids the use of an extra pin for sensing interrupts.

**2. Offloading PID control to Arduino**

Eventhough the IMU data is steady, I experienced some issues with my current PID implementation. After trying hard, I reached a point where hosting the PID algorithm in 96Boards CE didn't provide any benefit. So, I switched to use the [PID library](https://github.com/br3ttb/Arduino-PID-Library) in Arduino.

That eliminated the need of decoding the commands from CE board and provided a simple but efficient way to use PID controller.

**3. Using MotorController library**

In the first revision, I have used some simple functions to control motors. But, since there exists a library for controlling motors through arduino, so I decided to make use of it.

With the help of above mentioned software components, I was able to stabilize the bot finally :-)

# **Building and Programming**

All the source code has been uploaded to our [96Boards Project Org](https://github.com/96boards-projects/self_balancing_bot). Since, this project involves two revisions, I have partitioned the sources into *rev_1* and *rev_2* which can be found under *src/* directory.

Instructions on building and programming the Self Balancing Bot Rev 2 can be found in project's [README](https://github.com/96boards-projects/self_balancing_bot/blob/master/README.md).

# **Conclusion**

So, we are at the end of the **Self Balancing Bot using 96Boards** blog series. This project gave me the first exposure to robotics, which coupled with success and pain, but overall I learnt a good lesson and it turned out to be a good noobie project ;-) But the biggest takeway for the community is to know how easy is it to develop any applications using 96Boards ecosystem. The combination of the suitable base and Mezzanine board can help anyone to build anything using 96Boards!
