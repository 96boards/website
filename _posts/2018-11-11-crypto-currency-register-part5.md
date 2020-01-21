---
title: CryptonNode on 96Boards - Part 5
author: Garam An
date: 2018-11-11 00:00:01+00:00
categories: blog
series: CryptonNode on 96Boards
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 5. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 5

We decided to abandon using their command line tool because the grpc protocol requires more work for ARM. Instead we will be building our own python application that makes simple api calls to Tron using TronGrid. TronGrid is a webpage that allows access to the Tron Network and to the solidity and full node APIs. The app also uses binance APIs for exchange rates. We made fritz diagram for the hardware part, we can make a plan with this diagram. And, we are waiting for USB serial converter that we ordered to connect between dragonboard 410c and thermal receipt printer. After it arrives, we starts to connect those two, we will also connect small screen to show the QR code on the screen. 

(https://globalcoinreport.com/tron-trongrid-live/)

(https://drive.google.com/file/d/1SHi_Scv8WK34AxeTRXt6oimxIF_ADdMK/view?usp=sharing)


# Conclusion

We have some issues to work on the hot wallet in this week because of cross compiling, but we fixed the hot wallet issue. Also, our ordering part did not arrived sooner than we thought, so we are still waiting for the hardware part. The issues that we do not expect always make us very embarrass us, but we could feel the confident and accomplishment after we fixed it.
