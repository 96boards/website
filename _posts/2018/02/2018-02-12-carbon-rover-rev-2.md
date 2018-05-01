---
title: Carbon Rover Rev 2 | NeoPixels
author: Sahaj Sarup
date: 2018-02-12 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/carbon-rover-rev-2-thumb.jpg
    name: carbon-rover-rev-2.jpg
    thumb: carbon-rover-rev-2-thumb.jpg
categories: blog
tags: Iot, IE, carbon, arduino, neopixels, rgb, leds, robot, rover, zephyr

---

# Introduction

In one of my previous blogs titled ["Carbon Rover"](https://www.96boards.org/blog/carbon-rover/), I wrote about creating  create a rover that wouldn't fall off an edge nor would it hit an obstacle.

# Riding The RGB Hype-train!

In the Rev 2 of the Carbon Rover I decided to add some RGB NeoPixels. Now these LEDs don't generate random colors, they are in fact synced to the IR and Ultrasonic Sensors.

{% include image.html name="rover-2.jpg" alt="Your alternate text." %}

The NeoPixel strips are placed on the front and the back edge of the rover, 11 on each side for a total of 22 LEDs.

Although the carbon can address the Led's individually, they are virtually divided into 6 groups one for each Ultrasonic sensor. When there is no object within 100cm of the sensors the LEDs glow Blue and as the object comes closer towards the senor they start glowing Red.

As for the IR sensors, the LEDs glow red when the sensors can't detect ground beneath the rover.

Although I am using an Arduino Nano to control the LEDs, It only serves as a dumb controller. All the color and pattern for individual LEDs is calculated by the Carbon on sent over I2C to the Arduino.  

# Source Code

- [Current](https://github.com/96boards-projects/carbon_rover)
- [REV 1](https://github.com/96boards-projects/carbon_rover/releases/tag/v1.0)
- [REV 2](https://github.com/96boards-projects/carbon_rover/releases/tag/v2.0)

# Demo

{% include media.html media_url="https://www.youtube.com/watch?v=jmrMJPTKGsc" %}
