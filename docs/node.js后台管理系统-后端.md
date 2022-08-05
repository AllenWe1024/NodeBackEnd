node.js后台管理系统

## 1.概述

登入地址：http://letsrun.plus:10001/

web服务结构图：

[结构图]: E:\SYNC(Ent)\W\Library附件\网络结构.vsdx



## 2.网络结构

### 1.客户端访问

正向代理，登入地址：http://letsrun.plus:10001/

### 2.云服务器→内网服务器

内网穿透，使用frp

（1）基础连接

在云服务器上，frps.ini文件中：

```
[common]
bind_port = 7000 
;用此端口建立云服务器与本地服务器的连接
```

在内网服务器上，frpc.ini文件中：

```
[common]
server_addr = 106.54.176.179
server_port = 7000
```

106.54.176.179为公网ip地址

（2）前端页面连接

云服务器的10001端口转交到内网服务器10002

在内网服务器上，frpc.ini文件中，添加：

```
[web1]
type = tcp
local_ip = 127.0.0.1
local_port = 10002
remote_port = 10001
custom_domains = letsrun.plus
```

type：连接类型

local_ip：内网服务器ip

local_port：内网服务器端口

remote_port：云服务器端口

custom_domains：云服务器解析的域名

（3）后端页面连接，同理

云服务器的10003端口转交到内网服务器10004

在内网服务器上，frpc.ini文件中，添加：

```
[web2]
type = tcp
local_ip = 127.0.0.1
local_port = 10004
remote_port = 10003
custom_domains = letsrun.plus
```

（4）sql数据库连接（方便调试和开发）

云服务器的3306端口转交到内网服务器10005

在内网服务器上，frpc.ini文件中，添加：

```
[sql]
type = tcp
local_ip = 127.0.0.1
local_port = 3306
remote_port = 10005
custom_domains = letsrun.plus
```

## 前端页面

详见GitHub仓库：[NodeBackEnd](https://github.com/ZhuoranTian/NodeBackEnd)



## 后端api

详见GitHub仓库：[NodeBackEnd](https://github.com/ZhuoranTian/NodeBackEnd)

[Node.js.md]: E:\SYNC(Ent)\W\Library附件\Node.js.md	"Node.js.md"



## 服务器持续运行

nodejs服务后台持续运行：

利用 forever

forever是一个nodejs守护进程，完全由命令行操控。forever会监控nodejs服务，并在服务挂掉后进行重启。

1、安装 forever

npm install forever -g
2、启动服务

service forever start
3、使用 forever 启动 js 文件

forever start index.js
4、停止 js 文件

forever stop index.js
5、启动js文件并输出日志文件

forever start -l forever.log -o out.log -e err.log index.js
6、重启js文件

forever restart index.js
7、查看正在运行的进程

forever list

