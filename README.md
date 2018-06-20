# 96Boards.org

The 96Boards website is built using the Jekyll static site generator. It is based off of the jumbo-jekyll-theme used for all of the Linaro static sites. With the move from Wordpress to Static we have introduced GitHub/Community driven content that allows 96Boards.org users to submit issues about any of the pages on 96Boards.org through the associated Git respository.

## Adding a Blog Post

In order to add a blog post to 96Boards copy and existing post from the [_posts folder](https://github.com/96boards/website/tree/master/_posts). Posts are organised into by year/month so add to the correct folder based on the month you are posting it in and if the folder doesn't exist create one.

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
Change the author to unique author shortname. If this is your first time posting then add your author values to the [_data/authors.yml file](https://github.com/96boards/website/blob/master/_data/authors.yml). Make sure to add your profile image to the [/assets/images/authors folder](https://github.com/96boards/website/tree/master/assets/images/authors). Verify that the author name is an exact match to that provided as the author: in your post.

#### Date
Modify the date to somewhen before your post the blog otherwise Jekyll will see it as a __future__ post and not render it until the time on the server exceeds/equals that provided as the date in the post front matter.

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

#### Tags
These should be modified based on the content of your post as they are used as Meta keywords and so people can find your post based on the [tags your provide](https://www.96boards.org/blog/tag/).

#### Description
Change this value to a short description of your blog post. This is used for the meta description of your blog post.


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

## Adding Products

In order to add a product copy one of the products currently in the [_product folder](https://github.com/96boards/website/tree/master/_product). Products are organsied in the _product folder into the 96Boards specifcations that are avaialble ([ce](https://github.com/96boards/website/tree/master/_product/ce), [ee](https://github.com/96boards/website/tree/master/_product/ee), [ie](https://github.com/96boards/website/tree/master/_product/ie), and [mezzaanine](https://github.com/96boards/website/tree/master/_product/mezzanine)). Please duplicate a product folder from one of these specification sub folders and modify accordingly. 


### Modify the front matter

We use the Jekyll front matter (YAML) values to help render your product on our Jekyll site. Please look at the other products README.md's for reference on how to structure the front matter (YAML).

### Add product images

Please add product images to the images/ sub folder inside the folder for your board. Make sure to optimize these images as best as possible to reduce the overhead on users when viewing your product page.


### Known Issues
Due to the way product images are include, images should not include spaces in the filename otherwise it may not be rendered on the website as expected.


## Issues 
If you come across any bugs/issues then please let us know by clicking the Submit an Issue button located at the bottom of every 96Boards.org web page. 

## Contributions
We happy to consider any contributions/feature requests that you may submit so please submit a PR with your changes and we will take a look.
