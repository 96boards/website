---
author: sophie-haynes
comments: true
date: 2016-02-02 17:08:26+00:00
layout: post
link: https://www.96boards.org/blog/new-96boards-mezzanine-template-for-kicad/
slug: new-96boards-mezzanine-template-for-kicad
image:
    featured: true
    path: /assets/images/blog/test-project2-1.png
    name: test-project2-1.png
title: 'New: 96Boards Mezzanine template for KiCad'
wordpress_id: 11072
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
tags:
- 96Boards
- daughterboard
- KiCad
- Mezzanine
- PCB design
- template
---

Here are 96Boards, we’re big fans of the Open Source KiCad EDA tools for designing circuit boards. Both our [UART adapter](/product/uartserial/) and [Sensors mezzanine ](/product/sensors-mezzanine/)were designed using KiCad, and now we’re announcing a template that will get you started with your own 96Boards Mezzanine board design.

The template project helps to make mezzanine board development a bit easier and quicker. It provides you with an initial schematic and board layout so you don’t have to worry about placing the mounting holes and connectors in exactly the right place. You can find the template project on GitHub here:

[https://github.com/96boards/96boards-kicad-mezzanine-template.git](https://github.com/96boards/96boards-kicad-mezzanine-template.git)

It works with KiCad’s “New Project From Template” function. To use it, you need to have installed at least version 4.0 of the KiCad tools. You can download it from the [KiCAD website](http://kicad-pcb.org/download/).




1. Navigate to KiCad’s template folder and clone [https://github.com/96boards/96boards-kicad-mezzanine-template.git](https://github.com/96boards/96boards-kicad-mezzanine-template.git)
    * On Linux, the template folder is in $HOME/kicad/template
    * Note for OSX users: In the current stable release of KiCad 4.0.0, there is a bug with the template selector. You will probably find it easier to instead create the following in your Documents directory: /kicad/template/ , then clone the github repo into this template directory).

2. In KiCad, click File > New Project > New Project From Template.


3. In the first pop up, create a directory for the new project


4. The next pop up will be the template selector. Choose “User Templates” and then click on the 96Boards logo to create a new project from the template


The new project will start with schematic symbols for the low speed connectors, and a PCB layout with the correct dimensions, connector and mounting hole locations.

A detailed Mezzanine design guideline is also going to be published shortly. It is highly recommended that to be followed when you work on Mezzanine products.
