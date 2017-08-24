# 96boards Jekyll Documentation

The 96boards website is built using Jekyll, a static website generator based on Ruby, which allows the site to be more responsive and increase the performance of the site.

# Table of Contents
1. [Jekyll Deployment](#jekyll-deployment)
    1. [\_config.yml setup](#config-setup)
    2. [96 boards Dependencies](#96boards-dependencies)
    3. [Jekyll Dependencies](#jekyll-dependencies)
        1. [Ruby](#ruby)
            1. [Install Ruby](#install-ruby)
        2. [Jekyll](#jekyll)
            1. [Install Jekyll](#install-jekyll)
    4. [Jekyll Commands](#jekyll-commands)
2. [Jekyll Assets](#jekyll-assets)
3. [SEO](#website-seo)
    1. [Social Media Share Images](#social-share-images)
        1. [Default Image](#default-share-image)
        2. [Per Page Image](#per-page-share-image)
        3. [Per Collection / Page Group](#per-collection-share-image)
    2. [Meta Tags](#seo-meta-tags)
        1. [Keywords](#meta-keywords)
        2. [Description](#meta-description)
4. [Website Content](#website-content)

# Jekyll Deployment <a name="jekyll-deployment"></a>
Jekyll uses Ruby to generate the static website so having Ruby installed is a must if you are
trying to build the 96boards site. Before you build the site use the following steps to make sure your environment is setup for a Jekyll build.

## \_config.yml setup <a name="config-setup"></a>
This file holds the configuration settings for the Jekyll website such as site source folder path and the site destination path. You can find the Jekyll official documentation of configuration [here](https://jekyllrb.com/docs/configuration/).  

|    Config Option    |                        Meaning and usage                           |
|---------------------|:------------------------------------------------------------------:|
| destination         | This is the folder the site will be compiled to.                   |
| permalink           | This is the permalink for blog posts on the site.                  |
| title               | This is the title of the website for use in the head.html include. |
| encoding            | This is simply the encoding jekyll uses when building site pages.  |
| description         | The description of the website for use in the meta description etc. Also disables custom plugins and ignores symbolic links.|
| safe                | This is the site wide kill switch of safe mode on a Jekyll website.|
| search-label        | This is the search label used in the search.linar.org params.      |
| disqus              | This is a boolean value declaring whether disqus is enabled.       |
| disqus_shortname    | This is the shortname that disqus uses to show comments.           |
| url                 | If you are wanting to deploy the site to somewhere otherthan localhost then change this variable to the FQDN of where you are deploying to e.g https://www.96boards.org - note there is no trailing slash here.         |
| exclude             | These are files that are excluded from the build of Jekyll. You can use this if you want to speed up the site generation. For example, if you are only editing the _documentation section of the website simply exclude the other content folders and build with just the _documentation content. |
| google-tag-manager  | This is a site variable which controls the output of Google Tag Manager for use in the China site build which does not allow gtm to be used. |
| social              | This is a site variable that is required by [Jekyll SEO Tag Manager](https://github.com/jekyll/jekyll-seo-tag) which is optional but allows you to output more relevant social media meta tags. |
| twitter             | This is also used by the [Jekyll SEO Tag Manager](https://github.com/jekyll/jekyll-seo-tag)|
| github_username, linkedin_username, google_plus_username, facebook_username, youtube_username and twitter_username | These are used for the footer social media links. |

## 96boards dependencies <a name="96boards-dependencies"></a>

1. Ruby Gems listed in Gemfile and \_config.yml

The 96boards Jekyll based website has a few Gems that need to be installed before you can run the Jekyll site locally. In order to install these gems use `$ bundle install` which will install the gems listed in the Gemfile and the \_config.yml file. If you do not have `bundle` installed then download it using `$ gem install bundler`.

## Jekyll Dependencies <a name="jekyll-dependencies"></a>

Jekyll list the dependencies over at their official installation documentation [here](https://jekyllrb.com/docs/installation/) but in general to run a Jekyll site you need:

* Ruby
* jekyll (Ruby Gem) e.g `$ gem install jekyll`
* bundler (Ruby Gem) e.g `$ gem install bundler`
* GNU/Linux, Unix, or macOS machine

### 1. Ruby <a name="ruby"></a>
`$ ruby -v`

This will show you the current version of Ruby that you have installed on your machine. The version we are using may well change in the future development of this site but you can always find the latest version being currently used in the [Gemfile](https://stash.git.linaro.org/projects/MAR/repos/96boards.org-static/browse/Gemfile)

#### Install Ruby <a name="install-ruby"></a>
To install ruby use your favourite package manager on your host OS or follow the instructions on [Ruby-Lang.org](https://www.ruby-lang.org/en/documentation/installation/)

### 2. Jekyll <a name="jekyll"></a>
`$ jekyll -v`

This command, once executed, will display the current version of Jekyll you have installed. We are using `jekyll 3.4.3` but this may change in the future so it may be useful to note that you can find the current version actively being used in the [Gemfile](https://stash.git.linaro.org/projects/MAR/repos/96boards.org-static/browse/Gemfile) under `gem "jekyll", "3.4.3"`.

#### Install Jekyll <a name="install-jekyll"></a>
To install Jekyll [Ruby-Lang.org](https://www.ruby-lang.org/en/documentation/installation/)


## Jekyll Commands <a name="jekyll-commands"></a>
1. `$ jekyll serve`
    Enter this command into your terminal to build the site locally and test on a localhost server. `http://localhost:4000` is the location where the Jekyll site will deploy to if it is set in the url and fullpath front matter variables. All errors in requesting images will result in a message being displayed on the terminal window that is running the server.
2. `$ jekyll build`
    * This is the Jekyll command which builds the site ready for deployment and outputs the generated static Jekyll website to the deploy folder path set in the config.yml file e.g. `_deploy` default destination for a Jekyll site is `_site`.
3. `$ jekyll build -V`
    * This command is just the same as `$ jekyll build` but you can see a more Verbose approach to how the site is being generated in the build.
4. `$ jekyll serve -V`
    * This command is just the same as `$ jekyll serve` but you can see a more Verbose approach to how the site is being generated.
5. `$ jekyll build --config _config.yml`
    * This is and optional command that may come in useful when changing the configuration of the Jekyll site. This just allows any other config.yml files to be easily swapped in.



# Jekyll Assets <a name="jekyll-assets"></a>
The resources included are as follows:
1. CSS (SASS)
2. Javascript
3. Images

# Website Content <a name="website-content"></a>
The following fall under website content:
1. Products [/products/](products.md)
2. Projects [/projects/](projects.md)
3. Blog Posts [/blog/](blog.md)
4. About [/about/](https://www.96boards.org/about/) [Source](https://github.com/96boards/website/blob/master/about/README.md)
5. Compliance [/compliance/](https://www.96boards.org/compliance/) [Source](https://github.com/96boards/website/blob/master/compliance/README.md)
6. Contact [/contact/](https://www.96boards.org/compliance/) [Source](https://github.com/96boards/website/blob/master/contact/README.md)
7. Digest [/digest/](https://www.96boards.org/compliance/) [Source](https://github.com/96boards/website/blob/master/digest/README.md)
9. Go [/go/](https://www.96boards.org/go/) [Source](https://github.com/96boards/website/tree/master/go)
10. Legal [/legal/](https://www.96boards.org/legal/) [Source](https://github.com/96boards/website/blob/master/legal/README.md)
11. Membership [/membership/](https://www.96boards.org/membership/) [Source](https://github.com/96boards/website/blob/master/membership/README.md)
12. News [/news/](https://www.96boards.org/news/) [Source](https://github.com/96boards/website/blob/master/news/README.md) [Data](https://github.com/96boards/website/blob/master/_data/news.yaml)
13. OpenHours [/openhours/](https://www.96boards.org/openhours/) [Source](https://github.com/96boards/website/blob/master/openhours/README.md)
14. Partner [/partner/](https://www.96boards.org/partner/) [Source](https://github.com/96boards/website/blob/master/partner/README.md)
15. Press [/press/](https://www.96boards.org/press/) [Source](https://github.com/96boards/website/blob/master/press/README.md)
16. Search [/search/](https://www.96boards.org/search/) [Source](https://github.com/96boards/website/blob/master/search/README.md)
17. Specifications [/specifications/](https://www.96boards.org/specifications/) [Source](https://github.com/96boards/website/blob/master/specifications/README.md)
18. Tutorials [/tutorials/](http://www.96boards.org/tutorials/dragonboard410c/) [Source](https://github.com/96boards/website/blob/master/tutorials/dragonboard410c/README.md)
19. Verticals [/verticals/](https://www.96boards.org/verticals/) [Source](https://github.com/96boards/website/tree/master/verticals)
19. 404 [/404.html](https://www.96boards.org/404.html) [Source](https://github.com/96boards/website/blob/master/404.md)



## Products <a name="products"></a>
To add a product please visit [this page](products.md)

# SEO settings <a name="website-seo"></a>

The 96boards jekyll site uses the [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) plugin to generate some useful meta tag information to describe pages for better seo.

## Social Media Share Images <a name="social-share-images"></a>
### Default Social Media Share Image <a name="default-share-image"></a>

To set a default social media share image the following `defaults` setting has been placed in the \_config.yml files.

Replace `[this image](https://github.com/kylekirkby/website/blob/master/assets/images/social-media-image.png)` with the default social media image of your choice.

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
