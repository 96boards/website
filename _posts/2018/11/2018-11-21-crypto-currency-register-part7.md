---
title: CryptonNode on 96Boards - Part 7
author: Garam An
date: 2018-11-21 00:00:01+00:00
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 7. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 7
	
This week the basic UI format and functionality was created using Kivy. The wallet screen will display basic stats, and all the transactions to and from the address. The transaction screen needs to be altered a bit in order to include a list of available items to be added on. Once the python scripts for the printer have been tested, it can be joined with the UI to print the address. We are talking with people from Tron to work on rendering the QR code.

(https://drive.google.com/file/d/1GJio6cpoTrAHcOuOlK9En6ET68grgmKu/view?usp=sharing)

We completed to initiate the thermal printer and we got the test printing paper. We were struggling, because the thermal printer was connected perfectly, but it was not working. The cause is two holes, which is “j1” on the thermal printer board. The two holes on the board works as a switch, so we shorted this hole as we connect a wire into the two holes. We will update information and version number in our python code for the thermal printer.

(https://drive.google.com/file/d/1BdjgKI9QjwpEDuPdFhCky8kO1wmXUfcI/view?usp=sharing)


# Conclusion
	
We are much progressive than last week. The user interface for the register side screen is made, we are trying to update for the better user interface. Also, we got the test printing paper, so we could get the information and version number that we need to print out with python on the dragonboard. We will connect dragonboard and thermal printer with python as soon as possible, also complete for the QR code screen. It is going to be better progressive in next week.
