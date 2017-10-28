---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-10-19 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 75 Recap - OneRF, 96Boards IoT Gateway
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
- onerf
- brazil
- robert wolff
- radio frequency
- sensor network
- IoT
---
# Introduction

OneRF designed a robust IoT gateway based on 96Boards DragonBoard 410c for outdoor and industrial IoT. With DragonBoard 410c, the gateway
has edge processing capacity. This means processing happens closer to the source, via the gateway, instead of traveling to the cloud. 
 
The gateway collects raw data from sensors and devices, processes it locally and communicates only information to cloud. DragonBoard 410c
board will enable the use of Qualcomm's NPE (Snapdragon Neural Processing Engine). NPE allows the running of trained neural networks
without a need for connection to the cloud. Complex data analysis and process decision could be made in the gateway.

The radio modules can be embedded in diverse applications. Since the contest, we have more solutions that we would like to show on
OpenHours: An Intelligent Photocell for Public Lighting Control, a Smart Meter application, Monitoring Module for Industry, a Waste and
Water Level Monitoring module and a Parking Sensor device.

We look forward to seeing you in our next episode!

#### Links and resources

- [OneRF Website](http://www.onerf.com.br/index-en.html)
- [OneRF GitHub](https://github.com/GustavoRP/ReSeNI)
- [OneRF Instructables](http://www.instructables.com/id/Inteligent-Level-Sensors-Network)

# Video

{% include media.html media_url="https://youtu.be/BG_ss-sprUY" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/secret/yI9DewffBbEPHu" %}

# Chat log

```
Carl - C
greetings robert want to take a peek at my mcgyver like capstone WIP

Robert Wolff - RW
Carl!

Amir - A
yes

Carl - C
I'll turn on my camera after 10 when main topic is finished

Mani - M
Todd: I saw your face :P You can't hide anymore

Robert Wolff - RW
https://youtu.be/dFcVMa1R_gA
DragonWally
https://www.96boards.org/blog/openhours-ep74-dragonwally/
https://www.96boards.org/blog/openhours-ep73-safe2med/

Todd Thal - TT
Robert (et al)..you do a super job of your online presence (lots of work)...blog; youtube; BlueJeans weekly; FB live; twitter; etc...LOTS of work "behind the scenes"!!!...

Ragnar_ - R
ok

Robert Wolff - RW
Will that be okay, @Ragnar?

Mani - M
Are you guys using Qualcomm NPE sdk?

Robert Wolff - RW
thanks, @Todd Thal! :D Yes lots of work 
lots of help too

Todd Thal - TT
What's in the Qualcomm NPR sdk?...advantages over any others on the market open source or commercial ?
Oops "NPE" not "NPR"?

ali - A
is it under android or linux

Robert Wolff - RW
AFAIK, Linux, @ali

ali - A
as long as I know NPE is not supporting 410c

Leonardo Gonçalves - LG
Are you using Contiki OS to build the mesh network?

ali - A
it needs OpenCL.so

Leonardo Gonçalves - LG
OK, thank you

Robert Wolff - RW
:D

ali - A
which is not available in Linux release

Mani - M
Contiki is the best bet for designing mesh networks using low cost uc's

ali - A
for dragonboard

Robert Wolff - RW
@ali, I will bring this up in a minute
@ali, good point

ali - A
thanks

Todd Thal - TT
Is openCl.so a "c" shared library file like many of the "lib*.so"'files?
(E.g. https://askubuntu.com/questions/40416/why-is-lib-libc-so-6-missing)

Cezar Menezes - CM
The NPE SDK supports Qualcomm® Snapdragon™ 820, 835, 625, 626, 650, 652, 653, 660, 630 and 450 as well as the Qualcomm® Snapdragon™ 820Am automotive platform. For Qualcomm® Adreno™ GPU support, libOpenCL.so must be present on device.

Mani - M
Todd: yes, of course

Todd Thal - TT
Does it conform to the std format that is accessible by gnu libutils ? E.g.
(https://www.gnu.org/software/libtool/)

Loic - L
opencl is not supported with the current open source driver on DB410c

Cezar Menezes - CM
Note: 450 is a recent inclusion in the list of support snapdragon families. We're getting there, I hope (410E).

Leonardo Gonçalves - LG
Will share the slides?

Cezar Menezes - CM
(supported)

Mani - M
Any shared library should conform to that standard AFAIK
@loic: good to shoot this out 

jean.marc - J
Why you did not use standard like LoRa or Sigfox or NB?

Robert Wolff - RW
@Leonardo, yes

Todd Thal - TT
What's are the complete list(s) of all sensor/data inputs? E.g. Temp/humidity/pollutants/air density/etc....?
Is there enough IO to expand to other sensor data?
When will I be able to buy the complete integrated system on Amazon?...; )

Robert Wolff - RW
@Todd, very good questions 

Leonardo Gonçalves - LG
How much it costs?

Cezar Menezes - CM
ANATEL = Brazilian FCC

Robert Wolff - RW
Yes

Tyeth - T
link for the power monitoring details?

Robert Wolff - RW
OneRF Website: http://www.onerf.com.br/index-en.html
OneRF Github: https://github.com/GustavoRP/ReSeNI
OneRF Instructables: http://www.instructables.com/id/Inteligent-Level-Sensors-Network

Tim D. Hammer - TH
I missed what SoC is on the sensor module. I heard them mention that it is running the TI OS. Is it the SimpleLink CC1310?

Todd Thal - TT
Will there a "ruggerized" waterproof enclusoure for the system like otterbox?
http://www.otterbox.com/en-us/defender-series

Tyeth - T
thanks

Todd Thal - TT
Have em contact otterbox...
History of otterbox "ruggezing" things (note I do NOT work for otterbox but love products)
https://en.m.wikipedia.org/wiki/OtterBox

Robert Wolff - RW
https://github.com/96boards/mezzanine-community

Todd Thal - TT
Clap...clap...clap (thumbs up)!!!

Robert Wolff - RW
Community Form: https://goo.gl/forms/vlFQ06XSotScpyc83

Todd Thal - TT
Ragnar is a god!!!!

ali - A
sure
deep learning on dragon board
made tensorflow for it
will share it

Cezar Menezes - CM
Nice! Cool!

ali - A
sorry for mic problem

Ragnar_ - R
code for the form

Robert Wolff - RW
OPENONERF
Sorry @ali
We will troubleshoot your mic later

OneRF_2 - O
gustavo@onerf.com.br

Mani - M
Time to leave

Robert Wolff - RW
Thanks, Mani!
See you soon

Mani - M
See you guys next week 

Sahaj Sarup LTE - SL
gtg bya all!

Robert Wolff - RW
Thanks, Sahaj!

Al Thomas - AT
It's actually called the MIT Center for Bits and Atoms but otherwise incorrect... I think he is talking about the FabLab... or maybe the Engine but otherwise wrong...

Todd Thal - TT
Yes!...let me get the links...

Christian - C
no sorry my mic is not working

Todd Thal - TT
http://fablabhub.org/product/cnc-machining-workshop/

Christian - C
no just came along becauce was joining coursera

Al Thomas - AT
Yeah, FabLab is sooo 2016...

Todd Thal - TT
Sarah was one of the main managers at "bit n atoms"...
https://www.3dprinter.net/author/sarahboisvert
Al thomas you are SOOo (old school) spaceballs (1987)...; )
https://m.youtube.com/watch?v=nRGCZh5A8T4

Al Thomas - AT
LOL

Christian - C
Thanks was interesting

Todd Thal - TT
Video is about releasing a new movie before the current is even released ...; )
Santa Fe startup maker space
https://makesantafe.org
Future of 3D
https://m.youtube.com/watch?v=hz7mTjtTxSk

OneRF - O
hello Rafaela

Todd Thal - TT
http://www.cba.mit.edu/about/index.html

Dimuth Deja - DD
Thanks (y)

Todd Thal - TT
Post both emails
gustavo_r_p@hotmail.com
rafaelchrist@gmail.com
There you go, Todd 

Carl - C
greetings robert want to take a peek at my mcgyver like capstone WIP

Robert Wolff - RW
Carl!

Amir - A
yes

Carl - C
I'll turn on my camera after 10 when main topic is finished

Mani - M
Todd: I saw your face :P You can't hide anymore

Robert Wolff - RW
https://youtu.be/dFcVMa1R_gA
DragonWally
https://www.96boards.org/blog/openhours-ep74-dragonwally/
https://www.96boards.org/blog/openhours-ep73-safe2med/

Todd Thal - TT
Robert (et al)..you do a super job of your online presence (lots of work)...blog; youtube; BlueJeans weekly; FB live; twitter; etc...LOTS of work "behind the scenes"!!!...

Ragnar_ - R
ok

Robert Wolff - RW
Will that be okay, @Ragnar?

Mani - M
Are you guys using Qualcomm NPE sdk?

Robert Wolff - RW
thanks, @Todd Thal! :D Yes lots of work 
lots of help too

Todd Thal - TT
What's in the Qualcomm NPR sdk?...advantages over any others on the market open source or commercial ?
Oops "NPE" not "NPR"?

ali - A
is it under android or linux

Robert Wolff - RW
AFAIK, Linux, @ali

ali - A
as long as I know NPE is not supporting 410c

Leonardo Gonçalves - LG
Are you using Contiki OS to build the mesh network?

ali - A
it needs OpenCL.so

Leonardo Gonçalves - LG
OK, thank you

Robert Wolff - RW
:D

ali - A
which is not available in Linux release

Mani - M
Contiki is the best bet for designing mesh networks using low cost uc's

ali - A
for dragonboard

Robert Wolff - RW
@ali, I will bring this up in a minute
@ali, good point

ali - A
thanks

Todd Thal - TT
Is openCl.so a "c" shared library file like many of the "lib*.so"'files?
(E.g. https://askubuntu.com/questions/40416/why-is-lib-libc-so-6-missing)

Cezar Menezes - CM
The NPE SDK supports Qualcomm® Snapdragon™ 820, 835, 625, 626, 650, 652, 653, 660, 630 and 450 as well as the Qualcomm® Snapdragon™ 820Am automotive platform. For Qualcomm® Adreno™ GPU support, libOpenCL.so must be present on device.

Mani - M
Todd: yes, of course

Todd Thal - TT
Does it conform to the std format that is accessible by gnu libutils ? E.g.
(https://www.gnu.org/software/libtool/)

Loic - L
opencl is not supported with the current open source driver on DB410c

Cezar Menezes - CM
Note: 450 is a recent inclusion in the list of support snapdragon families. We're getting there, I hope (410E).

Leonardo Gonçalves - LG
Will share the slides?

Cezar Menezes - CM
(supported)

Mani - M
Any shared library should conform to that standard AFAIK
@loic: good to shoot this out 

jean.marc - J
Why you did not use standard like LoRa or Sigfox or NB?

Robert Wolff - RW
@Leonardo, yes

Todd Thal - TT
What's are the complete list(s) of all sensor/data inputs? E.g. Temp/humidity/pollutants/air density/etc....?
Is there enough IO to expand to other sensor data?
When will I be able to buy the complete integrated system on Amazon?...; )

Robert Wolff - RW
@Todd, very good questions 

Leonardo Gonçalves - LG
How much it costs?

Cezar Menezes - CM
ANATEL = Brazilian FCC

Robert Wolff - RW
Yes

Tyeth - T
link for the power monitoring details?

Robert Wolff - RW
OneRF Website: http://www.onerf.com.br/index-en.html
OneRF Github: https://github.com/GustavoRP/ReSeNI
OneRF Instructables: http://www.instructables.com/id/Inteligent-Level-Sensors-Network

Tim D. Hammer - TH
I missed what SoC is on the sensor module. I heard them mention that it is running the TI OS. Is it the SimpleLink CC1310?

Todd Thal - TT
Will there a "ruggerized" waterproof enclusoure for the system like otterbox?
http://www.otterbox.com/en-us/defender-series

Tyeth - T
thanks

Todd Thal - TT
Have em contact otterbox...
History of otterbox "ruggezing" things (note I do NOT work for otterbox but love products)
https://en.m.wikipedia.org/wiki/OtterBox

Robert Wolff - RW
https://github.com/96boards/mezzanine-community

Todd Thal - TT
Clap...clap...clap (thumbs up)!!!

Robert Wolff - RW
Community Form: https://goo.gl/forms/vlFQ06XSotScpyc83

Todd Thal - TT
Ragnar is a god!!!!

ali - A
sure
deep learning on dragon board
made tensorflow for it
will share it

Cezar Menezes - CM
Nice! Cool!

ali - A
sorry for mic problem

Ragnar_ - R
code for the form

Robert Wolff - RW
OPENONERF
Sorry @ali
We will troubleshoot your mic later

```
