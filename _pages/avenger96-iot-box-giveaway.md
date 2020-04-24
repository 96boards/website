---
title: Avenger96/IoT Box Giveaway
permalink: /avenger96-iot-box-giveaway/
js-package: giveaway
css-package: giveaway
description: >
    96Boards have teamed up with Arrow, ST and Shiratech to give you the chance to get a free Avenger96 or IoT Box. This is an online campaign dedicated to Arrow's 96Boards products, main and mezzanine, around STM's MP1 96Boards.
layout: flow
jumbotron:
    title: Avenger96 / IoT Box Giveaway
    description: >
        96Boards have teamed up with Arrow, ST and Shiratech to give you the chance to get a free Avenger96 or IoT Box. This is an online campaign dedicated to Arrow's 96Boards products, main and mezzanine, around STM's MP1 96Boards.
flow:
    - row: container_row
      sections:
        - format: members
          style: zoom
          members_content:
            item_width: 3
            items:
              - name: Arrow
                image:
                    path: https://static.linaro.org/common/member-logos/arrow.jpg
                    alt: Arrow Logo
              - name: ST
                image:
                    path: https://static.linaro.org/common/member-logos/st.jpg
                    alt: ST Logo
              - name: Shiratech
                image:
                    path: https://static.linaro.org/common/member-logos/shiratech.jpg
                    alt: Shiratech Logo
              - name: 96Boards Logo
                image:
                    path: /assets/images/content/96Boards-Logo-black.svg
                    alt: 96Boards Logo
    - row: custom_include_row
      source: giveaway_board_slider.html
    - row: custom_include_row
      source: giveaway_mezzanine_select.html
    - row: container_row
      style: bg-gray
      sections:
        - format: feature_block
          feature_block_content:
            position: left
            type: image
            image_content_path: /assets/images/content/avenger96-front-sd.png
            title: The Avenger96
            text: |-
                The STM32MP157 is a highly integrated multi-market system-on-chip designed to enable secure and space constraint applications within the Internet of Things. Avenger96 board features dual Arm Cortex-A7 cores and an Arm Cortex-M4 core. In addition, an extensive set of interfaces and connectivity peripherals are included to interface to cameras, touch-screen displays an MMC/SD cards. It also fully supports wireless communication, including WLAN and BLE.
            buttons:
              - title: More Info
                url: /product/avenger96/
                class: btn-primary
    - row: container_row
      style: bg-gray
      sections:
        - format: feature_block
          feature_block_content:
            position: right
            type: image
            image_content_path: /assets/images/content/stinger96-iot-box.png
            title: The IoT Box
            text: |-
                The IoT Box is a general purpose IoT gateway for connecting your sensors and actuators to the cloud. The commercial _edge_ device
                is based on a combination of a Stinger96 baseboard + proprietary mezzanine.

                Key features:

                - LTE NB-IOT, WiFi and BT connectivity
                - External sensors connectors
                - Running Linux (Yocto)
                - Battery powered
            buttons:
              - title: More Info
                url: https://www.shiratech-solutions.com/products/iot-box/
                class: btn-primary
                icon: fa fa-external
    - row: container_row
      sections:
        - format: title
          title_content:
            size: h2
            text: Submit your project!
        - format: custom_include
          source: board_giveaway.html
---
