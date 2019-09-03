---
author: Robert Wolff
comments: true
date: 2017-04-20 08:50:40+00:00
layout: post
link: https://www.96boards.org/blog/openhours-community-minute-testing-96boards-audio-mezzanine-jean-marc-jobin/
slug: openhours-community-minute-testing-96boards-audio-mezzanine-jean-marc-jobin
image:
    featured: true
    path: /assets/images/blog/DB410cAudioMezz.jpg
    name: DB410cAudioMezz.jpg
title: OpenHours "Community Minute" - Testing the 96Boards Audio Mezzanine with Jean-Marc
  Jobin
wordpress_id: 20233
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- beagle bone black
- bubblegum-96
- cases
- Community Minute
- Consumer Edition
- Consumer IoT
- DB410c
- DIY
- dragonboard410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- IO
- Linux
- MediaTek X20
- Open Embedded
- OpenHours
- Raspberry Pi
- Reference Platform
- rpb
- OpenHoursRecap
---
# Introduction

**- With help from guest Author,[ Jean-Marc Jobin](https://twitter.com/jmjobin)**

The following notes summarize Jean-Marc's experience with the [DragonBoard 410c](/product/dragonboard410c/), running [Android OS](/documentation/consumer/dragonboard410c/downloads/android/), complimented with the [Audio Mezzanine](/product/audio-mezzanine/) available from Arrow Electronics. Please take time and pair this blog with [last week's OpenHours episode found on YouTube](https://youtu.be/Hixk8R_-ixQ).

{% include media.html media_url="https://www.youtube.com/embed/Hixk8R_-ixQ" %}

# Pre-requisites

  * [DragonBoard 410c](/product/dragonboard410c/)


  * [96Boards Compliant power supply](/product/power/)


  * [Audio Mezzanine Board](/product/audio-mezzanine/)


  * [16 pin (2 by 8) 2.0mm pitch connector](https://www.arrow.com/en/products/0877581616/molex)


  * Soldering iron and solder


  * USB Type-A Keyboard and mouse


  * [Android OS](/documentation/consumer/dragonboard410c/downloads/android/)


This mezzanine bring simplicity in connecting sensors to the DragonBoard 410c by adapting the signal levels and protecting the DB410c from shorting or experiencing connection errors from the outside world.

The Audio mezzanine bring overall a direct audio connection through a 3.5mm audio jack. When running Android it is very nice because there is no need to build any audio features to use it, it just works as it.


# Simple Mezzanine testing and setup






  * Make sure that you order the 16 pin header along with your Audio Mezzanine board. The odd are, your DragonBoard 410c has an empty analog expansion header (this is located next to the 40-pin low speed expansion header on the top of the board). The Audio Mezzanine will cost you $4.99 USD +tax while the additional header will cost you another ~$1.00 USD. This header will need to be soldered onto your DragonBoard 410c before proceeding. If you are new to soldering, I would suggest you take the time to search YouTube for some soldering tutorial videos. Then take some extra time to practice on something that is either broken, or can be used as scrap.


  * A schematic to the Audio Mezzanine board should be provided on the 96Boards website soon. When this becomes available, the blog will be updated to reflect this link.


  * With Android tested, audio runs like a charm.




# GPIO Testing


Both input and output GPIO were tested. While testing the GPIOs using Android was not the theme of this 10 minutes discussion it will most likely be discussed in a future episode of OpenHours. Even though we did not discuss, this information can be found in various locations, one of which is Coursera by Robert Wolff.

Following the week 2 session should get you the information and instructions you need to get up and running with simple GPIO enablement and commands with the DB410c running Android. The course is available to "Audit" for free by using the following links




  * [https://www.coursera.org/learn/internet-of-things-sensing-actuation/home/week/2](https://www.coursera.org/learn/internet-of-things-sensing-actuation/home/week/2)


  * [https://www.coursera.org/learn/internet-of-things-sensing-actuation/supplement/m34G4/module-2-procedure-document-supplemental-doc](https://www.coursera.org/learn/internet-of-things-sensing-actuation/supplement/m34G4/module-2-procedure-document-supplemental-doc)


Jean-Marc did not have a chance to test the microphone… sorry! He did however test the UART0 (which is the micro USB port on the mezzanine), as far as he could tell, only the OUT (TX) works and could not get the IN (RX) to work. He found some potential problems on the UART0 since the MIC is connected to this pin!!!???

Compared to the [Sensors Mezzanine](/product/sensors-mezzanine/), the Audio Mezzanine has more GPIO are available (all of them),


# For Android


The Audio Mezzanine caters to the use of the audio connection and GPIO handling. Jean-Marc speculated that doing more IoT functions using Android would be a big complicated. This includes modifying the Kernel and rebuilding a new image, which will, in this case, penalize you if any OS update comes up.

In Jean-Marc's personal opinion, the DragonBoard with Android should be used for more elegant tasks such as a gateway or central device that is able to open a connection to the internet, cloud or something else.

To Really use IoT with Android we should use “Android Things”. This can control I2C and other wired protocols. (read “wired” and not “weird” 😃). Android Things also has a Peripheral IO Manager which can be used easily.

Using the “sensor mezzanine” is probably another excellent alternative to connect sensors by connecting them thru the AVR Arduino and not the DragonBoard.


# Other themes to bring to OpenHours


Let's look into installing libupm and libmraa libraries to be used with Android OS. Is this possible? :D

![GPIO Pinout Android DB410c Image]({% asset_path "GPIOPinoutAndroidDB410c.png" %}){:class="img-responsive lazyload"}

Fig. 1 GPIO connection definition chart

Courtesy of Coursera: Internet of Things: Sensing and Actuation From Devices

![DB410c AudioMezz Image]({% asset_path "DB410cAudioMezz.jpg" %}){:class="img-responsive lazyload"}

Fig. 2 DragonBoard connected to the GPIO using a transistor as output driver.

![DB410c AudioMezz Image]({% asset_path "schematicAudioMezz.png" %}){:class="img-responsive lazyload"}

Fig. 3 Schematic of the transistor drivers used in the Sensors Mezzanine (same for Audio mezzanine)



Either connection works direct from DragonBoard 1.8V. or 3.3V or 5V. The possibility to drive 4 LEDs by using the HCT03 after the level shifter 3 or 5 VDC.

![Digitallogic Image]({% asset_path "Digitallogic.png" %}){:class="img-responsive lazyload"}

Connection example for one gate. For the 47HCT03 the input must be connected after the level shifter. The component wont switch properly at 1.8V.

![paperengineer Image]({% asset_path "paperengineer.png" %}){:class="img-responsive lazyload"}


# **Resources**


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
