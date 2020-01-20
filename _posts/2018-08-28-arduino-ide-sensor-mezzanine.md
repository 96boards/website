---
title: Programming The SeeedStudio Sensors Mezzanine using a PC
author: Sahaj Sarup
date: 2018-08-28 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/sensors-pc.jpg
    name: sensors-pc.jpg
    thumb: sensors-pc-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Devconf, Enterprise Edition, IoT, product, single board computer, linaro, linux, open source, openhours, software, embedded, mezzanine, community, Ardiono, IDE, ISP, ISCP
---

# SeeedStudio Sensors Mezzanine

The 96Boards Sensors Mezzanine adapter makes it simple and easy to connect sensors and devices to any 96Boards-compatible base board. With it you can connect your favorite Grove modules and Arduino compatible shields and interface to software running on the 96Boards baseboard.

So its basically an Arduino Uno that connects to the 96Boards Low-Speed Connector.

How ever it lacks a USB port to program it, instead the usual way to program it is via UART on the LS as shown [here](https://www.96boards.org/documentation/mezzanine/sensors-mezzanine/#using-atmega-io).

# Programming it using a PC

In-case you want to program it using Arduino IDE on your PC in order to test the code separately before attaching the mezzanine to any 96Boards. So lets see how we can achieve this:

**Hardware Requirements**
- [SeeedStudio Sensors Mezzanine](https://www.96boards.org/product/sensors-mezzanine/)
- [Arduino ISP Programmer](https://www.banggood.com/5V-Micro-USB-Tiny-AVR-ISP-ATtiny44-USBTinyISP-Programmer-For-Arduino-Bootloader-p-1236017.html)
- Micro-USB to Type-A Cable

**Hardware Setup**
Solder the ISP Programmer to the Mezzanine. The ISP pins on the mezzanine are labeled as **P6**. Make sure to patch the square pad to ensure its soldered in the correct orientation.

Once its done it should look something like this:

{% include image.html name="sensors-pc.jpg" alt="Your alternate text." %}

**Software Setup**

- Make sure the latest revision of [Arduino IDE](https://www.arduino.cc/en/Main/Software) is installed on your system.
- Add the Board Definition by editing the following file: ```/usr/share/arduino/hardware/arduino/avr/boards.txt``` and append the following lines:

```
########################################################

usbtinyisp328.name=ATmega328 w/ USBtinyISP
usbtinyisp328.upload.using=usbtinyisp
usbtinyisp328.upload.maximum_size=32768
usbtinyisp328.upload.speed=57600
usbtinyisp328.upload.tool=avrdude
usbtinyisp328.build.mcu=atmega328p
usbtinyisp328.build.f_cpu=16000000L
usbtinyisp328.build.core=arduino
usbtinyisp328.build.variant=standard
```
- Add Linux permissions the ISP Programmer by editing the following file: ```/etc/udev/rules.d/usbtinyisp.rules```:

```
SUBSYSTEM==”usb”, ATTR{idVendor}==”1781″, ATTR{idProduct}==”0c9f”, GROUP=”adm”, MODE=”0666″
```
This can vary depending on the version of your Linux distro. However if this doesn't works you can run the Arduino IDE as root.

# Finally Test It

Now you can select ```ATmega328 w/ USBtinyISP``` from Tools -> Board and flash a blinky example to verify!
