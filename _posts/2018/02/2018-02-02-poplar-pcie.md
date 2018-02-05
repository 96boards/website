---
title: PCI Express On the 96Boards Poplar Enterprise Edition Board
author: Sahaj Sarup
date: 2018-02-02 01:01:54+00:00
image:
    featured: true
    path: /assets/images/poplar-pcie-thumb.png
    name: poplar-pcie.png
    thumb: poplar-pcie-thumb.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Enterprise Edition, EE, Poplar, pcie, sata, usb

---

# It Works!
I am very excited to let our readers know that finally, thanks to some developments in the past month, we now have a fully functioning PCIe slot on the Poplar Board !

Late last year, we saw the release of Linux 4.9 for the Poplar, which brought in support for PCIe. But even then we noticed that an externally powered PCIe Riser, like the one shown below, was required for most PCIe card to power up and get detected.

{% include image.html name="poplar-pcie-riser.jpg" alt="Your alternate text." %}

However, within days of reporting this bug, the issue of the 12v rail being inactive was fixed with these two commits:
- https://github.com/96boards-poplar/linux/commit/6f2c493d9a0f54e1545f673fe72ab985fb02751f
- https://github.com/96boards-poplar/linux/commit/e51dd2c55fde7f3381d90cab5b16236d83604341

And now, PCIe can be accessed directly from the on-board slot without any issues.

## Let's see it in action.

### My setup consists of :
- [96Boards Poplar](https://www.96boards.org/product/poplar/)
- A Generic no-name Brand PCIe SATA 3.0 Card: Based on the [ASM1060](http://www.asmedia.com.tw/eng/e_show_products.php?item=118) chipset to provide 2x SATA 3.0 ports.
- WD 500GB 2.5 inch HDD.
- 250W PSU (I know it a bit overpowered, but that's what I had)

{% include image.html name="poplar-pcie-testbench.jpg" alt="Your alternate text." %}

### The test :

It's as simple as using dd to write and then read an empty image file:
- **Write:** ```$ dd if=/dev/zero of=/mount/path/test.img bs=1M count=2k status=progress```
- **Read:** ```$ dd of=/dev/null if=/mount/path/test.img bs=1M count=2k status=progress```

### The Result :

*Note: The HDD is old and the score remains the same across various machines, this is not a performance benchmark*
- **Write:**
```
# dd if=/dev/zero of=test.img bs=1M count=2k status=progress
2146435072 bytes (2.1 GB, 2.0 GiB) copied, 20.0042 s, 107 MB/s
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 20.0075 s, 107 MB/s
```
- **Read:**
```
# dd of=/dev/null if=test.img bs=1M count=2k status=progress
2111832064 bytes (2.1 GB, 2.0 GiB) copied, 22.0006 s, 96.0 MB/s
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 22.324 s, 96.2 MB/s
```

# Conclusion
Of course, this PCIe SATA card is not the only one that works, pretty much anything thing goes here and then it's up to the driver support for the most part. I had also tested a VL805 based USB 3.0 Card and that also performed well.

In the end, a shout-out to Daniel Thompson for helping out in discovering the PCIe power bug, and to all the devs involved in Linux Kernel development for the Poplar Board.
