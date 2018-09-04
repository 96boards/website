---
title: Audio Visualizer | Playing with the DragonBoard410c Analog Header
author: Sahaj Sarup
date: 2018-08-08 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/audio-viz.jpg
    name: audio-viz.jpg
    thumb: audio-viz-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, Rock960, Hikey960, enterprise edition, product, single board computer, linaro, linux, open source, openhours, sahaj sarup, podcast, technology, tech, computer, hardware,, embedded, crowd fund, mezzanine, community, audio, visualizer, neopixel, arduino, analog input
---

# Introduction

The idea for this project came because I wanted to create a similarly styled Audio Visualizer for the Vinyl setup at my home. There were two simple requirements:

1. Stereo Audio input and visualization
2. Isolated input, external noise like taking shouldn't effect the visualizer

## DragonBoard410c

This board has a dedicated [Analog Header](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard410c/hardware-docs/hardware-user-manual.md.html#analog-expansion-connector) with two analog microphone inputs... Perfect.
So the idea was simple, use these two analog mic inputs as a single stereo input, feed the raw audio input through a python script that generates the NeoPixel LED pattern. Send the pattern over I2C to an Arduino just like we did for the [Carbon Rover](https://github.com/96boards-projects/carbon_rover#1-hardware).

## Challenges

- **Voltage Differences:** There is a fair bit of difference between the voltage that's on a "Line-Input" from a Hi-Fi system at +2v/-2v and the mic input on the DragonBoard410c at about +1v8/-1v8. But as I explained in a [previous blog](https://www.96boards.org/blog/line-in-db/), the 96Boards Forum came to my rescue.
- **Stereo Input:** Although the analog header has two mic input, both are connected to the same internal ADC ie ADC2, How ever there is a third mic input on the board. Its marked as GM1 on the silkscreen and is on a separate ADC ie ADC1.

## The Final Setup

1. The analog audio input goes through the analog voltage level shifter into the MIC_IN1 and MIC_IN2 on the DragonBoard410c.
2. To keep things simple I use ```arecord``` to stream the audio to stdout as raw pcm and pipe it to a python script.
3. The python script takes the input, filters the left and right channel. Each channel is processed in a separate thread and is divided into the following six frequencies 64Hz, 192Hz, 768Hz, 2048Hz, 6656Hz & 18432Hz to cover as much of the spectrum as possible for varying genres. Of course this can be modified by changing the weights in the python script.
4. Each of the six frequencies are assigned a LED color for Red Green and Blue depending upon the amplitude. The LED color data is sent over I2C to a Arduino that controls the NeoPixels.

There is some amount of latency involved, but its not visible to our naked eyes.

As usual, the source code can be found at the [96Boards Project Repository](https://github.com/96boards-projects/audio-visualizer-db410c).

## Video Demos:

- **Project Demo:**
  {% include media.html media_url="https://youtu.be/ErMGrf6baR0" %}

- **Project Showcase:**
  {% include media.html media_url="https://youtu.be/3mmI4YlS_II" %}
