---
author: davidm
comments: true
date: 2016-10-14 21:53:38+00:00
layout: post
link: https://www.96boards.org/blog/how-to-develop-on-your-96boards/
slug: how-to-develop-on-your-96boards
image:
    featured: true
    path: /assets/images/blog/17-1.jpg
    name: 17-1.jpg
title: How to develop on your 96Boards
wordpress_id: 17758
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARM development
- ARMv8
- compiler
- Consumer IoT
- DB410c
- dragonboard410c
- HiKey
- Linux
- Open Embedded
- Reference Platform
- rpb
- toolchain
---

# Introduction


I was asked recently: “How do I do development for 96Boards? Do I use the cross compiler environment that I wrote about in one of my prior blogs([1](/blog/cross-compile-files-x86-linux-to-96boards/), [2](/blog/eclipse-x86-linux-cross-compile-arm-linux/) , [3](/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)) or something else?” Well it’s really something else, I was some what mystified when I was asked to write about using a cross compiler environment since I never use them when working with 96Boards. I develop directly on my 96Boards, using C, C++, Python, html, etc. The boards are fast enough and generally have enough RAM to make it quite easy. Only on the larger projects will you run out of RAM, i.e doing a Linux kernel compile will run a 1GB of RAM system out of RAM, but this is easily fixed. I also don’t use an IDE on my 96Boards because it takes up too much space, both storage and RAM, and personal preference. I use make files and C or Python, even when I’m doing X86 development.


# Assumptions


For the purpose of this blog, we will be making some assumptions: I am using a DragonBoard 410c today, but this should work on all CE(Consumer Edition), and can work on EE(Enterprise Edition) 96Boards as well.

However if you are using an EE 96Boards you likely have a lot of RAM and might not need a swap drive, so only use this if you really need too. Also, the EE board might only have a SATA interface for a drive, in which case these blog instructions will only be somewhat applicable. When partitioning the SATA drive leave room for a swap partition on the SATA drive. If you have a SATA drive that is where your root partition is, you should just mount the swap drive on boot like what is normally done on X86 Linux.

Also the [EE 96Boards Specification](https://github.com/96boards/documentation/blob/master/Specifications/96Boards-EE-Specification.pdf) does not require an HDMI port so you may be on your own getting a console, you may need to install a PCIE video card for a display or connect via the serial console, or the board might have an HDMI output, or VGA, the EE specification does not require an output beyond a serial console so you’ll need to determine what your EE board has for console out and use that.

You are connected to the Internet, if not connect, this Blog won’t work without an Internet connection.




  * CE 96Boards of your choice, running a recent Linaro copy of Debian or Ubuntu Linux.


  * USB Keyboard and mouse/touchpad (recommend an all in one keyboard/touchpad since it only takes up a single USB connector).


  * If using a CE 96Boards, a USB Ethernet dongle (recommended for highest speed of downloading). EE 96Boards have hardware Ethernet onboard.


  * Powered USB hub (if needed for USB connections).


  * If using a CE 96Boards an HDMI monitor attached to the HDMI connector.


  * Update all packages in the Linux image using apt-get update/upgrade/dist-upgrade process




# Swap Space on a micro-SD card


First things first, even with a board with 2GB of RAM, I prefer to have some spare RAM space, so I make use of the micro-SD card slot that all of the CE 96Boards have, to add swap space. Using a high speed micro-SD card, preferably a category 10 micro-SD card vs. the cheaper lower category micro sd cards, but the choice is yours, how valuable is your time? Since the intent of a swap partition or swap file is to swap pages of RAM into temp storage when not actively needed it makes sense to me to make that space as fast as it can be, it’s still going to be orders of magnitude slower than actual RAM. How you divide up the micro-SD card is your choice. You can make it all swap space or you can make some of it swap space and some of it require storage space, your call. For the purposes of this blog, I’m going to make the entire card a swap partition, which will be overkill since the smallest card I have is a 32GB sized card.


## Creating a swap partition


You will only do this once, once you have a micro-SD card formatted for swap you can keep reusing it. When we are ready we will put a new micro-SD card into the micro-SD card slot on your 96Boards, it will likely auto-mount since most SD cards come formatted as a VFAT (DOS) partition and Debian and Ubuntu will just mount them. So first find the device, see if it’s mounted and if so unmount the partition:

**Step 1: See what shows, in my case I saw /dev/mmcblk0 and a bunch of sub partitions such as /dev/mmcblk0boot0 /dev/mmcblk0boot1 etc.**

`$ ls /dev/mmc*`

**Step 2: Now insert the micro-SD card**

`$ ls /dev/mmc*`

Compare this to the prior ls before the card was inserted, you will likely see a new device or more. In my case I saw both the original /dev/mmcblk0 and I saw a new device /dev/mmcblk1 which was the inserted SD card.

**Step 3: Check for all mounted devices**

`$ df -hT`

This will show you all mounted devices on the system, if the SD card is formatted as a VFAT partition you will likely see a row like:

/dev/mmcblk1p1 vfat 3.7G 2.5M 3.7G 1% /media/linaro/UNTITLED

This indicates that it’s the first partition of the /dev/mmcblk1 device, and it’s a VFAT partition about ~4GB card with 1% of it in use.

**Step 4: Unmount the partition.**

`$ sudo umount /media/linaro/UNTITLED`

**Step 5: Change format from a VFAT partition to a swap partition.**

`$ sudo fdisk /dev/mmcblk1`

Now you will see the fdisk menu:

Welcome to fdisk (version info)

Changes will remain in memory only, until you decide to write them.

Be careful before using the write command



Command (m for help):

**Step 6: Press lower case p to list the partition table on the SD card**

: p<enter>

Disk /dev/mmcblk1: 3.7 GiB, 3965190144 bytes, 7744512 sectors

Lines of misc info here

Device Boot Start End  Sectors Size Id Type

/dev/mmcblk1p1 8192 77445511 7736320 3.7G b W95 FAT32

Command (m for help):

**Step 7: Press lower case t**

: t<enter>

Selected partition 1

Partition type (type L to list all types):

**Step 8: Change type of partition by entering 82**

: 82<enter>

Change type of partition ‘W95 FAT32’ to ‘Linux swap / Solaris’.

Command (m for help):

**Step 9: Exit back to command prompt by entering w**

: w<enter>

**Step 10: Set up swap space**

`$ sudo mkswap /dev/mmcblk1p1`

mkswap: /dev/mmcblk1p1: warning: wiping old vfat signature.

Setting up swapspace version 1, size 3.7 GiB (3960991744 bytes)

No label, UUID=<some UUID number>

$


## Mounting the swap partition


**Now mount the swap partition**

`$ sudo swapon /dev/mmcblk1p1`

`$ sudo swapon -s`

You should see something like:

Filename Type Size Used Priority

/dev/mmcblk1p1 partition 3868156 0 -1


## Unmounting the swap partition


**To unmount the swap partition when you are done using it:**

`$ sudo swapoff /dev/mmcblk1p1`


# Installing development software


If you have not already installed your development environment it’s time to do so, this is really exactly out of my [blog entry](/blog/cross-compile-files-x86-linux-to-96boards/) so first, make sure your image is fully up to date:

**Commands:**

`$ sudo apt-get update`
`$ sudo apt-get upgrade`
`$ sudo apt-get dist-upgrade`

Now install the C/C++ development environment:

Commands:

`$ sudo apt-get install git build-essential autoconf automake libtool swig3.0 python-dev nodejs-dev cmake pkg-config libpcre3-dev`
`$ sudo apt-get clean`

**Note: If at any point during this process you are prompted with a 'Y/N', select Y and press Enter.**


# Useful Libraries for C, C++, Python, and Java development


I personally recommend using libsoc or mraa libraries, when installed with the 96Boards extension they simplify GPIO and I2C access and make the code the same no matter which 96Board you are using. You can find install instructions at: [https://www.96boards.org/documentation/consumer/guides/mraa/install.md.html]()

Have fun, unless you manage to need to write some code in assembler coding on ARM is exactly the same as coding on X86. Really now a days there is really very very little reason to consider developing anything using assembler code, if you need tight code that's really fast, use C, there are reasons that C has been called the portable assembler….. If clean tight C is really not fast enough then yes, you might need to learn ARM assembler but the need should be very rare.

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

**Other Blogs from David Mandala:**




  * [How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Board GPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](/blog/eclipse-remote-development-debugging/)


  * [Ramblings of Mezzanine boards](/blog/ramblings-mezzanine-boards/)
