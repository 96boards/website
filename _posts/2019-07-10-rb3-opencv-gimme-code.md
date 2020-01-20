---
title: Gimme Code | OpenCV on RB3 Pt. 3 | Qualcomm RB3 Robotic Arm Project
author: Sahaj Sarup
date: 2019-07-10 01:00:00+00:00
image:
    featured: true
    path: /assets/images/blog/rb3-arm.jpg
    name: rb3-arm.jpg
categories: blog
series: Qualcomm RB3 Robotic Arm Project
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, DB410c, dragonboard410c, Linaro, Linux, fedora, arm64, aarch64, rock960, FPGA, raspberry pi, arduino, shild, hat
---

# Vision Pt. 3

## Introduction

In this blog we'll take a look at the opencv code that'll be at the heart of the RB3 Robotic Arm, we'll traverse block by block and see how it all works.

All the code in this blog is available at : [https://github.com/ric96/RB3-RoboticArm](https://github.com/ric96/RB3-RoboticArm)

And once the project is finalized will be pushed to : [https://github.com/96boards-projects/RB3-RoboticArm](https://github.com/96boards-projects/RB3-RoboticArm)

To install all the dependencies on a Debian Buster build for RB3, run the following script:
[install-opencv.sh](https://github.com/ric96/RB3-RoboticArm/raw/master/install.sh)

***

## Import all the things

![](https://memegenerator.net/img/instances/60968180/python-programming-import-all-the-things.jpg)

We start with importing the following libraries:

```python
import cv2
import imutils
from imutils.video import WebcamVideoStream
```

- `cv2` imports opencv for Python
- `imutils` is a wrapper around cv2 video i/o libraries to make life easier.
- `WebcamVideoStream` is a specific function within imutils to get frames from webcam.

***

## Declare all the variables

![](http://www.quickmeme.com/img/37/3718582dec2f47042c0aa7e92cb29662a32bf4f6a3b5dfc1d52fd17d530b970a.jpg)

Some quick global variable declaration:

```python
# WebCam Streaming using imutils
vs = WebcamVideoStream(src=0).start()

# define the lower and upper boundaries of the "green" "red" "blue"
# ball in the HSV color space, then initialize the
# list of tracked points

greenLower = (10, 140, 100)
greenUpper = (30, 255, 255)

redLower = (0, 80, 80)
redUpper = (10, 255, 190)

blueLower = (100, 30, 0)
blueUpper = (120, 255, 128)
```

- `vs = WebcamVideoStream(src=0).start()`: start webcam streaming with `imutils`'s `WebcamVideoStream` from source /dev/video0.
- `greenLower = (10, 140, 100)` `greenUpper = (30, 255, 255)`: Set HSV color space upper and lower limits for contour of green colored objects. And repeat the same for every shade you want to detect.

## All the functions
![](https://i2.wp.com/www.relatably.com/m/img/functional-programming-memes/meme-functions.jpg)

### Shape Detector

```python
class ShapeDetector:
	def __init__(self):
		pass

	def detect_shape(self, c):
		# initialize the shape name and approximate the contour
		shape = "unidentified"
		peri = cv2.arcLength(c, True)
		approx = cv2.approxPolyDP(c, 0.04 * peri, True)
		# if the shape is a triangle, it will have 3 vertices
		if len(approx) == 3:
			shape = "triangle"
		# if the shape has 4 vertices, it is either a square or
		# a rectangle
		elif len(approx) == 4:
			# compute the bounding box of the contour and use the
			# bounding box to compute the aspect ratio
			(x, y, w, h) = cv2.boundingRect(approx)
			ar = w / float(h)

			# a square will have an aspect ratio that is approximately
			# equal to one, otherwise, the shape is a rectangle
			shape = "square" if ar >= 0.95 and ar <= 1.05 else "rectangle"

		# if the shape is a pentagon, it will have 5 vertices
		elif len(approx) == 5:
			shape = "pentagon"

		# otherwise, we assume the shape is a circle
		else:
			shape = "circle"

		# return the name of the shape
		return shape
```

- The `ShapeDetector` class and `detect_shape` function is responsible to take in a specific HSV color contour, map out the edges and approximate the number of vertices.
- Then depending on the number of vertices, return the value as `triangle`, `square` or `rectangle`, `pentagon` or `circle`.

***

### HSV Detector

```python
def detect_hsv(frame, lower, upper):
		# resize the frame, blur it, and convert it to the HSV
		# color space
		blurred = cv2.GaussianBlur(frame, (11, 11), 0)
		hsv = cv2.cvtColor(blurred, cv2.COLOR_BGR2HSV)

		# construct a mask for the color "green", then perform
		# a series of dilations and erosions to remove any small
		# blobs left in the mask
		mask = cv2.inRange(hsv, lower, upper)
		mask = cv2.erode(mask, None, iterations=2)
		mask = cv2.dilate(mask, None, iterations=2)

		# find contours in the mask and initialize the current
		# (x, y) center of the ball
		cnts = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL,
			cv2.CHAIN_APPROX_SIMPLE)
		cnts = imutils.grab_contours(cnts)

		data_arr=[0]

		if len(cnts) > 0:
			c = max(cnts, key=cv2.contourArea)
			sd = ShapeDetector()
			i = 0
			for c in cnts:
				((x, y), radius) = cv2.minEnclosingCircle(c)
				M = cv2.moments(c)
				cX = int((M["m10"] / M["m00"]))
				cY = int((M["m01"] / M["m00"]))
				shape = sd.detect_shape(c)
				data = [c, cX, cY, shape]
				data_arr.insert(i, data)
				i = i + 1

		return data_arr
```

- The detect_hsv function takes in three parameters. The current frame, hsv upper limit and hsv lower limit.
- It then proceeds to create contours for a specific hsv color space, and stores them in the `cnts` array as individual contours.
- After that it traverses through all the contours, first calculating the center XY co-ordinates in the frame.
- Then calls the `detect_shape` function and saves the returned shape value in `shape`
- All the value for a specific contour is saved in the `data` array.
- The `data_arry` saves all the `data` values for multiple contours that were detected.
- This entire exercise allows us to detect multiple contours of the same color and multiple contours of different color within the same frame.
- This also gives us the XY coordinates for each object detected with will help us guide the Robotic Arm.

***

### Overlays

```python
def overlay(frame, data, overlay_col, num):
	try:
		cv2.drawContours(frame, [data[0]], -1, overlay_col, 2)
		cv2.putText(frame, str(data[3]) + " " + str(num) + ": " + str(data[1]) + "x" + str(data[2]), (data[1], data[2]), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
	except:
		print("An exception occurred")
```

- This function takes in data returned by the `detect_hsv` function and lays it over the frame as a text, this includes;
	- XY Co-ordinates
	- Shape of the object
	- Outline of the contour
	- Numbering of the object.

***

## Main: one loop to rule them all:
> I honestly couldn't find a meme for this :/

```python
def main():
	while True:
		# compute the center of the contour, then detect the name of the
		# shape using only the contour
		# grab the current frame

		# Incase of stream using cv2.VideoCapture
		#ret, frame = vs.read()

		# incase of stream using imutils
		frame = vs.read()

		shape_blue = detect_hsv(frame, blueLower, blueUpper)
		shape_green = detect_hsv(frame, greenLower, greenUpper)
		shape_red = detect_hsv(frame, redLower, redUpper)

		for i in range(len(shape_blue)-1):
			overlay(frame, shape_blue[i], (0,0,255), i)

		for i in range(len(shape_green)-1):
			overlay(frame, shape_green[i], (255,0,0), i)

		for i in range(len(shape_red)-1):
			overlay(frame, shape_red[i], (0,255,0), i)

		cv2.imshow("Frame", frame)

		#cv2.imshow("Frame1", framer)
		key = cv2.waitKey(1) & 0xFF

		# if the 'q' key is pressed, stop the loop
		if key == ord("q"):
			break

	vs.stop()
	cv2.destroyAllWindows()
```

The `main` does the following things in a loop:
- Reads frame from the video stream.
- Passes said frame and hsv values to `detect_hsv` function:
	- Repeats for the other two colors
- Saves the return array to `shape_<color>`
- For each contour in each of the color space, calls the overlay function to add appropriate overlay to the frame.
- Output the processed from using `imshow` from `imutils`

***

## Final Thoughts

This is more like a show-off of the object detection working in real time. For the actual Robotic Arm to work all we need is the XY Co-ordinates for the object in order to aim the claw at it.

***

# Video

This code was presented during [OpenHours](https://www.96boards.org/openhours/) Episode 154.

{% include media.html media_url="https://youtu.be/5L-94a7n_-s" %}
