---
title: Geniatech DB4
layout: product
permalink: /product/db4/
product: true
shortname: db4
archived: false
dateAdded: 2020-12-20 09:00:00+00:00
description: |-
    Geniatech DB4 by Arrow Electronics, development board based on the mid-tier Qualcomm® APQ8016E processor. Low-Cost Product Development Platform
keywords: |-
    processing, power, Wi-Fi, Bluetooth connectivity, GPS, development, board, mid-tier, Qualcomm, APQ8016E, processor, low cost, Product, Development, Platform
display_product: true
product_short_desc: "Board based on Qualcomm® APQ8016E processor and it's the size of a credit card."
product_specification: ce
product_images:
  - images/db4-front.jpg
  - images/db4-back.jpg
sticky_tab_bar:
    - title: Geniatech DB4 (Arrow)
      url: /product/db4/
      active: true
    - title: Getting Started
      url: /documentation/consumer/dragonboard/db4/getting-started/
      tab_position: 1
    - title: Documentation
      url: /documentation/consumer/dragonboard/db4/
      tab_position: 2
    - title: Support
      url: https://discuss.96boards.org/c/products/dragonboard410c/
      tab_position: 3
      tab_align_right: true
# product_buy_links:
#   -
#     link-title: DB4 1G RAM+8G flash
#     link-url: "https://shop.geniatech.com/product/developer_board_4_v3/"
#     from: Geniatech
#     type: board
#     link-price: "$109.00"
#     link-price-currency: USD
#   -
#     link-title: DB4 2G RAM +16Flash
#     link-url: "https://shop.geniatech.com/product/developer_board_4_v3/"
#     from: Geniatech
#     type: board
#     link-price: "$119"
#     link-price-currency: USD
  
product_sidebar_sections:
    - title: OS
      icon: fa-terminal
      items:
        - title: Android
          link: /documentation/consumer/dragonboard/dragonboard410c/downloads/android.md.html
        - title: Debian
          link: /documentation/consumer/dragonboard/dragonboard410c/downloads/debian.md.html
        - title: OpenEmbedded
          link: /documentation/consumer/dragonboard/dragonboard410c/downloads/open-embedded.md.html
        - title: Windows
          link: https://www.microsoft.com/en-us/download/details.aspx?id=55027
        - title: Ubuntu
          link: https://developer.ubuntu.com/core/get-started/dragonboard-410c
        - title: Fedora
          link: https://fedoraproject.org/wiki/Architectures/ARM/96Boards
    - title: Third Party Images
      icon: fa-external-link-square
      items:
        - title: Windows 10 IoT Core
          link: https://www.microsoft.com/en-us/download/details.aspx?id=55027
        - title: Ubuntu Core
          link: https://developer.ubuntu.com/core/get-started/dragonboard-410c
        - title: Fedora
          link: https://fedoraproject.org/wiki/Architectures/ARM/96Boards
        - title: More Downloads
          link: /documentation/consumer/dragonboard/dragonboard410c/downloads/
    - title: Middleware & SDK's
      icon: fa-code
      items:
        - title: AWS IoT SDK
          link: https://github.com/ArrowElectronics/aws-iot-device-sdk
        - title: IBM Watson IoT Platform
          link: https://developer.ibm.com/recipes/tutorials/dragonboard410c-recipe/
        - title: AT&T M2X
          link: https://github.com/ArrowElectronics/att-iot-device-sdk
        - title: ROS
          link: http://wiki.ros.org/kinetic/Installation/Debian
product_bottom_section:
    - title: Accessories
      url: /products/accessories/
      items:
        - title: Power
          link: /product/power/
        - title: Adapter
          link: /product/adapter/
        - title: Debug
          link: /product/debug/
        - title: Misc
          link: /product/misc/
    - title: Mezzanine
      url: /products/mezzanine/
      items:
        - title: D3 Camera Mezzanine
          link: /product/d3camera/
        - title: Link Sprite Sensor Kit
          link: /product/linkspritesensorkit/
        - title: UART Serial
          link: /product/uartserial/
        - title: Sensors Mezzanine
          link: /product/sensors-mezzanine
        - title: Audio Mezzanine
          link: /product/audio-mezzanine/
# vendor:
#   name: Geniatech
#   url: https://shop.geniatech.com/product/developer_board_4_v3/
attributes:
  - name: "SoC"
    value: >-
      Qualcomm Snapdragon 410E
  - name: "CPU"
    value: ARM Cortex-A53 Quad-core up to 1.2 GHz per core
  - name: "GPU"
    value: Qualcomm Adreno 306 @ 400MHz for PC-class graphics with support for Advanced APIs, including OpenGL ES 3.0, OpenCL, DirectX, and content security
  - name: "RAM"
    value: 1GB or 2GB LPDDR3 533MHz
  - name: "Wireless"
    value: >-
      WLAN 802.11 b/g/n 2.4 GHz, Bluetooth 4.1, GPS. On board GPS, BT and WLAN antennas
  - name: "Storage"
    value: 8GB or 16GB eMMC 5.0 on board storage and MicroSD card slot
  - name: "Ethernet"
    value: USB 2.0 expansion
  - name: "USB"
    value: >-
      2 x USB 2.0 Host
      1 x USB 2.0 OTG
  - name: "Display"
    value: 1 x HDMI 1.4 (Type A - full) 1 x MIPI-DSI HDMI output up to FHD 1080P
  - name: "Video"
    value: >-
      1080p@30fps HD video playback and capture with H.264 (AVC), and 720p playback with H.265 (HEVC)
  - name: "Audio"
    value: >-
      PCM/AAC+/MP3/WMA, ECNS, Audio+ post-processing (optional)
  - name: "Camera"
    value: Integrated ISP with support for image sensors up to 13MP
  - name: "Expansion Interface"
    value: >-
      "40 pin low speed expansion connector: +1.8V, +5V, SYS_DCIN, GND, UART, I2C, SPI, PCM, PWM,GPIO x12
       60 pin high speed expansion connector: 4L-MIPI DSI, USB, I2C x2, 2L+4L-MIPI CSI"
  - name: "LED"
    value: >-
      "6 x LED:
        4 x User controlled
        2 x Radio (BT and WLAN activity)"
  - name: "Buttons"
    value: >-
      Power/Reset and Volume Up/down
  - name: "Power"
    value: 8V~18V@3A, Plug specification is inner diameter 1.7mm and outer diameter 4.8mm
  - name: "OS Support"
    values:
      - title: Android
      - title: Linux
      - title: Windows IoT Core
  - name: "Dimensions"
    values:
      - title: "width"
        value: 54mm
      - title: "length"
        value: 85mm

---
The Geniatech DB4, a product of Arrow Electronics, is the development board based on the mid-tier Qualcomm® APQ8016E processor. It features advanced
processing power, Wi-Fi, _Bluetooth_ ® wireless technology connectivity, and GPS, all packed into a board the size of a credit card.

***

## Additional Information

|   Component          |   Description                                                                                    |
|:---------------------|:-------------------------------------------------------------------------------------------------|
|  SoC                 | Qualcomm APQ8016E                                                                         |
|  CPU                 | ARM Cortex-A53 Quad-core up to 1.2 GHz per core                                                  |
|  GPU                 | Qualcomm Adreno 306 @ 400MHz for PC-class graphics with support for Advanced APIs, including OpenGL ES 3.0, OpenCL, DirectX, and content security                                                                                     |
|  RAM                 | 1GB or 2GB LPDDR3 533MHz                                                                        |
|  Storage             | 8GB or 16GB eMMC 5.0 on board storage and MicroSD card slot                                             |
|  Ethernet Port       | USB 2.0 expansion                                                                                |
|  Wireless            | WLAN 802.11 b/g/n 2.4 GHz, Bluetooth 4.1, GPS. On board GPS, BT and WLAN antennas                |
|  USB                 | 2 x USB 2.0 Host 1 x USB 2.0 OTG                                                                 |
|  Display             | 1 x HDMI 1.4 (Type A - full) 1 x MIPI-DSI HDMI output up to FHD 1080P                            |
|  Video               | 1080p@30fps HD video playback and capture with H.264 (AVC), and 720p playback with H.265 (HEVC)  |
|  Audio               | PCM/AAC+/MP3/WMA, ECNS, Audio+ post-processing (optional)                                        |
|  Camera              | Integrated ISP with support for image sensors up to 13MP                                         |
|  Expansion Interface | 40 pin low speed expansion connector: +1.8V, +5V, SYS_DCIN, GND, UART, I2C, SPI, PCM, PWM,GPIO x12 60 pin high speed expansion connector: 4L-MIPI DSI, USB, I2C x2, 2L+4L-MIPI CSI                                                  |
|  LED                 | 6 x LED: 4xUser controlled, 2xRadio(BT and WLAN activity)                                        |
|  Button              | Power/Reset and Volume Up/down                                                                   |
|  Power Source        | 8V~18V@3A, Plug specification is inner diameter 1.7mm and outer diameter 4.8mm                   |
|  OS Support          | Android / Linux / Windows IoT Core                                                    |
|  Size                | 85mm x 54mm                                                                                      |

