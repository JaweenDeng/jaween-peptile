(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1067:function(t,e,n){"use strict";n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return d})),n.d(e,"o",(function(){return f})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return _})),n.d(e,"m",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"l",(function(){return C})),n.d(e,"n",(function(){return y})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return k})),n.d(e,"e",(function(){return T})),n.d(e,"b",(function(){return O})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return I})),n.d(e,"f",(function(){return L})),n.d(e,"s",(function(){return S})),n.d(e,"r",(function(){return M}));var r=n(19),c=n(31),o=n.n(c),l=function(){return r.a.post("/school/study/statistics")},d=function(t){return r.a.post("/school/study/list",o.a.stringify(t))},f=function(t){return r.a.post("/school/favorite/list",o.a.stringify(t))},v=function(t){return r.a.post("/school/study/courses",o.a.stringify(t))},_=function(t){return r.a.post("/school/student/trade/list",o.a.stringify(t))},m=function(t){return r.a.post("/school/student/trade/pay/".concat(t))},h=function(t){return r.a.post("/school/student/trade/cancel/".concat(t))},C=function(t){return r.a.post("/school/train/trade/list",o.a.stringify(t))},y=function(t){var e=t.courseId,n=t.type;return r.a.post("/school/study/cert/".concat(e,"/").concat(n),{},{responseType:"blob"})},w=function(){return r.a.post("/school/lecturer/clock/role")},x=function(){return r.a.post("/school/lecturer/clock/index")},k=function(t){return r.a.post("/school/lecturer/clock/course/list",o.a.stringify(t))},T=function(t){return r.a.post("/school/lecturer/clock/question/list",o.a.stringify(t))},O=function(t){return r.a.post("/school/lecturer/clock/comment/list",o.a.stringify(t))},j=function(t){return r.a.post("/school/lecturer/clock/theme/list/".concat(t))},I=function(t,e){return r.a.post("/school/lecturer/clock/record/list/".concat(t),o.a.stringify(e))},L=function(t){return r.a.post("/school/lecturer/clock/record/detail/".concat(t))},S=function(t,e){return r.a.post("/school/student/course/question/comment/submit/".concat(t),o.a.stringify(e))},M=function(t,e){return r.a.post("/school/student/clock/record/comment/submit/".concat(t),o.a.stringify(e))}},1072:function(t,e,n){},1085:function(t,e,n){t.exports=n.p+"img/icon.14fa948.png"},1086:function(t,e,n){t.exports=n.p+"img/certificateLogo.e264faf.png"},1087:function(t,e,n){t.exports=n.p+"img/studentLogo.415301d.png"},1088:function(t,e,n){t.exports=n.p+"img/arrowDown.5678e9e.png"},1089:function(t,e,n){},1110:function(t,e,n){"use strict";n(44);var r=n(17),c=n(20),o=n(1067),l={props:{data:{type:Object,required:!0},prosess:{type:Boolean,default:!1},isFavor:{type:Boolean,default:!1}},data:function(){return{config:c.a,currentTime:parseInt((new Date).getTime()/1e3),url:""}},computed:{isDisCount:function(){return this.currentTime>=this.data.discountStart&&this.data.discountEnd>=this.currentTime},isTuan:function(){return this.data.tuanPrice&&this.data.tuanPrice>0&&(!this.livingStatus||"endLiving"!==this.livingStatus.style||3===this.data.type)},livingStatus:function(){return 1===this.data.liveStatus||this.currentTime>this.data.start&&this.data.end>this.currentTime&&3!==this.data.type?{title:"直播中",style:"living"}:this.data.start-this.currentTime<900&&this.data.start-this.currentTime>0&&3!==this.data.type?{title:"即将开始",style:"willStart"}:this.currentTime>this.data.end&&1===this.data.type?{title:"已结束",style:"endLiving"}:null},realPrice:function(){return this.data.tuanPrice>0?this.data.tuanPrice:this.isDisCount?this.data.discountPrice:this.data.price}},methods:{preview:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var data,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(o.n)({courseId:t,type:e});case 2:data=r.sent,c=new Blob([data.data]),l=URL.createObjectURL(c),n.url=l;case 6:case"end":return r.stop()}}),r)})))()},save:function(){var a=document.createElement("a");a.download="毕业证书.png",a.href=this.url,a.click()}}},d=(n(1111),n(18)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"courseCardWrap"},[r("div",{staticClass:"page hand"},[r("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"/courseDetail/"+t.data.id}}),t._v(" "),r("div",{staticClass:"imgWrap"},[!t.prosess&&t.data.scene>1&&t.livingStatus?r("div",{class:["fs12","f500","textCenter","c-fff",t.livingStatus.style]},["living"===t.livingStatus.style?r("img",{staticClass:"icon",attrs:{src:n(1085)}}):t._e(),t._v(" "),r("span",{class:{ml15:"living"===t.livingStatus.style}},[t._v(t._s(t.livingStatus.title))])]):t._e(),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"})]),t._v(" "),r("div",{staticClass:"content pl15 pr15 pb10 pt10"},[r("div",{class:["c-333",{f600:!t.isFavor},{fs12:t.isFavor},"twoLine","title","mt5"]},[t.data.period>0?r("span",{staticClass:"period"},[t._v("第"+t._s(t.data.period)+"期")]):t._e(),t._v(" "),r("span",[t._v(t._s(t.data.name))])]),t._v(" "),r("div",{staticClass:"c-999 fs12 oneLine mt5"},[t._v("\n        "+t._s(t.data.description)+"\n      ")]),t._v(" "),t._t("bottom",[r("div",{staticClass:"handle"},[t.prosess?t._e():r("div",{staticClass:"w100"},[0===t.data.price?r("span",{staticClass:"fs18 nowprice f600"},[t._v("免费")]):r("span",{staticClass:"fs18 nowprice f600"},[t._v(t._s(t.realPrice)+"元")]),t._v(" "),t.isTuan?r("span",{staticClass:"fakePrice fs12 c-666 ml6"},[t._v("¥"+t._s(t.isDisCount?t.data.discountPrice:t.data.price))]):t.isDisCount?r("span",{staticClass:"fakePrice fs12 c-666 ml6"},[t._v("¥"+t._s(t.data.price))]):t._e(),t._v(" "),t._t("label",[t.isTuan?r("span",{staticClass:"ml6 fs12 limitTuan"},[t._v("限时拼团")]):t.isDisCount?r("span",{staticClass:"ml6 fs12 limitDiscount"},[t._v("限时优惠")]):t._e()]),t._v(" "),r("span",{staticClass:"c-666 fs12 rightStatus"},[t._v(t._s(t.data.studyNumber)+"人"+t._s(0===t.data.price?"学习":"购买"))])],2),t._v(" "),t.prosess&&1===t.data.scene?r("div",{staticClass:"processWrap"},[r("div",{staticClass:"fs12 c-999 processTitle"},[t._v("\n              学习进度\n            ")]),t._v(" "),r("a-progress",{staticClass:"process ml16",attrs:{percent:t.data.progress,size:"small"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"certificate"},[(2&t.data.cert)>0?r("div",{staticClass:"certificateBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,2)}}},[r("img",{attrs:{src:n(1086),alt:"毕业证书"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("毕业证书")])]):t._e(),t._v(" "),(1&t.data.cert)>0?r("div",{staticClass:"certificateBtn studentBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,1)}}},[r("img",{attrs:{src:n(1087),alt:"优秀学员"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("优秀学员")])]):t._e()])])],2)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"layout"},[r("div",[r("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.url=""}}},[r("a-icon",{staticStyle:{fontSize:"30px",color:"#fff"},attrs:{type:"close-circle"}})],1),t._v(" "),r("img",{attrs:{src:t.url,alt:"毕业证书"}})]),t._v(" "),r("a-button",{staticClass:"mt20",attrs:{shape:"round"}},[r("div",{staticClass:"save",on:{click:t.save}},[r("img",{attrs:{src:n(1088),alt:""}}),t._v(" "),r("span",{staticClass:"ml5",staticStyle:{color:"#4571FF"}},[t._v("点击保存")])])])],1)])}),[],!1,null,"1d8d3a2b",null);e.a=component.exports},1111:function(t,e,n){"use strict";var r=n(1072);n.n(r).a},1119:function(t,e,n){},1120:function(t,e,n){t.exports=n.p+"img/right-circle.55fe38a.png"},1121:function(t,e,n){},1136:function(t,e,n){"use strict";var r={props:{data:{type:Object,required:!0},showMore:{type:Boolean,default:!0}}},c=(n(1141),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"indexTitle"},[r("div",[t._t("icon"),t._v(" "),r("span",{staticClass:"c-333 f600 fs20 inlineBlock vMiddle title"},[t._v(t._s(t.data.title))])],2),t._v(" "),t.showMore?r("nuxt-link",{attrs:{to:t.data.path||"/allCourse"}},[r("span",{staticClass:"fs12 link"},[t._v("查看更多")]),t._v(" "),r("img",{staticClass:"img",attrs:{src:n(1120)}})]):t._e()],1)}),[],!1,null,"12c658fc",null);e.a=component.exports},1141:function(t,e,n){"use strict";var r=n(1089);n.n(r).a},1243:function(t,e,n){"use strict";var r=n(1119);n.n(r).a},1244:function(t,e,n){"use strict";var r=n(1121);n.n(r).a},1281:function(t,e,n){"use strict";var r=n(20),c={props:{data:{type:Array,required:!0}},data:function(){return{config:r.a}},methods:{jump:function(t){this.$refs.bannerCarousel.goTo(t)}}},o=(n(1243),n(18)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"page"},[n("a-carousel",{ref:"bannerCarousel",attrs:{arrows:"",autoplay:"",autoplaySpeed:3500},scopedSlots:t._u([{key:"customPaging",fn:function(e){return n("div",{on:{mouseenter:function(n){return t.jump(e.i)}}},[n("button")])}}],null,!1,3750172634)},[n("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"25px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[n("a-icon",{attrs:{type:"left-circle"}})],1),t._v(" "),n("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"25px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[n("a-icon",{attrs:{type:"right-circle"}})],1),t._v(" "),t._l(t.data,(function(e,r){return n("div",{key:r},[e.redirectUrl?n("a",{attrs:{href:e.redirectUrl,target:"_blank"}},[n("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})]):n("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})])}))],2)],1):t._e()}),[],!1,null,"8aa1b0ca",null);e.a=component.exports},1283:function(t,e,n){"use strict";var r=n(20),c={props:{data:{type:Object,required:!0}},data:function(){return{config:r.a}}},o=(n(1244),n(18)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"CourseCard",attrs:{href:"/promoteDetail/"+t.data.id,target:"_blank"}},[n("div",{staticClass:"page"},[n("div",{staticClass:"imgWrap"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"})]),t._v(" "),n("div",{staticClass:"content pl15 pr15 pb10 pt5"},[n("div",{staticClass:"title c-333 twoLine"},[t._v("\n        "+t._s(t.data.name)+"\n      ")]),t._v(" "),2===t.data.type?n("div",{staticClass:"c-999 fs12 oneLine mt5"},[t._v("\n        "+t._s(t.data.description)+"\n      ")]):t._e(),t._v(" "),2===t.data.type?n("div",{staticClass:"handle mt15"},[t.data.price?n("span",{staticClass:"fs18 nowprice f600"},[t._v("¥"+t._s(t.data.price))]):n("span",{staticClass:"fs18 nowprice f600"},[t._v("免费")]),t._v(" "),n("div",{staticClass:"c-666 fs12 rightStatus"},[t._v("\n          "+t._s(t.data.studyNumber)+"人"+t._s(t.data.price?"购买":"报名")+"\n        ")])]):1===t.data.type?n("div",{staticClass:"mt15 apply"},[t._v("\n        申请匹配\n      ")]):t._e()])])])}),[],!1,null,"1871e801",null);e.a=component.exports},1523:function(t,e,n){},1524:function(t,e,n){},1525:function(t,e,n){},1526:function(t,e,n){},2179:function(t,e,n){"use strict";var r=n(1523);n.n(r).a},2180:function(t,e,n){t.exports=n.p+"img/play.7e7341b.png"},2181:function(t,e,n){t.exports=n.p+"img/liveIcon.8e6fcfb.png"},2182:function(t,e,n){"use strict";var r=n(1524);n.n(r).a},2183:function(t,e,n){"use strict";var r=n(1525);n.n(r).a},2184:function(t,e,n){},2185:function(t,e,n){"use strict";var r=n(1526);n.n(r).a},2191:function(t,e,n){"use strict";n.r(e);n(76),n(45),n(54);var r=n(33),c=n(109),o=(n(42),n(110),n(30),n(44),n(17)),l=n(1281),d=n(1136),f=n(1110),v=n(1283),_={components:{IndexTitle:d.a,CourseCard:f.a,BackgroundCard:v.a},props:{data:{type:Object,required:!0}}},m=(n(2179),n(18)),h=Object(m.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.data&&t.data.data.length>0?n("div",[n("IndexTitle",{attrs:{data:{title:t.data.title,path:t.data.path},showMore:t.data.showMore}}),t._v(" "),n("div",{staticClass:"cardWrap"},[t._l(t.data.data.slice(0,t.data.index||8),(function(e,r){return["/promote/scientificGroup"===t.data.path?n("BackgroundCard",{key:r,staticClass:"mt40",attrs:{data:e}}):n("a",{key:r,class:["mt30","CourseCard"],attrs:{href:"/courseDetail/"+e.id,target:"_blank"}},[n("CourseCard",{attrs:{data:e}})],1)]}))],2)],1):t._e()}),[],!1,null,"6615e352",null).exports,C=n(139),y=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:n(2181)}})])}],w=n(20),x={props:{data:{type:Object,required:!0}},data:function(){return{config:w.a,currentTime:parseInt((new Date).getTime()/1e3)}},computed:{courseTime:function(){return 1===this.data.scene?"":"".concat(this.$changeTime(this.data.start,"MM月DD日")," ").concat(this.$changeTime(this.data.start,"HH:mm"),"-").concat(this.$changeTime(this.data.end,"HH:mm"))},livingStatus:function(){return 1===this.data.scene?{title:"观看回放",style:"report"}:1===this.data.liveStatus||this.currentTime>this.data.start&&this.data.end>this.currentTime?{title:"观看直播",style:"living"}:this.data.start-this.currentTime>0?{title:"即将开始",style:"willStart"}:this.currentTime>this.data.end?{title:"已结束",style:"endLiving"}:{}}}},k=(n(2182),Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"CourseLiveCard",attrs:{href:"/courseDetail/"+t.data.id,target:"_blank"}},[r("div",{staticClass:"flexBox"},[r("div",{staticClass:"imgWrap"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"}),t._v(" "),r("img",{staticClass:"playIcon",attrs:{src:n(2180)}})]),t._v(" "),r("div",{staticClass:"c-333 f500 breakAll ml15 name twoLine"},[t._v("\n      "+t._s(t.data.name)+"\n    ")])]),t._v(" "),r("div",{staticClass:"mt10 fs12 wrap"},[t.courseTime?[t._m(0),t._v(" "),r("div",{staticClass:"ml5 courseTime"},[t._v("\n        "+t._s(t.courseTime)+"\n      ")])]:r("div",{staticClass:"oneLine c-333 description"},[t._v("\n      "+t._s(t.data.description)+"\n    ")]),t._v(" "),r("span",{class:[t.courseTime?"ml10":"ml30","c-666"]},[t._v("\n      "+t._s(t.data.studyNumber+"人"+(t.data.price?"购买":"报名"))+"\n    ")]),t._v(" "),Object.keys(t.livingStatus).length?r("div",{class:["statusBtn",t.livingStatus.style]},[t._v("\n      "+t._s(t.livingStatus.title)+"\n    ")]):t._e()],2)])}),y,!1,null,"6bf9acd8",null).exports),T={components:{IndexTitle:d.a,CourseLiveCard:k,CourseCard:f.a},props:{data:{type:Object,required:!0}}},O=(n(2183),Object(m.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data&&t.data.data.length?n("div",[t._t("indexTitle",[n("IndexTitle",{attrs:{data:{title:t.data.title},showMore:t.data.showMore}})]),t._v(" "),n("a-carousel",{attrs:{arrows:"",autoplay:"",dotsClass:"dotsClass",autoplaySpeed:5e3}},t._l(t.data.data,(function(e,r){return n("div",{key:r},[n("div",{class:["wrap",{wrapOther:"CourseCard"===t.data.component}]},[t._l(e,(function(e){return[n("a",{key:e.id,staticClass:"ml13 mr13 comWrap",attrs:{href:"/courseDetail/"+e.id,target:"_blank"}},[n(t.data.component,{key:e.id,tag:"component",attrs:{data:e}},["CourseCard"===t.data.component?n("div",{staticClass:"ml6 fs12 limitDiscount",attrs:{slot:"label"},slot:"label"},[t._v("\n                限时免费\n              ")]):t._e()])],1)]}))],2)])})),0)],2):t._e()}),[],!1,null,"0eb8fff1",null).exports),j=n(43);n(2184);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{IndexBanner:l.a,IndexCourse:h,IndexCourseLive:O,IndexTitle:d.a},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,r,data,o,l,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t,e){return new Promise((function(n){t(e).then((function(t){n(t)})).catch((function(t){n(t)}))}))},n=function(t,e){return Array.isArray(t)?t.slice(0,e):[]},t.next=4,Promise.all([e(C.f),e(C.h,33),e(C.a,"school_specialArea_pc,school_1V1_pc,school_pc")]);case 4:return r=t.sent,data={},r[0].data&&0===r[0].data.code&&r[0].data.data&&(data=r[0].data.data,4===(o=n(data.column1,4)).length&&(o=[].concat(Object(c.a)(o),Object(c.a)(o)),o=n(o,6)),(l=n(data.column7,8)).length>5&&(l=[].concat(Object(c.a)(l),Object(c.a)(l)),l=n(l,8)),data=L(L({},data),{},{column1:Object(j.arrTrans)(3,o),column2:n(data.column2,8),column3:n(data.column3,6),column4:n(data.column4,4),column5:n(data.column5,4),column6:n(data.column6,8),column7:Object(j.arrTrans)(4,l)})),d={},r[1].data&&0===r[1].data.code&&r[1].data.data&&(d=r[1].data.data.articles),f={},r[2].data&&0===r[2].data.code&&r[2].data.data&&(f=L(L({},f=r[2].data.data),{},{school_1V1_pc:n(f.school_1V1_pc,4),school_specialArea_pc:n(f.school_specialArea_pc,4)})),t.abrupt("return",L({data:data,news:Object(j.arrTrans)(10,d)},f));case 12:case"end":return t.stop()}}),t)})))()},data:function(){return{config:w.a,swiperOptions:{el:".swiper-pagination",clickable:!0,autoplay:!0}}},head:function(){return{title:"学术会议直播_学术在线课堂_学术知识服务平台-艾思云课堂",meta:[{hid:"description",name:"description",content:"艾思云课堂是学术知识服务平台，为科研人员提供包括学术会议直播/点播、SCI论文写作培训、研究方法、学术技能、院士课堂、海外学历教育、网络教育、科研问答等知识服务，帮助科研人员全方位提升科研能力。"},{hid:"keywords",name:"keywords",content:"学术直播,学术交流直播,学术公开课"}]}}},M=(n(2185),Object(m.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerWrap"},[n("IndexBanner",{attrs:{data:t.school_pc}}),t._v(" "),n("div",[n("div",{staticClass:"bg-ECE pt20 pb20"},[n("div",{staticClass:"container wrap_c"},[t.data.column1&&t.data.column1.length?n("IndexCourseLive",{attrs:{data:{title:"直播课程",data:t.data.column1,showMore:!1,component:"CourseLiveCard"}}},[n("div",{staticClass:"liveTitle",attrs:{slot:"indexTitle"},slot:"indexTitle"},[t._v("\n            直播课程\n          ")])]):t._e()],1)]),t._v(" "),n("div",{staticClass:"container pt20 pb30"},[t.data.column2&&t.data.column2.length?n("IndexCourse",{attrs:{data:{title:"精选好课",data:t.data.column2,showMore:!0}}}):t._e()],1),t._v(" "),n("div",{staticClass:"bg-fff pt20 pb30"},[n("div",{staticClass:"container title4"},[t.data.column6&&t.data.column6.length?n("IndexCourse",{attrs:{data:{title:"限时优惠",data:t.data.column5,showMore:!1}}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"pt20 pb30"},[n("div",{staticClass:"container"},[t.data.column4&&t.data.column4.length?n("IndexCourse",{attrs:{data:{title:"体系课",data:t.data.column4,showMore:!1}}}):t._e()],1),t._v(" "),t.school_1V1_pc&&t.school_1V1_pc.length?n("div",{staticClass:"container pt30"},[n("IndexTitle",{attrs:{data:{title:"1v1科研定制"},showMore:!1}}),t._v(" "),n("div",{staticClass:"school_1V1_pc"},[t._l(t.school_1V1_pc,(function(e,r){return[e.redirectUrl?n("a",{key:r,staticClass:"school_1V1_pc_item",attrs:{href:e.redirectUrl,target:"_blank"}},[n("img",{staticClass:"border_5",attrs:{src:""+t.config.IMG_URL.default+e.resource}})]):n("div",{key:r,staticClass:"school_1V1_pc_item"},[n("img",{staticClass:"border_5",attrs:{src:""+t.config.IMG_URL.default+e.resource}})])]}))],2)],1):t._e()]),t._v(" "),n("div",{staticClass:"bg-fff pt20 pb20"},[n("div",{staticClass:"container"},[t.data.column7&&t.data.column7.length?n("IndexCourseLive",{attrs:{data:{title:"集call免费学专栏",data:t.data.column7,showMore:!1,component:"CourseCard"}}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"container pt20 pb30 flexBox"},[t.data.column3&&t.data.column3.length?n("IndexCourse",{staticClass:"flex_1",attrs:{data:{title:"免费专区",data:t.data.column3,showMore:!1}}}):t._e(),t._v(" "),t.school_specialArea_pc&&t.school_specialArea_pc.length?n("div",{staticClass:"school_specialArea_pc"},[n("div",{staticClass:"fs20 f600 c-333 mb15 Indextitle1"},[t._v("\n          活动专区\n        ")]),t._v(" "),t._l(t.school_specialArea_pc,(function(e,r){return[e.redirectUrl?n("a",{key:r,class:["imgWrap",{mt22:r>0}],attrs:{href:e.redirectUrl,target:"_blank"}},[n("img",{staticClass:"border_5",attrs:{src:""+t.config.IMG_URL.default+e.resource}})]):n("div",{key:r,class:["imgWrap",{mt22:r>0}]},[n("img",{staticClass:"border_5",attrs:{src:""+t.config.IMG_URL.default+e.resource}})])]}))],2):t._e()],1),t._v(" "),n("div",{staticClass:"bg-fff pt20 pb30"},[n("div",{staticClass:"container"},[t.data.column6&&t.data.column6.length?n("IndexCourse",{attrs:{data:{title:"高校公益行",data:t.data.column6,showMore:!0,path:"/allCourse?categoryId=7&pageNumber=1"}}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"pt20 pb20"},[n("div",{staticClass:"container"},[n("IndexTitle",{attrs:{data:{title:"学术资讯",path:"/news"}}}),t._v(" "),n("ul",{staticClass:"flexBox pt5"},t._l(t.news,(function(e,r){return n("li",{key:r,staticClass:"newsLi"},t._l(e,(function(e){return n("nuxt-link",{key:e.id,staticClass:"newsList",attrs:{to:"/news/"+e.id}},[n("div",{staticClass:"c-3c4 oneLine title"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("div",{staticClass:"time c-666 fs12"},[t._v("\n                "+t._s(t.$changeTime(e.createTime,"YYYY-MM-DD"))+"\n              ")])])})),1)})),0)],1)])])],1)}),[],!1,null,"4887cfcc",null));e.default=M.exports}}]);