---
title: About
description: |-
    96Boards is a range of hardware specifications created by Linaro to make the latest ARM-based processors available to developers at a reasonable cost.
permalink: "/about/"
status: active
layout: flow
js-package: about
css-package: about
jumbotron:
    animation: fade
    description: ""
    background-image: /assets/images/content/96boards-banner-1.jpg
flow:
    - type: content_row
      items: 
        - format: text
          content: >

            96Boards is a range of hardware specifications created by Linaro to make the latest ARM-based processors available to developers at a reasonable cost. The specifications are open and define a standard board layout for SoC-agnostic (processor independent) development platforms that can be used by software application, hardware device, kernel and other system software developers. Boards produced to the 96Boards specifications are suitable for rapid prototyping, hobbyist projects or incorporation into new systems for a wide range of applications including desktop and laptop computing, the digital home, digital signage, point of sale (POS), high-end audio, robotics and drones, artificial intelligence, virtual reality, IoT and industrial control.

            Standardized expansion buses for peripheral I/O have led to a wide range of compatible add-on mezzanine boards that will work across a variety of 96Boards products. Users have access to a wide range of boards with different features at various price points. In addition, some SoC vendors have announced long term availability of the SoC to encourage their use in products with long life cycles.
        - format: members
          style: zoom 
          item_width: 5ths
          content: 
              - name: SoM Edition Logo
                image:
                    path: /assets/images/content/96Boards-Logo-96 SoM.svg
                    alt: SoM Edition Logo
              - name: Consumer Edition Logo
                image:
                    path: /assets/images/content/96Consumer.svg
                    alt: Consumer Edition Logo
              - name: Enterprise Edition Logo\
                image:
                    path: /assets/images/content/96Enterprise.svg
                    alt: Enterprise Edition Logo
              - name: IoT Edition Logo
                image:
                    path: /assets/images/content/96IoT.svg
                    alt: IoT Edition Logo
              - name: Mezzanine Edition Logo
                image:
                    path: /assets/images/content/96Partner.svg
                    alt: Mezzanine Edition Logo
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/products/carbon-front-hd.jpg
            title: Small
            text: page_content
            text: >
                The 96Boards Specifications manages to pack an unexpected amount of components and features onto a small form-factor. This small size offers developers and makers a wide range of prototyping options when bringing a project or product to life.
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: left
                type: image
                content: /assets/images/products/hikey960-hd.png
            title: Powerful
            text: page_content
            text: >
                Industry wide, the 96Boards standard has attracted many leading chip makers and board manufacturers. Most SoCs which are made available for development on 96Boards are also found in currently shipping mainstream products. You will always find new and exciting features on every 96Boards.
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/products/avenger96-front-sd.png
            title: Reliable
            text: page_content
            text: >
                Most 96Boards are released with a production plan in mind. The chips used on 96Boards are an ideal option for product development. Most chip makers who choose 96Boards will guarantee the availability of their chips over the long term. This allows for interruption-free development of a project and/or product. The availability of your 96Boards SoC (and/or SoM equivalent) will allow you to, much more easily, bring your product to market. End users can develop and test prototypes on a 96Boards device, then purchase the SoC in large quantities to use in a final product.
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: left
                type: image
                content: /assets/images/products/oxalis-front-sd.jpg
            title: Versatile
            text: page_content
            text: >
                The family of specifications allows one to choose from a wide range of functionality in a variety of form-factors, catering to different market segments and price points. The availability of compatible add-ons through the mezzanine ecosystem allows product designers to enhance the functionality of the board to cater to their specific application.
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/products/SoM-Carrier-Board-with-Module-min.jpg
            title: Interchangeable
            text: page_content
            text: >
                The 96Boards specification requires exposure of the various I/O interfaces on the SoCs through standard expansion connectors (High and Low speed). This allows any product designed on one board to be fairly portable to other boards in the same family.
    - type: content_row
      items: 
        - format: title
          size: h2
          content: Benefits of the 96Boards ecosystem
    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: left
                type: slider
                content:
                    lightbox_enabled: true
                    xs_items: 1
                    sm_items: 1
                    md_items: 1
                    lg_items: 1
                    seconds_per_slide: 5
                    items:
                        - image: /assets/images/content/vendor-image-1.jpg
                          alt: Vendor Image
                          title: Vendor Image 1
                        - image: /assets/images/content/vendor-image-2.jpg
                          alt: Vendor Image
                          title: Vendor Image 1
            buttons:
              - title: Specifications
                url: /specifications/
                class: btn-primary
              - title: Membership
                url: /membership/
                class: btn-primary
            title: Vendors
            text: page_content
            text: >

                **As a Vendor** you are able to join a growing 96Boards ecosystem while minimizing your engineering efforts to design a new board. This market comes with an established community of end users who are interested in low-cost prototyping platforms for their next product idea or just to tinker with.

                The 96Boards specification allows enough flexibility to expose differentiating features of a SoC outside of the mandatory feature set. The board can be an enabler for new design wins and custom board design consultancy eventually leading to volume orders for the SoC.

    - type: content_row
      items:
        - format: feature_block
          content:
            side_content:
                position: right
                type: slider
                content:
                    lightbox_enabled: true
                    xs_items: 1
                    sm_items: 1
                    md_items: 1 
                    lg_items: 1
                    seconds_per_slide: 5
                    items:
                        - image: /assets/images/content/bkk19-demo-friday.jpg
                          alt: Background Image
                          title: Background Image 1
                        - image: /assets/images/content/consumer-image-1.jpg
                          alt: End User Slider Image
                          title: End User Slider Image 1
                        - image: /assets/images/content/consumer-image-2.jpg
                          alt: End User 96Boards Slider Image
                          title: End User 96Boards Slider Image 1
            buttons:
                - title: Browse 96Boards
                  url: /products/
                  class: btn-primary
            title: End users
            text: page_content
            text: >
                **As an End User** you are able to pick and choose from a variety of boards featuring different SoCs in a range of form factors and a common set of core features. The family of 96Boards specifications allows you to pick the form-factor that best suits your usecase and price point. To protect your investment while developing products on 96Boards, it is important to know, many of our SoC vendors intend to make their parts available for the long-term.

                A vibrant and growing 96Boards community can also be leveraged when getting up to speed on current software and core functionality for all our boards.
    - type: custom_include_row
      source: members.html
---