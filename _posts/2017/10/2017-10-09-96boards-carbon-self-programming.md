---
author: Paul Sokolovsky
comments: true
date: 2017-10-09 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/96boards-carbon-self-programming/
slug: 96boards-carbon-self-programming
image:
    featured: true
    path: /assets/images/blog/96boards-carbon-self-programming.jpg
    name: 96boards-carbon-self-programming.jpg
title: Self Programming Using 96Boards Carbon
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- intel
- libmraa
- libupm
- Linaro
- Linux
- MediaTek X20
- mraa
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- Carbon
- Self Programming
---

# **Introduction**

96Boards Carbon was announced a year ago and since then, the 96Boards team maintained a Zephyr fork repository providing
Carbon support, while gradually mainlining it to the upstream repository. The recent 1.9 release of Zephyr represents an
important milestone of that effort - BLE functionality is now enabled in the mainline. It may seem it took awhile, but the
majority of this work went not into BLE support per se (it worked long ago). Zephyr is a young, extensively growing OS, and
it took some time to make available and elaborating all the APIs required for BLE functionality on the Carbon - this includes
device tree support, SPI API, network buffer management, a gazillion bugfixes and weeks of testing. So, this release is an
important milestone not just for the Carbon, but for Zephyr RTOS as a whole.

In this blog post we’ll discuss how to upgrade BLE firmware of the Carbon to the mainline version, and most importantly,
we’ll do this without additional in-circuit programmer or soldering - in other words, in a way accessible to everyone!

# **A quick recap of Carbon hardware architecture**

As you know, the Carbon is essentially a two-core system, consisting of an "application core" STM32 and "BLE core" nRF51.
This design has some advantages, for example leaves entire resources of the application core to the user
(feel free to disable interrupts or just sleep - BLE will run), and may improve BLE reliability. But it also has some
disadvantages when it comes e.g. to upgrading BLE firmware. Carbon makes it easy to reprogram the application core via a
USB connection (there're even 2 ways to do that - via DFU or UART bootloader), but reprogramming the BLE chip normally
requires an external SWD programmer (SWD is the protocol for flashing and debugging modern ARM chips, if you didn't hear
about it, you might have heard about its spiritual ancestor JTAG).

Using an SWD programmer isn’t a big deal - if you have it already and have an experience with it. But I always thought
it was annoying to require our Carbon users to have an extra tool to use the board to its full potential. Or take me as
an example - I should have a programmer somewhere, I really should. But don't ask me where it is since I moved. And even
if I find it, I'll need to remember/relearn how to use it for a good share of a day - I'm a software guy, such tools aren't
part of my daily routine.

# **Enter black magic. Umm, Black Magic Probe**

Fortunately, these ordeals are behind us thanks to great work of Daniel Thompson of Linaro. He ported the well known
(even if in narrow circles) firmware used in the Black Magic Probe to run on Carbon's application CPU (STM32). Yes, you got
it - Carbon's main CPU will be used to reprogram Carbon's BLE CPU. Where's the catch? You still need to do
"hardware modifications". When I first heard about that, I was daunted. I'm a software guy, remember? No, I do
soldering - once a month on average. And 30 remaining days I prepare for the event. But fear not - you can get around
soldering, because I did. You just need two (2) wires and some tender (!) pressure to keep them in the contact.

Enough of the intro, let's get going. Daniel’s changes have been submitted [upstream](https://github.com/blacksphere/blackmagic/pull/215)
but until the code gets picked up by the maintainers, Daniel is maintaining it as a branch on github:

    $ git clone https://github.com/daniel-thompson/blackmagic -b carbon

You'll need an ARM baremetal compiler to build it, with ARM's GCC build being canonical source of it last few years.
I don't know about you, but I still use classic version hosted at https://launchpad.net/gcc-arm-embedded .
(Later versions moved away from Launchpad and are hosted by ARM. You can try that too.)

Further instructions can be read in well-written [docs](https://github.com/daniel-thompson/blackmagic/blob/carbon/src/platforms/96b_carbon/Readme.md)
by Daniel. Below, I provide just a quick walkthru based on it.

Build Black Magic Probe firmware:

    $ cd blackmagic
    $ make PROBE_HOST=96b_carbon

Now it's time to flash it on the STM32 MCU. Hook up to the USB OTG socket and put your Carbon in bootloader mode
(press the BOOT0 button, keep pressing and press the RST button). Then run:

    $ sudo dfu-util -d [0483:df11] -a 0 -D src/blackmagic.bin -s 0x08000000

# **Hardware matters**

Now time to do wire connections (be sure to power off the board). Daniel explains how it should be done:

```
"A Carbon is capable of self-programming its own nRF51 by connecting two jumper wires from LS-06 to BLE_SWD-4 (DIO) and
LS-08 to BLE_SWD-3 (CLK)."
```

Short and precise, but one picture is worth many words:

{% include image.html name="96boards-carbon-self-programming.jpg" alt="Your alternate text." %}

It shows which receptacles of Low-Speed (LS) connector should be used, and which thru-holes of the nRF51 SWD connector
they should go to. One thing to note is that wire go in criss-cross manner: left LS pin goes to right SWD pin, and
vice-versa.

The key task here is to achieve reliable electrical connection. As can be seen from the picture, a wire end should be
tilted within thru-hole, to make sure it touches it edges. Wires also need to be kept in that position, and I found that
board's own weight and gentle pressure from USB cable is enough to keep electrical contact for the duration of flashing.
It might not work for you right away, and you may need to tilt and press (gently!) the wires, but trust me, it works,
and not so hard to get there (or I wouldn't go and share these instructions).

# **Test before you ride**

We may now continue by testing that what you've got so far works. The official Black Magic Probe docs describe how to do
that [here](https://github.com/blacksphere/blackmagic/wiki/Getting-Started#connecting-to-the-software)
But as before, I'll provide steps below to follow.

First of all, check that Black Magic Probe's USB connection is available:

    $ ls /dev/ttyACM0
    /dev/ttyACM0

We now need a GDB cross-debugger. You can use the GDB from gcc-arm-embedded package, but let's try Zephyr SDK's GDB,
as that's what you will use for actual debugging of apps (yes, you can also debug apps using Black Magic Probe, not
just flash them). To avoid confusion, we'll access it by the full path. I installed Zephyr SDK at ***~/opt/zephyr-sdk-0.9.1***,
you will need to update that part of the path for your installation location:

    $ ~/opt/zephyr-sdk-0.9.1/sysroots/x86_64-pokysdk-linux/usr/bin/arm-zephyr-eabi/arm-zephyr-eabi-gdb
    GNU gdb (GDB) 7.11.0.20160511-git
...

All further commands are issued on the GDB prompt:

    (gdb) target extended-remote /dev/ttyACM0
    Remote debugging using /dev/ttyACM0
    (gdb) monitor
    Black Magic Probe (Firmware v1.6.1-51-g6007326) (Hardware Version 0)
    Copyright (C) 2015  Black Sphere Technologies Ltd.
    License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>

That's a good sign - GDB has recognized our Black Magic Probe firmware.

Now let's try to scan for actual devices connected via it:

    (gdb) monitor swdp_scan
    Target voltage: ABSENT!
    Available Targets:
    No. Att Driver
    1  	Nordic nRF51

Woo-hoo, as expected, to the Black Magic Probe running in STM32, the nRF51 chip is attached.
(Ignore "Target voltage: ABSENT!" message, that's how our virtual, firmware-only Black Magic Probe differs from the
real probe device.)

    (gdb) attach 1
    Attaching to Remote target
    0x0000cc60 in ?? ()

GDB has attached to the chip (nRF51 in our case) and ready to debug (or flash) it.
(Ignore again last line with hex address - it will be different ib your case.)

# **Getting back to BLE firmware**

The setup has worked, congratulations! Don't breathe on it, while we quit GDB and going forward to build the freshest
Zephyr BLE firmware for nRF51 to finally flash it. This firmware is at samples/bluetooth/hci_spi/ in the Zephyr tree,
and we assume you have Zephyr environment set up (follow Zephyr and/or Carbon docs for details).

    $ cd samples/bluetooth/hci_spi/
    $ make BOARD=96b_carbon_nrf51

Pay attention to the BOARD value above: we don't build for the Carbon's default, application processor, instead building
for its nRF51.

The BLE firmware is at ***outdir/96b_carbon_nrf51/zephyr.elf***

We now repeat the GDB steps above, finishing them with a "load" command which will actually flash the firmware:

    $ ~/opt/zephyr-sdk-0.9.1/sysroots/x86_64-pokysdk-linux/usr/bin/arm-zephyr-eabi/arm-zephyr-eabi-gdb
    (gdb) target extended-remote /dev/ttyACM0
    (gdb) monitor swdp_scan
    (gdb) attach 1
    (gdb) load outdir/96b_carbon_nrf51/zephyr.elf

Few seconds later, you're done self-programming BLE part of the Carbon!

# **Conclusion**
You can now build and flash any Bluetooth sample application for the main chip (BOARD=96b_carbon) in the normal way
(using DFU and/or stm32flash). This will of course overwrite Black Magic Probe firmware, so next time you want to upgrade
firmware for the nRF51 chip, you will need to start again with flashing it as the first step.
