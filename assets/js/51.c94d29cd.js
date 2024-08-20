(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{335:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python开发问题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python开发问题总结"}},[t._v("#")]),t._v(" python开发问题总结")]),t._v(" "),a("h2",{attrs:{id:"包安装不了的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包安装不了的问题"}},[t._v("#")]),t._v(" 包安装不了的问题")]),t._v(" "),a("p",[t._v("使用pip指令安装包的时候出现如下问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError...\n")])])]),a("p",[t._v("这是python仓库的源访问不稳定，可用如下办法解决")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install packageName -i url\n")])])]),a("p",[t._v("以下是国内的一些常见的源：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("阿里云 http://mirrors.aliyun.com/pypi/simple/\n\n中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/\n\n豆瓣(douban) http://pypi.douban.com/simple/\n\n清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/\n\n中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/\n")])])]),a("p",[t._v("举例说明：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install scipy -i http://mirrors.aliyun.com/pypi/simple/\n")])])]),a("p",[t._v("使用http协议的时候会弹出安全问题，解决办法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install scipy -i http://mirrors.aliyun.com/pypi/simple/ -trusted-host mirrors.aliyun.com\n")])])]),a("p",[t._v("或者在配置文件中更改，一劳永逸，这里使用清华的镜像")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);