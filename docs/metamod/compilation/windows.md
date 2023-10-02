---
sidebar_position: 1
---

# Windows Compilation

A guide on how to compile Metamod:Source for Windows

## Prerequisites
- [Git](https://git-scm.com/downloads)
- [Python3](https://www.python.org/downloads)
- [AMBuild](https://wiki.alliedmods.net/AMBuild)
- [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)

## Installing Visual Studio 2022

Download the community version installer and install the `Desktop development with C++` component

## File structure

For the sake of simplicity we will be doing everything in an `alliedmodders` folder

```bash
mkdir alliedmodders
cd alliedmodders
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

setx HL2SDKCS2 C:/absolute/path/to/hl2sdk-root/hl2sdk-cs2
setx MMSOURCE112 C:/absolute/path/to/metamod-source

mkdir build && cd build
python ../configure.py -s cs2
ambuild
```