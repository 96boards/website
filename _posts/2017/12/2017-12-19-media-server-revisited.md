---
title: Media Server Revisited
author: Sahaj Sarup
date: 2017-12-19 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/mediaserver2.jpg
    name: mediaserver2.jpg
    thumb: media-server-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---
# **Introduction**
If you are someone who has hundreds if not thousands of photos, music, and movies sitting on a hard drive in your house, but no easy way to access them.  Wouldn’t it be nice to make all those photos and home movies available to everyone in the house at any time? Or how about playing all your own music over the home network?

This is easier than you might think with a 96Boards!

Using a 96Boards such as the DragonBoard DB410c and some freely available open source software that supports DLNA, you can create a transparent local Media Server that provides easy simultaneous access to all this information to friends and family.  It’s easier than you think and it turns out to be quite fun to have all your digital media available at your fingertips.

**Setting up a home media server is quite easy and to get started have a look at our [Projects Org](https://github.com/96boards-projects/) repo for the Media Server Project: https://github.com/96boards-projects/media_server**

# **Playing Back Media on Various Devices**
As long as the client and the server are connected to the same LAN - Local Area Network - any media player compatible with UPNP - Universal Plug and Play - should work just fine.

We have tested three media players
 - [VLC](https://www.videolan.org/index.html)
 - [Kodi](https://kodi.tv/)
 - [Media House](https://play.google.com/store/apps/details?id=com.dbapp.android.mediahouse&hl=en)

 {% include media.html media_url="https://youtu.be/ldwtO2wN0zU" %}
