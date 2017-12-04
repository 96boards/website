---
title: Linaro Connect SFO17 - Summary
author: 96Boards Team
date: 2017-11-01 12:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/linaro-connect-sfo17.jpg
    name: linaro-connect-sfo17.jpg
    thumb: linaro-connect-sfo17-thumb.png
tags: 64-Bit, 96Boards, Bubblegum96, HiKey, DragonBoard 410c, Linux, Linaro, ARM, SBC, Single Board Computer, AOSP, Android, Red Hat, Redhat, fedora, Open Source, deep learning, robert wolff, tensorflow, i.mx7, meerkat, NXP, qualcomm, technology, computer, community, Timesys, Maciej Halasz, IIoT, Connect, SFO17

---

# Introduction

This bi-annual Linaro Connect took place in well known Burlingame, slightly south of San Francisco (Bay Area). Hundreds of people from around the world found a place to congregate in the Hyatt Regency right by the San Francisco airport.

For those who are not familiar with Linaro Connect, there are plenty of resources on the Linaro Connect website. Our goal with this blog is to paint a picture of what was experience from the perspective of the 96Boards team. We will of course try to provide a nice outline of each day’s activities!

# The preparations

The 96Boards team arrived on the weekend before the conference. It was during this time, we decided to get organized for our many activities throughout the week. Considering our team had a fairly full plate, we immediately went to work on polishing up presentations, cleaning up demos and making sure one of our main attractions was up and running.

Two four-player arcade panels (made by Grant Likely of Arm and Secret Lab) would be stationed in the main registration area. And while Grant took care of all the hardware and firmware, the 96Boards team was tasked with making sure we had working, open sourced games to showcase throughout the conference. The weeks before the conference and up until the weekend before, one of our application engineers spent time porting several emulators. Now that we had a console in hand, it was time to test it out and make sure everything worked. Thanks to pre installed firmware and well made hardware, the console was pretty much plug and play once the emulators were running. A few tweaks hereand there, setting up the buttons and making sure video and audio ran through to the monitors was the last step which all fell into place over the weekend.

# Monday

The first day of connect. It started with everybody gathering up at the lobby to collect their badges, followed up by [George Grey’s keynote](http://connect.linaro.org/resource/sfo17/sfo17-100k1/) highlighting Linaro’s future prospects and welcoming some new members. Then everybody assembled at the Atrium for a [group photograph](https://www.flickr.com/photos/linaroorg/37285265142/in/album-72157687039294924/). The rest of the day was followed by either attending one of the many session, that ranged from talks on Zephyr RTOS to talks on the Secure96 Mezzanine boards and everything in between, or meeting with colleagues from the other side of the globe. The evening was followed by a team dinner. Being in San Francisco, it was only fair that the cuisine was set for seafood, and before we knew our table was filled with Crabs, Fish Chops, Octopus and Wine.

# Tuesday

Second day of Linaro Connect began with the Keynote on High Performance Computing by Kanta Vekaria of Linaro.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-200k1/ 

Followed by the much exciting keynote and demo of the Socionext SynQuacer SC2A11 platform, a multi core CPU which consists of 24 ARM Cortex-A53 cores. The demo includes booting of the SynQuacer with the mainline kernel and showing the system usage with `top` command.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-200k2/ 

After grabbing coffee, we headed to the talk on ‘Secure Boot on ARM systems’ by Matteo Carlini of ARM. In this talk, Matteo discussed about implementing the complete chain of trust on ARM platforms, right from ROM bootloader to Operating system. He also explained the fundamentals of Trusted Execution Environment (TEE) on ARM.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-201/ 

One more talk which was going along in parallel was ‘Enabling the runtime PM centric path for ACPI’ by Ulf Hansson of Linaro. He discussed about the `runtime PM centric path` of ACPI Power Management domain and compared the `direct_complete` path ,`runtime PM centric path` and gave an update on the related work for ACPI PM domain.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-202/ 

Next we attended the talk on ‘Linux based Infotainment Systems: Thundersoft Case Study’ by Pengcheng Zou. It focussed on present current Thundersoft practises on Linux based Infotainment systems including their current released projects, 3D UI engine KANZI and also shared some of the common concerns such as Fastboot, Early RVC, Real time support etc…

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-213/ 

Next discussion was ‘A Functional Open GPU upon ARM’ by Fabricio Toloczko. He discussed about his design of GPU on the FPGA using ARM instruction set. The driver he adopted was MESA 3D. This talk was also extended to compare the performance impact of using Software model, Native software and hardware (OpenGPU) on FPGA.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-215/ 

After this session, we (96Boards team) had lunch together and moved on to next session.

Post lunch session started with a talk on ‘Designing IoT Devices’ by Gordon Kruberg of Gumstix. He discussed about the Geppetto platform and explained how easy is it to develop IoT hardware using it. He also talked bout the device tree overlay generation feature of the Geppetto platform for the designed hardware.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-220/ 

Final sessions of the day was occupied by Daniel Lezcano and Mathieu Poirier of Linaro. They gave a talk about the Linux kernel upstreaming process - do and do not’s, why it is important etc…

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-tr02/ 
   - http://connect.linaro.org/resource/sfo17/sfo17-tr03/   

# Wednesday

Third day started with the keynote by Matt Grob of Qualcomm on ‘The intelligent, Connected Future’ followed by one more keynote from Heather Meeker on ‘Open Source and the Family Business Enforcement and the Next Generation’.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-300k1/
   - http://connect.linaro.org/resource/sfo17/sfo17-300k2/ 

Heather occupied the next session and provided an impressive talk on ‘A Practical guide to Open Source Software Licensing’ which elaborated the internals of Open Source Software licenses and how to use them effectively.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-301/ 

Next session was on ‘Device Tree and Secure Firmware’ by Grant Likely of ARM/SecretLab and Dan Handley of ARM. Grant started the discussion with the overview of Devicetree and its updates on Linux kernel support followed by the Dan’s presentation about role of Devicetree in Secure boot involving Secure Firmware.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-310/ 

After finishing the session, our 96Boards team had a quick sync to decide on the work to be done for the next 2 Q's and later had lunch together. Next we headed to the presentation by the Arrow delegates Bill Davies and Dieter Kiermaier. They talked about the Arrow’s contributions to 96Boards in terms of Board support. In this presentation they gave an overview of the wide variety of upcoming 96Boards from Arrow.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-tr04/ 

For wrapping up the day, we attended the session by Daniel thompson and Leo yan of Linaro on ‘Profiling On Hikey960’. They talked about the concept of Power Management on HiKey960.

- Resources:
   - http://connect.linaro.org/resource/sfo17/sfo17-tr05/ 

# Thursday

Thursday started with a keynote by [Iliyan Malchev (Google)](http://connect.linaro.org/resource/sfo17/sfo17-400k1/) talking about project TREBLE for AOSP and Google’s ambitions to solve the Android Update Issues using it. He went in depth explaining the current state of HAL and how TREBLE Aims to improve on it.

Thursday was a special day for 96Boards as well, we had two sessions:

The first one being the [Mezzanine Workshop](http://connect.linaro.org/resource/sfo17/sfo17-414/) and info session, where Robert talked about past, present and future efforts around the 96Boards mezzanine ecosystem and later in the session Mani talked about his idea to implement Device Tree Overlays for Mezzanine Boards. 

This was followed by [OpenHours Live from Connect](https://youtu.be/zRVOdFPZmDY), where we had Live audience and a few guest speakers who were kneen to respond to queries raised by our live audience as well as those who attended the session over Bluejeans

# Friday

Friday’s keynote was opened by Professor Jan Rabaey talking about SwarmLabs 1.0, an open standard for the Cloud, Edge Computing and IoT devices.
The keynote was followed by a panel discussion headed by David Rusling talking about ARM in Open Source along with guest panelists from ARM, TI, Qualcomm and RedHat.

The main attraction for Friday was the Demo Day, where people showed off some very interesting project that  they have been working on. 96Boards had a couple of projects of their own including our Pinout website and a Self Balancing Robot the Mani had been working on. There were other projects that utilised our hardware like Cadence were showing their work on the HiFi Audio DSP on the Hikey960, John Stultz was talking about upstreaming AOSP and Open Source Foundries was showing their work on our IoT boards.

# Going home…

There was still plenty of food and the drinks were still flowing, but it was time to begin saying our goodbyes! This was inevitable, and both sad and exciting… Sad, because it would be a while until we all saw each other again in person. Exciting, because the next six months had been planned out with exciting projects and initiatives  to drive our 96Boards efforts forward. One by one, the taxis and ubers begin showing up at the hotel and our colleagues begin to fade away. This went on throughout the day until our own team was forced to separate. First went Robert and Yang, and due to flight scheduling, Mani and Sahaj would depart the following day. Memories of keynotes and sessions, fun interactions and new friends left with us.

We at 96Boards look forward to seeing everyone again at the next Linaro Connect in Hong Kong, HKN18. Until then, there is much to do and [plenty of videos to rewatch](http://connect.linaro.org/).
