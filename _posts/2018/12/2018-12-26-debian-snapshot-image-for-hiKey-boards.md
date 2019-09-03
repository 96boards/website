---
title: Debian Snapshot Image for HiKey boards
author: Manivannan Sadhasivam
date: 2018-12-26 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/hikey-deb.png
    name: hikey-deb.png
    thumb: hikey-deb-thumb.png
categories: blog
tags: 64-bit, 96Boards, ARM, ARMv8, CE Edition, Kernel, Linux, HiSilicon, HiKey, HiKey620, HiKey960, HiKey970, Debian, UEFI, Tianocore, USB, HDMI, WiFi, Bluetooth, UFS, eMMC, SD
---

# Introduction

Hello and Welcome to the blog on, "Debian Snapshot Image for HiKey boards". This
blog will give a quick summary of the recently released Debian release image
for HiKey boards. Why it was needed, how it was done and the future plans.

# Recap of the State of Debian support for HiKey boards

Before this new snapshot image, there was a Debian snapshot build existed for
the HiKey boards ([HiKey](/product/hikey/), and [HiKey960](/product/hikey960/)) based on old 4.14 stable Linux Kernel. And we
started to see many queries in our [Support Forum](http://discuss.96boards.org)
regarding the [HiKey960 UFS issue](https://discuss.96boards.org/t/marginality-with-ufs-chip-change/4450), HiKey960 USB issue and much more. So we decided to spin next version
of the Debian snapshot image with 4.19.5 recent LTS Kernel, HiKey960 UFS fix,
HiKey960 USB support.

# Recent LTS Kernel for HiKey and HiKey960

I started this work by collecting the patches for [UFS Fix](https://lkml.org/lkml/2018/10/25/1047),
[USB support](https://lkml.org/lkml/2018/10/27/175) and couple of misc fixes
into my [HiKey Kernel tree](https://git.linaro.org/people/manivannan.sadhasivam/hikey.git/)
based on 4.19.5 LTS Kernel. A special thanks to [John Stultz](https://twitter.com/johnstultz_work)
of Linaro for helping along the way.

Then I tried to boot the kernel on both HiKey and HiKey boards. Interestingly,
I found some issues on both boards which prevented booting of the Kernel. When
I debugged, I found that both boards were not able to work properly with 4 bit
bus width using the Designware MMC driver. For sure it was a regression, but
my initial debugging/bisect didn't spot the actual issue. So in the meantime,
I added a commit as a [quick workaround](https://git.linaro.org/people/manivannan.sadhasivam/hikey.git/commit/?id=99f996769c588a52ec1b8dad6334ce3c1324ed9a) for letting the MMC driver
to work on both boards. Basically, it just removes the `bus-width` property from
`dwmmc` driver to force it to use 1 bit mode. I know that this will decrease
the performance of MMC block but I just insisted on creating a working Debian
image. With this commit, both boards were able to boot fine without any issues.

# HiKey970 Support

While doing this process, I also thought about including the Debian support for
[HiKey970](/product/hikey970/) board, which is also from
HiSilicon but there was no upstream support from the vendor. So, I upstreamed
the basic bits for this board which enables it to boot mainline Linux kernel with
a standard distro from UFS. But since most of the patches were merged for 4.20
Kernel, nothing existed on 4.19.5 LTS Kernel. So I collected all patches into
my [HiKey tree](https://git.linaro.org/people/manivannan.sadhasivam/hikey.git/log/).
Finally I was able to boot 4.19.5 LTS Kernel on HiKey970 board!!!

# New Debian Snapshot Image

With all of these patches, I started the Debian image process using our internal
OBS tool. [Riku Voipio](https://twitter.com/RikuVoipio) of Linaro helped me to
go through the Debian snapshot image process and we both worked together to
create the final [Snapshot image](http://snapshots.linaro.org/96boards/hikey/linaro/debian/latest/) for all HiKey boards. We generated Boot image and Debian RFS image using the tool.

But there was one more bit missing, which is the new UEFI image. Since we use
the same Debian image for all HiKey boards, the distinguishing factor for these
boards comes in the form of Devicetree Binary(DTB) passed by the UEFI bootloader
to Linux Kernel. So inorder to use all features of the latest image, we must pass
the corresponding DTB from UEFI during boot. For this, I submitted a [patch](https://github.com/96boards-hikey/OpenPlatformPkg/pull/130) for updating the DTB in UEFI for both HiKey
and HiKey960 and it was merged by Haojian Zhuang of Linaro.

> Note: Currently we have no official UEFI build for HiKey970, so users need to
>       use the vendor UEFI for booting this image.

With this new image, below features are supported for all HiKey boards:

* Hikey - SD/MMC, HDMI, USB, WiFi/BT
* Hikey960 - UFS, SD/MMC, USB, WiFi/BT, PCI-E
* HiKey970 - UFS, SD/MMC

# Conclusion

At the end, we have a working Debian image for all HiKey boards. We also have
plans to release major snapshot image for every new LTS Kernel and minor snapshot
image for feature addition like HDMI for HiKey960. Below are the forum posts,
describing the image release:

https://discuss.96boards.org/t/4-19-5-kernel-based-debian-snapshot-image-release-for-hikey/6835
https://discuss.96boards.org/t/4-19-5-kernel-based-debian-snapshot-image-release-for-hikey960/6836
