---
author: ldts
comments: true
date: 2016-09-04 12:50:04+00:00
layout: post
link: https://www.96boards.org/blog/running-kvm-guest-hikey/
slug: running-kvm-guest-hikey
image:
    featured: true
    path: /assets/images/blog/kvm-logo.f083d4c9dcb0.png
    name: kvm-logo.f083d4c9dcb0.png
title: Running a KVM guest on HiKey
wordpress_id: 17013
Boards:
- HiKey
categories:
- blog
- Tutorials
tags:
- 96Board
- HiKey
- kvm
- kvmtool
---

## SUMMARY


For some releases now,  [KVM](http://www.linux-kvm.org/page/Main_Page) - the virtualization infrastructure that turns the Linux kernel into an hypervisor- has been available in the [HiKey from 96Boards](/product/hikey/).  This was made possible thanks to the open nature of the HiKey software stack but also to the early work done by Marc Zyngier as captured on this [post](https://discuss.96boards.org/t/kvm-hypervisor-support/34) and the numerous contributions to aarch64 from the Linaro Virtualization team.

The second version of the VM System Specification for ARM processors was released back in April 2016: this document aims at [..] providing a set of guidelines for both guest OS and hypervisors such that OS images built according to these guidelines shall guarantee that those images will be able to execute on those hypervisors [...].  You can download the 2.0 version of the specification on this [link](https://www.linaro.org/assets/downloads/VMSystemSpecificationForARM-v2.0.pdf).

Having said that and despite the specification being available - but perhaps due to it being so recent-  you might have some issues finding OS images that comply to it.

However this doesn’t prevent you from running a networking enabled Linux guest on your octa-core [HiKey](/product/hikey/); as a matter of fact, there is a simple yet efficient way to execute a Linux guest OS on any Linux KVM enabled system without the need for more complex - and powerful- software virtualization packages: the native KVM tool, ie [kvmtool](https://lwn.net/Articles/438182/).

But of course you can still use QEMU if that is what you like.

```
jro@HiKey:~# qemu-system-aarch64 -machine virt -cpu cortex-a53 -machine type=virt -nographic -smp 1 -m 512 -kernel /boot/vmlinuz-4.4.0-135-arm64 --append "console=ttyAMA0" --enable-kvm
```

## How to Install and Run kvmtool.


Depending on whether your interest leans towards learning about the KVM API or simply in starting another Linux instance as a guest, you might choose to either install from source or  use a package manager. We will discuss building from source in the next section and focus on the quick way of running it on this one. 

To install the kvmtool on Debian run the following on a terminal:


`jro@HiKey:~# apt-get install kvmtool`

By default,  the HiKey kernel should have been configured with all the recommended settings for kvmtool (see [README](https://git.kernel.org/cgit/linux/kernel/git/will/kvmtool.git/tree/README)). If you found that not to be the case,  follow the HiKey building from source [instructions](https://github.com/Linaro/documentation/tree/master/Reference-Platform) and replace the kernel.  

To check for a  particular kernel config in a running kernel, for example CONFIG_NET_9P, do the following:

`jro@HiKey:~# zcat /proc/config.gz | grep CONFIG_NET_9P`

A good way of enabling configs before re-building a kernel is to use the scripts/config that is present in the Linux tree:

`jro@HiKey:~/linux.git# scripts/config --enable CONFIG_NET_9`

If you have used kvmtool on other platforms and never had the need to specify a kernel image  be aware that arm64 requires an uncompressed kernel to boot (see section 3 of the booting arm64 kernel [document](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/Documentation/arm64/booting.txt?id=refs/tags/v4.8-rc4)): on arm64 booting the guest with the default options fails since the [default kernels ](https://git.kernel.org/cgit/linux/kernel/git/will/kvmtool.git/tree/builtin-run.c#n203)handled by kvmtool are compressed images.

This **failure** will show something like this on a terminal:


```

jro@HiKey:~# lkvm run

# lkvm run -k /boot/vmlinuz-4.4.0-135-arm64 -m 256 -c 2 --name guest-1715

Info: Loaded kernel to 0x80080000 (15869952 bytes)

Info: Placing fdt at 0x8fe00000 - 0x8fffffff

Info: virtio-mmio.devices=0x200@0x10000:36

Info: virtio-mmio.devices=0x200@0x10200:37

Info: virtio-mmio.devices=0x200@0x10400:38

```


Fortunately you can kill the process from another terminal with SIGTERM (ie: kill _pid_)

```
jro@HiKey:~#  kill `pidof lkvm`
```

To use kvmtool to start a guest on arm64 you have to use the option '-k' with the uncompressed kernel image: in the case above that failed, you could boot the guest it by gzip decompress the vmlinuz file (/boot/vmlinuz-4.4.0-135-arm64) and pass it to the kvmtool.

`jro@HiKey$ lkvm run -k/boot/vmlinuz-4.4.0-135-arm64.uncompressed`

Now on to the guest's filesystem: one of the neat features that kvmtool provides is the automatic creation of a simple root file system derived from that of the host. By default the host shares its filesystem with the guest placing the guest's in **~/.lkvm/default/.**  This is achieved via using [virtfs](https://landley.net/kdocs/ols/2010/ols2010-pages-109-120.pdf) (virtualization aware file system pass-through).

```
guest# zcat config.gz | grep 9P

CONFIG_NET_9P=y

CONFIG_NET_9P_VIRTIO=y

CONFIG_9P_FS=y

guest# mount

/dev/root on / type 9p (rw,relatime,dirsync,trans=virtio,version=9p2000.L,cache=loose)

hostfs on /host type 9p (ro,relatime,sync,dirsync,trans=virtio,version=9p2000.L)

```


On boot  this is what you should expect to see on the top directory:

```
guest# ls -la

total 36

drwxr-xr-x 12 root 0 4096 Aug 25 2016 .

drwxr-xr-x 12 root 0 4096 Aug 25 2016 ..

lrwxrwxrwx 1 root 0 9 Aug 25 2016 bin -> /host/bin

drwxr-xr-x 6 root 0 2800 Jan 1 00:00 dev

drwxr-xr-x 2 root 0 4096 Aug 25 2016 etc

drwxr-xr-x 2 root 0 4096 Aug 25 2016 home

drwxr-xr-x 22 root 0 4096 Aug 24 2016 host

lrwxrwxrwx 1 root 0 9 Aug 25 2016 lib -> /host/lib

lrwxrwxrwx 1 root 0 11 Aug 25 2016 lib64 -> /host/lib64

dr-xr-xr-x 56 root 0 0 Jan 1 00:00 proc

drwxr-xr-x 5 root 0 4096 Aug 25 2016 root

lrwxrwxrwx 1 root 0 10 Aug 25 2016 sbin -> /host/sbin

dr-xr-xr-x 12 root 0 0 Jan 1 00:00 sys

drwxr-xr-x 2 root 0 4096 Aug 25 2016 tmp

lrwxrwxrwx 1 root 0 9 Aug 25 2016 usr -> /host/usr

drwxr-xr-x 3 root 0 4096 Aug 25 2016 var

drwxr-xr-x 3 root 0 4096 Aug 25 2016 virt

```


With respect to networking, the guest  will be assigned the IP address [192.168.33.15](https://git.kernel.org/cgit/linux/kernel/git/will/kvmtool.git/tree/include/kvm/kvm-config.h) (click on it to browse the include file in the tree); executing the _ifconfig_ command on the guest should return something like this:


```
guest# ifconfig

eth0 Link encap:Ethernet HWaddr 02:15:15:15:15:15

inet addr:192.168.33.15 Bcast:192.168.33.255 Mask:255.255.255.0

UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1


guest# ping www.linaro.org

64 bytes from 104.20.31.15: icmp_seq=3 ttl=64 time=0.928 ms

^C

```


In summary -and as an example- to boot an arm64 Image using kvmtool and giving the guest two cores, 256MB and a virtual console on the HiKey board you could do:

```
jro@HiKey$ lkvm run --console serial -c2 -m256 -k Image -n mode=user,trans=mmio -p console="ttyS0 earlycon=uart,mmio,0x3f8"
```

When you are ready to exit the VM type "exit" on its console:

```
guest# exit

reboot: Restarting system

# KVM session ended normally.

```




## Building the kvmtool from source and tracing the KVM.


To install the kvmtool from source just clone the project and follow the [README](https://git.kernel.org/cgit/linux/kernel/git/will/kvmtool.git/tree/README) or perhaps its [INSTALL](https://git.kernel.org/cgit/linux/kernel/git/will/kvmtool.git/tree/INSTALL) instructions (preferably the later if you need further details or prefer  to cross-compile it instead of building natively on the HiKey).

```
jro@HiKey:~# git clone git://git.kernel.org/pub/scm/linux/kernel/git/will/kvmtool.git
```

If you are rebuilding the host kernel - maybe to add some extra options -  I'd recommend you to enable  [ftrace](https://www.kernel.org/doc/Documentation/trace/ftrace.txt) support:  this will allow you to  capture and analyze the behavior of KVM on the running system. (by default the Linaro Reference Platform Builds enables this option).

To get a list of all the KVM events that you can monitor from your host:

```
jro@HiKey:~# trace-cmd  list | grep kvm
```

[Tracing KVM](http://www.linux-kvm.org/page/Tracing) (ie, generating the trace.dat file that captures the KVM operation) is as simple as initiating a record session, executing the workload on the guest, stopping the recording session and analyzing the generated data.

At this point and to wrap it all up, you should be able to boot an arm64 Linux guest with network access on an arm64 Linux host using the HiKey board; you should also be able to trace and debug the host KVM functionality (perhaps, having read the kernel's virtualization [time keeping ](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/Documentation/virtual/kvm/timekeeping.txt?id=refs/tags/v4.8-rc5)documents  you are still curious about [realtime KVM](https://lwn.net/Articles/656807/)).

Moreover, if you are interested on developing your own KVM based host tool, have a look at how kvmtool does things (there are plenty of documents on the web as well as [presentations](https://www.youtube.com/watch?v=SsrfqHiQO4k)).
