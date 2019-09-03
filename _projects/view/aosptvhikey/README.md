---
title: AOSP TV Build
permalink: "/projects/AOSPTVHikey/"
description: |-
    Taking clues from how we used to build Android TV for the Raspberry Pi, I was able to get a AOSP TV build running on both the Hikey bords.
images:
  - AOSPTV_FrontPage.png
  - AOSPTV_Video_Demo.png
categories:
- Hikey960
- Hikey
---
# AOSP TV Build For The Hikey And Hikey 960

Taking clues from how we used to build Android TV for the Raspberry Pi, I was able to get a AOSP TV build running on both the Hikey bords.
Now the reason I am calling this an AOSP TV is that I have kept is as close the the AOSP build as possible with minimal modifiaction to the
device source tree. The only part not included in the AOSP is the Leanback Launcher binaries that needed to be downloaded separately
(more on that in the instructions), but these binaries are freely provided by Google.

## Project Details

- **Creator:** Sahaj Sarup
- **Project Name:** AOSP TV For Hikey Boards
- **Type of Project:** Application/component/library: Software application, component or library
- **Project Category:** Android Open Source Project
- **Board(s) used:** [Hikey](/product/hikey/) and [Hikey960](/product/hikey960/)
- **Difficulty level:** Beginner: Install Prebuilt ROM, Experienced: Build AOSP TV From Source

## Videos

### Video Of The AOSP TV Build Running On a Hikey960
{% include image.html name="AOSPTV_Video_Demo.png" alt="Video Of The AOSP TV Build Running On a Hikey960" url="https://youtu.be/3YgdDLQ46TA"%}

## Resources

### Pre-Built Installation Guide [Only For Hikey960]

1) Download from [here](https://mega.nz/#!QAtD2JrK!0Z6l2vgZqYyxsw_9CwWmqmYYwEMx1B6obJqAQhSoeAo)
2) Put Hikey960 into fastboot mode by using the following switch configuration
```
  switch 1 ON
  switch 2 OFF
  switch 3 ON
```
3) Connect Hikey960 to a Linux Desktop
4) Open a terminal and enter the following commands:
```
  cd <download directory>
  tar -xvzf hikey960-tv-binaries.tar.gz
  cd hikey960-tv-binaries
  sudo ./flashall.sh
```

NOTE: if you do not want to format and just want to upgrade without
loosing all the external apps, comment out the userdata flash line in flashall.sh

### Build From Source

- Follow The [GitHub](https://github.com/ric96/device_linaro_hikey_tv) link for source and build instructions.

### Social Media Link
- **BLOG:** http://geektillithertz.com/wordpress/
- **Youtube:** https://www.youtube.com/user/sahajsarup
- **GitHub:** https://github.com/ric96
***
