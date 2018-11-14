---
title: OpenFace Installation On HiKey Lemaker edition 96Boards
author: Theodore Grey

date: 2018-11-14 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/Pic1-OpenFace-Demo.png
    name: Pic1-OpenFace-Demo.png
    thumb: Pic1-OpenFace-Demo.png
categories: blog
tags: 96Boards, AI, FacialRecognition, OpenFace, Tensorflow, OpenCV, Installation

---

# OpenFace Installation on HiKey Lemaker edition 96Boards

“OpenFace is a Python and Torch implementation of face recognition with deep neural networks and is based on the CVPR 2015 paper FaceNet: A Unified Embedding for Face Recognition and Clustering by Florian Schroff, Dmitry Kalenichenko, and James Philbin at Google.” - [OpenFace](http://cmusatyalab.github.io/openface/)


Building OpenFace requires the installation of various programs including: **OpenCV**, **dlib**, and **torch**. This tutorial is based on several guides for OpenFace, OpenCV, dlib and Torch:

- [OpenCV Home Surveillance guide](https://github.com/96boards-projects/home_surveillance)
- [OpenFace (and dlib) guide](http://cmusatyalab.github.io/openface/setup/) from the official OpenFace website
- [Torch guide](http://torch.ch/docs/getting-started.html#_)

# Part 1, Required Packages:

Begin by making sure your HiKey is up to date:

`$ sudo apt-get update`

`$ sudo apt-get upgrade`

`$ sudo apt-get -f install`

The following install command should install all packages which OpenCV is dependant on:

`$ sudo apt-get install build-essential cmake pkg-config libjpeg-dev libtiff5-dev libpng12-dev libavcodec-dev libavformat-dev libswscale-dev libv4l-dev libjasper-dev liblapacke-dev python2.7-dev python-pip python-setuptools libgtk2.0-dev python-numpy`

If one of these installation fails you may need to install them individually

`$sudo apt-get install <Required Packages>`

Required Packges:

- build-essential
- cmake
- pkg-config
- libjpeg-dev
- libtiff5-dev
- libpng12-dev
- libavcodec-dev
- libavformat-dev
- libswscale-dev
- libv4l-dev
- libjasper-dev
- liblapacke-dev
- python2.7-dev
- python2.7-dev
- python-pip
- python-setuptools
- libgtk2.0-dev
- python-numpy

Dependencies for OpenFace:

`$sudo apt-get install curl git graphicsmagick libssl-dev libffi-dev python-dev python-scipy python-nose python-protobuf python-openssl wget zip`

if any of the installs fail you may need to install them individually:

`$sudo apt-get install <Required Packages>`

Required Packages:

- curl
- git
- graphicsmagick
- libssl-dev
- libffi-dev
- python-dev
- python-scipy
- python-nose
- python-protobuf
- python-openssl
- wget
- zip

The following pip install commands install OpenFace Python dependencies using PyPI the python package index. Alternatively $ sudo apt-get install python-<package name\> can be used to download the packages from the Ubuntu repositories but these packages could be out of date.

`$ sudo apt-get update`

`$ pip install pandas`

`$ pip install scikit-learn`

`$ pip install scikit-image`

Final OpenFace Dependencies:

`$ sudo apt-get install libopenblas-dev liblapack-dev`
`$ sudo apt-get install libboost1.55-all-dev`

Cleaning up the packages:

`$ sudo apt-get clean`

`$ sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*`

# Part 2, Building OpenCV:

OpenCV (Open Source Computer Vistion) is an open source library for image processing, designed for computational efficiency and aimed at real-time computer vision.

In order to install OpenCV on the HiKey a [guide](https://github.com/96boards-projects/home_surveillance/tree/master/part-2) written by Manivannan Sadhasivam was used.

Note when doing the demo: The current HiKey Kernel (linux-image-4.4.0-135-arm64) has some bugs which cause the HiKey to be unable to run low and high speed usb devices simultaneously. This means if a usb keyboard is plugged in while attempting to use a usb video camera (as required for the following OpenCV demo) the camera will be forced into low speed mode and exceed its allowed bandwidth.

In order to get around this issue a UART Sonic Screwdriver was used to connect the HiKey to a host computer. Alternatively using SSH from your host computer to the HiKey should work. If using UART or SSH to access the HiKey make sure to see the Errors and Issues section.

**OpenCV Installation**:

`$ git clone https://github.com/opencv/opencv.git`

`$ git clone https://github.com/opencv/opencv_contrib.git`

`$ cd opencv_contrib`

`$ git checkout 3.2.0`

**Creating a Swapfile:**

If the system runs out of RAM during a compilation a swap file may be necessary to prevent fatal errors.

`$ dd if=/dev/zero of=~/swapfile bs=1024 count=1048576`

`$ sudo chown root:root ~/swapfile`

`$ sudo chmod 0600 ~/swapfile`

`$ sudo  mkswap ~/swapfile`

`$ sudo  swapon ~/swapfile`

`$ vim /etc/fstab`

Add the following line:

~/swapfile none swap sw 0 0

Save and exit.

**Building the source:**

In the opencv directory:

`$ mkdir build`

`$ cd build`

`$ cmake -D CMAKE_BUILD_TYPE=RELEASE -D BUILD_NEW_PYTHON_SUPPORT=ON -D BUILD_PYTHON_SUPPORT=ON -D WITH_GTK=ON -D BUILD_EXAMPLES=OFF -D BUILD_opencv_apps=OFF -D BUILD_DOCS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_TESTS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local -D ENABLE_PRECOMPILED_HEADERS=OFF -D OPENCV_EXTRA_MODULES_PATH=<opencv_contrib>/modules ../`

(Replace <opencv_contrib\> with the path to the cloned directory opencv_contrib)

Begin the build for opencv with 2 threads.

`$ make -j2`

Install the compiled binaries to a default location:

`$ sudo make install`

**Verify the OpenCV Installation: Demo example**

This demo will require a USB camera. A logitech hd pro webcam C920 was used during testing.

```
$ git clone https://github.com/96boards/projects.git
$ cd projects/home_surveillance/part-2
```

**Creating a dataset:**

`$ mkdir dataset`

The dataset.py script will assume that /dev/video0 is the source of the USB webcam. It could be different for each board, so to find the correct video source execute the following command:

`$ ls -lrt /dev/video*`

The script will give a prompt to enter a user ID. The user ID should be an number ex. 1. If multiple faces need to be detected run the script multiple times with different user ID’s.

**Training the dataset:**

Create a trained dataset model for face recognition

```
$ mkdir trainer
$ sudo python trainer.py
```

This script creates a trainer.yml file inside trainer directory which will be used for facial recognition.

**Implementing face detection:**

`$ python facedetect.py`

Note: For changing the name of the person detected, replace the default “Mani” inside the facedetect.py script with the name of the corresponding person:
Ex: change ID to

```
if(Id ==1): 
   Id=”Theo”
```

If multiple faces need to be detected, add if statements with corresponding Id's.

***Errors and Issues when using UART or SSH:***

GTK-Warning:

If you run the command $ python dataset.py and receive the following warning causing the program to crash: 

Gtk-WARNING **: cannot open display

Make sure you are not the root user or in the root directory and run the following:

`$ export DISPLAY=:0`

Power-Save Mode:

If there is no keyboard connected to prevent your screen from entering power-save mode you do the following after exporting the display:

```
$ xset s off
$ xset -dpms
```

#Part 3, Building dlib:

“Dlib is a modern C++ toolkit containing machine learning algorithms and tools for creating complex software in C++ to solve real world problems.” - [dlib.net](http://dlib.net/)

In order to install dlib make sure the swapfile is still running or the installation will fail. For installing dlib I created a new 2GB swapfile.

Download the [dlib package](https://github.com/davisking/dlib/releases/download/v18.16/dlib-18.16.tar.bz2) from the OpenFace website:

``$ wget https://github.com/davisking/dlib/releases/download/v18.16/dlib-18.16.tar.bz2``

Unzip and install the dlib package:
```
$ mkdir -p ~/src
$ mv dlib-18.16.tar.bz2 ~/src
$ cd ~/src
$ tar xf dlib-18.16.tar.bz2
$ cd dlib-18.16/python_examples
$ mkdir build
$ cd build
$ cmake ../../tools/python
$ cmake --build . --config Release
$ sudo cp dlib.so /usr/local/lib/python2.7/dist-packages
```
At this point you should be able to start the python interpreter and successfully run 
```python
>> import cv2; import dlib
```

** Multithreaded dlib for faster facial recognition **

Facial recognition accuracy is lower because it uses one filter instead of 5, also code is a bit messy.

Clone the code from github:

`$ git clone https://github.com/fastfastball/dlib_for_arm.git`

A few of the methods in this version don’t compile properly, so you must edit parts of the code in object_detector.h, scan_fhog_pyramid.h, and interpolation.h

`$ vim dlib_for_arm/dlib/dlib/image_processing/object_detector.h`

Find all references to currentTimeInMilliseconds() and LODG and remove them.

`$ vim dlib_for_arm/dlib/dlib/image_processing/scan_fhog_pyramid.h`

Find all references to currentTimeInMilliseconds(), total_fe_time, and total_pyr_time, all print statments using variables t0, t1, t2, t3, t4 and delete them

`$ vim dlib_for_arm/dlib/dlib/image_transforms/interpolation.h`

Find all references to currentTimeInMilliseconds() and delete them.

```
$ cd dlib_for_arm/dlib
$ python setup.py build
$ python setup.py install*******
$ cd dli	b_for_arm/dlib
$ mkdir build
$ cd build
$ cmake ..
$ cmake --build . 
```

#Part 4, Building Torch:

“Torch is a scientific computing framework with wide support for machine learning algorithms that puts GPUs first. It is easy to use and efficient, thanks to an easy and fast scripting language, LuaJIT, and an underlying C/CUDA implementation.” - [Torch](http://torch.ch/docs/getting-started.html#_)

To install Torch, first clone the torch git repository:

`$ git clone https://github.com/torch/distro.git ~/torch --recursive`

Install the basic torch dependencies that LuaJIT and Torch require:

```
$ cd ~/torch
$ bash install-deps
```

Next call the install script which installs LuaJIT, and LuaRocks and then installs some core packages including torch, nn, and paths:

`$ ./install.sh`

When prompted install to the default location by typing yes. The script adds torch to your PATH variable, source it once to refresh your environment variables:

`$ source ~/.bashrc`

***if you need to uninstall torch run:***

`$ rm -rf ~/torch`

Once this is installed you can run torch with from the command line prompt by using the following command:

`$th`

Next you will need to install dependencies with luarocks install $NAME, where $NAME should be replaced with the following packages:

- dpnn
- nn
- optim
- csvigo
- cutorch *(only with CUDA)*
- cunn *(only with CUDA)*
- fblualib *(only for training a DNN)*
- tds *(only for training a DNN)*
- torchx *(only for training a DNN)*
- optnet *(optional, only for training a DNN)*

These can be installed with the following command:

`$ for NAME in dpnn nn optim optnet csvigo cutorch cunn fblualib torchx tds; do luarocks install $NAME; done

#Part 5, Installing OpenFace:

Now that OpenCV dlib and torch are all installed it’s time to install OpenFace and bring them all together.

```
$ git clone https://github.com/cmusatyalab/openface
$ cd openface
$ sudo python setup.py install
```

Run the following commands to download pre-trained OpenFace models:

```
$ cd models
$ ./get-models.sh
```

**Verifying the Installation**

Now OpenFace should have been installed with the required dependencies. To verify your installation you can run the comparison demo, from the demos folder in openface. This demo compares images and predicts the similarity score of two faces by computing the squared L2 distance between their representations. A lower score indicates the two faces are more likely to be of the same person on a range from 0 to 4.

From the base openface directory run the following command:

`$ ./demos/compare.py images/examples/{*lennon-1*,*lennon-2*}`

This should result in a distance of 0.763.











