---
author: sdrobertw
comments: true
date: 2017-04-02 18:23:03+00:00
layout: post
link: http://www.96boards.org/blog/project-big-button-barry-byford/
slug: project-big-button-barry-byford
featured_image: Screenshot-328.png
title: '"Project BIG Button" with Barry Byford'
wordpress_id: 20139
categories:
- blog
tags:
- 2016 review
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- big button
- big button project
- BLE
- Bluetooth
- Bluetooth low energy
- bubblegum-96
- computer vision
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- face detection
- face recognition
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- kernel virtual machine
- kvm
- Linux
- MediaTek X20
- new year
- Open Embedded
- OpenCV
- Reference Platform
- rpb
- servo
- SimpleCV
---

# **Introduction**


- **With help from g_uest Author, Barry Byford_**

I am sure you are all wondering… What happened in this week’s OpenHours?! Especially for those who missed the live call, this blog will hopefully outline the entire episode and provide all the promised resources mentioned during the episode. For anyone interested in recreating our featured guest’s project, you will surely find everything you need here.

That being said, this week we spoke with [Barry Byford](https://twitter.com/uk_baz)! An amazing 96Boards (more specifically DragonBoard 410c) enthusiast who came to us all the way from England. After announcements (see below for announcements) and taking a look back at last week’s episode, we went right into introductions.

As mentioned, Barry came to us via OpenHours conference call from England, where he lives. In the beginning of the episode, Barry spoke to us about himself, explaining how he ended up getting involved with 96Boards and the DragonBoard 410c. For a long time now, it has been a goal to get Bluetooth Low Energy usable on Linux Single Board Computers from within the Python programming language to interact with peripheral devices. Barry explained about some of the false starts he has had with this goal although with this project good progress seems to have been made to his goal.


# **Announcements**






  * OpenHours will begin to gamify! [Attending our weekly OpenHours](https://www.96boards.org/openhours/) call, participating in [96Boards forum](https://discuss.96boards.org) activity and over all contributing to the 96Boards community in any way possible will earn you community points(as long as we can track it). We will do our best to log community efforts on our side to ultimately generate a leaderboard for the website. Tracking and registering efforts might change as the team becomes more in tuned with collection process. Persons with the most community efforts will have chances to win 96Boards prizes such as boards, mezzanine, swag(96Boards, Linaro and member) and possibly a badge to the next Linaro Connect which will be held in San Francisco!


  * We have officially launched the [OpenHours forum topics page](https://discuss.96boards.org/c/general/OpenHours)! You are welcome to post/suggest new OpenHours related topics, open new questions to be addressed during the show, and/or tackle current issues that are facing the community.




# **“Project BIG Button” on OpenHours**


Barry shared with us how he does STEM outreach to get the next generation interested in digital making. Being able to communication with multiple Bluetooth Low Energy (BLE) devices has lots of very practical application although the main goal Barry had for this build was to use as a way to talk about BLE to students.


{% include media.html media_url="https://www.youtube.com/embed/F6xZPTO9eO0" %}

## **Pre-requisites**

  * **Dragonboard 410c**


    * The default version of [BlueZ](http://www.bluez.org/) on Debian Jessie is 5.23. This project requires the version of BlueZ D-Bus API that is in BlueZ 5.43 release so you will need to upgrade. There are more detailed instructions on how to upgrade available at [http://pythonhosted.org/bluezero/install_bluez.html](http://pythonhosted.org/bluezero/install_bluez.html)


    * Debian Stretch should come with BlueZ 5.43 version as standard.


    * Python3 is a requirement for this project along with the [guizero](https://pypi.python.org/pypi/guizero/) and [pydbus](https://pypi.python.org/pypi/pydbus/) libraries. Both can be installed with ‘sudo pip3 install <library name>’





  * **Micro:bit**


    * For this project we used a pre-built image that exposes all the interesting [micro:bit Bluetooth services](https://lancaster-university.github.io/microbit-docs/resources/bluetooth/bluetooth_profile.html). The pre-built image is available from the [Bitty Software](http://www.bittysoftware.com/downloads.html#microbit_blue) website. We used the version that does not require pairing because we valued simplicity over security for this project.





  * **Please see "Instructions" section of blog to find full Bill of Materials for project.**




## **Instructions**


Using a 96Boards DragonBoard 410c, several micro:bit microcontrollers, a driver board, some BIG buttons and various miscellaneous wires and tools, this set of instructions will walk you through setting up your very own BIG Button Game! This particular application focuses on the use of both onboard Bluetooth modules (DragonBoard and micro:bit) as well as Python for the base programming language.

Instructions to recreate **“Project BIG Button”** can be found **[here](https://ukbaz.github.io/howto/proj_big_btn.html)**


## **Conclusion**


By the end of this blog and Barry’s instruction set, you should be able to use BLE to seamlessly communicate between a 96Boards DragonBoard 410c and the micro:bit microcontroller. Thankfully, Barry was able to provide us with all of his code and experience. This baseline use-case BLE game will hopefully sets the foundation for future applications of a similar nature. We look forward to seeing what you all come up with! Feel free to bring your questions to the [OpenHours forums](https://discuss.96boards.org/c/general/OpenHours). If anyone creates a derivative version of the BIG Button Game or another application around these efforts, we would love to feature it on the 96Boards website.


# **Resources**


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](http://www.96boards.org/newsletter/)” and our “[Weekly Digest](http://www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](http://www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!

Other Blogs from Robert Wolff




  * [96Boards for 96Brews - Automated Home Brewing](http://www.96boards.org/blog/96boards-96brews-automated-home-brewing/) - Guest Author, Ricardo Salveti


  * [ST, System Level ESD Protection and OpenHours](http://www.96boards.org/blog/st-system-level-esd-protection/)


  * [Welcome to 2017, Year of the 96Boards!](http://www.96boards.org/blog/welcome-2017-year-96boards/)


  * [DIY Drone featuring Gumstix! 96Boards take flight on OpenHours](http://www.96boards.org/blog/diy-drone-featuring-gumstix-96boards-take-flight-openhours/) - Guest Author, Keith Lee


  * [DragonBoard 410c Workshop - 96Boards visits Qualcomm](http://www.96boards.org/blog/dragonboard-410c-workshop-96boards-visits-qualcomm/)


  * [96Boards Out of box experience guide - part 5](http://www.96boards.org/blog/96boards-box-experience-guide-5/)


  * [96Boards Out of box experience guide - part 4](http://www.96boards.org/blog/96boards-box-experience-guide-4/)


  * [96Boards Out of box experience guide - part 3](http://www.96boards.org/blog/96boards-box-experience-guide-3/)


  * [96Boards Out of box experience guide - part 2](http://www.96boards.org/blog/96boards-box-experience-guide-2/)


  * [96Boards Out of box experience guide - part 1](http://www.96boards.org/blog/96boards-box-experience-guide-1/)


  * [More...](http://www.96boards.org/author/sdrobertw/)
