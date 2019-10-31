---
layout: flow
title: Projects with 96Boards
permalink: "/projects/"
description: |-
    The 96Boards projects that have been announced are shown below.
    Click on the links to find out more about the projects.
css-package: projects
js-package: projects
jumbotron:
    darken: true
    carousel-images:
        - /assets/images/content/96boards-banner-project-2.jpg
        - /assets/images/content/96boards-banner-project-1.jpg
flow:
    - row: custom_include_row
      source: sticky-tab-bar.html
    - row: container_row
      sections:
        - format: text
          content: >
            This projects listed on this page are from the [96Boards Projects Github](https://github.com/96boards-projects) where you can submit a project to be listed on here by creating a pull request. Project submissions are always welcome. For instructions on how to submit your 96Boards projects and/or contribute to already existing projects, please [click here](/projects/submit/).
    - row: custom_include_row
      source: display_projects.html
---
