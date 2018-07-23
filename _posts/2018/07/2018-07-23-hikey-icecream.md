---
title: HiKey IceCream | Arm64 Distributive Compilation Cluster
author: Sahaj Sarup
date: 2018-07-23 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/hikeyice.jpg
    name: hikeyice.jpg
    thumb: hikeyice-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, Rock960, Hikey960, enterprise edition, product, single board computer, linaro, linux, open source, openhours, robert wolff, podcast, technology, tech, computer, hardware, software, groupgets, qwerty, embedded, crowd fund, mezzanine, community
---

“I have a drawer full of Arm SBCs...” - The statement that resulted in this blog.

> NOTE: If you are looking for benchmarks, go read a good recipe book.

# Introduction

If you are a Linux on Arm enthusiast, chances are that you have more SBCs than you can count on your fingers, and a good bunch of them might not see the light of day for a long time.
My initial goal. When I first started to build and experiment on this Frankenstein and fairly heterogeneous cluster of Arm SBC was to get some use out of those older SBC. Also, if you have four quad-core SBC laying around, This solution is a lot cheaper than buying a 16-Core workstation.


### The Setup:

My setup consists of:
- Hikey970 running Debian Stretch
- Hikey960 running Debian Stretch; and
- Hikey620 running Debian Stretch

This gives me a total of 16 Cortex A53 Cores and 8 Cortex A73 Cores for a total of 24 Arm64 Cores, about 11GB of RAM.

All the three boards are connected to a gigabit network, via a gigabit switch.


### The Distributive Compiler: Icecream

Icecream was created by SUSE based on distcc. Like distcc, Icecream takes compile jobs from a build and distributes it among remote machines allowing a parallel build. But unlike distcc, Icecream uses a central server that dynamically schedules the compile jobs to the fastest free server.

In my setup I have use the Hikey970 as the host scheduler and all the three boards are used as clients.


So Let's Run some tests:

- Linux kernel, 4.18-rc6: arm64 defconfig ```make all -j48```
  - Hikey970 standalone: About the time it takes to prepare a Banoffee pie
  - IceCream Cluster: You should go make a Chicken salad sandwich
- Kodi, commit 64a79f3e8c1cc1af0b8dc4f645e60f6c889e3667: ```-DCMAKE_INSTALL_PREFIX=/usr/local -DENABLE_INTERNAL_FMT=ON -DENABLE_INTERNAL_RapidJSON=ON -DENABLE_VAAPI=OFF```
  - Hikey970 standalone: I could do with some Springtime risotto right now.
  - IceCream Cluster: Banoffee pie, I think I’ve already had this one before.

The performance gain of course, isn’t very linear. There is a lot more to compiling a project than just running gcc on all the source files:
- The Linux kernel for example takes a fair bit of time running the linker, which is a very demanding single threaded operation.
- Kodi for example downloads a bunch of file during the compilation process which can have an impact if your network is slow.
- LAN, not just the bandwidth provided to you nodes, it also depends if there are other traffic bogging down the network or if it is a dedicated network for your cluster.
- And finally: [Amdahl’s Law](https://www.hpcwire.com/2015/01/22/compilers-amdahls-law-still-relevant/)

And finally here is the pic of my ghetto setup on a dirty workbench:

{% include image.html name="https://i.imgur.com/8IICi1m.jpg" alt="Your alternate text." %}

And a few pics of Icecream Monitor:

{% include image.html name="icecc1.png" alt="Your alternate text." %}

{% include image.html name="icecc2.png" alt="Your alternate text." %}
