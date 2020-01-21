---
title: CryptonNode on 96Boards - Part 2
author: Garam An
date: 2018-10-23 00:00:01+00:00
image:
    featured: true
    path: /assets/images/blog/goal.png
    name: goal.png
    thumb: goal.png
categories: blog
series: CryptonNode on 96Boards
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog  Cyptocurrency register part 2. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal

The goal of the project is to make an user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner’s address.  The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work-Part2

We thought that the most important thing to start is familiar with Tron. During this second week, we purchased Trons to be used and understand transaction, and to get data that we need to put in the cryptocurrency register such as QR code, public and personal key.

Also, we decided to purchase thermal receipt printer. The QR code, the value of Tron and total price are going to be printed on the receipt. We expect the future cryptocurrency market is going to being wider, this register will be exactly replaced instead of cash register. There are lots of market places that they need to print receipt for the customers like restaurant.

Therefore, we decided to order three parts, which are PCD8544(LCD), Level shifter, and thermal receipt printer. PCD8544 is to show the QR code on the LCD screen, thermal receipt printer is for the customer receipt when they purchase items in the mart or restaurant. Level shifter is for the dragon board and PCD8544, because it requires 3.3v to use PCD8544 LCD, but dragon board uses 1.8v and 5v. The level shifter will resolve this problem.


PCD8544
  https://drive.google.com/file/d/18GzxNY-8HBpSxj9d5jD6cPBQpmeaQfIk/view?usp=sharing
Level Swifter
  https://drive.google.com/file/d/1qKCRigTB78ruHQCyJIYF9mZWEFyTiPGt/view?usp=sharing
Thermal Receipt Printer
  https://drive.google.com/file/d/1-vme257ekk1WUO14i3xwAApHj9FfcH1d/view?usp=sharing


# Conclusion

We were focusing to understand concept, made overall plan, gathering ideas, and trying to be closed with tools and software until now, we are focusing for the software and hardware design since now. It was not easy to understand whole concepts, make overall plan, but we are going to work for week goal, get sweat sleep after going through changes.


