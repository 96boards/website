---
title: 96Boards Social Media Ticker Part 2
author: Sahaj Sarup
date: 2018-11-13 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/social-media.jpg
    name: social-media.jpg
    thumb: social-media-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, Cortex-M, ARM64, twitter, python, Bot, script
---
- [Checkout Part 1 of the Social media Ticker](/blog/social-ticker/)

# The 96Boards Social Media Ticker

**Currently this is what the functionality is:**
- Support the following Platforms
  - Instagram
  - YouTube
  - Twitter
- Displays the number of followers on the 5 LED Matrix Displays
- Displays Platform Logo on the OLED display
- Cycles between each Platform every 10 sec.
- Refreshes every 30 sec
- Rinse and Repeat

**0Auth APIs Used**
- Twitter: Full 0Auth API from [https://developer.twitter.com/content/developer-twitter/en.html](https://developer.twitter.com/content/developer-twitter/en.html)
- YouTube: API Key from [https://developers.google.com/youtube/](https://developers.google.com/youtube/)
- Instagram: Simple query trick to get follower data without a using developer account ;)

**Notable Python Modules**
- [Tweepy](http://www.tweepy.org/): An easy-to-use Python library for accessing the Twitter API.
- [Requests](http://docs.python-requests.org/en/master/): Requests allows you to send organic, grass-fed HTTP/1.1 requests, without the need for manual labor.

**Notable External Arduino Libraries**
- [LedControlMS.h](https://github.com/shaai/Arduino_LED_matrix_sketch)
- [Adafruit GFX](https://learn.adafruit.com/adafruit-gfx-graphics-library/overview)
- [Adafruit SSD1306](https://learn.adafruit.com/monochrome-oled-breakouts/arduino-library-and-examples)

**Source**
The source for this project is available at: [https://github.com/96boards-projects](https://github.com/96boards-projects)


# Video

{% include media.html media_url="https://youtu.be/x2O5BtC8odg" %}
