---
layout: empty-container-page
page_title: Hikey USB
permalink: /documentation/ConsumerEdition/Hikey/Guides/USB.md/
breadcrumb-page_title: Hikey USB
breadcrumb-section: Documentation
breadcrumb-section-two: Consumer Edition
breadcrumb-section-three: Hikey
breadcrumb-section-four: Guides
breadcrumb-subpage_title: USB
description: |-
    A utility is provided in /home/linaro/bin to change the configuration of the host (Type A and Expansion) and OTG USB ports. By default these ports operate in low/full speed modes (1.5/12 Mbits/s) to support mouse/keyboard devices. Other USB devices such as network or storage dongles/sticks will be limited to full speed mode. Using the usb_speed utility it is possible to support high speed devices (480 Mbits/s) as long as they are not mixed with full/low speed devices.
---
# USB

A utility is provided in /home/linaro/bin to change the configuration of the host (Type A and Expansion) and OTG USB ports. By default these ports operate in low/full speed modes (1.5/12 Mbits/s) to support mouse/keyboard devices. Other USB devices such as network or storage dongles/sticks will be limited to full speed mode. Using the usb_speed utility it is possible to support high speed devices (480 Mbits/s) as long as they are not mixed with full/low speed devices.

For information on using the utility do the following:

```
$ sudo usb_speed -h
```
