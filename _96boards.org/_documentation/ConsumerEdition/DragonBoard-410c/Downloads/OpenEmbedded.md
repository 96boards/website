---
layout: empty-container-page
page_title: DragonBoard-410c OpenEmbedded Downloads
permalink: /documentation/ConsumerEdition/DragonBoard-410c/Downloads/OpenEmbedded.md/
breadcrumb-page_title: DragonBoard-410c Downloads - OpenEmbedded
breadcrumb-section: Documentation
breadcrumb-section-two: Consumer Edition
breadcrumb-section-three: DragonBoard-410c
breadcrumb-section-four: Downloads
breadcrumb-subpage_title: Open embedded
description: |-
    OpenEmbedded is a software framework used for creating Linux distributions aimed for, but not restricted to, embedded devices. Below are pre-built console and desktop images of Debian with their respective bootloader and boot image. If desired, these images can be recreated by following the build from source instructions.
---
# OpenEmbedded

**OpenEmbedded** is a software framework used for creating Linux distributions aimed for, but not restricted to, embedded devices. Below are pre-built console and desktop images of Debian with their respective bootloader and boot image. If desired, these images can be recreated by following the build from source instructions found [here](https://github.com/Linaro/documentation/blob/master/Reference-Platform/CECommon/OE.md) (Note: this link will take you to the Linaro Github)

***

## Fastboot files (Advanced users)

|   Bootloader    |    [Download](http://builds.96boards.org/releases/DragonBoard-410c/linaro/rescue/latest/DragonBoard-410c_bootloader_emmc_linux-*.zip)    |
|:------------------|:-----------------------|
|Release Notes:     |[Link](http://builds.96boards.org/releases/DragonBoard-410c/linaro/rescue/latest/)      |

Choose one boot image, the root file system you choose will be based on the boot image you download here:

|   Boot image    |  Build Folder ([RPB](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb/) / [RPB-Wayland](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb-wayland/))   |
|:------------------|:-----------------------|
| RPB    | [Download](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb/boot-Image--*-dragonboard-410c-*.img)   |
| RPB-Wayland    |  [Download](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb-wayland/boot-Image--*-dragonboard-410c-*.img)  |

Only download one root file system (Console or Desktop). You should match the type of rootfs to the boot image you downloaded above.

|   Rootfs image    |  Build Folder ([RPB](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb/) / [RPB-Wayland](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb-wayland/))    |
|:------------------|:----------------------------------|
| RPB  | ([Desktop](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb/rpb-desktop-image-dragonboard-410c-*.rootfs.ext4.gz) / [Console](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb/rpb-console-image-dragonboard-410c-*.rootfs.ext4.gz))    |
| RPB-Wayland  | ([Desktop](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb-wayland/rpb-weston-image-dragonboard-410c-*.rootfs.ext4.gz) / [Console](http://builds.96boards.org/releases/reference-platform/openembedded/DragonBoard-410c/latest/rpb-wayland/rpb-console-image-dragonboard-410c-*.rootfs.ext4.gz))     |

Continue to [Installation page](../Installation/)
