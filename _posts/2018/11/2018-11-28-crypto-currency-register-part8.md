---
title: CryptonNode on 96Boards - Part 8
author: Garam An
date: 2018-11-28 00:00:01+00:00
categories: blog
series: CryptonNode on 96Boards
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 8. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 8
	
This week we have a qr code and UI working. There are some final touches to add to the UI, and a login system needs to be added. The QR code is ready to be integrated with the printer.

In this week, we finally complete to connect thermal receipt printer with Dragonboard 410c using Python. There were module errors, power errors, linux operating system problems, etc, it made us struggle, we resolve each of those problems as we research and keep trying. For now, we will update the code to be written the information, that needs on the receipt, also we will put the QR code for the Tron transaction at the bottom of receipt. We will connect the small screen PCD 8544 to the Dragonboard 410c to show the QC code on the screen.

# Test Code for Thermal Printer
	
import adafruit_thermal_printer

import serial
 
ThermalPrinter = adafruit_thermal_printer.get_printer_class(2.67)

uart = serial.Serial("/dev/ttyUSB0", baudrate=9600, timeout=3000)
 
printer = ThermalPrinter(uart)

printer.warm_up()
 
printer.feed(2) 

printer.print('Hello world!')

printer.feed(2)

