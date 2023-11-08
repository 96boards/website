---
title: "96boards: Autoware everywhere | Xenomai on PCU"
author: Servando German Serrano
date: 2021-02-08T01:00:00.000Z
image: ../../assets/images/blog/pcu_top_view.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, AutoCore, PCU, arm-autonomy
---

# Introduction

[Xenomai](https://gitlab.denx.de/Xenomai/xenomai/-/wikis/home) is a Free Software project in which engineers from a wide background collaborate to build a robust and resource-efficient real-time core for Linux© following the dual kernel approach, for applications with stringent latency requirements.

In this post we explore how we can build Xenomai to use on Autocore's PCU. We will explore how to enable Xenomai's [2 options](https://gitlab.denx.de/Xenomai/xenomai/-/wikis/Start_Here#user-content-how-does-xenomai-deliver-real-time) to provide the real-time capabilities on the board.

This post is organized as follows:
- [Introduction](#introduction)
- [Xenomai](#xenomai)
  - [Mercury core](#mercury-core)
    - [Getting the PCU image](#gettting-the-pcu-image)
    - [Getting the Xenomai sources](#getting-the-xenomai-sources)
    - [Building for Mercury](#building-for-mercury)
  - [Cobalt co-kernel](#cobalt-co-kernel)
    - [Patch I-pipe on the Linux kernel](#patch-i-pipe-on-the-linux-kernel)
    - [Building the patched Linux kernel](#building-the-patched-linux-kernel)
    - [Building for Cobalt](#building-for-cobalt)
- [Conclusion](#conclusion)

***

# Xenomai

As mentioned above Xenomai provides capabilities to support applications with hard real time requirements. It does so either supplementing Linux with a real-time co-kernel running side-by-side with it, the Cobalt co-kernel, or by relying on the real-time capabilities of the native Linux kernel,
through the Mercury core.

In this blog post we will show how we can use either of the approaches on AutoCore's PCU.

## Mercury core

The single-kernel approach, through the use of the Mercury core, relies on the real-time capabilities of the antive Linux kernel. This means that we need to provide the Linux kernel with those capabilities through the use of the [PREEMPT-RT patch](https://wiki.linuxfoundation.org/realtime/start) which involves patching the kernel with the right patch version, build it for the PCU, etc.

### Getting the PCU image

In our case, and thanks to the work of the AutoCore team, the default image for the PCU already comes pre-patched with PREEMPT-RT, meaning that we just need to download it, flash it to the SD card and get down to building the Xenomai libraries for the Mercury core. To do so we just need to [Autocore's Resource Download](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Resource_download.md) site and get the latest image for the PCU. At the time of writing the latest avaialbe image is located in the _20201214 Release Package_, it contains (among others):
- Ubuntu 20.04 pre-patched with PREEMPT-RT
- ROS2 Foxy

Once download we can just flash it on to the SD card and pop it into the PCU. If you need a bit more details to get the PCU up and running, please check our [previous blog](https://www.96boards.org/blog/autocore_pcu_1/).

### Getting the Xenomai sources

As the Xenomai libraries are lightweight we will build them directly on the PCU. So, after flashing the PCU we just need to boot it and log in using the default `user` username and password.

As men tioned in the [Xenomai build instructions](https://gitlab.denx.de/Xenomai/xenomai/-/wikis/Installing_Xenomai_3#user-content-building-the-arm64-libraries) for arm64 architecture we need to get the `next` branch from the Xenomai repository.

```
$ git clone https://gitlab.denx.de/Xenomai/xenomai.git -b next
```

### Building for Mercury

To build Xenomai Mercury core we just need to do the following.
```
$ cd xenomai
$ ./scripts/bootstrap
$ ./configure --with-core=mercury --enable-smp --enable-pshared
$ sudo make install
```
![](/assets/images/blog/xenomai_mercury.gif)

Once the libraries are installed we can try the [cyclictest](https://wiki.linuxfoundation.org/realtime/documentation/howto/tools/cyclictest/start) to get some results running on the real time kernel as shown below.
```
$ sudo /usr/xenomai/demo/cyclictest --mlockall --smp --priority=98 --interval=200 --distance=0 -D 20
```
![](/assets/images/blog/xenomai_mercury_test.gif)

We can see that we are getting a maximum latency of 120 microsecs in the worst case. We'll compare later on with the Cobalt co-kernel output.

## Cobalt co-kernel

We will now get the dual kernel configuration up and running on the PCU. The Cobalt co-kernel deals with the time-critical activities and has higher priority over the native Linux kernel processes.

The process of enabling the Cobalt co-kernel is a bit more involved than for the Mercury core but we'll make it as straighforward as possible. As outlined in the [Cobalt core installation instructions](https://gitlab.denx.de/Xenomai/xenomai/-/wikis/Installing_Xenomai_3#cobalt-core-install) we need to:
- Prepare the Linux kernel by patching it with I-pipe.
- Build the patched kernel and get it on the PCU.
- Build the Xenomai libraries for the Cobalt co-kernel.

### Getting all sources

We will use NXP flex-builder tool to put together the bootpartition with the patched kernel we need for the PCU. To do so, we'll follow [Autocore's guide](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Mpu_build.md) to build a suitable image for the PCU together.

__NOTE__: Ubuntu 18.04 is needed to use the flex-builder tool.

First of all we need to get all the source code as outlined [here](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Mpu_build.md#download-source-code).

```
$ mkdir 1046a
$ vcs import 1046a < 1046a.repos
```

### Patch I-pipe on the Linux kernel

Once the sources are downladed we need to get the Xenomai sources and the appropriate I-pipe patch. The default I-pipe patch in the [download area](https://xenomai.org/downloads/ipipe/) fails to apply on the customized kernel v4.14 from Autocore, for convenience a modified I-pipe patch is available [here](https://people.linaro.org/~servando.german.serrano/pcu/xenomai/), which is the one used in the next steps.

```
$ cd 1046a/flexbuild/packages/linux
$ git clone https://gitlab.denx.de/Xenomai/xenomai.git -b next
$ wget https://people.linaro.org/~servando.german.serrano/pcu/xenomai/ipipe-4.14.78-arm64.patch
```

Next we use Xenomai's shell script to prepare the Linux kernel.
```
$ cd 1046a/flexbuild/packages/linux/xenomai
$ ./scripts/prepare-kernel.sh --linux=/1046a/flexbuild/packages/linux/linux --ipipe=/1046a/flexbuild/packages/linux/ipipe-4.14.78-arm64.patch --arch=arm64
```
![](/assets/images/blog/xenomai_ipipe_patch.gif)

### Building the patched Linux kernel

We are now ready to build the patched kernel for the PCU. As mentioned earlier, we'll use the flex-builder tool. We will build the patched kernel and bootpartition and replace them in the default PCU image.

```
$ cd 1046a/flexbuild
$ source setup.env
$ flex-builder -c linux -a arm64
$ flex-builder -i mkbootpartition -a arm64
```

After the kernel and boot partition builds complete we need to flash the SD card with the PCU image from [Autocore's Resource Download](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Resource_download.md) site and replace the boot partition with the newly created one.

The boot partition files are located in `1046a/flexbuild/build/images/bootpartition_LS_arm64_lts_4.14` and we just need to copy them over to the `boot` folder that has been created in the SD card during the PCU flashing process.

### Building for Cobalt

Following the steps in the previous section we are now ready to pop the SD card in the PCU, boot it and log in using the default `user` username and password.

We build the Xenomai Cobalt co-kernel following similar steps as for the Mercury core after logging into the PCU.
```
$ git clone https://gitlab.denx.de/Xenomai/xenomai.git -b next
$ cd xenomai
$ ./scripts/bootstrap
$ ./configure --with-core=cobalt --enable-smp --enable-pshared
$ sudo make install
```
![](/assets/images/blog/xenomai_cobalt.gif)

Following the installation of the Cobalt co-kernel we can try to [boot it](#https://gitlab.denx.de/Xenomai/xenomai/-/wikis/Installing_Xenomai_3#user-content-booting-the-cobalt-kernel) to check that everything went fine.
```
$ dmesg | grep -i xenomai
```
![](/assets/images/blog/xenomai_cobalt_boot.gif)

As we did for the Mercury core we run the [cyclictest](https://wiki.linuxfoundation.org/realtime/documentation/howto/tools/cyclictest/start) to get some results running on the real time kernel as shown below.
```
$ sudo /usr/xenomai/demo/cyclictest --mlockall --smp --priority=98 --interval=200 --distance=0 -D 20
```
![](/assets/images/blog/xenomai_cobalt_test.gif)

We can see that using the Cobalt co-kernel we are getting a maximum latency of 20 microsecs in the worst case, which a big reduction compared with the 120 microsecs we were getting with the Mercury core.

***

# Conclusion

In this post we have shown how to build Xenomai to provide the PCU with hard real time capabilities. We have seen that taking the dual kernel approach through the Cobalt co-kernel it is possible to achieve more stringent latencies than those of the Mercury core.
