(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{411:function(a,t,s){"use strict";s.r(t);var v=s(10),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟机linux环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机linux环境搭建"}},[a._v("#")]),a._v(" 虚拟机linux环境搭建")]),a._v(" "),t("h2",{attrs:{id:"几种linux环境搭建方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#几种linux环境搭建方式"}},[a._v("#")]),a._v(" 几种linux环境搭建方式")]),a._v(" "),t("ol",[t("li",[a._v("购买一台主机，安装linux系统，成本太贵")]),a._v(" "),t("li",[a._v("安装windows，linux双系统，切换麻烦")]),a._v(" "),t("li",[a._v("云服务器linux系统，本质也是虚拟化技术，太贵，容量小")]),a._v(" "),t("li",[a._v("windows系统的wsl2方案，不能多节点，不稳定")]),a._v(" "),t("li",[a._v("虚拟机linux系统，成本低，可部署多节点，适合学习使用")]),a._v(" "),t("li",[a._v("Docker技术")])]),a._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),t("h3",{attrs:{id:"安装vmware虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装vmware虚拟机"}},[a._v("#")]),a._v(" 安装VMware虚拟机")]),a._v(" "),t("p",[a._v("windows虚拟机有Vmware Workstation Player和Vmware Workstation Pro两个版本，前者是免费版，已经足够使用了")]),a._v(" "),t("p",[a._v("Mac系统有Vmware Fusion")]),a._v(" "),t("h3",{attrs:{id:"准备linux系统镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备linux系统镜像文件"}},[a._v("#")]),a._v(" 准备linux系统镜像文件")]),a._v(" "),t("p",[a._v("这里准备的是CentOS-7-x86_64-DVD-1708.iso")]),a._v(" "),t("p",[a._v("可以在")]),a._v(" "),t("p",[a._v("有ubuntu、centos、debain各种linux系统，不同版本号的镜像")]),a._v(" "),t("h3",{attrs:{id:"宿主机设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宿主机设置"}},[a._v("#")]),a._v(" 宿主机设置")]),a._v(" "),t("ol",[t("li",[a._v("点击控制面板-程序和功能-启用或关闭Windows功能")]),a._v(" "),t("li",[a._v("勾选虚拟机平台")]),a._v(" "),t("li",[a._v("勾选Windows虚拟机监控程序平台")]),a._v(" "),t("li",[a._v("重启宿主机")])]),a._v(" "),t("h3",{attrs:{id:"安装linux系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装linux系统"}},[a._v("#")]),a._v(" 安装Linux系统")]),a._v(" "),t("p",[a._v("新建虚拟机：")]),a._v(" "),t("ol",[t("li",[a._v("VM选择创建虚拟机，选择驱动程序位置")]),a._v(" "),t("li",[a._v("固件类型选择传统BIOS")]),a._v(" "),t("li",[a._v("配置处理器核数、硬盘容量、内存，本机上设置1核、内存1G、硬盘20G")]),a._v(" "),t("li",[a._v("选择"),t("strong",[a._v("拆分硬盘")]),a._v("，（不拆分的话会直接蓝屏）")]),a._v(" "),t("li",[a._v("网络模式选择NAT")])]),a._v(" "),t("p",[a._v("启动虚拟机：")]),a._v(" "),t("ol",[t("li",[a._v("选择语言为简中")]),a._v(" "),t("li",[a._v("软件选择：按照需求去选择")]),a._v(" "),t("li",[a._v("设置用户名密码")])]),a._v(" "),t("h2",{attrs:{id:"网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络配置"}},[a._v("#")]),a._v(" 网络配置")]),a._v(" "),t("h3",{attrs:{id:"桥接模式和nat模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式和nat模式"}},[a._v("#")]),a._v(" 桥接模式和NAT模式")]),a._v(" "),t("p",[a._v("桥接模式：虚拟机就像是局域网的一台独立主机，可以访问网络内的任何机器，主机网卡和虚拟网卡IP地址处于"),t("strong",[a._v("同一个网段")]),a._v("，子网掩码、网关、DNS等参数都相同。")]),a._v(" "),t("p",[a._v("NAT模式（网络地址转换）：虚拟机获得私有IP地址，而宿主机充当路由器，将虚拟机的网络流量转发到外部网络。")]),a._v(" "),t("blockquote",[t("p",[a._v("注：")]),a._v(" "),t("ol",[t("li",[a._v("桥接模式适用于虚拟机需要和外部网络进行通信")]),a._v(" "),t("li",[a._v("NAT模式适用于需要在虚拟化环境对网络流量进行控制管理")])])]),a._v(" "),t("h3",{attrs:{id:"桥接模式配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式配置"}},[a._v("#")]),a._v(" 桥接模式配置")]),a._v(" "),t("p",[a._v("1.打开终端，查看网卡信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ifconfig\n")])])]),t("p",[a._v("这时虚拟机的ens33网卡是没有IP地址的，")]),a._v(" "),t("blockquote",[t("p",[a._v("注：ens33是较新的系统中的第一个以太网接口,老版本是eth0、eth1的命名方式")])]),a._v(" "),t("p",[a._v("2.打开VM软件，找到对应的虚拟机，右键设置，在网络适配器选项，勾选"),t("strong",[a._v("桥接模式")]),a._v("，并且勾选"),t("strong",[a._v("复制物理网络连接状态")])]),a._v(" "),t("blockquote",[t("p",[a._v("注：因为本地使用的宿主机是台笔记本，连接的网络是 WIFI,并且需要经常更换")])]),a._v(" "),t("p",[a._v("3.分配IP地址")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("// 切换到root模式，不然dhclient会报错\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" root \n\n// 分配一个可用的IP地址\ndhclient \n\n// 查看ip地址\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v("\n")])])]),t("p",[a._v("4.编辑网卡配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 打开网卡配置\nvim /etc/sysconfig/network-scripts/ifcfg-ens33\n")])])]),t("p",[a._v("更改网卡下列选项")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 表示网络接口使用静态IP地址，默认是dhcp\nBOOTPROTO="static"\n// 表示系统启动时自动激活该网络接口\nONBOOT="yes",默认是no\n// 配置IP地址，为第3步拿到的IP地址\nIPADDR="192.168.137.165"  \n// 子网掩码\nNETMASK="255.255.255.0"\n// 网关\nGATEWAY="192.168.137.1"\n// DNS，用宿主机的DNS就可以\nDNS1="192.168.0.1"\n')])])]),t("p",[a._v("保存退出")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 重启网卡\nsystemctl restart network.service\n")])])]),t("p",[a._v("5.验证")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 是否联通外网\nping www.baidu.com\n// 是否联通宿主机\nping 192.168.137.x\n")])])]),t("h3",{attrs:{id:"nat模式配置-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nat模式配置-补充"}},[a._v("#")]),a._v(" NAT模式配置（补充）")]),a._v(" "),t("p",[a._v("这里使用Vmware Workstation Pro 16，创建Linux虚拟机的时候默认NAT模式")])])}),[],!1,null,null,null);t.default=_.exports}}]);