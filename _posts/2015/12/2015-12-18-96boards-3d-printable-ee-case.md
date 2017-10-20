---
author: davidm
comments: true
date: 2015-12-18 15:56:04+00:00
layout: post
link: https://www.96boards.org/blog/96boards-3d-printable-ee-case/
slug: 96boards-3d-printable-ee-case
featured_image: 96boards-3d-case.jpg
title: 96Boards 3D printable EE case
wordpress_id: 10181
categories:
- blog
tags:
- 64-bit
- 96Boards
- ARM
- ARMv8
- Consumer IoT
- Husky
- Linux
- Open Embedded
- OpenSCAD
---

I talked about the crafting the [CE case using OpenSCAD in a prior blog post](https://github.com/96boards/96BoardCECase).  I’ve since made an OpenSCAD EE case.  It’s much simpler than the CE case, it does not have a lot of options, rather it leaves big cutouts for where connectors could be.  The 96Boards EE specification has two different sized boards in it,  but I’m only supporting the smaller one, the larger of the 2 is a standard off the shelf case for the microATX format, so I’m not going to recreate that.  There are plenty of [them](http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Micro+ATX+rackmount++case&rh=i%3Aaps%2Ck%3AMicro+ATX+rackmount++case) available for purchase.

I cloned the [CE case code, and then changed the dimensions and took out a lot of options, making the code some simpler, but if you look close it’s clearly derived from the CE case.](https://github.com/96boards/96BoardCECase)

The source file It does allow you to specify if you have a UART board installed and creates openings for that and you can expose the low speed connector if you want to and it inherited the rounded case options.   I’ve kept the x,y,z scalers to allow for the differences in 3D printers ([see my blog on CE cases](/blog/3d-printable-ce-cases/)).  Beyond that I don’t really intend to do much with this case.  It’s really meant to avoid letting the magic white smoke out of a board by accident, rather than have many options.  That said, patches are always gladly accepted.

The truth is I have not tested this case, or printed it out in any way, it’s bigger than my small 3D printer and my big 3D printer is down for redesign.  I plan on trying this print at one of my local maker spaces but not until I have a board in hand to test it with.
