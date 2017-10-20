---
author: jennifer.castelino
comments: true
date: 2016-08-19 22:23:18+00:00
layout: post
link: https://www.96boards.org/blog/96boards-openhours-14-recap/
slug: 96boards-openhours-14-recap
featured_image: OpenHours-03.png
title: 96Boards OpenHours 14 Recap
wordpress_id: 16599
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

96Boards OpenHours continued this week with our between season format of holding a casual open hour to allow attendees to ask questions of Linaro's developers.  We started these open session Q&A with our session 10 and continued it this week with session 14.  This was an hour to have people hangout and ask whatever questions people may have about 96Boards.  To watch this weeks’ session go to ([https://www.youtube.com/watch?v=G0w8fN1JvFQ](https://www.youtube.com/watch?v=G0w8fN1JvFQ))

{% include media.html media_url="https://www.youtube.com/embed/G0w8fN1JvFQ?feature=oembed" %}

A couple of week's ago in the hangout Robert shared a link to allow people to submit topics or questions for the developers on the hangout.  The link is:[ https://discuss.96boards.org/t/openhours-topic-suggestion/ ](https://discuss.96boards.org/t/openhours-topic-suggestion/)and Robert will take these suggestions and try to incorporate these into future OpenHours.

This week began by Robert discussing the question from last week about the HiKey board running Android and wondering what the GPIO values were.  Robert found out that the pens for the Debian are the same as the HiKey.  Robert then announced that in September he will be doing a Dragon Board live set-up out of the box, then the next episode after that we will give away some Dragon Boards in a raffle for those on the call.  The call today was very small with fewer people on the call than normal.  A guest on the call had a question about a hack-a-thon they are doing using the Dragon Board, and Robert mentioned a great slide deck with a lot of useful information:  [https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit#slide=id.g14e3d25dac_0_495 ](https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit#slide=id.g14e3d25dac_0_495).  Then there was a battery charging question around the Dragon Board but Robert is still investigating the proper answer to this question.  There was a discussion then on power supplies with the boards, kits and production of boards.

As always there is a lot of good information and resources that was given in the chat below, this is a great place to get more detailed information.

Don't forget about the upcoming Linaro Connect where attendees have an opportunity to meet with Linaro in person and learn a lot more about what is going on in the community.  There are still openings available to attend this conference in Las Vegas, Nevada September 26-30, 2016 --[http://connect.linaro.org/](http://connect.linaro.org/).

Be sure to join us for the next OpenHours  [https://www.96boards.org/openhours/](/openhours/).  Next week during session 13 we will have another open hour to just answer questions.  So join us and bring all your 96Board questions and we will try to answer them all for you.

Please remember, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/wiki), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat.

**Below is the chat log from the OpenHours session today:**












































MB












[https://github.com/96boards/documentation/blob/master/ConsumerEdition/guides/gpio.md](https://github.com/96boards/documentation/blob/master/ConsumerEdition/guides/gpio.md)









































RW












[https://www.96boards.org/documentation/ConsumerEdition/](/documentation/ConsumerEdition/)




















KI












I couldn't get video or microphone working today, but I am here again to ask about the battery charger.




















RW












[https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharing](https://docs.google.com/presentation/d/1RbUkCF6B7c4nH2oSwbcjzR8yFysF2F7pP-NTl8fB-hc/edit?usp=sharing)




















MB












[http://www.batterytender.com/](http://www.batterytender.com/)






















Caio Website link?




















G3












[www.inatel.br/hackathon](http://www.inatel.br/hackathon)




















RW












[robert.wolff@linaro.org](mailto:robert.wolff@linaro.org)




















G3












tks




















KI












a battery charging circuit on a daughter card is my backup plan, but the DragonBoard 410c has PM8916 battery charger, so I would prefer to use that. I've connected a battery to J7 pins 3 & 4, but it doesn't charge when I use the micro USB for ADB.






















or you could have someone reply on the forum






















[https://discuss.96boards.org/t/use-the-charger-in-pmic-to-charge-battery/](https://discuss.96boards.org/t/use-the-charger-in-pmic-to-charge-battery/)




















CP












[http://www.inatel.br/hackathon/](http://www.inatel.br/hackathon/)






















Guys I will have to leave now, but thank you for the conversation and attention!




















MB












[https://www.arrow.com/en/products/dragonboard410cbrillokt/arrow-development-tools](https://www.arrow.com/en/products/dragonboard410cbrillokt/arrow-development-tools)






















[https://www.qualcomm.com/whywait/inventoff?cmpid=brinus1619](https://www.qualcomm.com/whywait/inventoff?cmpid=brinus1619)




















RW












[https://developers.google.com/brillo/](https://developers.google.com/brillo/)




















DM












[https://www.solid-run.com/](https://www.solid-run.com/)




















RW












ty


[https://www.gumstix.com/](https://www.gumstix.com/)






















MB












we need to get the answer for the battery charger Q also






















I personally don't have it




















RW












Yes, I am pinging LK




















KI












cool, thanks




















MB












yes





![](https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif)


















































[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)



Click here to join us for [next OpenHours ](/openhours/)
