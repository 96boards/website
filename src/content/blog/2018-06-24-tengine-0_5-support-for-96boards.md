---
title: Tengine 0.5 Support for 96Boards
author: yang-zhang
date: 2018-06-24T01:01:54.000Z
image: ../../assets/images/blog/oaid.jpg
image_name: oaid.jpg
image_thumb: oaid-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, Rock960,
  Hikey960, OAID, Tengine, AI, Machine Learning, ACL, Caffe, MxNet
---

# Introduction

Hello and Welcome to the **Tengine 0.5 Support for 96Boards** blog. In this blog we will
look into the Tengine 0.5 support for 96Boards. This blog will provide
a statistical overview of how 96Boards serves as a best-bed for leveraging
OAID stack on ARM64.

# OAID

[OPEN AID](https://github.com/OAID/) is an open source projects being actively developed and maintained by a dedicated project team all around the globe. OPEN AID commits to provide open source implementation on various readily available SoCs and their hardware platform to help product developers and application designers in fast prototyping with end to end reference optimised system. Via optimised compute acceleration over various silicon technology, OPEN AID offers an efficient middleware with a generic while proliferate application interface for developers.

# 96Boards.ai

[96Boards.ai](https://www.96boards.ai/) has enabled multiple AI compute platform with neural computing acceleration through various silicon fabrics such as CPU, GPU, DSP, FPGA, ASIC. By leveraging 96Boards open platform, OPEN AID is set to further accelerate AI product innovations on a range of SoCs.

{% include image.html path="/assets/images/blog/oaid-framework.png" alt="Your alternate text." %}

# Tengine 0.5

[TEngine 0.5](https://github.com/OAID/Tengine) is released on 15th June 2018. This is a major release from OPEN AI LAB with abundant of new features including

- GPU support

- native BLAS operator

- new networks (Inception-v3/vgg16/faster-rcnn/ssd/yolo-v2),

- Android (32 and 64 bits)

- Tensorflow serialiser and wrapper

- TEngine enablement for 2 main stream 96Boards AI platforms - Dragonboard 820c and HiKey960 from contribution of Qualcomm and Linaro (thanks to [Mark Charlebois
  ](https://github.com/mcharleb) and [Manivannan Sadhasivam](https://github.com/Mani-Sadhasivam).

- TEngine 0.5 release also simplifies CPU driver and its configuration with single driver.

We have run some examples with Rock960 with quite impressive numbers as below:

| Lib      | Items      | Platform | Configuration                                   | Test Results |
| -------- | ---------- | -------- | ----------------------------------------------- | ------------ |
| HCL FP32 | Squeezenet | RK3399   | ./build/tests/bin/bench_sqz                     | 49.81 ms     |
|          | Mobilenet  | RK3399   | ./build/tests/bin/bench_mobilenet               | 64.11 ms     |
| ACL FP32 | Squeezenet | RK3399   | ./build/tests/bin/bench_sqz -d acl_opencl       | 58.52 ms     |
|          | Mobilenet  | RK3399   | ./build/tests/bin/bench_mobilenet -d acl_opencl | 90.71 ms     |

# Conclusion

Currently [Tengine](https://github.com/OAID/TEngine) open source version only supports Arm v8, FP32. Latest benchmark performance can be found here using Rock960 with multi-core and GPU support.
