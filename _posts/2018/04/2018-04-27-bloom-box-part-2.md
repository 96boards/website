---
title: Bloom Box - Part 2
author: Aansh Malik
date: 2018-04-27 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
    thumb:  self-balancing-bot-thumb.jpg
categories: blog
tags: Bloom Box, 96boards, arm, ucsd, university of california san diego, sustainability, renewable energy, education, academia, STEM, science, technology, engineering, mathematics, developer, engineer, electrical engineer, electronics
---

# Introduction

< This week on the bloom box blog feel the **POWER** with us! We explain how and just how much power we bestow upon our creation; the Bloom Box. The Bloom Box needs to be capable of manifesting the creativity of your mind and executing your code in the darkness of night in the remotest of locations. Not a task for the faint of heart! Now onto the calculations. >

# Power Specifications

It all starts with a few easy spells(equations actually). 
The Power Equation:
P(Watts) = V(volts)*I(Amps)
P =Power,V = Voltage, I=Current
The Energy Equation:
E(WattHours) =P(Watts)*t(Hours)
E =Energy,t =Time
It all comes together with a simple principle:
Energy Generated Energy Required for Operation
Essentially, our box needs to be able to generate the amount of energy that it requires for operation. Our main sources of power are solar panels, therefore our solar panels need to be able to generate the required amount of energy in the 5-6 hours of daylight they recieve for consistent operation throughout the night. This generated energy is stored in our batteries which also need to be able to store the amount of energy required for operation. But how much energy is required for operation? That depends on our load which is defined below.

# Energy Requirements

The load determines the energy required to operate. Assuming a load of the heart of our Bloom Box the Dragonboard 410c computer plus a few add ons such as a fan, and LED lights we get the following load:
24W(Dragonboard 410c)+21W(Fan)+5W(Lots of LEDs) = 50W
Assuming we need to operate this load for 10 hours of night we need:
Energy Required = 50W*10 hours = 500Wh
Therefore, our solar panels need to be able to generate and our batteries need to be able to store atleast 500Wh worth of energy! Assuming 6 hours of daylight we calculate the power required by our solar panels:
Power of Solar Panels =Energy Required/Charging Time = 500Wh/6h = 83W 
Now, onto the batteries:
Amperage of Batteries =Energy Required/Battery Voltage = 500/12 = 42Ah

# Next up… 

Now that we know the requirements, we chose and order the right tools to get the job done. Stay Tuned!

Best,
Aansh
