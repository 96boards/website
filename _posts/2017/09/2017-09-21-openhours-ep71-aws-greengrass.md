---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-09-21 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 71 Recap - AWS Greengrass
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
- aws
- amazon web service
- cloud
- edge computing
- industrial IoT
- IoT
---
# Introduction

Edge computing and industrial IoT were on the docket for this week's OpenHours. Once again, we were joined by Rajan Mistry from Qualcomm to talk about the amazing efforts put forth to enable the 96Boards DragonBoard 410c with [AWS Greengrass](https://aws.amazon.com/greengrass/). Everyone wants to know more about this subject, this was our chance to get the tough questions answered from one of the best! Rajan took questions from me and the community on the DragonBoard 410c, Qualcomm in general, Snapdragon, AWS, Greengrass, Industrial IoT and more! Don't forget to check out the resources, links, chat lot and video below.

#### Links and resources

- [Linaro Connect SFO17](/go/sfo17-connect-reach/)
- [Qualcomm Developer Network, Projects page](https://developer.qualcomm.com/project)
- [Qualcomm Snapdragon pages](https://developer.qualcomm.com/blog/snapdragon-410e-aws-greengrass-intelligence-edge)
- [AWS Live event with robot arm demo](http://phx.corporate-ir.net/phoenix.zhtml?c=176060&p=irol-newsArticle&ID=2279608)

# Video

{% include media.html media_url="https://youtu.be/clRRS_ZKWMk" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/RobertWolff5/open-hours-greengrassep71" %}

# Chat log

```
Sahaj Sarup - SS
hi all 

Todd Thal - TT
I see the "diehard quad" ( and a half) is here...1). Sahaj 2). Ragnar 3). Nazmul 4). "Robert" and his evil mini-me "Robert screen
shot"....; )

Robert Wolff - RW
lol @Todd
Seems like attendance is dwindling :\
Maybe people dont like the content anymore

Sahaj Sarup - SS
Gustavo hi!

Gustavo - G
hi!

Rafael Campos - RC
Hi!!

Gustavo - G
will you make the presentation slides public?

Robert Wolff - RW
@Gustavo: Yes

Sahaj Sarup - SS
we like messed up desks here
still cleaner than mine

Selim - S
greetings

Sahaj Sarup - SS
hello 

Robert Wolff - RW
@Selim: Hello! Welcome

Ahmed - A
hello

Robert Wolff - RW
hi @Ahmed

Ahmed - A
^_^

Robert Wolff - RW
feel free to ask questions if you have any

Ahmed - A
Thanks

Rafael Campos - RC
I see this services as an analogy of what Command and Control Systems have been doing for a long time in SCADA controlled industrial
networks.
Are those edge devices seen as gatway borders for network conversion and/or data preprocessing?

Robert Wolff - RW
@Rafael: yes

Rafael Campos - RC
thanks
are those AWS services "dockerized" into the Dragonboard?

Robert Wolff - RW
Last week's episode with Rajan Mistry: https://youtu.be/X9BbtoQLgW4
I am pretty sure this is the AWS Greengrass link for DB410c: https://developer.qualcomm.com/sites/default/files/attachments
awsgreengrasssetupinstructions.pdf
robert.wolff@linaro.org
@Jean-Marc: Welcome! Good to see you, my friend

Devang - D
Gustavo...that was a good question. I actually had that question.

Jean-Marc - J
Thank you... using my iPad with blue-jeans running great 😀

Robert Wolff - RW
@Jean-Marc: Nice, good to know  We need to bring back the Jean-Marc minute

Jean-Marc - J
😂😂😂

Robert Wolff - RW
@gerardo: welcome!
https://goo.gl/forms/7f0J429br54lqRpy2

Devang - D
robert u muted urself

Robert Wolff - RW
CODE: OPENGREENGRASS

Devang - D
He is going on!!!!
yes

Ragnar. - R
  
Robert Wolff - RW
https://www.96boards.org/go/sfo17-connect-reach/

Jean-Marc - J
Can you fix the OpenHours counter page? 😊

Robert Wolff - RW
https://developer.qualcomm.com/project

Christine Jorgensen - CJ
LInk for GG
https://developer.qualcomm.com/blog/snapdragon-410e-aws-greengrass-intelligence-edge

Jean-Marc - J
Have to go see you live....

Christine Jorgensen - CJ
see there link to AWS Live event with robot arm demo:
http://phx.corporate-ir.net/phoenix.zhtml?c=176060&p=irol-newsArticle&ID=2279608
I am still trying to find the link to the actual video ...
Ha, found the video:
https://www.youtube.com/watch?v=6RM0ZqR8u0U

Attila - A
Hi Robert, is there anything similar what Ubuntu Core snap system offers for OS administration, updates etc. from Linaro?
I am testing Ubuntu Core on dragonboard mainly for safety reason.

Robert Wolff - RW
Have you heard of Testing Days?
@Atilla

Christine Jorgensen - CJ
Robot arm video is at time: 54:49 / Qualcomm segment featuring Greengrass on DragonBoard 410c is at time 34:29

Attila - A
We are implementing Snapdragon module to an edge gateway design with IO analog/digital and communications options.
Thanks.

Christine Jorgensen - CJ
AWS Greengrass launch video:  https://www.youtube.com/watch?v=6RM0ZqR8u0U -- Robot arm video is at time: 54:49 / Qualcomm segment featuring
Greengrass on DragonBoard 410c is at time 34:29
Ubuntu Core Part 1: https://youtu.be/jrBh46SRBCA
Ubuntu Core Part 2: https://youtu.be/hleL3_Q3x3Y
Ubuntu Core Part 3: https://youtu.be/prUs2eGay40

Attila - A
I have to leave, will come back to you with more details. I am in contact with the Ubuntu guys, however the hardware level is very
dependent on Qualcom on the Snapdaragon platform. I am talking about hardware access to SPI, UART etc.

Christine Jorgensen - CJ
yes, carefule
let it go

Rajan Mistry - RM

Robert Wolff - RW
robert.wolff@linaro.org

Rajan Mistry - RM
not recorded

Sahaj Sarup - SS
anyways he ain't getting it

Christine Jorgensen - CJ

Attila - A
Thanks.

Ragnar. - R
Robert: Be Sure to Wear Flowers in Your Hair

Christine Jorgensen - CJ
We need a mulel 
no FCPA
right now we are on a deadline
thanks 
Arrow said it would be three weeks
sorry not arrow but Seeed
Nope

Gustavo - G
bye guys. Have a good trip, Robert.

Christine Jorgensen - CJ
Would be great if you can sync on that with Ana.  She can reach out to QC India team

Robert Wolff - RW
https://conferences.electronicsforu.com/call-for-papers/

Christine Jorgensen - CJ
I will be OoO for a bit starting next week
So definitely sync with Ana
byq
bye

Keith Lee - KL
I'll be there next week
no I
ill join oo
bye

Devang - D
Later!!!
Safe Travels!!!

On 21 September 2017 at 10:11, Robert Wolff <robert.wolff@linaro.org> wrote:
Glad to see you are now a regular, Todd! 

Sahaj Sarup - SS
hi all 

Todd Thal - TT
I see the "diehard quad" ( and a half) is here...1). Sahaj 2). Ragnar 3). Nazmul 4). "Robert" and his evil mini-me "Robert screen shot"....; )

Robert Wolff - RW
lol @Todd
Seems like attendance is dwindling :\
Maybe people dont like the content anymore

Sahaj Sarup - SS
Gustavo hi!

Gustavo - G
hi!

Rafael Campos - RC
Hi!!

Gustavo - G
will you make the presentation slides public?

Robert Wolff - RW
@Gustavo: Yes

Sahaj Sarup - SS
we like messed up desks here
still cleaner than mine

Selim - S
greetings

Sahaj Sarup - SS
hello 

Robert Wolff - RW
@Selim: Hello! Welcome

Ahmed - A
hello

Robert Wolff
RW
hi @Ahmed

Ahmed - A
^_^

Robert Wolff - RW
feel free to ask questions if you have any

Ahmed - A
Thanks

Rafael Campos - RC
I see this services as an analogy of what Command and Control Systems have been doing for a long time in SCADA controlled industrial networks.
Are those edge devices seen as gatway borders for network conversion and/or data preprocessing?

Robert Wolff - RW
@Rafael: yes

Rafael Campos - RC
thanks
are those AWS services "dockerized" into the Dragonboard?

Robert Wolff - RW
Last week's episode with Rajan Mistry: https://youtu.be/X9BbtoQLgW4
I am pretty sure this is the AWS Greengrass link for DB410c: https://developer.qualcomm.com/sites/default/files/attachments/awsgreengrasssetupinstructions.pdf
robert.wolff@linaro.org
@Jean-Marc: Welcome! Good to see you, my friend

Devang - D
Gustavo...that was a good question. I actually had that question.

Jean-Marc - J
Thank you... using my iPad with blue-jeans running great 😀

Robert Wolff - RW
@Jean-Marc: Nice, good to know  We need to bring back the Jean-Marc minute

Jean-Marc - J
😂😂😂

Robert Wolff - RW
@gerardo: welcome!
https://goo.gl/forms/7f0J429br54lqRpy2

Devang - D
robert u muted urself

Robert Wolff - RW
CODE: OPENGREENGRASS

Devang - D
He is going on!!!!
yes

Ragnar. - R
  
Robert Wolff - RW
https://www.96boards.org/go/sfo17-connect-reach/

Jean-Marc - J
Can you fix the OpenHours counter page? 😊

Robert WolffvRW
https://developer.qualcomm.com/project

Christine Jorgensen - CJ
LInk for GG
https://developer.qualcomm.com/blog/snapdragon-410e-aws-greengrass-intelligence-edge

Jean-Marc - J
Have to go see you live....

Christine Jorgensen - CJ
see there link to AWS Live event with robot arm demo:
http://phx.corporate-ir.net/phoenix.zhtml?c=176060&p=irol-newsArticle&ID=2279608
```
