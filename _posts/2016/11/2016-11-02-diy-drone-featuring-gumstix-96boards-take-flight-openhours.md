---
author: sdrobertw
comments: true
date: 2016-11-02 23:30:36+00:00
layout: post
link: https://www.96boards.org/blog/diy-drone-featuring-gumstix-96boards-take-flight-openhours/
slug: diy-drone-featuring-gumstix-96boards-take-flight-openhours
title: DIY Drone featuring Gumstix! 96Boards take flight on OpenHours
image:
    featured: true
    path: /assets/images/blog/drone_knoll.png
    name: drone_knoll.png
wordpress_id: 18309
categories:
- blog
tags:
- 96Boards
- Aerocore 2
- DIY
- DragonBoard 410c
- drone
- gumstix
- MAV
- OpenHours
---

# 96Boards take flight on OpenHours!


As you may have seen, [OpenHours](http://bit.ly/2bYHUMc) broke into Season 2 with an exciting miniseries on drone development for [96Boards](/)! In this two-part series we spoke with [Keith Lee (the GumstixGuru)](https://twitter.com/gstixguru) about [Gumstix](https://www.gumstix.com/), [Geppetto](https://www.gumstix.com/geppetto/), [DragonBoard 410c](/product/dragonboard410c/) and the [Gumstix AeroCore 2 Mezzanine board](/product/aerocore/), these were the main components used in his debut demo of the drone (Appropriately named the GadgetDrone). Because this demo was so awesome, Keith and the 96Boards team wanted to make sure everyone had access to instructions on how to recreate the drone he built and flew live on [OpenHours Episode 25](https://youtu.be/iNO08qbi-oc?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk) (Drone launch at ~45m).

As an added OpenHours bonus, Gumstix has generously offered to provide a free one hour consult with Gumstix Engineers for anyone who fills out a short survey.  You can get all the details here:  [https://www.96boards.org/geppetto-96boards-free-design-consult/](/geppetto-96boards-free-design-consult/)

This is your chance to create your very own design in Geppetto and Gumstix Engineers will help you get it to market!

Excellent! Well with all of this said, I am sure you are ready to get building! Please share your drone progress with us on Twitter, we would love to see more 96Boards take to the sky!


{% include media.html media_url="https://www.youtube.com/embed/iNO08qbi-oc?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk" %}

**Follow us on Twitter**: [96Boards](https://twitter.com/96boards) &#124;[Gumstix](https://twitter.com/gumstix) &#124;[Keith Lee](https://twitter.com/gstixguru) &#124;[Robert Wolff](https://twitter.com/sdrobertw)



* * *





# Introduction


**Instructions by Keith Lee from Gumstix**

These instructions will -- as briefly as possible -- help you set up a DragonBoard 410c with the Aerocore 2 mezzanine card to fly a drone with PX4 R/C and wireless, telemetry, and video feed capabilities.  The final steps of this demo -- software configuration, connections, and test-flight, were broadcast live during [96Boards Open Hours #25](https://youtu.be/iNO08qbi-oc?list=PL-NF6S9MM_W1QBjUc2B5Pg502bz7qslxk) and posted on the [96Boards YouTube channel](https://www.youtube.com/channel/UCjawhk_W1QnJs3pKIsKLJNg).



* * *





# Parts List


The parts used to construct this quad-copter drone are listed below, with storefront links to each of them.

![Diy Drone Image 1]({% asset_path "diy-drone-img-1.png" %}){:class="img-responsive lazyload"}




  * A quad-copter


    * [DJI Flame Wheel F450 ARF kit](https://www.amainhobbies.com/dji-flame-wheel-f450-arf-quadcopter-drone-kit-dji-fw450/p235232)





  * A 3S 11.1v LiPO battery


    * [Venom Flight Pack 20C (2100mAh)](https://www.amazon.ca/Venom-2100mAh-Battery-Universal-System/dp/B004UZD4Q8)





  * A 5+-channel DSMX receiver antenna and radio


    * [Spektrum AR6210 receiver](https://www.spektrumrc.com/Products/Default.aspx?ProdID=SPMAR6210) with remote receiver


    * [Spektrum DX5e radio](https://www.spektrumrc.com/Products/Default.aspx?ProdId=SPM5510)


    * Special note:  Once you bind the satellite receiver with the radio, you won’t be using the main receiver.





  * A Dragonboard 410C or 96Boards equivalent


    * [Here it is in the Arrow.com store](https://www.arrow.com/en/products/dragonboard410c/arrow-development-tools)





  * A Gumstix Aerocore 2 for Dragonboard 410C


    * Available from [gumstix.com](https://store.gumstix.com/aerocore-2-for-dragonboard.html)





  * A CSI-2 or USB camera


    * There was no CSI camera working on the test rig so a [Logitech C920 HD webcam](https://www.amazon.com/Logitech-Widescreen-Calling-Recording-Desktop/dp/B006JH8T3S) was used instead.





  * Some way of mounting the Dragonboard to the drone frame


    * A small cardboard box was used for this rig.


    * Double-sided insulating tape would also work.





  * Zip ties, screws, risers, etc.


  * Xacto knife, screwdrivers, soldering iron, etc.





* * *





# Prep Time


Before we get started, there are a few things you’ll need to take care of.




  * Assemble your drone kit.


    * Do not attach the rotor blades yet. You really don’t want your drone unexpectedly taking flight in the middle of your office/house/garage.





  * The 12V battery connector and regulator on the Aerocore can handle the main battery’s output but there is no built-in connector on the drone or the battery.  


    * You can solder some jumper wires onto one of the motor power terminals on the base plate of your drone (circled in green here)





    ![soldering highlight]({% asset_path "diy-drone-img-2.png" %}){:class="img-responsive lazyload"}




  * Make sure you’ve flashed your Dragonboard with Linux. [Linaro’s Debian 16.09](http://builds.96boards.org/releases/dragonboard410c/linaro/debian/16.09/) was used for this demo.


  * Build QGroundControl.


    * In order to stream video from your MAV you will have to build QGroundControl from source, as it’s not included in the pre-built binaries.


    * Make sure you have libgstreamer1.0, gstreamer1.0-tools and libgstreamer-plugins-base1.0-dev installed.


    * Download and install Qt 5.5.1 from[ http://download.qt.io/archive/qt/5.5/5.5.1/](http://download.qt.io/archive/qt/5.5/5.5.1/)


    * Clone and build QGC from [https://github.com/mavlink/qgroundcontrol](https://github.com/mavlink/qgroundcontrol)





  * On your dragonboard 410C install the necessary packages


    * $ sudo apt-get update && sudo apt-get install python-wxgtk3.0 python-pip python-numpy python-dev libxml2-dev libxslt-dev gstreamer1.0-tools


    * $ sudo pip install pymalink


    * $ sudo pip install mavproxy





  * Bind your satelite DSM receiver with your radio


    * The instructions to do this for the AR6210 are found here:  [http://www.horizonhobby.com/pdf/SPMAR6210_Manual.pdf](http://www.horizonhobby.com/pdf/SPMAR6210_Manual.pdf)








* * *





# Put It All Together


With these initial steps complete, it’s time to make a drone.  


## Step 1:  Attach your boards


You will want your boards securely attached to the frame of your drone.  Unfortunately, MAV frames don’t all come with universal mounting points so some creativity is required to get these boards mounted.  In the following example photos, a small, sturdy cardboard box is zip-tied to the frame and risers are attached, to which the Dragonboard is attached.  

![box 2]({% asset_path "diy-drone-img-3.jpg" %}){:class="img-responsive lazyload"}

The box proved to be handy in concealing the excess wiring for the PWMs, power and webcam.

![box 1]({% asset_path "diy-drone-img-4.jpg" %}){:class="img-responsive lazyload"}

Attach the Dragonboard,  the satellite receiver, and the camera to the frame and the Aerocore to the Dragonboard.

![Dragonboard mounted]({% asset_path "diy-drone-img-5.jpg" %}){:class="img-responsive lazyload"}
![Screenshot]({% asset_path "diy-drone-img-6.png" %}){:class="img-responsive lazyload"}


## Step 2: Connect Wiring


![Screenshot 2]({% asset_path "diy-drone-img-7.png" %}){:class="img-responsive lazyload"}

There are a few wires and cables that must be attached to get your drone working: the PWM connections for the electronic speed controllers (ESCs), the DSM satellite receiver, power and camera. Finding the right sequence by which the PWMs should be attached is tedious if this is your first quadcopter build so the graphic below illustrates the PWM pin-out.

![ac24db_pwm]({% asset_path "diy-drone-img-8.png" %}){:class="img-responsive lazyload"}

Now it’s time to deal with the software.


## Step 3: Software


The final pre-flight step is to configure your software.  There are three steps:




  1. Flash PX4 firmware to the MCU


  2. Start data pipeline on the Dragonboard


  3. Calibrate on-board sensors


Flashing the firmware is made trivial by QGroundControl’s built-in flashing utility.  Open up the program and go to the setup tab ().  Along the left-hand side will be a button labeled “Firmware”. When you click on this button and then connect the Areocore 2’s “stm console”, QGC will guide you through the flash process.

![microcontroller-console]({% asset_path "diy-drone-img-9.png" %}){:class="img-responsive lazyload"}

The rest of the pre-flight work can be done over WiFi on the Dragonboard. Going wire-free will also make calibration a little easier.

Disconnect the USB cable from your Aerocore and connect the battery. Once the MCU and Dragonboard boot, SSH into the Dragonboard and enter the following command:

mavproxy.py --master=/dev/ttyMSM1 --baudrate 115200 --out xxx.xxx.xxx.xxx:14550 --aircraft MyCopter

Once the MAVlink command interface comes up on the Dragonboard, QGC should be able to connect to your drone. If it does not connect correctly, you may have to add a UDP connection to QGC’s settings.  The setup screen should look simmilar to the following screenshot:Where xxx.xxx.xxx.xxx is the IP address of your PC.

![drone-setup]({% asset_path "diy-drone-img-10.png" %}){:class="img-responsive lazyload"}

If this is the first time your aerocore has been configured, the cicles that appear green in this shot will be red and you will not be able to deploy your drone until they all appear green.

Configuring your drone and calibrating the sensors is very straightforward thanks to the self-explanatory interface in QGC.  Click on each item along the left-hand side in turn -- apart from “Firmware”, which you have already done -- and follow the on-screen instructions.  Once all the lights are green, you’re ready to fly.

The final, and completely optional steps are getting the camera feed from the Dragonboard to QGC, and attaching a Pre-GO GPS module.  

Adding a GPS module is very easy.  Once it’s connected, it will work right away.  The 5-pin molex connector next to the DSM satellite receiver connector.  Power down your drone and plug the module in using the included cable, and

The video streamer, like the MAVlink proxy, is a single command on the Dragonboard:



* * *



gst-launch-1.0 uvch264src initial-bitrate=1000000 average-bitrate=1000000 iframe-period=1000 \

   device=/dev/video0 name=src auto-start=true src.vidsrc ! video/x-h264,width=1920,height=1080, \

   framerate=24/1 ! h264parse ! rtph264pay ! udpsink host=192.168.0.106 port=5600



* * *




![selection_015]({% asset_path "diy-drone-img-11.png" %}){:class="img-responsive lazyload"}


 With both the proxy and the video feed running on the Dragonboard, your flight screen will look something like this:

If you have added a Pre-GO GPS module, your drone’s location will appear in the navigation map seen here in the inset. You can switch the primary view between the video stream and the navigation map by clicking on the inset in the bottom left-hand corner.



* * *





# Conclusion


This completes the demonstration walkthrough.  Having followed these steps you should have a fully operational quad-copter.   Watch this video to see the Aerocore 2 for Dragonboard 410c in action:

[https://www.youtube.com/watch?v=LIH0tpi9KwE&t=0m41s](https://www.youtube.com/watch?v=LIH0tpi9KwE&t=0m41s)



* * *



Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

![openhours-04]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!
