---
author: davidm
comments: true
date: 2016-09-02 22:34:57+00:00
layout: post
link: https://www.96boards.org/blog/eclipse-remote-development-debugging/
slug: eclipse-remote-development-debugging
image:
    featured: true
    path: /assets/images/blog/20_RemoteDebugging-1.png
    name: 20_RemoteDebugging-1.png
title: Eclipse remote development and debugging
wordpress_id: 16973
categories:
- blog
tags:
- 32-bit Linux
- 64-bit
- 96Boards
- aarch64
- ARM
- armhf
- ARMv7
- ARMv8
- Bubblegum
- Consumer IoT
- cross compiler
- DB410c
- debugging
- dragonboard410c
- Eclipse
- gdb
- HiKey
- Reference Platform
- remote access
- remote debugging
- rpb
---

In my [last blog](/blog/gui-command-line-remote-debugging/) I showed how to get command line remote gdb debugging working, and I was also able to get remote source code debugging working with the gui ddd and gdb. The good news is that two people jumped in to help me with Eclipse. I’m happy to give credit to [Michael Welling](https://www.linkedin.com/in/mwelling) and [Michael Casadevall](https://www.linkedin.com/in/michael-casadevall-a7622312) for a fantastic amount of work getting remote debugging to work within Eclipse. I think I was close in last week’s attempts, but was missing several minor, yet critical steps, so I never got it working. Also, just to be clear, [Eclipse](http://www.eclipse.org/) is a moving target, the menu’s change between versions somewhat and what works in one version may be slightly different in another version.


# Assumptions






  * Have Eclipse Neon for C & C++ development installed and available for use. You do not need any extra software plugins from Eclipse. Have extra software installed won’t hurt (I think) but it is not needed. A plain vanilla install for C & C++ has everything needed on the Eclipse side.


  * Knowledge on how to use Eclipse as an Integrated Development Environment (IDE) including the integrated debugger.


  * Previously installed command line cross compilation tools as described in a prior blogs entry of mine.


  * Previously installed command line debugging tools as described in a prior blogs entry of mine.


  * You know how to use the gdb debugger, this is not a tutorial on using gdb, this is instructions on using gdb to remotely debug ARM code inside the Eclipse IDE.


  * Cross debugging host computer is X86 based running Linux, either Ubuntu 16.04, Debian Jessie, or Debian Testing with Jessie cross compiling tools including gdb installed.


  * You are debugging for [96Boards](/) - either 32bit or 64bit ARM.




# Setup an Eclipse project for remote development and debugging


I’m going to start a new project and create a C project and set it up for remote running and debugging on the 96Boards target. I will do this on the 64 bit platform but it will work exactly the same for C++ and/or 32 bit platforms. There are some critical steps that I will call out, you can’t skip them as the remote debugging process will refuse to work. It will look like it “should” work but it won’t. So follow the steps exactly, even if it seems a bit silly.


## Step 1: Open Eclipse


$ ~/eclipse/cpp-neon/eclipse/eclipse &

![01_NewEclipse]({% asset_path "eclipse-remote-dev-img-1.png" %}){:class="img-responsive lazyload"}


## Step 2: In Eclipse create new ARM project






  * File -> New -> C-Project




## Step 3: Create C Project






  * **Project Name:** test-64 if using the 64 bit toolchain or test-32 for the 32 bit toolchain


  * **Project Type:** Hello World ANSI C Project


  * **Toolchains:** Cross GCC


  * Click the “Next” button


![02_NewCProject]({% asset_path "eclipse-remote-dev-img-2.png" %}){:class="img-responsive lazyload"}




## Step 4: Set Basic Settings






  * **Author:** your name


  * Click the “Next” button


![04_Copyright]({% asset_path "eclipse-remote-dev-img-3.png" %}){:class="img-responsive lazyload"}


## Step 5: Select Configurations






  * Click the “Select all” button


  * Click the “Next” button


![03_SelectConfig]({% asset_path "eclipse-remote-dev-img-4.png" %}){:class="img-responsive lazyload"}


## Step 6: Set Cross GCC Command






  * **Cross compiler prefix:** “aarch64-linux-gnu-” for 64 bit or “arm-linux-gnueabihf-” for 32 bit


  * **Path:** /usr/bin


  * Click the “Finish” button


![05_ConfigureCrossGCC]({% asset_path "eclipse-remote-dev-img-5.png" %}){:class="img-responsive lazyload"}


## Step 7: Compile the source code to a binary file


This is critical to be done now, **do not skip this step or wait until later**, you can’t get remote code execution or remote debugging working without having a binary in place before you run the remote configuration tools! Not sure why, just the way Eclipse works.




  * Single click on the project and then right click and select build project


If you expand the project you will see you have a binary file. Now setting up remote execution and remote debugging will work. Again I have no idea why this is critical but it is… (I did edit the source code a bit to add an int variable and a char array and changed the cputs to printf, just to make the debugger display a bit more interesting.)

![06_NoBinary]({% asset_path "eclipse-remote-dev-img-6.png" %}){:class="img-responsive lazyload"}

![07_BuildFirstBinary]({% asset_path "eclipse-remote-dev-img-7.png" %}){:class="img-responsive lazyload"}

![08_BinaryMade]({% asset_path "eclipse-remote-dev-img-8.png" %}){:class="img-responsive lazyload"}


## Step 8: Setup Remote Execution


Now we will setup remote execution, Eclipse will copy the binary file over to the 96Boards, execute it and place the output of the file in a local Eclipse pane so you can see it.




  * Click on the RUN -> Run Configurations... you will get a menu


![09_RunConfigMenu]({% asset_path "eclipse-remote-dev-img-9.png" %}){:class="img-responsive lazyload"}

![10_RunConfigPanel]({% asset_path "eclipse-remote-dev-img-10.png" %}){:class="img-responsive lazyload"}


### Create, manage, and run configurations pane






  * In the left window double click C/C++ Remote Application, that will generate a test-64 item below the C/C++ Remote Application selection and the highlight will switch there and a pane will open on the right side.


![11_RemoteHostRunConfig]({% asset_path "eclipse-remote-dev-img-11.png" %}){:class="img-responsive lazyload"}




  * The name will be test-64 Debug


  * The project will be test-64


  * The C/C++ Application should be Debug/test-64 if it is not, click on the Search Project button and select the test-64 project when you come back it will be set.


  * If Connection: is not shown scroll down until you can see it. If this is the first time you’ve done this it will be blank, click on the New… button.


  * Change Connection type: to be SSH (Click OK)


![12_SSHNewConnection]({% asset_path "eclipse-remote-dev-img-12.png" %}){:class="img-responsive lazyload"}




  * Now fill in the New Connection Pane


    * Connection Name: 96Boards or something specific to the 96Boards you are using right now


    * Host: Put the IP address of the 96Boards here


    * User: put the username to log into this board here, if using a standard Linaro image the name will be linaro


    * Select Password based authentication and put in the password to log into the system. If you are using a Linaro image and have not changed the password yet the password it linaro.


    * You don’t need to make any changes to the Advanced settings.


    * Click on the Finish button.





![13_96BoardUSBEthernet]({% asset_path "eclipse-remote-dev-img-13.png" %}){:class="img-responsive lazyload"}




  * Click on the Browse button for the “Remote Absolute File Path for C/C++ Application” This will open a pane showing the remote file system on the 96Boards. Select the directory where you want the application you want it to run in. I’m using the linaro user home dir. Once you select the path just click on the x at the top right corner, it does not give you an OK button for some reason, the path will be carried back into the New Connection Pane, and will look something like “/home/linaro/test-64”


![14_BrowseRemoteFileSystem]({% asset_path "eclipse-remote-dev-img-14.png" %}){:class="img-responsive lazyload"}




  * Click on the Apply button, congratulations you have used the remote connection to select the run path and it’s ready to use to execute the Application.


  * Click on the Run button, and then look in your Console pane (double click on the Console tab if the window is too small to expand it) and you will see “!!!Hello World!!! and logout


![15_FinalRemoteRunConfig]({% asset_path "eclipse-remote-dev-img-15.png" %}){:class="img-responsive lazyload"}

![16_RemoteRunScreenCap]({% asset_path "eclipse-remote-dev-img-16.png" %}){:class="img-responsive lazyload"}

**Congratulations, you have succeeded in remotely running the Hello World application.**

To run the program remotely from the C/C++ perspective now that you have this setup you go to the bar with the Icon’s in it, look for the white arrow surrounded by a green circle. Just to the right of that Icon is a down arrow, click on that you should see test-64 Debug configuration. Click on it and the code will be compiled if need be and copied to the 96Boards and run and the output will be in the Console pane of the IDE. You can test the code any time you want this way.

**Now on to setting up the remote debugger.**


## Step 9: Setup Remote Debugging


Now we will setup remote debugging, Eclipse will copy the binary file over to the 96Boards, start gdbserver, come back and execute gdb-multiarch and bring up the debugging perspective.




  * Click on the RUN ->Debug Configurations... menu


![17_DebugConfigMenu]({% asset_path "eclipse-remote-dev-img-17.png" %}){:class="img-responsive lazyload"}


###




### Create, manage, and run configurations pane






  * In the left window double click C/C++ Remote Application, that will create a test-64 Debug item below the C/C++ Remote Application selection and the highlight will switch there and a pane will open on the right side.


  * The name will be test-64 Debug


  * The project will be test-64


  * The C/C++ Application should be Debug/test-64 if it is not, click on the Search Project button and select the test-64 project when you come back it will be set.


![18_DebugConfigPanel]({% asset_path "eclipse-remote-dev-img-18.png" %}){:class="img-responsive lazyload"}




  * If Connection: is not shown scroll down until you can see it. If you did step 8 above the Connection will be already set to what you created in step 8, If this is the first time you’ve done this it will be blank, click on the New… button.


  * Change Connection type: to be SSH (Click OK)


  * Now fill in the New Connection Pane


    * Connection Name: 96Boards or something specific to the 96Boards you are using right now


    * Host: Put the IP address of the 96Boards here


    * User: put the username to log into this board here, if using a standard Linaro image the name will be linaro


    * Select Password based authentication and put in the password to log into the system. If you are using a Linaro image and have not changed the password yet the password it linaro.


    * You don’t need to make any changes to the Advanced settings.


    * Click on the Finish button.


    * If you did step 8 above this will already be set to your selection in step 8, you don’t need to do it again, if it’s not set click on the Browse button for the “Remote Absolute File Path for C/C++ Application” This will open a pane showing the remote file system on the 96Board. Select the directory where you want the application you want it to run in. I’m using the linaro user home dir. Once you select the path just click on the x at the top right corner, it does not give you an OK button for some reason, the path will be carried back into the New Connection Pane, and will look something like “/home/linaro/test-64”


    * Now click on the Debugger tab








  * **You’ll see a line with:** “GDB debugger:” it will be set to gdb, change it to gdb-multiarch. This is critical, as mentioned in my prior blog the standard X86 gdb will have no idea how to debug ARM code.


  * **You’ll see a line with:** “GDB command file:” and it will be set to “.gdbinit” just erase the file name completely, you don’t need it.


![19_DebugConfigPanelGDB]({% asset_path "eclipse-remote-dev-img-19.png" %}){:class="img-responsive lazyload"}




  * Click on the Apply button, congratulations you have used the remote connection to select the run path and it’s ready to use to execute the Application.


  * Click on the Debug button, and Eclipse will change to the debugging perspective or ask you if it’s OK to switch to the Debugging perspective, if it does ask say yes. Now you can step through the code just like a debugging a local program.


![20_RemoteDebugging]({% asset_path "eclipse-remote-dev-img-20.png" %}){:class="img-responsive lazyload"}

**Congratulations,** you have succeeded in remotely debugging the Hello World application.
To run the debugger remotely from the C/C++ perspective now that you have this setup you go to the bar with the Icon’s in it, look for the bug (it is just to the left of the white arrow green circle run button). Just to the right of that Icon is a down arrow, click on that you should see test-64 Debug configuration. Click on it and the code will be compiled if need be and copied to the 96Boards and the debugger setup and the IDE will switch to the debugging pane. You can test the code any time you want this way.

**Warning:** there are some quirks in the Eclipse remote debugging, sometimes if you have more than a single project in Eclipse open you will get odd warnings about not finding source code from the other projects, even though the other projects source code is not needed in your project. The only way to avoid this is to right click on your project and click on the “Close Unrelated Projects” selection. Then you won’t get this misleading warnings. The warnings don’t hurt anything they are just confusing, it’s an Eclipse bug.

Another quirk is that you really need to use the “Run as” and “Debug as” functions vs “Run” or “Debug” because sometimes if you use “Run” or “Debug” Eclipse will try to run the program locally instead of remotely! Does not always happen but it does happen and it’s quite annoying so be aware of this. SInce you are cross compiling you get an error that the application failed to run. Exactly what one would expect if you try to run an ARM binary on an X86 box.

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](https://discuss.96boards.org/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards) channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

[![OpenHours Image]({% asset_path "OpenHours.png" %}){:class="img-responsive lazyload"}](/openhours/)

Don’t forget about the [Open Hours](/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

Other Blogs from David Mandala:




  * [How do you access the GPIO pins programmatically?](/blog/access-gpio-pins-programmatically/)


  * [How do you install 96BoardGPIO, libsoc and libmraa on a new image?](/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Gui & command line remote debugging](/blog/gui-command-line-remote-debugging/) (Previous blog)
