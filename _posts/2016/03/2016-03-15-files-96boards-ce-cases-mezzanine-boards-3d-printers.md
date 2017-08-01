---
author: ldts-atsuka
comments: true
date: 2016-03-15 11:56:13+00:00
layout: post
link: https//www.96boards.org/blog/files-96boards-ce-cases-mezzanine-boards-3d-printers/
slug: files-96boards-ce-cases-mezzanine-boards-3d-printers
featured_image: 3D-Case-SensorBoard-s.png
title: Files of 96Boards CE Cases with Mezzanine Boards for 3D printers
wordpress_id: 12788
categories:
- blog
post_format:
- Gallery
---

I uploaded some files to create cases with 3D printers for 96Boards CE with mounting Mezzanine Boards at [https://github.com/96boards/96boards-case](https://github.com/96boards/96boards-case).

The original Open-scad and STL files are derivative from [Michael Welling’s files on the github](https://github.com/mwelling).

My motivation was to have a case of 96Boards fits when attaching Mezzanine Boards and convenient during developing application of controlling devices attached to the Mezzanine Boards.

Many Mezzanine Boards are prepared for 96Boards to utilize the flexible 96Boards specification for extending features with the LS/HS connection.
It would be good to have a case which do not have to worry of destroying the boards with static charge but able to connect sensor devices on top of the Mezzanine Boards.

The files are customized from the original open-scad file by trying out printing with 3D printers. I had to add some margin from the case being shrinked when the ABS material cooling down. Next I updated dimensions to have spaces and connectors to fit with Mezzanine Boards. Also I tweaked the holes for DC plug and others since LeMaker’s HiKey, CircuitCo’s Hikey and DragonBoard 410C have slight differences on the exact positions.

I have attached some pictures of created cases with HiKey and DragonBoards 410C mounting USB serial boards and Sensor Boards.

I used MUTOH MF-2000 and MakerBot Replicator 2X where I could use in hourly base at my local government facility. The gcode file is optimized for MF-2000 and the x3g file is optimized for Replicator 2X.

I appreciate it for people updating the files or enhancing them.

Please have fun developing controlling application on 96Boards with this cases and enjoy building cool prototypes.

![96boards Image 1]({% asset_path "96boards-3d-printer-img-1.png" %}){:class="img-responsive lazyload"}
![96boards Image 2]({% asset_path "96boards-3d-printer-img-2.jpg" %}){:class="img-responsive lazyload"}
![96boards Image 3]({% asset_path "96boards-3d-printer-img-3.jpg" %}){:class="img-responsive lazyload"}
![96boards Image 4]({% asset_path "96boards-3d-printer-img-4.jpg" %}){:class="img-responsive lazyload"}
![96boards Image 5]({% asset_path "96boards-3d-printer-img-5.jpg" %}){:class="img-responsive lazyload"}
![96boards Image 6]({% asset_path "96boards-3d-printer-img-6.jpg" %}){:class="img-responsive lazyload"}
