---
sidebar_position: 2
---

# Linux Compilation

A guide on how to compile Metamod:Source for Linux

:::note
You can use the Windows Subsystem for Linux (WSL) to compile on Windows.
Tested on Ubuntu 20.04
:::

## Prerequisites
- [Git](https://git-scm.com/downloads)
- [Python3](https://www.python.org/downloads)
- [AMBuild](https://wiki.alliedmods.net/AMBuild)

## File structure

For the sake of simplicity we will be doing everything in an `alliedmodders` folder

```bash
mkdir alliedmodders
cd alliedmodders
```

## Ubuntu 20.04 setup

```bash
sudo apt update
sudo apt install python3-pip
sudo apt-get install clang

# make sure we can use pip installed packages anywhere
echo "export PATH=\"$HOME/.local/bin:$PATH\"" >> ~/.bashrc
. ~/.bashrc
```

## Download AMBuild
```bash
git clone https://github.com/alliedmodders/ambuild
pip install ./ambuild

# In case of an error try
# cd ambuild && python setup.py install && cd ..
```

## Instructions

Double check you are still in the `alliedmodders` folder and run the following commands

```bash
mkdir hl2sdk-root
git clone https://github.com/alliedmodders/hl2sdk/ --branch cs2 hl2sdk-root/hl2sdk-cs2

git clone https://github.com/alliedmodders/metamod-source --recursive
cd metamod-source

echo "export HL2SDKCS2=/absolute/path/to/hl2sdk-root/hl2sdk-cs2" >> ~/.bashrc
echo "export MMSOURCE112=/absolute/path/to/metamod-source" >> ~/.bashrc
. ~/.bashrc

mkdir build && cd build
CC=clang CXX=clang++ python3 ../configure.py -s cs2
ambuild
```