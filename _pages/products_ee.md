---
title: Enterprise Edition (EE)
css_bundle: products
js-package: products
sticky_tab_bar: true
permalink: "/products/ee/"
description: |-
    The 96Boards Enterprise Edition (EE) specification targets the networking and server segments.
specification_path: /documentation/Specifications/96Boards-EE-Specification.pdf
specification_link: https://linaro.co/ee-specification
specification_image: 96Boards-Logo_Enterprise-small.png
jumbotron:
    inner-image: /assets/images/content/96Enterprise.svg
    class: background-color ee text-center products_jumbotron text-white
    description: >
        The 96Boards Enterprise Edition (EE) specification targets the networking and server segments.
    buttons:
        - title: View the Specification
          url: https://linaro.co/ee-specification
          class: btn btn-primary
          icon: icon-link-ext-alt
---
{% include product-filters.html hide_spec="true" %}
{% include compare-boards-modal.html %}
{% include display-products.html specification="ee" %}
