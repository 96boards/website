---
title: Amazon Alexa Virtual Device
permalink: "/projects/AmazonAlexaVirtualDevice/"
description: |-
    This project aims to provide the ability to bring Alexa to a Linux device including embedded systems like the DragonBoard™ 410c from Arrow Electronics.
images:
  - AmazonAlexa_FrontPage.png
categories:
- dragonboard410c
- Alexa
image:
    path: /assets/images/projects/alexavd-thumb.png
    name: alexavd-thumb.png
    thumb: alexavd-thumb.png
---
# Amazon Alexa Virtual Device

This project aims to provide the ability to bring Alexa to a Linux device including embedded systems like the DragonBoard™ 410c from Arrow Electronics. The
binary release is packed into an Ubuntu Core Snap package.

## Project Details

- **Creator:** Maxim Ivannikov
- **Project Name:** Amazon Alexa Virtual Device
- **Type of Project:** Demo
- **Project Category:** Alexa Voice Service, IoT, Embedded, Smart Home, Smart Cities
- **Board(s) used:** [DragonBoard 410c](/product/dragonboard410c/)

## Resources

### RSS URL

- [View project on Qualcomm Developer Network](https://developer.qualcomm.com/project/amazon-alexa-virtual-device)
- [Source Code / Source Example / Application Executable](https://github.com/devicehive/AlexaDevice/releases/tag/v1.1)

### Build / Assembly Instructions

1. You need to create your own Alexa Device on the Amazon developer portal. Instructions available on GitHub to create your own device and security profile.
Add http://alexa.local:3000/authresponse to the Allowed Return URLs and http://alexa.local:3000 to the Allowed Origins.
2. Connect an audio device: a microphone and speakers to your device. It could be a USB headset for example.
3. Install the PulseAudio snap: `sudo snap install --devmode pulseaudio`
4. Install the Alexa snap from the store: `sudo snap install --channel beta alexa`
5. Open http://alexa.local:3000 in a web browser on a local device or a device on the same network. Note: the app provides an mDNS advertisement of the local
domain alexa.local. This is very helpful for using with monitor less devices.
6. Fill in the device credentials that were created during step 1, click 'log in'. Note: the voice detection threshold is a float value for adjusting voice detection. The smaller the value, the easier it is to trigger. You may need to adjust it for your mic and voice.
7. Fill in your Amazon credentials

### Usage Instructions

Now you can speak with Alexa. The app uses voice activation, so simply say 'Alexa' and the phrase that you want to say. The app makes a beep via the speakers
when it hears the 'Alexa' keyword and starts recording. Enjoy Alexa without the need to buy special hardware.

### Social Media Links

- 96Boards: [URL](/) &#124; [Twitter](https://twitter.com/96boards) &#124; [Facebook](https://www.facebook.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/company/{{site.linkedin_username}}/)


***
