---
author: Sahaj Sarup
comments: true
date: 2017-10-24 00:00:00+00:00
layout: post
slug: basic-threads-zephyr
image:
    featured: true
    path: /assets/images/blog/zephyr.jpg
    name: zephyr.jpg
title: Basic Threads on Zephyr RTOS
categories:
- blog
tags:
- Cortex-M4
- 96Boards
- ARM
- GPIO
- Carbon
- Neonkey
- Nitrogen
- Zephyr
- IoT
- RTOS
- Threads
---

# **Introduction**

[Zephyr](https://www.zephyrproject.org/), a project of The Linux Foundation is a small real-time operating system for connected, resource-constrained devices supporting multiple architectures, and without a doubt, it's Open Source under the Apache License 2.0

One of the features of Zephyr I personally like is the implementation of threads. There have been multiple times that I have wished for my Arduino to support Multi-threading, but sadly that's just not the case until you are willing to put in [a LOT of effort](http://petenpaja.blogspot.in/2013/11/toorums-quest-ii-retro-video-game.html).

So, this means that Zephyr gives us the capability of running multiple threads in parallel on ultra-low powered micro-controller like the ones based on the ARM Cortex-M4 that powers the Carbon and the Nitrogen IoT Boards.

# **3 Threads 1 main()**

Although the [Zephyr Source Code](https://www.zephyrproject.org/downloads) does contain an [example](https://github.com/zephyrproject-rtos/zephyr/tree/master/samples/synchronization) to demonstrate threads, IMO its a bit complicated. In their defense, they intended to show synchronized threads and not just the basic implementation.

So, let's take a look at my sample which is available on [GitHub](https://github.com/96boards-projects/zephyr_multithread_blinky) as well:

```c
#include <zephyr.h>
#include <device.h>
#include <gpio.h>
#include <misc/printk.h>
#include <shell/shell.h>

/* size of stack area used by each thread */
#define STACKSIZE 128

/* scheduling priority used by each thread */
#define PRIORITY 7

#define MY_SHELL_MODULE "sample_module"

/*-----shell code fom <zephyr_base>/samples/subsys/shell/shell/------*/
static int shell_cmd_ping(int argc, char *argv[])
{
	ARG_UNUSED(argc);
	ARG_UNUSED(argv);

	printk("pong\n");

	return 0;
}

static int shell_cmd_params(int argc, char *argv[])
{
	int cnt;

	printk("argc = %d\n", argc);
	for (cnt = 0; cnt < argc; cnt++) {
		printk("  argv[%d] = %s\n", cnt, argv[cnt]);
	}
	return 0;
}

static struct shell_cmd commands[] = {
	{ "ping", shell_cmd_ping, NULL },
	{ "params", shell_cmd_params, "print argc" },
	{ NULL, NULL, NULL }
};

void main(void)
{
	SHELL_REGISTER(MY_SHELL_MODULE, commands);
}
/*-------------------------------------------------------------------*/


void blink1(void)
{
	int cnt = 0;
	struct device *gpioa;

	gpioa = device_get_binding("GPIOA");
	gpio_pin_configure(gpioa, 15, GPIO_DIR_OUT);
	while (1) {
		gpio_pin_write(gpioa, 15, (cnt + 1) % 2);
		k_sleep(100);
		cnt++;
	}
}

void blink2(void)
{
	int cnt = 0;
	struct device *gpiod;

	gpiod = device_get_binding("GPIOD");
	gpio_pin_configure(gpiod, 2, GPIO_DIR_OUT);
	while (1) {
		gpio_pin_write(gpiod, 2, cnt % 2);
		k_sleep(1000);
		cnt++;
	}
}

void blink3(void)
{
	int cnt = 0, cnt2 = 0, sleep = 100;
	struct device *gpiob;

	gpiob = device_get_binding("GPIOB");
	gpio_pin_configure(gpiob, 5, GPIO_DIR_OUT);
	while (1) {
		while (cnt2 != 5) {
			gpio_pin_write(gpiob, 5, cnt2 % 2);
			k_sleep(sleep);
			sleep += 100;
			cnt2++;
		}
		cnt2 = 0;
		sleep = 100;
	}
}

K_THREAD_DEFINE(blink1_id, STACKSIZE, blink1, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
K_THREAD_DEFINE(blink2_id, STACKSIZE, blink2, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
K_THREAD_DEFINE(blink3_id, STACKSIZE, blink3, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
```

### ***What's the code?***

**Lets skip the first 48 lines for now and start from:**
```c
void blink1(void)
{
	int cnt = 0;
	struct device *gpioa;

	gpioa = device_get_binding("GPIOA");
	gpio_pin_configure(gpioa, 15, GPIO_DIR_OUT);
	while (1) {
		gpio_pin_write(gpioa, 15, (cnt + 1) % 2);
		k_sleep(100);
		cnt++;
	}
}
```
This function, blink1(), basically is a loop to blink USR1 LED on the Carbon board, If we were to write a code just to blink the LED, the contents of blink1() would be placed inside main() and it would work just fine.

Similarly blink2() and blink3() control the USR2 and BT LEDs respectively with different patter for each.

**Moving on to the star of the show:**
```c
K_THREAD_DEFINE(blink1_id, STACKSIZE, blink1, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
K_THREAD_DEFINE(blink2_id, STACKSIZE, blink2, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
K_THREAD_DEFINE(blink3_id, STACKSIZE, blink3, NULL, NULL, NULL,
		PRIORITY, 0, K_NO_WAIT);
```
K_THREAD_DEFINE is the function that allows us to create threads at compile time.
It is defined as ```K_THREAD_DEFINE(name, stack_size, entry, p1, p2, p3, prio, options, delay)```

Parameters:
- ***name***: Name of the threads.
- ***stack_size***: Stack size in bytes. I have used the macro STACKSIZE, but it can be individually set.
- ***entry***: Thread entry function.
- ***p1***: 1st entry point parameter.
- ***p2***: 2nd entry point parameter.
- ***p3***: 3rd entry point parameter.
- ***prio***: Thread priority. I have used the macro PRIORITY, but it can be individually set.
- ***options***: Thread options.
- ***delay***: Scheduling delay (in milliseconds), or K_NO_WAIT (for no delay).

[Source](https://www.zephyrproject.org/doc/api/kernel_api.html#c.K_THREAD_DEFINE)


**To main() or not to main().**

Actually, it doesn't really matter. The code would run just as well without it, just the code within main() will not be run for obvious reasons.

**Back to the top (ignoring the macros)**
```c
/*-----shell code fom <zephyr_base>/samples/subsys/shell/shell/------*/
static int shell_cmd_ping(int argc, char *argv[])
{
	ARG_UNUSED(argc);
	ARG_UNUSED(argv);

	printk("pong\n");

	return 0;
}

static int shell_cmd_params(int argc, char *argv[])
{
	int cnt;

	printk("argc = %d\n", argc);
	for (cnt = 0; cnt < argc; cnt++) {
		printk("  argv[%d] = %s\n", cnt, argv[cnt]);
	}
	return 0;
}

static struct shell_cmd commands[] = {
	{ "ping", shell_cmd_ping, NULL },
	{ "params", shell_cmd_params, "print argc" },
	{ NULL, NULL, NULL }
};

void main(void)
{
	SHELL_REGISTER(MY_SHELL_MODULE, commands);
}
/*-------------------------------------------------------------------*/
```
As I've mentioned in the comments, this is basically all of the code from the [shell sample](https://github.com/zephyrproject-rtos/zephyr/tree/master/samples/subsys/shell/shell), simply copied and run from main().

So as you would've probably noticed there is no need to create a thread for main() using K_THREAD_DEFINE, and also main() usually has a fairly high priority as we'll see later on once we have compiled and run our code.

## ***Compile and run***

**Setup Zephyr Development environment :**

Make sure you follow [this guide](https://www.zephyrproject.org/downloads) to download zephyr source code and install the SDK.

**Download the zephyr_multithread_blinky sample app :**

- Make sure you are in the base directory for the zephyr source, from here on I'll refer it to as zephyr_base
- Download the sample app
  ```shell
  $ git clone https://github.com/96boards-projects/zephyr_multithread_blinky/
  ```
- Set up zephyr environment
  ```shell
  $ source zephyr-env.sh
  ```
- Change directory to zephyr_multithread_blinky
  ```shell
  $ cd zephyr_multithread_blinky
  ```
- Compile
  ```shell
  $ make
  ```
- Flash: follow the flashing guide from [here](https://www.96boards.org/documentation/IoTEdition/carbon/installation/LinuxOTG.md.html)
  ```shell
  $ sudo dfu-util -d [0483:df11] -a 0 -D outdir/96b_carbon/zephyr.bin -s 0x08000000
  ```
- Press the reset button to run the code.

## **Conclusion**

You should be able to see all the three LEDs, USR1 USR2 and BT, blinking independently.

![](http://i.imgur.com/ByVqe4q.gif)

Now, let's take a look at the shell. First, we'll need to connect the Carbon to a PC using the UART micro-usb port.

Now, to see the UART output I usually use picocom and for the carbon we'll set the bitrate to 115200. This command works for me just fine.

```shell
$ sudo picocom /dev/ttyUSB0 -b 115200
```

Now as soon as you press Enter you should see a prompt like: ```shell>```

Now remember I mentioned that main() has a fairly high priority, lets take a look at that via the shell:

```
shell> select kernel
kernel> tasks
tasks:
 0x2000066c:   options: 0x0 priority: 7
 0x200005fc:   options: 0x0 priority: 7
 0x2000058c:   options: 0x0 priority: 7
*0x20000310:   options: 0x0 priority: -9
 0x20000704:   options: 0x0 priority: -1
 0x20000384:   options: 0x1 priority: 15
kernel>
```
If you take another look at the core you would see that I set the priority for all the three threads to 7 using the PRIORITY macro. And we can see the same thing here as well. And the entry with '*', that has the priority set at -9, seems to be our main() function.
