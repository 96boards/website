---
title: "96boards: Autoware everywhere | Multi-board Autoware.Auto 3D Perception
  Stack using k8s"
author: servando-german-serrano
date: 2021-03-19T01:00:00.000Z
image: ../../assets/images/blog/k8s_percp.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, AutoCore, PCU
---

# Introduction

Following our [previous work](https://www.96boards.org/blog/k8s_autoware_auto1/) to show how to distribute Autoware.Auto's modules to complete the 3D Perception demo it comes as a natural question to ask about the benefits of using k8s as opposed to plain Docker or the [ade-cli](https://gitlab.com/ApexAI/ade-cli) tool that is used within the Autoware.Auto official documentation to deploy the software.

Well, if you have been following the blog series we showed how to reproduce the [3D perception demo on a Hikey970](https://www.96boards.org/blog/autoware_auto_hikey970/) using plain docker, which is very similar to the ade-based steps in the documentation, where the level of manual involvement was quite high with multiple terminals to `ssh` into the board, launch nodes, etc. While it is true that we could put together a ROS2 launch file to kick-off all the nodes, we would still need to start the containers manually prior to using the launch file.

On the other hand, if we go down the k8s route, we still need to `ssh` into the board to add it to the k8s cluster but once that's done everything is managed through the master node which provides an easier way to deploy and manage the different components as services within the vehicle. These benefits come closer into play for "stable" software, hence both ways (k8s vs docker/ade) live together as they are meant to target different use cases, development vs closer to production.

In addition, using the k8s infrastructure helps us keep the services running by means of re-spawning if a services dies or while performing an update to a particular module (which we will explore in the near future). Furthermore, while the above is considered for a single board, when we take scalability into account we can introduce redundancies using a k8s cluster with multiple boards or specify nodes attending to board capabilities or interfaces, for example if we had a LIDAR plugged into a k8s node to perform some preprocessing on the data before feeding into the rest of the system so we could use multiple less capable hardware as opposed to a single higher end approach.

All these can be easily achieved thanks to the Eclipse Cyclone DDS middleware for ROS2 as the masterless discovery capabilities mean that we do not need to manually set up the different IP addresses for all the individual containers within each k8s pod.

In this blog we look at this last point. As a proof of concept instead of running the 3D Perception demo modules just on the PCU we will assume that the LIDAR data comes into a separate board ([Qualcomm® Robotics (RB3) Dragonboard-845c Development Platform](https://www.96boards.org/product/rb3-platform/)), where the LIDAR drivers are run, with the 3D pointcloud data in ROS2 topics being fed next into the PCU for rest of modules.

This post is organized as follows:

- [Introduction](#introduction)
- [Setting up the RB3](#setting-up-the-rb3)
- [k8s cluster bring up](#k8s-cluster-bring-up)
- [Assigning deployments to specific nodes](#assigning-deployments-to-specific-nodes)
- [Visualization](#visualization)
- [Conclusion](#conclusion)

---

## Setting up the RB3

To set up the RB3 board we just need to follow the steps [here](https://www.96boards.org/product/rb3-platform/) and then install Docker as we [showed in the past](https://www.96boards.org/blog/db845-ros2/#installing-docker).

We can then follow the default steps to [install k8s](https://www.96boards.org/blog/cyclonedds_on_kubernetes/#installing-k8s) as we did for the PCU.

**NOTE** we need to create the following symlink for kubelet to run nicely with its default settings.

```
$ ln -s /run/resolvconf /run/systemd/resolve
```

## k8s cluster bring up

Now that both boards are ready we just need to create the k8s cluster as usual:

- Kicking off the master node in the laptop first.
  ![](/assets/images/blog/k8s_multiboard_1.gif)

- Then joining the PCU and RB3 as worker nodes.
  ![](/assets/images/blog/k8s_multiboard_2.gif)

- Upon completion we can verify that the 3 nodes are up and running. RB3 named as _linaro-alip_ and PCU as _localhost_.
  ![](/assets/images/blog/k8s_multiboard_3.gif)

## Assigning deployments to specific nodes

As a recap for the 3D Perception demo we created 3 different deployment files and associated Docker images:

- `udpreplay`: replays the Velodyne pcap data.
- `sensing`: 2-pod deployment for the front and rear Velodyne driver nodes.
- `perception3d`: multi-pod deployment for the robot state publisher, point cloud filter transform, ray ground classifier and euclidean cluster nodes.

Since we will run the LIDAR drivers on the RB3 we will assing the `udpreplay` and `sensing` deployments to that node and the `perception3d` to the PCU. To do this we just need to modify the deployment files we had and add the keyword `nodeName` and the associated node name to each file as shown below.
![](/assets/images/blog/k8s_multiboard_4.gif)

Once modified we can just create the deployments as usual, which leads to each deployment being created in the right node.
![](/assets/images/blog/k8s_multiboard_5.gif)

For convenience the modified yaml files can be found [here](https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/multi_board) and can be applied directly as:

```
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/multi_board/udpreplay.yaml
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/multi_board/sensing.yaml
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/multi_board/perception3D-demo.yaml
```

## Visualization

Finally we can check that the system is working by using the laptop for visualization purposes as we did before.
![](/assets/images/blog/k8s_multiboard_6.gif)

---

# Conclusion

In this post we taken the 3D Perception demo further by combining the PCU with the RB3 in a k8s cluster. We have also seen that it is quite straighforward to deploy different Autoware.Auto modules in multiple boards by using the k8s infrastructure as opposed to manually doing the same. We will continue exploring what we can do with k8s in the near future so keep an eye to this space.
