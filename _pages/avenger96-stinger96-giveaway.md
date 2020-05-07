---
title: Avenger96/Stinger96 Giveaway
permalink: /avenger96-stinger96-giveaway/
image: /assets/images/content/96boards_giveaway_social_image.png
js-package: giveaway
css-package: giveaway
description: >
    96Boards have teamed up with Arrow, ST and Shiratech to give you the chance to get a free Avenger96 or Stinger96. This is an online campaign dedicated to Arrow's 96Boards products, main and mezzanine, around STM's MP1 96Boards.
layout: flow
jumbotron:
    title: Avenger96 / Stinger96 Giveaway
    description: >
        96Boards have teamed up with Arrow, ST and Shiratech to give you the chance to get a free Avenger96 or Stinger96. This is an online campaign dedicated to Arrow's 96Boards products, main and mezzanine, around STM's MP1 96Boards.
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
                url: https://www.arrow.com/
              - name: ST
                image:
                    path: /assets/images/members/ST_2020.svg
                    alt: ST Logo
                url: https://www.st.com/content/st_com/en.html
              - name: Shiratech
                image:
                    path: https://static.linaro.org/common/member-logos/shiratech.jpg
                    alt: Shiratech Logo
                url: https://www.shiratech-solutions.com/
              - name: 96Boards Logo
                image:
                    path: /assets/images/content/96Boards-Logo-black.svg
                    alt: 96Boards Logo
                url: /
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
            image_content_path: /assets/images/content/stinger96-front.jpg
            title: Stinger96
            text: |-
                Shiratech's NEW 96Boards IoT solution based on ST STM32MP157 MCU + QUECTEL BG96 NB-IOT modem.

                The Board is 96Boards IoT Edition Extended Compatible (IE extended).
                Full support for 96Boards IoT Edition (IE) Low Speed expansion connector.


                Key features:

                - 32-bit dual-core Arm® Cortex®-A7
                - External DDR memory – DDR3 – 256M X 32Bit
                - Full 96 IOT LS connector Interface (1.8V interface)
            buttons:
              - title: More Info
                url: https://www.shiratech-solutions.com/products/stinger96/
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
