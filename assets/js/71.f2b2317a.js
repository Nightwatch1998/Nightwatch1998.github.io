(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{355:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react常用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react常用api"}},[t._v("#")]),t._v(" React常用API")]),t._v(" "),a("h2",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("h3",{attrs:{id:"usecallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usecallback"}},[t._v("#")]),t._v(" useCallback")]),t._v(" "),a("p",[t._v("重新渲染之间保留函数定义")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cachedFn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fn")]),t._v("：是需要缓存的函数")]),t._v(" "),a("li",[a("code",[t._v("dependencies")]),t._v(" ："),a("code",[t._v("fn")]),t._v("函数使用的响应值列表")])]),t._v(" "),a("h3",{attrs:{id:"usecontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usecontext"}},[t._v("#")]),t._v(" useContext")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SomeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("返回组件上方最近的"),a("code",[t._v("SomeContext.Provider")]),t._v("的值，如果没有，使用默认值")]),t._v(" "),a("p",[t._v("用法：")]),t._v(" "),a("ul",[a("li",[t._v("向组件树深处传递数据")]),t._v(" "),a("li",[t._v("全局状态管理")]),t._v(" "),a("li",[t._v("主题设置")]),t._v(" "),a("li",[t._v("用户认证状态")])]),t._v(" "),a("h3",{attrs:{id:"usedebugvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usedebugvalue"}},[t._v("#")]),t._v(" useDebugValue")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useDebugValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在React DevTools中为自定义hook添加一个label")]),t._v(" "),a("h3",{attrs:{id:"usedeferredvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usedeferredvalue"}},[t._v("#")]),t._v(" useDeferredValue")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deferredValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useDeferredValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("延迟获取最新的状态值，以实现更平滑的用户界面更新，自带防抖的")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("<Suspense>")]),t._v("中使用deferredValue")]),t._v(" "),a("h3",{attrs:{id:"useeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("同步组件和外部系统")]),t._v(" "),a("p",[t._v("用途：")]),t._v(" "),a("ul",[a("li",[t._v("执行副作用函数：发送网络请求、访问浏览器API、订阅事件等")]),t._v(" "),a("li",[t._v("处理生命周期事件")]),t._v(" "),a("li",[t._v("数据订阅和更新")]),t._v(" "),a("li",[t._v("更新DOM调用外部函数或API")])]),t._v(" "),a("h3",{attrs:{id:"useid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useid"}},[t._v("#")]),t._v(" useId")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("为无障碍属性生成唯一ID")]),t._v(" "),a("h3",{attrs:{id:"useimperativehandle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useimperativehandle"}},[t._v("#")]),t._v(" useImperativeHandle")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useImperativeHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("向父组件暴露子组件的实例或特定方法，以便父组件可以直接操作子组件")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ref")]),t._v("是从"),a("code",[t._v("forwardRef")]),t._v("获得的第二个参数")]),t._v(" "),a("li",[a("code",[t._v("createHandle")]),t._v(" 定义暴露给父组件的接口")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" forwardRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useImperativeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useRef "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ChildComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forwardRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" childRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义需要暴露给父组件的接口")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useImperativeHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暴露方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行一些操作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暴露属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("someProperty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他需要暴露的方法和属性...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件的其他逻辑和渲染")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Child Component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ChildComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"useinsertioneffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useinsertioneffect"}},[t._v("#")]),t._v(" useInsertionEffect")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useInsertionEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("DOM提交之前执行的useEffect版本")]),t._v(" "),a("p",[t._v("用于动态加载CSS")]),t._v(" "),a("h3",{attrs:{id:"uselayouteffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect"}},[t._v("#")]),t._v(" useLayoutEffect")]),t._v(" "),a("p",[t._v("组件渲染到DOM之后，浏览器重绘屏幕前触发之前执行，而useEffect是在浏览器渲染之后执行")]),t._v(" "),a("p",[t._v("用于浏览器重绘之前测量屏幕尺寸")]),t._v(" "),a("h3",{attrs:{id:"usememo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usememo"}},[t._v("#")]),t._v(" useMemo")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cachedValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calculateValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("用途：")]),t._v(" "),a("ul",[a("li",[t._v("缓存计算的值")]),t._v(" "),a("li",[t._v("缓存组件")]),t._v(" "),a("li",[t._v("缓存函数")])]),t._v(" "),a("h3",{attrs:{id:"usereducer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usereducer"}},[t._v("#")]),t._v(" useReducer")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("封装组件的状态更新逻辑")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("reducer")]),t._v("：定义状态更新逻辑的函数，参数为state和action，返回下一个state")]),t._v(" "),a("li",[a("code",[t._v("initialArg")]),t._v("：初始状态")])]),t._v(" "),a("p",[t._v("返回值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("state")]),t._v("：当前状态")]),t._v(" "),a("li",[a("code",[t._v("dispatch")]),t._v("：更新状态触发渲染的函数")])]),t._v(" "),a("h3",{attrs:{id:"useref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useref"}},[t._v("#")]),t._v(" useRef")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("引用一个不需要渲染的值，通常用于操作DOM")]),t._v(" "),a("h3",{attrs:{id:"usestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("添加状态变量")]),t._v(" "),a("h3",{attrs:{id:"usesyncexternalstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usesyncexternalstore"}},[t._v("#")]),t._v(" useSyncExternalStore")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" snapshot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useSyncExternalStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscribe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getSnapshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getServerSnapshot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("用于订阅外部状态store、浏览器API")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("subscribe")]),t._v("：订阅一个store并返回一个取消订阅的函数，需要传递一个callback参数")]),t._v(" "),a("li",[a("code",[t._v("getSnapshot")]),t._v("： 获取store的数据快照")]),t._v(" "),a("li",[a("code",[t._v("getServerSnapshot")]),t._v("：返回store的初始值")])]),t._v(" "),a("h3",{attrs:{id:"usetransition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usetransition"}},[t._v("#")]),t._v(" useTransition")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isPending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startTransition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useTransition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("更新状态不阻塞UI")]),t._v(" "),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("isPending")]),t._v(" ：是否有未处理的过渡")]),t._v(" "),a("li",[a("code",[t._v("startTransition")]),t._v("：使得状态过渡更新")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startTransition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextTab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"内置组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置组件"}},[t._v("#")]),t._v(" 内置组件")]),t._v(" "),a("h3",{attrs:{id:"fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[t._v("#")]),t._v(" "),a("code",[t._v("<Fragment>(<>...</>)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<>\n  <OneChild />\n  <AnotherChild />\n</>\n")])])]),a("h3",{attrs:{id:"profiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profiler"}},[t._v("#")]),t._v(" "),a("code",[t._v("<Profiler>")])]),t._v(" "),a("p",[t._v("衡量渲染性能")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Profiler id="App" onRender={onRender}>\n  <App />\n</Profiler>\n')])])]),a("p",[t._v("onRender回调函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actualDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commitTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Aggregate or log render timings...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"strictmode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictmode"}},[t._v("#")]),t._v(" "),a("code",[t._v("<StrictMode>")])]),t._v(" "),a("p",[t._v("开发环境查找BUG")]),t._v(" "),a("h3",{attrs:{id:"suspense-回看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspense-回看"}},[t._v("#")]),t._v(" "),a("code",[t._v("<Suspense>")]),t._v("（回看）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Suspense fallback={<Loading />}>\n  <SomeComponent />\n</Suspense>\n")])])]),a("p",[t._v("fallback通常用于渲染更新前的loading组件")]),t._v(" "),a("p",[t._v("react在后台会先渲染value，再渲染deferedValue")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"createcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createcontext"}},[t._v("#")]),t._v(" createContext")]),t._v(" "),a("p",[t._v("创建上下文")]),t._v(" "),a("h3",{attrs:{id:"forwardref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forwardref"}},[t._v("#")]),t._v(" forwardRef")]),t._v(" "),a("p",[t._v("传递ref给自定义组件")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import { forwardRef } from \'react\';\n// 子组件\nconst MyInput = forwardRef(function MyInput(props, ref) {\n  const { label, ...otherProps } = props;\n  return (\n    <label>\n      {label}\n      <input {...otherProps} ref={ref} />\n    </label>\n  );\n});\n\n// 父组件\nfunction Form() {\n  const ref = useRef(null);\n\n  function handleClick() {\n    ref.current.focus();\n  }\n\n  return (\n    <form>\n      <MyInput label="Enter your name:" ref={ref} />\n      <button type="button" onClick={handleClick}>\n        Edit\n      </button>\n    </form>\n  );\n}\n')])])]),a("h3",{attrs:{id:"lazy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazy"}},[t._v("#")]),t._v(" lazy")]),t._v(" "),a("p",[t._v("实现懒加载")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { lazy } from 'react';\n\nconst MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));\n")])])]),a("h3",{attrs:{id:"memo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memo"}},[t._v("#")]),t._v(" memo")]),t._v(" "),a("p",[t._v("如果组件的输入没有发生变化，则跳过重新渲染")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { memo } from 'react';\n\nconst SomeComponent = memo(function SomeComponent(props) {\n  // ...\n});\n")])])]),a("p",[t._v("参数：")]),t._v(" "),a("ul",[a("li",[t._v("Component ：需要缓存的组件")]),t._v(" "),a("li",[t._v("arePropsEqual：接受前一个props和新的props，返回比较的值，指定比较函数")])]),t._v(" "),a("h3",{attrs:{id:"starttransition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starttransition"}},[t._v("#")]),t._v(" startTransition")]),t._v(" "),a("p",[t._v("非阻塞地更新state")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" startTransition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TabContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setTab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'about'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startTransition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextTab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h1",{attrs:{id:"react-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-dom"}},[t._v("#")]),t._v(" React DOM")]),t._v(" "),a("h2",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("h2",{attrs:{id:"api-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-2"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"createprotal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createprotal"}},[t._v("#")]),t._v(" createProtal")]),t._v(" "),a("p",[t._v("将组件的渲染结果插入到DOM树的其他位置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SomeComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPortal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"flushsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flushsync"}},[t._v("#")]),t._v(" flushSync")]),t._v(" "),a("p",[t._v("同步刷新组件的渲染")]),t._v(" "),a("h3",{attrs:{id:"createroot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createroot"}},[t._v("#")]),t._v(" createRoot")]),t._v(" "),a("p",[t._v("将根组件渲染到HTML文档的特定位置")]),t._v(" "),a("h3",{attrs:{id:"unmountcomponentatnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmountcomponentatnode"}},[t._v("#")]),t._v(" unmountComponentAtNode")])])}),[],!1,null,null,null);a.default=n.exports}}]);