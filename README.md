# 96Boards.org

The 96Boards website is built using the Jekyll static site generator. It is based off the jumbo-jekyll-theme used for all of the Linaro static sites. With the move from Wordpress to Static we have introduced GitHub/Community driven content that allows 96Boards.org users to submit issues about any of the pages on 96Boards.org through the associated Git respository. This GitHub repository is combined with the 96Boards Documentation repo to build the site. Documentation is copied to the `_documentation` collection upon site builds with [bamboo.linaro.org](https://bamboo.linaro.org). 

![Build Status](https://bamboo.linaro.org/plugins/servlet/wittified/build-status/BOARDS-BUILDDEV0) 

******
## [How to add a blog post!](#adding-a-blog-post)
******
## Contents

Below are a few guides that will help when adding content to the 96Boards website.

- [Generic Website Guides](#generic-website-guides)
    - [Adding a Page](#adding-a-blog-post)
    - [Adding a Blog Post](#adding-a-blog-post)
    - [Adding Redirects to the Static Site](#adding-redirects-to-the-static-site)
    - [Building the Static Site](#building-the-static-site)
- [96Boards.org Specific Guides](#96boards.org-specific-guides)
    - [Adding Products](#adding-products)
    - [Adding Projects](#adding-projects)
    - [Adding 96Boards News](#adding-96boards-news)
    - [Adding Documentation](#adding-documentation)

******

# Contributions
We happy to consider any contributions/feature requests that you may have. Please submit a PR with your changes and we will take a look. You can also use the `Github Edit` buttons available on all the website pages to help locate the file you wish to edit/raise and issue about.

*****
# Generic Website Guides

- [Adding a Page](#adding-a-blog-post)
- [Adding a Blog Post](#adding-a-blog-post)
- [Adding Redirects to the Static Site](#adding-redirects-to-the-static-site)
- [Building the Static Site](#building-the-static-site)

## Addding a Page

Please view the theme documentation on adding pages [here](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPages).

## Adding a Blog Post

Please view the theme documentation on adding blog posts [here](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPosts).

## Adding Redirects to the Static Site

Please view the theme documentation on adding redirects [here](https://github.com/linaro-marketing/jumbo-jekyll-theme#adding-redirects).

## Building the Static Site

Please view the theme documentation on building the static website [here](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/Building).

# 96Boards.org Specific Guides

- [Adding External 96Boards News](#adding-96boards-news)
- [Adding Products](#adding-products)
- [Adding Projects](#adding-projects)
- [Adding Documentation](#adding-documentation)

## Adding products

### Step 1 - Duplicate similiar product folder

In order to add a product copy one of the products currently in the [_product folder](https://github.com/96boards/website/tree/master/_product). Products are organsied in the _product folder into the 96Boards specifcations that are avaialble ([ce](https://github.com/96boards/website/tree/master/_product/ce), [ee](https://github.com/96boards/website/tree/master/_product/ee), [ie](https://github.com/96boards/website/tree/master/_product/ie), and [mezzaanine](https://github.com/96boards/website/tree/master/_product/mezzanine)). Please duplicate a product folder from one of these specification sub folders and modify accordingly. 

### Step 2 - Modify the front matter

We use the Jekyll front matter (YAML) values to help render your product on our Jekyll site. Please look at the other products README.md's for reference on how to structure the front matter (YAML).

Below we will step through each front matter(yaml) setting and explain what each value is used for when building the static pages.

```yaml
---
# Your Product title - this is the definitive product title.
title: Sophon Edge
# The layout to be used - below is the layout that you should use unless
# you have been directed otherwise by one of the 96Boards team.
layout: product-display-page
# This is the url that your product will be available at. 
# You should stick to the format /product/product-title
# Please use dashes between words to keep the format consistent.
permalink: /product/sophon-edge/
# The description of your product is used for the web pages description meta tag
# and on page content where a description of your product is need. To maximise the
# effectiveness of your description please choose a powerful starting sentence.
description: |-
    The Bitmain Sophon™ Edge Developer Board is designed for bringing powerful Deep Learning capability to various types of applications through its quick prototype development. Sophon Edge Developer Board is powered by a BM1880, equipping tailored TPU support DNN/CNN/RNN/LSTM operations and models. This board is compatible with Linaro 96boards while also supporting modules for Arduino and Raspberry Pi. Developers can leverage off-the-shelf modules and develop cutting edge DL/ML applications, like facial detection and recognition, facial expression analysis, object detection and recognition, vehicle license plate recognition, voiceprint recognition, and more!
# Keywords -  these are used for meta keywords and can be used when finding boards with a
# particular feature
keywords: |-
    processing, power, Wi-Fi, Bluetooth connectivity, GPS, development, board, mid-tier, xilinx, fpga, processor, low cost, Product, Development, Platform, bitmain, sophon, edge, bm1880
# Product Short Description -  this is used on the product index page to provide a brief
# overview of your product.
product_short_desc: "Bitmain Sophon™ Edge Developer Board is powered by the BM1880"
# Product Specification - This is the 96Boards specification of your product and is used 
# by Jekyll when collectin products of a certain specification. 
# Please use either ee, ce, mezzanine or iot
product_specification: ce
# Display Product - this a boolean value that is used to determine if your product should be displayed.
display_product: true
# Product Images - These are the images of your board. The first image is the image that is featured on index pages/homepage.
product_images:
    - sophon-front-sd.png
    - sophon-back-sd.png
# Product Tab Menu - this is where you configure the tabs of the product tab bar.
product_tab_menu:
    - tab_title: Getting Started
      tab_link: /documentation/consumer/sophon-edge/getting-started/
      tab_position: 1
    - tab_title: Documentation
      tab_link: /documentation/consumer/sophon-edge/
      tab_position: 2
      tab_position: 3
    - tab_title: Support
      tab_link: https://discuss.96boards.org/c/products/sophon-edge/
      tab_position: 4
      tab_align_right: true
# Product buy links - these links let you customise the buy links available for your product.
product_buy_links:
  -
    # Title of your buy link
    link-title: Sophon Edge (US)
    # URL of your buy link
    link-url: https://sophon.ai/product/view/00020181017110652CiJsd2n6aOcHr4a/view.html
    # The short version of the site which the users are purchasing your board from. E.g Buy from Sophon.ai
    from: Sophon.ai
    # The type of your product e.g board, mezzanine, adapter etc
    type: board
    # The price of your board
    link-price: "$129.99"
    # The official currency short code prepended to the product price.
    link-price-currency: USD
  -
    link-title: Sophon Edge (CN)
    link-url: https://sophon.cn/product/view/00020181017110652CiJsd2n6aOcHr4a/view.html
    from: Sophon.ai
    type: board
    link-price: "&#xa5;899.00"
    link-price-currency: CNY
# Product OS - This setting is used in the product-display-page layout to specify what operating systems are available for your board.
product_os:
  - title: Linux
    link: /documentation/consumer/sophon-edge/downloads/
# Third part images - This setting is used in the product-display-page to show what third party images there are available for your board. If you have no third party images then please omit.
product_third_party_images:
  - title: Coming Soon...
    link:
# Product more info - This setting is used in the product-display-page to link to any other sources for more information about this board e.g vendor site, vendor documentation.
product_more_info:
  - title: Sophon
    link: https://sophon.ai/
# Product accessories - shows the accessories that are available.
product_accessories:
  - title: Power
    link: /product/power/
  - title: Adapter
    link: /product/adapter/
  - title: Debug
    link: /product/debug/
  - title: Misc
    link: /product/misc/
# Product accessories - shows the mezzanine boards that can be used with your board.
product_mezzanine:
  - title: Link Sprite Sensor Kit
    link: /product/linkspritesensorkit/
  - title: UART Serial
    link: /product/uartserial/
  - title: Sensors Mezzanine
    link: /product/sensors-mezzanine
# Product kits - This allows you to add links to any kits that are available for your board.
product_kits:
  - title: Coming Soon...
product: true
---
```

### Step 3 - Add product images

Please add product images to the images/ sub folder inside the folder for your board. Make sure to `optimize` these images as best as possible to reduce the overhead on users when loading your product page. The first image that you add to the front matter will be the one that is used on the homepage/product index pages. Therefore you should ensure that this image is optimized whilst also being a relatively high resolution so that your product is displayed correctly.

Below you can see example of the product_images front matter value that you need to change to match your product images that you add to the images subfolder.

```yaml
---
...
product_images:
    - sophon-front-sd.png
    - sophon-back-sd.png
...
---

```

__Please note:__ Due to the way product images are included, images **should not include spaces** in the filename otherwise they may not be rendered on the website as expected.

*****
## Adding Projects

[96Boards.org/projects](https://www.96boards.org/projects/) are maintained in the [96boards-projects GitHub organisation](https://github.com/96boards-projects). Clone the [template repo](https://github.com/96boards-projects/template). Submit a pull request with your changes. If it is approved, we'll get the git diff and create a new project repo for your project so that it is automatically added to the website.

## Adding Documentation

The 96Boards.org documentation is maintained in this [repo](https://github.com/96boards/documentation) so if you'd like to modify the documentation for a specific board then please head over to that repo and submit a pull request there.

## Adding 96Boards News

### External News
To add external news to 96boards.org that will show under [/news/](https://www.96boards.org/news/) simply add an entry to the [news.yml](https://github.com/96boards/website/blob/master/_data/news.yaml) file. Below is an example entry:

```
# Add a link to the external news article.
- link: https://www.cnx-software.com/2018/04/16/hikey-970-development-board-now-up-for-pre-order-for-299-99/
  # Add the title of your news post.
  title: CNX Software
  # Tag news with a board's permalink for it to show on that boards page.
  board: /product/hikey970/
  # Make sure to add the correct date.
  date: 2019-03-05 09:00:00+00:00
  tags: hikey970, ce
```

If you add a `board` with a valid product permalink url then your news will display on the product page as featured news (only the top 10 results will show - newest first).


### Internal News

If you'd like to add internal 96Boards news then add a News/Blog to 96Boards.org and tag with `96Boards`. The top 10 most recent posts on Linaro.org that feature 96Boards will then display on /news/.

*****


## Issues 
If you come across any bugs/issues then please let us know by clicking the Submit an Issue button located at the bottom of every 96Boards.org web page. Alternatively you may open an issue [here](https://github.com/96boards/website/issues/new) but please provide precise details on how to reproduce the bug/issue so that we can act on the issue as soon as possible.

### Known Issues
#### Image file names
Due to the way product images are included, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.

