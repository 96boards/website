---
title: Carbon Rover
author: Sahaj Sarup
date: 2018-01-19 01:00:00+00:00
image:
    path: /assets/images/blog/carbon-rover.jpg
    name: carbon-rover.jpg
    thumb: carbon-rover-thumb.jpg
    featured: carbon-rover-thumb.jpg
categories: blog
tags: 96Boards, ARM, cortex-m4, zephyr, IoT Edition, Carbon, Linaro, RTOS, ultrasonic
---

# Carbon Rover

In one of my previous blogs titled: [Zephyr RTOS and HC-SR04 Ultrasonic Sensor](https://www.96boards.org/blog/zephyr-hcsr04/), I talked about working with ultrasonic sensors using Zephyr RTOS. That was just one ultrasonic sensors, in this blog we will be talking about running 6 Ultrasonic sensors along with four IR sensors and a motor controller.

So the goal is simple, to create a rover that wouldn't fall off an edge nor would it hit an obstacle.

To achieve this goal, the rover is setup with:

- 6 HC-SR04 Ultrasonic Sensors:
  - Much like SONAR, these sensors measures distance by sending out a sound wave at a specific frequency and listening for that sound wave to bounce back. By recording the elapsed time between the sound wave being generated and the sound wave bouncing back, it is possible to calculate the distance between the sonar sensor and the object.
  - On the rover there is
    - One sensors on every corner facing outwards
    - One sensor at the front center and one at the back center facing outwards.
  - When any object comes closer than 15cm to the rover, it moves in the opposite direction to the object.
- 4 IR sensors:
  - These are also called object detection sensors, unlike the ultrasonic sensors these are more boolean in nature, they either detect an object or they don't so it either '1' or '0'.
  - On the rover these are used to detect whether there is ground beneath or not. and to achieve that:
    - There are two sensors on each corner of the rover facing downwards.
  - When the sensors detect that the rover has run out of ground, it starts going in the opposite direction.

For a more detailed explanation and walk-through, take a look at OpenHours episode #87

{% include media.html media_url="https://www.youtube.com/watch?v=eBzOiF8iKHI" %}

The Source for this project is hosted at our Projects-Org repo: https://github.com/96boards-projects/carbon_rover
