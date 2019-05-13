---
title: Part 1 - Patient Monitoring System using 96Boards
author: Manivannan Sadhasivam
date: 2017-12-29 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/patient_monitoring.jpg
    name: patient_monitoring.jpg
    thumb: patient_thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, IoT Edition, Carbon, Nitrogen, DB410c, dragonboard410c, Linaro, Linux, Zephyr, BLE, Mesh, Bluetooth, phrama, phramatech, meditech
---

# **Introduction**

Hello and Welcome to **Part 1** of **Patient Monitoring System using 96Boards**
blog series. As specified in the [Introductory blog](https://www.96boards.org/blog/patient-monitoring-system-into/),
this blog will cover the BLE mesh implementation using [Zephyr](https://github.com/zephyrproject-rtos/zephyr)
running on [96Boards IE](https://www.96boards.org/products/ie/).

# **BLE Mesh using Zephyr**

BLE Mesh functionality in Zephyr is implemented by Johan Hedberg of Intel.
Still, the implementation is in early stage but so far most of the essential
features have been supported. One of the advantages of using BLE mesh in Zephyr
instead of any third-party SDK is the code organization. The Zephyr code
structure makes it easy for the developers to poke into the source code to
see what's going on and how the stack is working. And to our own benefits, they have included some sample applications and tests for making the lives
of Application developers easier :-)

Below are some of the resources which will help getting started on BLE mesh
using Zephyr:

1. https://github.com/zephyrproject-rtos/zephyr/tree/master/samples/bluetooth/mesh
2. https://github.com/zephyrproject-rtos/zephyr/tree/master/samples/bluetooth/mesh_demo
3. https://github.com/zephyrproject-rtos/zephyr/tree/master/samples/boards/nrf52/mesh/onoff-app
4. https://github.com/zephyrproject-rtos/zephyr/tree/master/tests/bluetooth/mesh
5. https://github.com/zephyrproject-rtos/zephyr/tree/master/tests/bluetooth/mesh_shell
6. https://www.zephyrproject.org/announcing-bluetooth-mesh-support-in-zephyr-project/

Before we jump into the implementation of BLE mesh using Zephyr on 96Boards IE,
we will skim through the basic concepts of BLE mesh.

Mesh network is a common terminology in the networking world. It involves the way of
inter-connecting devices (a.k.a nodes) in a network with each other directly and
indirectly. The non-hierarchial way of connecting devices to each other makes
this mesh network special among other networking topologies. Bluetooth uses this
topology to connect nodes within a network so that it can extend its coverage and
efficiently communicate with each node in a network.

BLE mesh network consists of nodes (BLE compatible devices) which takes part in the
network and each node consists of Elements, uniquely addressable entities in a
network. Each node has to be provisioned by a provisioner (Mobile/Laptop in most case)
in order to take part in the mesh network. Provisioning involves assigning the
Node address to mesh nodes, exchanging public/private keys, and so on. Once the
mode has been provisioned, it is a part of the mesh network.

Next step after provisioning is configuring the node. Again this needs to be
done by the provisioner. Each element in a node will have Models, which defines
the behaviors of each node. There are Standard and Vendor specific models.
In our project, we are going to use only Standard models defined by Bluetooth
specification. Configuring involves assigning the AppKey and binding it to
the models. We can also add Subscription/Publishing information for each element
in a network.

Once a node has been provisioned and configured, it can start sending/receiving
messages within the network.

In this blog, we will use two nodes to form a BLE Mesh network. One will
act as a server and other will act as a client node. The role of client
node here is to send 'Sensor Get' request to the server for sending the
Sensor Status messages. If the server receives 'Sensor Get' request from
the client, it will send the 'Sensor Status' message in response. Then the client can use this response to find out the sensor readings.

# Setting up the Sensor Nodes

For the sake of this blog, I am going to use [96Boards Carbon](https://www.96boards.org/product/carbon/)
for the nodes. But you can use either 96Boards Carbon/Nitrogen to
follow this blog. Both are well supported in Zephyr.

96Boards Carbon has a [BLE Co-Processor](https://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822)
for providing Bluetooth capabilities to the board. This project
can run either on the main STM32 chip or directly on the BLE
co-processor. But it is recommended to use the STM32 microcontroller
for implementing this project since there is no debug port
exposed on the board for the network co-processor. It will
make it hard to see the debug outputs without using any external
utilities.

In the case of using STM32 chip, **hci_spi** example application
needs to be programmed on the co-processor for providing the
HCI interface, thus giving Bluetooth functionality to the STM32.

## Programming nRF Co-Processor

Follow the below steps to flash the **hci_spi** sample application
to the nRF co-processor on 96Boards Carbon using a Linux enabled host
machine.

First setup the development environment as mentioned [here](http://docs.zephyrproject.org/getting_started/installation_linux.html).

```shell
$ git clone https://github.com/Mani-Sadhasivam/zephyr.git
$ cd zephyr
$ git checkout ble_mesh
$ source zephyr-env.sh
$ samples/bluetooth/hci_spi
$ mkdir build
$ cd build
$ cmake -DBOARD=96b_carbon_nrf51 ..
$ make
```

Once the application is successfully built, flash the binary onto the
nRF chip by following this [guide](https://docs.zephyrproject.org/latest/boards/arm/96b_carbon/doc/index.html).
Now, this chip can provide HCI interface to STM32 via SPI.

> Note: You need to execute this section for all Carbon boards to be used as nodes.
>       As per this blog, execute it on 2 Carbon boards.

## Programming Sensor Server application

Next step is to program the Sensor Server application to the STM32 chip
on one of the Carbon board to act as a Sensor Server.

Move to the top of the cloned Zephyr repository.

```shell
$ cd zephyr
$ cd samples/bluetooth/ble_mesh_srv
$ mkdir build
$ cd build
$ cmake -DBOARD=96b_carbon ..
$ make
```

Now, the built binary can be flashed by following this [guide](https://docs.zephyrproject.org/latest/boards/arm/96b_carbon/doc/index.html).
Once the application binary is flashed, connect the UART port of Carbon
board to the Host machine using USB-A to USB-B Micro cable and bring up
the serial emulation tool like minicom on the corresponding port.

After board reset you should see the below message on the serial port:

```shell
Initializing...
Bluetooth initialized
Mesh initialized
```

## Programming Sensor Client application

As like the Sensor Server application, Sensor Client application is also
need to be programmed on another Carbon board.

Move to the top of the cloned Zephyr repository.

```shell
$ cd zephyr
$ cd samples/bluetooth/ble_mesh_cli
$ mkdir build
$ cd build
$ cmake -DBOARD=96b_carbon ..
$ make
```

Now, the built binary can be flashed by following this [guide](http://docs.zephyrproject.org/boards/arm/96b_carbon/doc/96b_carbon.html#programming-and-debugging).
Once the application binary is flashed, connect the UART port of Carbon
board to the Host machine using USB-A to USB-B Micro cable and bring up
the serial emulation tool like minicom on the corresponding port.

After board reset you should see the below message on the serial port:

```shell
Initializing...
Bluetooth initialized
Mesh initialized
```

# Provisioning and Configuring the Nodes

The final step is to provision and configure both the nodes. This requires
the `meshctl` utility in [Bluez](https://git.kernel.org/pub/scm/bluetooth/bluez.git) stack.
Install Bluez by following the below steps.

```shell
$ git clone https://git.kernel.org/pub/scm/bluetooth/bluez.git
$ cd bluez
$ bootstrap
$ ./configure --prefix=/usr --mandir=/usr/share/man --sysconfdir=/etc --localstatedir=/var --enable-mesh
$ make
$ sudo make install
```

Above commands will install Bluez on the host machine with BLE mesh support.

## Server Node

Now, execute the below steps for provisioning and configuring the Server node:

```shell
$ cd bluez/mesh
$ meshctl
```
This will bring up the **meshctl** command prompt.

```shell
[meshctl]# discover-unprovisioned on
[meshctl]# provision dddd
```
Here we are provisioning the node `dddd` which is default address for all
un-provisioned nodes.

Now, enter the OOB number displayed in the Server's serial terminal here.

```shell
[meshctl]# menu config
[meshctl]# target 0100
```

Here **0100** is the node name after provision. Modify it based on the assigned address.

Now, generate AppKey and bind it to the 0th element of Sensor Server model (1100).
```shell
[meshctl]# appkey-add 1
[meshctl]# bind 0 1 1100
```

Next, add the subscription and publish info to the models.
```shell
[meshctl]# sub-add 0100 c000 1100
[meshctl]# pub-set 0100 c000 1 0 0 1100
```

Once, all the above commands are executed successfully, we can assume that
the Sensor node is configured.

## Client Node

Now, execute the below steps for provisioning and configuring the Client node:

```shell
$ cd bluez/mesh
$ meshctl
[meshctl]# discover-unprovisioned on
[meshctl]# provision dddd
```
Now, enter the OOB number displayed in the Client's serial terminal here.

```shell
[meshctl]# menu config
[meshctl]# target 0101
```

Here **0101** is the node name after provision. Modify it based on the assigned address.

Now, generate AppKey and bind it to the 0th element of Client Sensor model (1102).
```shell
[meshctl]# appkey-add 1
[meshctl]# bind 0 1 1102
```

Next, add the subscription and publish info to the models.
```shell
[meshctl]# sub-add 0101 c000 1102
[meshctl]# pub-set 0101 c000 1 0 0 1102
```

Once, all the above commands are executed successfully, we can assume that
the Client node is configured.

# Mesh implementation

Finally, after completing the above-mentioned steps, you can see the following output
in Server and Client serial terminals.

## Server

```shell
Sensor Status Get request received
Sensor status sent with OpCode 0x00000052
```

## Client

```shell
Sensor status Get request sent with OpCode 0x00008231
Got the sensor status 
Sensor ID: 0x2a1f
Sensor value: 0x001b
```

Below is the behavior of the mesh network:

1. Client node sends the **Sensor Get** request to the address group **C000** set during configuration.
2. Server node receives the message since it is subscribed to the group address **C000**
3. Server node sends the **Sensor Status** as a response to the **Sensor Get** message
4. Client node receives the message from the server, it parses and prints the value in the terminal.

>Note: Here the temperature data is hardcoded as 27.

This demonstrates the BLE mesh network with two nodes acting as a Server and
Client. Here the temperature data is sent from Server to Client every time
when the Client raises the request.

# Pain Points

Even though we got the mesh network setup, there is still no way to store the
provisioning and configuring information on the non-volatile memory like flash.
This will make us do the provision and configure every time after node restart.
This feature is being worked on and I hope that it will be available soon.

# Conclusion

So that's it for the **Part 1** of **Patient Monitoring System using 96Boards**
blog series. I hope this blog demonstrated the BLE mesh functionality with two
nodes acting as a Server and Client and exchanging data between them. This isn't
a full-fledged mesh implementation but rather a getting started the demo.

In the next blog post, we will see how to exchange the real sensor data between
mesh nodes and a Gateway.
