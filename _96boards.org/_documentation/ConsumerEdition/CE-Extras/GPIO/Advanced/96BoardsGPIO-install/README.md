---
layout: empty-container-page
page_title: Install and build 96BoardsGPIO
permalink: /documentation/ConsumerEdition/CE-Extras/GPIO/Advanced/96BoardsGPIO-install/
breadcrumb-page_title: Install and build 96BoardsGPIO
breadcrumb-section: Documentation
breadcrumb-section-two: Consumer Edition
breadcrumb-section-three: CE-Extras
breadcrumb-section-four: GPIO
breadcrumb-section-five: Advanced
breadcrumb-section-six: 96BoardsGPIO-install
breadcrumb-subpage_title: Install and build 96BoardsGPIO
description: |-
    In this guide you will learn where to acquire, and how to build the various 96Boards enabled libraries such as 96BoardsGPIO, libsoc, MRAA, and UPM. Users who are interested in building their own libraries should be comfortable with building from source, and should already be familiar with the 96Boards hardware.
---
## Install and build 96BoardsGPIO

This library requires libsoc to be installed first.

**Commands:**

```shell
$ git clone https://github.com/96boards/96BoardsGPIO.git<Enter>
$ cd 96BoardsGPIO<Enter>
$ ./autogen.sh<Enter>
$ ./configure<Enter>
$ make && sudo make install<Enter>
$ sudo ldconfig /usr/local/lib<Enter>
```
Once you have successfully built the library you can either reset the system to pick up all of the changes, or proceed to building another library and reset the system once you are finished.

**Commands:** Reset the system

```shell
$ sudo reboot<Enter>
```

***

When you have you have finished installing and building your library, please proceed to the [Examples - Sample code](../../Examples/) page to begin programming.
