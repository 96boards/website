---
author: ldts
comments: true
date: 2015-11-06 16:37:17+00:00
layout: post
link: http://www.96boards.org/blog/xenomai-on-the-96boards/
slug: xenomai-on-the-96boards
title: Xenomai on the 96Boards
wordpress_id: 9103
categories:
- blog
tags:
- embedded
- pwm
- real-time
- robot
- xenomai
---

Xenomai is a well established open source Linux project that has been providing GNU/Linux with a number of RTOS emulators for over a decade on almost every processor family; VxWorks, pSOS, VRTX, uITRON and POSIX applications can therefore be run with real-time guarantees alongside native Linux applications.

The fact that these sometimes emulated realtime applications (POSIX other times) can run natively and share resources with the native Linux applications has simplified the porting and integration of many legacy real-time systems in Linux environments.

In a nutshell, with Xenomai, every real-time process is shielded from the rest of the system load running on the cores. And this is actually very cool when you are trying to control a robotic arm!

I first discovered this project back in 2004 when evaluating a number of options (RTLinux, RTAI, LynxOS..) to migrate Xerox MFPs multiprocessor/multi RTOS platforms to a GNU/Linux based single board controller. During the implementation phase, it helped that the main controller board simulator ran on Solaris, so that a number of POSIX abstractions were already in place in the gargantuan code base we had to port: several millions of lines of C++ code, and hundreds of real-time threads controlling not only all the system jobs but also the different ASICs and FPGAs doing all the image processing. PCI buses internal to the ASICs, internal memory banks, hundreds of interrupt sources, tenths of DMA channels and LZ compressors and filters and so on was our [war zone](http://www.denx.de/en/pub/News/Xum2009AbstractsAndPresentations/Xenomai_and_Realtime_Image_Processing_Control.pdf) .

It took us, the team doing the development at the time, over a year to validate the concept and nearly two years to launch our first product based on this platform. But the much needed determinism required by the system architecture was in place: on a mid-speed printer (60 pages per min) a few microseconds increase on an interrupt latency typically translates into an horrific jam in the paper path and those incidents, as you can imagine, never go unnoticed. As a matter of fact, Xerox set clear targets on their Test Organization to have single digit paper-jams per million copies...and those targets were never negotiable. Having met those KPIs, the UMC reduction due to the hardware savings accomplished by having a single OS (Linux) running on a Single Board Controller, meant many hundreds of millions of dollars of net income for our business unit.

And Xenomai enabled all of that to happen while also shortening our time to market. So for me, as the platform lead at the time, it was hard not to fall in love with this piece of software.

I won’t go into the architectural details in this blog since it is something that has been widely documented over the years (you can check [www.xenomai.org](http://www.xenomai.org) as well the [archives](http://xenomai.org/pipermail/xenomai/) since 2002 and some [books](http://www.opencore.eesc.usp.br/bruno/livros/Building_Embedded_Linux_Systems.pdf)). Suffice to say that in order to achieve the lowest possible predictable latencies in a _dual kernel_ configuration Xenomai “_must be allowed to handle all incoming interrupts first, before the Linux kernel has had the opportunity to notice them, and it must be able to handle them immediately, regardless of any current attempt from the Linux kernel to lock them out using the CPU interrupt mask. It must also make sure to always enforce the proper priority management for its threads_”. If that statement raises your interest, please check the Xenomai [website](http://www.xenomai.org) for more. And if you are really really interested, you are welcome to help us -the Xenomai team- upstream the Xenomai kernel patches needed to support a dual kernel configuration to kernel.org.

[![](/assets/images/blog/2015/11/Xenomai-on-the-96Boards-31.jpg){:class="img-responsive"} ](/assets/images/blog/2015/11/Xenomai-on-the-96Boards-31.jpg){:class="img-responsive"} 


Fig 1: Xenomai emulators can run in a Dual Kernel (a.k.a Cobalt) Configuration and in a Single Kernel (a.k.a Mercury) Configuration.


Besides sharing my past experiences on this post, I also wanted to let you, the 96Boards community of users, know that Xenomai support for AArch64 is progressing at a fast pace:

1. AArch64 support has been merged into [Xenomai 3:next](http://git.xenomai.org/xenomai-3.git/log/?h=next)

2. we have early **beta releases** for the currently available 96Boards using Cobalt on 3.18 and 4.0 kernels.



	
  * Xenomai:  [http://git.xenomai.org/xenomai-jro.git](http://git.xenomai.org/xenomai-jro.git)  branches: hikey, 410c

	
  * IPIPE:        [http://git.xenomai.org/ipipe-jro.git](http://git.xenomai.org/ipipe-jro.git)         branches: hikey, 410c


3. we ran a demo session during Linaro Connect SFO15 last September that unsurprisingly raised quite a bit of interest (don’t we all love determinism in our software).


Thanks to the ARM kernel [consolidation](https://lwn.net/Articles/443510/) efforts led by Linaro the task of adding Xenomai support to new SoCs detailed in this [link](https://xenomai.org/2014/09/porting-xenomai-dual-kernel-to-a-new-arm-soc/) has been greatly simplified: once the Xenomai AArch64 architecture changes were in place, enabling the functionality for a new SoC has gone from weeks of dedicated work to a matter of days. For the two 96Boards above It basically meant changes to the specific gpio interrupt controller and a little bit of debugging (Xenomai in AArch64 though functional is still work in progress). So this was awesome, thank you DeviceTrees and arm architected timers and Linaro for delivering on the promise.

Moving forward and, as probably any of you trying to do some motor control from any of the 96Boards must have already noticed, there is no way to manage a servo motor due to the lack of PWM modules in these chips. One option would be to spend some dollars on an adaptor card.

But since we now have a real-time provider and enough GPIOs to generate the required PWM signals by software, we can try using one of the many processor cores available. This is not a new concept and it is something that has been tried a number of times with a certain degree of [success](http://letsmakerobots.com/node/28812).

In any case and over the coming months we will prototype and deliver the results and associated source code on this same blog using the Hikey board as the evaluation platform.

And while I doubt that toggling GPIO from userland - an action more suited for turning on a toaster than for generating real-time signals - will provide us with the required accuracy, I am relatively confident that an RTDM GPIO driver will achieve the expected results. So stay tuned.

And again thank you Linaro for providing 96Boards development platforms to a number of the Xenomai [maintainers](http://xenomai.org/maintainers/) and to the team at [http://mperpetuo.com](http://mperpetuo.com) who contributed the initial AArch64 set of patches.


Have fun with these boards, build cool prototypes and as always, enjoy your coding time.

-------




	
  1. Multi-Function Printer: a mid-sized free-standing unit, designed as a central office system

	
  2. KPI: Key Performance Indicator

	
  3. UMC: Unit Manufacturing Cost

	
  4. Xenomai 3 can also run over PREEMPT_RT as a real-time provider instead of using the Cobalt kernel.

	
  5. [https://www.96boards.org/forums/topic/announcement-xenomai-on-hikey/](https://www.96boards.org/forums/topic/announcement-xenomai-on-hikey/)
[https://www.96boards.org/forums/topic/announcement-xenomai-on-410c/](https://www.96boards.org/forums/topic/announcement-xenomai-on-410c/)


