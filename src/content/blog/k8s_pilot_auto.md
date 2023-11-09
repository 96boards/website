---
title: "96boards: Autoware everywhere | K8s-based Autoware deployment on PCU"
author: servando-german-serrano
date: 2021-02-26T01:00:00.000Z
image: ../../assets/images/blog/pcu_top_view.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux,
  arm64, real time, ROS2, Autoware, AutoCore, PCU, arm-autonomy
---

# Introduction

In our [previous blog post](https://www.96boards.org/blog/cyclonedds_on_kubernetes/) we showed how to setup a [Kubernetes (k8s)](https://kubernetes.io/) cluster using a laptop as the master node and Autocore's PCU as the worker node to deploy the different k8s pods. To test the setup we run a minimal deployment using the [ddsperf tool](https://github.com/eclipse-cyclonedds/cyclonedds/tree/master/src/tools/ddsperf) that is available as part of Cyclone DDS.

In this first exploration we are going to create 2 k8s single-pod deployments on the PCU:

- One that will read a rosbag data file. This data file has been recorded by TierIV using the new architecture implementation.
- The other will echo the `/sensing/imu/imu_data` topic that is being published by the other pod.

In addition we are going to kick off Rviz2 and the rqt-image-view packages from ROS2 in the laptop to visualize the data. For this demo we are setting the pods to use the `hostNetwork` as both k8s nodes are in the same local network.

This post is organized as follows:

- [Introduction](#introduction)
- [New Autoware Architecture Proposal](#new-autoware-architecture-proposal)
- [PCU setup](#pcu-setup)
- [Running the k8s pods](#running-the-k8s-pods)
- [Conclusion](#conclusion)

---

## New Autoware Architecture Proposal

To improve the development of Autoware capabilities TierIV has developed a [new Architecture](https://github.com/tier4/AutowareArchitectureProposal.proj/blob/master/design/Overview.md). This architecture provides a layered approach to the different software stack components and definition of the interfaces between modules. We will use the [ros2 v0.5.0 tag](https://github.com/tier4/AutowareArchitectureProposal.iv/tree/v0.5.0) of the Pilot.Auto software stack which is built using the new architecture as reference.

## PCU setup

The first thing we need to do is install k8s in the PCU and laptop. To do so we have first flashed the PCU with Autocore's provided image as we explained in [this post](https://www.96boards.org/blog/autocore_pcu_1/). We have used the [latest release from AutoCore](https://github.com/autocore-ai/autocore_pcu_doc/blob/master/docs/Resource_download.md#mpu-images) which, at the time of writing, is _20201214 Release Package_.

After getting the PCU SD card ready we can boot the board, `ssh` into it and install k8s as we did before [here](https://www.96boards.org/blog/cyclonedds_on_kubernetes/#installing-k8s).

**Note** We need to enable iptable forwarding rules on the PCU for the pods to communicate with each other, we can do so as:

```
$ iptables -P FORWARD ACCEPT
```

## Running the k8s pods

We are now ready to get things running on k8s, for the fully detailed steps please check our [previous blog](https://www.96boards.org/blog/cyclonedds_on_kubernetes/#using-k8s). As a recap, we need to:

- Kick off the master node in the laptop.
  ![](/assets/images/blog/dds_k8s_master_setup.gif)
- Join the PCU as a worker node.
  ![](/assets/images/blog/dds_k8s_worker_setup.gif)
- Enable the [Flannel CNI add-on](https://github.com/coreos/flannel) and copy the Flannel environment variables to the PCU.

We can check that the worker node on the PCU has joined the cluster by running `kubectl get nodes` on the laptop as shown below.
![](/assets/images/blog/dds_k8s_nodes2.gif)

Now to deploy the pods on the PCU node we are going to use the `rosbag-echo-pod.yaml` k8s deployment file available [here](https://people.linaro.org/~servando.german.serrano/pcu/k8s/). This file starts the 2 deployments we have mentioned earlier, a rosbag replay deployment and another to echo the IMU data. We can start both deployments as:

```
$ kubectl apply -f https://people.linaro.org/~servando.german.serrano/pcu/k8s/rosbag-echo-pod.yaml
```

![](/assets/images/blog/k8s_rosbag_depl.gif)

We can see that both pods are now running and they have been deployed on the PCU node (named `localhost`). To check that the rostopic pod is receiving data we can get the logs from the pod as:

```
$ kubectl logs --follow rostopic-echo-59967f6cc5-lpgjm
```

![](/assets/images/blog/k8s_rostopic.gif)

Now, we can use the laptop to visualize some of the LIDAR data that it's being replayed in Rviz2.
![](/assets/images/blog/k8s_vis.gif)

---

# Conclusion

In this post we have shown how to deploy a couple of k8s pods on the PCU. We can take this initial setup as reference to explore further splitting the different Autoware modules into individual pods that can be managed using k8s.
