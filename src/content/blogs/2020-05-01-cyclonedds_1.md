---
title: "96boards: Autoware everywhere | Defaulting to Cyclone DDS"
author: Servando German Serrano
date: 2020-05-01T01:00:00.000Z
image: ../../assets/images/blog/CycloneDDS.png
image_name: CycloneDDS.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, cyclonedds
---

# Introduction
We are back with a new entry of our "96boards: Autoware everywhere" blog series. In this post we outline how to set up Cyclone DDS as the default implementation for our ROS2 installation in 96Boards which we will use for [Autoware.Auto](https://www.autoware.auto/).

The post is organized as follows:
- [Eclipse Cyclone DDS](#eclipse-cyclone-dds)
- [Getting Cyclone DDS](#getting-cyclone-dds)
  - [Option 1: install binaries](#option-1-install-binaries)
  - [Option 2: build from source](#option-2-build-from-source)
  - [Set Cyclone DDS as the default DDS](#set-cyclone-dds-as-the-default-dds)
- [Cyclone DDS on 96Boards Dockerhub images](#cyclone-dds-on-96boards-dockerhub-images)


***
## Eclipse Cyclone DDS

DDS is used by ROS2 as its middleware, which provides discovery, serialization and transportation. [Eclipse Cyclone DDS](https://projects.eclipse.org/projects/iot.cyclonedds) is an open-source implementation of the OMG Data Distribution Service (DDS) specification.

Eclipse Cyclone DDS is developed by [ADLINK](https://www.adlinktech.com/en/index). They joined the [Autoware Foundation](https://www.autoware.org/) as premium member and are also part of the [ROS2 TSC](https://www.adlinktech.com/en/News_19091802275611506).

[96Boards](https://www.96boards.org/) has joined the list of [Cyclone DDS adopters](https://iot.eclipse.org/adopters/?#iot.cyclonedds). If you want to enable Cyclone DDS by default for your ROS2 applications please follow the steps below.

## Getting Cyclone DDS

We have 2 options for getting Cyclone DDS into our board, we can either install the binaries or build it from source.

As a pre-requisite we need to have ROS2 installed in the board, we can use either Dashing or Eloquent releases.

**Note:** at the time of writing, not all Autoware.Auto dependencies are ported into ROS2 Eloquent so if you plan to use Cyclone DDS with Autoware.Auto you will need to install ROS2 Dashing.

#### Option 1: install binaries

If we connect the board to the internet we can simply `ssh` into the board and install Cyclone DDS via:
```
$ source /opt/ros/$ROS_DISTRO/local_setup.bash
$ apt install ros-$ROS_DISTRO-rmw-cyclonedds-cpp
```

#### Option 2: build from source

To build Cyclone DDS from source we need to:
- For ROS2 Dashing:
```
$ source /opt/ros/dashing/local_setup.bash
$ mkdir -p ros2_cyclonedds/src
$ cd ros2_cyclonedds/src
$ git clone https://github.com/ros2/rmw_cyclonedds -b dashing-eloquent
$ git clone https://github.com/eclipse-cyclonedds/cyclonedds -b V0.5.0
$ cd ..
$ colcon build
```

- For RO2 Eloquent:
```
$ source /opt/ros/eloquent/local_setup.bash
$ mkdir -p ros2_cyclonedds/src
$ cd ros2_cyclonedds/src
$ git clone https://github.com/ros2/rmw_cyclonedds -b dashing-eloquent
$ git clone https://github.com/eclipse-cyclonedds/cyclonedds
$ cd ..
$ colcon build
```

#### Set Cyclone DDS as the default DDS

To set it to be the default DDS we can add the following to the `bashrc` file:
```
$ echo "export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp" >> ~/.bashrc
$ source ~./bashrc
```

In addition, if we have built Cyclone DDS from source we will need to overlay our Cyclone DDS workspace after sourcing ROS2:
```
$ echo "source /opt/ros/$ROS_DISTRO/local_setup.bash" >> ~/.bashrc
$ echo "source /home/user/ros2_cyclonedds/install/local_setup.bash" >> ~/.bashrc
$ source ~./bashrc
```

## Cyclone DDS on 96Boards Dockerhub images

For convenience we have enabled Cyclone DDS by default for our [96Boards Dockerhub ROS images](https://hub.docker.com/r/96boards/ros/tags) and also for our [96boards/autoware:auto_20200501](https://hub.docker.com/r/96boards/autoware/tags) image.

To check that Cyclone DDS is being used we can do the following.
- For ROS2 Dashing:

We can check that the `RMW_IMPLEMENTATION` environment variable is set correctly as:
```
$ echo $RMW_IMPLEMENTATION
rmw_cyclonedds_cpp
```

- For ROS2 Eloquent:

We can use `ros2 doctor` utility as:
```
$ ros2 doctor -r
```
which will show that the middleware is `rmw_cyclonedds_cpp`.

![](/assets/images/blog/cyclonedds_check.png)

***

# Conclusion

In this blog post we have shown how to install Eclipse Cyclone DDS for our ROS2 applications development and how to set it up as the default one to use.
