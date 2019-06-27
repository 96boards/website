---
title: Specifications
description: |-
    The 96Boards initiative is designed to offer a single software and hardware community across multiple vendor boards supporting a range of different features.
permalink: /specifications/
status: active
layout: flow
css-package: about
jumbotron:
    animation: fade
    background-image: /assets/images/content/96boards-banner-6.jpg
flow:
    - row: custom_include_row
      source: sticky-tab-bar.html
    - row: container_row
      sections:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/content/96Consumer.svg
            title: Consumer Edition
            text: page_content
            text: >
                The 96Boards Consumer Edition (CE) Platform is intended to support Low cost Single Board Computer use, Open Source community software development, Maker community, Embedded System OEMs requiring low cost off-the-shelf CPU modules and Community engineering activities.
            buttons: 
                - title: View Specification
                  url: https://linaro.co/ce-specification
                  class: btn-primary
                  icon: fa fa-book
                - title: Browse 96Boards
                  url: /products/ce/
                  class: btn-primary
                  icon: fa fa-microchip
    - row: container_row
      sections:
        - format: feature_block
          content:
            side_content:
                position: left
                type: image
                content: /assets/images/content/96Enterprise.svg
            title: Enterprise Edition
            text: page_content
            text: >
                The Enterprise Edition (EE) targets the networking and server segments.
            buttons: 
                - title: View Specification
                  url: https://linaro.co/ee-specification
                  class: btn-primary
                  icon: fa fa-book
                - title: Browse 96Boards
                  url: /products/ee/
                  class: btn-primary
                  icon: fa fa-microchip
    - row: container_row
      sections:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/content/96IoT.svg
            title: IoT Edition
            text: page_content
            text: >
                The Enterprise Edition (EE) targets the networking and server segments.
            buttons: 
                - title: View Specification
                  url: https://linaro.co/ie-specification
                  class: btn-primary
                  icon: fa fa-book
                - title: Browse 96Boards
                  url: /products/ie/
                  class: btn-primary
                  icon: fa fa-microchip
    - row: container_row
      sections:
        - format: feature_block
          content:
            side_content:
                position: left
                type: image
                content: /assets/images/content/96Partner.svg
            title: Mezzanine Guideline
            text: page_content
            text: >
                The 96Boards mezzanine guideline allows you to expand your **Consumer Edition** or **Enterprise Edition** 96Boards with new interfaces for IoT, industrial control, and other embedded applications. See the mezzanine guidelines for some helpful resources.
            buttons: 
                - title: See Guidelines
                  url: https://github.com/96boards/documentation/raw/master/mezzanine/files/mezzanine-design-guidelines.pdf
                  class: btn-primary
                  icon: fa fa-book
                - title: Browse 96Boards
                  url: /products/mezzanine/
                  class: btn-primary
                  icon: fa fa-microchip
    - row: container_row
      sections:
        - format: feature_block
          content:
            side_content:
                position: right
                type: image
                content: /assets/images/content/96Boards-Logo-96 SoM.svg
            title: SoM Edition
            text: page_content
            text: >
                The SoM Edition (SoM) (Wireless and Compute) is a 96Boards specification which encourages the development of reliable and cost-effective embedded platforms for building end-products.
            buttons: 
                - title: Wireless Specification
                  url: https://linaro.co/som-w-spec
                  class: btn-primary
                  icon: fa fa-book
                - title: Compute Specification
                  url: https://linaro.co/som-spec
                  class: btn-primary
                  icon: fa fa-book
                - title: Browse 96Boards
                  url: /products/se/
                  class: btn-primary
                  icon: fa fa-microchip
    - row: custom_include_row
      source: members.html
---
<div class="row" id="content-container">
{% include sticky-tab-bar.html %}
<div class="container" markdown="1">
The 96Boards initiative is designed to offer a single software and hardware community across multiple vendor boards supporting a range of different features. A fixed set of minimum functions including USB, SD, HDMI and standardized low speed and high speed peripheral connectors are provided. Vendors may add customized hardware and feature sets provided the minimum functions are available. We expect this to extend the platform life, increase the market for add-on hardware, and accelerate open source upstreaming of support for new SoC features.

There are currently four 96Boards specifications:

* The [Consumer Edition (CE)](https://linaro.co/ce-specification) targets the mobile, embedded and digital home segments.
* The [Enterprise Edition (EE)](https://linaro.co/ee-specification) targets the networking and server segments.
* The [IoT Edition (IE)](https://linaro.co/ie-specification) targets the Internet of Things (IoT) and Embedded segments.
* The SoM Edition (SoM) ([Wireless](https://linaro.co/som-w-spec) and [Compute](https://linaro.co/som-spec)) is a 96Boards specification which encourages the development of reliable and cost-effective embedded platforms for building end-product's.

These specifications are intended to foster the delivery of multiple Arm hardware platforms targeted at software developers, the maker community, higher education, and embedded OEMs. To comment on the specifications, please visit the [Specification forum](https://discuss.96boards.org/c/specification/). If you wish to be involved in defining future versions of the specifications please contact [96Boards@Linaro.org](mailto:96Boards@Linaro.org) for information about joining the Linaro 96Boards Group.

To encourage the development of a broad range of compatible products, the above specifications may be extended with the introduction of addenda for particular applications. You can access the addenda documents on [GitHub](https://github.com/96boards/documentation/tree/master/Specifications/Addenda):

* [The Consumer Edition (CE) Camera Module Interface Addendum](https://linaro.co/camera-spec)
* [96Boards TV Platform](https://linaro.co/tv-specification): This specification describes requirements and recommendations for 96Boards Compliant hardware to be used for Digital Home applications including Digital TV and Set Top Boxes.
</div>
</div>

{% include members.html %}
