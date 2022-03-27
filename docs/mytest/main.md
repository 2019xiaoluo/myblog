---
title: docker/podman springboot mysql tomcat部署安装
date: 2021-1-5
---

# spingboot的javaweb项目和普通的javaweb 项目的 docker 部署详细教程

1. 众所周知，我们在linux服务器上安装mysql java 环境可能会有很多麻烦，所以docker容器镜像技术出现了

docker和podman是差不多的两个应用这里以podman做演示，在centos中只需yum install podman -y即可安装

[docker 安装简单使用](https://blog.csdn.net/xc979906570/article/details/120638877?spm=1001.2014.3001.5501)

2.安装完毕后我们可以拉取我们需要的镜像

## 安装mysql镜像

```bash
podman pull mysql:8.0.20  可以拉取指定版本

//创建文件夹 也就是容器中的mysql映射到本机的文件夹
mkdir -p /media/docker/mysql8.0/{conf,data}

cd /media/docker/mysql8.0/conf

//创建my.cnf配置文件
vim my.cnf 

//复制文件内容到my.cnf下

[client]     
default-character-set=utf8
[mysql]   
default-character-set=utf8
[mysqld]
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
character_set_server=utf8
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION



//-v映射文件和文件夹的配置  -e设置时区和mysql root用户的密码
podman run -d -p 3306:3306 --privileged=true -v /media/docker/mysql8.0/conf/my.cnf:/etc/mysql/my.cnf  -v /media/docker/mysql8.0/data:/var/lib/mysql -e TZ=Asia/Shanghai -e MYSQL_ROOT_PASSWORD=root  --name mysql8.0 mysql:8.0.20

podman ps -a  //查看运行的容器
云服务器打开3306端口 navicat就可以通过ip账号密码连接了
```
[mysql镜像参考文章](https://blog.csdn.net/u013068184/article/details/103143331)


## springboot项目构建我们的镜像
打包好我们的jar包上传到某个目录下
编写Dockerfile文件
内容如下
```bash
FROM java:8
VOLUME /tmp
ADD eriz-1.0.0.jar /app.jar
RUN sh -c 'touch /app.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
```
**eriz-1.0.0.jar改成我们jar包的名字即可**

构建我们的镜像
进入该目录下执行 

**-t后面是我们的镜像名 后面有一点的**
```bash
podman build -t mytodotask .
```

根据镜像构建我们的容器即可

-e表示时区 -it会进入容器中 也可修改为-d  -p端口映射 本地8080映射到容器内的8080

```bash
podman run -it --net=host  --privileged=true  --name mytodotask  -e TZ=Asia/Shanghai  -p 8080:8080 mytodotask
```
[参考文章](https://blog.csdn.net/zhangcc233/article/details/96706157)

这样springboot的项目就可以了

## 部署普通javaweb项目tomcat
首先我们拉取tomcat镜像
可以拉取指定版本的

```bash
podman pull tomcat:9.0.44
```


```bash
//创建映射的文件夹
mkdir -p  /home/tomcat/{webapps,logs}

// 进入到webapps 下新建config
cd /home/tomcat/webapps
mkdir config

//运行我们的容器
podman run --privileged=true -v /home/tomcat/webapps/:/usr/local/tomcat/webapps/ -v /home/tomcat/logs/:/usr/local/tomcat/logs -v /home/tomcat/webapps/config:/usr/local/tomcat/conf_app/  -e TZ=Asia/Shanghai  -p 8080:8080  --name tomcat9  -d tomcat:9.0.44
```

刚刚创建的/home/tomcat/webapps目录下
放入我们的war包就会自动解压
可以通过
127.0.0.1:8080/文件夹名   访问 
之后删掉那个war包即可
所以我们可以修改文件夹的名字改变url

开发8080端口公网就可以访问了