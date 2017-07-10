
# 96boards Blog

1. [Adding a blog post](#adding-a-blog-post)

96boards blog posts are now written in markdown for a Jekyll based static site. These markdown posts are pulled in by Jekyll and displayed just like your typical 96boards blog post. The following tips will help you get on track and start writing blog posts for the new static site.

## Markdown
This Jekyll site is using Kramdown flavour markdown and also uses the rouge highlighter and a custom scss file in the \_assets/css folder.

## Images
Images are included using the image.html file. This is located in the \_includes folder. This file will generate the necessary markdown for an image that opens in a lightbox and is lazy loaded as users scroll down the blog post. Below is an example of how to include an image in your post.

```
{% include image.html name="name-of-your-specific-image.png" alt="This is the image alt tag which is also the lightbox caption." %}
```

The above is a basic example of a responsive lightbox image include for use in your blog posts when you include an image.

## Media
Media items are included using the media.html file will will generate a bootstrap responsive media element and include the supplied media_url as a source. This can be used for Slideshare includes and youtube video includes; both of which will be displayed as a repsonsive full width element which is lazy loaded using the Lazy Sizes plugin.
```
{% include media.html media_url="https://www.youtube.com/embed/bbMp3puXkVg" %}
```

## Code Highlighting

The highlighter used in the site is [`Rouge`](http://rouge.jneen.net). For a list of the language shortcodes that are supported currently go [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers). In order to highlight your source code in blog posts you should use the shorthand in markdown. Below is an example of this:

```
    ```python
    def newFunction(firstname, surname):
        name = firstname + surname
        return name
    ```
```
Once rendered the above will look similiar to this:
```python
def newFunction(firstname, surname):
    name = firstname + surname
    return name
```

Make sure your markdown is not indented at all otherwise it will not render properly.

# Blog Post Front Matter Explained.

|    Front Matter     |                        Meaning and usage                           |
|---------------------|:------------------------------------------------------------------:|
| title               | This is the title of the website for use in the head.html include. |
| layout              | This is the layout to use for the post. If you don't know what layout to put then just use "post".  |
| author              | This is the author of the blog post. In future updates a shortname will refer to a authors db.                 |
| date                | This is the date of the post in this format - 2017-07-05 13:00:00+00:00             |
| featured_image      | Name of the image which will be the main featured image on the blog post.           |
| comments            | When this is set to true Disqus comments are displayed at the bottom of the post.   |
| tags                | This is a yaml list of tags related to the post.                                    |


An example of the front matter of a blog post:

```yaml
---
layout: post
title: Most Awesome Blog Post in the World.
author: John Smith
date: 2017-07-07 13:00:00+00:00
featured_image: blog-feature-image.jpg
comments: true
tags:
- 64-Bit
- 96Boards
- Aarch64
- Android
- ARM Arm32
- Arm64
- ARMv8
---
Your content goes here.
```
