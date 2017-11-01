---
# Name of Blog Author - (In a future update this will be a reference to the authors entry in yaml db.)
author: Robert Wolff
# If you want the post to display comments assign this variable to true.
comments: true
# Date of the post - has to be in the past otherwise Jekyll will see it as a future post.
date: 2017-10-26 12:00:00+00:00
# Layout for the Post
layout: post
# Title of the blog post.
title: OpenHours ep 76 Recap - Deep Learning and Tensorflow on 96Boards
# This is the featured background image of the blog which resides under _assets/
featured_image: OpenHours.png
thumbnail_image: OpenHours-thumb.png
# Tags related this post. For use in tag filters that will be used in future updates.
tags:
- 64-Bit
- 96Boards
- OpenHours # Use this tag if you want it to be featured in the openhours blog sections.
- Bubblegum96
- HiKey
- DragonBoard 410c
- Linux
- Linaro
- ARM
- SBC
- Single Board Computer
- AOSP
- Android
- Red Hat
- Redhat
- fedora
- Open Source
- deep learning
- robert wolff
- tensorflow
- i.mx7
- meerkat
- NXP
- qualcomm
- technology
- computer
- community
---
# Introduction

This week on OpenHours we took a journey into Deep Learning and Computer Vision with the Snapdragon while focusing on both 410 and 820 chip sets. Joined by Ali Gholamloo, we will discuss his efforts on Computer Vision and Tensorflow. Of course a "deeper" look at Deep Learning using 96Boards. This episode promises to be exciting and packed full of announcements including the launch of a brand new 96Boards Consumer Edition board! You will have to tune in to find out more! Please keep reading below to find out more about our "Featured Guest" segment and be sure to join in at the end of the countdown to hear some of our exciting announcements!

With all advancement in the technology and new Soc's I believe it's the right time to add Intelligence to the embedded devices and IOT's to make them aware of their environment and interact with it. In this Project I try to just scratch the surface of Computer Vision and Deep learning on the Embedded Devices specifically on Snapdragon 410 and 820.

First I tried to use gpu to process the incoming images from camera and do some Image Processing Techniques ( like changing the format of the picture from YUV to RGB, Filtering The image colors like showing just red or blue or green or even luminance or chrominance, and doing the edge detection in x and y axis with Sober Filter) And then I used tensorflow (a machine learning library ) to train a Convolutional Neural Network model (Mobile Net )and used the trainedmodel to classify the incoming images for trained classes

I hope this will be an inspiration for others to use these embedded boards for their projects. Note that this project is implemented in C and C++ and is under Linux Debian (stretch ) operating System.

We look forward to seeing you in our next episode!

#### Links and resources

- [Ali's GitHub](https://github.com/gholamlooAli/tf410c)

# Video

{% include media.html media_url="https://youtu.be/V0I1Mi65oMg" %}

# The slideshow

- Available through this [public link](https://docs.google.com/presentation/d/e/2PACX-1vSbUoBNuH0oDirBCzLfnoh14sq-yWWwZfTVn6zWBBzxMXUDYTnWtOqy7_jhtB3egyncpkhLqx4BLfa6/pub?start=false&loop=false&delayms=3000&slide=id.gc6f73a04f_0_14)

# Chat log

```
Shovan Sargunam - SS
I can here
hear*

Rafael Christ - RC
I can hear you

jean.marc - J
do you have free time???

Robert Wolff - RW
https://youtu.be/BG_ss-sprUY
https://www.96boards.org/blog/linksprite-hikey-aosp/https://www.96boards.org/blog/zephyr-on-96boards-neonkey/https://www.96boards.org/blog/basic-threads-zephyr/

Cezar Menezes - CM
What a nice hat!

Guillermo - G
What frame rate can you get on CSI connectin?

Rajan - R
depends on the frame size
did Ali use a specific mezzanine board
for CSI

Robert Wolff - RW
Ali used the AiStartVision Mezzanine

Rajan - R
cool

Robert Wolff - RW
Project can be found here: https://www.96boards.org/projects/deeplearning/
This is Ali's project
Here is his github: https://github.com/gholamlooAli/tf410c

brian - B
shader loads *every* frame?

Rajan - R
cool I'll replicate this on QDN, thanks Robert

Robert Wolff - RW
https://www.tensorflow.org/

Rajan - R
if you use CNN, it will classify a banana as an apple

Robert Wolff - RW
fruit = fruit?

Rajan - R
not sure if anyone got that reference :P

Robert Wolff - RW
oh haha
#fakenews

Gustavo_OneRF - G
Can I use a tensorflow model, compiled from keras for example, on those boards?

Rajan - R
yep, they launched a new add yesterday showing an apple, voice over says, "some people will call it a banana"

Cezar Menezes - CM
Ali, were you able to access the Adreno GPU while using TensorFlow in the DragonBoard 410c ?

Gustavo_OneRF - G
Yes. thank you!

Robert Wolff - RW
Hey @Amit

Amit K - AK
/me waves

Cezar Menezes - CM
Thanks, Ali. Your presentation is excellent ! Congratulations!

Guillermo - G
It seems that Deep Learning / TensorFlow is usused to be trainined to look for specific objects / features. Can it be used for arbitrary images, like tracking vehicle movement, from the vehicle vantage point?
I mean watching the surrounding scene

Marcel - M
I am thinking about using a dragon board for the KinectFusion algorithm. Do you think the dragon board would be fast enough to grab the kinect data at full frame rate?

David Langford - DL
You might want to look at YOLO for that.
^the tracking of other objects

Sahaj - S
https://www.96boards.org/product/imx7-96/
Available for purchase:  https://www.arrow.com/en/products/imx796board/arrow-development-tools

Cezar Menezes - CM
Top Secret!
Q-NXP ?
Are there neural sensors in their hat?

David Langford - DL
Wll 96boards themselves ever sell a "cobbler" for hackers/developers? (gpio to breadboard cable)

Gustavo_OneRF - G
I believe that people in universities should have easier access to this boards, so we would have more developers. I am sure that in my deep learning class, for example, people would choose to develop something for embedded applications if we had development boards.

Ahmed - A
Is your deep learning class is online or not ?

Marcel - M
OneRF yeah I think so, too.

Gustavo_OneRF - G
My deep learning classes are at UNICAMP, in Brazil. We do not have online classes, but my professor probably has some online course to offer. I can check it with him.

Robert Wolff - RW
David Langford: I hope so!
I would like that

Ahmed - A
kindly, post links if it available!and thanks in advanced

Gustavo_OneRF - G
If he has not, I´ll try to convince him to do so. haha.

Ahmed - A
haha thanks too

Mani - M
Time to leave
See u guys

Robert Wolff - RW
Thanks @Mani

Gustavo_OneRF - G
Bye guys. happy Halloween.

Robert Wolff - RW
Thanks, Gustavo!

Marcel - M
Yeah! I definitively need to convince our university lecturers to use 96 boards instead of raspberry pis. We could do so many great projects and research with 96 boards. Specifically in robotics and knowledge-based systems.

Robert Wolff - RW
Marcel, which university are you with?

Marcel - M
Germany, Osnabrück. 

Rajan - R
c_mistr@qti.qualcomm.com

Robert Wolff - RW
https://www.tensorflow.org/
https://goo.gl/forms/STvwxgrBpaTFRdso2
OPENDEEPLEARNING

Ragnar. - R
bye

Marcel - M
Bye

Robert Wolff - RW
ty!
marcel
can you email me?
robert.wolff@linaro.org
maybe we can get more involved with your Uni

Ragnar. - R
oops

```
