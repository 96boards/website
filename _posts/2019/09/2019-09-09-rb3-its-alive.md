---
title: It's ALIVE | OpenCV on RB3 Pt. 6 | Qualcomm RB3 Robotic Arm Project
author: Sahaj Sarup
date: 2019-09-09 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shield, hat
---

## Introduction

It listens, It sees, It MOVES, IT's ALIVE!!!

All the code in this blog is available at : [https://github.com/ric96/RB3-RoboticArm](https://github.com/ric96/RB3-RoboticArm)

And once the project is finalized will be pushed to : [https://github.com/96boards-projects/RB3-RoboticArm](https://github.com/96boards-projects/RB3-RoboticArm)

To install all the dependencies on a Debian Buster build for RB3, run the following script:
[install-opencv.sh](https://github.com/ric96/RB3-RoboticArm/raw/master/install-opencv.sh)

You will also need to install the following pip packages.
`sudo pip3 install SpeechRecognition pymemcached`

Today we'll be looking specifically at the `main.py` file in our project directory.

***

## Elephant-uino in the room.

Yes, I am using an Arduino. No, its not permanent it'll be removed probably by the time you read this blog.

The Arduino is being used as a stop-gap replacement till the correct I2C firmware(s) for the Snapdragon 845 SoC on the RB3 is made available.

The framework for getting the arm to move will be very similar whether the Arm is controlled by Arduino or directly by the RB3.

## Arduino Bits

**Import and declarations**
```c++
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

#define MIN_PULSE_WIDTH 800
#define MAX_PULSE_WIDTH 2200
#define DEFAULT_PULSE_WIDTH 1500
#define FREQUENCY 50

int i = 90, j = 30, k = 90;
char a;
```
- We use Adafruit's PWMServoDriver library to drive the Servos using a PCA9685 16 channel PWM driver.
- MIN / MAX / DEFAULT_PULSE_WIDTH and FREQUENCY are specific to the servos used, make sure to read that datasheet for the servos that you intend to use.
- Integers i, j and k are declared with default position values for the serve, these value will later be used to track the servos.
	- i: is used for the base
	- j: is used for the up-down wrist servo
	- k: is used for the shoulder and 


**Setup**
```c++
void setup() 
{
Serial.begin(115200);
pwm.begin();
pwm.setPWMFreq(FREQUENCY);
pwm.setPWM(2, 0, pulseWidth0(90));
pwm.setPWM(1, 0, pulseWidth0(90));
pwm.setPWM(0, 0, pulseWidth0(i));
pwm.setPWM(3, 0, pulseWidth0(j));
pwm.setPWM(5, 0, pulseWidth0(0));
}
```
- Boring setup things. Mostly just enable UART and set all the servos to their default position.

**Degree to PWM**
```c++
int pulseWidth0(int angle)
{
int pulse_wide, analog_value;
pulse_wide = map(angle, 0, 180, MIN_PULSE_WIDTH, MAX_PULSE_WIDTH);
analog_value = int(float(pulse_wide) / 1000000 * FREQUENCY * 4096);
//Serial.println(analog_value);
return analog_value;
}
```
- This function takes in Servo position value in terms of angle, and then converts that to the PWM value to be sent to PCA9685 controller.

**The LOOP**
```c++
if(Serial.available())
 {
  a = Serial.read();

    if (a == 'a' && i != 165)
  {
    pwm.setPWM(0, 0, pulseWidth0(i));
    i++;
    //delay(200);
  }
  else if (a == 'd' && i != 0)
  {
    pwm.setPWM(0, 0, pulseWidth0(i));
    i--;
    //delay(200);
  }
  else if (a == 'w' && j != 165)
  {
    pwm.setPWM(3, 0, pulseWidth0(j));
    j++;
    //delay(200);
  }
   else if (a == 's' && j != 0)
  {
    pwm.setPWM(3, 0, pulseWidth0(j));
    j--;
   // delay(200);
  }

    else if (a == 'r' && k != 160)
  {
    pwm.setPWM(2, 0, pulseWidth0(k));
    pwm.setPWM(1, 0, pulseWidth0(k));
    k++;
    if ( k >= 159 )
    {
      Serial.print('s');
    }

    //delay(100);
  }
   else if (a == 'f' && k != 0)
  {
    pwm.setPWM(2, 0, pulseWidth0(k));
    pwm.setPWM(1, 0, pulseWidth0(k));
    k--;

    //delay(200);
    if ( k <= 80 )
    {
      Serial.print('q');
    }
  }
   else if (a == 'c')
  {
    pwm.setPWM(5, 0, pulseWidth0(165));
  }
   else if (a == 'o')
  {
    pwm.setPWM(5, 0, pulseWidth0(0));
  }

  else if (a == 'm')
  {
    pwm.setPWM(2, 0, pulseWidth0(90));
    pwm.setPWM(1, 0, pulseWidth0(90));
    pwm.setPWM(0, 0, pulseWidth0(90));
    pwm.setPWM(3, 0, pulseWidth0(30));
    pwm.setPWM(5, 0, pulseWidth0(0));
    i = 90;
    j = 30;
    k = 90;
  }

   a = 'k';

 }
else
  a = 'k';
```
- Since the arduino is communicating to the RB3 over USB-UART and shows up as a tty device on the RB3, so we enable Serial at 115200 baud
- Depending upon what character is sent over uart, position of a specific servo(s) is incremented or decremented by one degree.
- There are also commands to open and close the claw, as well as reset the position og the arm.
- This is basically how the RB3 orders the Arduino to move the Robotic Arm.


# Back to Python on RB3

In my previous blog I talked about the code that handles voice input and detection, we'll be expanding on that today so I won't be repeating the code already explained in my last blog and just append the new stuff.

## Import all the things

![](https://memegenerator.net/img/instances/60968180/python-programming-import-all-the-things.jpg)

We start with importing the following libraries:

```python
import serial
import time
```

- `seria`: used to open the Arduino's serial port and communicate with it.
- `time`: used for sleep function to add delays.

***

## Declare all the variables

![](http://www.quickmeme.com/img/37/3718582dec2f47042c0aa7e92cb29662a32bf4f6a3b5dfc1d52fd17d530b970a.jpg)

Some quick global variable declaration:

```python
serialPort = serial.Serial(port = "/dev/ttyUSB0", baudrate=115200, bytesize=8, timeout=0, stopbits=serial.STOPBITS_ONE)
```

- Initialize the /dev/ttyUSB0 port connected to the arduino at 115200 baud.

## Main: one loop to rule them all:
**It all starts with a** `while True:`

**Voice input**
```python
voice_data = run()
        if (voice_data != 0):
```

- This user voice input mechanism is the same as explained in the previous blog.

**Assign color and initially fetch data from the memcached local server**
```python
			if (voice_data[1] == "blue"):
                col = 0

            elif (voice_data[1] == "yellow"):
                col = 1

            elif (voice_data[1] == "red"):
                col = 2

            shape_data_str = client.get('vision_data')
            shape_data = json.loads(shape_data_str)
            loca[0] = shape_data[col][0][0]
            loca[1] = shape_data[col][0][1]
```
- The value assigned to call is representative of the location of data specific to a particular contour in shape_data list.
- After the `col` value is assigned, fetch Xpos and Ypos data and save it ina list called `loca`

**Start Moving the Arm**

```python
            if(shape_data[col][0][2] == voice_data[2]):

				# Align the arm so that the X pos of the object falls in the center of the frame
                while ( ( ( loca[0] >= ((600/2)+10) ) or ( loca[0] <= ((600/2)-10) ) ) ):
                    print("Required Object at X:" + str(loca[0]) + " Y: " + str(loca[1]))
                    shape_data_str = client.get('vision_data')
                    shape_data = json.loads(shape_data_str)
                    loca[0] = shape_data[col][0][0]
                    loca[1] = shape_data[col][0][1]
                    if (loca[0] <= ((600/2)+10)):
                        print("d")
                        serialPort.write(str.encode('d'))
                    elif (loca[0] >= ((600/2)+10)):
                        print("a")
                        serialPort.write(str.encode('a'))
                    time.sleep(0.1)

				# Align the arm so that the Y pos of the object falls in the center of the frame
                while ( ( ( loca[1] >= ((480/2)+10) ) or ( loca[1] <= ((480/2)-10) ) ) ):
                    print("Required Object at X:" + str(loca[0]) + " Y: " + str(loca[1]))
                    shape_data_str = client.get('vision_data')
                    shape_data = json.loads(shape_data_str)
                    loca[0] = shape_data[col][0][0]
                    loca[1] = shape_data[col][0][1]
                    if (loca[1] <= ((480/2)+10)):
                        print("s")
                        serialPort.write(str.encode('s'))
                    elif (loca[1] >= ((480/2)+10)):
                        print("w")
                        serialPort.write(str.encode('w'))
                    time.sleep(0.1)
                test1=0
```
- if the shape name matches the user voice input:
	- move the arm left or right so that the Xpos of the object falls approximately at the center of the frame.
	- do the same for Ypos by moving the wrist forward and backwards
	- Now the object should be approximately in the middle of the screen.


- Start lowering the Arm till it reaches a predetermined distance from the ground
- Said predetermined value is hardcoded in the arduino code
```python
                while (serialPort.read().decode() != "s"):
                    print("r")
                    serialPort.write(str.encode('r'))
                    time.sleep(0.1)
```

- Move the Wrist a few steps back to correct the offset created by moving the actual arm.
```python
                while (test1 != 6):
                    test1 = test1 + 1
                    print("s")
                    serialPort.write(str.encode('s'))
                    time.sleep(0.1)
```


- Grab
```python
                serialPort.write(str.encode('c'))
                serialPort.flushInput()
```

- Pick-up, Hold, throw and reset
```python
                while (serialPort.read().decode() != "q"):
                    print(serialPort.read().decode())
                    serialPort.write(str.encode('f'))
                    time.sleep(0.1)

                time.sleep(3)

                serialPort.write(str.encode('m'))
```

# VIDEO

{% include media.html media_url=" https://youtu.be/73wfnAmwbZE" %}


***
