---
layout: ../../layouts/Flow.astro
slug: ""
title: Linaro Astro Template
description: >
  This is the Astro template for building static Linaro websites.
hero:
  title: Homepage Hero Text
  background_image: "../../assets/images/hero.jpg"
  inner_image:
    src: "../../assets/images/linaro-logo-white.svg"
    alt: Linaro logo
  style: text-center uppercase
flow:
  - row: container_row
    style:
    sections:
      - component: title
        style: text-center
        title_content:
          style: font-bold
          size: h2
          text: Welcome to linaro-astro-template
      - component: text
        style: text-center
        text_content:
          text: |-
            This is the Astro template for building static Linaro websites.
---
