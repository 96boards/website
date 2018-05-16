---
title: CryptoNode on 96Boards
author: Andrew Betts 
date: 2018-05-16 22:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/ucsd.png
    name: ucsd.png
    thumb: ucsd-thumb.png
categories: blog
tags: 64-bit, 96Boards, Crypto, UCSD
---

# Update On CryptoNode
It's been a while since the last update but welcome back to the CryptoNode project. Practicality brainstorming has occurred in the weeks since the last update and as such we are honing in on a design. Parts are ordered so a tangible unit is in the works.

# Updated Design
1. Crypto Functions
	* Wallet has been implemented using electrum-smart
	* Transactions are working
	* Working on an offline analogue to securely sign transactions from device
2. Battery
	* Battery has been selected and charging circuit has been designed
	* Need to implement on protoboards
3. Display
	* 16x4 Serial Display has been ordered to display info without using the hdmi out
	* Driver board that came with the display works over IIC
	
# Cryptofunctions
More in depth into the implementation of the Crypto Wallet.

Electrum-smart is the Smartcash clone of the popular electrum wallet used with bitcoin. It operates by a combination of bash (linux scripting) and python calls in the OS. These calls allow us to implement functions such as creating send requests, signing and creating transactions, and broadcasting these transactions for verification. By running these scripts through the commandline rather than the provided gui, you are able to extend functionality  to any program that can execute scripts. A current example of such would be the posibility of a cold storage wallet on the Dragonboard. While the dragonboard would remain offline, it would store the wallet of the user. A usb or other storage device can be used to store transactions or requests and upon insertion into our device, it would sign the transactions. This is done in debian linux by editing the mounting rules listed under the UDEV service.
By specifying an ADD function and inputting our USB product and vendor id, we can effectively create a personal usb drive that our device can respond to and sign. A problem currently with this method is script execution from the UDEV service blocks the mounting of the storage drive until our script finishes and we can't access the files. Potential work arounds include different methods of spawning the process to a new thread.

```bash
#!/bin/bash
#Any function that works from electrum can be run in bash in this way
./electrum-smart create
#alternatively
bash electrum-smart sendto address amount
#And so on for wallet implementation.
```
The python backend of the electrum service may need to be implemented as prompts in python cannot call arguments piped through bash. Ways of solving this issue include adding a few custom flags so the initial bash passes our arguments, or prompting graphically through TKinter or some other python library.

Lastly on the Crypto end, a rudimentary stock ticker for cryptocurrencies has been made. It calls the api of binance through the REST API and edits the returned JSON values to obtain information on each coin. The idea was to use such crypto data to display useful parameters on the Display such as wallet balance and conversion rates to FIAT or to BTC.

![TICK](https://i.imgur.com/6qzB1AQ.png)

Ticker

# Parts Ordered

[![LCD](https://images-na.ssl-images-amazon.com/images/I/817viZaVlCL._SL1500_.jpg)](https://www.amazon.com/SunFounder-Serial-Module-Arduino-Mega2560/dp/B01GPUMP9C/ref=sr_1_1?ie=UTF8&qid=1525829842&sr=8-1&keywords=16x4+lcd)
LCD

[![Bat](https://media.digikey.com/Photos/Sparkfun%20Elec%20%20Photos/MFG_PRT-13856.jpg)](https://www.digikey.com/products/en/battery-products/batteries-rechargeable-secondary/91?k=&pkeyword=&pv33=722&FV=ffe0005b%2C670004a&quantity=0&ColumnSort=0&page=1&pageSize=25)
Battery




# Overall Review of Project

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/LKeGZtIu5QRraD" %}

# Conclusion
While there is still a lot of work to be done, a main goal of completing a bash crypto-currency wallet has been implemented. Moving forward extending the functionality of the wallet becomes important and hardware considerations come into play with programming the display over the GPIO headers as well as calling the GPIO headers from linux to modulate our display. Furthermore an enclosure to hold all the components would be ideal and as we have a good idea of the parts going into the final product, work can start on that end.