---
title: CryptonNode on 96Boards - Part 6
author: Garam An
date: 2018-11-12 00:00:01+00:00
categories: blog
series: CryptonNode on 96Boards

tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 6. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 6
	
The team tried to connect thermal receipt printer with dragonboard 410c. There are actually two way to connect, which are using the Arduino IDE and Python, but we are not going to use Arduino IDE. Arduino is much easier way to connect, but we do not want to use more equipment on the printer and pay more for the Arduino chip. So, we installed python3 and circuitpython open sources to install thermal printer module in the terminal. After we installed the open sources, we installed library bundles to initiate the thermal printer. We also wrote the code for the test printing, and run this. At this time, we could find the error to run. It cannot read the module that we want to use. We assume that there is a problem while installing of library bundles. We are going to re-install the library bundle to resolve this error, we are going to write formal receipt paper code with QR code after test printing.

The team also making the UI for owner register side screen. UI is going to be simple, there are included the name of product, amount, tax, total balance, and check button at the bottom on screen. When the owner clicks the check button, the receipt is going to be printed out with QR code. The purchase can be completed when buyer scan the QR code with Tron.

# Conclusion
	
Our team tried hard to complete the connection between thermal receipt printer and dragonboard 410c, but we could not get a satisfactory result. There are some errors that we did not expect, that error make us embarrassing, makes delay the completion time. We are going to keep trying to resolve this error first, we are going to connect the thermal printer and make UI for the register screen.
