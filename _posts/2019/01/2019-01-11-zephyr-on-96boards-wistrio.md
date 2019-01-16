---
title: Zephyr on 96Boards WisTrio IoT Board
author: Manivannan Sadhasivam
date: 2019-01-11 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/96b_stm32_sensor_mez.png
    name: wistrio.jpg
    thumb: wistrio-thumb.jpg
categories: blog
tags: 32-bit, 96Boards, ARM, ARMv7, IoT Edition, Kernel, Linux, ST, STM32, ST-Link, Zephyr, Debugging, I2C, SPI, Clock, Sensor, LoRa, LoRaWAN, GPS, RTOS, RAKWireless
---

# Introduction

Hello and Welcome to the blog, **Zephyr on 96Boards WisTrio IoT Board**. This
blog gives a quick summary of the recent upstreaming efforts for [WisTrio IoT board](https://www.96boards.org/product/wistrio/) in [Zephyr Project](https://github.com/zephyrproject-rtos/zephyr).

# WisTrio IoT Board

WisTrio IoT board is the first [LoRa](https://en.wikipedia.org/wiki/LoRa) tracker
board in 96Boards IoT form factor from [RAKWireless](https://www.rakwireless.com/en/).
This board is based on the RK5205 chipset comprising of STM32L1x MCU and SX1276
LoRa modem. This board is a perfect bet for developing low-cost LoRa nodes
for IoT applications. Below are some of the key features of this board:

* Chipset: RAK5205
* Interface: I2C, GPIO, UART, ADC
* LoRa band: Supports multiple global bands
* GPS module integrated
* Antennas: LoRa antenna and GPS antenna
* Working voltage: 3.3v
* Flash: 128 KB
* RAM: 16 KB

## On board sensors:

* Acclerometer: STMicro LIS3DH
* Integrated Environmental sensor: Bosch BME680

# Zephyr support for WisTrio IoT board

RAKWireless provides a LoRa based [Demo project](https://github.com/RAKWireless/RAK5205-WisTrio-LoRa) for using this board. It is a good starting point for getting hands on
with LoRa technology. But since we are standardizing [Zephyr](https://github.com/zephyrproject-rtos) as the software platform for all of our IoT boards, I decided to port
this board to Zephyr. The chipset RAK5205 is based on the [STM32L151 MCU](https://www.st.com/resource/en/datasheet/cd00277537.pdf) from ST Microelectronics. So, I assumed
that porting this board/chipset is going to be very easy since ST is an
active contributor to Zephyr project.

But when I looked into the SoC support for STM32L1x series, there was none
existed. So, I took the courage to add the STM32L1x SoC series support with
the STM32Cube HAL for supporting the MCU on this board. It took me one day
to add both SoC and board support in Zephyr.

> Note: **Kudos to the ST folks working on Zephyr, because they made it very
> easy to add a new SoC series to Zephyr**

But I observed something unusual while working on this project. Usually, I
have to debug the new board/SoC support using SWD debugger to get it working.
But on this board, it just worked straight away when I flashed the sample
Hello world project!!!

So after adding the README doc and cleaning up the commits, I submitted the
Pull Request to Zephyr.

https://github.com/zephyrproject-rtos/zephyr/pull/12354

# Conclusion

While the PR is under review, now I'm thinking of implementing the LoRa API
support in Zephyr. This will enable us to use this board as a full-fledged
LoRa node running Zephyr. But this will take a while and might involve efforts
from multiple people. Stay tuned!
