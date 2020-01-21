---
title: Threads got complicated | OpenCV on RB3 Pt. 2 | Qualcomm RB3 Robotic Arm Project
author: Sahaj Sarup
date: 2019-07-07 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# Vision Pt. 2

## Introduction

Over the past month, I have mostly dedicated my resources towards testing out the best case scenario for running openCV on the RB3.

Incase you haven't seen my previous blog on **[Introduction to OpenCV on RB3](https://www.96boards.org/blog/rb3-arm-intro-opencv-1/)** I'd recommend giving that a quick read before continuing.

***

## Ditching OpenCV 4 for OpenCV 3.2 because of buggy OpenMP implementation

Ever wondered why OpenCV stresses your CPU really well, across all the cores?

It utilizes a few multi-threading algorithms and libraries so that even if your code is highly sequential, most of the processing intensive OpenCV functions you call are atleast parallelized internally.

This allows for a smoother programming experience and efficient utilization of the available CPU power.

Otherwise you are stuck with your openCV code running on a single core, and no matter how powerful your processor's single core performance is, you'll always have a bad time.

OpenCV is flexible in a way that it allows you to choose which multi-threading library you want it to utilize, this allows for a lot of flexibility and performance optimizations.

### So what choices do we have?
Here we are faced with a few options:
- [PThreads](http://man7.org/linux/man-pages/man7/pthreads.7.html): Basic, widely available but I'd recommend this only as a last resort.
- [TBB](https://01.org/tbb): Optimized for Intel chipsets, performs poorly on ARM so I don't really care.
- [IPP](https://software.intel.com/en-us/intel-ipp): Works ONLY with Intel chipsets so I can't be bothered with this one either.
- [OpenMP](https://www.openmp.org/): Completely open-source, built into gcc/libc, architecture independent. Great opencv performance for Arm.

### OpenMP it is then.
Yes but, Not quiet. Currently there seems to be a bug in OpenCV 4 preventing (at least) ARM64 platforms from using OpenMP (at least) in Python 3 & 2.

Bug reported here: [https://github.com/opencv/opencv/issues/14884](https://github.com/opencv/opencv/issues/14884)

After doing multiple experiments with different gcc variants, opencv versions etc, I've come to the conclusion that using tried and tested OpenCv 3.2 with OpenMP enabled is the best solution.

Its not that old of a version and allows your workload to be split across multiple cores, which combined with the powerful Snapdragon 845 on the RB3 means that all but one core are always sitting under 50% utilization. 

I mean just look at this screenshot.

![](https://i.imgur.com/rackjvl.jpg)

***

## Next up:
**We'll take a look at the OpenCV implementation for the Robotic Arm Project.**