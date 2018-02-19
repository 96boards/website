---
author: Mani_S
comments: true
date: 2017-05-12 01:01:54+00:00
layout: post
link: https://www.96boards.org/blog/path-libmraa-96boards-part-2/
slug: path-libmraa-96boards-part-2
image:
    featured: true
    path: /assets/images/blog/path-libmraa-96boards-part-2-featured.png
    name: path-libmraa-96boards-part-2-featured.png
title: Our path to libmraa on 96Boards – Part 2
wordpress_id: 20365
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- Consumer Edition
- Consumer IoT
- DB410c
- dragonboard410c
- F-Cue
- General Purpose Input Output
- GPIO
- HiKey
- I Squared C
- I2C
- intel
- libmraa
- libupm
- Linaro
- Linux
- MediaTek X20
- mraa
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- Robert Wolff
- rpb
- UPM
---

# **Introduction**


This is the continuation of the blog series about path to libmraa on 96 Boards. Before reading this post, if you don’t know about the [first part](/blog/path-libmraa-96boards-part-1/) I’d suggest to have a first look. It gives the brief introduction about libmraa and our goals to support all 96Boards. In this post we are going to see a similar kind of introduction to [libupm](https://github.com/intel-iot-devkit/upm) and at the end, i’ll demonstrate how simple this library is to interface devices like Accelerometer and LCD.


# **How libupm is organised?**


As I said in the [first part](/blog/path-libmraa-96boards-part-1/) libupm depends on libmraa for accessing the peripherals. So, you’d need mraa headers and runtime libraries for using this library. In order to get more detail, kindly refer the below code flow for libmraa and libupm.

**Libmraa:**

  * mraa__periph__init(bus/pin) - initialize the board specific support and peripherals such as gpio, i2c, spi etc..


    * mraa_gpio_init(pin)


    * mraa_i2c_init(bus)


    * mraa_spi_init(bus)





  * mraa__periph__read/write - write to the specified bus/pin


    * mraa_gpio_write(pin, level)


    * mraa_i2c_write(context, data, length)


    * mraa_spi_write(context, data)


**Libupm:**




  * \_device__init(bus, address, data) - initialize the board specific support and required peripherals for accessing the device. Also make the device to come into ready state


    * bmp280_init(bus, addr, data)


    * mma7600_init(bus, addr)


    * tsl2561_init(bus, addr, gain, integ_time)





  * \_device__get/set(context, data) - set device to a state or get the device state by doing peripheral read/write calls


    * bmp280_update(context)


    * mma7660_set_sample_rate(context, sample_rate)


    * tsl2561_get_lux(context, &var)







# **Library breakdown:**


The source of libmraa is organised majorly in the following directories. Like libmraa, bindings are also available in this library to accelerate the pace of development.




  1. [examples](https://github.com/intel-iot-devkit/upm/tree/master/examples) - contains examples for plethora of sensors and actuators in all languages supported.


  2. [src](https://github.com/intel-iot-devkit/upm/tree/master/src) - contains the source code of all devices supported and also the bindings


  3. [include](https://github.com/intel-iot-devkit/upm/tree/master/include) - contains common header for the devices.




# **How to start?**


Libupm comes as a readily available package called libupm-dev, which contains the required headers and runtime libraries. It is always recommended to install libmraa prior installing libupm. This library can also be built from the source by following the instructions [here](https://github.com/intel-iot-devkit/upm/blob/master/docs/building.md).


# **Interfacing accelerometer and LCD**


Alright, let’s get into action of interfacing some devices using libupm and libmraa onto DB410C. The essence of this topic is to show how easy to interface devices using this library.

{% include media.html media_url="https://www.youtube.com/embed/Et-7Acla2vo"%}


### **Hardware required:**






  1. [Dragonboard 410c](/product/dragonboard410c/) or any of [96Boards CE](/products/ce/)


  2. [Sensors Mezzanine](/product/sensors-mezzanine/)


  3. [MMA7600 sensor](http://wiki.seeed.cc/Grove-3-Axis_Digital_Accelerometer-1.5g/)


  4. [RGB LCD](http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/)


  5. [Connecting cables](https://www.seeedstudio.com/Grove---Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)




### **Package dependencies:**






  1. Libmraa-dev


  2. Libupm-dev




### **Connections needed:**


Following connections needs to be made on the target platform (DB410C in this case) connected to Sensors Mezzanine.




  1. I2C0 (5v)--->RGB LCD


  2. I2C1 (3v)--->MMA7660




### **Building:**


```bash

$ git clone https://github.com/96boards/projects.git
$ cd projects
$ cd accel
$ make
$ sudo ./bin

```


Now LCD will show X,Y and Z axes acceleration with Blue background. If the sensor is shaken, then color will get changed to Red. Also, if there is any tap detected by the sensor, then color will gets changed to Green.


### **Code insight:**


Let me show you what's going on inside [accel.cpp](https://github.com/96boards-projects/accel/blob/master/src/accel.cpp) Both LCD and accelerometer are accessed by creating two classes at the start and then followed by device specific initializations and interfacing code.


### **Initializing the accelerometer:**


Before accessing any of the registers of MMA7660, the device needs to be in standby mode. After putting into standby mode, the sample rate is set to 64 Sps. Then the threshold for detecting tap is set.

**Note:** Threshold is user configurable. It needs to be calibrated according to the surface you are going to mount the sensor. Settings applied here are just for demonstration purpose.

```cpp

/* place device in standby mode so we can write registers */
accel->setModeStandby();

/* enable 64 samples per second */
accel->setSampleRate(MMA7660::AUTOSLEEP_64);

/* setup SR register */
accel->writeByte(MMA7660::REG_SR, 0x00);

/* setup tap threshold */
accel->writeByte(MMA7660::REG_PDET, 0x44);

/* setup tap debounce */
accel->writeByte(MMA7660::REG_PD, 0x02);

/* place device into active mode */
accel->setModeActive();

```



### **Initializing the LCD:**


Configuring LCD is pretty straight forward. First the color needs to be set and the cursor has to be at the start. Then, first row will show X: Y: and Z: strings for the acceleration readings. Rest of the things are taken care by the library itself :)

```cpp

lcd->setColor(0x00, 0x00, 0xff);
lcd->setCursor(0,0);
lcd->write("X:");
    lcd->setCursor(0,5);
    lcd->write("Y:");
    lcd->setCursor(0,12);
    lcd->write("Z:");

```

### **Detecting tilt and shake:**


Following api’s returns true if shake or tap is detected by the sensor. Also, color of the LCD will turn Red is shake has been detected and will turn Green is tap hsa been detected.

```cpp

/* change color to red if shake is detected*/
if (accel->tiltShake())
lcd->setColor(0xff, 0x00, 0x00);

/* change color to green if tap is detected*/
if (accel->tiltTap())
    lcd->setColor(0x00, 0xff, 0x00);

```


### **Printing acceleration:**


Following routine will get the acceleration reading from MMA7660 and prints on the LCD continuously.

```cpp
/* get acceleration from sensor */
accel->getAcceleration(&ax, &ay, &az);

/* display x aceleration */
lcd->setCursor(1,0);
snprintf(buffer, sizeof(buffer), "%f", ax);
lcd->write(buffer);

/* display y acceleration */
lcd->setCursor(1,6);
snprintf(buffer, sizeof(buffer), "%f", ay);
lcd->write(buffer);

/* display z acceleration */
lcd->setCursor(1,12);
snprintf(buffer, sizeof(buffer), "%f", az);
lcd->write(buffer);

```



# **Conclusion**


So, that’s it for part to of ‘our path to libmraa for 96Boards’ series. I hope this post would give a road map of how to interface the sensors/actuators quickly using these libraries. More fun is awaiting when we uncover our upcoming series :)


# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
