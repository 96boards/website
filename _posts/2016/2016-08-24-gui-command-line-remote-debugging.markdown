---
author: davidm
comments: true
date: 2016-08-24 23:34:01+00:00
layout: post
link: http://www.96boards.org/blog/gui-command-line-remote-debugging/
slug: gui-command-line-remote-debugging
title: Gui & command line remote debugging
wordpress_id: 16751
categories:
- blog
tags:
- 32-bit Linux
- 64-bit
- 96Boards
- aarch32
- aarch64
- ARM
- ARMv8
- Consumer IoT
- cross compiler
- DB410c
- ddd
- debug
- debugger
- dragonboard410c
- Eclipse
- gdb
- gdb-multiarch
- gdbserver
- HiKey
- Reference Platform
- rpb
---

In my [last blog](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/) I showed how to setup an ssh key so Eclipse can automatically copy an ARM binary over to your 96Boards development system, and I showed you how to use external libraries ([libsoc](https://github.com/jackmitch/libsoc) and [mraa](https://github.com/intel-iot-devkit/mraa)). This blog was supposed to cover remote debugging using Eclipse. No joy in that, I have spent quite a lot of time trying to figure out how to do remote ARM debugging on an X86 Linux system using GDB and Eclipse. I’ll keep looking but I’m not really an IDE person, and I can’t find the magic settings to get Eclipse to talk to the correct gdb and remote machine. That said, I did get command line remote gdb debugging to work, and I was also able to get remote source code debugging to work with the gui ddd and gdb, so all is not lost.

If there are any Eclipse experts out there, I could use some help, I am “positive” there is some to set the needed options within Eclipse, but I can’t find it. Suggestions and help will be gladly accepted. I am not an Eclipse expert by any stretch of the imagination, I don’t generally use IDE’s at all, I prefer command line tools, though I will admit I prefer source code debugging when I need to do it, and for that I tend to use ddd over gdb. To do remote debugging you need to install several pieces of software on both systems (Host and 96Boards).


# Assumptions





 	
  * You know how to use the gdb debugger, this is not a tutorial on using gdb, this is instructions on using gdb to remotely debug ARM code from an X86 Linux host machine.

 	
  * You know how to use the ddd gui interface to gdb if you choose to use the ddd interface, remember this is not a tutorial on using ddd, this is just how to get gdb to work with gdb in a remote debugging scenario.

 	
  * Previously installed command line cross compilation tools as described in a [prior blog entry of mine](http://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/).

 	
  * Cross debugging host computer is X86 based running Linux, either Ubuntu 16.04, Debian Jessie, or Debian Testing with Jessie cross compiling tools including gdb installed.

 	
  * You are debugging for [96Boards](http://www.96boards.org/) - either 32bit or 64bit ARM.




# Part 1: Command line source code debugging with gdb




## Setting up your host x86 Linux system




#### Step 1: Install gdb-multiarch on the X86 Linux System


We need to install gdb on the X86 system, but the standard X86 gdb won’t work, it does not understand ARM opcodes. There are 2 choices here; install the source to the gdb debugger and compile it to understand ARM, or install gdb-multiarch and tell it to use either architecture (armhf for 32 bit ARM boards or aarch64 for 64 bit ARM boards). Since both of the Linux distros I’m using have gdb-multiarch packaged I’m going to go with the package route.
In this case it is much easier to just install the gdb-multiarch package. If you want to do source code level debugging then you also might want to also install ddd the GUI wrapper for gdb at the same time. And again the usual warning about updating your installed software apply.

**Gdb-multiarch:** GNU Debugger for multi architecture on an x86 machine

**Commands:**

`$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade
$ sudo apt-get install gdb-multiarch ddd`


#### Step 2: Create init file for gdb in your home directory


Now you will need to create a couple of init files for gdb, one in the root of your home directory, the other in your active development directory for a project. The .gdbinit file in your home directory controls what other .gdbinit files are allowed to load on startup. Gdb by default won’t load a .gdbinit file from there unless told it’s OK in the ~/.gdbinit file.

Using your prefered text editor create the file ~/.gdbinit and put a single line in it: “add-auto-load-safe-path /home/[your_home_dir]/workspace/test-64/Debug/.gdbinit” and save the file. In this example I will be using vim as my text editor:

`$ vim .gdbinit`

![insidegdbinitfromhome](/assets/images/blog/2016/08/insidegdbinitfromhome-300x84.png){:class="img-responsive"} 


#### Step 3: Create init file for gdb in your workspace directory


If you have several projects in different directories you can add a line for each of them. When you start gdb while in a directory, if the master .gdbinit file allows it, gdb will load and process a second .gdbinit file which is in the current working directory. Doing this you can have specific instructions on a per project basis. In this case we need to tell the gdb-multarch debugger what the expected file format is, either 32 bit (armhf) or 64 bit (aarch64) ARM, and the location of the remote ARM machine, which is done by IP address and port. We are using port 2345 in our examples but any unused port is fine, as long as both sides match. I’m going to use the 64 bit arch in my example:

In /home/[your_home_dir]/workspace/test-64/Debug/.gdbinit add the following lines:

`set architecture aarch64
target remote [IP Address]:2345`

![insidegdbinitworkspace](/assets/images/blog/2016/08/insidegdbinitworkspace-300x164.png){:class="img-responsive"} 

And save the file. Now anytime you start gdb-multiarch in this directory it will load this init file and know to use 64 bit ARM op codes, and that the remote machine is at the IP and Port info supplied.


## Setting up your ARM 96Boards system




#### Step 1: Install Gdbserver on a 96Boards


Using apt-get you will need to install gdbserver, it is a small program that connects gdb debugger on the x86box to the ARM application being debugged on the 96board. Of course the usual warning about updating your installed software apply.

**Gdbserver:** GNU Debugger server, connects running program between x86 machine and ARM machine

**Commands:**

`$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade
$ sudo apt-get install gdbserver`


#### Step 2: Starting gdbserver


The next step in remote debugging is starting the gdbserver on the 96Boards system. On your 96Boards, “cd” into the directory that you have the binary you created in my prior blog entry. It should be named test-64 or test-32 depending on your 96Boards. Once you are in the correct subdirectory you will need to run the gdbserver command. On the command line you need to supply both connection information and the binary you are testing. The connection information is supplied as [ip address]:[port address] but the ip address does not seem to matter in any documentation I’ve read, it does seem to have to be a valid address but not necessarily from the machine that gdb will connect from. I use the connection info of localhost:2345 and I recommend you do to. The gdb command will look something like: gdbserver localhost:2345 test-64.

**Commands:**

`$ cd [location of your binary file to be debugged]
$ gdbserver localhost:2345 [name of your binary to be tested]`

**The gdbserver will start and you will see on the screen something like:**

`“Process test-64 created; pid = 3692”
“Listening on port 2345”
`

![runninggdbserverARMsystem](/assets/images/blog/2016/08/runninggdbserverARMsystem-300x73.png){:class="img-responsive"} 

Congratulations you have successfully fired up gdbserver, next step is back on your X86 linux system. It is important to leave the server running on your 96Boards while proceeding to the next section of this blog, “Starting gdb-multiarch”. In this next section the server you just ran on your 96Boards will be accessed by your host machine.


## Starting gdb-multiarch


Time to switch back to the X86 Linux system, we will have to cd to the directory where the ARM binary is after building it. In my case it’s in ~/workspace/test-64/Debug/, your location may vary. In any case cd to the location and then we will start gdb-multiarch. In our prior steps we make an init file that has the ip address, port and file format info so gdb-multiarch should just start and run

**Commands:**

`$ cd [location of your ARM binary]
$ gdb-multiarch [name of your ARM binary]`

Once gdb starts you should see lots of text and after all the text the last line should say “(gdb)”. Look and make sure one of the lines reads “The target architecture is assumed to be aarch64” if you see that all is well. A quick test:

![rungdbmultiarchonhost](/assets/images/blog/2016/08/rungdbmultiarchonhost-300x129.png){:class="img-responsive"} 

**Commands:**

`(gdb) b 17`

This command will set a break at line 17 within the source code. This is optional, the following command “list” will not have a change in the output; however, the “continue” command will be different depending on whether or not the “b” command was used.

**Commands:**

`(gdb) list`

You should see a listing of the first lines of your source code. If you hit enter again you should see more source code. Back on the ARM 96Boards you should see another line of text: “Remote debugging from host [ip address]” where the IP address is the X86 linux system you are running gdb-multiarch on.

![Screenshot from 2016-08-24 14-35-54](/assets/images/blog/2016/08/Screenshot-from-2016-08-24-14-35-54-300x110.png){:class="img-responsive"} 

**Commands:**

`(gdb) continue`

You should now see that gdb read in a bunch of library info from the remote 96Boards system and then see something like (Inferior 1 (process [pid number from the 96Boards system]) exited with code 04), and on the 96Boards system the application ran, and exited, and gdbserver excited too.

**Continue with “break” at 17**

![Screenshot from 2016-08-24 14-36-04](/assets/images/blog/2016/08/Screenshot-from-2016-08-24-14-36-04-300x92.png){:class="img-responsive"} 

**Continue without “break”**

![runcontongdbmultiarch](/assets/images/blog/2016/08/runcontongdbmultiarch-300x82.png){:class="img-responsive"} 

**Commands:**

`(gdb) continue`

In the left terminal image you will see the ARM 96Boards terminating the program after the second “continue” command. In the image below, the example uses post break at line 17.

**Continue post “break” at 17**

![Screenshot from 2016-08-24 14-36-19](/assets/images/blog/2016/08/Screenshot-from-2016-08-24-14-36-19-300x89.png){:class="img-responsive"} 

You are now set for command line gdb debugging.


# Part 2: GUI Source code debugging with ddd


You must have gotten the command line debugging with gdb-multiarch working before starting this section as ddd is simply a gui wrapper of gdb. On your ARM 96Boards restart your gdbserver exactly as before. Here on your X86 Linux system you are going to invoke ddd with some command line options. For more info about ddd see:[ https://www.gnu.org/software/ddd/manual/html_mono/ddd.html](https://www.gnu.org/software/ddd/manual/html_mono/ddd.html)

**Commands:**

`$ ddd --debugger gdb-multiarch --gdb [name of your ARM binary]`

**Example of [name of your ARM binary] from previous blogs and instruction sets: helloworld.arm and compile_test.arm**

You should see your source code in the top window, a (gdb) prompt in the bottom window, and on the remote ARM 96Boards you should see the “Remote debugging from host {IP Address]”.

![1](/assets/images/blog/2016/08/1-300x237.png){:class="img-responsive"} 

_**Note: Here you can Close the “Tip of the Day” window and proceed to the DDD GUI.**_

![2](/assets/images/blog/2016/08/2-1-300x238.png){:class="img-responsive"} 

If you get an hourglass prompt that never clears, exit ddd, and cd to your home directory, you have a hidden directory called .ddd and something is wrong in a saved session, do an rm -rf .ddd and then go back to your working directory.

**Commands (if ddd hangs):**

`Exit ddd
$ cd
$ rm -Rf .ddd
$ cd [location of your ARM binary]`

Restart gdbserver on your 96Boards, it will have exited when you exited ddd

`$ ddd --debugger gdb-multiarch --gdb [name of your ARM binary]`

**Hint,** ddd is a gui that runs on top of gdb so you must have gdb fully running before trying to use ddd. If gdb is not functioning standalone, ddd is not going to run either.

Don’t forget, if you get stuck, there are resources to help you through the installation. Feel free to check out the [96Boards forums](http://www.96boards.org/forums/), [96Boards wiki](https://github.com/96boards/documentation/), or [Freenode IRC channel](http://webchat.freenode.net/?channels=%2396boards) #96Boards (there are many ways to access IRC, this website is one of them). Dig around the wiki, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help get your 96Boards up and running!

![OpenHours-04](/assets/images/blog/2016/05/OpenHours-04-300x125.png){:class="img-responsive"} 

Don’t forget about the [Open Hours](http://www.96boards.org/openhours/) every Thursday, where we will discuss this blog along with other pressing questions amongst a fun crowd of 96Boards users and developers over coffee. We hope to you see you there!

**Other Blogs from David Mandala:**



 	
  * [How do you access the GPIO pins programmatically?](http://www.96boards.org/blog/access-gpio-pins-programmatically/)

 	
  * [How do you install 96BoardGPIO, libsoc and libmraa on a new image?](http://www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)

 	
  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](http://www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/)

 	
  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux/)

 	
  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](http://www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)



