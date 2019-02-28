---
title: 96Boards at Arm TechCon
author: Robert Wolff
date: 2018-11-21 00:00:01+00:00
image:
    featured: true
    path: /assets/images/blog/techcon-see-us.png
    name: techcon-see-us.png
    thumb: techcon-see-us-thumb.png
categories: blog
tags: 64-bit, 96Boards, Cortex-M, ARM64, twitter, python, Bot, script, arm, techcon, convention, san francisco, san jose, 
---

# Introduction

Last month, I had the opportunity to go to Arm TechCon in San Jose, CA. While this trip was originally intended to evangelize 96Boards at the [Linaro](https://www.linaro.org/) booth, it turned into something much bigger! 

Let's start from the beginning... For the better part of the last decade, I have enjoyed building solar kits/generators (big and small) for personal and academic use. While completing my B.S. I worked on several teams, and we delivered a variety of these generators. One was built into a shipping container, one into a trailer, another in a rolling case, and yet another into an educational wall. Finally I decided to build a couple personal ones, this ultimately led me to wanting a hand held version of this technology. Renewable energy in a light weight and portable case. After being hired at Linaro, I finally acted on this pet project and built my original kit, to be showcased at Linaro Connect (BKK16). Since the original (we will call V.1, see image below), I have experimented with a few other designs and sizes. Fast-forward a couple years and ...

{% include image.html name="box-v1.jpg" alt="Your alternate text." %}

A few quarters ago, while mentoring an Electrical Engineering senior design course at UCSD, I proposed my group of students re-design and build my original hand held solar kit. This new design would be intended for Arm developers, and more specifically 96Boards. After 10 weeks, the students delivered a decent bill of materials and completed a mostly working prototype! This was impressive; however, the kit would still require plenty more modifications to optimize performance and efficiency. This was something I planned on doing over time, but had no idea when I would do this, until...

One day, I posted a picture of the students' project on Twitter (And spoke about it on [OpenHours](https://www.96boards.org/openhours/)). This was when David Tischler from miniNodes reached out with a great collaboration idea!

We would take the solar box, apply another power source, add connectivity, give it a little makeover, and add a miniNode! All of this in a handheld case which can be carried easily from site to site, or dropped in a remote location to collect data and/or provide users with a means to develop off the grid. To tell the truth, the goal was to not limit the use-cases of this kit. We wanted to create a foundation for innovators, a functional and robust way for people to work on Arm, anywhere!

Before we knew it, plans were set to not only attend Arm TechCon for Linaro and 96Boards, but also to showcase this awesome projects with miniNodes as Arm Innovators at the Arm Innovator Pavilion! 

Keep reading to hear more about the different parts of TechCon from my perspective. I will try to share pictures, videos and links when possible. And for anyone who is interested in jumping right to the project repository, [go ahead and click here](https://github.com/96boards-projects/96b-sustain-dev-box)!


# More about the Project...

As I mentioned in the introduction, this project was a collaboration between 96Boards and miniNodes; however, we would not have been able to create such an amazing kit without the help of another indivitual who provided us with all our 3D printed parts, [Gabriel Peterson](https://www.instagram.com/gabrieldpeterson/). Gabriel worked with me in the weeks prior to the event to comepletly revamp the kit (the makeover). Without his design and 3D printing skills, we would not have been able to complete this kit on time. All STL designs and files were created by Gabriel Peterson. I am told he will continue to work with us on the next revision, as there were several things we want to improve on! Very exciting!

The original kit (created by our previously mentioned UCSD students) was small and outfitted with a wood interior. This is something that Gabe and I quickly wanted to replace. We booked it to Home Depot and picked out a new box, wires, glue, velcro, tape and a variety of tools. With this, a 3D printer, and some filiment, we would create a V.3 masterpiece! 

{% include image.html name="box-v3.JPG" alt="Your alternate text." %}

I would like to quickly list out a basic Bill of materials for the kit in question:

- [Case](https://www.homedepot.com/p/RIDGID-22-in-Pro-Organizer-Black-222571/205440492)
- [LCD Screen](https://www.arrow.com/en/products/96boards-display-7/linksprite-technologies-inc)
- [Charge Controller](https://www.amazon.com/gp/product/B013HK2OOE/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1)
- [Batteries](https://www.amazon.com/gp/product/B00KC39BE6/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1)
- [Solar Panels x 2](https://www.amazon.com/gp/product/B00OZC3X1C/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1)
- Inveter
- [96Boards Base Board - Arrow DragonBoard 410c](https://www.96boards.org/product/dragonboard410c/)
- [96Boards Mezzanine - Shiratech LTE](https://www.96boards.org/product/shiratech-lte/)
- [3D Printer](https://shop.prusa3d.com/en/3d-printers/180-original-prusa-i3-mk3-kit.html#)
- [Fillament](
https://shop.prusa3d.com/en/filament/159-pla-extrafill-gold-happens-750g.html)
- Switches
- Juntions
- Wires
- Connectors

And if you are interested in checking out the STL files, they are completely open and ready to be downloaded [here](https://github.com/96boards-projects/96b-sustain-dev-box/tree/master/stl-files).

I would suggest, for anyone interested in reading more about the project, please visit the project repository [here](https://github.com/96boards-projects/96b-sustain-dev-box). There is a complete outline, and some instructions to guide in the recreation of the kit.

# The Linaro Booth
 
The Linaro booth was on the far end of the convention hall, in a well lit and lively section of the floor! Filled with demos and a personal barista, everyone was welcome to grab some coffee (espresso or hot chocolate), grab a comfortable seat (we had couches!) and hang out!

At the booth, there were several demos...

1) [DragonBoard 820c OpenCV color tracking demo](https://github.com/dbharbin/OpenCV-color-tracking-demo) by Don Harbin
2) [The 96Boards SocioNext Synquacer Developerbox](https://www.96boards.org/product/developerbox/)
3) [ThunderX 2 Work Station!](https://www.avantek.co.uk/store/avantek-thunderx2-arm-workstation-thunderx2station.html)

Anyone lucky enough to stumble across this booth was surely in for a treat, Arm technology and amazing demos for everyone! 

Anyone who is interested in learning more about Linaro, please take some time to explore the [Linaro.org website](https://www.linaro.org/).

# 96Boards at the Arm Innovators Pavilion

The Arm Innovators Pavilion took up what seemed like 500-1000 square feet of the showroom floor (trust me, this is a lot), and it was an amazing sight to see! Smaller booths lined the outer region of the entire floor space, and a huge area in the center was closed in by a net. Above the entire space was a large sign to direct people, all the way from the many entrances to this area. Basically, you would not get lost looking for the pavilion. From the JeVois Smart Machine Vision Camera, [Waterscope](https://community.arm.com/members/dr-alexander-patto) water bacteria testing, the OpenMV Open Source camera, and NXP drones (that's what the net was for!) so many great people and projects were featured in the pavilion. And in one of the corners of this massive floor space, you would find the miniNodes / 96Boards collaboratin dubbed "96Boards Solar Development Box" :-)

As much as I would like to continue talking about our project, it was but a small part of the entire pavilion and I would rather highlight the pavilion it self and my experience, being a part of this amazing community and ecosystem. 

The Arm Innovators program put together this space for [their innovators](https://community.arm.com/achievements/e4ecdcdf-ad4b-4858-95ed-24be69743253). We were invited to bring our projects, feature them along side other Arm innovators, and to take in the conference while getting to know what is going on, in the Arm ecosystem. The folks at Arm thought at this entire experience for us, and they did a great job! So far, being a part of this ecosystem has proven to be invaluable for some of the things I have been doing both personally and for 96Boards.

To close this part of the blog, I would like to mention and thank Arm for naming me as one of their new Arm Innovators! You can read about this in the latest [Arm Innovators Blog here](https://community.arm.com/innovation/b/blog/posts/say-hello-to-the-latest-arm-innovators). I am extremely grateful for this opportunity. As an Arm Innovator, I plan to represent Linaro and 96Boards to their fullest while bringing some of my personal experience to the table. If any other Arm Innovators come across this blog and are looking to collaborate, I welcome anyone to reach out to me with ideas at robert.wolff@linaro.org.

# Conclusion

Please stay tuned for more blogs! I plan to continue working within the Arm ecosystem to create more projects in the coming year, and to accent this program and 96Boards. 

Cheers!