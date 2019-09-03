---
title: Part 2 - Patient Monitoring System using 96Boards
author: Manivannan Sadhasivam
date: 2018-01-12 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/patient_monitoring_2.jpg
    name: patient_monitoring.jpg
    thumb: patient_thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---

# **Introduction**

Hello and Welcome to **Part 2** of **Patient Monitoring System using 96Boards**
blog series. In this blog, we are going to see the data exchange between BLE
mesh network and Gateway using 96Boards. Before jumping in, here is the quick
recap of what happened in previous parts:

1. [Introducing Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-into/) - This
is the introductory blog for the **Patient Monitoring System using 96Boards**
blog series which introduced the project, BLE mesh support in Zephyr
and the project roadmap.

2. [Part 1 - Patient Monitoring System using 96Boards](/blog/patient-monitoring-system-part1/) - This
blog provided the basic usage of BLE mesh in Zephyr by showing the steps
required to provision and configure the nodes and also the data exchange
between Server and Client.

# Data Exchange Between BLE mesh and Gateway

In any IoT enabled systems, it is mandatory to have a gateway to connect
to the external world. This case applies to BLE mesh network also. Setting
up a gateway would require us to have an application to interact with the nodes.
So for the gateway solution, I preferred [Dragonboard410c](/product/dragonboard410c/).
But due to the absence of a standard gateway interface to the mesh network, I
decided to connect the client of the BLE mesh network to the gateway, so
that we can use the client node to interact with the mesh network and capture
data.


## Hardware Setup

Since the intention of this blog is to demonstrate the data exchange between
gateway and mesh network, two [Carbon boards](/product/carbon/)
are used to form a mesh network and one of them will act as a server and another
will act as a client. The client node is connected to the gateway via USB to
UART.

Also two of the sensors, CCS811
and [TMP102](http://www.ti.com/product/TMP102) are connected **I2C_1** of the server in order
to get the Air Quality and Temperature data along with one additional push button
connected to **PC8**.

{% include image.html name="patient_monitoring_2.jpg" alt="Your alternate text." %}

## Setting up the Nodes and Gateway

Two carbon board which will act as BLE mesh nodes needs to be provisioned and
configured using the **meshctl** utility available in Linux. More information
on this can be found in **Provisioning and Configuring the Nodes** section of
the [Part 1 blog](/blog/patient-monitoring-system-part1/).

We should only change the binding and publishing information for the server and
client nodes as below:

**Server**
```shell
bind 0 1 1100
bind 0 1 1000
sub-add 017a c000 1100
pub-set 017a c000 1 0 0 1100
pub-set 017a c000 1 0 0 1000
```

**Client**
```shell
bind 0 1 1102
bind 0 1 1001
pub-set 017b c000 1 0 0 1102
sub-add 017b c000 1102
sub-add 017b c000 1001
```

> Note: Change the node address as per your network.

As you can see, two models are used in the server node:

1. Sensor Server Model
2. Generic ON/OFF Server Model

The first model is used to publish the sensor status and the second model is used
to publish the button status. Sensor model has both the subscription and
publication set to address C000 while client model is set to subscription
only to the same address.

On the client node, following models are used:

1. Sensor Client Model
2. Generic ON/OFF Client Model

Here, the first model has both the subscription and publication set to address C000
while client model is set to subscription only to the same address.

After configuring the nodes, you can find the below serial output in server node:

```shell
Sensor Status Get request received
Temp: 29
Co2: 836
Sensor status sent with OpCode 0x00000052
```

## Setting up the Gateway

Once the nodes are configured as mentioned above, the gateway needs to be setup
in order to receive data from the client node via USB to UART. For this, we
are going to use one python script which captures the data from serial and prints
them onto the console.

The following instructions assume that the Dragonboard410c(Gateway) has been
setup properly with latest Debian release from Linaro.

First, install the required packages:

```shell
$ pip install pyserial
```

Next, save the below contents to a file named pyserial.py

```python
import serial, sys

# open serial
ser = serial.Serial('/dev/ttyUSB0', 115200)

while True:
        try:
                ser_data = ser.readline()
                data = ser_data.split(',')
                if data[0] == 's':
                        print "Temp data: %s" % data[1]
                        print "Co2 data: %s" % data[2]
                        print "Button status: %s" % data[3]
        except KeyboardInterrupt:
                print "Exiting..."
                sys.exit()
```

## Data Exchange in action

Finally, executing the script will capture the output from the client node via serial.

```shell
$ sudo python pyserial.py
```

Gateway output:

```shell
Temp data: 29
Co2 data: 802
Button status: 0
```

When the pushbutton is pressed, you can find the button status change in Gateway
as below.

```shell
Temp data: 29
Co2 data: 802
Button status: 1
```

# Video Demonstration

{% include media.html media_url="https://www.youtube.com/embed/KPJXIQgdzWw" %}

# Conclusion

We are at the end of the **Part 2** blog. As I said in the introduction, the intention
of this blog is to show the basic data exchange between BLE mesh network and Gateway.
This is the stepping stone for building a complete **Patient Monitoring System using 96Boards**.
Even though the gateway solution provided here is not very optimal to be used in a
end product, it will still come handy for developing the prototypes.

If you have any suggestion/feedback about this blog, please throw it in comments.
We'd love to hear back from the community. Stay tuned for the next part!
