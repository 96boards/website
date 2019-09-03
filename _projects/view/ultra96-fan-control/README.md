---
title: Ultra96 Fan Control
permalink: "/projects/ultra96-fan-control/"
description: |-
    Changing the BSP to stop that pesky fan running at full speed.
images:
  - ultra96-fan-control.png
categories:
  - Ultra96


---
# Ultra96 Fan Control

Changing the BSP to stop that pesky fan running at full speed.

## Project Details

- **Creator:** AndyCap
- **Project Name:** Ultra96 Fan Control
- **Type of Project:** Demonstrations (Projects showcasing individual features of a 96Boards product)
- **Project Category:** Hardware
- **Board(s) used:** [Ultra96](/product/ultra96/)


## Introduction

The Ultra96 board needs a fan in order to stay cool, with the standard BSP this fan is run at full speed.

This project shows you how to alter the standard BSP so that the fan speed can be controlled from Linux, or can be controlled by a simple linear algorithm based on processor temperature and fully running in the programmable logic.

First of all a word of warning, we are messing around with the cooling system for the processor here. Leaving the fan totally off for a long period will harm your Ultra96, the default BSP doesn't have over temperature shutdown enabled so if you mess something up here you may melt your Ultra96.

So please only attempt this if you are sure of you abilities, keep an eye on the temperature of the Ultra96 at all times until you are sure the changes you have made are working. You can use the "sensors" command in linux to check the temperature.


## Resources

### Code

- [Github](https://github.com/AndrewCapon/Ultra96FanControl)

### RSS URL

- [Instructions on Hackster.io](http://www.hackster.io/andycap/ultra96-fan-control-21fb8b)

### Social Media Links

- AndyCap: [Hackster.io](https://www.hackster.io/andycap)
- 96Boards: [URL](/) &#124; [Twitter](https://twitter.com/96boards) &#124; [Facebook](https://www.facebook.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/{{site.linkedin_username}}/)



***
