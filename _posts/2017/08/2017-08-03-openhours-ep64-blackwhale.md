---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-08-03 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 64 Recap - Blackwhale (HIJ) and 96Boards
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
---
# Introduction

In this week's episode of OpenHours (August 3rd), we spoke with Xingchao and Wing from Blackwhale which is an innovative technology company out of China. Blackwhale focuses on smart audio and voice recognition technologies and recently joined 96Boards / Linaro as a manufacturing partner earlier this year!

This was the first time we ever had guests join us live out of China and besides a few technical difficulties at the beginning, the episode over all was very informative and fun.

We of course started out with our introductions, some talk of [Blackwhale the company](http://hij.ai/), got to see a very cool demo on the [96Boards](https://www.96boards.org/) [Bubblegum-96](https://www.96boards.org/product/bubblegum-96/), and shared several links. Please be sure to scroll down, there you will find this week's episode along with the [BlueJeans](https://www.bluejeans.com/) chat log! We hope to see you [next week](https://www.96boards.org/openhours/).

Thank you very much to our guests!

# Video

{% include media.html media_url="https://www.youtube.com/embed/zytkvFDeddU" %}

# Chat log

```
Sarah Levine - SL
https://github.com/96boards/mezzanine-community
https://en.wikipedia.org/wiki/96Boards

Robert Wolff - RW
https://www.96boards.org/blog/openhours-63-brazil-partner-san-diego/
https://www.96boards.org/product/neonkey/

Rafael Christ - RC
Hello Gustavo

Gustavo - G
Hi

Jam Zhou - JZ
Www.hij.ai

Guillermo - G
Guy, You need to allow some time for the sound delay so you don't talk on top of each other...

Robert Wolff - RW
yes

Todd Thal - TT
Very difficult to understand and follow along...

Robert Wolff - RW
yes

Guillermo - G
voice activated commands: how is it implemented?

Rajan Mistry - RM
I think their small board with microphone converts voice to text and sends to usb

Ragnar. - R
is there some filtering of the sound coming from the tv, so they would not be interpreted as commands or block actual commands?

Guillermo - G
Yes, I remember now that there are ASIC chips around for la long time that do some level of voice recognition.

Todd Thal - TT
Do they have an API to use the application ?

Sahaj Sarup - SS
is the language processing done on the device or on a server

Jam - J
yes, they package their techhology into their app.

Guillermo - G
On Windows IoT Core they have Cortana and is running local as far as I know.

Todd Thal - TT
Teach Robert basic Chinese commands see if it works...; )

Jam - J
their tech is based on AISpeech which is a Chinese company

Guest 5 - G5
Did long distance audio commands crash their system?

Ragnar. - R
ok, with more than one mic, you can tell where the sound comes from.

Rajan Mistry - RM
I think burger king ad a tv advertise that said, "OK Google" what is the best Burger king burger

Guillermo - G
so, does it recognize different speakers?

Rajan Mistry - RM
and all the home speakers sprung into action.

Jam - J
Guest5: will not , but will be more difficult.

Todd Thal - TT
Make a YouTube video!...

Jam - J
sure
http://v.youku.com/v_show/id_XMjg3NTYyNDA2MA====.html?source=
Here is one they have before.

Todd Thal - TT
Again would be nice to have an English YouTube video for those of us who don't speak Chinese ...

Jam - J
sure, better to have english explaination.

Gustavo - G
I am sorry. I think my connection is also chopping

Jam - J
increasing volume...

Ilo Rivero - IR
Yes, I would like to see the YouTube video. I was using Windows IoT SpeechRecognition on DragonBoard in our projet

Jam - J
change TV channel..
CCTV5
watch movie
playing music
play 5th one...
Hi Xiaole, Hongkong movie..
Back to the home page.
she said" I'm too young, I can't answer your question"
Nihao, Xiaole

Todd Thal - TT
Can u tell it to "make coffee" like the worlds first webcam...; )
(https://en.m.wikipedia.org/wiki/Trojan_Room_coffee_pot)

Ilo Rivero - IR
cool

Tyeth - T
fair play

Ragnar. - R
thumbs up

Jam - J
http://kitt.ai/

Todd Thal - TT
Woohoo Robert is that a worlds first??...; )

Tyeth - T
smashed it. even over sketchy network

Jam - J
here you can customise your wakeup-word
di yi ge

Todd Thal - TT
Robert add this talent to your resume/cv..; )

Guillermo - G
The entonation is also important in chinesse

Jam - J
need back to home page

Tyeth - T
still more reliable than Cortana

Robert Wolff - RW
yes

Sahaj Sarup - SS
Tyeth: lol

Rajan Mistry - RM
more reliable than siri i would say

Ilo Rivero - IR
yes, i agree

Todd Thal - TT
They "Robert" is more reliable than Siri...; )
Oops they mean "Robert" is more reliable

Tyeth - T
Url for company/product page?

Rajan Mistry - RM
plug does not translate to chinese i suppose

Jam - J
www.hij.ai

Robert Wolff - RW
hij.ai

Tyeth - T
thnx

Jam - J
all Chinese now, but you can traslate it

Todd Thal - TT
Jam anyone looking to use in autonomous cars/vehicles?

Jam - J
yes.
http://www.aispeech.com/

Todd Thal - TT
Use in factories with robots?

Tyeth - T
checkout the BBC iplayer looking into microsoft voice recognition to curate content according to the recognised voice profiles in the room. article was last few days.

Jam - J
http://www.aispeech.com/index.php?m=content&c=index&a=lists&catid=26
car solution

Todd Thal - TT
Use with vending machines or restaurants?

Jam - J
fucus on STB, Smart Home, Robot..

Rafaela - R
hi!

Tyeth - T
maybe for prototyping the seperate stack version (current) would be great / better than restriction of combining the 3 boards
particularly to swap the 3g modem for a different one (4/5g)

Robert Wolff - RW
Community Form: https://goo.gl/forms/HXIZYOzetjxVmLir2
CODE: OPENHIJ

Tyeth - T
how soon course update?

Todd Thal - TT
Free stuff?...; )
Everyone always likes that..; )

Robert Wolff - RW
Hopefully September through November

Tyeth - T
ta

Sahaj Sarup - SS
rajan's desk is lit..!!!

Tyeth - T
lol so true

Gustavo - G
Really sorry for my bad connection. I hope to be able to participate better next time.

Robert Wolff - RW
It's okay, next time will be good! :D

Todd Thal - TT
Rajans desk should be a "system for sale"...; )

Guillermo - G
When is this event?, that's my home town.

Tyeth - T
get d3 to bring radar module

Todd Thal - TT
Add an open hours mention to the wiki

Rafael Christ - RC
thanks for the suggestion Tyeth

Ragnar. - R
yes

Todd Thal - TT
Robert ...heck just send Ragnar your entire office...; )

Ragnar. - R
cool

Devang - D
Hey Robert!!! I really wanted to get involved with the Mezzanine development and was hoping to join the sessions held on Mondays I suppose. How can I subscribe get the link everytime?
Sure!!!

Barry - B
https://en.wikipedia.org/wiki/The_Chicken_and_the_Pig
the committee

Todd Thal - TT
Robert did u say "oink"...

Devang - D
I received the invitation Robert!!! Thank you for adding me to the list.

Todd Thal - TT
Robert u must be a pig as "Wikipedia" is dragging u through the mud..; )

Robert Wolff - RW
irccloud
irccloud.com
#96boards
#openhours
```
