---
title: SoM Edition - Modules (SE-M)
css_bundle: products
js-package: products
sticky_tab_bar: true
permalink: "/products/se/modules/"
description: |-
    The SoM Edition (SoM) (Wireless and Compute) is a 96Boards specification which encourages the development of reliable
    and cost-effective embedded platforms for building end-product's.
specification_path: /documentation/Specifications/96Boards-CE-Specification.pdf
specification_link: https://linaro.co/ce-specification
specification_image: 96Boards-Logo_Consumer-small.png
jumbotron:
    inner-image: /assets/images/content/96Boards-Logo_v-96 SoM.svg
    title: "Modules"
    class: background-color som text-center products_jumbotron text-white
    buttons:
        - title: SoM Wireless Specification
          url: https://linaro.co/som-w-spec
          class: btn btn-primary
          icon: icon-link-ext-alt
        - title: SoM Compute Specification
          url: https://linaro.co/som-spec
          class: btn btn-primary
          icon: icon-link-ext-alt
---
{% include product-filters.html hide_spec="true" %}
{% include compare-boards-modal.html %}
{% include display-products.html specification="se" subSpecification="module" %}
