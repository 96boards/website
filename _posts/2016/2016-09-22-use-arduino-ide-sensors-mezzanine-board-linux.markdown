---
author: davidm
comments: true
date: 2016-09-22 17:40:57+00:00
layout: post
link: http://www.96boards.org/blog/use-arduino-ide-sensors-mezzanine-board-linux/
slug: use-arduino-ide-sensors-mezzanine-board-linux
title: How to use the Arduino IDE with the Sensors Mezzanine Board under Linux
wordpress_id: 17425
categories:
- blog
---

I was asked the other day to write a blog about using using the Arduino IDE with the Sensors Mezzanine Board. It’s pretty easy to use, there are some steps you need to do to make it work but nothing too hard.


# Assumptions


I am making some assumptions, I’m using a DragonBoard 410c today, but this works on a HiKey and a Bubblegum-96 board just as well. You are connected to the Internet, if not connect, this Blog won’t work without the Internet connected with your 96Boards. Make sure to use apt-get and update your 96Boards Image with the latest packages. I assume you have installed the Sensors board on top of the 96Boards being very careful to line up the pins correctly so you did not damage the sensor board or the 96Boards. Finally, this is not instructions or a tutorial on using the Arduino IDE or the Arduino Command line tools. This will get the IDE working and the Blink example code running on your Sensors Board.


## Update Image Packages


Make sure all of the Image packages are up to date before trying to install the packages required to use the Sensors Mezzanine.

`$ sudo apt-get update
$ sudo apt-get dist-upgrade -u`


## Install extra tool packages


To run the IDE, we’ll install the Debian packages for the standard Linux development tools, the Python environment, and the Arduino toolchain.

`$ sudo apt-get install arduino-mk arduino git build-essential autoconf libtool swig3.0 python-dev nodejs-dev cmake pkg-config libpcre3-dev`

Remove the extra package files they are no longer needed, saves space on the eMMC

`$ sudo apt-get clean`


## Configure the software


The last step is to install some configuration files so that the development tools know which devices to uses. Fetch the 96boards-tools package and install the provided configuration files:

`$ sudo adduser linaro i2c # Allow the normal user to perform i2c operations`

$ git clone https://github.com/96boards/96boards-tools

$ sudo cp 96boards-tools/70-96boards-common.rules /etc/udev/rules.d/

Now you need to edit/create a shell script in /etc/profile.d the shell script file name is: 96boards-sensors.sh and it might already exist, or it might not. Once you open the file you need 3 specific lines it it, if there are extra lines that is ok leave them alone. If some of the lines I mention here are already exist that’s fine, just add the missing ones. Be very careful that the double quotes around the JAVA_TOOL_OPTIONS and the PYTHONPATH lines are regular double quotes and not smart double quotes. Smart double quotes that some editors automatically add break shell scripts.

`$ vim /etc/profile.d/96boards-sensors.sh`

`export JAVA_TOOL_OPTIONS="-Dgnu.io.rxtx.SerialPorts=/dev/tty96B0"
export MONITOR_PORT=/dev/tty96B0
export PYTHONPATH="$PYTHONPATH:/usr/local/lib/python2.7/site-packages"`

Save and Exit the editor

Now you need to copy this file one other place on the file system.

`$ sudo cp /etc/profile.d/96boards-sensors.sh /etc/X11/Xsession.d/96boards-sensors`

Now reboot the system to pick up all the changes.

`$ sudo reboot`

Once you are back from the reboot, look in your file menu (lower left corner of the desktop) you should see a “Programming” tab, if you highlight it you should see a menu that has Arduino IDE in it. Click on it. This will launch the Arduino IDE. Check the Tools menu options. Tools->Board should be set to Arduino Uno. Tools->Serial Port should be set to /dev/tty96B0 (this might only appear after the first upload errors out don’t worry about it too much). Tools->Programmer should be set to AVRISP mkII or AVR ISP

Once it’s up and running you should be able to click on the File->Examples->Basics->Blink option. That will open another IDE window with the source code to the Blink demo in it. In the IDE directly below the File menu you will see a small Check Mark in a circle icon, click on it and that will cause the IDE to build the source code into a binary file with no errors.

If you see something like “Done compiling” and “Binary sketch size: 1,056 bytes (of a 32,256 byte maximum)” Congratulations you have successfully compiled the demo Blink.

Now we need to upload it. Also easy. Next to the Check Mark icon you will see a Right Arrow icon, click on that and the IDE will re-compile the source and try to upload it. If it errors out, it’s likely looking for the serial port and it will most likely prompt you that it can’t find COM1: and do you want to use /dev/tty96B0 tell it yes. The IDE will remember the serial port selection going forward. Click on the Right Arrow icon and it will build the source again and upload it to the correct serial port and the Sensors board.

If you see something like “Done uploading” in the IDE and on your sensors board down at the bottom next to the 6 pin header there is a little red LED blinking; Congratulations you have successfully compiled and uploaded the demo Blink. It just blinks the LED forever…...

You are ready to start using the IDE to craft your own programs and upload and use them. Have fun. By the way all of this info and more is in the booklet that came with your sensors board “Grove Starter Kit for 96Boards Getting Started Guide”.

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

![OpenHours-04](/assets/images/blog/2016/05/OpenHours-04-300x125.png){:class="img-responsive"} 

Don’t forget about the [Open Hours](http://www.96boards.org/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

Other Blogs from David Mandala:



 	
  * [How do you access the GPIO pins programmatically?](http://www.96boards.org/blog/access-gpio-pins-programmatically/)

 	
  * [How do you install 96BoardGPIO, libsoc and libmraa on a new image?](http://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)

 	
  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](http://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/)

 	
  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux/)

 	
  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)

 	
  * [Gui & command line remote debugging](http://www.96boards.org/blog/gui-command-line-remote-debugging/)

 	
  * [Eclipse remote development and debugging](http://www.96boards.org/blog/eclipse-remote-development-debugging/) (Previous Blog)


