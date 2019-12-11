---
title: "96boards: Autoware everywhere | Bridging .AI and .Auto in the Hikey970"
author: Servando German Serrano
date: 2019-12-10 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/awf_white.png
    name: awf_white.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey970, Linaro, Linux, arm64, real time, ROS2, Autoware
---

# Introduction

We have so far [deployed Autoware.AI](https://www.96boards.org/blog/autoware.ai_hikey970/) and [Autoware.Auto](https://www.96boards.org/blog/autoware.auto_hikey970/) on a Hikey970. It is now time to bridge both software stacks together so we can use the improved software of .Auto but still run functionalities of .AI that have not been ported yet. We will outline how to use the Velodyne driver from .Auto along with the NDT matching algorithm from .AI.

The post is organized as follows:
- [Requirements](#requirements)
- [Getting ros1_bridge](#getting-ros1_bridge)
  - [From source](#from-source)
  - [Docker](#docker)
- [Running the 3D Perception Stack demo](#running-the-3d-perception-stack-demo)

***

## Requirements
To be able to follow the steps you should have followed the previous posts in the series and have .AI and .Auto available in your Hikey970.

For visualization purposes you also need a laptop with ROS2 installed natively or through a docker image.

## Getting ros1_bridge

The [ros1_bridge](https://github.com/ros2/ros1_bridge/blob/master/README.md) can be installed from binaries or compile from source if you need custom messages. For the time being we will use the default ROS messages and so we can install the bridge from the available binaries.

### From binaries

docker run -it --rm --privileged --net=host -u linaro 96boards/ros:ros1_bridge /bin/bash -c "source /opt/ros/melodic/setup.bash && source /opt/ros/dashing/local_setup.bash && ros2 run ros1_bridge dynamic_bridge --bridge-all-topics"



### Docker
For evaluation purposes an Autoware.Auto docker image with a default root `linaro` user is available at the [96boards/autoware](https://hub.docker.com/repository/docker/96boards/autoware) Dockerhub repo. Please note that this image is likely not to be updated regularly and some of the latest Autoware.Auto functionalities might not be available. To make use of the latest capabilities please follow the [above instructions](#from-source).
To get the image please do:
```
$ docker pull 96boards/autoware:auto
```

## Running the 3D Perception Stack demo

- _Terminal 1_:
```
$ rviz2 -d autoware.rviz
```
- _Terminal 2_:
```
$ rviz2 -d autoware_voxel.rviz
```

Now we need to `ssh` into the Hikey970 in **4** terminals and then we need to do the following:

1. First, to get the demo data you can download it manually to the laptop and then `scp` the file to the board or try the following in the Hikey970 (if you followed our [previous post](https://www.96boards.org/blog/autoware.ai_hikey970/) you will already have a `shared_dir`, otherwise please `mkdir shared_dir` before doing the steps below). So, in _Terminal 1_:
```
$ cd shared_dir
$ wget http://people.linaro.org/~servando.german.serrano/autoware/autoware.auto_get_demo_data
$ chmod +x autoware.auto_get_demo_data
$ ./autoware.auto_get_demo_data
```
If the download link has not changed the script will download the file. Depending on the internet connection it will take some time to complete (the file is around 900Mb).

2. In _Terminal 1_, depending on the option you chose above:
  - For the [docker](#docker) option above please do:
```
$ docker run -it --rm --privileged --net=host -u linaro -v ~/shared_dir:/home/linaro/shared_dir:rw 96boards/autoware:auto /bin/bash
$ cd ~
$ source AutowareAuto/install/setup.bash
```
  - For the [source](#from-source) option:
```
$ docker run -it --rm --privileged --net=host -u linaro -v ~/shared_dir:/home/linaro/shared_dir:rw -v ~/AutowareAuto:/home/linaro/AutowareAuto:rw 96boards/ros:mel_dash /bin/bash
$ cd ~
$ source AutowareAuto/install/setup.bash
```

3. In terminals 2 to 4 we need to access the running container as we did [here](https://www.96boards.org/blog/autoware.ai_hikey970/#in-hikey970) but using the `linaro` user:
```
$ docker exec -it -u linaro CONTAINER_NAME /bin/bash
$ cd ~
$ source AutowareAuto/install/setup.bash
```

4. _Terminal 1_:
```
$ udpreplay ~/shared_dir/route_small_loop_rw-127.0.0.1.pcap
```

5. _Terminal 2_:
```
$ ros2 run velodyne_node velodyne_cloud_node_exe __params:=/home/"${USER}"/AutowareAuto/src/drivers/velodyne_node/param/vlp16_test.param.yaml
```

6. _Terminal 3_:
```
$ ros2 run ray_ground_classifier_nodes ray_ground_classifier_cloud_node_exe __params:=/home/"${USER}"/AutowareAuto/src/perception/filters/ray_ground_classifier_nodes/param/vlp16_lexus.param.yaml
```

7. _Terminal 4_:
```
$ ros2 run voxel_grid_nodes voxel_grid_cloud_node_exe __params:=/home/"${USER}"/AutowareAuto/src/perception/filters/voxel_grid_nodes/param/vlp16_lexus_centroid.param.yaml
```

If everything went fine we will be able to visualize the demo point cloud and downsampled one in the running `rviz2` GUIs as can be seen in the image below.

![](/assets/images/blog/autoware_auto_hikey970.png)

***

# Conclusion

In this blog post we have added Autoware.Auto to our board and run the 3D Perception Stack demo. With this we now have Autoware.AI and Autoware.Auto in the same hardware so in the next post we will see how to link the 2 stacks together through the `ros1_bridge`, so keep an eye to this space.
