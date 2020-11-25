---
title: Mezzanine Products
permalink: "/products/mezzanine/"
css_bundle: products
sticky_tab_bar: true
js-package: products
description: |-
    96Boards mezzanine products let you expand your Consumer Edition or Enterprise
    Edition 96Boards with new interfaces for IoT, industrial control, and other
    embedded applications. See the mezzanine guidelines for some helpful resources.
specification-logo: 96Boards-Logo_Partner-small.png
jumbotron:
    inner-image: /assets/images/content/96Boards-Logo_horizontal-white.svg
    title: ""
    class: background-color mezzanine text-center products_jumbotron text-white
    buttons:
        - title: View the Guidelines
          url: https://github.com/96boards/documentation/raw/master/mezzanine/files/mezzanine-design-guidelines.pdf
          class: btn btn-primary
          icon: icon-link-ext-alt
---
{% include product-filters.html hide_spec="true" %}
{% include compare-boards-modal.html %}
{% include display-products.html specification="mezzanine" %}
