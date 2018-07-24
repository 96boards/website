---
title: 96Boards Photobooth - Part 1
author: Manivannan Sadhasivam
date: 2018-02-23 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/photobooth.png
    name: photobooth.png
    thumb: photobooth-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, CSI, Python, Photobooth, dragonboard410c, Linaro, Linux
---

# **Introduction**

Hello and Welcome to the **Part 1** blog of **96Boards Photobooth** project.
This fun intented project kicked off with an [Introductory blog](https://www.96boards.org/blog/photobooth-intro/)
last week and today I have arrived with an update on its progress. As like
the previous blog series, I have partitioned this project into series of
blog for reporting the progress and at the end of this project, the complete
source code will be hosted at the [96Boards Org](https://github.com/96boards-projects)
repository along with the instructions for recreation.

# **Part 1 - 96Boards Photobooth**

In this **Part 1** blog, we will see how to do image capturing using Dragonboard410c
interfaced with OV5640 camera sensor with the help of D3 Camera Mezzanine. Image
capturing is the first step for this Photobooth project and it involves the use
of OpenCV.

## **Flashing Boot and Rootfs images**

First and foremost we need to prepare the boot image and Root file system for
the Dragonboard410c inorder to interface it with D3 Camera Mezzanine and OV5640
camera sensor. For making the life easier, we are going to use the custom boot
image and Root file system provided by D3 Engineering. These images can be
downloaded from below links:

1. [Boot Image](https://github.com/D3Engineering/410c_camera_support/releases/download/D3%2FRELEASE%2FOV5640_QCOMLT_4.9_1.1.1/dragonboard410c-boot-linux-20170630-13.img.gz)

2. [Root File System](https://github.com/D3Engineering/410c_camera_support/releases/download/D3%2FRELEASE%2FOV5640_QCOMLT_4.9_1.1.1/dragonboard410c-rootfs-debian-stretch-alip-20170630-13.emmc.img.gz)

After downloading the images, flash it onto Dragonboard and setup the Camera
Mezzanine using the instructions available in [D3 Engineering Wiki](https://github.com/D3Engineering/410c_camera_support/wiki/D3-Camera-Mezzanine-User-Guide).

> Note: The custom images were based on 4.9 QC release kernel and it is a
        bit outdated. If you want to use the latest release images from
        Linaro.org, then you need to follow the instructions I have mentioned
        in the [forum](https://discuss.96boards.org/t/getting-ov5640-camera-working-with-upcoming-kernel-releases/3826/7?u=mani).

Once the Dragonboard410c is setup with the required boot and rootfs images, verify
the functionality of the camera by using the scripts mentioned in the Wiki.

## **Installing OpenCV**

Next step is to install OpenCV on Dragonboard410c. All of the instructions
are available in the [Projects Org](https://github.com/96boards-projects/home_surveillance/tree/master/part-2#2-software),
just follow it for installing OpenCV. Only change required is to replace the
cmake command with below one:

```shell
$ cmake -D CMAKE_BUILD_TYPE=RELEASE -DWITH_LIBV4L=ON -DWITH_GSTREAMER=ON -DWITH_OPENCL=ON -DBUILD_EXAMPLES=OFF -DBUILD_opencv_apps=OFF -DBUILD_DOCS=OFF -DBUILD_PERF_TESTS=OFF -DBUILD_TESTS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local -DENABLE_PRECOMPILED_HEADERS=OFF -DOPENCV_EXTRA_MODULES_PATH=<opencv_contrib>/modules ../
```

## **Installing MRAA**

[MRAA](https://github.com/intel-iot-devkit/mraa) library is used for accessing the
peripherals on 96Boards CE platforms. In this project, we will be using this library
for interfacing the push button to GPIO.

Follow the instructions [here](https://github.com/96boards/documentation/blob/master/consumer/guides/mraa/install.md)
for installing mraa library on Dragonboard410c.

## **Image capturing using OpenCV**

Once OpenCV and MRAA libraries are installed, we can proceed to capturing
an image.

#### Hardware setup

1. Make sure Dragonboard410c is turned off
2. Connect OV5640 to D3 Camera Mezzanine
3. Place D3 Camera Mezzanine on top of Dragonboard
4. Connect Linksprite LCD screen to Dragonboard
5. Connect a Push button to Pin 2 of J5 connector on Camera Mezzanine
6. Power on Dragonboard using compatible power supply

> Note: Push button can be connected in both Pull up/down mode.

Setup the media pipeline by executing below commands:

```shell
$ sudo media-ctl -d /dev/media1 -l '"msm_csiphy0":1->"msm_csid0":0[1],"msm_csid0":1->"msm_ispif0":0[1],"msm_ispif0":1->"msm_vfe0_rdi0":0[1]'
$ sudo media-ctl -d /dev/media1 -V '"ov5640 1-0078":0[fmt:UYVY8_2X8/1920x1080 field:none],"msm_csiphy0":0[fmt:UYVY8_2X8/1920x1080 field:none],"msm_csid0":0[fmt:UYVY8_2X8/1920x1080 field:none],"msm_ispif0":0[fmt:UYVY8_2X8/1920x1080 field:none],"msm_vfe0_rdi0":0[fmt:UYVY8_2X8/1920x1080 field:none]'
```

Now, execute the following python script to capture image after a button
press:

```shell
import numpy as np
import cv2
import time
import os
import mraa

pressed = False
count = 1

# Set CSI camera as the default one for V4L2
os.system("v4l2-ctl -d /dev/video0")

# Initialize OpenCV video capture
cap = cv2.VideoCapture(0)
cv2.namedWindow('96Boards Photobooth', cv2.WINDOW_NORMAL)
cv2.resizeWindow('96Boards Photobooth', 800, 480)

def putText(img, text, x, y):
    colour = (255, 255, 255)
    font = cv2.FONT_HERSHEY_COMPLEX
    cv2.putText(img, text, (x, y), font, 7, colour, 4)

def capture_and_show(text, x, y):
    ret, frame = cap.read()
    putText(frame, text, x, y)
    cv2.imshow('96Boards Photobooth', frame)

def capture_and_store():
    global count
    ret, frame = cap.read()
    cv2.imwrite("user_" + str(count) + ".jpg", frame)
    count += 1

def button_callback(button):
    global pressed
    pressed = True

def countdown():
    global cap
    for x in range(5, 0, -1):
        capture_and_show(str(x), 900, 600)
        cv2.waitKey(20)
        time.sleep(1)

# Initialize push button
button = mraa.Gpio(24);
button.dir(mraa.DIR_IN)
button.isr(mraa.EDGE_BOTH, button_callback, button)

while 1:
    # Show live preview
    capture_and_show("TAKE", 570, 600)
    if cv2.waitKey(20) & 0xFF == ord('q'):
        break

    # Button pressed
    if pressed==True:
	# Initiate countdown
        countdown()
	# Capture the image
        capture_and_show("CHEESE", 500, 600)
        time.sleep(1)
        capture_and_store()
        captured = cv2.imread("/home/linaro/Documents/photobooth/user_" + str(count - 1) + ".jpg")
	# Show the image preview
        cv2.imshow("96Boards Photobooth", captured)
        cv2.waitKey(20)
        time.sleep(2)
        pressed = False

# Do cleanup
cap.release()
cv2.destroyAllWindows()
```

Expected workflow after executing the above script:

1. Camera shows the live preview in the screen with `TAKE` text at the center
2. User presses the push button
3. Counter starts from 5 and decrements at 1 second interval
4. When the counter decrements to 0, `CHEESE` will be displayed and the image
will be captured and stored as `user_x.jpg` (x stands for person count)

# Video Demonstration

{% include media.html media_url="https://www.youtube.com/embed/fcVxD91Zn_M" %}

# Conclusion

So, with the above steps we can capture an image upon the user request with a
countdown timer and store it in the same directory. This demostrates how easy
is it to interface camera sensor with Dragonboard410c.

In the next blog, we will see how to apply Snapchat like filters with several
options to choose from. This will make the photobooth more fun to play with.
