---
author: Sahaj Sarup
comments: true
featured_blog: true
date: 2017-06-28 12:00:00+00:00
layout: post
link: http://www.96boards.org/blog/modding-arrows-audio-mezzanine-96boards/
slug: modding-arrows-audio-mezzanine-96boards
title: Modding Arrow’s Audio Mezzanine for 96Boards
wordpress_id: 20519
featured_image: modding-arrow-audio-mezz-img-1.jpg
categories:
- blog
tags:
- 64-Bit
- 96Boards
- Aarch64
- Android
- ARM Arm32
- Arm64
- ARMv8
- B2260
- Breakout
- Bubblegum
- Bubblegum-96
- CE
- Consumer
- Edition
- Consumer
- IoT
- DB410c
- Debugging
- Docker
- DragonBoard
- Dragonboard410c
- DragonBoard
- 410c
- F-Cue
- Gdb
- General
- Purpose
- Input
- Output
- GPIO
- Gui
- HiKey
- I2C
- I
- Squared
- C
- Library
- Linaro
- Linux
- Low
- Speed
- Expansion
- Header
- Maker
- MediaTek
- X20
- Mezzanine
- Open
- Embedded
- OpenHours
- Open
- Hours
- Open
- Source
- Qualcomm
- Reference
- Platform
- Rpb
- Sensors
- UART
---
# **Introduction**

**On the official documentation by [Seeed Studio](https://www.seeedstudio.com/), The [Audio Mezz](https://www.arrow.com/en/products/audiomezz/seeed-technology-limited) is described as,**

“This Audio Mezzanine Board is a Grove interfaced expansion board intended for 96boards. You can connect 96Boards to various modules easily with this expansion board. There are six grove ports which can be used to connect rich Grove functional modules, which will make your application more complicated and attracting. In addition, this expansion board gets one 3.5 mm audio port and two independent MICs which can be applied into multimedia processing. Since 96Boards I/O voltage is set at 1.8 V, so it cannot be connected directly to embedded world. This expansion board has used voltage converting circuit so that you can choose 3.3V/5V as the output voltage. Other features are also embedded on this expansion board such as USB to Serial circuit and reset button, and so on, all those make 96Boards more conveniently to build applications.”

As good as it sounds it is not truly compatible with all of the [96Boards](http://www.96boards.org/products/ce/). In fact, at the time of writing this blog, it can only be used with the [Dragonboard 410c](http://www.96boards.org/product/dragonboard410c/).

Although this board’s main function is to provide an audio interface for the DB410c, one of the most useful features of this board is the conversion of all the GPIO pins on the Low Speed header from 1.8v to 3.3v and 5v.

This eliminates the need of extra components like Logic Level Shifters to make various sensors and controllers work as most of them are designed to work with Arduino and Raspberry Pi that run on 5v and 3.3v.

![Modding Arrow Audio Mezz Image 1]({% asset_path "modding-arrows-img-1.png" %}){:class="img-responsive lazyload"}

# **Understanding the Modification**

![Modding Arrow Audio Mezz Image 2]({% asset_path "modding-arrows-img-2.png" %}){:class="img-responsive lazyload"}
![Modding Arrow Audio Mezz Image 3]({% asset_path "modding-arrows-img-3.png" %}){:class="img-responsive lazyload"}

On the Dragonboard 410c, just between the Low Speed Header and the barrel jack for power input, lie two rows of make header pins for i2s (Integrated Inter-IC Sound Bus) that the Audio Mezz connects to using matching female headers.

![Modding Arrow Audio Mezz Image 4]({% asset_path "modding-arrows-img-4.png" %}){:class="img-responsive lazyload"}
![Modding Arrow Audio Mezz Image 5]({% asset_path "modding-arrows-img-5.png" %}){:class="img-responsive lazyload"}

Now this wouldn’t be much of an issue if on the other boards that are was left blank, but unfortunately on the Hikey board there exists a huge input capacitor and on the Hikey 960 there exists a choke or inductor for the inbuilt power supply.

This prevents us from using the Audio Mezz on other boards, and the only solution being is to remove the i2s connector on the Audio Mezz.

# **The Actual Mod**

Before we get started, I would recommend that the person performing this task to have experience in desoldering & soldering in general and knows how to use a Solder Wick & Soldering Flux Paste.

{% include media.html media_url="https://www.youtube.com/embed/SGHHLpLSwko" %}

1.  Carefully pry out the plastic part of the i2c header on the audio mezz, using a thin flat head screwdriver between the PCB and header to provide leverage and push out the plastic.  
    This should leave you with the bare connector, that look like tiny metal claws, sticking out of the PCB.  
    ![Modding Arrow Audio Mezz Image 6]({% asset_path "modding-arrows-img-6.png" %}){:class="img-responsive lazyload"}
2.  Now we can apply ample amount of Flux paste onto the solder pads.
3.  Following that, sandwich the Solder Wick between the pads on the pcb and you soldering iron and hold the iron in place for a few seconds. This should suck all the excess solder onto the wick and the metal pieces will stick to it as well
4.  Quickly remove the wick before it gets too cold and sticks to the PCB, the metal pieces should come off with it as well
5.  Repeat until all of the header pins are removed. And this should leave you with bare solder pads on the PCB.
6.  I would recommend cleaning the PCB with Isopropyl Alcohol. But remember that inhaling or intake of Isopropyl Alcohol can cause IPA poisoning so use caution while working with it.

# **Conclusion**

Modding the Audio Mezz in this manner defy its primary purpose of providing an audio interface for the Dragonboard 410c, but you gain a board that can level shift all of the GPIOs to either 3.3v or 5v, and that’s not bad for just $5.  
But, do remember that these board are in a limited supply from arrow, around 750 pcs. In stock at the time of writing this blog, and only a few were and ever will be made.

![Modding Arrow Audio Mezz Image 7]({% asset_path "modding-arrows-img-7.jpg" %}){:class="img-responsive lazyload"}

**[https://www.arrow.com/en/products/audiomezz/seeed-technology-limited](https://www.arrow.com/en/products/audiomezz/seeed-technology-limited)**

{% include media.html media_url="https://www.youtube.com/embed/0RmwPOo1-Gw" %}

* * *

# Resources

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

**Sahaj Sarup:** [Twitter](https://twitter.com/sahajsarup) &#124; [YouTube](https://www.youtube.com/user/sahajsarup)

**96Boards:** [Twitter](https://twitter.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124; [Facebook](https://www.facebook.com/96Boards/) &#124; [YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](http://www.96boards.org/newsletter/)” and our “[Weekly Digest](http://www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience – [OpenHours](http://www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea 😀

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
