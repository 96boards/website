---
title: PWM in Dragonboard410c
author: Manivannan Sadhasivam
date: 2018-05-18 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
    thumb: pwm-thumb.png
categories: blog
tags: 64-bit, 96Boards, ARM, ARMV8, Aarch64, Dragonboard410c, PWM, Servo Motor
---

# Introduction

Hello and Welcome to the blog of **PWM in Dragonboard410c**. This blog
summarises the recently added on board PWM functionality in [Dragonboard410c](https://www.96boards.org/product/dragonboard410c/),
a most popular consumer edition board in 96Boards family.

# PWM

PWM is the Pulse Width Modulation, a technique used for producing the digital
signal to control devices such as motors, LEDs etc... PWM consists of two main
componenets:

- Frequency - Number of cycles per second
- Duty Cycle - Period at which the signal is ON

In Linux, hardware PWM peripheral is being managed by the PWM subsystem which
exposes control to userspace via sysfs.

# PWM in Dragonboard410c

Since 96Boards Consumer Edition specification doesn't mandate PWM output
to be exposed on the board, most of our boards didn't make any space for the
dedicated PWM signal. This will become problematic if the boards are used for
any applications which requires PWM control like Servo motor, LED dimming etc...
But luckily for Dragonboard410c, there is one pin **MPP4** available on the
Low Speed header (Pin 28) which comes from the peripheral capable of producing
the PWM output.

The peripheral is **PMIC 8916**, which is a power management IC. It produces
PWM signal for the primary purpose of dimming control of external WLED IC
driver with the help of **LPG** (Light Pulse Generator) module. But this
interface can also be used to control hobby servo motors which draws minimum
current.

The driver implementing the PWM interface in Qualcomm Linux kernel is
*drivers/leds/leds-qcom-lpg.c* and it exposes a single channel PWM interface
for LPG module. This functionality isn't upstreamed yet so you can only
find it in [Linaro Qualcomm Landing team kernel](https://git.linaro.org/landing-teams/working/qualcomm/kernel.git/log/?h=release/qcomlt-4.14).

Following instructions are used to control the PWM output on **MPP4/Pin 28**
from userspace in Linux.

## Prerequisite:

Flash the recent linaro debian build available [here](http://snapshots.linaro.org/96boards/dragonboard410c/linaro/debian/latest/).
Both the driver and its relevant devicetree entries are enabled by default.

## Controlling PWM from Userspace

Below commands can be used to generate PWM at a frequency of *100KHz* with
*50%* duty cycle on the **MPP4/Pin 28** on LS header.

```shell
# Export PWM 0
$ echo 0 | sudo tee /sys/class/pwm/pwmchip0/export

# Set frequency to 100KHz (value in nanoseconds)
$ echo 10000 | sudo tee /sys/class/pwm/pwmchip0/pwm0/period

# Set 50% duty cycle (value in nanoseconds)
$ echo 5000 | sudo tee /sys/class/pwm/pwmchip0/pwm0/duty_cycle

# Enable PWM 0
$ echo 1 | sudo tee /sys/class/pwm/pwmchip0/pwm0/enable
```

> Note: Both Frequency and Dutycycle should be specified in Nanoseconds.

Below is the script which can be used to sweep a hobby servo across its
useful range:

```shell
#!/bin/bash

echo sweep servo position at 50Hz nominal freq

# hobby servos want a pulse between 1ms (full CCW), 1.5ms (center) and 2ms (full CW) repeated every 20ms (50Hz)

PERIOD=20000000 #50Hz
MIN_DUTY=1000000 #1mS
MAX_DUTY=2000000 #2ms
DUTY=$MIN_DUTY  # initial duty cycle 1ms
INC=10000       # 1% 10uS

echo 0 | sudo tee /sys/class/pwm/pwmchip0/export
echo $PERIOD | sudo tee /sys/class/pwm/pwmchip0/pwm0/period >/dev/null
echo $DUTY | sudo tee /sys/class/pwm/pwmchip0/pwm0/duty_cycle >/dev/null
echo 1 | sudo tee /sys/class/pwm/pwmchip0/pwm0/enable >/dev/null

while [ $DUTY -lt $MAX_DUTY ]; do
        echo $DUTY | sudo tee /sys/class/pwm/pwmchip0/pwm0/duty_cycle >/dev/null
        let DUTY=DUTY+INC
        sleep 0.1
        printf %d\\r  $DUTY
done
```

> Note: Due to hardware limitation, the frequency might be little off and dutycycle
>       won't be available in exact steps.


# Conclusion

As said above, this PWM interface can only be used for controlling a LED or hobby
servo motor which draws very low current. This **should not** be used for
controlling any high end motors as it might damage the board.

I hope that this blog provided a good overview of the PWM functionality available
in Dragonboard410c. This same information can also be found in [96Boards Documentation](https://github.com/96boards/documentation/blob/master/consumer/dragonboard/dragonboard410c/guides/pmic-pwm.md).
