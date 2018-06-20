---
author: Robert Wolff
comments: true
date: 2017-03-28 05:49:10+00:00
layout: post
link: https://www.96boards.org/blog/96boards-96brews-automated-home-brewing/
slug: 96boards-96brews-automated-home-brewing
image:
    featured: true
    path: /assets/images/blog/Screenshot-327.png
    name: Screenshot-327.png
title: 96Boards for 96Brews - Automated Home Brewing
wordpress_id: 20129
categories:
- blog
tags:
- 64-bit
- 96Boards
- 96brew
- aarch64
- Android
- ARM
- ARMv8
- automated brewing
- B2260
- brew
- Brewpi
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- DIY
- DragonBoard
- DragonBoard 410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- Linux
- MediaTek X20
- Open Embedded
- OpenHours
- Pi
- Raspberry Pi
- Reference Platform
- rpb
- smart brew
- smart brewing
---

# **Introduction**


OpenHours (episode #45) was on this week, and as usual it was a lot of fun!

With so much happening recently, the OpenHours team thought it was about time for a nice relaxing and fun episode… As luck would have it, we were approached by [Ricardo Salveti](https://twitter.com/rsalveti) who told us about his recently converted home brewing operation. By taking a basic home brew system and adding a consumer edition 96Boards, some sensors and the appropriate software, you can essentially automate a variety of functions that makes brewing the perfect beer much easier and streamlined. We quickly invited him to show us this process and his work on OpenHours. How else could we make this episode special? How about inviting people to drink with us... Not just coffee, but their favorite local beer brews, this turned out to be a lot of fun. Even if you did miss this episode, continue reading and you will find that we have set you up for the complete experience. Check out episode #45’s YouTube recording, the slide show Ricardo Salveti used for his presentation and a variety of links that should help you recreate Ricardo’s automated brewing system.



# **Video and Slides**

{% include media.html media_url="https://www.youtube.com/embed/dFh5p-LHfNI" %}

---

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/7py2nFHI9pgOga" %}




**OpenHours episode #45 - 96Brews, Automate your Home brewing system with 96Boards - Featuring Ricardo Salveti**


# **Instructions**


by Ricardo Salveti


### **Brew System setup recommendations**


Brewing in it self is an art that takes much practice, like cooking a nice meal. When brewing, getting your measurements right, maintaining the right temperatures throughout your brew, and giving each step of the process the appropriate time needed to complete is essential. All of the above will contribute to the flavors, carbonation, viscosity, clarity, and ABV of your beer. These instructions are not intended to teach someone how to brew, but rather automate various aspects of the brewing process one might already be familiar with.

Please pair these instructions with [episode #45 of 96Boards OpenHours](https://youtu.be/dFh5p-LHfNI) (found above) along with the [slideshow provide on slideshare](http://www.slideshare.net/96Boards/homebrewing-and-automation-with-96-boards-73594263) (also found above)

As described in the slides there are several basic steps and ingredients that are required to get your first brew going:


  * **Infographic from OCWEEKLY as a guide**


    * [http://media.ocweekly.com/6160793.0.pdf](http://media.ocweekly.com/6160793.0.pdf)


  * **Four basic ingredients**


    * Malt


    * Hops


    * Yeast


    * Water





  * **Four basic steps**


    * Malting


    * Mashing


    * Boiling


    * Fermenting





Once you are familiar with the brew process, and have successfully gone through the efforts of making your first batch, you should be ready to start thinking about automating the process.

Here are some websites that may help you decide on the type of system you plan on building:




  * **Traditional brew stand with 3 brew pots**


    * [http://www.homebrewtalk.com/showpost.php?p=4006915&postcount=1826](http://www.homebrewtalk.com/showpost.php?p=4006915&postcount=1826)





  * **Brew In a Bag (BIAB)**


    * [http://www.homebrewtalk.com/showthread.php?t=310459](http://www.homebrewtalk.com/showthread.php?t=310459)





  * **RIMS and HERMS**


    * [https://www.westcoastbrewer.com/BrewersBlog/home-brewing-equipment/brew-sculptures-and-homebrewing-stands/home-brewing-stands-and-home-brewery-rig-images/](https://www.westcoastbrewer.com/BrewersBlog/home-brewing-equipment/brew-sculptures-and-homebrewing-stands/home-brewing-stands-and-home-brewery-rig-images/)


    * [https://byo.com/hops/item/1325-rims-and-herms-brewing-advanced-homebrewing](https://byo.com/hops/item/1325-rims-and-herms-brewing-advanced-homebrewing)







### **Automating your brew system**


**What can you actually automate?**




  * **Mashing**


    * Control of the water temperature, temperature ramps, sparging and mash out


    * Depends heavily on the brewing system used, RIMS / HERMS as good targets for automation





  * **Boiling and Cooling**


    * Automate mash heating element (direct or indirect)


    * Cooling with plate chillers and pumps


    * Also depends heavily on the brewing system used





  * **Fermentation**


    * Core part of the brewing process (yeast responsible for transforming wort into beer)


    * Control of the wort temperature during the entire fermentation process


    * Easy to implement, already covered by DIY projects such as [BrewPi](https://www.brewpi.com/)


    * Requires Arduino for sensor control and Linux box for Web interface and service


    * How about using 96Boards CE + Arduino or Sensor Mezzanine?







### **BrewPi on a 96Boards**


Ricardo Salveti was nice enough to provide us with instructions on how to get your automated brew system setup. While this blog may have much other information around brewing, you are free to skip right to the [**instructions repository here**](https://github.com/rsalveti/brew96-docker).




  * Using a normal fridge or freezer as a fermentation chamber


    * Cheap and easy to hack


    * [BrewPi Fridge Hacking Guide](https://www.brewpi.com/fridge-hacking-guide/)





  * 96Boards CE board (e.g. DB410c) running the WebUI and BrewPi Service


  * BrewPi Arduino firmware flashed into the Sensors Mezzanine


  * BrewPi deployed as a Docker container


    * Reducing OS dependency, easy deployment


    * Not specific to Raspberry PI


    * [https://github.com/rsalveti/brew96-docker](https://github.com/rsalveti/brew96-docker)







### **Pre-built Docker containers:**






  * [https://hub.docker.com/r/rsalveti/brewpi-docker-armhf/](https://hub.docker.com/r/rsalveti/brewpi-docker-armhf/)


  * [https://hub.docker.com/r/rsalveti/brewpi-docker-arm64/](https://hub.docker.com/r/rsalveti/brewpi-docker-arm64/)




### **Other Resources:**






  * **HomebrewTalk**


    * [http://www.homebrewtalk.com/](http://www.homebrewtalk.com/)


    * [http://www.homebrewtalk.com/showthread.php?t=466106](http://www.homebrewtalk.com/showthread.php?t=466106) (BrewPi specific thread)





  * **How To Brew (John Palmer)**


    * [http://howtobrew.com/](http://howtobrew.com/)





  * **BrewPi Community Forums**


    * [https://community.brewpi.com/](https://community.brewpi.com/)





  * **Brewers Friend**


    * [http://www.brewersfriend.com/](http://www.brewersfriend.com/)







# Conclusion


By the time you have gone through these instructions, your 96Boards should be up and running with everything Ricardo showed us in OpenHours episode #48. Now there were still a few things he added to his system that are not taught in this blog, like setting up the camera for monitoring fermentation etc… It is also important to note that we plan on having Ricardo back sometime in the near future as he implements more features to his system. As he explained in his slides, we do hope to see much more added throughout the next weeks and months, so stay tuned!




  * Wireless gravity reading inside the fermentation chamber


    * [http://hackaday.com/2017/03/01/iot-device-pulls-its-weight-in-home-brewing/](http://hackaday.com/2017/03/01/iot-device-pulls-its-weight-in-home-brewing/)





  * Wireless temperature sensor reading


    * Carbon/Nitrogen reading temperature sensor data and uploading via MQTT





  * Zephyr-based device instead of Arduino


  * Extended BrewPi including automation of the mashing and boiling process




# Blog Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
