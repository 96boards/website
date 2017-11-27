---
author: Manivannan Sadhasivam
comments: true
date: 2017-07-29 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/boot-linux-from-sd-card-uboot/
slug: boot-linux-from-sd-card-uboot
featured_image:
title: Booting Linux from SD card using U-Boot
image:
    featured: true
    path: /assets/images/blog/boot-linux-from-sd-card-uboot.jpg
    name: boot-linux-from-sd-card-uboot.jpg
    thumb: boot-linux-from-sd-card-uboot-thumb.jpg
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Device Tree
- DT Overlay
- Configfs
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- HiKey
- I Squared C
- I2C
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
- U-Boot
- SD
---

# **Introduction**

Often I hear from people that it'd be nice to have U-Boot running on 96Boards at full pace. Even though U-Boot is
supported for couple of our 96Boards, we are still lagging behind using the **nice to have** features of it. One of
which is extracting boot environment from uEnv.txt. This blog addresses this pitfall and also explains about how to
boot Linux from SD card using the environment from U-Boot's uEnv.txt.

# **U-Boot**

Das U-Boot (Universal Bootloader) is the the popular Open source bootloader for Embedded devices. It offers wide range
of flexibility in terms of booting from different sources and so on. Usually U-Boot will be put up as a secondary or later
stage bootloader for the SBC's. The reason behind that is, in most of the SoC's there will a ROM bootloader which gets
executed first. U-Boot binary is available in two flavours:

1. SPL - MLO
2. U-Boot - u-boot.img

SPL is the stripped version of the full fledged U-Boot binary. It is often used in cases where the memory available for
second stage bootloader is scarce or the second stage bootloader has to boot using internal RAM/Flash. In those cases,
SPL will initialize some externally connected peripherals like eMMC,SRAM etc.., and then it loads the final U-Boot onto
external SRAM.

But for Dragonboard, SPL is not needed as the U-Boot finds its place in third stage of the booting process and by the time
ample amount of external RAM and Flash is available for it to use. Below, is the booting process involved in Dragonboard410c
for U-Boot:

```
ROM bootloader---->LK bootloader---->U-Boot---->Linux Kernel
```
# **Boot Environment**

U-Boot supports two types of boot environment. One is the hard coded environment which is available as a part of the
binary and another is the extracted environment from SD card or eMMC. For Dragonboard, internal environment variables are
available in **include/configs/dragonboard410c.h** and external environment would be extracted from **uEnv.txt**
available from SD card's **ext4** partition.

Once the boot environment is extracted from **uEnv.txt** it will get imported into the environment table of U-Boot. Later
those environment variables could be seen by **printenv** command. It is also possible to pack the commands under one variable
and execute it using **run** command.

For instance, below is the environment variable contains command to load and import env from SD card.

```
"loadbootenv=if ext4load mmc 1:1 ${scriptaddr} ${bootenv}; then " \
                "echo Loaded environment from ${bootenv}; " \
                "run importbootenv; "\
            "fi;\0" \
```

The above variable could be executed by the following command:

```shell
=>dragonboard410c: run loadbootenv
```
# Booting Linux from SD card

Now, lets get into the detail of booting Linux from SD card using U-Boot. The complete guide containing the instructions is
avaialbe in [96Boards Documentation repository](https://github.com/Mani-Sadhasivam/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Guides/uboot-linux-sd.md).

First, SD card needs to be formatted in such as way that the first partition should be of **ext4** type. This is the place,
we will store the RFS (Root File System), Kernel image, dtb, uEnv.txt etc... Usually Kenrel image would be placed in **FAT**
partition and RFS would be in **ext4** partition. But, we are going to place the Kernel image under RFS itself.

After formatting SD card, download the OpenEmbedded RFS from 96Boards build, extract it and flash onto SD card's first partition. By
the end of this step, the first partition of SD card should have entire Root File System populated.

Now, build the Linux Kernel along with device tree using the instructions available in [release notes](http://builds.96boards.org/releases/dragonboard410c/linaro/debian/latest/).
Then, convert the generated Kernel image to the format recognized by U-Boot(uImage) using **mkimage** tool.


```shell
$ sudo apt-get install u-boot-tools
$ mkimage -A arm64 -O linux -C none -T kernel -a 0x80080000 -e 0x80080000 -n Dragonboard -d arch/arm64/boot/Image uImage
```
> Note: *arch/arm64/boot/Image* is inside the kernel directory

Once the image has been created successfully, you should get something similar to following output

```
Image Name:   Dragonboard
Created:      Sat Jul 29 15:15:27 2017
Image Type:   AArch64 Linux Kernel Image (uncompressed)
Data Size:    17349120 Bytes = 16942.50 kB = 16.55 MB
Load Address: 80080000
Entry Point:  80080000
```
After getting **uImage** copy it along with device tree blob **apq8016-sbc.dtb** to */boot* directory in SD card's ext4 filesystem.
Final step is to place the **uEnv.txt** file containing the environment variable for U-Boot. So, create a file uEnv.txt in
*/boot* driectory of SD and paste the following contents to it.

```
bootargs=root=/dev/mmcblk1p1 rw rootwait console=tty0 console=ttyMSM0,115200n8 rootfs=ext4 noinitrd selinux=0
bootcmd=ext4load mmc 1:1 ${kernel_addr_r} /boot/uImage; ext4load mmc 1:1 ${fdt_addr_r} /boot/apq8016-sbc.dtb; bootm ${kernel_addr_r} - ${fdt_addr_r}
uenvcmd=run bootcmd
```

Above environment variables instructs U-Boot to fetch Kernel image and device tree blob from */boot/* directory in SD
card's first partition. It also specifies the boot arguments (bootargs) to be passed by U-Boot to Linux kernel. When U-Boot
imports environment from **uEnv.txt** it scans for the **uenvcmd** and executes it.

Finally, eject SD card from host and insert it onto Dragonboard410c and boot it. U-Boot will automatically fetch the environment
and loads Kernel image and dtb onto RAM, then transferrs control to it. If any of the step fails, appropriate error message
will be shown in the U-Boot console.

> Note: By default, U-Boot console is available through on board UART in Dragonboard410c.

# **Conclusion**

I hope this blog has provided much information to boot Linux using U-Boot from SD card. More detailed steps are availabe in the
[Documentation repo](https://github.com/Mani-Sadhasivam/documentation/blob/master/ConsumerEdition/DragonBoard-410c/Guides/uboot-linux-sd.md).

As we always say, if you encounter any issues or have any suggestion please report it in comments/forum. We are glad to help you :-)
