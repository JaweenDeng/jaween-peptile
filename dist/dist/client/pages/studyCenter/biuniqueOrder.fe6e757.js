(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1052:function(t,n,e){"use strict";var r={data:function(){return{pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["5","10","15","20","30","40"],showTotal:function(t){return" 共".concat(t,"条")}}}},methods:{resetPage:function(){this.pagination.current=1,this.pagination.total=0},handleTableChange:function(t){this.pagination=t,this.getListHand&&this.getListHand()},handlePaginatChange:function(t,n){this.pagination.current=t,this.pagination.pageSize=n,this.getListHand&&this.getListHand(),this.$backScrollTop()},setTotalHandle:function(data,t,n){this.pagination.total=+data.data.total,this.pagination.total&&!data.data[t].length?(this.pagination.current=this.pagination.current-1,this.getListHand&&this.getListHand()):n()}}},c=e(18),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);n.a=component.exports},1060:function(t,n,e){"use strict";e.d(n,"q",(function(){return l})),e.d(n,"p",(function(){return f})),e.d(n,"o",(function(){return d})),e.d(n,"j",(function(){return h})),e.d(n,"k",(function(){return v})),e.d(n,"m",(function(){return _})),e.d(n,"a",(function(){return m})),e.d(n,"l",(function(){return y})),e.d(n,"n",(function(){return C})),e.d(n,"h",(function(){return k})),e.d(n,"d",(function(){return S})),e.d(n,"c",(function(){return w})),e.d(n,"e",(function(){return x})),e.d(n,"b",(function(){return O})),e.d(n,"i",(function(){return L})),e.d(n,"g",(function(){return H})),e.d(n,"f",(function(){return z})),e.d(n,"s",(function(){return j})),e.d(n,"r",(function(){return D}));var r=e(19),c=e(31),o=e.n(c),l=function(){return r.a.post("/school/study/statistics")},f=function(t){return r.a.post("/school/study/list",o.a.stringify(t))},d=function(t){return r.a.post("/school/favorite/list",o.a.stringify(t))},h=function(t){return r.a.post("/school/study/courses",o.a.stringify(t))},v=function(t){return r.a.post("/school/student/trade/list",o.a.stringify(t))},_=function(t){return r.a.post("/school/student/trade/pay/".concat(t))},m=function(t){return r.a.post("/school/student/trade/cancel/".concat(t))},y=function(t){return r.a.post("/school/train/trade/list",o.a.stringify(t))},C=function(t){var n=t.courseId,e=t.type;return r.a.post("/school/study/cert/".concat(n,"/").concat(e),{},{responseType:"blob"})},k=function(){return r.a.post("/school/lecturer/clock/role")},S=function(){return r.a.post("/school/lecturer/clock/index")},w=function(t){return r.a.post("/school/lecturer/clock/course/list",o.a.stringify(t))},x=function(t){return r.a.post("/school/lecturer/clock/question/list",o.a.stringify(t))},O=function(t){return r.a.post("/school/lecturer/clock/comment/list",o.a.stringify(t))},L=function(t){return r.a.post("/school/lecturer/clock/theme/list/".concat(t))},H=function(t,n){return r.a.post("/school/lecturer/clock/record/list/".concat(t),o.a.stringify(n))},z=function(t){return r.a.post("/school/lecturer/clock/record/detail/".concat(t))},j=function(t,n){return r.a.post("/school/student/course/question/comment/submit/".concat(t),o.a.stringify(n))},D=function(t,n){return r.a.post("/school/student/clock/record/comment/submit/".concat(t),o.a.stringify(n))}},1091:function(t,n,e){"use strict";e(1044);var r={props:{height:{type:Number,default:510}}},c=e(18),component=Object(c.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"noData pt73 textCenter",style:{"min-height":this.height+"px"}},[n("img",{attrs:{src:e(1097)}}),this._v(" "),n("div",{staticClass:"c-666"},[this._v("\n    暂时没有内容噢~\n  ")])])}),[],!1,null,null,null);n.a=component.exports},1097:function(t,n,e){t.exports=e.p+"img/none.45b2a54.png"},1342:function(t,n,e){},1719:function(t,n,e){"use strict";var r=e(1342);e.n(r).a},2200:function(t,n,e){"use strict";e.r(n);e(92),e(93),e(138),e(42),e(30),e(44);var r=e(17),c=e(1091),o=e(1052),l=e(1060),f=e(90),d={components:{NoData:c.a},mixins:[o.a],data:function(){return{tableData:[],scientificService:f.n,paperService:f.k,orderStatus:Object(f.i)(this)}},mounted:function(){this.$set(this.pagination,"pageSize",5),this.getListHand()},methods:{getListHand:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={page:t.pagination.current,pageSize:t.pagination.pageSize},n.next=3,Object(l.l)(e);case 3:r=n.sent,0===(data=r.data).code&&t.setTotalHandle(data,"entries",(function(){t.tableData=data.data.entries}));case 6:case"end":return n.stop()}}),n)})))()},payOrder:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.m)(t.tradeNO);case 2:e=n.sent,0===(data=e.data).code&&(window.location.href=data.data);case 5:case"end":return n.stop()}}),n)})))()},changeFee:function(t){return t.toString().replace(/(?!\b)(?=(\d{3})+\b)/g,",")},changeStatus:function(t,n){if(1===t.status){if(0===n.payStatus)return"待支付";if(2===n.payStatus)return"已付款"}else{if(2===t.status)return"已完成";if(7===t.status)return"已关闭"}},cancleOrder:function(t){var n,e=this;this.$confirm({title:"取消订单？",content:"是否确认取消订单？",onOk:(n=Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)(t.tradeNO);case 2:0===n.sent.data.code&&(e.$message.success("取消成功!"),e.getListHand());case 5:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)}),onCancel:function(){}})}}},h=(e(1719),e(18)),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"myOrder"},[e("div",{staticClass:"c-333 myOrderHeader"},[t._v("\n    服务订单\n  ")]),t._v(" "),t.tableData.length>0?e("div",{staticClass:"content mt15"},[e("a-row",{staticClass:"cardWrapHeader"},[e("a-col",{staticClass:"textLeft",attrs:{span:3}},[t._v("\n        业务类型\n      ")]),t._v(" "),e("a-col",{staticClass:"textLeft",attrs:{span:7}},[t._v("\n        服务名称\n      ")]),t._v(" "),e("a-col",{attrs:{span:5}},[t._v("\n        服务金额\n      ")]),t._v(" "),e("a-col",{attrs:{span:5}},[t._v("\n        状态\n      ")]),t._v(" "),e("a-col",{attrs:{span:4}},[t._v("\n        操作\n      ")])],1),t._v(" "),e("div",t._l(t.tableData,(function(n){return e("div",{key:n.id,staticClass:"fs12 cardItem"},[e("a-row",{staticClass:"c-666 pt10 pb10 c-e3e pl20 pr20"},[e("a-col",{attrs:{span:3}},[e("a-icon",{attrs:{type:"book"}}),t._v(" "+t._s(1===n.productId?"科研一对一":2===n.productId?"科研小组":"论文订单")+"\n          ")],1),t._v(" "),e("a-col",{staticClass:"textLeft",attrs:{span:7}},[t._v("\n            订单号: "+t._s(n.tradeNO)+"\n          ")]),t._v(" "),e("a-col",{attrs:{span:9}},[e("a-icon",{attrs:{type:"clock-circle"}}),t._v(" "+t._s(t.$changeTime(n.createTime,"YYYY/MM/DD"))+"\n          ")],1),t._v(" "),e("a-col",{staticClass:"textCenter c-333 f600 fs14",attrs:{span:5}},[t._v("\n            订单金额 ￥"+t._s(t.changeFee(n.total_amount))+"\n          ")])],1),t._v(" "),[n.items.length>0?t._l(n.items,(function(r){return e("a-row",{key:r.tradeNO,staticClass:"textCenter pt10 pb10 ml20 mr20 c-333 fs14"},[e("a-col",{staticClass:"textLeft f500 breakAll",attrs:{span:7,offset:3}},[t._v("\n                "+t._s(r.name)+"\n              ")]),t._v(" "),e("a-col",{attrs:{span:5}},[t._v("\n                ￥"+t._s(t.changeFee(r.fee))+"\n              ")]),t._v(" "),2===n.productId?[e("a-col",{class:{"c-ec6":1===n.status&&0===r.payStatus},attrs:{span:5}},[t._v("\n                  "+t._s(t.changeStatus(n,r))+"\n                ")]),t._v(" "),e("a-col",{staticClass:"fs12",attrs:{span:4}},[1===n.status&&0===r.payStatus?e("div",{staticClass:"payBtn",on:{click:function(n){return t.payOrder(r)}}},[t._v("\n                    去支付\n                  ")]):e("div",[t._v("\n                    — —\n                  ")])])]:1===n.productId||3===n.productId?[e("a-col",{class:{"c-ec6":0===r.payStatus},attrs:{span:5}},[t._v("\n                  "+t._s(t.orderStatus[r.payStatus])+"\n                ")]),t._v(" "),e("a-col",{staticClass:"fs12",attrs:{span:4}},[0===r.payStatus?e("div",{staticClass:"payBtn",on:{click:function(n){return t.payOrder(r)}}},[t._v("\n                    去支付\n                  ")]):e("div",[t._v("\n                    — —\n                  ")])])]:t._e()],2)})):e("a-row",{staticClass:"textCenter pt10 pb10 ml20 mr20 c-333 fs14"},[e("a-col",{staticClass:"textLeft f500 breakAll",attrs:{span:7,offset:3}},[t._v("\n              "+t._s(1===n.productId?"科研一对一":2===n.productId?"科研小组":"论文辅助")+"\n            ")]),t._v(" "),e("a-col",{attrs:{span:5}},[t._v("\n              --\n            ")]),t._v(" "),e("a-col",{attrs:{span:5}},[t._v("\n              待报价\n            ")]),t._v(" "),e("a-col",{staticClass:"fs12",attrs:{span:4}},[t._v("\n              — —\n            ")])],1)]],2)})),0),t._v(" "),e("div",{staticClass:"textCenter pt40 pb40"},[e("a-pagination",{attrs:{showSizeChanger:"",showQuickJumper:"",current:t.pagination.current,total:t.pagination.total,pageSize:t.pagination.pageSize,pageSizeOptions:["5","10","15","20"],showTotal:function(t){return" 共"+t+"条"}},on:{change:t.handlePaginatChange,showSizeChange:t.handlePaginatChange}})],1)],1):e("NoData")],1)}),[],!1,null,"c42fc382",null);n.default=component.exports}}]);