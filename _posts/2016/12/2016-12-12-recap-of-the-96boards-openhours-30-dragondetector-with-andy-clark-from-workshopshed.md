---
author: linaro
comments: true
date: 2016-12-12 18:32:53+00:00
layout: post
link: https//www.96boards.org/blog/recap-of-the-96boards-openhours-30-dragondetector-with-andy-clark-from-workshopshed/
slug: recap-of-the-96boards-openhours-30-dragondetector-with-andy-clark-from-workshopshed
title: Recap of the 96Boards OpenHours 30 - DragonDetector with Andy Clark from Workshopshed
featured_image: OpenHours-02.png
wordpress_id: 18992
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Breakout
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- debugging
- dragonboard410c
- gdb
- gui
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

Welcome to our 30th episode of 96Boards OpenHours.  Last week we had a great discussion with David Mandala about creating a community mezzanine board.  David wrote a blog about this and it was posted on the 96Boards site:  [https//www.96boards.org/blog/community-mezzanine-board/](https//www.96boards.org/blog/community-mezzanine-board/).  Check out the blog for more information on this initiative.

Robert then spoke about the announcement that was made last week from Gumstix and Intel regarding the “GO Geppetto®” Intel® Joule™ Design Contest - for more information about this check out their site:  [https://www.gumstix.com/gogeppetto/?mc_cid=69078103ff&mc_eid=bcd2a7cf36](https://www.gumstix.com/gogeppetto/?mc_cid=69078103ff&mc_eid=bcd2a7cf36)

**3:20 -** Robert then kicked off this episode's topic by introducing the guest speaker, Andy Clark from Workshopshed.  Andy has a background in Aerospace and Electrical Engineering and has worked in software for more than 20 years.  He works on many of these projects in his free time from his regular job.  Andy then began working on the DragonBoard as part of a competition that he entered and he was sent a DragonBoard to use to work on his project proposal.   Since the contest he has been working with the DragonBoard for other projects.

**9:33** - Andy then began to talk about the DragonDetector and explaining how he got involved in the project.  He presented a slide deck that walked the audience through the project.

**16:06 -** Andy showed the DragonDetector he had built with the board

**24:40 -** Andy wrapped up his demo and Robert shared the git hub that will allow people to recreate his project:  [https://github.com/Workshopshed/Dragon](https://github.com/Workshopshed/Dragon)

**26:10 -** David Mandala talked about his initiative that he wrote the blog about.  He is looking at encouraging the community to create a mezzanine board.  [https//www.96boards.org/blog/community-mezzanine-board/](https//www.96boards.org/blog/community-mezzanine-board/)  He talked about this in more detail and the issues the community now faces with the current available boards.

**36:30-** Question:  Do we have any mezzanine on any i2s 1.8v module which someone has tested?

**41:15 -** Question:  Is it possible to use cellular network in 410c by any extension?

**45:55 -** Question:  Does anyone know where I can find a UK power cord for the DragonBoard?

Robert then wrapped up the call and invited everyone to join us next week.

To watch episode 30 go to[ https://www.youtube.com/watch?v=njMXCPLmPT4](https://www.youtube.com/watch?v=njMXCPLmPT4) or watch below:

{% include media.html media_url="https://www.youtube.com/embed/njMXCPLmPT4?feature=oembed" %}

**Be sure to join us for next week's OpenHours:  [https://www.96boards.org/openhours/](https://www.96boards.org/openhours/)**

As always there is a lot of good information and resources that is available in the chat below, this is a great place to get more detailed information mentioned during the call.  Also a while ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https//discuss.96boards.org/t/openhours-topic-suggestion/ ](https//discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https//discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**






















































* * *



Helpful links:
https//www.96boards.org/blog/community-mezzanine-board/




















https://www.gumstix.com/gogeppetto/?mc_cid=69078103ff&mc_eid=bcd2a7cf36





















Dragon Detector Blog: http://wsshd.com/DragonDectector






* * *


























A












sir just want to ask i've mailed my address to the mail id u provided me but did'nt get any confirmation from them.. are they upto shipping the dragon board ??






















Ayush, it was confirmed by QC. You should be good within next couple weeks






* * *

























https//www.96boards.org/






















http://wsshd.com/DragonDectector






* * *























G1












Andy, nice knight. Looks like Saint George's cross on the shield and a Barbuta (italian) helmet.






















https://github.com/Workshopshed/Dragon






















https://twitter.com/Workshopshed






* * *


























AW












Yes the shield was designed on a St George design






* * *


























KD












https//www.96boards.org/blog/community-mezzanine-board/





















* * *











AW












The helmet was roughtly based on the paper design from Rob Ives






















https://www.robives.com/knight






















Andy will be sticking around for bit longer. If you have any questions. Please speak up, or post them in the chat.





















* * *











AW












The 3D model is available on the GitHub so you can print your own






















I went for a USB camera but if you wanted a high frame rate then a direct attached would be better






















http://dev.iachieved.it/iachievedit/swift-for-arm-systems/





















* * *











G7












I have a question regarding HW available for i2s testing via low speed expansion connector. Do we have any mezzanine on any i2s 1.8v module which someone test?





















* * *











AW












Could that be loaded with a default firmware?






















https://webchat.freenode.net/






















#96boards






















#linaro






















96boards.org/blog





















* * *











C












Yep, had to do the same thing.  I think I have some step-by-step instructions for this that I got from Lawerence King.  -cj





















* * *











MF












I have a very simple question since i am beginner. Is it possible to use cellular network in 410c by any extension?





















* * *











G1












usb 3g modem easiest by my reckoning as far as availability and price





















* * *











AW












The MAX98357A I2C chip seems to accept a minimum of 1.2v for the digital signals. There's an AdaFruit board amplifier board you could try




























































* * *



Click here to join us for [next OpenHours ](https//www.96boards.org/openhours/)
