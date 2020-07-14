---
title: Blog
permalink: /blog/
description: >
    96Boards is a range of hardware specifications created by Linaro to make the latest ARM-based processors available to developers at a reasonable cost.
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: blog/post_search.html
          payload:
              name: url
              data: /assets/json/posts.json
              category: Blog
          # category: News
        - format: custom_include
          source: blog/display_latest_posts.html
          category: Blog
---
