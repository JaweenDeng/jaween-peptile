(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1052:function(t,e,n){"use strict";var r={data:function(){return{pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["5","10","15","20","30","40"],showTotal:function(t){return" 共".concat(t,"条")}}}},methods:{resetPage:function(){this.pagination.current=1,this.pagination.total=0},handleTableChange:function(t){this.pagination=t,this.getListHand&&this.getListHand()},handlePaginatChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getListHand&&this.getListHand(),this.$backScrollTop()},setTotalHandle:function(data,t,e){this.pagination.total=+data.data.total,this.pagination.total&&!data.data[t].length?(this.pagination.current=this.pagination.current-1,this.getListHand&&this.getListHand()):e()}}},c=n(18),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},1060:function(t,e,n){"use strict";n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return d})),n.d(e,"o",(function(){return f})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return h})),n.d(e,"m",(function(){return m})),n.d(e,"a",(function(){return _})),n.d(e,"l",(function(){return C})),n.d(e,"n",(function(){return y})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return S})),n.d(e,"c",(function(){return k})),n.d(e,"e",(function(){return x})),n.d(e,"b",(function(){return T})),n.d(e,"i",(function(){return D})),n.d(e,"g",(function(){return L})),n.d(e,"f",(function(){return P})),n.d(e,"s",(function(){return z})),n.d(e,"r",(function(){return O}));var r=n(19),c=n(30),o=n.n(c),l=function(){return r.a.post("/school/study/statistics")},d=function(t){return r.a.post("/school/study/list",o.a.stringify(t))},f=function(t){return r.a.post("/school/favorite/list",o.a.stringify(t))},v=function(t){return r.a.post("/school/study/courses",o.a.stringify(t))},h=function(t){return r.a.post("/school/student/trade/list",o.a.stringify(t))},m=function(t){return r.a.post("/school/student/trade/pay/".concat(t))},_=function(t){return r.a.post("/school/student/trade/cancel/".concat(t))},C=function(t){return r.a.post("/school/train/trade/list",o.a.stringify(t))},y=function(t){var e=t.courseId,n=t.type;return r.a.post("/school/study/cert/".concat(e,"/").concat(n),{},{responseType:"blob"})},w=function(){return r.a.post("/school/lecturer/clock/role")},S=function(){return r.a.post("/school/lecturer/clock/index")},k=function(t){return r.a.post("/school/lecturer/clock/course/list",o.a.stringify(t))},x=function(t){return r.a.post("/school/lecturer/clock/question/list",o.a.stringify(t))},T=function(t){return r.a.post("/school/lecturer/clock/comment/list",o.a.stringify(t))},D=function(t){return r.a.post("/school/lecturer/clock/theme/list/".concat(t))},L=function(t,e){return r.a.post("/school/lecturer/clock/record/list/".concat(t),o.a.stringify(e))},P=function(t){return r.a.post("/school/lecturer/clock/record/detail/".concat(t))},z=function(t,e){return r.a.post("/school/student/course/question/comment/submit/".concat(t),o.a.stringify(e))},O=function(t,e){return r.a.post("/school/student/clock/record/comment/submit/".concat(t),o.a.stringify(e))}},1065:function(t,e,n){},1078:function(t,e,n){t.exports=n.p+"img/icon.14fa948.png"},1079:function(t,e,n){t.exports=n.p+"img/certificateLogo.e264faf.png"},1080:function(t,e,n){t.exports=n.p+"img/studentLogo.415301d.png"},1081:function(t,e,n){t.exports=n.p+"img/arrowDown.5678e9e.png"},1091:function(t,e,n){"use strict";n(1044);var r={props:{height:{type:Number,default:510}}},c=n(18),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"noData pt73 textCenter",style:{"min-height":this.height+"px"}},[e("img",{attrs:{src:n(1097)}}),this._v(" "),e("div",{staticClass:"c-666"},[this._v("\n    暂时没有内容噢~\n  ")])])}),[],!1,null,null,null);e.a=component.exports},1097:function(t,e,n){t.exports=n.p+"img/none.45b2a54.png"},1103:function(t,e,n){"use strict";n(43);var r=n(17),c=n(20),o=n(1060),l={props:{data:{type:Object,required:!0},prosess:{type:Boolean,default:!1},isFavor:{type:Boolean,default:!1}},data:function(){return{config:c.a,currentTime:parseInt((new Date).getTime()/1e3),url:""}},computed:{isDisCount:function(){return this.currentTime>=this.data.discountStart&&this.data.discountEnd>=this.currentTime},isTuan:function(){return this.data.tuanPrice&&this.data.tuanPrice>0&&(!this.livingStatus||"endLiving"!==this.livingStatus.style||this.data.type>1)},livingStatus:function(){return 1===this.data.liveStatus||this.currentTime>this.data.start&&this.data.end>this.currentTime&&3!==this.data.type?{title:"直播中",style:"living"}:this.data.start-this.currentTime<900&&this.data.start-this.currentTime>0&&3!==this.data.type?{title:"即将开始",style:"willStart"}:this.currentTime>this.data.end&&1===this.data.type?{title:"已结束",style:"endLiving"}:null},realPrice:function(){return this.data.tuanPrice>0?this.data.tuanPrice:this.isDisCount?this.data.discountPrice:this.data.price}},methods:{preview:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var data,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(o.n)({courseId:t,type:e});case 2:data=r.sent,c=new Blob([data.data]),l=URL.createObjectURL(c),n.url=l;case 6:case"end":return r.stop()}}),r)})))()},save:function(){var a=document.createElement("a");a.download="毕业证书.png",a.href=this.url,a.click()}}},d=(n(1104),n(18)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"courseCardWrap"},[r("div",{staticClass:"page hand"},[r("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"/courseDetail/"+t.data.id}}),t._v(" "),r("div",{staticClass:"imgWrap"},[!t.prosess&&t.data.scene>1&&t.livingStatus?r("div",{class:["fs12","f500","textCenter","c-fff",t.livingStatus.style]},["living"===t.livingStatus.style?r("img",{staticClass:"icon",attrs:{src:n(1078)}}):t._e(),t._v(" "),r("span",{class:{ml15:"living"===t.livingStatus.style}},[t._v(t._s(t.livingStatus.title))])]):t._e(),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"})]),t._v(" "),r("div",{staticClass:"content pl15 pr15 pb10 pt10"},[r("div",{class:["c-333",{f600:!t.isFavor},{fs12:t.isFavor},"twoLine","title","mt5"]},[t.data.period>0?r("span",{staticClass:"period"},[t._v("第"+t._s(t.data.period)+"期")]):t._e(),t._v(" "),r("span",[t._v(t._s(t.data.name))])]),t._v(" "),r("div",{staticClass:"c-999 fs12 oneLine mt5"},[t._v("\n        "+t._s(t.data.description)+"\n      ")]),t._v(" "),t._t("bottom",[r("div",{staticClass:"handle"},[t.prosess?t._e():r("div",{staticClass:"w100"},[0===t.data.price?r("span",{staticClass:"fs18 nowprice f600"},[t._v("免费")]):r("span",{staticClass:"fs18 nowprice f600"},[t._v(t._s(t.realPrice)+"元")]),t._v(" "),t.isTuan?r("span",{staticClass:"fakePrice fs12 c-666 ml6"},[t._v("¥"+t._s(t.isDisCount?t.data.discountPrice:t.data.price))]):t.isDisCount?r("span",{staticClass:"fakePrice fs12 c-666 ml6"},[t._v("¥"+t._s(t.data.price))]):t._e(),t._v(" "),t._t("label",[t.isTuan?r("span",{staticClass:"ml6 fs12 limitTuan"},[t._v("限时拼团")]):t.isDisCount?r("span",{staticClass:"ml6 fs12 limitDiscount"},[t._v("限时优惠")]):t._e()]),t._v(" "),r("span",{staticClass:"c-666 fs12 rightStatus"},[t._v(t._s(t.data.studyNumber)+"人"+t._s(0===t.data.price?"学习":"购买"))])],2),t._v(" "),t.prosess&&1===t.data.scene?r("div",{staticClass:"processWrap"},[r("div",{staticClass:"fs12 c-999 processTitle"},[t._v("\n              学习进度\n            ")]),t._v(" "),r("a-progress",{staticClass:"process ml16",attrs:{percent:t.data.progress,size:"small"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"certificate"},[(2&t.data.cert)>0?r("div",{staticClass:"certificateBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,2)}}},[r("img",{attrs:{src:n(1079),alt:"毕业证书"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("毕业证书")])]):t._e(),t._v(" "),(1&t.data.cert)>0?r("div",{staticClass:"certificateBtn studentBtn",on:{click:function(e){return e.stopPropagation(),t.preview(t.data.id,1)}}},[r("img",{attrs:{src:n(1080),alt:"优秀学员"}}),t._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("优秀学员")])]):t._e()])])],2)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],staticClass:"layout"},[r("div",[r("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.url=""}}},[r("a-icon",{staticStyle:{fontSize:"30px",color:"#fff"},attrs:{type:"close-circle"}})],1),t._v(" "),r("img",{attrs:{src:t.url,alt:"毕业证书"}})]),t._v(" "),r("a-button",{staticClass:"mt20",attrs:{shape:"round"}},[r("div",{staticClass:"save",on:{click:t.save}},[r("img",{attrs:{src:n(1081),alt:""}}),t._v(" "),r("span",{staticClass:"ml5",staticStyle:{color:"#4571FF"}},[t._v("点击保存")])])])],1)])}),[],!1,null,"5e559ba8",null);e.a=component.exports},1104:function(t,e,n){"use strict";var r=n(1065);n.n(r).a},1343:function(t,e,n){},1720:function(t,e,n){"use strict";var r=n(1343);n.n(r).a},2201:function(t,e,n){"use strict";n.r(e);n(44),n(32),n(43);var r=n(17),c=n(1052),o=n(1060),l=n(1103),d=n(1091),f={components:{CourseCard:l.a,NoData:d.a},mixins:[c.a],data:function(){return{statistics:{},tableData:[]}},mounted:function(){this.$set(this.pagination,"pageSize",9),this.getStudyStatistics(),this.getListHand()},methods:{getStudyStatistics:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.q)();case 2:n=e.sent,0===(data=n.data).code&&(t.statistics=data.data);case 5:case"end":return e.stop()}}),e)})))()},getListHand:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:t.pagination.current,pageSize:t.pagination.pageSize},e.next=3,Object(o.p)(n);case 3:r=e.sent,0===(data=r.data).code&&t.setTotalHandle(data,"entries",(function(){t.tableData=data.data.entries}));case 6:case"end":return e.stop()}}),e)})))()}}},v=(n(1720),n(18)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lastStudy pb20"},[n("div",{staticClass:"headerWrap"},[n("div",{staticClass:"headerItem"},[n("div",{staticClass:"c-fe f500"},[t._v("\n        上次学习\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"fs30",staticStyle:{color:"#0091FF"}},[t._v(t._s(Math.ceil(t.statistics.lastStudy/60)||0))]),t._v(" "),n("span",{staticClass:"c-999 ml5"},[t._v("分钟")])])]),t._v(" "),n("div",{staticClass:"headerItem ml12 headerItem_all"},[n("div",{staticClass:"c-fe f500"},[t._v("\n        累计学习\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"fs30",staticStyle:{color:"#ED3833"}},[t._v(t._s(t.statistics.days||0))]),t._v(" "),n("span",{staticClass:"c-999 ml5"},[t._v("天")])])]),t._v(" "),n("div",{staticClass:"headerItem ml12 headerItem_course"},[n("div",{staticClass:"c-fe f500"},[t._v("\n        课程学习\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"fs30",staticStyle:{color:"#57A101"}},[t._v(t._s(t.statistics.complete||0))]),t._v(" "),n("span",{staticClass:"c-999 ml5"},[t._v("个")])])])]),t._v(" "),n("div",{staticClass:"content mt15"},[n("div",{staticClass:"c-333 pb9 title"},[t._v("\n      最近学习\n    ")]),t._v(" "),t.tableData.length?n("div",[n("div",{staticClass:"cardWrap"},t._l(t.tableData,(function(t,e){return n("a",{key:e,staticClass:"CourseCard",attrs:{href:"/courseDetail/"+t.id,target:"_blank"}},[n("CourseCard",{attrs:{data:t,prosess:""}})],1)})),0),t._v(" "),n("div",{staticClass:"textCenter mt40"},[n("a-pagination",{attrs:{showSizeChanger:"",showQuickJumper:"",current:t.pagination.current,total:t.pagination.total,pageSize:t.pagination.pageSize,pageSizeOptions:["9","18","27","36"],showTotal:function(t){return" 共"+t+"条"}},on:{change:t.handlePaginatChange,showSizeChange:t.handlePaginatChange}})],1)]):n("NoData",{attrs:{height:380}})],1)])}),[],!1,null,"ed9a173a",null);e.default=component.exports}}]);