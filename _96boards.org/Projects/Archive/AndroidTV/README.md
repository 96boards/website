---
layout: project-display-page
title: 96boards Projects &bull; Android TV - DragonBoard 410c
permalink: "/projects/AndroidTV/"
breadcrumb-title: Android TV - DragonBoard 410c
breadcrumb-section: Projects
breadcrumb-subtitle: AndroidTV
specific_js:
  - /js/owl.carousel.min.js
  - /js/sticky-navbar.js
  - /js/lightbox.js
specific_css:
  - /css/owl.carousel.min.css
  - /css/owl.theme.default.min.css
  - /css/lightbox.css
images:
  - AndroidTVDB410c_FrontPage.png
---
# Android TV - DragonBoard 410c

This project attempts to build Android TV on the DragonBoard™ 410c from Arrow Electronics. The main objective was to utilize the Android TV Input Framework, and this was done by running the built-in reference LiveTv App and Sample Input Apps.

The Android TV Input Framework implementation includes the TV Input Manager, which allows the communication between the TV App and the Inputs. The TV Input Framework allows different kind of inputs including External STB, Built-in Tuner Input, HDMI Input etc.

To start, we used the Reference LiveTv App built for ARM64 as a TV App and the Sample Input apk for the TV Input. The Sample Input allows the user to configure the Channels in two different ways:

- Simple Input, which consists of local video files that act as different channels.
- Rich TV Input consists of 4 Channels served from Google Cloud Storage, which are comprised of MP4 Videos, HLS Stream, MPEG - DASH Stream.

We have also implemented the Custom Launcher to provide the look and feel of the TV Launcher and integrated the IR Sensor onto DragonBoard 410c for controlling TV Activities with Universal Remote.

### Dependencies:

An Exo player is built and installed in order to play the videos.

### Further Work in Progress:

Fine tuning the performance and built-in tuner implementation.

## Project Details

- **Creator:** Sunitha S. - Tech Lead, Kirupa S. - Software Engineer, Mohan Raj - Software Engineer, Global Edge Software Ltd.
- **Project Name:**
- **Type of Project:** Demonstrations (Projects showcasing individual features of a 96Boards product)
- **Project Category:** Embedded, Smart Home
- **Board(s) used:** [DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/)

## Resources

### RSS URL

- [View Project on Qualcomm Developer Network](https://developer.qualcomm.com/project/android-tv)
- [GitHub Repository](https://github.com/GlobalEdgeSoftware/AndroidTV/tree/atv)
- [TV Framework](https://source.android.com/devices/tv/reference-tv-app.html)
- [Gradle Scripts](https://docs.gradle.org/current/userguide/writing_build_scripts.html)
- [Android TV Samples](https://github.com/googlesamples/androidtv-sample-inputs)

### Build / Assembly

#### Download the latest Source Code for DragonBoard 410c

#### Add the below two lines in the device/qcom/msm8916_64.mk file

```shell
PRODUCT_CHARACTERISTICS := tv
$(call inherit-product,
device/google/atv/products/atv_base.mk)

#### Build your Android DragonBoard 410c source code on Linux Platform

#### Download and Build Live Tv app for arm64

````shell
tapas LiveTv arm64
make LiveTv
cp -r out/target/product/generic_arm64/system//priv-app/LiveTv/ /system/priv-app/
rm -rf out/target
cd –
```

#### Build the Sample Input Apk and its dependencies (Exo player) using the Gradle scripts:

```shell
mkdir -p apps/
cd apps/
export ANDROID_HOME=
export JAVA_HOME= (/usr/lib/jvm)
echo "count=0" >
/home/buildslave/.android/repositories.cfg
rm -rf ExoPlayer androidtv-sample-inputs
```

#### Building apps and dependencies

```shell
git clone https://github.com/googlesamples/androidtv-sample-inputs
cd androidtv-sample-inputs/
sed -i "s/23.0.3/25.0.2/g" app/build.gradle
library/build.gradle ./gradlew assembleDebug cp
app/build/outputs/apk/app-debug.apk
../out/target/product/msm8916_64/data/app/
cd -
git clone https://github.com/google/ExoPlayer
cd ExoPlayer
sed -i "s/23.0.3/25.0.2/g" build.gradle
./gradlew assembleDebug
cp ./demo/buildout/outputs/apk/demo-withExtensions-debug.apk
../out/target/product/msm8916_64/data/app/
cd -
git clone https://github.com/GlobalEdgeSoftware/AndroidTV/tree/atv
cd TvLauncher
sed -i "s/23.0.3/25.0.2/g" build.gradle
./gradlew assembleDebug
cp app/build/outputs/apk/app-debug.apk
../out/target/product/msm8916_64/data/app/
cd -
```

### Social Media Links

- 96Boards: [URL](http://www.96boards.org/) &#124; [Twitter](https://twitter.com/96boards) &#124; [Facebook](https://www.facebook.com/96Boards) &#124; [Linkedin](https://www.linkedin.com/showcase/6637095/)

***
