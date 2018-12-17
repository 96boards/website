---
title: Zephyr on 96Boards STM32 Sensor Mezzanine
author: Manivannan Sadhasivam
date: 2018-12-11 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/96b_stm32_sensor_mez.png
    name: 96b_stm32_sensor_mez.png
    thumb: 96b_stm32_sensor_mez_tn.jpg
categories: blog
tags: 32-bit, 96Boards, ARM, ARMv7, IoT Edition, Kernel, Linux, ST, STM32, ST-Link, Zephyr, Debugging, PWM, I2C, SPI, Clock, Sensor, Mezzanine
---

# Introduction

Hello and Welcome to the blog, "Zephyr on 96Boards STM32 Sensor Mezzanine". This
blog gives a quick summary of the recent upstreaming efforts for [96Boards Sensor Mezzanine](https://www.96boards.org/product/stm32/) in [Zephyr Project](https://github.com/zephyrproject-rtos/zephyr).

# 96Boards STM32 Sensor Mezzanine

96Boards STM32 Sensor Mezzanine board acts as a mezzanine platform for
all 96Boards CE compliant boards. It can also be used as a standalone
board too powered from USB or external 5v supply. Following are some of the
features of this board:

* STM32F446VE in LQFP100 package
* ARM |reg| 32-bit Cortex |reg|-M4 CPU with FPU
* 180 MHz max CPU frequency
* 1.8V work voltage
* 512 KB Flash
* 128 KB SRAM
* I2C (2)
* SPI (2)
* I2S (1)

## On board sensors:

* Temperature/Pressure: STMicro LPS22HB
* Acclerometer/Gyroscope: STMicro LSM6DS3H
* Magnetometer: STMicro LIS3MDL
* Microphone: STMicro MP34DT01

# Zephyr support for 96Boards STM32 Sensor Mezzanine

Since the SoC, STM32F446 is already supported in Zephyr, it became very easy
to add the board support for STM32 Sensor Mezzanine. I had to add a couple of
missing pinmux definitions for UART and I2C pins to complete the board support.
Once it was done, I just submitted a PR to the upstream GitHub repository.

https://github.com/zephyrproject-rtos/zephyr/pull/11987

Below are the supported peripherals for this board in Zephyr:

* NVIC
* UART
* GPIO
* PINMUX
* FLASH
* SPI
* I2C

## DMA Memcpy

While working on the board support, I noticed that the DMA controller in this
SoC supports Memcpy and peripheral transactions. So, I decided to test the
Memcpy mode since peripherals modes are already used by other peripherals like
I2S.

To my surprise, I had to add a couple of configurations to the DMA driver for
properly utilizing the Memcpy feature. So, again I submitted a PR for adding
those configurations to the DMA driver.

https://github.com/zephyrproject-rtos/zephyr/pull/12036

# Conclusion

This ends the quick summary of the upstream support for 96Boards STM32 Sensor
Mezzanine in Zephyr. Now, it is up to the community to make use of it and create
some cool applications :-) The excitement didn't end here and I can promise more
to come in future. Stay tuned!
