(window.webpackJsonp=window.webpackJsonp||[]).push([[36,38,42,43],{1061:function(t,e,n){},1062:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"m",(function(){return v})),n.d(e,"r",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"s",(function(){return C})),n.d(e,"b",(function(){return _})),n.d(e,"v",(function(){return x})),n.d(e,"c",(function(){return y})),n.d(e,"n",(function(){return S})),n.d(e,"j",(function(){return I})),n.d(e,"q",(function(){return w})),n.d(e,"x",(function(){return O})),n.d(e,"p",(function(){return E})),n.d(e,"w",(function(){return k})),n.d(e,"l",(function(){return j})),n.d(e,"d",(function(){return T})),n.d(e,"y",(function(){return L})),n.d(e,"u",(function(){return A})),n.d(e,"e",(function(){return $})),n.d(e,"o",(function(){return P})),n.d(e,"h",(function(){return F})),n.d(e,"i",(function(){return D})),n.d(e,"g",(function(){return R})),n.d(e,"t",(function(){return N}));var r=n(1066),o=n(19),c=n(30),l=n.n(c),f=function(t){return o.a.post("/school/course/courses",l.a.stringify(t))},d=function(t,e){return o.a.post("/school/course/detail/".concat(t),l.a.stringify(e))},v=function(t,e){return o.a.post("/school/course/play/".concat(t),l.a.stringify(e))},m=function(t){var e=t.courseId,n=t.liveId;return o.a.post("/school/course/loadPush/".concat(e,"/").concat(n))},h=function(t){return o.a.post("/school/student/apply/free/".concat(t))},C=function(t,e){return o.a.post("/school/student/trade/index/".concat(t),l.a.stringify(e))},_=function(t){var e=t.courseId,n=Object(r.a)(t,["courseId"]);return o.a.post("/school/student/trade/buy/".concat(e),l.a.stringify(n))},x=function(t){return o.a.post("/school/course/report/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.options))},y=function(t,e){return o.a.post("/school/favorite/favorite/".concat(t,"/").concat(e))},S=function(t){return o.a.post("/school/course/info/".concat(t))},I=function(t,e){return o.a.post("/school/course/comment/list/".concat(t),l.a.stringify(e))},w=function(t){return o.a.post("/school/course/comment/subList/".concat(t.courseId,"/").concat(t.parentId))},O=function(t,e){return o.a.post("/school/course/score/submit/".concat(t),l.a.stringify(e))},E=function(t,e){return o.a.post("/school/course/score/list/".concat(t),l.a.stringify(e))},k=function(t){return o.a.post("/school/course/comment/submit",l.a.stringify(t))},j=function(t){return o.a.post("/school/course/score/latestBuy/".concat(t))},T=function(t){return o.a.post("/school/course/down/document/".concat(t.courseId,"/").concat(t.liveId))},L=function(t){return o.a.post("/school/student/apply/problem/save",l.a.stringify(t))},A=function(t){return o.a.post("/service/app/mp/makeJsMap",l.a.stringify(t),{custom:{isAis:!0}})},$=function(t){return o.a.post("/school/course/callback/".concat(t))},P=function(t){return o.a.post("/school/student/trade/complete",l.a.stringify(t))},F=function(t,e){return o.a.post("/school/student/clock/record/list/".concat(t),l.a.stringify(e))},D=function(t){return o.a.post("/school/student/clock/main/course/info/".concat(t))},R=function(t,e){return o.a.post("/school/student/clock/record/comment/list/".concat(t),l.a.stringify(e))},N=function(){return o.a.post("/school/student/apply/problem/history")}},1065:function(t,e,n){},1066:function(t,e,n){"use strict";function r(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}n.d(e,"a",(function(){return r}))},1073:function(t,e,n){"use strict";var r={components:{QrcodeVue:n(1112).a},props:{options:{required:!0,type:Object}}},o=(n(1076),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode borderAll"},[n("QrcodeVue",{attrs:{value:t.options.value,size:t.options.size,level:"H"}}),t._v(" "),t.options.title?n("div",{staticClass:"title"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]):t._e()],1)}),[],!1,null,"4ca4a366",null);e.a=component.exports},1076:function(t,e,n){"use strict";var r=n(1061);n.n(r).a},1077:function(t,e,n){},1078:function(t,e,n){"use strict";var r=n(1073),o=n(1062),c={components:{QrcodeVue:r.a},props:{data:{type:Object,required:!0}},methods:{shareClick:function(t){"qq"===t?window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(this.data.url,"\n          &showcount=0\n          &desc=").concat(this.data.desc,"\n          &summary=\n          &title=").concat(this.data.title,"\n          &pics=").concat(this.data.pics,"\n          &style=550&width=550&height=550"),"_blank","height=800, width=800, top=0, left=0"):"weibo"===t&&window.open("https://service.weibo.com/share/share.php?url=".concat(this.data.url,"\n          &title=").concat(this.data.title,"\n          ").concat(this.data.pics&&"&pic=".concat(this.data.pics),"\n          &searchPic=false"),"_blank","height=800, width=800"),this.data.courseId&&Object(o.e)(this.data.courseId)}}},l=(n(1103),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"share ml52"},[r("span",{staticClass:"c-666 title"},[t._v("分享给朋友:")]),t._v(" "),r("div",{staticClass:"wechat ml20"},[t.data.isVideo?r("img",{attrs:{src:n(1100)}}):r("img",{attrs:{src:n(1082)}}),t._v(" "),r("div",{staticClass:"code"},[r("QrcodeVue",{attrs:{options:t.data.options}})],1)]),t._v(" "),r("div",{staticClass:"ml20 hand",on:{click:function(e){return t.shareClick("qq")}}},[t.data.isVideo?r("img",{attrs:{src:n(1101)}}):r("img",{attrs:{src:n(1083)}})]),t._v(" "),r("div",{staticClass:"ml20 hand",on:{click:function(e){return t.shareClick("weibo")}}},[t.data.isVideo?r("img",{attrs:{src:n(1102)}}):r("img",{attrs:{src:n(1084)}})])])}),[],!1,null,"abcda1fc",null);e.a=component.exports},1082:function(t,e,n){t.exports=n.p+"img/weixin.8f92ec7.png"},1083:function(t,e,n){t.exports=n.p+"img/qq.b1d4f3a.png"},1084:function(t,e,n){t.exports=n.p+"img/weibo.6bee3ea.png"},1090:function(t,e,n){"use strict";e.a={phone:/^\d{11}$/,email:/^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9.]*\.[A-Za-z]{2,6}$/,money:/^(0|\+?[1-9][0-9]*)$/}},1091:function(t,e,n){},1099:function(t,e,n){t.exports=n.p+"img/kefu.1ded7b3.png"},1100:function(t,e,n){t.exports=n.p+"img/weixin.10266e6.png"},1101:function(t,e,n){t.exports=n.p+"img/qq.51edda8.png"},1102:function(t,e,n){t.exports=n.p+"img/weibo.efc2fcd.png"},1103:function(t,e,n){"use strict";var r=n(1065);n.n(r).a},1114:function(t,e,n){"use strict";n(88),n(50),n(44),n(32),n(64);var r=n(41),o=(n(43),n(17)),c=n(1090),l=n(76);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{formConfig:[{label:"姓名",prop:"surname",placeholder:"如何称呼您"},{label:"手机号码",prop:"phone",placeholder:"您的手机"},{label:"领域",prop:"domain",placeholder:"请选择领域"}],form:{},rules:{surname:[{required:!0,message:"请填写姓名",trigger:"blur"}],phone:[{required:!0,message:"请填写手机",trigger:"blur"}],domain:[{required:!0,message:"请选择领域",trigger:"change"}]},intentionConfig:[]}},mounted:function(){this.getCrmOptions()},methods:{getCrmOptions:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.f)("domains");case 2:n=e.sent,0===(data=n.data).code&&(t.intentionConfig=data.data.domains);case 5:case"end":return e.stop()}}),e)})))()},submitForm:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){var r,o,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=13;break}if(r=c.a.phone,o=e.form.phone,r.test(o)){t.next=5;break}return t.abrupt("return",e.$message.error("请输入正确手机号码!"));case 5:return f=d(d({},e.form),{},{source:1,intention:15}),t.next=8,Object(l.j)(f);case 8:v=t.sent,0===v.data.code&&(e.$message.success("提交演示申请成功"),e.$refs.form.clearValidate(),e.form={}),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},m=(n(1146),n(18)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bottomNav"},[r("a-row",{staticClass:"w120"},[r("a-col",{staticClass:"left pr15 pt10",attrs:{span:14}},[r("div",{staticClass:"imgFont"},[r("img",{staticClass:"img",attrs:{src:n(1142)}})]),t._v(" "),r("a-form-model",{ref:"form",staticClass:"bottomForm mt16",attrs:{model:t.form,rules:t.rules}},[t._l(t.formConfig,(function(e){return r("a-form-model-item",{key:e.prop,staticClass:"mr20",attrs:{prop:e.prop}},["domain"===e.prop?r("a-select",{attrs:{placeholder:e.placeholder},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}},t._l(t.intentionConfig,(function(e){return r("a-select-option",{key:e.value,attrs:{label:e.name,value:e.value}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),1):r("a-input",{attrs:{placeholder:e.placeholder},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}})],1)})),t._v(" "),r("a-form-model-item",[r("div",{staticClass:"btn hand textCenter c-fff fBlod fs16",on:{click:function(e){return t.submitForm("form")}}},[t._v("\n            领取优惠券\n          ")])])],2),t._v(" "),r("img",{staticClass:"line",attrs:{src:n(1143)}})],1),t._v(" "),r("a-col",{staticClass:"right pl15",attrs:{span:10}},[r("div",{staticClass:"fs12 c-fff fBlod"},[r("p",[t._v("\n          如果您需进一步了解信息,\n        ")]),t._v(" "),r("p",[t._v("\n          也可通过以下方式联系我们：\n        ")])]),t._v(" "),r("div",{staticClass:"ml20"},[r("div",{staticClass:"textCenter"},[r("img",{attrs:{src:n(1099),width:"100"}})]),t._v(" "),r("div",{staticClass:"fs12 c-fff codeWrap textCenter mt5"},[t._v("\n          扫码添加微信咨询\n        ")])]),t._v(" "),r("div",{staticClass:"ml20"},[r("div",{staticClass:"textCenter hand",on:{click:function(e){return t.$store.commit("common/setOnLineServer")}}},[r("img",{staticClass:"kefu",attrs:{src:n(1144)}})]),t._v(" "),r("div",{staticClass:"mt10"},[r("img",{staticClass:"phone",attrs:{src:n(1145)}}),t._v(" "),r("span",{staticClass:"ml10 fs16 c-fff fBlod"},[t._v("13922152147")])])])])],1)],1)}),[],!1,null,"79d5ac4f",null);e.a=component.exports},1117:function(t,e,n){t.exports=n.p+"img/coachBanner.a9a732e.png"},1133:function(t,e,n){"use strict";var r=n(1077);n.n(r).a},1135:function(t,e,n){"use strict";n.r(e);var r=n(1078),o=n(20),c={components:{ThirdShare:r.a},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{shareData:{options:{value:""}}}},mounted:function(){this.shareData={url:window.location.href,desc:"我已参加，你也来一起参加吧!",title:"专注学术论文辅导",pics:n(1117),options:{value:window.location.href,size:100,title:"请打开微信扫一扫!"}}},methods:{goApply:function(){var path="/promoteApply/0?type=3&title=论文辅导申请匹配&service=".concat(this.data.service);if(this.$store.state.user.userInfo.userStatus)this.$router.push(path);else{var t="".concat(o.a.LINK.school_pc).concat(path);window.location.href="".concat(o.a.POST.school_pc,"/school/passport/login?state=").concat(t)}}}},l=(n(1133),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.data.url,alt:""}})]),t._v(" "),n("div",{staticClass:"content"},[n("div",[n("div",{staticClass:"title"},[n("p",{staticClass:"fs18 f600"},[t._v("\n          "+t._s(t.data.title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"text fs14 c-666"},t._l(t.data.list,(function(e,r){return n("p",{key:r},[t._v("\n          "+t._s(e)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"handle"},[n("a-button",{staticStyle:{height:"40px",width:"116px"},attrs:{type:"primary",shape:"round"},on:{click:t.goApply}},[t._v("\n        申请匹配\n      ")]),t._v(" "),n("a-button",{staticClass:"ml15",staticStyle:{background:"#36b7cf",color:"#fff",height:"40px",width:"116px"},attrs:{shape:"round"},on:{click:function(e){return t.$store.commit("common/setOnLineServer")}}},[t._v("\n        咨询客服\n      ")]),t._v(" "),n("ThirdShare",{attrs:{data:t.shareData}})],1)])])}),[],!1,null,"65757295",null);e.default=component.exports},1142:function(t,e,n){t.exports=n.p+"img/font.6601e6f.png"},1143:function(t,e,n){t.exports=n.p+"img/line.7493184.png"},1144:function(t,e,n){t.exports=n.p+"img/kefu.233330d.png"},1145:function(t,e,n){t.exports=n.p+"img/phone.0cf705a.png"},1146:function(t,e,n){"use strict";var r=n(1091);n.n(r).a},1213:function(t,e,n){},1214:function(t,e,n){},1496:function(t,e,n){"use strict";var r=n(1213);n.n(r).a},1497:function(t,e,n){t.exports=n.p+"img/1.7fb6fb3.jpg"},1498:function(t,e,n){t.exports=n.p+"img/2.b745293.png"},1499:function(t,e,n){t.exports=n.p+"img/3.3a11a97.jpg"},1500:function(t,e,n){"use strict";var r=n(1214);n.n(r).a},1501:function(t,e,n){t.exports=n.p+"img/s2.5465c51.png"},1502:function(t,e,n){t.exports=n.p+"img/s3.c6a032d.png"},1503:function(t,e,n){t.exports=n.p+"img/s4.be763d9.png"},1504:function(t,e,n){},1640:function(t,e,n){"use strict";n.r(e);var r={props:{titleCn:{type:String,default:""},titleEn:{type:String,default:""}}},o=(n(1496),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title pt20 pb10 textCenter"},[e("p",{staticClass:"cn fs20 f500"},[this._v("\n    "+this._s(this.titleCn)+"\n  ")]),this._v(" "),e("p",{staticClass:"en fs18 f600 color"},[this._v("\n    "+this._s(this.titleEn)+"\n  ")])])}),[],!1,null,"70900716",null);e.default=component.exports},1641:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"590px"}},[e("div",{staticClass:"swiper"},[e("div",{staticClass:"box"},[e("img",{attrs:{src:n(1497)}})]),this._v(" "),e("div",{staticClass:"box"},[e("img",{attrs:{src:n(1498)}})]),this._v(" "),e("div",{staticClass:"box"},[e("img",{attrs:{src:n(1499)}})])])])}],o={},c=(n(1500),n(18)),component=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"1aad0cf4",null);e.default=component.exports},2109:function(t,e,n){t.exports=n.p+"img/Q.aecdc6a.png"},2110:function(t,e,n){t.exports=n.p+"img/get.e20c226.png"},2111:function(t,e,n){t.exports=n.p+"img/Frame.cc95aa6.png"},2112:function(t,e,n){t.exports=n.p+"img/coach5.9462cdb.png"},2113:function(t,e,n){t.exports=n.p+"img/coach1.db3d7e5.png"},2114:function(t,e,n){t.exports=n.p+"img/coach4.2487f2a.png"},2115:function(t,e,n){t.exports=n.p+"img/coach3.4161503.png"},2116:function(t,e,n){t.exports=n.p+"img/coach2.204a256.png"},2117:function(t,e,n){t.exports=n.p+"img/icon1.dd832d4.png"},2118:function(t,e,n){t.exports=n.p+"img/icon2.23bd970.png"},2119:function(t,e,n){t.exports=n.p+"img/icon3.18faa9e.png"},2120:function(t,e,n){t.exports=n.p+"img/icon4.0040be9.png"},2121:function(t,e,n){t.exports=n.p+"img/icon5.867ede3.png"},2122:function(t,e,n){t.exports=n.p+"img/icon6.7faec29.png"},2123:function(t,e,n){t.exports=n.p+"img/icon7.01d527c.png"},2124:function(t,e,n){t.exports=n.p+"img/icon8.f162128.png"},2125:function(t,e,n){t.exports=n.p+"img/safeguard1.5e2f1fa.png"},2126:function(t,e,n){t.exports=n.p+"img/safeguard2.3df598f.png"},2127:function(t,e,n){t.exports=n.p+"img/safeguard3.1e0f698.png"},2128:function(t,e,n){t.exports=n.p+"img/safeguard4.6603ba8.png"},2129:function(t,e,n){t.exports=n.p+"img/c1.8679234.png"},2130:function(t,e,n){t.exports=n.p+"img/c2.3c1a17e.png"},2131:function(t,e,n){t.exports=n.p+"img/c3.ac798bc.png"},2132:function(t,e,n){t.exports=n.p+"img/c4.5d62156.png"},2133:function(t,e,n){t.exports=n.p+"img/s1.b0af75a.png"},2134:function(t,e,n){"use strict";var r=n(1504);n.n(r).a},2218:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intention"},[n("div",{staticClass:"title fs32"},[n("span",[t._v("初衷")]),n("span",{staticClass:"ml20",staticStyle:{color:"#A1D2FF"}},[t._v("US INTENTION")])]),t._v(" "),n("div",{staticClass:"content mt10"},[n("p",[t._v("国内外院校越来越注重学生的逻辑思维和写作表达能力，除了各种比赛、调研、实验室 外，论文又是很重要的一种学术背景补充方式。它需要你选题、查阅文献、写作……一篇论文带给你的成长已经超越文章本身，还有思维与态度的锻炼。")]),t._v(" "),n("p",[t._v("艾思云课堂“论文辅导”项目，旨在帮助学员顺利完成论文，助力成功发表，成为您的私人论文辅导老师。")])]),t._v(" "),n("div",{staticClass:"data"},[n("div",{staticClass:"alone"},[n("span",{staticClass:"fs36 f600",staticStyle:{color:"#FA6400"}},[t._v("3800+")]),t._v(" "),n("span",{staticClass:"fs16 c-666"},[t._v("服务学生")])]),t._v(" "),n("div",{staticClass:"alone"},[n("span",{staticClass:"fs36 f600",staticStyle:{color:"#FA6400"}},[t._v("500+")]),t._v(" "),n("span",{staticClass:"fs16 c-666"},[t._v("实力发表渠道")])]),t._v(" "),n("div",{staticClass:"alone"},[n("span",{staticClass:"fs36 f600",staticStyle:{color:"#FA6400"}},[t._v("1000+")]),t._v(" "),n("span",{staticClass:"fs16 c-666"},[t._v("智库专家导师")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("p",[e("span",{staticClass:"fs20"},[this._v("最新成果")]),e("span",{staticClass:"fs18 ml20",staticStyle:{color:"#A1D2FF"}},[this._v("LATEST WORD")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content fs14 textCenter mt15"},[e("p",[this._v("从硬件上来说，论文对于申请名校、职位晋升、评奖评优等都是显性加分项；")]),this._v(" "),e("p",[this._v("从软件上来说，可以极大提升学术能力和 (英文) 写作能力，拓展视野，锻炼思维")]),this._v(" "),e("div",{staticClass:"mt20"},[e("img",{attrs:{src:n(2110)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:n(2111),alt:""}})])}],o=n(1640),c=n(1641),l=n(1135),f=n(1114),d=n(20),v={components:{Title:o.default,Swiper:c.default,Header:l.default,CooperateBottom:f.a},data:function(){return{config:d.a,hoverIndex:null,bottomFix:!1,headerInfo:{service:0,url:n(1117),title:"专注学术论文辅导",list:["写作全程辅导，助力论文发表，提升竞争力。","同领域大牛导师一对一指导，项目式学习，致力于为全球学者提供高度专业的学术辅导服务","“申请匹配”获取论文辅导解决方案"]},paperCoachList:[{url:n(2112),title:"SCI/SSCI期刊论文",path:"/paper/sciCoach"},{url:n(2113),title:"中文核心期刊论文",path:"/paper/coreCoach"},{url:n(2114),title:"EI/CPCI/Scopus会议论文",path:"/paper/conferenceCoach"},{url:n(2115),title:"中英文普刊论文",path:"/paper/cnEnCoach"},{url:n(2116),title:"毕业论文",path:"/paper/graduateCoach"}],serveList:[{url:n(2117),title:"论文指导",text:["老师对学员文章进行指导修改"]},{url:n(2118),title:"全科定制",text:["不限专业，全学科师资覆盖","个性化专属定制"]},{url:n(2119),title:"名校导师",text:["国内外知名高校导师"]},{url:n(2120),title:"论文发表支持",text:["EI/CPCI/Scopus国际学术会议论文","SCI/SSCI/CSSCI国内外核心期刊"]},{url:n(2121),title:"直播授课",text:["艾思云课堂直播平台，与导师实时互动"]},{url:n(2122),title:"论文写作辅导",text:["精心设计论文写作与发表课程系统学"]},{url:n(2123),title:"助教辅导",text:["配备硕博私人助教,全程督学,答疑解惑"]},{url:n(2124),title:"课后辅导",text:["通过在线随时交流课题思路"]}],safeguardList:[{url:n(2125),text:"保密协议",content:"签署保密协议，不透露信息，随时跟踪进程，全程协议担保"},{url:n(2126),text:"一对一服务",content:"导师全程一对一服务，不限时在线答疑"},{url:n(2127),text:"服务保障",content:"拥有全球专家智库资源、1000+的大牛导师入驻。每年举办300+国际学术会议、100+ SCI/SSCl期刊合作"},{url:n(2128),text:"退款保障",content:"根据正规合同流程快速退款，保证学员权益"}],userList:[{url:n(2129),text:"已经如愿申请上国外研究生，有幸跟随王老师一起学习。课程对于我这样的科研小白非常友好，王老师深入浅出地向我讲授了专业领域的国际前沿知识，还成功发表了一篇EI国际会议论文，让我获得了推免机会。感谢！",name:"袁同学"},{url:n(2130),text:"之前对科研完全不懂，谢谢老师的领路，发表了一篇核心论文，现在已就读于国内某985高校。",name:"覃同学"},{url:n(2131),text:"已成功发表一篇SCI，为我的读博生涯更添一分色彩，以后要更加努力。",name:"朱同学"},{url:n(2132),text:"国内C刊挺不好发的，老师建议发表SSCI。刘老师人很好，给了我很多的修改建议，不管是研究思路上还是论文写作上，都给了我很大的帮助。",name:"杨同学"}],tutorList:[{title:"学术能力强",list:["多个国际期刊编委","科睿唯安Top reviewers","在国际顶刊上发表过第一作者的学术论文","在领域TOP1&2学术期刊上发表第一作者或独立作者的学术论文20余篇"]},{title:"获奖多",list:["出版多本作品集","出版过学术专著","被Harvard等名校聘请为研究助理","在前沿研究课题中取得世界领先的创新性研究成果"]},{title:"经历丰富",list:["IEEE会员","IEICE会员","国家自然科学基金评审专家","在领域TOP1&2国家科技部科技项目评审专家","上百篇期刊的审稿人"]}],questionList:[{title:"报名相关问题",list:[{title:"论文是否为代写？",text:"坚决不，艾思云课堂秉承“诚信、透明、善意”的原则为学员提供服务，我们会凭借辅导与付出，帮助学生真正提升学术水平。"},{title:"你们的服务内容和学员信息能做到严格保密吗？",text:"作为专业的学术服务平台，在给用户提供服务的时候我们会承诺并签署保密相关协议条款，确保用户的个人信息和订单信息得到严格保密。"},{title:"报名服务流程是怎么样的？",text:"平台填写需求表→免费提供导师匹配及辅导方案→ 签署协议→一对一论文辅导→论文发表推荐→录用"},{title:"你们的论文辅导跟其他机构的项目有什么区别吗？你们的优势是什么？",text:"我们的优势主要在于：1）强大的导师资源；2）流程和服务公开透明；3）成熟的发表渠道；4）服务多样，可定制。"},{title:"我的专业是xxx，比较冷门，你们可以辅导吗？",text:"我们可以辅导99%的专业，我们拥有完善的专家智库平台体系，平台的导师覆盖了几乎所有的学科。"},{title:"我是零基础，也可以发表一篇论文吗？",text:"可以。无论是普刊、EI/CPCI国际会议论文，还是SCI/SSCI/CSSCI核心期刊，零基础的同学都可以报名，我们会根据你的专业基础为你定制一套专属辅导方案。"}]},{title:"导师相关问题",list:[{title:"我希望xx大学的导师来辅导我，可以吗？",text:"我们不接受指定学校，只能保证导师是与你同专业并具有超强学术能力。"},{title:"请问你们这边都有什么老师？",text:"艾思云课堂拥有国内外智库专家，我们全学科的辅导导师都有，都是我们平台上入驻的智库专家。我们会根据您的具体需求信息来匹配最适合您的导师。"},{title:"辅导老师都是和我同一个专业领域的吗？",text:"必须的，艾思云课堂的一对一辅导都是根据学员的专业、研究课题方向来匹配最适合的导师，确保辅导效果和最终的论文产出质量"},{title:"导师是什么学历？",text:"我们的导师都是国内外知名院校老师，根据辅导对象，授课导师的学历都是博士学历以上，具有丰富论文发表经验的老师。"}]},{title:"发表相关问题",list:[{title:"想申请国外研究生/博士项目，一般需要几篇论文发表？",text:"对于理工科的申请者，通常建议尽量多的发表期刊文章或申请专利。因为相应的期刊及会议也多，影响因子通常比较高。对于商科的申请者，通常建议尽量发表1篇以上期刊文章，或参加国际会议。对于文科的申请者，通常建议发表1篇以上期刊文章或者发表书籍等著作。文科商科及社科的相应的期刊会议不如理工科多，所以竞争很激烈"},{title:" EI/Scopus/CPCI都是什么检索库？有什么区别？",text:"Scopus、EI和CPCI均为学术界广泛认可的文献检索，其中Scopus是全世界最大的摘要和引文数据库，CPCI是综合性科技会议文献检索，EI是查阅工程领域文献的综合性检索。检索本身无等级差异。"},{title:"你们负责投稿吗？",text:"负责，我们会一直负责到你的论文被录用为止"},{title:"投稿费是多少？",text:"投稿本身不需要任何费用，但如果被收录，就需要缴纳版面费（你也可以理解为投稿费）。会议的版面费在三千元左右，而SSCI/SCI期刊的版面费一般是数千元甚至上万元。"},{title:"投到什么期刊/会议？",text:"取决于你的论文质量和完稿时间，我们保证发表到我们承诺的级别。"}]},{title:"辅导相关问题",list:[{title:"通过什么方式上课？",text:"Zoom或腾讯云会议，导师视频/语音通话，实时直播。"},{title:"你们的这些课时确定足够吗？万一课上完了但是论文没写完怎么办？",text:"我们制定的课时数量是基于我们从业多年的经验来总结出来的。同时，我们是保证产出的，只要学生能够好好上课、认真完成课后任务，就可以按时完成论文。因此，不会出现课上完了但是论文还没写完的情况。"},{title:"我跟导师约了这周末上课，但是今天才周三，我有非常紧急的事，可以联系她吗？",text:" 可以。这种情况其实是很少见的。导师会根据每个学生的情况来定制辅导方案，每次上课的时候导师都会帮忙解惑答疑+布置新的学习任务。如果有非常紧急的事，可以通过微信或邮件来联系导师。"},{title:"没有课题怎么办？",text:"我们的绝大多数学生一开始都是没有课题的，我们的导师会用部分课时，耐心的指导你挖掘自己没有的兴趣点、确认课题，对于那些专业能力非常薄弱以及时间紧张的同学，我们会让导师提供与你想匹配的课题供你选择参考。"},{title:"我是第几作者？",text:"您是论文第一作者。"}]}],wordList:[[{url:n(2133),title:"收获 | 助力申博，AIS学员论文被SCI期刊录用",content:"艾思云课堂师资力量真的很强大，给我匹配了两个相关方向的导师，都是行业里的大牛，老师和助教都很细心。跟老师一对一的交流感觉非常好，解决问题也很及时，避免了走很多弯路。",time:" 2021-05-18",path:"/paper/result?type=1"},{url:n(1501),title:"收获 | 助力职场晋升，AIS学员论文被SCI期刊录用",content:"我是抱着试一试的态度报名了“SCI期刊论文辅导”，匹配的老师是正好与我的研究方向非常匹配，面试辅导，一切都非常顺利，期间老师对我给了很多专业上的指导和建议，审稿给的意见也非常不错，这是我的第一篇sci，很兴奋！",time:" 2021-05-18",path:"/paper/result?type=2"}],[{url:n(1502),title:"收获 | 助力名校申请，AIS学员论文被EILCD2021会议录用",content:"艾思云课堂李老师的一对一课程对我来说，是英文论文写作的启蒙。从完全不知道如何开始的小白，跟着老师的辅导，学到了很多论文写作技巧和相关专业的知识量。这篇论文来之不易，感谢老师的付出",time:" 2021-05-18",path:"/paper/result?type=3"},{url:n(1503),title:"收获 | 助力名校申请，AIS学员论文被ICCADM 2021会议录用",content:"很不错的一次辅导体验，不仅完成了我既定的发表论文小目标，还学到了很多SCI高水平论文的写作方式和技巧。老师和助教都很NICE，衷心感谢~",time:" 2021-05-18",path:"/paper/result?type=4"}]]}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{hover:function(t){this.hoverIndex=t},detail:function(path){this.$router.push(path)},handleScroll:function(){var t=document.documentElement,e=t.scrollHeight,n=t.scrollTop;this.bottomFix=n<e-1200}},head:function(){return{title:"论文辅导—艾思云课堂"}}},m=(n(2134),n(18)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"coach"},[r("Header",{attrs:{data:t.headerInfo}}),t._v(" "),r("div",{staticClass:"honor"},[r("div",{staticClass:"honorBox"},[t._m(0),t._v(" "),r("div",{staticClass:"word"},[t._m(1),t._v(" "),r("div",{staticClass:"content"},[r("a-carousel",{attrs:{autoplay:""}},t._l(t.wordList,(function(e,n){return r("div",{key:n},t._l(e,(function(e){return r("div",{key:e.url,staticClass:"alone",on:{click:function(n){return t.$router.push({path:e.path})}}},[r("div",[r("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("p",{staticClass:"fs14 f600"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),r("p",{staticClass:"fs12"},[t._v("\n                    "+t._s(e.content)+"\n                  ")]),t._v(" "),r("p",{staticClass:"fs12",staticStyle:{color:"#A3A3A3"}},[t._v("\n                    "+t._s(e.time)+"\n                  ")])])])})),0)})),0)],1)])])]),t._v(" "),r("div",{staticClass:"paperCoachList"},[r("div",{staticClass:"paperCoach"},[r("Title",t._b({},"Title",{titleCn:"论文辅导列表",titleEn:"THESIS TUTORING LIST"},!1)),t._v(" "),r("div",{staticClass:"list",on:{mouseleave:function(e){return t.hover(-1)}}},t._l(t.paperCoachList,(function(e,n){return r("div",{key:e.url,staticClass:"alone",on:{mouseover:function(e){return t.hover(n+"paper")},click:function(n){return t.detail(e.path)}}},[r("img",{attrs:{src:e.url,alt:""}}),t._v(" "),r("p",{class:[n+"paper"===t.hoverIndex?"hover":"","text"]},[t._v("\n            "+t._s(e.title)+"\n          ")])])})),0)],1)]),t._v(" "),r("div",{staticClass:"server paperCoachList"},[r("div",{staticClass:"paperCoach"},[r("Title",t._b({},"Title",{titleCn:"优质服务 全面护航",titleEn:"EXCELLENT SERVICE"},!1)),t._v(" "),r("div",{staticClass:"icons"},t._l(t.serveList,(function(e){return r("div",{key:e.url,staticClass:"icon pt10 pb5 pl5 pr5"},[r("div",[r("img",{attrs:{src:e.url,alt:"",width:"40px"}})]),t._v(" "),r("div",{staticClass:"ml10"},[r("p",{staticClass:"fs16 f500"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("div",t._l(e.text,(function(text){return r("p",{key:text,staticClass:"fs12 c-666"},[t._v("\n                "+t._s(text)+"\n              ")])})),0)])])})),0)],1)]),t._v(" "),r("div",{staticClass:"get bg-fff"},[r("div",{staticClass:"maxWidth"},[r("Title",t._b({},"Title",{titleCn:"论文能给你带来什么",titleEn:"WHAT WOULD PAPER DO"},!1)),t._v(" "),r("p",{staticClass:"line"}),t._v(" "),t._m(2)],1)]),t._v(" "),r("div",{staticClass:"safeguard bgf8f8f8"},[r("div",{staticClass:"maxWidth"},[r("Title",t._b({},"Title",{titleCn:"我们的保障",titleEn:"OUR GUARANTEE"},!1)),t._v(" "),r("div",{staticClass:"safeguardList",on:{mouseleave:function(e){return t.hover(-1)}}},t._l(t.safeguardList,(function(e,n){return r("div",{key:e.url,staticClass:"alone",on:{mouseover:function(e){return t.hover(n+"safeguard")}}},[r("img",{attrs:{src:e.url}}),t._v(" "),r("div",{class:[n+"safeguard"===t.hoverIndex?"hover":"","text"]},[r("span",[t._v(t._s(e.text))]),t._v(" "),n+"safeguard"===t.hoverIndex?r("div",{staticClass:"fs14 line"},[r("span",[t._v(t._s(e.content))])]):t._e()])])})),0)],1)]),t._v(" "),r("div",{staticClass:"offer pb23"},[r("div",{staticClass:"maxWidth"},[r("Title",t._b({},"Title",{titleCn:"名校Offer&学员评价",titleEn:"OFFER & EVALUATION"},!1)),t._v(" "),r("div",{staticClass:"content"},[r("Swiper"),t._v(" "),r("div",{staticClass:"userList ml20"},t._l(t.userList,(function(e){return r("div",{key:e.url,staticClass:"alone bg-fff pd10 pt10 pr10 pl10"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:e.url,width:"30px"}}),t._v(" "),r("span",{staticClass:"mt10 c-333 f600"},[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"fs12 c-666",staticStyle:{display:"flex","align-items":"center"}},[r("span",[t._v(t._s(e.text))])])])})),0)],1)],1)]),t._v(" "),r("div",{staticClass:"tutor"},[r("div",{staticClass:"maxWidth"},[r("Title",t._b({},"Title",{titleCn:"导师是谁",titleEn:"OUR GUARANTEE"},!1)),t._v(" "),r("div",{staticClass:"linkWrap"},[r("a",{staticClass:"link",attrs:{href:t.config.LINK.ais_pc+"/thinkTank/expertList",target:"_blank"}},[t._v("\n          去看看艾思导师>>\n        ")])]),t._v(" "),r("div",{staticClass:"tutorList"},t._l(t.tutorList,(function(e){return r("div",{key:e.title,staticClass:"alone"},[r("div",{staticClass:"titlt"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("div",{staticClass:"content"},t._l(e.list,(function(text){return r("div",{key:text,staticClass:"item"},[t._m(3,!0),t._v(" "),r("span",[t._v(t._s(text))])])})),0)])})),0)],1)]),t._v(" "),r("div",{staticClass:"question"},[r("div",{staticClass:"maxWidth"},[r("Title",t._b({},"Title",{titleCn:"常见问题",titleEn:"Q&A"},!1)),t._v(" "),r("div",{staticClass:"questionList"},[r("a-carousel",{staticStyle:{width:"100%"},attrs:{autoplay:""}},t._l(t.questionList,(function(e,o){return r("div",{key:o,staticClass:"list"},[r("div",{staticClass:"mb10"},[r("span",{staticClass:"fs18 f600",staticStyle:{color:"#006DBD"}},[t._v(t._s(e.title)),r("a-icon",{staticClass:"ml5",staticStyle:{"font-size":"14px"},attrs:{type:"double-right"}})],1)]),t._v(" "),r("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(e.list,(function(e,c){return r("div",{key:e.text,staticClass:"alone"},[r("div",{class:["title",{"flex-start":2===c&&3===o}]},[r("img",{attrs:{src:n(2109),alt:""}}),t._v(" "),r("span",{staticClass:"ml10"},[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"text"},[r("span",{staticClass:"fs18 f600",staticStyle:{color:"#F1B000",flex:"0 0 30px"}},[t._v("A:")]),t._v(" "),r("span",{staticClass:"fs14 c-666"},[t._v(t._s(e.text))])])])})),0)])})),0)],1)],1)]),t._v(" "),r("CooperateBottom",{class:[{CooperateBottom:t.bottomFix},"mt20"]})],1)}),r,!1,null,"73bb9af0",null);e.default=component.exports}}]);