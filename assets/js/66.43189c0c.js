(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{350:function(v,_,o){"use strict";o.r(_);var n=o(10),t=Object(n.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"linux基本介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux基本介绍"}},[v._v("#")]),v._v(" Linux基本介绍")]),v._v(" "),_("h2",{attrs:{id:"linux发行版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux发行版本"}},[v._v("#")]),v._v(" Linux发行版本")]),v._v(" "),_("h3",{attrs:{id:"基于底层架构的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于底层架构的分类"}},[v._v("#")]),v._v(" 基于底层架构的分类")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("Debian 系列")]),v._v("：基于 Debian 的发行版以稳定性和丰富的软件库著称，常用于服务器和桌面环境。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Debian、Ubuntu、Kali Linux、Linux Mint。")])])]),v._v(" "),_("li",[_("strong",[v._v("Red Hat 系列")]),v._v("：这些发行版通常用于企业环境，注重稳定性和长期支持。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Red Hat Enterprise Linux (RHEL)、CentOS、Fedora、AlmaLinux、Rocky Linux。")])])]),v._v(" "),_("li",[_("strong",[v._v("Arch Linux 系列")]),v._v("：注重简洁和用户控制，通常需要用户手动配置，适合高级用户。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Arch Linux、Manjaro、EndeavourOS。")])])]),v._v(" "),_("li",[_("strong",[v._v("SUSE 系列")]),v._v("：以企业用户为主，提供强大的管理工具和企业级支持。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：openSUSE、SUSE Linux Enterprise Server (SLES)。")])])]),v._v(" "),_("li",[_("strong",[v._v("Gentoo 系列")]),v._v("：强调用户自定义和优化，使用源代码包进行安装和配置。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Gentoo、Calculate Linux。")])])]),v._v(" "),_("li",[_("strong",[v._v("Slackware 系列")]),v._v("：是最早的 Linux 发行版之一，强调稳定性和简洁性。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Slackware、Salix OS。")])])])]),v._v(" "),_("h3",{attrs:{id:"基于包管理系统的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于包管理系统的分类"}},[v._v("#")]),v._v(" 基于包管理系统的分类")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("APT 系统")]),v._v("：基于 Debian 系列的发行版使用 "),_("code",[v._v("APT")]),v._v(" (Advanced Package Tool) 作为包管理工具。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Debian、Ubuntu、Linux Mint。")])])]),v._v(" "),_("li",[_("strong",[v._v("RPM 系统")]),v._v("：Red Hat 系列的发行版使用 "),_("code",[v._v("RPM")]),v._v(" (Red Hat Package Manager) 包管理器。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：RHEL、CentOS、Fedora、openSUSE。")])])]),v._v(" "),_("li",[_("strong",[v._v("Pacman 系统")]),v._v("：Arch Linux 系列使用 "),_("code",[v._v("Pacman")]),v._v(" 包管理器，强调简洁和灵活性。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Arch Linux、Manjaro。")])])]),v._v(" "),_("li",[_("strong",[v._v("Portage 系统")]),v._v("：Gentoo 系列使用 "),_("code",[v._v("Portage")]),v._v(" 包管理器，主要以源码编译为主。\n"),_("ul",[_("li",[_("strong",[v._v("代表发行版")]),v._v("：Gentoo、Calculate Linux。")])])])]),v._v(" "),_("h2",{attrs:{id:"root目录详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#root目录详解"}},[v._v("#")]),v._v(" ROOT目录详解")]),v._v(" "),_("h3",{attrs:{id:"root目录下的文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#root目录下的文件夹"}},[v._v("#")]),v._v(" ROOT目录下的文件夹")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("/bin目录")]),v._v("：这个目录存放了系统的"),_("code",[v._v("可执行文件")]),v._v("，如ls、cp、mv等，可以被root和一般账号共享。")]),v._v(" "),_("li",[_("strong",[v._v("/sbin目录")]),v._v("：与/bin类似，存放"),_("code",[v._v("可执行文件")]),v._v("的地方，多由"),_("code",[v._v("系统管理员")]),v._v("使用，如ifconfig和fdisk等。")]),v._v(" "),_("li",[_("strong",[v._v("/etc目录")]),v._v("：该目录包含了系统的"),_("code",[v._v("配置文件")]),v._v("，如网络配置、用户账户配置及服务配置等，是系统运行的重要配置信息的存放地。nginx、mysql、tomcat的配置文件也在此目录。")]),v._v(" "),_("li",[_("strong",[v._v("/dev目录")]),v._v("：该目录用于存放"),_("code",[v._v("设备文件")]),v._v("，即设备驱动程序，用户通过这些文件访问外部设备，比如通过访问/dev/mouse来访问鼠标输入。")]),v._v(" "),_("li",[_("strong",[v._v("/home目录")]),v._v("：所有"),_("code",[v._v("普通用户")]),v._v("的主目录，每个用户在此目录下有一个独立的子目录，用于存储用户的个人文件和配置信息。例如，用户user的主目录就是/home/user。")]),v._v(" "),_("li",[_("strong",[v._v("/usr目录")]),v._v("："),_("code",[v._v("用户程序和文件存放")]),v._v("的主要目录，如游戏、软件包、文件等。nginx、mysql、tomcat也会安装在这个目录")]),v._v(" "),_("li",[_("strong",[v._v("/lib目录")]),v._v("：该目录存放着"),_("code",[v._v("支持位于/bin和/sbin")]),v._v("下的二进制文件的库文件，这些库文件类似于Windows中的DLL文件。")]),v._v(" "),_("li",[_("strong",[v._v("/var目录")]),v._v("：包含经常变化的文件，如"),_("code",[v._v("日志文件、临时文件和邮件")]),v._v("等，用于存放系统运行时产生的数据和信息。")]),v._v(" "),_("li",[_("strong",[v._v("/tmp目录")]),v._v("：这是一个临时目录，用于存放"),_("code",[v._v("临时文件")]),v._v("。在系统重启时，该目录下的文件会被清空。")]),v._v(" "),_("li",[_("strong",[v._v("/root目录")]),v._v("：系统管理员（root用户）的主目录，是系统中唯一一个以root用户为所有者的目录。")]),v._v(" "),_("li",[_("strong",[v._v("/boot目录")]),v._v("："),_("code",[v._v("启动linux系统")]),v._v("需要的核心系统文件")]),v._v(" "),_("li",[_("strong",[v._v("/proc目录")]),v._v("：虚拟文件系统，提供了"),_("code",[v._v("内核与进程信息")]),v._v("，内部的文件通常以进程ID作为文件名")]),v._v(" "),_("li",[_("strong",[v._v("/media目录")]),v._v("：用于挂载可移动媒体，存放软盘、光盘、DVD等"),_("code",[v._v("媒体")]),v._v("信息")]),v._v(" "),_("li",[_("strong",[v._v("/mnt目录")]),v._v("：用于挂载"),_("code",[v._v("外部存储设备")])]),v._v(" "),_("li",[_("strong",[v._v("/opt目录")]),v._v("：存放可选的软件包")]),v._v(" "),_("li",[_("strong",[v._v("/lost+found目录")]),v._v("：文件系统的垃圾桶，用于存放找回的文件碎片。")])]),v._v(" "),_("h3",{attrs:{id:"常见软件的默认安装位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见软件的默认安装位置"}},[v._v("#")]),v._v(" 常见软件的默认安装位置")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("Nginx")]),v._v(":\n"),_("ul",[_("li",[_("strong",[v._v("应用程序")]),v._v(": Nginx的二进制文件通常安装在"),_("code",[v._v("/usr/sbin/")]),v._v("或"),_("code",[v._v("/usr/local/sbin/")]),v._v("目录下。")]),v._v(" "),_("li",[_("strong",[v._v("配置文件")]),v._v(": Nginx的配置文件通常放在"),_("code",[v._v("/etc/nginx/")]),v._v("目录下。这里有主要的配置文件"),_("code",[v._v("nginx.conf")]),v._v("，以及包含各种服务器块配置的"),_("code",[v._v("sites-available")]),v._v("目录。")]),v._v(" "),_("li",[_("strong",[v._v("数据和日志")]),v._v(": Nginx的运行时数据和日志文件通常存放在"),_("code",[v._v("/var/log/nginx/")]),v._v("目录下，而缓存文件可能会放在"),_("code",[v._v("/var/cache/nginx/")]),v._v("目录下。")])])]),v._v(" "),_("li",[_("strong",[v._v("MySQL")]),v._v(":\n"),_("ul",[_("li",[_("strong",[v._v("应用程序")]),v._v(": MySQL的客户端和服务器二进制文件通常安装在"),_("code",[v._v("/usr/bin/")]),v._v("或"),_("code",[v._v("/usr/local/bin/")]),v._v("目录下。")]),v._v(" "),_("li",[_("strong",[v._v("配置文件")]),v._v(": MySQL的配置文件"),_("code",[v._v("my.cnf")]),v._v("或"),_("code",[v._v("my.ini")]),v._v("通常放在"),_("code",[v._v("/etc/my.cnf")]),v._v("或"),_("code",[v._v("/etc/mysql/my.cnf")]),v._v("目录下，或者在MySQL的数据目录中。")]),v._v(" "),_("li",[_("strong",[v._v("数据和日志")]),v._v(": MySQL的数据文件通常存放在"),_("code",[v._v("/var/lib/mysql/")]),v._v("目录下，而日志文件则可能存放在"),_("code",[v._v("/var/log/mysql/")]),v._v("或"),_("code",[v._v("/var/log/mysql/mysqld.log")]),v._v("。")])])]),v._v(" "),_("li",[_("strong",[v._v("Tomcat")]),v._v(":\n"),_("ul",[_("li",[_("strong",[v._v("应用程序")]),v._v(": Tomcat的可执行文件如"),_("code",[v._v("catalina.sh")]),v._v("通常放在安装目录的"),_("code",[v._v("bin/")]),v._v("子目录下。")]),v._v(" "),_("li",[_("strong",[v._v("配置文件")]),v._v(": Tomcat的主要配置文件"),_("code",[v._v("server.xml")]),v._v("通常放在安装目录的"),_("code",[v._v("conf/")]),v._v("子目录下。")]),v._v(" "),_("li",[_("strong",[v._v("数据和日志")]),v._v(": Tomcat的运行时数据，如部署的Web应用程序和缓存，通常放在"),_("code",[v._v("webapps/")]),v._v("目录下。日志文件则可能存放在"),_("code",[v._v("logs/")]),v._v("目录下。")])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);