(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1069:function(t,e,n){"use strict";n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return _})),n.d(e,"d",(function(){return y})),n.d(e,"f",(function(){return C})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return j})),n.d(e,"k",(function(){return w})),n.d(e,"h",(function(){return k}));var r=n(19),o=n(30),c=n.n(o),l=function(){return r.a.post("/school/train/trade/coupon")},f=function(t){return r.a.post("/school/train/trade/submit",t,{headers:{"Content-Type":"application/json;charset=utf-8"}})},d=function(t){var e=t.categoryId,n=t.res;return r.a.post("/school/train/article/subject/".concat(e),c.a.stringify(n))},h=function(t){return r.a.post("/school/train/article/subject/detail/".concat(t))},v=function(t){return r.a.post("/school/train/trade/upload",t)},m=function(){return r.a.post("/school/train/article/experts")},_=function(t){var e=t.parentId,n=t.type;return r.a.post("/school/train/article/category/list/".concat(e,"/").concat(n))},y=function(t){return r.a.post("/school/train/article/category/info/".concat(t))},C=function(){return r.a.post("/school/train/store/category")},O=function(t){return r.a.post("/school/train/store/stores",c.a.stringify(t))},j=function(t){return r.a.post("/school/train/store/detail/".concat(t))},w=function(t){return r.a.post("/school/train/trade/problem",c.a.stringify(t))},k=function(t){return r.a.post("/school/train/store/info/".concat(t))}},1129:function(t,e,n){},1134:function(t,e,n){},1149:function(t,e,n){t.exports=n.p+"img/hoticon.6d31773.png"},1241:function(t,e,n){"use strict";n(44),n(32),n(64);var r=n(1076),o=n(90),c=n(20),l={components:{ThirdShare:r.a},props:{headerConfig:{type:Object,required:!0}},data:function(){return{shareData:{options:{}},severActive:1}},computed:{severList:function(){var t="scientific"===this.headerConfig.key?o.n:o.k;return Object.keys(t).map((function(e){return{title:t[e],value:+e}}))}},mounted:function(){this.shareData={url:window.location.href,desc:"我已参加".concat(this.headerConfig.title,"，你也来一起参加吧!"),title:this.headerConfig.title,pics:this.headerConfig.poster?"".concat(c.a.IMG_URL.default).concat(this.headerConfig.poster):"https://static.ais.cn/resource/meeting/photo/202011/".concat("paper"!==this.headerConfig.key?"302201118140744027":"353201119134110010",".png"),options:{value:window.location.href,size:100,title:"请打开微信扫一扫!"}}}},f=(n(1261),n(18)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flexBox"},[n("div",[t._t("img")],2),t._v(" "),n("div",{class:["fs14","pl25","scientific"===t.headerConfig.key?"pt10":"pt30"]},[n("div",{staticClass:"c-333 f600 fs18"},[t._v("\n      "+t._s(t.headerConfig.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"c-666 mt10"},[t._v("\n      "+t._s(t.headerConfig.des)+"\n    ")]),t._v(" "),n("a-row",{staticClass:"mt36",attrs:{type:"flex",align:"middle"}},[n("a-col",{staticClass:"c-666 severTitle mr5"},[t._v("\n        选择服务\n      ")]),t._v(" "),t._l(t.severList,(function(e){return n("a-col",{key:e.value,class:["btns",{active:t.severActive===e.value}],on:{click:function(n){t.severActive=e.value}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2),t._v(" "),n("a-row",{staticClass:"mt23 ml75",attrs:{type:"flex",align:"middle"}},[n("a-col",{class:["btn","scientific"===t.headerConfig.key?"bg-ff5":"bg-f58"]},[n("a",{staticClass:"c-fff",attrs:{href:"/biunique/"+t.headerConfig.key+"Apply/"+t.severActive+"?categoryId="+(t.headerConfig.id||0),target:"_blank"}},[t._v("\n          "+t._s(t.headerConfig.btnTitle)+"\n        ")])]),t._v(" "),n("a-col",{staticClass:"btn ml15",on:{click:function(e){return t.$store.commit("common/setOnLineServer")}}},[t._v("\n        咨询客服\n      ")]),t._v(" "),n("a-col",[n("ThirdShare",{attrs:{data:t.shareData}})],1)],1)],1)])}),[],!1,null,"4f7e18d2",null);e.a=component.exports},1261:function(t,e,n){"use strict";var r=n(1129);n.n(r).a},1278:function(t,e,n){"use strict";var r=n(1134);n.n(r).a},1281:function(t,e,n){"use strict";n(43);var r=n(17),o=n(139),c=n(20),l={props:{data:{type:Object,require:!0,default:function(){return{}}},isBackground:{type:Boolean,default:!1}},data:function(){return{list:[],config:c.a}},mounted:function(){this.getbatchList()},methods:{getbatchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("pc_advertisement");case 2:n=e.sent,0===(data=n.data).code&&(t.list=data.data.pc_advertisement);case 5:case"end":return e.stop()}}),e)})))()}}},f=(n(1278),n(18)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt15 mb20 container"},[t.data?r("a-row",{attrs:{type:"flex"}},[r("a-col",{staticClass:"bg-fff pd20 leftWrap",attrs:{span:16}},[r("div",{staticClass:"ueEditorStyle pd10",domProps:{innerHTML:t._s(t.data[t.isBackground?"content":"description"])}})]),t._v(" "),t.list.length?r("a-col",{staticClass:"pl30",attrs:{span:8}},[r("h3",{staticClass:"hotTitle"},[r("div",{staticClass:"hotH3"},[r("img",{attrs:{src:n(1149),alt:"",width:"24"}}),t._v("热门推荐\n        ")])]),t._v(" "),r("ul",t._l(t.list,(function(e,n){return r("li",{key:n,class:{mt40:n>0}},[e.redirectUrl?r("a",{attrs:{href:e.redirectUrl,target:"_blank"}},[r("img",{staticClass:"banPic",attrs:{src:""+t.config.IMG_URL.default+e.resource,alt:""}})]):r("img",{staticClass:"banPic",attrs:{src:""+t.config.IMG_URL.default+e.resource,alt:""}})])})),0)]):t._e()],1):t._e()],1)}),[],!1,null,"4ee38bcc",null);e.a=component.exports},1505:function(t,e,n){},2153:function(t,e,n){"use strict";var r=n(1505);n.n(r).a},2219:function(t,e,n){"use strict";n.r(e);n(88),n(50),n(64),n(89),n(44),n(32);var r=n(41),o=(n(43),n(17)),c=n(1069),l=n(1241),f=n(1113),d=n(1281),h=n(1324),v=n(20);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{BiuniqueBanner:l.a,CooperateBottom:f.a,BiuniqueCategory:d.a,RightBoxWrap:h.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(t.route.params.id);case 2:if(n=e.sent,0!==(data=n.data).code){e.next=6;break}return e.abrupt("return",{data:_(_({},data.data.entries),{},{title:data.data.entries.name,btnTitle:"上传手稿",des:data.data.entries.introduce,key:"paper"})});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{data:{},config:v.a,bottomFix:!1}}},C=(n(2153),n(18)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"mt15 bg-fff pt20 pb25"},[n("BiuniqueBanner",{attrs:{headerConfig:t.data}},[n("img",{staticClass:"img",attrs:{slot:"img",src:""+t.config.IMG_URL.default+t.data.poster,width:"438"},slot:"img"})])],1),t._v(" "),n("BiuniqueCategory",{attrs:{data:t.data}}),t._v(" "),n("CooperateBottom",{class:{CooperateBottom:t.bottomFix}}),t._v(" "),n("RightBoxWrap",{staticClass:"rightBox"})],1)}),[],!1,null,"d95be1f6",null);e.default=component.exports}}]);