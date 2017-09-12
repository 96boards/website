# How To edit/submit a 96boards Project
This document will help you add a new project to the 96boards Jekyll Site.

# Project Images
## Thumbnail Images
The thumbnail image for your project should be named thumb.png and located in the `images/` subfolder for your project.
If no thumb.png is provided for the project the build will fail so please add a placeholder thumb.png found [here](thumb.png).
## Carousel Images
Images that are displayed on the project image carousel must be located in the `images/` subfolder for your project
and listed in the front matter of your project README.md file.

```YAML
images:
    - image1.png
    - image2.png
    - image3.png
    - graph.png
```

The above is an example of how to add your images to the project image carousel.

## Content Images
To include an image in your project markdown use the `image` include as follows:
```
{% include image.html name="name_of_your_image.png"  alt="My image alt tag" project=true %}
```

This include will find the image name you provide it in the images subfolder of your project.

`The following formats are accepted for youtube videos - https://www.youtube.com/embed/bbMp3puXkVg or https://www.youtu.be/bbMp3puXkVg `

# Project Videos
To include a youtube video in your project simply use the `media.html` include as follows:
```
{% include media.html media_url="https://www.youtube.com/embed/bbMp3puXkVg" %}
```
`The following formats are accepted for youtube videos - https://www.youtube.com/embed/bbMp3puXkVg or https://www.youtu.be/bbMp3puXkVg `
