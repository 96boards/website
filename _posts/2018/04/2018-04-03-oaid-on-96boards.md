---
title: OAID on 96Boards
author: Manivannan Sadhasivam
date: 2018-04-03 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/oaid.jpg
    name: oaid.jpg
    thumb: oaid-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, Rock960, Hikey960, OAID, AI, Machine Learning, ACL, Caffe, MxNet
---

# Introduction

Hello and Welcome to the **OAID on 96Boards** blog. In this blog we will
look into OAID stack and its enablement on 96Boards platform. This blog
will serve as a summary of work done towards enabling the OAID stack on
different 96Boards such as Dragonboard820c, Rock960 and Hikey960.

# OAID

OAID is the OpenSource stack for AI created by Open AI LAB. It incorporates
heterogeneous computing accelerated by ACL (Arm Compute Library). OAID is
a collection of ML libraries such as Caffe, MxNet, Tengine etc... incorporating
heterogneous computing infrastructure.

Three of our 96Boards platforms [Dragonboard820c](https://www.96boards.org/product/dragonboard820c/),
[Rock960](https://www.96rocks.com/) and [Hikey960](https://www.96boards.org/product/hikey960/)
are already enabled on OAID.

The essence of OAID is ACL. ACL is is a set of functions optimised for both ARM
CPUs and GPUs using SIMD technologies. Also we can make use of the NEON core in
the SoC for distributing the workload for deploying deep learning models. Since
the stack is only architecture dependent and not platform dependent, we can easily
deploy these stacks on any supported ARM platforms.

In the below sections we will see some of the OAID libraries and its performance/enablement
on 96Boards.

# Tengine

Tengine is a lite, high performance, modular inference engine for embedded device.
Tengine can be used to load and run Caffe/MxNet models of **Mobilenet** and
**Squeezenet** Convolutional Neural Networks. Tengine is organized as 6 modules:

1. Core
2. Operator
3. Serializer
4. Executor
5. Driver
6. Wrapper

For porting Tengine to any ARM platform, we need to look into the **Driver**
module. This module deals with the real hardware devices and provides services
to **Executor** by HAL API. Right now, official Tengine includes only support
for **RK3399** SoC present in Rock960 board. But, we have also added support
for **Hikey960**.

The port has not yet been upstreamed but it is the below repository:

* https://github.com/Mani-Sadhasivam/Tengine/tree/hikey960

The benchmark results for Hikey960 utilizing variable number of cores:

| Mobilenet                     | TPI           | Pooling         | Fused.BNScaleRelu   | Convolution           |
| ----------------------------- | ------------- | --------------- | -----------------   | --------------------- |
| TimeElapse/Percentage (1*A73) | 163351        | 5276 us (0.03%) | 892726 us (5.47%)   | 15437120 us (94.50%)  |
| TimeElapse/Percentage (4*A73) | 79186         | 7040 us (0.09%) | 1184279 us (14.96%) | 6727308 us (84.96%)   |
| TimeElapse/Percentage (1*A53) | 280129        | 13197 us (0.05%)| 2263732 us (8.08%)  | 25736053 us (91.87%)  |
| TimeElapse/Percentage (4*A53) | 125367        | 11241 us (0.09%)| 2247227 us (17.93%) | 10278308 us (81.99%)  |

| Squeezenet                    | TPI           | Pooling           | SoftMax         | Convolution         | Concat              |
| ----------------------------- | ------------- | ---------------   | --------------  | ---------------     | --------------------|
| TimeElapse/Percentage (1*A73) | 122555        | 5276 us (0.03%)   | 10755 us (0.09%)| 11837984 us (96.59%)| 168465 us (1.37%)   |
| TimeElapse/Percentage (4*A73) | 46998         | 234385 us (4.99%) | 10687 us (0.23%)| 4266165 us (90.77%) | 188465 us (4.01%)   |
| TimeElapse/Percentage (1*A53) | 194318        | 546130 us (2.81%) | 13342 us (0.07%)| 18430842 us (94.85%)| 441422 us (2.27%)   |
| TimeElapse/Percentage (4*A53) | 95943         | 547344 us (5.70%) | 12843 us (0.13%)| 8575066 us (89.38%) | 458987 us (4.78%)   |

Comparing the benchmark results of Rock960 and Hikey960 will reveal that
the performance of A73 cores are not that great! This is due to the fact
that the A73 core is not optimized in ACL.

> Note: There was no OpenCL support existed at the time of porting OAID to
>       Hikey960, hence GPU was not used.

# Caffe-HRT

**Caffe-HRT** is the modified version of the Caffe Deep Learning Framework.
It adds the heterogeneous capabilities to the Caffe and uses the heterogeneous
computing infrastructure framework to speed up Deep Learning on Arm-based
heterogeneous embedded platform. It also retains all the features of the
original Caffe architecture which users deploy their applications seamlessly.

There is no porting needed for this framework and it will directly work if
the [installation instructions](https://github.com/OAID/Caffe-HRT/blob/master/acl_openailab/installation.md)
are followed on the compatible ARM platforms. The performance report can be
obtained by following the [Performance Report](https://github.com/OAID/Caffe-HRT/blob/master/acl_openailab/performance_report.pdf)
guide.

# MXNet-HRT

**MxNet-HRT** is the modified version of the MxNet Deep Learning Framework.
It adds the heterogeneous capabilities to MxNet and uses the heterogeneous
computing infrastructure framework to speed up Deep Learning on Arm-based
heterogeneous embedded platform. It also retains all the features of the
original MxNet architecture which users deploy their applications seamlessly.

There is no porting needed for this framework and it will directly work if
the [installation instructions](https://github.com/OAID/MXNet-HRT/blob/master/acl_openailab/installation.md)
are followed on the compatible ARM platforms. The performance report can be
obtained by following the [Performance Report](https://github.com/OAID/MXNet-HRT/blob/master/acl_openailab/performance_report.pdf)
guide.

# Face Recognition

Face Recognition is an implementation project of face detection and recognition.
Face detection is performed using MTCNN algorithm and face recognition is
performed using LightenedCNN algorithm. This project utilizes both OpenCV and
Caffe-HRT framework.

Building this project is straightforward by following the [installation guide](https://github.com/OAID/FaceRecognition/blob/master/installation.md). But there are couple more extra steps needs to be done before building:

#### Package Dependencies

```shell
$ sudo apt-get install pkg-config libboost-all-dev
$ sudo apt install ocl-icd-opencl-dev
```

Build and install latest protoc and protobuf from source:

* https://github.com/google/protobuf/releases

Once above mentioned packages are installed, proceed to build **Face Recognition**
project.

During execution, register your name with a face ID into the database. Then,
the algorithm will show your name whenever the face is found. Due to the
involvement of Caffe-HRT, recognition should be very fast when compared to
plain OpenCV.

Below is the output when it identified myself :P

{% include image.html name="oaid-face-recognition.png" alt="Your alternate text." %}

# Conclusion

So we are at the end of this OAID adventure with 96Boards :) I can now proudly
say that, 3 of our platforms are enabled with OAID making way for the AI/ML
developers to utilize the state of the art deep learning frameworks on 96Boards.
As we always say, if there are any feedbacks about this blog, please share it
in comments. We'd love to hear back from community.
