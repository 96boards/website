---
author: davidm
comments: true
date: 2016-04-19 13:50:53+00:00
layout: post
link: http://www.96boards.org/blog/access-gpio-pins-programmatically/
slug: access-gpio-pins-programmatically
title: How do you access the GPIO pins programmatically?
wordpress_id: 13586
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DragonBoard 410c
- GPIO
- HiKey
- libsoc
- Linux
- mraa
- Open Embedded
---

I’m just back from the Embedded Linux Conference 2016 in San Diego. There I attended some keynote sessions, had a lot of hallway conversations and worked in the Linaro booth. I was also asked to do some training on how to easily access the GPIO, I2C and SPI on 96Boards hardware. With all of that happening I have a few blogs to write about the week. I thought I would start with the question of how to access the hardware.

It seemed a bit strange that people were having issues, after all, there are three libraries that address accessing the hardware. One is super simple, really only meant for accessing the GPIO pins written in C and has Python bindings (96BoardsGPIO). Another is also written in C and allows access of GPIO, I2C and SPI, also with Python bindings (libsoc), but it’s a bit harder to use: with more power comes more complexity. And finally there is a third library written in C++ that also allows access of GPIO, I2C and SPI and it too not only has Python bindings but also includes Javascript and Java bindings (mraa). All three of these libraries are open source, available on github.com, and with some reading, are not too hard to use. So what are the issues?

With this question in mind, I accepted the request to provide some training. It was in a nice facility, lots of hardware, everything you could want. I did the training with the Dragonboard 410c™. Standing in front of the room with about 30 people, I asked some questions: How many are programmers in the room? Nearly all the hands went up. How many in this room have done C programming? Again, almost every hand went up. How many had embedded programming experience? This time a lot fewer hands were raised. Out of curiosity, I asked how many people had played with an Arduino, and done any programming on those? More hands raised. Then I asked how many people were familiar with 96BoardsGPIO, libsoc or mraa libraries? Two hands went up! Finally I asked the two people who knew about the libraries, had they installed them? One person. Wow. I was more than a bit surprised, shocked really. It’s a good thing that future releases of the Linaro Reference Software will include all of these libraries. I am writing another blog entry on how to download and build them, but in the future you should not need to know how to build them unless you are making your own custom image.

Next I fired up my Dragonboard™ 410c and hooked it up to the HDMI monitor so I could show the folks simple samples from each library. Very, very simple code, not designed to be efficient or even good “code”, but the idea was to make three sample programs that worked the same way for comparison.

First the 96BoardsGPIO library (https://github.com/96Boards/96BoardsGPIO):

    
    <span style="color: #ff9900;">/*************************************************************/
    /*                              */
    /* Written with 96boardsGPIO C library            */
    /*                              */
    /* Intentionally a simple library to resemble Arduino    */ /* programming                        */
    /*                              */
    /* You really can't do interrupt programming with this    */
    /* library but you can do things like that with libsoc.   */
    /* This library calls into libsoc for its underlying metal  */
    /* calls.                         */
    /*                             */
    /***********************************************************/
    <span style="color: #00ccff;">#include <stdio.h>
    <span style="color: #00ccff;">#include <stdlib.h>
    <span style="color: #00ccff;">#include <unistd.h>
    
    <span style="color: #00ccff;">#include <gpio.h>
    
    <span style="color: #00ccff;">#define TOUCH "GPIO-A"
    <span style="color: #00ccff;">#define LED "GPIO-C"
    
    <span style="color: #cc99ff;">int main<span style="color: #ff99cc;"><span style="color: #ff99cc;">(<span style="color: #ff99cc;">)
    <span style="color: #ff99cc;">{
      <span style="color: #cc99ff;">int x;
      <span style="color: #cc99ff;">int t<span style="color: #ff99cc;"> = 0;
      <span style="color: #cc99ff;">int last_t<span style="color: #ff99cc;"> = 0;
      <span style="color: #cc99ff;">int led_state<span style="color: #ff99cc;"> = HIGH;
     
      <span style="color: #f7ba00;">if<span style="color: #ff99cc;">(gpio_open<span style="color: #ff99cc;">(gpio_id<span style="color: #ff99cc;">(LED<span style="color: #ff99cc;">), "out"<span style="color: #ff99cc;">)<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
        return <span style="color: #ff99cc;">(-1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
      <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(gpio_open<span style="color: #ff99cc;">(gpio_id<span style="color: #ff99cc;">(TOUCH<span style="color: #ff99cc;">), "in"<span style="color: #ff99cc;">)<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
        <span style="color: #f7ba00;">return<span style="color: #ff99cc;">(-1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
    
      <span style="color: #f7ba00;">while<span style="color: #ff99cc;">(1<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
        t<span style="color: #ff99cc;"> = digitalRead<span style="color: #ff99cc;">(gpio_id<span style="color: #ff99cc;">(TOUCH<span style="color: #ff99cc;">)<span style="color: #ff99cc;">);
        <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(t && !last_t<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
          digitalWrite<span style="color: #ff99cc;">(gpio_id<span style="color: #ff99cc;">(LED<span style="color: #ff99cc;">), led_state<span style="color: #ff99cc;">);
          usleep<span style="color: #ff99cc;">(100000<span style="color: #ff99cc;">);
          led_state=<span style="color: #ff99cc;">(led_state<span style="color: #ff99cc;">==HIGH<span style="color: #ff99cc;">)?LOW:HIGH;
        <span style="color: #ff99cc;">}
        last_t<span style="color: #ff99cc;"> = t;
        usleep<span style="color: #ff99cc;">(1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
      digitalWrite<span style="color: #ff99cc;">(gpio_id<span style="color: #ff99cc;">(LED<span style="color: #ff99cc;">), LOW<span style="color: #ff99cc;">);
      <span style="color: #f7ba00;">return EXIT_SUCCESS;
    <span style="color: #ff99cc;">}
    
    
    


We talked it over and the folks that had used Arduino boards said the code was very familiar to them, which was my exact intent. Then we ran the code:

    
    $ gcc AC_ledGPIO.c -o AC_ledGPIO -lsoc -l96BoardsGPIO
    $ sudo ./AC_ledGPIO
    
    


Touch the touch switch and the led went on and touch it again and the led went off. Simple and easy to understand.

Next the libsoc library(https://github.com/jackmitch/libsoc):

    
    <span style="color: #ff9900;">/************************************************************/
    /*                             */
    /* Written with libsoc C library              */
    /*                             */
    /*                             */
    /* You can do interrupt programming with this library    */
    /*                             */
    /************************************************************/
    
    <span style="color: #00ccff;">#include <stdio.h>
    <span style="color: #00ccff;">#include <stdlib.h>
    
    <span style="color: #00ccff;">#include "libsoc_gpio.h"
    <span style="color: #00ccff;">#include "libsoc_debug.h"
    <span style="color: #00ccff;">#include "libsoc_board.h"
    
    <span style="color: #cc99ff;">unsigned int GPIO_LED;
    <span style="color: #cc99ff;">unsigned int GPIO_BUTTON;
    
    <span style="color: #cc99ff;">int last_touch;
    <span style="color: #cc99ff;">int led_state<span style="color: #ff99cc;"> = 0;
    <span style="color: #cc99ff;">int running<span style="color: #ff99cc;"> = 1;
    
    <span style="color: #ff9900;">/* This bit of code below makes this example work on all */ 
    /* 96Boards, Though you could just call this in main */
    __attribute__<span style="color: #ff99cc;">(<span style="color: #ff99cc;">(constructor<span style="color: #ff99cc;">)<span style="color: #ff99cc;">) <span style="color: #f7ba00;">static <span style="color: #cc99ff;">void _init<span style="color: #ff99cc;">(<span style="color: #ff99cc;">)
    <span style="color: #ff99cc;">{
      board_config *config<span style="color: #ff99cc;"> = libsoc_board_init<span style="color: #ff99cc;">(<span style="color: #ff99cc;">);
      GPIO_BUTTON<span style="color: #ff99cc;"> = libsoc_board_gpio_id<span style="color: #ff99cc;">(config, "GPIO-A"<span style="color: #ff99cc;">);
      GPIO_LED<span style="color: #ff99cc;"> = libsoc_board_gpio_id<span style="color: #ff99cc;">(config, "GPIO-C"<span style="color: #ff99cc;">);
     libsoc_board_free<span style="color: #ff99cc;">(config<span style="color: #ff99cc;">);
    <span style="color: #ff99cc;">}
    <span style="color: #ff9900;">/* End of 96Boards special code */
    
    <span style="color: #cc99ff;">int main<span style="color: #ff99cc;">(<span style="color: #ff99cc;">)
    <span style="color: #ff99cc;">{
      gpio *gpio_led,*gpio_button;
      <span style="color: #cc99ff;">int touch;
     
      libsoc_set_debug<span style="color: #ff99cc;">(0<span style="color: #ff99cc;">);
      gpio_led<span style="color: #ff99cc;"> = libsoc_gpio_request<span style="color: #ff99cc;">(GPIO_LED,LS_SHARED<span style="color: #ff99cc;">);
      gpio_button<span style="color: #ff99cc;"> = libsoc_gpio_request<span style="color: #ff99cc;">(GPIO_BUTTON,LS_SHARED<span style="color: #ff99cc;">);
     
      <span style="color: #f7ba00;">if<span style="color: #ff99cc;">(<span style="color: #ff99cc;">(gpio_led <span style="color: #ff99cc;">== NULL<span style="color: #ff99cc;">) || <span style="color: #ff99cc;">(gpio_button <span style="color: #ff99cc;">== NULL<span style="color: #ff99cc;">)<span style="color: #ff99cc;">)
      <span style="color: #ff99cc;">{
        <span style="color: #f7ba00;">return<span style="color: #ff99cc;">(-1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
      libsoc_gpio_set_direction<span style="color: #ff99cc;">(gpio_led,OUTPUT<span style="color: #ff99cc;">);
      libsoc_gpio_set_direction<span style="color: #ff99cc;">(gpio_button,INPUT<span style="color: #ff99cc;">);
     
      <span style="color: #f7ba00;">if<span style="color: #ff99cc;">(<span style="color: #ff99cc;">(libsoc_gpio_get_direction<span style="color: #ff99cc;">(gpio_led<span style="color: #ff99cc;">) <span style="color: #ff99cc;">!= OUTPUT<span style="color: #ff99cc;">)
      || <span style="color: #ff99cc;">(libsoc_gpio_get_direction<span style="color: #ff99cc;">(gpio_button<span style="color: #ff99cc;">) <span style="color: #ff99cc;">!= INPUT<span style="color: #ff99cc;">)<span style="color: #ff99cc;">) 
      <span style="color: #ff99cc;">{
        <span style="color: #f7ba00;">return<span style="color: #ff99cc;">(-1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
      <span style="color: #f7ba00;">while<span style="color: #ff99cc;">(running<span style="color: #ff99cc;">)
      <span style="color: #ff99cc;">{
        touch<span style="color: #ff99cc;"> = libsoc_gpio_get_level<span style="color: #ff99cc;">(gpio_button<span style="color: #ff99cc;">);
        <span style="color: #f7ba00;">if<span style="color: #ff99cc;">(touch <span style="color: #ff99cc;">== 1 && last_touch <span style="color: #ff99cc;">== 0<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
          led_state<span style="color: #ff99cc;"> = led_state<span style="color: #ff99cc;">==1?0:1;
          libsoc_gpio_set_level<span style="color: #ff99cc;">(gpio_led,led_state<span style="color: #ff99cc;">);
          usleep<span style="color: #ff99cc;">(100000<span style="color: #ff99cc;">);
        <span style="color: #ff99cc;">}
        last_touch<span style="color: #ff99cc;"> = touch;
        usleep<span style="color: #ff99cc;">(1<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}  
      <span style="color: #f7ba00;">if<span style="color: #ff99cc;">(gpio_led || gpio_button<span style="color: #ff99cc;">)
      <span style="color: #ff99cc;">{
        printf<span style="color: #ff99cc;">("apply gpio resource fail!\n"<span style="color: #ff99cc;">);
        libsoc_gpio_free<span style="color: #ff99cc;">(gpio_led<span style="color: #ff99cc;">);
        libsoc_gpio_free<span style="color: #ff99cc;">(gpio_button<span style="color: #ff99cc;">);
      <span style="color: #ff99cc;">}
      <span style="color: #f7ba00;">return EXIT_SUCCESS;
    <span style="color: #ff99cc;">}
    


We talked this over and everyone could see the similarities in the code, this clearly had more options and more selections, but the core of the code worked the same way as before. Then we compiled and ran this code:

    
    $ gcc AC_ledSOC.c -o AC_ledSOC -lsoc
    $ sudo ./AC_ledSOC
    
    


No real difference between this and AC_ledGPIO, touch the switch and the led went on, touch it again and the led went off. Exactly as intended.

Finally the mraa library (https://github.com/intel-iot-devkit/mraa):

    
    <span style="color: #00ccff;">#include <stdio.h>
    <span style="color: #00ccff;">#include <stdlib.h> 
    <span style="color: #00ccff;">#include "mraa.hpp"
    
    <span style="color: #ff9900;">/* MRAA does not yet understand GPIO-A - GPIO-L       */
    /* Linaro will add this                   */
    /* What Mraa does understand is pin out numbers so,     */
    /* pin 23 is GPIO-A and pin 25 is GPIO-C          */
    <span style="color: #00ccff;">#define GPIO_C 25
    <span style="color: #00ccff;">#define GPIO_A 23
    
    <span style="color: #cc99ff;">bool running<span style="color: #ff99cc;"> = <span style="color: #f7ba00;">true;
    <span style="color: #cc99ff;">bool led_state<span style="color: #ff99cc;"> = <span style="color: #f7ba00;">false;
    <span style="color: #cc99ff;">int last_touch;
    <span style="color: #cc99ff;">void sig_handler<span style="color: #ff99cc;">(<span style="color: #cc99ff;">int signo<span style="color: #ff99cc;">)
    <span style="color: #ff99cc;">{
        <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(signo <span style="color: #ff99cc;">== SIGINT<span style="color: #ff99cc;">)
            running<span style="color: #ff99cc;"> = <span style="color: #f7ba00;">false;
    <span style="color: #ff99cc;">}
    
    <span style="color: #cc99ff;">int main<span style="color: #ff99cc;">(<span style="color: #cc99ff;">int argc, <span style="color: #cc99ff;">char* argv[]<span style="color: #ff99cc;">)
    <span style="color: #ff99cc;">{
        mraa::Result ret;
        <span style="color: #cc99ff;">int touch;
    
        mraa::Gpio* touch_gpio<span style="color: #ff99cc;"> = <span style="color: #f7ba00;">new mraa::Gpio<span style="color: #ff99cc;">(GPIO_A<span style="color: #ff99cc;">);
        if <span style="color: #ff99cc;">(touch_gpio <span style="color: #ff99cc;">== NULL<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
            return mraa::ERROR_UNSPECIFIED;
        <span style="color: #ff99cc;">} 
        mraa::Gpio* led_gpio<span style="color: #ff99cc;"> = <span style="color: #f7ba00;">new mraa::Gpio<span style="color: #ff99cc;">(GPIO_C<span style="color: #ff99cc;">);
        if <span style="color: #ff99cc;">(led_gpio <span style="color: #ff99cc;">== NULL<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
            return mraa::ERROR_UNSPECIFIED;
        <span style="color: #ff99cc;">} 
    
        signal<span style="color: #ff99cc;">(SIGINT, sig_handler<span style="color: #ff99cc;">);
    
        <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(<span style="color: #ff99cc;">(ret<span style="color: #ff99cc;"> = touch_gpio->dir<span style="color: #ff99cc;">(mraa::DIR_IN<span style="color: #ff99cc;">)<span style="color: #ff99cc;">)<span style="color: #ff99cc;">!= mraa::SUCCESS<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
            <span style="color: #f7ba00;">return ret;
        <span style="color: #ff99cc;">}
        <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(<span style="color: #ff99cc;">(ret<span style="color: #ff99cc;"> = led_gpio->dir<span style="color: #ff99cc;">(mraa::DIR_OUT<span style="color: #ff99cc;">)<span style="color: #ff99cc;">)<span style="color: #ff99cc;">!= mraa::SUCCESS<span style="color: #ff99cc;">)<span style="color: #ff99cc;">{
            <span style="color: #f7ba00;">return ret;
        <span style="color: #ff99cc;">}
    
        led_gpio->write<span style="color: #ff99cc;">(led_state<span style="color: #ff99cc;">);
       
        <span style="color: #f7ba00;">while <span style="color: #ff99cc;">(running<span style="color: #ff99cc;">) <span style="color: #ff99cc;">{
            touch<span style="color: #ff99cc;"> = touch_gpio->read<span style="color: #ff99cc;">(<span style="color: #ff99cc;">);
            <span style="color: #f7ba00;">if <span style="color: #ff99cc;">(touch <span style="color: #ff99cc;">== 1 && last_touch <span style="color: #ff99cc;">== 0<span style="color: #ff99cc;">) <span style="color: #ff99cc;">{
                led_state<span style="color: #ff99cc;"> = !led_state;
                ret<span style="color: #ff99cc;"> = led_gpio->write<span style="color: #ff99cc;">(led_state<span style="color: #ff99cc;">);
                usleep<span style="color: #ff99cc;">(100000<span style="color: #ff99cc;">);
            <span style="color: #ff99cc;">}
            last_touch<span style="color: #ff99cc;"> = touch;
            usleep<span style="color: #ff99cc;">(1<span style="color: #ff99cc;">);
        <span style="color: #ff99cc;">}
        <span style="color: #f7ba00;">delete led_gpio;
        <span style="color: #f7ba00;">delete touch_gpio;
        <span style="color: #f7ba00;">return ret;
    <span style="color: #ff99cc;">}
    
    


Again we talked this over and while this code was clearly more complex with C++ objects the core of the program was still similar and the same. Then we compiled and ran this code:

    
    $ g++ AC_ledMRAA.c -o AC_ledMRAA -lmraa
    $ sudo ./AC_ledMRAA
    
    


No real difference between this and AC_ledGPIO, or AC_led_SOC, touch the switch and the led went on, touch it again and the led went off. Exactly as intended.

Then the question arose, did the program have to run as root (sudo) and the answer is to control hardware you have to be root. So there is at least 3 ways to accomplish this:



 	
  1. Start as root, stay root. OK for small test programs but not a good idea for larger long running programs that are exposed to the public. If anyone finds a security hole and gets control they have full root.

 	
  2. Start as root, open the GPIO pins needed assign them a group, make sure your user is in the group and set permissions of 770 or some such. Then drop root group and user privileges, using the setuid() setgid() calls back to your regular group and user. Make sure you use the setgid call first or you won’t be able to after you use the setuid call. Use Google, there are lots of examples on how to do this correctly.

 	
  3. Another option is to open all of the GPIO pins at boot time, assign a group to the pins and set permissions to 770 or some such, and add your user to that group. This requires opening the GPIO pins as shared and not to close the GPIO on exit or no one else can use the GPIO.


So all methods have issues. There are likely other ways to do this too.

From here we moved on to installing libsoc on a dragonboard 410c with a Debian image. That will be the topic of another blog entry.
