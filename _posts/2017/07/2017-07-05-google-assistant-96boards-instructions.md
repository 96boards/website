---
author: Radhika Paralkar
featured_blog: true
date: 2017-07-05 13:00:00+00:00
layout: post
link: https://www.96boards.org/blog/google-assistant-96boards-instructions/
slug: google-assistant-96boards-instructions
title: Instructions for Google Assistant on 96Boards
series: Google Assistant on 96Boards
image:
    featured: true
    path: /assets/images/blog/google-assistant-96boards.jpg
    name: google-assistant-96boards.jpg
    thumb: google-assistant-96boards-thumb.jpg
categories:
- blog
tags:
- 64-Bit
- 96Boards
- Aarch64
- Android
- ARM Arm32
- Arm64
- ARMv8
- B2260
- Breakout
- Bubblegum
- Bubblegum-96
- CE
- Consumer
- Edition
- Consumer
- IoT
- DB410c
- Debugging
- Docker
- DragonBoard
- Dragonboard410c
- DragonBoard
- 410c
- F-Cue
- Gdb
- General
- Purpose
- Input
- Output
- GPIO
- Gui
- HiKey
- I2C
- I
- Squared
- C
- Library
- Linaro
- Linux
- Low
- Speed
- Expansion
- Header
- Maker
- MediaTek
- X20
- Mezzanine
- Open
- Embedded
- OpenHours
- Open
- Hours
- Open
- Source
- Qualcomm
- Reference
- Platform
- Rpb
- Sensors
- UART
---
# **Introduction**

**This blog is subject to going out of date. Please** [visit this project](https://github.com/96boards-projects/google_assistant) **in the** [96Boards Projects Org](https://github.com/96boards-projects) **for the most up to date instruction set.**

In [the previous blog](/blog/google-assistant-using-96boards-intro/) we spoke about implementing Google Assistant on a DragonBoard using the recently released Google Assistant Software Development Kit, the hardware required and gave a roadmap for implementing the same.

In today’s blog we will discuss the steps required in order to set up the project. First, we will talk about the hardware requirements and the setup. Then, we will learn how to configure a developer project on Google Cloud Platform and change the account settings for your google account. Once that is done, we will proceed with the software dependencies and finally, discuss how to integrate the project onto our development board. This blog will guide you through all of these steps in as much detail as possible. So let’s get right to it!

{% include media.html media_url="https://www.youtube.com/embed/bbMp3puXkVg" %}

# **Hardware Setup**

### **Requirements**

1.  DragonBoard410c with access to internet
2.  Keyboard, mouse and a monitor
3.  USB Microphone
4.  Bluetooth Speakers

### **Interface hardware with the DragonBoard**

To begin hardware connections, make sure the DragonBoard is powered off. Connect the USB Microphone onto one of the USB ports on the DragonBoard. If you are using USB Speakers, connect them as well. Since the DragonBoard has two USB ports, you may use a USB hub in order to connect the input devices such as mouse and keyboard. Then connect the monitor using the HDMI port and power on the DragonBoard 410c with 96Boards compliant power supply.

{% include image.html name="ga-img-1.jpg" alt="New title" %}


If you want to use Bluetooth speakers, keep them switched on. When the system boots, open Bluetooth Manager from the Application Menu. Click on search so that the DragonBoard can start scanning for nearby devices. Once the device appears, right click on it and select pair. Finally, after pairing, click on connect. To make sure the microphone and speakers are connected successfully, go to Application Menu - Sound & Video - PulseAudio Volume Control and check the input and output devices.

# **Configure a Developer Project**

Google Cloud Platform is a service that allows one to build and host a number of projects, applications and more. Also, since it provides a $300 credit for users, we don’t have to worry about paying for this project. A Developer project basically gives your device access in order to use the Google Assistant API. It tracks quota usage and gives you valuable metrics for the requests made from your device.

**In order to proceed with the further steps, you will have to have a Google Account.**

1.  Go to the the [projects page](https://console.cloud.google.com/cloud-resource-manager) on Google Cloud Platform and create a new project.
2.  In the [API manager](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) page search for the Google Assistant API and Enable it.
3.  Now we will create an [OAuth Client ID](https://console.developers.google.com/apis/credentials/oauthclient). Select ‘Others’ and provide a product name and proceed to save. After you click on create, it will generate a dialog box with the client ID and secret. Next to the clientID, click on the download (**⬇)** button and save the .json file in working directory of the DragonBoard.

# **Account settings for Google Account**

Now, let’s go ahead and set activity control settings for the google account.

Open the [Activity Controls Page](https://myaccount.google.com/activitycontrols) and ensure that all of these switches are turned on. We will need each of these for the proper functioning of the project since they give google access to required information

1.  Web and App Activity
2.  Location History
3.  Device Information
4.  Voice and Audio Activity

![Google Assistant Instruction for 96boards Image 2](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==){:class="img-responsive lazyload" data-src="{% asset_path 'ga-img-2.png' %}}

# **Software Dependencies**

First, we will begin with updating the already available packages and install the newer versions of packages we have. Run the following commands to do the same.

```bash
$  sudo apt-get update
$  sudo apt-get upgrade
```

The reference code provided by Google is written in Python, so install the latest version of Python. PIP is basically a package manager which is used to install packages that are written in Python. A virtual environment allows creation of isolated environments to download dependencies that are required for a project.

```bash
 $ sudo apt-get install python3
 $ python -m pip install virtualenv
 $ virtualenv venv
 $ source venv/bin/activate
 $ python -m pip install --upgrade pip
 $ python -m pip install --upgrade pip setuptools
```

gRPC is a modern open source high performance RPC framework that can run in any environment. This framework is supports bidirectional audio streaming. You can find more documentation on gRPC [here](http://www.grpc.io/docs/).

```bash
 $ python -m pip install grpcio
 $ python -m pip install grpcio-tools
```

So these are all the packages we will be using for this application. Now let’s take a look at the final step which allows us to implement the application onto the DragonBoard.

# **Integrating the assistant onto the DragonBoard**

Google has provided a sample code which we will be using for our project. Run the following commands in order to clone the sample project repository and move the code into a new directory called new-project.
```bash
 $ git clone https://github.com/googlesamples/assistant-sdk-python
 $ cp -r assistant-sdk-python/google-assistant-sdk/googlesamples/assistant/grpc new-project
 $ cd new-project
```

To proceed, we need to authorize our device to talk to the Google Assistant using the Google Account. The Assistant SDK uses OAuth 2.0 access tokens to authorize your device to connect with the Assistant. First, we install the authorization tool. Then run the tool using the json file that was downloaded earlier. Make sure the path to the json file is correct.

```bash
 $ pip install --upgrade google-auth-oauthlib[tool]
 $ google-oauthlib-tool --client-secrets path/to/client_secret_XXXXX.json --scope https://www.googleapis.com/auth/assistant-sdk-prototype --save --headless
```

Install the final two dependencies.

```bash
 $ sudo apt-get install portaudio19-dev libffi-dev libssl-dev
 $ pip install --upgrade -r requirements.txt

```

The directory contains a python file called audio_helpers.py. The code basically records an audio clip for five seconds and plays it back.

```bash
 $  python audio_helpers.py
```

Finally, run the push to talk sample. The sample records a voice query after a keypress and plays back the Google Assistant’s answer:

```bash
 $ python -m pushtotalk
```

# **Troubleshooting**

Now, this one bothered me for a while so I will talk about it first. If there is an error that says a certain package is missing, check the path of the imported packages in the code and make sure they are in the right place.

This one helps us do a simple speaker and microphone test, just to make sure that the hardware is functional.

```bash
 $ speaker-test -t wav
 $ arecord --format=S16_LE --duration=5 --rate=16000 --file-type=raw out.raw
 $ aplay --format=S16_LE --rate=16000 --file-type=raw out.raw
```

Finally, if you are experiencing choppy audio or any discontinuities in the responses, these commands should help. They basically adjust the sound device’s block size.

The appropriate size depends on the hardware so you may have to try more than one to get it right. For example 0,1024, 2048, 3200, 4096.

```bash

 $ python pushtotalk.py --audio-block-size=0

```

# **Conclusion**

So there you have it, your own Google Assistant working on a DragonBoard! You can go through the [Google Assistant gRPC API](https://developers.google.com/assistant/sdk/reference/rpc/) documentation and try some more things by modifying the sample code in order to customize how the device interacts with Google Assistant.

* * *

# Resources

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124; [Facebook](https://www.facebook.com/96Boards/) &#124; [YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/digest/)” and our “[Weekly Digest](/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience – [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea 😀

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
