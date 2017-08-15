---
author: Manivannan Sadhasivam
comments: true
date: 2017-08-11 01:01:54+00:00
layout: post
link: http://www.96boards.org/blog/self-balancing-bot-using-96boards-part1/
slug: self-balancing-bot-using-96boards-part1
featured_image: mpu6050.jpg
thumbnail_image: mpu6050-thumb.jpg
title: Self Balancing Bot using 96Boards - Part 1
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
- HiKey
- I Squared C
- I2C
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- Open Hours
- open source
- OpenHours
- Reference Platform
- rpb
- U-Boot
- Bot
- Self balancing Bot
- Robotics
- IMU
- Complimentary Filter
- OpenGL
- pygame
- 3D
---

# **Introduction**

Welcome to **Part 1** of our **Self Balancing Bot using 96Boards** blog series. This is the continuation of [previous blog](http://www.96boards.org/blog/introducing-self-balancing-bot-using-96boards/)
where we introduced our new project to community. In this blog we are going to see how to interface **IMU** with 96Boards. 
Well, there are many IMU interfacing tutorials out there online, what is so special with this? Answer to this question lies in the 
fact that we are going to see how to 3D render the IMU data on 96Boards itself using **OpenGL**. This will allow us to explore
the processing capability of 96Boards.

# **What is IMU?**

[IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) is the Inertial Measurement Unit used to measure acceleration,
angular velocity and magnetic field. IMU commonly consists of 3 parts:

1. Accelerometer - Used to measure acceleration/tilt
2. Gyroscope - Used to measure angular velocity/orientation
3. Magnetometer - Used to measure magnetic field

Most of the time, these sensors are combined to form an Interial Measurement Unit (IMU). If Accelerometer is used alone it can
give 3 degree of freedom which is also called 3-DoF. If a combination of Accelerometer and Gyroscope is used, we can get 6
degree of freedom which is also called 6-DoF. A combination of all of the above three sensors will give 9 degree of freedom
which is also called 9-DoF.

In this blog, we are going to see how to interface 6-DoF [IMU-MPU6050](http://www.amazon.in/GY-521-Mpu6050-Accelerometer-Arduino-REES52/dp/B008BOPN40/ref=sr_1_1?ie=UTF8&qid=1501573522&sr=8-1&keywords=mpu6050) 
with 96boards. Since our end goal is to build a Self Balancing bot, we don't need magnetometer at all.

## **MPU6050**

MPU6050 consists of three 16 bit Analog to Digital Converters (ADCs) for digitizing the analog data from inbuilt Gyroscope 
and Accelerometer units. Gyroscope is available with the full scale range of ±250, ±500, ±1000, ±2000°/sec (dps) and 
Accelerometer is available with full-scale range of ±2g, ±4g, ±8g, and ±16g. It also features on board Digital Low Pass Filter
(DLPF) and supports I2C,SPI interfaces for communication. This breakout board also has the 5v Low Dropout Regulator (LDO), which
allows us to use the Sensors Mezzanine I2C port for communication.

Accelerometer and Gyroscope readings are stored in 3 different registers for each axis. Each axis gives 16bit data, which can
be read using the following code snippet:

```c
/* read raw accel data */
accel_data[0] = i2c_read_word(i2c, MPU6050_REG_RAW_ACCEL_X) / MPU6050_ACCEL_SCALE;
accel_data[1] = i2c_read_word(i2c, MPU6050_REG_RAW_ACCEL_Y) / MPU6050_ACCEL_SCALE;
accel_data[2] = i2c_read_word(i2c, MPU6050_REG_RAW_ACCEL_Z) / MPU6050_ACCEL_SCALE;
	
/* read raw gyro data */
gyro_data[0] = i2c_read_word(i2c, MPU6050_REG_RAW_GYRO_X) / MPU6050_GYRO_SCALE;
gyro_data[1] = i2c_read_word(i2c, MPU6050_REG_RAW_GYRO_Y) / MPU6050_GYRO_SCALE;			 
gyro_data[2] = i2c_read_word(i2c, MPU6050_REG_RAW_GYRO_Z) / MPU6050_GYRO_SCALE;
```
[libmraa](https://github.com/intel-iot-devkit/mraa) is used to communicate IMU using I2C0 bus.

# **Complementary Filter**

In general, the Accelerometer data is prone to noise and Gyroscope data will drift over time. So, we can't use those two data
independently. The solution is to use some sort of sensor fusion algorithm which combines these two data and also filters out
the noise/drift. Vastly employed filter is the Complementary filter, which is a combination of LPF, HPF and an Integrator. More
detailed explanation can be found [here](http://d1.amobbs.com/bbs_upload782111/files_44/ourdev_665531S2JZG6.pdf).

Complementary filter usage is shown in *src/imu.c* as follows:

```c
/* implement complementary filter for sensor fusion */
angle_x = (0.98)*(angle_x + (gyro_data[0] * 0.02)) + (0.02 * x_rot);
angle_y = (0.98)*(angle_y + (gyro_data[1] * 0.02)) + (0.02 * y_rot);
```
# **3D rendering**

Alright, we are now done with getting data from IMU. But it'd be great to visualize the data using graphics processing
capability of 96Boards. For doing this, we are going to use **OpenGL** and **pygame** inorder to get data from IMU and render it on 
3D space.

A small python script will implement 3D processing based on obtained data from C program. Basically, these two processes 
(C and Python) communicates using **Unix Socket** IPC mechanism. But, for running two processes simultaneously we have to
run the C program (server) in background and Python program (client) in foreground.

Source code and detailed instructions can be found in 96Boards [projects repository](https://github.com/96boards/projects/blob/master/imu)

Demonstration video:

{% include media.html media_url="https://youtu.be/mswTk_Sliiw" %}

# **Conclusion**

So, we have seen how to interface 6 DoF IMU with 96boards as well as rendering the data using OpenGL. I hope this blog post
showcased the processing capability of 96Boards in a best possible way :-) 

If this post inspired you, please try to implement the same using instructions provided and share your experience with us. We'd
love to hear from community.
