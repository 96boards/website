---
title: Power Accessories
permalink: /product/power/
layout: accessory-display-page
description: Power Accessories for 96Boards
accessories:
  - accessory_permalink: /product/power/
    accessory_category: power
    accessory_title: Plug-In Adapter Single-OUT 12V 2A 24W
    accessory_description: |-
        Arrow are providing this power supply worldwide and recommend it for all 96Boards.
        The adapter has a US plug, but supports 90-264V AC input and 12V 2A output.
    accessory_order_link:
        - https://www.arrow.com/en/products/wm24p6-12-a-ql/autec-power-systems
    accessory_search_term: Plug-In Adapter Single-OUT 12V 2A 24W
    accessory_images:
        - accessories-arrow-power.jpg
  - accessory_permalink: /product/power/
    accessory_category: power
    accessory_title: Universal power supply
    accessory_description: |-
        This is a 12V 2A power supply with universal connectivity on both ends.
        A little more expensive than a standard 1.7mm or 2.1mm supply with a
        fixed power plug , we have used these on the HiKey and DragonBoard 410c
        boards without any issues or adapters required. One thing to ensure is
        that the board end is connected with center pin positive.
    accessory_order_link:
        - http://cpc.farnell.com/ideal-power/25hk-ab-120a250-cp6/psu-desktop-plug-in-12v-2-5a-vi/dp/PW04128?rpsku=rel1:PW03336&isexcsku=false
    accessory_search_term: 25HK-AB-120A250-CP
    accessory_more_info: http://www.idealpower.co.uk/external-power-supply/interchangeable-switched-mode/25HK-AB-120A250-CP
    accessory_images:
        - accessories-2.png
  - accessory_permalink: /product/power/
    accessory_category: power
    accessory_title: 5.5/2.1mm to 4.75/1.7mm cable DC plug converter
    accessory_description: |-
        This cable adapter seems to be easier to find that the direct converter,
        but offers a similar low cost solution to convert more readily available
        12V 2A 5.5/2.1mm power supplies down to the 96Boards 4.75/1.7mm power jack.

    accessory_order_link:
        - http://www.amazon.com/Super-Power-Supply%C2%AE-5-5x2-1mm-4-8x1-7mm/dp/B00EA4Q60K/ref=sr_1_4?ie=UTF8&qid=1436114814&sr=8-4
    accessory_search_term: 2.1mm to 1.7mm power adapter
    accessory_images:
        - accessories-power-3.png
  - accessory_permalink: /product/power/
    accessory_category: power
    accessory_title: 2.1mm to 1.7mm DC plug adapter
    accessory_description: |-
        Low cost solution to convert more readily available 12V 2A 2.1mm power
        supplies down to the 96Boards 1.7mm power jack.
    accessory_order_link:
        - http://www.amazon.co.uk/5-5mm-1-7mm-2-1mm-Female-Adapter/dp/B00MJSNNDC/ref=sr_1_19?ie=UTF8&qid=1422616362&sr=8-19
    accessory_search_term: 2.1mm to 1.7mm power adapter
    accessory_images:
        - accessories-power-4.png
---
The 96Boards CE boards require an 8-18V 2A power supply.

We recommend a 12V 2A adapter with a DC plug that has a 4.75 mm outer diameter with 1.7mm center pin (EIAJ-3 Compliant).

Easiest way to prepare AC adapter for 96Boards is to have both bellow.

1. AC adapter which has 12V 2A DC output with DC plug has 5,5 diameter and 2.1 mm center pin. (Center pin positive)
2. DC plug converter from 5,5 diameter with 2.1 mm center pin to 4.75mm diameter with 1.7mm center pin.

Many lower cost boards use the ubiquitous microUSB cable to deliver 5V power. However, this limits the power capability to only 500mA at 5V by original official USB specification, which is less than 3W ([https://en.wikipedia.org/wiki/USB#Power](https://en.wikipedia.org/wiki/USB#Power)). As more powerful SoCs become available, peak power requirements for the SoC alone can easily exceed 5W.

We therefore require an external power supply. In order to minimize the board height profile while maximizing the power available we specified to use an EIAJ-3 compliant DC plug available up to 2A, which is 4.75 mm outer diameter with 1.7mm center pin (4.75/1.7), for the power supply ([https://en.wikipedia.org/wiki/EIAJ_connector](https://en.wikipedia.org/wiki/EIAJ_connector)). For an embedded product, power can alternatively be provided over the low speed expansion bus. (Note: this paragraph has been extracted from the [96Boards Specification](/specifications/).)

Other types of DC plug commonly used have a 5.5 mm outer diameter with 2.1mm center pin (5.5/2.1).

This page lists out powers supplies with both 4.75/1.7 and 5.5/2.1 connectors plus some 5.5/2.1 to 4.75/1.7 converters that are required if you have a 5.5/2.1 power supply.

The below is more detailed information about selecting the correct DC plug and jack for 96Boards.

There are three commonly used DC plug/jack in most consumer products.

1.  Outer diameter 5.5mm and a 2.1mm center barrel (5.5/2.1)
2.  Outer diameter 5.5mm and a 2.5mm center barrel (5.5/2.5)
3.  Outer diameter 4.75mm and a 1.7mm center barrel (4.75/1.7 EIAJ-3 compliant)

And also there are two type of each, (a) center pin positive and (b) center pin negative. The center negative is commonly considered not a good practice but some products uses outer shield for 5V or 12V and the center pin for ground, while most of the AC adapters are opposite, the outer shield is ground and the center pin is 5V or 12V. If you plug the AC adapter with center negative which has outer positive to the 96boards, it will burn out the 96boards products.

There is an EIAJ-2 plug that has an outer diameter of 4.75mm and a 1.7mm center barrel (4.0/1.7). The 4.0/1.7 EIAJ-2 plug is able to insert into 4.75/1.7 EIAJ-3, but it will cause the outer shield to have weak connection and make the board unstable.

Also, the 5.5/2.5 DC plug is able to insert to 5.5/2.1 jack on 5.5/2.1 to 4.75/1.7 converters but it will have weak center pin connection and make the 96Boards unstable.

In the 96boards specification, it uses 4.75/1.7 EIAJ-3 and center pin positive.

We strongly advise to check your plug is correct as follows:

1.  Use DC plug has 4.75/1.7 EIAJ-3.
2.  Or use plug converter from 5.5/2.1 to 4.75/1.7 EIAJ-3 plug.
3.  Make sure the polarity is center pin positive.
