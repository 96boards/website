---
title: 96Boards Photobooth - Part 2
author: Manivannan Sadhasivam
date: 2018-03-09 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/photobooth.png
    name: photobooth.png
    thumb: /assets/images/blog/thumbs/photobooth-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, CSI, Python, Photobooth, dragonboard410c, Linaro, Linux
---

# Introduction

Hello and Welcome to the **Part 2** blog of **96Boards Photobooth** project.
In this blog we will see how to apply snapchat like filters using OpenCV and
96Boards watermark to the image captured using Photobooth.

Before going further, here is the quick recap of what happened in the previous
blogs of this project:

1. [Introducing 96Boards Photobooth](https://www.96boards.org/blog/photobooth-intro/) - This
is the introductory blog for the **96Boards Photobooth** project which introducted the
project, roadmap and bill of materials.

2. [Part 1 - 96Boards Photobooth](https://www.96boards.org/blog/photobooth-part1/) - This
blog provided the instructions for setting up OpenCV on Dragonboard410c and capturing the
image using OV5640 camera sensor interfaced using D3 Camera Mezzanine.

# Hardware Setup

Part 2 is focussed on applying snapchat like filters using OpenCV and a 96Boards watermark
at the bottom of the image. Before that, we need to setup the hardware for accomplishing
the task. Comparing the [previous blog](https://www.96boards.org/blog/photobooth-part1/),
we need to connect an extra push button to GPIO 25. This push button will be used for
scrolling through different overlays.

On a short note, we need the following connections on Dragonboard410c:

                     (HDMI)
1. Dragonboard410c ---------> Touchscreen LCD
                    (LS-HS)
2. Dragonboard410c ---------> D3 Camera Mezzanine (OV5640)
                    (GPIO24)
3. Dragonboard410c ---------> Push Button 1
                    (GPIO25)
4. Dragonboard410c ---------> Push Button 2

{% include image.html name="photobooth_part2_setup.jpg" alt="Your alternate text." %}

# Software Setup

On the software side, we need to install few python libraries in addition to the ones
mentioned in [previous blog](https://www.96boards.org/blog/photobooth-part1/).

```shell
$ sudo apt-get update
$ sudo apt-get install python3
$ sudo apt-get install python3-pip
$ sudo pip3 install pillow
```

From the above mentioned packages, you can see that we will be using Python3 this time.

# Part 2 - 96Boards Photobooth

Once both hardware and software setups are done, we can proceed to run the python script
for applying overlay filters and saving the image with 96Boards watermark. For the
overlay filters, download the following images and save them in the same directory where
you would save the python script.

* [96Boards Watermark](https://www.dropbox.com/s/qn4a0isqqf2m3k5/watermark.png?dl=0)
* [Mustache Filter](https://www.dropbox.com/s/ft4ewlci06n7mbv/moustache.png?dl=0)
* [Cow Boy Hat Filter](https://www.dropbox.com/s/agp7zg88k9r9gco/cowboy_hat.png?dl=0)

After downloading the above images, save and execute the following python script:

```python
import numpy as np
import cv2
import time
import os
import mraa
import imutils
import _thread
from PIL import Image

pressed = False
capture = True
filter_opt = 1

# Initialize V4l2 with CSI interface
os.system("v4l2-ctl -d /dev/video0")

# Initialize video capture for OpenCV
cap = cv2.VideoCapture(0)

# Create main window
cv2.namedWindow('96Boards Photobooth', cv2.WINDOW_NORMAL)
cv2.resizeWindow('96Boards Photobooth', 800, 480)

#Load filter
filter_1 = cv2.imread('moustache.png')
filter_2 = cv2.imread('cowboy_hat.png')
filter_3 = cv2.imread('test.png')
watermark = Image.open('watermark.png')

# Load classifier
detector=cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

def put_moustache_filter(mst, frame, x, y, w, h):
    face_width = w
    face_height = h

    mst_width = int(face_width*0.4166666)+1
    mst_height = int(face_height*0.142857)+1

    mst = cv2.resize(mst,(mst_width,mst_height))

    for i in range(int(0.62857142857*face_height),int(0.62857142857*face_height)+mst_height):
        for j in range(int(0.29166666666*face_width),int(0.29166666666*face_width)+mst_width):
            for k in range(3):
                if mst[i-int(0.62857142857*face_height)][j-int(0.29166666666*face_width)][k] <235:
                    frame[y+i][x+j][k] = mst[i-int(0.62857142857*face_height)][j-int(0.29166666666*face_width)][k]
                                                                                                    
    return frame

def put_hat_filter(hat, frame, x, y, w, h):
    face_width = w
    face_height = h
            
    hat_width = face_width+1
    hat_height = int(0.35*face_height)+1
    
    hat = cv2.resize(hat,(hat_width,hat_height))
                                    
    for i in range(hat_height):
        for j in range(hat_width):
            for k in range(3):
                if hat[i][j][k]<235:
                    frame[y+i-int(0.25*face_height)][x+j][k] = hat[i][j][k]
    return frame

# Helper sub-routine to add text to a frame
def putText(frame, text):
    color = (255, 255, 255)
    font = cv2.FONT_HERSHEY_SIMPLEX
    textsize = cv2.getTextSize(text, font, 1, 2)[0]

    x_pos = (frame.shape[1] - textsize[0]) / 2
    y_pos = (frame.shape[0] + textsize[1]) / 2

    cv2.putText(frame, text, (int(x_pos), int(y_pos)), font, 1, color, 2)

def capture_and_show(text, x, y):
    global capture
    count = 0

    ret, frame = cap.read()
    frame = imutils.resize(frame, width=500)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = detector.detectMultiScale(gray, 1.1, 5, minSize=(40,40), flags=cv2.CASCADE_SCALE_IMAGE)
    for (x, y, w, h) in faces:
        if filter_opt == 1:
            frame = put_moustache_filter(filter_1, frame, x, y, w, h)
        if filter_opt == 2:
            frame = put_hat_filter(filter_2, frame, x, y, w, h)

    # Once countdown is over, store the captured image
    if capture == True:
        cv2.imwrite("captured/user_" + str(count) + "_captured" + ".jpg", frame)
        # Apply 96Boards watermark to the captured image
        apply_watermark(count)
        count += 1
        capture = False

    cv2.imshow('96Boards Photobooth', frame)

# Helper sub-routine to apply watermark to the captured image
def apply_watermark(count):
    global watermark

    base = Image.open("captured/user_" + str(count) + "_captured" + ".jpg")
    if base.mode != 'RGBA':
        base = base.convert('RGBA')
    layer = Image.new('RGBA', base.size, (0,0,0,0))
    position = (base.size[0] - watermark.size[0], base.size[1] - watermark.size[1])
    layer.paste(watermark, position)
    Image.composite(layer, base, layer).save("final/user_" + str(count) + ".png")

def capture_callback(capture_btn):
    global pressed
    pressed = True

def filter_callback(filter_btn):
    global filter_opt
    
    filter_opt += 1
    if filter_opt > 2:
        filter_opt = 1

def countdown(thread, lock):
    lock.acquire()
    global pressed
    global capture

    # Create a new window for countdown
    cv2.namedWindow('Countdown', cv2.WINDOW_NORMAL)
    cv2.moveWindow('Countdown', 300, 140)
    cv2.resizeWindow('Countdown', 150, 150)
    font = cv2.FONT_HERSHEY_SIMPLEX

    # Give some time for window to initialize
    time.sleep(1)
    for x in range(5, 0, -1):
        # Create a black image
        img = np.zeros((150,150,3), np.uint8)
        # Display the countdown
        putText(img, str(x))
        cv2.imshow('Countdown', img)
        cv2.waitKey(20)
        time.sleep(1)

    # Create a dummy black image
    img = np.zeros((150,150,4), np.uint8)
    putText(img, "CHEESE")
    cv2.imshow('Countdown', img)
    cv2.waitKey(20)
    time.sleep(1)
    cv2.destroyWindow('Countdown')
    capture = True
    lock.release()

# Initialize Capture button
capture_btn = mraa.Gpio(24)
capture_btn.dir(mraa.DIR_IN)
capture_btn.isr(mraa.EDGE_RISING, capture_callback, capture_btn)

# Initialize Filter button
filter_btn = mraa.Gpio(27);
filter_btn.dir(mraa.DIR_IN)
filter_btn.isr(mraa.EDGE_RISING, filter_callback, filter_btn)

while 1:
    lock = _thread.allocate_lock()
    
    # Show live preview
    capture_and_show("TAKE", 220, 180)

    if pressed==True:
        pressed = False
        _thread.start_new_thread(countdown, ("Countdown-Thread", lock,))

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Do cleanup
cap.release()
cv2.destroyAllWindows()
```

Above python script can be executed using the following command:

```shell
$ sudo python3 photobooth.py
```

> Note: You need to execute the media pipeline instructions mentioned in the
>       [previous blog](https://www.96boards.org/blog/photobooth-part1/) before executing the python script.

# Video Demonstration

{% include media.html media_url="https://www.youtube.com/embed/NffO7VTDuek" %}

# Conclusion

So we are at the end of this **Part 2 - 96Boards Photobooth** blog. Some of
the code I have used in this part has been derived from the following work
done by fellows from Redhat and Kunal Gupta.

[1] Watermark - https://github.com/lmacken/photobooth.py
[2] Overlay Filters - https://github.com/kunalgupta777/OpenCV-Face-Filters

I'd like to thank both of them and since I have used their code, the final
source code of this project will be hosted with GPL v3 license on our
[96Boards Projects Org](https://github.com/96boards-projects/), complying
to the license of the previous works.

In the next part, we will see how to upload the captured images to cloud
and provide some options for the user to download it.
