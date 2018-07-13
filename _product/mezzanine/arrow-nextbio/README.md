---
title: NextBio Mezzanine (Arrow)
layout: product-display-page
permalink: /product/arrow-nextbio/
shortname: arrow-nextbio
description: |-
    NB-2023-S2 shield board with assembled NB-2023-S2-VAIX (SPI) fingerprint module, producing fingerprint development shield for DragonBoard 410c development board by Arrow Electronics. The kit includes the following: software Development Kit (SDK), which can be downloaded from NEXT Biometrics Support Portal https://support.nextbiometrics.com/. It is primarily supposed that NB-2023-S2 shield board is put together with DragonBoard 410c development board and used as a one solid piece of hardware. Such a set allows to the user easy evaluation of the connected NB-2023-S2-VAIX fingerprint sensor module at ARM Cortex-A53 64-bit powered platform. Please note that NBDK-2023-S2-VAIX-DB Development Kit is delivered without the DragonBoard 410c board. The can be purchased directly from Arrow Electronic: https://www.arrow.com/en/products/dragonboard410c/arrow-development-tools
title: NextBio Mezzanine (Arrow)
display_product: true
product_tab_menu:
  - tab_title: Documentation
    tab_link: /documentation/mezzanine/arrow-nextbio/
    tab_position: 1
  - tab_title: Support
    tab_link: https://discuss.96boards.org/c/products/mezzanine
    tab_position: 2
    tab_align_right: true
product_specification: "mezzanine"
product_short_desc: "The NB-2023-S2 shield board with assembled NB-2023-S2-VAIX (SPI) fingerprint module is a fingerprint development shield for the DragonBoard 410c development board by Arrow Electronics."
product_long_desc: |-
  Introducing the Shiratech LTE and Sensor Mezzanine, the easiest and fastest way to add LTE connectivity and full context awareness to your product
product_images:
- nextbio-back-sd.jpg
- nextbio-front-sd.jpg
product_buy_links:
-
  link-title: Arrow
  link-url: "https://www.arrow.com/en/products/nbdk-2023-s2-vaix-db/next-biometrics-group-asa"
product_more_info:
- title: Product Brief
  link: https://github.com/96boards/website/blob/master/_product/mezzanine/arrow-nextbio/files/productbriefnbdk-2023-s2-vaix-db.pdf
- title: User Guide
  link: https://github.com/96boards/website/blob/master/_product/mezzanine/arrow-nextbio/files/nbdk-2023-s2-vaix-db-development-kit-user-guide-v1.2.pdf
---

The NB-2023-S2 shield board with assembled NB-2023-S2-VAIX (SPI) fingerprint module is a fingerprint development shield for the DragonBoard 410c development board by Arrow Electronics. The mezzanine includes a software Development Kit (SDK), which can be downloaded from NEXT Biometrics Support Portal https://support.nextbiometrics.com/. The NB-2023-S2 shield board has been paired with the DragonBoard 410c development board and used as a one solid piece of hardware (However, other 96Boards may be compatible). Such a set allows to the user easy evaluation of the connected NB-2023-S2-VAIX fingerprint sensor module at ARM Cortex-A53 64-bit powered platform.

## Buy Now

- [Arrow](https://www.arrow.com/en/products/nbdk-2023-s2-vaix-db/next-biometrics-group-asa)

***

## Features

The NEXT Biometrics NBDK-2023-S2-VAIX-DB is a biometrics development kit for Arrow Dragonboard®. It supports image capture, feature extraction and matching. 

The development kit includes:

1. NB-2023-S2-VAIX-POD fingerprint sensor module.
2. NBDK-202x-S2 DB-410c shield board for Arrow Dragonboard® 410C.
3. Software Development Kit for Linux and Android.
4. AIX biometric algorithm license (embedded in the NB-2023-S2-VAIX-POD finger module).

The Software Development Kit comprises:

1. NB-2023-S2 SPI sensor drivers for Linux and Android.
2. NB Biometrics AIX API libraries with cutting-edge minutiae based biometric algorithm engine providing fingerprint template extraction and ultra-fast 1: N matching.
3. Demo application for Linux.

## Technical Specifications

| NB 2023-S2-VAIX Sensor Specifications:      |                                                                      |
|:--------------------------------------------|:---------------------------------------------------------------------|
| Sensor Technology                           | NEXT Active Thermal™ sensing (patented)                              |
| Active Sensing area                         | 11.9 x 16.9 mm2                                                      |
| Pixels                                      | 180 x256                                                             |
| Resolutions                                 | 385 ppi (pixel size 66 µm * 66 µm)                                   |
| Image scan time                             | 0.53s                                                                |
| Ingress protection                          | Ready for IP68 (note: sample housing in development kit not IP rated)|
| Fingerprint module interface                | SPI                                                                  |
| Biometric algorithm license                 | NBBiometrics AIX SDK License included                                |

| NB Biometrics AIX Library Specification:                                            |                               |
|:------------------------------------------------------------------------------------|:------------------------------|
| Fingerprint enrolment (full process from finger detection to capture and extraction)| ~970 ms (to be confirmed)     |
| 1:1 matching time*                                                                  | 7.5 - 8ms                     |
| Biometric performance                   | False-match-rate 0.01 % (default, configurable) False Non-Match Rate (FNMR):1% (at default FMR) |
| Maximum Fingerprint Database                                                        | 1000 templates                |

| Shield board Specifications:                |                                                                                     |
|:--------------------------------------------|:------------------------------------------------------------------------------------|
| Total dimensions                            | 53 x 40 x 14 mm                                                                     |
| Weight                                      | 18g                                                                                 |
| Power Supply                                | 3.3V                                                                                |
| Physical interface to fingerprint module    | 12-pin FFC connector                                                                |
| Ordering Options for the development Kit    | Development Kit with Shield board for Arrow Dragonboard® (NBDK-2023-S2-VAIX-DB)     |

Note: Measurement taken on reference DB platform (Qualcomm Snapdragon 410 (APQ8016), 4 x ARM Cortex A53 64-bits, 1.2GHz, 2GB RAM, Linux linaro-alip 4.9.56). 

## Documents

- [Product Brief](https://github.com/96boards/website/blob/master/_product/mezzanine/arrow-nextbio/files/productbriefnbdk-2023-s2-vaix-db.pdf)
- [User Guide](https://github.com/96boards/website/blob/master/_product/mezzanine/arrow-nextbio/files/nbdk-2023-s2-vaix-db-development-kit-user-guide-v1.2.pdf)
