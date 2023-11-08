---
title: "96boards: Autoware everywhere | First look at AutoCore's PCU"
author: Servando German Serrano
date: 2020-05-11T01:00:00.000Z
image: ../../assets/images/blog/pcu_top_view.png
image_name: pcu_top_view.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, AutoCore, PCU
---

# Introduction
We are back with a new entry of our "96boards: Autoware everywhere" blog series. In previous entries we showed how to run a subset of Autoware's features due to hardware limitations, but thanks to [AutoCore](https://www.autocore.ai/) we are now able to run Autoware on their [Perception Computing Unit (PCU)](https://github.com/autocore-ai/autocore_pcu_doc), the first heterogeneous hardware platform of the [Autoware.IO](https://www.autoware.io/) project.

In this first post regarding the PCU we will look at the steps we need to take for our initial setup of the board and how to get Cylone DDS installed and set up to be the default DDS for ROS2.

This post is organized as follows:
- [AutoCore's PCU](#autocores-pcu)
- [PCU Setup](#pcu-setup)
- [Getting the pre-built image](#getting-the-pre-built-image)
- [Getting Cyclone DDS](#getting-cyclone-dds)

***

## AutoCore's PCU

AutoCore announced their PCU publicly on January 21<sup>st</sup> through [this ROS Discourse post](https://discourse.ros.org/t/open-source-and-free-software-for-autocores-pcu/12418). The PCU is the first reference design of the [Autoware.IO](https://www.autoware.io/) project.

A full description of the PCU specification can be found [here](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Pcu_specification.md). As a summary, it features a heterogeneous architecture with a lock-step MCU and a high performance MPU. Based on the MCU-MPU architecture, different ADAS/AD or relevant functions can be integrated with different functional safety levels up to ASIL D after ISO 26262. A wide variety of interfaces are provided to support vehicle networks connection, sensors and peripherals. Furthermore, additional hardware accelerator could be connected via PCIe to provide additional computing power.

The video below from AutoCore shows a car fitted with the PCU performing some autonomous maneuvers.

{% include media.html media_url="https://youtu.be/UrHaz6Qku0g" %}

## PCU setup

The image below shows the back of the PCU. As we are booting using a micro SD card we have shorted pins 2-3 in jumpers 1, 2 and 3, as explained in the [PCU Hardware manual](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Pcu_hardware_manual.md#jmp-1-3).
**Note** for shorting the pins we have used 2.54mm jumper cap shunts.

![](/assets/images/blog/pcu_back.jpg)

## Getting the pre-built image

AutoCore provides a set of software packages for our development on the PCU. The [AutoCore Resource page](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Resource_download.md#mpu-images) lists all the available components to get the most out of our PCU. At the time of writing, the latest release package is `20200417`. For the purpose of this first post we will download the _MPU Image_, and we will look at the rest of components in the next post.

We can use [balenaEtcher](https://www.balena.io/etcher/) as AutoCore suggests to flash our SD card with the downloaded image.

To log into the image we can use any of the following username/password combinations: `user`/`user` or `root`/`root`.

Once we log in we can see that AutoCore's image provides a full installation of ROS Melodic and ROS2 Dashing ready to be used:
```
user@localhost:~$ ls /opt/ros/
dashing  melodic
```

In addition, Docker is installed by default so we could directly go ahead and pull the pre-compiled arm64v8 Autoware.AI image from [autoware/arm64v8 Dockerhub repository](https://hub.docker.com/r/autoware/arm64v8/tags) or an Autoware.Auto image from our [96boards/autoware](https://hub.docker.com/repository/docker/96boards/autoware) Dockerhub repository.

## Getting Cyclone DDS

We have 2 options for getting Cyclone DDS into our PCU. If we connect the PCU to the internet we can simply `ssh` into the board and install Cyclone DDS via:

```
$ apt install ros-dashing-rmw-cyclonedds-cpp
```

Otherwise we can add the source code to the SD card after flashing AutoCore's image and build it locally on the board afterwards. In order to do so:

```
$ cd /path/to/rootfs/mount-point/rootfs/home/user/
$ mkdir -p ros2_cyclonedds/src
$ git clone https://github.com/ros2/rmw_cyclonedds -b dashing-eloquent
$ git clone https://github.com/eclipse-cyclonedds/cyclonedds -b V0.5.0
```

The steps above will get a compatible version of CycloneDDS with ROS2 Dashing. Once we log into the PCU we need to change the owner of the folder we created earlier and compile CycloneDDS:

```
$ sudo chown -R $USER ros2_cyclonedds
$ source /opt/ros/dashing/local_setup.bash
$ cd ros2_cyclonedds
$ colcon build
```

To set it to be the default DDS we can add the following to the `bashrc` file:
```
$ echo "export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp" >> ~/.bashrc
$ source ~./bashrc
```

In addition, if we have built CycloneDDS from source we will need to overlay our CycloneDDS workspace after sourcing ROS2 or, if we want it to be sourced by default when logging into the PCU:
```
$ echo "source /opt/ros/dashing/local_setup.bash" >> ~/.bashrc
$ echo "source /home/user/ros2_cyclonedds/install/local_setup.bash" >> ~/.bashrc
$ source ~./bashrc
```

***

# Conclusion

In this first look at AutoCore's PCU we have just prepared the board to run Autoware and set up Cyclone DDS as the default one for ROS2 and Autoware.Auto.

Next time, we will use some of the available software packages from AutoCore for our Autoware development, so keep an eye to this space.
