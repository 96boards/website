---
title: 96Boards - Develop & Prototype on the Latest Arm Technology
description: >-
  Products built with the latest silicon, based on open platform specifications for developers, makers and businesses
slug: ""
keywords: Arm, Silicon, AI, Developer Boards, Developers, Makers, SoC, Consumer, IoT, Enterprise
layout: ../../layouts/Flow.astro
js-package: home
css_bundle: home
hero:
  style: text-center
  title: Develop & Prototype on the Latest Arm Technology
  title_style: text-yellowtitle
  description: >
    Products built with the latest silicon, based on open platform specifications for developers, makers and businesses
  background_image: ../../assets/images/content/96boards-home-image-2.jpg
flow:
  - row: container_row
    sections:
      - component: text
        style: text-center text-2xl md:text-3xl
        text_content:
          text: |
            Each board has its own **unique features**, you can **pick and choose**
            one based on the project you are working on.
      # - component: custom_include
      #   source: products/featured_products.html
      - component: buttons
        style: text-center
        buttons_content:
          - title: Explore Boards
            url: /products/
            style: btn-primary
  - row: container_row
    sections:
      - component: title
        style: text-center
        title_content:
          size: h2
          text: The Specifications
      # - component: custom_include
      #   source: specifications.html
      - component: block
        container_style: text-center contain_images d-none d-sm-block specifications
        item_width: "6"
        blocks:
          - title: Consumer Edition
            url: /products/ce/
            image: ../../assets/images/content/96Boards-Logo_v-Consumer-200x200.png
            background_image: false
            description: The 96boards Consumer Edition(CE) specification targets the mobile, embedded and digital home segments.
            buttons:
              - title: Explore Boards
                url: /products/ce/
                style: btn-primary
              - title: View Specification
                url: https://linaro.co/ce-specification
                style: btn-secondary
          - title: Enterprise Edition
            url: /products/ee/
            image: ../../assets/images/content/96Boards-Logo_v-Enterprise-200x200.png
            background_image: false
            description: The 96Boards Enterprise Edition (EE) specification targets the networking and server segments
            buttons:
              - title: Explore Boards
                url: /products/ee/
                style: btn-primary
              - title: View Specification
                url: https://linaro.co/ee-specification
                style: btn-secondary
          - title: IoT Edition
            url: /products/ie/
            image: ../../assets/images/content/96Boards-Logo_v-IoT-200x200.png
            background_image: false
            description: The 96Boards IoT Edition (IE) platform is designed to support development in the Internet of Things (IoT) space.
            buttons:
              - title: Explore Boards
                url: /products/ie/
                style: btn-primary
              - title: View Specification
                url: https://linaro.co/ie-specification
                style: btn-secondary
          - title: Mezzanine Edition
            url: /products/mezzanine/
            image: ../../assets/images/content/96Boards-Logo_v-Partner-200x200.png
            background_image: false
            description: Explore a wide variety of Partner 96Boards mezzanines, accessories and more to expand on your development experience.
            buttons:
              - title: Explore Boards
                url: /products/mezzanine/
                style: btn-primary
              - title: View Guidelines
                url: https://github.com/96boards/documentation/raw/master/mezzanine/files/mezzanine-design-guidelines.pdf
                style: btn-secondary
          - title: SoM Edition
            url: /products/som/
            image: ../../assets/images/content/96Boards-Logo_v-Partner-200x200.png
            background_image: false
            description: The SoM Edition (SoM) (Wireless and Compute) encourages the development of reliable and cost-effective embedded platforms for building end-products.
            buttons:
              - title: Compute
                url: https://linaro.co/som-spec
                style: btn-primary
              - title: Wireless
                url: https://linaro.co/som-w-spec
                style: btn-secondary
  # - row: custom_include_row
  #   source: latest-blogs.html
  # - row: custom_include_row
  #   source: projects.html
---
