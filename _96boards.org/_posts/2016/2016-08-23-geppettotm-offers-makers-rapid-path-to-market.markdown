---
author: 96boards-Team
comments: true
date: 2016-08-23 09:29:37+00:00
layout: post
link: http://www.96boards.org/blog/geppettotm-offers-makers-rapid-path-to-market/
slug: geppettotm-offers-makers-rapid-path-to-market
title: GEPPETTOTMOffers Makers Rapid Path to Market
wordpress_id: 16643
categories:
- blog
---

# GEPPETTOTM Offers Makers Rapid Path to Market


**_Design A Custom 96Boards™ Mezzanine Board In A Day_**

The addition of the 96Boards module to [Geppetto](https://www.gumstix.com/geppetto/)® helps Makers, prototyping with 96Boards, design a custom expansion board online using simple drag and drop modules like camera connectors, LTE, and more.  Utilizing a large library of modules, designers can easily place and connect them to the other modules on their board as they are guided through the board design with Geppetto's pop-up menu system.

After the designer completes their online design, they simply click to order a market-ready device. The [Geppetto](https://www.gumstix.com/geppetto/)® automated manufacturing cycle completes the PCB routing, fabrication, sourcing, component purchasing, assembly and board bring up which drastically reduces cost and time of production.

This is a significant advance in custom design options for Makers targeting high volume production in the industrial or professional markets and building products such as consumer drones, media players, signage and other Internet of Things (IoT) products.

[caption id="attachment_16647" align="aligncenter" width="640"]![The Geppetto workspace](/assets/images/blog/2016/08/Geppetto_blank_base.png){:class="img-responsive"}  The Geppetto workspace[/caption]




Now a custom 96Boards expansion board can be designed in a few hours, ordered, tested and delivered production ready within 15 days for a simple $1999 setup fee. Designers will also be supplied with technical documentation for the initial stages of software development.

Aside from Gumstixs own Overo and DuoVero COMS, connectors for many 3rd party COMs and some on board SOCs and microcontrollers are available as well. Alongside the release of the AeroCore 2 for Dragonboard 410C, which was itself designed in Geppetto, a new 96Boards compliant mezzanine connector has been added to Geppetto module library.

Let’s walk through design process of the AeroCore 2 for DragonBoard 410C to demonstrate how Geppetto simplifies the design process and automates the manufacturing process while reducing cost and time of production.


### Assumptions





 	
  * Basic understanding of embedded computer hardware.

 	
  * Access to the web via up-to-date browser (ideally Chrome or Firefox).

 	
  * Geppetto user account (only required for saving designs and ordering)




## Making the AeroCore 2 for 96Boards in Geppetto D2O


In order to demonstrate how to use Geppetto, the Aerocore 2 for Dragonboard 410C design will be replicated using the 96Boards mezzanine connector module.

![addr_bar](/assets/images/blog/2016/08/addr_bar.gif)


### Step 1: Go to Geppetto


Geppetto D2O is a web app, requiring no software other than your browser.  Enter the address: [geppetto.gumstix.com](http://geppetto.gumstix.com/) into your browser’s address bar. When Geppetto finishes loading, you will be presented with the “Workspace” tab.  This is where you design your board.

The other tabs and elements within the interface are explained in video tutorials supplied by Gumstix at:

[https://www.gumstix.com/geppetto-knowledge-base/](https://www.gumstix.com/geppetto-knowledge-base/)

![](http://i.giphy.com/3o7TKONlOC5noHjWfu.gif)


### Step 2: Add the Connector


Drag and drop the mezzanine connector for 96Boards from the "COM Connectors" tab in the column to the right onto the green rectangle (your board).  It automatically snaps to the bottom edge of the board.  This makes sure that the USB and HDMI ports on the Dragonboard are accessible.  The default board size can be adjusted as you would a window on your desktop - by dragging the board’s edges.  Once the connector fits on the board you will notice that the board outline and the connector module are both red.  That is because there are unmet requirements.
![](http://i.giphy.com/l0MYKLJoGIUxtp888.gif)


### Step 3: Satisfy Requirements


Almost every module that you place on the board will either require or provide (or both) certain signals and buses.  The only exceptions to this rule are mechanical elements, such as mounting holes.

When you hover over a module, its requirements are displayed in a menu that pops up beside the module. Clicking on it filters the list of modules displayed in the library to those that can satisfy this requirement. Once you've placed a compatible module on the board for each required signal, the module and board turn yellow.

Drag the battery balance connector onto the board and connect the modules by clicking on the 16V requirement next to the mezzanine connector module and then on the 16V signal next to the battery module. As soon as the module’s requirements are satisfied, the board and module turn green.

![](http://i.giphy.com/l0MYKKntJQrSyHUhW.gif)


### Step 4: Add a Microcontroller


The Aerocore 2 for Dragonboard 410C contains an ARM Cortex-M4 microcontroller used for drone autopilot functions and real-time motor control and sensor monitoring.

Modules can be placed within the shadow (the dark grey outline) of another module as long as they don't overlap with the green footprint.  In order to save space, The M4 is placed between the low-speed and high-speed mezzanine headers.  The module can be rotated by right-clicking it and selecting "rotate" from the context menu.  Double-clicking modules also rotates them.

The M4 requires 3.3V so we need to add a regulator in order to power it from the battery.  The regulator could also take 5V from the Dragonboard but we'll be using that for other modules.

![Geppetto-selection](/assets/images/blog/2016/08/Geppetto-selection.gif)


### Step 5: Finishing the Design


Once the mezzanine module and microcontroller are placed, it's time to add the sensors, headers and connectors that make up the AeroCore 2.  This includes several LEDs, pushbuttons console connections, sensors and communication headers.  The animation to the left illustrates the placing of modules to fit the design.  With each module added, its requirements must be satisfied by other modules on the board. I/O voltage requirements are managed automatically by Geppetto in the background.  In some cases you will be given the option of choosing between different logic voltages when you assign pins.

The flight-critical sensors and headers are connected to the microcontroller while modules like the CSI2 camera connector are wired to the mezzanine module.  You will notice that the board lacks the LTE modem, which was added after the fact to conserve space.

Compare this design (below) to the original Gumstix engineers’ design (above).

[caption id="attachment_16646" align="alignnone" width="640"]![The Gumstix Aerocore 2 for Dragonboard 410C in Geppetto](/assets/images/blog/2016/08/Geppetto-Selection_036.png){:class="img-responsive"}  The Gumstix Aerocore 2 for Dragonboard 410C in Geppetto[/caption]





[caption id="attachment_16645" align="alignnone" width="640"]![The Gumstix AeroCore 2 for 96Boards in Geppetto](/assets/images/blog/2016/08/Geppetto-Selection_047.png){:class="img-responsive"}  The Gumstix AeroCore 2 for 96Boards in Geppetto[/caption]




[Geppetto](https://www.gumstix.com/geppetto/)® is a free online design tool and allows users to compare module cost during design, create multiple projects and share ideas. Log on today to test drive a 96Boards design at [geppetto.gumstix.com](http://geppetto.gumstix.com/).



* * *



**Author**: Keith Lee
