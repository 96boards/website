---
title: Coursera Revamp! UCSD's IoT Specialization featuring 96Boards
author: Robert Wolff
date: 2018-02-01 01:01:54+00:00
image:
    featured: true
    path: /assets/images/Build-Internet-Things.png
    name: Build-Internet-Things.png
    thumb: /assets/images/blog/thumbs/coursera-logo-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditek, dragonboard, coursera, iot, mooc, massive open online course, ucsd, calit2, qualcomm, qualcomm institute, cloud, aws, amazon web services

---

# Coursera IoT Re-vamp! Featuring UCSD, Qualcomm and 96Boards!

## Introduction

In 2015 the University of California, San Diego - [Qualcomm Institute (CALIT2)](http://www.calit2.net/) teamed up with [Qualcomm](https://developer.qualcomm.com/) to create a massive open online class (MOOC), hosted on [Coursera](https://www.coursera.org/specializations/internet-of-things). This “MOOC” gave users a first look into the inner working of IoT (Internet of Things) while providing an in depth hardware experience using the [DragonBoard 410c](https://www.96boards.org/product/dragonboard410c/) by [Arrow](https://www.arrow.com/en/products/dragonboard410c/arrow-development-tools). The course was an instant success as tens of thousands of students took on the hand made curriculum put together by a group of engineering students (including yours truly :P) and guided by esteemed UCSD professors Harinath Garudadri and Ganz Chockalingam. Considering the complexity of hosting an online course with hardware requirements, much thought and time was put into this release; however, no matter the efforts, certain constraints could not be overcome considering the state of the ecosystem at this time. 96Boards (Linaro’s brainchild) was still in it’s infancy, the DragonBoard 410c had just hit Arrow’s shelves, and resources/documentation were only just being written up and consolidated. The course would serve its purpose, but in ways we didn’t even imagine. The Coursera community rallied and tackled issues which contributed to the evolution of the entire ecosystem. The unprecedented landslide of community engagement continued, and for the next couple years the specialization continued to grow. UCSD and Qualcomm had outdone themselves, but there was still much to be done… And so the story begins...

## My Background

Back in June of 2015, I received my first DragonBoard 410c. I remember this moment very clearly, opening the box and pulling out a small, colorful, credit card sized, single board computer (later I would find out, this was my first introduction to 96Boards!). I held it in front of me and tried to analyze what I was seeing, rotating it in my hands, squinting at all of the small components, and counting the many ports and headers. It only took me a few minutes to realize I was overflowing with questions about this board, I had to start tinkering. Three months with the DragonBoard went by in a flash, and at this point it was time to record my efforts.

{% include image.html name="DragonBoard-UpdatedImages-front.png" alt="Your alternate text." %}

{% include image.html name="DragonBoard-UpdatedImages-side.png" alt="Your alternate text." %}

The [Qualcomm Institute at University of California San Diego](http://qi.ucsd.edu/) put me in a team, and gave us a lab with an AV crew. We were promptly tasked with creating an online specialization around the DragonBoard 410c. Over the next year, our team developed six courses jam-packed with IoT related material. We pumped out hundreds of bite sized videos, covered topics spanning multiple skill levels, and offered it online, on demand, for the masses to watch. It turns out this was only the beginning, the course would soon finds ways to evolve.

## A Short Reflection

So here I am, just about three years later, writing a blog about the DragonBoard 410c, 96Boards, the community that inspired me, and the Coursera course that surely changed my life. But how does all of this tie together? Why am I hear harping on about my experience with the DragonBoard, 96Boards and the Coursera course that happened so long ago? Keep reading and you will find out...

## The Original Release

The original specialization has six courses, and can still be found on Coursera.org. Each course has its own theme and arsenal of videos, supplemental reading and assessments. In this little subsections, I wanted to give everyone an overview of the original launches curriculum.

**Course 1** - [Internet of Things - How did we get here?](https://www.coursera.org/learn/internet-of-things-history): In this course, we will explore the convergence of multiple disciplines leading to todays’ Smartphones.  You will learn about the birth and evolution of Telephony Networks, Broadcast Networks (TV and Radio) and Consumer Electronics.  We will discuss the impact of Internet, (multimedia) content, smartphones and apps on everyday lives. We will then look at how this emerging platform called the Internet of Things – wherein billions and trillions of devices communicating with each other and “the cloud” – could enable unprecedented, innovative products and services.   Take this course if you want to understand what great new advances in mobile-enabled products will be coming our way! 

**Course 2** - [Internet of Things - Setting up your DragonBoard 410c Development Platform](https://www.coursera.org/learn/internet-of-things-dragonboard): This is the first in a series of courses where you will learn both the theory and get the hands-on development practice needed to prototype Internet of Things products.  This course is suitable for a broad range of learners. 

**Course 3** - [Internet of Things - Sensing and Actuation from Devices](https://www.coursera.org/learn/internet-of-things-sensing-actuation): In this course, you will learn to interface common sensors and actuators to the DragonBoard™ 410c hardware. You will then develop software to acquire sensory data, process the data and actuate stepper motors, LEDs, etc. for use in mobile-enabled products. Along the way, you’ll learn to apply both analog-to-digital and digital-to-analog conversion concepts. 

**Course 4** - [Internet of Things - Communication Technologies](https://www.coursera.org/learn/internet-of-things-communication): In this course, you will learn how VoIP systems like Skype work and implement your own app for voice calls and text messages.  You will start by using the Session Initiation Protocol (SIP) for session management. Next, you will learn how voice codecs such as Adaptive Multi Rate (AMR) are used in 3G networks and use them for voice traffic in your app. 

**Course 5** - [Internet of Things - Multimedia Technologies](https://www.coursera.org/learn/internet-of-things-multimedia): In this course, you will learn the principles of video and audio codecs used for media content in iTunes, Google Play, YouTube, Netflix, etc.  You will learn the file formats and codec settings for optimizing quality and media bandwidth and apply them in developing a basic media player application. 

**Course 6** - [Capstone - Build a Mobile Surveillance System](https://www.coursera.org/learn/internet-of-things-capstone): In the Capstone project for the Internet of Things specialization, you will design and build your own system that uses at least 2 sensors, at least 1 communication protocol and at least 1 actuator. You will have a chance to revisit and apply what you have learned in our courses to achieve a robust, practical and/or fun-filled project. 

As you can see this specialization consists of six full courses, totaling more than 55 hours of content! This includes hundreds of educational videos, hands on exercises with bleeding edge hardware, peer reviewed content and submission, discussion sessions, supplemental reading and of course facetime with the students and mentors behind the course on a weekly basis through an online program called “[OpenHours](https://www.96boards.org/openhours/)”. 

Now while this course seemed to have a lot, it still lacked in some key areas, hence the reason for a revamp! In the following sections I will talk about some the issues we had with the first iteration of the course, and how we set out to fix them.

## Getting ready for the Revamp

Just like growing muscles, we must first break down in order rebuild! In this short section I wanted to talk about the many things we noticed when launching the first course and how we aim to fix them. Please feel free to comment on this blog if you feel we could change things in a better way! We are always look for input from the community.

- **Limited resources**: When the first iteration of the course was being worked on and eventually released, the team had limited resources. This is to say, the 96Boards ecosystems was very new at the time and much that exists now was not available. When it comes to documentation and operating system options, or simply pinout diagrams with the right gpio numbers, none of this existed. Much time was spent figuring things out on our own, which led to a course that had a lot more building block aspects rather than actual applications running on the Dragonboard 410c. We hope to address this issue in the iteration by providing our viewers with as many resources as possible! These resources will come from all over the place and most likely be found consolidated on the 96Boards website. Videos and course assignments will also reflect this new era of information. We will try to provide as many fun projects and exercises as possible to demonstrate the many features of the board while consuming many aspects of the 96Boards ecosystem.
- **Limited Community**: The community at this time very small. I must remind you, 96Boards had only been announced in February of this same year. Some four months later the DragonBoard makes its way to our hands and you know the story from there. However, in most cases, a course like this would have been much easier to develop with a strong community behind us. At this time, it was not the case. Again, much time was spent finding the in’s and out’s of this technology, much of which we tried to showcase throughout the specialization. The down side to this is that in some cases this may have strayed away from the overarching theme, which was IoT. This aspect of the course is truly game changing. Since 2015 the community around 96Boards as blown up. Not only that, the means to gain access and join said community is at everyone’s fingertips, no matter where you are in the world. We will outline and provide channels for everyone to enjoy! We look forward to seeing the next wave of Coursera students become standing members of our growing community.
- **Limited tools**: A huge aspect of the 96Boards community is the mezzanine community. Mezzanines are addon devices that clip into the low and high speed headers of your 96Boards to provide additional functionality for development. NO MEZZANINE EXISTED AT THE TIME OF THIS RELEASE! Can you believe it? We went into development blind and without tools… The mezzanine community has improved so much, that it would be hard to even quantize the output in the last few years. Tons of new mezzanine cards are now on the market, and more seem to suddenly exist on a monthly basis. A new initiative, the “Mezzanine-community” repository by 96Boards has brought new development methods and a plethora of templates to work with, so not creating and hosting your 96Boards open hardware has never been easier. Basically, what I am saying is we have come a long way, and we look forward to showcasing this in this next iteration. We will even be using some of these mezzanine boards throughout the course.

# The Big Changes! (New outline)

Finally, the reason you are here! You want to hear about these so called “big changes” and how they will affect your experience with our previous course, maybe even life as you know it! It is true, UCSD has once again teamed up with Qualcomm to provide a new and improved repertoire of IoT content based around the DragonBoard 410c; however, this time they through a wildcard into the mix, 96Boards! We are proud to announce our participation in this renovation and truly honored to work with such esteemed institutions. UCSD, my alma mater and one of the top research universities in the USA, and Qualcomm, the philanthropic silicon giant. 96Boards thanks you for allowing this collaboration. Now, let’s dive right in to the content changes (i.e. Release note)…

- **Course 1**
   - Minor changes to all assessment related material.
   - In-video questions have been updated
   - Lesson and Module Quizzes have been updated
   - Specialization Overview video has been updated
- **Course 2**
   - Complete content overhaul.
   - Most content from Course 3 and 2 were merged into a single course.
   - Focus on Sensing and Actuation
   - Kept all supplemental videos and converted to “optional”
   - Terminology and acronym videos
   - Git, ADB and Fastboot videos
   - Basic Concept videos
   - Added guest speakers from industry
   - In depth look at 96Boards and the entire ecosystem
   - In depth look at the 96Boards specification and the DragonBoard 410c
   - Increased assessment difficulty course wide
   - Added many more projects and open source repository with full instructions for project recreation.
- **Course 3**
   - Complete content overhaul
   - All new content, now focusing on Cloud Services and implementation
   - Focus on understanding and using AWS (Amazon Web Services) 
   - Focus on implementing AWS with DragonBoard 410c
  
Don't forget to stop by OpenHours, this week (Feb 1st) at 4:00p UTC to meet with representatives from UCSD, Qualcomm and 96Boards to get a complete walkthrought of the new content! 

Simply join any of our channels at the end of the countdown: [https://www.96boards.org/openhours/](https://www.96boards.org/openhours/)

- [96Boards Facebook](https://www.facebook.com/96Boards/)
- [96Boards YouTube](https://www.youtube.com/c/96boards)
- BlueJeans ID : 943216362
   - [Join Directly](http://link.linaro.org/openhoursjoin)