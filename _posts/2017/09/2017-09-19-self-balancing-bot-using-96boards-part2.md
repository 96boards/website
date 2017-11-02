---
author: Manivannan Sadhasivam
comments: true
date: 2017-09-19 01:01:54+00:00
layout: post
featured_image: self_balancing_bot.png
title: Self Balancing Bot using 96Boards - Rev 1
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
- HiKey
- I Squared C
- I2C
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
- U-Boot
- Bot
- Self balancing Bot
- Robotics
- IMU
- Complimentary Filter
- OpenGL
- pygame
- 3D
---

# **Introduction**

Welcome to **Part 2** of our **Self Balancing Bot using 96Boards** blog series. In this blog, we are going to see the finished **Self
Balancing Bot** in action...yay :D . You may notice a huge delay in getting the **Part 2** out, reason for that is explained below. 

In case you missed, here is the quick recap of what happened in previous parts:

1. [Introductory blog](/blog/introducing-self-balancing-bot-using-96boards/) - This is the introductory 
blog for the **Self Balancing Bot**. Here we introduced the project, BoM and roadmap.

2. [Part - 1](/blog/self-balancing-bot-using-96boards-part1/) - In this blog, we discussed about
interfacing **IMU** with [96Boards CE](/products/ce/). This involves 3D rendering the IMU data using
python OpenGL.

# **Self Balancing Bot**

As I promissed, the Self Balancing Bot has been created using 96Boards CE. The detailed instructions including Schematic diagram,
step by step instructions on building the code is provided in the [96Boards-projects](https://github.com/96boards-projects/self_balancing_bot)
repository.

But, the bot is not functioning upto the mark :( There are couple of reasons for that which are listed below:

**1. Use of software Sensor Fusion algorithm**

As you can see from the [previous blog](/blog/self-balancing-bot-using-96boards-part1/), I have used
**Complimentary Filter** for fusing the Accelerometer and Gyroscope readings together. The issue here is, Accelerometer data
can get affected by noise and Gyroscope data tends to drift over time. Since the filter is a software model, accurary is
not that great. Because of these reasons, bot fails to stabilize on its axis.

**2. Lack of Optical Encoder to determine position of motors**

Because I have purchased a ready made chasis and my poor knowledge towards Robotics (this is what a new comer say :P), the motors
I've purchased with Encoder doesn't fit with the Chasis. So, I decided to use general gear motors for this project which prohibits
me from precisely reading the position of the bot. This is also one of the reason why the bot is not able to stabilize properly.

# **Why huge delay for Part -2 ?**

Well, before starting this project I assumed that only PID tuning part will prove to be tough. But, now I learned
that for a good Robotics project it is important to learn how to choose componenets properly. Because, I made the wrong selection
of componenets right from the motor to battery charger, my entire project gets delayed.

In between, the sensor MPU6050 also went bad so I ordered one more from Amazon but the received one was faulty (doesn't have
few vias present on board). Then I ordered couple more from the trusted vendor and finally able to make it.

Then, as I expected initially tuning PID controller was also tough. It requires more trial and error approach. 

Because of the above mentioned reasons, it took a while to get the **Part-2** out.

# **PID tuning**

As I said, PID controller tuning took more time. So I have prepared the below instructions to help anyone tune PID better as 
the constants worked for me may not work for you. In the
project, PID constants are mentioned [here](https://github.com/96boards-projects/self_balancing_bot/blob/master/src/motor_control.c#L30).

* **KP** - Proportional Constant
* **KI** - Integral Constant
* **KD** - Derivative Constant

1. Start with zero for all PID constants
2. Increase KP until the motors start oscillating. Here KP will provide the necessary torque for the motor to move.
3. For motor controlling project, KI is not needed generally. But a little negative value may prove handy for stabilization.
4. Finally adjust the KD value (should be small) so that the oscillation damp out and the bot balances itself.

> Note: PID constants depends on the motor, chasis, sensor and lot other factors. So, the PID value
provided in project will not work straightaway for you. That's why PID tuning is necessary.

# **Video demostration**

The video demostration of the **Self Balancing bot**

{% include media.html media_url="https://www.youtube.com/embed/eRnURzfUmaw" %}

Because of the above discussed reasons, bot fails to stabilize for long time. This can be overcomed heavily by using onchip **DMP**
in MPU6050. DMP takes care of fusing accel and gyro reading together hence avoiding drift and noise.

So, I'll call the bot which uses DMP as **Rev 2** and the current implementation as **Rev 1**. We are also planned to demostrate 
the **Rev 2** of this bot in [Linaro Connect](http://connect.linaro.org/).

# **Conclusion**

We are at the end of **Part-2** blog of our **self Balancing Bot** series. I hope this blog provided some info on my experience
in creating the self balancing bot using 96Boards CE. If you have any idea of how to make this project better or any suggestion
over the current implementation, please provide those in comments. We'd love to hear back from the community!

