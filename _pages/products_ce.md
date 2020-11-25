---
title: Consumer Edition (CE)
css_bundle: products
js-package: products
sticky_tab_bar: true
permalink: "/products/ce/"
description: |-
    The 96Boards Consumer Edition (CE) specification targets the _mobile_, _embedded_ and _digital home_ segments.
    The boards below are all certified to be compliant with this specification.
specification_path: /documentation/Specifications/96Boards-CE-Specification.pdf
specification_link: https://linaro.co/ce-specification
specification_image: 96Boards-Logo_Consumer-small.png
jumbotron:
    inner-image: /assets/images/content/96Consumer.svg
    class: background-color ce text-center products_jumbotron text-white
    title: ""
    description: >
        The 96Boards Consumer Edition (CE) specification targets the mobile, embedded and digital home segments.
        The boards below are all certified to be compliant with this specification.
    buttons:
        - title: View the Specification
          url: https://linaro.co/ce-specification
          class: btn btn-primary
          icon: icon-link-ext-alt
---
{% include product-filters.html hide_spec="true" %}
{% include compare-boards-modal.html %}
{% include display-products.html specification="ce" %}
