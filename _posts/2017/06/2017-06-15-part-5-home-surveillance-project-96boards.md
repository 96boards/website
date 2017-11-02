---
author: Manivannan Sadhasivam
comments: true
featured_blog: true
date: 2017-06-15 07:16:59+00:00
layout: post
link: https://www.96boards.org/blog/part-5-home-surveillance-project-96boards/
slug: part-5-home-surveillance-project-96boards
title: Part 5 (Final) - Home Surveillance
wordpress_id: 20519
featured_image: surveillance-152097_960_720-1.png
images:
  - surveillance-152097_960_720-1.png
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
- Home Surveillance
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

images:
    thumbnail: thumb.png
    list:
        - image1.png
        - image2.png
---
# Introduction

Welcome to Part 5 (Final) of our **‘Home Surveillance’** blog series focused on building a home monitoring system, using 96Boards. In this final blog, we will glue all parts (1 to 4) together and form a full fledged home surveillance system.

So, before going into this final part of the series, I would like to give a quick recap of what has happened in the previous parts:

  1. [Part 1](/blog/part-1-home-surveillance-project-96boards/) - Introductory blog - Here we introduced the Home Surveillance project and outlined a roadmap to our end goal. Towards the end of this blog, information about how to contribute to the project was also mentioned.


  2. [Part 2 ](/blog/part-2-home-surveillance-project-96boards/)- Facial recognition using OpenCV - This part focussed on getting the face detection to run using [OpenCV](http://opencv.org/) on [Dragonboard 410c](/product/dragonboard410c/). In order to make life easier for reader's, installation steps for OpenCV 3.2 was also included. Along with the blog, a video showing a working demonstration was attached.


  3. [Part 3](/blog/part-3-home-surveillance-project-96boards/) - Webcam tracking using 96Boards Sensors Mezzanine - This part focussed on tracking faces in front of webcam using servo mount connected to a Sensors mezzanine, controlled by Dragonboard 410c. Along with the blog, a video showing the working demonstration was attached.


  4. [Part 4](/blog/part-4-home-surveillance-project-96boards/) - Setting up your Amazon Web Service (AWS) Cloud Service - This part focussed on setting up AWS S3 account and streamed the detected faces to it.


**If you prefer to skip our blog series and dive directly into the code and instructions, you can visit this project in our “**[**projects repository**](https://github.com/96boards-projects/home_surveillance)**” in GitHub**


# Hardware requirement

  1. [Dragonboard 410c](https://www.arrow.com/en/products/dragonboard410c/arrow-development-tools)


  2. [USB Webcam](https://www.logitech.com/en-in/product/hd-webcam-c270?crid=34)


  3. [Sensors Mezzanine](https://www.seeedstudio.com/96Boards-Sensors-p-2617.html)


  4. [Pan/Tilt Camera Mount with micro servos](https://www.arrow.com/en/products/1967/adafruit-industries)

# Software Dependencies


Install dependencies mentioned in [Part 2](/blog/part-2-home-surveillance-project-96boards/), [Part 3](/blog/part-3-home-surveillance-project-96boards/) and [Part 4](/blog/part-4-home-surveillance-project-96boards/) along with the following one:

$ sudo pip install Flask


# Final Addition!

As I said, this final part is going to glue all previous parts together. But, is that enough for implementing a full fledged Home Surveillance system? I don’t think so. Clearly, we need to get the notification when someone enters our room. To accomplish this task, we are going to create a notification event in AWS S3 for the blacklisted faces. When a person enters our room, a notification will get triggered in the form of an email. Let’s see how to make this happen :-)

## Create SNS topic

  1. Go to AWS SNS (Simple notification Service) console [https://console.aws.amazon.com/sns/v2/home](https://console.aws.amazon.com/sns/v2/home)


  2. Select “**Create Topic”** under SNS Dashboard


  3. Enter Topic name of your choice. Eg: home_surveillance. You can leave display name empty, as we are going to use Email notification only


  4. Click “**Create Topic”. **Created topic should be visible under “**Topics”** pane of SNS console


  5. **Copy** the Topic’s **ARN**. We’ll be using this ARN (Amazon Resource Name) to send notifications later




## Update Topic policy






  1. Under the **Topics** section, select the created topic by clicking the checkbox


  2. Choose “**Edit topic policy”** under “**Actions”**


  3. Select “**Everyone”** in both sections and click “**Update policy”**. This will allow every AWS users to publish and subscribe to this topic. Change it to specific users if you want to limit the accessibility.

## Create Subscription


  1. Select “**Subscriptions”** from SNS console


  2. Click on “**Create Subscription”**


  3. Paste the **ARN** we copied in above step


  4. Select “**Email”** in **Protocol** dropdown


  5. Type the email id in which you want to receive notifications in **Endpoint**


  6. Click “**Create Subscription”**


Now you should have received a confirmation email from AWS in the email ID given as Endpoint. Confirm the subscription to created topic by clicking “**Confirm Subscription”**. Once the subscription is confirmed, Subscription ARN should be visible under Subscriptions pane.


## Create Notification for blacklisted faces






  1. Go to AWS S3 console, [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/)


  2. Select the bucket we’ve created in [Part 4](/blog/part-4-home-surveillance-project-96boards/)


  3. Goto **Properties** tab and select “**Events”**


  4. Click “**Add notification**”


  5. Enter name for the notification and choose “**Put”** under **Events**


  6. Enter **Prefix** with the name you want to Blacklist. The same name should have a corresponding user ID in [facedetect.py](https://github.com/96boards/projects/blob/master/home_surveillance/part-5/facedetect.py). For instance, Enter **Mani** if you didn’t change the script.


  7. Enter **.jpg** in **Suffix**


  8. Choose “**SNS topic”** under **Send to**


  9. Choose the created SNS topic under **SNS**


  10. Click “**Save”**


That’s it for the notifications. The above mentioned setting will trigger an email notification when a blacklisted face has been identified. Ideally, the notification scheme works by monitoring “**Put”** event in the bucket. If an object matching the event criteria has been added to the bucket, notification will be triggered.

In this case, if a .jpg image named ‘Mani’ is added to the bucket, the user will get email notification.


## Port forwarding


This is the final step which needs to be implemented in order to remotely monitor the webcam from anywhere. The python script included in [final part](https://github.com/96boards-projects/home_surveillance/blob/master/part-5/homesurveillance.py) will create a simple webserver in Dragonboard and it will stream the webcam frames on the web page. For accessing the web page globally (i.e outside of home network), we need to do port forwarding in router.

The concept of port forwarding is forwarding the incoming request on a particular port of the router to Dragonboard.

**Internet** -----------------> **Router** ------------------> **Dragonboard Server**

                                           (Public IP)                                    (Local IP)

                                            (Port: 80)                                  (Port: 5000)

Port forwarding settings are different for each router, so explaining this is beyond the scope of this blog. But the general idea is to configure your router to forward an incoming request on **Port 80** to Dragonboard’s **Port 5000**.

For example, router **TP Link TD-W8968** port forwarding can be achieved by the following steps:




  1. Go to router admin page


  2. Advanced Setup -> NAT -> Add


  3. Enter name for Custom Service and Dragonboard’s IP in Server IP Address


  4. External port Start/End: 80


  5. Internal port Start/End: 5000


  6. Click Apply


If you go to router’s public IP, it should get redirected to Dragonboard’s server running on port 5000.


# Home Surveillance in action


Now, we have everything ready to run the final ‘Home Surveillance’ system.


    $ git clone https://github.com/96boards-projects/home_surveillance
    $ cd home_surveillance/part-2


Create dataset by following [Part 2](/blog/part-2-home-surveillance-project-96boards/).


    $ cp -r trainer haarcascade_frontalface_default.xml ../part-5
    $ cd ../part-5
    $ mkdir captured


**Note:** Make sure Servo Pan and Tilt system is setup properly as mentioned in [Part 3](/blog/part-3-home-surveillance-project-96boards/)

$ sudo python home_surveillance.py

Voila! Your Home Surveillance system is up and running on Dragonboard 410c :-) For remote monitoring, go to the router’s public IP on your favourite browser. If the known face has been identified, webcam will follow the face and if that face has been blacklisted (i.e Notification event has been set up for that face) the user will get Email notification. Also, the face instance will get uploaded to AWS S3 bucket for viewing.


# Limitations






  1. Only one remote client can connect at a time to the server running on Dragonboard


  2. Webcam can only follow one face at a time.




# Conclusion


So, we are at the end of the ‘Home Surveillance’ blog series and finally got a working surveillance system based on Dragonboard. Now it’s up to the community to implement this in their home and share the experience with all of us :-) Do you have any ideas on how to make this better? Please throw them in the comments section, or it would be really great if you could add the functionality and send us the pull request in projects repository. On top of that, there are many items queued up in Appendix which will be pushed out soon.



* * *





# **Appendix**


Please feel free to comment below if you feel we should add more to this appendix. All contribution are welcome. [Visit and fork the source repository](https://github.com/96boards-projects/home_surveillance) and begin sending us pull requests according to the [contributing guidelines](https://github.com/96boards/projects/blob/master/CONTRIBUTE.md).


#### **Machine Learning for setting up whitelist database**


Use Tensorflow to setup the learning and inference engine for the whitelist database of faces.


#### **Recognising multiple faces**


Not just the primary face but background faces and partial faces.This could become a Linaro Connect demo where it can recognize every attendee that has uploaded pictures on their profile. Future update: GPGPU or OpenCL optimisations?


#### **Simplifying setup**


Reduce the number of steps by packaging up the necessary libraries, upstreaming necessary changes, etc. In the end, it should become EXTREMELY easy for users to use various libraries with 96Boards (libmraa, cloud connectors, misc sensor libraries)


#### **Setup Trigger and User notification**


This is a trigger using some sensor, like a PIR and/or Ultrasonic to activate the system and notify the user of a disturbance.


#### **Remote control**


Provide remote control of camera (pan, zoom, tilt)


#### **Triggered list switching**


A hand held trigger which will allow users to switch between whitelist and blacklist visual faces.


#### **Video Compression and Decompression**


Showing difference in data transfer between H.264 (AVC) and H.265 (HEVC).


#### **Notification to mobile**


Send the push notification to mobile if a blacklisted face has been found. An android app needs to be created.



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124; [Facebook](https://www.facebook.com/96Boards/) &#124; [YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
