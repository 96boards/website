---
author: Mani_S
comments: true
date: 2017-04-24 03:50:56+00:00
layout: post
link: http://www.96boards.org/blog/96boards-vu-meter-part-1/
slug: 96boards-vu-meter-part-1
featured_image: IMG20170420145210.jpg
title: 96Boards VU Meter - Part 1
wordpress_id: 20259
categories:
- blog
---

# **Introduction**


How about creating a simple application to monitor the intensity of sound? Sounds cool right? That’s what I thought and created a simple Volume Unit (VU) meter which does the work for us on 96Boards HiKey. This application aims at real time monitoring of sound intensity using C. ALSA library in Linux is used to capture the sound from USB microphone attached to HiKey. Sounds exciting isn’t it? Yeah, it became much more easier on our 96Boards. If you have the HiKey or any other CE 96Boards up and running, you are good to go. So, this article will show how to run VU meter on HiKey, which you can take it further by adding some GUI stuffs to make it a fun audio project.

{% include media.html media_url="https://www.youtube.com/embed/Qll2MPDj_wc" %}


**VU-Meter demo starts at minute 26:00**


# **Pre-requisites**




### **Hardware requirements:**






  1. **[HiKey devlopment board](http://www.96boards.org/product/hikey/) (Used in this example, any 96Boards should work)**


  2. **USB microphone**




### **Package dependencies:**


Install the following dependencies on your HiKey board




  1. **ALSA library:**

    $ sudo apt-get install libasound2

  2. **VU meter source:**

    $ git clone https://github.com/Mani-Sadhasivam/vu_meter.git


# **Instructions**


At this point you should have the ALSA library installed and the source should have been cloned from GitHub. Now, move into the application directory using the following command.




  * `$ cd vu_meter`


Before building and executing the code, we’ll see the internals of this application. In order to capture audio signal from sound source, ALSA (Advanced Linux Sound Architecture) library has been used. To know more about ALSA library, please visit the [ALSA project page](https://www.alsa-project.org/main/index.php/Main_Page).

Following settings have been used for this application for capturing sound from mic:




  1. **Sample rate: 44100 Hz**


  2. **PCM format: 16bit - Little Endian**


  3. **Capture mode: Interleaved**


  4. **Period size: 320**


  5. **Channel: Stereo**


In ALSA, sound can be captured in two modes:




  1. **Interleaved access**


  2. **Non-Interleaved access**


For stereo (dual) channel interface, Interleaved mode makes much sense. Because, in Interleaved mode data transfer happens in frame by frame, where each frame consists of samples from each channel. But, Non-Interleaved mode transfers data in periods, where each period consists of chunks of data from each channel.

Buffer size should be 2 times greater than the period size, in our case it is 640. After getting data from Microphone for 320 periods, RMS (Root Mean Square) value of the buffer is calculated using the get_rms function. Then the calculated value is converted into decibels(dB) using the formula:

**dB = 20 * log (val)**

Calculated decibels value is then shifted to 0 - 100 range in order to display as progress bar. Finally, the shifted value will get displayed as progress bar in console.

_**Note: Value displayed in progress bar is not the actual dB value of the signal.**_

This action is repeated continuously to make it real time processing. There is a signal handler attached for SIGINT (ctrl + C) in order to exit gracefully.

So, that’s the theory part and now we’ll get into action :)

Build and execute the application using following command:




  1. `$ make`


  2. `$ ./bin plughw:U0x46d0x81b`


Voila! Now you can see the progress bar moving according the sound in front of microphone. To see more clearly, play some good music in front of it and experience the awesomeness :P

But, one second. You might be wondering from where the plughw:U0x46d0x81b part comes from. It is the sound card info of your USB microphone attached to HiKey. To see the list of all sound cards attached, execute the following command:




  1. `$ arecord -L`


At last you can see the sound card info for your Mic. There should be two types of representation for your device.




  1. hw:


  2. plughw:


Here, hw represents the actual sound card and plughw represents the plugin for sound card. It's always recommended to use plughw first-up as it does the format conversion from before applying the settings to your device.


# **Conclusion**


Finally, the Volume Unit meter is now running on your HiKey! This application is the more simplest form of VU meter. But, stay tuned for the Part 2 of this VU meter as I’m going to show how to stitch some signal processing stuffs into this :)



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](http://www.96boards.org/newsletter/)” and our “[Weekly Digest](http://www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](http://www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
