---
layout: empty-container-page
page_title: CE Disabling graphics interface (Debian)
permalink: /documentation/ConsumerEdition/CE-Extras/Configuration/DisableGI.md/
breadcrumb-page_title: Disabling graphics interface (Debian)
breadcrumb-section: Documentation
breadcrumb-section-two: Consumer Edition
breadcrumb-section-three: CE-Extras
breadcrumb-section-four: Configuration
breadcrumb-subpage_title: Disabling graphics interface (Debian)
description: |-
    When the graphics interface is not really needed (e.g. using as a server), it's just better to disable the entire X11 stack to reduce the amount of memory and cpu used by the system.
---
# Disabling graphics interface (Debian)

When the graphics interface is not really needed (e.g. using as a server), it's just better to disable the entire X11 stack to reduce the amount of memory and cpu used by the system.

**To disable X11 on boot:**

```shell
root@linaro-alip:~# systemctl set-default multi-user.target
```

**To enable X11 again:**

```shell
root@linaro-alip:~# systemctl set-default graphical.target
```
