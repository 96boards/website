---
title: Blog
permalink: /blog/
description: >
    96Boards is a range of hardware specifications created by Linaro to make the latest ARM-based processors available to developers at a reasonable cost.
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: blog/post_search_fess.html
          payload:
            name: url
            search_label: 96Boards
            category: blog
          # category: News
        - format: custom_include
          source: blog/display_latest_posts.html
          category: blog
          limit: 22
---
