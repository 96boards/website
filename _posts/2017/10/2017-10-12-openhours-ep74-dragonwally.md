---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-10-12 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 73 Recap - DragonWally
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
- DragonWally
- camera
- opencv
- computer vision
- stereo vision
- smart home
- smart city
- smart cities
---
# Introduction

DragonWally brings two high-resolution cameras to take pictures of the same scene from different points of view. An epistolary geometry algorithm then calculates the distance of the detected objects, based on subtle discrepancies between the two images. Get ready, because this week spoke with the DragonWally team on OpenHours! Cezar Menezes and Cleber Picolo, Engineers from the DragonWally team joined us to talk about their project, the prototype, and their path to creating a product around this awesome idea. We were ultimately presented with several demos and of course took the opportunity to ask questions and address any other 96Boards concerns during the episode.

If you have time to check out the video below, you will see face detection, recognition, cat detection, cloud computing, stereo vision and depth sensing/calculation and much more! Be sure to check out the many resources, videos and chat low below.

#### Links and resources

- [DragonWally Website](http://www.dragonwally.com)
- [DragonWally GitHub](https://github.com/cezmen/dragonwally)
- [Instructables](http://www.instructables.com/id/DragonWally/)
- [Embarcados Website](https://contest.embarcados.com.br/projetos/sistema-de-identificacao-de-pessoas-baseado-em-visao-computacional-estereoscopica/)

##### Contacts:

- Cezar Menezes: cezar.menezes@dragonwally.com
- Cleber Picolo: leber.picolo@dragonwally.com

# Video

{% include media.html media_url="https://youtu.be/dFcVMa1R_gA" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/RobertWolff5/dragon-wally-96boards-openhours-episode-74" %}

# Chat log

```
Cezar Menezes - CM
Hi, Robert. Good Morning!
Hello, Cezar! Are you ready? :D

Cezar Menezes - CM
 I hope so. Countdown ! Finishing the setup here.

Robert Wolff - RW
nice
Let me know if you would like to test anything

Ragnar. - R
Hi Cezar. May the demo gods be with you.

Cezar Menezes - CM
Hahaha. Demonstration Effect, go away !
We're testing cameras (Laptop, USB Cam) and screen sharing. I hope our internet speed is OK.
! :P lol @ragnar

Ragnar. - R
Robert hi, any news from my Santa Claus?

Cezar Menezes - CM
T minus twelve ...
lol
I was just messaging you on IRC
You havent recieved anything yet?
Let me ping him

Robert Wolff - RW
Safe2Med: https://youtu.be/qu14YpZsUhM

Rafael Christ - RC
https://www.irccloud.com/irc/freenode/channel/openhours

Sahaj Sarup - SS
forum https://discuss.96boards.org/

Robert Wolff - RW
http://dragonwally.com/
https://www.cnx-software.com/2017/10/11/dragonwally-is-a-stereoscopic-computer-vision-mezzanine-for-96boards-ce-boards/

Fabio Utzig - FU
What Coursera course have you mentioned?

Shovan Sargunam - SS
@laxman I have muted you. Please let me know if you want to talk

laxman - L
its okay
thank you

Ragnar. - R
And then you (as you said) need to calibrate and not just let the cameras dangle free.

Sujai - S
what is the typical value of T ..is it same as distance between the human eye.

Rafael Christ - RC
I would like to ask a question

Ragnar. - R
The distance they use is less than between our eyes. ~5cm I think.

Sujai - S
i see.thanks Ragnar.

Sahaj Sarup - SS
disabling composition in the desktop will help as well

Robert Wolff - RW
I think ideal distance between cameras is 80mm

Sahaj Sarup - SS
reduces load on the gpu significantly

Robert Wolff - RW
witch is the width of the 96Boards conumer edition spec
which*

Sujai - S
but the distance will depend on the FoV of the lens

Mani - M
@sahaj: we should put up a doc for disabling LxQT rendering in guides section

Robert Wolff - RW
https://github.com/96boards/mezzanine-community

Sujai - S
will the board get 2 separate camera streams or (ie.) will DB410c see these 2 cameras as 2 v4l2 devices.
or will the board provide a single camera stream (single v4l2device) to the DB410c

Mike Levine - ML
Need to jump off but thanks!  Very interesting.

Sujai - S
is the algorithm running on the DB410c CPU?
very nice to see the performance
thanks.

Carl - C
mount it on a drone?

Robert Wolff - RW
@Carl yes!

Todd Thal - TT
Can u take questions ?

Ragnar. - R
makes sense - dragons can fly

Mani - M
Robert has a black cat ;-)

Carl - C
the dragonfly

Ilo Rivero - IR
You could implement the cat detection function to track wild animals in a Forest.

Carl - C
deer populations - great idea

Keith Lee - KL
When the application goes headless, you could put it on the new Altera 96Board and use a soft vector processor for computer vision and distance measurement.

Mani - M
Are you utilising GPU for running OpenCV?

Sahaj Sarup - SS
would it be possible to maybe have the camera distance adjustable using sliders or somthing

Rajan - R
we had a request for cow tracking, basically take car asset trackers and put them on cows

Carl - C
so many uses - ocean buoys

Todd Thal - TT
Awesome demo Cesar; Robert; etc....

Robert Wolff - RW
DragonWally website: http://dragonwally.com/

Todd Thal - TT
URL for Cesar's demo and GitHub ?
Clap...clap...clap...

Robert Wolff - RW
:D

Todd Thal - TT
Who's the guy w the thumbs up?...; )

Robert Wolff - RW
me! lol :O

Mani - M
Cat watcher..lol

Todd Thal - TT
What is the "packet size" for the CDMA beer?...; )

Carl - C
great demo - thanks

Todd Thal - TT
Clap...clap...clap...

laxman - L
thank you

Cezar Menezes - CM
Sure! It will be a pleasure!

Robert Wolff - RW
Thank you!

Ragnar. - R
...and the Ragnar form

Robert Wolff - RW
Poplar: https://96boards.org/product/poplar/
Ah yes!
Community Form: https://goo.gl/forms/hbGf6W3qxQvBzve23
Code: OPENDRAGONWALLY

Daniel Thompson - DT
https://github.com/daniel-thompson/poplar-usbstick

Todd Thal - TT
When will your Cat "Corona" be doing a demo?...; )

Robert Wolff - RW
Maybe next week, we will get another sneak peak :P

Sahaj Sarup - SS
yes :p

laxman - L
see you

Cezar Menezes - CM
Please, contact me if you have further questions:by email: cezar.menezes@dragonwally.comor www.dragonwally.com

Keith Lee - KL
Okay, time to get some real work done.  Thanks!

Cezar Menezes - CM
(cezar.menezes@dragonwally.com)

Robert Wolff - RW
robert.wolff@linaro.org
Krohna
Soul Eater

Cezar Menezes - CM
Not Corona

Robert Wolff - RW
Crona, Maka, Soul
Kroh-na

Cezar Menezes - CM
I knew it was Chrona or something similar !

Todd Thal - TT
https://numenta.com

Robert Wolff - RW
Thanks, Todd. Interesting

Todd Thal - TT
Jeff Hawkins founder
https://numenta.com
https://en.m.wikipedia.org/wiki/Jeff_Hawkins
Google jeff's talks on YouTube ...

Cezar Menezes - CM
TPD3S014 is the Part Number for the USB protection device IC.
Children learn to detect Cats and Dogs with just a few examples.

Todd Thal - TT
Machine learning lecture (Jeff Hawkins)
https://m.youtube.com/watch?v=11orSg1OU6A

Cezar Menezes - CM
Neural Networks need lots of positive and negative samples (million of images).

Todd Thal - TT
Don't know if million dollar challenge is mentioned ...yes children can do ...our best tech CAN NOT (yet)...quantum Comp problem ...

Mani - M
Thanks @cezar
Gotta go. See you guys nexr week

Rajan - R
gotta go, cheers guys

Cezar Menezes - CM
Thank you
```
