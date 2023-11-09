---
author: sophie-haynes
comments: true
date: 2015-11-03T20:00:45.000Z
layout: ../../layouts/Post.astro
link: https://www.96boards.org/blog/so-you-have-an-idea-for-a-pcb/
slug: blog/so-you-have-an-idea-for-a-pcb/
image: ../../assets/images/blog/pcb-idea.png
image_name: pcb-idea.png
title: So you have an idea for a PCB?
wordpress_id: 8888
category: blog
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




  * [Specification](/blog/so-you-have-an-idea-for-a-pcb-specification/): Outline your board’s purpose and decide on what components you will use.


  * Development: Design the [schematic](/blog/so-you-have-an-idea-for-a-pcb-development-schematic-netlist/), create the [netlist](/blog/so-you-have-an-idea-for-a-pcb-development-netlist/) and draw the [pcb](/blog/so-you-have-an-idea-for-a-pcb-development-pcb/).


  * Prototype/Production: Produce [gerber]() files and specification document, send the design for review, calculate the Bill of Materials


{% include image.html path="/assets/images/blog/pcb-idea-img-1.png" alt="Workflow" %}

Not too scary huh? Often the development stage is the longest, since you will revise and rework your design several times before you will be happy with it.
[Specification→](/blog/so-you-have-an-idea-for-a-pcb-specification/)
