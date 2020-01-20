---
title: CryptonNode on 96Boards - Part 4
author: Garam An
date: 2018-11-06 00:00:01+00:00
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

Hello! Welcome to the blog Cyptocurrency register part 4. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 	

The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 4

Finally, all the parts that we ordered arrived. We are working on the thermal receipt printer part first. To connect the thermal receipt printer and dragon board, we will use usb serial converter. The connection with usb serial converter brings lots of efficiency like complexity and time than GDI pin. There is a problem If we use GDI pin. The pin might be unplugged when the dragonboard or printer moves. On the usb serial converter, there are 5 pins, also printer wires have 5 pins. We expect that this printer works perfectly.

For the software, we are developing an interface that will allow the store owner to setup their wallet, log in to their different accounts, and have all the functionality of a traditional register. The basic interface with the network is done using the wallet CLI.

(https://github.com/tronprotocol/wallet-cli)
 
USB Series Converter-(https://drive.google.com/file/d/1o5cMovrHqT_DxRxzEUpCDVXJ8iMPqxhC/view?usp=sharing)

# Conclusion

We have made less progress this week than we have worked on time. It is taken lots of time because we are researching about this and testing at the same time. However, we keep working on this hard, this project is going to be developed much, when our working and researching goes up to the specific step. We are working on testing this program on the dragonboard and connecting thermal receipt printer and dragonboard in this week.
