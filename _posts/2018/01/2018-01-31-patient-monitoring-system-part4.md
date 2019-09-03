---
title: Part 4 - Patient Monitoring System using 96Boards
author: Manivannan Sadhasivam
date: 2018-01-31 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/patient_monitoring_3.jpg
    name: patient_monitoring.jpg
    thumb: patient_thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---

# **Introduction**

Hello and Welcome to the final **Part 4** of **Patient Monitoring System using 96Boards**
blog series. This blog describes the final implementation of Patient Monitoring System
project in realtime. Before jumping in, here is the quick recap of what happened in previous parts:

1. [Introducing Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-into/) - This
is the introductory blog for the **Patient Monitoring System using 96Boards**
blog series which introduced the project, BLE mesh support in Zephyr
and the project roadmap.

2. [Part 1 - Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-part1/) - This
blog provided the basic usage of BLE mesh in Zephyr by showing the steps
required to provision and configure the nodes and also the data exchange
between Server and Client.

3. [Part 2 - Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-part2/) - This
blog demonstrated the data exchange between BLE mesh network and Gateway
implemented using Dragonboard410c. As a part of this blog, a demonstration
video was also included.

4. [Part 3 - Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-part3/) - This
blog demonstrated how to setup Thingspeak cloud service for visualizing the
data from BLE mesh network. This blog also covered how to setup Twilio SMS
service for triggering alerts.

# Patient Monitoring System - Final Implementation

As I said in the introduction, this blog will glue all of the previous parts
together to create a full fledged Patient Monitoring System using 96Boards.
For demonstration purposes, this final implementation assumes to have 2 Carbon
boards acting as Server and one Carbon board acting as a Client.

Whole instructions for recreating this project has been pushed to the [96Boards Projects Org](https://github.com/96boards-projects/patient_monitoring). So I won't be duplicating those instructions in this blog but
rather provide some crispy checklist to recreate this project.

## Project Checklist

* Clone and Checkout the [Zephyr Source](https://github.com/Mani-Sadhasivam/zephyr/tree/ble_mesh_3)
* Flash the [hci_spi](https://github.com/Mani-Sadhasivam/zephyr/tree/ble_mesh_3/samples/bluetooth/hci_spi)
  application to nRF co-processor on all of the Carbon boards.
* Flash the [ble_mesh_srv](https://github.com/Mani-Sadhasivam/zephyr/tree/ble_mesh_3/samples/bluetooth/ble_mesh_srv)
  application to STM32 on 2 Carbon board to be used as Servers. Both nodes should have [NODE_ID](https://github.com/Mani-Sadhasivam/zephyr/blob/ble_mesh_3/samples/bluetooth/ble_mesh_srv/src/main.c#L19) as 1 and 2 respectively.
* Flash the [ble_mesh_cli](https://github.com/Mani-Sadhasivam/zephyr/tree/ble_mesh_3/samples/bluetooth/ble_mesh_cli)
  application to STM32 on one Carbon board to be used as Client.
* Setup 2 Channels on the [Thingspeak](https://thingspeak.com/) cloud service.
* Setup [Twilio](https://www.twilio.com/) for Emergency alert.
* Connect Sensors and Emergency button to both Server nodes.
* Provision and Configure Server nodes and Client nodes.
* Setup the Gateway to be able to capture data from Client node and uploading it to Thingspeak.
* Execute the Python script on Gateway to see the project in action.

Once you are able to do all of the above mentioned items, you can see the execution
of Patient Monitoring System using 96Boards in realtime.

# Video Demonstration

{% include media.html media_url="https://www.youtube.com/embed/CXdtkkuIoCs" %}

# Conclusion

So we are at the closing ceremony of **Patient Monitoring System using 96Boards**
project. It was wonderful experience for me working on this project, especially
I feel very happy to get my hands on the emerging BLE Mesh technology. I hope
this technology will rule in connecting the devices together to create an IoT
enabled world for a better living. For that purpose, this blog project will serve
as a pathway :)

If anyone of you has a thought about improvising this project, please clone the
project from [Projects Org](https://github.com/96boards-projects/patient_monitoring)
and [contribute](https://github.com/96boards-projects/staging/blob/master/CONTRIBUTE.md) to it.

Any feedbacks and comments are always welcome from Community!
