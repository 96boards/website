---
title: Bring up of the LeMaker Cello
author: edolnx - Carl Perry
date: 2018-02-06 01:01:54+00:00
image:
  featured: true
  path: /assets/images/96boards-lemaker-cello.jpg
  name: 96boards-lemaker-cello.jpg
  thumb: 96boards-lemaker-cello.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, enterprise edition, Linaro, Linux, iot, cloud, aws, amazon web services, sysadmin, cello,

---

PLEASE NOTE: This post was provided by the community. It has been rendered from it's original found [here](https://gigofham.com/post/2018/02/06-cello/) and is authored by *edolnx - Carl Perry*

Many, many moons ago I pre-ordered the [LeMaker Cello](http://www.lenovator.com/product/103.html). It's a 96boards Enterprise Edition Single Board Computer based on the AMD "Seattle" Opteron A1100 ARM Processor. I was very excited, because unlike many of the boards I already had it sported three key features: Native SATA ports, a full PCI Express 16x mechanical expansion port, and 2x SO-DIMM slots for memory. After many months of delays, we got some bad news: AMD had discontinued the processor and the PCI Express port didn't work. LeMaker offered those of us who pre-ordered to swap our pre-orders for a [HiKey 960](http://www.lenovator.com/product/80.html) board instead based on this news, since that had a PCI Express expansion port. Unfortunately for me, the [HiKey 960](http://www.lenovator.com/product/80.html) doesn't have gigabit ethernet or expandable RAM, so I stuck with my pre-order. I had planned to use them as a pair of Database servers for my hosting company, and the lack of PCI Express expansion wasn't a big deal. Several months later, the boards shipped and then my adventure began.
<!--more-->

# Getting the boards

The boards arrived in terrible condition physically. I had ordered two, and they were bubble wrapped and then stacked on top of each other, placed in a makeshift cardboard box that barely contained them, and then handed to China Post. They suffered the damage one would expect when something like this is shipped with insufficient packaging (eBay buyers of electronics around the world know this pain). One of the boards appeared fine, the other had a corner chipped off and the heatsink/fan was ripped off the board in transit. I was able to find the [quick start guide on the 96boards site](https://www.96boards.org/documentation/enterprise/cello/quickstart/) and get some of the specifications of components I needed to continue.

I knew a needed a power supply, some RAM, and possibly a few other accessories. Sadly, the power supplies linked from the quick start guide were not available to me or super expensive, so I went digging for some alternatives. Some searching on [DigiKey](https://www.digikey.com/) yielded a [Volgen KTPS90-1207](https://www.digikey.com/products/en?keywords=62-1186-ND) which was not an exact match, but was reasonably priced and so far has worked without issue. I'm also running the board rather lightly loaded, just some RAM and a single SATA SSD. I was able to get the SATA power adapter from Amazon, and then went looking for RAM. Ideally I would have got a 4pin DIN power supply, but those were going to cost as much as the boards, so this 7A barrel connector power supply would have to do as a starting place.

Initially I foolishly bought some regular old SO-DIMM modules. They didn't appear to work, so I contacted LeMaker support. They were using the [MT18KSF1G72HZ-1G6E2](https://www.micron.com/parts/modules/ddr3-sdram/mt18ksf1g72hz-1g6) modules from [Micron](https://www.micron.com). Turns out these are ECC, and specifically ECCx72 (which is not common). Some digging later and I found some [8GB Micron modules from memory4less.com](http://www.memory4less.com/micron-8gb-sodimm-pc10600-mt18ksf1g72hz-1g4d1ze) that are compatible. I bought two of them, and waited for all the accessories to arrive.

# More bad news from LeMaker

It was at this point that I got some more bad news from LeMaker: the boards may not boot. They believe the boards were shipped to me without the necessary firmware installed. The provided two options: I could upload the firmware my self, or send the boards back to LeMaker for repair. I had planned on flashing the board that appeared to be intact, and return the second.

## Attempting to flash the firmware on the board

LeMaker provided the necessary [firmware](https://edolnx-public.objects-us-west-1.dream.io/cello/cello_platform_firmware.hex), the target part (an Atmel AT24C512B at I2C Address 0x54), and this image of the I2C connector:

![I2C pins next to the SATA power connector](https://edolnx-public.objects-us-west-1.dream.io/cello/8723352C%4009753F7%2805-09-14-29-52%29.jpg)

I attempted to flash the part using a RaspberryPi, but was unable as I think the voltages were different or possibly pull-up resistors were necessary. Either way, I gave up and shipped both boards back and eagerly awaited their return.

# The boards arrive, part 2

A few weeks pass, and I now have known good boards. I get home, hook them up, and get: a spinning fan and LED7 turning on when I apply power but that is it. No output from the serial console device. I reach out to LeMaker and Lenovator for support, and get back that a wiki page is forthcoming. However, the board has been marked as sold out on their site and the word on the street is that AMD has killed the Seattle project and discontinued the processors.

Time passes.

I ask for updates, and reach out to see if anyone has got these boards to work on twitter and the Phoronix forums.

Nothing happens.

The boards sit in a drawer, essentially very expensive paper weights. I've mostly lost hope that they will ever be more that museum artifacts.

# Office Hours

Several months, I get involved with the [Works on ARM](http://www.worksonarm.com/) community, and ask there for help. They point me to the [96boards Open Hours](https://www.96boards.org/openhours/) and after a couple of false starts there I'm able to reach out and get some help. Robert from Open Hours gets me in touch with Ard and Ricardo who were engineers on the Cello project. I explain my delemma and learn an important step: on my Rev 003 boards there is another serial port on the board which tells you if the memory can be configured, and there is a power button (YMMV on other board revisions).

# The SCP Serial Port

Turns out there is a microcontroller on the board that is responsible for setup of the DRAM and other components. It has a read only 6 pin FTDI serial header next to the PCI Express port, and it outputs lots of useful debugging information at 38400bps. I don't have an 6 pin FTDI cable lying around, but I have a lot of serial adapters and some jumpers, so I find the port and connect:

![6 pin FTDI header next to PCI Express connected to serial adapter](https://edolnx-public.objects-us-west-1.dream.io/cello/IMG_20180207_125551_r.jpg)

The green cable is ground and connected to the labeled pin 1. The yellow cable is connected to the RX pin on my serial adapter. I plug this into a Linux host, fire up `picocom`, and get the following output upon power on of the Cello board:

```
SCP Bootrom version : 1.1004
SCP Bootloader version : 2.1001

BL2 POST code : 0x00000020

BL2 POST code : 0x00000021

BL2 POST code : 0x00000022

BL2 POST code : 0x00000025

BL2 POST code : 0x00000026

BL2 POST code : 0x00000023

BL2 POST code : 0x00000024

BL2 POST code : 0x00000027

........

System Control Processor Firmware
Version: 1.0.0.2 (ROD1002C_0493 R)
Advanced Micro Devices, Inc.
All rights reserved.

[INFO] Seattle Model B SOC detected.  Now initializing.
[INFO] Interpreting EEPROM settings...
[INFO] EEPROM root table - ID: 0000000000000000, Major: 0, Minor: 152.
[INFO] EEPROM area - Sign: PFDT, Rev: 0, Offset: 0x00000070, Len: 19.
[INFO] EEPROM area - Sign: PMAT, Rev: 0, Offset: 0x00000000, Len: 0.
[INFO] EEPROM area - Sign: USAT, Rev: 0, Offset: 0x00000000, Len: 0.
[INFO] EEPROM area - Sign: EATL, Rev: 0, Offset: 0x00000000, Len: 0.
[INFO] EEPROM area tables found - 4.

[INFO] Area table: Platform and feature definition signature.
[INFO] Clock generator device set to I2C0/0x68, SpreadSpectrum=1.
[INFO] VRM device set to I2C0/0x40.
[INFO] EEPROM device set to I2C0/0x54, 64kB, Page size 128 bytes.
[INFO] Flash device set to SPI0, 16MB, Page size 256 bytes.
[INFO] MAC address 0 added: AA:BB:CC:DD:EE:01
[INFO] MAC address 1 added: AA:BB:CC:DD:EE:02
[INFO] RTC device set to I2C0/0x6f, format 1.
[WARN] Unrecognized table entry type: 0, sub type: 0.

[INFO] Area table: Platform management signature.

[INFO] Area table: UEFI/SCP shared area signature.

[INFO] Area table: End of area tables signature.
[INFO] Management device unconfigured, set to listen on I2C2/0x70.
[INFO] SOC executed from cold reset.
[INFO] ISCP Task started
[INFO] Default value of ACLOCK is 1700MHz
```

I cannot tell if this is good or bad, but it's the first sign of life I have seen on this board. Ard informs me that now all I need to do is press the "power button". Which makes me say "wait, what?"

Turns out, these two buttons on the board are "reset" and (for lack of a better label) "boot":

![Power button is closest to the USB connector, Reset closer towards the power connectors](https://edolnx-public.objects-us-west-1.dream.io/cello/IMG_20180207_125608_r.jpg)

The reset button will cold boot the board and cause LED7 to blink. The other button seemed to do nothing, but that starts the boot sequence. The SCP serial port starts showing me lots of secrets, and informs me that I cannot count:

```
Memory Training Firmware
Version: 1.0.0.2

Memory Training for DDR3, one DIMM/channel

Memory Training ... start
[INFO] UEFI memory Setup fail safe counter = 10

********** Load default memory setup settings **********

SPD Channel 0 Dimm 0 SmbusAddr A0, DIMM absent

SPD Channel 1 Dimm 0 SmbusAddr A4, 18KSF1G72HZ-1G4D1  UDIMM ECC 2Rx8
92 11 0B 08 04 21 02 09 0B 11 01 08 0C 00 7E 00
69 78 69 30 69 11 20 89 20 08 3C 3C 00 F0 83 05
80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 0F 11 03 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 80 2C 01 12 26 B1 F7 CD B3 B1 93
31 38 4B 53 46 31 47 37 32 48 5A 2D 31 47 34 44
31 20 44 31 80 2C 00 00 00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF

********** Both channels must have the same memory size **********

                        ******************************************
                        *                                        *
                        *         Memory Training Failed         *
                        *                                        *
                        ******************************************

```

It turns out that you need 2 identical SO-DIMM modules installed on the board, of the same size, to boot. Not the end of the world, as I had two but it means I will need to order two more for the other board. So, I drop in the other module, re-apply power, press the boot button and wait...

You see, it takes about 3min for these boards to boot. The whole time it's spewing lots of interesting data over the SCP serial port, but it's obvious that microcontroller is running debug code and taking it's time. Eventually, I get a UEFI boot prompt on the console's USB serial port at 115200bps, and can start the GRUB application from the USB CDROM:

```
UEFI Interactive Shell v2.1
EDK II
UEFI v2.60 (AMD Seattle, 0x00010000)
Mapping table
      FS0: Alias(s):CD0d0a:;BLK1:
          PcieRoot(0x0)/Pci(0x2,0x2)/Pci(0x0,0x0)/USB(0x3,0x0)/CDROM(0x0)
     BLK2: Alias(s):
          VenHw(0D51905B-B77E-452A-A2C0-ECA0CC8D514A,000030E00000000000)/Sata(0x
1,0xFFFF,0x0)
     BLK0: Alias(s):
          PcieRoot(0x0)/Pci(0x2,0x2)/Pci(0x0,0x0)/USB(0x3,0x0)
Press ESC in 1 seconds to skip startup.nsh or any other key to continue.
Shell> FS0:
FS0:\> cd efi
FS0:\efi\> cd boot
FS0:\efi\boot\> dir
Directory of: FS0:\efi\boot\
12/09/2017  13:56 <DIR>         2,048  .
12/09/2017  13:56 <DIR>         2,048  ..
12/09/2017  13:56             401,408  bootaa64.efi
          1 File(s)     401,408 bytes
          2 Dir(s)
FS0:\efi\boot\> bootaa64.efi
```

# Installing an OS

After I stop jumping for joy, I realize I need an installer. I have this lovely Zalman ZM-VE200 (which is similar to [this device](http://zalman.com/contents/products/view.html?no=20)), which lets me load an ISO on an SSD/HDD and present it as an USB CDROM. It's a lifesaver. So, I drop the stock [Debian Stretch ARM64 DVD](https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/) on and plug it in. Then I tell the UEFI shell to reboot and... it works. The Debian installer comes up no problem. So, I power off the board, attach Ethernet and a brand new SATA SSD, and boot again.

This time, things are not as smooth. I use `picocom` as my default serial console of choice, and UEFI doesn't seem to like it. Ironically, `minicom` lets you get through the UEFI menus and prompts without issue, but then the Debian installer is terrible. A little more testing, and I figure out that the UEFI really wants an ANSI serial terminal, and GRUB and Debian prefers a linux/xterm/vt102 terminal. This is a simple fix for picocom where I can start with `TERM=ANSI picocom -b 115200 /dev/ttyUSB0` and later restart without the `TERM=ANSI` and all is well. I had very strange issues with `minicom`, which should come as a surprise to no one.

The Debian installer goes along without issue, finds the NIC, but can't DHCP. My instinct to grab the DVD instead of a netboot ISO pays off! I tell it to ignore the ethernet and figure I'll look at it later. SATA is detected without issue, install completes without issue. Rebooting however....

# Lack of console

The Debian installer and/or GRUB2 figure out that the console is a serial port, and you can see the GRUB2 menu without issue. However, the Linux kernel seems to ignore the serial console. Ard tells me that the console should be `ttyAMA0`, so I edit the kernel command line in GRUB to remove the stupid `quiet` flag and add `console=ttyAMA0,115200n8`. This is when I learned that GRUB, too, wants an ANSI terminal. Now I can see the kernel messages, and then Debian starts up and gives me a login prompt! Holy cow! I have a fully installed and working Debian environment on the Cello. To make those changes permanent, you will need to modify the `/etc/defaults/grub` file and edit the line that starts with `GRUB_CMDLINE_LINUX_DEFAULT`

# Lack of ethernet

On to that pesky ethernet. The ethernet device is detected as enp2s0, but a keen reader may discover an issue here:

```
cello2:~$ ip link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp2s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 00:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
```

Turns out the Ethernet MAC is missing it's address. This explains why the installer couldn't use DHCP. No the end of the world, an address can be specified in the `/etc/network/interfaces` file like so:

```
auto enp2s0
iface enp2s0 inet dhcp
  hwaddress ether 00:00:1A:00:1A:01
iface enp2s0 inet6 auto
```

Note that if you have multiple boards, those MAC addresses must be unique on each system. I used the AMD vendor code, and then made up the rest. You can use whatever you like.

I reached out to ask Ard about this, and he informed me that the tool Realtek (who makes the RTL8169 PHY device used on this board) only provides an x86 UEFI application to set these addresses. At the time LeMaker had no way of doing this, but now there is apparently an emulation layer that can be loaded into UEFI which allows running x86 PE/COFF code for tools like this. This isn't a big deal once the OS is installed, but can be a problem if you want to netboot or do a netinstall. In those cases, you would need a workaround:

```
So we don't have the means to set the MAC address persistently,
unfortunately. What we do have is a firmware based driver that sets it
from the firmware at boot.

Please try the attached driver. You need to drop it into the ESP (the
FAT partition that has /efi/debian/grubaa64.efi in it), and enter the
following commands from the shell:

setvar -guid 8d97e056-777c-4850-ab61-8166b1777f2d MacOverride -nv -bs
=112233445566

where 112233445566 is the MAC address you want to assign (note that
copy paste may not work very well in the UEFI shell so if it doesn't
seem to work, please double check whether you got all the GUID digits
right). Then you can load the driver

load fs0:Realtek8169MacOverride.efi

and check whether it prints something like 'using MAC override value
11:22:33:44:55:66'

If that works, you can register the driver to be loaded automatically at boot

bcfg driver add 0 fs0:Realtek8169MacOverride.efi "R8169MacOverride"

and it should set the MAC address in the PCI config space at each boot.
```

Totally not ideal, but here is [the tool if anyone is interested](https://edolnx-public.objects-us-west-1.dream.io/cello/Realtek8169MacOverride.efi).

# Next Steps

So, at this point, everything is working. I had planned to deploy these to a data center to be database servers, but it's obvious that would be a terrible idea. These are very much development boards, and when something goes wrong will need button presses to fix. So, they are going to stay at my home lab instead. I'm working on building an Open Source ARM CI pipeline where community members can get various software built on various armel, armhf, and arm64 platforms and distributions. Since these boards have Cortex-A57 cores, they can run ARMv6, ARMv7, and ARMv8 code. So my goal is to make them compile boxes, and then I have a suite of other machines to test on. But, before any of this some changes are going to be needed.

First, I need a case. While there are many 96boards CE cases around, I have yet to find an EE one. So, I'm probably going to design a one that borrows heavily from [The Firefly-RK3399 case](http://wiki.t-firefly.com/index.php/Firefly-RK3399/Peripherals_%E5%A4%96%E5%A3%B3/en) which is just some acrylic and stand-offs. It gets the job done. I'm probably going to make one edge open so that if you have something like the [Poplar](https://www.96boards.org/product/poplar/) board, you can use the PCI Express slot. Not so important for this board since the PCI Express slot is non-functional.

The second, the CPU fan on this board is small and very loud. My goal is with this case, I'm going to remove that small fan and instead place a nice big 120mm standard PC case fan on top and have it cool the CPU and other components. The CPU cooler uses a standard PC Case 3pin fan connector, so this is a simple change once there is a place to mount it on the case.

Once I have the case design done, I will post here for others. It will be CC0 licensed.

# Summary

If you skipped all the text above, here is what you need to know:

* You will need an IDENTICAL PAIR of ECCx72 SO-DIMM modules, I'm using [8GB modules from memory4less.com](http://www.memory4less.com/micron-8gb-sodimm-pc10600-mt18ksf1g72hz-1g4d1ze)
* You will need a USB-TTL serial adapter to connect to the SCP FTDI header next to the PCI Express slot in order to see if the SCP manages to configure the memory and other hardware correctly. That serial port operates at 38400bps.
* If you don't get output from the SCP, you may need to apply firmware to the board. See above, good luck, and let me know if you succeed.
* If you do get output, then press the "Boot" button. You should get lots more output on the SCP and if memory configuration succeeds, it will boot and in several minutes you can interact with the UEFI console on the integrated USB serial port at 115200bps.

Hope that helps others, feel free to leave comments below if you have questions or concerns. Thanks a bunch to Ard, Robert, and Ricardo from 96boards for their help getting my Cello boards up and running!
