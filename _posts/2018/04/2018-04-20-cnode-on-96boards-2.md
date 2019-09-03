---
title: CryptoNode on 96Boards
author: Andrew Betts
date: 2018-04-20 22:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/ucsd.png
    name: ucsd.png
    thumb: ucsd-thumb.png
categories: blog
tags: 64-bit, 96Boards, Crypto, UCSD
---

# Introduction
Hi! 96Boards has partnered with UCSD ECE to begin development into Cryptocurrency space. The project is currently known as cryptonode. This project seeks to deliver a more intuitive userspace to cryptocurrencies and help spread adoption of the crypto platform. In order to do so, the [Dragonboard410c](/product/dragonboard410c/) will be running the different required softwares and present and GUI to the user

# Work and Roadmap
In the past week, a bunch of research has occured. The team has updated their knowledge of the working of cryptocurrencies in hope of establishing a clear path to the end goal of a great user interface. We have tenuosly decided on coin to move forward with. This coin is known as Smart Cash (SMART) low Tx fees, instant payment, and low cost per coin make this a desirable target for implementation of an adoptable platform for users. Furthermore additionaly currency can be generated through masternode operation (requiring an intial investment of 10k coins, around 2k U.S. dollars currently) which is feasible on the Dragonboard 410c. Even if interest pushes this out of the range of a normal investor, its previous ease of payment still make it a prime choice for wallet implementation. Moving forward, work will be done to find cli (command line interface) tools for the coin and implementation of a transaction between people. Additionally, I believe work on the wallet GUI will begin as our team familiarizes themselves with Qt or any other drafting framework (I myself am familiar with Java development w.r.t JFrames as well as the Android interface and a brief amount of PyQt so hopefully it isn't a big stretch. The two tasks can be worked on independently  and the GUI can execute placeholder bash scripts that we will eventually plug and play with the real ones.

In terms of progress with linux on the Dragonboard 410c itself, we found issue with the wireless drivers on the board and will consider using a usb-ethernet connector or even a usb wifi card (given the drivers can be easily installed). This will solve some of the issues we are currently encountering with wlan0 occasionally disabling itself. However, we were able to successfully get WPA2-Enterprise working on the device although the exact mechanism of how I achieved this is somewhat of an enigma to me despite the fact that I was the one who got it working. (wpa-supplicant wasn't running correctly I trust that it had something to do with me restarting a few network services and adding a new conf file for the supplicant) It would be nice if this process didn't have to be repeated. We might just meet at a personal residence rather than the school campus to avoid WPA2-Enterprise all together for ease of development (Most end users will not be using this scheme).

# Slides from the week

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/oFZUpG66fuhQEV" %}

# Conclusion
Now that the team is up-to-date on crypto operation, we can finally get into the meat of the project and aim for some sort of prototype function. It is my hope that we can implement it in the following week. With the prototype working for at least one coin we can move onto extended functionallity in hardware such as a display or battery shield. Thanks for reading!
