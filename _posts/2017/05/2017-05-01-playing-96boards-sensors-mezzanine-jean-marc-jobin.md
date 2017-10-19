---
author: sdrobertw
comments: true
date: 2017-05-01 18:43:46+00:00
layout: post
link: https://www.96boards.org/blog/playing-96boards-sensors-mezzanine-jean-marc-jobin/
slug: playing-96boards-sensors-mezzanine-jean-marc-jobin
featured_image: Featureimage.jpg
title: Playing on the 96Boards Sensors Mezzanine with Jean-Marc Jobin
wordpress_id: 20320
categories:
- blog
tags:
- '960'
- 96Boards
- Android
- AOSP
- arduino
- ARM
- arm32
- arm64
- ATMega
- ATMega328
- AVR
- Community Minute
- DragonBoard
- DragonBoard 410c
- GPIO
- HD44780
- HiKey
- HiKey960
- I2C
- input output
- IO
- Jean-Marc
- Jobin
- Linaro
- Linux
- Mezzanine
- OpenHours
- Qualcomm
- Robert Wolff
- Seeed Studio
- Snapdragon
- temperature sensor
- TMP102
---

# Introduction


**- With help from guest Author, [Jean-Marc Jobin](https://twitter.com/jmjobin)**

_I would like to start off by thanking Jean-Marc for providing all of the necessary materials for this blog. Including draft material, images, BoM, preliminary instructions and code._

In last week's episode of 96Boards OpenHours we had yet another Community Minute with Jean-Marc Jobin. In this segment Jean-Marc talked about some fun stuff he had been doing with the 96Boards Sensors Mezzanine from SeeedStudio. One of the cool things about this mezzanine is that is has a AVR ATMega 328 chip on board (pretty much the equivalent of an Arduino controller). Jean-Marc decided to take advange of this particular feature on the mezzanine to use it for Arduino based applications only.

The board was placed in what he is calling a "Stand alone" mode (not connected to the DragonBoard) and used to quickly read out temperatures using the thermometer sensor listed in the hardware requirements below.

Jean-Marc assures us that using the ATMega328 chip on the sensor mezzanine is quite easy. Not only does it come with a rich library of external sensors and devices, but they are also quite easy to implement and very versatile, a simple way to control not only GPIO but I2C as well.

Following the steps below, you will be able to build and play with the thermometer on the mezzanine using the ATMega328 controller. These steps will seem trivial to those who already have Arduino experience and slightly more complex for anyone who has never used and Arduino or worked with embedded systems. If you are trying to break into the "Arduino" world, while also crating a path toward working with 96Boards, you are in the right place!

**Please note:** This set of instructions is intended for those using Android as a primary operating system. There are other easier ways to access and program the ATMega 328 chip when using Debian, though this method will also work.

{% include media.html media_url="https://www.youtube.com/embed/Qll2MPDj_wc" %}


# Hardware Requirements






  * 1 x [96Boards Sensors Mezzanine](/product/sensors-mezzanine/) from Seeed Studio


  * 1 x USB Tiny ISP (Many different models available online)


  * 1 x [TMP102 Thermometor sensor](https://www.sparkfun.com/products/13314)


  * 1 x [HD44780](https://www.seeedstudio.com/LCD-16%2A2-Characters-Green-Yellow-back-light-p-62.html)


  * 1 x Potentiometer 10K Ohm (for display contrast control)


_**Note: The display is optional, we can also display the temperature by using a serial USB device connected to your PC**_


# Instructions




### **Step 1: Locate P6 Connector on your Sensors Mezzanine**


When running Android on the DragonBoard 410c, the easiest way (if not the only way) to program the AVR ATMega 238 chip is to use a USBTinyISP programmer. Before connecting any cables, be sure to identify the location of PIN 1 on the P6 connector on your Sensor Mezzanine. This connector can be found between your "I2C0" and "EF" Grove connectors toward the bottom middle of your board.

![Sensors Mezzanine Image Step 1]({% asset_path "Step1-sensors-mezzanine.png"%}){:class="img-responsive lazyload"}


### **Step 2: Provide power to your Sensor Mezzanine (without baseboard 96Boards)**


The power (5VDC) will be supplied by the programmer itself, no need to connect your mezzanine to any 96Boards base board at this point.

Please note: In this example, the USBTinyISP Jean-Marc is using, it has a tiny yellow jumper. This jumper (when connected) will provide power to the mezzanine. If you decided to use a 96Boards (as baseboard for your mezzanine) you will need to remove this jumper.

![Sensors Mezzanine Image Step 2]({% asset_path "Step2-sensors-mezzanine.png"%}){:class="img-responsive lazyload"}


### **Step 3: (RECOMMENDED STEP) Remove resistor R4 from your Sensor Mezzanine**


If anyone plans to use their mezzanine excursively and with the Android OS in the future, Jean-Marc recommends you remove resistor R5. This resistor is connected to the serial port UART0 RTS (request to send) and will reset the ATMega328 when programming the mezzanine with DragonBoard under Linux.

![Sensors Mezzanine Image Screenshot]({% asset_path "Screenshot-sensors-mezzanine.png"%}){:class="img-responsive lazyload"}

Not knowing the state of the 96UART0_RTS with Android, this may reset our ATMega328 permanently.

**Note: Another way would be to disable the UART- RTS/CTS. This is not easy to do since "stty" is not part of standard Android.**

Jean-Marc has told us that he will come back to talk more about the UART0 for 96Boards running Android. There are still some issues he is working on to resolve.


### **Step 4: Install USBTinyISP drivers on your PC**


A good setup guide can be found **[here](https://learn.adafruit.com/usbtinyisp/drivers)**

**Note: Before moving on, please spend some time to test and ensure a good installation of your USBTinyISP.**


### **Step 5: Install Arduino IDE on your PC (Windows, Mac, or Linux)**


Instructions and download links can be found [here](https://www.arduino.cc/en/Main/Software)

Note: Once your Android IDE is installed and setup, check to see if you can find the USBTinyISP programmer. If you have trouble finding this, please refer to the Arduino tutorial for instructions on how to install this library.


    "Tools" ---> "Programmer" ---> "USBTinyISP"




### **Step 6: Connect the temperature sensor to A_I2C. This is the Grove connector located at P9.**


![Sensors Mezzanine Image Step 6]({% asset_path "Step6-sensors-mezzanine.png"%}){:class="img-responsive lazyload"}

This sensor uses the I2C protocol. Arduino has several libraries for this sensor, though you will have to install this one. Please refer to the Arduino tutorial for instructions on how to install.


    #include <Wire.h>




### **Step 7: Install compatible LCD screen**


To display the temperature, Jean-Marc used the "Immortal" LCD Hitachi HD44780. This is a very cheap solution.

He refers to this LCD screen as immortal because he has used it for about 30 years on microcomputer (8085, Z80, 8051) and it is still used and available today (much cheaper). He also still has some in spare boxes!

This particular display has its connections in parallel 8 to 4 data bits. In the past they used to connect it on the micro-controller bus together with the memory and other parallel devices.

In this case, he has connected it to the Arduino GPIOs and used the 4 bit parallel and 2 bits for the control. Some other types can be connected  on the serial port or by I2C, Jean-Marc chose the standard for this tutorial.

You can check out [**this link**](https://www.arduino.cc/en/Tutorial/LiquidCrystalDisplay) to read more about the required cabling.

![Sensors Mezzanine Image Step 7]({% asset_path "Step7-sensors-mezzanine.png"%}){:class="img-responsive lazyload"}


### **Step 8: Open the Arduino IDE on your host machine and copy the sketch code below.**


**Note: this code was provided by Jean-Marc Jobin for the purpose of the OpenHours community minute and this blog.**

```cpp

    #include <LiquidCrystal.h>  // used for the LCD Hitachi HD44780 controller
     #include <Wire.h>           // I2C library used for the temperature sensor

    // initialize the library with the numbers of the interface pins
     LiquidCrystal lcd(12, 11, 5, 4, 3, 2); //Register Select, Enable, and 4 data bit

    //TMP102 I2C (TWI) address in HEX
     int tmp102Address = 0x48;

    char message[] = "Received ' '";//for the serial test

    // the setup function runs once when you press reset or power the board
     void setup() {
     Serial.begin(9600);//use for the serial test UART0

    // set up the LCD's number of columns and rows:
     lcd.begin(16, 2);
     // Print a message to the LCD.
     lcd.print("Sensors ver 0.0");

    Wire.begin();//start I2C
     delay(1000);//going slow we have time

    // initialize digital pin LED_BUILTIN as an output.
     pinMode(LED_BUILTIN, OUTPUT);//reserve the pins for the 4 bits output

    pinMode(PD4, OUTPUT);//LED of the Sensor Mezzanine

    Serial.begin(9600);//only for the serial UART0 test
     Serial.println("Press a key, and I will echo it back");//serial test
     }

    // the loop function runs over and over again forever
     void loop() {

    //below is used to test the serial UART0 port (which cannot make for Android)
     if(Serial.available()) {
     message[10] = Serial.read();
     Serial.println(message);

    lcd.setCursor(0,0);//display LCD
     lcd.print(message);
     }

    digitalWrite(PD4, HIGH);//mezzanine LED

    float celsius = getTemperature();//get the temperature (so easy :-))

    digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
     delay(1000);                       // wait for a second
     Serial.println("hello1\n"); //test serial UART0 can be eliminated if we do not want to test the serial
     lcd.setCursor(0, 0);// set LCD cursor at character 1 line 1 (all start at 0)
     lcd.print("Temperature:   "); //write this to the first line
     digitalWrite(PD4, LOW);

    digitalWrite(LED_BUILTIN, LOW); // turn the LED OFF
     delay(1000); // wait for a second

    Serial.println("hello2\n"); //test serial UART0 (can be eliminated)
     lcd.setCursor(0, 1); //set cursor at character 1 line 2
     lcd.print(float(celsius));
     lcd.setCursor(6, 1);//set cursor at character 7 line 2
     lcd.print("C"); //I show Celsius I am in Europe :-)

    delay(1000);

    }

    //nice function to get and compute the temperature
     float getTemperature(){
     Wire.requestFrom(tmp102Address,2);

    byte MSB = Wire.read();//first read is MSB
     byte LSB = Wire.read();//second read is LSB

    //it's a 12bit int, using two's compliment for negative
     int TemperatureSum = ((MSB << 8) &#124;LSB) >> 4;

    float celsius = TemperatureSum*0.0625;
     if (celsius > 128)
     {
     celsius = celsius - 256; // for negative temperatures
     }
     else
     celsius;
     return celsius;
     }

```

Compile and check for any errors! Then you will want to upload the sketch by selecting the following:

"sketch" ---> "Upload using Programmer"

At this point you should be done!

It is possible to add a USB to Serial port FTDI and plug it into the Arduino connector (P2, Pin 1 and 2). Doing this, you will also be able to test the serial port. Please take some time to look over the above code.

![Sensors Mezzanine Image END]({% asset_path "END-sensors-mezzanine.jpg" %}){:class="img-responsive lazyload"}


* * *

# **Resources**


**For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!**

**[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)**

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “**[Monthly Newsletter](/newsletter/)**” and our “**[Weekly Digest](/newsletter/digest/)**”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the **[96Boards forums](https://discuss.96boards.org/)**, **[96Boards documenation landing page](https://github.com/96boards/documentation/)**, and/or **[Freenode IRC](http://webchat.freenode.net/?channels=%2396boards)** channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!

**Other Guest Blogs by Jean-Marc Jobin:**




  * **[OpenHours "Community Minute" - Testing the 96Boards Audio Mezzanine](/blog/openhours-community-minute-testing-96boards-audio-mezzanine-jean-marc-jobin/)**
