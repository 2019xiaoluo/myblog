---
title: 阿里云服务器简单配置vnc服务
date: 2022-1-5
---

首先应该安装一个桌面
可以选择安装 yum grouplist 里面的带gui的服务器桌面
![在这里插入图片描述](https://img-blog.csdnimg.cn/4f0b958b35b346f4a8832afbac0b4090.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b326585ed0664a66bef044b3355e4c52.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_11,color_FFFFFF,t_70,g_se,x_16)
两个桌面安装一个就可以了 

```bash
yum groupinstall 'Server with Gui' 
```




下载tigervnc服务
下载的是最新版 1.11.0

```bash
yum install tigervnc-server -y
```

对于tigervnc的启动。
去通过修改配置文件反启动反而一直报错
所以不用编辑vncservers配置文件，只接使用vncserver命令即可以启动。
```bash
 vncserver    //第一次会启动会提示设置密码
```

设置密码

```bash
vncpasswd
```

在阿里云控制台配置规则开发5901端口
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb377e9cec1e473bb9adbfc4d7a1d701.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_20,color_FFFFFF,t_70,g_se,x_16)
![配置vnc的5901开放](https://img-blog.csdnimg.cn/3b6aff4e2c5f403aad19d5105c38e737.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_20,color_FFFFFF,t_70,g_se,x_16)
![出方向](https://img-blog.csdnimg.cn/d66829ab69774d65bc1426cc290bfe50.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_20,color_FFFFFF,t_70,g_se,x_16)

之后直接可以连接了
vncview可以连接  输入ip地址:1就可以了
之后输入设置的密码就连上了
![在这里插入图片描述](https://img-blog.csdnimg.cn/bf3f91e7a99a4529910f6475845d6dc5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGM5Nzk5MDY1NzA=,size_17,color_FFFFFF,t_70,g_se,x_16)