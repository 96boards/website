# 96Boards.org

![Build Status](https://bamboo.linaro.org/plugins/servlet/wittified/build-status/BOARDS-BUILDDEV0)

The 96Boards website is built using the [Jekyll](https://jekyllrb.com/) static site generator. It uses the Linaro [jumbo-jekyll-theme](https://github.com/linaro-marketing/jumbo-jekyll-theme) (which is used for all of the Linaro static websites). With the source for the 96Boards.org website available on GitHub in this repo, it makes it easy for community/technical contributors to submit content. The 96Boards documentation repo is synced into the _\_documentation_ directory during site builds that occur on our Atlassian Bamboo CI instance.

## Contributions

We will happily consider any contributions/feature requests that you may have. Please submit a PR with your changes and we will take a look. If you have contributor permissions you can also use the `Github Edit` buttons available on all the website pages to help locate the file you wish to edit/raise an issue about.

### Simple edits on GitHub

A simple edit to content can be made directly on the GitHub website. Find the page you would like to make changes to and click the "pencil" icon.

![Simple GitHub changes - pencil edit](/assets/images/content/pencil_edit.png)

Once you've made your change you'll be able to add a change title and description. Make sure to select the "Create a new branch for this commit and start a pull request" option.

![Simple GitHub changes - change text and description](/assets/images/content/create_new_branch.png)

Then click "Propose file change" button. Maintainers of this website repo will then review and publish your change accordingly.

If you'd like a more detailed guide on making changes on GitHub then view the GitHub documentation [here](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository).

### Using the git CLI

If you're familiar with using the git CLI then you can simply fork this repository and `git clone` your fork to your machine. Then submit pull request on a `new` branch based off of the `develop` branch. This is due to the 96Boards.org website repo following the [Git flow](https://danielkummer.github.io/git-flow-cheatsheet/) methodology. Push your changes to your fork and then create a pull request via the GitHub UI.

### Building the Website

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```
cd <git repository directory>
JEKYLL_ACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```

cd <built web site directory>
../check-links.sh
```

The built web site directory will be `staging.96boards.org` unless you set `JEKYLLENV=production` before building the site, in which case the directory will be `production.96boards.org`.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki/Building-sites-that-use-multiple-git-repositories) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

## Contents

Below are a few guides that will help you edit/add new content to the website. If these guides are missing anything or you are struggling to get something working then feel free to open an issue [here](https://github.com/96boards/website/issues/new).

- [Pages](#pages)
- [Blog Posts](#blog-posts)
- [Products](#products)
- [Projects](#projects)
- [96Boards News](#adding-96boards-news)
- [Documentation](#documentation)
- [Adding Redirects to the Static Site](#adding-redirects-to-the-static-site)

******

## Pages

Pages are located in the [_pages](https://github.com/96boards/website/tree/develop/_pages) directory. Most of these pages are using the "flow" layout provided by the jumbo-jekyll-theme. This means that page content is predominantly described in the front matter of a Jekyll markdown file.

Below are basic guides on editing/adding pages but for a more in depth guide please view the theme documentation on adding pages [here](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPages).

### Editing a Page

Find the page you are looking to edit in the [_pages](https://github.com/96boards/website/tree/develop/_pages) directory. Modify the content that you would like to make changes to and then follow the instructions in the [Contributions](#Contributions) section. If you have any queries then feel free to post an issue in this repo.

### Adding a Page

Locate the [_pages](https://github.com/96boards/website/tree/develop/_pages) directory and create a new markdown file in the format of `page_name.md`. Jekyll pages consist of a front matter block and main content. We are using a custom layout for most of these pages but you can simply copy the content from another page and change the title and permalink accordingly. Then follow the instructions in the [Contributions](#Contributions) section. If you have any queries then feel free to post an issue in this repo.

******

## Blog Posts

Posts are located in the [_posts](https://github.com/96boards/website/tree/develop/_posts) directory of this repo and are organised in year / month directories. Posts are written in markdown and contain a front matter block which provides metadata for a given page.

Below are basic guides on editing/adding blog posts but for a more in-depth guide then please view the theme documentation on adding blog posts [here](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPosts).

### Editing a Blog Post

Locate the blog post you wish to make changes to in the [_posts](https://github.com/96boards/website/tree/develop/_posts) folder. Make your changes as required and then follow the [contribution guide](#Contributions).

### Adding a Blog Post

The easiest way to add a blog post is to copy a previous post and edit/remove the front matter to your requirements. Make sure to change the date specified in the file name since posts are organised/displayed based on this data (e.g 2020-01-13-your-blog-title.md). Update the date, title, tags and other front matter fields as required. Add a high resolution image to the /assets/images/blog directory and then update the image field with the path to your image. Once ready, follow the [contribution guide](#Contributions) to create a pull request with your new blog post.

******

## Products

### Editing a product

In order to edit a product you must first locate the product that you wish to edit. Products are located in the [_product folder](https://github.com/96boards/website/tree/develop/_product) and are organised by the specification of the board. Each board has their own designated folder. Within the product folder is an images directory and a `README.md`. Edit the product details accordingly in this `README.md` and then follow the [contribution guide](#Contributions).

### Adding a product

Adding products is best to do from the git command line interface. If unfamiliar with this process then see the _Using the git cli_ section under [Contributions](#Contributions).

#### Step 1 - Duplicate similiar product folder

In order to add a product copy one of the products currently in the [_product folder](https://github.com/96boards/website/tree/develop/_product). Products are organised in the _product folder into the 96Boards specifications that are available ([ce](https://github.com/96boards/website/tree/develop/_product/ce), [ee](https://github.com/96boards/website/tree/develop/_product/ee), [ie](https://github.com/96boards/website/tree/develop/_product/ie), and [mezzanine](https://github.com/96boards/website/tree/develop/_product/mezzanine)). Please duplicate a product folder from one of these specification sub folders and modify accordingly.

#### Step 2 - Modify the front matter

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
# and on page content where a description of your product is need. To maximize the
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
# by Jekyll when collecting products of a certain specification.
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
# Product buy links - these links let you customize the buy links available for your product.
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

#### Step 3 - Add product images

Please add product images to the images/ sub folder inside the folder for your board. Make sure to `optimize` these images as best as possible to reduce the overhead on users when loading your product page. The first image that you add to the front matter will be the one that is used on the homepage/product index pages. Therefore you should ensure that this image is optimized whilst also being a relatively high resolution so that your product is displayed correctly.

Below you can see example of the product_images front matter value that you need to change to match your product images that you add to the images sub-folder.

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

******

## Projects

96boards projects are submitted by engineers that are developing hardware and software applications using 96Boards. You can view the current list of 96Boards projects here - [96Boards.org/projects](https://www.96boards.org/projects/). See below for details on editing or adding a project.

### Editing a Project

If you already own a project then you can make changes to your 96boards-projects org repo. If you don't own the project but notice some things you would like to change then locate the relevant project in this org and then open an appropriate GitHub issue.

### Adding a Project

[96Boards.org/projects](https://www.96boards.org/projects/) are maintained in the [96boards-projects GitHub organization](https://github.com/96boards-projects). Clone the [template repo](https://github.com/96boards-projects/template). Submit a pull request with your changes. If it is approved, we'll create a new project repo for your project so that it can be added to the website.

******

## Adding 96Boards News

### External News

To add external news to 96boards.org that will show under [/news/](https://www.96boards.org/news/) simply add an entry to the [news.yml](https://github.com/96boards/website/blob/master/_data/news.yaml) file. Below is an example entry:

```yaml
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

******

## Documentation

The 96Boards.org documentation is maintained in this [repo](https://github.com/96boards/documentation) so if you'd like to modify the documentation for a specific board then please head over to that repo and submit a pull request there.

## Issues

If you come across any bugs/issues then please let us know by clicking the Submit an Issue button located at the bottom of every 96Boards.org web page. Alternatively you may open an issue [here](https://github.com/96boards/website/issues/new) but please provide precise details on how to reproduce the bug/issue so that we can act on the issue as soon as possible.

### Known Issues

#### Image file names

Due to the way product images are included, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.
