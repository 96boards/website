---
title: Standardizing 96Boards Support in Zephyr
author: Manivannan Sadhasivam
date: 2018-10-12 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/zephyr.jpg
    name: zephyr.jpg
    thumb: zephyr-thumb.png
categories: blog
tags: 32-bit, 96Boards, Cortex-M, ARM, ARMv7, IoT Edition, Zephyr, Carbon, Nitrogen, Argonkey, Neonkey, Kconfig, Devicetree, Mezzanines, IoT, BLE
---

# Introduction

Whenever we go to connect, we bring a bunch of goodies, boards, T-Shirts
and of course some interesting works also. So, this time I got a [Zephyr
issue](https://github.com/zephyrproject-rtos/zephyr/issues/9233) assigned
to me. This is about adapting 96Boards board support to Zephyr's default
board configuration guidelines. This blog will provide information about
Zephyr's configuration mechanism, default board configuration guidelines
and how I adapted it for 96Boards.

# Zephyr's Configuration Mechanism

Like Linux kernel, Zephyr also adopted the Kconfig for configuring the whole
RTOS in order to make it highly customizable. Kconfig system uses the Kconfig
files for providing the configuration symbols, menu structure, default values
and so on. In Zephyr, Kconfig is used in conjunction with Devicetree files. If
you are coming from Linux background (ARM, PowerPC...), it may sound little
strange. In Linux, devicetree provides the runtime configuration to the kernel.
But Zephyr restricts its usage to build time only.

In a nutshell, the configuration of Zephyr happens in below order:

1. Kconfig
2. Board devicetree
3. Common devicetree overlays
4. Device specific devicetree overlays

More information about Kconfig's structure can be found in [Zephyr docs](https://docs.zephyrproject.org/latest/).

# Default Board Configuration Guidelines

Kconfig definitions of a particular board is provided in 3 different ways:

1. Kconfig.defconfig
2. Kconfig.board
3. board_defconfig

## Kconfig.defconfig

This Kconfig file provides configuration values for invisible Kconfig symbols.
Invisible option means, it is not configurable by the user and it has no prompt.
Visible in the sense that this option can be configured from the `menuconfig`
interface and has a prompt. 

## Kconfig.board

This Kconfig option provides board name and the SoC it depends on. For instance,
below is the `Kconfig.board` content of [96Boards Carbon](https://docs.zephyrproject.org/latest/boards/arm/96b_carbon/doc/index.html) board.

```shell
# Kconfig - 96boards Carbon STMF401RE board configuration
#
# Copyright (c) 2016 Linaro Limited.
#
# SPDX-License-Identifier: Apache-2.0
#

config BOARD_96B_CARBON
        bool "96Boards Carbon (STM32F401)"
        depends on SOC_STM32F401XE
```

## board_defconfig

This file implements the `.config` syntax and provides values for visible
Kconfig symbols default for a board.

In general, a SoC will expose all available interfaces and it will be
limited by the interfaces provided by the board. So, care should be taken
to initialize and expose only available interfaces on the board. This will
be a huge performance factor for an RTOS like Zephyr since exposing all
unavailable interfaces will waste memory and time.

That's why Zephyr has provided the [default board configuration guidelines](https://docs.zephyrproject.org/latest/)
for all boards and it makes much sense to adapt to it.

# Adopting 96Boards to Guidelines

First an [issue](https://github.com/zephyrproject-rtos/zephyr/issues/7151) was
created for tracking the whole progress of the guideline adoption work. Then
sub-issues were created for tracking the individual board family work. For
96Boards, issue [#9233](https://github.com/zephyrproject-rtos/zephyr/issues/9233)
was created and assigned to me at Linaro Connect YVR18 by Erwan. This issue
requires us to adopt the following supported 96Boards:

1. [96Boards Argonkey](https://docs.zephyrproject.org/latest/boards/arm/96b_argonkey/doc/index.html)
2. [96Boards Carbon](https://docs.zephyrproject.org/latest/boards/arm/96b_carbon/doc/index.html)
3. [96Boards Carbon nRF51](https://docs.zephyrproject.org/latest/boards/arm/96b_carbon_nrf51/doc/index.html)
4. [96Boards Neonkey](https://docs.zephyrproject.org/latest/boards/arm/96b_neonkey/doc/index.html)
5. [96Boards Nitrogen](https://docs.zephyrproject.org/latest/boards/arm/96b_nitrogen/doc/index.html)

So I submitted a [Pull Request](https://github.com/zephyrproject-rtos/zephyr/pull/10367)
to Zephyr GitHub repository and it got accepted after the review. There isn't
much work involved in this PR since all of our boards were in good shape. I just
enabled the peripherals which were missing, disabled the ones which were not
exposed and updated the board documentation to reflect these changes.

# Conclusion

Finally, all of our 96Boards were adopted to the Zephyr's default board
configuration guidelines and the board support looks much cleaner now.
This will only make the user experience better with 96Boards and we are hoping
that the community will benefit from this.
