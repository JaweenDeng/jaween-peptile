(window.webpackJsonp=window.webpackJsonp||[]).push([[7,37,38,39,40,41],{1058:function(t,n,e){"use strict";e.d(n,"f",(function(){return f})),e.d(n,"k",(function(){return d})),e.d(n,"m",(function(){return v})),e.d(n,"r",(function(){return h})),e.d(n,"a",(function(){return m})),e.d(n,"s",(function(){return _})),e.d(n,"b",(function(){return x})),e.d(n,"v",(function(){return y})),e.d(n,"c",(function(){return C})),e.d(n,"n",(function(){return S})),e.d(n,"j",(function(){return w})),e.d(n,"q",(function(){return O})),e.d(n,"x",(function(){return E})),e.d(n,"p",(function(){return k})),e.d(n,"w",(function(){return I})),e.d(n,"l",(function(){return $})),e.d(n,"d",(function(){return j})),e.d(n,"y",(function(){return P})),e.d(n,"u",(function(){return A})),e.d(n,"e",(function(){return V})),e.d(n,"o",(function(){return B})),e.d(n,"h",(function(){return T})),e.d(n,"i",(function(){return D})),e.d(n,"g",(function(){return L})),e.d(n,"t",(function(){return W}));var c=e(1063),o=e(19),r=e(30),l=e.n(r),f=function(t){return o.a.post("/school/course/courses",l.a.stringify(t))},d=function(t,n){return o.a.post("/school/course/detail/".concat(t),l.a.stringify(n))},v=function(t,n){return o.a.post("/school/course/play/".concat(t),l.a.stringify(n))},h=function(t){var n=t.courseId,e=t.liveId;return o.a.post("/school/course/loadPush/".concat(n,"/").concat(e))},m=function(t){return o.a.post("/school/student/apply/free/".concat(t))},_=function(t){return o.a.post("/school/student/trade/index/".concat(t))},x=function(t){var n=t.courseId,e=Object(c.a)(t,["courseId"]);return o.a.post("/school/student/trade/buy/".concat(n),l.a.stringify(e))},y=function(t){return o.a.post("/school/course/report/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.options))},C=function(t,n){return o.a.post("/school/favorite/favorite/".concat(t,"/").concat(n))},S=function(t){return o.a.post("/school/course/info/".concat(t))},w=function(t,n){return o.a.post("/school/course/comment/list/".concat(t),l.a.stringify(n))},O=function(t){return o.a.post("/school/course/comment/subList/".concat(t.courseId,"/").concat(t.parentId))},E=function(t,n){return o.a.post("/school/course/score/submit/".concat(t),l.a.stringify(n))},k=function(t,n){return o.a.post("/school/course/score/list/".concat(t),l.a.stringify(n))},I=function(t){return o.a.post("/school/course/comment/submit",l.a.stringify(t))},$=function(t){return o.a.post("/school/course/score/latestBuy/".concat(t))},j=function(t){return o.a.post("/school/course/down/document/".concat(t.courseId,"/").concat(t.liveId))},P=function(t){return o.a.post("/school/student/apply/problem/save",l.a.stringify(t))},A=function(t){return o.a.post("/service/app/mp/makeJsMap",l.a.stringify(t),{custom:{isAis:!0}})},V=function(t){return o.a.post("/school/course/callback/".concat(t))},B=function(t){return o.a.post("/school/student/trade/complete",l.a.stringify(t))},T=function(t,n){return o.a.post("/school/student/clock/record/list/".concat(t),l.a.stringify(n))},D=function(t){return o.a.post("/school/student/clock/main/course/info/".concat(t))},L=function(t,n){return o.a.post("/school/student/clock/record/comment/list/".concat(t),l.a.stringify(n))},W=function(){return o.a.post("/school/student/apply/problem/history")}},1060:function(t,n,e){},1062:function(t,n,e){},1063:function(t,n,e){"use strict";function c(source,t){if(null==source)return{};var n,i,e=function(source,t){if(null==source)return{};var n,i,e={},c=Object.keys(source);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(e[n]=source[n]);return e}(source,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(source);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(source,n)&&(e[n]=source[n])}return e}e.d(n,"a",(function(){return c}))},1072:function(t,n,e){},1073:function(t,n,e){"use strict";var c=e(1074),o=e(1058),r={components:{QrcodeVue:c.a},props:{data:{type:Object,required:!0}},methods:{shareClick:function(t){"qq"===t?window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(this.data.url,"\n          &showcount=0\n          &desc=").concat(this.data.desc,"\n          &summary=\n          &title=").concat(this.data.title,"\n          &pics=").concat(this.data.pics,"\n          &style=550&width=550&height=550"),"_blank","height=800, width=800, top=0, left=0"):"weibo"===t&&window.open("https://service.weibo.com/share/share.php?url=".concat(this.data.url,"\n          &title=").concat(this.data.title,"\n          ").concat(this.data.pics&&"&pic=".concat(this.data.pics),"\n          &searchPic=false"),"_blank","height=800, width=800"),this.data.courseId&&Object(o.e)(this.data.courseId)}}},l=(e(1100),e(18)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"share ml52"},[c("span",{staticClass:"c-666 title"},[t._v("分享给朋友:")]),t._v(" "),c("div",{staticClass:"wechat ml20"},[t.data.isVideo?c("img",{attrs:{src:e(1097)}}):c("img",{attrs:{src:e(1078)}}),t._v(" "),c("div",{staticClass:"code"},[c("QrcodeVue",{attrs:{options:t.data.options}})],1)]),t._v(" "),c("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("qq")}}},[t.data.isVideo?c("img",{attrs:{src:e(1098)}}):c("img",{attrs:{src:e(1079)}})]),t._v(" "),c("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("weibo")}}},[t.data.isVideo?c("img",{attrs:{src:e(1099)}}):c("img",{attrs:{src:e(1080)}})])])}),[],!1,null,"abcda1fc",null);n.a=component.exports},1074:function(t,n,e){"use strict";var c={components:{QrcodeVue:e(1117).a},props:{options:{required:!0,type:Object}}},o=(e(1088),e(18)),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qrcode borderAll"},[e("QrcodeVue",{attrs:{value:t.options.value,size:t.options.size,level:"H"}}),t._v(" "),t.options.title?e("div",{staticClass:"title"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]):t._e()],1)}),[],!1,null,"4ca4a366",null);n.a=component.exports},1078:function(t,n,e){t.exports=e.p+"img/weixin.8f92ec7.png"},1079:function(t,n,e){t.exports=e.p+"img/qq.b1d4f3a.png"},1080:function(t,n,e){t.exports=e.p+"img/weibo.6bee3ea.png"},1088:function(t,n,e){"use strict";var c=e(1060);e.n(c).a},1091:function(t,n,e){},1092:function(t,n,e){},1093:function(t,n,e){},1094:function(t,n,e){},1097:function(t,n,e){t.exports=e.p+"img/weixin.10266e6.png"},1098:function(t,n,e){t.exports=e.p+"img/qq.51edda8.png"},1099:function(t,n,e){t.exports=e.p+"img/weibo.efc2fcd.png"},1100:function(t,n,e){"use strict";var c=e(1062);e.n(c).a},1113:function(t,n,e){t.exports=e.p+"img/coachBanner.a9a732e.png"},1130:function(t,n,e){"use strict";var c=e(1072);e.n(c).a},1132:function(t,n,e){"use strict";e.r(n);var c=e(1073),o=e(20),r={components:{ThirdShare:c.a},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{shareData:{options:{value:""}}}},mounted:function(){this.shareData={url:window.location.href,desc:"我已参加，你也来一起参加吧!",title:"专注学术论文辅导",pics:e(1113),options:{value:window.location.href,size:100,title:"请打开微信扫一扫!"}}},methods:{goApply:function(){var path="/promoteApply/0?type=3&title=论文辅导申请匹配&service=".concat(this.data.service);if(this.$store.state.user.userInfo.userStatus)this.$router.push(path);else{var t="".concat(o.a.LINK.school_pc).concat(path);window.location.href="".concat(o.a.POST.school_pc,"/school/passport/login?state=").concat(t)}}}},l=(e(1130),e(18)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.data.url,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",[e("div",{staticClass:"title"},[e("p",{staticClass:"fs18 f600"},[t._v("\n          "+t._s(t.data.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"text fs14 c-666"},t._l(t.data.list,(function(n,c){return e("p",{key:c},[t._v("\n          "+t._s(n)+"\n        ")])})),0)]),t._v(" "),e("div",{staticClass:"handle"},[e("a-button",{staticStyle:{height:"40px",width:"116px"},attrs:{type:"primary",shape:"round"},on:{click:t.goApply}},[t._v("\n        申请匹配\n      ")]),t._v(" "),e("a-button",{staticClass:"ml15",staticStyle:{background:"#36b7cf",color:"#fff",height:"40px",width:"116px"},attrs:{shape:"round"},on:{click:function(n){return t.$store.commit("common/setOnLineServer")}}},[t._v("\n        咨询客服\n      ")]),t._v(" "),e("ThirdShare",{attrs:{data:t.shareData}})],1)])])}),[],!1,null,"65757295",null);n.default=component.exports},1150:function(t,n,e){"use strict";var c=e(1091);e.n(c).a},1151:function(t,n,e){"use strict";var c=e(1092);e.n(c).a},1152:function(t,n,e){t.exports=e.p+"img/sci3.0ae8601.png"},1153:function(t,n,e){t.exports=e.p+"img/sci5.d785ad7.png"},1154:function(t,n,e){t.exports=e.p+"img/sci6.80881fb.png"},1155:function(t,n,e){"use strict";var c=e(1093);e.n(c).a},1156:function(t,n,e){t.exports=e.p+"img/sci2.1302548.png"},1157:function(t,n,e){"use strict";var c=e(1094);e.n(c).a},1158:function(t,n,e){"use strict";e.r(n);var c={props:{right:{type:Object,default:function(){return{}}}}},o=(e(1151),e(18)),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"scheme"},[e("div",{staticClass:"maxWidth pt20 pb20",staticStyle:{"box-sizing":"border-box",height:"100%",display:"flex"}},[e("div",{staticClass:"left"},[t._m(0),t._v(" "),t._t("default")],2),t._v(" "),e("div",{staticClass:"right ml40"},[t._m(1),t._v(" "),e("div",{staticClass:"list fs14 c-fff f500"},t._l(t.right.list,(function(text){return e("p",{key:text},[t._v("\n          "+t._s(text)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"mt20"},[e("img",{attrs:{src:t.right.path}})])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("span",{staticClass:"fs20 f500",staticStyle:{color:"#191919"}},[this._v("辅导方案")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml6",staticStyle:{color:"#A1D2FF"}},[this._v("COUNSELING PROGRAM")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"title"},[n("span",{staticClass:"fs20 c-fff f500"},[this._v("适用人群")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml10",staticStyle:{color:"#58A1E4"}},[this._v("SUITABLE CROWD")])])}],!1,null,"439f200e",null);n.default=component.exports},1159:function(t,n,e){"use strict";e.r(n);var c={props:{interview:{type:Boolean,default:!0}}},o=(e(1155),e(18)),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"flow"},[c("div",{staticClass:"maxWidth"},[t._m(0),t._v(" "),c("div",{staticClass:"img pt10"},[c("div",{staticClass:"mb10"},[t.interview?c("img",{attrs:{src:e(1152)}}):"/paper/conferenceCoach"===t.$route.fullPath?c("img",{attrs:{src:e(1153)}}):c("img",{attrs:{src:e(1154)}})]),t._v(" "),c("div",{class:["text","fs14",{ohterTest:"/paper/conferenceCoach"===t.$route.fullPath}]},[t.interview?[c("span",{staticStyle:{flex:"0 0 109px",position:"relative",left:"-25px"}},[t._v("1.客户填写意向表")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"15px"}},[t._v("2.匹配辅导老师")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("3.面试")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("4.签署协议")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"25px"}},[t._v("5.1V1论文辅导")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("6.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"55px"}},[t._v("7.录用")])]:[c("span",{staticStyle:{flex:"0 0 109px",position:"relative",left:"-25px"}},[t._v("1.客户填写意向表")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"15px"}},[t._v("2.匹配辅导老师")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"50px"}},[t._v("3.签署协议")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"25px"}},[t._v("4.1V1论文辅导")]),t._v(" "),"/paper/conferenceCoach"===t.$route.fullPath||"/paper/cnEnCoach"===t.$route.fullPath?[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("5.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("6.录用")])]:"/paper/graduateCoach"===t.$route.fullPath?[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"45px"}},[t._v("5.论文完稿")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("6.模拟答辩")])]:[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("5.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("6.录用")])]]],2)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"title"},[n("span",{staticClass:"fs20 f500",staticStyle:{color:"#191919"}},[this._v("项目流程")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml10",staticStyle:{color:"#58A1E4"}},[this._v("THE PROCESS")])])}],!1,null,"111827fd",null);n.default=component.exports},1160:function(t,n,e){"use strict";e.r(n);e(1150);var c=e(18),component=Object(c.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"intro mt17 bg-fff pt28 pb30"},[n("div",{staticClass:"maxWidth pl10",staticStyle:{display:"flex","flex-direction":"column"}},[n("div",{staticClass:"line"},[this._t("firstSection")],2),this._v(" "),n("div",{staticClass:"line mt20"},[this._t("secondSection")],2)])])}),[],!1,null,"00e33d99",null);n.default=component.exports},1161:function(t,n,e){"use strict";e.r(n);var c=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"school"},[c("div",{staticClass:"maxWidth"},[c("div",{staticClass:"title fs20 c-333"},[t._v("\n      艾思云课堂\n    ")]),t._v(" "),c("div",{staticClass:"fs14 c-333"},[c("p",[t._v("艾思云课堂论文辅导项目，以"),c("span",{staticClass:"fs20",staticStyle:{color:"#1B6ECF"}},[t._v("“培训+发表”")]),t._v("项目模式全程辅导，根据学员研究方向进行同领域导师匹配，个性化定制服务方案，从论文选题、科研辅导、指导写作到论文诊断修改，推荐发表，提供全流程服务，帮助学者高效解决论文写作及发表难题。")]),t._v(" "),c("p",[t._v("艾思云课堂汇集国内外智库资源，导师团队中不乏名校教授、学术大牛、领域专家、期刊主编（客编）等，每年服务"),c("span",{staticClass:"fs20",staticStyle:{color:"#1B6ECF"}},[t._v("5000+")]),t._v("学者发表各类SCI/SSCI/EI期刊及国内各类C刊。")])]),t._v(" "),c("div",{staticClass:"mt30 c-333 circle"},[c("span",{staticClass:"fs20 f500"},[t._v("艾思云课堂与其他辅导机构区别")])]),t._v(" "),c("p",{staticClass:"fs14 mt5",staticStyle:{"text-indent":"1em"}},[t._v("\n      艾思云课堂尊重学术道德，遵守学术规范，对于投机性行为：学术造假、代写等行为要强烈抵制。\n    ")]),t._v(" "),c("div",{staticClass:"textCenter mt15 mb15"},[c("img",{attrs:{src:e(1156)}})])])])}],o=(e(1157),e(18)),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),c,!1,null,"139fe0cf",null);n.default=component.exports},1632:function(t,n,e){t.exports=e.p+"img/t4.72f27dd.png"}}]);