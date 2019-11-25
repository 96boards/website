---
title: Speech Recognition and Combining Voice with Vision | OpenCV on RB3 Pt. 5 | Qualcomm RB3 Robotic Arm Project
author: Sahaj Sarup
date: 2019-08-15 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

## Introduction

In this blog we'll take a look at the Voice Recognition Code and see how we can combine it with the Vision aspect of this project.

All the code in this blog is available at : [https://github.com/ric96/RB3-RoboticArm](https://github.com/ric96/RB3-RoboticArm)

And once the project is finalized will be pushed to : [https://github.com/96boards-projects/RB3-RoboticArm](https://github.com/96boards-projects/RB3-RoboticArm)

To install all the dependencies on a Debian Buster build for RB3, run the following script:
[install-opencv.sh](https://github.com/ric96/RB3-RoboticArm/raw/master/install.sh)

You will also need to install the following pip packages.
`sudo pip3 install SpeechRecognition pymemcached`

Today we'll be looking specifically at the `main.py` file in our project directory.

***

## Import all the things

![](https://memegenerator.net/img/instances/60968180/python-programming-import-all-the-things.jpg)

We start with importing the following libraries:

```python
import json
from pymemcache.client import base
import speech_recognition as sr 
from difflib import get_close_matches 
```

- `json` Used to parse data in json format. This helps us to share lists over memcached since memcached can only handle string values.
- `pymemcached` is a data caching and sharing frontend for python using memcached. 
- `speech_recognition` is a collection of speech recognition libraries under one roof.
- `difflib` is a library dedicated to showing the diff of two or more strings but can do other things as well like showing closest match from a list. We use for basic language processing.

***

## Declare all the variables

![](http://www.quickmeme.com/img/37/3718582dec2f47042c0aa7e92cb29662a32bf4f6a3b5dfc1d52fd17d530b970a.jpg)

Some quick global variable declaration:

```python
client = base.Client(('localhost', 11211))
shape_data_str = client.get('vision_data')

shape_data = json.loads(shape_data_str)

print(shape_data)

sample_rate = 48000
 
chunk_size = 2048

#Initialize the recognizer 
r = sr.Recognizer() 

mic = sr.Microphone() 

color_pattern = ['blue', 'green', 'yellow', 'red']
action_pattern = ['pickup', 'drop', 'dance']
obj_pattern = ['cube', 'square', 'cuboid', 'rectangle', 'triangle', 'prism', 'cone', 'hexagon', 'circle', 'sphere', 'ball' ]
```

- `client = base.Client(('localhost', 11211))`: connect to localhost socket for memcached, allowing us to share data from `shape.py`.
- `shape_data_str = client.get('vision_data')`: get string data from memcached with the label "vision_data"
- `shape_data = json.loads(shape_data_str)`: change string data received from memcached back to list using json.
- `sample_rate = 48000`, `chunk_size = 2048`: set audio parameters for mic input.
- `r = sr.Recognizer()`: Initialize the recognizer class.
- `mic = sr.Microphone()`: initialize the microphone input, this uses the system default notification.
- `color_pattern = ['blue', 'green', 'yellow', 'red']`: list of patterns that we diff user input against to create a basic language processor.

## All the functions
![](https://i2.wp.com/www.relatably.com/m/img/functional-programming-memes/meme-functions.jpg)

### Basic language processor

```python
def closeMatches(patterns, word):
	data = word.split()
	for temp in data: 
		match_list = get_close_matches(temp, patterns)
		if len(match_list) != 0:
			return match_list[0]
	return 1
```

This is a basic language processor that diffs voice input against the various lists we initialized in the beginning.

***

### Speech Detector

```python
def detect():
	with mic as source: 
		#wait for a second to let the recognizer adjust the 
		#energy threshold based on the surrounding noise level 
		r.adjust_for_ambient_noise(source) 
		print("Say Something")
		#listens for the user's input 
		audio = r.listen(source) 
			
		try: 
			text = r.recognize_google(audio) 
			print("you said: " + text)
			return text 
		
		#error occurs when google could not understand what was said 
		
		except sr.UnknownValueError: 
			print("Google Speech Recognition could not understand audio")
			return 1 
		
		except sr.RequestError as e: 
			print("Could not request results from Google Speech Recognition service; {0}".format(e))
			return -1
```

This function takes input from mic and detects the words spoken by the user using Google's Web Speech API. It returns a string of detected words if no errors occur. Or it returns 1 or -1 depending upon the error.

***

### RUN

```python
def run():
    if (detect() == "hey dummy"):
        print("what do you want?")
        instruction = detect()
        if (instruction != 1 or instruction != -1):
            action = closeMatches(action_pattern, instruction)
            if action != 1:
                print("Action: " + action)
            else:
                not_understood()
                return 0
            color = closeMatches(color_pattern, instruction)
            if color != 1:
                print("Color: " + color)
            else:
                not_understood()
                return 0
            obj = closeMatches(obj_pattern, instruction)
            if obj != 1:
                print("Object: " + obj)
                voice_dat = [action, color, obj]
                return voice_dat
            else:
                not_understood()
                return 0
        else:
            not_understood()
            return 0
    else:
        not_understood()
        return 0
```

- Detects activation command aka "dummy"
- Detects action, shape and color of the object instructed by the user and returns a list.
- anything fails, return 0.

***

## Main: one loop to rule them all:
> I honestly couldn't find a meme for this :/

```python
voice_data = run()
if (voice_data != 0):
    if (voice_data[1] == "blue"):
        if(shape_data[0][0][2] == voice_data[2]):
            print("Required Object at X:" + str(shape_data[0][0][0]) + " Y: " + str(shape_data[0][0][1]))
    else if (voice_data[1] == "yellow"):
        if(shape_data[1][0][2] == voice_data[2]):
            print("Required Object at X:" + str(shape_data[1][0][0]) + " Y: " + str(shape_data[1][0][1]))
    else if (voice_data[1] == "red"):
        if(shape_data[2][0][2] == voice_data[2]):
            print("Required Object at X:" + str(shape_data[2][0][0]) + " Y: " + str(shape_data[2][0][1]))
```

- Detect if the activation word has been spoken.
- Compare list of user actions and objects against data sent by `shape.py` return X & Y position of the required object detected by the camera.

***

## Why memcached and not threading, why json and how it actually works?

So, as some of you might know that python support "proper" threading due to [GIL](https://realpython.com/python-gil/). So to get around this issue we are running the `main.py` and `shape.py` as separate programs and run `memcached` separately.

This allow us to share data between the two scripts so our voice script knows the x y co-ordinates of all the objects that are detected by the opencv script.

Json comes into play because memcached can only pass String values so we need to convert our lists to string and converting back to json.

***
