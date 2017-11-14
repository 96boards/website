---
author: linaro
comments: true
date: 2016-09-24 21:09:29+00:00
layout: post
link: https://www.96boards.org/blog/recap-of-the-96boards-openhours-20-dragonboard-410c-mini-series-part-2/
slug: recap-of-the-96boards-openhours-20-dragonboard-410c-mini-series-part-2
image:
    featured: true
    path: /assets/images/blog/OpenHours-03.png
    name: OpenHours-03.png
title: Recap of the 96Boards OpenHours 20 - DragonBoard 410c Mini-Series Part 2
wordpress_id: 17494
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
- 96Boards OpenHours
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- Breakout
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- debugging
- dragonboard410c
- gdb
- gui
- HiKey
- Library
- Linux
- Low speed expansion header
- Open Embedded
- Open Hours
- OpenHours
- Reference Platform
- rpb
- sensors
- UART
---

This week was episode 2 or our 3 part series on the DragonBoard 410c.  Last week Robert showed an out of box experience and how to set-up your DragonBoard and he also announced our contest for a chance to win one of several DragonBoards. In this episode we had a demo done by Lawrence King from his desk at Qualcomm Canada and it was also during this episode we took down names for those that wanted to be part of the drawing   The final episode of the series this week will be a live panel at our [Linaro Connect ](http://connect.linaro.org/las16/)event in Las Vegas, Nevada to discuss the DragonBoard and to answer any questions.  At the end of the Live Panel we will draw names from those that entered the contest during episode 2 and announce the winners live.  We will actually have two OpenHours sessions next week - the first one during our normal time of 4pm (BST) where Robert will stream the keynote from LAS16 and a second one at 2pm (PST) where we will have a panel discussion and announce the winners of our contest.  Here is the link to our upcoming Live OpenHours during connect:  [https://www.youtube.com/watch?v=29yWWbXa8p8](https://www.youtube.com/watch?v=29yWWbXa8p8)

To watch episode 20 go to [https://www.youtube.com/watch?v=iR1YzwGwGQE ](https://www.youtube.com/watch?v=iR1YzwGwGQE)

{% include media.html media_url="https://www.youtube.com/embed/iR1YzwGwGQE?feature=oembed" %}



  * **0:00 - 2:29:  **Robert introduced Lawrence King from Qualcomm and the demo.


  * **2:30 - 3:30 :**  Lawrence introduced himself and gave a bit of his background and experience with DragonBoard 410c.


  * **4:13 - 9:49:  **Lawrence began his demo of the DragonBoard 410c.  Please watch the above video to see the entire demo in detail


  * **9:50:**  Question:  When you connect the mezzanine on the dragonboard, you cover up the high speed expansion connector.  Why would we use the high speed connector?  Should we have a cable connected to it and hanging out the side?  Lawrence went into detail to answer each of these questions and gave a demonstration to help answer them.


  * **15:33**:  Lawrence then continued with his demo


  * **41:05:**  Lawrence finished his demo.  Robert began to answer some of the audience questions such as:  Do you provide yocto layers and how mature are they?,  Does it come with an SDK?


  * **45:03:**  Robert then closed out the call by discussing the give-away and how to register for a chance to win


**Be sure to join us for next week's LIVE OpenHours at Linaro Connect LAS16:  [ https://www.youtube.com/watch?v=29yWWbXa8p8](https://www.youtube.com/watch?v=29yWWbXa8p8)**

As always there is a lot of good information and resources that is available in the chat below, this is a great place to get more detailed information mentioned during the call.  Also a while ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https://discuss.96boards.org/t/openhours-topic-suggestion/ ](https://discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

Don't forget about the upcoming Linaro Connect where attendees have an opportunity to meet with Linaro in person and learn a lot more about what is going on in the community.  There are still openings available to attend this conference in Las Vegas, Nevada September 26-30, 2016 --[http://connect.linaro.org/](http://connect.linaro.org/).

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**






































Youtube: [http://link.linaro.org/openhoursyoutube](http://link.linaro.org/openhoursyoutube)
















[https://www.96boards.org/openhours/](/openhours/)

























RW












Lawrence King is showing his demo for Brick Breaker.






* * *























J









When you connect the mezzanine on the dragonboard, you cover up the high speed expansion connector.  Why would we use the high speed connector?  Should we have a cable connected to it and hanging out the side?






* * *


























RW












[github.com/lawrencek52](http://github.com/lawrencek52)




















[https://github.com/lawrencek52/Breakerball](https://github.com/lawrencek52/Breakerball)






* * *























J









Lawrence, did you use a four-dimensional USB stick?






* * *




















T












Demonstration effect at work.






















focus is blurry.






* * *


























T












a log of your screen after the talk would help, of course.
















i.e., one of the three-letter-agencies (e.g. ATT) key loggers would help 3






* * *

















RW









@All who joined later: You are watching Lawrence King show a Demo on the DragonBoard 410c using the Sensors Mezzanine.The form for the DragonBoard 410c giveaway will be given at the end of the show.






* * *























RW












@tatzelbrumm: The mezzanine Lawrence is using can be found here: [https://www.96boards.org/products/mezzanine/grove-starter-kit/](/products/mezzanine/grove-starter-kit/)





















* * *











RW












I think he said the intructions are part of the download on Git




















@RW can keep me honest

















* * *











RW












@Robert Whetstine: Lawrence Breaker Ball repo can be found here: [https://github.com/lawrencek52/Breakerball](https://github.com/lawrencek52/Breakerball)














it does have some instructions











There is also a project page on Qualcomm Developer Network: [https://developer.qualcomm.com/project/breakerball](https://developer.qualcomm.com/project/breakerball)






* * *




















RW












Kit can be found here: [https://www.96boards.org/products/mezzanine/grove-starter-kit/](/products/mezzanine/grove-starter-kit/)










* * *




















DM












@lawrence Could you please show the code ?










* * *




















T










Link to the specific scratch code on teh githubz helps ...











* * *




















Robert Wolff







RW












[https://github.com/lawrencek52/Breakerball](https://github.com/lawrencek52/Breakerball)














All code is there






* * *

















RW












Project can also be found here: [https://developer.qualcomm.com/project/breakerball](https://developer.qualcomm.com/project/breakerball)





















* * *











UJ









i cant see the code






* * *























RW












@udaya: You can access code from the github repo






* * *


























T












Now, for someone thoroughly confused about anything beyond CMOS transistor level ... where do I get a Tool For Dummies, like a Snapdragon assembler?






* * *




























do you provide yocto layers and how mature are they ?






* * *



MW























[https://github.com/96boards/meta-96boards](https://github.com/96boards/meta-96boards)



















* * *











RW












[https://github.com/Linaro/documentation/blob/master/Reference-Platform/CECommon/OE.md](https://github.com/Linaro/documentation/blob/master/Reference-Platform/CECommon/OE.md)






* * *




























Does it come with an SDK?




















[discuss.96boards.org](https://discuss.96boards.org/)/




















Is it possible to solder DB410c at home especially power input port?


















* * *



















Subscribe to 96Boards youtube for OpenHours live streem next week




















[https://www.youtube.com/c/96boards](https://www.youtube.com/c/96boards)









































[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)



Click here to join us for [next OpenHours ](/openhours/)
