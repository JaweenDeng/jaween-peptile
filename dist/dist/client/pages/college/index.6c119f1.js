(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1060:function(t,e,n){"use strict";n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return v})),n.d(e,"o",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"m",(function(){return _})),n.d(e,"a",(function(){return C})),n.d(e,"l",(function(){return x})),n.d(e,"n",(function(){return h})),n.d(e,"h",(function(){return y})),n.d(e,"d",(function(){return w})),n.d(e,"c",(function(){return M})),n.d(e,"e",(function(){return z})),n.d(e,"b",(function(){return k})),n.d(e,"i",(function(){return A})),n.d(e,"g",(function(){return N})),n.d(e,"f",(function(){return I})),n.d(e,"s",(function(){return L})),n.d(e,"r",(function(){return B}));var r=n(19),c=n(31),o=n.n(c),l=function(){return r.a.post("/school/study/statistics")},v=function(t){return r.a.post("/school/study/list",o.a.stringify(t))},d=function(t){return r.a.post("/school/favorite/list",o.a.stringify(t))},f=function(t){return r.a.post("/school/study/courses",o.a.stringify(t))},m=function(t){return r.a.post("/school/student/trade/list",o.a.stringify(t))},_=function(t){return r.a.post("/school/student/trade/pay/".concat(t))},C=function(t){return r.a.post("/school/student/trade/cancel/".concat(t))},x=function(t){return r.a.post("/school/train/trade/list",o.a.stringify(t))},h=function(t){var e=t.courseId,n=t.type;return r.a.post("/school/study/cert/".concat(e,"/").concat(n),{},{responseType:"blob"})},y=function(){return r.a.post("/school/lecturer/clock/role")},w=function(){return r.a.post("/school/lecturer/clock/index")},M=function(t){return r.a.post("/school/lecturer/clock/course/list",o.a.stringify(t))},z=function(t){return r.a.post("/school/lecturer/clock/question/list",o.a.stringify(t))},k=function(t){return r.a.post("/school/lecturer/clock/comment/list",o.a.stringify(t))},A=function(t){return r.a.post("/school/lecturer/clock/theme/list/".concat(t))},N=function(t,e){return r.a.post("/school/lecturer/clock/record/list/".concat(t),o.a.stringify(e))},I=function(t){return r.a.post("/school/lecturer/clock/record/detail/".concat(t))},L=function(t,e){return r.a.post("/school/student/course/question/comment/submit/".concat(t),o.a.stringify(e))},B=function(t,e){return r.a.post("/school/student/clock/record/comment/submit/".concat(t),o.a.stringify(e))}},1065:function(t,e,n){},1078:function(t,e,n){t.exports=n.p+"img/icon.14fa948.png"},1079:function(t,e,n){t.exports=n.p+"img/certificateLogo.e264faf.png"},1080:function(t,e,n){t.exports=n.p+"img/studentLogo.415301d.png"},1081:function(t,e,n){t.exports=n.p+"img/arrowDown.5678e9e.png"},1082:function(t,e,n){},1103:function(t,e,n){"use strict";n(44);var r=n(17),c=n(20),o=n(1060),l={props:{data:{type:Object,required:!0},prosess:{type:Boolean,default:!1},isFavor:{type:Boolean,default:!1}},data:function(){return{config:c.a,currentTime:parseInt((new Date).getTime()/1e3),url:""}},computed:{isDisCount:function(){return this.currentTime>=this.data.discountStart&&this.data.discountEnd>=this.currentTime},livingStatus:function(){return 1===this.data.liveStatus||this.currentTime>this.data.start&&this.data.end>this.currentTime&&3!==this.data.type?{title:"直播中",style:"living"}:this.data.start-this.currentTime<900&&this.data.start-this.currentTime>0&&3!==this.data.type?{title:"即将开始",style:"willStart"}:this.currentTime>this.data.end&&1===this.data.type?{title:"已结束",style:"endLiving"}:null},realPrice:function(){return this.data.tuanPrice>0?this.data.tuanPrice:this.isDisCount?this.data.discountPrice:this.data.price}},methods:{preview:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var data,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(o.n)({courseId:t,type:e});case 2:data=r.sent,c=new Blob([data.data]),l=URL.createObjectURL(c),n.url=l;case 6:case"end":return r.stop()}}),r)})))()},save:function(){var a=document.createElement("a");a.download="毕业证书.png",a.href=this.url,a.click()}}},v=(n(1104),n(18)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"courseCardWrap"},[r("div",{staticClass:"page hand"},[r("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"/courseDetail/"+t.data.id}}),t._v(" "),r("div",{staticClass:"imgWrap"},[!t.prosess&&t.data.scene>1&&t.livingStatus?r("div",{class:["fs12","f500","textCenter","c-fff",t.livingStatus.style]},["living"===t.livingStatus.style?r("img",{staticClass:"icon",attrs:{src:n(1078)}}):t._e(),t._v(" "),r("span",{class:{ml15:"living"===t.livingStatus.style}},[t._v(t._s(t.livingStatus.title))])]):t._e(),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"})]),t._v(" "),r("div",{staticClass:"content pl15 pr15 pb10 pt10"},[r("div",{class:["c-333",{f600:!t.isFavor},{fs12:t.isFavor},"twoLine","title","mt5"]},[t.data.period>0?r("span",{staticClass:"period"},[t._v("第"+t._s(t.data.period)+"期")]):t._e(),t._v(" "),r("span",[t._v(t._s(t.data.name))])]),t._v(" "),r("div",{staticClass:"c-999 fs12 oneLine mt5"},[t._v("\n        "+t._s(t.data.description)+"\n      ")]),t._v(" "),t._t("bottom",[r("div",{staticClass:"handle"},[t.prosess?t._e():r("div",{staticClass:"w100"},[0===t.data.price?r("span",{staticClass:"fs18 nowprice f600"},[t._v("免费")]):r("span",{staticClass:"fs18 nowprice f600"},[t._v(t._s(t.realPrice)+"元")]),t._v(" "),t.isDisCount?r("span",{staticClass:"fakePrice fs12 c-666 ml6"},[t._v("¥"+t._s(t.data.price))]):t._e(),t._v(" "),t._t("label",[t.data.tuanPrice>0?r("span",{staticClass:"ml6 fs12 limitTuan"},[t._v("限时拼团")]):t.isDisCount?r("span",{staticClass:"ml6 fs12 limitDiscount"},[t._v("限时优惠")]):t._e()]),t._v(" "),r("span",{staticClass:"c-666 fs12 rightStatus"},[t._v(t._s(t.data.studyNumber)+"人"+t._s(0===t.data.price?"学习":"购买"))])],2),t._v(" "),t.prosess&&1===t.data.scene?r("div",{staticClass:"processWrap"},[r("div",{staticClass:"fs12 c-999 processTitle"},[t._v("\n              学习进度\n            ")]),t._v(" "),r("a-progress",{staticClass:"process ml16",attrs:{percent:t.data.progress,size:"small"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"certificate"},[(2&t.data.cert)>0?r("div",{staticClass:"certificateBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,2)}}},[r("img",{attrs:{src:n(1079),alt:"毕业证书"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("毕业证书")])]):t._e(),t._v(" "),(1&t.data.cert)>0?r("div",{staticClass:"certificateBtn studentBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,1)}}},[r("img",{attrs:{src:n(1080),alt:"优秀学员"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("优秀学员")])]):t._e()])])],2)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"layout"},[r("div",[r("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.url=""}}},[r("a-icon",{staticStyle:{fontSize:"30px",color:"#fff"},attrs:{type:"close-circle"}})],1),t._v(" "),r("img",{attrs:{src:t.url,alt:"毕业证书"}})]),t._v(" "),r("a-button",{staticClass:"mt20",attrs:{shape:"round"}},[r("div",{staticClass:"save",on:{click:t.save}},[r("img",{attrs:{src:n(1081),alt:""}}),t._v(" "),r("span",{staticClass:"ml5",staticStyle:{color:"#4571FF"}},[t._v("点击保存")])])])],1)])}),[],!1,null,"5e3ac026",null);e.a=component.exports},1104:function(t,e,n){"use strict";var r=n(1065);n.n(r).a},1112:function(t,e,n){},1113:function(t,e,n){t.exports=n.p+"img/right-circle.55fe38a.png"},1129:function(t,e,n){"use strict";var r={props:{data:{type:Object,required:!0},showMore:{type:Boolean,default:!0}}},c=(n(1134),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"indexTitle"},[r("div",[t._t("icon"),t._v(" "),r("span",{staticClass:"c-333 f600 fs20 inlineBlock vMiddle title"},[t._v(t._s(t.data.title))])],2),t._v(" "),t.showMore?r("nuxt-link",{attrs:{to:t.data.path||"/allCourse"}},[r("span",{staticClass:"fs12 link"},[t._v("查看更多")]),t._v(" "),r("img",{staticClass:"img",attrs:{src:n(1113)}})]):t._e()],1)}),[],!1,null,"12c658fc",null);e.a=component.exports},1134:function(t,e,n){"use strict";var r=n(1082);n.n(r).a},1235:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return d}));var r=n(19),c=n(31),o=n.n(c),l=function(t){return r.a.post("/school/home/college/courses",o.a.stringify(t))},v=function(t){return r.a.post("/service/cms/article/article/list/".concat(t.id),o.a.stringify(t.info),{custom:{isAis:!0}})},d=function(t){return r.a.post("/service/cms/article/article/details/".concat(t.id),o.a.stringify(t.info),{custom:{isAis:!0}})}},1236:function(t,e,n){"use strict";var r=n(1112);n.n(r).a},1274:function(t,e,n){"use strict";var r=n(20),c={props:{data:{type:Array,required:!0}},data:function(){return{config:r.a}},methods:{jump:function(t){this.$refs.bannerCarousel.goTo(t)}}},o=(n(1236),n(18)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"page"},[n("a-carousel",{ref:"bannerCarousel",attrs:{arrows:"",autoplay:"",autoplaySpeed:3500},scopedSlots:t._u([{key:"customPaging",fn:function(e){return n("div",{on:{mouseenter:function(n){return t.jump(e.i)}}},[n("button")])}}],null,!1,3750172634)},[n("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"25px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[n("a-icon",{attrs:{type:"left-circle"}})],1),t._v(" "),n("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"25px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[n("a-icon",{attrs:{type:"right-circle"}})],1),t._v(" "),t._l(t.data,(function(e,r){return n("div",{key:r},[e.redirectUrl?n("a",{attrs:{href:e.redirectUrl,target:"_blank"}},[n("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})]):n("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})])}))],2)],1):t._e()}),[],!1,null,"8aa1b0ca",null);e.a=component.exports},1321:function(t,e,n){t.exports=n.p+"img/time.873e9a4.png"},1322:function(t,e,n){t.exports=n.p+"img/title_01.cd96a6c.png"},1323:function(t,e,n){},1324:function(t,e,n){},1640:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAIVBMVEU1rLfP6+59ydGa1ttHcEw0qrMxq7cyq7YxrbhbvMVHs722bOZ3AAAAC3RSTlOzs7OzADaqhV2zs9D3JHsAAAA3SURBVAjXY3AJTyt1YfBgFjRoYQgQYpjAylCsoMTAzpDIoMTABiQVDcSAIpyLzEGyiqxQlWBdAD4nCpaxv9YmAAAAAElFTkSuQmCC"},1641:function(t,e,n){t.exports=n.p+"img/title_02.0e70977.png"},1642:function(t,e,n){t.exports=n.p+"img/quotes.45b4ab8.png"},1643:function(t,e,n){t.exports=n.p+"img/icon_01.6b10291.png"},1644:function(t,e,n){t.exports=n.p+"img/icon_02.8c85c7b.png"},1645:function(t,e,n){t.exports=n.p+"img/icon_03.49434a9.png"},1646:function(t,e,n){t.exports=n.p+"img/icon_04.56e42d9.png"},1647:function(t,e,n){t.exports=n.p+"img/cooperation1.ed58428.png"},1648:function(t,e,n){t.exports=n.p+"img/cooperation_1.5c13202.png"},1649:function(t,e,n){t.exports=n.p+"img/qrcode_1.b04dc4b.png"},1650:function(t,e,n){t.exports=n.p+"img/icon_05.0930f48.png"},1651:function(t,e,n){t.exports=n.p+"img/icon_06.d516444.png"},1652:function(t,e,n){t.exports=n.p+"img/icon_07.cb76f73.png"},1653:function(t,e,n){t.exports=n.p+"img/cooperation_2.c38876a.png"},1654:function(t,e,n){t.exports=n.p+"img/qrcode_2.7d985e0.png"},1655:function(t,e,n){t.exports=n.p+"img/qrcode_4.b48c9a2.png"},1656:function(t,e,n){t.exports=n.p+"img/school.68d9446.png"},1657:function(t,e,n){t.exports=n.p+"img/cooperation.42c1346.png"},1658:function(t,e,n){t.exports=n.p+"img/cooperation_01.b4dd86e.png"},1659:function(t,e,n){t.exports=n.p+"img/cooperation_02.a3862ea.png"},1660:function(t,e,n){t.exports=n.p+"img/cooperation_03.952e9a0.png"},1661:function(t,e,n){t.exports=n.p+"img/cooperation_04.8f67735.png"},1662:function(t,e,n){t.exports=n.p+"img/cooperation_05.45fa399.png"},1663:function(t,e,n){t.exports=n.p+"img/cooperation_06.8c8d63f.png"},1664:function(t,e,n){t.exports=n.p+"img/cooperation_07.c0b2113.png"},1665:function(t,e,n){t.exports=n.p+"img/cooperation_08.9114a3c.png"},1666:function(t,e,n){t.exports=n.p+"img/cooperation_09.f99f392.png"},1667:function(t,e,n){t.exports=n.p+"img/cooperation_10.2794bf2.png"},1668:function(t,e,n){t.exports=n.p+"img/cooperation_11.4a51391.png"},1669:function(t,e,n){t.exports=n.p+"img/cooperation_12.c0efe57.png"},1670:function(t,e,n){"use strict";var r=n(1323);n.n(r).a},1671:function(t,e,n){t.exports=n.p+"img/avatar_1.3e6111c.png"},1672:function(t,e,n){t.exports=n.p+"img/avatar_2.42e9e44.png"},1673:function(t,e,n){t.exports=n.p+"img/avatar_3.b2b490c.png"},1674:function(t,e,n){t.exports=n.p+"img/avatar_4.d9ef4a2.png"},1675:function(t,e,n){t.exports=n.p+"img/avatar_5.717068e.png"},1676:function(t,e,n){t.exports=n.p+"img/avatar_6.f54a09f.png"},1677:function(t,e,n){t.exports=n.p+"img/avatar_7.ec8a5e0.png"},1678:function(t,e,n){t.exports=n.p+"img/avatar_8.21c270c.png"},1679:function(t,e,n){"use strict";var r=n(1324);n.n(r).a},2188:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("img",{staticClass:"vMiddle",attrs:{src:n(1322)}}),this._v(" "),e("span",{staticClass:"fs20 f600 inlineBlock vMiddle c-333 pl5"},[this._v("最新活动")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl20 pr45"},[n("div",[n("span",{staticClass:"fs36 f600 titles"},[t._v("全国高校论文指导公益行")]),t._v(" "),n("span",{staticClass:"fs16 f600 titles pl16"},[t._v("项目简介")])]),t._v(" "),n("ol",{staticClass:"ols titles pl20 pt20"},[n("li",{staticClass:"pb55 fs14"},[t._v("\n              论文写作对增强高校师生的创新能力和科研能力、全面提高师生的专业技能和综合素质以及培养适应社会经济发展急需的高素质人才，有着极大的促进作用。\n            ")]),t._v(" "),n("li",{staticClass:"pb55 fs14"},[t._v("\n              论文写作是科研学习与工作必不可少的一环节。随着学习及工作的深入，师生对本专业及行业会有深入的研究，而研究水平的衡量标准则体现在了论文发表上，即要求在公开发行的学术期刊上发表具有一定学术价值的论文。\n            ")]),t._v(" "),n("li",{staticClass:"pb55 fs14"},[t._v("\n              论文发表，成了考量从业者水平的一个不可或缺甚至尤为重要的标准。\n            ")])])])}],c=(n(42),n(30),n(298)),o=n(303),l=n(177),v=n(299);n(44);var d=n(17),f=n(20),m=n(137),_=n(1235),C=n(1274),x=n(1103),h=n(1129),y={props:{data:{type:Object,required:!0}}},w=(n(1670),n(18)),M=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"left pr15"},[n("div",{staticClass:"pt10 pb15 fs16 c-333 f600 oneLine"},[t._v("\n      "+t._s(t.data.name)+"\n    ")]),t._v(" "),n("ul",t._l(t.data.liList,(function(e,r){return n("li",{key:r,staticClass:"fs12 c-666 lis"},[n("span",{staticClass:"point"}),t._v("\n        "+t._s(e.text)+"\n      ")])})),0)]),t._v(" "),n("div",{staticClass:"right"},[n("img",{staticClass:"imgs",attrs:{src:t.data.icon}})])])}),[],!1,null,"6a2cf775",null).exports,z={components:{IndexBanner:C.a,CourseCard:x.a,IndexTitle:h.a,ThinkTankCard:M},asyncData:function(){return Object(d.a)(regeneratorRuntime.mark((function t(){var e,data,n,r,d,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)({size:8});case 2:return e=t.sent,data=e.data,t.next=6,Object(_.c)({id:32,info:{page:1,pageSize:5}});case 6:if(n=t.sent,0!==data.code||0!==n.data.code){t.next=10;break}return C=n.data.data.entries,r=Object(c.a)(C)||Object(o.a)(C)||Object(l.a)(C)||Object(v.a)(),d=r[0],f=void 0===d?{}:d,m=r.slice(1),t.abrupt("return",{couseList:data.data,newList:m||[],firstNew:f});case 10:case"end":return t.stop()}var C}),t)})))()},data:function(){return{couseList:[],newList:[],firstNew:{},bannerList:[],config:f.a,thinkTankData:[{icon:n(1671),name:"David Bassir",liList:[{text:"广州中国科学院"},{text:" 工业技术研究院专家"},{text:"交通运输学科带头人"}]},{icon:n(1672),name:"梁安辉 教授",liList:[{text:"美籍华人"},{text:" 山东科技大学教授"},{text:"光电工程学科带头人"}]},{icon:n(1673),name:"曾庆生 教授",liList:[{text:"加拿大籍华人"},{text:" 加拿大政府通信研究中心研究院信息通信学科带头人"}]},{icon:n(1674),name:"杨俊 教授",liList:[{text:"北京林业大学教授/博导"}]},{icon:n(1675),name:"张德富 教授",liList:[{text:"厦门“双百计划”"},{text:" 领军型创业人才"},{text:"中国大数据学术创新百人"}]},{icon:n(1676),name:"Patrice Salzenstein",liList:[{text:"法国CNRS研究所高级研究员"},{text:" 机电学科带头人"}]},{icon:n(1677),name:"Zied Moumni",liList:[{text:"上海交通大学机械工程系"},{text:" 首席科学家"},{text:"材料学科带头人"}]},{icon:n(1678),name:"Stuart Perrin",liList:[{text:"西交利物浦大学先进教育学院院长"},{text:" 教育学学科带头人"}]}]}},mounted:function(){this.getbatchList()},methods:{getbatchList:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("pc_gaoxiao");case 2:n=e.sent,0===(data=n.data).code&&(t.bannerList=data.data.pc_gaoxiao);case 5:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:"高校公益行-艾思云课堂"}}},k=(n(1679),Object(w.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("IndexBanner",{attrs:{data:t.bannerList}}),t._v(" "),r("div",{staticClass:"container pt30 pb30"},[t._m(0),t._v(" "),t.couseList.length?r("div",{staticClass:"cardWrap"},t._l(t.couseList,(function(e,c){return r("a",{key:c,staticClass:"courseCard",attrs:{href:"/courseDetail/"+e.id,target:"_blank"}},[r("CourseCard",{attrs:{data:e}},[r("div",{attrs:{slot:"bottom"},slot:"bottom"},[r("div",{staticClass:"flexBox"},[r("div",{staticClass:"leftIcon"},[r("img",{attrs:{src:n(1321),width:"12px"}})]),t._v(" "),r("div",{staticClass:"rightCont fs12 c-666 pl5"},[t._v("\n                "+t._s(e.location)+"\n              ")])]),t._v(" "),r("div",{staticClass:"flexBox"},[r("div",{staticClass:"leftIcon"},[r("img",{attrs:{src:n(1640),width:"10px"}})]),t._v(" "),r("div",{staticClass:"rightCont fs12 c-666 pl5"},[t._v("\n                时间："+t._s(t.$changeTime(e.activityTime,"YYYY/MM/DD"))+"\n              ")])])])])],1)})),0):t._e()]),t._v(" "),Object.keys(t.firstNew).length?r("div",{staticClass:"bg-fff pb40"},[r("div",{staticClass:"container pt20"},[r("IndexTitle",{attrs:{data:{title:"往期回顾",path:"/college/newsList"}}},[r("img",{staticClass:"vMiddle",attrs:{slot:"icon",src:n(1641)},slot:"icon"})]),t._v(" "),r("div",{staticClass:"flexWrap pt20"},[r("div",{staticClass:"left"},[r("nuxt-link",{staticClass:"firstNews pl20 pr20 block",attrs:{to:"/newsDetail/"+t.firstNew.id}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.firstNew.poster,expression:"`${config.IMG_URL.default}${firstNew.poster}`"}],staticClass:"newsImg",attrs:{alt:""}}),t._v(" "),r("div",{staticClass:"c-333 fs14 f500 oneLine pb10"},[t._v("\n              "+t._s(t.firstNew.title)+"\n            ")]),t._v(" "),r("div",{staticClass:"c-666 fs12 twoLine conts"},[t._v("\n              "+t._s(t.firstNew.description)+"\n            ")]),t._v(" "),r("div",{staticClass:"pt6 fs14 c-999 pb10"},[t._v("\n              "+t._s(t.$changeTime(t.firstNew.createTime,"YYYY-MM-DD"))+"\n            ")])])],1),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"pl16"},t._l(t.newList,(function(e){return r("div",{key:e.id,staticClass:"flexNews pt15"},[r("div",{staticClass:"leftImg"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+e.poster,expression:"`${config.IMG_URL.default}${item.poster}`"}],staticClass:"flexNewsImg",attrs:{alt:""}})]),t._v(" "),r("div",{staticClass:"rightConts pl15"},[r("nuxt-link",{staticClass:"block contWrap",attrs:{to:"/newsDetail/"+e.id}},[r("div",{staticClass:"fs14 f500 c-333 oneLine"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),r("div",{staticClass:"c-666 fs12 twoLine conts pt10"},[t._v("\n                    "+t._s(e.description)+"\n                  ")]),t._v(" "),r("div",{staticClass:"pt10 fs12 c-999 pb5"},[t._v("\n                    "+t._s(t.$changeTime(e.createTime,"YYYY-MM-DD"))+"\n                  ")])])],1)])})),0)])])],1)]):t._e(),t._v(" "),r("div",{staticClass:"tipsWraps"},[r("div",{staticClass:"container pt72 pb60"},[r("div",{staticClass:"tipsConts pt50"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1642),expression:"require('@/assets/images/schoolMeet/quotes.png')"}],staticClass:"tipsImg"}),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"pt30 pb5 textCenter fs16 f500 c-333 lastTitle"},[t._v("\n      艾思云课堂希望通过开展全国高等院校公益性宣讲活动，可以丰富高等院校校园文化生活，调动高校师生参加知识讲座的积极性，并帮助解决论文写作与发表的难题：\n    ")]),t._v(" "),r("div",{staticClass:"flexList"},[r("div",{staticClass:"listInner bg-fff mt20 pl24 pr24 pt13"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1643),expression:"require(`@/assets/images/schoolMeet/icon_01.png`)"}],staticClass:"vMiddle",attrs:{alt:""}}),t._v(" "),r("div",{staticClass:"vMiddle inlineBlock fs14 f500 pb10"},[t._v("\n          论文从初稿撰写、修改稿件、论文定稿的全过程解析\n        ")])]),t._v(" "),r("div",{staticClass:"listInner bg-fff mt20 pl24 pr24 pt13"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1644),expression:"require(`@/assets/images/schoolMeet/icon_02.png`)"}],staticClass:"vMiddle",attrs:{alt:""}}),t._v(" "),r("div",{staticClass:"vMiddle inlineBlock fs14 f500 pb10"},[t._v("\n          高校教授从百余篇论文发表经验中总结的论文投稿与发表技巧\n        ")])]),t._v(" "),r("div",{staticClass:"listInner bg-fff mt20 pl24 pr24 pt13"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1645),expression:"require(`@/assets/images/schoolMeet/icon_03.png`)"}],staticClass:"vMiddle",attrs:{alt:""}}),t._v(" "),r("div",{staticClass:"vMiddle inlineBlock fs14 f500 pb10"},[t._v("\n          了解投稿流程，学会有效选择适合的期刊\n        ")])]),t._v(" "),r("div",{staticClass:"listInner bg-fff mt20 pl24 pr24 pt13"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1646),expression:"require(`@/assets/images/schoolMeet/icon_04.png`)"}],staticClass:"vMiddle",attrs:{alt:""}}),t._v(" "),r("div",{staticClass:"vMiddle inlineBlock fs14 f500 pb10"},[t._v("\n          掌握正确与期刊审稿人、编辑交流的方法\n        ")])])]),t._v(" "),r("div",{staticClass:"pt25 pb40"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1647),expression:"require(`@/assets/images/schoolMeet/cooperation1.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"fs20 f600 inlineBlock vMiddle c-333 pl5"},[t._v("合作申请")])]),t._v(" "),r("a-row",{attrs:{type:"flex",gutter:27}},[r("a-col",{attrs:{span:12}},[r("div",{staticClass:"bg-fff wrapItem pl23 pr23"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1648),expression:"require(`@/assets/images/schoolMeet/cooperation_1.png`)"}],staticClass:"topIcon"}),t._v(" "),r("div",{staticClass:"borderBottom pl85"},[r("div",{staticClass:"fs20 c-333 f600 pt12 pb10"},[t._v("\n              活动申请\n            ")]),t._v(" "),r("div",{staticClass:"fs14 c-333"},[r("span",{staticClass:"f500"},[t._v("艾思科蓝:")]),t._v("\n              承担活动经费、提供演讲导师并负责活动组织\n            ")]),t._v(" "),r("div",{staticClass:"fs14 c-333 pt5 pb15"},[r("span",{staticClass:"f500"},[t._v("高校:")]),t._v("\n              提供可容纳100人以上的活动场地，组织不少于100名师生参加讲座\n            ")])]),t._v(" "),r("div",{staticClass:"pl85 pt15 pb42"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1649),expression:"require(`@/assets/images/schoolMeet/qrcode_1.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("div",{staticClass:"inlineBlock vMiddle pl32"},[r("div",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1650),expression:"require(`@/assets/images/schoolMeet/icon_05.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"inlineBlock vMiddle fs14 c-333 f500 ml8"},[t._v("朱老师 18102514736")])]),t._v(" "),r("div",{staticClass:"pt15"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1651),expression:"require(`@/assets/images/schoolMeet/icon_06.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"inlineBlock vMiddle fs14 c-333 f500 ml8"},[t._v("zhushihui@ais.cn")])]),t._v(" "),r("div",{staticClass:"pt15"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1652),expression:"require(`@/assets/images/schoolMeet/icon_07.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"inlineBlock vMiddle fs14 c-333 f500 ml8"},[t._v("扫码添加老师了解详情吧")])])])])])]),t._v(" "),r("a-col",{attrs:{span:12}},[r("div",{staticClass:"bg-fff wrapItem pl23 pr23"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1653),expression:"require(`@/assets/images/schoolMeet/cooperation_2.png`)"}],staticClass:"topIcon"}),t._v(" "),r("div",{staticClass:"borderBottom pl85"},[r("a-row",{staticClass:"pt12 pb10",attrs:{type:"flex",align:"middle"}},[r("a-col",{attrs:{span:12}},[r("div",{staticClass:"fs20 c-333 f600"},[t._v("\n                  导师申请\n                ")])]),t._v(" "),r("a-col",{attrs:{span:12}},[r("div",{staticClass:"textRight"},[r("a",{staticClass:"toApplyFor fs14 f500",attrs:{href:t.config.LINK.ais_pc+"/peerReview/joinIndex",target:"_blank"}},[t._v("去申请\n                    "),r("a-icon",{staticClass:"toAppayIcon",attrs:{type:"double-right"}})],1)])])],1),t._v(" "),r("div",{staticClass:"fs14 c-333 pb15"},[t._v("\n              我们诚邀您加入艾思云课堂讲师队伍，让您的知识和经验传递给更多科研人 添加下方微信，备注\n              "),r("span",{staticClass:"c-bbe"},[t._v("“导师”")]),t._v("\n              咨询,或直接去导师招募申请吧\n            ")])],1),t._v(" "),r("div",{staticClass:"pl85 pt17 pb19"},[r("div",{staticClass:"inlineBlock vMiddle"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1654),expression:"require(`@/assets/images/schoolMeet/qrcode_2.png`)"}],staticClass:"block"}),t._v(" "),r("div",{staticClass:"textCenter c-333 f500 pt5"},[t._v("\n                理科老师二维码\n              ")])]),t._v(" "),r("div",{staticClass:"inlineBlock vMiddle ml100"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1655),expression:"require(`@/assets/images/schoolMeet/qrcode_4.png`)"}],staticClass:"block",staticStyle:{margin:"0 auto"},attrs:{width:"109px"}}),t._v(" "),r("div",{staticClass:"textCenter c-333 f500 pt5"},[t._v("\n                人文社科老师二维码\n              ")])])])])])],1),t._v(" "),r("div",{staticClass:"pt17 pb17"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1656),expression:"require(`@/assets/images/schoolMeet/school.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"fs20 f600 inlineBlock vMiddle c-333 pl5"},[t._v("名校大牛导师")])]),t._v(" "),r("div",{staticClass:"thinkTankWrap"},t._l(t.thinkTankData,(function(t,e){return r("div",{key:e,staticClass:"thankItem"},[r("ThinkTankCard",{attrs:{data:t}})],1)})),0),t._v(" "),r("div",{staticClass:"pt50 pb20"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1657),expression:"require(`@/assets/images/schoolMeet/cooperation.png`)"}],staticClass:"vMiddle"}),t._v(" "),r("span",{staticClass:"fs20 f600 inlineBlock vMiddle c-333 pl5"},[t._v("合作高校")])]),t._v(" "),r("div",{staticClass:"cooperationWrap"},[r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1658),expression:"require(`@/assets/images/schoolMeet/cooperation_01.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1659),expression:"require(`@/assets/images/schoolMeet/cooperation_02.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1660),expression:"require(`@/assets/images/schoolMeet/cooperation_03.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1661),expression:"require(`@/assets/images/schoolMeet/cooperation_04.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1662),expression:"require(`@/assets/images/schoolMeet/cooperation_05.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1663),expression:"require(`@/assets/images/schoolMeet/cooperation_06.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1664),expression:"require(`@/assets/images/schoolMeet/cooperation_07.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1665),expression:"require(`@/assets/images/schoolMeet/cooperation_08.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg padding-0 textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1666),expression:"require(`@/assets/images/schoolMeet/cooperation_09.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg padding-0 textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1667),expression:"require(`@/assets/images/schoolMeet/cooperation_10.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg padding-0 textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1668),expression:"require(`@/assets/images/schoolMeet/cooperation_11.png`)"}]})]),t._v(" "),r("div",{staticClass:"cooperationImg padding-0 textCenter"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(1669),expression:"require(`@/assets/images/schoolMeet/cooperation_12.png`)"}]})])])],1)],1)}),r,!1,null,"376c3508",null));e.default=k.exports}}]);