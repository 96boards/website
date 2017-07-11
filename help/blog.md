
# 96boards Blog

96boards blog posts are now written in markdown for a Jekyll based static site. These markdown posts are pulled in by Jekyll and displayed just like your typical 96boards blog post. The following tips will help you get on track and start writing blog posts for the new static site.

Make sure your markdown is not indented at all otherwise it will not render properly.

# Blog Post Front Matter Explained.

|    Front Matter     |                        Meaning and usage                           |
|---------------------|:------------------------------------------------------------------:|
| title               | This is the title of the website for use in the head.html include. |
| layout              | This is the layout to use for the post. Default is set to 'post'.  |
| author              | This is the author of the blog post. In future updates a shortname will refer to a authors db.                 |
| date                | This is the date of the post in this format - 2017-07-05 13:00:00+00:00             |
| featured_image      | Name of the image which will be the main featured image on the blog post.           |
| comments            | When this is set to false Disqus comments are not displayed at the bottom of the post.  Default is set to True. |
| tags                | This is a yaml list of tags related to the post.                                    |


```yaml
---
title: Most Awesome Blog Post in the World.
author: John Smith
date: 2017-07-07 13:00:00+00:00
featured_image: blog-feature-image.jpg
---
Your Markdown content goes here.
```


# Creating a new blog post

To create a new blog post for the 96boards Jekyll Site use the following steps to get started.

## 1. Fork the 'website' repository
Go to https://github.com/96boards/website and fork the repository. In your terminal do the following but replace:

```bash
$ git clone https://github.com/your-username/website.git
```
Then add the original source for the website repository in the upstream remote.

```bash
$ git remote add upstream https://github.com/96boards/website.git
```
Check you have successfully added the remote by listing the available remotes.

```bash
$ git remote -v
```

To make sure that your website repository is in sync with the main one then use the following:

```bash
$ git fetch upstream
$ git checkout master # Make sure you are on the master branch locally.
$ git merge upstream/master #If you have no unique commits it will perform a fast-forward.
```

More more info on this matter please visit [https://help.github.com/articles/syncing-a-fork/](https://help.github.com/articles/syncing-a-fork/)

## 2. Create your new post in /\_posts
Navigate to the \_posts directory and add in the new blog post markdown file with the following format for the file name so that Jekyll recognizes it as a post.

```
YYYY-MM-DD-name-of-your-post.md
```
The 'name-of-your-post' is used by Jekyll to work out the permalink of where your blog post should reside. The date must also be supplied in the file name of the post. A future date may result in your blog post from not being rendered on the site when a Jekyll build takes place.

## 3. Start writing your post.

In the help directory - where you are reading this - I have added a template for a post. You can use this template to get started and to make sure you have all the required front matter variables.
```yaml
---
title: Most Awesome Blog Post in the World.
author: John Smith
date: 2017-07-07 13:00:00+00:00
---
YOUR MARKDOWN CONTENT GOES HERE
```
Above is the bare minimum front matter that is needed to setup your blog post and ensure it is rendered correctly.

However, the typical blog post will have a featured image that displays full page width etc. To add this full page image you should include a featured_image in the front matter like this:

```yaml
featured_image: your-featured-img.png
```
The featured image takes the name of an image that is located in the \_assets/images folder.

### Images
Images must be added to the /\_assets/images/ folder in the website repo you have forked. This includes your featured_image. Please optimize your images and keep the file size down as much as possible to help with pagespeed and performance. The Jekyll site will build a thumbnail for your featured_image one is added to the \_assets/images/ folder.

To add an image in your markdown please use the following liquid include.

```
{% include image.html name="name-of-your-image.png" alt="Alternate text for your image" %}
```

When using this liquid include the image you have included in your blog post will be rendered as a responsive image and when clicked the image will then display a lightbox.

### Youtube Video Series
To include a youtube video in your blog post simply use the `media.html` include as follows:

```
{% include media.html media_url="https://www.youtube.com/embed/bbMp3puXkVg" %}
```

This youtube video will be rendered as a responsively embedded element so it displays correctly on all screen sizes. This embed will also be lazy loaded.


### Media (Slideshare includes etc)
Media items are included using the media.html file will will generate a bootstrap responsive media element and include the supplied media_url as a source. This can be used for Slideshare includes and youtube video includes; both of which will be displayed as a repsonsive full width element which is lazy loaded using the Lazy Sizes plugin.
```
{% include media.html media_url="https://www.youtube.com/embed/bbMp3puXkVg" %}
```

### Code Highlighting

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

## 4. Commit your changes and submit PULL Request.
Once you are happy with your blog post commit your changes locally and push to your forked repo. Once you have done this submit a PULL request by going to your repository in the browser and clicking the "Pull request" link just above your repo files. This blog post will then be reviewed and if all is in order your changes will be merged into the master branch on 96boards/website.


## 5. Wait patiently for the Automatic Update
Once your blog post is pulled into the master branch on 96boards/website the content will be updated on the website(currently manually) automatically.
