(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1052:function(t,e,n){"use strict";var r={data:function(){return{pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["5","10","15","20","30","40"],showTotal:function(t){return" 共".concat(t,"条")}}}},methods:{resetPage:function(){this.pagination.current=1,this.pagination.total=0},handleTableChange:function(t){this.pagination=t,this.getListHand&&this.getListHand()},handlePaginatChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getListHand&&this.getListHand(),this.$backScrollTop()},setTotalHandle:function(data,t,e){this.pagination.total=+data.data.total,this.pagination.total&&!data.data[t].length?(this.pagination.current=this.pagination.current-1,this.getListHand&&this.getListHand()):e()}}},c=n(18),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},1091:function(t,e,n){"use strict";n(1044);var r={props:{height:{type:Number,default:510}}},c=n(18),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"noData pt73 textCenter",style:{"min-height":this.height+"px"}},[e("img",{attrs:{src:n(1097)}}),this._v(" "),e("div",{staticClass:"c-666"},[this._v("\n    暂时没有内容噢~\n  ")])])}),[],!1,null,null,null);e.a=component.exports},1097:function(t,e,n){t.exports=n.p+"img/none.45b2a54.png"},1325:function(t,e,n){t.exports=n.p+"img/eye.e82c8f8.png"},1326:function(t,e,n){t.exports=n.p+"img/time.b022847.png"},1327:function(t,e,n){},1328:function(t,e,n){t.exports=n.p+"img/hoticon.6d31773.png"},1329:function(t,e,n){},1330:function(t,e,n){},1680:function(t,e,n){t.exports=n.p+"img/good.86fef58.png"},1681:function(t,e,n){"use strict";var r=n(1327);n.n(r).a},1682:function(t,e,n){"use strict";var r=n(1329);n.n(r).a},1683:function(t,e,n){"use strict";var r=n(1330);n.n(r).a},2187:function(t,e,n){"use strict";n.r(e);n(88),n(50),n(63);var r=n(41),c=(n(44),n(32),n(43),n(17)),o=n(137),l=n(20),d={props:{data:{type:Object,required:!0}},data:function(){return{config:l.a}}},h=(n(1681),n(18)),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"newsCard",attrs:{href:"/news/"+t.data.id}},[n("div",{staticClass:"topWrap"},[n("div",{staticClass:"imgWrap"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+t.data.poster,expression:"`${config.IMG_URL.default}${data.poster}`"}],staticClass:"img"})]),t._v(" "),n("div",{staticClass:"pl15 flex_1"},[n("div",{staticClass:"fs16 title oneLine f600"},[t._v("\n        "+t._s(t.data.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"fs12 twoLine des"},[t._v("\n        "+t._s(t.data.description)+"\n      ")]),t._v(" "),t._t("topOther")],2)]),t._v(" "),n("div",{staticClass:"mt5 bottomWrap"},[n("div",{staticClass:"c-666 fs12 time"},[t._v("\n      "+t._s(t.$changeTime(t.data.createTime,"YYYY-MM-DD"))+"\n    ")])])])}),[],!1,null,"31464de4",null).exports,v=[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"hotTitle"},[e("div",{staticClass:"hotH3"},[e("img",{attrs:{src:n(1328),alt:""}}),this._v("\n      热门推荐\n    ")])])}],_={props:{data:{type:Object,required:!0}},data:function(){return{keys:{pc_news_theMeeting:"会议",pc_news_theJournal:"期刊",pc_news_course:"课程"},config:l.a,color:{pc_news_theMeeting:"#6236FF",pc_news_theJournal:"#71BD1A",pc_news_course:"#2B90F7"}}},computed:{initData:function(){var t=this;return Object.keys(this.keys).some((function(p){return t.data&&t.data[p]&&0!==t.data[p].length}))}}},m=(n(1682),Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.initData?n("div",{staticClass:"hotRec"},[t._m(0),t._v(" "),n("div",{staticClass:"hotClass"},t._l(t.data,(function(e,r,c){return n("div",{key:c,staticClass:"hotboxs"},[e&&e.length?t._l(e,(function(e,c){return n("div",{key:c,staticClass:"bannerBox mt30"},[e.redirectUrl?n("a",{attrs:{href:e.redirectUrl,target:"_blank"}},[n("img",{staticClass:"banPic",attrs:{src:""+t.config.IMG_URL.default+e.resource,alt:""}})]):n("img",{staticClass:"banPic",attrs:{src:""+t.config.IMG_URL.default+e.resource,alt:""}}),t._v(" "),n("div",{staticClass:"banThem",style:{background:t.color[r]}},[t._v("\n            "+t._s(t.keys[r])+"\n          ")])])})):t._e()],2)})),0)]):t._e()}),v,!1,null,"2f375d92",null).exports),y=n(1052),w=n(30),C=n.n(w);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{NewsCard:f,HotRecomment:m,NoData:n(1091).a},mixins:[y.a],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d,h,f,v,data,_,m,y,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:1,pageSize:10},e.next=3,Object(o.a)("pc_news_course,pc_news_theJournal,pc_news_theMeeting");case 3:return r=e.sent,c=r.data.data,l=c.pc_news_course,d=c.pc_news_theJournal,h=c.pc_news_theMeeting,e.next=10,Object(o.b)(33);case 10:if(f=e.sent,v=f.data.data.categories,data=[],_=0,m={pc_news_course:l,pc_news_theJournal:d,pc_news_theMeeting:h},y=v[0],t.route.query.categoryId?y=+t.route.query.categoryId:v&&(y=v[0]&&v[0].id?v[0].id:null),t.route.query.pageNumber&&(n.page=+t.route.query.pageNumber),!y){e.next=23;break}return e.next=21,Object(o.d)(y,n);case 21:0===(w=e.sent).data.code&&(data=w.data.data.entries,_=+w.data.data.total);case 23:return e.abrupt("return",{categories:v,advant:m,data:data,total:_,active:{}});case 24:case"end":return e.stop()}}),e)})))()},data:function(){return{categoryId:0}},watch:{$route:function(){this.getListHand()}},mounted:function(){this.$route&&this.$route.query&&(this.active=$({},this.$route.query),this.$route.query.pageNumber&&this.$set(this.pagination,"current",+this.$route.query.pageNumber),this.$route.query.categoryId?this.categoryId=+this.$route.query.categoryId:this.categoryId=this.categories[0]&&this.categories[0].id?this.categories[0].id:0),this.$set(this.pagination,"total",this.total)},methods:{pageChange:function(t){this.active=$($({},this.$route.query),{},{pageNumber:t,categoryId:this.categoryId}),this.$router.push({path:"/news?".concat(C.a.stringify(this.active))}),this.$backScrollTop()},callback:function(t){this.active=$($({},this.$route.query),{},{pageNumber:1,categoryId:t}),this.categoryId=t,this.$router.push({path:"/news?".concat(C.a.stringify(this.active))})},getListHand:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:t.$route.query.pageNumber,pageSize:10},e.next=3,Object(o.d)(t.categoryId,n);case 3:r=e.sent,0===(data=r.data).code&&t.setTotalHandle(data,"entries",(function(){t.data=data.data.entries,t.$set(t.pagination,"current",t.$route.query.pageNumber?+t.$route.query.pageNumber:1),t.$set(t.pagination,"total",+data.data.total)}));case 6:case"end":return e.stop()}}),e)})))()}}},j=(n(1683),Object(h.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-fff pt20"},[r("div",{staticClass:"container"},[r("div",{staticClass:"mainWrap"},[r("div",{staticClass:"leftWrap"},[r("a-tabs",{attrs:{"default-active-key":t.categoryId},on:{change:t.callback},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}},t._l(t.categories,(function(t){return r("a-tab-pane",{key:t.id,staticClass:"tabPane",attrs:{tab:t.name}})})),1),t._v(" "),t.pagination.total?[r("div",{staticClass:"cardWrap"},t._l(t.data,(function(e){return r("NewsCard",{key:e.id,attrs:{data:e}},[r("div",{staticClass:"mt5 topOther",attrs:{slot:"topOther"},slot:"topOther"},[r("div",[r("img",{attrs:{src:n(1325)}}),t._v(" "),r("span",{staticClass:"ml5"},[t._v(t._s(e.hits)+" ")])]),t._v(" "),r("div",{staticClass:"ml15"},[r("img",{attrs:{src:n(1680),width:"14px"}}),t._v(" "),r("span",{staticClass:"ml5"},[t._v(t._s(e.praise)+" ")])]),t._v(" "),r("div",{staticClass:"fs12 time"},[r("img",{attrs:{src:n(1326),width:"14px"}}),t._v(" "),r("span",{staticClass:"ml5"},[t._v(t._s(t.$changeTime(e.createTime,"YYYY-MM-DD")))])])])])})),1),t._v(" "),r("div",{staticClass:"textCenter mt40"},[r("a-pagination",{attrs:{current:t.pagination.current,total:t.pagination.total,pageSize:t.pagination.pageSize,hideOnSinglePage:!1,showTotal:function(t){return" 共"+t+"条"}},on:{change:t.pageChange}})],1)]:[r("NoData")]],2),t._v(" "),r("div",{staticClass:"ml20 rightWrap"},[r("HotRecomment",{attrs:{data:t.advant}})],1)])])])}),[],!1,null,"300909ac",null));e.default=j.exports}}]);