---
title: UCSD ECE 191 - 4 Week Summary
author: ECE 191 Team I Winter 2018
date: 2018-02-01 01:01:54+00:00
image:
    featured: true
    path: /assets/images/Build-Internet-Things.png
    name: Build-Internet-Things.png
    thumb: coursera-logo-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditek, dragonboard, coursera, iot, mooc, massive open online course, ucsd, calit2, qualcomm, qualcomm institute, cloud, aws, amazon web services

---

### Team I Members

- RunXuan Tay
- Josh Minch
- Seungku Jung
- Steve Nguyen

# Week 1

We were just introduced to our project in our ECE 191 class; we found out that we were placed in Project I: Smart Home Device. We learned that we will be using 96Boards products for the purpose of this project. Namely, these boards are DragonBoard 410c, Carbon IoT, and Nitrogen IoT. The plan is to use the DragonBoard as the “home node” which will be the center of communication. It will contain a webcam, speaker, screen, and support WiFi. The IoT boards will serve as add-ons that improve the functionality of the smart home. For now, we decided that the modules that we will be developing are the laser module and webcam. Since we have absolutely zero experience working with these boards, this week was dedicated to learning how these boards function and following tutorials to get them set up. We attended the HARD Hack where we played with the boards for a while to get acquainted with them. 

# Week 2

We dedicated this week mostly to getting the webcam to work on the DragonBoard and deciding which server to use in our design. On the expansion module side of things we got sample programs flashing on the Carbon and Nitrogen IoT boards. We also met up with Robert at Regents Pizzeria in order to go over the proper procedures for maintaining our GitHub repository. 

# Week 3

This week we found ourselves working on the Nitrogen and Carbon IoT boards to determine which one would be best suited for our needs. Firstly, we had to get Linux working in order to develop on these boards. There was trouble getting a stable development environment working on our boards. Eventually, after some troubleshooting we got it to work. We met with Robert online in order to review GitHub and to have a written set of rules in order to remain consistent in our conventions. We also played around with the webcam more to try to get it to work with a login system. However, the webcam was laggy so we will have to find a better way to stream video. 

# Week 4

We met with Robert once again to discuss the possibility of another Hack day, and we declined because we felt that our tasks are too specific so we would not be able to help each other even if we met in person. We also discussed that our bill of materials should be finished as soon as possible. We got BLE to work on Carbon without the need for a external programmer by self-flashing the Carbon. We got the login page to work, and looked into a method for streaming webcam through Java. We found the drivers that can generate a PWM signal for the main chip on the Carbon which will allow for user control of the laser module.
