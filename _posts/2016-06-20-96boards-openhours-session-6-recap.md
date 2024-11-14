---
author: jennifer.castelino
comments: true
date: 2016-06-20 22:31:54+00:00
layout: post
link: https://www.96boards.org/blog/96boards-openhours-session-6-recap/
slug: 96boards-openhours-session-6-recap
image: /assets/images/blog/OpenHours-03.png
image_name: OpenHours-03.png
title: 96Boards OpenHours Session 6 Recap
wordpress_id: 15272
Boards:
  - DragonBoard 410c
  - HiKey
category: blog
tags:
  - 64-bit
  - 96Boards
  - aarch64
  - Android
  - ARM
  - ARMv8
  - Breakout
  - Bubblegum
  - bubblegum-96
  - CE
  - Consumer Edition
  - Consumer IoT
  - DB410c
  - Docker
  - dragonboard410c
  - HiKey
  - Library
  - Linux
  - Low speed expansion header
  - Open Embedded
  - Open Hours
  - OpenHours
  - Reference Platform
  - rpb
  - sensors
  - UART
---

96Boards OpenHours session six the topic was “Installing Docker on aarch64 with the Reference Platform Build on a 96Boards CE-edition. To watch this weeks’ session go to: [https://www.youtube.com/watch?v=lvv7CbXOHtw](https://www.youtube.com/watch?v=lvv7CbXOHtw)
{% include media.html media_url="https://www.youtube.com/embed/lvv7CbXOHtw" %}

Below is an overview of what was discussed including the time in the video where this topic was discussed.

**The first topic was a recap of last week’s session:**

Our fifth 96Boards OpenHours session the team discussed in more detail enabling the GPIO libraries on 96Boards.  To watch this weeks’ session go to: [https://www.youtube.com/watch?v=fbTo3BwURg8&feature=em-subs_digest](https://www.youtube.com/watch?v=fbTo3BwURg8&feature=em-subs_digest)

**This week: (begins at 2:02)  —\*\*** \*\*To watch this weeks’ session go to:  [https://www.youtube.com/watch?v=lvv7CbXOHtw](https://www.youtube.com/watch?v=lvv7CbXOHtw)

- Today’s guest speaker is Bill Fletcher who is a manager in Linaro’s Marketing and EMEA Field Engineering. He gave a talk on installing Docker on one of the 96Boards consumer editions.

- Discussed Qualcomm workshop and presentation that Robert gave during the workshop

  - Shared screen and gave a quick recap of his presentation

  - Overview on Linaro and 96Boards

  - Overview of DragonBoard 410c

  - Software cores that are available

  - Available documentation and sample code

  - Fastboot mode

  - USB Debugging

  - Expansion headers

  - Board Layout

  - Different Mezzanine boards available

- 14:58 – Question – Does DragonBoard 410c have a sleep capability to get more out of your batteries?

- 17:30 – Question – It would be nice if 96boards spec allowed option for USB 3.0 – is that going to be available on the high speed expansion connectors?

- 21:54 – Bill Fletcher begins talk on Docker on aarch64 (see his blog for more details: [https://www.96boards.org/blog/installing-docker-aarch64-96boards-ce/](/blog/installing-docker-aarch64-96boards-ce/) )

  - Docker is “an open source project to pack, ship and run any application as a lightweight container.”

  - Talks about Enterprise software and how it relates to Docker

  - Docker is widely supporter both on 64bit and 32bit

  - 3 elements that make-up Docker

    - Client – command line interface

    - Demon – does building and distributing

    - Remote registry – external repository of Docker images

  - Some key facts:

    - An image is a read only file – i.e. a template

    - A container is a running instance of an image and can run many containers of same image

  - 3 sources for where images come from

    - Can be preexisting images from ones you download

    - Create an image by modifying an existing image and then uploading it

    - Create an existing file system and import into Docker

  - 30:08 - Why run it on Dragonboard or HiKey?

    - Bill goes through several reasons why this works well on these boards and examples when it might be a good option

  - 34:03 – Question - What is the difference between running Docker and a VMware?

  - 36:13 – Question - Can a container access GPIO’s?

  - Bill then speaks about hardware access in more detail to answer this question

  - 42:32 – Question – What is the impact on performance on any application inside a container and running directly?

  - The session ended with Bill mentioning that he will be attending the next session to answer any further follow-up questions

- Bill wrote a great blog that goes through how to get Docker up and running that you can check out here: [https://www.96boards.org/blog/installing-docker-aarch64-96boards-ce/](/blog/installing-docker-aarch64-96boards-ce/)

Be sure to stay tune in next week  [https://www.96boards.org/](/)

{% include image.html path="/assets/images/blog/OpenHours.png" alt="Open Hours image" class="img-fluid" %}

**In this series**

- [96Boards Out of box experience guide – part 1](/blog/96boards-box-experience-guide-1/)

- [96Boards Out of box experience guide – part 2](/blog/96boards-box-experience-guide-2/)

- [96Boards Out of box experience guide – part 3](/blog/96boards-box-experience-guide-3/)

- [96Boards Out of box experience guide – part 4](/blog/96boards-box-experience-guide-4/)

- [96Boards Out of box experience guide - part 5](/blog/96boards-box-experience-guide-5/)

- [Installing Docker on aarch64 with the Reference Platform Build on a 96Boards CE-edition](/blog/installing-docker-aarch64-96boards-ce/)
