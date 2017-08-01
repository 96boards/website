---
author: davidm
comments: true
date: 2017-01-27 18:56:16+00:00
layout: post
link: https//www.96boards.org/blog/96boards-media-server/
slug: 96boards-media-server
featured_image: ReadyMediaServer.png
title: Setting up a home 96Boards media server
wordpress_id: 19681
categories:
- blog
tags:
- 32-bit Linux
- 64-bit
- 96Boards
- aarch32
- aarch64
- ARM
- ARM Server
- ARMv8
- Bubblegum
- bubblegum-96
- Consumer IoT
- DB410c
- dragonboard410c
- HiKey
- IoT
- mediatek
- MediaTek X20
- Reference Platform
- Roku
- rpb
- Server
- Streaming
- Video Stream
---

# Setting up a home 96Boards media server


If you are like me, you have hundreds if not thousands of photos, music, and movies sitting on a hard drive in your house, but no easy way to access them.  Wouldn’t it be nice to make all those photos and home movies available to everyone in the house at any time?  Or how about playing all your own music over the home network?   This is easier than you might think with a 96Boards!   Using a 96Boards such as the DragonBoard DB410c and some freely available open source software that supports DLNA, you can create a transparent local Media Server that provides easy simultaneous access to all this information to friends and family.  It’s easier than you think and it turns out to be quite fun to have all your digital media available at your fingertips.  This article will explain how you can set up your own media server with all your personal files and well as share some of the DLNA compatible clients that make it super easy to access this information from anywhere on your wireless home network.

Setting up a home media server is quite easy, but there are a few things to remember, and do somewhat differently than you might for a trade show demo.  So starting from the beginning.

![96boards Media Server]({% asset_path "ReadyMediaServer.png" %}){:class="img-responsive lazyload"}

* * *

# Starting with a fresh image on a DragonBoard 410c


I’m using a Dragonboard 410c for this article but you can use any 96Boards consumer edition (CE) board.  Just follow the instructions for your 96Board to put the current Debian Linux image on it.  Once you have done that continue on to the next step “Update the Linux Image”.


# Update the Linux Image


After logging in, you will need to update the OS




  1. `$ sudo apt-get update`


  2. `$ sudo apt-get upgrade`


  3. `$ sudo apt-get dist-upgrade`




# Install the media server software


At this point you have the OS fully upgraded so it’s safe to install some media server software.  In this case we are going to install minidlna package (otherwise known as the ReadyMedia Server).  It’s a quite simple server, it does not do transcoding, does not have a gui interface, it simply serves audio/video/pictures when requested.  Lets install the software package, it’s packaged as minidlna but the current name is actually ReadyMedia Server.




  1. `$ sudo apt-get install minidlna`


There is some configuration that needs to be done, but first you are going to need to install some storage space, as the 8 Gig eMMC drive is just not going to cut it between all the pictures, audio files and home videos I have.


# Security Issues


The media software will run under the minidlna user that is created when you install the package.  This user can’t log in and has almost no permissions except to broadcast content from specific directories out to a specific port.  This is critical for security. Also if you are using the linaro user to log in, make sure you change the default password for this account, leaving the default password would be really really bad.  Remember your ARM CE 96Board single board computer (SBC) is a very powerful device, as or more powerful than your tablet or chromebook.  Lots of damage could be done if someone were able to take over your machine so keep the passwords long and secure.


# Installing an Ethernet Dongle


I do recommend installing a USB Ethernet Dongle, in most cases it will be faster than the onboard WiFi and have fewer collisions.  If you don’t have an Ethernet network you can skip this but most home access points (home router) have at least 4 Ethernet connections available and I’d recommend plugging the server into one of them.  Just plug a USB Ethernet dongle into one of the USB ports and connect an Ethernet cable from the AP to the media server.  The system will automatically grab an IP address and just work.


# Installing external USB/SATA drive


Now it’s time to decide how large of a drive you want/need.  I usually buy a separate bare hard drive and an external USB to SATA case to install it in, but you can just buy an external USB drive if you want.  I do recommend using an SSD, they are fast to spool data and there are no moving parts to wear out.   Some 96Boards have USB3 some have USB2 ports so I’d buy a USB3 drive since it will work on USB2 at full USB2 speeds and it will likewise work at full USB3 speeds when attached to a USB3 port.  Looking at Amazon the price difference is negligible but the speed difference is huge.

If you are going to run the media server all the time it might be smart to put some swap space on it, long running tasks can suck up RAM and having a bit of swap can be the difference between the server running years on end or crashing every six months or so for no apparent reason.

If you buy a bare drive it is likely not formatted at all and if you buy an external HD it is likely formatted to DOS which is not the format we want.  So let’s get started.  First we will run a df command, than plug in the USB HD, wait a moment and do the df command again.  If the drive is indeed formatted to a DOS format it will automount when plugged in.




  1. `$ df -hT`




Filesystem      Type      Size  Used Avail Use% Mounted on




udev            devtmpfs   10M     0   10M   0% /dev




tmpfs           tmpfs     165M  4.8M  160M   3% /run




/dev/mmcblk0p10 ext4      6.8G  3.8G  2.8G  58% /




tmpfs           tmpfs     411M   68K  411M   1% /dev/shm




tmpfs           tmpfs     5.0M  4.0K  5.0M   1% /run/lock




tmpfs           tmpfs     411M     0  411M   0% /sys/fs/cgroup




/dev/sda1       ext4      253G  1.2G  239G   1% /mnt




tmpfs           tmpfs      83M  8.0K   83M   1% /run/user/1000




tmpfs           tmpfs      83M     0   83M   0% /run/user/0




/dev/mmcblk0p1  vfat       64M   22M   42M  35% /media/linaro/00BC-614E2




2. `$ ls -l /dev/sda*`




ls: cannot access /dev/sdb*: No such file or directory




3. `Plug in the USB drive`




4. `$ df -hT`




Filesystem      Type      Size  Used Avail Use% Mounted on




udev            devtmpfs   10M     0   10M   0% /dev




tmpfs           tmpfs     165M  4.8M  160M   3% /run




/dev/mmcblk0p10 ext4      6.8G  3.8G  2.8G  58% /




tmpfs           tmpfs     411M   68K  411M   1% /dev/shm




tmpfs           tmpfs     5.0M  4.0K  5.0M   1% /run/lock




tmpfs           tmpfs     411M     0  411M   0% /sys/fs/cgroup




/dev/sda1       ext4      253G  1.2G  239G   1% /mnt




tmpfs           tmpfs      83M  8.0K   83M   1% /run/user/1000




tmpfs           tmpfs      83M     0   83M   0% /run/user/0




/dev/mmcblk0p1  vfat       64M   22M   42M  35% /media/linaro/00BC-614E2




/dev/sda1         vfat 253G 1.2G 239G 1% /media/linaro/555C-4536E




5. `$ ls -l /dev/sda*`




brw-rw---- 1 root disk 8, 0 May 21 22:31 /dev/sda




brw-rw---- 1 root disk 8, 1 May 21 22:31 /dev/sda1




6. `$ sudo umount /media/linaro/555C-4536E`


As you can see above by comparing the two outputs from the df command a drive was automounted on /media/linaro/555C-4536E and it was type vfat which is a DOS format that we don’t want.  So we used the umount command to unmount the drive so we can work on it.  If the output of the df command did not change at all after plugging in the external USB HD, it’s likely not formatted at all and will require formatting it to our prefered format.  If you look at the output of the ls commands and you see only one line “brw-rw---- 1 root disk 8, 0 May 21 22:31 /dev/sda” and you don’t see “brw-rw---- 1 root disk 8, 1 May 21 22:31 /dev/sda1“ than the HD was recognised but it’s not partitioned so it did not automount, so we just need to partition and format it.  All easy to do.  If the drive automounted and it was a vfat drive do the following:




  1. `$ sudo fdisk /dev/sda`


```

Welcome to fdisk (util-linux 2.27.1).




Changes will remain in memory only, until you decide to write them.




Be careful before using the write command.




a. Command (m for help): d <enter>




Selected partition 1




Partition 1 has been deleted.




b. Command (m for help): w <enter>




The partition table has been altered.




Calling ioctl() to re-read partition table.




Syncing disks.

```

Now you can add a swap partition and a linux data storage partition, do the following:




  1. `$ sudo fdisk /dev/sda`




Welcome to fdisk (util-linux 2.27.1).




Changes will remain in memory only, until you decide to write them.




Be careful before using the write command.




a. Command (m for help): n <enter>




Partition type




  p   primary (0 primary, 0 extended, 4 free)




  e   extended (container for logical partitions)




b. Select (default p): p <enter>




c. Partition number (1-4, default 1): 1 <enter>




d. First sector (2048-537234767, default 2048): <enter>




e. Last sector, +sectors or +size{K,M,G,T,P} (2048-537234767, default 537234767): +4G <enter>




Created a new partition 1 of type 'Linux' and of size 4 GiB.




f. Command (m for help): t <enter>




g. Selected partition 1 <enter>




h. Partition type (type L to list all types): 82 <enter>




Changed type of partition 'Linux' to 'Linux swap / Solaris'.




Command (m for help): n




Partition type




  p   primary (1 primary, 0 extended, 3 free)




  e   extended (container for logical partitions)




i. Select (default p): p <enter>




j. Partition number (2-4, default 2): 2 <enter>




k. First sector (8390656-537234767, default 8390656): <enter>




l. Last sector, +sectors or +size{K,M,G,T,P} (8390656-537234767, default 537234767): <enter>




Created a new partition 2 of type 'Linux' and of size 252.2 GiB.




m. Command (m for help): w




The partition table has been altered.




Calling ioctl() to re-read partition table.




Syncing disks.




n. `$ sudo mkswap /dev/sda1`




Setting up swapspace version 1, size = 4 GiB (4294963200 bytes)




no label, UUID=70a8b4ef-95c9-4d96-9d19-c943718a800c




o. `$ sudo blkid /dev/sda1`




/dev/sda1: UUID="70a8b4ef-95c9-4d96-9d19-c943718a800c" TYPE="swap"




p. `$ mkfs.ext4 /dev/sda2`




mke2fs 1.42.12 (29-Aug-2014)




Creating filesystem with 66105514 4k blocks and 16531456 inodes




Filesystem UUID: bd113554-d64e-407c-ab44-39e7d8c02f28




Superblock backups stored on blocks:




32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,




4096000, 7962624, 11239424, 20480000, 23887872





Allocating group tables: done                            




Writing inode tables: done                            




Creating journal (32768 blocks): done




Writing superblocks and filesystem accounting information: done     




q. `$sudo blkid /dev/sda2`




/dev/sda2: UUID="bd113554-d64e-407c-ab44-39e7d8c02f28" TYPE="ext4"




Now the USB HD is formatted with 4Gig of Swap space and the remainder storage space for your files.  Next we need to mount both partitions of the drive.  To do that we need to make some entries in /etc/fstab.  Once the entries are made the swap and storage space will be mounted on every boot.  To do this as root edit the /etc/fstab file with your favorite editor and add the below two lines to the end of the file.  The UUID comes from above when we formatted the partitions




  1. `$ sudo jstar /etc/fstab`




UUID=70a8b4ef-95c9-4d96-9d19-c943718a800c none swap sw 0 0




UUID=bd113554-d64e-407c-ab44-39e7d8c02f28 /var/minidlna ext4 defaults 0 2




^K^X (file exit command of the jstar editor)


We need to create the mount point for the USB HD, in the fstab file above we said it is /var/minidlna.  It can be argued where the best place is for this mount point but I like the /var partition so I’m going to use it.




  1. `$ sudo mkdir /var/minidlna`


  2. `$ sudo chown minidlna:minidlna /var/minidlna`




# Configure the Media (DLNA) Server


Just about done, just have to edit the config file for minidlna which is up in /etc/minidlna.conf so using your favorite text editor and make the file look like below.  The config option “friendly_name” should be set to whatever name you like, that is the name that will show up in DLNA clients, it is possible to have more than one one DLNA server on a network so set the name to something you like and will remember.  The critical entries will be highlighted in light green.  Once you complete your edits save and exit the file.




  1. `$ sudo jstar /etc/minidlna.conf`

```


# This is the configuration file for the MiniDLNA daemon, a DLNA/UPnP-AV media




# server.




#




# Unless otherwise noted, the commented out options show their default value.




#




# On Debian, you can also refer to the minidlna.conf(5) man page for




# documentation about this file.




# Specify the user name or uid to run as.




user=minidlna




# Path to the directory you want scanned for media files.




#




# This option can be specified more than once if you want multiple directories




# scanned.




#




# If you want to restrict a media_dir to a specific content type, you can




# prepend the directory name with a letter representing the type (A, P or V),




# followed by a comma, as so:




#   * "A" for audio    (eg. media_dir=A,/var/lib/minidlna/music)




#   * "P" for pictures (eg. media_dir=P,/var/lib/minidlna/pictures)




#   * "V" for video    (eg. media_dir=V,/var/lib/minidlna/videos)




media_dir=A,/var/minidlna/music




media_dir=P,/var/minidlna/pictures




media_dir=V,/var/minidlna/videos




# Path to the directory that should hold the database and album art cache.




db_dir=/var/cache/minidlna




# Path to the directory that should hold the log file.




log_dir=/var/log




# Type and minimum level of importance of messages to be logged.




#




# The types are "artwork", "database", "general", "http", "inotify",




# "metadata", "scanner", "ssdp" and "tivo".




#




# The levels are "off", "fatal", "error", "warn", "info" or "debug".




# "off" turns of logging entirely, "fatal" is the highest level of importance




# and "debug" the lowest.




#




# The types are comma-separated, followed by an equal sign ("="), followed by a




# level that applies to the preceding types. This can be repeated, separating




# each of these constructs with a comma.




#




# The default is to log all types of messages at the "warn" level.




#log_level=general,artwork,database,inotify,scanner,metadata,http,ssdp,tivo=warn




# Use a different container as the root of the directory tree presented to




# clients. The possible values are:




#   * "." - standard container




#   * "B" - "Browse Directory"




#   * "M" - "Music"




#   * "P" - "Pictures"




#   * "V" - "Video"




# If you specify "B" and the client device is audio-only then "Music/Folders"




# will be used as root.




#root_container=.




# Network interface(s) to bind to (e.g. eth0), comma delimited.




# This option can be specified more than once.




#network_interface=




# IPv4 address to listen on (e.g. 192.0.2.1/24).




# If omitted, the mask defaults to 24. The IPs are added to those determined




# from the network_interface option above.




# This option can be specified more than once.




#listening_ip=




# Port number for HTTP traffic (descriptions, SOAP, media transfer).




# This option is mandatory (or it must be specified on the command-line using




# "-p").




port=8200




# URL presented to clients (e.g. http://example.com:80).




presentation_url=/




# Name that the DLNA server presents to clients.




# Defaults to "hostname: username".




friendly_name=dm home




# Serial number the server reports to clients.




# Defaults to 00000000.




serial=681019810597110




# Model name the server reports to clients.




model_name=Windows Media Connect compatible (MiniDLNA)




# Model number the server reports to clients.




# Defaults to the version number of minidlna.




#model_number=




# Automatic discovery of new files in the media_dir directory.




inotify=yes




# List of file names to look for when searching for album art.




# Names should be delimited with a forward slash ("/").




# This option can be specified more than once.




album_art_names=Cover.jpg/cover.jpg/AlbumArtSmall.jpg/albumartsmall.jpg




album_art_names=AlbumArt.jpg/albumart.jpg/Album.jpg/album.jpg




album_art_names=Folder.jpg/folder.jpg/Thumb.jpg/thumb.jpg




# Strictly adhere to DLNA standards.




# This allows server-side downscaling of very large JPEG images, which may




# decrease JPEG serving performance on (at least) Sony DLNA products.




strict_dlna=no




# Support for streaming .jpg and .mp3 files to a TiVo supporting HMO.




enable_tivo=yes




# Notify interval, in seconds.




notify_interval=180




# Path to the MiniSSDPd socket, for MiniSSDPd support.




minissdpdsocket=/run/minissdpd.sock




^K^X (file exit command of the jstar editor)

```



Finally it’s done, all that is left is a reboot and the system will come up and running.  To add content add it into /var/minidlna/videos,  /var/minidlna/pictures, and  /var/minidlna/music.  The server will watch those directories and will notice when content is added and publish it to any clients on your home network.


# Reboot and the media server is up and running


So reboot the system and a final bit of housekeeping and you are set.




  1. `$ sudo shutdown -r now`


Now log back in and make the content directories, and fill them up with your media:




  1. `$ cd /var`


  2. `$ sudo mkdir minidlna/music`


  3. `$ sudo mkdir minidlna/pictures`


  4. `$ sudo mkdir minidlna/videos`


  5. `$ sudo chown -R minidlna:minidlna ./minidlna`


Now copy in your mps’s, videos, and jpegs to the correct directory and you are off and running. :-)  Sometimes, I’m not quite sure why the media server does not detect new media being added (it should see the inode changes), if that happens, simply do the following:




  1. `$ sudo /etc/init.d/minidlna force-reload`


This will stop the media server, force a complete reindexing of the content directories, restart the media server and display all of the content to the remote clients.


# Testing with devices around my home


So now I have a media server, how hard is it to get devices around my home working with it? Let me describe my home network, it’s a bit different than some but not too different.  I have FIOS fiber to my house, that connects to a firewall device that I built, it’s a Linux computer system with 4 Ethernet connections in it (WAN, LAN1, LAN2, LAN3), LAN1 connects to an Access Point (AP) that is also a firewall, behind which is my home network, both wired and wireless.  The wired side is all 1Gig or better, the wireless is rated over 300bps everywhere but who knows, my neighborhood is saturated with home AP’s I can see at least 20 different homes from my upstairs AP!  The AP is in the back of the house and on the second floor and covers the living space pretty well.  The wireless network is where my family connects laptops, phones, iTouches, school chromebooks, etc.  The wired side mostly goes into my home office.  From there I connect my home servers, work computers, printers, a second AP that is only for wireless connections in my office, it does not act as a firewall. The media server is sitting on my desk right now, hooked into the wired side of my network, and broadcast over the wireless side by my 2 AP’s.  Again nothing too complex.  All of my TV’s, TIVO’s, Roku’s and DVD/Blueray players are all hardwired into the central core of my house so as not to saturate my WiFi network when streaming video media from place to place in my house. LAN2 is a guest network for visitors and LAN 3 is a IoT network.

I had some success and some failures connecting to the media server, overall it is a success.  I first tested my “smart” Samsung TV’s, yep they have a media app that saw the server on the home network and “just worked”.  No fuss no muss, click on the app, and then click on the dm home server icon.  All the pictures displayed, my mp3’s just worked as expected, the videos from both my phone and my small hand held camera played perfectly. Yea.  Now some of the video was “interesting”  I shot some in a vertical format (with my cell phone) and some in a horizontal format (the normal way video should be shot).  For the TV app’s it did not matter, the video shot in the vertical was shown vertical and the video shot horizontally was shown that way, just as you would expect (I’ll come back to this later).

![96boards Media Server Image 1]({% asset_path "96boards-media-server-img-1.jpg" %}){:class="img-responsive lazyload"}
![96boards Media Server Image 2]({% asset_path "96boards-media-server-img-2.jpg" %}){:class="img-responsive lazyload"}

The first failure was my TIVO’s, they currently just don’t do DLNA currently.  Now I’ve read online that by next year they will, we shall see.  I “think” it might have worked to some degree if I had files that were in the correct format for a TIVO, but I could not be bothered to convert the files.

Next I jumped to my Roku boxes.  Here like my smart TV’s I had immediate success, there was an app that I clicked on and it saw the media server.  Again no fuss no muss (sort of).  When I clicked on it I got the expected display of pictures, music, and video, the pictures and the music all worked exactly as expected.  BUT when I clicked on the video I got an unpleasant surprise. Video shot horizontally (the normal video format) just worked as expected, video shot in the vertical format did indeed play but in a horizontal format UGH, there is my son and the band he plays with playing his Sax on his side, not quite what I expected or wanted.  I could not find a setting that fixed that.  I’ll have to spend more time in the Roku forums to see if there is a better app that might work as expected.


![96boards Media Server Image 4]({% asset_path "96boards-media-server-img-4.jpg" %}){:class="img-responsive lazyload"}
![96boards Media Server Image 5]({% asset_path "96boards-media-server-img-5.jpg" %}){:class="img-responsive lazyload"}


Next my office MacPro Laptop, now to be fair I don’t use the Mac like most people do, I’ve stripped most of the Mac software off and replaced it with Open Source equivalents.  And sure enough there is an application called VLC that is cross platform for the Mac, Linux and Windows.  I installed the Mac version and it just worked.  Everything including the vertical videos just played with no hiccups.

![96boards Media Server Image 3]({% asset_path "96boards-media-server-img-3.png" %}){:class="img-responsive lazyload"}

On to my Linux Laptop, I again installed VLC and again it just worked with no issues. Wow this simpler then I expected.  Ha,  then I tried to install VLC on a Linux desktop machine, no joy it installed fine but could not find the DLNA server, then I installed kodi and everything went fine and video, audio and images all work as expected from the DLNA server. I have no idea why… some day I’ll look into it, but kodi works really nicely.

Next my Android phone, yep there are “LOT’S” of android apps that are DLNA clients, some free some pay for.  I tried a bunch of the free ones, for the most part they all worked some easier than others some slightly buggy, we have a bunch of Android phones and different apps worked differently on different phones so no clear winner, VLC is available on Android and for the most part worked on all of my phones so that is a starting point if you like. You really just have to try them on your phone and see what works best for you, rest assured there are lots to try.  Truth be told however at least for me, I’m not going to use my phone much for this, since I’m home and I’m surrounded by TV, video monitors, computers, and tablets, why use such a small screen?

Moving on, my kids have chromebooks, and there is a VLC app for them, I’ve not tried it yet but I can’t imagine why it would not just work as expected since it just works on both the Mac and a Linux PC.



* * *



For all you audio/visual folks, get caught up by visiting the **[96Boards YouTube channel](https://www.youtube.com/c/96boards?sub_confirmation=1)**. There you will find several playlists to help maneuver through the content. **Don’t forget to subscribe**!

For 96Boards announcements and fun, be sure to visit and follow all of our social media channels!

**[Twitter](https://twitter.com/96Boards) &#124;[Linkedin](https://www.linkedin.com/company/6637095?trk=tyah&trkInfo=clickedVertical%3Ashowcase%2CclickedEntityId%3A6637095%2Cidx%3A1-1-1%2CtarId%3A1483603913878%2Ctas%3A96boards) &#124;[Facebook](https://www.facebook.com/96Boards/)**

For those of you who prefer a mailing list, we have just the one for you! You can choose between our “**[Monthly Newsletter](https//www.96boards.org/newsletter/)**” and our “**[Weekly Digest](https//www.96boards.org/newsletter/digest/)**”. Get ready for just the right amount of commitment and information, 2017 is calling and 96Boards is here to answer.

Remember, you are all the reason this is possible. Please join us in welcoming a vibrant and new twist on community engagement. With OpenHours we will take on some exciting challenges this year.

Every week at 4:00pm UTC the 96Boards team engages in the ultimate community driven experience. All are welcome to join LIVE, for free, to interact as equal members in the 96Boards tribe of enthusiasts and developers. This is your channel/means to bring up interesting/controversial topics, explore new possibilities around the 96Boards brand, and pretty much anything else you would like to talk about! You can also just simply join to hang out and have a quick chat while you enjoy your morning coffee/tea :D

Don’t forget, if you get stuck, 96Boards offers many helpful resources. Feel free to check out the **[96Boards forums](https//discuss.96boards.org/), [96Boards documenation landing page](https://github.com/96boards/documentation/), and/or [Freenode IRC](http://webchat.freenode.net/?channels=%2396boards)** channel #96Boards (there are many ways to access IRC, this website is one of them). Dig around the docs and website, create a new forum thread, and/or post a question in the chat, myself or one of the 96Boards developers would love to help!

**Other Blogs from David Mandala:**




  * [How do you access the GPIO pins programmatically?](https//www.96boards.org/blog/access-gpio-pins-programmatically/)


  * [How do you install 96Board GPIO, libsoc and libmraa on a new image?](https//www.96boards.org/blog/install-96boardgpio-libsoc-libmraa-new-image/)


  * [How to Cross Compile files on X86 Linux System for 96Boards, libsoc & mraa libraries](https//www.96boards.org/blog/cross-compile-files-x86-linux-to-96boards/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux](https//www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux/)


  * [Using Eclipse on X86 Linux to cross compile C & C++ for ARM Linux with external libraries](https//www.96boards.org/blog/eclipse-x86-linux-cross-compile-arm-linux-external-libraries/)


  * [Eclipse remote development and debugging](https//www.96boards.org/blog/eclipse-remote-development-debugging/)


  * [96Boards Survery: What do 96Boards users care about?](https//www.96boards.org/blog/96boards-survey-1/)


  * [Community Mezzanine Board](https//www.96boards.org/blog/community-mezzanine-board/)
