---
author: Manivannan Sadhasivam
comments: true
date: 2017-08-04 01:01:54+00:00
layout: post
featured_image: self-balancing-bot.jpg
thumbnail_image: self-balancing-bot-thumb.jpg
title: Introducing Self Balancing Bot using 96Boards
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
- DC Motor
- PID
---

# **Introduction**

Finally, 96Boards is doing Robotics with Self Balancing Bot! Yes, you heard it right :-) This is the introductory blog for
Self Balancing Bot using [96Boards CE](https://www.96boards.org/products/ce/). Like our previous project [Home Surveillance](https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/),
this project is also organized in series and each part will accompany a blog and a demonstrating video. Entire project has
been framed in such a way it suits readers of very little exposure to Robotics as well as Pro's.

# **Self Balancing Bot**

A Self Balancing Bot also called as **Segway** is a semi-autonomous (autonomous sometimes) Bot capable of balancing itself on
the ground. It works on the basis of **Balancing Pendulum** principle. Bot balances itself steadily by moving back and forth
to counteract the fall. As per the **Balancing Pendulum** concept, Bot needs to be designed in such a way that the [centre
of gravity](https://en.wikipedia.org/wiki/Center_of_mass#Center_of_gravity) should be high in order to get large [moment of inertia](https://en.wikipedia.org/wiki/Moment_of_inertia). Then only
Bot will fall at a slow pace allowing us to control the fall by moving back and forth.

If we dive deep into the control system of this Bot, we can easily find the use of one of the most commonly used feedback controller
which is [PID Controller](https://en.wikipedia.org/wiki/PID_controller). The heart of this Self Balancing Bot is the [IMU
(Inertial Measurement Unit)](https://en.wikipedia.org/wiki/Inertial_measurement_unit), which is used to determine the
angle of Bot. IMU in combination with PID controller keeps the Bot steady by detecting the fall and moving the wheels to
counteract it.

Alright, we can now look into the BoM for this project.

# **Bill of Materials (BoM)**

BoM has been prepared in such a way that it takes very little time to build the Hardware. But if you really want to get your
hands dirty by doing carpentric work, you can always build the chasis on your own. For the sake of this project, I've decided to go with a ready made chasis
available online.

* [Chasis Kit](https://nevonexpress.com/Self-Balancing-Robot-Chassis-Body-Diy.php) - 1 Nos
* [IMU - 6 DoF](http://www.amazon.in/GY-521-Mpu6050-Accelerometer-Arduino-REES52/dp/B008BOPN40/ref=sr_1_1?ie=UTF8&qid=1501573522&sr=8-1&keywords=mpu6050) - 1 Nos
* [Motor Driver - L298N](http://www.amazon.in/Robodo-Electronics-Motor-Driver-Module/dp/B00N4KWYDE/ref=pd_sbs_328_1?_encoding=UTF8&psc=1&refRID=YESQPMRAEF73WTRQPRP1) - 1 Nos
* [DC Geared Motor with Encoder](http://www.rhydolabz.com/robotics-motor-drivers-c-155_162/751-metal-gearmotor-25dx54l-mm-lp-12v-with-48-cpr-encoder-p-2281.html) - 2 Nos
* [DC to DC Boost converter](http://www.amazon.in/KitsGuru-Step-up-Adjustable-Booster-Current/dp/B00HV59922) - 1 Nos
* [11.1v 2200mAh Rechargeble Battery Kit for Board](http://robokits.co.in/batteries-chargers/lithium-ion-battery/li-ion-11.1v-2200mah-2c-with-inbuilt-charger-protection) - 1 Nos
* [11.1v 2200mAh Rechargeble Battery Kit for Motor](http://robokits.co.in/batteries-chargers/lithium-ion-battery/lithium-ion-rechargeable-battery-pack-11.1v-2200mah-2c) - 1 Nos
* [Lithium Battery Charger](http://www.amazon.in/Lithium-Battery-Charger-Protection-Module/dp/B0728D6MTV/ref=sr_1_6?s=industrial&ie=UTF8&qid=1501652848&sr=1-6&keywords=lithium+battery+charger+with+battery+protection) - 1 Nos

The above BoM makes it into almost any Robotics projects. Only difference here would be the use of two separate batteries for motor
and CE board.

# **Project Roadmap**

As said earlier, this project has been divided into series of parts. At the end doing each part, I'll post a blog as well as
a demonstration video.

* [**Part - 1: Measuring tilt using IMU**](https://github.com/96boards-projects/self_balancing_bot#3-measuring-tilt-using-imu)
  * In this part, IMU will be used to measure the tilt of Bot. A simple filter will be employed in filtering out the noise from the Accel and Gyro data.
* [**Part - 2: Self Balancing Bot - Rev 1**](https://github.com/96boards-projects/self_balancing_bot#4-self-balancing-bot---rev-1)
  * This part focusses on providing the Revision 1 of Self Balancing Bot using 96Boards. This involved using the Complementary filter for sensor fusion and PID controller for stabilizing the bot.
* [**Part - 4: Establishing Bluetooth communication to CE board**](https://github.com/96boards-projects/self_balancing_bot#5-establishing-bluetooth-communication-to-ce-board)
  * This part will explain setting up communication link between host PC and CE board using Bluetooth. This will also include sample demo of sending commands over Bluetooth to CE board for controlling the peripherals.
* [**Part - 5: Self Balancing Bot - Rev 2**](https://github.com/96boards-projects/self_balancing_bot#6-self-balancing-bot---rev-2)
  * This part will provide the Revision 2 of the Self Balancing Bot which uses onchip DMP in MPU6050 for sensor fusion. This
  will improve the stability of bot drastically.

# **Conclusion**

So, that's it about the Self Balancing Bot introduction. I am really excited to see this project running on 96Boards :D.
Keep your fingers crossed for the first part of this project, where we'll see how to measure the tilt of the Bot using 6 DoF
IMU. You can find the entire project on our 96Boards [96Boards projects repository](https://github.com/96boards-projects/self_balancing_bot).
