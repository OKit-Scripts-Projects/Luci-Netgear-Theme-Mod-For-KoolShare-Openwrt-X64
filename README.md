# Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64

[![GitHub issues](https://img.shields.io/github/issues/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64.svg)](https://github.com/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64/issues)
[![GitHub forks](https://img.shields.io/github/forks/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64.svg)](https://github.com/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64/network)
[![GitHub stars](https://img.shields.io/github/stars/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64.svg)](https://github.com/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64/stargazers)


## 演示
适配后如图
[![screenshot](https://github.com/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64-Tenhow/raw/self/screen.jpg "title")](截图)

## 版权信息
主题原作者: [tracemouse](http://koolshare.cn/space-uid-11558.html)

原帖地址:   http://koolshare.cn/thread-81637-1-1.html


## 安装说明：
### 方法一
1.ipk用scp或其他方式上传 「x64.ipk」 到openwrt

2.安装代码：
```
opkg install ./x64.ipk 
```
### 方法二
1.ssh 登录openwrt

2.执行以下代码
```
wget https://github.com/OKit-Scripts-Projects/Luci-Netgear-Theme-Mod-For-KoolShare-Openwrt-X64/raw/master/x64.ipk && opkg install ./x64.ipk
```


## 卸载代码：
```
opkg remove luci-theme-netgear
sed 's/rgb(154,37,143)/#6d140b/g' -i /koolshare/webs/css/orange-scheme.css
```


## 安装情况（演示）：
```
root@Tuning:~# opkg install x64.ipk
Installing luci-theme-netgear (git-17.016.25656-a85807d-1) to root...
Configuring luci-theme-netgear.
modifing color in orange-scheme
set netgear theme as default
```



### 修改内容：
1.更新jquery脚本到3.3.1

2.修改js：增加「酷软」标签

3.修改css：适配「酷软」、「统计」的图标，

4.修正酷软页面的文字颜色：修改/koolshare/webs/css/orange-scheme.css 的网页配色


### 文件说明：
1.data/control 为源码

2.pack 为 bash打包脚本

3.ipk 为生成的openwrt x64 主题插件包


## 开发方法：
1.如需自行打包，请确保在linux系统下（mac和windows无效）

2.打包使用命令：./pack


