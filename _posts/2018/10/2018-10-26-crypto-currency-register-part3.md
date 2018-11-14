---
title: CryptonNode on 96Boards - Part 3
author: Garam An
date: 2018-10-26 00:00:01+00:00
image:
    featured: true
    path: /assets/images/blog/goal.png
    name: goal.png
    thumb: goal.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 3. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 	

The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.
(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 3

Team was researching for the dragon board 410c and other equipment which are, thermal receipt printer, 3 lcd, etc, and we could find the critical problem that the plan we are going to node for the register. DragonBoard 410c Ram capacity covers only 1 Gb, but the node requests over than 16 Gb to be used. So, we decided that we do not make node, and will connect 3 LCD and thermal receipt printer to the dragonboard 410c. The teammates are embarrassed at first, but we solved as we met several times ourselves and had meeting with mentor Robert.

Team ordered equipment which are levelshifter, LCD, thermal receipt printer, and paper roll for receipt printer. It is used Arduino or Python, size is small, cheap, has so this is the perfect product for our product. Also, we could find the tutorial for this printer, so it makes us more efficient work. The levelshifter makes change the voltage of LCD to 3.3v which is dragonboard 410c voltage.

Mini Thermal Receipt Printer-(https://www.youtube.com/watch?v=x0qBD6LuxzE)

# Conclusion

We were focusing to understand concept, made overall plan, gathering ideas, and trying to be closed with tools and software until now, we are focusing for the software and hardware design since now. It was not easy to understand whole concepts, make overall plan, but we are going to work for week goal, get sweat sleep after going through changes.