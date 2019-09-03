---
title: 96Boards Photobooth - Part 3
author: Manivannan Sadhasivam
date: 2018-03-28 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/photobooth_front.jpg
    name: photobooth_front.jpg
    thumb: photobooth-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, CSI, Python, Photobooth, dragonboard410c, Linaro, Linux
---

# Introduction

Hello and Welcome to the **Part 3** blog of **96Boards Photobooth** project.
This is the final blog of the series and demonstrates the execution of the
full fledged Photobooth project using 96Boards.

Before going further, here is the quick recap of what happened in the previous
blogs of this project:

1. [Introducing 96Boards Photobooth](/blog/photobooth-intro/) - This
is the introductory blog for the **96Boards Photobooth** project which introducted the
project, roadmap and bill of materials.

2. [Part 1 - 96Boards Photobooth](/blog/photobooth-part1/) - This
blog provided the instructions for setting up OpenCV on Dragonboard410c and capturing the
image using OV5640 camera sensor interfaced using D3 Camera Mezzanine.

3. [Part 2 - 96Boards Photobooth](/blog/photobooth-part2/) - This
blog demonstrates how to apply snapchat like filters using OpenCV and 96Boards watermark
to the image captured using Photobooth.

# Hardware Required:

- [Dragonboard410c](/product/dragonboard410c/)
- [96Boards Compliant Power Supply](http://www.96boards.org/product/power/)
- [D3 Mezzanine with OV5640 Camera Sensor](/product/d3camera/)
- [Push Buttons](https://www.seeedstudio.com/Grove-Button-p-766.html)
- Connecting Wires

# Software Required:

- OpenCV
- AWS S3
- QREncode
- PhShortener
- Python Pillow

# Part 2 - 96Boards Photobooth

All of the instructions for recreating the whole project has been pushed
to the [96Boards Projects Org](https://github.com/96boards-projects/photobooth).

You just need to modify the AWS S3 bucket information in the `photobooth.py`
script and use the appropriate boto resource. Also connect `Capture` push
button to GPIO 30 (Pin 12 - J5) and `Filter` push button to GPIO 29 (Pin 10 - J5)
of D3 Camera Mezzanine.

For executing the project, run the below script from 'Photobooth' repository.

```shell
$ mkdir captured final
$ ./init.sh
$ sudo python3 photobooth.py
```
* For changing the filter, press `Filter` button
* For capturing the image, press `Capture` button

After capturing the image, it will be uploaded to the S3 bucket with 96Boards
watermark and the tinyurl/qrcode will be displayed for 10 seconds.

# Video Demonstration

Video demonstration of the 96Boards Photobooth during Linaro Connect HKG18.

{% include media.html media_url="https://www.youtube.com/embed/Lksx6JpHOOU" %}

# Conclusion

So we are at the end of the **96Boards Photobooth** blog series. This project
was intended to be a fun incorporated one and it was too evident on the kind of
response it got during Linaro Connect HKG18. People were all around it taking
selfies with Moustaches and Hat. Any kind of overlay filters can be used with the
help of this photobooth. We just need to find the coordinates for it.

If you have any further idea of extending this project, please let us know in
comments or even submit a PR to our repo. Stay tuned for the next project!
