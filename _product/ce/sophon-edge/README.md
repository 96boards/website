---
title: Sophon Edge
layout: product
permalink: /product/sophon-edge/
product: true
archived: false
dateAdded: 2018-04-05 09:00:00+00:00
ai_board: true
shortname: sophon-edge
ai_board_desc: >
    The Bitmain Sophon(TM) Edge Developer Board is designed for bringing powerful Deep Learning capability to various types of applications through its quick prototype development.
description: |-
    The Bitmain Sophon™ Edge Developer Board is designed for bringing powerful Deep Learning capability to various types of applications through its quick prototype development. Sophon Edge Developer Board is powered by a BM1880, equipping tailored TPU support DNN/CNN/RNN/LSTM operations and models. This board is compatible with Linaro 96boards while also supporting modules for Arduino and Raspberry Pi. Developers can leverage off-the-shelf modules and develop cutting edge DL/ML applications, like facial detection and recognition, facial expression analysis, object detection and recognition, vehicle license plate recognition, voiceprint recognition, and more!
keywords: |-
    processing, power, Wi-Fi, Bluetooth connectivity, GPS, development, board, mid-tier, xilinx, fpga, processor, low cost, Product, Development, Platform, bitmain, sophon, edge, bm1880
product_short_desc: "Bitmain Sophon™ Edge Developer Board is powered by the BM1880"
product_specification: ce
display_product: true
product_images:
  - images/sophon-front-sd.png
  - images/sophon-back-sd.png
sticky_tab_bar:
    - title: Sophon Edge
      url: /product/sophon-edge/
      active: true
    - title: AI
      url: /product/sophon-edge/ai/
    - title: Getting Started
      url: /documentation/consumer/sophon-edge/getting-started/
    - title: Documentation
      url: /documentation/consumer/sophon-edge/
product_buy_links:
  -
    link-title: Sophon Edge (US)
    link-url: https://sophon.ai/product/view/00020181017110652CiJsd2n6aOcHr4a/view.html
    from: Sophon.ai
    type: board
    link-price: "$129.99"
    link-price-currency: USD
  -
    link-title: Sophon Edge (CN)
    link-url: https://sophon.cn/product/view/00020181017110652CiJsd2n6aOcHr4a/view.html
    from: Sophon.ai
    type: board
    link-price: "&#xa5;899.00"
    link-price-currency: CNY
product_sidebar_sections:
    - title: OS
      icon: icon-terminal
      items:
        - title: Source SDK
          link: https://github.com/BM1880-BIRD/bm1880-system-sdk
        - title: Source Program
          link: https://github.com/BM1880-BIRD/bm1880-ai-demo-program
    - title: More Info
      items:
        - title: Sophon - Getting Started
          link: https://sophon-edge.gitbook.io/project/overview/edge-tpu-developer-board
    - title: Third Party Images
      icon: icon-link-ext-alt
      items:
        - title: Phoenix
          link: /documentation/consumer/bubblegum-96/downloads/phoenix-remix.md.html
        - title: Remix
          link: /documentation/consumer/bubblegum-96/downloads/phoenix-remix.md.html
        - title: Ubuntu Core
          link: /documentation/consumer/bubblegum-96/downloads/ubuntu-core.md.html
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
        - title: Link Sprite Sensor Kit
          link: /product/linkspritesensorkit/
        - title: UART Serial
          link: /product/uartserial/
        - title: Sensors Mezzanine
          link: /product/sensors-mezzanine/
attributes:
  - name: "SoC"
    value: >-
      Sophon BM1880
  - name: "CPU"
    value: >-
      Sophon BM1880
  - name: "RAM"
    value: >-
      LPDDR4 1GB @ 3200Mhz
  - name: "Storage"
    value: >-
      8GB eMMC + micro SD card slot
  - name: "Connectivity"
    value: >-
      Gigabit Ethernet(RJ-45), Wifi, Bluetooth
  - name: "USB"
    value: >-
      USB 3.0 x 3 (support camera, U- disk..etc)
  - name: "Expansion Interface"
    value: >-
      40-pin 96Boards low-speed expansion header
  - name: "Audio"
    value: >-
      I2S x 2 (included in 40-pin header)
  - name: "Video"
    value: >-
      H.264 decoder, MJPEG encoder/decoder
  - name: "Power"
    value: >-
      12V@2A
  - name: "OS Support"
    values:
      - title: Linux
  - name: "Dimensions"
    values:
      - title: "width"
        value: 54mm
      - title: "length"
        value: 85mm

---

The Bitmain Sophon(TM) Edge Developer Board is designed for bringing powerful Deep Learning capability to various types of applications through its quick prototype development. Sophon Edge Developer Board is powered by a BM1880, equipping tailored TPU support DNN/CNN/RNN/LSTM operations and models. This board is compatible with Linaro 96boards while also supporting modules for Arduino and Raspberry Pi. Developers can leverage off-the-shelf modules and develop cutting edge DL/ML applications, like facial detection and recognition, facial expression analysis, object detection and recognition, vehicle license plate recognition, voiceprint recognition, and more!

***

## Additional Information

|   Component          |   Description                                                                                    |
|:---------------------|:-------------------------------------------------------------------------------------------------|
|  Processor           | Sophon BM1880                                                                                    |
| System Memory        | LPDDR4 1GB                                                                                       |
| Flash Memory         | 8GB eMMC + micro SD card slot                                                                    |
| Connectivity         | Gigabit Ethernet(RJ-45), Wifi, _Bluetooth_ ® wireless technology                                                         |
| USB                  | USB 3.0 x 3 (support camera, U- disk..etc)                                                       |
| I/O Expansion        | 40-pin 96Boards low-speed expansion header                                                       |
| Audio                | I2S x 2 (included in 40-pin header)                                                              |
| H.264 decoder, MJPEG encoder/decoder | 1x 1080p @60fps or 2x 1080p @30fps H.264 decoder, 75fps for FHD images           |
| Power                | 12V@2A                                                                                           |
| OS                   | Linux                                                                                            |
| Dimensions           | 85mm x 54mm                                                                                      |

**NOTE:** Many compliance items for this board were waived due to the nature of the chipset being used and the uniqueness of the board. The Edge BM1880 TPU ASIC accels in its AI and deep learning abilities, for this reason, the following items were waived in order to accomodate the Sophon Edge into the 96Boards ecosystem:

- Instead of OTG or C port near center of board, the two host ports are pushed into the center, and it uses a 3.0 A port as OTG.
- Does not have any display output capability.
- Does not have high speed connector.
- Ethernet port exeeds component maximum height limit of 6.5mm.
