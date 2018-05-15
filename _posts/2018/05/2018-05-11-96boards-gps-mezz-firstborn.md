---
title: 96Boards GPS Mezzanine - "The First Born"
author: Michael Welling, Ron Justin & Robert Wolff
date: 2018-05-11 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/collab-firstborn-7.png
    name: collab-firstborn-7.png
    thumb: collab-firstborn-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, Rock960, Hikey960, enterprise edition, product, single board computer, linaro, linux, open source, openhours, robert wolff, podcast, technology, tech, computer, hardware, software, stem, michael welling, mezzanine, gps, initiative, community, groupgets, qwerty embedded, crowd funding, crowdfunding, ron justin, dragonboard, qualcomm, snapdragon, huawei, actions semi, soc, system on chip, GetSparked
---

##### Contributors

- [Michael Welling](https://www.linkedin.com/in/mwelling/)
- [Ron Justin](https://www.linkedin.com/in/ronjustin/)
- [Robert Wolff](https://www.linkedin.com/in/sdrobertw/)
- [96Boards Mezzanine Initiative](https://github.com/96boards/mezzanine-community)

[Fund this Mezzanine through GroupGets!](https://groupgets.com/campaigns/426-96boards-gps-mezzanine)

# Introduction - Robert Wolff

Welcome to your new favorite 10 minute read! A joint blog between [QWERTY Embedded Design](http://www.qwertyembedded.com/), [GroupGets](https://groupgets.com/) and [96Boards](https://www.96boards.org/)! How could this get any better :-) ?!

To be honest, it’s about to… Because in some ways, you are witnessing a bit of history. This week marks a turning point in the 96Boards ecosystem. As many of you may be aware, the 96Boards Community Mezzanine initiative was launched back in mid 2017 and since then, it has gained substantial traction with our community and partners! 

The repository, which is maintained by Michael Welling (esteemed open hardware evangelist and engineer) and hosted by 96Boards aims to be the one-stop-shop for 96Boards based open hardware design and development (read more about the initiative below). In short, those who participate in this initiative propose ideas, vote on said proposals, help in the design and then share it with the world through our repository! The questions you might be asking: “What’s next? How does this hardware come to life!?” Ahhhh, great questions! This is where GroupGets comes in (once again, read more about GroupGets below). Let me summarize; GroupGets is a crowdfunding entity that petitions crowdfunding for working prototypes! Unlike many of the other crowdfunding sites, the projects you choose to fund on GroupGets actually exist! This allows the 96Boards Mezzanine initiative to directly roll out existing designs at a cheaper cost (lower prices for you!) because of the GroupGets model. Of course, all designs that end up on GroupGets are fully tested by our contributors first. 

So back to YOU witnessing history, here it is… As the title of this blog reads: “96Boards GPS Mezzanine, The first born”. Yes, you can lay claim to the first ever community designed and tested 96Boards mezzanine through GroupGets. I would say blood, sweat and tears went into this amazing board, but that just wouldn’t be true. That is not the way our initiative was designed. Open Source collaboration and strong partners/contributors make everyone’s life easier. You are witnessing the “Win, win, win...win” of Open Source first hand. Continue reading for a glimpse of the potential in open hardware collaboration. And stay tuned for future blogs that will expand on this topic.


#### Links and resources

- [GroupGets](https://groupgets.com/)
- [QWERTY Embedded Design](http://www.qwertyembedded.com/)
- [96Boards](https://www.96boards.org/)
- [Mezzanine Community Repository](https://github.com/96boards/mezzanine-community)
- [GPS Mezzanine on GroupGets](https://groupgets.com/campaigns/426-96boards-gps-mezzanine)

## GroupGets - Ron Justin

GroupGets was founded out of frustration with not being able to launch crowdfunding campaigns for existing parts and products. Back in 2013 it was common to back crowdfunding campaigns for vaporware but there wasn’t a platform to go after stuff on the shelf. I wanted to launch a group buy for a full wafer’s worth of ASIC’s but there was no platform to securely facilitate it at that time. The manufacturer would only sell by the wafer which costed over $100k which was way out of my league.

The core intent of GroupGets was therefore to launch group buys for parts with crazy high minimum order quantities. We’re fine if people use the platform to save a few bucks on a common part, but the spirit of the platform is to give anyone access to anything via group buys.

Over time the mission organically grew to letting companies and individuals initiate sales of their existing products in promotional bundles, betas, limited editions, and inventory liquidations to group buyers. Then we started seeing people using the platform to fund production runs for existing designs which I want to stress here that we are VERY ok with as long as we get a working demo. [AudioMoth](https://groupgets.com/manufacturers/open-acoustic-devices/products/audiomoth) is a great example of that. They’ve funded about 2000 on GroupGets as of today.

Michael Welling first brought [PocketBone](https://groupgets.com/manufacturers/qwerty-embedded-design/products/pocketbone) to GroupGets. This was the precursor to the PocketBeagle which is now everywhere. Then he followed that up with the [LoFive](https://groupgets.com/manufacturers/qwerty-embedded-design/products/lofive-risc-v) featuring the SiFive FE310 MCU.

Finally, here we are with the 96Boards GPS Mezzanine. 96Boards was not on my radar at all until Michael told me about it and I was blown away by the sophistication of the boards and the diversity and technical depth of the community. I’m hoping to get more 96Boards on our site and our team more involved with the community. Now with the introduction of [GetSparked](https://groupgets.com/getsparked) with SparkFun, there’s a direct pipeline to larger distribution post-GroupGets for the 96Boards developer community to take advantage of.

## Mezzanine-Community Initiative - Robert Wolff

This Initiative brings industry representatives and community members from around the world, together with a common goal of uniting hardware efforts for the 96Boards ecosystem. Hosted by 96Boards and maintained by Michael Welling of QWERTY Embedded, it aims to reduce the barrier to entry for those interested in hardware design. An active, public repository provides tested templates, volunteered council, and motivational incentives to work on the ideas petitioned and voted for by those who participate regularly in the initiative.
For more information on this the Mezzanine-Community Initiative, please visit: https://github.com/96boards/mezzanine-community

## The GPS Mezzanine - Michael Welling

The GPS mezzanine was one of a handful of designs which were voted into the initiative early on. Robert found many people were having issues using the on-board GPS built into the [Dragonboard 410c](https://www.96boards.org/product/dragonboard410c/). The proprietary interface and sensitivity issue left many people wanting. Furthermore, this GPS feature was limited to a small subset of the 96board CE suite of boards. The mezzanine initiative tries to focus on mezzanines that can be used with any of the 96boards CE (Consumer Edition) boards.

After voting, the GPS mezzanine was added to the queue, and it would become the second KiCAD design to be created out of the initiative. To keep the design simple, the Adafruit [Ultimate GPS module](https://www.adafruit.com/product/790) was selected for it’s core. This module provides an impressive feature set built into a small yet easy to use package. It is driven by the MTK3339 chipset and provides both a built-in antenna for basic outdoors use, and external powered antenna which can work indoors. Another nice feature, is the built-in logging capability which allows the unit to record up to 16 hours of autonomous tracking at 15 second intervals.

**Here are the basic specifications as reported on the Adafruit product page:**

- -165 dBm sensitivity, 10 Hz updates, 66 channels
- Ultra low power usage: 20mA current draw while tracking
- 3.3V operation,
- RTC battery-compatible
- Built-in datalogging
- PPS output on fix
- We have received reports that it works up to ~32Km altitude (the GPS theoretically does not have a limit until 40Km)
- Internal patch antenna + connection for optional external active antenna
- Fix status output
- Ultra small size: only 16mm x 16mm x 5mm and 4 grams

The first version of the GPS mezzanine was prototyped using PCBs, generously donated from [OSH park](https://oshpark.com/). Only the bare necessities were included in the design. This meant bringing the UART lines and a few GPIOs up from the 96boards low-speed connector through a level translator to the GPS unit. The UART is used to transmit the NMEA message back to the main processor and send commands the GPS. The GPIOs were used to signal the PPS and FIX signals back to the core module. The signalling on the 96board CE expansion headers is 1.8V and the GPS unit is powered by 3.3V. Unfortunately 3.3V is not provided by any of the expansion headers on the CE specification so a simple LDO regulator was added to the design. Add a few passives, a u.FL connector, and a coin battery holder and it was ready for proto. For a pinch of extra utility, the debugging UART was broken out to a 4 pin headers. 

#### R0 Schematic

{% include image.html name="collab-firstborn-1.png" alt="R0 Schematic"%}
{% include image.html name="collab-firstborn-2.png" alt="R0 Prototype"%}

Once the bare PCBs and parts arrived, the first 3 units were hand assembled and tested. The units were all functional with only a few component footprint tweaks needed for the revision. The software setup was a breeze following along with a Raspi tutorial on Adafruit’s site. [https://learn.adafruit.com/adafruit-ultimate-gps-on-the-raspberry-pi/setting-everything-up](https://learn.adafruit.com/adafruit-ultimate-gps-on-the-raspberry-pi/setting-everything-up)

{% include image.html name="collab-firstborn-3.png" alt="Mezzanine on 96Boards"%}
{% include image.html name="collab-firstborn-4.png" alt="Multiple mezzanine on show"%}

After showing off a bit on social media, two of the boards were shipped of to Linaro to find them good homes.

#### Scope capture of the PPS signal

{% include image.html name="collab-firstborn-5.png" alt="Scope capture of the PPS signal"%}

#### R0 PCB shown off at Linaro Connect

{% include image.html name="collab-firstborn-6.png" alt="R0 PCB shown off at Linaro Connect"%}

After introducing 96boards and the mezzanine initiative to Groupgets they were all in. We decided to foster growth in the initiative by providing a path to production for contributions to the repository. Seeing as we had a working prototype for the GPS mezzanine in hand it seemed the logical choice for the first campaign.

Though the design was pretty solid with R0, we decided to go back and add a few simple features for the campaign launch. First we added the USB to serial converter onto the board for ease of debugging. Luckily we had multiple reference designs for this including the UART mezzanine and Robomezzi.

For even more flexibility, we also threw in a few breakout headers for some signals from the low-speed expansion header and added a small prototyping area.

#### R1 3D rendering

{% include image.html name="collab-firstborn-7.png" alt="R1 3D rendering"%}

#### R1 Schematic

{% include image.html name="collab-firstborn-8.png" alt="R1 Schematic"%}

This being the first campaign forwarded from the community mezzanine initiative, we decided to go with 25 units to test the waters. If the campaign goes well we hope to bump up the number of units to reduce the unit cost.

There are many more designs and ideas coming to the initiative regularly and we hope to spur even more contributions to the Github repository with the incentive of launch on Groupgets.
