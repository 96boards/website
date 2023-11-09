---
title: Protein Folding on Arm Devices | Helping with COVID-19 Research
author: sahaj-sarup
date: 2020-03-29T01:00:00.000Z
image: ../../assets/images/blog/fold.png
image_name: fold.png
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey970, Linaro,
  Linux, arm64, protein folding, aerocore2
---

For the last couple of weeks I have been spending my spare cycles, along with a few other friends form the Arm Ecosystem, to get the power and efficiency of the aarch64 ISA in the hands of researchers and institutes that have been working tirelessly to make sense of the COVID-19 pandemic.

And I'm happy to announce that [Rosetta@home](https://boinc.bakerlab.org/) has officially announced the availability of Linux-ARM support, you can read more about it here: [https://boinc.bakerlab.org/rosetta/forum_thread.php?id=13702#93153](https://boinc.bakerlab.org/rosetta/forum_thread.php?id=13702#93153)

# Protein folding and Its relation to curing COVID-19

"Each protein exists as an unfolded polypeptide or random coil when translated from a sequence of mRNA to a linear chain of amino acids. This polypeptide lacks any stable (long-lasting) three-dimensional structure. As the polypeptide chain is being synthesized by a ribosome, the linear chain begins to fold into its three-dimensional structure. Folding begins to occur even during translation of the polypeptide chain. Amino acids interact with each other to produce a well-defined three-dimensional structure, the folded protein, known as the native state. The resulting three-dimensional structure is determined by the amino acid sequence or primary structure.

The correct three-dimensional structure is essential to function, although some parts of functional proteins may remain unfolded, so that protein dynamics is important. Failure to fold into native structure generally produces inactive proteins, but in some instances misfolded proteins have modified or toxic functionality. " - [WikiPedia](https://en.wikipedia.org/wiki/Protein_folding)

Researchers have taken snapshots of the proteins of the COVID-19, called SARS-CoV-2, using techniques like X-ray crystallography and cryo-electron microscopy. But proteins don’t hold still. All the atoms in the protein and (its surroundings) are continually pushing and pulling on each other. These folding simulations help with modeling those physical interactions in the computer. These simulations reveal the different shapes a protein’s structure can take.

Researchers usually look for a nice pocket on the surface of a protein where this little molecule that they design is inserted into a groove, but many proteins, particularly those in viruses, have seemingly smooth surfaces, making them hard to target.

# Where does Distributive Computing like [Rosetta@Home](https://boinc.bakerlab.org/) and Folding@Home come into play?

The study is usually carried out on very, very, very small timescales to capture the tiny jitters of atoms in proteins. Each step in the simulation is on the order of a femtosecond, or one quadrillionth of a second. To track protein motion over a second, they’ve got to do a billion-squared operations on the computer, and each of those operations requires them to ask how every pair of atoms in the protein and surrounding solution are interacting with each other. By drawing on the computing power of many volunteers at once, distributive computing network performs calculations in a single month that could take an ordinary desktop computer 100 years.

---

# Arm and Rosetta@Home

About a week ago, [David Tischler](https://community.arm.com/members/david-tischler) and [Rex St. John](https://www.rexstjohn.com/) contacted me to join what later became the "Rosetta on Arm Task Force" and help in porting and testing Rosetta on the Arm architecture. I was also joined by members of the [The Baker Lab, University of Washington](https://www.bakerlab.org/) ie the creators and maintainers of the Rosetta@Home Project, and developers from [Neocortix](https://www.neocortix.com/).

The Idea was to get developers working in the arm ecosystem, who like many of us have mounds of arm development hardware sitting in their closet, to join Rosetta and donate spare CPU cycles to protein folding efforts. Now more than ever.

While Dimitri (from Neocortix) worked on the initial patch that would allow cross-compilation on amd64 machines and an additional patch that allowed for docker builds, I worked on native aarch64 build and bare-metal testing. Sadly the source for Rosetta is not under any open-source license but available for academic use only. But what I can say is that the code was extremely portable requiring us to only add aarch64 as a target with some compiler flags in the build scripts, this was partly helped by the fact that amd64 was not the only target, ppc and ppc64 for mac are also available targets.

Along the way David T. helped with testing my patches and binaries on other aarch64 platforms and a special thanks to folks from The Baker Labs, shout out to David E. Kim, for helping us along the way specially right now as I am sure they already have their hands full.

---

# The current Status and How YOU Can Help

Between the first phase of bare-metal testers: David, Carl Perry, Ed Vielmetti and me, we have

- David with:
  - a Raspberry Pi 4
  - a Jetson Nano
  - 2x Hikey
- Carl with his 16 core Solidrun Clearfrog
- Ed Vielmetti, and shout out to [Works on Arm](https://www.worksonarm.com/):
  - a freaking 64 core "unobtanium" aarch64 monster.
  - 2x Ampere eMAGs.
  - More on they way ;)
- Me with:
  - 3x RPi 3
  - Rock64
  - BananaPi M64
  - Khadas Vim
  - Qualcomm RB3
  - Hikey970
  - Softiron 'AMD Seattle' Overdrive 3000

> NOTE: Since the drafting of this blog, any new work units assigned to our machine require around 2GB of available memory to recieve tasks with an average on 0.6GB per task. So if you have just 4GB of free memory but eight cores, atleast 3 of the tasks will be in the "Waiting for Memory" state. This removes anything lower spec than a 4GB Pi4 as a viable candidate

Currently you can [Join Rosetta@home](https://boinc.bakerlab.org/join.php). If you don't have a spare aarch64 device laying around, feel free to join with amd64 as well, every bit helps. And if you are joining from a aarch64 hardware, consider joining the `crunch-on-arm` team.

# I'll leave you with some images

- **The first successful and verified protein fold on aarch64.**

![](https://i.imgur.com/erEbTpc.png)

- **My Arm Cluster clutter**

![](https://i.imgur.com/u1V3eie.jpg)

- **An artistic (lol) shot of the amd seattle machine i used for native testing and compiling**

![](https://i.imgur.com/7v8xZjp.jpg)

- **128 Cores donated by [WorksOnArm](https://www.worksonarm.com/)**

![](https://i.imgur.com/tvfUxw9.png)

![](https://i.imgur.com/YiXVz3c.png)
