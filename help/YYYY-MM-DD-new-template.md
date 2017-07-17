---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: John Smith
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-07-20 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: 96boards OpenHours Recap 1337
# This is the featured background image of the blog which resides under _assets/
featured_image: OpenHours.png
# Tags related this post. For use in tag filters that will be used in future updates.
tags:
- 64-Bit
- 96Boards
- OpenHours # Use this tag if you want it to be featured in the openhours blog sections.
---
# **Opening Title**

# Adding Responsive Slideshare Embed
Slides from slideshare can be added via the media.html. Use the following syntax to do so:

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/JacHKnmjZF4WNS" %}

# Adding an Responsive Image

To add an image to the blog post please use the following.

{% include image.html name="OpenHours.png" alt="Your alternate text." %}

# Adding a Responsive Video Embed

To add a responsive video to your blog post you can use the media.html include as follows:

{% include media.html media_url="https://www.youtube.com/embed/dQw4w9WgXcQ" %}


# Adding code to your post.

The Jekyll site uses rouge syntax highlighting to highlight your code. For more information visits the 96boards Jekyll Documentation. The following example will add a python code block to the post

```python
def ispalindrome(word):
    if len(word) < 2:
        return True
    if word[0] != word[-1]:
        return False
    return ispalindrome(word[1:-1])

```
