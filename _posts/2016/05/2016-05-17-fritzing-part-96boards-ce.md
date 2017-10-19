---
author: rsalveti
comments: true
date: 2016-05-17 00:42:41+00:00
layout: post
link: https://www.96boards.org/blog/fritzing-part-96boards-ce/
slug: fritzing-part-96boards-ce
featured_image: breadboard.png
title: Fritzing part for 96boards CE
wordpress_id: 14421
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
tags:
- 96Boards
- bubblegum-96
- CE
- dragonboard410c
- fritzing
- HiKey
---

As I was playing with the [DS18B20](https://www.adafruit.com/product/374) digital temperature sensor on the weekend, I noticed that there was no [Fritzing](http://fritzing.org/home/) part for any of the [96boards](/products/) we have (e.g. [HiKey](/products/ce/hikey/), [Dragonboard410c](/products/ce/dragonboard410c/), [Bubblegum-96](/products/ce/bubblegum96/)), so I decided to create my own part and make it available for others. We all know that designing projects with [Fritzing](http://fritzing.org/home/) is not only great, but also super easy and looks amazing, so I hope this to be useful for others :-)

Since this was my first time customizing and creating a new Fritzing part, I first had to spend quite a bit of time learning about the [part](http://fritzing.org/parts) [build process and format](http://fritzing.org/learning/tutorials/creating-custom-parts/), and then trying to get something that could look similar to our Consumer Edition specification. As the 96boards hardware specification is common between boards (e.g. [CE boards](https://linaro.co/ce-specification)), I really only needed to create one part that implements the specification,  and use that to represent all the boards belonging to the same specification family.

When looking for examples, I found a great tutorial at [sparkfun](https://learn.sparkfun.com/tutorials/make-your-own-fritzing-parts) that describes the entire process to create your own part from scratch, so I decided to use that as a guide.

After playing with [Inkspace](https://inkscape.org/) for a few hours, I finally had the breadboard, schematic, pcb and icon for my part. I simply used one random part as reference, and replaced all the pieces with my own files. After creating the metadata and making sure that the connectors were matching exactly with what I had in the breadboard, schematic and pcb files, the part was finally completed :-)

96Boards CE Part
![breadboard]({% asset_path "fritzing-img-1.png" %}){:class="img-responsive lazyload"}

96Boards CE PCB
![pcb]({% asset_path "fritzing-img-2.png" %}){:class="img-responsive lazyload"}

96Boards CE Schematic
![schematic]({% asset_path "fritzing-img-3.png" %}){:class="img-responsive lazyload"}

I decided to not add the high speed connector, since I was mostly interested in the low speed connector at this stage. It's not that complicated to extend the part to include it, but it will definitely require a bit of time to design the right SVG and map all the connectors, so maybe for a later time (contributions are more than welcome!).

Since everything is Open Source and as it would be great if this part could be included in the parts databased from Fritzing by default, I also proposed it to be merged in the official project. You can follow the pull request at the [Fritzing parts github project](https://github.com/fritzing/fritzing-parts/pull/47).

If you want to simply use this part in your project, just use the pre-built part that I pushed at [http://rsalveti.net/pub/fritzing/96boards_CE.fzpz](http://rsalveti.net/pub/fritzing/96boards_CE.fzpz). To use it, simply open Fritzing, click at **My Parts**, and import. The screenshot below covers the described path:

Sketch example using the part created:
![Screenshot from 2016-05-16 21-14-24]({% asset_path "fritzing-img-4.png" %}){:class="img-responsive lazyload"}


Connecting a DS18B20 digital temperature sensor, using a level shifter (compatible with HiKey, Dragonboard410c and Bubblegum-96)
![Sketch]({% asset_path "fritzing-img-5.png" %}){:class="img-responsive lazyload"}  

Feel free to get in contact if you got ideas or requests to extend this effort. I also hope to include extra parts covering the other specifications we have (e.g. [Enterprise](https://linaro.co/ee-specification)), including the mezzanine products, but those will have to wait for another cold weekend :-)

Enjoy!
