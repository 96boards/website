---
author: Manivannan Sadhasivam
comments: true
date: 2017-05-30 14:03:55+00:00
layout: post
link: https://www.96boards.org/blog/part-3-home-surveillance-project-96boards/
slug: part-3-home-surveillance-project-96boards
featured_image: Pic2.jpg
title: Part 3 - Webcam Tracking using 96Boards Sensor Mezzanine
wordpress_id: 20430
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
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- DragonBoard 410c
- F-Cue
- HiKey
- Image-Processing
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- open source
- OpenCV
- OpenHours
- Reference Platform
- rpb
- Servos
- Webcam
---

# **Introduction**


Welcome to Part 3 of our ‘**[Home Surveillance](https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/)**’ blog series focusing on building a home monitoring system using 96Boards. It’s been an amazing journey so far and if you are still with me, then you’re heading towards something awesome :) This part focuses on tracking the faces in front of webcam using a servo mount, connected to Sensors mezzanine, controlled by Dragonboard 410c. Sounds exciting right? Let's take a look at how we can make this happen!

{% include media.html media_url="https://www.youtube.com/embed/OSI_6HT76g8" %}

**See other blogs from this series:**

Before getting into Webcam tracking, it is worth looking at the past to get our focus organized.




  1. **[Part 1](https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/)** - Introductory blog - Here we introduced the Home Surveillance project and outlined the roadmap to our end goal. Towards the end of blog, information about how to contribute to this project was also mentioned.


  2. [**Part 2** ](https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/)- Facial recognition using OpenCV - This part focussed on getting the face detection out by running **[OpenCV](http://opencv.org/)** on **[Dragonboard 410c](/product/dragonboard410c/)**. In order to make the life easier for reader's, installation steps for OpenCV 3.2 was also included. Along with the blog, a video showing the working demonstration was attached.




## **Hardware requirement**






  1. [Dragonboard 410c](/product/dragonboard410c/)


  2. [USB Webcam](https://www.logitech.com/en-in/product/hd-webcam-c270?crid=34)


  3. [Sensors Mezzanine](https://www.seeedstudio.com/96Boards-Sensors-p-2617.html)


  4. [Servo mount - Pan and Tilt](https://www.arrow.com/en/products/1967/adafruit-industries)


  5. Micro servos





## **Software Dependencies**


Installed the dependencies mentioned in **[Part - 2](https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/)** along with the following:

$ sudo apt-get install pyserial


# **Webcam tracking**




## **Assembly**


First we need to assemble the Webcam Tilt and Pan mount with Micro servos. Assembly needs to be done with much care as the servos should be able to move along X and Y axis freely. Detailed steps on how to get it done can be found in the video [here](https://www.youtube.com/watch?v=V5qQhpIQdeA). Once the sensor mount has been assembled, Webcam needs to be placed on top of the mount.

Since, the use of micro servo has been deployed in this project, it would be good to remove some metal parts in the supporting portion of the webcam to reduce weight. If more accurate webcam positioning is desired, then use servos with high torque handling capacity.



Once the setup has been assembled, connect both servos to Sensors mezzanine in the following order:




  1. Pin 9    ----> Servo controlling X axis


  2. Pin 10  ----> Servo controlling Y axis


  3. 5v        ----> Servo Vcc


  4. Gnd     ----> Servo Gnd


![Home surveillance part 3 picture 1]({% asset_path "Pic1-part3-home-surveillance.jpg" %}){:class="img-responsive lazyload"}


## **Arduino Programming**


Boot into Dragonboard410C and clone the source code from 96Boards git repository by following the steps given below:


    $ git clone https://github.com/96boards-projects/home_surveillance.git
    $ cd home_surveillance/part-3


Launch Arduino IDE which comes pre installed in Debian release or install one if you don't have.


    $ sudo apt-get install arduino


Open facetrack.ino and make sure the following settings are correct in IDE.




  1. Board          ----> Arduino Uno


  2. Serial Port    ----> /dev/tty96B0


  3. Programmer ----> AVRISP mkII


Then, upload code to Sensor Mezzanine by selecting File -> Upload. Alternatively, you can also use an external programmer to upload code but it will erase the bootloader present in ATMega controller.

Once the code has been flashed, both servos would turn 90 and 120 degrees respectively.


## **Code **Walk through


Python script _facetrack.py_ makes use of the training dataset created in [Part -2](/blog/part-2-home-surveillance-project-96boards/) for identifying the known face. Once the face has been identified, the position information of face (X,Y axes) would be sent to the Mezzanine through serial port. Then the Arduino code would determine whether the face is on left/right for pan and up/down for tilt. According to the face position, servo would be moved to cover it at the center of webcam.

For instance, if the face has been detected at left most portion. Servo will move towards left until the face becomes center of focus.  After adjusting the servo position for x axis, same procedure would be followed for y axis.

We’ll make use of the servo library comes pre-installed with Arduino for controlling two micro servos. Maximum X axis screen resolution is set to 320 and Y axis is set to 240. Also, the face position information would be sent from Dragonboard to Sensor mezzanine in the following manner:


    /msb/lsb/msb/lsb/.....
    |......|........|.....
       X       Y




## **Webcam tracking**


As said before, _facetrack.py_ depends on training a dataset created in [Part 2](https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/). So, copy that to the part 3 directory along with \_haarcascade_frontalface_default.xml \_classifier.

Once all the steps mentioned above are completed, Webcam tracking could be achieved by executing the python script with USB webcam and sensor Mezzanine setup connected to Dragonboard410C.


    $ sudo python facetrack.py


**P.S:** Script will only track the face which was identified using the dataset created with ID 1. For tracking multiple faces, different logic should be employed here.


![Home surveillance part 3 picture 2]({% asset_path "Pic2-part3-home-surveillance.jpg" %}){:class="img-responsive lazyload"}



# **Conclusion**


Is your webcam tracking your face? Are you feeling like in a tech world surrounded by full blown gadgets monitoring you? If yes… then you are feeling the awesomeness I mentioned before :) Stay tuned for the Part -4 where I will show how to setup AWS S3 to stream detected faces to cloud.

**Want more? [Continue on to Part - 4 of the series](https://www.96boards.org/blog/part-4-home-surveillance-project-96boards/)**.



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
