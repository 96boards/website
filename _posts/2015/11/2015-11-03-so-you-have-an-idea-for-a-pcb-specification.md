---
author: sophie-haynes
comments: true
date: 2015-11-03 20:00:15+00:00
layout: post
link: https://www.96boards.org/blog/so-you-have-an-idea-for-a-pcb-specification/
slug: so-you-have-an-idea-for-a-pcb-specification
featured_image: pcb-idea.png
title: So you have an idea for a PCB? - Specification
wordpress_id: 8941
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

Welcome to the first step of your journey! So you have a kick-ass idea for a Mezzanine project? Or perhaps you have been given specific guidelines on what you are making? Great! First step complete! Nearly...

Now you need to really clarify your idea. What exactly is your board going to do? How will it successfully do those things? Will it have any special design requirements? Starting by mapping down the specification of your Mezzanine, I/O requirements, and the key use cases your Mezzanine is going to address. There are Mezzanine design guidelines which will be published shortly as well.

At this point in the workflow, you'll want to have a list of components you intend to use. This will make building the schematic (the next step) much easier. There are lots of resources you can use to identify what you can choose to satisfy the specification you wrote down previously.

When choosing your components, bear in mind that some have a longer lead time than others, and supply availability varies too. This might present a risk in later stages.

Another thing worth noting, is that you should be aware of the available expansion connectors on the [96Boards](/) main boards; LS (low speed) and HS (high speed) connectors. How will your Mezzanine utilise the available pins?


[←Overview](/?p=8888) &#124;[Development: Schematic & Netlist→](/?p=8946)
