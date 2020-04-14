---
title: IoT Box Giveaway
permalink: /iot-box-giveaway/
description: >
    We are giving away 500 IoT Boxes! Tell us why you want one and what you will create with it for a chance to receive a free IoT Box!
layout: flow
jumbotron:
    title: IoT Box Giveaway
    description: >
        We are giving away 500 IoT Boxes! Tell us why you want one and what you will create with it for a chance to receive a free IoT Box!
    buttons:
        - title: View Spec
          class: btn btn-primary
          url: /assets/pdf/IoTBoX_BasedOn_STM32MP1.pdf
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
    - row: container_row
      sections:
        - format: feature_block
          feature_block_content:
            position: right
            type: image
            image_content_path: /assets/images/content/stinger96-iot-box.png
            title: What is the IoT Box?
            text: |-
                The IoT Box is a general purpose IoT gateway for connecting your sensors and actuators to the cloud. The commercial _edge_ device
                is based on a combination of a Stinger96 baseboard + proprietary mezzanine.

                Key features:

                - LTE NB-IOT, WiFi and BT connectivity
                - External sensors connectors
                - Running Linux (Yocto)
                - Battery powered
        - format: feature_block
          feature_block_content:
            position: left
            type: image
            image_content_path: /assets/images/content/stinger96-board-iot-box.png
            title: The Stinger96
            text: |-
                The Stinger96 96Boards, IoT Edition, baseboard features the STM32MP157 (Cortex-A7 + Cortex-M4) and runs Linux (Yocto, Debian).

                Key features:

                - Quectel BG96 (NB-IOT, GNSS)
                - 96Boards LS expansion connector
                - 2 x micro USB connectors (USB, monitor), micro SD, micro SIM

        - format: title
          title_content:
            size: h2
            text: Tell us why you want an IoT Box
        - format: custom_include
          source: stinger96_giveaway.html
---
