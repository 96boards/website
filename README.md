# 96Boards.org

The 96Boards website is built using the Jekyll static site generator. It is based off of the jumbo-jekyll-theme used for all of the Linaro static sites. With the move from Wordpress to Static we have introduced GitHub/Community driven content that allows 96Boards.org users to submit issues about any of the pages on 96Boards.org through the associated Git respository.

## Issues 
If you come across any bugs/issues then please let us know by clicking the Submit an Issue button located at the bottom of every 96Boards.org web page. 

## Contributions
We happy to consider any contributions/feature requests that you may submit so please submit a PR with your changes and we will take a look.

## Adding a Blog Post



## Adding Products

In order to add a product please copy one of the products currently in the [/_product folder](https://github.com/96boards/website/tree/master/_product). Products are organsied in the _product folder into the 96Boards specifcations that are avaialble ([ce](https://github.com/96boards/website/tree/master/_product/ce), [ee](https://github.com/96boards/website/tree/master/_product/ee), [ie](https://github.com/96boards/website/tree/master/_product/ie), and [mezzaanine](https://github.com/96boards/website/tree/master/_product/mezzanine)). Please duplicate a product folder from one of these specification sub folders and modify accordingly. 


### Modify the front matter

We use the Jekyll front matter (YAML) values to help render your product on our Jekyll site. Please look at the other products README.md's for reference on how to structure the front matter (YAML).

### Add product images

Please add product images to the images/ sub folder inside the folder for your board. Make sure to optimize these images as best as possible to reduce the overhead on users when viewing your product page.


### Known Issues
Due to the way product images are include, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.