---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-08-17 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 66 Recap - Monero and Kovri
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
- monero
- kovri
- mininodes
- blockchain
- cryptocurrency
---
# Introduction

This week (August 17th) on OpenHours we met with several folks from Monero and Kovri (cryptocurrency and I2P service). In this episode, we got a crash course on cryptocurrency, talked about Monero as a type of cryptocurrency, and of course touched on Kovri as a secure, private, untraceable C++ implementation of the I2P anonymous network. Our featured guests walked us through the ins and outs of these two very exciting topics and explained the linchpins of the Monero and Kovri model.

Please take some time to watch the video below, and don't forget to scroll through the chat log below for any additional resources and questions brought forward by our guests and the community.

If you have more questions, you can always join the following channels on IRC to meet with myself or this episode's guests (fluffypony, hyc and/or anonimal): #96Boards, #OpenHours, #monero, #monero-dev, #kovri and #kovri-dev

We look forward to seeing you in our next episode!

#### Links and resources

- [https://github.com/monero-projectMonero](https://github.com/monero-projectMonero)
- [reddit: [https://www.reddit.com/r/Monero/](https://www.reddit.com/r/Monero/)
- reddit: [https://www.reddit.com/r/Kovri/](https://www.reddit.com/r/Kovri/)
- [under construction]Monero website: [https://getmonero.orgKovri](https://getmonero.orgKovri)
- website: [https://getkovri.org](https://getkovri.org)
- New, work in progress [https://getmonero.org/knowledge-base/moneropedia/kovri](https://getmonero.org/knowledge-base/moneropedia/kovri)
- hyc on another project: [https://github.com/crosstool-ng/crosstool-ng/pull/700](https://github.com/crosstool-ng/crosstool-ng/pull/700)
- [https://getmonero.org](https://getmonero.org)
- [https://mymonero.com](https://mymonero.com)
- [https://monero.stackexchange.com/questions/23/what-is-the-purpose-of-the-tail-emission](https://monero.stackexchange.com/questions/23/what-is-the-purpose-of-the-tail-emission)
- [http://redditmetrics.com/r/Monero](http://redditmetrics.com/r/Monero)
- [https://twitter.com/monerocurrency](https://twitter.com/monerocurrency)

# Video

{% include media.html media_url="https://www.youtube.com/embed/b0k5lTMFXBA" %}

# Chat log

```
ViolentlyPeaceful - V
cool house I guess

palexander - P
Better that, than me in my underwear.

madLyfe - M
cool house?

palexander - P
He's talking about my cam feed

madLyfe - M
oh. im not seeing anything

palexander - P
Still a couple hours until start?

madLyfe - M
cant remember the time but ya a few hours

ViolentlyPeaceful - V
2 hours I guess
We go live at 4:00p UTC.
Hello everyone! :D
Very nice, neon you got there @palexander

palexander - P
I need a Monero one.
Yes!

Riccardo &quot;fluffypony&quot; Spagni - RS
you should flip your video horizontally so it shows up the right way for us ;)
@Riccardo: BlueJeans is supposed to do that for you. Don't know why it isn't for his camera

Riccardo &quot;fluffypony&quot; Spagni - RS
ah ok

palexander - P
Oh, its backwards?  Let me fix that
There you go!
niceeee

Riccardo &quot;fluffypony&quot; Spagni - RS
lol nice

palexander - P
So how about Blockstream's satellite broadcast?  That kind of caught me off guard.  Jeff Garzik may be a bit jealous.

Riccardo &quot;fluffypony&quot; Spagni - RS
yeah it's very cool
brb
Hello everyone, the show will get started at the top of the hour (4:00p UTC).We will be recording the episode on BlueJeans and later uploading it to YouTube. We will also be broadcasting live on the 96Boards Facebook page: https://www.facebook.com/96Boards/While you are hanging around, you can also find us in IRC channels: #OpenHours #96Boards #monero & #monero-dev
Hyc made it ! :D

hyc - H
howdy
We will have the whole crew here soon
waiting on anonimal
and pigeons?

ric - R
will watch the tube glhf
Thanks ric
Not as fun as the live thing though
:P

madLyfe - M
hyc in the hizzy

palexander - P
looks and sounds good hyc

Justin (sgp) - J(
Here
Hello everyone, the show will get started at the top of the hour (4:00p UTC).We will be recording the episode on BlueJeans and later uploading it to YouTube. We will also be broadcasting live on the 96Boards Facebook page: https://www.facebook.com/96Boards/While you are hanging around, you can also find us in IRC channels: #OpenHours #96Boards #monero & #monero-dev

Rodrigo Azevedo - RA
Hello ev1...

palexander - P
Hi there
Hello! :D

palexander - P
Audio working Ric

ric - R
? my audio??

palexander - P
No, Riccardo's

ViolentlyPeaceful - V
cool redhat tshirt

Peter Robinson - PR
Hey all!

Riccardo &quot;fluffypony&quot; Spagni - RS
*DeadRat

unknownids - U
:D

Peter Robinson - PR
yes, I am here

Sarah Levine - SL
Link to last week's episode on youtube: Last week’s episode: https://youtu.be/vhS8qCOcOlE
connect.linaro.org
Self balancing bot part 1: http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/OpenHours recap ep 65: http://www.96boards.org/blog/openhours-ep65-fedora-on-96boards/Self balancing bot introduction: http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/OpenHours recap ep 64: http://www.96boards.org/blog/openhours-ep64-blackwhale/
https://en.wikipedia.org/wiki/96Boards
Some more links:
Monero github: https://github.com/monero-projectMonero reddit: https://www.reddit.com/r/Monero/Kovri reddit: https://www.reddit.com/r/Kovri/ [under construction]Monero website: https://getmonero.orgKovri website: https://getkovri.org [new, work in progress]https://getmonero.org/knowledge-base/moneropedia/kovri

Sahaj Sarup - SS
hey all

unknownids - U
pigeons was having audio issues

bigreddmachine - B
So this is cool.

Guest 36 - G3
o/

hyc - PC - HP
ironic I've got the chat window open on my laptop, using my phone for audio/video. the PC is heating up. phone doesn't care.

Guest 36 - G3
odd, not sure why my username isnt showing
hyc to be fair, cellphone CPUs are designed to sip power
id say they use significantly less per cycle than a laptop CPU

hyc - PC - HP
eh true

Riccardo &quot;fluffypony&quot; Spagni - RS
also your phone is probably offloading a lot of encoding to the SOC encoding chip / GPU
and laptop may not

bigreddmachine - B
aww I was hoping anonimal would garble his voice. maybe he's actually british and has been practicing his american accent?

Guest 36 - G3
Riccardo &quot;fluffypony&quot; Spagni
I like the namechange

hyc - PC - HP
nodes all around the world - or all around the solar system...

Guest 36 - G3
a friend is in contact with the guy who did the bitcoin satellite thing. Supposedly he's cool making a Monero one too, I think the launch cost is like 100k
though that might be better allocated to research/dev

Charley - C
^ wow

Guest 36 - G3
I can find out more if people want (this is needmoney90)

ViolentlyPeaceful - V
100k in dev would be more useful than 100k on a satellite for the moment i guess

unknownids - U
needmoney thats got FFS written all over it

Guest 36 - G3
yeah I know

binaryFate - B
hi everyone

Guest 36 - G3
putting it up in the first place would be knowing it would suck funds from other projects

bigreddmachine - B
needmoney90 - Chris Cook? I'm working on getting him on my show! Adam Back is helping put me in touch.

Guest 36 - G3
in all likelihood
yes bigreddmachine
I can get you a contact/chat
if the adam channel is slow

bigreddmachine - B
Thanks, we'll see what happens. I sent an email to Blockstream's PR person and CC'd Back as he instructed me. It was his idea for me to talk to Chris so I think it shouldn't get pushed aside.

Guest 36 - G3
ah cool
well, if he gets on your show, ask him about a Monero setup. You can get a straight answer on price

bigreddmachine - B
pigeons looks a lot like Riccardo... twins?
yeah for sure!

unknownids - U
yeah theyre sisters

Bruce - B
I run 3 nodes

Guest 36 - G3
I only run one

hyc - PC - HP
I've got ... a dozen or so at any given time

Guest 36 - G3
one pipe?

hyc - PC - HP
two different ISPs

Guest 36 - G3
I would presume the limiting factor is the pipe
no?

Tyeth - T
what board are you building on?

Shovan Sargunam - SS
Some of our 96Boards can be found here https://www.96boards.org/products/

Sahaj Sarup - SS
@robert nice monitor upgrade

hyc - PC - HP
I've got a Hikey960

madLyfe - M
im getting this: http://i.imgur.com/qqjurYM.png

hyc - PC - HP
nice kit

unknownids - U
mebbe i should buy one

Tyeth - T
fair is the beast of the group

JuiTengHsu - J
i'm using jetson tx2 and nutsboard

hyc - PC - HP
original PR https://github.com/crosstool-ng/crosstool-ng/pull/700
was merged a few months back

Raj - R
will it take time to discuss on cryptocurrency? if yes I will come back after some time

Tyeth - T
nice guys at mininodes

hyc - PC - HP
btw, bragging points - I wrote the optimized monero mining code for ARMv7 and ARMv8

bigreddmachine - B
^^ and he plays a mean fiddle.

hyc - PC - HP
lol

Riccardo &quot;fluffypony&quot; Spagni - RS
official Monero GUI and CLI clients are on https://getmonero.org
web wallet (SMALL AMOUNTS ONLY): https://mymonero.com

Raj - R
no questions

Tyeth - T
how do u feel forks of the mainline should be handled, at what point should benefitting the masses outweigh what was agreed as the right way to do things, eg bitcoin/ethereum issues/forks?

Sahaj Sarup - SS
Every cryptocurrency has a sort of an "expiration date" after which point it can't be mined, just exchanged. Can that be increased indefinitely?

Smith - S
I have question

hyc - PC - HP
Sahaj - Monero has a perpetual tail emission, so yes.

Justin (sgp) - J(
Monero has a tail inflation such that the new coin supply will never fall below 0.3 XMR/minute
*tail emission

unknownids - U
more info on tail emission: https://monero.stackexchange.com/questions/23/what-is-the-purpose-of-the-tail-emission

Sahaj Sarup - SS
oh ohkay, thanks

Riccardo &quot;fluffypony&quot; Spagni - RS
Tyeth: good question, we can answer that once we get through Mani's questions no doubt

Guest 36 - G3
Is .3xmr/minute or .6xmr/2 minutes better?
Because the former was said when we had a 1m block time

bigreddmachine - B
Robert: let's assume Kovri is integrated, Mobile wallets are finished, etc... Can you ask: What are the biggest long-term challenges facing the Monero Project?

hyc - PC - HP
Guest 36, it amounts to the same either way

Bruce - B
I run a Monero node that I don't want to mine with. is that still confirming transactions with new supporting the network?

bigreddmachine - B
hyc, not quite. in a 0-latency network it wouldn't matter, but there's definitely a tradeoff using a 1 minute block time instead of something larger.

Bruce - B
'and' not 'with new'

bigreddmachine - B
Bruce, yes. You are relaying txs and validating

hyc - PC - HP
sure, but we have a 2 minute block time now, to reduce orphan chains

Bruce - B
thanks bigred

Guest 36 - G3
If the tail emission is too small, increasing it breaks the social contract?
I've always assumed the social contract has been 'some tail emission will exist'

Tyeth - T
the biggest issue i saw was with blockchains containing scripted transactions and other large scale thefts have led to forks.

Guest 36 - G3
and the .3/minute could be changed depending on security incentive empirically

palexander - P
The tail emission is sort of uncharted territory.  We don't exactly know how this will all pan out.

Guest 36 - G3
thats what I thought. Fluffy saying a tail emission change is a break of the social contract surprised me

palexander - P
As far as the emission curve goes, I doubt that will ever change.

bigreddmachine - B
.3 per minute is absolutely part of the social contract. That and being as privacy-oriented as possible. But 3 XMR 10-minute blocks or 0.15 XMR 30-second blocks both fit the .3 XMR per minute contract, and so that type of thing could change.

Tyeth - T
I'd imagine the tail gets reduced to infinitely small as ease increases/cost of production decreases

Guest 36 - G3
emission curve != tail
the tail is just a floor

palexander - P
Really, it doesn't matter.  The key is knowing the rate not really the maximum amount of units that will be available.

Guest 36 - G3
it turns linear at that point
the question is the slope of the line

hyc - PC - HP
slope is zero for the tail emission

Guest 36 - G3
slope of coin supply

bigreddmachine - B
slope of what? slope of total coins mined is 0.3 XMR per minute.

Smith - S
Is my IP address associated with creating transactions in the current state?

Guest 36 - G3
Only to the first node you broadcast to
and your ISP, if they're watching

Smith - S
Can someone link my IP to a specific transaction? Or just that I'm using Monero?

Guest 36 - G3
It would need to be a fairly targeted attack
and real-time
cant be done retroactively

palexander - P
Your ISP can link if you are under surveillance

hyc - PC - HP
well, not definitively, but yes, they can match timestamps in traffic logs

Justin (sgp) - J(
@Smith this is the concern that Kovri addresses. However, the IP information is only oberved to the nodes you connect with

Bruce - B
does the monero community have and general sense of direction regarding useage scaling. (ex. 1000 txs/s)

bigreddmachine - B
^^ Bruce that's what I was getting at with my Q before, Justin somewhat answered, but the basic conclusion is scaling on-chain 100% has a practical ceiling, likely much lower than Bitcoin due to larger TXs.

Bruce - B
gotcha

Smith - S
@Hyc But the transaction itself is obfuscated, so I'm still safe correct (the inputs, outputs and amts are obfuscated).

Riccardo &quot;fluffypony&quot; Spagni - RS
Bruce: we're not focused on on-chain scaling
there are some small things, which Justin mentioned, like reducing range-proof sizes
and maybe switching sig schemes later

hyc - PC - HP
@Smith yes

Riccardo &quot;fluffypony&quot; Spagni - RS
but focus is on layer 2 for scaling, trying to scale mainchain is a fool's errand

bigreddmachine - B
^^ unless you're Voldemort.

Guest 36 - G3
but muh big blocks

Bruce - B
are there layer 2 solutions that maintain similar obfuscation?

hyc - PC - HP
Hey, ASN.1/BER is excellent stuff

Robert Wolff - RW
https://github.com/monero-project

Riccardo &quot;fluffypony&quot; Spagni - RS
no, but we can have weaker layer 2 privacy and you can drop in and out of layer 1 during settlements to make up for the privacy loss

Bruce - B
👍

Robert Wolff - RW
https://github.com/monero-project/kovri

Riccardo &quot;fluffypony&quot; Spagni - RS
also MimbleWimble's privacy claims are "weak", but still significantly stronger than junk like Dash, and even stronger than ZCash's default t-address mode

palexander - P
"junk like Dash"?  Them's fightin' words

Bruce - B
that's the answer I was looking for. thanks.

Smith - S
Another question - why is Monero's market cap so low, considering the amount of actual progress that has been made?

hyc - PC - HP
RSA doesn't give us perfect forward secrecy...

Robert Wolff - RW
@David - miniNodes! Welcome!

palexander - P
Because a lot of people ride the hype train.
(to Smith)

Sahaj Sarup - SS
anonimal don't forget to breath brah :p

bigreddmachine - B
#kovri
#kovri-dev

Guest 36 - G3
Because vaporware can be valued speculatively
released software isnt as cool

Justin (sgp) - J(
#kovri
#kovri-dev

unknownids - U
oh snap FFS for hyc bikini videos

Bruce - B
lol

Guest 36 - G3
instadonate

unknownids - U
ill turn my mining rigs onto the ffs donation address

hyc - PC - HP
and constant growth in the user community too
looking at the reddit subscriber numbers

Guest 36 - G3
trading sub is booming
daily threads have been jam-packed recently

bigreddmachine - B
Riccardo has a better idea of # of users than anyone thx to MyMonero.com --> curious his thoughts on growth he sees there?

unknownids - U
the irc channel as doubled since i joined it

Tyeth - T
whats this group of fluffypony's, got a link Richard

Justin (sgp) - J(
http://redditmetrics.com/r/MoneroClick on the "total subscribers" tab

Tyeth - T
*robert

Justin (sgp) - J(
http://redditmetrics.com/r/Monero

Robert Wolff - RW
#monero
on IRC
and #monero-dev
is that the group you mean?

Bruce - B
I'm so glad I joined this chat!

medusaaaaaaa - M
join monero, friends

Smith - S
ETAs??

Robert Wolff - RW
Yes #monero

David T - miniNodes - DM
I'll have to drop in a bit, but great conversation, I learned a ton!

Robert Wolff - RW
https://twitter.com/monerocurrency
David
!
Tried calling you out a minute ago

David T - miniNodes - DM
Ha, joined 30 mins ago when you pinged me!
Hopped right in!

Robert Wolff - RW
Monero github: https://github.com/monero-projectMonero reddit: https://www.reddit.com/r/Monero/Kovri reddit: https://www.reddit.com/r/Kovri/ [under construction]Monero website: https://getmonero.orgKovri website: https://getkovri.org [new, work in progress]https://getmonero.org/knowledge-base/moneropedia/kovri

medusaaaaaaa - M
join #monero-markets --> get rich or die trying

Robert Wolff - RW
@medusaaaaaaa lol

Guest 36 - G3
get $50 or get mad and dump for ICOs

David T - miniNodes - DM
They sure do!!
Hi guys!!

unknownids - U
that was a good conversation boys and girls!

DaveyJones - D
just get in soon™

anonimal - A
Btw, you can use kovri to connect to Irc2P which is IRC within the I2P network

Bruce - B
thanks everyone
cool to hear from you anonimal

hyc - PC - HP
anyone know if a kirin 970 version of Hikey960 will be coming down the line?

Riccardo &quot;fluffypony&quot; Spagni
RS
battery running flat so I have to leave and go find a power cable, thanks guys!

scoobs - S
translate = soon™

David T - miniNodes - DM
See ya Riccardo!

Tyeth - T
thanks fluffypony

Sarah Levine - SL
Some links shared at the beginning of the show:
https://www.youtube.com/c/96Boards

Tyeth - T
sweet episode didnt expect to be so Engaged at the pub, great episode

Mani - M
Gotta go... See you guys next weel
*week

Tyeth - T
bye mani

Sarah Levine - SL
http://connect.linaro.org/

anonimal - A
Hi Bruce, thanks for being here

Sarah Levine - SL
wikipedia: https://en.wikipedia.org/wiki/96Boards

Tyeth - T
thanks anonimal

Sarah Levine - SL
Blogs: Self balancing bot part 1: http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/OpenHours recap ep 65: http://www.96boards.org/blog/openhours-ep65-fedora-on-96boards/Self balancing bot introduction: http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/OpenHours recap ep 64: http://www.96boards.org/blog/openhours-ep64-blackwhale/

Bruce - B
👍

hyc - PC - HP
binaryFate is mr. xmr.to

Tyeth - T
one question

medusaaaaaaa - M
xmr CFO

Tyeth - T
Robert you mentioned d3 coming to something soon, can you ask them to bring radar module
no they sell a radar module instead or aswell as radar module
camera
yeah

bigreddmachine - B
Where can I buy a 96board in person? MicroCenter?

Tyeth - T
it's for industry partners not retail yet i think

bigreddmachine - B
Maybe link with Adafruit? They have a partnership with MicroCenter
huh.

Sahaj Sarup - SS
basically the discussion on every mezz meeting

Robert Wolff - RW
https://github.com/96boards/mezzanine-community

bigreddmachine - B
hyc - why'd you go with the hikey and not another board?

C3Z4R - C
And EagleCAD too!

Tyeth - T
hyc is on another level, it's a pleasure to see

bigreddmachine - B
hyc is the man. he's the reason cell phones work.
and the reason the space shuttle can talk to earth

Tyeth - T
nice analogy
really? you should be able to help something epic Robert

Robert Wolff - RW

Tyeth - T
just need to build a little on the old knowledge

Tyeth - T
woops pressed back button, doh

bigreddmachine - B
this has been great guys. Robert, is this put on a youtube channel or podcast?

Tyeth - T
yes, not the afterhours

JuiTengHsu - J
i had watch some video of hikey 960 on youtube and someone said that the price is too high

Robert Wolff - RW
YouTube Channel

bigreddmachine - B
Tyeth, what should I google to find it?

Tyeth - T
openhours 96boards

Robert Wolff - RW
https://www.youtube.com/c/96boards

bigreddmachine - B
thanks
Robert, can't hurt to ask.

JuiTengHsu - J
https://www.youtube.com/watch?v=bxNe9bBXWO4

hyc - PC - HP
a beer sounds good right about now

Sahaj Sarup - SS
put some ice in your coffee. Iced coffee is great!!!

bigreddmachine - B
+1 great reflection. gotta run, I've subscribed on youtube!

Tyeth - T
I've had the pleasure of two Guinness in Bristol, uk
Blessed, good bye

Rodrigo Azevedo - RA
Tks @all Bye guys.

JuiTengHsu - J
the lower price's jetson tk1 is powerful than hikey 960

Rodrigo Azevedo - RA
I think the group will choose December
This week I will send the confirmation
Bye @all....Thank you very much Robert. Bye guys

Tyeth - T
no google form robert, thousand points each compensation?

Rafaela - R
i am not hearing him too

Sahaj Sarup - SS
can't here

Ragnar. - R
any community form today?

C3Z4R - C
crosstalk

Robert Wolff - RW
Ragnar
let me share real quick

Ragnar. - R
100%

Robert Wolff - RW
https://goo.gl/forms/sRkYjoqwFOjc35ul1
CODE: OPENMONERO
```
