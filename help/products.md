# 96boards Products

1. [Adding a product](#adding-a-product)
    1. [New Product Folder Structure](#product-folder-structure)
    2. [Product Front Matter](#product-front-matter)
        1. [Example Front Matter](#product-example-front-matter)

96boards products are now stored in the Jekyll collection `_product`. The content of this file is the markdown displayed on the product page on the website. The permalink however relates to an entry in the database  - `_data/product_db.yml` which then contains multiple variables which describe each product uniquely and is then output through liquid in site pages.

## Adding a product to the site. <a name="adding-a-product"></a>

### 1. New Product Folder Structure <a name="product-folder-structure"></a>
In order to add a new product to the site first you must navigate to the `_product` Jekyll collection which is located in the root of the site. In this folder there are a few specification sub folders that you should be aware of.

* CE
* EE
* IE
* Mezzanine
* Accessories

These are where you will add your new product folder. Depending on the product you are adding navigate to the correct specification folder. Once inside create your new product folder along with an images sub folder and README.md

* \_product/
    * CE/
        * New96board/
            * images/
                * newboardimage.png
            * README.md

### 2. Product Front Matter <a name="product-front-matter"></a>
Jekyll uses front matter, which is yaml structured data that sits at the front of Jekyll files. This describes the page in question through permalinks, titles and layouts etc. Below is a table of the required front matter for products.

|    Front Matter Variable    |                Meaning and usage                           |
|-----------------------------|:----------------------------------------------------------:|
| title                       | This is used for the `<title>` of the website. This is also used in _includes as a reference for the page title.               |
| layout                      | This is the layout that Jekyll will use when building the product page. The layout to use is product-display-page (this may later be ommitted by the developers for simplicity)                |
| permalink                   | This is path that the page will reside on when Jekyll builds the site. Changing this changes where the page will be when generated and deployed. The current convention is `/product/ProductName/` |
| description                 | This is the description of the page used in the meta description tag |

Add these variables to the front of your `README.md` file. An example of what to include is included below. Anything below the front matter is content that will be displayed on the product page on the left hand side.

#### Product Front Matter Example <a name="product-example-front-matter"></a>
```
---
title: Bubblegum-96
layout: product-display-page
permalink: /product/bubblegum-96/
description: |-
    Bubblegum-96 Board based on Actions Semi S900 Processor
---
```

This is an example of the front matter used in the [BubbleGum 96](http://www.96boards.org/product/bubblegum-96/) board page.

### 3. Product Database Update

Once you have created your README.md with the front matter required you can then go to the `_data/product_db.yml` file and add an entry under `products:`. Below is a list of the various yaml variables you can included in the product_db.

|    Product_db Variable      |                Meaning and usage                           |
|-----------------------------|:----------------------------------------------------------:|
| product_title  (required)   | This is the product title and is required. |
| product_documentation_link (optional) | This is a link to documentation for the product. This is displayed in the tabbed navigation bar.  |
| product_support_link  (optional) | This is the support link which is also included in the tabbed navigation bar.  |
| product_specification (required)  | This is required as it distinguishes your product into a category which is used to display your product correctly on the website. |
| product_mezzanine (optional) | This is an optional variable which, when included, will display a list of any related mezzanine products. Which are added as a list of ID's relating to the mezzanine_product_id.  |
| product_accessories (optional) | This is also an optional parameter which does the same as product_mezzanine but for accessories. |
| product_third_party_images (optional) | This is an optional parameter which takes a list of third party images to be displayed on the product page side panel under the Third Party Images section.  |
| product_os (optional) | An optional list of operating systems for the product.  |
| product_features  (optional) | An optional list of features for the product.  |
| product_images (required) | This takes a list of the images that are located in the images/ folder you add to your product folder. |
| product_long_desc  (required) | This is the long description of the product which is used on the product page if there is no content. |
| product_short_desc  (required)  | This is the short description which is used on the product contents page where the various products are listed in a grid form.E.g /products/ |
| featured_product_order (optional) | This is an optional variable which contains an integer for reference to the featured product page order. Number 1 is displayed first and 7 last.  |
| product_buy_links (required) | This is a required part of an active product and takes a list of potential buy links for website visitors.  |
| is_featured (optional (Required if using the featured_product_order))  | This is required to filter out featured_products from normal products.   |
