(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1054:function(t,n,e){},1055:function(t,n,e){"use strict";e.d(n,"f",(function(){return f})),e.d(n,"k",(function(){return d})),e.d(n,"m",(function(){return m})),e.d(n,"r",(function(){return h})),e.d(n,"a",(function(){return v})),e.d(n,"s",(function(){return C})),e.d(n,"b",(function(){return _})),e.d(n,"v",(function(){return y})),e.d(n,"c",(function(){return w})),e.d(n,"n",(function(){return O})),e.d(n,"j",(function(){return x})),e.d(n,"q",(function(){return k})),e.d(n,"x",(function(){return j})),e.d(n,"p",(function(){return $})),e.d(n,"w",(function(){return I})),e.d(n,"l",(function(){return P})),e.d(n,"d",(function(){return E})),e.d(n,"y",(function(){return z})),e.d(n,"u",(function(){return S})),e.d(n,"e",(function(){return V})),e.d(n,"o",(function(){return A})),e.d(n,"h",(function(){return D})),e.d(n,"i",(function(){return W})),e.d(n,"g",(function(){return Z})),e.d(n,"t",(function(){return B}));var r=e(1059),o=e(19),c=e(31),l=e.n(c),f=function(t){return o.a.post("/school/course/courses",l.a.stringify(t))},d=function(t,n){return o.a.post("/school/course/detail/".concat(t),l.a.stringify(n))},m=function(t,n){return o.a.post("/school/course/play/".concat(t),l.a.stringify(n))},h=function(t){var n=t.courseId,e=t.liveId;return o.a.post("/school/course/loadPush/".concat(n,"/").concat(e))},v=function(t){return o.a.post("/school/student/apply/free/".concat(t))},C=function(t,n){return o.a.post("/school/student/trade/index/".concat(t),l.a.stringify(n))},_=function(t){var n=t.courseId,e=Object(r.a)(t,["courseId"]);return o.a.post("/school/student/trade/buy/".concat(n),l.a.stringify(e))},y=function(t){return o.a.post("/school/course/report/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.options))},w=function(t,n){return o.a.post("/school/favorite/favorite/".concat(t,"/").concat(n))},O=function(t){return o.a.post("/school/course/info/".concat(t))},x=function(t,n){return o.a.post("/school/course/comment/list/".concat(t),l.a.stringify(n))},k=function(t){return o.a.post("/school/course/comment/subList/".concat(t.courseId,"/").concat(t.parentId))},j=function(t,n){return o.a.post("/school/course/score/submit/".concat(t),l.a.stringify(n))},$=function(t,n){return o.a.post("/school/course/score/list/".concat(t),l.a.stringify(n))},I=function(t){return o.a.post("/school/course/comment/submit",l.a.stringify(t))},P=function(t){return o.a.post("/school/course/score/latestBuy/".concat(t))},E=function(t){return o.a.post("/school/course/down/document/".concat(t.courseId,"/").concat(t.liveId))},z=function(t){return o.a.post("/school/student/apply/problem/save",l.a.stringify(t))},S=function(t){return o.a.post("/service/app/mp/makeJsMap",l.a.stringify(t),{custom:{isAis:!0}})},V=function(t){return o.a.post("/school/course/callback/".concat(t))},A=function(t){return o.a.post("/school/student/trade/complete",l.a.stringify(t))},D=function(t,n){return o.a.post("/school/student/clock/record/list/".concat(t),l.a.stringify(n))},W=function(t){return o.a.post("/school/student/clock/main/course/info/".concat(t))},Z=function(t,n){return o.a.post("/school/student/clock/record/comment/list/".concat(t),l.a.stringify(n))},B=function(){return o.a.post("/school/student/apply/problem/history")}},1058:function(t,n,e){},1059:function(t,n,e){"use strict";function r(source,t){if(null==source)return{};var n,i,e=function(source,t){if(null==source)return{};var n,i,e={},r=Object.keys(source);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(e[n]=source[n]);return e}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(source,n)&&(e[n]=source[n])}return e}e.d(n,"a",(function(){return r}))},1066:function(t,n,e){"use strict";var r={components:{QrcodeVue:e(1105).a},props:{options:{required:!0,type:Object}}},o=(e(1069),e(18)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qrcode borderAll"},[e("QrcodeVue",{attrs:{value:t.options.value,size:t.options.size,level:"H"}}),t._v(" "),t.options.title?e("div",{staticClass:"title"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]):t._e()],1)}),[],!1,null,"4ca4a366",null);n.a=component.exports},1069:function(t,n,e){"use strict";var r=e(1054);e.n(r).a},1071:function(t,n,e){"use strict";var r=e(1066),o=e(1055),c={components:{QrcodeVue:r.a},props:{data:{type:Object,required:!0}},methods:{shareClick:function(t){"qq"===t?window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(this.data.url,"\n          &showcount=0\n          &desc=").concat(this.data.desc,"\n          &summary=\n          &title=").concat(this.data.title,"\n          &pics=").concat(this.data.pics,"\n          &style=550&width=550&height=550"),"_blank","height=800, width=800, top=0, left=0"):"weibo"===t&&window.open("https://service.weibo.com/share/share.php?url=".concat(this.data.url,"\n          &title=").concat(this.data.title,"\n          ").concat(this.data.pics&&"&pic=".concat(this.data.pics),"\n          &searchPic=false"),"_blank","height=800, width=800"),this.data.courseId&&Object(o.e)(this.data.courseId)}}},l=(e(1096),e(18)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"share ml52"},[r("span",{staticClass:"c-666 title"},[t._v("分享给朋友:")]),t._v(" "),r("div",{staticClass:"wechat ml20"},[t.data.isVideo?r("img",{attrs:{src:e(1093)}}):r("img",{attrs:{src:e(1075)}}),t._v(" "),r("div",{staticClass:"code"},[r("QrcodeVue",{attrs:{options:t.data.options}})],1)]),t._v(" "),r("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("qq")}}},[t.data.isVideo?r("img",{attrs:{src:e(1094)}}):r("img",{attrs:{src:e(1076)}})]),t._v(" "),r("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("weibo")}}},[t.data.isVideo?r("img",{attrs:{src:e(1095)}}):r("img",{attrs:{src:e(1077)}})])])}),[],!1,null,"abcda1fc",null);n.a=component.exports},1075:function(t,n,e){t.exports=e.p+"img/weixin.8f92ec7.png"},1076:function(t,n,e){t.exports=e.p+"img/qq.b1d4f3a.png"},1077:function(t,n,e){t.exports=e.p+"img/weibo.6bee3ea.png"},1083:function(t,n,e){"use strict";n.a={phone:/^\d{11}$/,email:/^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9.]*\.[A-Za-z]{2,6}$/,money:/^(0|\+?[1-9][0-9]*)$/}},1084:function(t,n,e){},1092:function(t,n,e){t.exports=e.p+"img/kefu.1ded7b3.png"},1093:function(t,n,e){t.exports=e.p+"img/weixin.10266e6.png"},1094:function(t,n,e){t.exports=e.p+"img/qq.51edda8.png"},1095:function(t,n,e){t.exports=e.p+"img/weibo.efc2fcd.png"},1096:function(t,n,e){"use strict";var r=e(1058);e.n(r).a},1107:function(t,n,e){"use strict";e(75),e(45),e(42),e(30),e(54);var r=e(33),o=(e(44),e(17)),c=e(1083),l=e(76);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var m={data:function(){return{formConfig:[{label:"姓名",prop:"surname",placeholder:"如何称呼您"},{label:"手机号码",prop:"phone",placeholder:"您的手机"},{label:"领域",prop:"domain",placeholder:"请选择领域"}],form:{},rules:{surname:[{required:!0,message:"请填写姓名",trigger:"blur"}],phone:[{required:!0,message:"请填写手机",trigger:"blur"}],domain:[{required:!0,message:"请选择领域",trigger:"change"}]},intentionConfig:[]}},mounted:function(){this.getCrmOptions()},methods:{getCrmOptions:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.f)("domains");case 2:e=n.sent,0===(data=e.data).code&&(t.intentionConfig=data.data.domains);case 5:case"end":return n.stop()}}),n)})))()},submitForm:function(t){var n=this;this.$refs[t].validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,o,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}if(r=c.a.phone,o=n.form.phone,r.test(o)){t.next=5;break}return t.abrupt("return",n.$message.error("请输入正确手机号码!"));case 5:return f=d(d({},n.form),{},{source:1,intention:15}),t.next=8,Object(l.j)(f);case 8:m=t.sent,0===m.data.code&&(n.$message.success("提交演示申请成功"),n.$refs.form.clearValidate(),n.form={}),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}}},h=(e(1139),e(18)),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"bottomNav"},[r("a-row",{staticClass:"w120"},[r("a-col",{staticClass:"left pr15 pt10",attrs:{span:14}},[r("div",{staticClass:"imgFont"},[r("img",{staticClass:"img",attrs:{src:e(1135)}})]),t._v(" "),r("a-form-model",{ref:"form",staticClass:"bottomForm mt16",attrs:{model:t.form,rules:t.rules}},[t._l(t.formConfig,(function(n){return r("a-form-model-item",{key:n.prop,staticClass:"mr20",attrs:{prop:n.prop}},["domain"===n.prop?r("a-select",{attrs:{placeholder:n.placeholder},model:{value:t.form[n.prop],callback:function(e){t.$set(t.form,n.prop,e)},expression:"form[item.prop]"}},t._l(t.intentionConfig,(function(n){return r("a-select-option",{key:n.value,attrs:{label:n.name,value:n.value}},[t._v("\n              "+t._s(n.name)+"\n            ")])})),1):r("a-input",{attrs:{placeholder:n.placeholder},model:{value:t.form[n.prop],callback:function(e){t.$set(t.form,n.prop,e)},expression:"form[item.prop]"}})],1)})),t._v(" "),r("a-form-model-item",[r("div",{staticClass:"btn hand textCenter c-fff fBlod fs16",on:{click:function(n){return t.submitForm("form")}}},[t._v("\n            领取优惠券\n          ")])])],2),t._v(" "),r("img",{staticClass:"line",attrs:{src:e(1136)}})],1),t._v(" "),r("a-col",{staticClass:"right pl15",attrs:{span:10}},[r("div",{staticClass:"fs12 c-fff fBlod"},[r("p",[t._v("\n          如果您需进一步了解信息,\n        ")]),t._v(" "),r("p",[t._v("\n          也可通过以下方式联系我们：\n        ")])]),t._v(" "),r("div",{staticClass:"ml20"},[r("div",{staticClass:"textCenter"},[r("img",{attrs:{src:e(1092),width:"100"}})]),t._v(" "),r("div",{staticClass:"fs12 c-fff codeWrap textCenter mt5"},[t._v("\n          扫码添加微信咨询\n        ")])]),t._v(" "),r("div",{staticClass:"ml20"},[r("div",{staticClass:"textCenter hand",on:{click:function(n){return t.$store.commit("common/setOnLineServer")}}},[r("img",{staticClass:"kefu",attrs:{src:e(1137)}})]),t._v(" "),r("div",{staticClass:"mt10"},[r("img",{staticClass:"phone",attrs:{src:e(1138)}}),t._v(" "),r("span",{staticClass:"ml10 fs16 c-fff fBlod"},[t._v("13922152147")])])])])],1)],1)}),[],!1,null,"79d5ac4f",null);n.a=component.exports},1135:function(t,n,e){t.exports=e.p+"img/font.6601e6f.png"},1136:function(t,n,e){t.exports=e.p+"img/line.7493184.png"},1137:function(t,n,e){t.exports=e.p+"img/kefu.233330d.png"},1138:function(t,n,e){t.exports=e.p+"img/phone.0cf705a.png"},1139:function(t,n,e){"use strict";var r=e(1084);e.n(r).a},1318:function(t,n,e){"use strict";var r=[function(){var t=this.$createElement,n=this._self._c||t;return n("li",{staticClass:"mb10 hoverWrap"},[n("img",{attrs:{src:e(1684)}}),this._v(" "),n("img",{staticClass:"hoverItem",attrs:{src:e(1685)}}),this._v(" "),n("div",{staticClass:"textCenter codeWrap"},[n("img",{staticClass:"mt13",attrs:{src:e(1092),width:"130"}}),this._v(" "),n("p",{staticClass:"c-666 fs12 mt7"},[this._v("\n        扫码 添加微信客服\n      ")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",{staticClass:"mb10 hoverWrap"},[n("img",{attrs:{src:e(1686)}}),this._v(" "),n("img",{staticClass:"hoverItem",attrs:{src:e(1687)}}),this._v(" "),n("div",{staticClass:"phoneWrap"},[n("div",{staticClass:"font"},[this._v("\n        客服电话：13922152147\n      ")])])])}],o={components:{ThirdShare:e(1071).a},data:function(){return{shareData:{options:{}}}},mounted:function(){this.shareData={url:window.location.href,desc:"我已参加科研背景提升，你也来一起参加吧!",title:"科研背景提升",pics:"https://static.ais.cn/resource/meeting/photo/202011/302201118140744027.png",options:{value:window.location.href,size:100,title:"请打开微信扫一扫!"}}}},c=(e(1688),e(18)),component=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._e()}),r,!1,null,"4130ec28",null);n.a=component.exports},1331:function(t,n,e){},1684:function(t,n,e){t.exports=e.p+"img/code.cd96f8d.png"},1685:function(t,n,e){t.exports=e.p+"img/codeShow.23d1ab6.png"},1686:function(t,n,e){t.exports=e.p+"img/phone.f1a8404.png"},1687:function(t,n,e){t.exports=e.p+"img/phoneShow.46e5651.png"},1688:function(t,n,e){"use strict";var r=e(1331);e.n(r).a}}]);