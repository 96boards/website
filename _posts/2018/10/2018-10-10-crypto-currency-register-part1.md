---
title: CryptonNode on 96Boards - Part 1
author: Garam An
date: 2018-10-10 00:00:01+00:00
image:
    featured: true
    path: /assets/images/blog/goal.png
    name: goal.png
    thumb: goal.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 1. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

# Work - Part 1

During the first week, the we worked on getting a more solid understanding of cryptocurrency, and researching which coin we would like to use for the project. We settled on using Tron, mostly because it is a new currency that is projected to do well and has a increased capabilities. Tron uses DPOS (Delegated Proof of Stake), which is considered much better because it saves energy and is more efficient when compared to POW. 

The team decided one of three display LCD, which is PCD 8544 for the QR code. This is synchronized with dragon board, there are several resources on the web, the team can tough much easier than other LCD. However, the QR code must be programed, cannot use image, so the team needs to research for the PCD 8544 LCD. Also, the team is researching for the another LCD of three, which is customer LCD that shows how much coin the customer should transfer to the owner cryptocurrency account. The last LCD of three for the owner side, the team decided to use the provided touch screen LCD from the Mentor.

# Slide from this week

{% include media.html media_url="https://www.slideshare.net/GaRamAn1/cryptocurrencyoct8" %}

# Conclusion

We are working on understanding more about the world of cryptocurrency, and we can build a well-designed product. Next week 1 blog will further detail our technical plans.
