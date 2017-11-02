---
author: Manivannan Sadhasivam
comments: true
date: 2017-05-31 19:16:16+00:00
layout: post
link: https://www.96boards.org/blog/part-4-home-surveillance-project-96boards/
slug: part-4-home-surveillance-project-96boards
featured_image: aws_s3.png
title: Part 4 - Setting up your Amazon Web Service (AWS) Cloud Service
wordpress_id: 20460
categories:
- blog
tags:
- 64-bit
- 96Boards
- aarch64
- Android
- ARM
- ARMv8
- B2260
- bubblegum-96
- Cloud
- Consumer Edition
- Consumer IoT
- DB410c
- DragonBoard 410c
- F-Cue
- HiKey
- Image-Processing
- Linaro
- Linux
- MediaTek X20
- Open Embedded
- open source
- OpenCV
- OpenHours
- Reference Platform
- rpb
- Servos
- Webcam
---

# **Introduction**


Welcome to Part 4 of our ‘[Home Surveillance](https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/)’ blog series focusing on building a home monitoring system using 96Boards. In the previous blog, I showed how to implement face tracking using a Webcam mounted on a Pan and Tilt servo setup. This was all controlled by the Sensor Mezzanine and a Dragonboard 410c. In this post, we will see how to setup [AWS S3](https://aws.amazon.com/s3/) (Amazon Simple Storage Service) and stream the detected faces to through service.

Cloud communication is one of the key components in building an IoT product. At the end of the day, all processing and analysis happens in the cloud space, so getting used to a popular cloud service like AWS seems extremely beneficial, and almost mandatory.

**See other blogs from this series**

Before getting into Webcam tracking, it is worth looking at the past to get our focus organized.




  1. [Part 1](https://www.96boards.org/blog/part-1-home-surveillance-project-96boards/) - Introductory blog - Here we introduced the Home Surveillance project and outlined the roadmap to our end goal. Towards the end of blog, information about how to contribute to this project was also mentioned.


  2. [Part 2 ](https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/)- Facial recognition using OpenCV - This part focussed on getting the face detection out by running [OpenCV](http://opencv.org/) on [Dragonboard 410c](/product/dragonboard410c/). In order to make the life easier for reader's, installation steps for OpenCV 3.2 was also included. Along with the blog, a video showing the working demonstration was attached.


  3. [Part 3](https://www.96boards.org/blog/part-3-home-surveillance-project-96boards/) - Webcam tracking using 96Boards Sensors Mezzanine - This part focussed on tracking the faces in front of webcam using servo mount connected to Sensors mezzanine controlled by Dragonboard410C.




# **Hardware requirement**






  1. Dragonboard 410c


  2. USB Webcam





# **Software Dependencies**


Install the dependencies mentioned in [Part-2](https://www.96boards.org/blog/part-2-home-surveillance-project-96boards/) along with the following one:



    $ pip install boto3




# **Setting up AWS account**


Before utilizing the cloud service offered by AWS (Amazon Web Service), users need to create an account. Once the account has been created, your service will depend on the plan you choose. Amazon offers a variety of cloud services to choose from. Instructions on how to setup AWS account is given in the following link:

[https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

For the sake of this blog, I assume that the reader has an AWS account ready to use.


# **Setting up AWS S3**


[AWS S3](https://aws.amazon.com/s3/) (Amazon Simple Storage Service) is a Cloud service based on objects offered by Amazon. It incorporates simple web interface for accessing the objects and manipulating them. It could be used as a primary storage for cloud native applications, a data lake for doing Big data analysis, as a Backup/recovery system and much more… Let's see how to setup S3 for streaming data from Dragonboard 410c.


![Amazon S3 Image]({% asset_path "aws_s3.png"%}){:class="img-responsive lazyload"}




## **Create S3 bucket**






  * Go to [https://aws.amazon.com/](https://aws.amazon.com/) and select **Sign in to console**


  * **Login** to AWS using your Email and password (You’ll be redirected to console if you are already logged in)


  * Select **S3** from **Storage**_. _S3 console will get opened.


  * Click on **Create bucket** button


  * Enter Bucket name and Region in the opened window (Bucket name should be unique across all existing bucket names in S3). Click **Next**


  * If you want to customize your bucket, modify the properties otherwise keep on hitting Next until you find Create bucket button.


  * In the final window, you should see the Bucket name, region, properties and permissions. Under permissions the instance of the login account should get displayed. Then, click **Create bucket**.


  * The created bucket would get listed in the AWS S3 console.




## **Set Object policy**






  * Select the created bucket and click **Permissions** tab on top


  * Then select **Bucket policy** and paste the following policy in the text field




    {
      "Id": "Policy1495783674300",
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "Stmt1495783672125",
          "Action": "s3:*",
          "Effect": "Allow",
          "Resource": "arn:aws:s3:::homesurveillance",
          "Principal": "*"
        }
      ]
    }






  * Replace your bucket name with ‘homesurveillance’ in the above policy and click **Save**


  * Policy is essential for creating/modifying objects in the bucket. The above shown policy is just for demonstration purpose as it allows all AWS users to gain full access to the created bucket.



![Amazon S3 policy image]({% asset_path "policy-s3.png" %}){:class="img-responsive lazyload"}

**Setup Boto SDK**

Once the bucket has been created, we can upload objects to it. Easy way to do it is from the web interface. But that’s not the case with IoT solutions. We need to upload data from the target platform (Dragonboard 410c in this case). To accomplishing this task, we are going to use an SDK called [Boto](https://boto3.readthedocs.io/en/latest/index.html).

Boto is the Python SDK offered by AWS for accessing services such as S3 and EC2. Boto should be installed using the command given under **Software Dependencies (see Software Dependencies section at the beginning of this blog)** section. Before using Boto, it needs to be configured with [IAM](https://aws.amazon.com/iam/). Obtain the AWS key ID and secret key by following the instructions given in below link:

[https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)

After getting the ID and secret key, now we can configure Boto to use AWS. Paste the following content in ~/.aws/credentials hosted on Dragonboard 410c.


    [default]
    aws_access_key_id = YOUR_ACCESS_KEY
    aws_secret_access_key = YOUR_SECRET_KEY


Replace your AWS IAM key appropriately and set default region as same as what you gave during AWS account creation in ~/.aws/config


    [default]
    region=us-east-1


Now Boto has been configured with IAM credentials. We can start using the API’s for storing objects in S3 bucket from Dragonboard.


# **Stream data to AWS S3**


Now we have everything in our plate, let’s stream data to AWS S3 bucket.


    $ git clone https://github.com/96boards/projects.git
    $ cd projects/home-surveillance/part-4


Place the trained dataset and haarcascade_frontalface_default.xml to this directory



    $ mkdir captured
    $ sudo python streamface.py


When the known face has been detected in front of webcam, the first instance of the frame would get streamed to AWS S3 bucket. Login to the AWS S3 console and you can find the uploaded images under captured directory.

**P.S:** Change the name of the person accordingly in _streamface.py_


# **Conclusion**


Finally, we’re able to stream the known faces to AWS cloud from Dragonboard 410c. In the next blog, we’ll put all the pieces together to create an automated ‘Home Surveillance’ system which could be deployed in your home.



* * *





# Resources


For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/) &#124;[YouTube](https://www.youtube.com/c/96boards)

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “[Monthly Newsletter](/newsletter/)” and our “[Weekly Digest](/newsletter/digest/)”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience - [OpenHours](/openhours/). All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}


Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards and #OpenHours (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!
