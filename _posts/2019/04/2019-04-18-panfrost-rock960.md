---
title: Panfrost Open-Source GPU Driver on the Rock960
author: Sahaj Sarup
date: 2019-04-18 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/kmscube.jpg
    name: kmscube.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

Well let's face it, if you are using an Arm development board and want to use the on-board Mali GPU while running a GNU/Linux distro, its not gonna be a smooth ride.

Well, as a relief to a lot of us, two projects have recently been merged into upstream Linux and Mesa.

The Lima driver is the reverse-engineered driver for the lower-end Mali-400 and Mali-450 series GPU, and we'll talk about that on a later date.

Today I want to talk about Panfrost, and how to try it out on the Rock960.

# What's Panfrost?

[Panfrost](https://panfrost.freedesktop.org/) is a free and open source driver for Mali Midgard and Bifrost GPUs.

The driver is capable of running a few demos and has been upstream to Mesa & Linux (currently in linux-next). It has been tested on Rockchip RK3288/R3399, and Amlogic S912 with the Arm Mali-T764, Arm Mali-T864, and Arm Mali-T820MP3 GPUs respectively.

# What works?

I ended up testing the following programs
- kmscube
- glmark2
- weston

Others have also tested:
- super-tux-kart
- kodi

# What does it mean for for 96Boards?

This means that the [Rock960](/product/rock960/) can already run this driver.

This also means any other 96board that runs on the RK3399 SoC will be able to run this driver with little to no modification to the devicetree.

Moreover any other board with a Midgard, or in the near future Bifrost GPUs can be supported by this driver.

# How to install Panfrost on Rock960? The quick and dirty way ;)

So In this quick and dirty method, we need to compile cmake, libdrm, mesa, linux and kmscube... and we'll do it all natively on the rock960 :evil_laugh:

## 1. Setup:
- Make sure you have a fresh installation of ubuntu 16.04
    - [Ubuntu Downloads for ROCK960](/documentation/consumer/rock/downloads/ubuntu/)
- Connected to Ethernet via USB
    - Wifi doesn't seem to work on mainline kernel, something about missing firmware. Idk ask Mani.
- Rootfs is expanded:
    - Follow this [forum link.](https://discuss.96boards.org/t/gpt-pmbr-size-mismatch/5903/2)

## 2. Build Dependencies:
- Basic dependencies

    ```shell
    sudo apt update
    sudo apt dist-upgrade
    sudo apt build-dep mesa libdrm  # you may have to edit /etc/apt/sources.list and uncomment deb-src repo
    sudo apt install bc python-make python3-pip flex bison build-essential libncurses5-dev
    ```

- Install Cmake
    ```shell
    version=3.14
    build=1
    mkdir ~/temp
    cd ~/temp
    wget https://cmake.org/files/v$version/cmake-$version.$build.tar.gz
    tar -xzvf cmake-$version.$build.tar.gz
    cd cmake-$version.$build/
    ./bootstrap
    make -j4
    sudo make install
    ```
- More Dependencies
    ```bash
    sudo pip3 install meson ninja
    ```

> Note: These are to the best of my knowledge all the dependencies, if others may arise, hunt them down.

## 3. Download sources:
- Linux
    ```bash
    git clone https://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git --depth=1
    ```
- DRM
    ```bash
    git clone git clone https://gitlab.freedesktop.org/mesa/drm.git --depth=1
    ```
- Mesa
    ```bash
    git clone git clone https://gitlab.freedesktop.org/mesa/mesa.git --depth=1
    ```
- Kmscube
    ```bash
    git clone git clone https://gitlab.freedesktop.org/mesa/kmscube.git --depth=1
    ```

## 4. Compile and Install:
### Linux
- Setup:

    ```shell
    cd linux-next
    make defconfig
    make menuconfig
    ```

- In the menu-config TUI:
    - Disable loadable modules for simplicity
    - Navigate to to Drivers -> Graphics
    - Enable Panfrost
    - Save and exit
- Build:
    ```bash
    make -j6
    ```
- Brew some coffee.
- Install

    ```shell
    sudo mount /dev/mmcblk1p4 /boot
    sudo cp arch/arm64/boot/Image /boot/
    sudo cp arch/arm64/boot/dts/rockchip/rk3399-rock960.dtb /boot/
    ```

- Edit extlinux conf:
    ```bash
    vi /boot/extlinux/extlinux.conf
    ```
- Change the contents to:

    ```
    label kernel-4.4
    kernel /Image
    fdt /rk3399-rock960.dtb
    append  earlyprintk console=ttyS2,1500000n8 rw root=PARTUUID=b921b045-1d rootfstype=ext4 init=/sbin/init rootwait
    ```

- Reboot

### Drm
- Compile:
    ```shell
    cd drm
    ./autogen.sh
    ./configure --prefix=/usr
    make -j6
    ```
- Install:
    ```bash
    sudo make install
    ```

### Mesa
- Compile:
    ```shell
    mkdir build
    meson -Ddri-drivers= -Dvulkan-drivers= -Dgallium-drivers=panfrost,kmsro -Dlibunwind=false -Dplatforms=x11,drm,surfaceless -Dprefix=/usr build/
    ninja -C build/
    ```
- Drink the coffee you brewed earlier
- Install:
    ```bash
    sudo ninja -C build/ install
    ```
### kmscube
- Compile:
    ```shell
    cd kmscube
    ./autogen.sh
    ./configure --prefix=/usr
    make -j6
    ```
- Install
    ```bash
    sudo make install
    ```
## 5. Run:
- Running `kmscube` should show a rainbow cube rotating.
- Now exit using Ctrl+c and the log on the screen should have `renderer: "panfrost"`

# Demo During OpenHours

{% include media.html media_url="https://youtu.be/PTnv6B8HIMQ?t=7274" %}

# Open-Source GPU Driver BoF Session at connect

{% include media.html media_url="https://youtu.be/VTgDP3yNXI0" %}
