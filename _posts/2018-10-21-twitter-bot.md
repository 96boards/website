---
title: 96Boards Twitter Bot
author: Sahaj Sarup
date: 2018-10-21 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/twitter.png
    name: twitter.png
    thumb: twitter-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, Cortex-M, ARM64, twitter, python, Bot, script
---

# The 96Boards Twitter Bot

You can follow the 96Boards Twitter Bot here: [https://twitter.com/96boards_bot](https://twitter.com/96boards_bot)

**Currently this is what the functionality is:**
- Tweet a weather forecast snippet to the 96Boards team members.
  - To do this every morning around 9am, respective of the Time-zones
- Tweet all the commits that were pushed into the [96Boards Website](https://github.com/96boards/website) repository the previous day.
- Tweet all the commits that were pushed into the [96Boards Documentation](https://github.com/96boards/documentation) repository the previous day.
- Rinse and Repeat

**0Auth APIs Used**
At this stage, I am using only the two required APIs from GitHub and Twitter that require a developer account to get access tokens

**Python3 Modules**
- [Tweepy](http://www.tweepy.org/): An easy-to-use Python library for accessing the Twitter API.
- [weather-api](https://pypi.org/project/weather-api/): A Python wrapper for the Yahoo Weather XML RSS feed.
- [datetime](https://docs.python.org/3/library/datetime.html#module-datetime): module supplies classes for manipulating dates and times in both simple and complex ways.
- [pytz](https://pypi.org/project/pytz/): World timezone definitions, modern and historical
- [systemd](https://pypi.org/project/systemd/): Python systemd wrapper.
- [pygithub](https://pygithub.readthedocs.io/en/latest/introduction.html): Python library for accessing the GitHub API

**Source**
The source for this project is available at: [https://github.com/96boards-projects](https://github.com/96boards-projects)
