---
author: ldts
comments: true
date: 2015-12-16 19:56:47+00:00
layout: post
link: https://www.96boards.org/blog/servo-motor-control/
slug: servo-motor-control
featured_image: youtube-banner.jpg
title: 'Servo Motor Control: generating a stable PWM signal with Xenomai'
wordpress_id: 10095
Boards:
- DragonBoard 410c
- HiKey
categories:
- blog
tags:
- GPIOPWM
- xenomai
---

To control a standard servo motor we need to be able to generate a stable PWM signal of certain characteristics. For servo motor control this typically means a 5V digital square signal pulsing every 20ms with a variable puls e duration of 0.5ms to 2.5 ms; with these signals, a pulse duration of 0.5 ms sets the rotor at a 0 degree angle while a duration of 2.5 ms usually moves it to a 180 degrees position.  However do notice that the pulse duration and the operating voltage may vary depending on the motor.

What is really important for all servo motors is that the PWM signal has to be stable since otherwise the  position of the rotor will start shaking instead of staying in place.


PWM devices often found on SoCs have no fixed purpose and it is  with those devices in mind that the Linux kernel provides a [PWM API.](https://www.kernel.org/doc/Documentation/pwm.txt) This way a standard communication mechanism can be used to drive LEDs or fans or the vibrators used in haptic interfaces for example. But  what can we do when our SoC or platform does not include any PWM  modules? One option is to use one of the available GPIOs (we will probably need a voltage level shifter) and a couple of timers to generate the PWM signal and hope that the timer interrupt latencies are not affected by the overall system behavior.

If we'd rather avoid the risk of having a shaky motor when soft-generating the PWM signal, we should actually patch the Linux kernel with some form of real-time support (this could be preempt-rt,  RTAI,  Xenomai/IPIPE). Just be aware that different real-time providers might result different better latencies depending on the platform, kernel versions, driver stability and so on.

I will use a [Grove Servo ](http://www.seeedstudio.com/wiki/Grove_-_Servo)and [Xenomai/I-PIPE ](http://xenomai.org/start-here/)on the 96Boards [HiKey](https://www.96boards.org/products/ce/hikey/) platform to demonstrate with an example. 

**Patching the Linux Kernel with real-time support**
In order to clarify terms a little I'll start by mentioning that Xenomai3 is not a real-time provider (which is optional) but an RTOS abstraction layer: Xenomai does allow VxWorks, pSoS and other RTOS applications to run on Linux without major modifications. But in order to guarantee the deadlines of any of its clients Xenomai logically does require realtime support.

Since Xenomai3, realtime-support can be achieved either by a kernel patched with  [PREEMPT_RT ](https://rt.wiki.kernel.org/index.php/Main_Page)or by enabling its own co-kernel (named [Cobalt](https://xenomai.org/documentation/xenomai-3/html/xeno3prm/group__cobalt.html#details)). In the later case, the Cobalt co-kernel would execute as the head of an interrupt pipeline (I-PIPE formerly known as [ADEOS)](http://www.opersys.com/ftp/pub/Adeos/adeos.pdf) while Linux would be the secondary domain in the pipe.
In this exercise we will use Cobalt as the real-time provider for simplicity.

In order the be able to execute the Cobalt co-kernel, the Linux kernel needs to first be patched with what in Xenomai terms is called an interrupt pipeline:
" The I-pipe inserts itself between the interrupt-management hardware and Linux. Any attempt from any Linux component to disable interrupts results in Linux's I-pipe stage to be stalled. While stalled, a pipeline stage will not receive interrupts. However, any pipeline stage of higher priority will continue receiving interrupts, unless it too stalled its own stage. It follows that interrupts are almost never disabled"

The interrupt pipeline is delivered in the form of a kernel patch and maintained outside of the Linux kernel tree.
For HiKey all that would be required is to replace the kernel from any of the [releases](https://builds.96boards.org/releases/hikey/linaro/debian/latest/) currently available with the I-PIPE aarch64 patched kernel for this board.

For 96Boards HiKey users it is enough with cloning the following repository checking out the hikey branch:

```bash
$ git clone http://git.xenomai.org/ipipe-jro.git linux.git
$ cd linux.git
$ git checkout hikey

```

Xenomai3  for aarch64 remains work in progress and it hasn’t been merged yet in the project’s master branch. Despite of this some effort was invested during our last Linaro Connect 2015 in SFO and support was added to both 96Boards: HiKey running kernel v3.18 (all Linaro HiKey releases to date) and Dragon 410c running kernel v4.0.0 (Linaro Release [15.07](https://builds.96boards.org/releases/dragonboard410c/linaro/ubuntu/15.07/)).

So in order to install the Cobalt co-kernel in the I-PIPE enabled kernel just do:
```bash
$ git clone [http://git.xenomai.org/xenomai-jro.git/](http://git.xenomai.org/xenomai-jro.git/) xenomai3.git
$ cd xenomai3.git
$ git checkout hikey
$ cd scripts/
$ ./prepare-kernel.sh --arch=arm64 --linux=$kernel

```

At this point you have a Linux kernel patched with I-PIPE and the Xenomai Cobalt co-kernel enabled and registered with the I-PIPE framework.

## Installing the Xenomai libraries and demos

Now that we have a real-time enabled kernel we need to configure it and build it. In this example I am cross compiling the kernel (I am lucky to have a good server) but you could choose to build locally.
When you configure your kernel, you’ll need to to disable power management and enable the Xenomai [gpiopwm](http://git.xenomai.org/xenomai-jro.git/tree/kernel/drivers/gpiopwm/gpiopwm.c?h=hikey) driver

```bash
$ cd $kernel
$ make ARCH=arm64 defconfig
$ make ARCH=arm64 menuconfig
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j8
```

If you are already running the latest HiKey release you will be using grub.cfg to choose kernels at boot time.
I suggest you create an NFS share ($share) on your server which you’ll mount on the HiKey file system. We will use this share to install the kernel modules and the Xenomai libraries as well as copying the Image and device tree.

```bash
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=$share modules_install   
$ cp arch/arm64/boot/Image $share/
$ cp arch/arm64/boot/dts/hi6220-hikey.dtb $share/
```

Building Xenomai is usually done outside the tree after bootstraping:
```bash
$ cd xenomai3.git
$ scripts/bootstrap
```

Now create a build directory somewhere in your x86_64 build server:
```bash
$ mkdir build
$ cd build
$ $xenomai/configure --with-core=cobalt  --enable-smp --disable-tls --enable-fortify --enable-maintainer-mode --disable-registry --disable-pshared --disable-lorew-clock --enable-assert --disable-doc-install --build=x86_64 --host=aarch64-linux-gnu  CFLAGS="-march=armv8-a" --prefix=/usr/xenomai
$ make -j8
$ make install DESTDIR=$share
```

After this step, the NFS share should contain:

  1. lib/modules/_kernel_version_

  2. Image

  3. hi6220-hikey.dtb

  4. usr/xenomai


Now it is the time to mount the $share partition on the HiKey (unless you modified fstab to always do this) and install the new kernel, libraries and drivers. This basically means modifying the grub.cfg entry to use the new Image/device tree and copying lib/modules and usr/xenomai to the root file system on your HiKey.
** **

**Running Xenomai**
After booting, add an entry to /etc/ld.so.conf.d so the applications can find the Xenomai libraries
```bash
$ sudo echo “/usr/xenomai/lib” > /etc/ld.so.conf.d/xenomai.conf
```
Also add /usr/xenomai/bin to your $PATH. You can now check that Xenomai is actually functional by executing the latency test:

```bash

$ root@linaro-alip:~# latency
== Sampling period: 1000 us
== Test mode: periodic user-mode task
== All results in microseconds
warming up...
RTT| 00:00:02 (periodic user-mode task, 1000 us period, priority 99)
RTH|----lat min|----lat avg|----lat max|-overrun|---msw|---lat best|--lat worst
RTD| 3.333| 3.416| 17.500| 0| 0| 3.333| 17.500
RTD| 3.333| 3.428| 18.333| 0| 0| 3.333| 18.333
RTD| 3.333| 3.376| 5.000| 0| 0| 3.333| 18.333
RTD| 3.333| 3.376| 5.000| 0| 0| 3.333| 18.333
RTD| 3.333| 3.376| 5.000| 0| 0| 3.333| 18.333
RTD| 3.333| 3.376| 5.000| 0| 0| 3.333| 18.333
RTD| 3.333| 3.555| 19.167| 0| 0| 3.333| 19.167
RTD| 3.333| 3.555| 19.167| 0| 0| 3.333| 19.167
RTD| 3.333| 3.555| 19.167| 0| 0| 3.333| 19.167
RTD| 3.333| 3.555| 19.167| 0| 0| 3.333| 19.167
RTD| 3.333| 3.380| 5.000| 0| 0| 3.333| 19.167
RTD| 3.333| 3.380| 5.000| 0| 0| 3.333| 19.167
RTD| 3.333| 3.499| 15.833| 0| 0| 3.333| 19.167

```

## Generating a PWM signal with a GPIO

I wrote the following [RTDM ](http://www.xenomai.org/documentation/trunk/html/api/group__rtdm.html) (Real Time Driver Model, this is a link to Jan Kiszka's [paper](https://xenomai.org/documentation/branches/v2.3.x/pdf/RTDM-and-Applications.pdf)) [driver](http://git.xenomai.org/xenomai-jro.git/tree/kernel/drivers/gpiopwm/gpiopwm.c?h=hikey) to generate the PWM signal. If you configured your kernel properly, you should now see the eight gpiopwm nodes in /dev/rtdm/.  We should be able to control eight servo motors using eight different GPIOS.  The driver itself is no more complex than a couple of timers associated to each node to set/clear the GPIO line under application control: in this way, the application can specify the duty cycle of the PWM signal and therefore control the motor.

The driver as I said before it is actually quite straightforward but of course feel free to contact me or post questions on the 96Boards forums if you need any clarifications.

I also wrote this POSIX Xenomai [application](http://git.xenomai.org/xenomai-jro.git/tree/demo/posix/cobalt/gpiopwm.c?h=hikey) that shows how to use the driver (in automatic sweep mode or in manual mode using the keyboard to setup the different duty cycles)

Usage:
```bash
gpiopwm --config=dev:min:max:period:gpio:duty [--sweep=step | --manual] --dbg
```
where the config parameters represent:

```bash

--config:
dev: /dev/rtdm/gpio-pwm id [0..7]
min: min active period in usec
max: max active period in usec
period: base signal period in nsec
gpio: gpio pin number
duty: default duty cycle [0..100]

--sweep:
step: sweep all duty cycle ranges in a loop
in step increments [default 1, value from 0..100]

--manual control duty cycle from the command line
--dbg enable driver debug output

An example of usage for a servo motor control (20ms period, 700usec min, 2200usec max cycle using GPIO 488 in ) would be

$ gpiopwm --config=1:700:2200:20000000:488:0 --sweep=100

```

This  would cause the motor to [sweep](https://www.youtube.com/watch?v=GKPBze0uC3w&feature=em-upload_owner) (warning: the previous link is a video) from 0 to 180 degrees back and forth in 180 degrees increments (from 0 to 180 back and forth).

Enabling the --debug options will generate information in the console  every time there is a variation in the duty period due to a timer expiring early/late with respect to previous positions.

It will also warn if that variation in the duty period would cause the motor to miss a position.



I hope that this example can be of some help to those of you trying to control servo motors from any of the 96Boards.

Have fun!
