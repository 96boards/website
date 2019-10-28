---
title: The RB3 Robotic Arm
author: Sahaj Sarup
date: 2019-10-28 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shield, hat
---

# The RB3 Robotic Arm

Back in May of this year, I started planning out this project. The first blog laying out the plan came in towards end of the month with the work finally starting a few weeks later.

Since then there has been a lot of ups and downs and more importantly gaining a lot of experience.

But what came out of it was an amazingly versatile development platform that is intended to serve as the basis robotics development on the RB3. The RB3 Robotic Arm now serves as an very flexible (pun intended) and infinitely iterative platform that will allow developers to fully exercise the capabilities of the Qualcomm RB3 platform in Robotics and related fields of research and development.

***

## Progress by the blog.

Over the months I have been building out this projects, I have tried my best to keep track of all of the progress via frequent blog posts, here's a list:

- Introduction: [Qualcomm RB3 Robotic Arm Project | Introduction](https://www.96boards.org/blog/rb3-arm-intro/)
- Part 0: [Setup RB3 for the Robotic Arm Project | OpenCV on RB3 Pt. 0 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-setup/)
- Part 1: [OpenCV on RB3 Pt. 1 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-arm-intro-opencv-1/)
- Part 2: [Threads got complicated | OpenCV on RB3 Pt. 2 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-arm-opencv-threads/)
- Part 3: [Gimme Code | OpenCV on RB3 Pt. 3 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-opencv-gimme-code/)
- Part 4: [My experiments with 1080p | OpenCV on RB3 Pt. 4 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-1080p-opencv/)
- Part 5: [Speech Recognition and Combining Voice with Vision | OpenCV on RB3 Pt. 5 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-voice-vision/)
- Part 6: [It's ALIVE | OpenCV on RB3 Pt. 6 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/rb3-its-alive/)
- Part 7: [Out with Arduino, In with i2c and PCA9685 | OpenCV on RB3 Pt. 7 | Qualcomm RB3 Robotic Arm Project](https://www.96boards.org/blog/arduino-vs-pca9685/)


***


## What is the purpose of The RB3 Robotic Arm Project?

The Goal was to provide a demonstrative use-case for the RB3. It will cover the following spectrum:
- Robotics: A 6 DOF(Degree-Of-Freedom) Robotic Arm will be directly controlled by the RB3
- Vision: A 1080/30p or 720/60p video input will be used for object recognition using OpenCV
- Voice: Voice commands will be used to instruct the Arm to perform a set of actions.

Brining it all together:
- A camera will be used to detect objects placed on a table.
- The user will send a voice command to pick and place a particular object.
- The Robotic Arm then works along with the camera to track the object and perform the requested action.

***

## The BOM Cost: USD 694

- USD 450: [96Boards RB3 CE Board by Qualcomm](https://www.96boards.org/product/rb3-platform/)
- USD 130: [LewanSoul 6DOF Robotic Arm Kit](https://www.amazon.com/dp/B074T6DPKX/)
- USD 17: [PCA9685 Based Servo Driver](https://www.amazon.com/Adafruit-16-Channel-12-bit-Servo-Driver/dp/B01G61MZF4/)
- An I2C voltage Level shifter is required, either on of the following can be used:
    - USD 5: [Audio Mezzanine](https://www.96boards.org/product/audio-mezzanine/)
    - [Sensors Mezzanine](https://www.96boards.org/product/sensors-mezzanine/)
    - [LinkSprite Mezzanine](https://www.96boards.org/product/linkspritesensorkit/)
- USD 72: Decent USB Webcam
    - Recommended: [Logitech C922x Pro Stream Webcam](https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK)
- USD 20: 5v 10A PSU

***

## How does it work and what does it do?

**User input:**
- Voice Input: The robotic arm can take user input commands in the form of voice commands, these can be in the form of: "Pick up the [color] [shape]"
    - example: Pickup the Yellow Rectangle
- GUI Input: Same as voice input but instead of speaking you have the option to type in the command, specially useful in noisy environments.

**Image Recognition:**
- Once the arm gets the object that the user wanted to pickup, it's next job is to find the object in it's field of view.
- The Robotic Arm has a front mounted camera on it's grabber. It uses OpenCV to first detect its color using separating the HSV color space based on pre-defined values.
- Once it has different blobs of the requested color, it uses edge detection to detect the shape.
- The RB3 can do this at about 15-20 FPS.

**Picking up the object**
- Once the Robotic Arm has detected the object requested by the user, it how has the job to grab and pick up the object.
- The Robotic arm is made up of 6 simple Servos that have a range of 160 degrees of motion, these servos are controlled by pwm signals with 0% being 0 degree and 100% being 160 degrees.
- The PWM signals are generated with a PCA9586 IC that generates PWM signals over 16 channels and it is connected to the RB3 over i2c. So the RB3 has direct control of the servos over i2c.
- The Robotic Arm first makes sure that the object is near the center of the grabber, it does by moving the arm in the X and Y axis till the object is correctly centred.
- The Arm then moves in the Z axis down towards the object trying to keep the X and Y axis unchanged.
- Once it has zero'ed down on the object it will close the grabber picking up the object and dropping it in another location.

**Video Demo**

{% include media.html media_url="https://youtu.be/Z6zoDpyWut8" %}

***

## What can you do with the Robotic Arm and what does the future hold?

As I mentioned before, this project aims to serve as a base platform for robotics based project, as a source of sample code to be run on the RB3 and a getting started guide to the RB3 and the 96boards ecosystem.

The possibilities of projects based on this platform are endless, but here's a few I think the community can indulge in:
- Enabling ROS support: ROS is already enabled on the RB3 itself, it's only a matter of porting the project over.
- Trying different positions and types for the the camera.
- Moving from opencv to tensorflow on the hexagon dsp.
- Making the Robotic Arm base mobile.

***

## A final Thank You

Although it seems as if I was working solo on this project, it isn't the case. I was backed up by some very helpful people and organizations that made the project possible:
- Lauren Leung, Jonathan Willick and rest of the Qualcomm Robotics Team for creating the RB3
Platform and sponsoring this project.
- Qualcomm Landing Team for support, device enablement and Debian builds with mainline-tracking Linux Kernel, and not to forget dealing with my constant frustration about the i2c bus not working. (turns out I had a pre-production variant with a broken i2c bus)
- Don Harbin and his OpenCV M&M Demo: In essence The Robotic Arm can be looked as a successor to this project
    - https://github.com/96boards/opencv-color-tracking-demo
- PyImage Search: For various tutorials and ideas
    - https://www.pyimagesearch.com/

***

## Resources

Here's a list of links to get you started:
- [Qualcomm RB3 product page](https://www.96boards.org/product/rb3-platform/)
- [Getting started with the RB3](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard845c/getting-started/)
- Linaro Connect SAN19 Talk:
    - [PDF](https://fileserver.linaro.org/owncloud/index.php/s/1yS5sqBsFb8DJBx)
    - [Video](https://youtu.be/WHTPmclDvjQ)
- [Project Repository](https://github.com/96boards-projects/RB3-RoboticArm): This contains all the instructions to completely recreate the base project.