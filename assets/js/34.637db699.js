(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{378:function(t,s,n){t.exports=n.p+"assets/img/renderMixin.8c5372cd.png"},482:function(t,s,n){"use strict";n.r(s);var e=n(1),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rendermixin流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendermixin流程"}},[t._v("#")]),t._v(" renderMixin流程")]),t._v(" "),s("p",[t._v("相比于以上几种方法，"),s("code",[t._v("renderMixin")]),t._v("是最简单的，它主要在"),s("code",[t._v("Vue.prototype")]),t._v("上定义各种私有方法和一个非常重要的实例方法："),s("code",[t._v("$nextTick")]),t._v("，其精简代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMixin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载各种私有方法，例如this._c，this._v等")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("installRenderHelpers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_render")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例方法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$nextTick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("代码分析：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("installRenderHelpers")]),t._v("：它会在"),s("code",[t._v("Vue.prototype")]),t._v("上挂载各种私有方法，例如"),s("code",[t._v("this._n = toNumber")]),t._v("、"),s("code",[t._v("this._s = toString")]),t._v("、"),s("code",[t._v("this._v = createTextVNode")]),t._v("和"),s("code",[t._v("this._e = createEmptyVNode")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("_render()")]),t._v("："),s("code",[t._v("_render()")]),t._v("方法会把模板编译成"),s("code",[t._v("VNode")]),t._v("，我们会在其后的编译章节详细介绍。")]),t._v(" "),s("li",[s("code",[t._v("nextTick")]),t._v("：就像我们之前介绍过的，"),s("code",[t._v("nextTick")]),t._v("会在"),s("code",[t._v("Vue")]),t._v("构造函数上挂载一个全局的"),s("code",[t._v("nextTick()")]),t._v("方法，而此处为实例方法，本质上引用的是同一个"),s("code",[t._v("nextTick")]),t._v("。")])]),t._v(" "),s("p",[t._v("在以上代码分析完毕后，我们可以得到"),s("code",[t._v("renderMixin")]),t._v("如下流程图：\n")]),s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:n(378)}})]),s("p")])}),[],!1,null,null,null);s.default=a.exports}}]);