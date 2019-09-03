---
title: Bubblegum96 Mainlining Update - Part 3
author: Manivannan Sadhasivam
date: 2018-10-17 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/bubblegum96.png
    name: bubblegum96.png
    thumb: bubblegum96-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Kernel, Linux, Bubblegum96, Actions, S900, SoC, Mainlining, DMA, DMAEngine, Reset, Clock, Owl, Upstreaming
---

# Introduction

Hello and Welcome to the blog on "Bubblegum96 Mainlining Update - Part 3". This
blog will summarise the mainlining efforts for [Bubblegum96 board](/product/bubblegum-96/) in Linux kernel.

# Mainlining Update

The [Part 2 blog](/blog/bubblegum96-mainlining-update-part-2/),
discussed the pinctrl/gpio support for this board. Since then there have been
so many updates in the kernel world for Bubblegum96. They are listed below:

1. I2C Controller Support
2. DMA Controller Support (Memcpy + Slave)
3. DMA Support for UART
4. Reset Controller Support

## I2C Controller Support

I2C (Inter Integrated Circuit) is the two-wire serial bus protocol for interfacing
the sensors/actuators to the host processor. Actions Semi S900 SoC has 6
in-built I2C controllers with both master and slave support. Below are some of
the key features of the I2C controllers:

* Both master and slave functions support
* Support for Standard mode (100kbps), Fast-speed mode (400kpbs) and
  High-Speed mode (3.4Mbps)
* Multi-master capability
* No support for 10-bit address mode
* Internal Pull-Up Resistor (1.5kOhm) optional
* 8Bit * 128 TX FIFO and 8Bit * 128 RX FIFO

A single I2C controller can handle at most two I2C message concatenated by a
repeated start condition via its internal address feature. Hence the driver
has been designed to use this feature for messages of length greater than 1.
In those cases, the first message of the combined message should be a `write`
with maximum message length 6 and the second message's maximum length should
be 240 bytes.

Bubblegum96 board exposes two I2C busses on the LS header and two on the HS
the header as per the [96Boards CE specification](https://linaro.co/ce-specification).

The patch series for adding I2C controller support was posted and it took 8
iterations to get merged.

https://patchwork.kernel.org/cover/10552779/

## DMA Controller Support

DMA (Direct Memory Access) is the feature for transferring data from peripherals
to memory or peripherals to peripherals without the intervention of the host
processor. Actions Semi S900 SoC integrates one DMA transmission engine with 12
logic channels, 32 bytes burst transfer, 4 read outstanding requests, linked
list mode, and unaligned transfer supports. The DMA engine has one slave
interface and two master interfaces. Slave interface is for receiving register
configuration orders from CPU, which complies with the AHB interface. The other
two master interfaces are connected with the system NOC, in which one is
dedicated to accessing DCU or ShareRAM, and the other is for other devices on
NOC.

The DMA engine in S900 can be used to transfer data from the AXI, AHB and APB
slave devices. AXI devices include DDR, ShareRAM, NAND Flash, and SD/MMC. AHB
slave consists of SRAM, SPI, and MIPI DSI. APB slave devices include UART, I2S,
PCM, SPDIF, HDMIAudio, etc...

The patch series for adding the DMA engine support in S900 was posted. The initial
patchset only supported Memcpy support.

https://patchwork.kernel.org/cover/10545205/

## DMA Support for UART

As said in the previous section, the DMA engine in S900 can transfer data between
several slave devices. So, another patchset was posted to add the DMA slave
support along with enabling DMA support for UART. The DMA support for UART
devices is used to speed up the transmission rates without host processor
overloading. But the real use case would be to use DMA with high data rate
peripherals like eMMC, I2S, USB, SPI etc...

https://lore.kernel.org/patchwork/cover/993278/

## Reset Controller Support

Reset Controllers are used to provide the warm/cold reboots to the host system.
Reset Management Unit in Actions Semi S900 SoC provides reset to VDD power
domain, reset triggers from POR (Power on Reset) and software. This block is
tightly coupled with the CMU (Clock Mangement Unit) in the processor. Hence,
the register map is shared with the CMU. So in the driver, I decided to
integrate the reset controller support into common clock driver. After posting
the initial patchset, I got several feedbacks from people to use MFD/Syscon to
isolate the Reset support from CMU. But Rob Herring, DT bindings maintainer had
other thoughts. He insisted on going with my initial idea of merging two blocks
together in the driver.

Finally, I posted the 3rd revision of the patchset incorporating the feedbacks
I got and it got merged.

https://patchwork.kernel.org/cover/10562533/

# Conclusion

This ends the summary of the mainlining efforts for the Bubblegum96 board. There are
so many action items in the pipeline like eMMC/SD, USB, PMIC etc... And we are
very close to boot a distro with the mainline kernel. Please stay tuned for the
further updates.
