---
title: CMake support for 96Boards WisTrio
author: Manivannan Sadhasivam
date: 2019-05-25 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/wistrio.jpg
    name: wistrio.jpg
    thumb: wistrio-thumb.jpg
categories: blog
series: Our path to libmraa with 96Boards
tags: 32-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, WisTrio, LoRa, LoRaWAN, CMAKE, GCC, Newlib, Newlib-nano, FPU, Floating-point, Cortex-M3, ST, GDB
---

# Introduction

Hello and Welcome to the blog, **CMake support for 96Boards WisTrio**. This
blog gives a quick summary of the recent CMake support added for [WisTrio IoT board's](https://www.96boards.org/product/wistrio/) SDK
to help building the firmware on Linux based systems using opensource tools.

# WisTrio SDK

WisTrio is a 96Boards IoT board manufactured by RAK Wireless based on
RAK811 LoRa module. We already added Zephyr support for this board utilizing
the STM32 MCU integrated in RAK811 module. But the [SDK](https://github.com/RAKWireless/RAK5205-WisTrio-LoRa) provided by RAK Wireless
is based on the proprietary Keil IDE and it is not opensource developer
friendly. So far there is no alternative build system exists for the
SDK and that made life miserable for the open source developers who wish
to use an open build system like CMake or Make.

# CMake support

Much like other developers I also suffered from the lack of open build tool
support for the WisTrio SDK. So, I decided to add one for my own use as well
as for the community. Initially, I thought of adding plain [Make](https://www.gnu.org/software/make/) utility support
but that turned to be little bit tricky as the SDK involves a lot of configurations.
Hence, I finally moved to [CMake](https://cmake.org/) utility which seemed to be lot easier to work
with. Even though I didn't have much experience with CMake, there were lot of good
tutorials available to help me.


After spending multiple evenings finally, I got the CMake support added to
WisTrio SDK.

https://github.com/Mani-Sadhasivam/RAK5205-WisTrio-LoRa/tree/cmake

For flashing the binary, I used opensource [stm32flash](https://sourceforge.net/p/stm32flash/wiki/Home/) utility, which
worked straight away.

# Newlib-nano Floating point format specifier

Since the STM32 MCU used in the RAK811 module is very much resource constraint,
I used the Newlib-nano library for saving code space. But that introduced some
issue with printing the floating point numbers over UART. The firmware of the
WisTrio SDK initializes the on-board sensors like LIS3DH and BME680 and prints
its output over serial. Since the BME680 is an integrated sensor, it provides
different numerical measurements like Temperature, Pressure, Humidity and Gas
value. Printing those values requires the use of `%f` format specifier in the
custom `e_printf` function.

The `e_printf` function internally uses the Newlib-nano's `vsnprintf` function
for building the output buffer based on user provided inputs and format
specifiers.

```shell
#define MAX_MSG_LEN 127

static char ll_msg_buf_[MAX_MSG_LEN];

void e_printf(const char *format, ...)
{
    int i;
    va_list args;
    size_t len;

    /* Format the string */
    va_start(args, format);
    len = vsnprintf(ll_msg_buf_, MAX_MSG_LEN, &format[0], args);
    va_end(args);
    HAL_UART_Transmit(&UartContext[UART_1].UartHandle, (uint8_t *)&ll_msg_buf_, len, 0xFFFF);
}
```
This is where the issue came from. The default behaviour of the Newlib-Nano
is to disable the `%f` format specifier for memory saving. So passing the
floating point numbers (Soft float as there is no FPU support in Cortex-M3)
displayed garbage over serial as the values were not formatted properly.
After hovering over the issue for some time, I figured out that the issue
was with Newlib-nano and found the solution. For enabling the floating point
format specifier, the user has to pass `-u _printf_float` flag to the
ARM GCC linker and once I added that flag, the floating point measurements
were displayed over UART properly!

```shell
RAK5205_TrackerBoard software version:2.0.0.6
LIS3DH init success!
ACC X:0mg Y:-16mg Z:0mg
BME680 init success!
T: 36.46 degC, P: 983.82 hPa, H 49.26 %rH , G: 3863 ohms
```

# Conclusion

Finally, the CMake support was working like a charm and I submitted a Pull Request
to the mainline SDK repository so that other developers can also make use of it!

https://github.com/RAKWireless/RAK5205-WisTrio-LoRa/pull/11
