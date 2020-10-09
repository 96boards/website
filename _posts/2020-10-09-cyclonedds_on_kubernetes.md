---
title: "96boards: Autoware everywhere | Running Cyclone DDS on Kubernetes"
author: Servando German Serrano
date: 2020-10-09 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/pcu_top_view.png
    name: pcu_top_view.png
categories: blog
series: "96boards: Autoware everywhere"
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Linaro, Linux, arm64, real time, ROS2, Autoware, AutoCore, PCU, arm-autonomy
---

# Introduction
[Kubernetes (k8s)](https://kubernetes.io/) is an open-source system for automating deployment, scaling, and management of containerized applications. Kubernetes allows us to easily handle multiple distributed applications that might need to be deployed, managed (scaling up or down) and updated on a regular basis.

In this post we explore how to use k8s to deploy two Cyclone DDS based applications on Autocore's PCU and whether introducing the k8s infrastructure impacts the performance of Cyclone DDS. In order to do so we will use the [ddsperf tool](https://github.com/eclipse-cyclonedds/cyclonedds/tree/master/src/tools/ddsperf) that is available as part of Cyclone DDS.


This post is organized as follows:
- [Installing k8s](#installing-k8s)
- [Running the performance test](#running-the-performance-test)
  - [Docker containers](#docker-containers)
  - [Using k8s](#using-k8s)
  - [Performance comparison](#performance-comparison)


***

## Installing k8s

The first thing we need to do is install k8s in the PCU. To do so we have first flashed the PCU with Autocore's provided image as we explained in [this post](https://www.96boards.org/blog/autocore_pcu_1/).

After getting the PCU SD card ready we can boot the board and `ssh` into it. To get k8s installed we are following [these steps](https://kubernetes.io/docs/tasks/tools/) from the k8s documentation.

To get `kubectl` installed:
```
$ sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2 curl
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
$ sudo apt-get update
$ sudo apt-get install -y kubectl
```

**Pending:** We install now `minikube` as:
```
$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-arm64
$ chmod +x minikube
$ sudo install minikube /usr/local/bin/
```

## Running the performance test

As part of this post we have built a suitable [Docker image](https://hub.docker.com/layers/96boards/pcu/cyclone_k8s/images/sha256-58de4619573d6494344303b108fc68ddaec17e45184dc1d29216eda961236565?context=explore) which contains a compiled Cyclone DDS and a couple of its examples.

Now that the PCU is set up and running with k8s we are ready to run the performance test for Cyclone DDS. To do so we are using the `perftest` script available in the `examples/perfscript` folder within the Cyclone DDS source code. This script relies on having `ssh` connection between the multiple machines that run the ping-pong or sub-pub sides of the performance tests.

To avoid security issues between containers, as we would need to enable a common key pair for the container image to allow the automatic ssh connection without password, we have modified the `perftest` slightly and split it in 2 pieces which we can run independently for each deployment. The split scripts are available as part of our Docker image and are not meant to replace the original `perftest` script since the split has not been done in a clean way, i.e. just commenting and deleting what was not needed for the sake of this blog post and test.

### Docker containers

Since we are going to assess the impact of the k8s infrastructure in the Cyclone DDS performance we need to first run the test manually using 2 docker containers. We will use 3 terminals where we have ssh'ed into the PCU.

First, we pull the docker image from Docker Hub.
```
$ docker pull 96boards/pcu:cyclone_k8s
```

We will use 2 terminals to start 2 containers and the other to create a network and connect the running containers as we show below.

![](/assets/images/blog/dds_k8s_containers.gif)

Now that the containers are running we can use the split scripts to run the performance test as:
```
./../../cyclonedds/examples/perfscript/perftest_local
```
and
```
./../../cyclonedds/examples/perfscript/perftest_remote
```
We run both scrips at the same time using the `Broadcast group` option in `terminator` as can be seen.
![](/assets/images/blog/dds_k8s_containers_test.gif)

After the test is finished the data we need will be in the `subCont` container named `sub.log`

### Using k8s

As we have seen above, even just running a couple of containers needs us to be quite involved. Let's try now running the performance test through k8s deployments.

We can download the k8s deployments manifest files as:
```
$ wget https://people.linaro.org/~servando.german.serrano/pcu/k8s/cyclone-perftest-sub.yaml
$ wget https://people.linaro.org/~servando.german.serrano/pcu/k8s/cyclone-perftest-pub.yaml
```

We start `minikube`:
```
$ minikube start
```
![](/assets/images/blog/dds_k8s_minikube_start.gif)

And then we use the deployment files to kick off the k8s pods as:
```
$ kubectl apply -f cyclone-perftest-sub.yaml
$ kubectl apply -f cyclone-perftest-pub.yaml
```
We can apply both deployments at the same time by using the `Broadcast group` in the `terminator` application as shown below.
![](/assets/images/blog/dds_k8s_group.gif)

And that's it for running the performance test, we just need to wait now for the test to be finished and we can copy the `sub.log` file from the `cyclonedds-pong` pod as:

```
$ kubectl cp cyclonedds-pong-75965854d9-r8flm:/usr/local/sub.log ./sub.log
```

### Performance comparison

Following the completion of both approaches for the performance testing we can now plot both sets of results together to compare them.

We need first to preprocess the subcriber logs. To do so we use the appropriate `extract` script from the [`perfscript`](https://github.com/eclipse-cyclonedds/cyclonedds/tree/master/examples/perfscript) folder of the Cyclone DDS source code.

**TO BE COMPLETED**

***

# Conclusion
