---
layout: empty-container-page
page_title: Hikey Clock
permalink: /documentation/ConsumerEdition/Hikey/Guides/Clock.md/
breadcrumb-page_title: Hikey Clock
breadcrumb-section: Documentation
breadcrumb-section-two: Consumer Edition
breadcrumb-section-three: Hikey
breadcrumb-section-four: Guides
breadcrumb-subpage_title: Clock
description: |-
    The HiKey board does not support a battery powered RTC. System time will be obtained from the network if available. If you are not connecting to a network you will need to manually set the date on each power up or use fake-hwclock.
---
# Clock

The HiKey board does not support a battery powered RTC. System time will be obtained from the network if available. If you are not connecting to a network you will need to manually set the date on each power up or use fake-hwclock:
```
$ sudo apt-get install fake-hwclock
```
