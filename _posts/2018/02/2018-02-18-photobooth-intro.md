---
title: Introducing 96Boards Photobooth
author: Manivannan Sadhasivam
date: 2018-02-18 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/photobooth.png
    name: photobooth.png
    thumb: photobooth-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, CSI, Python, Photobooth, dragonboard410c, Linaro, Linux
---

# **Introduction**

Hello and Welcome to the Introductory blog of **96Boards Photobooth**. With
the Linaro Connect HongKong coming up in next few weeks, we 96Boards team
thought of setting up something cool which can be placed in the hallway.
Suddenly this Photobooth idea sparked our mind and we decided to make one
for us and showcase that during connect. Crazy isn't it? Yeah, that's how
we approach our work ;-)

# **96Boards Photobooth**

The idea behind this project is to create a Photobooth using one of the
96Boards and showcase that during connect. But it is not only limited to Linaro
connect, if people find it more attractive and fun we can even place it in
our 96Boards booth at whatever conference we take part in!.

So we decided to create a Photobooth and the first preparation would be
to choose the harware platform. I have some craze for the CSI cameras so
I planned to use the CSI camera sensor [OV5640](https://cdn.sparkfun.com/datasheets/Sensors/LightImaging/OV5640_datasheet.pdf)
which seemed to be occupying my desk for quite some time. Then, we have to
choose the base board to interface this camera. With 96Boards we only have
CSI support (along with V4L2) for linux available in [Dragonboard410c](/product/dragonboard410c/) only.
So obviously we have to choose that. For connecting the camera sensor with
Dragonboard, we opted for [D3 Camera Mezzanine](https://www.arrow.com/en/products/d3cameramezzov5640/d3-engineering).
For this category, we also had the option of chosing [AI Star Vision MIPI adapter](/product/mipiadapter/)
but due to the board availability and some factors we ended up with D3.

CSI support for Dragonboard410c comes with V4L2 interface which makes it
easy to use this camera with OpenCV.

The overall outlook of this project is, camera will capture the frames and
display the preview on screen. When a user comes, he will press the push
button available on the photobooth setup. That will initiate the countdown
timer of 5 seconds and when the count lapses, image will be captured.

Then the user will be given some options of choosing the funny masks like
the Santa hat or funny mustaches. After selecting the masks, 96Boards
watermark will be applied to the lower end corner of the image and saved
onto the cloud. For making it available to the user, we may show the
QR code for the image or the image will be sent to the user's mail-id.

## **Project Roadmap**

As like the previous projects, I have partitioned this project into a series
of parts:

* **Part 1**: Image capture using OpenCV
* **Part 2**: Applying funny masks and watermarks to the image
* **Part 3**: Final demonstration of the 96Boards Photobooth

## **BoM**

Below is the Bill of Materials (BoM) needed for project recreation.

1. [Dragonboard410c](/product/dragonboard410c/)
2. [D3 Camera Mezzanine](https://www.arrow.com/en/products/d3cameramezzov5640/d3-engineering)
3. [OV5640](https://www.arrow.com/en/products/li-ov5640-mipi-af/leopard-imaging)
4. [LCD Display](https://www.arrow.com/en/products/96boards-display-7/linksprite-technologies-inc)
5. [Push button](http://wiki.seeed.cc/Grove-Button/)

# **Conclusion**

This is one of the more fun type of project we do at 96Boards. I hope
that this project will grow much bigger to be placed in most of the
conferences where people gather for Fun + Innovation :-)

Stay tuned for the next part!
