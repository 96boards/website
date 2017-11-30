---
author: Manivannan Sadhasivam
comments: true
date: 2017-11-28 01:01:54+00:00
layout: post
image:
    featured: true
    path: /assets/images/blog/agl-demo.jpg
    name: agl-demo.jpg
    thumb: agl-demo-thumb.jpg
title: Automotive Grade Linux on Dragonboard410c - Part 3
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- ARM
- ARMv8
- Consumer Edition
- DB410c
- dragonboard410c
- Linaro
- Linux
- AGL
- Automotive
---

# **Introduction**

Hello and Welcome to **Part 3** of our **Automotive Grade Linux on Dragonboard410c**
blog series. This is the final part of the blog series and intended to serve as a guide
for application development using AGL framework. 

Before getting into the blog, here is the quick recap of what happened in
previous blogs of the series:

1. [Automotive Grade Linux on Dragonboard410c - Part 1](https://www.96boards.org/blog/agl-on-dragonboard410c-part1/) - This
is the introductory blog for the **Automotive Grade Linux on Dragonboard410c**
blog series. This part introduced AGL and steps required to build and deploy
it on Dragonboard410c.

2. [Automotive Grade Linux on Dragonboard410c - Part 2](https://www.96boards.org/blog/agl-on-dragonboard410c-part2/) - This
blog demonstrated the **HVAC** (Heat Ventilation and Air Conditioning) using the
agl-demo-platform GUI with the help of Sensors Mezzanine and Dragonboard410c.

# **Application Development using AGL Framework**

AGL provides the Application Framework for the users to create applications based on Qt, HTML etc...
Developing applications for AGL involves creating the frontend as well as the backend.
Frontend is the GUI which will be Qt/HTML in most cases and backend is the binding
written in C which communicates to the Frontend through Websockets. There are different
categories of applications which can be developed for AGL:

* **Service**

A Service is a headless background process, allowing Bindings to expose
various APIs accessible through the transports handled by the application
framework, which are currently:
▪ HTTP REST (HTTP GET, POST...)
▪ WebSocket
▪ D-Bus

* **Native Application**

A Native application is a compiled application, generally written in C/C++,
accessing one or more services, either by its own means or using a helper
library with HTTP REST/WebSocket capabilities.

* **HTML5 Application**

An HTML5 application is a web application, generally written with a
framework (AngularJS, Zurb Foundation...), accessing services with its built-
in HTTP REST/WebSocket capabilities.

* **QML Application**

An QML application is a Qt application written in QML/QtQuick descriptive
language, accessing a service with its built-in HTTP REST/WebSocket
capabilities.

* **Hybrid application**

A Hybrid application contains at the same time (an) Application-specific
Binding(s) as backend(s) and a User Interface (Native, HTML5, QML ...)
as a frontend. This is probably the most pertinent real-world case, since it allows
developers to provide capabilities through Bindings, and an end-user
experience through the UI. For instance, a GPS Binding giving device
localization status, and a HTML5 GPS frontend displaying it on the screen.

In this blog we are going to see how to develop a hybrid application for AGL.

# **Setting up the Docker Container**

AGL provides the pre built Docker containers with the necessary SDK to start
application development seamlessly. Users can build the applciations within
the docker containers and package them as a Widget and finally deploy it on
the AGL.

More information on setting up the Docker container can be seen in the
[AGL SDK Quick Setup Guide](http://docs.automotivelinux.org/docs/getting_started/en/dev/reference/setup-sdk-environment.html).
Just follow the guide and set up the Docker container with the latest
prebuilt docker image.

After setting up the Docker container, you can also build your own Docker image
by following this [README](https://git.automotivelinux.org/AGL/docker-worker-generator/tree/README.md).

# **Building and Deploying the Application**

Now, the Demo applcation can be built using the SDK present inside the docker
container by following the steps mentioned in [96Boards Projects Org](https://github.com/96boards-projects/agl-demo#2-demo-application).

# **Demo Application Overview**

The demo application provided in the [96Boards Projects Org](https://github.com/96boards-projects/agl-demo#2-demo-application)
is a hybrid application which has the QML frontend backed by the binding written in C.
The communication between frontend and backend happens through Websockets.

* [QML Frontend](https://github.com/96boards-projects/agl-demo/tree/master/db410c-temp/app)

Frontend is a bre minimum QML application which consists of couple of Text sections and one
Timer section. Timer section is used to setup and trigger the timer at 3 seconds interval.
After the lapse of the timer interval, request for getting the temperature data will be sent
to the binding through websocket.

```shell
  Timer {
   id: timer
   interval: 3000
   running: true
   repeat: true
   onTriggered: {
    var request_str = [MessageId.call, '9999', 'db410c/temp', '']
    console.debug(JSON.stringify(request_str))
    websocket.sendTextMessage(JSON.stringify(request_str))
    }
  }
```
Binding will send the temperature data in return, which will get parsed and displayed
on the application window.

```shell
  onTextMessageReceived: {
    // VERB RESPONSE VALIDATION
    var json = JSON.parse(message)
    var request = json[2].request
    if (json[0] != MessageId.retok) {
      console.log("Return value is not ok !")
      return
    }
    console.log("got value", request.info)
    temp.text = request.info
  }
```
* [Backend Binding](https://github.com/96boards-projects/agl-demo/tree/master/db410c-temp/binding)

Backend binding has been completely written in C which utilises the AGL application framework.
AGL framework requires the bindings to export `verbs` for individual functionalities offered.
Same as that, this demo binding offers `temp` verb for collecting and sending the temperature data.
Once, the binding receives the request from the QML frontend through websocket, it will gather
the temperature data from TMP007 sensor and sends it back to the frontend through websocket.

```shell
  /* read raw temp data */
  if(read(fd, data, 2) != 2) {\
    AFB_ERROR(interface, "read failed");
    afb_req_fail(request, "failed", "Read failed");
  } else {
  /* convert the data to 14-bits */
  tmp = (data[0] * 256 + (data[1] & 0xFC)) / 4;
  if(tmp > 8191) {
    tmp -= 16384;
  }	
  
  /* convert to celsius */
  val = tmp * 0.03125;

  /* convert temp data to readable format and return it */
  snprintf(temp_data, 6, "%f", val);
  afb_req_success(request, NULL, temp_data);
```
And finally the data will get displayed in the application window.

# **Conclusion**

So, we have reached the end of the AGL blog series. I hope this blog series
provided introduction about AGL and served as a guide for application developement
using it. There are N number of possibilities available with AGL since it is backed
by the Top most Automotive companies and Linux Foundation in particular. If AGL
continues to grow in the upcoming days, we can expect to see most majority of cars
powered by it :-)





