---
title: 96Boards Social Media Ticker Part 1
author: Sahaj Sarup
date: 2018-10-21 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/social-media.jpg
    name: social-media.jpg
    thumb: social-media-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, Cortex-M, ARM64, twitter, python, Bot, script
---

# The 96Boards Social Media Ticker

The concept of a "Social Medial Ticker" is very similar to that of a desk clock.
Like a clock, this keeps you up to date to a live count of your social media accounts may it be like or subscribers etc.

This may not be very important to the average Joe, but as the job title of "Influencer" starts becoming more of a profession than just a hobby you might just find yourself looking at the ticker more than the clock.

# Part 1

Parts List:
- 5x LED Matrix: To display the actual count
- 1x SPI TFT Display: To show the logo of the social media platform
- 1x 96Boards CE
- 1x Seeed Studio Sensor Mezzanine

So the some-what-tested Idea is:

- The CE Board social media platform specific API to get the required data
- The data gets sent to the Arduino on the Sensors Mezzanine via UART
- Sensors mezzanine controls the LED Matrix to display the data
  - I am using the sensors mezzanine as the MAX7219 LED Matrix chip doesn't play well with level shifted SPI data.
- Also, probably a front end for easy customization by the user.

That's about it for part 1, more in part 2.
