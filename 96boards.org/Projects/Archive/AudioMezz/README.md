---
layout: project-display-page
title: 96boards Projects &bull; AudioMezz
permalink: "/projects/AudioMezz/"
breadcrumb-title: Audio Mezzanine Board
breadcrumb-section: Projects
breadcrumb-subtitle: AudioMezz
specific_js:
  - /js/owl.carousel.min.js
  - /js/sticky-navbar.js
  - /js/lightbox.js
specific_css:
  - /css/owl.carousel.min.css
  - /css/owl.theme.default.min.css
  - /css/lightbox.css
images:
  - AudioMezz_FrontPage.png
---
# Audio Mezzanine Board

This project uses the 96Boards Audio Mezzanine Board and Alexa Voice Services to highlight the audio functionality of the DragonBoard™ 410c.

Objective
To showcase audio use cases and functionality of the DragonBoard 410c, the project captures audio from the headset microphone jack on the audio mezzanine board (AMB), then uses Alexa Voice Services for voice recognition, and then plays an audio response to a Bluetooth-paired speaker.

The audio mezzanine board includes:

- 6 Grove ports:
   - 2x I2C
   - 1x UART
   - 3x GPIO
- USB to UART conversion for access to the DragonBoard 410c system console
- Access to the analog audio on the DragonBoard 410c
   - 3.5mm headset jack
   - Analog Mic
   - Digital Mic
   - Speaker connection
- Access to the low-speed expansion connector with level shifting
- Power, reset, and volume control buttons

- Use Case 1 – Uses a Grove color sensor connected to the audio mezzanine board and audio output via wireless speakers. When the sensor detects one of four different colors, an audio response is triggered. Each color has a particular song associated with it, so once a sensor identifies a color (e.g., blue), a specific song should be played (e.g., a blues song).
- Use Case 2 – Uses a Grove color sensor connected to the audio mezzanine board and audio output via wireless speakers. When the sensor detects one of four different colors, an audio response is triggered in the form of a voice service audibly identifying what color has been detected (e.g., “the color is blue would be heard through the speaker).
- Use Case 3 – Uses an audio input via a microphone attached to the audio mezzanine board. A user asks a question into the microphone, which then triggers the Amazon Alexa voice service to initiate a cloud-based Internet search on that topic, resulting in an audio reply to the query via the Bluetooth connected speaker.

## Project Details

- **Creator:** Kenneth Westfield, San Diego, CA - Qualcomm Innovation Center, Inc.
- **Project Name:** Audio Mezzanine Board
- **Type of Project:** Demonstrations (Projects showcasing individual features of a 96Boards product)
- **Project Category:** Alexa Voice Service, Bluetooth, IoT, Sensors
- **Board(s) used:** DragonBoard 410c

## Resources

### RSS URL

- [View Project on Qualcomm Developer Network](https://developer.qualcomm.com/project/audio-mezzanine-board)
- [Source Code](https://github.com/DBOpenSource/amb_demo)

### Social Media Links

- 96Boards: [URL](http://www.96boards.org/) &#124; [Twitter](https://twitter.com/96boards) &#124; [Facebook](https://www.facebook.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/showcase/6637095/)

***
