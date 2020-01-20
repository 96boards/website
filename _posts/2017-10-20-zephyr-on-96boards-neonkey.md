---
author: Manivannan Sadhasivam
comments: true
date: 2017-10-20 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/zephyr-on-96boards-neonkey/
slug: zephyr-on-96boards-neonkey
image:
    featured: true
    path: /assets/images/blog/neonkey-hd.jpg
    name: neonkey-hd.jpg
    thumb: neonkey.jpg
title: Zephyr on 96Boards Neonkey
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- GPIO
- HiKey
- Neonkey
- Zephyr
- IoT
---

# **Introduction**

[96Boards Neonkey](https://www.96boards.org/product/neonkey/) board has been there for a long time in our Mezzanine family.
It is one of the boards which is not advertised highly but possessing great capability. This blog post explains the recently
added [Zephyr](https://www.zephyrproject.org/) support for this board.

# **96Boards Neonkey**

96Boards Neonkey board acts as the sensor hub for all 96Boards platforms. Following are the features of this board:

* STM32F411CE in UFQFPN48 package
* ARM® 32-bit Cortex®-M4 CPU with FPU
* 84 MHz max CPU frequency
* 1.8V work voltage
* 512 KB Flash
* 128 KB SRAM
* 4 User LEDs
* 15 General purpose LEDs
* GPIO with external interrupt capability
* I2C (3)
* SPI (1)
* I2S (1)

**On board sensors:**
* Temperature/Humidity: SI7034-A10
* Pressure: BMP280
* ALS/Proximity: RPR-0521RS
* Geomagnetic: BMM150
* Acclerometer/Gyroscope: BMI160
* AMR Hall sensor: MRMS501A
* Microphone: SPK0415HM4H-B

Neonkey board is also used to develop new Context Hub features in [AOSP](https://source.android.com/source/devices) by connecting
it with [Hikey](https://www.96boards.org/product/hikey/) or [Hikey960](https://www.96boards.org/product/hikey960/). This board
can be used as a standalone or a Mezzanine board with any of the 96Boards base platforms. Communication to the base board happens
via UART0, I2C0, SPI0 and I2S.

# **Zephyr support for Neonkey**

Pull Request has been submitted for adding Neonkey board support to Zephyr a week after Linaro Connect SFO17 and it took 2 weeks
to merge. Following are hardware features supported in Zephyr as of now:

* NVIC
* SYSTICK
* UART
* GPIO
* PINMUX
* FLASH
* SPI
* I2C

## **Building and Flashing**

Following command is used to build Neonkey for Zephyr:

```shell
$ cd <zephyr_root_path>
$ source zephyr-env.sh
$ cd $ZEPHYR_BASE/samples/hello_world/
$ make BOARD=96b_neonkey
```

For flashing the binary onto Neonkey two methods can be used:

1. Using ROM bootloader
2. Using SWD debugger

### **1. Using ROM bootloader**

ROM bootloader can be triggered by the following pattern:

1. Connect BOOT0 to VDD (link JTAG pins 1 and 5 on P4 header)
2. Press and hold the USR button
3. Press and release the RST button

More detailed information on activating the ROM bootloder can be found in Chapter 29 of Application note [AN2606](http://www.st.com/content/ccc/resource/technical/document/application_note/b9/9b/16/3a/12/1e/40/0c/CD00167594.pdf/files/CD00167594.pdf/jcr:content/translations/en.CD00167594.pdf). The ROM
bootloader supports flashing via UART, I2C and SPI protocols.

For flashing, [stm32flash](https://sourceforge.net/p/stm32flash/wiki/Home/) command line utility can be used. The following
command will flash the zephyr.bin binary to the Neonkey board using UART and starts its execution:

```shell
$ stm32flash -w zephyr.bin -v -g 0x08000000 /dev/ttyS0
```
> Note: The above command assumes that Neonkey board is connected to serial port ***/dev/ttyS0***.

### **2. Using SWD debugger**

For flashing via SWD debug port, 0.1” male header must be soldered at P4 header available at the bottom of the board, near
RST button. Use the Black Magic Debug Probe as an SWD programmer, which can be connected to the P4 header using its flying
leads and its 20 Pin JTAG Adapter Board Kit. When plugged into your host PC, the Black Magic Debug Probe enumerates as a
USB serial device as documented on its Getting started page.

> Note: If you are concerned about buying a dedicated SWD debugger, you can also use [96Boards Carbon](https://www.96boards.org/product/carbon/) for flashing and debugging
>       as shown in [this](https://www.96boards.org/blog/96boards-carbon-self-programming/) blog post.

It also uses the GDB binary provided with the Zephyr SDK, arm-zephyr-eabi-gdb. Other GDB binaries, such as the GDB from
GCC ARM Embedded, can be used as well.

```shell
$ arm-zephyr-eabi-gdb -q zephyr.elf
(gdb) target extended-remote /dev/ttyACM0
Remote debugging using /dev/ttyACM0
(gdb) monitor swdp_scan
Target voltage: 1.8V
Available Targets:
No. Att Driver
 1      STM32F4xx
(gdb) attach 1
Attaching to Remote target
0x080005d0 in ?? ()
(gdb) load
```

# **Conclusion**

So, that's it about the Zephyr support for Neonkey board. Now its the time for community to make cool real time projects using
Zephyr incorporating Neonkey and share with us :-) Since, Neonkey has many onboard sensors one can easily use this board with other 96Boards to
create IoT ecosystem in an efficient way.
