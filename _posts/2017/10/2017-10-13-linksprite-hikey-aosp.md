---
author: Sahaj Sarup
comments: true
date: 2017-10-13 12:00:00+00:00
layout: post
title: Linksprite Touch Display enabled on AOSP for HiKey and HiKey960
featured_image: 96boards-display-7-img1.jpg
tags:
- Hikey
- Hikey960
- 96Boards
- Android
- AOSP
- Display
- HDMI
- Touch
- Portable
- Arrow
- Linksprite
---
# **Linksprite Touch Display enabled on AOSP for HiKey and HiKey960**

### Introduction

{% include image.html name="96boards-display-7-img1.jpg" alt="Your alternate text." %}

This 7-inch LCD capacitive touch screen from LinkSprite features an HDMI interface and uses standard HID protocol. The screen features an 800 x 480 resolution, back light control for lower power consumption, and it supports HDMI for display and USB for touch control.

This display from Linksprite and arrow has been widely used by the 96Boards community, specially when it comes to projects using the DragonBoard410c.

But till now the Hikey boards, specially the HiKey960, were incompatible with this display. Which meant that if someone wanted to do a project using Android and 96Boards, their best bet was to use either of the Hikey boards. But then they weren't able to use the Linksprite display as it was not compatible.

### It Works Now!

However, with help from John Stultz, we were recently able to get this display working. And has been upstreamed to the AOSP kernel (https://android-review.googlesource.com/#/c/kernel/hikey-linaro/+/505547/).

So now, with an updated AOSP build, the Linksprite display should work out of the box!

However there is one thing to keep in mind, the Linksprite Display is powered from USB and uses the same USB port for interfacing with the touch panel, due to current limitations on the USB ports on the development boards, yau may need to invest in an externally powered usb hub. And this stands true for any development board, not just the Hikey or the Dragonboard.

![](http://i.imgur.com/pD4x3ii.gif)
