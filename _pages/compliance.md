---
title: Compliance
description: |-
    96Boards Compliance is designed to ensure a level of hardware and software functionality and quality for the 96Boards Community Board program.
permalink: /compliance/
layout: flow
css-package: about
js-package: about
jumbotron:
    background-image: /assets/images/content/96boards-banner-5.jpg
flow:
    - row: custom_include_row
      source: sticky-tab-bar.html
    - row: main_content_row
    - row: custom_include_row
      source: members.html
---
96Boards Compliance is designed to ensure a level of hardware and software functionality and quality for the 96Boards Community Board program. The following Compliance topics are covered in this document:

- [1. Availability of Documentation <a name="Availability"></a>](#1-Availability-of-Documentation-a-name%22Availability%22a)
- [2. Binary Licensing <a name="Binary"></a>](#2-Binary-Licensing-a-name%22Binary%22a)
- [3. Hardware Compliance](#3-Hardware-Compliance)
- [4. Software Compliance <a name="Software"></a>](#4-Software-Compliance-a-name%22Software%22a)

Compliance is tested against the following:

*   [96Boards Consumer Edition Specification](https://linaro.co/ce-specification),
*   [96Boards Enterprise Edition Specification](https://linaro.co/ee-specification) and     [96Boards TV Platform Specification](https://linaro.co/tv-specification),
*   [96Boards IoT Edition Specification](https://linaro.co/ie-specification)
*   [96Boards SoM Specification (Compute)](https://linaro.co/som-spec)
*   [96Boards SoM Specification (Wireless)](https://linaro.co/som-w-spec)
*   The requirements specified in the below

----

## 1. Availability of Documentation <a name="Availability"></a>
It is **recommended** that all documentation required under the 96Boards program for the board and SoC be freely available from the 96Boards website. Any documentation that cannot be provided from the 96Boards website **shall** be available from a vendor or other public website that can be linked to from the 96Boards website.
  *   Board schematics **shall** be available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode) licence on the 96Boards.org site
  *   It is not required that board layout or manufacturing data documents be made available.  This is a board vendor decision.
  *   A Board reference manual **shall** be available on the 96Boards.org site
      *   This **shall** include information on hardware and software interfaces to enable the maker community and developers of bootloaders, kernels and OS distributions.
  *   An SoC technical reference manual **shall** be available
      *   This **shall** include sufficient information for developers to be able to create board drivers and software interfaces for the supported SoC features.

---

## 2. Binary Licensing <a name="Binary"></a>
96Boards recognizes the present industry reality that it is generally not possible to provide all software on a community board as open source code. A goal of the 96Boards program is to encourage vendors and the community to move towards making more software fully open source.

For any software provided in binary form:
*   The vendor or SoC provider **shall** provide a binary distribution license to Linaro/96Boards to allow those binaries to be redistributed from the 96Boards websites.
*   The vendor or SoC provider **shall** provide a binary distribution license allowing the board manufacturer to ship all necessary binaries.
*   It is acceptable to require the end user to accept an EULA prior to first use of the board.

---
<a name="Hardware"></a>
## 3. Hardware Compliance
**96Boards Goals**

The 96Boards program requires board vendors to publish full schematics. However, due to the cost of high performance board development, vendors are not required to provide full manufacturing information. Nevertheless, we encourage vendors to consider providing full open source hardware solutions, including full board manufacturing information. Hardware compliance testing **shall** include (but is not limited to):

*   Review of schematics
*   Verification of conformance to physical footprint and component dimensions
*   Conformance to 96Boards specification minimum required hardware feature set
*   Conformance to 96Boards expansion bus functionality
    *   Low speed connector
    *   High speed connector

---

## 4. Software Compliance <a name="Software"></a>

**96Boards Goals**

The 96Boards program has requirements summarized below for a 96Boards branded product supported on the 96Boards.org website. We encourage and want vendors to go further and benefit from more complete open source support. Specifically we would like to see:

*   Full upstream support for 96Boards products BSP software
*   Product quality reference open source software for 96Boards products
*   Full open source stack from bootloader to distribution
*   Minimal or, even better, no binary blobs

Software compliance testing **shall** include (but is not limited to):

*   Review of supplied software build and functionality
*   Build of supplied software from documentation and source code

  **Software Compliance Requirements**

*   All open source software used **shall** comply with its respective open source license(s)
*   A software method **shall** be supplied to allow the board to be recovered from a “bricked” condition.

---

<div class="compliance-tabs" >

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
<li role="presentation" class="active"><a href="#firmware" aria-controls="firmware" role="tab" data-toggle="tab">Firmware</a></li>
<li role="presentation"><a href="#bootloader" aria-controls="bootloader" role="tab" data-toggle="tab">Bootloader</a></li>
<li role="presentation"><a href="#kernel" aria-controls="kernel" role="tab" data-toggle="tab">Kernel</a></li>
<li role="presentation"><a href="#graphics" aria-controls="graphics" role="tab" data-toggle="tab">Graphics Support (96Boards Consumer Edition)</a></li>
<li role="presentation"><a href="#distribution" aria-controls="distribution" role="tab" data-toggle="tab">Distribution</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="firmware" markdown="1">
While open source implementations are preferred, the following software will be accepted as binary blobs if necessary:
*   Power management or other modules that execute on the SoC or board (PSCI, MCU or system control block firmware for example)
*   Firmware and/or user space libraries for:
*   GPU
*   Multimedia accelerator
*   DSP/coprocessor
*   Camera ISP
*   Baseband processor
*   Bluetooth and WiFi firmware
Note that Linux kernel modules **must not** be provided as binary firmware blobs.
The GPLv2 licence prohibits this.
</div>

<div role="tabpanel" class="tab-pane" id="bootloader" markdown="1">
*   It is strongly recommended one open source bootloader to be provided for the board that executes immediately after the internal SoC startup code. The source for this bootloader should be available from a publicly accessible site or integrated into the bootloader trees on[https://github.com/96boards](https://github.com/96boards)
*   Fastboot protocol support **shall** be provided for all Consumer Edition boards
*   It is **strongly recommended** that vendors of an ARMv8 board provide a port of the [ARM Trusted Firmware (ATF) and PSCI reference implementations](https://github.com/ARM-software/arm-trusted-firmware), and a port of the [Tianocore EDK2 UEFI reference implementation](https://github.com/tianocore/edk2).
*   It **shall** be possible to replace or update the bootloader.
*   It **shall** be possible to recover from a “bricked” board (for example as a result of use of a user built bootloader) without specialized additional hardware. Typically this will be via USB/fastboot, an SD card or a UART interface.
</div>

<div role="tabpanel" class="tab-pane" id="kernel" markdown="1">
It is **strongly recommended** that a 96Boards product achieves upstream kernel software support as defined below:
* Level 1 – boot from upstream mainline kernel to a UART or USB console, or
* Level 2 – boot from upstream kernel with full board functionality
Hardware accelerators such as GPUs may be disabled, but the relevant function should operate – for example a frame buffer for graphics output, or
* Level 3 – boot from upstream kernel with full board functionality
Hardware accelerators such as GPUs are enabled with binary user space libraries, or
* Level 4 – boot from upstream kernel with full board functionality with all hardware specific code (including any required user space libraries) available as open source

A 96Boards product **shall** support at least one of the following kernels:
* An unmodified kernel.org mainline, stable or longterm (latest two releases) kernel.
Note: Upstream mainline support is a 96Boards program goal
* A Linaro-supported kernel with additional published patches against a kernel.org mainline, stable or longterm (latest two releases) kernel
* A Linaro-supported kernel with additional published patches against an AOSP release kernel (latest two letter releases) or the latest AOSP current kernel
* A vendor-supported kernel using any of the above kernel versions
</div>

<div role="tabpanel" class="tab-pane" id="graphics" markdown="1">
* User space libraries for GPU hardware acceleration for the supported distribution(s) **shall** be provided
* It is **shall** that a fully open source graphics stack that the community can freely rebuild be made available
</div>

<div role="tabpanel" class="tab-pane" id="distribution" markdown="1">
A 96Boards product **shall** provide at least one of the following distributions
* Debian
* Ubuntu
* Fedora
* AOSP
* A Linaro or vendor-supported Linux build using the Yocto Project tools or OpenEmbedded
</div>

</div><!--End Tab Content-->
</div><!--End Tabs-->