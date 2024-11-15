---
author: rsalveti
comments: true
date: 2016-03-06 12:54:21+00:00
layout: post
link: https://www.96boards.org/blog/reference-software-platform-16-03-release/
slug: reference-software-platform-16-03-release
image: /assets/images/blog/youtube-banner.jpg
image_name: youtube-banner.jpg
title: Reference Software Platform 16.03 Release!
wordpress_id: 12396
category: blog
---

We are happy to announce the 16.03 release for the Reference Software
Platform project, right before Linaro Connect BKK16!

This is our third release, incorporating quite a few changes and
improvements for both the consumer and enterprise reference platforms.
We are also happy to share, for the first time, that we were able to
produce a common and unified kernel tree (4.4.0 based) that is shared
across all the supported platforms!

The unified kernel is a critical piece as we can concentrate the
development and validation into one single source tree, and also
allowing us to create one package (deb/rpm) that can be shared with
everyone. As a result of the integration of many different development
trees, we are also able to quickly spot issues that could later affect
upstream and distros (e.g. DT x ACPI).

Some of the highlights for this release (check
[https://github.com/96boards/documentation/wiki/RPB-16.03-Highlights](https://github.com/96boards/documentation/wiki/RPB-16.03-Highlights)
for the complete list):

**Unified Kernel:**




  * Unified tree shared between the CE and EE builds, supporting Hikey,
Dragonboard, D02, APM X-Gene, HP Proliant m400 and AMD Overdrive.


  * 4.4.0 based, including under-review topic branches to extend the
hardware support for the platforms available.


  * Device-Tree support for CE; ARM ACPI and PCIe support for Enterprise.


  * Single kernel config for all platforms in arch/arm64/configs/distro.config




## Consumer Reference Platform:


**CE Debian RPB:**




  * Upgrade to Debian 8.3 "Jessie"


  * Upgrade to the unified 4.4.0 Linux Kernel


  * DB410c: Freedreno X11 video driver included by default (1.4.0)


  * HiKey: Grub 2 config supporting kernel package updates


**CE AOSP RPB:**




  * AOSP Android Marshmallow 6.0 (android-6.0.1_r16)


  * Early Developer Preview snapshot for DragonBoard™ 410, supporting
Mesa and Freedreno




## Enterprise Reference Platform:


**Platforms Supported:**




  * AMD Overdrive A0 (new) and B0


  * D02


  * APM X-Gene Mustang (new)


  * HP ProLiant m400 (new)


**Features**: UEFI with ACPI, KVM and PCIe support

**Firmware**: Updated UEFI/EDK2 for D02, including support for PCIe and SAS

**Network Installers:**
- Upgrade to Debian 8.3 "Jessie"
- CentOS (now supported): Based on CentOS 7.2 15.11

Install instructions, known issues, test reports and instructions to
build from source are all published at
[https://github.com/96boards/documentation/wiki/Reference-Platform-Home](https://github.com/96boards/documentation/wiki/Reference-Platform-Home).

Since Linaro Connect BKK16 is just around the corner, please also make
sure to check the sessions involving 96Boards and the Reference
Software Project. Sessions we will cover next week:
* BKK16-100: Evolution of the Reference Software Platform Project
* BKK16-501: Kernel and bootloader consolidation and upstreaming
* BKK16-505: Mezzanine Enablement

Also make sure to check [https://bkk16.pathable.com/](https://bkk16.pathable.com/) for the full schedule!

We hope you enjoy the release, and have a great Linaro Connect BKK16!

On behalf of the Linaro 96Boards team,

Ricardo Salveti
