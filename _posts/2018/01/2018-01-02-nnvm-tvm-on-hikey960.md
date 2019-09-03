---
title: NNVM/TVM on HiKey960
author: Manivannan Sadhasivam
date: 2018-01-02 01:01:54+00:00
image:
    featured: true
    path: /assets/images/blog/nnvm.jpg
    name: nnvm.jpg
    thumb: nnvm-thumb.jpg
categories: blog
tags: 64-bit, 96Boards, aarch64, ARM, ARMv8, Consumer Edition, Hikey960, Linaro, Linux, NNVM, TVM, AI, TensorFlow, MxNet
---

# **Introduction**

Hello and Welcome to the blog post **NNVM/TVM on HiKey960**. In this
blog we are going to see the deployment of trained deep learning model
on HiKey960 using NNVM/TVM. Instruction set is provided for installing
NNVM/TVM on host and deploying the trained models remotely to HiKey960
over the network.

# NNVM/TVM

As the deep learning and AI use cases grow high every day, there is a need
for the unified solution to deploy these workloads on a variety of hardware
platforms such as mobiles, embedded devices, GPU etc... [NNVM](https://github.com/dmlc/nnvm)
is an Open Source compiler for Artificial Intelligence (AI) Frameworks.
It depends on the [TVM](https://github.com/dmlc/tvm/tree/52871592db15b0354e706724ee110338fc1bb7bc)
stack for providing end to end compilation to different hardware backends.
NNVM and TVM are jointly developed by **UW Allen school and AWS AI team**
together with other contributors.

NNVM compiler allows us to use the deep learning models from the frameworks
like Apache MXNet, Caffe, Keras, PyTorch etc... These models can be deployed
on various hardware backends with the help of TVM primitives such as LLVM,
OpenCL, Metal, CUDA etc...

Upcoming sections will illustrate how to install NNVM/TVM on the host and
remotely deploying the trained model on HiKey960.

# Installing TVM

Since NNVM depends on TVM stack, we need to install TVM on the host by
following the below steps:

## Installing Prerequisites

```shell
$ sudo apt-get update
$ sudo apt-get install -y python python-dev python-setuptools gcc libtinfo-dev \
    zlib1g-dev cmake python-numpy python-pip
$ pip install decorator
```

Next, install the latest version of LLVM (Should be 4.0 or higher). For convenience
there are [Debian/Ubuntu Nightly Builds](https://apt.llvm.org/) available.

## TVM

```shell
$ git clone --recursive https://github.com/dmlc/nnvm
$ cd nnvm/tvm
$ cp make/config.mk .
```
Now, open `config.mk` and uncomment the **LLVM_CONFIG** option and provide with
path to LLVM config as below:

```shell
LLVM_CONFIG = llvm-config-5.0
```

```shell
$ make
```
If the build goes well, you can see the `libtvm.so` runtime under `lib` directory.
Next, install the python package for TVM as mentioned [here](https://github.com/dmlc/tvm/blob/master/docs/install/index.rst#python-package-installation).

# Installing NNVM

Move into the cloned NNVM directory and follow the below steps to install
NNVM compiler on host:

```shell
$ cp make/config.mk .
$ make
```

After a successful build, `libnnvm_compiler.so` runtime will be available under `lib`.
Next, install the python package for NNVM as mentioned [here](https://github.com/dmlc/nnvm/blob/master/docs/how_to/install.md#python-package-installation).

# Building TVM runtime on device

Now it is the time to build TVM runtime on HiKey960. For doing this, we need
a debian image. But, official debian images for HiKey960 is not available yet.
So, for testing purposes, you can use this [test image](http://people.linaro.org/~guodong.xu/myupload/hikey960/build.debian.0509/).
Unzip the **rootfs** image and flash it onto HiKey960 along with **boot** and
**dt** images.

> Note: You need to use these images with HiSilicon's legacy bootloader. For
>       this purpose, first flash the base firmware by following the guide
>       [here](https://github.com/96boards-hikey/tools-images-hikey960#base-firmware-files-and-installation).
>    Next, flash the above-specified images using **fastboot**

Once the HiKey960 boots into debian, enable networking using [this](/documentation/consumer/dragonboard410c/guides/)
guide and note down the IP address using `ifconfig` command.

Next, follow the below steps to install TVM runtime on HiKey960:

```shell
$ cd ~
$ git clone --recursive https://github.com/dmlc/tvm
$ make runtime
```

After successfully building the TVM runtime, add the following lines
to `~/.bashrc` file.

```shell
$ export TVM_HOME=~/tvm
$ export PATH=$PATH:$TVM_HOME/lib
$ export PYTHONPATH=$PYTHONPATH:$TVM_HOME/python
```

# Starting RPC server on HiKey960

For communicating with the host for remote deployment of trained model, we
need to setup and start the RPC server on HiKey960.

Below command will do that for you:

```shell
$ python -m tvm.exec.rpc_server --host 0.0.0.0 --port=9090
```

This will start RPC server on localhost at port `9090`.

# Deploy trained model onto HiKey960

The final step is to deploy the pretrained MXNet model on HiKey960. This model
will be used to predict a cat image. For accomplishing this, execute the
[python script](http://people.linaro.org/~manivannan.sadhasivam/tvm/deploy_model_on_hikey960.py)
on host machine where you installed NNVM and TVM. This will download the
model, test image and build it for HiKey960, then finally deploying it using
RPC server running on HiKey960.

> Note: Before executing the script, change the `host` variable to IP address
>    of HiKey960.

```shell
$ wget http://people.linaro.org/~manivannan.sadhasivam/tvm/deploy_model_on_hikey960.py
$ python deploy_model_on_hikey960.py
```

On my Hikey960, prediction took around **30 seconds** which is too high. But this
can be improved drastically by the fine-tuning the ARM code generation of TVM.

# Conclusion

Even though the prediction time was high, improving the support for ARM64 will
boost the performance. In the upcoming blogs, we will see how to achieve this.
Stay tuned!
