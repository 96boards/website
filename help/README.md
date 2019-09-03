# 96boards Jekyll

The 96boards website is built using Jekyll, a static website generator based on Ruby, which allows the site to be more responsive and increase the performance of the site.

# Table of Contents
1. [Building 96boards Jekyll Site](#jekyll-deployment)
2. [Website Assets](#website-assets)
3. [SEO](#website-seo)
    1. [Social Media Share Images](#social-share-images)
        1. [Default Image](#default-share-image)
        2. [Per Page Image](#per-page-share-image)
        3. [Per Collection / Page Group](#per-collection-share-image)
    2. [Meta Tags](#seo-meta-tags)
        1. [Keywords](#meta-keywords)
        2. [Description](#meta-description)
4. [Website Content](#website-content)
    1. [Blog Posts](#blog-posts)
    2. [Products](#products)
    3. [Projects](#projects)
5. [Something Broken / Queries / Additional Help](#queries)
    1. [Known Issues](#known-issues)
        1. [Data File Modifications](#data-file-modifications)
            1. [Work Around](#data-file-modifications-work-around)

# Building 96boards Jekyll Site <a name="jekyll-deployment"></a>
Please visit [this](jekyll-deployment) page for an in depth overview of how to build the 96boards Jekyll Site Locally.

# Website Assets <a name="website-assets"></a>
The resources included are as follows:
1. CSS (SASS)
2. Javascript
3. Images

# SEO settings <a name="website-seo"></a>

The 96boards jekyll site uses the [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) plugin to generate some useful meta tag information to describe pages for better seo.

## Social Media Share Images <a name="social-share-images"></a>
### Default Social Media Share Image <a name="default-share-image"></a>

To set a default social media share image the following `defaults` setting has been placed in the \_config.yml files.

Replace `[this image](https://github.com/96boards/website/blob/master/assets/images/social-media-image.png)` with the default social media image of your choice.

```YAML
- scope:
    path: ""
  values:
    image: /assets/images/social-media-image.png
```
This allows a default image to be used in open graph and twitter cards across all the site pages/posts etc. To change this default image just replace the image in the path described in the above YAML.

### Per Page Social Media Image Setup <a name="per-page-share-image"></a>

To add a custom image for a specific page simply add the image path to your chosen page like this:

```YAML
image: /assets/images/contact-social-media-share-image.png
```

Make sure the image you specified is located [here](https://github.com/96boards/website/tree/master/assets/images) in the repo.

This will NOT work if you add the image to the Jekyll Assets Images folder - \_assets/images. This is due to the fact that images in this folder must be outputted specifically by calling it through liquid e.g `{% asset_path "contact-social-media-share-image.png" %}` and this `CANNOT` be done in YAML.

### Per Jekyll Collection <a name="per-collection-share-image"></a>

It may useful to note that default share images can be added to groups of pages in order to add a `section` specific share image. E.g you could add a products only default share image or a documentation share image by using the following `defaults` setting in the \_config.yml file.

```YAML
- scope:
    type: documentation
  values:
    image: /assets/images/documentation-share-image.png
```
## Meta Tags <a name="seo-meta-tags"></a>
### Meta Keywords <a name="meta-keywords"></a>

To add the keywords meta information to a particular page add the following YAML to the front matter of that page.

```YAML
keywords: hikey 960, hikey960, aosp, aosp developement board, boards
```

### Meta Description <a name="meta-description"></a>

To add meta description to page add the following YAML to that pages front matter.

```YAML
description: |-
    32- and 64-bit ARM Open Platform Specifications. For software developers.
    For the maker community. For embedded OEMs. 64-bit ARM for $129.
```

## More...

If you what you need is not listed above on [Jekyll Seo Tag Usage](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md) or [Jekyll Seo Tag Advanced Usage](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/advanced-usage.md) then please feel free to submit an issue with the requested seo feature.



# Website Content <a name="website-content"></a>
The following pages all fall under website content:

1. Products [/products/](products.md)
2. Projects [/projects/](projects.md)
3. Blog Posts [/blog/](blog.md)
4. About [/about/](/about/) [Source](https://github.com/96boards/website/blob/master/about/README.md)
5. Compliance [/compliance/](/compliance/) [Source](https://github.com/96boards/website/blob/master/compliance/README.md)
6. Contact [/contact/](/compliance/) [Source](https://github.com/96boards/website/blob/master/contact/README.md)
7. Digest [/digest/](/compliance/) [Source](https://github.com/96boards/website/blob/master/digest/README.md)
9. Go [/go/](/go/) [Source](https://github.com/96boards/website/tree/master/go)
10. Legal [/legal/](/legal/) [Source](https://github.com/96boards/website/blob/master/legal/README.md)
11. Membership [/membership/](/membership/) [Source](https://github.com/96boards/website/blob/master/membership/README.md)
12. News [/news/](/news/) [Source](https://github.com/96boards/website/blob/master/news/README.md) [Data](https://github.com/96boards/website/blob/master/_data/news.yaml)
13. OpenHours [/openhours/](/openhours/) [Source](https://github.com/96boards/website/blob/master/openhours/README.md)
14. Partner [/partner/](/partner/) [Source](https://github.com/96boards/website/blob/master/partner/README.md)
15. Press [/press/](/press/) [Source](https://github.com/96boards/website/blob/master/press/README.md)
16. Search [/search/](/search/) [Source](https://github.com/96boards/website/blob/master/search/README.md)
17. Specifications [/specifications/](/specifications/) [Source](https://github.com/96boards/website/blob/master/specifications/README.md)
18. Tutorials [/tutorials/](http://www.96boards.org/tutorials/dragonboard410c/) [Source](https://github.com/96boards/website/blob/master/tutorials/dragonboard410c/README.md)
19. Verticals [/verticals/](/verticals/) [Source](https://github.com/96boards/website/tree/master/verticals)
19. 404 [/404.html](/404.html) [Source](https://github.com/96boards/website/blob/master/404.md)


## Blog Posts <a name="blog-posts"></a>

To add a blog post please visit the [How To submit a 96boards Blog Post](blog.md) page.

## Products <a name="products"></a>

To submit/edit a product please visit the [How To edit/add a 96boards Product](products.md) page.

## Projects <a name="projects"></a>

To submit/edit a project please visit the [How To edit/submit a 96boards Project](projects.md) page.

## Something Broken / Queries / Additional Help <a name="queries"></a>
Please check the [known issues](#known-issues) below first to see if that helps solve your issue. Otherwise, feel free to submit an issue [here](https://github.com/96boards/website/issues/new) and we will work with you on your issue and update the documentation accordingly.

### Known Issues <a name="known-issues"></a>
Below are any `Known Issues` surrounding the submission of content to the 96boards site.

### Data File Modifications <a name="data-file-modifications"></a>
Any modifications to these files will not show directly on the live website unless the file calling the data file has changed. This is due to an issue with the `--incremental` flag we are using in order to not regenerate the entire site upon each build / minor change. There's an issue on [talk.jekyllrb.com](https://talk.jekyllrb.com/) discussing this problem [here](https://talk.jekyllrb.com/t/jekyll-incremental-build-regeneration-issue-with-yaml-db/901).

#### Work Around <a name="data-file-modifications-work-around"></a>
If a [data file](https://github.com/96boards/website/tree/master/_data) is modified simply change something on the page that is using the data file

##### Example
If you are making a change to a product in the [product_db.yml](https://github.com/96boards/website/blob/master/_data/product_db.yaml) file then change something minor on [this page](https://github.com/96boards/website/blob/master/_product/products.html) to get the Jekyll Bamboo Automation to recognize your changed [data file](https://github.com/96boards/website/tree/master/_data) and pull it in to the site.
