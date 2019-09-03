---
title: Playing with the Sensors | ShiraTech LTE and Sensor Mezzanine
author: Sahaj Sarup
date: 2018-07-27 00:01:00+00:00
image:
    featured: true
    path: /assets/images/blog/ltesensor.jpg
    name: ltesensor.jpg
    thumb: ltesensor-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB820c, Rock960, Hikey960, enterprise edition, product, single board computer, linaro, linux, open source, openhours, robert wolff, podcast, technology, tech, computer, hardware, software, groupgets, qwerty, embedded, crowd fund, mezzanine, community
---

# Introduction

In one of my older blog [posts](/blog/sneak-peak-lte-mezzi/), I wrote about the LTE side of things on this Mezzanine. However, in this one, we are going to discuss how to get three of the four on-board sensors working.
The LTE mezzanine has the following set of sensors:
- [Bosch BNO055](https://www.bosch-sensortec.com/bst/products/all_products/bno055): 3 Sensors in one device - triaxial 16bit gyroscope, triaxial 14bit, and full performance geomagnetic sensor.
- [Analog Device ADUX1020](http://www.analog.com/en/products/optical/optical-sensing-technology/optical-mixed-signal-devices/adux1020.html):
	- Multifunction photometric sensor and signal conditioning
	- Gesture recognition with 0.5cm to 15cm range
	- Proximity sensing to 20cm
	- Gesture/proximity works under infrared (IR) transparent glass or other materials
- [ST VL53L0CX](https://www.st.com/en/imaging-and-photonics-solutions/vl53l0x.html): Time of Flight Sensor
- [Analog Device ADT7410](http://www.analog.com/en/products/analog-to-digital-converters/integrated-special-purpose-converters/digital-temperature-sensors/adt7410.html): A High-performance temperature sensor

## Bosch BNO055
This sensor is luckily supported by [UPM](https://upm.mraa.io/), so it is easy for us to use it via upm and mraa, ant to do that:
1. [Build and Install Mraa](https://github.com/intel-iot-devkit/mraa/blob/master/docs/building.md)
2. [Build UPM](https://github.com/intel-iot-devkit/upm/blob/master/docs/building.md)

  Before compiling upm, change the i2c bus from 0 to 1 in the bno055 example, in the file ```examples/c/bno055.c``` change line ```bno055_context sensor = bno055_init(0, BNO055_DEFAULT_ADDR);``` to ```bno055_context sensor = bno055_init(0, BNO055_DEFAULT_ADDR);```

  Build with cmake flag ```-DBUILDEXAMPLES=ON```.

3. Run Example: ```./examples/c/bno055-example-c```

Output before calibration:

```
root@linaro-alip:~/upm/build# ./examples/c/bno055-example-c
First we need to calibrate.  4 numbers will be output every
second for each sensor.  0 means uncalibrated, and 3 means
fully calibrated.
See the UPM documentation on this sensor for instructions on
what actions are required to calibrate.
Magnetometer: 0 Accelerometer: 0 Gyroscope: 0 System: 0
Magnetometer: 0 Accelerometer: 0 Gyroscope: 3 System: 0
Magnetometer: 0 Accelerometer: 0 Gyroscope: 3 System: 0

```

Output after calibration:

```
Calibration complete.

Euler: Heading: 114.875000 Roll: 5.312500 Pitch: 12.125000 degrees
Quaternion: W: 0.534363 X: -0.096436 Y: 0.063538 Z: -0.837341
Linear Acceleration: X: 0.180000 Y: -0.070000 Z: 0.460000 m/s^2
Gravity Vector: X: 0.910000 Y: -2.050000 Z: 9.540000 m/s^2

Euler: Heading: 114.437500 Roll: 10.500000 Pitch: 10.562500 degrees
Quaternion: W: 0.536682 X: -0.126831 Y: 0.026428 Z: -0.833801
Linear Acceleration: X: 0.240000 Y: -0.070000 Z: 1.350000 m/s^2
Gravity Vector: X: 1.790000 Y: -1.760000 Z: 9.470000 m/s^2

Euler: Heading: 113.562500 Roll: 10.812500 Pitch: 11.125000 degrees
Quaternion: W: 0.542603 X: -0.131958 Y: 0.028076 Z: -0.829102
Linear Acceleration: X: -0.100000 Y: 0.150000 Z: -0.090000 m/s^2
Gravity Vector: X: 1.840000 Y: -1.860000 Z: 9.440000 m/s^2

```

To calibrate while the example is running:
- GYR: Simply let the sensor sit flat for a few seconds.
- ACC: Move the sensor in various positions. Start flat, then rotate slowly by 45 degrees, hold for a few seconds, then continue rotating another 45 degrees and hold, etc. 6 or more movements of this type may be required. You can move through any axis you desire, but make sure that the device is lying at least once perpendicular to the x, y, and z-axis.
- MAG: Move slowly in a figure 8 pattern in the air, until the calibration values reaches 3.
- SYS: This will usually reach 3 when the other items have also reached 3. If not, continue slowly moving the device through various axes until it does.

## ST VL53L0CX
This sensor originally worked using a Licensed API from ST, however, [pololu](https://github.com/pololu) on GitHub created an independent library for Arduous to get this sensor working. Another user on GitHub [mjbogusz](https://github.com/mjbogusz), then used pololu's library to create a generic Linux based library that we can use.

1. Clone the repo: ```$ git clone https://github.com/ric96/vl53l0x-linux```
2. Compile:
```
$ cd build
$ cmake ..
$ make
```
3. Run: ```$ ./examples/single```

Output:
```
Reading74 | 134
Reading75 | 132
Reading76 | 128
Reading77 | 118
Reading78 | 107
Reading79 | 95
Reading80 | 80
Reading81 | 74
Reading82 | 72
Reading83 | 64
Reading84 | 63
Reading85 | 76
Reading86 | 79
Reading87 | 92
```


## Analog Device ADT7410
This is easily the most straightforward sensor to use out of this bunch, [informationsea](https://github.com/informationsea) had a very simple C code available on GitHub which I modified slightly:

1. Clone the repo: ```$ git clone https://github.com/ric96/ADT7410```
2. Build: ```$ make```
3. Run: ```$ ./ADT7410```

Output:
```
length: 4
[00] 10
[01] d0
[02] 80
[03] 00
33.625000
length: 4
[00] 10
[01] d0
[02] 80
[03] 00
33.625000
length: 4
[00] 10
[01] d0
[02] 80
[03] 00
33.625000
```

##  Analog Device ADUX1020
This is one of the more complex gesture sensors that I have seen, so I guess this one deserves a separate and dedicated blog post.
