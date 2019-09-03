---
title: MAX7219 LED Matrix RaspberryPi HAT - Shiratech FFPGA Mezzanine and RPi HAts Pt. 1
author: Sahaj Sarup
date: 2019-05-06 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/max7219.jpg
    name: max7219.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

Starting off with a easy one.

# [Max7219](https://www.maximintegrated.com/en/products/power/display-power-control/MAX7219.html)
The MAX7219/MAX7221 are compact, serial input/output common-cathode display drivers that interface microprocessors (µPs) to 7-segment numeric LED displays of up to 8 digits, bar-graph displays, or 64 individual LEDs. Included on-chip are a BCD code-B decoder, multiplex scan circuitry, segment and digit drivers, and an 8x8 static RAM that stores each digit. Only one external resistor is required to set the segment current for all LEDs. The MAX7221 is compatible with SPI™, QSPI™, and MICROWIRE™, and has slew-rate-limited segment drivers to reduce EMI.

# [RPi LED Matrix HAT](https://www.crazypi.com/RPI-LED-MATRIX)
**Features**
- Supports any revision of Raspberry Pi (directly-pluggable)
- Driver : MAX7219
- Matrix type : 8 × 8 common cathode LEDs
- Color : red
- Dimension : 64.3 × 35.0 × 26.5mm

# How to make it work with the Shiratech FPGA Mezzanine

Since the HAT only requirers us to use SPI, and provided that the CS pin on the 96Boards base board is controlled by the SPI driver itself.
All we need to do enable spi0 pass-through using `i2cset` command like: `sudo i2cset 0 0x6f 0x3a 0x00`

This should allow you to access MAX7219 over `/dev/spidev0.0`

Now you can try out the following MRAA examples to display a pattern on the LED Matrix:
> Source: [https://github.com/intel-iot-devkit/mraa/blob/master/examples/c/spi.c](https://github.com/intel-iot-devkit/mraa/blob/master/examples/c/spi.c)

Compile: `gcc spi.c -o spi.o -lmraa`

You should now see each led on the Matrix light up one after the other.

For a more detailed guide checkout the [Shiratech FPGA Mezzanine Documentation](/documentation/mezzanine/shiratech-fpga/guides/).
