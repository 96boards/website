---
author: Paul Sokolovsky
comments: true
date: 2017-10-09 12:00:00+00:00
layout: post
title: New Zephyr Socket API
image:
    featured: true
    path: /assets/images/blog/zephyr.jpg
    name: zephyr.jpg
tags:
- Zephyr
- 96Boards
- Consumer IoT
- Nitrogen
- Carbon
- 96Boards-Nitrogen
- 96Boards-Carbon
- 96BoardsCarbon
- 96BoardsNitrogen
- RTOS
- Socket
- API
---
# **New Zephyr Socket API**

### Introduction

In previous blog post (/blog/96boards-carbon-self-programming/), we learned about new features of the Zephyr RTOS 1.9 release, like mainline support for the 96Boards Carbon BLE connectivity, and learned how to self-program Carbon’s BLE chip using its main chip. This post continues to survey new features in Zephyr 1.9 which make Carbon, and IoT in general, programming more convenient. One of such features is initial BSD Sockets API support.

### What are BSD Sockets and why do they matter?

BSD Sockets is the well-known API for network programming. First appearing in BSD Unix in 1970ies, over time it became the de-facto standard for the Internet programming and is included in the POSIX (portable operating systems) standard. Many systems support BSD Sockets either natively or via compatibility layers. For example, even Windows 3.1 had add-on package for them named “WinSock” (you couldn’t run early Internet browsers on Windows without it!)

With RTOSes (real-time OSes, often “small” is implied) like Zephyr, the situation is a little bit different. BSD Sockets is relatively high-level standard, which means it has enough abstractions, generalizations, and features, which make the implementation large and often requiring non-trivial amount of support resources. Due to this, RTOSes usually have a more low-level API, allowing tighter usage and control of available resources. One example is that BSD Sockets are inherently “copying” API, requiring extra copy operation between network driver buffers and application data buffer. The RTOS APIs, on the other hand, usually try to follow “zero-copy” principle, minimizing number of buffers and copying among them.

### Why bring BSD Sockets to Zephyr?

The previous paragraph seem to settle it well - RTOSes have less resources, so need lower-level APIs. Why bother with BSD Sockets then? Few reasons. First of all “little resources” threshold changes with time. Many embedded systems nowadays have around the same amount of memory as IBM PC with its proverbial 640KB of RAM, and actually have more processing power than it.
Also, RTOSes resources are precious, but the most precious resource is developers’ time. Not only it takes more time to develop and debug with low-level APIs, a critical time can simply be lost with bringing a product to the fast-moving, competitive market. Even if it will allow you to build a prototype faster, then discard it because it’s not viable, and build a better one before your competitors, the prospect of using a higher-level API isn’t that bad.

Extending that idea a bit further, some people say that IoT differs from classical embedded exactly by the idea of applying well-known, decades-tested technologies and principles to the small devices. BSD Sockets is right spot-on for this. If you know it, you can develop (or at least prototype) IoT devices right away. If not, your investment in learning it won’t be lost - you can use the same API to program desktops, servers, cloud, and supercomputers.

### A short intro to native Zephyr networking API

To show the difference, let’s survey how native networking API works. First of all, it’s callback-based: you install a callback function, and when packet is received, this function will be called. That means there’s no sequential program flow, and application needs to be designed correspondingly. If that design didn’t work out well, it may become a Callback Hell. This callback function will receive data packet by packet, and that never should be underestimated. For a protocol like TCP, data may be fragmented arbitrarily among packets. You think that you will receive a complete HTTP request in a single packet? You just made a typical mistake when programming with such an API model. Not only an HTTP request might not fit in a single packet, even for the first line of request “GET / HTTP/1.0”, you might receive “G” in the first packet, “E”, in the 2nd, “T” in 3rd, etc.

To add more complications optimizations to the above, Zephyr also splits network packets into small, fixed-size data fragments (all in the name of better memory management and zero-copy, of course). So, if you made a mistake above, and didn’t hit it right away, but decided to search for “Host:” header in the request with familiar string searching functions, you can’t: “Ho” may be in one data fragment, and “st:” in the next. 

### Zephyr’s BSD Sockets compatible API

Let’s set the expectations right: the whole BSD Sockets API hasn’t been implemented. It’s far too big. What was implemented so far is a small subset of that API, enough to write simple applications. To that end, Zephyr’s API is called “BSD Sockets compatible”. The idea behind implementation of this API was the same as for Zephyr in general: keep it simple and efficient. The API is implemented as a thin layer on top of the native Zephyr API described above. However it implements all of the core functionality with functions like socket(), bind(), connect(), listen(), accept(), recv(), send(). Both IPv4 and IPv6 are supported, as well as blocking and non-blocking sockets, so you can develop async applications. For the latter, poll() function is provided (select() doesn’t fit “Zephyr compatible” idea well).

One point where POSIX (e.g. Linux) and Zephyr differ is in C header names required to access the sockets API. In Zephyr, it’s ```<net/socket.h>```, while in POSIX it’s ```<sys/socket.h>```. In both cases, number of support headers are required, which differ too. Hopefully, this header discrepancy might be resolved as Zephyr acquires more POSIX compatibility.

As an example of things which weren’t implemented (yet) are various getsockopt()/setsockopt() features, and some support functionality like getaddrinfo().

As mentioned above, provided functionality should be enough to develop (or port) at least simple networking applications. And indeed, that’s demonstrated by the examples include in Zephyr tree:
 * samples/net/sockets/echo is a simple, single-threaded (blocking) IPv4 echo server application, showing about the simplest socket server which can be written.
 * samples/net/sockets/echo_async is an expansion on the previous example, converting the server to asynchronous, non-blocking sockets based, with concurrent connections support, both IPv4 and IPv6.

The “echo_async” sample was tested and runs well on the Carbon. (“echo” sample on the other hand can’t, because it’s IPv4 only, and Carbon is a 6LoWPAN (IPv6) board, devoid of legacy protocol overhead!)

### Conclusion

The BSD Sockets compatible API is another useful addition to the already wide repertoire of Zephyr APIs, which hopefully will make IoT programmers more productive. Just as Zephyr in general, this API is a work in progress, expected to further evolve in the next versions. To help us along that way, and help smash those bugs which are surely still there, we need your feedback! So, give it a try, and let us know what worked and what didn’t.

