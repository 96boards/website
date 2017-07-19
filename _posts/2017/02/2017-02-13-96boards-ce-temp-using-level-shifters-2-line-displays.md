---
author: davidm
comments: true
date: 2017-02-13 21:18:23+00:00
layout: post
link: http://www.96boards.org/blog/96boards-ce-temp-using-level-shifters-2-line-displays/
slug: 96boards-ce-temp-using-level-shifters-2-line-displays
featured_image: 2BOBRed.jpg
title: 96Boards CE what temp is it? Using level shifters and 2-line displays
wordpress_id: 19924
categories:
- blog
tags:
- 32-bit Linux
- 64-bit Linux
- 96Boards
- aarch32
- aarch64
- ARM
- ARMv8
- Consumer IoT
- DB410c
- dragonboard410c
- HiKey
- home automation
- Linaro
- Reference Platform
- rpb
---

## Sensors & 96Boards


So last week I said that I’d start on hooking sensors directly to a CE 96Boards. Of course all of the CE 96Boards are 1.8v I/O, so I thought I’d start with a level shifter for i2c lines. I have a Grove-LCD RGB Backlight device that came with my Grove Sensors Board kit. Using the Grove Sensors board it works quite nicely with any CE 96Boards. But I want to set this up with 1.8v, 3.3v and 5v sensors and devices. And I don’t want to have to use the Grove Sensors Board because I eventually might want to spin a specific board for my home automation needs (we will see how that goes in the future).

So I ordered a few items from SparkFun, since I’m known for letting the magic white smoke out I ordered 2 of each item.
<table >
<tbody >
<tr >

<td >Qty
</td>

<td >SKU
</td>

<td >Description
</td>
</tr>
<tr >

<td >2
</td>

<td >BOB-11771
</td>

<td >Voltage-Level Translator Breakout board - TXB0104
</td>
</tr>
<tr >

<td >2
</td>

<td >BOB-12009
</td>

<td >Logic Level Converter - Bi-Directional Board
</td>
</tr>
<tr >

<td >2
</td>

<td >SEN-11931
</td>

<td >Digital Temperature Sensor Breakout Board - TMP102
</td>
</tr>
<tr >

<td >2
</td>

<td >SEN-12039
</td>

<td >Barometric Sensor Breakout Board - T5403
</td>
</tr>
<tr >

<td >2
</td>

<td >SEN-13322
</td>

<td >Soil Moisture Sensor
</td>
</tr>
<tr >

<td >2
</td>

<td >SEN-13763
</td>

<td >Humidity and Temp Sensor Breakout Board - Si7021
</td>
</tr>
</tbody>
</table>
![Coins and board image]({% asset_path "96boards-ce-temp-img-1.jpg" %}){:class="img-responsive lazyload"}

First I started with the BOB-12009 Logic Level Converter, it’s documented to work from 1.2v - 5.5v it’s bidirectional which is a requirement for ic2 communications. It’s a tiny Red board with a total of 12 holes to be hooked up if desired. There are 6 holes on the high voltage side (high voltage being higher than the low voltage side) and 6 holes on the low voltage side. Since I am using this on a breadboard, out comes my soldering iron and I reach into my electronics junk kit for some single in line snap off pins. Snap off 2 6 pin segments and pop that into my breadboard to hold it for soldering. Now some folks are afraid of soldering and I can understand that, hot metal, smoke, plastic melts when you don’t want it too, etc. But in this case it’s easy, you are not soldering components on just the 12 pins. I won’t say impossible to mess up but it is difficult.

What you’ll need is an electronics soldering iron, a low wattage one will work if you are required by law to use Lead Free Solder you might need a medium wattage soldering iron, you will need some liquid Rosin Flux (well to be truthful you don’t actually need this but the Rosin Flux is what makes this almost impossible to mess up so skip it at your own risk). I have a small plastic jar full (100ml) that I’ve had for years, it goes a VERY long way. You’ll need a small damp/wet sponge to clean the tip of the soldering iron and you’ll need some solder. In the US I can still use lead solder and I use 63/37 solder vs 60/40 mix. The 63/37 solder has no plastic state it goes from a hot liquid to a hot solid instantly no plastic state. The 60/40 mix has a plastic state that can result in a cold solder joint should you bump it at the wrong time as it’s cooling. In the EU and UK I think you can only use Lead Free Solder (I hate that stuff, it is hard to work with and requires a hotter soldering temperature), good luck, you need the Rosin Flux even more.

{% include media.html media_url="https://www.youtube.com/embed/uVdRDWuIn1Y?list=PL-NF6S9MM_W3jC6vE9XtdbZvMWAMX2E8" %}

OK, soldering done, I plugged the device into my working breadboard, you need to pay attention to the board, one side is the high side, and the voltage plugged into this side must always be higher than the voltage plugged into the low side. The center pins are the voltage and ground pins, ground is shared on both sides of the device. The other 4 pins on each side are the level shifting pins. LV1 - LV4 and HV1 - HV4. LV1 is connected to HV1 and so on. First I brought over Ground, 1.8v, and 5V from the 96Boards. You need to plug in jumper wires to pins 35 (1.8v), 37 (5v) and 39 (Ground) and plug them into your breadboard. Then jump a wire from the ground on one side of the breadboard to the other side of the breadboard. That will make it easier to plug things in with less confusion. Now insert a jumper wire into the 1.8v rail and plug it into the LV pin and insert a jumper wire into the ground rail next to the 1.8v rail and plug it into the ground pin next to the LV pin. Next insert a jumper wire into the 5v rail and plug it into the HV pin and insert a jumper wire into the ground rail next to the 5v rail and plug it into the ground pin next to the HV pin. Congratulations you are ready to do some level shifting from 1.8v to 5v but there are some limits. Level shifters are low current devices so they don’t always work correctly if you for example plug in an LED, many LED’s pull more current than the level shifters can put out and odd things happen. So if you need to control LED’s or something like them use a buffering transistor or some kind of driver chip as the interface.


## Testing i2c Bus with the Grove-LCD RGB Backlight device


I want to use the i2c(0) bus so let’s get that hooked up, you will need to plug jumper wires into pins 15 (SCL 0) and 17 (SDA 0) of the 96Boards, plug those into the LV1 (SCL) and LV2 (SDA) pins on the level shifter. I’m going to use the Grove-LCD RGB Backlight device and to make it easy I’m going to plug a grove wiring bundle into the Grove connector. The Grove wire bundle is Black (Ground), Red (5v), White (SDA), and Yellow (SCL). So plug 2 jumper wires into the 5v and ground rails and plug them to the red and black wires as appropriate. Plug a wire into HV1 (SCL) and the other end into the Yellow wire in the Grove wiring bundle and plug another wire into HV2 and the other end into the White Wire in the Grove wiring bundle. Now you are set, have a look at the below video of me wiring up the hardware and make sure yours looks somewhat like mine, the actual jumper cable colors are not really important, they just help getting the right wire into the right connection.

![Image 2]({% asset_path "96boards-ce-temp-img-2.png" %}){:class="img-responsive lazyload"}

Next the software to drive the Grove-LCD RGB Backlight. Akira Tsukamoto wrote an excellent blog on using the Grove-LCD with the sensor board, I’ll show you how to hook up the Grove-LCD without using the sensor board, just using the level shifter. The software he wrote will just work. So you can read about it here: [http://www.96boards.org/blog/programing-i2c-devices-libmraa-libupm/](http://www.96boards.org/blog/programing-i2c-devices-libmraa-libupm/) I’ve copied the files that you’ll need here into a new repository called: HomeAutomationBlogSeries.


### **Step 1: Connecting Grove RGB backlight LCD**


First make sure your 96Boards is not powered up, pull the power connector out.

To complete this step you will need a breadboard kit like the one found here on [Amazon](https://smile.amazon.com/Arduino-Starter-Kuman-Solderless-Breadboard/dp/B016D5LB8U/ref=sr_1_11?ie=UTF8&qid=1486599042&sr=8-11&keywords=breadboard+kit). It does not have to be this exact kit but you will need a breadboard and some wires to do cross connects with. This style of breadboard has 2 power rails on the outside of the breadboard and the center of the board has a series of holes running in rows down the board (my board it’s from 1 to 63 rows, and a - j across each row). Please read the description below and also watch the video so that you don’t plug the wires into the wrong places, that would be really bad and could result in the total destruction of the 96Boards, level shifter and any other electronic hardware attached.

![Coins and board]({% asset_path "96boards-ce-temp-img-1.jpg" %}){:class="img-responsive lazyload"}

Plug the BOB-12009 level shifter into rows 1 - 6 one set of pins will go into column **d** and the other set of pins will go into column **f** (watch the video) Make sure the side of the level shifter with the lv pins is plugged into column **d** and the hv pins are in column** f** this is critical.

Next we need to bring power over from the CE 96Boards, the low speed connector has ground, 1.8v and 5Vs on it. Pin 39 is ground, pin 37 is 5v and pin 35 is 1.8v. Take 3 wires of different colors (I prefer black, red, and orange if you have those colors) Put the black wire into pin 39 and plug it into the blue rail of the breadboard, take the red wire and plug it into pin 37 and plug it into the red rail next to column j that is the high voltage side of the breadboard. Finally take the orange wire and plug it into pin 35 and plug it into the other red rail of the breadboard.Now take another black jumper wire and place it between the blue power rails so that ground is on both sides of the board.

Next we power up the level shifter. You will need 2 black jumper wires and 2 red jumpers. Look at the center 2 pins on each side of the level shifter on the low power side they will be labeled lv and ground and on the high power side they will be hv and ground. Attach a red wire to the lv pin and connect it to the 1.8v rail. Connect a black wire to the pin next to the lv pin labeled ground and attach it to the blue ground rail. With these wires in place the level shifter will power up when the 96Boards is powered up.

![OpenHours Image]({% asset_path "96boards-ce-temp-img-3.jpg" %}){:class="img-responsive lazyload"}

Next we bring out the i2c lines from the 96Board. We need to bring out pins 15 (SCL) and 17 (SDA) from the low speed connector.

![OpenHours Image]({% asset_path "96boards-ce-temp-img-4.jpg" %}){:class="img-responsive lazyload"}

SInce we are going to plug into a grove cable at some point we might as well use the same colors that the Grove cable uses, yellow and white. Plug the yellow wire into pin 15 and bring it over to the level shifter and plug it into lv1 pin. Plug the white wire into pin 17 and bring it over to the level shifter and plug it into the lv2 pin. Now we have the 1.8v i2c 0 bus attached to the low side of the level shifter. Grab 2 more yellow and white wires, we are going to connect them to the other side of the level shifter board. Plug the yellow wire into the hv1 pin of the level shifter board and plug the other end into the yellow wire of a grove wire harness. Next plug the white wire into the hv2 pin of the level shifter and plug the other end into the white wire of the grove wire harness.

![OpenHours Image]({% asset_path "96boards-ce-temp-img-5.jpg" %}){:class="img-responsive lazyload"}

Now check everything, make sure it’s wired correctly, in the video I did the wiring with the board powered on, that was not the smartest thing I’ve ever done, it’s a good way to let the magic white smoke out of something. Just plug a wire in the wrong hole and it could be over. Once you are sure you have all the wires connected correctly plug your 96Boards into power, once it boots log in and get a text console, then move on to step 3: Updating your system.


### **Step 2: Updating your system**




### **Commands:**


$ sudo apt-get update

$ sudo sudo apt-get dist-upgrade -u


### **Step 3: Install libmraa and libupm**




### **Commands:**


$ sudo apt-get install libmraa-dev libupm-dev

The command above will install the following four packages:




  * libmraa0: contains only libraa run-time library


  * libmraa-dev: includes header files to compile program using libmraa


  * libupm0: contains only libupm run-time library


  * libupm-dev: includes header files to compile program using libupm




### **Step 4: Download, have a look at the source code, build and run the sample program**




### **Commands:**


    $ git clone https://github.com/dmandala/HomeAutomationBlogSeries.git
    $ cd HomeAutomationBlogSeries/rgb_lcd_demo/

    $ cat rgb_lcd_demo.cpp
    $ make
    $ sudo ./rgb_lcd_demo

The LCD will show some sample messages and the backlight will cycle between red, blue and green.

**Note:** Press ctr-c to stop the program.

![Blue LCD]({% asset_path "96boards-ce-temp-blue.jpg" %}){:class="img-responsive lazyload"}
![Green LCD]({% asset_path "96boards-ce-temp-green.jpg" %}){:class="img-responsive lazyload"}
![Red LCD]({% asset_path "96boards-ce-temp-red.jpg" %}){:class="img-responsive lazyload"}

{% include media.html media_url="https://www.youtube.com/embed/mauUkSEbUrE?list=PL-NF6S9MM_W3jC6vE9XtdbZvMWAMX2E8" %}

Here is the C++ code you just ran, it is exactly the same code that is used in the sensor board demo, no changes, what changed is we used a discrete level shifter board vs the sensor board :

Great, you have done some soldering and wiring and tested the i2c through a level shifter into a 5v device. All good. If you are ready to build on this let’s start the next section, power down your 96Boards and unplug all the jumper cables and move on to “What Temperature is it?”.


## What Temperature is it?


Now on to a temperature sensor, there are a lot of them out there, I’m starting with the Digital Temperature Sensor Breakout Board - TMP102 part number SEN-11931 from Sparkfun.

![What Temp is it? Image.]({% asset_path "96boards-ce-temp-img-6.jpg" %}){:class="img-responsive lazyload"}

The device is a TI part, it can run on a variety of voltages from 1.4v - 3.6v so 1.8v is clearly within it’s range. It is an i2c part and it’s really pretty easy to communicate with. It’s actually quite tiny, if you look at the picture above it’s the little black square in the center just below the TMP102 lettering. It’s smaller than the surface mount capacitor and pull up resistors! And the entire breakout board is smaller than a US quarter or a 2 Euro piece. It’s a 12 or 13 bit device, for the purposes of this blog I’m only going to use the 12 bit mode and continuous reading otherwise known as the power on default mode. It can respond on 4 different i2c addresses depending on where you have the add0 line tied to. The choices are ground, vcc, sda, scl, read the datasheet for more information. It can measure from –40°C to +125°C so it’s got a pretty good range. To get a temp, you poke the sensor and then read 2 bytes, then combine the 2 bites in a specific way and you have the temp. Not hard at all, unless you are trying to read a negative number, the explanation in the datasheet is confusing. If the most significant bit (MSB) is set to 1 we are looking at a normal negative number but it’s 12 bits not the normal 16, 32 or 64 bits we normally see stored on a computer. So if you just shove this info into a variable on the 96Boards the negative temperatures don’t work. Why? Because on the 96Boards the MSB is not the 12 bit but the 16th, 32th, or 64th bit so the computer does not see the data as a negative number, even though all 12 bits are set correctly as a negative number. Easy to fix with a quick test, check is the “number” & 0x800 are true, if it’s true you need to set all the high bits (regardless of how many there are) to one. In C it looks like `if ( temp & 0x800 ) { temp |= (~0x7FF);}`. In binary 12 bit math `1110 0111 0000` is `-25°C` but when you put that pattern into a 16 bit variable it looks like 0000 1110 0111 0000 so by using `0x7FF` and bitwise inverting it we end up with a mask of 1111 0000 0000 0000 which when or’ed with 0000 1110 0111 0000 becomes 1111 1110 0111 0000 or a 16 bit negative number that equals -25°C. One last thing, the reason I used an inverted bit mask is that I could have hard coded 0xF000 but that would only work if the variable I was using was 16 bits in size, by using `~0x7FF` that converts to whatever size number in use on the computer with all of the high bits set and the lower bits at 0. On a 16 bit machine it looks like: “1111 0000 0000 0000” and on a 32 bit machine it looks like: `1111 1111 1111 1111 1111 0000 0000 0000` which is the expected and proper mask for a 32 bit machine.

Sorry about the minor binary math refresh, but I looked at a lot of code on the Internet for the TMP102 and most of it just gets it flat wrong and I really suspect it’s more the description in the data sheet, then not understanding how numbers are stored on a computer but more than a few folks really did not understand that either.


## Hooking up the TMP102 sensor


It’s time to plug the TMP102 into the breadboard, holding the TMP102 so the pins are vertical and are on the left side of the board plug it into position 1e on the breadboard. It will take up positions 1e, 2e, 3e, 4e, 5e, and 6e. You will need 5 jumper wires, 2 Black (one long one short), a long Orange/Purple, long White and long Yellow. (The colors don’t matter but that is what I’m using) First hook the short black jumper wire to pin 2a on the breadboard, and hook the other end to pin 6c on the breadboard. When the sensor is fully hooked up that will put the address line to ground. Next hook the long black wire into pin 39 on the low speed connector, that is ground, plug the other end into pin 2c of the breadboard. Next hook the orange jumper into pin 35 on the low speed connector, that is 1.8v, plug the other end into pin 1c. That completes the power to the temperature sensor. It also pulled the add0 line to ground. Next hook the yellow wire to pin 15 on the low speed connector on the 96Boards, that’s SCL, plug the other end into pin 4c on the breadboard. Next hook the white wire to pin 17 on the low speed connector on the 96Boards, that’s SDA, plug the other end into 3c on the breadboard.

![Hooking up the TMP Sensor image 1]({% asset_path "96boards-ce-temp-img-7.jpg" %}){:class="img-responsive lazyload"}

![Hooking up the TMP Sensor image 2]({% asset_path "96boards-ce-temp-img-8.png" %}){:class="img-responsive lazyload"}

Verify all of your connections and when you are sure you have them correct plug your 96Boards into power and let it boot. Log in and get a text console.


### **Step 1: Look at the source, build and run the sample program**


Here is the code we are about to compile and run, as you can see it’s pretty simple if you just want to quickly read 12bit temp data.


### **Commands:**


$ cd HomeAutomationBlogSeries/temp/

$ cat temp.c

It could get a bit more complex if you want to use the least amount of power or have a wider temperature range. In the future we may want to revisit this code and expand it but for now this works well. I’m using the MRAA library, with the C interface. You could write this code in Python, C++ or even Java since the library supports all of those, however for me I’m sticking to C for now.

As a quick review the code initializes the mraa shared library, then gets an i2c context, opens i2c bus 0, then sets up to use i2c bus address 0x48 which is the address of the TMP102 when the add0 line is pulled to ground. Once it’s set to use that address it writes a 0 byte to the TMP102, telling the TMP102 to respond on the bus with the current temp info, which is 2 bytes long. We grab that data off the bus with simple mraa library calls. The next bit is slightly tricky, we take an integer variable (note I don’t really care if it’s 16, 32 or 64 bits long), I shift buf1 (the most significant byte) up 8 bits and or in buf2 (the least significant byte) then I right shift the integer down 4 bits. I do this because the rightmost 4 bits in the are meaningless in this context so I need to dump them and right shifting by 4 does that cleanly (you can read the data sheet on what they are good for if you want to). Once I have a clean 12 bit number in the variable I look to see if the 12th bit is set to 1, if so I need to set all the high bits to 1 and I do that with the bit mask magic, then finally to return the temp in celsius you need to multiply the integer variable by 0.0625 (this info comes from the data sheet), the resultant floating point number is the temperature in celsius. Finally in the printf statement I display first the celsius value, and then convert it to the fahrenheit value by applying the standard formula “((celsius temp * 1.8)+32)”. I do that 10 times in a loop and exit.

**Commands:**

$ cd HomeAutomationBlogSeries/temp/
$ make
$ sudo ./temp

If you run this code you will see your room temperature, if you touch the sensor with your finger you will see the temp go up, if you put some ice in a plastic bag and touch it you will see the temp go down. As you can see in the video I did both and got the following results:


    The temp in C = 25.062500, in F 77.112500
    The temp in C = 25.062500, in F 77.112500
    The temp in C = 29.062500, in F 84.312500
    The temp in C = 30.062500, in F 86.112500
    The temp in C = 30.062500, in F 86.112500
    The temp in C = 29.062500, in F 84.312500
    The temp in C = 13.000000, in F 55.400000
    The temp in C = 8.000000, in F 46.400000
    The temp in C = 5.000000, in F 41.000000
    The temp in C = 4.000000, in F 39.200000


linaro@linaro-alip:~/hacking/HomeAutomationBlogSeries/temp$ sudo ./temp


    The temp in C = 9.000000, in F 48.200000
    The temp in C = 2.000000, in F 35.600000
    The temp in C = -1.062500, in F 30.087500
    The temp in C = -3.062500, in F 26.487500
    The temp in C = -4.062500, in F 24.687500
    The temp in C = -6.062500, in F 21.087500
    The temp in C = -2.062500, in F 28.287500
    The temp in C = 7.000000, in F 44.600000
    The temp in C = 17.062500, in F 62.712500
    The temp in C = 15.000000, in F 59.000000


**linaro@linaro-alip**:**~**$

I tried to shoot the computer screen with a handheld camera while I made the breadboard video for this section. It did not work so well, so I’ll explain in more detail what you are seeing here. The first line: The temp in C = 25.062500, in F 77.112500 is the ambient room temp when I started the program. It started climbing when I put my finger on the sensor and got up to 86.112500 before I took my finger off the sensor. Then I had a small plastic baggy that I put 2 cubes of ice into with some table salt. Now if you have ever made homemade Ice Cream you know if you pour salt on ice you melt the ice and you drop the temp below the freezing point of water as the ice melts! Don’t believe me? Google it. So with my bag of ice and salt I managed to hit 21.0875 F! Nicely below the freezing temp of water and enough to trigger negative numbers in Celsius. I would need dry ice or some freezing spray to hit negative numbers in Fahrenheit but I’ll leave that as an experiment to the reader.


{% include media.html media_url="https://www.youtube.com/embed/pxUtnc_EWMQ?list=PL-NF6S9MM_W3jC6vE9XtdbZvMWAMX2E8" %}

## What temp is it and can I display it on the LCD display?


Can we mix and match is the question, the LCD display is a 5V device the TMP102 is a 1.8v or 3.3v device so clearly they can’t exist on the exact same bus, one or both need to be level shifted. The answer is a qualified yes, you can mix and match but like many things it’s tricky. Why? Well an i2c bus requires a pullup resistor on both communication lines (SCL SDA) to the working voltage, so on a 1.8v i2c bus we only want a single set of pullups. With bus translators you need 2 sets of pullups one set for the low voltage and one set for the high voltage. Here is where is gets tricky, if you look at the schematic for the TMP102 board it has pullup resistors for the SCL and SDA lines, as does the BOB-12009 level shifter. There is a difference however, the TMP102 is using 4.7K ohm resistors for the pullups and the BOB-12009 is using 10k ohm resistors for it’s pullups (keep these values in mind for later). So according to the rules of i2c circuits it can’t work with these parts, you need to remove some pullups. Now the old design of the TMP102 from sparkfun made that easy, but at some point (I don’t know when) sparkfun changed the design but did not change the info on their website. So the pictures of the TMP102 don’t match what they are shipping. Ugh… The copper lands that you could cut to remove the pullups don’t exist any more. This is a large bummer, you have to use your soldering iron to pull off the resistors, this is not super hard but it is a pain in the tail. The BOB-12009 was never designed to be able to remove the pullup resistors so you are kind of stuck with them. Hmmm, I don’t want to play with pulling off the TMP102 pullups right now I don’t have a proper soldering iron tip for that trick. What to do, what to do?

Well I decided to try a few things out, so I built the circuit that included a TMP102 in parallel with a BOB-12009 tied to the Grove LCD just to see what would happen. This was a failure, the Grove LCD controller never got initialized correctly and the MRAA library complained and exited with an error.

Then I tried building a circuit with 2 BOB-12009’s in parallel, one tied to the TMP102 running at 3.3v and the other BOB-12009 tied to the Grove LCD running at 5v. Success it works.

This begs the question why did the second version work and the first totally fail? I suspect and it’s only a guess that the 10k ohm resistors in parallel (5k ohm total value) was high enough not to mess up the i2c signals but the 10k ohm in parallel with the 4.7k ohm (3.2k ohm total value) was just too small a value for pullup resistors for the circuit to work correctly. Clearly working with prebuilt bits and bobs is going to be somewhat tricky. The i2c bus is designed to have many devices hanging on it BUT it is only expecting one set of pullups per voltage level. Lesson learned, be careful how you wire your sensors on the bus.

Another lesson learned is be careful of what you buy, having a schematic of your device is important so you can see if there are pullups installed on your i2c device. I went looking at the Seeed site for the schematic and could not find one so I have no idea if the Grove LCD RGB Backlight device v4.0 has pullups and if so what size? I’d have to disassemble it and try to figure out what is in the circuit. I did look over the display with my magnifier len’s and at first glance it “appears” that R9 (SDA) and R10 (SCL) are pullup resistors for the i2c bus and they are not populated on my display. If that is correct the display clearly expects that the required pullup resistors will be someplace else, but if needed you could solder on 2 resistors if this was the only device on the i2c bus.

Enough of this, I just wanted to see if I could get the temperature from the TMP102 and display the results on the Grove LCD display. Since the second solution works and I want to get this blog out (I promise in the future I will revisit the TMP102 and BOB-12009 in parallel without the pullups on the TMP102 and see if it works as expected.) this week. I’m going to wire the second circuit: 2 BOB-12009’s in parallel one with the TMP102 running at 3.3v and one with the Grove LCD display running at 5v and make a video of what I get. I’m going to use my C code to get the temp and Akira Tsukamoto’s excellent code to display the results on the Grove LCD display. This will also be an interesting test of combining C and C++ code, and using both the MRAA and the UPM libraries (the UPM requires the MRAA library to be installed). I’m using the MRAA library directly and Akira’s code is using only the UPM library directly to access the same i2c bus, this should be interesting.


## Hooking up the BOB-12009’s, TMP102 and Grove LCD display


Put the first BOB-12009 low voltage side into column d pins 1-6 of the breadboard, the high voltage pins will end up in column f pins 1-6. Put the second BOB-12009 low voltage side into the same column d but in pins 8-13 and again the high voltage pins will end up in column f pins 8-13 and finally place the TMP102 into column f pins 15-20 The add0 pin will be in pin 15f.

![Hooking up the BOB-12009 Image]({% asset_path "96boards-ce-temp-img-9.png" %}){:class="img-responsive lazyload"}

**Next we wire up the connections:**




  1. Pin c1 connects to pin c8,


  2. Pin c2 connects to pin c9


  3. Pin c3 connects to the low voltage + bus (1.8v),


  4. Pin c4 connects to ground bus


  5. Pin c10 connects to the low voltage + bus (1.8v)


  6. Pin c11 connects to the ground bus


  7. Pin 4i connects to the ground bus


  8. Pin h8 connects to pin h17


  9. Pin h9 connects to pin h18


  10. Pin h10 connects to the high voltage + bus (3.3v)


  11. Pin h11 connects to the ground bus


  12. Pin h15 connects to the ground bus


  13. Pin h19 connects to the ground bus


  14. Pin h20 connects to the high voltage + bus (3.3v)


  15. Jump both ground buses together


  16. From the grove LCD Black wire to the ground bus


  17. From the grove LCD Red Wire to pin 3j


  18. From the grove LCD Yellow wire to pin 1h


  19. From the gove LCD White wire to pin 2h


  20. From the 96Boards low speed connector pin 15 to pin a1


  21. From the 96Boards low speed connector pin 17 to pin a2


  22. From the 96Boards low speed connector pin 39 to the ground bus


  23. From the 96Boards low speed connector pin 37 (5v) to pin 3h


  24. From the 96Boards low speed connector pin 35 (1.8v) to the low voltage 1.8v bus


Please notice that the 96Boards low speed connector pin 37 does not attach to either bus on the breadboard, only to pin 3(columns fghij), it’s providing high voltage (5v) to BOB-12009 number 1 and to the Grove LCD device, no where else. If you cross the 3.3v and the 5v power supplies bad things will happen, well really if you cross any of the power supplies bad things will happen so don’t do that. 5v only to BOB 1 and the Grove LCC. Once you’ve checked your wires to make sure you are not shorting anything, power up your 96Boards.


### **Step 1: Have a look at the source, build and run the sample program**


Here is the code we are about to compile and run, as you can see it’s pretty simple. I cut out the main function of temp.c and I added some code to Akira Tsukamoto’s excellent code to call out to the TMP102 temp sensor and display the temp on the LCD.


### **Commands:**


$ cd HomeAutomationBlogSeries/temp_display/

$ cat rgb_lcd_demo.cpp

$ cat temp.c

$ make

$ sudo ./**temp_display**

That’s it, here are the still pictures and the video

![Blue LCD Wired Up]({% asset_path "96boards-ce-temp-blue-2.jpg" %}){:class="img-responsive lazyload"}
![Green LCD Wired Up]({% asset_path "96boards-ce-temp-green-2.jpg" %}){:class="img-responsive lazyload"}
![Red LCD Wired Up]({% asset_path "96boards-ce-temp-red-2.jpg" %}){:class="img-responsive lazyload"}

{% include media.html media_url="https://www.youtube.com/embed/iyPDdRblVVI?list=PL-NF6S9MM_W3jC6vE9XtdbZvMWAMX2E8"%}


That wraps up this blog on using the BOB-12009 level shifter and the TMP102 temperature sensor. There are some things to revisit in the future but we have an easy to use level shifter and an equally easy to use temperature sensor. There are other level shifters and temperature sensors out there, I tried one of them when I was writing this blog, the BOB-11771 Voltage-Level Translator Breakout board - TXB0104. It did not work on the long wire lengths I was using, I think it’s designed to work on a circuit board not over long wire runs off the board. I will come back to it at some point, it might have so applications that we can use. But this blog has taken over 2 weeks to research, create videos, take pictures for, and write. I’m going to add some more bits to this blog as I was shown a tool that will let me show you nicely wired breadboards that are easier to follow, so I’ll explore that this coming week, while I get ready to go to the Embedded Linux Conference in Portland Oregon. I’ll be manning the booth and have a bunch of the boards and expansion boards on display. If you are attending ELC stop on by.

I’m looking for feedback both good and bad, it’s hard to make things better if I don’t know what I’m missing.



* * *



For all you audio/visual folks, get caught up by visiting the **[96Boards YouTube channel](https://www.youtube.com/c/96boards?sub_confirmation=1)**. There you will find several playlists to help maneuver through the content. **Don’t forget to subscribe**!

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

**[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/)**

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “**[Monthly Newsletter](http://www.96boards.org/newsletter/)**” and our “**[Weekly Digest](http://www.96boards.org/newsletter/digest/)**”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Remember, you are all the reason this is possible. Please join us in welcoming a vibrant and new twist on community engagement. With OpenHours we will take on some exciting challenges this year.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience. All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the **[96Boards forums](http://www.96boards.org/forums/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards)** channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!

**Other Blogs from David Mandala:**




  * [How do you access the GPIO pins programmatically?](http://www.96boards.org/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Board GPIO, libsoc and libmraa on a new image?](http://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](http://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](http://www.96boards.org/blog/eclipse-remote-development-debugging/)


  * [96Boards Survery: What do 96Boards users care about?](http://www.96boards.org/blog/96boards-survey-1/)


  * [Community Mezzanine Board](http://www.96boards.org/blog/community-mezzanine-board/)


  * [Setting up a home 96Boards media server](http://www.96boards.org/blog/96boards-media-server/)


  * [96Boards Consumer Edition, IoT and using sensors](http://www.96boards.org/blog/ce-iot-using-sensors/)
