---
author: jstultz
comments: true
date: 2017-06-13 14:35:47+00:00
layout: post
featured_blog: true
link: https://www.96boards.org/blog/96boards-updates-development-aosp/
slug: 96boards-updates-development-aosp
featured_image: hikey-960-SD-front-500x330.jpg
title: 96Boards Updates on development in AOSP
wordpress_id: 20504
categories:
- blog
tags:
- 96Boards
- Android
- AOSP
- ARM
- arm32
- arm64
- Bluetooth
- bootloader
- HAL
- HiKey
- HiKey960
- HiSi
- HiSilicon
- huawei
- John Stultz
- Kernel
- Lemaker
- Linaro
- Linux
- Open Hours
- open source
- OpenHours
- Raspberry Pi
- TI
- u-boot
- UEFI
- upstream
---

It's been awhile since I've posted any updates on 96boards devboards in AOSP, so I figure it's past time I do so.


# HiKey


On the HiKey front, things continue to move upstream, although it's been slower of late due to working on other activities.

In 4.12, the i2s audio driver landed (although the DTS changes to enable it didn't make it) for HDMI audio support, as well as +[Rob Herring](https://plus.google.com/+RobHerring)'s work to get the TI Bluetooth chip working via his new serial device bus.

The serial device bus is **really nice**, because it allows the kernel to handle basic initialization like loading the firmware, setting the baud-rate etc, which normally would have to have been done in some device-specific userspace code before the standard hci device protocols could be used over the UART. Now, the kernel handles all of that, and we just get a standard hci device, same as with a usb bluetooth dongle. BlueZ userspace already knew how to handle this device-specific initialization for standard Linux environments, but with Android we were having to use TI's out-of-tree kernel driver and HAL. So this is really nice to have a generic solution upstream, and we're in process of backporting it to the android-linaro-hikey-4.9.

Coinciding with switching from an out-of-tree bluetooth driver in the kernel, +[Satish Patel]() has been working on getting a generic linux bluetooth HAL up and running in AOSP/master. This is based on an older bluetooth HAL in AOSP that has become somewhat unmaintained, and stopped working awhile back. So having a generic bluetooth HAL that works with standard linux hci devices (usb or serial) is really nice! That code is still in submission and review, but once it lands, we can drop the out-of-tree TI patches from the mainline based HiKey kernel!

Speaking of out-of-tree patches, we did work with ARM to get updated r7p0 libGLES_mali.so binaries. This allowed us to move forward to their r7p0 kernel driver, which has support for the upstream dma-buf fences and SYNC_FILE interface. This let us drop a terrible hack I was carrying since 4.6 basically reverting the dma-buf fence code to the old Android Sync driver in staging so the mali driver would work. Dealing with binary blob drivers against an constantly moving upstream kernel is still the worst, but I do really appreciate ARM's help in getting their driver updated!

Of course, mainline always keeps moving, and when you drop one terrible revert hack, you sometimes have to pick up another. +[Laura Abbott](https://plus.google.com/101887749522867437937)'s persistent and continual effort working on the Android ION driver in staging took a big leap, and some major refactoring of the interface landed in 4.12-rc. I'm really excited to see things start to happen here, and tons of credit goes to Laura for continually pushing the upstream community here. That said, as often happens with established code as it gets pushed upstream, there have been some interface changes, which make the upstream driver now incompatible with older gralloc implementations. So for now in the Hikey tree I have those patches reverted. :( Now, Laura awesomely has already submitted examples on how to convert HiKey's gralloc HAL to the new interfaces, and +[Sumit Semwal](https://plus.google.com/108099011285534078634) is working on extending that so HiKey's gralloc implementation can support both new and old interfaces, which will be important as we still support running HiKey in AOSP w/ the 3.18, 4.4 and 4.9 kernels. Once those userspace changes land, I'll be able to drop my ION interface revert patches and we'll be moving happily into the future.

There's also been recent work by +[Antonio Borneo](https://plus.google.com/102321751277239457868) to fix up support for SPI, and work by +[Ulf Hansson](https://plus.google.com/104367504478577731561) to improve some of the clk handling to support non-UEFI bootloaders like u-boot.

The patch set I manage continually shrinks and grows, as bits get upstreamed and new bugs are found and fixed, but other then mali and the ion revert, the board is pretty functional with just mainline. The main upstreaming todos I have left are the HDMI audio dts changes, patches to allow the kirin drm mode-limitations be expressed across the hdmi bridge chip, and taking another pass at the android cgroup migration feature. The rest are mostly warning fixups and other polish level patches.

We’re also really starting to feel the benefits of the effort to get the HiKey board upstream. There’s a lot of testing work that can now be done with the HiKey against mainline kernels, and thanks to efforts from +[Milosz Wasilewski](https://plus.google.com/110678333419866011234) and others we’ve uncovered some pretty hairy generic bugs with upstream and LTS kernels that I’ve not been able to trigger elsewhere. And while having some unplanned ugly bugs to chase might wreck one’s plans for the week, it is good to see them uncovered through testing and eventually resolved upstream.


# HiKey960


Of course, since my last update, we've also announced the HiKey960! It was great to see the press response to the board announcement, although also a bit frustrating to see it constantly called a "RasPi killer" in the majority of headlines, which is silly. It is similar form-factor, but both its power (and expense) makes it a whole different animal. The benefit I see most with the board is that it gives us flagship class hardware to do development and prototyping with. Of course, it's not going to be for everyone, and for folks who are price sensitive and don't need the extra power, we still support the cheaper original HiKey board in AOSP. But for those who are trying to develop new features like the EAS scheduler, or new block layer or filesystem features, having the latest ARM processor and fast UFS storage in an affordable devboard will be really valuable.

Since the release, +[Leo Yan](https://plus.google.com/100021893004021368609) has enabled thermal management support, which also fixed some cpufreq issues with the kernel that shipped on the device. Those changes along with parameterizing and naive tuning of the powerHAL has resulted in some really nice performance gains recently on some benchmarks. Its still early days, and folks really haven't spent much time tuning the performance on the board, so I think we still have quite a bit of power to pull out of the device.

HiSi has also been really key in helping us migrate from proprietary binary blobs for things like gralloc to ARM's opensource reference implementations. This is really great, because now HiKey960 is on the same footing with regard to binary blobs as the original HiKey, which makes handling updates to new kernels (and dealing with issues like the ION kernel abi changes upstream) much easier to manage. Also big thanks to +[Vishal Bhoj](https://plus.google.com/102410696093583422185) for helping with getting all the blobs properly packaged.

Additionally, while the device shipped with the now fairly old v4.4 based kernel (though, to be fair, it shipped just days after the first commercially available Android phone that used 4.4 was released) +[Guodong Xu](https://plus.google.com/106923894702543396065) and others on the Landing Team have been putting together a mainline based branch and a v4.9 based branch. There's still some heavy churn to the patches for the USB and graphics subsystems that have kept us from moving to v4.9 for AOSP, but hopefully that will happen soon.

And since the announcement, and really, even before that, +[Zhangfei Gao](https://plus.google.com/107373549659731211419), +[Guodong Xu](https://plus.google.com/106923894702543396065) and others on both the Linaro HiSi Landing Team and in HiSilicon have been pushing some of the early core board support upstream.

There’s also been lots of smaller things, like +[Vishal Bhoj](https://plus.google.com/102410696093583422185) recently submitted enabling of selinux on HiKey960, and firmware updates by +[Guodong Xu](https://plus.google.com/106923894702543396065) to help prep for +[Haojian Zhuang](https://plus.google.com/118333490708258981498)'s work to migrate from the HiSi proprietary bootloader to UEFI. (And I'm now feeling terrible as I'm sure I've left some folks out).

So yea, its been busy of late! And as always, everyone has been doing amazing work to collaborate together, so many thanks to everyone (explicitly called out or not) involved!

![Hikey 960 Front Image]({% asset_path "hikey-960-SD-front.jpg" %}){:class="img-responsive lazyload"}


[Find John Stultz on Google+](https://plus.google.com/111524780435806926688)



* * *



**For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!**

**[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)**

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
