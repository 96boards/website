---
author: danielt
comments: true
date: 2017-04-13 23:04:46+00:00
layout: post
link: https://www.96boards.org/blog/laser-cutting-96boards-daniel-t/
slug: laser-cutting-96boards-daniel-t
image:
    featured: true
    path: /assets/images/blog/screenshot355.png
    name: screenshot355.png
title: Laser cutting for 96Boards with Daniel T.
wordpress_id: 20167
categories:
- blog
tags:
- 2016 review
- 64-bit
- 96Boards
- 96Boards case
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- cases
- computer vision
- Consumer Edition
- Consumer IoT
- DB410c
- DIY
- dragonboard410c
- F-Cue
- face detection
- face recognition
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- kernel virtual machine
- kvm
- laser
- laser cutting
- Linux
- MediaTek X20
- new year
- Open Embedded
- OpenCV
- Reference Platform
- rpb
- servo
- SimpleCV
---

# **Introduction**


There are myriad ways one could set about designing cases for 96Boards. So far 3D printers have been strongly represented; there are even  two different case designs shared on [https://github.com/96boards](https://github.com/96boards). It makes sense. 3D printers get cheaper everyday and additive manufacturing is really cool right now.

**However…**

Maybe,  just maybe, you don’t want a case that looks like it was made from compressed string. Maybe instead you want something shiny and see through so you can get a proper look at the chips that make the 96Boards magic happen… even if you have to resort to old school subtractive cutting to do it.

**Bring on the lasers!**

Laser cutters are computer controller cutting machines that can cut sheet material to very tight tolerances. Not all sheet material can be cut by laser. Some materials catch fire before they can be cut through, some give of toxic fumes and some simply reflect all the laser energy without leaving even a mark. However there still remains a wide range of materials that cut really work well with lasers. The king of these is acrylic sheet. It comes in a wide variety of gloss and matt finishes and covers the spectrum from (almost) totally opaque to more transparent than glass. Even better, as a thermoplastic it cuts, very nicely with a laser and leaves behind a neat polished finish.
![Laser Cutting Image 1]({% asset_path "laser-cutting-img-1.png" %}){:class="img-responsive lazyload"}


_From top to bottom this case has a layer of clear acryilic, five layers of transparent green side pieces, a layer of laser cut plywood and a final layer of green. I _**_love_**_ the way the green sides suck in the light… in the flesh they always seem to be glowing._


### **Commercial service or home manufacturing?**


You don’t need any equipment (except your computer) to design laser cut cases. Once you have a design there are a wide variety of outfits, large and small, which can do the cutting for you. They are pretty inexpensive because there’s very little human time needed to get your design from their servers to the cutter.

However commercial services are, quite naturally subject to commercial contraints, this commonly include:




  1. Most cutting services have fixed panel sizes (e.g. 100x100mm, 200x100mm, etc) so their staff can load the materials into the cutters very quickly. In order to minimise costs you may have to compromise your designs to fit the panel boundaries.


  2. Time is money… designs that tie up the expensive laser equipment for long periods inevitably cost more. This leads to designers have to avoid certain design flourishes.


  3. Engraving requires precise control of the laser power to avoid blowing holes though the material instead of merely marking them. Some comercial services, especially the budget ones, avoid this problem by disallowing engraving entirely and only offering a cutting service.


Home manufacturing releases us from all of the above. Time contraints can mostly be ignores because we will be working with small runs and can happily drink coffee whilst the laser does its thing. At least for me, time spent drinking coffee is never wasted!

In truth home manufacturing can be assumed to be entirely free from economic constraints because, if you had done the maths properly in the first place, you would almost certainly have sent your design to a commercial services. Anyone who buys a home cutter is probably doing it because they really want to learn all about laser cutting!

If you want to learn loads **and** save money then see if there is a hackspace in your home town!


### **Cutting and engraving**


There are three main actions that we can perform with a laser cutter.




  1. Cutting is the obvious one. Here we get the laser head to trace the outline of the shape we want to cut. We move the head fairly slowly (maybe 12mm/sec) and set the laser power very high. This cuts though the material. Thermo plastics cut cleanly whilst other materials tend to leave a slightly charred edge which skilled designers will incorporate into their design!


  2. Vector engraving is a quick way to add port labels. Again we get the laser head to trace the outline of the shape we want to engrave, we simply get the head moving faster (40 mm/sec or more) and turn the laser power down so we only mark the surface of the material.


  3. The final approach is raster engraving. This is used to fill in shapes or to transfer complex imagary and works by running the laser head side to side very fast (250 mm/sec) whilst turning the laser on and off to draw the pattern as we very slowly more the head down theee workpiece. Raster engraving is typically very slow compared to cutting and vector engraving. It is often avoided in comercial designes for this reason. On some systems it is possible to vary the laser intensity during raster engraving. In materials like plywood this allows different black levels to be acheived allowing the rendering of black and white photos.


All three actions can be seen in the following video, as you will see the vector engrave is complete in 15 second or so, whilst the raster engrave the follows takes over two minutes.

{% include media.html media_url="https://www.youtube.com/embed/Hixk8R_-ixQ" %}

# **Prerequisites**


The most important thing when designing a case for a board is to know the geometry very precisely. We have a big headstart on 96Boards because the specification has drawings for each form factor. This gives use the overall board size together with the location of the mounting holes.

However that’s not quite enough. Maybe you have a 96boards-uart plugged into the LS connector or perhaps you need access to the Hikey jumper header or the boot select switches on the bottom of a Dragonboard 410C. To get those cut out we need to get some measurements of the board itself to translate them into cuts. Digital verniers are great for this (go on treat yourself…basic ones can be picked up for around $5) and make completing the inital sketches very easy.

![Laser Cutting Image 2]({% asset_path "laser-cutting-img-2.png" %}){:class="img-responsive lazyload"}

# **Instructions**


The design process itself is simply producing a 2D drawing of the desired cut and engravings. Often this is simply different cuts/engraves in different colours although some programs use layers instead.

I tried using GUI drawing software but I find the editing process frustrating. In my head the command is “I want an M2.5 hole at (4, 50)” and I found expressing this in the GUI to be frustrating. Instead I found that the [svgwrite](https://pypi.python.org/pypi/svgwrite/) python library really helped me say exactly what I wanted.

My early designes used svgwrite directly to create SVG paths but I struggled to express the design in (X, Y) coordinates and vectors. Vectors are fine for North/South and East/West movement but non-square edges and rounded corners were difficult to express. In the end I extended svgwrite with turtle motion (foward, turn right, forward, etc). It may not work for everyone but I found this a much easier way to express my ideas.

My full design flow has become, render the functional elements using python. Then load up the resulting SVG in [Inkscape](https://inkscape.org) to add any artistic flourishs such as the artwork for the top of the board.

Once I have the final artwork then we’re ready to go. We can ether send it out to a cutting services (as I did for my early designs) or we go downstairs and fire up the beast in the cellar.


# **Conclusion**


**It’s an astonishingly rewarding process turning this:**

![Laser Cutting Image 3]({% asset_path "laser-cutting-img-3.png" %}){:class="img-responsive lazyload"}

**Into this:**

![Laser Cutting Image 4]({% asset_path "laser-cutting-img-4.png" %}){:class="img-responsive lazyload"}

Have a go!


# **Resources**


I have published most of my designs on [github](https://github.com/daniel-thompson/laser-lab). Take a look if you are interested in the turtle code or just want to copy some tried and tested designs. Its all there for you to use!

You can also checkout my [blog](http://www.redfelineninja.org.uk/daniel/) and [my flickr album](https://www.flickr.com/photos/daniel-thompson/albums/72157680519067371) for any further updates.

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
