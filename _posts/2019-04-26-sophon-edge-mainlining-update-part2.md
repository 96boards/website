---
title: Sophon Edge Mainlining Update - Part 2
author: Manivannan Sadhasivam
date: 2019-04-26 01:01:54+00:00
image:
    path: /assets/images/blog/sophon.png
    name: sophon.png
categories: blog
series: Sophon Edge Mainlining Update
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, Bitmain, BM1880, Edge, Mining, ASIC, Mainlining, Devicetree, Pinctrl, GPIO, Upstream, Sophon
---

# Introduction

Hello and Welcome to the blog on "Sophon Edge Mainlining Update - Part 2". This
blog will summarise the recent mainlining efforts for [Sophon Edge board](https://www.96boards.org/product/sophon-edge/) in Linux kernel.

# Sophon Edge Board

Sophon Edge board is one of the 96Boards Consumer Edition and AI platform.
This board is designed for bringing powerful Deep Learning capability to
various types of applications through its quick prototype development.
Sophon Edge Developer Board is powered by a BM1880 SoC, equipped with tailored
TPU (Tensor Processing Unit) for deploying Neural networks. While looking
at the board, it seems very obvious that it doesn't follow some of the 96Boards
specification like no High speed expansion header, no HDMI port etc... But
there is an obvious reason for it to be published as the 96Boards.

The reason is the heterogeneous nature of the SoC. BM1880 SoC consists of
following processing Units:

* Dual ARM Cortex A53
* MCU grade RISC-V core
* Tensor Processing Unit

This will allow developers to leverage the processing capability of the
multiple processing units thus increasing the performance. Because of this
reason, this board got the waiver and released as the 96Boards compatible
board.

# Mainlining Update

## GPIO

As I mentioned in the [previous blog](https://www.96boards.org/blog/sophon-edge-mainlining-update-part1/), BM1880 SoC has a lot of standard Designware IPs integrated
in it. So it became very easy to upstream those peripherals and GPIO is one among
them. I had to just add devicetree nodes for the GPIO controllers and it was
done. Along with that patch I sent one more patch for adding GPIO line names
based on the [96Boards CE Spec](https://linaro.co/ce-specification) and the
board schematics. This patch was necessary for instantiating GPIOs based on
the generic GPIO line names like GPIO-A from the userspace library like [MRAA](https://github.com/intel-iot-devkit/mraa/). MRAA still lacks this particular feature
but I do have plans to add it very soon.

https://patchwork.ozlabs.org/patch/1048264/
https://patchwork.ozlabs.org/patch/1048266/

Those two patches got reviewed quickly and I sent them to ARM SoC maintainers
as a pull request for v5.2 release.

## Pinctrl

Next basic subsystem was the pinctrl one. It acts as the foundational infrastructure
for the rest of the subsystems since it handles pinmuxing and pin configurations
of individual pins on the SoC. So I decided to tackle it as usual and went
on to add a new pinctrl driver for BM1880. For this work, the vendor driver
did help a lot since it had all the pins documented nicely.

I followed the standard pinctrl driver way and added the driver. There are couple
of interesting features of this pin control subsystem of BM1880 SoC:

1. There was no pinconf support, which means we can't change the individual
pin configurations like pullup/down, slewrate, drive strength etc...

2. The register base was shared between multiple peripherals and it didn't
made sense for me to map it individually. So I decided to go with syscon
and simple-mfd which allows us to use the top level register base like a
bus and the shared peripherals as the children. Below is the representation
of it:

```shell
               sctrl: system-controller@50010000 {
                       compatible = "bitmain,bm1880-sctrl", "syscon",
                                    "simple-mfd";
                       reg = <0x0 0x50010000 0x0 0x1000>;
                       #address-cells = <1>;
                       #size-cells = <1>;
                       ranges = <0x0 0x0 0x50010000 0x1000>;

                       pinctrl: pinctrl@50 {
                               compatible = "bitmain,bm1880-pinctrl";
                               reg = <0x50 0x4B0>;
                       };
               };
```

Following this structure, I sent out the patchset to LKML and it got
reviewed/accepted quickly by the maintainer Linus Walleij.

# Conclusion

So this ends the quick summary of the upstreaming efforts for BM1880 SoC
and Sophon Edge board. We are not very far to boot a distro from eMMC/SD
since we just need Reset and SDHCI drivers. Stay tuned for the updates!
