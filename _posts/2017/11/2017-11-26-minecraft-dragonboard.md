---
title: Full PC Version of Minecraft on Dragonboard 410c
author: Sahaj Sarup
date: 2017-11-26 00:00:54+00:00
image:
    featured: true
    path: /assets/images/blog/minecraft.png
    name: minecraft.png
    thumb: minecraft_thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, Gaming, Mesa, dragonboard410c, Linux Gaming, minecraft, db410c, LWJGL, OpenGL, libjawt
featured-products: dragonboard410c
---

# **Introduction**

If you haven't heard of Minecraft,
> "Minecraft is a sandbox video game created and designed by Swedish game designer Markus "Notch" Persson, and later fully developed and published by Mojang. The creative and building aspects of Minecraft allow players to build with a variety of different cubes in a 3D procedurally generated world. Other activities in the game include exploration, resource gathering, crafting, and combat." -[Wikipedia](https://en.wikipedia.org/wiki/Minecraft)

What's even better is that since it is mostly written in Java, It works cross-platform i.e it is one of the few games that works natively on Linux.

Also, it is architecture independent, ie it can run on Arm... almost. Although the game itself is portable across architectures, LWJGL isn't. LWJGL provides a lightweight OpenGL extension for Java and that is what Minecraft uses for its graphics rendering since it's not architecture independent, we need to compile it from source.

# **Let's get (Mine)crafting**
  ![](https://i.imgur.com/h83jhs6.gif)

### **Step 1:** Operating systems
  - You should be running Debian build **[17.09](https://builds.96boards.org/releases/dragonboard410c/linaro/debian/17.09/)**
  - Make sure it is updated:
  ```shell
  sudo apt update
  sudo apt dist-upgrade
  ```


### **Step 2:** Dependencies
  - Install the following dependencies:
  ```shell
  sudo apt install gradle openjdk-8-jdk libx11-dev xorg-dev
  ```
  - Soft link libjawt
  ```shell
  sudo ln -s /usr/lib/jvm/java-8-openjdk-arm64/lib/aarch64/libjawt.so /usr/lib/libjawt.so
  ```
  - [Setup zram swap](https://www.96boards.org/documentation/consumer/dragonboard410c/guides/)



### **Step 3:** Compile LWJGL
  - Download source
  ```shell
  git clone https://github.com/LWJGL/lwjgl
  ```
  - Compile
  ```shell
  cd lwjgl
  ant generate-all
  ant compile_native
  ```
  - Copy Binaries
  ```shell
  mkdir -p ~/.minecraft/natives
  cp ~/lwjgl/libs/linux/liblwjgl.so ~/.minecraft/natives/
  cp ~/lwjgl/libs/linux/libopenal.so ~/.minecraft/natives/
  ```
  - Setup environment variable
  ```shell
  export _JAVA_OPTIONS='-Djava.library.path=/home/linaro/.minecraft/natives/'
  ```
  to make this permanent add the above line at the end of ~/.bashrc file.


### **Step 4:** Play Minecraft
  - Download Minecraft, jar from [https://minecraft.net/en-us/download/](https://minecraft.net/en-us/download/)
  - Make sure you have a Minecraft Login ID
  - Launch for the first time:
  ```shell
  java -jar <path to>/Minecraft.jar
  ```
  - Launch Minecraft consecutively:
  ```shell
  java -jar ~/.minecraft/launcher.jar
  ```
  Note 1: if there are performance issues, turn every graphics settings to minimum and keep in mind the Snapdragon 410E is a mid-range mobile SoC with a mid-range GPU.

  > Note 2: I have only tried and tested it on build 17.09
