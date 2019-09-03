---
title: 96Boards Upstreaming Roadmap
author: Manivannan Sadhasivam
date: 2019-07-31 01:01:54+00:00
image:
    path: /assets/images/blog/96boards-logo.png
    name: 96boards-logo.png
categories: blog
series: 96Boards Upstreaming Summary
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, Zephyr, STMicroelectronics, STM32MP1, U-Boot, TF-A, Mainlining, Devicetree, Pinctrl, GPIO, Upstream, Avenger96, ARMv7, Cortex-M4
---

# Introduction

Hello and Welcome to the blog on "96Boards Upstreaming Roadmap". This
blog will summarise the 96Boards upstreaming roadmap for the second half of
2019.

# Roadmap for Second half of 2019

It is always difficult to predict the open source roadmap anytime but I thought
of giving it a shot to provide the community a "what to expect" buzz around
96Boards. As usual, we will try to provide upstream board support (sometimes SoC
also) for our popular 96Boards in open source projects such as Linux kernel,
U-Boot, TF-A, and MRAA. But apart from that, there will always be improvements
to the existing upstream supports, bug fixes, etc...

I'll try to categorize the roadmap based on the projects below.

## Linux Kernel

#### High Priority

* Upstream support for [TB96-AI board](/product/tb-96ai/)
* Upstream support for [TB96-AI IoT board](/product/tb-96aiot/)
* Improvements for Framos IMX290 Camera Sensor driver
* Upstream support for Framos IMX296 Camera Sensor driver
* Improvements for [Avenger96 board](/product/avenger96/)
* Improvements for [i.MX8 AI_ML board](https://www.arrow.com/en/products/imx8-ai-ml/arrow-development-tools)
* Upstream support for [Thor96 board](https://www.arrow.com/en/products/i.imx8-thor96/arrow-development-tools)

#### Low Priority

* DRM for [Hikey960 board](/product/hikey960/)
* PCI-E for [Hikey970 board](/product/hikey970/)
* Improvements for [Bubblegum96 board](/product/bubblegum-96/)
* Improvements for [OrangePi i96 board](/product/orangepi-i96/)

## U-Boot

#### High Priority

* Upstream support for [TB96-AI board](/product/tb-96ai/)
* Upstream support for [TB96-AI IoT board](/product/tb-96aiot/)
* Improvements for [Avenger96 board](/product/avenger96/)
* Upstream support for [i.MX8 AI_ML board](https://www.arrow.com/en/products/imx8-ai-ml/arrow-development-tools)
* Upstream support for [Thor96 board](https://www.arrow.com/en/products/i.imx8-thor96/arrow-development-tools)

#### Low Priority

* Upstream support for [Hikey960 board](/product/hikey960/)
* UFS support

## Zephyr

#### High Priority

* Improvements for [Avenger96 board](/product/avenger96/)
* Improvements for [Meerkat96 board](/product/imx7-96/)

#### Low Priority

* LoRa API support

## MRAA

#### High Priority

* Upstream support for [TB96-AI board](/product/tb-96ai/)
* Upstream support for [TB96-AI IoT board](/product/tb-96aiot/)
* Upstream support for [Avenger96 board](/product/avenger96/)
* Upstream support for [i.MX8 AI_ML board](https://www.arrow.com/en/products/imx8-ai-ml/arrow-development-tools)
* Upstream support for [Thor96 board](https://www.arrow.com/en/products/i.imx8-thor96/arrow-development-tools)

#### Low Priority

* I2S API support

# Conclusion

This ends the short upstreaming roadmap for the second half of 2019. The
roadmap includes the high priority and low priority goals in which the former
will get much interest while the later will be kept as a spare time work. There
are many tasks on our plate not listed above, but 'hey, our team is so much
resource constrained'.
