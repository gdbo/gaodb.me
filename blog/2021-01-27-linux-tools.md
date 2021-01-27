---
slug: linux-tools
title: 记录常用的Linux工具
author: gaodb
author_title: 计算机小学生
author_url: https://github.com/gdbo
author_image_url: https://s3.ax1x.com/2021/01/24/sbrdkF.png
description: 
tags: [技术]
---

记录Linux平台下一些好用的工具软件，持续更新。。。

<!-- truncate -->

## 离线文档查看工具 Zeal

ZEAL 是一款离线文档浏览器,其灵感来自 OS X平台上的 Dash，目前支持 Window 和 Liunx。基于 QT。

**主要功能：**

- 可同时搜索多个文档
- 不依赖网络
- GPL 协议开放源码
- Dash 中的文档都可以在 Zeal 中使用。

**安装**

到[zeal官网下载](zealdocs.org/download.html)，按照对应系统的方式安装

我用的是linux mint, 也就是按照debian/ubuntu系发行版的安装方法安装：

```shell
$ sudo add-apt-repository ppa:zeal-developers/ppa
$ sudo apt-get update
$ sudo apt-get install zeal
```

**基本使用**
安装完成后，到`File --> Options --> Docsets`中浏览下载你想要的文档。下载后就可以搜索查找你想要的，例如：

- `string` ：将会查找所有关于`string`的文档
- `python:string`： 将会查找与`python`有关的`string`

## 免费数据库工具--DBeaver

多平台的免费数据库工具。支持几乎所有流行的数据库︰ MySQL，PostgreSQL，SQLite、 Oracle、 DB2、 SQL Server、 Sybase、 Teradata，MongoDB，Cassandra, Redis等等。

它的官网是[DBeaver](http://dbeaver.jkiss.org/),文档在[github](https://github.com/serge-rider/dbeaver/wiki)

## MongoDB数据库管理工具 robomongo

虽说直接使用mongo shell来操作mongodb很方便,不过查看数据的格式不太舒服,所有这里推荐一个可视化的工具,能够一目了然,Robomongo 是一个基于 Shell 的跨平台开源 MongoDB 管理工具。嵌入了 JavaScript 引擎和 MongoDB mogo 。只要你会使用 mongo shell ，你就会使用 Robomongo。提供语法高亮、自动完成、差别视图等。

有免费版的,也有付费版的,可以直接下载免费版的使用就可以了.

官网[robomongo](https://robomongo.org/), 下载地址[robomongo download](https://robomongo.org/download)


## 音乐播放器--网易云音乐

前一段时间,网易云音乐推出了Linux客户端,就使用了一下感觉还不错,下载地址在[网页云音乐](http://music.163.com/#/download); 直接点击对应系统版本,来下载安装包,我使用的是 ubuntu16.04,所以下载对应的 \*.deb包.
**安装**
```
sudo dpkg -i netease-cloud-music_1.0.0_amd64_ubuntu16.04.deb
```
如果遇到依赖的问题,而不能安装,就运行:

```
sudo apt-get -f install
```

## 截图工具 shutter

通过Shutter，你可以截取包括选定区域、全屏幕、窗口、窗口内的控件甚至网页的图像。通过内置的强大插件机制，你可以在截图后，对图像进行各式各样的增强，如增加阴影，打上标志等等

ubuntu上的安装方式很简单:

```
sudo apt-get install shutter
```

也可以到[shutter官网](http://shutter-project.org/)下载对应系统的安装包

## 取色工具 gcolor2

可以在页面中取色，也可以自己设置颜色，gcolor2会显示预览的颜色，并且会给出颜色对应的十六进制值，还可以设置透明度等等。

安装:

```
sudo apt-get install gcolor2
```

## 其它

- [utools](https://u.tools/): 生产力工具，拥有强大的工具集和插件系统，有点类似与Mac平台的Alfred
- [typora](https://www.typora.io/): 非常简洁的Markdown编辑器，支持直接导出pdf（^ - ^）
- [htop](https://htop.dev/): 交互式的终端进程查看器，相比与top命令更加直观、清晰
- [ranger](https://ranger.github.io/): 终端版的文件管理器，可以使用vi的快捷键进行操作，灰常炫酷
