(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{428:function(t,e,n){"use strict";n.d(e,"g",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"q",(function(){return h})),n.d(e,"D",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"r",(function(){return w})),n.d(e,"z",(function(){return y})),n.d(e,"A",(function(){return x})),n.d(e,"b",(function(){return O})),n.d(e,"s",(function(){return k})),n.d(e,"w",(function(){return C})),n.d(e,"c",(function(){return j})),n.d(e,"l",(function(){return _})),n.d(e,"p",(function(){return S})),n.d(e,"u",(function(){return I})),n.d(e,"v",(function(){return W})),n.d(e,"F",(function(){return M})),n.d(e,"E",(function(){return P})),n.d(e,"k",(function(){return B})),n.d(e,"G",(function(){return L})),n.d(e,"x",(function(){return N})),n.d(e,"o",(function(){return Q})),n.d(e,"e",(function(){return T})),n.d(e,"f",(function(){return A})),n.d(e,"t",(function(){return E})),n.d(e,"j",(function(){return R})),n.d(e,"m",(function(){return z})),n.d(e,"i",(function(){return $})),n.d(e,"y",(function(){return U})),n.d(e,"h",(function(){return D})),n.d(e,"B",(function(){return J})),n.d(e,"a",(function(){return H})),n.d(e,"C",(function(){return F}));var r=n(433),o=n(66),c=n(425),l=n.n(c),d=function(t){return o.a.post("/school/course/courses",l.a.stringify(t))},f=function(t,e){return o.a.post("/school/course/detail/".concat(t),l.a.stringify(e))},h=function(t,e){return o.a.post("/school/course/play/".concat(t),l.a.stringify(e))},m=function(t){return o.a.post("/school/course/report/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.options))},v=function(t,e){return o.a.post("/school/favorite/favorite/".concat(t,"/").concat(e))},w=function(t){return o.a.post("/school/course/info/".concat(t))},y=function(t){return o.a.post("/service/app/mp/makeJsMap",l.a.stringify(t),{custom:{isAis:!0}})},x=function(t){return o.a.post("/service/app/mp/makeJsMap",l.a.stringify(t))},O=function(t){return o.a.post("/school/student/apply/free/".concat(t))},k=function(t){return o.a.post("/school/student/trade/index/".concat(t))},C=function(){return o.a.post("/school/home/tops")},j=function(t){return o.a.post("/school/student/trade/buy/".concat(t.courseId),l.a.stringify(t.options))},_=function(t){return o.a.post("/school/course/promotion/".concat(t,"/carryFee"))},S=function(t){return o.a.get("/school/course/promotion/".concat(t,"/link"))},I=function(t){var e=t.courseId,n=Object(r.a)(t,["courseId"]);return o.a.post("/school/course/comment/list/".concat(e),l.a.stringify(n))},W=function(t){var e=t.courseId,n=t.parentId;return o.a.post("/school/course/comment/subList/".concat(e,"/").concat(n))},M=function(t){return o.a.post("/school/course/comment/submit",l.a.stringify(t))},P=function(t){var e=t.courseId,n=Object(r.a)(t,["courseId"]);return o.a.post("/school/course/score/submit/".concat(e),l.a.stringify(n))},B=function(t){var e=t.courseId,n=Object(r.a)(t,["courseId"]);return o.a.post("/school/course/score/list/".concat(e),l.a.stringify(n))},L=function(t){return o.a.post("/school/student/apply/problem/save",l.a.stringify(t))},N=function(t){var e=t.courseId,n=t.liveId;return o.a.post("/school/course/loadPush/".concat(e,"/").concat(n))},Q=function(t){return o.a.post("/school/course/score/latestBuy/".concat(t))},T=function(t){return o.a.post("/school/course/down/document/".concat(t.courseId,"/").concat(t.liveId))},A=function(t){return o.a.post("/school/course/callback/".concat(t))},E=function(t){return o.a.post("/school/student/trade/complete",l.a.stringify(t))},R=function(t,e){return o.a.post("/school/student/clock/record/list/".concat(t),l.a.stringify(e))},z=function(t){return o.a.post("/school/student/clock/main/course/info/".concat(t))},$=function(t,e){return o.a.post("/school/student/clock/record/comment/list/".concat(t),l.a.stringify(e))},U=function(){return o.a.post("/school/student/apply/problem/history")},D=function(t){return o.a.post("/school/activity/call/index/".concat(t))},J=function(t){return o.a.post("/school/activity/call/join/".concat(t))},H=function(t){return o.a.post("/school/activity/call/help/".concat(t))},F=function(t){return o.a.post("/school/activity/call/unlock/".concat(t))}},429:function(t,e,n){var content=n(440);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1f671aba",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";function r(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}n.d(e,"a",(function(){return r}))},434:function(t,e,n){"use strict";n(65),n(43),n(38),n(29),n(51);var r=n(35),o=(n(56),n(14)),c=n(24),l=n(428),d=n(25);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={methods:{getWechatShare:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.dynamicScript)("".concat(c.a.staticUrl,"/jweixin-1.4.0.js"),"wx");case 2:if(r={url:window.location.href},!e.isVideoWeChat){n.next=9;break}return n.next=6,Object(l.A)(r);case 6:n.t0=n.sent,n.next=12;break;case 9:return n.next=11,Object(l.z)(r);case 11:n.t0=n.sent;case 12:o=n.t0,0===(data=o.data).code&&(window.wx.config({appId:data.data.appid,timestamp:data.data.timestamp,nonceStr:data.data.noncestr,signature:data.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","showOptionMenu","hideAllNonBaseMenuItem","showAllNonBaseMenuItem"]}),window.wx.ready((function(){var n=h(h({},e.shareOption),{},{success:function(){e.show=!1,t&&Object(l.f)(t)},cancel:function(){e.show=!1}});window.wx.onMenuShareAppMessage(h({},n)),window.wx.onMenuShareQQ(h({},n)),window.wx.onMenuShareWeibo(h({},n)),window.wx.onMenuShareQZone(h({},n)),window.wx.onMenuShareTimeline(h({},n))})));case 15:case"end":return n.stop()}}),n)})))()}}},v=n(22),component=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,n){t.exports=n.p+"img/point.2a5c52f.png"},436:function(t,e,n){t.exports=n.p+"img/wechat.0f68c5c.png"},437:function(t,e,n){t.exports=n.p+"img/qq.656b905.png"},438:function(t,e,n){t.exports=n.p+"img/weibo.a845cb5.png"},439:function(t,e,n){"use strict";var r=n(429);n.n(r).a},440:function(t,e,n){(e=n(41)(!1)).push([t.i,".box[data-v-1bf14d3f]{display:flex;justify-content:space-around;align-items:center;padding:.26667rem 0}.img[data-v-1bf14d3f]{height:1.06667rem}.modal[data-v-1bf14d3f]{background:#fefefe;padding:.13333rem .53333rem}.modalContent[data-v-1bf14d3f]{height:2.66667rem;padding:.13333rem;background:#f5f5f5;word-break:break-all}.wechatPoint[data-v-1bf14d3f]{position:fixed;top:0;left:0;z-index:2001;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.wechatPoint .wechatImg[data-v-1bf14d3f]{width:6.45333rem;height:9.68rem;float:right;margin-right:.53333rem}",""]),t.exports=e},441:function(t,e,n){var content=n(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4eddbac1",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";n(115),n(422);var r=n(434),o=n(25),c=n(428),l={mixins:[r.a],props:{shareOption:{type:Object,required:!0}},data:function(){return{data:[{title:"wechat"},{title:"qq"},{title:"weibo"}],url:null,copyShow:!1,isQQ:!0,isWeChat:!1,show:!1}},mounted:function(){this.url=this.shareOption.link||window.location.href,this.isWeChat=Object(o.isWeChat)(),this.isWeChat&&this.getWechatShare(this.shareOption.courseId)},methods:{open:function(){this.show=!0},courseShareCallBack:function(){this.shareOption.courseId&&Object(c.f)(this.shareOption.courseId)},onCopySuccess:function(){this.$toast.success("复制成功"),this.copyShow=!1,this.courseShareCallBack()},itemClick:function(t){if("wechat"!==t&&"qq"!==t||(this.copyShow=!0,this.isQQ="qq"===t),"weibo"===t){var e={title:this.shareOption.title,image_url:this.shareOption.imgUrl,share_url:window.location.href};location.replace("https://service.weibo.com/share/share.php?url="+encodeURIComponent(e.share_url)+"&title="+e.title+"&pic="+e.image_url+"&searchPic=true"),this.courseShareCallBack()}this.show=!1}}},d=(n(439),n(22)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isWeChat?r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"wechatPoint",on:{click:function(e){t.show=!t.show}}},[r("img",{staticClass:"wechatImg",attrs:{src:n(435)}})]):r("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("div",{staticClass:"box"},[r("img",{staticClass:"img",attrs:{src:n(436)},on:{click:function(e){return t.itemClick("wechat")}}}),t._v(" "),r("img",{staticClass:"img",attrs:{src:n(437)},on:{click:function(e){return t.itemClick("qq")}}}),t._v(" "),r("img",{staticClass:"img",attrs:{src:n(438)},on:{click:function(e){return t.itemClick("weibo")}}})])]),t._v(" "),r("van-popup",{style:{width:"80%"},attrs:{round:""},model:{value:t.copyShow,callback:function(e){t.copyShow=e},expression:"copyShow"}},[r("div",{staticClass:"modal textCenter"},[r("div",{staticClass:"fs16 "},[t._v("\n        链接已复制\n      ")]),t._v(" "),r("div",{staticClass:"modalContent fs12 mt20"},[t._v("\n        "+t._s(t.url)+"\n      ")]),t._v(" "),r("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.url,expression:"url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"fs12 c-ff mt20",attrs:{id:"copyBtn",type:t.isQQ?"danger":"primary",size:"small"}},[t._v("\n        去"+t._s(t.isQQ?"QQ":"微信")+"粘贴给好友\n      ")])],1)])],1)}),[],!1,null,"1bf14d3f",null);e.a=component.exports},456:function(t,e,n){t.exports=n.p+"img/share.cabe731.png"},502:function(t,e,n){"use strict";var r=n(442),o=n(24),c={components:{ThirdShare:r.a},props:{shareImgUrl:{type:String,required:!0}},data:function(){return{shareOption:{},config:o.a}},mounted:function(){this.shareOption={title:"科研背景提升",desc:"我已参加科研背景提升，你也来一起参加吧!",imgUrl:this.shareImgUrl,link:"".concat(o.a.LINK.school_h5).concat(this.$route.fullPath)}},methods:{openShare:function(){this.$refs.ThirdShare.open()}}},l=(n(504),n(22)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"footerWrap"},[r("div",{staticClass:"textCenter shareWrap",on:{click:t.openShare}},[r("img",{attrs:{src:n(456),width:"18"}}),t._v(" "),r("div",{staticClass:"fs12 c-333 f500 mt5"},[t._v("\n        分享\n      ")])]),t._v(" "),[t._t("btnLeft"),t._v(" "),r("a",{class:["footerBtns"],attrs:{href:t.config.CONNACT_SERVE.ais_h5}},[t._v("\n        咨询客服\n      ")]),t._v(" "),t._t("btnRight")]],2),t._v(" "),r("ThirdShare",{ref:"ThirdShare",attrs:{shareOption:t.shareOption}})],1)}),[],!1,null,"1f47dfee",null);e.a=component.exports},504:function(t,e,n){"use strict";var r=n(441);n.n(r).a},505:function(t,e,n){(e=n(41)(!1)).push([t.i,".footerWrap[data-v-1f47dfee]{display:flex;align-items:center;width:100%;position:fixed;bottom:0;left:50%;z-index:99;transform:translateX(-50%);box-shadow:0 0 .08rem .05333rem rgba(36,36,36,.2);padding:.26667rem .26667rem .26667rem .66667rem;background:#fefefe}.footerWrap .shareWrap[data-v-1f47dfee]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-right:.4rem}.footerWrap .footerBtns[data-v-1f47dfee]{width:3.62667rem;border:.02667rem solid #36b7cf;border-radius:.58667rem;line-height:.98667rem;text-align:center;color:#36b7cf;font-size:.42667rem}",""]),t.exports=e},518:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(116);var o=n(139);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},546:function(t,e,n){var content=n(732);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("661d6dae",content,!0,{sourceMap:!1})},628:function(t,e,n){"use strict";var r=n(518),o=(n(38),n(29),n(56),n(14)),c=n(431),l=n(630),d=(n(421),n(502)),f=n(25),h=n(24),m={components:{BackgroundPromoteBottom:d.a},props:{categoryList:{type:Array,required:!0},activeTab:{type:Number,required:!0},type:{type:Number,required:!0}},methods:{tabClick:function(t){this.$parent.tabClick(t)},handleClick:function(){var path="/promoteApply?id=0";if(f.storage.get("userStatus"))this.$router.push({path:path});else{var t=encodeURIComponent("".concat(h.a.LINK.school_h5).concat(path));window.location.href="".concat(h.a.POST.school_h5,"/school/passport/login?mobile=1&state=").concat(t)}}}},v=(n(731),n(22)),w=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tab pt5 pb10 fs14"},t._l(t.categoryList,(function(e){return n("van-row",{key:e.id,staticClass:"mt10 tabWrap"},[n("van-col",{attrs:{span:5}},[n("div",{staticClass:"oneLine parentName hand fs13",on:{click:function(n){return t.tabClick(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])]),t._v(" "),n("van-col",{staticClass:"childWrap pl15",attrs:{span:19}},t._l(e.child,(function(e){return n("div",{key:e.id,class:["childName",{active:t.activeTab===e.id}],on:{click:function(n){return t.tabClick(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),0)],1)})),1),t._v(" "),n("div",{staticClass:"pb60"},[t._t("list")],2),t._v(" "),n("BackgroundPromoteBottom",{staticClass:"bottomWrap",attrs:{shareImgUrl:1===t.type?"https://static.ais.cn/resource/common/202105/330210518102713022.png":"https://static.ais.cn/resource/common/202105/330210518102542013.png"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{slot:"btnLeft"},slot:"btnLeft"}),t._v(" "),n("div",{staticClass:"btn",attrs:{slot:"btnRight"},on:{click:t.handleClick},slot:"btnRight"},[t._v("\n      申请匹配\n    ")])])],1)}),[],!1,null,"4955dd72",null).exports;e.a={components:{CourseCard:l.a,List:w},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)();case 2:return n=e.sent,r="/promote/scientificGroup"===t.route.path?2:1,o={page:1,pageSize:10,type:r},e.next=7,Object(c.h)(o);case 7:return l=e.sent,d=n.data.data.entries,(f=d.filter((function(p){return 0===p.parentId}))).forEach((function(element){var t=d.filter((function(p){return p.parentId===element.id}));element.child=t.length?t:[]})),e.abrupt("return",{categoryList:f,list:l.data.data.entries,total:+l.data.data.total,type:r});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{categoryList:[],activeTab:-1,list:[],loading:!1,finished:!1,pagination:{current:1}}},mounted:function(){this.total>0&&(this.pagination.current=2),this.list.length>=this.total&&(this.finished=!0)},methods:{tabClick:function(t){this.activeTab=t,this.pagination.current=1,this.getListHand()},onLoad:function(){var t=this;setTimeout((function(){t.getListHand()}),500)},getListHand:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:t.pagination.current,pageSize:t.pagination.pageSize,type:t.type},-1!==t.activeTab?n.categoryId=t.activeTab:n.categoryId=0,e.next=4,Object(c.h)(n);case 4:o=e.sent,data=o.data,t.loading=!1,0===data.code&&(t.list=1===n.page?data.data.entries:[].concat(Object(r.a)(t.list),Object(r.a)(data.data.entries)),t.total=+data.data.total,t.pagination.current=t.pagination.current+1,t.list.length===+data.data.total&&(t.finished=!0,t.loading=!1));case 8:case"end":return e.stop()}}),e)})))()}}}},731:function(t,e,n){"use strict";var r=n(546);n.n(r).a},732:function(t,e,n){(e=n(41)(!1)).push([t.i,".tab[data-v-4955dd72]{background:#fefefe;border-radius:.26667rem;position:relative}.tab .link[data-v-4955dd72]{position:absolute;top:.26667rem;right:.8rem}.tab .tabWrap[data-v-4955dd72]{display:flex}.tab .parentName[data-v-4955dd72]{background:rgba(74,144,226,.1);border-radius:0 .26667rem .26667rem 0;width:1.97333rem;line-height:.69333rem;text-align:center;font-weight:500;color:#1a64d2}.tab .childWrap[data-v-4955dd72]{display:flex;align-items:center;flex-wrap:wrap;margin-top:-.4rem}.tab .childWrap .childName[data-v-4955dd72]{color:#505b65;font-size:.37333rem;line-height:.53333rem;cursor:pointer;margin:.4rem .13333rem 0;padding:0 .13333rem}.tab .childWrap .active[data-v-4955dd72]{background:#4a90e2;color:#fefefe}.bottomWrap .btn[data-v-4955dd72]{width:3.89333rem;line-height:.98667rem;opacity:1;background:linear-gradient(108deg,#1b7ced,#599ded 100%,#5ba7ff 0,#1b7ced 0);color:#fff;font-size:.42667rem;font-weight:500;text-align:center;border-radius:.53333rem;margin-left:.26667rem}.bottomWrap[data-v-4955dd72] .footerBtns{margin-left:auto}.bottomWrap[data-v-4955dd72] .footerBtnsBlue{display:none}",""]),t.exports=e}}]);