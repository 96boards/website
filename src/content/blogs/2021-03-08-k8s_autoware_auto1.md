---
title: "96boards: Autoware everywhere | Autoware.Auto 3D Perception Stack using
  k8s on PCU"
author: Servando German Serrano
date: 2021-03-08T01:00:00.000Z
image: ../../assets/images/blog/k8s_percp.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, AutoCore, PCU, arm-autonomy
---

# Introduction

In our [previous blog post](https://www.96boards.org/blog/k8s_pilot_auto/) we showed how to we can use [Kubernetes (k8s)](https://kubernetes.io/) to create different deployments to replay and echo a rosbag2 data file. Though it was an interesting first step it falls far from being close to what an actual deployment on a vehicle would be.

In this blog post we take the setup further and use the [Autoware.Auto](https://gitlab.com/autowarefoundation/autoware.auto/AutowareAuto) software stack to reproduce the [3D perception](https://autowarefoundation.gitlab.io/autoware.auto/AutowareAuto/perception-stack-howto.html) demo using k8s.

This post is organized as follows:
- [Introduction](#introduction)
- [Autoware.Auto](#autowareauto)
- [PCU setup](#pcu-setup)
- [k8s setup](#k8s-setup)
- [Running the k8s pods](#running-the-k8s-pods)
- [Conclusion](#conclusion)

***

## Autoware.Auto

As we have covered in earlier posts, Autoware.Auto is the next generation successor of the Autoware.AI project through a complete rewrite of the different modules using ROS2 and improved methodology.

Following a succesful [Autonomous Valet Parking](https://discourse.ros.org/t/autoware-auto-automated-valet-parking-was-a-triumph/16662) demo, code and documentation cleanup, [Autoware.Auto 1.0.0](https://discourse.ros.org/t/autoware-auto-1-0-0-is-here/19085) has been released. We are using this release in this post.

## PCU setup

The first thing we need to do is install k8s in the PCU and laptop. To do so we have first flashed the PCU with Autocore's provided image as we explained in [this post](https://www.96boards.org/blog/autocore_pcu_1/). We have used the [latest release from AutoCore](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Resource_download.md#mpu-images) which, at the time of writing, is _20201214 Release Package_.

After getting the PCU SD card ready we can boot the board, `ssh` into it and install k8s as we did before [here](https://www.96boards.org/blog/cyclonedds_on_kubernetes/#installing-k8s).

**Note** We need to enable iptable forwarding rules on the PCU for the pods to communicate with each other, we can do so as:
```
$ iptables -P FORWARD ACCEPT
```

## k8s setup

As we mentioned above the main idea behind the k8s configuration is to split the Autoware.Auto software components into different deployments so they can be managed independently and run as individual services across the k8s cluster. In this demo we will be using 3 deployments:
- `udpreplay`: replays the Velodyne pcap data.
- `sensing`: 2-pod deployment for the front and rear Velodyne driver nodes.
- `perception3d`: multi-pod deployment for the robot state publisher, point cloud filter transform, ray ground classifier and euclidean cluster nodes.

Furthermore, we would expect that each deployment would use a docker image tailored to its needs rather than a more general one, so, instead of building the full Autoware.Auto we have put together 3 Docker images with the needed nodes for each deployment. These images can be found in the [96boards/autoware.auto](https://hub.docker.com/r/96boards/autoware.auto/tags?page=1&ordering=last_updated) dockerhub repo.

Taking this into account we are now ready to create the k8s cluster and the 3 deployments. In addition, as we did in the previous post we will be using Rviz2 on the laptop for visualization purposes.

## Running the k8s pods

We are now ready to get things running on k8s, for the fully detailed steps please check our [first post about k8s](https://www.96boards.org/blog/cyclonedds_on_kubernetes/#using-k8s). As a recap, we need to:

- Kick off the master node in the laptop.
![](/assets/images/blog/dds_k8s_master_setup.gif)
- Join the PCU as a worker node.
![](/assets/images/blog/dds_k8s_worker_setup.gif)
- Enable the [Flannel CNI add-on](https://github.com/coreos/flannel) and copy the Flannel environment variables to the PCU.

We can check that the worker node on the PCU has joined the cluster by running `kubectl get nodes` on the laptop as shown below.
![](/assets/images/blog/dds_k8s_nodes2.gif)

Now that our k8s cluster is up and running we just need to create our deployments. The yaml files are available [here](https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/).
```
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/udpreplay.yaml
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/sensing.yaml
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/autoware.auto-3dperception-demo/perception3D-demo.yaml
```
![](/assets/images/blog/k8s_percp_1.gif)

And the Rviz2 visualization on the laptop.
![](/assets/images/blog/k8s_percp_2.gif)

***

# Conclusion

In this post we have explored a bit further on splitting some Autoware.Auto modules using k8s. In addition we have used different Docker images for each deployment as it'll make it easier to update them when the time comes since they are lighter than a fully-built Autoware.Auto image. We will continue exploring what we can do with k8s in the near future so keep an eye to this space.
