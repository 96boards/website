---
author: sophie-haynes
comments: true
date: 2015-11-03 20:00:45+00:00
layout: post
link: https//www.96boards.org/blog/so-you-have-an-idea-for-a-pcb/
slug: so-you-have-an-idea-for-a-pcb
featured_image: pcb-idea.png
title: So you have an idea for a PCB?
wordpress_id: 8888
categories:
- blog
tags:
- 96Boards
- DRC
- Eeschema
- Footprints
- Gerber
- KiCad
- Mezzanine
- Netlist
- PCB
- PCB design
- Pcbnew
- Schematic
- Workflow
---

# From Idea to Production


Designing your own Mezzanine board is exciting process, plus it’s a much neater solution than projects with millions of jumper cables! In the following series of blogs, I’ll be explaining the workflow process, from having an idea in your head to the epic moment of holding the board in your hands.

_We’ll be working on the premise that you have already made your own electronics projects previously, eg an arduino and breadboard setup or something similar. If you have never tried to make an electronic circuit, I strongly suggest you attempt one before you try this. Not only are they a lot of fun, but they will also provide you with circuit fundamentals that are not explained here._


## Overview


To start, I'll briefly describe the outline of how a project would typically pan out. The whole process can be broken down into three main stages:




  * [Specification](https://www.96boards.org/?p=8941): Outline your board’s purpose and decide on what components you will use.


  * Development: Design the [schematic](https://www.96boards.org/?p=8946), create the [netlist](https://www.96boards.org/?p=8953) and draw the [pcb](https://www.96boards.org/?p=8964).


  * Prototype/Production: Produce [gerber](https://www.96boards.org/?p=8964) files and specification document, send the design for review, calculate the Bill of Materials


[![Workflow]({% asset_path "pcb-idea-img-1.png" %}){:class="img-responsive lazyload"} ](/assets/pcb-idea-img-1.png){:class="img-responsive lazyload"}

Not too scary huh? Often the development stage is the longest, since you will revise and rework your design several times before you will be happy with it.
[Specification→](https://www.96boards.org/?p=8941)
