---
author: sdrobertw
comments: true
featured_blog: true
date: 2017-06-26 12:00:00+00:00
layout: post
link: https://www.96boards.org/blog/96boards-openhours-d3-designcore-camera-mezzanine/
slug: 96boards-openhours-d3-designcore-camera-mezzanine
title: 96Boards OpenHours#59 and the D3 DesignCore Camera Mezzanine announcement
wordpress_id: 20519
image:
    featured: true
    path: /assets/images/blog/d3-openhours-img-1.png
    name: d3-openhours-img-1.png
categories:
- blog
tags:
- 64-bit
- 96Boards
- Android
- ARM
- ARMv8
- Consumer IoT
- DB410c
- DragonBoard
- Freedreno
- HiKey
- Linux
- Open Embedded
- Windows 10
- OpenHoursRecap
---
# Introduction

This special episode of 96Boards OpenHours was brought to you live from the Qualcomm Thinkabit lab in San Diego. We were joined by both Lawrence King and Rajan Mistry from Qualcomm, Jason Enslin and Scott Dunnington from D3 Engineering and over 130 community members from around the world! We couldn’t have hoped for a better turnout. During this episode we announced the new [DesignCore Camera Mezzanine for 96Boards](/product/d3-designcore-camera-mezzanine/), talked about all of it’s resources and availability, then showcased the new mezzanine running on a [DragonBoard 410c](/product/dragonboard410c/) with several cool demos(D3 Light box, and Lawrence’s ball tracking)! By the end of the broadcast, everyone got their questions answered and five lucky raffle winners took home a complete DragonBoard 410c / DesignCore Mezzanine kit, all of which were generously gifted by [Qualcomm](https://developer.qualcomm.com/) and [Arrow](https://www.arrow.com/).

If you missed it, this is your chance to get up to speed. The video, along with time stamps can be found below! I also recommend reading [this prequel blog on the D3 Mezzanine](/blog/d3-designcore-camera-mezzanine-and-openhours/) prior to jumping into this OpenHours episode. Here we cover the complete out of box experience and software walk through.

I would like to extend a special thanks to Qualcomm and Arrow for donating the kits for this amazing raffle. A big thanks to the D3 Engineering team for joining us as featured guests. Thank you to Lawrence and Rajan for being there, onsite with me, and letting us use the Thinkabit lab at Qualcomm. Of course an enormous thanks to the entire 96Boards community for joining and participating in this important episode. [See you next week!](/openhours/)

**Please take some time to explore the following OpenHours episode #59 resources:**

*   [96Boards D3 DesignCore Camera Mezzanine landing page](/product/d3-designcore-camera-mezzanine/)
*   [Prequel blog for DesignCore Mezzanine out of box experience](/blog/d3-designcore-camera-mezzanine-and-openhours/)
*   [D3 Engineering Website](http://www.d3engineering.com/solutions/embedded-vision)
*   [D3 Engineering on Linkedin](https://www.linkedin.com/company/d3-engineering)
*   [Purchase DesignCore mezzanine on Arrow!](https://www.arrow.com/en/products/d3cameramezzov5640/d3-engineering)
*   [DesignCore Mezzanine Data Sheet](https://github.com/96boards/website/blob/master/_product/mezzanine/d3camera/files/D3Eng_DesignCore_CamMezzBoard_DataSheet.pdf)
*   [DesignCore Mezzanine Quick start Guide and Schematics](https://github.com/96boards/website/blob/master/_product/mezzanine/d3camera/files/D3Eng_DesignCore_CamMezzBoard_OV5640_QuickStart_Guide_v1.pdf)
*   [DesignCore Mezzanine Wiki](https://github.com/D3Engineering/410c_camera_support)
*   [Linux kernel qcomlt](https://github.com/D3Engineering/linux_kernel_qcomlt)
*   [pyimagesearch blog related to Lawrence King’s demo](http://www.pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/)
*   [Qualcomm Developer Network](https://developer.qualcomm.com/)

Please scroll down for a link to this episode on YouTube. You can also find all the important time stamps and entire chat log.

# Questions and Important Time Stamps

{% include media.html media_url="https://www.youtube.com/embed/s3nuVJmf9B0" %}

```
0:45 - Introduction to Location and On-site guests (Lawrence King and Rajan Mistry)
Lawrence is an engineer for Qualcomm who has worked on the DragonBoard 410c for some time now. Adding to the quality of its software and contributing to the community with demos and other fun projects. Rajan Mistry is the applications engineer for Qualcomm Developer Network and works on cool projects using the DragonBoard 410c and participates in Qualcomm related events.

2:10 - Episode breakdown

2:30 - A look at last week’s episode
Last week we spoke with Mani (Applications Engineer for 96Boards/Linaro) about his Home Surveillance project, all five parts. Etc… etc…

3:34 - Rules for participating in giveaway contest

4:43 - Sarah posted link for google form

6:18 - Introduction to D3 Engineering team

8:20 - Introduction to Camera Mezzanine from D3
D3 Camera Mezzanine is developed by D3 Engineering in partnering with Arrow and Qualcomm to allow Embedded vision applications on Dragonboard410c. It gives you the direct access to 2 port MIPI CSI interface and also breaks out other peripheral access pins (I2C, SPI, GPIO) etc.. It makes really a great platform for doing Embedded vision applications on Qualcomm platforms.

9:15 - Why 96Boards / Dragonboard 410c for this particular Camera board?
D3 wants to enable Embedded vision applications on lot of powerful SoC’s and 96Boards is a great way to do that with a standardized interface and with a one piece of hardware. In particular DragonBoard410c has lot of video capabilities in its SoC and really is a natural thing for us to port.

10:00 - Lawrence King give his insight on Camera Mezzanine initiative

11:35 - Camera Mezzanine demo from D3 Engineering
https://github.com/D3Engineering

You can see two repositories:

Linux_kernel_qcomlt - Linux kernel with all the modifications required for D3 Camera Mezzanin
410c_camera_support - Wiki, example applications and scripts for using this Mezzanine.

14:08 - Question: In order to get this Camera Mezzanine working with DragonBoard 410c you are using a custom built boot and root file system image, right?
D3: Yes. Right now it requires a custom boot and root file system images which you can download from github page. But eventually we like to get this into Linaro base release so that the board can work out of box.

14:42 - Nicholas Dechesne, Qualcomm Landing team lead from Linaro explains the future plans for this board support in Linaro release
We are actually working on getting this board support into our Linaro release. You can expect these boards will work out of the box in next or one after release,

15:28 - Continuation of demo from D3:
Shows the gstreamer example by executing a script on custom image setup and also points out the performance limitation as of now with UYUV Video Encoding format.  
Executes another example and shows improved video performance with YUV:420 format with 17-20 fps using custom OpenGL ES shader. Also shows some of the patterns built into the image sensor and toggling between switching ON/OFF autofocus.
All instructions are available on Wiki and source code is embedded into the image itself.

19:46 - Question: How many cameras are used for this demo?
This is a single camera demo and we have verified that these two cameras works with 4.4 release and we are yet to check with 4.9 release.

20:34 - Jason shows real world example using D3 Camera Mezzanine and DragonBoard 410c
Shows the two way dash cam mount which has the DragonBoard and Camera Mezzanine running 4.4 release. This was created for one of D3’s customer and demonstrated within two weeks.

22:29 - Question: Right now you are supporting OV5640. Do you plan to support more cameras in future?
Yes. D3 is working on bunch of different camera sensors ranging from 1MP to 25MP. Actually we would like to get the input from the community based on market needs and we can use the apt sensors on the board. There are lot of different directions it can go, we can add one more interface on the existing board or change the camera connector to accommodate different camera sensors.
Another interesting thing is, D3 is going lot of work with CMOS radar chips. We were thinking of creating a demo by putting one of the radar on secondary camera interface and showing the camera/radar fusion.

23:50 - Question: How are you accessing serial and other peripherals using this board?
I am using the Audio mezzanine board in between DragonBoard and Camera Mezzanine for accessing serial output and all. Actually D3 board is not changing the voltage levels, so it should be possible for it to use with any other Mezzanines.

25:04 - Question: What is kind of camera sensors D3 using for automotive solutions?
For automotive solutions , we work with sensors from Sony, Omnivision etc… We are doing lot of work with OV10640, Sony’s IMX 224, IMX 290 (1MP and 2MP) etc…

26:12 - Question: Has any company looked at D3 for agricultural use?
We work with lot of different vertical markets but not anything in agriculture as of now.

26:52 - Question: Do you have link to potential radar module?
Please go to D3 Engineering page (https://www.d3engineering.com/) Solutions->Autonomous Systems, we have some radar modules.

27:35 - Question: Any GPS tracking video from D3?
We haven’t done anything with GPS on this yet.
Lawrence: DragonBoard has onboard GPS.

28:12 - Question: Any plans on collaborating with FLIR?
Yes, We have done some stuffs with them. We worked with near IR and thermal space cameras. But it depends upon customer needs.

29:44 - Question: Any level shifters on this Camera Mezzanine also how about the pin alignment on it?
There is no level shifter and one I2C port is directly going to secondary camera, so only one I2C bus is accessible via expansion header on the Mezzanine.

30:48 - Question: Any test with 360 camera?
We worked with camera but not on this board. Also we are working on some stitching algorithm for 360 camera support.

32:11 - Question: Is there any model to work with low light/infrared surveillance?
Not sure about the model you are asking for. But you are given privilege to modify the hardware and software according to your needs.

33:14 - Question: For someone who is novice, what is the benefit of this platform over others? Online community, Sw/HW support etc..
Well you can use some of the features of MIPI cameras like autofocus and also it is really convenient to package it with dragonboard in a box like shown earlier.
We also provided github examples for using gstreamer and opengl etc… You can also use this kit along with dragonboard for path to production.

35:40 - Question: Is the 3d printed case source files available online?
I haven’t made it available yet but maybe I can do that. Also, we have posted board schematics in Arrow website.

37:20 - Demo from Lawrence king
I got patches from D3 for the camera mezzanine and 96Boards for hardware downscaler to reduce the size by 480x270. That image will be passed to OpenCV for tracking a ball.
Source code is available here

43:12 - Question: Can you provide me an update on leveraging new apps using various types of sensors?
I’m not sure about whether various sensors refers to different images sensors or other sensors. But what we have is a camera sensors on board and we have lot of other sensor support like Radar sensor, other sensor in pipeline.
Rest of the peripherals are also exposed on board which could be used for other tasks.

45:28 - Question: Any support to add 4 sensors on Mezzanine?
DragonBoard only has two CSI interfaces but you can use two dragonboard to connect 4 sensors and do multiplexing.

46:29 - Question: Are most people doing all images processing on board or they sending the pictures to cloud for manipulating?
The ball tracking demo you just saw ran entirely on Dragonboard nothing on cloud. It really depends on what kind of applications you are using. Dragonboard provides good processing power so you can do most of work on board itself.
I have even compiled the kernel entirely on Dragonboard itself.

49:50 - Question: Are there any API’s available to use this Camera Mezzanine?
Right now we are using v4l2 for capturing frames and Gstreamer/OpenGLES for displaying. Also, there is nothing custom in userspace, so any linux distro should work with our kernel modifications.

51:28 - Question: Any API’s available to use machine learning algorithm like Tensorflow from google?
Not really much we are doing for Machine learning as of now.

52:10 - Question: Is it possible to preprocess the camera image in ISP before it gets to CPU?
That is something we would like to enable, we are working with Qualcomm and 96Boards to enable that feature.

53:10 - Question: Can the Mezzanine supports custom lens and will there be any work for using them in pythography?
You can use any sensors which plugin into the sensor port on board.

54:52 - Question: Why did you choose shorter border 54mm to align the cameras instead of longer boarder 84mm?
Problem with 84mm is on one side you’ll have all the HDMI, USB cables  and on other side edge is blocked by 40 pin connector. So, probably is a good choice.

57:44 - Question: Why didn’t you leave the camera mezzanine close to Dragonboard’s RF antenna open?
Yeah, it may reduce the GPS sensitivity. Well take it as a feedback and probably incorporate in next revision.

1:00:00 - Raffle Winners announcement from Sarah
Thomas Hoppe, Tyeth Gundry, Keith Lee, Temilola Aberidigbe, Ali Gholamloo

1:02:53 - Question: Any chance to get the whole bundle (Dragonboard , D3 Camera mezzanine, power supply)?
It is not currently available on Arrow website, but there are plans to provide soon.

1:05:10 - Question: What is the url for embedded video consultants from this company?
D3 Engineering Embedded Vision Solutions: https://d3engineering.com/solutions/embedded-visionD3 Github Camera Mezzanine Board Wiki: https://github.com/d3engineering/410c_camera_support/wiki

1:05:53 - Question: Any plans to use hardware encoder/decoder on Dragonboard instead of OpenGL?
We like to enable that feature and that is in pipeline.

1:07:13 - Question: Is the tracking ball demo tried with higher resolution with HDMI off?
HDMI was on and it does run at higher resolution but the frame rate drops to 5fps for 1080p

1:07:50 - Question: What is the patch applied with the kernel for hardware?
Those patches are for using the hardware descaler.

1:08:45 - Question: How long does the kernel compilation take on Dragonboard?
Everything from setting swap space to booting the kernel took 2 hours.

1:09:30 - Question: Is the GPU used to run OpenCV for demo and is that API avaialble?
Yes and Yes. When you build OpenCV it will ask for GPU support.

1:11:00 - End of Show

```

# Chat Log

```
Seelan - S
Hi
To all

Gerardo García - GG
hi

Naresh - N
Hello

d pavan kumar reddy - DR
hi
hello

Curtis Mayberry - CM
hi

Seelan - S
best site to learn IoT basics

d pavan kumar reddy - DR
yeah

Seelan - S
yes

Gerardo García - GG
any video yet?
sorry to break the seen 22 number of participants on a june 22nd... do not see the video. good conference

Ilo Rivero - IR
hi

Seelan - S
Hi
bye to all

Oksana - O
are there technical difficulties? No video or audio so far?

Ilo Rivero - IR
No, I have video and audio

Rajesh - R
hey

Ilo Rivero - IR
Hey Rajesh, Im listening what you are saying

Rajesh - R
Is something wrong with the audio? Or is it just me?

Tyeth - T
Took me so long to realise that was mostly repeating "Trial" in the background, evaluation copy someone?

Ilo Rivero - IR
Yes, Im listening Rajesh repeating "Trial"
Mahesh Kumar Kodanda - MK
now, i can hear

Rajesh - R
Okay , I am able to listen you guys noe

Mahesh Kumar Kodanda - MK
still L in the background

d pavan kumar reddy - DR
hi

CEZAR - C
Hello, everyone.Arriving early to reserve my seat

d pavan kumar reddy - DR
no audio
i am not getting audio

Rajan Mistry - RM
Hi Pavan, we have audio

Sahaj Sarup - SS
sup?

@Bayluseme_ride
Sahaj, I asked u, where u got the amlogic 905 soc..?

Paolo - P
Hello everybody!

Sahaj Sarup - SS
khadas vim?its available at gearbest

@Bayluseme_rider
okay, thanks!

Robert - R
Pallav please stop I muting yourself, unless you plan to speak

ali - A
hi every one

Marco - M
Hello

Abdul - A
GE everyone!

thiagolima - T
hello.

Lokesh Chowdary - LC
hello all

Sarandos - S
hi all

Sahaj Sarup - SS
20 at t -3.... nice

thiagolima - T
thiago lima here . hi all!

d pavan kumar reddy - DR
hi all

Ilo Rivero - IR
Hi all!!!

Rajesh - R
Well I cant hear you again

Oscar - O
Hola

Mani - M
Good to see Lawrence again

Sahaj Sarup - SS
43... dang

@Bayluseme_rider
hi mani, good to see u live..

Mani - M
@Bayluseme_rider: lol. Good to have you too

Shovan Sargunam - SS
http://linaro.co/96byt

Sarah Levine - SL
https://www.youtube.com/c/96Boards
Here is the link to the google form for today's giveaway!
https://docs.google.com/a/linaro.org/forms/d/1vJUS0Irl2Gu3AvE5xVFbmwBIoYfknmzGoqn3h4KG-qA/edit

Sahaj Sarup - SS
permission issue with the form

Kurt Taylor - KT
"You need permission"

Guillermo - G
This form can only be viewed by users in the owner's organization.

Justin - J
I don't see the link

Barry - B
Yep. I'm seeing that too

Nicolas Dechesne - ND
it worked for me..

Sahaj Sarup - SS
done

Mani - M
I fixed

Kurt Taylor - KT
Works now

Mani - M
Cool

Sarah Levine - SL
https://docs.google.com/a/linaro.org/forms/d/1vJUS0Irl2Gu3AvE5xVFbmwBIoYfknmzGoqn3h4KG-qA/edit

Lee - L
Confirmed working

Curtis Mayberry - CM
works

Sarah Levine - SL
raffleopen0101

Oscar - O
How can I get my blue jean handle?

alex - A
ok

Curtis Mayberry - CM
How can I get my blue jean handle?

ahmed - A
yes

Justin - J
Where can i find the link? I don't see it.

Mohammad - M
I have the same problem how can I get jean handle?

Tyeth - T
First guy = Oscar, 2nd = Curtis Mayberry 3rd=Mohammad
Whats mine?

Ilo Rivero - IR
https://docs.google.com/forms/d/e/1FAIpQLSfQ4d8LHtyP8RBU4q36-wDAeKHX_hshR2IuFAbwaZ0pNzOudQ/viewform?edit_requested=true

Curtis Mayberry - CM
Thanks

Temilola - T
Thanks

Mohammad - M
Thank

Guillermo - G
What is the bluejeans handle #?

Lukas - L
hello

Temilola - T
Whats mine?

Tyeth - T
@Guillermo = Guillermo

Kurt Taylor - KT
look in the chat tab for yourself

Tyeth - T
@Temiola = Temilola

Curtis Mayberry - CM
Is raffleopen0101 the Entry Code?

Rajesh - R
BTW I joined as a guest, So where exactly I can find my Blue Jeans handle

Tyeth - T
=Rajesh

Sarah Levine - SL
the blue jeans handle is your bluejeans user name that will come up to identify you

Oscar - O
How can I get my blue jean handle? And the Entry Code?

Lee - L
Entry code - raffleopen0101

Guillermo - G
thanks!

Marco - M
Thanks

Lee - L
BlueJeans Handle - the name you use on bluejeans

Sarah Levine - SL
no problem!

ali - A
my bliue geans handle

Sarah Levine - SL
https://github.com/d3engineering/410c_camera_support/wiki

alex - A
mine is alex?

Lee - L
yes

Todd Thal - TT
Google Doc asking for permission and end of form asking for code

Sarah Levine - SL
above is the link to d3 mezzanine board

Todd Thal - TT
How does one get this

Tyeth - T
Entry code - raffleopen0101

Oscar - O
Thanks a lot for your help.

ali - A
what is my blue geans handle

Lee - L
ali

alex - A
my entry code?

Justin - J
I'm confused....where is the link to enter the raffle?

Lee - L
https://docs.google.com/forms/d/e/1FAIpQLSfQ4d8LHtyP8RBU4q36-wDAeKHX_hshR2IuFAbwaZ0pNzOudQ/viewform

Justin - J
thanks =)

Ilo Rivero - IR
entry code raffleopen0101

Lee - L
Entry code = raffleopen0101

Justin - J
what is a bluejeans handle?

Sarah Levine - SL
https://github.com/d3engineering/410c_camera_support/wiki

Bob John - BJ
Justin, you are Justin.

Dieter - D
is the video shaky only at my end?

Justin - J
understood =)

Tyeth - T
@my bluejeans handle?, just testing my name.=Miguel Angel

Sahaj Sarup - SS
click the participants tab and you can see your handle at the top

Rajan Mistry - RM
handle is your BlueJeans nameEntry code = raffleopen0101

Todd Thal - TT
Sarah I had trouble submitting on my laptop...looks like iPhone might be easier...how can I tell if I was entered or not?

Norma - N
HI i am Norma Entry code - raffleopen0101

Pallav Tripathi - PT
can anyone tell me what is BlueJeans Handle in google forms

Todd Thal - TT
Sarah am I entered ? (Name Thal) or should I try on iPhone?

marouane - M
it s your name entry in blue jeans

Pallav Tripathi - PT
like one it asked me in startin...

Todd Thal - TT
I don't know I have always used my iPhone ...today I tried the windows app for bluejeans seems clumsy..ironically iPhone "seems" to be better..

Nicolas Dechesne - ND
well, iphone tend to be better, most of the time, no?

Todd Thal - TT
My iPhone just logs me in from coursera application

Sarah Levine - SL
https://docs.google.com/a/linaro.org/forms/d/1vJUS0Irl2Gu3AvE5xVFbmwBIoYfknmzGoqn3h4KG-qA/edit#responses

John - J
How do I find the blue jean "name entry"?

Sarah Levine - SL
raffleopen0101

Mani - M
Nico: Good to see you in OpenHours

Todd Thal - TT
Sarah I will attempt on iPhone (NOT meaning to double entry..)

Sarah Levine - SL
10 more minutes to enter!

Nicolas Dechesne - ND
Mani: well, i couldn't *not be* there this time ;-)

Mani - M
Your presence makes it all :D

steve b - SB
my last dragon board died mysteriously, i blame Arrows manaufacturer

Mani - M
raffleopen0101

vamsi - V
raffleopen0101

Joe - J
raffleopen0101

Bob John - BJ
As a colleague once said, that's "raffle open" all one word, all lower case, then a capital zero, one, capital zero, one.

Rajesh Kulkarni - RK
Thanks !

Bob John - BJ
He'll never live it down.

Rajan Mistry - RM
lol bob

Joe - J
My last dragonboard had GPS issues

Tyeth - T
Yes please

Sarah Levine - SL
5 more minutes before the giveaway closes!

Tyeth - T
Got a link to potentially compatible sample radar thing?

Sahaj Sarup - SS
D3, any plan in collaborating with flir ?

Ilo Rivero - IR
Nice board!

Todd Thal - TT
Has any company looked at D3 for agriculture use?
Is there any gps tracking with the video from d3?

Sahaj Sarup - SS
D3, any plan in collaborating with flir ?

Mani - M
Does the board has level shifters for LS header?

alex - A
Any test with some 360 camera?

Tyeth - T
Thanks
Just keen to dip my head in

Ilo Rivero - IR
Is there a model to work with low light / infrared for surveillance?

Justin - J
For someone who is a novice, what is the benefit of this platform over others? online community, SW, HW, etc. support?

steve b - SB
are most people developing python algorithms for picture identification from d3 computer-vision on the board or are they sending raw data to the cloud and running scripts there to analyze pictures?

Todd Thal - TT
Reason asked ag machinery runs $400,000.00-$600,000.00+ and rural theft is uncreasing..(note latest Porsche sports car only costs $150,000.00...; )

Norma - N
Can you provide an update on leveraging new apps using various types of sensors?

Sarah Levine - SL
The giveaway is now closed! Thanks everyone who entered. I will be randomly generating 5 winners!

Guillermo - G
For agricultural applications you need a multy  monocromatic camera solution with at least 4 wavelength filters R,G,B, IR. Any chance to increase the support to 4 cameras?

Omar - O
hi Robert, question. Are there any library/APIs to use for this camera mezzanine?  And what's the scope of these?

Tyeth - T
@Guillermo: There was a cucumber picker that used a green spectral camera, and a normal camera.

Todd Thal - TT
Any api's to tie into standard machine learning algorithms or say "tensor flow" from google?

Tyeth - T
I thought another one used two different spectra specific cameras / filters.

marouane - M
can the mezzanine camera support custom lenses and will there be a development of one that could be used in photography

CEZAR - C
Hi, It's a very cool mezzanine. Nicely designed PCB, I noticed.Two Questions I have:[1] Why did you choose the shorter border of the Mezzanine (54mm) to align the cameras? Wouldn't it be better to use the longer border (85mm)?[2] Why didn't you leave the Mezzanine are close to the DragonBoard 410C RF antennas region clear of ground planes or metal parts? Didn't it compromise the RF performance of WiFi, Bluetooth or GPS of the DragonBoard 410C?

Todd Thal - TT
What's the URL for the embedded video consultants?
Any developer pages/github for this company ?

Sahaj Sarup - SS
any plans on working with the internal hardware video decoder/encoder of the 410c for better performance rather than opengl?

Sarah Levine - SL
5 winners have been picked, stay tuned until the end of the episode where I wil announce the winners

Todd Thal - TT
Can all the speakers give their contact information at the end?

Amit Kucheria - AK
bouncing ball?

Nicolas Dechesne - ND
Lawrence: really cool stuff!

ali - A
will you provide the source code

alex - A
are you using wap memory on this dragonboard?
swap

Mani - M
alex: i don't think swap space is necessary here

Norma - N
Different sensors in general, but if you can share on the dif. camera sensors. Thanks!

Tyeth - T
@Lawrence: Wicked, did you try higher resolution outputs with the hdmi off? Also whats the crack with the hardware descaler, it sounds like something that was software before now (you mentioned patches)?

Sahaj Sarup - SS
for 4 cams it should be possible to multiplex between to, i have seen it for the raspi but could also be specific to hardware

steve b - SB
cool thx!

Deepak Mishra - DM
Wow.. thats cool.. how much time it took to compile kernel ?

Sahaj Sarup - SS
todd's camera game is strong

steve b - SB
hail cezar

Guillermo - G
For Robert Wolf, in your demo, is the GPU used to run the open CV algorithm?, and more to that, is there an API available to utilize it?

Shovan Sargunam - SS
You can see it here
https://www.96boards.org/specifications/
The Consumer Edition (CE) Camera Module Interface Addendum --> https://linaro.co/camera-spec

Todd Thal - TT
Ceasar's contact info?

CEZAR - C
Ok. Thanks for the answers !

ali - A
i'm here
correct

Tyeth - T
Here

Temilola - T
here
its ok

Thomas Hoppe - TH
Ohhhyea

Keith Lee - KL
Here

Christine Jorgensen - CJ
Sorry but have to dash for another call.  Great show!

Bill - B
yup.. I am here

Abdul - A
congrats to all winners!

Joe - J
Where are the winners announced?

Sarah Levine - SL
D3 Engineering Embedded Vision Solutions: https://d3engineering.com/solutions/embedded-visionD3 Github Camera Mezzanine Board Wiki: https://github.com/d3engineering/410c_camera_support/wiki

Thomas Hoppe - TH
sorry dropped out right when I was announced

Ilo Rivero - IR
Thank you, great show!!!!

CEZAR - C
Thanks, Robert Wolff. Thanks D3 Engineering folks. Thanks everyone for the conversation.My contact: cezar.menezes@live.com

Guillermo - G
Great show Robert, congrats!

Vivek - V
Yeah!

Tyeth - T
Thanks Scott and Jason

Thomas Hoppe - TH
many thx to Linaro

Norma - N
Thanks, great meeting.

Don - D
thanks; (ranganath.p@gmail.com)

Mohammad - M
Thanks

Vivek - V
wheres the form?

ali - A
is it about 820 (the announcement)
I'm very  curios

CEZAR - C
The tracking ball demo is great! I'm curious to review the source-code and learn some performance tricks.
Thanks!

ali - A
inforce already has it

Bill - B
820 Dragonboard will not be available for sale until the software is approved by Qualcomm

Sahaj Sarup - SS
for 4 cams it should be possible to multiplex between the two, i have seen it for the raspi but could also be specific to the hardware and interfaces

Bill - B
yup

CEZAR - C
Sure. I do need to purchase their book (pyimagesearch) ! Thanks!

Bill - B
you could also use an FPGA to do the muxing

Tyeth - T
Have you played with virtual channels @scott+Jason

Deepak Mishra - DM
I need some suggestions.. I have one IR LED glowing 10 -12 mtrs far and I want to track that using a cam.. any suggestions?

Ali - A
why did you choose python over c for ball tracking

Todd Thal - TT
What the URL for the blog with the videos for the ball demo

Guillermo - G
with an FPGA in the middle you could buffer frames to preserve the frame rate, if the bandwith of the link to the CPU allows it.

Deepak Mishra - DM
Ok thanks for the suggestions..

Shovan Sargunam - SS
Have you subscribed to 96Boards youtube? https://www.youtube.com/96boards

Anthony E - AE
How does the D3 DesignCore camera mezzanine compare to the AIStarVision MIPI Adapter Mezzanine?  I'm not familar with either, just curious.

David Fox - DF
http://www.pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/

Todd Thal - TT
Are you guy working with all the makerspace places (meet ups) like http://boulderhackerspace.com
Or
http://www.losalamosmakers.org

Anthony E - AE
Good information.  Thank you!

Todd Thal - TT
Or
http://www.techshop.ws/ts_menlo_park.html
note "square"
Was invented in the mento park tech shop makerspace

Scott Dunnington - SD
Jason's contact information: Jason Enslin, Product Manager, Embedded Vision; jenslin@d3engineering.com;

CEZAR - C
I'm leaving here a link a simple demo video of one of our projects. This demo uses 2 MIPI-CSI cameras (with AISTARVISION MIPI Adapter mezzanine) and explores some ideas of stereo vision and face recognition. I appreciate any feedback you may have!https://contest.embarcados.com.br/wp-content/uploads/2017/05/DragonWally_demo_1_english_mini.mp4?_=2

Todd Thal - TT
I will volunteer to list if I can get a free combo kit
(Like today's giveaway)...heck
Maybe a
Bit of volunteer work
For a linaro t shirt ...; )

Shovan Sargunam - SS
About Linaro: http://linaro.org/about

Ilo Rivero - IR
Hi Bruno!!!

ali - A
thank you everybody and have a great day

irving - I
Yes, it' me

Ilo Rivero - IR
FIne!!!

Rafael Campos - RC
Hi!! I am in Brazil also

CEZAR - C
Hi. Bruno. I'm well thanks!

Rafael Campos - RC
We are ok. thanks

Ilo River - IR
Just working in the project

Todd Thal - TT
Looks like Bruno is living the good life at Qualcomm Brazil office...; )

Tyeth - T
Thanks again

Sahaj Sarup - SS
Robert did you try the zram stuff

Bruno Evangelista - BE
Yes Todd... The office here is very cool... I can share some pictures if you want, send me an email brunoe@qti.qualcomm.com

```
