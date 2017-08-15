---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-08-10 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 65 Recap - Fedora on 96Boards
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
---
# Introduction

This week (August 10th) on OpenHours we met with Peter and Paul from Red Hat to talk about the soon to be Fedora images for 96Boards! The entire episode was packed with questions and valuable information around the future of Fedora on 96Boards, and more importantly the amazing work our two guests have been doing to make it happen.

As always, we went through several announcements (find these at the beginning of the video). After the announcements, we introduced our guests, Red Hat, Fedora Project, and the questions rained down! If you have a spare hour to check out the video, you can find it below along with the [BlueJeans](https://www.bluejeans.com/) chat log. Throughout the episode, our guests shared many links and references, I tried pulling most of these up to this Introduction section for easy access.

If you have more questions, you can always join the following channels on IRC to meet with myself or this episode's guests (Peter and Paul): #96Boards | #OpenHours | #fedora | #fedora-arm

We look forward to seeing you in our next episode!

#### Links and resources

- https://bugzilla.redhat.com/
- https://lists.fedoraproject.org/admin/lists/arm@lists.fedoraproject.org
- https://fedoraproject.org/wiki/Get_Involved_Guide
- https://fedoraproject.org/wiki/
- https://fedoraproject.org/wiki/Architectures/ARM

# Video

{% include media.html media_url="https://youtu.be/vhS8qCOcOlE" %}

# Chat log

```
CEZAR - C
Good morning (maybe afternoon or evening), everyone!
Hello, CEZAR!
Welcome back

Peter Robinson - PR
Hey all
Peter! Welcome
We will start in < 6 minutes

Sahaj Sarup - SS
hi all

Todd Thal - TT
Good morning Viet nam!!!!....no wait wrong movie here...; )
(This is that new movie "96Boards"...)

Tyeth - T
Hi all, yeah never again Robert ;)
:P

Paul Whalen - PW
Hi everyone
Ali, what are we looking at?
Looks like you are doing some cool stuff
Rodrigo! Welcome
Ragnar, camera on :O
first time ever!

Todd Thal - TT
Robert you should have a "count-down-voice" on the open hours page like the NASA Houston launches...; )
Yes

Shovan Sargunam - SS
Yes

Peter Robinson - PR
loud and cllear

Shovan Sargunam - SS
Can you hear us?
YEs

Peter Robinson - PR
I can hear that last person

Tyeth - T
Robert your deaf, or channel volume too low

Peter Robinson - PR
I don't see you

Todd Thal - TT
SWAG jealousy!!!!

Peter Robinson - PR
nice shirt

Rodrigo Azevedo - RA
I see the Robert OK

Peter Robinson - PR
I heard the facebook message

Sarah Levine - SL
hi everyone. connect.linaro.org

Rafael Christ - RC
Hi Rodrigo!

Sarah Levine - SL
https://youtu.be/zytkvFDeddU
New Blog: http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/

Todd Thal - TT
Robert's open hours is getting almost as many followers as the "Grateful Dead"...; )

Sarah Levine - SL
https://en.wikipedia.org/wiki/96Boards

David T - miniNodes - DM
Hi all!

Mani - M
Hello David

Tyeth - T
you made Linux popular before Ubuntu
also first in my experience to prove the open source enterprise support profit model

Todd Thal - TT
Maddog and Marc Ewing are some of the "shoulders of the giants" of linux
https://en.m.wikipedia.org/wiki/Jon_Hall_(programmer)
https://en.m.wikipedia.org/wiki/Marc_Ewing
PS "is maddog here today?"...

CEZAR - C
I've been using CentOS for a quite a while. Nice Linux Distribution!

Mani - M
Is anybody using Arch?

CEZAR - C
yum vs apt-get  

Sahaj Sarup - SS
dnf ftw
@mani used to use arch on my laptop, now of fedora. I am what some might concider a disrto hopper
*on

Tyeth - T
yeah sahaj, you must love alien like me, rpm to deb

Mani - M
ha ha
I tried Arch sometime back and dropped as I messed with wpa_supplicant :P

Carl - C
It is interesting that AWS chose RedHat as their default AMI.

Sahaj Sarup - SS
Tyeth, definately!

Todd Thal - TT
How much difference is there between FC 26 vs Redhat 7+ (which is based on FC 19)??...
Oops problem for the enterprise..; b

Peter Robinson - PR
https://fedoraproject.org/wiki/
https://fedoraproject.org/wiki/Architectures/ARM
#fedora-arm

Robert Wolff - RW
#fedora-arm & #fedora

Peter Robinson - PR
https://fedoraproject.org/wiki/Get_Involved_Guide

Sahaj Sarup - SS
4.11.11 on my machine fed 26

Todd Thal - TT
Does it always have gnu tools?
https://en.m.wikipedia.org/wiki/Jon_Hall_(programmer)
Oops
https://en.m.wikipedia.org/wiki/GNU_toolchain
What about core Utils?
https://en.m.wikipedia.org/wiki/GNU_Core_Utilities

Sahaj Sarup - SS
lol, nvidia helping with oss. thats a new one

Robert Wolff - RW
Todd, would you like to ask your question?

Mani - M
@sahaj: lol...

Peter Robinson - PR
https://lists.fedoraproject.org/admin/lists/arm@lists.fedoraproject.org

Robert Wolff - RW
Thank you, Peter
Please share the IRC channel he mentioned?

Todd Thal - TT
Can paul post in the chat all this info...

Sahaj Sarup - SS
any images we can get now for 96boards

Peter Robinson - PR
The arm list and #fedora-arm are good landing sports

Paul Whalen - PW
bug reporting - bugzilla.redhat.com

Robert Wolff - RW
Community Points form: https://goo.gl/forms/0wxgNSNrZmlH7mt03
Code: OPENFEDORA

Shovan Sargunam - SS
Linaro Developer Cloud https://www.linaro.cloud/

Todd Thal - TT
Peter Paul's contact email?

David T - miniNodes - DM
I had to step away for a few minutes during the conversation, so I apologize if this was touched on earlier and I missed it.....Are the plans for HiKey images to be made available?

Robert Wolff - RW
@Todd: It will be up to them to release. I know you can find them any time on IRC. Handles: pbrobinson

Paul Whalen - PW
pwhalen@redhat.com , irc - pwhalen
pbrobinson@redhat.com

Peter Robinson - PR
pbrobinson@fedoraproject.org too

David T - miniNodes - DM
(I'll be replaying the conversation after its posted)

Shovan Sargunam - SS
OpenHours #61 - miniNodes with David Tischler, 96Boards used as ARM mini servers https://www.youtube.com/watch?v=k2llbV2zOuc&t=6s

Ilo Rivero - IR
Downloading for Rasp Pi3 right now. Will be a DragonBoard 410c version?

Robert Wolff - RW
Thanks @Shovan!

Todd Thal - TT
MiniNodes #61 was Awesome!!!

Shovan Sargunam - SS
Latest Hikey 960: http://www.96boards.org/product/hikey960/

David T - miniNodes - DM
Awesome!! (I can help testing as well)
We have 1gb and 2gb versions
That's me!
Ha
I'd love it!

Sarah - S
Links mentioned in the beginning of the episode:
Linaro connect: connect.linaro.org
96boards Wikipedia: http://en.wikipedia.org/wiki/96boards
YouTube channel: http://youtu.be/zytkvFDeddU
New blog post: http://96boards.org/blog/introducing-self-balancing-bot-using-96boards/

Robert Wolff - RW
Next week's episode, Calendar invite: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=cWxyNWlsZzFibDVwZzNrZjJ0b2s5aWtjdm9fMjAxNzA4MTdUMTYwMDAwWiBhMXFxdjZqaHIxYTBhdDJzbGxuazVpNzRpNEBn&tmsrc=a1qqv6jhr1a0at2sllnk5i74i4@group.calendar.google.com

Todd Thal - TT
Post the "freenode" channel they hang out and days times?

Peter Robinson - PR
I hang out on #96boards and #OpenHours

CEZAR - C
Congratulations to all winners!

Todd Thal - TT
Ditto

Paul Whalen - PW
#fedora-arm as well

Peter Robinson - PR
#fedora-arm and numerous other #fedora* channels

Robert Wolff - RW
Please help: https://goo.gl/forms/5pSxRbuUa0RxApJi1
Fill out this form
Sorry, I forgot

CEZAR - C
Nice initiative, Robert!

Robert Wolff - RW
https://github.com/96boards/mezzanine-community
```
