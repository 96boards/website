---
title: Binary JukeBox Project
author: Sahaj Sarup
date: 2019-02-28 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/binary-jukebox.jpg
    name: binary-jukebox.jpg
    thumb: binary-jukebox-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# Binary JukeBox Project

A Juke-Box like setup. but instead of selecting a song using decimal numbers the user punches in digits in binary!

The binary jukebox is controlled via a Panel that is made up of 8 LEDs and 3 Buttons.

The user can select what song will be played on the juke box by punching the binary value of the song number. the values are punched in using button 1 or button 2, this will leftshift a 0 or a 1 bit.

The 8 LEDs will display the user input and/or the index number of the current song being played, each LED represents a single bit in a 8bit value and hence can count from 0-255.

The song-chart along with index number and name of the songs and the name of the song that is being played is shown on a display over HDMI.

The audio output is taken from the analog header of the DragonBoard410c, but the HDMI audio output can be used as well incase other boards, that lack analog audio output, are being used.

The code is written in C and the following libraries, apart from the standard libraries, are used:
- ncurse5: For displaying the son-chard on the hdmi display
- libvlc: to control audio playback
- fpga_mezz_lib + MRAA: to control the LED Panel connected to the FPGA Mezzanine.

The source and documentation for this project can be found at: [https://github.com/96boards-projects/binary_jukebox](https://github.com/96boards-projects/binary_jukebox)

# Video

{% include media.html media_url="https://youtu.be/B9aOYSU0voc" %}