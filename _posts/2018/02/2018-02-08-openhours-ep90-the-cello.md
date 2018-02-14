---
title: OpenHours ep 90 - A look at the 96Boards Cello
author: Robert Wolff
date: 2018-02-08 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/OpenHours.png
    name: OpenHours.png
    thumb: OpenHours-thumb.png
categories: blog
tags: 64-Bit, 96Boards, Bubblegum96, HiKey, DragonBoard 410c, Linux, Linaro, ARM, SBC, Single Board Computer, AOSP, Android, Red Hat, Redhat, fedora, Open Source, deep learning, robert wolff, tensorflow, i.mx7, meerkat, NXP, qualcomm, technology, computer, community, Timesys, Maciej Halasz, IIoT

---

# Introduction

The big 90! This week we come at you with possibly four segments (time permitting) that will surely make you anticipate the weeks and months to come.

- A look at the Cello EE board!
- 96Boards documentation and website revamp overview
- What’s next? A look at all new and upcoming 96Boards, releases and speculation.
- Q&A throughout the entire show! So bring your questions…

If you want to register the remaining sessions or watch the recording of the past sessions, you can take a look at their website.

# Watch OpenHours #90 on YouTube

{% include media.html media_url="https://youtu.be/WHxfb5Sbs_U" %}

# Chat Log

Duong - D
hello

Robert Wolff (Screencast) - R(
Hi!
Welcome!
We will get started soon.

manikanth - M
hello

Dele - D
hi

Sahaj - S
linaro.org
https://www.linaro.org/
https://www.96boards.org/
http://connect.linaro.org/

Robert Wolff (Screencast) - R(
Smart Portal: https://github.com/96boards-projects/smart-portal

Carl Perry - CP
https://gigofham.com/post/2018/02/06-cello/

Khushal Khan - KK
The consumer edition has no heat sink or fan? It most probably runs off a very slow CPU. An ARM chip?

Sahaj - S
depends on how the soc is designed
the cello also had an arm chip by amd

Robert Wolff (Screencast) - R(
@Khushal Ill try to address your Q soon

Khushal Khan - KK
Does the 22 NM technology have better heat dissipation properties? It has lower power requirements, but still high frequencies would generate heat because the heat generated/volume wouldn't improve a lot

ydh7620 - Y
Is there a special reason why the Cello board is so big in size compared to the Consumer Edition Boards ?

Robert Wolff (Screencast) - R(
It is intended for different purposes

Khushal Khan - KK
Your generating lower heat, but then you're running smaller chips, so heat/unit volume wouldn't improve much or does it? It would only if it is narrower, so has better dissipation properties.
It isn't excruciatingly slow, is it?
Do these run multiple threads in parallel? Or would these be too elemental for that?

Ragnar. - R
a bit tiny text there

Robert Wolff (Screencast) - R(
We will get to the rest of the questions shortly.

Ragnar. - R
thank you

ydh7620 - Y
Thanks Carl for answering my question.

Daniel Thompson - DT
https://github.com/daniel-thompson/usb-relay

Guillermo - G
Boot button: You need to hack it with a 555 ancient timer chip that wired for a single pulse that will pull the boot button low or high for a few msec as needed.
... when it gets powered. That would requre a power cycle though.

Daniel Thompson - DT
https://github.com/daniel-thompson/laser-lab

Robert Wolff (Screencast) - R(
https://github.com/96boards/96BoardEECase
Any more questions for our guest?
We are coming to the end of the hour

Carl Perry - CP
https://gigofham.com/post/2018/02/06-cello/

Ivan Farkas - IF
Interested in testing docker containers in many ARM platforms running various versions of linux
similar to browserstack

Robert Wolff (Screencast) - R(
IRC: #96boards #openhours #Linaro

Guest 19 - G1
freenode is the network !

Carl Perry - CP
Ivan: I have similar interests. I'm also interested in trying to get Railcar working on various ARM boards now that Docker is closed source and very hard to build

Guest 19 - G1
docker closed source ? wtf

Robert Wolff (Screencast) - R(
Community Form: https://goo.gl/forms/1yVOrjPkGFVU2PpY2
CODE: OPENCELLO
