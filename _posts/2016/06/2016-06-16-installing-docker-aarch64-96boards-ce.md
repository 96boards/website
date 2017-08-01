---
author: fletcherb_linaro
comments: true
date: 2016-06-16 19:28:03+00:00
layout: post
link: https//www.96boards.org/blog/installing-docker-aarch64-96boards-ce/
slug: installing-docker-aarch64-96boards-ce
featured_image: Docker_410c_projected.jpg
title: Installing Docker on aarch64 with the Reference Platform Build on a 96Boards
  CE-edition
wordpress_id: 15213
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- ARM
- ARMv8
- Breakout
- Bubblegum
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- container
- DB410c
- Docker
- dragonboard410c
- GPIO
- HiKey
- Library
- Linux
- Low speed expansion header
- Maker
- Mezzanine
- Open Embedded
- Open Hours
- OpenHours
- package
- Reference Platform
- rpb
- sensors
- UART
---

# About Docker


![Docker]({% asset_path "docker-img-1.png" %}){:class="img-responsive lazyload"}

Docker is “an open source project to pack, ship and run any application as a lightweight container.” It’s a very interesting tool from the Enterprise space, and docker.com lists its usecases as:




  * Continuous integration


  * DevOps


  * Big Data


  * Infrastructure Optimization


Docker allows, even on an embedded platform, to leverage Linux containers for isolation between installed packages. Linux containers offer an environment as close to possible as the one you'd get from a virtual machine but without the overhead that comes with running a separate kernel and simulating all the hardware. They rely on kernel security features such as namespaces, mandatory access control and control groups. The isolation provides a way for Docker allow you to install and run packages with conflicting dependencies on the same platform. It also provides a feature set honed in the data centre that allows you to automate and replicate the processes. Once a Docker Image has been built, an installed package and its dependencies can be deployed into a Docker container multiple times on multiple platforms. Through its use of overlay filesystems, Docker is low on resource usage and fast to deploy and boot. Docker is container-based, so unlike with memory-hungry virtual machines, an embedded board with 1GB of DRAM is a candidate to support it.

Docker is an exciting technology, and one reason to install and run it on a CE spec 96Boards like the DB410c or Hikey is that for some of us, it’s the most readily available 64-bit ARM hardware we can access to try it out.

I had my own specific further reasons to use Docker on an embedded board. I was looking at some packages that were painful to install and needed specific distros and distro versions. I only wanted to do the installation and configuration once and I didn’t want to have to handle multiple or ‘unsupported’ distros. Docker allows you to save images that you’ve built and also to automate the build steps for an image. Images can be based on top of existing images and all the steps can be recorded in a `Dockerfile` to re-create the image. I was also motivated by what the folks at [http://blog.hypriot.com/](http://blog.hypriot.com/) had acheived even on ARMv7 and wanted some of that too.

**The instructions to re-create my Docker install on 96Boards CE Edition are [here](https://github.com/96boards/documentation/blob/master/ConsumerEdition/CE-Extras/DockerCE.md).**

I aim to be using Docker in the coming months to deploy some applications onto my various CE Edition 96Boards without having to run multiple builds/installations. As a taster, here is a screenshot of 64 Docker containers, each with a separate container instance of Ubuntu, all started up and running on the Dragonboard.

![Screenshot (78)]({% asset_path "docker-img-2.png" %}){:class="img-responsive lazyload"}

As discussed in the 96Boards  (06/16/16) OpenHours session. All sessions are recorded and available in the [96Boards YouTube Channel](https://www.youtube.com/playlist?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk).

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](https//www.96boards.org/openhours/)


We look forward to seeing you at [Open Hours](https//www.96boards.org/openhours/) every Thursday, where we discuss current blogs along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

Please remember, if you get stuck, there are resources to help you through any 96Boards issues. Feel free to check out the [96Boards forums](https//discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](https://webchat.freenode.net) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!
