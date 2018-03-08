---
title: OpenHours ep 93 - Software Defined Radio on the DragonBoard 820c
author: Robert Wolff
date: 2018-02-28 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/OpenHours.png
    name: OpenHours.png
    thumb: OpenHours-thumb.png
categories: blog
tags: 64-Bit, 96Boards, Bubblegum96, HiKey, DragonBoard 410c, Linux, Linaro, ARM, SBC, Single Board Computer, AOSP, Android, Red Hat, Redhat, fedora, Open Source, deep learning, robert wolff, tensorflow, i.mx7, meerkat, NXP, qualcomm, technology, computer, community, Timesys, Maciej Halasz, IIoT

---

# Introduction

Episode 93, coming at you loud and clear! This week in OpenHours, we will be speaking with Don Harbin of Linaro about his work with the DragonBoard 820c! As it turns out, the board is now available (in limited quantities), and projects are already starting to surface. What projects will we demo on this episode, you may ask? Well, Don will be showing a very cool software defined radio, running on the DragonBoard 820c! The team had a chance to talk with him earlier this week, and it sounds like he has a few other surprises up his sleeve. Make sure to tune in to the show to get a peak at what this awesome new 96Boards is capable of! Of course, bring you questions and/or any other tech discussions to bring up during the broadcast, or hang around for when the recording shuts off for our AfterHours talk.

# Watch OpenHours #90 on YouTube

{% include media.html media_url="https://youtu.be/tag2sZZgqvY" %}

# Chat Log

```
Ragnar. - R
Hi. Time to update "Episode #90" at some point? 

Mani - M
@Ragnar: Sorry, we are facing some issues with our website
it will be fixed soon...

Ragnar. - R
The automagic count down works ok.

Mani - M
Yeah, the issue is with updating the contents

Dieter - D
Hi everybody

Mani - M
Hi Dieter

Sahaj - S
hi dieter

Daniel Thompson - DT
Hi Doctor Nick

Sahaj - S
connect.linaro.org

Robert Wolff (Desk) - R(
https://www.96boards.org/product/dragonboard820c/
Website for DB820c

Leonardo - L
Hello from Brazil
Tyeth, you are making me want a beer and a cigarette ... >.<

Dieter - D
Is the BlueJeans app for ARM Linux public available?

Robert Wolff (Desk) - R(
https://github.com/dbharbin/streaming-radio

Mani - M
@Dieter: I guess Don is using his browser

Alex Telitsine - AT
Are all 4 cores equal on 820E or is it two clusters with higher/lower performance?

Dieter - D
Its 2 clusters with Kryo Gold / Silver cores

Sahaj - S
new version of lscpu would help with questions like this ;)

Mani - M
https://github.com/torvalds/linux/blob/master/arch/arm64/boot/dts/qcom/msm8996.dtsi#L124

Guillermo - G
Did you run a stress test to see if they hold the temp under control?

Alex Telitsine - AT
What is general and performance difference between Gold/Silver cluster? is it maxumum CPU frequency? Architecture? Cache size? Is there any whitepaperts to readup on this?

Robert Wolff (Desk) - R(
You can read up a bit here: https://www.96boards.org/product/dragonboard820c/

Don Harbin - DH
https://www.rtl-sdr.com/about-rtl-sdr/

Robert Wolff (Desk) - R(
We will also address your questions in a minute
@Alex

Alex Telitsine - AT
thank you

Rajan - R
https://developer.qualcomm.com/hardware/snapdragon-820e/tools

Robert Wolff (Desk) - R(
https://github.com/96boards/documentation/tree/master/consumer/dragonboard820c/hardware-docs

Rajan - R
https://developer.qualcomm.com/hardware/snapdragon-820e
more soms
https://developer.qualcomm.com/hardware/dragonboard-820c

Tyeth - T
Think Winamp, shoutcast/icecast
internet radio basically

Mani - M
One of my college senior is a certified HAM radio operator

Alex Telitsine - AT
Is QDSP / Hexagon API supported on Ubuntu currently for the board?

KABIRI - K
Excuse me

Tyeth - T
What hardware would you recommend if an amteaur wants to send as well as receive SDR, I know about the power regs for ham operators.

KABIRI - K
i can talk cuz i 'm in library

Robert Wolff (Desk) - R(
@Kabiri no worries 

Ragnar. - R
In *theory* you should be able to do SDR with just the Dragonboard HW, because that's how the onboard GPS works, if I have understood correctly, right?

Tyeth - T
yeah, but thats recieve only correct? I assume you could do some horrendous pwm thing, but I was initially just gonna get a tv sdr stick and then look at sending later, but I'd prefer to start with the option for both.

Sahaj - S
haha remember the pwm radio on raspberry pi

Tyeth - T
u knows it ;)

Alex Telitsine - AT
Thanks for the docs link. looks like ~35% difference in max fequency between gold and silver:Two high-performance Kryo cores – gold cluster (2.15 GHz) Two low-power Kryo cores – silver cluster (1.593 GHz)

Dieter - D
Seems it will not work
yeah 
will do my best!

Bill - B
There is a cool CrowdSupply SDR project LimeSDR Mini, where they have examples of TV transmission, cell links, etc.

Tyeth - T
Thanks Bill, that LimeSDR sounded familiar, looks great
supposidly backed by space agency, can't be too bad

Dieter - D
it will come with Linaro Debian pre flashed

Sahaj - S
seems like just yesterday i was playing with a 700mhz 256mb arm sbc 

Alex Telitsine - AT
From multimedia performance perspective, will be good to know if  H/W H264/5 encode/decode is supported buy APIs like Gtreamer

Robert Wolff (Desk) - R(
IRC: #OpenHours and #96Boards
join us throughout the week in IRC! :D
@96Boards on all social media
Follow the countdown for next week's episode: https://www.96boards.org/openhours/

Mani - M
@Alex: You can raise the questions around 820c on ##linux-msm IRC channel

Robert Wolff (Desk) - R(
Form: https://goo.gl/forms/ao9ZHUS9Zvb20kMB2
CODE: OPENDB820C

Tyeth - T
did you check the forum? I had flashed windows android and debian within about 4hrs, but I knew fastboot from android and older devices

Robert Wolff (Desk) - R(
All three, or 4 hours for each?

Tyeth - T
total. It came with something, android i believe, I started on debian, got a new android then went for win10 to test. Back to debian straight away
yeah no powersupply, bit me initially, had to massacre a laptop charger

Mani - M
time to leave... See you guys next week
Happy Holi 

Ivan Farkas - IF
https://github.com/96boards/documentation/blob/master/consumer/dragonboard410c/guides/bootable-sd-card.md

Tyeth - T
sdcard or usb installer is the preferred option, with both gui and developer choice
So you want the after-install raspi-config utility to enable ssh/i2c/change password/user etc
?

Ragnar. - R
I feel that the full HD requirement for Android was somewhat hidden. (I had no problems to install Linux ...with fastboot.)

Tyeth - T
You need the sd gui option, and you need a 96boards-config utility for standard but complex post-install configuration changes
@Tyeth: Agreed

Pan - P
usermod -l new_username old_username

Tyeth - T
ah pan you beauty, is that an L after the hyphen? I assume you can find a similar stackoverflow debian question.
after typing startx my knowledge ends, just enough to be dangerous 

Pan - P

I found it from here: https://serverfault.com/questions/437342/how-can-i-rename-an-unix-user
Thanks, Pan!

Rajan - R
gtg... thanks robert
Thanks, Rajan!

Tyeth - T
you had an extfs driver?
ive paid for paragon linux jobby
the free ones weren't great
Tyeth, I do not... I actually dont use my Windows box for much else than gaming >.<

Tyeth - T
 Dangerous. I gave up on laggy pcs a few years ago and succumbed to the ps4
the intuitive option was "Getting started" then "windows"
but no gui sd so epic fail
you end up having to roll your own
but that is the linux way unfortunately, some distro's spoilt users with simple installs ;D
Bye Guillermo
Bye Don, thanks
Thanks all, cheers robert
Cheer! :D
```