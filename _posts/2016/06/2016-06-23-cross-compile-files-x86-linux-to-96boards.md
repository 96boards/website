---
author: davidm
comments: true
date: 2016-06-23 18:05:39+00:00
layout: post
link: https://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/
slug: cross-compile-files-x86-linux-to-96boards
image:
    featured: true
    path: /assets/images/blog/Example_of_Canadian_Cross_scheme.png
    name: Example_of_Canadian_Cross_scheme.png
title: How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa
  libraries
wordpress_id: 15399
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Consumer IoT
- cross compiler
- DB410c
- dragonboard410c
- HiKey
- Linux
- Open Embedded
- Reference Platform
- rpb
- toolchain
---

## Introduction


It’s been an interesting journey getting cross compiling working. While I’ve done a fair amount of embedded work in C over the years I did a great deal of it on x86 or put up with the slowness of the older ARM boards, I did not do a lot of cross compiling as it was pretty hard to get set up correctly. Today for the most part you can develop for ARM on ARM and it works well and is a pretty fast compile. Today, when you can you should just develop and compile natively on ARM, it’s not tricky, you are guaranteed that the binary you make is correct for the installed libraries and will run as expected. Cross compiling brings in extra complexity.

Having said that, the 96Boards CE specification does technically speaking allow fairly small amounts of RAM on a board and it is possible to have a project that will run on the system. But you cannot compile on the system you run out of RAM. So we are back to cross compiling. The good news is it’s pretty easy to put together a cross compiler environment, the bad news is that different libraries use different tools and you have to figure out how to use the tool in a cross compiler.

In this blog entry we will show you how to just cross compile using the standard C libraries, how to cross compile using the auto tools ([libsoc library](https://github.com/jackmitch/libsoc)) and finally with Cmake ([mraa library](https://github.com/intel-iot-devkit/mraa)).


## Assumptions


I’m using my Linux laptop as my cross compiling station, I’m starting with the most current release of Ubuntu on it, 16.04 and I’m using libsoc and mraa from github so I’m running the latest library code on the Linux laptop and on the 96Boards. I’m using a DragonBoard 410c today, but this works on a HiKey and a Bubblegum board just as well. In fact with the HiKey board with it’s 2G of RAM there is even less need of cross compiling, but even with 2G you could run out. So make sure to use apt-get and update both the 96Boards and the cross compiling station, then use git to make sure you have the latest code on the library(ies) you are using. I’m not going to go into making sure you have installed the latest and greatest libsoc and/or mraa on your 96Boards, [there are instructions for doing that]() so no need to cover old ground.
It is critical that your cross compiling station and your 96Boards stay in sync in terms of software so if you update your laptop update your 96boards, if you don’t bad and unexpected things can and will happen.

Finally this is not instructions or a tutorial on using the [OpenEmbedded](https://github.com/Linaro/documentation/blob/master/Reference-Platform/Releases/RPB_16.03/ConsumerEdition/DragonBoard-410c/InstallOERPB-16.03.md) build framework, it allows developers to create a complete Linux Distribution for embedded systems. These are instructions to take a Linaro build for 96Boards and cross compile applications to run in that build. If you are trying to create a product with the smallest possible Linux footprint OpenEmbedded might be just the ticket for you but that is much more complex then cross compiling an application to run on a 96Boards build. So with that clarification lets get started on a simple application compile and cross compile.

The following three part instruction set will walk you through what was covered in our 7th OpenHours session. Please visit our [YouTube channel](https://www.youtube.com/channel/UCjawhk_W1QnJs3pKIsKLJNg) for all OpenHour recordings. A dynamic version of these instructions can be found on our [96Boards github documentation](https://github.com/96boards/documentation/blob/master/README.md) pages, more specifically [here](https://github.com/96boards/documentation/blob/master/Extras/CrossCompile/CommandLine.md).


### Part 1 - A simple application


Here you will learn to cross compile a simple application using Linux C and C++ toolchains. Cross compilation will happen on a Linux x86 machine for 96Boards ARM device.


#### Step 1: Update 96Boards system and Host computer (x86 Machine)


The image on your board/host computer might be out of date. This is possible even when using the stock images, recent downloads, or a newly flashed versions of any operating system.

A few useful commands will help us make sure everything on the board is current:

**apt-get update:** Downloads package lists from online repositories and "updates" them to get information on the newest versions of packages and their dependencies.
**apt-get upgrade:** Fetches and installs newest package versions which currently exist on the system. APT must know about these new versions by way of 'apt-get update'.
**apt-get dist-upgrade:** In addition to performing the function of upgrade, this option also intelligently handles changing dependencies with new versions of packages.

**Commands:**

`$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade`


#### Step 2: If you are using libsoc and or mraa make sure they are installed and up to date


**Installation libsoc:** Please go [here]() for first time libsoc installation instructions.

**Update:** Change directory (cd) to your libsoc source and make sure you have latest code

**Commands:**

`$ git pull
$ autoreconf -i
$ ./configure --enable-board=<your board name here> --with-board-configs
$ make
$ sudo make install`

**Installation mraa:** Please go [here]() for first time mraa installation instructions.

**Update:** Change directory (cd) to your mraa source and make sure you have the latest code.

**Commands:**

`$ git pull
$ cmake .
$ make
$ sudo make install`


#### Step 3: Install cross compilers on host machine


The following commands will install C and C++ cross compiler toolchains for 32bit and 64bit devices. You only need to install the toolchain that is the correct size for your board. If your 96Boards is a 64bit SoC then only install a 64bit toolchain, if your 96Boards is a 32bit board then only install the 32bit toolchain. This document will use the 64bit toolchain.

**For ARM 32bit toolchain**
`$ sudo apt-get install gcc-arm-linux-gnueabihf g++-arm-linux-gnueabihf`

**For ARM 64bit toolchain**
`$ sudo apt-get install gcc-aarch64-linux-gnu g++-aarch64-linux-gnu`


#### Step 4: Install package dependencies


`$ sudo apt-get install build-essential autoconf libtool cmake pkg-config git python-dev swig3.0 libpcre3-dev nodejs-dev`


#### Step 5: Create a workspace


`$ mkdir hacking
$ cd hacking`


#### Step 6: Create a helloworld.c file with your favorite editor


Example (using vim text editor):

`$ vim helloworld.c`

Copy and paste the following into your helloworld.c file


    <code>#include
    #include

    int main(void) {
    puts(“!!!Hello World!!!”);
    return(EXIT_SUCCESS);
    }
    </code>


Save and quit (:wq)


#### Step 7: Compile, test, and run x86 file from the command line


**Compile:**

`$ gcc helloworld.c -o helloworld.x86`

**Test:**

`$ file helloworld.x86`

> Print out should show a X86 binary file

**Run (on host x86):**

`$ ./helloworld.x86`

_> Print out should read `!!!Hello World!!!`_


#### Step 8: Cross compile, test, and run ARM file from the command line


**Cross compile:**

$ aarch64-linux-gnu-gcc helloworld.c -o helloworld.arm

**Test:**

$ file helloworld.arm you should see it’s an aarch64 ARM file

**Run (On 96Boards):**

Copy file to 96Boards and run. It should run and say `!!!Hello World!!!`.

Retrieve 96Boards IP address with the following command:

`$ /sbin/ifconfig`

**Commands(From host machine):**

`$ scp helloworld.arm linaro@{ipaddress of 96board}:.
$ ssh linaro@{ipaddress of 96board}
$ ./helloworld.arm`

If you got this far congratulations, your basic cross compiling is working! Now let's make it more complex and add a C shared library. For the purpose of the rest of this document we will assume you have installed libsoc and mraa libraries on your 96Boards, they must be current and ready to use.


### Part 2 - Shared libsoc C library


Install libsoc, this will take a bit of doing, as we have to cross compile this library and then manually install it so it does not collide with X86 libraries. We use a staged Install process by using the DESTDIR environment variable (below) to redirect the install step into a temporary location so we can move it into the proper cross compile location.


#### Step 1: Clone libsoc library and change directory


$ git clone https://github.com/JackMitch/libsoc.git
$ cd libsoc


#### Step 2: Make library


$ autoreconf -i
$ ./configure --host aarch64-linux-gnu --enable-board=<your board name here> --with-board-configs
$ make
$ sudo make DESTDIR=/tmp/stage install


#### Step 4: Copy all files to the appropriate directory


$ sudo mkdir -p /usr/aarch64-linux-gnu/local/
$ sudo cp -a /tmp/stage/usr/local/* /usr/aarch64-linux-gnu/local/.


#### Step 5: Change filename from within “test” directory


$ cd test
$ cp board_test.c compile_test.c


#### Step 6: Cross compile, test, and run ARM file from the command line


**Cross compile:**

$ aarch64-linux-gnu-gcc -I /usr/aarch64-linux-gnu/local/include/ -L /usr/aarch64-linux-gnu/local/lib/ compile_test.c -o compile_test.arm -lsoc

**Test:**

$ file compile_test.arm

> Print out should show an aarch64 ARM file

**Run (On 96Boards):**

Copy file to 96Boards and run.

Retrieve 96Boards IP address with the following command:

`$ /sbin/ifconfig`

**Commands(From host machine):**

`$ scp compile_test.arm linaro@{ipaddress of 96board}:.
$ ssh linaro@{ipaddress of 96board}
$ ./compile_test.arm`

If you got this far you have command line cross compiling with shared library support installed and working, congratulations. Now lets move on to a more complex C++ library.


### Part 3 - Shared libmraa C++ library




#### Step 1: Set up environment


The Intel mraa library uses the cmake build system which is totally different from the autotools system, so we need to make a control file which will tell it to do cross compiling. Since the library is also a C++ library with an extra C interface, we have to tell the build system the location of the C and C++ compilers.

`$ cd ~/hacking`

Create a file using your prefered editor named aarch64.cmake - This example will use vim text editor.

`$ vim aarch64.cmake`

This file will tell the cmake build system that it is to cross compile the code and to use the cross compile toolchain.

Copy and paste the following into the aarch64.cmake file


    <code># this one is important
    SET(CMAKE_SYSTEM_NAME Linux)
    #this one not so much
    SET(CMAKE_SYSTEM_VERSION 1)

    # specify the cross compiler
    SET(CMAKE_C_COMPILER /usr/bin/aarch64-linux-gnu-gcc)
    SET(CMAKE_CXX_COMPILER /usr/bin/aarch64-linux-gnu-g++)

    # where is the target environment
    SET(CMAKE_FIND_ROOT_PATH /usr/aarch64-linux-gnu)

    # search for programs in the build host directories
    SET(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
    # for libraries and headers in the target directories
    SET(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
    SET(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
    # end of the file
    </code>


Save and quit (:wq)


#### Step 2: Clone mraa library, cross build it, and install it.


Doing this will allow you to cross compile apps which use this library. You won’t need any dependencies such as: swig, python or node.js on your cross compile machine, instead we will use command line flags to not attempt to build them.

First, make sure /tmp/stage directory does not exist by executing the following command:

`$ sudo rm -Rf /tmp/stage`

Clone libmraa library and change directory

`$ git clone https://github.com/intel-iot-devkit/mraa.git
$ cd mraa`

Cross build library using cmake and make commands with the appropriate tags

`$ cmake -DBUILDSWIG=NO -DBUILDSWIGNODE=NO -DBUILDSWIGPYTHON=NO -DCMAKE_TOOLCHAIN_FILE=../aarch64.cmake .
$ make`

Install library using the `make install` command

`$ sudo make DESTDIR=/tmp/stage install
$ sudo mkdir -p /usr/aarch64-linux-gnu/local/
$ sudo cp -a /tmp/stage/usr/local/* /usr/aarch64-linux-gnu/local/.`


#### Step 3: Test an application which uses the shared library mraa.


The mraa library builds all of it’s example files in the process of building the library, this means you don’t need to invoke the compiler it’s already been done.

First change to the `examples` directory

`$ cd examples`

**Test:**

`$ file hellomraa`

_> This print out should show an aarch64 ARM file_

**Run (On 96Boards):**

Copy file to 96Boards and run.

Retrieve 96Boards IP address with the following command:

`$ /sbin/ifconfig`

**Commands(From host machine):**

`$ scp hellomraa linaro@{ipaddress of 96boards}:.
$ ssh linaro@{ipaddress of 96boards}
$ ./hellomraa`

_> Print out should read as follows:_

`“Hello mraa”
“ Version: ”
“ Running on a ”`

Congratulations you have correctly installed your cross compiler and built your first cross compiled mraa library application.


## Conclusion


Generally speaking, most of the time it’s pretty easy to cross compile libraries that use autotools or cmake build systems. With autotools the --host command tells autotools that you are cross compiling and where the toolchain is. With cmake you create a file (we created aarch64.cmake above) that contains the info needed by cmake to know it’s cross compiling and where the toolchain is. If you need other libraries for your application and they do not use an autotools or cmake build system you can check the Internet to see what build tool they use and how to do cross compiles with it. Or just edit the makefile and change the compiler, linker and build flags for cross compiling.

Again, it’s critical that the cross compiler system and the 96Board system be current and matching in versions. If you upgrade one and not the other bad things are likely to happen.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)


Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

Other Blogs by David Mandala:

[How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)
[How do you install 96BoardGPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)
