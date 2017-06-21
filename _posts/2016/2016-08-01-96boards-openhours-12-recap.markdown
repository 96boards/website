---
author: jennifer.castelino
comments: true
date: 2016-08-01 22:43:35+00:00
layout: post
link: http://www.96boards.org/blog/96boards-openhours-12-recap/
slug: 96boards-openhours-12-recap
title: 96Boards OpenHours 12 Recap
wordpress_id: 16110
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
- Bubblegum
- bubblegum-96
- CE
- Consumer Edition
- Consumer IoT
- DB410c
- Docker
- dragonboard410c
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

96Boards OpenHours continued this week with our between season format of holding an open hour to allow attendees to ask questions of our many developers that are on the hangout.  We started these open sessions Q&A with our session 10 and continued it this week with session 12.  This was an hour to have people hangout and ask whatever questions people may have about 96Boards.  There were many 96Boards developers on the call ready to answer questions from those on the call.  To watch this weeks’ session see below or go to ([https://www.youtube.com/watch?v=dcAv-E3sC7E&feature=em-subs_digest](https://www.youtube.com/watch?v=dcAv-E3sC7E&feature=em-subs_digest)):

https://www.youtube.com/watch?v=dcAv-E3sC7E

We began the hangout with Robert sharing a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ http://www.96boards.org/forums/topic/openhours-topic-suggestion/ ](http://www.96boards.org/forums/topic/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.  The hangout then continued with taking attendee questions.   The first one was regarding how to make a Bluetooth to headphone profile and this was a problem that was more involved than at first glance.  The team spent quite a bit of time diagnosing the issue and working on different solutions for this problem.  The team decided to take this issue offline to try to solve.  Then Mark discussed the way he is running the Dragon board off of a battery to see if it can keep the load of the board and he can have an uninterrupted power supply.  The next question was whether you can access GPIO pins programatically on a Hikey board that is running Android? Or is it only possible to do it on a Hikey board with Debian Linux?  Robert has not tried this on a HiKey but he has tried it on the Dragon board.  He explained how to do it but said that Android makes this difficult to do because permissions are not always there.  There is a  work around  for this but it can be risky.  Below in the chat log is more information and some resources links given about these topics.

Don't forget about the upcoming Linaro Connect where attendees have an opportunity to meet with Linaro in person and learn a lot more about what is going on in the community.  There are still openings available to attend this conference in Las Vegas, Nevada September 26-30, 2016 --[http://connect.linaro.org/](http://connect.linaro.org/).

Be sure to join us for the next OpenHours  [http://www.96boards.org/openhours/](http://www.96boards.org/openhours/).  Next week during session 13 we will have another open hour to just answer questions.  So join us and bring all your 96Board questions and we will try to answer them all for you.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**




















RW












[bit.ly/2aphhjX](http://bit.ly/2aphhjX)




















[http://www.96boards.org/forums/topic/openhours-topic-suggestion/](http://www.96boards.org/forums/topic/openhours-topic-suggestion/)




















MB












nope




















RW












[https://goo.gl/forms/pnxEysxLYquRcZKw2](https://goo.gl/forms/pnxEysxLYquRcZKw2)




















DT












NY: Yes. That's exactly the problem I was having too (I think I put that via e-mail).





















RW












I am going to go down the list! We will get to everyone questions.





















DM












Just wanted to report one 404 link in 96boards [https://www.96boards.org/db410c-getting-started/Quickstart/README.md/](https://www.96boards.org/db410c-getting-started/Quickstart/README.md/)   there linux guide is a 404.. I had shared a friend but did not work .. if we could fix that will help




















Deepak it works for me




















can you please try again




















RW












It works for me too




















DM












Actually in that page there is a linux guide..




















that points to a pdf.. which gives 404..




















the actual link is [https://www.96boards.org/dragonboard410c/LinuxUserGuide_DragonBoard.pdf](https://www.96boards.org/dragonboard410c/LinuxUserGuide_DragonBoard.pdf)




















Where did you get the pdf link from?




















DM












[https://www.96boards.org/db410c-getting-started/Quickstart/README.md/](https://www.96boards.org/db410c-getting-started/Quickstart/README.md/)




















there there is a section called "linux"




















Thanks, we will fix that




















T












a car battery?




















(haha)





















G3












Hi, I have a question.  I was wondering whether I can access GPIO pins programatically on Hikey board that is running Android? Or is it only possible to do it on Hikey board with Debian Linux ?




















RW












[https://www.coursera.org/specializations/internet-of-things](https://www.coursera.org/specializations/internet-of-things)




















G5












it is lock on payment for the next courses




















VC












init.hikey.rc is the file you need i think




















RW












[https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharing](https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharing)




















DM












Request try with 644 and let us know ...




















T












NICE! :-d




















MB












Is this the latest available? I notice ubuntu is much older than debian? [https://builds.96boards.org/releases/dragonboard410c/linaro/](https://builds.96boards.org/releases/dragonboard410c/linaro/)




















T












w00t! sounds good




















MB












one above




















ok thanks, I would have used the ubuntu.... now I know better



















[![OpenHours-04](/assets/images/blog/2016/05/OpenHours-04.png){:class="img-responsive"} ](http://www.96boards.org/openhours/)[n](http://www.96boards.org/blog/installing-docker-aarch64-96boards-ce/)


