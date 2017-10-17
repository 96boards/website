---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-09-14 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 70 Recap - The 96Boards Project Cycle
# This is the featured background image of the blog which resides under _assets/
featured_image: OpenHours.png
thumbnail_image: OpenHours-thumb.png
# Tags related this post. For use in tag filters that will be used in future updates.
tags:
- 64-Bit
- 96Boards
- OpenHours # Use this tag if you want it to be featured in the openhours blog sections.
- Bubblegum96
- HiKey
- DragonBoard 410c
- Linux
- Linaro
- ARM
- SBC
- Single Board Computer
- AOSP
- Android
- Red Hat
- Redhat
- fedora
- Open Source
- Porject
- Project cycle
- contribution
---
# Introduction

Does anyone remember the home surveillance project created by Mani Sadhasivam (96Boards Applications engineer) several months ago? Well since then, people from Qualcomm have taken this project and turned it into a nice little DIY kit! What better place to showcase this kit and a great demo than on OpenHours… And who better to explain these efforts than Rajan Mistry, Qualcomm’s seasoned OpenHours representative of the show (don’t quote me on that one). Either way, Rajan joins us all the time on OpenHours, and this time he joined us as our featured guest. We spoke about the project it self, the reason behind it’s consumption, and the eventual contributions that were made by Rajan and his team back into the project.

#### Links and resources

- [96Boards GitHub](https://github.com/96boards)
- [Projects Org](https://github.com/96boards-projects)
- [Home Surveillance Project](https://github.com/96boards-projects/home_surveillance)

# Video

{% include media.html media_url="https://youtu.be/X9BbtoQLgW4" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/RobertWolff5/open-hours-home-security-episode-70" %}

# Chat log

```
Todd Thal - TT
Where r the raging masses today?
Is jean Marc related to jean Claude van damn?....; )

jean.marc - J
Nooo :-D :-D
Its for sure a french name ahaha

Todd Thal - TT
But jean Marc can kick "96 boards butt"...; )
https://96boards.org/pinout/

Michael Welling - MW
do we have a link to mezzanine standoffs?

Todd Thal - TT
Cool Pinout page congrats to all contributors...

Robert Wolff - RW
Thanks @Todd Thal!

Sahaj Sarup - SS
thanks Todd!

Michael Welling - MW
found this:https://discuss.96boards.org/t/standoffs/690

Sahaj Sarup - SS
aah.. these
I got mine with the mediatek x20, just have thoes

Mani - M
https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/
https://github.com/96boards-projects/home_surveillance
https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/
https://www.96boards.org/blog/part-3-home-surveillance-project-96boards/
https://www.96boards.org/blog/part-4-home-surveillance-project-96boards/
https://www.96boards.org/blog/part-5-home-surveillance-project-96boards/

Michael Welling - MW
https://github.com/96boards/mezzanine-community

Robert Wolff - RW
Thanks @Michael Welling!
https://96boards.org/product/dragonboard410c/

CEZAR - C
Rajan, I have question :This benchmark chart is considering "USB Webcam" or "MIPI-CSI Camera" performance?
Thanks!

Todd Thal - TT
At the end after your face is recognized... do you allow of deflect the person like the "bridge of death" in the Monty python holy grail movie?....https://m.youtube.com/watch?v=pWS8Mg-JWSg

Christine Jorgensen - CJ
Hey Rajan I can swing by if you need a new face to train on and track ;-)
unlaiden swallow
european swallow
what is my favorite color
electric shock

maddog - M
There was a GNU/Linux distribution that allowed you to log in through facial recognition.   Perhaps you could give high voltage through the keyboard if your face was not recognized.
Asturux was the distribution.

Todd Thal - TT
Can u interface to z-wave to control locks etc ?
https://en.m.wikipedia.org/wiki/Z-Wave

Mike Levine - ML
Two weeks from now Robert and Openhours will be live with a great panel.   We need help spreading the word.  If you know of San Francisco based Engineers feel free to have them attend this event.   https://www.96boards.org/go/sfo17-connect-reach/ https://www.96boards.org/go/sfo17-connect-reach/

Christine Jorgensen - CJ
yes, exactly

Mike Levine - ML
This is 2 hours from 2pm - 4pm PST on September 28th.    Please spread the word and have the person register for the event on the page.   Meant to only paste the URL once

Christine Jorgensen - CJ
It was done as a university hack project for elderly with limited mobility to open the door to family or friends

CEZAR - C
Dreaming of "TensorFlow" running with "Adreno 306" GPU + CPU in Linux.

Sahaj Sarup - SS
maddog http://old.asturix.com/os/?

Mani - M
@maddaog: it is not maintained anymore right?

Christine Jorgensen - CJ
In fact, Qualcomm put together a new "Quick Start" guide for the university students at the Major League Hacking managed hackathons at https://developer.qualcomm.com/mlh
This doc steps a newbie through how to boot and run the DragonBoard 410c headless (using the student's laptop as the monitor), setting up their IDE, then how to get started with GPIO, OpenCV, libmraa, etc, with sample code / projects

Robert Wolff - RW
https://github.com/96boards-projects

Christine Jorgensen - CJ
His is a much more fun role! 
(Says his boss)

Robert Wolff - RW
@Christine :P

CEZAR - C
Rajan, could you please share with us the scripts for rebuilding OpenCV with the optimizations you mentioned?
Cool! Thank you.

Robert Wolff - RW
https://github.com/96boards-projects/home_surveillance

Christine Jorgensen - CJ
Yes, definitely.  The Product Team is always very interested in this type of feedback.

Mani - M
@christine: thanks
https://goo.gl/forms/m4fqrIxoIwYb4LS72
CODE: OPENQC
https://www.slideshare.net/

Todd Thal - TT
https://www.slideshare.net/mobile/search/slideshow?q=96boards
Many more results w Qualcomm
https://www.slideshare.net/mobile/search/slideshow?q=96boards+Qualcomm

Christine Jorgensen - CJ
Very awesome!!
Use 96Boards instead of Pi's

Robert Wolff - RW
Yes

Sahaj Sarup - SS
and for really good reasons too

Mani - M
fully opensource, great product support etc...
https://www.quora.com/96Boards-or-Pandaboard-Which-is-more-suitable-for-developing-an-Android-device

Sahaj Sarup - SS
my main concern with the raspi is that it doesn't use a production SoC
db410c has that advantage
So when someone learns this particular SoC, This can be actually used in the industry

Mani - M
Also, Raspi has wired startup procedure (Starts off from GPU) :P
It makes it more difficult to port ATF(Arm Trusted Firmware)

Sahaj Sarup - SS
reminds me of zx spectrum i guess

Ragnar. - R

Sahaj Sarup - SS
CPU is just a slave to the GPU

Robert Wolff - RW
Sahaj has been there for a Robert / maddog talk
politics and religion :O

Mani - M
Time to leave... See u guys next week

Sahaj Sarup - SS
see ya mani...

Robert Wolff - RW
Bye Mani!
Thanks!

CEZAR - C
It would be awesome to see the same level of support DB410c has with Android OS, available for Linux OS.

Robert Wolff - RW
DB410c Linux support is better than Android

Sahaj Sarup - SS
yeahh... ooh need to ask a quick ques to rajan

CEZAR - C
I mean : Hexagon SDK, Adreno SDK, FastCV, etc... Support for the Snapdragon 410E.

Robert Wolff - RW
Yes, true

Christine Jorgensen - CJ
Wondering if there would be a way to tap into Amazon for the kit rental, as they already have a textbook rental program
The kit checkin and test for functionality though would obviously be a bit more work than checking a textbook for damage
So TRUE!!!
Maybe a student gets extra course credit if they contribute a project?

Robert Wolff - RW
yes
That could be something for hackathon
retention

Barry - B
I am out of here.  Thanks

Mike Levine - ML
Great call and look forward to meeting you Rajan and Christine.   I need to drop off.

CEZAR - C
I though it was a snowboard 

maddog - M
If the kit had a "position for every component" it would be relatively easy to check, and the rental would over "checkin", with replacement being extra if necessary.

Todd Thal - TT
Robert / maddog would it be worth the time to network with O'Reilly / Addison Wesley (etc) to get a mention in DSP books and-or a kit they could buy with use in the books?
Maddog might know Tim (O'Reilly) or Allen Downey (thinking in DSP) http://greenteapress.com/wp/think-dsp/
Maddog I just published a great book on DSP's..
I will see if I can make contact with Allen

Sahaj Sarup - SS
maddog, do you know madduck
aka martin f kraft

Todd Thal - TT
Is there a "robotic suitcase" 96 boards project ?...; )

CEZAR - C
Thanks, everyone. Good-bye!

Christine Jorgensen - CJ
Nice show today!
Bye!
```
