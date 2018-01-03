---
title: Automotive Grade Linux on Dragonboard410c - Part 2
author: Manivannan Sadhasivam
date: 2017-11-14 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/agl.jpg
    name: agl.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, AGL, Automotive
---

# **Introduction**

Hello and Welcome to **Part 2** of our **Automotive Grade Linux on Dragonboard410c**
blog series. In this part, we are going to see the HVAC (Heat Ventilation and Air
Control) demo using AGL running on Dragonboard410c.

Before getting into the blog, here is the quick recap of what happened in
previous blogs of this series:

1. [Automotive Grade Linux on Dragonboard410c - Part 1](https://www.96boards.org/blog/agl-on-dragonboard410c-part1/) - This
is the introductory blog for the **Automotive Grade Linux on Dragonboard410c**
blog series. This part introduced AGL and steps required to build and deploy
it on Dragonboard410c.

# **HVAC using AGL**

According to Wikipedia, "Heating, ventilation, and air conditioning (HVAC) is
the technology of indoor and vehicular environmental comfort. Its goal is to
provide thermal comfort and acceptable indoor air quality. HVAC system design
is a subdiscipline of mechanical engineering, based on the principles of
thermodynamics, fluid mechanics, and heat transfer. Refrigeration is sometimes
added to the field's abbreviation as HVAC&R or HVACR, or ventilating is dropped,
as in HACR (as in the designation of HACR-rated circuit breakers)".

In AGL HVAC GUI is implemented as the QT application, which interacts with the
hardware (ECU) through bindings. As a part of the agl-demo-platform, a [HVAC](https://gerrit.automotivelinux.org/gerrit/gitweb?p=apps/hvac.git)
app and a sample binding are present. Since in automobiles most of the
communication happens via CAN or LIN bus, by default HVAC demo binding uses
'vcan0' - a virtual can device to transfer data to and fro between GUI and ECU.
For adapting agl-demo-platform to this HVAC demo, some of the customizations
has been done.

In order to demonstrate the AGL platform, I used Dragonboard410c to act as the
master and slave. But in the real world, there will be multiple of ECU's connected
to a central (master) module through CAN/LIN bus and each ECU will send/receive
data based on the request from the master.

In Dragonboard410c, there is no CAN interface. So, for this demo two types of
data transfer methods have been considered:

1. To use an external CAN controller module interfaced via I2C/SPI to send and
receive data. But that will be an overhead for such a simple demo like this.

2. To use the UART port to send and receive data. This method is simple and
quick to demonstrate.

I picked the second option and used Sensors Mezzanine (Arduino) to control
Fan Speed and LED intensity since there is no PWM support (yet) on
Dragonboard410c.

Here is how the communication link looks like:

|HVAC app|--------->|Arduino|---------->|Fan/LED|

The above diagram shows that the control is one way, which means there is no
input to the HVAC app. Only Fan Speed and LED data is sent from GUI to the
Arduino via UART. Instead of Sensors Mezzanine, an external Arduino board can
also be used.

# **HVAC in action**

All the instructions required to reproduce this demo has been given in the
**agl-demo** repository hosted on
[96Boards Projects Org](https://github.com/96boards-projects/agl-demo).

For executing this demo, you need to use the custom HVAC recipe present in
the repository and also need to flash the Arduino sketch onto Sensors Mezzanine/
external Arduino.

**Video Demonstration**

{% include media.html media_url="https://www.youtube.com/embed/zOLDFwhaho0" %}

# Conclusion

So we are at the end of the **Automotive Grade Linux on Dragonboard410c - Part 2**
blog post. The demo explained here is very basic and there are a lot of things to
improve. Since all of the instructions and source code is open source, you can
enhance it and share with the 96Boards community.

Please take a look at the [Contributing guide](https://github.com/96boards-projects/staging/blob/master/CONTRIBUTE.md)
for more info. Stay tuned for the next part! 
