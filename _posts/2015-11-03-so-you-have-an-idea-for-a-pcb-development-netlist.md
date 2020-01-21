---
author: sophie-haynes
comments: true
date: 2015-11-03 20:00:27+00:00
layout: post
link: https://www.96boards.org/blog/so-you-have-an-idea-for-a-pcb-development-netlist/
slug: so-you-have-an-idea-for-a-pcb-development-netlist
image:
    featured: true
    path: /assets/images/blog/pcb-idea-image.png
    name: pcb-idea-image.png
title: "So you have an idea for a PCB? - Development (Netlist)"
wordpress_id: 8953
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

If you are unsure as to what a netlist is; put simply it's a condensed version of your schematic that can imported into your pcb.

#### Navigation

DRC
Netlist Generator

#### DRC

DRC Icon
{% include image.html name="pcb-netlist-img-1.png" alt="DRC Icon"%}

Before you create the netlist, it’s a good idea to run the DRC tool, though this is not mandatory. DRC stands for Design Rules Check, and it will check for any missing annotations and similar errors. Click the icon (in the top toolbar, looks like a ladybird with a green tick), then click Run. If there are any errors, they will appear in the Messages box and Error list box. If the DRC comes clean, you’re ready to make the Netlist.
* Eeschema has an automatic annotation tool which will appear when you run the Netlist generator if any components are unlabeled. If these are the only errors that appear when you run DRC, you can ignore the errors and proceed to generating the setlist.

#### Netlist Generator

Making the netlist is very simple, but also very important! It will add the required components to your PCB, and also provide pointers when drawing traces between components.
On the top toolbar, look for the icon with a green rectangle and the word "NET" inside. This is the Netlist Generator. After clicking, you will be greeted by the Netlist pop-up window. With Pcbnew selected in the top left toolbar; click Generate. Now you will be asked what you want to name the netlist file. Once you’re happy, click Save, and wham bam! You have your netlist file.
Now you're ready to start on the fun stuff!

[←Development: Schematic](/blog/so-you-have-an-idea-for-a-pcb-development-schematic-netlist/) &#124;[Development: Footprints →](/blog/8960/)
