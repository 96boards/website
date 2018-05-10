---
title: Deep learning with Snapdragon in Linux Debian
permalink: /projects/deeplearning/
description: |-
    The goal of this project is to try MobileNet Model (a convolutional Neural Network model for Mobile devices) for Object Classification/Detection with snapdragon
images:
  - deeplearn1.jpg
  - deeplearn2.jpg
image:
  path: /assets/images/projects/deeplearning-thumb.png
  name: deeplearning-thumb.png
  thumb: deeplearning-thumb.png
---

# Deep learning with Snapdragon in Linux Debian

The goal of this project is to try MobileNet Model (a convolutional Neural Network model for Mobile devices) for Object Classification/Detection with snapdragon

### Objective

With all advancement in the technology and new Soc's I believe it's the right time to add Intelligence to the embedded devices and IOT's to make them  aware of their environment and interact with it.

In this project I try to just scratch the surface of Computer Vision and Deep learning on the Embedded Devices specifically on Snapdragon 410 and 820

First I tried to use GPU to process the incoming images from camera and do some Image Processing Techniques, like changing the format of the picture from YUV to RGB, Filtering The image colors like showing just red or blue or green or even luminescence or chrominescence, and doing the edge detection in x and y axis with Sober Filter.

And then I used Tensorflow (a machine learning library ) to train a Convolutional Neural Network model (Mobile Net) and used the trained model to classify the incoming images  for trained classes

I hope this will be an inspiration for others to use these embedded boards for their projects.
Note that this project is implemented in C and C++ and is under Linux Debian (stretch ) operating System


## Project Details

- **Creator:** Ali Gholamloo
- **Project Name:** Deep learning with Snapdragon in Linux Debian
- **Type of Project:** Demonstrations (Projects showcasing individual features of a 96Boards product)
- **Project Category:** Machine Learning and Computer Vision
- **Board(s) used:** DragonBoard 410c and DragonBoard 820c

## Resources

### RSS URL

- [GitHub](https://github.com/gholamlooAli/tf410c)

***
