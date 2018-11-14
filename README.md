# 96Boards.org

The 96Boards website is built using the Jekyll static site generator. It is based off of the jumbo-jekyll-theme used for all of the Linaro static sites. With the move from Wordpress to Static we have introduced GitHub/Community driven content that allows 96Boards.org users to submit issues about any of the pages on 96Boards.org through the associated Git respository.

*****

## [How to add a blog post!](#adding-a-blog-post)

*****

## Contributions
We happy to consider any contributions/feature requests that you may submit so please submit a PR with your changes and we will take a look.

*****

## Guides

Below are a few guides that will help when adding content to the 96Boards website.

- [Adding a blog post](#adding-a-blog-post)
- [Adding products](#adding-products)
- [Adding Redirects to the Static site](#adding-redirects-to-the-static-site)
- [Building the static site](#building-the-static-site)

*****
## Addding a new page

### Step 1 - Choose url and layout

Static Jekyll web pages are placed in folders in the root of the website with either a `README.md` or a `index.html` page beneath them. Example - /services/README.md or /services/index.html. This keeps the pages organised to some extent. If your page contains mostly HTML then use a `index.html` file so that IDE's recognize it has HTML and `README.md` if the page is mostly markdown.

The url for your page should be added to the front matter of your posts (section at the top of the file between --- containing yaml) as the `permalink`. This will ensure the url of your page is exactly as you intended it to be. See below for an example of the front matter to add to the web page. If in any doubt please duplicate a page that you would like yours to look like and modify the file from there.

```YAML
---
# Layout of your web page - see below for available layouts.
layout: container-breadcrumb-tabs
# URL of your web page
permalink: /services/
# Title of your web page
title: Services Page
# Description of your web page.
desc: |-
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
# Keywords that describe your page used as meta keywords.
keywords: lorem, ipsum, web, page
---
```

#### Available layouts

Below are a table showing the available layouts for you to use:

| Layout | Description | Image | 
| ------ | ----------- | ----- |
| container-breadcrumb | This layout contains the standard breadcrumb and centered content container for you to use. | ![container-breadcrumb layout](/assets/images/help/container-breadcrumb.png) |
| container-breadcrumb-tabs | Same as the above layout but includes the HTML for the sticky tab bar. | ![container-breadcrumb-tabs layout](/assets/images/help/container-breadcrumb-tabs.png) |
| product-display-page | This is the layout used by product pages on the 96Boards website. | ![product-display-page layout](/assets/images/help/product-display-page.png) |
| post | This the layout used for blog posts. If you supply a featured image a header with the featured image will be added. This image is also used when sharing on social media sites. | ![default layout](/assets/images/help/post.png) |
| default | This is the default layout used by other layouts. Use this if you want to add custom HTML for content. | ![default layout](/assets/images/help/default.png) |


#### Front Matter - available settings

| Front Matter Key | Example Value | Description  | 
| ------ | ----------- | ----- |
| layout | post | Layout to be used for the page |
| published | false | Set `published` to false if you want to add the page but not show it on the website. |
| title | My Awesome Post | The title of your page/post. Used in the `meta` tags and in layouts to display your page correctly. |
| description | This is an awesome post about 96Boards... | The description of your page used as the `meta` description.|


## Adding a blog post

In order to add a blog post to 96Boards copy an existing post from the [_posts folder](https://github.com/96boards/website/tree/master/_posts). Posts are organised into by year/month so add to the correct folder based on the month you are posting it in and if the folder doesn't exist create one.

### Step 1 - Modify the post file name
The url for your title is based on the title provided in the filename e.g 2018-06-07-i2s-in-dragonboard410c.md will have a url of /blog/i2s-in-dragonboard410c/. Separate the words in your title by dashes and modify the date at the start of the filename as neccessary. 

### Step 2 - Modify the post front matter
Modify the post front matter based on your post. Values to modify are:
- author:
- date:
- image:
- tags:
- description:

#### Author
Change the author to a unique author shortname. If this is your first time posting then add your author values to the [_data/authors.yml file](https://github.com/96boards/website/blob/master/_data/authors.yml). Make sure to add your profile image to the [/assets/images/authors folder](https://github.com/96boards/website/tree/master/assets/images/authors). Verify that the author name is an exact match to that provided as the author: in your post.

#### Date
Modify the date to sometime before you post the blog otherwise Jekyll will see it as a __future__ post and not render it until the time on the server exceeds/equals that provided as the date in the post front matter.

#### Image
This value is used for the featured image displayed on your blog post and the image that is used when sharing the blog post on social media sites.

```YAML
image:
    featured: true
    path: /assets/images/blog/DragonBoard-UpdatedImages-front.png
    name: DragonBoard-UpdatedImages-front.png
    thumb: DragonBoard-UpdatedImages-front.png 
    
```

Make sure that the image you add in this section of front matter is placed in the [/assets/images/blog folder](https://github.com/96boards/website/tree/master/assets/images/blog).

__Note:__ There is currently a bug with the version of `jekyll-assets` we are using which means the only acceptable image extensions are `.jpg` and `.png`. If you use `.jpeg` you image may not display as expected.


#### Tags
These should be modified based on the content of your post as they are used for Meta keywords so that people can find your post based on the [tags your provide](https://www.96boards.org/blog/tag/).

#### Description
Change this value to a short description of your blog post as this is used for the meta description of your blog post.


### Step 3 - Add your post content.

Write your post content in Markdown format; specifically the [Kramdown](https://kramdown.gettalong.org/) Markdown flavour.

#### Adding images
Please use the following code snipppet to add an image to your blog post. Make sure to add the images that you include to [/assets/images/blog folder](https://github.com/96boards/website/tree/master/assets/images/blog).

```
{% include image.html name="name-of-your-image.png" alt="The Alt text for your image" %}
```

You also align/scale your image using the following css classes.

|Class|Details|
|-----|-------|
|small-inline|Small image aligned to the left|
|small-inline right| Small image aligned to the right|
|medium-inline|Medium image aligned to the left|
|medium-inline right|Medium image aligned to the right|
|large-inline|Large image aligned to the left|
|large-inline right|Large image aligned to the right|

```
{% include image.html name="name-of-your-image.png"  class="medium-inline" alt="The Alt text for your image" %}
```

Using this Jekyll include will allow your images to be lazy loaded and format the image HTML correctly.


#### Adding code

We are using the rouge syntax highlighter to highlight your glorious code. 

```bash
$ bundle exec jekyll serve --port 1337
```

See the full list of languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).


#### Adding Media/YouTube videos

To add a media element / YouTube video use the following Jekyll include.

```
{% include media.html media_url="https://youtu.be/GFzJd0hXI0c" %}
```


*****


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



__Please note:__ Due to the way product images are include, images **should not include spaces** in the filename otherwise they may not be rendered on the website as expected.

*****

## Adding Redirects to the Static site

We are using [Edge-rewrite](https://github.com/marksteele/edge-rewrite) which is a rewrite engine running in Lambda@Edge. The redirects are to be added to the `_data/routingrules.json` file in the webiste repository following the syntax rules [here](https://github.com/marksteele/edge-rewrite).

```
^/oldpath/(\\d*)/(.*)$ /newpath/$2/$1 [L]
!^/oldpath.*$ http://www.example.com [R=302,L,NC]
^/topsecret.*$ [F,L]
^/deadlink.*$ [G]
^/foo$ /bar [H=^baz\.com$]
```

__Note:__ These redirects are currently not respected by the link checker until built. So if trying to fix broken links by adding redirects then this may not be the best way to go about it currently. 

*****

## Building the static site

    We are working towards creating a Dockerfile for building our static sites. In the mean time you can still clone the site and install bundler/jekyll gems and ruby to build the site locally.

In order to build the 96Boards.org static site make sure you have Ruby and the bundler/jekyll gems installed. For instructions on how to setup an environment to build Jekyll sites see the official Jekyll documentation [here](https://jekyllrb.com/docs/installation/).

Once you have above installed you can simply clone this repo and the [96Boards Documentation Repo](https://github.com/96boards/documentation). You will then need to modify the [build.sh](https://github.com/96boards/website/blob/master/build.sh) file to pull the documentation into your website repo before building the static site. Amend the top two lines of the build.sh file so that the correct paths are used. Then run the script to move the documentation files over to the _documentation collection in the website repo.

```
$ ./build.sh
```

After you have moved the documentation files over you can go ahead and run the following to get the site building:

```
$ bundle 
```

This will install the required gems listed in the Gemfile.

```
$ bundle exec jekyll s 
```

This will serve (s) the Jekyll static website to the http://localhost:4000 where you can view the generated static website.


## Issues 
If you come across any bugs/issues then please let us know by clicking the Submit an Issue button located at the bottom of every 96Boards.org web page. Alternatively you may open an issue [here](https://github.com/96boards/website/issues/new) but please provide precise details on how to reproduce the bug/issue so that we can act on the issue as soon as possible.


### Known Issues
#### Image file names
Due to the way product images are include, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.

