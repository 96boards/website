---
author: Mani_S
comments: true
date: 2017-05-25 05:00:09+00:00
layout: post
link: https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/
slug: part-2-home-surveillance-project-96boards
featured_image: Screenshot-356.png
title: Part 2 - Facial recognition using OpenCV on 96Boards
wordpress_id: 20398
categories:
- blog
tags:
- 96Boards
- ARM
- arm32
- arm64
- ARMv7
- ARMv8
- Bubblegum
- bubblegum-96
- Cloud
- computer vision
- DIY
- DragonBoard
- DragonBoard 410c
- HiKey
- HiKey960
- Home Surveillance
- IoT
- Linaro
- Linux
- Maker
- Mezzanine
- OpenCV
- OpenHours
- PZT
- Qualcomm
- Raspberry Pi
- servo
---

# **Introduction**


Have you thought of implementing face detection on your own? How well it would be if your SBC can identify your face and take action accordingly. And yeah this is the part 2 of ‘**Home surveillance**' blog series about creating a full fledged home monitoring system using 96Boards.

In this blog, we are going to see how to implement the face recognition algorithm using [OpenCV](http://opencv.org/) on 96Boards. Never heard of OpenCV or Image processing stuff? No problem, as this tutorial covers everything right from scratch. As I said in my **[previous blog](/blog/part-1-home-surveillance-project-96boards)**, instructions available in this blog series would apply to all of our 96Boards CE family.

{% include media.html media_url="https://www.youtube.com/embed/oiEUJ50o_co" %}

**See other blogs from this series:**

  1. **Part 1:** [Introduction to 'Home Surveillance' using 96Boards](/blog/part-1-home-surveillance-project-96boards)

# **OpenCV -  Insight and Installation**


OpenCV is the acronym of '**Open Computer Vision**', an open source library for doing image processing. This library has grown big and has been used in a plethora of fields. Our aim is to install this library on one of our 96Boards CE board and use it for face detection. One of the pain points I encountered while doing this part is the installation steps. So, I thought it would be better to cover the installation steps also in this blog to help the community.


## **Hardware requirement**



  1. [96Boards CE](/products/ce/)


  2. USB Webcam

## **Software dependencies**


For this entire project, we will be using a Debian/Linux based OS on our 96Boards.

```bash
$ sudo apt-get install build-essential cmake pkg-config libjpeg-dev libtiff5-dev \ libpng12-dev libavcodec-dev libavformat-dev libswscale-dev libv4l-dev \ libjasper-dev python2.7-dev python-pip
$ pip install pillow
```



## Installation


OpenCV version which is used here is 3.2.0, and I recommend using the series greater than 3.0.0. First OpenCV and then the extra modules needs to be downloaded.

```bash
$ git clone https://github.com/opencv/opencv.git
$ git clone https://github.com/opencv/opencv_contrib.git
```

After downloading the sources, branch 3.2.0 needs to be checked out on both.

```bash
$ cd opencv_contrib
$ git checkout 3.2.0
$ cd opencv
$ git checkout 3.2.0
```

Before we start building the library, it's worth allocating swap space to avoid the situation of running out of RAM.

```bash
$ dd if=/dev/zero of=~/swapfile bs=1M count=512
$ mkswap ~/swapfile
$ swapon ~/swapfile
```

Now the Makefile needs to be generated. OpenCV uses cmake to make the installation easier.

```bash
$ cd opencv
$ mkdir build
$ cd build
$ cmake -D CMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=/usr/local -DOPENCV_EXTRA_MODULES_PATH=<opencv_contrib>/modules ../
```

Replace <opencv_contrib> with the absolute path of the OpenCV modules source we just downloaded. After executing this command, build directory would get populated. Now it's time to do the actual build.

```bash
$ make -j4
```

After building the source, library should be installed using the following command.

```bash
$ sudo make install
```

**Note: **Library would be installed in /usr/local path as we specified in cmake.


## **Let's do OpenCV**


We now have OpenCV installed in our favourite 96Boards platform. **What’s next? Face detection?** Yes, but before that, there are some steps which need to be executed to make 96Boards detect our face :)

There are 3 steps involved in implementing the face detection/recognition. First we have to create a dataset for the faces which needs to get identified. Then the captured dataset needs to be trained using OpenCV training algorithm. At the end, face detection algorithm will use the trained datasets to identify faces.

Download the python source using following command.

```bash
$ git clone https://github.com/96boards/projects.git
$ cd home_surveillance/part-2
```



## **Create dataset**


Dataset contains a bunch of images of persons whose faces needs to be detected. More number of images in different angles, the more accurate this will be. For the sake of this blog, I've limited the image count to 10. So, execute _dataset.py_ script using the following command and give the User id then move your face in different positions in front of the webcam.

```bash
$ mkdir dataset
$ sudo python dataset.py
```

Once 10 images have been captured, you can find everything under dataset directory. All of the images would be named after the User ID you have given. If the dataset needs to be created for multiple persons, execute the python file with different User ID.


## **Train the dataset**


The captured dataset can be trained using the trainer.py script. It will run through the images present inside dataset folder and will convert each image to PIL image then extract face samples from it. After that, the face samples along with the User IDs would get passed to trainer algorithm. Finally the trained dataset would be stored inside trainer folder as _trainer.yml_. This would be used in next step to implement face detection.

```bash
$ mkdir trainer
$ sudo python trainer.py
```



## Face Detection


Alright, we are on the last stage of our face detection mission :) In this step, _facedetect.py _script would be used to implement the face detection algorithm. It will take the trained dataset file _trainer.yml_ and will run prediction algorithm on the captured frames. If a face matching the dataset has been found, it will show the person's name, otherwise unknown will be shown.

**Note:** In order to show the person's name in the screen, the user has to populate the 'if' condition in facedetect.py with person's name.

```bash
$ sudo python facedetect.py
```

Hurray… :D We have just implemented face detection using 96Boards on our own. If you want to identify multiple faces, run the \_dataset.py \_script with different User IDs and images.

Alright, what's next? Implementing in your home... Yeah.. But hold on, we have plenty to come. So, stay calm and wait for the next blog series. At the end of the series, we would be having a full fledged** Home Surveillance system **using 96Boards.

**Want more? [Continue on to Part - 3 of the series](/blog/part-3-home-surveillance-project-96boards/)**.

* * *

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
