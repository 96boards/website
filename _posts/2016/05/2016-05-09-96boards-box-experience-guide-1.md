---
author: sdrobertw
comments: true
date: 2016-05-09 21:05:26+00:00
layout: post
link: https//www.96boards.org/blog/96boards-box-experience-guide-1/
slug: 96boards-box-experience-guide-1
featured_image: 20160506_144220.jpg
title: 96Boards Out of box experience guide - part 1
wordpress_id: 13925
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DB410c
- dragonboard410c
- HiKey
- Linux
- Open Embedded
- OpenHours
- Reference Platform
- rpb
---

So your first 96Boards was just delivered, you open the box and find a shiney DragonBoard™ 410c staring right back at you… Ok, well what now? Hopefully you remembered to buy a power supply, in the heat of the moment anyone can miss the fine print:

_“Please note that the associated power supply is not sold with the DragonBoard 410c.  Please find the recommended power supply here: [WM24P-12-A-QL](https://www.arrow.com/en/products/wm24p-12-a-ql/autec-power-systems#page-1)”_

- [Arrow Electronics](https://www.arrow.com)

Luckily your diligence has paid off, and now it is time for some fun. However, like any great adventure, it is usually a good idea to prepare! Before diving into this new and exciting world that comes with owning a 96Boards, you should first make sure you are packed with the right gear. As a seasoned 96Boards adventurer, I thought I could put together a couple of checklists and useful tips to help you get ready:

**List #1: Things you will need before powering on your 96Boards for the first time**




  * **Your favorite [96Boards](https://www.96boards.org)**


    * Currently available: [HiKey](https//www.96boards.org/products/ce/hikey/), [DragonBoard 410c](https//www.96boards.org/products/ce/dragonboard410c/), and [Bubblegum-96](https//www.96boards.org/products/ce/bubblegum96/)





  * **Power Supply**:


    * [WM24P-12-A-QL](https://www.arrow.com/en/products/wm24p-12-a-ql/autec-power-systems#page-1) from Arrow Electronics is recommended





  * **HDMI Cable (Full size)**


    * Best seller from Amazon (US), [6ft HDMI cable](http://www.amazon.com/AmazonBasics-High-Speed-HDMI-Cable-Standard/dp/B014I8SSD0/ref=sr_1_3?ie=UTF8&qid=1462924880&sr=8-3&keywords=HDMI+cable)





  * **HDMI monitor/screen**


  * **USB-A mouse and keyboard**


    * Recommended by [University of California San Diego IoT Coursera team](https://www.coursera.org/specializations/internet-of-things) for quick board bring up, single USB slot usage and/or portability, on Amazon (US), [full size](http://www.amazon.com/Logitech-Wireless-Keyboard-Multi-Touch-Touchpad/dp/B005DKZTMG?ie=UTF8&psc=1&redirect=true&ref_=oh_aui_detailpage_o09_s00), [pocket size](http://www.amazon.com/iPazzPort-Wireless-Multi-Touch-Raspberry-KP-810-10AS/dp/B00KF9LHUI?ie=UTF8&psc=1&redirect=true&ref_=oh_aui_detailpage_o01_s00)





  * **MicroSD card with at least 8GB**


    * Far more than what is needed, [32GB microSD](http://www.amazon.com/SanDisk-microSDHC-Standard-Packaging-SDSQUNC-032G-GN6MA/dp/B010Q57T02?ie=UTF8&keywords=Micro%20sd%20card&qid=1462925731&ref_=sr_1_1&s=pc&sr=1-1), best seller on Amazon (US)





  * **MicroSD to SD card adapter**


    * MicroSD to Host computer adapter





  * **Anti static mat and gloves (recommended)**


  * **USB to microUSB cable (recommended)**


![20160506_144220]({% asset_path "96boards-box-1-img-1.jpg" %}){:class="img-responsive lazyload"}

Now that you’ve gathered your gear, it’s time to remove your board from its packaging and set up a safe workstation. As you may have noticed, your 96Boards comes conveniently wrapped in an anti static bag. Exposed components on the board can be shorted by electrostatic discharge, essentially damaging your board and potentially rendering it unusable. To avoid this, we want to make sure we are careful when removing the board from its safe zone, and placing it in another safe zone nearby (your workstation).

**List #2: Workstation setup** - ([Link to more tips](http://www.wikihow.com/Ground-Yourself-to-Avoid-Destroying-a-Computer-with-Electrostatic-Discharge))




  * Find a hard surface to work on


  * Make sure your monitor is plugged in and ready


  * If possible, consider using an Electrostatic Discharge(ESD) mat.


  * If possible, avoid dry environments.


  * If possible, stay away from static-friendly clothing, cotton is safe.


Once your workstation is setup, carefully remove your board from the ESD bag and place it in your work station (**TIP: The ESD bag can be used as a safe resting place in your workstation once the board is removed**). It is recommended to use an antistatic glove when handling your board. If you do not have an antistatic glove, don’t worry. Try to grab your board along it’s edges as to avoid any contact with it’s circuit components. With the board safely sitting in your workstation, proceed to plug in some of the peripherals from List #1.

NOTE: Your 96Boards should NOT be powered on yet, this will be the last thing we do in this part of the guide.




  * Plug in your USB mouse and keyboard


  * Plug in your HDMI cables, and make sure it is plugged into a monitor/screen


  * Power on your monitor/screen and set to the correct input


Ok! This is the moment of truth, the first time you power up your 96Boards device. Simply insert the barrel jack into your 96Boards and keep an eye out for the flashing LEDs.

Do not worry if your board does not boot up immediately. 96Boards usually take a few minutes to start up the first time they are plugged in, this is normal.

Now, the operating system you initially boot into will depend on your 96Boards choice. The out-of-box experience is different for each board:


  * **HiKey** - Debian


  * **DragonBoard 410c** - Android


  * **Bubblegum-96**  - Debian


For the moment, I encourage you to explore your board. Poke around the applications and programs available to you by default, and spend some time getting familiar with the interface. Stay tuned for next week’s blog where we will talk about the different 96Boards and what makes them unique, the various operating systems available to you as a 96Boards user, and how you might go about flashing these operating systems onto your board.

To learn more the 96Boards team are going to start a [weekly OpenHours session](https//www.96boards.org/openhours/) every Thursday at 4pm BST. We’ll begin these sessions with a short demo, presentation or tutorial and then be open to answer any questions regarding 96Boards products, the specifications, troubleshooting etc.. We don’t promise to answer all the questions immediately and may need to defer answers to a later session, but we’ll try our best to answer during the call.  [Join](https//www.96boards.org/openhours/)

**Video from [OpenHours](https//www.96boards.org/openhours/)**

{% include media.html media_url="https://www.youtube.com/embed/ZTNEXTcsJ2Y?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk" %}

[**In this series**](https//www.96boards.org/tag/openhours/)




  * [96Boards Out of box experience guide – part 1](https//www.96boards.org/blog/96boards-box-experience-guide-1/) (This)


  * [96Boards Out of box experience guide – part 2](https//www.96boards.org/blog/96boards-box-experience-guide-2/)


  * [96Boards Out of box experience guide – part 3](https//www.96boards.org/blog/96boards-box-experience-guide-3/)
