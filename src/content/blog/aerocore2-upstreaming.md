---
title: AeroCore2 | Zephyr Porting and Upstreaming Efforts
author: sahaj-sarup
date: 2020-05-20T01:00:00.000Z
image: ../../assets/images/blog/zephyr.jpg
image_name: fold.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, gumstix, Mezzanine Edition, stm32, Linaro,
  zephyr, cortex-m, aerocore2
---

# Introduction

This Blog will summarize the recent porting efforts for the AeroCore2 Mezzanine in Zephyr RTOS.

## AeroCore 2

The [AreoCore 2](https://www.96boards.org/product/aerocore2/) for 96Boards provides MAV control to 96Boards compliant platforms. With an ARM Cortex-M4 microcontroller, STM32F427VIT6, running NuttX RTOS and an integrated connection to the connected 96Boards device, AeroCore 2 gives users a complete Linux installation on a PX4-compatible platform.

## Why Port to Zephyr RTOS?

The AeroCore2 by default runs the NuttX RTOS with the PX4 autopilot stack on top. The last supported verion that this board runs is 1.8.2 since the PX4 autopilot out-grew the capabilities of the MCU. And at the time of writing this blog, the latest verion is 1.10.

So as it stands, this board does not have an up-to-date RTOS stack avilable. And that is the reason why I wanted to add this board to zephyr as it had a pretty decent MCU and a lot of life left.

# Porting

## The pitfalls and challenges

### Documentation:

... Or lack thereoff. This board was created by [Gumstix](https://www.gumstix.com/) using their [Geppetto](https://www.gumstix.com/geppetto/) which is a "Drag-and-Drop" level of EDA. Because of the astonishingly high level of automation from design to manufacturing, there isn't any "human readable" for of schematics that we can follow.

This made for a fair bit of pcb tracing, making sense of the automated documentation and even following the NuttX commits with regards to the Aerocore2. Not the easiest thing for your first try at upstreaming a board.

### Constant changes in Zephyr Source

Since the time I sent out my [initial Pull Request](https://github.com/zephyrproject-rtos/zephyr/pull/22095) the Zephyr RTOS repository has gone through a lot of changes on how it handles SoCs and Devices at build time, moving from KConfig to Device Tree.

This resulted in the PR being re-submitted multiple times and took about 4 months (O_o) to get merged.

### Changelog

- Added all required board files in /boards/arm/96b_aerocore2
- Modified pinmux for stm32f4
- Add stm32f427 support based on previous work done for the stm32f429.
- Rework current stm32f429 implementation to now be based on stm32f427.
- Introduce dedicated dtsi for the VI variant of both stm32f427 and stm32f429. This is done to prevent stm32f4.dtsi from being included twice.

### What Works and What Doesn't

Pretty much everything broken out from the STM32 MCU works and is enabled. Better question may be what doesn't work?

- Most of the sensors:
  - Sadly most sensors on-board the aerocore2 don't have a driver in the Zephyr Source tree and hence were out-of-scope for this pull request.
- PWM Input: Most drone controller boards have a PWM-in header for controller input, Zephyr at the moment doesn't have a mechanism to do this.

---

# Conclusion

At the end, I'd like to thank the maintainers of the Zephyr RTOS project and Gumstix for helping out along the way.

You can check out the Aerocore2's Dedicated page at Zephyr RTOS at: [https://docs.zephyrproject.org/latest/boards/arm/96b_aerocore2/doc/index.html](https://docs.zephyrproject.org/latest/boards/arm/96b_aerocore2/doc/index.html)
