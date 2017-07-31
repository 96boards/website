---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-07-31 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: 96boards OpenHours Recap 1337
# This is the featured background image of the blog which resides under _assets/
featured_image: OpenHours.png
# Tags related this post. For use in tag filters that will be used in future updates.
tags:
- 64-Bit
- 96Boards
- OpenHours # Use this tag if you want it to be featured in the openhours blog sections.
- Linaro
- linux
- ARM
- brazil
- baita
- inatel
- embarcados
- qualcomm
- thinkabit
- STEM
- bengala
- iot
- diy
- sbc
- sinlge board computer
- consumer edition
- dragonboard
- hikey
- hikey960
- bluejeans
- arrow electronics
- beeinformed
- dragon wally

---
# Introduction

Last week on [OpenHours ep #63](https://youtu.be/YLyhCk8JVq8), I had the opportunity to hang out with some of the coolest people I have ever come across. I am of course referring to the group of winners from the [Brazilian partnership program](http://www.96boards.org/go/db410c-partnership-brazil/). During the over one hour long episode we had the chance to talk about 5 amazing 96Boards projects that were worked on over the course of the past three months in areas all around the country of Brazil. Let's look deeper into this program...

This partnership was originally formed between Qualcomm, Arrow and Embarcados with the goal of finding the best and the brightest hackers in Brazil. The main idea / slogan behind this hack was "Inventing the Future with DragonBoard 410c", which is exactly what their participants did. In fact, all of these projects were so great, we look forward to hosting individual OpenHours episodes for each team in which they will be able to show us demos and point out even more resources behind their work.

In general, the program was designed to provide technical resources to students, entrepreneurs, induistry professionals and start-ups who had the option to either work alone or in multi-disciplinary teams to come up with an inovative idea that would significantly impact the inter of things ecosystem in Brazil.

IoT solutions using the Qualcomm/Arrow DragonBoard 410c. 

Since I think there may be many reading this who are unaware of this program, 

# The video

{% include media.html media_url="https://youtu.be/YLyhCk8JVq8" %}

# The slideshow

{% include media.html media_url="https://www.slideshare.net/RobertWolff5/openhours-63-brazilian-partners-and-96boards-take-over-qualcomm-thinkabit-lab" %}

# Resources

You can always visit the [96Boards website](http://www.96boards.org/) to get access to the forums, projects, and much more!

- 96Boards: [YouTube](https://www.youtube.com/c/96boards) | [Twitter](https://twitter.com/96Boards) | [Linkedin](https://www.linkedin.com/showcase/6637095/) | [Facebook](https://www.facebook.com/96Boards/)
- Robert Wolff: [YouTube](https://www.youtube.com/channel/UCJlM_DlSn_KwlUQA8iqIpkg) | [Twitter](https://twitter.com/sdrobertw) | [Linkedin](https://www.linkedin.com/in/sdrobertw/) | [Facebook](https://www.facebook.com/robert.wolff85)

**IRC: #96boards & #OpenHours**

# Chat log

```
CEZAR - C
Hello, everyone! Good Morning!
Good morning :P

maddog - M
Hello, my Brazilian brothers!
...and sisters!

Sarah Levine - SL
http://connect.linaro.org
hi
http://www.96boards.org/blog/device-tree-overlay-on-96Boards/
http://www.96boards.org/blog/vulkan-hikey960/
https://github.com/96boards/mezzanine-community

Sarah Levine - SL
http://www.96boards.org/go/db410c-partnership-brazil/
https://contest.embarcados.com.br/inventando-o-futuro-com-dragonboard-410c/

maddog - M
What country is perfect?

Mani - M
:D

Thomas Stolt - TS
The one you have your home at ;)

Larry Bank - LB
Nenhum - cada um tem coisas boas e coisas ruins

maddog - M
How many people received the boards?
Futurecom in Sao Paulo is October 2-5th.  Largest telecom show in Latin America
Would you like to do your invester pitch there?

Larry Bank - LB
The board price can be helped (avoid import tax) by manufacturing it in Brazil

maddog - M
I am in contact with the Futurecom producers right now....we could set this up.

Todd Thal - TT
Email contacts of the organizer for the contests???
Mad dog contact info? ( mine is alantoddthal@yahoo.com)
@Todd We will share all contacts at the end

maddog - M
I recognize many of these people!

Todd Thal - TT
Contest page is in Spanish
(https://contest.embarcados.com.br/inventando-o-futuro-com-dragonboard-410c/)
Any English translation pages?

Larry Bank - LB
Portuguese, not Spanish ;)

Todd Thal - TT
Mea villa...; )
Oops mea culpa (auto-correct errors)

Ragnar. - R
distance between the cameras?

Frederico Pedroso - FP
https://contest.embarcados.com.br/projetos/sistema-de-identificacao-de-pessoas-baseado-em-visao-computacional-estereoscopica/

Rajan Mistry - RM
can we share the presentations as well?

ali - A
what is the frame rate?

Ragnar. - R
cool

Guillermo - G
What is the added value of determining the distance to the object in the example applications cited?

CEZAR - C
Sorry, my friends, for the noise...

Mani - M
cezar: No issues 

maddog - M
He could drink in Brazil!
Yea Campinas!

Todd Thal - TT
Will they be drinking American or Brazilian beers afterwards?...; )
(What is a good Brazilian beer?)

Larry Bank - LB
TT - Antartica is the "standard" brand of Brazil

Todd Thal - TT
Another good use if first responders...e.g. Collapsed buildings ; fire; police; adverse weather outdoors...etc.

maddog - M
There are several "National Beers" in Brazil, Antartica (whose symbol is two penguins), Skol, and others.   But Brazil has lately been into the Craft Beer market.I am part owner of a Brew Pub and Brew-on-Premises business in Curitiba, Brazil.  We have 29 craft brews on tap, no "national beers".

Renne Rocha - RR
Which Brew Pub?
Hop'n'roll?

maddog - M
Hop'n Roll Brew Pub

Renne Rocha - RR
Sure thing... already been there.... Curitiba is one of the best places to drink craft beer in Brazil

Larry Bank - LB
Compass sensor would be useful for the bengala to know which direction you're walking

Todd Thal - TT
Also radioactive environments...e.g. Japan's nuclear failure...

Larry Bank - LB
Have you tried time-of-flight distance sensors in addition to the ultrasonic?

Mani - M
What does Bengala mean?
:P

Frederico Pedroso - FP
means walking stick

Larry Bank - LB
VL530x - infrared laser

Renne Rocha - RR
Bengala = Walking stick

Larry Bank - LB
0-2M accurate to 1mm
samples every 23ms

Sahaj Sarup - SS
but will infrared be effected by the sun

Larry Bank - LB
possibly, but it's designed to work in daylight

Mani - M
VL6180 might be good

CEZAR - C
Hi, Guillermo.The benefits are multiple, but the key one is using the distance as a "selective filter" for minimizing the amount of Machine Learning API calls (which are not free).Knowing the position of objects (faces in this case) is important in inummerable applications.For example: Drones (obstacle avoidance), VR applications, 3D image scanners. Stereo Vision Cameras are more typical than we may notice. It's interesting the use a DragonBoard 410c for doing that.

Todd Thal - TT
Years ago I use to work for mince
One of worlds greatest sensor manufacturers
http://www.minco.com/~/media/Files/Minco/Instructions/Sensors/Minco_SSG01D_PDF_web_20151012.ashx

maddog - M
In Brazil we can all go for beers.   There are some good brew-pubs in Sao Paulo.

Todd Thal - TT
Note : I haven't been in contact in decades and get no $$$ from them ...just they are the best!!!

maddog - M
Thank you!  I am excited about your projects.

Larry Bank - LB
Cezar - I worked at an array-camera startup doing this type of work. I worked on optimizing the imaging pipeline on ARM. Let me know if you have any questions.
(e falo português  )

Todd Thal - TT
What he is measuring? Traffic patterns?

CEZAR - C
Larry, you are achieving a good precision and frame rate. Congratulations.

Larry Bank - LB
I helped them go from 0.5 to 30fps for our setup. Custom algorithms (not OpenCV). Very optimized NEON code.

CEZAR - C
Thanks, Larry. Please, share your contact email with us. Mine is : cezar.menezes@live.com

Larry Bank - LB
laurencebank@gmail.com

Tyeth - T
nice work on the expansion connections showing as ethernet, was the 3g modem based on a prebuilt module?

Mani - M
Larry Bank: Wow... Neon optimization... Very cool stuff

maddog - M
Professor Zuffo of USP has some students who have implemented OpenGL using an FPGA.   While not as fast as a custom GPU, the design is completely open, so has a very long lifetime.He has indicated that they want to implement OpenCV next the same way.
The OpenGL implementation can run every OpenGL qualification test perfectly through the FPGA.
Professor Zuffo wants to bring the student who did this work (in only three months!) to Connect in Burlingame.

Todd Thal - TT
Could new infrastructure developments in USA use these and use on roads and traffic controls (lights)?

Larry Bank - LB
Here is the time-of-flight distance sensor I mentioned: http://www.ebay.com/itm/172744083954

Sahaj Sarup - SS
maddog, I am super interested in reading about this FPGA GPU since I've heard it from you a few days ago
is there some material available on the internet

Larry Bank - LB
I'm trying not to be too negative, but every 96boards board needs an expensive mezzanine to talk to sensors. Could have been avoided if they used 3.3V logic. Any plans to sell boards with 3.3V logic?

maddog - M
Sahaj, I will try to get some information, but perhaps Robert could invite Professor Zuffo to join Open Hours soon to have his student talk about it here as a "teaser".

Guillermo - G
[stereo computer vision] On the back end it can save processing effort and $$, but I think it could also be exploited at the front end of the application in industrial applications, recognizing and locating objects precisely on 3D space (robotic pick and place, sorting, removing foreign objects, etc.). (aumenting the base distance between cameras increases the precision of the Z determination).

Todd Thal - TT
Also industrial controls?

Sahaj Sarup - SS
maddog: that would be great!

Larry Bank - LB
Robert - thanks for the detailed answer. Hopefully the market will catch up and sell 1.8v devices.

CEZAR - C
Yes, Guillermo, I totally, agree.With some effort (in time) using OpenCV 3, it's possible to completely run Object Recognition all local in the CPU/GPU of the Snapdragon processor. Also, longer distance between the LEFT and RIGHT camera can improve precision in some cases.

Larry Bank - LB
It's understandable about the prototype -> product life cycle. It's also about accessibility to people without the resources (e.g. Brazil). Arduino and Raspberry Pi succeeded mostly because of the price.

Tyeth - T
just use arduino nano clones for prototyping 3.3v, less cost than logic level converter.

Todd Thal - TT
Maddog what were some of the voltages on the old digital chips?...; ) shows how far we have come in last few decades...

maddog - M
Larry Bank (sigh) I understand your point, but we are trying to address that through the program I am working on.  It is NOT about "just manufacturing cheap boards" in Brazil, but the added costs of importing a mezzinine board into Brazil drops dramatically in a low-volume, low-cost (under 50 USD total value) issue.   The real costs (and losses to Brazil) come in manufacturing.   This is ANOTHER two or three hour discussion.
I was a bee keeper for three years.

Todd Thal - TT
Ouch!!!

Tyeth - T
@maddog What caused you to stop?

maddog - M
I became too busy to continue.   Bees do not need much maintenance in low volumes, but I still did not have time.In a few years when I retire I will probably go back to it in low scale.

Todd Thal - TT
In USA North Dakota is one the largest bee-keeper states
https://www.google.com/amp/relay.nationalgeographic.com/proxy/distribution/public/amp/2016/06/the-last-best-place-in-north-america-to-keep-bees

Tyeth - T
how many hives did you have?

maddog - M
Only three hives.

Tyeth - T
nice, good to know about the reality of maintenance /commitment

maddog - M
Do you count the number of bees leaving or entering the hive?

Tyeth - T
both? neither? I'd probably lift the lid and cock it right up

maddog - M
Actually, there have been recent improvements in beekeeping that make it easier.
You really only have to count them moving in either direction.   If they go out they will probably come back, so you take the event of exit/entrance and divide in two.

Guillermo - G
Sadly I need to leave early. Great show Robert, congrats!. See you next week guys!

Todd Thal - TT
Good job all!!'
THANKS GUILLERMO!

Sarah Levine - SL
Link to the community form in case i missed it
https://goo.gl/forms/HY1t0up7KiTMlusm1

maddog - M
In a beehive of 90000 bees, there will be one queen (who hardly ever leaves), 200 drones (males) and the rest are "worker bees" (underdeveloped females).

Sarah Levine - SL
code: OPENBRAZIL

Andre Curvello - AC
Thank you!

maddog - M
Great job, everyone.  I am very proud of you all.

Todd Thal - TT
Sarah above-mentioned google forms says "no longer accepting responses"...

Tyeth - T
no longer accepting responses on form

Sarah Levine - SL
just changed it
https://goo.gl/forms/HY1t0up7KiTMlusm1
CODE: OPENBRAZIL

Ragnar. - R
woking now
+r

Andre Curvello - AC
Bye!

maddog - M
If you do this in Germany, the drinking age is 16.

Mani - M
See u guys.. Gotta go!

Ragnar. - R
With higher voltage you get better noise margin.

CEZAR - C
But, with wearables, lower voltages switching mean longer battery duration (which is essential for this kind of IoT devices).

maddog - M
Cezar, completely agree.
Everything is tradeoffs...

Tyeth - T
initial deployment cost too prohibitive?
Tyeth, it would seem

CEZAR - C
In Brazil, our situation is much worst. There's a huge taxation barrier for importing engineering design tools and parts for prototyping. Government is blind and cannot realize that fostering engineering is more important than trying to invest in fully automated factories. Our politicians are stuck in time 100 years in the past. The import taxes for electronic components (at least for prototyping) should be the same as US, for example.

maddog - M
Tyeth, this is the difference between a board and a solution.    The solution may add so much value that the initial cost of the boards goes to insignificance.
You then cost engineer it to grow the market and beat out competition.

Tyeth - T
thanks all

maddog - M
Cesar, that is why we are supporting Open Source design tools, and we are talking to those same politicians to bring them in.
```





















# Adding Responsive Slideshare Embed
Slides from slideshare can be added via the media.html. Use the following syntax to do so:

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/JacHKnmjZF4WNS" %}

# Adding an Responsive Image

To add an image to the blog post please use the following.

{% include image.html name="OpenHours.png" alt="Your alternate text." %}

# Adding a Responsive Video Embed

To add a responsive video to your blog post you can use the media.html include as follows:

{% include media.html media_url="https://www.youtube.com/embed/dQw4w9WgXcQ" %}


# Adding code to your post.

The Jekyll site uses rouge syntax highlighting to highlight your code. For more information visits the 96boards Jekyll Documentation. The following example will add a python code block to the post

```python
def ispalindrome(word):
    if len(word) < 2:
        return True
    if word[0] != word[-1]:
        return False
    return ispalindrome(word[1:-1])

```
