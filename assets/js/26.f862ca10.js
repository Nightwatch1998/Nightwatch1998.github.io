(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{310:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker进阶"}},[s._v("#")]),s._v(" Docker进阶")]),s._v(" "),t("h2",{attrs:{id:"docker网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker网络"}},[s._v("#")]),s._v(" Docker网络")]),s._v(" "),t("p",[s._v("理解Docker0")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-20-7-centos dockerfiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d -P -it mytomcat:1.0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器内部的ip地址  ip addr ，发现容器启动的时候，会得到一个eth0@if155 是docker分配的 172.17.0.3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-20-7-centos dockerfiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it 243b9d1f9c6b ip addr")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n       valid_lft forever preferred_lft forever\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("154")]),s._v(": eth0@if155: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc noqueue state UP group default\n    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3/16 brd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n\n＃当然是可以pin通的\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-20-7-centos /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping 172.17.0.3")]),s._v("\nPING "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.063")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.045")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.045")]),s._v(" ms\n\n\n")])])]),t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),t("h2",{attrs:{id:"docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),t("h2",{attrs:{id:"docker-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-stack"}},[s._v("#")]),s._v(" Docker Stack")]),s._v(" "),t("h2",{attrs:{id:"docker-secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-secret"}},[s._v("#")]),s._v(" Docker secret")]),s._v(" "),t("h2",{attrs:{id:"docker-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-config"}},[s._v("#")]),s._v(" Docker Config")]),s._v(" "),t("p",[s._v("P34 11:36")])])}),[],!1,null,null,null);t.default=r.exports}}]);