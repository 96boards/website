---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-08-31 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 68 Recap - Tech Talk
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
- Open Hours
- tech
- tech talk
- fuscia os
- google
- operating system
- protomezzanine
---
# Introduction

In this episode we talk about Fuchsia OS, Fedora Flock, the new protomezzanine from the mezzanine-community repository and more! Join us as we meet with Sahaj Sarup from [Geek Till it Hertz](https://www.youtube.com/user/sahajsarup) to discuss his efforts around the Magenta Kernel and Fuscia OS for [96Boards](https://96boards.org/). The community chimes in on 96Boards issues and forums posts and finally we take a look at the 96Boards Mezzanine initiative and the newly tested "proto-mezzanine" (links, video and chat log below).

#### Links and resources

- [Mezzanine Initiative](https://github.com/96boards/mezzanine-community)
- [Proto-Mezzanine](https://github.com/96boards/mezzanine-community/tree/master/boards/kicad/proto-mezzanine)
- [Magenta Kernel](https://96boards.org/blog/googles-magenta-kernel-hikey-960/)

# Video

{% include media.html media_url="https://www.youtube.com/embed/b0k5lTMFXBA" %}

# Chat log

```
Sahaj Sarup - SS
cool

Todd Thal - TT
Yes...
Regrex r our friend...

Sahaj Sarup - SS
scream qualcomm, while wearing that glove

Robert Wolff - RW
https://github.com/96boards/website

Ragnar. - R
He's looking younger today. 

Robert Wolff - RW
Sahaj's last blog on Magenta kernel: https://www.96boards.org/blog/googles-magenta-kernel-hikey-960/
HiKey960 updates on development: https://www.96boards.org/blog/96boards-updates-development-aosp/
Mezzanine-Community initiative: https://github.com/96boards/mezzanine-community

Todd Thal - TT
Who is the maintainer (and or someone to give feedback about ?...)
https://github.com/96boards/website/blob/master/verticals/agriculture/README.md

Robert Wolff - RW
Shovan and myself are maintainers
@Todd
Verticals sections are a work in progress
https://github.com/96boards/mezzanine-community/tree/master/boards/kicad/proto-mezzanine

Sahaj Sarup - SS
Gpio ExpanderSX1509https://www.sparkfun.com/products/13601
Gpio ExpanderSX1509https://www.sparkfun.com/products/13601
Gpio Expander SX1509 https://www.sparkfun.com/products/13601

Robert Wolff - RW
Mani's Blog on Carbon: https://www.96boards.org/blog/zephyr-i2c-update-for-carbon/
Blog on Carbon: https://www.96boards.org/blog/bringing-the-carbon-to-life-bluetooth/
Andy!
To what do we owe the pleasure?

Andy from Workshopshed - AW
I was interested in the protoshield
Too slow
Work commitments
Maybe Tindie?
or a group buy thing
Cool

Todd Thal - TT
What is the "protoshield"?... links? wiki? GitHub about this?

Barry - B
The design in on GitHub so you can get your own printed locally

Robert Wolff - RW
@ToddL: https://github.com/96boards/mezzanine-community/tree/master/boards/kicad/proto-mezzanine

Tyeth - T
look at tax/customs categories, eg gift is low to zero tax.
i would put my first line of address as "Gift from my Gran" to reduce customs

Ilo Rivero - IR
Hi
Im here. Yeah october 19.
My pleasure to be part

Barry - B
https://twitter.com/uk_baz/status/903009566673309700

Tyeth - T
Has anyone found E-paper with driver over a couple of inches?
the pong looked good

Todd Thal - TT
I have a comment about "platform/frameworks/languages" "religion" issue that I see coming up, similar to problem like early ( and maybe even today) w linux (.. ask maddog history N lessons learned to do differently now)... when Robert asks I can mention the specifics I just observed...

Ilo Rivero - IR
Cool

Andy from Workshopshed - AW
Too close

Tyeth - T
you following the nodejs foundation stuff todd? i used to thnk it was a great example of dealing with commercial and technical and public stakeholders / framework religion until i heard from rodd vagg about madness today.
What's your latest beef?

Carl - C
Congrats!

Sahaj Sarup - SS
Android Oreo Hikey960https://www.youtube.com/watch?v=6JJQvyRqgl4

Robert Wolff - RW
@Sahaj: thanks

Sahaj Sarup - SS
https://www.youtube.com/watch?v=6JJQvyRqgl4

Carl - C
anyone with experience on openstack

Robert Wolff - RW
@Carl: are you the same Carl that added me on Linkedin the other day?

Carl - C
yup that's me

Robert Wolff - RW
Great!
Just wanted to make sure before I assumed when answering your message
thanks for connecting ! 

Carl - C
thank you
they all accept docker corret?

Tyeth - T
no to openstack only research. similarly there are starting to bring platform agnostic abstraction libraries for cloud provided services. still lambda is a bit new for that yet

Dieter - D
Sorry guys, I had to leave! Was a pleasure to listen 

Robert Wolff - RW
Thanks, Dieter!

Carl - C
FWIW ina a study or errors per lines of code on open sorce software postgresql was the best by far.
mssql was realy a port of sybase

Tyeth - T
and all so context specific

Andy from Workshopshed - AW
Catch you all later. Will check out the proto mezz on the recording. Cheerio

Tyeth - T
bye Andy

Robert Wolff - RW
Thanks, Andy!
Have a nice day

Kurt Taylor - KT
@Carl, I have been working on OpenStack for 4+ years, what do you need? Find me on freenode (krtaylor)

Todd Thal - TT
Http://databasecolumn.vertica.com/database-innovation/mapreduce-a-major-step-backwards
Michaels stonebreakers critique to mapreduce

maddog - M
I get a 404 on that database link

Todd Thal - TT
Link above is broke ...here is a working one
https://homes.cs.washington.edu/~billhowe/mapreduce_a_major_step_backwards.html

Carl - C
Are the futire topics listed somewheere?

maddog - M
I quickly read it, and this paper was not so much "for SQL" as it was "MapReduce it not good".  The mentions of SQL was more as an example of a high level language to access the data, not necessarily SQL itself.

Robert Wolff - RW
www.96boards.org/openhours/

Carl - C
OK - perfect1
it sounds like a reference linux core to me

Robert Wolff - RW
@Carl: could be
```