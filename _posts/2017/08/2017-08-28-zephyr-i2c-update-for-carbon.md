---
author: Manivannan Sadhasivam
comments: true
date: 2017-08-28 01:01:54+00:00
layout: post
link: http://www.96boards.org/blog/zephyr-i2c-update-for-carbon/
slug: zephyr-i2c-update-for-carbon
featured_image: 96b-carbon-front.png
title: Zephyr I2C Update for Carbon
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
- Carbon
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

Have you tinkered with I2C on [96Boards Carbon](http://www.96boards.org/product/carbon/) - [IoT Edition](http://www.96boards.org/products/ie/)
of our 96Boards family through [Zephyr RTOS](https://www.zephyrproject.org/)? If yes, then this blog will give you a quick update on the latest change made for I2C. If you haven't used
then this blog will serve you as a good introduction to I2C on Carbon.

# **Carbon**

[Carbon](http://www.96boards.org/product/carbon/) board is the first board to be certified as 96Boards IoT edition compatible.
The heart of the Carbon board is **STM32F401RE** which is a Cortex M4 based microcontroller. For any IoT project, communication
is a must have feature. For aiding this purpose another Co- processor is embedded onto the Carbon board which is **nRF51822**. 
This is used to provide *BLE* support for communicating the host, thus making Carbon as a best bet for doing IoT projects.
On the software side, this board has [Zephyr RTOS](https://www.zephyrproject.org/) support. This blog post will clarify few
misconceptions on Zephyr I2C support for Carbon and also provides a quick update over I2C_2 interface.

# **I2C on Carbon**

I2C-Inter Intergrated Circuit is a serial communication protocol for sharing data between master and slave seamlessly. I2C
supports multiple bus speed with the below standard ones:

1. Low speed mode - 10 Kbits/s
2. Standard mode - 100 Kbits/s
3. Fast mode  - 400 Kbits/s
4. High speed mode - 3.4 Mbits/s

But the I2C controller can be designed to operate at wide number of frequencies. For the detailed information on I2C, take a
look at the [official website](https://www.i2c-bus.org/i2c-bus/)

Carbon board supports 2 I2C interfaces on-board, I2C_1 and I2C_2 operating at Standard and Fast modes. Both are exposed on the Low Speed expansion header, allowing 
easy interfacing to the external world. Although the microcontroller supports 3rd I2C interface, it is not exposed on carbon
as it got wired to **nRF51822** for BLE support.

## **Ambiguity on I2C pinout**

When you look at the Carbon's [Zephyr documentation](http://zephyr-docs.s3-website-us-east-1.amazonaws.com/online/dev/boards/arm/96b_carbon/doc/96b_carbon.html),
you can see two sets of I2C interfaces as below:

   * I2C1_SCL - PB6
   * I2C1_SDA - PB7
   
   * I2C1_SCL - PB8
   * I2C1_SDA - PB9 
   
Users often gets confused by this (as like me on first time :P) and fails to see the default pinmux section for I2C on the same
[document](http://zephyr-docs.s3-website-us-east-1.amazonaws.com/online/dev/boards/arm/96b_carbon/doc/96b_carbon.html#i2c). This
confusion can lead to connecting the I2C devices to wrong pins. But the Pinmux section clearly says that the Pinmux has been
configured for I2C1 on PB6/PB7.

Connecting to the wrong I2C pins often causes the device to hang at the [Wait for Slave Ack](LL_I2C_IsActiveFlag_ADDR) code as 
Carbon will try to establish I2C communcation via PB6/PB7 where no I2C slave device is hooked up.

Okay, now I got the correct pinmap for I2C1 but what should I do for using another I2C1 interface?

Answer to the above question is to modify the default [Pinmux code](https://github.com/zephyrproject-rtos/zephyr/blob/master/drivers/pinmux/stm32/pinmux_board_carbon.c#L26).
It can be changed as like the following code:

```c
#ifdef CONFIG_I2C_1
	{STM32_PIN_PB8, STM32F4_PINMUX_FUNC_PB6_I2C1_SCL},
	{STM32_PIN_PB9, STM32F4_PINMUX_FUNC_PB7_I2C1_SDA},
#endif /* CONFIG_I2C_1 */
```

This will cause the I2C controller present in **STM32F401RE** to use PB8/PB9 for SCL/SDA.

## **I2C_2 Update**

Since, Carbon supports I2C_2 interface you might want to leverage that also. But, the previous code base would error out while
trying to build Zephyr with I2C_2 support enabled for Carbon. Reason for that is the absence of Kconfig mapping for I2C_2 in Zephyr [I2C driver](https://github.com/zephyrproject-rtos/zephyr/blob/master/drivers/i2c/i2c_ll_stm32.c).
Zephyr expects to have the mapping between Kconfig definitons and driver definitions for using any driver. This mapping is 
provided by the [DTS fixup](https://github.com/zephyrproject-rtos/zephyr/blob/master/dts/arm/96b_carbon.fixup) file for now. Since,
there was no mapping for I2C_2 on Carbon before, I've added the mapping in this [Pull Request](https://github.com/zephyrproject-rtos/zephyr/pull/1254).

So now you can build Zephyr for Carbon with I2C_2 support and communicate any slave devices easily :-)

>Note: PR has been merged into **arm** branch of Zephyr, it will be merged into **master** only during the next release. Please use
**arm** branch for now.

# **Conclusion**

I hope this post has cleared few doubts and provided some information over the Zephyr I2C support for Carbon board. TBH all of the information is supplied
with the [document](https://github.com/zephyrproject-rtos/zephyr/blob/master/boards/arm/96b_carbon/doc/96b_carbon.rst) itself, we just have to read it thoroughly before working on it :-)
