---
title: LED Support in Zephyr
author: Manivannan Sadhasivam
date: 2018-05-04 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/zephyr.jpg
    name: zephyr.jpg
    thumb: zephyr-thumb.png
categories: blog
tags: 32-bit, 96Boards, ARM, Cortex M, IoT Edition, Zephyr, RTOS, LED, Neonkey, Upstreaming
---

# Introduction

Hello and Welcome to the blog on "LED Support in Zephyr". This blog provides
a summary on the recently added LED subsystem support in [Zephyr RTOS](https://github.com/zephyrproject-rtos/zephyr)
by 96Boards team.

# LED Support in Zephyr

There has been a huge evidence that the Zephyr RTOS is going to rule the RTOS
market in upcoming days. Reason for such a promise comes from the community
involvement towards it. Since it is backed by the leading Semiconductor
industries and OpenSource consortiums, the community involvement gets increasing
day by day. Like many organisations, Linaro is one of the key player in the
development of Zephyr. 96Boards team also plays a considerable amount of role
in contributing to Zephyr, since most of our [IoT Edition](https://www.96boards.org/products/ie/)
boards uses Zephyr as the primary RTOS.

By following the OpenSource philosopy of **Consume and Contribute**, we do often
contribute to Zephyr with our limited amount of resources. And this time, the
contribution comes in the form of introducing a new LED subsystem to Zephyr.
Hold on! Am I reading it correctly? LED subsytem? Why do we need a subsystem
for controlling an LED device? Isn't it trivial to control it?

Answer to the above question lies in the fact that LED devices are not trivial
to access by software. We often need to write a separate driver for controlling
an LED driver like [LP3943](http://www.ti.com/product/LP3943). And for unifying
those drivers, we definitely need a proper API and subsystem.

The motivation really comes during the upstream effort of [Neonkey](https://www.96boards.org/product/neonkey/)
Mezzanine, which has a STM32F4 chip running Zephyr. Along with many onboard
sensors, this board also packs one LED driver LP3943 for controlling the onboard
LED's. So, we decided to upstream the LED driver for making the support for our
Mezzanine better. During this process we realised that there is no way
straightforward way to add the LED driver.

There are few subsystems we initially considered:

1. [PWM](https://github.com/zephyrproject-rtos/zephyr/tree/master/drivers/pwm)
2. [LED STRIP](https://github.com/zephyrproject-rtos/zephyr/tree/master/drivers/led_strip)

But none of the above seemed to satisty our needs, so we decided to add a new
LED API and subsystem to Zephyr.

The discussion started with a leading contributor, Marti Bolivar from OpenSource
Foundaries. Ever since he involved with this discussion, he started reviewing the
Pull Request for adding the basic API support and LP3943 driver. He played a
key role in structuring the API and showed tremendous support till the PR merged
in.

* PR adding LED API and driver support - https://github.com/zephyrproject-rtos/zephyr/pull/5342

Currently, the following API's are supported by LED subsystem:

1. LED Set Brightness
2. LED Blink
3. LED ON
4. LED OFF

Along with the API, support for LED driver LP3943 and a sample application is
also added. With this support, 96Boards Neonkey becomes the first board to
be enabled with LED support in Zephyr.

This makes it for the initial LED support in Zephyr and we expect more API and
driver support will be added in future.
