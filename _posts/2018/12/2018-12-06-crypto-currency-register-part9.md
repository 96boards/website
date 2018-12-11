---
title: CryptonNode on 96Boards - Part 9
author: Garam An
date: 2018-12-06 00:00:01+00:00
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Dragonboard410c, Crypto, Mining, Node, Business, QR, UCSD, Cryptocurrency, LCD
---
	
# Introductions

Hello! Welcome to the blog Cyptocurrency register part 9. 96Boards pairing up with the UCSD ECE department to develop a register that will allow store owners to accept cryptocurrency. We will be using the dragon board 410c to control the register. 

# Goal 
	
The goal of the project is to make a user-friendly system for both the owner and the customer. There are three displays, one for the business owner, one to display the qr code, and one to list the items bought by the customer, which are all connected to [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/). Customers will be able to pay for their items with a quick scan of the business owner's address. The transferred cryptocurrency is available to check on the business display.

(https://drive.google.com/file/d/1TivwMwU4E6Fjmc7w8QmWdlHgMcOFJngw/view?usp=sharing)

# Work - Part 9
	
We keep developing our project after connection with mini thermal printer. We made UI(user interface) and connected with dragonboard 410c and thermal printer. Now, we can bring information from UI(user interface) such as name of product, amount of the product, and total price of the product to receipt paper of thermal printer. We also made clean the code for the thermal printer. The one left thing is printing the QR code in the receipt. We will put in the code of receipt after generation of QR code of Tron account. Now, the problem is that the libraries to print out png image file and QR code for Arduino and microcontroller printer method, but there is existed only barcode libraries, not existed QR code and image file libraries for the python method that we are using. We are trying to find libraries and module for the png image file or QR code printing.

At the same time, we are working for the PCD 8544 small screen for the QR code. It is directly wired with dragonboard 410c as we put pin into GPIO pin. It is powered on now, but failed to download module and connect with dragonboard 410c. We are still working for this, and it is going to be worked soon after we make module works in the dragonboard 410c

# Test Code for Thermal Printer
	
import adafruit_thermal_printer
import serial

ThermalPrinter = adafruit_thermal_printer.get_printer_class(2.69)
uart = serial.Serial("/dev/ttyUSB0", baudrate=9600, timeout=3000)
printer = ThermalPrinter(uart)
printer.warm_up()

printer.size = adafruit_thermal_printer.SIZE_MEDIUM
printer.justify = adafruit_thermal_printer.JUSTIFY_CENTER
printer.underline = adafruit_thermal_printer.UNDERLINE_THICK
printer.print('Garam Market!')

printer.underline = None
printer.size = adafruit_thermal_printer.SIZE_SMALL
printer.justify = adafruit_thermal_printer.JUSTIFY_CENTER
printer.print('9700 Gilman Dr')
printer.print('La Jolla, CA, 92093')

printer.feed(2)

@Month/Date/Year/Current Time

printer.feed(2)

printer.justify = adafruit_thermal_printer.JUSTIFY_CENTER
@Product	Price	Amount	Total_Price

printer.justify = adafruit_thermal_printer.JUSTIFY_RIGHT
printer.print('---------------------------')
printer.bold = True
printer.justify = adafruit_thermal_printer.JUSTIFY_CENTER
printer.print('Total: ')
printer.bold = False

printer.justify = adafruit_thermal_printer.JUSTIFY_RIGHT
@@TotalPrice

printer.feed(2)

printer.justify = adafruit_thermal_printer.JUSTIFY_CENTER
printer.print('Phone: (858) 622-0067')
printer.print('Email: www.santoriniislandgrill.net')

printer.feed(2)

printer.print_barcode('123456789012', printer.UPC_A)

printer.feed(2)

@QR Code


