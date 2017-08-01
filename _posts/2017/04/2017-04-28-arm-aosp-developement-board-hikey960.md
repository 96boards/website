---
author: shovan
comments: true
date: 2017-04-28 09:23:22+00:00
layout: post
link: https//www.96boards.org/blog/arm-aosp-developement-board-hikey960/
slug: arm-aosp-developement-board-hikey960
featured_image: hikey-aosp.jpg
title: Linaro Announces Latest 96Boards Product for AOSP Development
wordpress_id: 20342
categories:
- blog
---

[[96Boards OpenHours](https//www.96boards.org/openhours/) 25 April 2017 6.00pm PST, 26 April 2017 9.00am CST] Linaro Ltd, the open source collaborative engineering organization developing software for the ARM® ecosystem, today announced the availability of the [HiKey 960 96Boards](https//www.96boards.org/product/hikey960/) development platform from Linaro Core member Huawei. Designed to provide access to the latest ARM mobile technology for AOSP developers, this new board is now listed on the 96Boards website and is available through global distribution channels.

While all AOSP developers will find the board useful, it is developers who want to work closer to the hardware who will gain maximum advantage from it. This will include mobile developers looking to enable support and innovative functionality with new and existing sensors, security and other peripheral hardware and software, and developers working on derivative products for markets like digital signage, point of sale (POS), robotics and others outside the traditional mobile AOSP space.


<blockquote>“We are very pleased to be working with Linaro members ARM, Huawei, Google, Archermind and LeMaker on this product”, said George Grey, Linaro CEO. “The HiKey 960 delivers on the goal of 96Boards to provide access to the latest ARM technology to the developer community, with support for the latest Huawei mobile SoC featuring high performance ARM Cortex®-A73 cores coupled with the latest generation of ARM Mali™ GPU technology.”</blockquote>


The new board is based around the Huawei Kirin 960 octa-core ARM big.LITTLE™ processor with four ARM Cortex-A73 and four Cortex-A53 cores with 3GB of LPDDR4 SDRAM memory, 32GB of UFS 2.0 flash storage, and the latest generation Mali-G71 MP8 graphics processor. Available now through Archermind ([Alpha-Star](https://www.alpha-star.org/hikey960)) and LeMaker ([Lenovator](http://www.lenovator.com/product/132.html)), the HiKey 960 96Boards development platform is on sale at US$239 and is expected to be available through local distribution in the US, EU and Japan in early May.


<blockquote>“We are very pleased to bring our highest performance mobile SoC to the 96Boards program and to be working with Google and Linaro in the AOSP project,” said Benjamin Wang, Deputy General Manager of Huawei Wireless Terminal Chipset Business Unit,. “We expect that developers will be excited to get access to the latest ARM CPU and GPU technology, as well as new features such as a PCIe M.2 card interface for additional high performance storage or wireless cards, all running using the latest AOSP builds.”</blockquote>


Google develops Android to run on multiple architectures and the Linaro engagement is in particular aimed at collaboration with ARM-based system-on-chip (SoC) partners. Android Open Source Project (AOSP) has been a key part of Linaro’s work since its founding in 2010, and Linaro’s AOSP contributions have now spanned 24 kernel versions from Linux kernel 2.6.36 in Android Honeycomb (3.0) to Linux 4.10 today. The HiKey 960 will be the second HiKey officially supported as an Android reference board and it will bring new levels of performance to Android developers.


<blockquote>“ARM is committed to providing platform developers with access to new technologies in an effort to support ongoing innovation on ARM-based mobile platforms,” said Laurence Bryant, vice president of personal mobile compute, Business Segments Group, ARM. “The HiKey 960 platform integrates the latest big.LITTLE technology that combines the Cortex-A73, the most powerful yet power efficient mobile CPU, the Cortex-A53 for further efficiency and the latest Mali GPU, Mali-G71. Running on the latest AOSP builds, we’re enabling a range of advanced solutions to be brought to market more quickly.”</blockquote>


Initial software support for the board is provided in the AOSP source tree based on the Android Common Kernel using the Linux 4.4 kernel release. Linaro and Huawei are also working on the Linux 4.9 based Android Common kernel and maintaining support for the Kirin 960 SoC in the mainline kernel.org tree, allowing for the availability of multiple Linux distributions for this board in the future.

Information about the HiKey 960 board and Running Android on it will be available here: [http://source.android.com/source/devices.html](http://source.android.com/source/devices.html). Linaro is providing instructions for developers here: [http://linaro.co/hikey960-start](http://linaro.co/hikey960-start).



**HiKey 960 board specifications**

<table>
<tbody>
<tr>
<td>
<strong>Component</strong>
</td>
<td>
<strong>Description</strong>
</td>
</tr>
<tr>

<td rowspan="2"> <strong>SoC</strong>
</td>

<td >Kirin 960 octa-core CPU
4x Cortex-A73 cores to 2.4 GHz
4x Cortex-A53 cores to 1.8 GHz
</td>
</tr>
<tr >

<td >Mali-G71 MP8 GPU
</td>
</tr>
<tr >

<td> <strong>Software</strong>
</td>

<td >AOSP with 4.4 AOSP common kernel
</td>
</tr>
<tr >

<td> <strong>Storage</strong>
</td>

<td >32GB UFS 2.0 flash storage and microSD card slot
</td>
</tr>
<tr >

<td> <strong>Video Output / Display Interface</strong>
</td>

<td >HDMI 1.2a up to 1080p plus 4-lane MIPI DSI
</td>
</tr>
<tr >

<td> <strong>Connectivity</strong>
</td>

<td >Dual-band 802.11 b/g/n/ac WiFi and Bluetooth 4.1 with on board antennas
</td>
</tr>
<tr >

<td rowspan="2"> <strong>USB</strong>
</td>

<td >2 x USB 3.0 type A host ports
</td>
</tr>
<tr >

<td >1 x USB 2.0 type C OTG port
</td>
</tr>
<tr >

<td rowspan="2"> <strong>Camera</strong>
</td>

<td >1x 4-lane MIPI CSI
</td>
</tr>
<tr >

<td >1x 2-lane MIPI CSI
</td>
</tr>
<tr >

<td rowspan="3"> <b>Expansion</b>
</td>

<td >PCIe Gen2 on M.2 M Key connector
</td>
</tr>
<tr >

<td >40 pin low speed expansion connector +1.8V, +5V, DC power, GND, 2x UART, 2x I2C, SPI, I2S, 12x GPIO
</td>
</tr>
<tr >

<td >60 pin high speed expansion connector 4L MIPI DSI, 2L+4L MIPI CSI, 2x I2C, SPI (48M), USB 2.0
</td>
</tr>
<tr >

<td> <strong>Misc</strong>
</td>

<td >LEDs for WiFi & Bluetooth, 4x user LEDs, power button
</td>
</tr>
<tr >

<td> <strong>Power Supply</strong>
</td>

<td >8V-18V/2A via 4.75/1.7mm power barrel (EIAJ-3 Compliant),12V/2A power supply recommended
</td>
</tr>
<tr >

<td> <strong>Dimensions</strong>
</td>

<td >85mm x 55mm
</td>
</tr>
</tbody>
</table>
<strong>About Linaro</strong>

Linaro is leading collaboration on open source development in the ARM ecosystem. The company has over 250 engineers working on consolidating and optimizing open source software for the ARM architecture, including developer tools, the Linux kernel, ARM power management, and other software infrastructure. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce non-differentiating and costly low level fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro’s growing membership, and by Linaro consistently being listed as one of the top five company contributors, worldwide, to Linux kernels since 3.10.

To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit [http://www.linaro.org](http://www.linaro.org) and [http://www.96Boards.org](https//www.96boards.org).



* * *

{% include media.html media_url="https://www.youtube.com/embed/-6AVlw4VwRQ?feature=oembed" %}

Buy Now


  * [Amazon](http://linaro.co/hikey960buy-amazon) (USA) – $239.99 & FREE Shipping


  * [Lenovator](http://linaro.co/hikey960buy) (Worldwide) – $239


  * [Seeed](http://linaro.co/hikey960-seed) (Worldwide) – $239.00


  * [Alpha Star](http://linaro.co/hikey960buy-alpha)


  * [Ali express](http://linaro.co/hikey960-ali) – US $239.00


  * [Switch Science](http://linaro.co/hikey960-switch) (Japan)


  * [All Net](http://linaro.co/hikey960-allnet) (Germany)


[Documentation](https//www.96boards.org/documentation/ConsumerEdition/HiKey960/README.md/) & [Support Forum](https://discuss.96boards.org/c/products/hikey960)
