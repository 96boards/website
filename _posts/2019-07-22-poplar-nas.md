---
title: Poplar NAS | A Daily Driver NAS Setup
author: Sahaj Sarup
date: 2019-07-22 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/poplar-nas.jpg
    name: poplar-nas.jpg
categories: blog
series: Poplar NAS
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shield, hat
---

# Poplar NAS

## Backstory

My personal NAS project started back in the day with an overclocked Raspberry Pi 1, a 500GB external HDD and a 100/10 LAN setup. Back then it was just a way to access my files over multiple devices without having to copy the files over a thumb driver every time.

It later moved on to a 2TB HDD with external powered enclosure. Then once I upgraded to a 1000/100/10 Gigabit network, I ditched the Pi in favour of the Rock Pi 4, added in a 4TB NAS Drive and now was able to transfer at about 80MB/s over the network.

So why the upgrade now?

I wanted to have a setup with the following things:
- A proper case. No barebones SBC collecting dust while the HDD sits in a USB3 enclosure.
- Low-Latency SATA either native or over pcie: this gives me the ability to add more hdd rather than being limited to the single usb3 port.
- A reliable PSU rather than a bunch of one-hung-low 12v adaptors on a multi-plug.

***

## Introducing the Poplar NAS

![](https://i.imgur.com/wbld0U1.jpg)

#### Overview

As you can see the now upgraded NAS sits inside the cheapest MiniITX PC case I could find on amazon.

The Poplar fits nicely inside the case with much room to spare, however since the screw-holes don't quiet line up a so some amount of Double-Tape and/or drilling may be required.

The Arm SoC on the Poplar won't overheat, but I still added a fan just for safe measures, better cool than sorry.

#### Storage

The HDD is a 4TB WD NAS Drive, there specialty is longevity and quick access as the platter is ALWAYS spinning, this reduces the startup and slowdown loads which helps it running longer.

It's connected over SATA via a ASMedia Technology Inc. ASM1062 Serial ATA Controller over the single lane PCIe 2.0 slot on the Poplar. As you may have noticed the SATA Card is connected over a "Powered PCIe Extender", this helps in slotting the card correctly in the PCIe brackets built into the case as well as reducing load on the poplar for pcie power, this isn't much relivant now but once I plan to upgrade it'll come in handy.

#### Power

The power supply is a Corsair VS450, again very much overkill for my current setup, but once I add more HDDs it becomes relevant. A good quality "80 Plus" rated PSU also ensures some sense of reliability in the setup. As you would have noticed there is a blue colored PCB to which I have attached the 40pin connector, that is a PSU started -for lack of a better word-, It has a switch that turn on the psu and also has 5v, -5v, 12v, -12v & 3v3 power rails.

#### Network

The on-board NIC on the poplar is really good over a Gigabit network, I have nothing to say here, pretty satisfied with the performance.

#### Software

##### OS

For the Operating system I run Debian Linux with vanilla mainline Linux kernel.

```
root@linaro-developer:~# uname -a
Linux linaro-developer 5.2.0-03311-g5450e8a316a6 #2 SMP PREEMPT Thu Jul 11 10:10:41 UTC 2019 aarch64 GNU/Linux
```

##### DISABLE NCQ

It's a bad thing, disable now or you'll damage your hdd and loose data.

Add the following to your kernel command line: `libata.force=noncq`

##### Shares

I have two shares setup.
1. Is a SAMBA share for compatibility with Windows and Other OS
2. NFS share for all my linux boxes.

***

#### Performance

- For SAMBA I can saturate the Gigabit Link while transferring files using a Windows machine. It's also enough for me to edit video files that are stored in the NAS directly without copying them over to my editing machine, using Adobe Premiere Pro.

- On my Linux machines I can easily saturate the Gigabit Link as well over NFS.

![](https://i.imgur.com/jLgkKYP.png)

***

## Future Planned Improvements

**Short Term**
- Upgrade the SATA Card to a 4-Port Marvell Based Card
- Add 2 more 4TB HDD and a 128GB SSD
- Create a RAID 5 Setup with 3xHDD and 1xSSD (Journal) for a total capacity of 8TB and a single Disk-Failure redundancy.

**Long Term**
- 10 GiB NIC
- 8 or more HDD in RAID-6
- Upgraded SATA card and and Base board for maximum throughput.
