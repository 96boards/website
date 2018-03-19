---
title: 1v8 to 5v Level Shifting Diaries - Part 1 - Open Drain ICs
author: Sahaj Sarup
date: 2018-02-18 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/level-shift-1.png
    name: level-shift-1.png
    thumb: level-shift-1-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, CSI, Python, Photobooth, dragonboard410c, Linaro, Linux, Audio Mezzanine
---

# **Introduction**

This blog was initially planned as a overview of the TXB0108 Level-Shifter, but that changed as soon as i received the TXS0108 instead and I ended up opening the can of worms that is Logic Level Shifting.
In this part I'll try to stick to TXS0108 and open-drain applications.
> NOTE: This blog is intended for casual makers, so I'll stick to the practical side of things and not go into the details.

# **Open Drain vs Push-Pull I/O**

**Output pins can be driven in three(but not limited to) different modes:**
- **Open Drain** - a transistor connects to low and nothing else
  {% include image.html name="open-drain.jpg" alt="open-drain" %}
- **Open Drain, with Pull-Up** - a transistor connects to low, and a resistor connects to high
  {% include image.html name="opned-drain-pullup.png" alt="open-drain-pullup" %}
- **Push-Pull** - a transistor connects to high, and a transistor connects to low (only one is operated at a time)
  {% include image.html name="push-pull.png" alt="push-pull" %}

**Input pins can be a gate input with a:**
- **Pull-Up** - a resistor connected to high
- **Pull-Down** - a resistor connected to low
- **Pull-Up and Pull-Down** - both a resistor connected to high and a resistor connected to low (only useful in rare cases).

**So what uses what?**
As far as commonly used low speed interfaces are concerned, its mostly just i2c. Both SPI and UART are happy with Push-Pull Config.

# **[TXS0108](http://www.ti.com/lit/ds/symlink/txs0108e.pdf)**
"The TXS0108E device is a directionless voltage-level translator specifically designed for translating logic voltage levels. The A-port accepts I/O voltages ranging from 1.2 V to 3.6 V. The B-port accepts I/O voltages from 1.65 V
to 5.5 V. The device uses pass gate architecture with edge rate accelerators (one shots) to improve the overall data rate. The pull-up resistors, commonly used in open-drain applications, have been conveniently integrated so
that an external resistor is not needed. While this device is designed for open-drain applications, the device can also translate push-pull CMOS logic outputs." -TI Datasheet for TXS0108E

Remember how I said that I got the TXS0108E module instead of the TXB0108 module... well here it is:

{% include image.html name="txs0108-module.jpg" alt="txs0108-module" %}

So here are my findings on this chip:
- **Purpose Built:** This is a very purpose built chip, its meant to sit between two CMOS chips, at close proximity and on a PCB, and act as a logic level translator. For example, between a controller and SRAM, between a microprocessor and emmc etc.
- **DO NOT Drive LEDs:** Since this chip servers to interface between two CMOS chips and translate I/O, its I/O pins are very weak and cannot properly drive LEDs. If you try it out, it may seem to do so but it will have issues and will damage the chip in the long run. The only way I was able to get them to work was to use the engineers fingers and poke the LEDs to the the capacitive build up dissipate.
- **Not too Long:** This chip cannot handle a lot of capacitance build up, which can be caused by long wires, and as stated in TI's Datasheet - "TI recommends careful PCB layout practices with short PCB trace lengths to avoid excessive capacitive loading and to ensure that proper one-shot triggering takes place. PCB signal trace-lengths should be kept short enough such that the round trip delay of any reflection is less than the one-shot duration. This improves signal integrity by ensuring that any reflection sees a low impedance at the driver." -
This makes me think why did people even think about using this chip on a module, this makes no sense.
- **Push-Pull "Compatible":** Even though this chip has internal resistors to make it compatible with push pull i/o, even TI doesn't recommend using this chip with push-pull io, and as stated in TI's Datasheet - "The device is ideal for use in applications where an open-drain driver is connected to the data I/Os. The device is appropriate for applications where a push-pull driver is connected to the data I/Os, but the TXB0104 device, (SCES650) 4-Bit Bidirectional Voltage-Level Translator might be a better option for such push-pull applications."
- **Not good at 1v8 to 5v ?:** This is more of a question on my end as well, all the examples I have seen of this module being used are of either 1v8 to 3v3 or 3v3 to 5v, and even in TI's Datasheet they only mention spec for upto 1v3 to 3v3. I have tried with various combination of pull-ups but was unable to get i2c working with 1v8 to 5v translation.

# **Audio Mezzanine**

Interestingly, the 96Boards Audio Mezzanine relies heavily on TXS0108E, so much so that there are 3 of them to shift all of the GPIOs from the Low-Speed connector.

ALL GPIOS?

No, not quiet all. It looks like the engineers who designed the audio mezzanine realized that the TXS0108E is not suitable for 1v8 to 5v Level Translation for I2C.
So contrary to the old Datasheet, dated 2015, the commercially available units of the Audio Mezzanine, dated 2016, use [PCA9509](https://www.nxp.com/docs/en/data-sheet/PCA9509.pdf).

This is a purpose built chip to level translate i2c without the issues of capacitance build up on the B(High voltage) side.

And I have personally tested this with 1v8 to 5v and upto 40cm using standard 2.54mm pitch jumper cables and breadboard and it seems to work well.

If you want to take a look at calculations for Pull-Up resistor value with regards to bus capacitance specific to I2C, TI has a [nice write up](http://www.ti.com/lit/an/slva689/slva689.pdf).

# **Conclusion**

**TXS0108E is NOT a good Level-Shifter when used as a module on a breadboard like situation**

So, how do I level shift 1v8 to 5v on 96Boards?

As far as I2C is concerned stick with [Audio Mezzanine](https://www.arrow.com/en/products/audiomezz/seeed-technology-limited) Its actually cheaper than many level shifting modules.
For other types of applications, wait for Part 2...
