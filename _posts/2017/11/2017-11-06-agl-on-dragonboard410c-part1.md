---
title: Automotive Grade Linux on Dragonboard410c - Part 1
author: Manivannan Sadhasivam
date: 2017-11-06 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/agl.jpg
    name: agl.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, AGL, Automotive
---

# **Introduction**

Hello and Welcome to **Part 1** of our new blog series about **Automotive Grade Linux on Dragonboard410c**.
This blog series is intended to provide a base platform for the community to develop automotive applications
using Dragonboard410c running AGL. In this part, we discuss about building and deploying AGL on Dragonboard410c.

# **AGL**

[Automotive Grade Linux](https://www.automotivelinux.org/) is a collaborative open source project
that is bringing together automakers, suppliers and technology companies to build a Linux-based, open
software platform for automotive applications that can serve as the de facto industry standard.
Adopting a shared platform across the industry reduces fragmentation and allows automakers and
suppliers to reuse the same code base, leading to rapid innovation and faster time-to-market for
new products.

AGL is a project of [The Linux Foundation](https://www.linuxfoundation.org/). Unlike other automotive based
distributions, AGL provides the end to end solution for the softwares in vehicle such as ADAS, Infotainment,
HUD, Telematics/Connected car, Autonomous driving, Functional safety etc... AGL's moto is to provide a single
unified operating system for the vehicles.

# **AGL on Dragonboard410c**

AGL is officially supported on [Dragonboard410c](https://at.projects.genivi.org/jira/browse/GDP-226). Adding
board support for AGL is not that much difficult since AGL is based on [Yocto Project](https://www.yoctoproject.org/).
Only the meta-layer of the corresponding board and some tweaks are required.

For Dragonboard410c, meta layer used is the [meta-qcom](https://git.automotivelinux.org/AGL/AGL-distro/tree/meta-qcom) from
OE. It has the recipies for the full software stack to make it functional.

Enough theory, now we will move onto the practical stuffs :-)

## **Hardware required**

  1. [Dragonboard410c](/product/dragonboard410c/)

  2. [Touch screen LCD](https://www.seeedstudio.com/Raspberry-Pi-HDMI-LCD-%287-inch%29-p-2763.html)

  3. [HDMI cable](https://www.seeedstudio.com/1.5M-HDMI-to-HDMI-male-lead-cable-p-1502.html)

  4. [Power adapter](https://www.96boards.org/product/power/)

## **Packages required**

```shell
$ sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat libsdl1.2-dev xterm cpio curl
```

## **Downloading AGL source code**

AGL uses [repo](https://source.android.com/source/using-repo) tool for maintaining repositories. We need to download
the source on the host machine and cross compile it for Dragonboard410c.

```shell
$ export AGL_TOP=$HOME/workspace_agl
$ mkdir -p $AGL_TOP
$ mkdir -p ~/bin
$ export PATH=~/bin:$PATH
$ curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
$ chmod a+x ~/bin/repo
```
Next, download the stable branch of AGL.

```shell
$ cd $AGL_TOP
$ repo init -b dab -m dab_4.0.2.xml -u https://gerrit.automotivelinux.org/gerrit/AGL/AGL-repo
$ repo sync
```
> Note: As of writing latest stable branch of AGL is 4.0.2. Always download the most recent stable release.

## **Building AGL**

Now, build the **agl-demo-platform** for Dragonboard410c.

```shell
$ source meta-agl/scripts/aglsetup.sh -m dragonboard-410c agl-demo  agl-appfw-smack  agl-devel  agl-netboot
$ bitbake agl-demo-platform
```

The build will take quite some time depending on the host machine configuration. So, go and take a nap for now :D

## **Flashing AGL onto Dragonboard410c**

Once the build has been completed, we have to flash the boot and rootfs images onto Dragonboard410c. Now, boot Dragonboard
in fastboot mode by following the instructions [here](https://www.96boards.org/documentation/consumer/dragonboard410c/installation/).

```shell
$ cd $AGL_TOP/build/tmp/deploy/images/dragonboard-410c
$ sudo fastboot flash boot boot-dragonboard-410c.img
$ sudo fastboot flash rootfs agl-demo-platform-dragonboard-410c.ext4
```
Once, flashing is completed reboot the board and the board should boot into AGL and the homescreen shuld be visible as below:

{% include image.html name="agl.jpg" alt="Your alternate text." %}

Also, you should be able to login via serial console also by plugging an [UART Mezzanine](https://www.96boards.org/product/uartserial/)
on top of Dragonboard410c. This will be really handly for debugging purposes.

## **Workaround for no output**

Sometimes, the home screen won't be visible straightaway and this needs us to tweak some screen settings to get
it working. The display which is mentioned in **Hardware required** section will work out of the box but most
of the displays need to be configured.

Login using the serial console as **root** and look for the **Output Section** in ***/etc/xdg/weston/weston.ini***
like below:

```
[output]
name=HDMI-A-1
mode=1024x768
transform = 270
```
where,

1. **name** mentions the name of the display connected to Dragonboard.
2. **mode** is the display resolution
3. **transform** is the screen rotation

Change the above-mentioned variables according to your screen, then save and reboot the board. Display should work now :)

# **Conclusion**

I hope this blog post provided much information about booting AGL on Dragonboard410c. If you encounter any issues and unable to solve them (or) you have solved the issue by yourself, please do share with us in comments below. Stay tuned
for the next part!
