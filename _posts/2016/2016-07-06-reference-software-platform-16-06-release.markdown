---
author: rsalveti
comments: true
date: 2016-07-06 12:41:02+00:00
layout: post
link: http://www.96boards.org/blog/reference-software-platform-16-06-release/
slug: reference-software-platform-16-06-release
title: Reference Software Platform 16.06 Release!
wordpress_id: 15630
categories:
- blog
tags:
- '16.06'
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Cello
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- Enterprise Edition
- HiKey
- Lemaker
- LeMaker Cello
- Linux
- Open Embedded
- Reference Platform
- Reference Platform Build
- Reference Software Platform
- rpb
---

We are pleased to announce the 16.06 release for the Reference Software Platform project!

This is the fourth release, and like its predecessors, it has seen quite a few changes and improvements for both Consumer and Enterprise platforms.

The Reference Software Platform has seen many substantial changes, among other more subtle ones.

Below is a list of some of this release’s highlights:

Common:



 	
  * Kernel:

 	
    * Unified tree shared between the CE and EE builds.

 	
    * 4.4.11-based, including some under-review topic branches to extend the features and platform hardware support.

 	
    * Device-Tree support for CE; ARM ACPI and PCIe support for Enterprise.

 	
    * Added OP-TEE support

 	
      * Enabled on HiKey and Juno-r1




 	
    * Supports Reference HW platforms HiKey and Cello

 	
      * Other Test Platforms include: Dragonboard 410c, Hisilicon D02 and D03, APM X-Gene, HP Proliant m400, AMD Overdrive, Qualcomm Q2432:ZB, and Cavium ThunderX.




 	
    * Single kernel config for all platforms in arch/arm64/configs/distro.config
Single kernel binary (package) for all platforms




 	
  * Bootloader:

 	
    * UEFI OpenPlatformPkg (upstream) now contains reference implementations for Huawei D02/D03, AMD Overdrive and LeMaker Cello

 	
    * U-boot support in DB410c images to allow easier handling of images





Consumer Edition:

 	
  * Reference hardware platform:

 	
    * LeMaker Hikey




 	
  * Other supported test platforms:

 	
    * Dragonboard 410c




 	
  * Overall CE Debian platform features, validated as part of the release:

 	
    * UEFI with DT

 	
    * Upgrade to Debian 8.5 "Jessie"

 	
    * Upgrade to the unified 4.4.11 Linux Kernel

 	
    * Upgrade graphics components: Mesa 11.1.2 and XServer 1.17.3a

 	
    * Rootfs automatically resized during the first boot




 	
  * CE Debian RPB for HiKey:

 	
    * OP-TEE integrated by default

 	
    * UEFI updated to use the latest development trees based on Tianocore + OpenPlatformPkg




 	
  * CE Debian build for DragonBoard™ 410c:

 	
    * U-boot chain-loaded from LK




 	
  * CE OE/Yocto RPB:

 	
    * First OpenEmbedded-based RPB, including several changes and components merged from the LHG OE layers

 	
    * Dragonboard 410c and HiKey support

 	
    * HiKey features:

 	
      * OP-TEE initial support

 	
      * Mali support for HiKey




 	
    * Dragonboard 410c features:

 	
      * GPU, WLAN, BT, audio, LS I/O, camera and GPS








Enterprise Edition:

 	
  * Reference hardware platform:

 	
    * LeMaker Cello




 	
  * Other supported test platforms:

 	
    * AMD Overdrive A0 and B0

 	
    * Hisilicon D02

 	
    * Hisilicon D03 (new)

 	
    * APM X-Gene Mustang

 	
    * HP ProLiant m400

 	
    * Qualcomm Q2432LZB (new)

 	
    * Cavium ThunderX (new)




 	
  * Overall platform features, validated as part of the release:

 	
    * UEFI with ACPI

 	
    * KVM

 	
    * PCIe




 	
  * Firmware:

 	
    * UEFI OpenPlatformPkg (upstream) now contains reference implementation for Huawei D02/D03, AMD Overdrive and LeMaker Cello




 	
  * Network Installers:

 	
    * Debian:

 	
      * Upgrade to Debian 8.5 "Jessie"

 	
      * Use the unified 4.4.11 kernel




 	
    * CentOS

 	
      * Based on CentOS 7.2 16.03

 	
      * Use the unified 4.4.11 kernel







 	
  * Enterprise Components:

 	
    * Docker 1.9.1

 	
    * OpenStack Liberty for Debian Jessie and CentOS

 	
    * ODPi 1.0.0 based Hadoop

 	
    * Spark 1.3.1

 	
    * OpenJDK 8

 	
    * QEMU 2.6





By taking on, and enabling more development boards to stimulate community involvement, a big push has been made to ensure this platform is used by as many 96boards as possible. Highlights can be found [here](https://github.com/Linaro/documentation/blob/master/Reference-Platform/Extras/Highlights.md). If you would like to contribute to one of the many RPB components, instructions to do so can be found [here](https://github.com/Linaro/documentation/blob/master/Reference-Platform/Contribute/README.md).

Last week during [OpenHours](http://www.96boards.org/openhours) we had the opportunity to announce the 16.06 release of the Reference Software Platform ([Video #8](https://youtu.be/lB6zpB4pS60?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk)). This is the fourth release, and like its predecessors, it has seen quite a few changes and improvements for both Consumer and Enterprise platforms.

https://youtu.be/lB6zpB4pS60?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk

Since the RPB alpha release in October of last year (15.10), the platform has not stopped evolving. Highlights for each release can be found in the [RPB github](https://github.com/Linaro/documentation/blob/master/Reference-Platform/README.md) under “[Previous RPB Releases](https://github.com/Linaro/documentation/blob/master/Reference-Platform/PreviousReleases/README.md)”.

Please remember, there are plenty of resources all over the [96Boards](http://www.github.com/96boards/documentation) and [Linaro](http://www.github.com/Linaro/documentation) github pages. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](https://webchat.freenode.net/) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running with the Reference Software Platform!

![OpenHours-04](/assets/images/blog/2016/06/OpenHours-04-300x125.png){:class="img-responsive"} 

Don’t forget about the [Open Hours](http://www.96boards.org/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

On behalf of the Linaro 96Boards team,

- Ricardo Salveti
