(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{287:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"nodejs安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs安装配置"}},[a._v("#")]),a._v(" NodeJS安装配置")]),a._v(" "),t("h2",{attrs:{id:"windows环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows环境"}},[a._v("#")]),a._v(" windows环境")]),a._v(" "),t("p",[a._v("官网下载安装包，一路next")]),a._v(" "),t("h2",{attrs:{id:"linux环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux环境"}},[a._v("#")]),a._v(" linux环境")]),a._v(" "),t("h3",{attrs:{id:"准备安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备安装包"}},[a._v("#")]),a._v(" 准备安装包")]),a._v(" "),t("p",[a._v("命令行直接下载")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget https://nodejs.org/dist/v16.13.1/node-v16.13.1-linux-x64.tar.xz\n")])])]),t("p",[a._v("可以在官网仓库查看安装包对应的平台和版本")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("创建目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /usr/local\nmkdir node\ncd node\n")])])]),t("p",[a._v("解压到当前目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar -xvfJ /root/node-v16.13.1-linux-x64.tar.xz\n")])])]),t("p",[a._v("解压完毕，当前目录会出现"),t("code",[a._v("node-v16.13.1-linux-x64")]),a._v("目录")]),a._v(" "),t("h3",{attrs:{id:"配置系统环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置系统环境变量"}},[a._v("#")]),a._v(" 配置系统环境变量")]),a._v(" "),t("p",[a._v("打开配置文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vi /etc/profile\n")])])]),t("p",[a._v("末尾添加")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("export PATH=/usr/local/lib/node/node-v16.13.1-linux-x64/bin:$PATH\n")])])]),t("p",[a._v("保存退出")]),a._v(" "),t("p",[a._v("刷新环境变量")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("source /etc/profile\n")])])]),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("node -v\nnpm version\nnpx -v\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);