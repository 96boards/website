---
author: rsalveti
comments: true
date: 2015-12-23 03:42:19+00:00
layout: post
link: https://www.96boards.org/blog/reference-software-platform-15-12-release/
slug: reference-software-platform-15-12-release
image:
    featured: true
    path: /assets/images/blog/96boards-socialmedia.jpg
    name: 96boards-socialmedia.jpg
title: Reference Software Platform 15.12 Release!
wordpress_id: 10213
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
tags:
- dragonboard410c
- enterprise
- HiKey
- release
- rpb
---

**We are happy to announce the 15.12 release for the reference software platform project!**

This is our second release and for the first time also includes support for the [Enterprise Edition](/products/ee/). Since there is still no availability for the 96Boards HuskyBoard, the first EE RPB was produced using the current enterprise development boards that are available in Linaro, such as [HiSilicon D02](http://open-estuary.org/d02-2/) and [AMD Overdrive](http://www.amd.com/en-us/innovations/software-technologies/technologies-gaming/over-drive) (same SoC from HuskyBoard, known as Seattle). Once HuskyBoard is available, the work for making it supported by the EE RPB should be minimal.

A lot of work was put in place for the EE RPB, covering firmware (UEFI/EDK2), Linux 4.4 (with ACPI), Debian Jessie/CentOS 7 network installers, OpenStack Liberty, Hadoop, Spark and a few others, consolidating the work from several other Linaro groups and teams as well as from community and members.

For the Consumer Edition the CE AOSP RPB for [HiKey](/product/hikey/) is now using a 4.1 based kernel, closer to what is provided directly by AOSP. We decided to not push major updates and rebases for the CE Debian RPB kernel since we want the changes to follow the same kernel policy as used by the EE kernel ([https://github.com/96boards/documentation/wiki/RP-Kernel-Policy](https://github.com/96boards/documentation/wiki/RP-Kernel-Policy)). The goal of having one single tree for both CE and EE, with a strict upstream-based policy, will continue, and we hope to have more news on that in the upcoming weeks.

The work for the CE OE/Yocto RPB was also started, but unfortunately not yet covering single 96boards machine (due lack of a common kernel). Please check [https://github.com/96boards/meta-rpb](https://github.com/96boards/meta-rpb) and [https://github.com/96boards/oe-rpb-manifest](https://github.com/96boards/oe-rpb-manifest) to see what is already done for OpenEmbedded.

**Highlights for this release:**

**Enterprise Edition:**




  * UEFI/EDK2 support for D02, provided by [OpenPlatformPkg]()https://wiki.linaro.org/LEG/Engineering/Kernel/UEFI/CommonPlatformTree


  * [4.4-rc4 based kernel]()https://git.linaro.org/git-ro/people/amit.kucheria/kernel.git/refs/heads/96b/releases/2015.12, including support for D02 and Overdrive


  * ACPI support for D02 and Overdrive (mandatory for the enterprise edition)


  * Debian 8.2 "Jessie" network installer (using the 4.4-rc4 based kernel). CentOS 7 network installer available in alpha state.


  * Components:


    * Docker 1.9.1


    * OpenStack Liberty


    * ODPi BigTop (Hadoop, Spark, etc)


    * OpenJDK 8





**Consumer Edition:**

CE Debian RPB for [DragonBoard410](/product/dragonboard410c/) and [HiKey](/product/hikey/) (including support for the LeMaker version):




  * Debian 8.2 “Jessie”


  * 4.3 kernel (with additional patches)


  * OpenJDK 8 included by default


  * 96Boards artwork and default settings


CE AOSP RPB for [HiKey](/product/hikey/) (including support for the LeMaker version:




  * AOSP Android Marshmallow 6.0


  * 4.1 based kernel


Install instructions, known issues, test reports and instructions to build from source are all published at [https://github.com/96boards/documentation/wiki/RP-Release-2015.12](https://github.com/96boards/documentation/wiki/RP-Release-2015.12). Please also check [https://github.com/96boards/documentation/wiki/ReferenceSoftwareEE](https://github.com/96boards/documentation/wiki/ReferenceSoftwareEE) for documentation covering the components released as part of the EE RPB.

For general questions or support requests, please go to the [96boards.org](https://96boards.org/) Community forum ([https://discuss.96boards.org/](https://discuss.96boards.org/)). For development questions and topics, please use the 96Boards.org development mailing-list ([dev@lists.96boards.org](mailto:dev@lists.96boards.org)).

For bugs related to the 96Boards platforms, please use the 96Boards bug tracking system ([https://bugs.96boards.org/](https://bugs.96boards.org/)). For bugs related to the reference software platform release, but on development boards that are not officially part of 96Boards, please use [https://bugs.linaro.org](https://bugs.linaro.org/) instead (e.g. AMD Overdrive and HiSilicon D02).

For IRC support, please go to the #96boards channel at Freenode.

**Challenges for the next release (15.03)**:




  * Add support for HiKey and Dragonboard410c at our common 96Boards kernel tree (by following [https://github.com/96boards/documentation/wiki/RP-Kernel-Policy](https://github.com/96boards/documentation/wiki/RP-Kernel-Policy))


  * Extended support for CE OE/Yocto


  * Support for CE AOSP for Dragonboard410c (with freedreno)


  * Compliance process and check-list


We hope you enjoy the release!

On behalf of the Linaro 96Boards team,

Ricardo Salveti
