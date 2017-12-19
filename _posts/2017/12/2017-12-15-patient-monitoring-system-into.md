---
title: Introducing Patient Monitoring System using 96Boards
author: Manivannan Sadhasivam
date: 2017-12-15 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/patient_monitoring.jpg
    name: patient_monitoring.jpg
    thumb: /assets/images/blog/thumbs/patient_thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---

# **Introduction**

Hello and Welcome to the Introductory blog of **Patient Monitoring System using 96Boards**.
In this blog I am going to introduce the new blog series focussed on monitoring
the patients in hospital using BLE Mesh functionality provided by 96Boards.

# **BLE Mesh**

According to Wikipedia, "Bluetooth mesh networking, conceived in 2015, adopted
on July 13, 2017 is a protocol based upon Bluetooth Low Energy (BLE) that
allows for many-to-many communication over Bluetooth radio. It has been
defined in Mesh Profile Specification and Mesh Model Specification."

As stated in Wikipedia, BLE mesh functionality is provided to create an end
to end automation using BLE compatible device. You can create multiple hops
and cover the range in Kms without the need of any expensive hardware. The
requirement for this BLE mesh functionality is the BLE compatible hardware
i.e., Bluetooth 4.0 and above-supported devices.

Recently, this BLE mesh support has been added to [Zephyr](https://github.com/zephyrproject-rtos/zephyr)
RTOS by Johan Hedberg of Intel. So, now we can make use of both Zephyr and
BLE mesh in our product in order to create an IoT solution. The implementation
of mesh functionality in Zephyr can be found [here](https://github.com/zephyrproject-rtos/zephyr/tree/master/subsys/bluetooth/host/mesh).

This blog is not intended to provide a detailed info on BLE mesh, for
knowing all the internals please see the [Specification](https://www.bluetooth.com/specifications/mesh-specifications).

# **Patient Monitoring System**

With the help of the duo combination of Zephyr and BLE Mesh, I am going to
show how to build a Patient Monitoring System using 96Boards. The core idea
here is to monitor the patients in a ward remotely and trigger notification
to doctor when the condition goes abnormal. Also, if any patient is in need
of help he can press an emergency button to alert the doctors.

## **Project Roadmap**

As like the previous projects, I have partitioned this project into a series
of parts:

* **Part 1**: Demonstrate BLE mesh using 96Boards IE
* **Part 2**: Demonstrate data exchange between BLE nodes and Gateway
* **Part 3**: Setup Cloud and Demonstrate data streaming
* **Part 4**: Final implementation of Patient Monitoring System using 96Boards

## **BoM**

Below is the Bill of Materials (BoM) needed for project recreation.

1. [BLE compatible 96Boards IE hardware - Carbon/Nitrogen](https://www.96boards.org/products/ie/)
2. [96Boards CE for Gateway](https://www.96boards.org/products/ce/)
3. [TMP102 - Temperature Sensor](https://www.sparkfun.com/products/13314)
4. [Pulse sensor](https://www.sparkfun.com/products/11574)
5. [CCS811 Air Quality sensor](https://www.sparkfun.com/products/14193)

> Note: The above mentioned BoM is applicable for a single node of BLE mesh except the Gateway.

# **Conclusion**

So, that's it for the introductory blog. I hope this blog triggerd much
anticipation about the project among the community as like with me ;-)

Please stay tuned for the **Part 1** of this project.

Meantime, if you have any ideas of making this project more attractive
and useful please share it in comments. We would like to hear from the
community!
