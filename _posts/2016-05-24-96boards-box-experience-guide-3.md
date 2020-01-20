---
author: Robert Wolff
comments: true
date: 2016-05-24 17:25:58+00:00
layout: post
link: https://www.96boards.org/blog/96boards-box-experience-guide-3/
slug: 96boards-box-experience-guide-3
image:
    featured: true
    path: /assets/images/blog/Screenshot-39.png
    name: Screenshot-39.png
title: 96Boards Out of box experience guide - part 3
wordpress_id: 14690
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 3D print
- 3D printed case
- 64-bit
- 96Boards
- 96Boards case
- Android
- ARM
- ARMv8
- Breakout
- Bubblegum
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- Fab Lab
- Fablab
- Fabrication lab
- GPIO
- HiKey
- LeMaker LCD
- Library
- Linux
- Low speed expansion header
- Maker Faire
- Mezzanine
- Mezzanine template
- Michael Welling
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- Robo-Mezzi
- rpb
- sensors
- UART
---

You’ve made it to part three of the out of box experience! Previously we spoke about three different [Consumer Edition](/products/ce/) boards ([HiKey](/product/hikey/), [DragonBoard 410c](/product/dragonboard410c/), and [Bubblegum-96](/product/bubblegum-96/)) and what makes them unique. We also talked briefly about the different operating systems available to you and where you might go to download and learn the flashing process. For those of you who missed this blog, it can be found [here](/blog/96boards-box-experience-guide-2/). Also, don't forget to check out our [Open Hours](/openhours) series which we host every Thursday at 4pm GMT - here you can discuss the blog or any other questions you may have with the experts on the 96Boards team.

In this part of the series we will look at the many 96Boards compatible enhancements, design tools, and add-ons. This includes the available Mezzanine product line with sensors and 3D printed accessories.

First, what is a Mezzanine? As defined on [Wikipedia](https://en.wikipedia.org/wiki/Mezzanine) the “mezzanine is an intermediate floor (or floors) in a building which is open to the floor below”. This makes a lot of sense when comparing the definition of mezzanine to the 96Boards enabled mezzanine products! Using any 96Boards as a base board (ground floor), we can stack mezzanine boards (intermediate floors) to add/change features and enhance our overall experience with the base board. There are currently several mezzanine boards available, and since I will not be going into these different boards individually, take some time to read more about each one on the [96Boards website](/products/mezzanine/). Here you will find a short description and links to where they can be purchased. Another mezzanine board of interest is the [Robo-Mezzi, by Michael Welling](https://github.com/mwelling/96boards-robomezzi). As the name indicates, this board is intended for robotics, and it is a great example of how powerful the [96Boards CE Specification](https://github.com/96boards/documentation/blob/master/Specifications/96Boards-CE-Specification.pdf) is when paired with the [Mezzanine template](https://github.com/96boards/96boards-kicad-mezzanine-template). With access to the these resources, the possibilities are endless. Tapping into your 96Boards potential is as easy as adding a mezzanine layer to your base board. Michael Welling spoke briefly about his Robo-Mezzi at last week’s Open Hours and has agreed to return this week. Please stop by if you have any questions for him ([More information on Open Hours](/openhours/)). More than one of these mezzanine boards will be used in later issues of this blog series for demos and troubleshooting etc...

The questions might arise, why do we need the mezzanine boards? Or, what do they do that will make my 96Boards that much different? The answer is simple and can be found in the list below. These are just some of the reasons/uses of the mezzanine boards.




  1. Voltage increase for the 40-pin Low speed expansion header: The standard output voltage for the GPIO on this header is 1.8V. Many components function using 3.3-5V. Using a board like the Seeed Sensors Mezzanine or the Linker kit from Arrow will allow us to use these GPIO’s at a higher voltage.


  2. Breakout of pins: the 40-pin low speed expansion header is 2 by 20 pins at 2.0mm pitch for both dimensions. If you are ever trying to access this header with the more standard 2.54mm pitch connectors or cables, you will find it is quite difficult for even certain jumpers to fit on the header when using all available GPIO pins. The Mezzanine boards break these pins out to a comfortable distance and allow access to them through jumper cables that come included in some of the kits.


  3. Arduino access: the Seeed Sensors Mezzanine comes with a built in Arduino chip. This will allow you to program tasks which can be performed on the Arduino, while saving the bulk computing power of the ARM chip for more complex tasks. Or you could always just play with the Arduino for fun.


  4. High speed cameras and monitors which do not use HDMI. Instead, you can plug directly into the high-speed expansion header, as can be seen with this [mezzanine LCD screen from LeMaker](http://www.lenovator.com/product/102.html).


Third party vendors will continue to develop and deploy increasingly innovative mezzanine products. As a part of the 96Boards community, you can enjoy these products without skipping a beat. At the end of the day, these mezzanine boards are designed specifically for your compliant 96Boards platform, no matter which one you are using at the time. In later issues of this blog series we will look at several of these Mezzanine boards in more detail. We will create a “Hello World” application, after which I will point you to a bank of extra resources and examples.

If you already own a Sensors Mezzanine board and would like to get ahead of the game, feel free to take a look at David Mandala’s blogs on 96Boards enabled libraries and GPIO access:

[How do you install 96BoardGPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)
[How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)

These blogs have been condensed into instructions sets, which can be found here.

Mezzanine products can be extremely useful, but what else can we use to enhance our 96Boards experience? Well, as the 96Boards community grows, so does the availability of fun accessories like 3D printed cases! Now I am sure there are more sources out there for cool 96Boards stuff, but here are some links I found that can help you get started.

[96Boards Case #1](http://www.thingiverse.com/thing:1090288): This case does not have a lid. It is most likely designed with space for a mezzanine board to be placed on top.

[96Boards Case #2](http://www.thingiverse.com/make:221752): This board has a lid. Because of the lid, you will most likely not want to use this case if you plan on using a mezzanine board.

[96Boards Case #3](https://github.com/96boards/96boards-case): This case does not have a lid. It is most likely designed with space for a mezzanine board to be placed on top.

[96Boards Case #4:](/blog/3d-printable-ce-cases/) This case is pretty slick, and it also has a lid. It is not intended to be used with Mezzanine products.

[96Boards Case #5](https://github.com/daniel-thompson/cad-for-cases): This case is a little different in that it is intended to be manufactured using a laser cutter.

[96Boards CE Hot shoe camera mount](http://www.thingiverse.com/thing:1192544): Be sure to check this link out, the creator has included several pictures of it being used.

[96Boards CE LCD Mount](http://www.thingiverse.com/thing:1192632): Be sure to check this link out, the creator has included several pictures of it being used.

If you do not have a 3D printer, I would suggest searching online for a local “[Fab Lab](https://en.wikipedia.org/wiki/Fab_lab)”. Most cities will usually have a fab lab which is open to the community. The public can use the facilities for a small subscription fee (or sometimes free!). In many cases fab labs host events and offer classes to teach about the many technologies they have available on site. [My local fab lab (San Diego, California)](http://www.fablabsd.org/) brings in guest engineers and speakers to give beginner and advanced courses on coding, circuit building and design, soldering and much more! Fabrication labs like this can be a great resource for the 96Boards hobbyist and developer who is looking to expand their horizons and get involved with the community.

It is time for us to bring this part of the blog to a close. Since the 96Boards team spent some time at Maker Faire this week up in the Bay Area, I will leave you all with a little read about the DragonBoard 410c. It seems like it was only yesterday that I received my first DragonBoard, and now it has almost been a year since they were released. I hope you enjoy.

[http://makezine.com/2016/05/20/qualcomm-expands-maker-adoption-dragonboard-410c-bay-area-maker-faire/](http://makezine.com/2016/05/20/qualcomm-expands-maker-adoption-dragonboard-410c-bay-area-maker-faire/)

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](https://webchat.freenode.net/) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. I hope to you see you there!

In next week’s blog we will focus on a particularly important part of the 96Boards hardware (and software), the [low-speed expansion header]() and it’s many GPIO interfaces. I will highlight some great examples and steer you to a bank of resources that will help any hobbyist/developer get started with any 96Boards!

--

[**In this series**](/blog/tag/)




  * [96Boards Out of box experience guide – part 1](/blog/96boards-box-experience-guide-1/)


  * [96Boards Out of box experience guide – part 2](/blog/96boards-box-experience-guide-2/)


  * [96Boards Out of box experience guide – part 3](/blog/96boards-box-experience-guide-3/) (This)
