---
title: "96boards: Autoware everywhere | Autoware.AI and Hikey970"
author: Servando German Serrano
date: 2019-12-04T01:00:00.000Z
image: ../../assets/images/blog/awf_hikey970.png
image_name: awf_hikey970.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey970, Linaro,
  Linux, arm64, real time, ROS2, Autoware
---

# Introduction
This is the first entry of our "96boards: Autoware everywhere" blog series. With this blog series we will show how to use 96boards hardware to run different components of the Autoware software stack for autonomous vehicles.

### Autoware.AI
[Autoware.AI](https://www.autoware.ai/) is the world's first "All-in-One" open-source software for autonomous driving technology. It is based on ROS 1 and available under Apache 2.0 license. It contains the following modules:
- Localization is achieved by 3D maps and SLAM algorithms in combination with GNSS and IMU sensors.
- Detection uses cameras and LiDARs with sensor fusion algorithms and deep neural networks.
- Prediction and Planning are based on probabilistic robotics and rule-based systems, partly using deep neural networks as well.
- The output of Autoware to the vehicle is a twist of velocity and angular velocity. This is a part of Control, though the major part of Control stack commonly reside in the by-wire controller of the vehicle.

### Autoware.Auto
[Autoware.Auto](https://www.autoware.auto/) is a project supported by the [Autoware Foundation](https://www.autoware.org/). It is a clean slate rewrite of Autoware. Autoware.Auto applies best-in-class software engineering practices which include pull request reviews, pull request builds, comprehensive documentation, 100% code coverage, a coding style guide, and a defined development and release process, all managed by an open source community manager.

It also has crisply defined interfaces for different modules including messages and APIs and a software architecture designed for determinism such that will be possible to reproduce behaviors live and on development machines.


To kick things off we will first start outlining how to get [Autoware.AI's rosbag demo](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/ROSBAG-Demo) running on the headless Hikey970 and use a different machine for visualization.

The post is organized as follows:
- [Requirements](#requirements)
- [Getting Autoware.AI](#getting-autowareai)
  - [From source](#from-source)
  - [Docker](#docker)
- [Running the rosbag demo](#running-the-rosbag-demo)
  - [In Hikey970](#in-hikey970)
  - [In laptop](#in-laptop)

***
## Requirements
For the following steps you will need your Hikey970 to be accesible via SSH and, for an easier setup, have Docker installed on it. So, to get the board ready you can follow the steps [here](https://www.96boards.org/blog/hikey970-rt/) if you plan to also develop real time applications using ROS/ROS2 or just use the [Bionic Builder Tool](https://discuss.96boards.org/t/tool-bionic-builder-automated-kernel-ubuntu-builder-for-hikey970/7879) to get Ubuntu 18.04 working.

In addition, to install Docker you just need to follow the official steps to install docker on arm64 target for [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/). Though it is also possible to [install ROS Melodic](http://wiki.ros.org/melodic/Installation/Ubuntu) natively on the board running Ubuntu 18.04.

## Getting Autoware.AI

### From source
If you have opted for installing ROS natively on the board you can follow the [Autoware.AI source build instructions](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/Source-Build) to get it installed natively.

### Docker
If you have decided to go down the Docker route there are pre-compiled Autoware images in the [autoware/arm64v8 Dockerhub repository](https://hub.docker.com/r/autoware/arm64v8/tags). To pull and run one we just need to SSH to the board and follow the next steps:
- Create a `shared_dir` folder that will be mounted as a volume inside the docker container:
```
$ mkdir ~/shared_dir
```
we will use this folder to store the rosbag demo data.
- Clone the Autoware.AI's `docker` repository to make use of the convenience scripts:
```
$ git clone https://gitlab.com/autowarefoundation/autoware.ai/docker.git
$ cd docker/generic
$ ./run.sh -c off -i autoware/arm64v8 -t 1.13.0
```
Which will pull and run `1.13.0-melodic` Autoware image. Once inside the container if we do `ls` we will see:
```
$ ls
Autoware  shared_dir
```

## Running the rosbag demo

**NOTE:** Due to memory constraints on the Hikey970 we will not be able to run all the rosbag demo components in the board. So we will run `my_map.launch`, `my_sensing.launch` and `my_localization.launch` in the Hikey970 and will use a separate laptop for visualization and to run `my_detection.launch`, `my_mission_planning.launch` and `my_motion_planning.launch`. This means you will also need to get Autoware.AI's docker repo in the laptop as explained [above](#docker).

If you have chosen to just install Ubuntu 18.04 using the Bionic Buil Tool and use a monitor with the board you can follow the default [rosbag demo steps](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/ROSBAG-Demo) since you have access to the GUI. For the headless approach please keep reading.

To be able to run the demo we need to download the [demo data](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/ROSBAG-Demo#demo-data) and extract it inside the `shared_dir` folder. We will then have the following:
```
$ ls shared_dir
data  sample_moriyama_150324.bag
```
To run headless we will also need to setup some Autoware parameters. We can `wget` the setup file into the `shared_dir`:
```
$ cd ~/shared_dir
$ wget http://people.linaro.org/~servando.german.serrano/autoware/headless_setup.yaml
```

To run the each component of the demo independently we will need **4** terminals where we have ssh'ed into the Hikey970 and **4** more terminals in the separate laptop.

### In Hikey970
In Terminal 1 we run our container and, within it, make an `.autoware` folder and copy the `data` folder over:
```
$ ./run.sh -c off -i autoware/arm64v8 -t 1.13.0
$ mkdir ~/.autoware
$ cp -r ~/shared_dir/data ~/.autoware/data
```
We also need to set some environment variables following the [ROS in Multiple Machines tutorial](http://wiki.ros.org/ROS/Tutorials/MultipleMachines) to be able to run the visualization in a laptop. To avoid repeating the same setup steps in each of the terminals we can do:
```
$ echo "export ROS_MASTER_URI=http://BOARD_IP_ADDRESS:11311" >> ~/.bashrc
$ source ~/.bashrc
```
inside the container in Terminal 1, where `BOARD_IP_ADDRESS` is the current IP address of your Hikey970.

In one of the other terminals we check the name of the created container, which will be something like:
```
$ docker ps
CONTAINER ID        IMAGE                             COMMAND                CREATED             STATUS              PORTS               NAMES
3dc4cbcd8519        autoware/arm64v8:1.13.0-melodic   "/tmp/entrypoint.sh"   39 seconds ago      Up 39 seconds                           goofy_lamarr
```
We can now access the same container on each of the terminals so that we do not need set the same environment variables on each individual container. On terminals 2 to 4 we do:
```
$ docker exec -it -u autoware goofy_lamarr /bin/bash
$ cd ~
$ source Autoware/install/setup.bash
```
1. Hikey970 -> Terminal 1
```
$ roscore &
$ rosparam load ~/shared_dir/headless_setup.yaml &
$ rosbag play --pause ~/shared_dir/sample_moriyama_150324.bag --clock
```
2. Hikey970 -> Terminal 2
```
$ roslaunch autoware_quickstart_examples my_map.launch
```
3. Hikey970 -> Terminal 3
```
$ roslaunch autoware_quickstart_examples my_sensing.launch
```
4. Hikey970 -> Terminal 4
```
$ roslaunch autoware_quickstart_examples my_localization.launch
```

### In laptop

We launch the Autoware.AI's container in terminal 1
```
$ cd ~/docker/generic
$ ./run.sh -c off -t 1.13.0
$ echo "export ROS_MASTER_URI=http://BOARD_IP_ADDRESS:11311" >> ~/.bashrc
```

After the container is launched, we need to check its name with `docker ps` and `docker exec` on it followed by sourcing the `Autoware/install/setup.bash` file as we did with the Hikey970 for terminals 2 to 4.

Afterwards:
1. Laptop -> Terminal 1
```
$ rosrun rviz rviz
```
and load the default config as per step 5 in [here](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/ROSBAG-Demo#steps).
2. Laptop -> Terminal 2
```
$ roslaunch autoware_quickstart_examples my_detection.launch
```
3. Laptop -> Terminal 3
```
$ roslaunch autoware_quickstart_examples my_mission_planning.launch
```
4. Laptop -> Terminal 4
```
$ roslaunch autoware_quickstart_examples my_motion_planning.launch
```

Now, it is certainly possible that if you have established the laptop-Hikey970 connection via Wifi attempting to use the default `config` file as per step 5 in [the rosbag demo steps](https://gitlab.com/autowarefoundation/autoware.ai/autoware/wikis/ROSBAG-Demo#steps) will show errors and the full demo visualization will not be achieved.

To check that the localization is running appropriately in the board instead of running `rviz` in the laptop we can do:
```
$ roslaunch lidar_localizer ndt_matching_monitor.launch &
$ rostopic echo /ndt_monitor/ndt_status
```
Once the ndt matching algorithm is able to localize based on the lidar readings and the pointcloud map you will see `data: "NDT_OK"` in the terminal.

***

# Conclusion

In this blog post we have explored how to run the sensing and localization components of Autoware.AI on the Hikey970. This shows that it is possible to use affordable hardware for development purposes of certain components of Autoware and sets the basis for how to run it headless as opposed to using the GUI. In addition we can also try with another board for the other components that we currently run in the laptop, which is something we will show in other blog post in the near future.

Next time, we will give a go at Autoware.Auto on the Hikey970 and we will follow the [Autoware.Auto 3D Perception Stack demo](https://autowarefoundation.gitlab.io/autoware.auto/AutowareAuto/perception-stack.html), so keep an eye to this space.
