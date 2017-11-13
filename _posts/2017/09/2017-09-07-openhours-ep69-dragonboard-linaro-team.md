---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-09-07 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 69 Recap - DragonBoard & Linaro Team
# This is the featured background image of the blog which resides under _assets/
image:
    featured: true
    path: /assets/images/blog/OpenHours.png
    name: OpenHours.png
    thumb: OpenHours-thumb.png
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
- qualcomm
- arrow
- electronics
- landing team
- debian
- open embedded
---
# Introduction

In this episode of OpenHours, we met with Nicolas Dechesne of Linaro! Nico works as tech lead for a team within Linaro focused on software enablement (among many other things) around the Qualcomm Snapdragon chipsets. Him and his team are constantly on the move, working to provide latest and greatest features for one of our popular 96Boards, the DragonBoard 410c. From OpenEmbedded builds to the pre-built Debian based Linaro builds, this team is pretty much involved in it all.

In this video, we had the chance to talk to him about the history of his team's work with Snapdragon. We later spoke of current releases, and the work going into future releases. If you are interested in finding out more of what Linaro and Qualcomm have in store around the DragonBoard 410c, this is the episode for you!

#### Links and resources

- [Qualcomm Developer Network](https://developer.qualcomm.com/)
- [96Boards GitHub](https://github.com/96boards/)

# Video

{% include media.html media_url="https://youtu.be/nBxjbBqUF24" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/secret/sTSS4KbYR0u89Z" %}

# Chat log

```
Todd Thal - TT
Test
1...2..3..

Todd Thal - TT
"Good Morning 96Boards"...(said to the cadence like "Good morning Vietnam" - aka Robin Williams)...; )

Rafael Christ - RC
Hello guys

Mani - M
Robert caught COLD 

Todd Thal - TT
Congrats Sahaj !!!!!
Does sahaj have:
1). A GitHub repository that shows all his great 96boards/linaro work?
2). A blog ?
3). A LinkedIn account (contact info)?

Sahaj Sarup - SS
github.com/ric96

Todd Thal - TT
Tanks [. ]--
Sahaj your irc handle again?

Sahaj Sarup - SS
linkedin: https://in.linkedin.com/in/sahaj-sarup-5736a3b0
#ric96
Todd: I do have a blog, but haven't updated it too much lately, just a bunch of my videos. http://geektillithertz.com/wordpress/

Todd Thal - TT
Are they "kernel engineers", or "distro developers", or add-on applications engineers? "What areas do they cover ?"

Sahaj Sarup - SS
why does ubuntu need licence for binaries?
Isn't it completely open?

Todd Thal - TT
Now it sounds like they also do "installation development" ala kickstart , etc...

Daniel Thompson - DT
The licensing of ubuntu binaries has been controversial: https://www.fsf.org/news/canonical-updated-licensing-terms (and can cause trouble
for non-copyleft components)

Sahaj Sarup - SS
aah... that explains stuff. thanks Daniel.
will probably read it all later

Todd Thal - TT
Just saw linaro adds more to the linux kernel development than suse/Ibm/etc...
https://www.linuxfoundation.org/blog/the-top-10-developers-and-companies-contributing-to-the-linux-kernel-in-2015-2016/
http://go.linuxfoundation.org/linux-kernel-development-report-2016

Daniel Thompson - DT
Todd: Its a multi-skill team but there is a significant number of very strong kernel developers (but there's definitely credit due outside
Linaro too... especially so for the GFX driver).

Todd Thal - TT
Just saw linux kernel went from 10,000 lines of code (first release 1991) to 22,000,000.00 lines of codes ...hecka more complex
http://storage.pardot.com/6342/155282/Publication_Linux_Kernel_Development_Report_2016.pdf

Mani - M
todd; thanks to all driver developers :P

Sahaj Sarup - SS
half of them are just defconfigs for arm :p, jk

Carl - C
I willl be trying to install Crystal language per these instructions on my Dragonboard: https://crystal-lang.org/docs/installation/ 
probably on the latest Debian build.

Sahaj Sarup - SS
it's not stolen, it's just forked :p

Mani - M
sahaj: lol

maddog - M
Letting people know is important!

Sahaj Sarup - SS
i think win10 iot uses that
the usb tool

maddog - M
todd; that size would have been a lot worse without the I/OI restructuring work done about five years ago.

Kurt Taylor - KT
@todd, keep in mind that several of the kernel contributing companies that you mention (for example IBM) also had assignees into Linaro
that helped with those contribs  

Todd Thal - TT
Thanks maddog...don't even get me started on the fact that the latest Redhat (full enterprise release) is approximately 380 million lines
of code...and (sadly) many "Silicon Valley cloud PR execs" feel..just spin up Redhat VM(s) in the cloud (AWS/google cloud/etc.) in docker
or open stack..and everything will be fine!...(e.g. No more need for Linux admins/devops/developers..whoever)....
...and haven't even mentioned security issues or patches...

Ragnar. - R
How "open" is the GPS interface, do you get raw pseudornges and carrier phase from a DragonBoard?

Todd Thal - TT
Have any of you networked with Allen Downey to see if dragonboards can be mentioned parallel to his "thinking in DSP" project ?
http://greenteapress.com/thinkdsp/thinkdsp.pdf
http://greenteapress.com/wp/think-dsp/
Downey info:
http://www.allendowney.com/wp/
https://github.com/AllenDowney
PS: I am VERY prejudiced (positively) towards Allen as he was my TA at cal from the early 1990's and I have networked with him since then
(amazing guy!)...
Community form: https://goo.gl/forms/UHL26GBhXlGb2Vn12
CODE: OPENDB

Ragnar. - R
rAnges
typo

Robert Wolff - RW
@Todd: Have not networked with Allen
@Todd: Should I? Do you think it would be worth it considering the state of DSP?

Michael Welling - MW
hey everyone

Robert Wolff - RW
Hello!

Mani - M
Hey Michael

Tyeth - T
hi

Michael Welling - MW
I am just chatting today I guess

Todd Thal - TT
Robert I will email/talk offline...also your connections at Coursera would be great (along with several of those Coursera profs!...) Allen
is VERY well known in the python (O'Reilly / linux / HPC / DSP / teaching ..) communities (maddog probably knows him ...he attended call
during "Matt ewings" cal days...1990's...)

Robert Wolff - RW
@Todd: sounds good!  please keep me posted
Join our IRC Channel at #OpenHours and #96Boards
Follow us on Twitter @96Boards @sdrobertw :P
and instagram! @sdrobertw
and youtube /c/96boards

Michael Welling - MW
even I have upstream patches 

Mani - M
me too 
Michael: did u co-maintain any subsystems?

Michael Welling - MW
no but I help on the IIO, SPI, and GPIO subsystems

Tyeth - T
thanks

Mani - M
great!
Need to leave.. See u guys

Rafael Christ - RC
See you guys

Rajan Mistry - RM
ok robert, got to go
I will see you tomorrow morning at 9:30?

Robert Wolff - RW
Yes, Rajan
I will proabbly be there at 9:00

Rajan Mistry - RM
ok, I will try to be there at 9 too
see you then

Robert Wolff - RW
thank, later!
```
