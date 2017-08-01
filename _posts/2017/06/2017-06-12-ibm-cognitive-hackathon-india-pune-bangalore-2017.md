---
author: Mani_S
comments: true
date: 2017-06-12 16:30:51+00:00
layout: post
featured_blog: true
link: https//www.96boards.org/blog/ibm-cognitive-hackathon-india-pune-bangalore-2017/
slug: ibm-cognitive-hackathon-india-pune-bangalore-2017
title: IBM Cognitive Hackathon in India (Pune and Bangalore) - 2017
wordpress_id: 20500
featured_image: ibm-cognitive-hackathon-india-pune-bangalore-2017.jpeg
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Arrow
- B2260
- Bangalore
- bubblegum-96
- Cloud
- Consumer IoT
- debian
- dragonboard410c
- F-Cue
- hackathon
- HiKey
- IBM
- IBMCognitiveBuild
- India
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- Pune
- Qualcomm
- TE
- Watson
---

# Introduction


Hello Everyone! I’m so excited to share my experience on the just finished ‘IBM’s Inaugural Cognitive IoT build’ hackathon, which took place in India. This was the first hackathon I had participated in, and overall had a lot of expectations. Lucky for me, it ended be much cooler than I had anticipated. :-) In general, a ‘Hackathon’ is an event focussed on finding solutions to a given problem within a short amount of time and working on said solutions collaboratively, as a team.

Have you attended one? If not, don’t worry :) This blog narrates the experience I had at this particular hackathon, and cherry picks some the interesting anecdotes.


# IBM Cognitive IoT Hackathon Details and Theme


The theme of this hackathon was centered around creating an IoT based solution using the IBM Watson IoT platform and Dragonboard 410c. The hackers were given the following broad themes to choose from for their applications:




  * Smarter Cities e.g., Smarter Agriculture


  * Industry 4.0 e.g. Smarter Factory


  * Smarter Homes and Buildings


  * “Bring Your Own” BYO Solution and become “Cognitive-enabled”


This 48 hour hackathon happened in two places around India.




  * **Pune**, May 29-30, 2017


  * **Bangalore**, June 1-2, 2017


Two of our 96Boards team members (Amit Kucheria and Manivannan Sadhasivam) assisted the event by helping hackers bring up their DB410c with IBM Bluemix Cloud. The Linaro representatives assisted representatives from Qualcomm, IBM, Arrow, TE, The Weather Company, Persistent, among others  who sponsored this hackathon.

Hacking started during the second half of the first day and ended around noon and day two.. Each team was assigned a mentor and the final judgement happened on basis of the below criteria.




  * Theme and Originality (25%)


  * Business Case and Pitch presentation (25%)


  * IBM Cognitive and Cloud Enabled (25%)


  * Completeness (25%)


**Bangalore event:**

Bangalore hackathon held at Persistent Systems office in Eco Space, Bellandur. From a total of 20 teams with 70+ participants, below teams secured the winner and runner up positions.




  * First place - Artificial Quotient - DXC, Cognizant, and 2 students


  * Second place - Deloitte


  * Third place - Smart Agriculture - DXC


![IBM Cognitive Hackathon India]({% asset_path "ibm-cognitive-hackathon-india-pune-bangalore-2017.jpeg" %}){:class="img-responsive lazyload"}


# Hackathon resources


Each team was provided with a Dragonboard 410c for building their IoT solution; however, there were cases where the organizers allowed teams to use a Raspberry Pi/ or some other SBC’s if they wanted. Apart from the SBC, teams were also provided one TE sensor board which incorporates both [TSYS01](http://www.te.com/usa-en/product-G-NICO-018.html?q=TSYS01) and [MS8601](http://www.te.com/usa-en/product-CAT-BLPS0018.html) sensors.  Hackers used virtual sensors in the [Node Red](https://nodered.org/) platform to simulate hardware which was not available on board.

Teams used this hardware to collect data from their nodes and send it to the Watson IoT platform for doing analytics. Instructions for using the Dragonboard TE board were given in the following link:




  * [https://developer.qualcomm.com/event/ibmhack](https://developer.qualcomm.com/event/ibmhack)


  * [https//www.96boards.org/go/hackathon-indiasummer2017/](https//www.96boards.org/go/hackathon-indiasummer2017/)


In addition to the online resources, representatives from Linaro/96Boards, Arrow and IBM were there to help hackers when they got stuck.

**Use of Dragonboard resources:**




  * Apart from connecting the sensors, hackers also used the onboard Wifi to connect to the IBM Bluemix cloud.


  * One of team's used onboard GPS to demonstrate user tracking. But, due to an indoor venue, getting the coordinates seemed tedious.




# The good, the bad, the ugly…


I was so enthralled by the ideas which flooded in from the hackers. While most of the ideas are related to connecting things to the internet, they transferred this ideology to really great prototypes.


## **Winners - Pune:**


The team from ‘Asian Paints’ won the Pune hackathon with an application to provide an integrated customer experience for paint selection using the Watson speech APIs.


## **Winners - Bangalore:**


Going above and beyond, team **‘****Artificial Quotient****’** showed a way of spreading an Eco friendly Public Bicycle system around Mysore. In a short time, two students from their team developed an Android app which helps manage this Bicycle system effectively.

Team ‘DXC’, showed how to optimize water irrigation, power consumption and manpower through their ‘Smart Farming’ project. They incorporated Zigbee nodes for transmitting data through a mesh network.


## Some challenges


For me, the overall experience was good. There were; however, a few things I would say could be changed. These minor changes would provide an overall better hackathon to both participants and sponsors alike :-)

A few things were learnt as a result of this hackathon. One was the bandwidth requirements can be high since several code libraries have to be downloaded, installed and integrated to create a working product. A dedicated 50Mbit symmetric line for the hackathon that is open to the internet would make things easier. However, given that this might not always be possible due to the IT security policies of the location where the event is being hosted, multiple 4G routers might be a good fallback. This allows developer machines and all boards to be connected seamlessly without the need to go through a login portal.

On the hardware side of things, the TE sensor board (provided to all hackers) limited what the teams could use the Dragonboard 410C board for. The design of the board prevented stacking of other mezzanines on top of it that in turn prevented teams from utilising other kinds of sensors.. There were no onboard level shifters, and even the UART console wasn’t exposed  which prevented access to debug messages. In the future, providing a variety of mezzanine boards that are supported out-of-the-box would allow teams to pick and choose the ones that work best for their application.

The monitors provided to teams were not HDMI capable,  and the provided VGA to HDMI converters didn’t all work reliably.

The 96Boards team will work closely with sponsors and organizers to help ease these pain points for future events.

According to me, most of the issues would have been eliminated if they had used 96Boards resources properly. I hope the organizers have learned from this experience and I expect the future hackathons will be smooth without these issues :-)


# Conclusion


Alright, we are at the end of my hackathon narration :P. For me, this hackathon proved to be a good resource, and I learned a lot from the participants. For most of the hackers, Dragonboard was a new experience. But, with the help of our well crafted [documentation](https://www.96boards.org/products/ce/dragonboard410c/), they were able to work seamlessly. The high level take away for the hackers would be the hands on experience with Dragonboard and IBM Bluemix. As for me,  everything was a take away :-)

I hope you like this post. Do join us in  [OpenHours](https//www.96boards.org/openhours/) every week, and share your experience with 96Boards.



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](https//www.96boards.org/newsletter/)” and our “[Weekly Digest](https//www.96boards.org/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](https//www.96boards.org/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https//discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
