---
title: Interfacing Camera with Rock960
author: Manivannan Sadhasivam
date: 2018-11-22 01:01:54+00:00
image:
    featured: true
categories: blog
    path: /assets/images/blog/rock960_front.jpg
    name: rock960_front.jpg
    thumb: rock960_thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Rockchip, RK3399, Rock960, Vamrs, Camera, MIPI-CSI, CSI2, DPHY, ISP, Image Signal Processor, V4L2, OV5645, OmniVision, IPEX, Deltavision, MIPI adapter
---

# Introduction

Hello and Welcome to the blog on "Interfacing Camera with Rock960". This
blog will summarise ISP block on RK3399 SoC and steps needed to connect a CSI camera
for capture and video playback.

# RK3399 ISP

Rock960 is based on the Rockchip's RK3399, a dual-core Cortex-A72 and quad-core
Cortex-A53 integrated SoC. One of the interesting features of this SoC is the Image
Signal Processing unit inside it. This ISP unit is capable of receiving data
frames from the Camera sensor and processing it to provide a quality image or
video stream.

ISP unit comprises of below logical elements:

* MIPI serial camera interface
* Image Signal Processing Block
* Many Image Enhancement Blocks
* Crop Block
* Resize Block

ISP unit receives data frames from the Camera sensor through integrated
MIPI DPHY module. Then it processes each frame based upon the configuration
and finally dumps the image/data stream into memory. The opensource driver for
this ISP module is provided by Rockchip [1]. Even though the driver is still under
review for mainline integration, it is pretty much functional.

The ISP driver has been modeled as several V4L2 subdevices, each representing
an individual logical element. Below are the available V4L2 subdevices for this
ISP:

* rkisp1_mainpath
* rkisp1_selfpath
* rkisp1-isp-subdev
* rockchip-sy-mipi-dphy
* rkisp1-statistics
* rkisp1-input-params

More information about the ISP can be obtained from [Rockchip WiKi](http://opensource.rock-chips.com/wiki_Rockchip-isp1).

# Connecting CSI camera to Rock960

There are two revisions of the Rock960 boards manufactured by [Vamrs](http://vamrs.com/):

* Rock960 Model A&B
* Rock960 Model C

The CSI interfaces on both boards differ. Model A&B export only 4 lane CSI
interface on the High Speed (HS) Expansion connector while Model C exports both
4 lane and 2 lane CSI interfaces on the High Speed Expansion connector. It
is to be noted that, [96Boards CE Specification](https://linaro.co/ce-specification)
mandates only one CSI interface present on the HS connector. So ultimately both
boards satisfy the compliance for CSI interface. Due to this limitation, it is
not possible to interface dual camera on Model A&B.

The entire instructions about connecting the camera to both boards and basic usage will be
found in our documentation repo. I have added the [initial camera interfacing
guide](https://github.com/96boards/documentation/blob/master/consumer/rock/guides/camera-module.md) for Rock960 Model A&B based on [Deltavision MIPI adapter v2.0](https://www.96boards.org/product/mipiadapter/) and OV5645 camera sensor. Soon, the instructions for connecting
different camera modules/expansion boards to both Model A&B and Model C will be
available in our repo.

> Note: Due to different devicetree configuration needed for connecting different
>       camera interfaces, the kernel tree is split into different sources currently.
>       Soon we are planning to unify this in a single place.

# Conclusion

As mentioned in the [guide](https://github.com/96boards/documentation/blob/master/consumer/rock/guides/camera-module.md), the captured image may appear greenish due to some ISP tuning
issues. We are trying to resolve this issue currently. Once it is done, I will create
a follow-up post to share the update. Stay tuned ;-)
