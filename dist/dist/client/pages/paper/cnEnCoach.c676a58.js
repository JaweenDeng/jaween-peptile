(window.webpackJsonp=window.webpackJsonp||[]).push([[35,37,38,39,40,41],{1060:function(t,n,e){},1061:function(t,n,e){"use strict";e.d(n,"f",(function(){return f})),e.d(n,"k",(function(){return d})),e.d(n,"m",(function(){return v})),e.d(n,"r",(function(){return h})),e.d(n,"a",(function(){return _})),e.d(n,"s",(function(){return m})),e.d(n,"b",(function(){return x})),e.d(n,"v",(function(){return y})),e.d(n,"c",(function(){return C})),e.d(n,"n",(function(){return S})),e.d(n,"j",(function(){return w})),e.d(n,"q",(function(){return O})),e.d(n,"x",(function(){return I})),e.d(n,"p",(function(){return k})),e.d(n,"w",(function(){return E})),e.d(n,"l",(function(){return $})),e.d(n,"d",(function(){return j})),e.d(n,"y",(function(){return A})),e.d(n,"u",(function(){return P})),e.d(n,"e",(function(){return F})),e.d(n,"o",(function(){return V})),e.d(n,"h",(function(){return B})),e.d(n,"i",(function(){return T})),e.d(n,"g",(function(){return D})),e.d(n,"t",(function(){return L}));var c=e(1065),r=e(19),o=e(31),l=e.n(o),f=function(t){return r.a.post("/school/course/courses",l.a.stringify(t))},d=function(t,n){return r.a.post("/school/course/detail/".concat(t),l.a.stringify(n))},v=function(t,n){return r.a.post("/school/course/play/".concat(t),l.a.stringify(n))},h=function(t){var n=t.courseId,e=t.liveId;return r.a.post("/school/course/loadPush/".concat(n,"/").concat(e))},_=function(t){return r.a.post("/school/student/apply/free/".concat(t))},m=function(t,n){return r.a.post("/school/student/trade/index/".concat(t),l.a.stringify(n))},x=function(t){var n=t.courseId,e=Object(c.a)(t,["courseId"]);return r.a.post("/school/student/trade/buy/".concat(n),l.a.stringify(e))},y=function(t){return r.a.post("/school/course/report/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.options))},C=function(t,n){return r.a.post("/school/favorite/favorite/".concat(t,"/").concat(n))},S=function(t){return r.a.post("/school/course/info/".concat(t))},w=function(t,n){return r.a.post("/school/course/comment/list/".concat(t),l.a.stringify(n))},O=function(t){return r.a.post("/school/course/comment/subList/".concat(t.courseId,"/").concat(t.parentId))},I=function(t,n){return r.a.post("/school/course/score/submit/".concat(t),l.a.stringify(n))},k=function(t,n){return r.a.post("/school/course/score/list/".concat(t),l.a.stringify(n))},E=function(t){return r.a.post("/school/course/comment/submit",l.a.stringify(t))},$=function(t){return r.a.post("/school/course/score/latestBuy/".concat(t))},j=function(t){return r.a.post("/school/course/down/document/".concat(t.courseId,"/").concat(t.liveId))},A=function(t){return r.a.post("/school/student/apply/problem/save",l.a.stringify(t))},P=function(t){return r.a.post("/service/app/mp/makeJsMap",l.a.stringify(t),{custom:{isAis:!0}})},F=function(t){return r.a.post("/school/course/callback/".concat(t))},V=function(t){return r.a.post("/school/student/trade/complete",l.a.stringify(t))},B=function(t,n){return r.a.post("/school/student/clock/record/list/".concat(t),l.a.stringify(n))},T=function(t){return r.a.post("/school/student/clock/main/course/info/".concat(t))},D=function(t,n){return r.a.post("/school/student/clock/record/comment/list/".concat(t),l.a.stringify(n))},L=function(){return r.a.post("/school/student/apply/problem/history")}},1064:function(t,n,e){},1065:function(t,n,e){"use strict";function c(source,t){if(null==source)return{};var n,i,e=function(source,t){if(null==source)return{};var n,i,e={},c=Object.keys(source);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(e[n]=source[n]);return e}(source,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(source);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(source,n)&&(e[n]=source[n])}return e}e.d(n,"a",(function(){return c}))},1072:function(t,n,e){"use strict";var c={components:{QrcodeVue:e(1111).a},props:{options:{required:!0,type:Object}}},r=(e(1075),e(18)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qrcode borderAll"},[e("QrcodeVue",{attrs:{value:t.options.value,size:t.options.size,level:"H"}}),t._v(" "),t.options.title?e("div",{staticClass:"title"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]):t._e()],1)}),[],!1,null,"4ca4a366",null);n.a=component.exports},1075:function(t,n,e){"use strict";var c=e(1060);e.n(c).a},1076:function(t,n,e){},1077:function(t,n,e){"use strict";var c=e(1072),r=e(1061),o={components:{QrcodeVue:c.a},props:{data:{type:Object,required:!0}},methods:{shareClick:function(t){"qq"===t?window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(this.data.url,"\n          &showcount=0\n          &desc=").concat(this.data.desc,"\n          &summary=\n          &title=").concat(this.data.title,"\n          &pics=").concat(this.data.pics,"\n          &style=550&width=550&height=550"),"_blank","height=800, width=800, top=0, left=0"):"weibo"===t&&window.open("https://service.weibo.com/share/share.php?url=".concat(this.data.url,"\n          &title=").concat(this.data.title,"\n          ").concat(this.data.pics&&"&pic=".concat(this.data.pics),"\n          &searchPic=false"),"_blank","height=800, width=800"),this.data.courseId&&Object(r.e)(this.data.courseId)}}},l=(e(1102),e(18)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"share ml52"},[c("span",{staticClass:"c-666 title"},[t._v("分享给朋友:")]),t._v(" "),c("div",{staticClass:"wechat ml20"},[t.data.isVideo?c("img",{attrs:{src:e(1099)}}):c("img",{attrs:{src:e(1081)}}),t._v(" "),c("div",{staticClass:"code"},[c("QrcodeVue",{attrs:{options:t.data.options}})],1)]),t._v(" "),c("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("qq")}}},[t.data.isVideo?c("img",{attrs:{src:e(1100)}}):c("img",{attrs:{src:e(1082)}})]),t._v(" "),c("div",{staticClass:"ml20 hand",on:{click:function(n){return t.shareClick("weibo")}}},[t.data.isVideo?c("img",{attrs:{src:e(1101)}}):c("img",{attrs:{src:e(1083)}})])])}),[],!1,null,"abcda1fc",null);n.a=component.exports},1081:function(t,n,e){t.exports=e.p+"img/weixin.8f92ec7.png"},1082:function(t,n,e){t.exports=e.p+"img/qq.b1d4f3a.png"},1083:function(t,n,e){t.exports=e.p+"img/weibo.6bee3ea.png"},1093:function(t,n,e){},1094:function(t,n,e){},1095:function(t,n,e){},1096:function(t,n,e){},1099:function(t,n,e){t.exports=e.p+"img/weixin.10266e6.png"},1100:function(t,n,e){t.exports=e.p+"img/qq.51edda8.png"},1101:function(t,n,e){t.exports=e.p+"img/weibo.efc2fcd.png"},1102:function(t,n,e){"use strict";var c=e(1064);e.n(c).a},1116:function(t,n,e){t.exports=e.p+"img/coachBanner.a9a732e.png"},1132:function(t,n,e){"use strict";var c=e(1076);e.n(c).a},1134:function(t,n,e){"use strict";e.r(n);var c=e(1077),r=e(20),o={components:{ThirdShare:c.a},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{shareData:{options:{value:""}}}},mounted:function(){this.shareData={url:window.location.href,desc:"我已参加，你也来一起参加吧!",title:"专注学术论文辅导",pics:e(1116),options:{value:window.location.href,size:100,title:"请打开微信扫一扫!"}}},methods:{goApply:function(){var path="/promoteApply/0?type=3&title=论文辅导申请匹配&service=".concat(this.data.service);if(this.$store.state.user.userInfo.userStatus)this.$router.push(path);else{var t="".concat(r.a.LINK.school_pc).concat(path);window.location.href="".concat(r.a.POST.school_pc,"/school/passport/login?state=").concat(t)}}}},l=(e(1132),e(18)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.data.url,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",[e("div",{staticClass:"title"},[e("p",{staticClass:"fs18 f600"},[t._v("\n          "+t._s(t.data.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"text fs14 c-666"},t._l(t.data.list,(function(n,c){return e("p",{key:c},[t._v("\n          "+t._s(n)+"\n        ")])})),0)]),t._v(" "),e("div",{staticClass:"handle"},[e("a-button",{staticStyle:{height:"40px",width:"116px"},attrs:{type:"primary",shape:"round"},on:{click:t.goApply}},[t._v("\n        申请匹配\n      ")]),t._v(" "),e("a-button",{staticClass:"ml15",staticStyle:{background:"#36b7cf",color:"#fff",height:"40px",width:"116px"},attrs:{shape:"round"},on:{click:function(n){return t.$store.commit("common/setOnLineServer")}}},[t._v("\n        咨询客服\n      ")]),t._v(" "),e("ThirdShare",{attrs:{data:t.shareData}})],1)])])}),[],!1,null,"65757295",null);n.default=component.exports},1152:function(t,n,e){"use strict";var c=e(1093);e.n(c).a},1153:function(t,n,e){"use strict";var c=e(1094);e.n(c).a},1154:function(t,n,e){t.exports=e.p+"img/sci3.0ae8601.png"},1155:function(t,n,e){t.exports=e.p+"img/sci5.d785ad7.png"},1156:function(t,n,e){t.exports=e.p+"img/sci6.80881fb.png"},1157:function(t,n,e){"use strict";var c=e(1095);e.n(c).a},1158:function(t,n,e){t.exports=e.p+"img/sci2.1302548.png"},1159:function(t,n,e){"use strict";var c=e(1096);e.n(c).a},1160:function(t,n,e){"use strict";e.r(n);var c={props:{right:{type:Object,default:function(){return{}}}}},r=(e(1153),e(18)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"scheme"},[e("div",{staticClass:"maxWidth pt20 pb20",staticStyle:{"box-sizing":"border-box",height:"100%",display:"flex"}},[e("div",{staticClass:"left"},[t._m(0),t._v(" "),t._t("default")],2),t._v(" "),e("div",{staticClass:"right ml40"},[t._m(1),t._v(" "),e("div",{staticClass:"list fs14 c-fff f500"},t._l(t.right.list,(function(text){return e("p",{key:text},[t._v("\n          "+t._s(text)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"mt20"},[e("img",{attrs:{src:t.right.path}})])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("span",{staticClass:"fs20 f500",staticStyle:{color:"#191919"}},[this._v("辅导方案")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml6",staticStyle:{color:"#A1D2FF"}},[this._v("COUNSELING PROGRAM")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"title"},[n("span",{staticClass:"fs20 c-fff f500"},[this._v("适用人群")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml10",staticStyle:{color:"#58A1E4"}},[this._v("SUITABLE CROWD")])])}],!1,null,"439f200e",null);n.default=component.exports},1161:function(t,n,e){"use strict";e.r(n);var c={props:{interview:{type:Boolean,default:!0}}},r=(e(1157),e(18)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"flow"},[c("div",{staticClass:"maxWidth"},[t._m(0),t._v(" "),c("div",{staticClass:"img pt10"},[c("div",{staticClass:"mb10"},[t.interview?c("img",{attrs:{src:e(1154)}}):"/paper/conferenceCoach"===t.$route.fullPath?c("img",{attrs:{src:e(1155)}}):c("img",{attrs:{src:e(1156)}})]),t._v(" "),c("div",{class:["text","fs14",{ohterTest:"/paper/conferenceCoach"===t.$route.fullPath}]},[t.interview?[c("span",{staticStyle:{flex:"0 0 109px",position:"relative",left:"-25px"}},[t._v("1.客户填写意向表")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"15px"}},[t._v("2.匹配辅导老师")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("3.面试")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("4.签署协议")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"25px"}},[t._v("5.1V1论文辅导")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("6.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"55px"}},[t._v("7.录用")])]:[c("span",{staticStyle:{flex:"0 0 109px",position:"relative",left:"-25px"}},[t._v("1.客户填写意向表")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"15px"}},[t._v("2.匹配辅导老师")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"50px"}},[t._v("3.签署协议")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"25px"}},[t._v("4.1V1论文辅导")]),t._v(" "),"/paper/conferenceCoach"===t.$route.fullPath||"/paper/cnEnCoach"===t.$route.fullPath?[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("5.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("6.录用")])]:"/paper/graduateCoach"===t.$route.fullPath?[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"45px"}},[t._v("5.论文完稿")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("6.模拟答辩")])]:[c("span",{staticStyle:{flex:"0 0 109px","margin-left":"30px"}},[t._v("5.论文发表推荐")]),t._v(" "),c("span",{staticStyle:{flex:"0 0 109px","margin-left":"60px"}},[t._v("6.录用")])]]],2)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"title"},[n("span",{staticClass:"fs20 f500",staticStyle:{color:"#191919"}},[this._v("项目流程")]),this._v(" "),n("span",{staticClass:"fs18 f600 ml10",staticStyle:{color:"#58A1E4"}},[this._v("THE PROCESS")])])}],!1,null,"111827fd",null);n.default=component.exports},1162:function(t,n,e){"use strict";e.r(n);e(1152);var c=e(18),component=Object(c.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"intro mt17 bg-fff pt28 pb30"},[n("div",{staticClass:"maxWidth pl10",staticStyle:{display:"flex","flex-direction":"column"}},[n("div",{staticClass:"line"},[this._t("firstSection")],2),this._v(" "),n("div",{staticClass:"line mt20"},[this._t("secondSection")],2)])])}),[],!1,null,"00e33d99",null);n.default=component.exports},1163:function(t,n,e){"use strict";e.r(n);var c=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"school"},[c("div",{staticClass:"maxWidth"},[c("div",{staticClass:"title fs20 c-333"},[t._v("\n      艾思云课堂\n    ")]),t._v(" "),c("div",{staticClass:"fs14 c-333"},[c("p",[t._v("艾思云课堂论文辅导项目，以"),c("span",{staticClass:"fs20",staticStyle:{color:"#1B6ECF"}},[t._v("“培训+发表”")]),t._v("项目模式全程辅导，根据学员研究方向进行同领域导师匹配，个性化定制服务方案，从论文选题、科研辅导、指导写作到论文诊断修改，推荐发表，提供全流程服务，帮助学者高效解决论文写作及发表难题。")]),t._v(" "),c("p",[t._v("艾思云课堂汇集国内外智库资源，导师团队中不乏名校教授、学术大牛、领域专家、期刊主编（客编）等，每年服务"),c("span",{staticClass:"fs20",staticStyle:{color:"#1B6ECF"}},[t._v("5000+")]),t._v("学者发表各类SCI/SSCI/EI期刊及国内各类C刊。")])]),t._v(" "),c("div",{staticClass:"mt30 c-333 circle"},[c("span",{staticClass:"fs20 f500"},[t._v("艾思云课堂与其他辅导机构区别")])]),t._v(" "),c("p",{staticClass:"fs14 mt5",staticStyle:{"text-indent":"1em"}},[t._v("\n      艾思云课堂尊重学术道德，遵守学术规范，对于投机性行为：学术造假、代写等行为要强烈抵制。\n    ")]),t._v(" "),c("div",{staticClass:"textCenter mt15 mb15"},[c("img",{attrs:{src:e(1158)}})])])])}],r=(e(1159),e(18)),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),c,!1,null,"139fe0cf",null);n.default=component.exports},2105:function(t,n,e){t.exports=e.p+"img/t2.ae75535.png"},2106:function(t,n,e){t.exports=e.p+"img/banner2.a42c087.png"},2107:function(t,n,e){t.exports=e.p+"img/scheme2.f72f490.png"},2216:function(t,n,e){"use strict";e.r(n);var c=e(1134),r=e(1162),o=e(1160),l=e(1161),f=e(1163),d={components:{Header:c.default,Intro:r.default,Scheme:o.default,Flow:l.default,School:f.default},data:function(){return{headerInfo:{url:e(2106),title:"中英文普刊论文",list:["全程一对一指导、助力成果产出","科学评估、精准匹配、个性定制、辅导+发表"],service:4},right:{list:["没有发表过论文的科研小白","需要发论文但预算有限的高中生、本科生、研究生 ","为了评职称、就业或完成毕业要求的学生或职场人士","想提高学术水平、科研能力、论文写作水平的学习者"],path:e(2107)}}}},v=e(18),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"sci"},[c("div",{staticClass:"bg-fff"},[c("Header",{attrs:{data:t.headerInfo}})],1),t._v(" "),c("Intro",{scopedSlots:t._u([{key:"firstSection",fn:function(){return[c("p",[t._v("普刊，指核心期刊（SCI、SSCI、核心期刊）之外的期刊，是学术期刊中的基础级别的期刊，数量多，发表难度适中，包括：国家级期刊和省级期刊，普通英文期刊。")]),t._v(" "),c("p",[t._v("凡是在有论文发表要求的领域中，发表普刊都可以说是基础要求，比如职称评审，最常见的要求就是发表省级及以上期刊论文若干篇，普刊论文发表是作者开启论文发表之路的首选。正是有了普刊发表的基础才有了后续发表高级别刊物的可能。")])]},proxy:!0},{key:"secondSection",fn:function(){return[c("p",[t._v("艾思云课堂推出"),c("span",{staticStyle:{color:"#FA6400"}},[t._v('“中英文普刊论文辅导" ')]),t._v("项目，根据学生的研究方向匹配导师，制定个性化专属课程，")]),t._v(" "),c("p",[t._v("培养学生科研能力、论文写作能力，产出科研论文/科研报告/导师推荐信/科研项目证明等，助力学生达成"),c("span",{staticStyle:{color:"#FA6400"}},[t._v("“能力提升+成果收获”")]),t._v("双重目标。")])]},proxy:!0}])}),t._v(" "),c("Scheme",{attrs:{right:t.right}},[c("div",{staticStyle:{color:"#000000"}},[c("p",[t._v("辅导模式：线上一对一，"),c("span",{staticStyle:{color:"#FA6400"}},[t._v("导师+助教+班主任")])]),t._v(" "),c("p",[t._v("4-6个周,预计"),c("span",{staticStyle:{color:"#FA6400"}},[t._v("5-8")]),t._v("课时")])]),t._v(" "),c("img",{attrs:{src:e(2105)}})]),t._v(" "),c("Flow",{attrs:{interview:!1}}),t._v(" "),c("School")],1)}),[],!1,null,null,null);n.default=component.exports}}]);