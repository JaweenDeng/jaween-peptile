(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1059:function(t,e,r){"use strict";var n={data:function(){return{pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["5","10","15","20","30","40"],showTotal:function(t){return" 共".concat(t,"条")}}}},methods:{resetPage:function(){this.pagination.current=1,this.pagination.total=0},handleTableChange:function(t){this.pagination=t,this.getListHand&&this.getListHand()},handlePaginatChange:function(t,e){this.pagination.current=t,this.pagination.pageSize=e,this.getListHand&&this.getListHand(),this.$backScrollTop()},setTotalHandle:function(data,t,e){this.pagination.total=+data.data.total,this.pagination.total&&!data.data[t].length?(this.pagination.current=this.pagination.current-1,this.getListHand&&this.getListHand()):e()}}},o=r(18),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},1066:function(t,e,r){"use strict";function n(source,t){if(null==source)return{};var e,i,r=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r}(source,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r}r.d(e,"a",(function(){return n}))},1069:function(t,e,r){"use strict";r.d(e,"M",(function(){return d})),r.d(e,"w",(function(){return f})),r.d(e,"k",(function(){return h})),r.d(e,"n",(function(){return m})),r.d(e,"v",(function(){return y})),r.d(e,"F",(function(){return v})),r.d(e,"i",(function(){return x})),r.d(e,"u",(function(){return z})),r.d(e,"r",(function(){return _})),r.d(e,"q",(function(){return I})),r.d(e,"s",(function(){return C})),r.d(e,"J",(function(){return S})),r.d(e,"I",(function(){return $})),r.d(e,"E",(function(){return w})),r.d(e,"N",(function(){return O})),r.d(e,"l",(function(){return M})),r.d(e,"S",(function(){return k})),r.d(e,"d",(function(){return j})),r.d(e,"Q",(function(){return T})),r.d(e,"R",(function(){return L})),r.d(e,"f",(function(){return R})),r.d(e,"x",(function(){return N})),r.d(e,"h",(function(){return P})),r.d(e,"e",(function(){return A})),r.d(e,"g",(function(){return F})),r.d(e,"O",(function(){return H})),r.d(e,"P",(function(){return D})),r.d(e,"D",(function(){return E})),r.d(e,"A",(function(){return B})),r.d(e,"C",(function(){return J})),r.d(e,"B",(function(){return Q})),r.d(e,"a",(function(){return U})),r.d(e,"c",(function(){return G})),r.d(e,"j",(function(){return K})),r.d(e,"b",(function(){return V})),r.d(e,"m",(function(){return W})),r.d(e,"p",(function(){return X})),r.d(e,"G",(function(){return Y})),r.d(e,"H",(function(){return Z})),r.d(e,"o",(function(){return tt})),r.d(e,"z",(function(){return et})),r.d(e,"K",(function(){return nt})),r.d(e,"L",(function(){return at})),r.d(e,"y",(function(){return st})),r.d(e,"t",(function(){return ot}));var n=r(1066),o=r(19),c=r(31),l=r.n(c),d=function(t){return o.a.post("/school/lecturer/course/previewTime/".concat(t.courseId,"/").concat(t.liveId),l.a.stringify(t.info))},f=function(t){return o.a.post("/school/lecturer/play/live/".concat(t.courseId,"/").concat(t.liveId))},h=function(t){return o.a.post("/school/lecturer/course/create",l.a.stringify(t))},m=function(t){return o.a.post("/school/lecturer/course/save/".concat(t.id),l.a.stringify(t))},y=function(t){return o.a.post("/school/lecturer/course/list",l.a.stringify(t))},v=function(t){return o.a.post("/school/lecturer/course/delete/".concat(t))},x=function(t){return o.a.post("/school/lecturer/course/status/".concat(t.courseId,"/").concat(t.onStore))},z=function(t){return o.a.post("/school/lecturer/course/info/".concat(t))},_=function(t){return o.a.post("/school/lecturer/series/list",l.a.stringify(t))},I=function(t){return o.a.post("/school/lecturer/series/child/list/".concat(t.courseId),l.a.stringify(t.info))},C=function(t){return o.a.post("/school/lecturer/series/chapter/list/".concat(t))},S=function(t){return o.a.post("/school/lecturer/series/chapter/save/".concat(t.courseId),t.info,{headers:{"Content-Type":"application/json;charset=utf-8"}})},$=function(t){return o.a.post("/school/lecturer/series/child/save/".concat(t.courseId),l.a.stringify(t.info))},w=function(t){return o.a.post("/school/lecturer/series/child/delete/".concat(t.courseId,"/").concat(t.liveId))},O=function(t){return o.a.post("/school/lecturer/series/child/status/".concat(t.courseId,"/").concat(t.liveId,"/").concat(t.onStore))},M=function(){return o.a.post("/school/lecturer/home/index")},k=function(t){return o.a.post("/school/lecturer/home/trend",l.a.stringify(t))},j=function(t){return o.a.post("/school/lecturer/home/conversion",l.a.stringify(t))},T=function(t){return o.a.post("/school/lecturer/student/list",l.a.stringify(t))},L=function(t){var e=t.suserId,r=Object(n.a)(t,["suserId"]);return o.a.post("/school/lecturer/student/push/".concat(e),l.a.stringify(r))},R=function(t){return o.a.post("/school/lecturer/coupon/list",l.a.stringify(t))},N=function(t){return o.a.post("/school/lecturer/data/course/simple",l.a.stringify(t))},P=function(t){var e=t.courseId,r=Object(n.a)(t,["courseId"]);return o.a.post("/school/lecturer/coupon/save/".concat(e),l.a.stringify(r))},A=function(t){var e=t.courseId,r=t.couponId;return o.a.post("/school/lecturer/coupon/".concat(e,"/delete/").concat(r))},F=function(t){var e=t.couponId,r=Object(n.a)(t,["couponId"]);return o.a.post("/school/lecturer/coupon/effect/".concat(e),l.a.stringify(r))},H=function(){return o.a.post("/school/lecturer/promotion/statData")},D=function(t){return o.a.post("/school/lecturer/promotion/statList",l.a.stringify(t))},E=function(t){var e=t.courseId,r=Object(n.a)(t,["courseId"]);return o.a.post("/school/lecturer/promotion/".concat(e,"/order/list"),l.a.stringify(r))},B=function(t){return o.a.post("/school/lecturer/promotion/courses",l.a.stringify(t))},J=function(t){return o.a.post("/school/lecturer/promotion/".concat(t,"/config/info"))},Q=function(t){var e=t.courseId,r=Object(n.a)(t,["courseId"]);return o.a.post("/school/lecturer/promotion/".concat(e,"/config/save"),l.a.stringify(r))},U=function(t){return o.a.post("/school/lecturer/camp/list",l.a.stringify(t))},G=function(t){return o.a.post("/school/lecturer/camp/save",l.a.stringify(t))},K=function(t){return o.a.post("/school/lecturer/course/copy/".concat(t))},V=function(t){var e=t.courseId,r=t.display;return o.a.post("/school/lecturer/camp/camp/".concat(e,"/").concat(r))},W=function(t){return o.a.post("/school/lecturer/series/live/documentUpload",t)},X=function(t){return o.a.post("/school/lecturer/activity/call/list",l.a.stringify(t))},Y=function(t){return o.a.post("/school/lecturer/activity/call/save",l.a.stringify(t))},Z=function(t){var e=t.id,r=t.onStore;return o.a.post("/school/lecturer/activity/call/status/".concat(e,"/").concat(r))},tt=function(t){var e=t.activityId,r=Object(n.a)(t,["activityId"]);return o.a.post("/school/lecturer/activity/record/list/".concat(e),l.a.stringify(r))},et=function(t){return o.a.post("/school/lecturer/activity/tuan/list",l.a.stringify(t))},nt=function(t){return o.a.post("/school/lecturer/activity/tuan/save",l.a.stringify(t))},at=function(t){var e=t.courseId,r=t.onStore;return o.a.post("/school/lecturer/activity/tuan/status/".concat(e,"/").concat(r))},st=function(t){var e=t.courseId,r=Object(n.a)(t,["courseId"]);return o.a.post("/school/lecturer/activity/tuan/record/list/".concat(e),l.a.stringify(r))},ot=function(t){return o.a.post("/school/lecturer/data/course/activity/simple",l.a.stringify(t))}},1492:function(t,e,r){t.exports=r.p+"img/msgPush.479e5a7.png"},1495:function(t,e,r){},2105:function(t,e,r){"use strict";var n=r(1495);r.n(n).a},2216:function(t,e,r){"use strict";r.r(e);r(76),r(45),r(54),r(1054),r(1051),r(42),r(30);var n=r(33),o=r(1069);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"organizers",mixins:[r(1059).a],data:function(){return{form:this.$form.createForm(this,{}),filterForm:this.$form.createForm(this,{}),pushStatus:!1,formItemLayout:{labelCol:{span:4},wrapperCol:{span:20}},courseList:[],loading:!1,query:{registerType:1},regType:1}},computed:{columns:function(){return[{title:this.$t("organizers/traineesManage_9",{zh:"昵称"}),dataIndex:"nickName",align:"center",key:"nickName",scopedSlots:{customRender:"nickName"}},{title:this.$t("traineesManage/StudyTime",{zh:"学习时长"}),dataIndex:"studyTime",align:"center",key:"studyTime",scopedSlots:{customRender:"studyTime"}},{title:this.$t("organizers/traineesManage_10",{zh:"已完成课程"}),dataIndex:"finishCourse",align:"center",key:"finishCourse"},{title:this.$t("organizers/traineesManage_11",{zh:"累计消费"}),key:"consume",align:"center",dataIndex:"consume"},{title:this.$t("organizers/traineesManage_12",{zh:"购买系列课"}),key:"courseSeries",align:"center",dataIndex:"courseSeries"},{title:this.$t("organizers/traineesManage_13",{zh:"购买单课"}),key:"course",align:"center",dataIndex:"course"},{title:this.$t("organizers/traineesManage_14",{zh:"报名系列课"}),key:"registerCourseSeries",align:"center",dataIndex:"registerCourseSeries"},{title:this.$t("organizers/traineesManage_15",{zh:"报名单课"}),key:"registerCourse",align:"center",dataIndex:"registerCourse"},{title:"购买训练营",key:"campCourse",align:"center",dataIndex:"campCourse",customRender:function(t){return t||"-"}},{title:"报名训练营",key:"registerCampCourse",align:"center",dataIndex:"registerCampCourse",customRender:function(t){return t||"-"}}]}},mounted:function(){this.init()},methods:{init:function(){this.$set(this.pagination,"pageSize",15),this.getListHand(l(l({},this.params),{},{page:1}))},registerType:function(t){this.regType=t},radixRoint:function(t,e,r){if(-1!==e.indexOf("."))return this.$message.error("不能输入小数点"),r("不能输入小数点");r()},formatSeconds:function(t){var s=parseInt(t),e=0,r=0,n="";return s>60&&(e=parseInt(s/60),s=parseInt(s%60),e>60&&(r=parseInt(e/60),e=parseInt(e%60))),r>0&&(n="".concat(r,"小时").concat(n)),e>0&&(n="".concat(n).concat(e,"分钟")),n="".concat(n).concat(s,"秒")},getListHand:function(){var t=this,e=l({page:this.pagination.current,pageSize:this.pagination.pageSize},this.query);Object(o.Q)(l({},e)).then((function(e){if(0===e.data.code){var r=e.data.data,n=r.entries,o=r.total;n.map((function(t){t.key=t.suserId})),t.courseList=n,t.pagination.total=Number(o)}}))},stuPush:function(t){this.stuItem=t,this.pushStatus=!0},handleCancel:function(){this.form.resetFields(),this.pushStatus=!1},handleOk:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,r){if(!t){var n=e.stuItem.suserId,title=r.title,content=r.content;Object(o.R)({suserId:n,title:title,content:content}).then((function(t){0===t.data.code&&(e.$message.success(e.$t("organizers/traineesManage_24",{zh:"推送成功"})),e.handleCancel())}))}}))},handleQuery:function(){var t={},e=this.filterForm.getFieldsValue(),r=this.filterForm.getFieldsError();if(Object.values(r).some((function(t){return Array.isArray(t)})))this.$message.error("存在搜索条件未通过规则验证");else{for(var n in e.endStudy=e.endStudy&&parseInt(60*e.endStudy),e.startStudy=e.startStudy&&parseInt(60*e.startStudy),e.registerType=this.regType,e)""!==e[n]&&void 0!==e[n]&&null!==e[n]&&(t[n]=e[n]);this.query=JSON.parse(JSON.stringify(t)),this.$set(this.pagination,"current",1),this.getListHand()}}}},f=(r(2105),r(18)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"traineesManagement"},[n("div",{staticClass:"filterCondition"},[n("a-form",{attrs:{form:t.filterForm}},[n("a-row",{attrs:{gutter:16}},[n("a-col",{staticClass:"gutterRow",attrs:{lg:10,xxl:3,offset:1}},[n("div",{staticClass:"gutterBox"},[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickName"],expression:"['nickName']"}],staticStyle:{height:"40px"},attrs:{placeholder:t.$t("traineesManage/InputName",{zh:"请输入昵称"})}})],1)],1)]),t._v(" "),n("a-col",{staticClass:"gutterRow",attrs:{lg:12,xxl:6}},[n("div",{staticClass:"gutterBox"},[n("a-form-item",{attrs:{"label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,label:t.$t("traineesManage/StudyTime",{zh:"学习时长"})}},[n("div",{staticClass:"centerAlign justifyContent"},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["startStudy",{rules:[{validator:t.radixRoint},{max:7,message:"最多只能输入7位"}]}],expression:"['startStudy',{rules:[{validator:radixRoint},{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_1",{zh:"分钟"}),type:"number"}}),t._v(" "),n("span",{staticStyle:{margin:"0px 5px"}},[t._v(t._s(t.$t("organizers/traineesManage_2",{zh:"至"})))]),t._v(" "),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["endStudy",{rules:[{validator:t.radixRoint},{max:7,message:"最多只能输入7位"}]}],expression:"['endStudy', {rules:[{validator:radixRoint},{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_1",{zh:"分钟"}),type:"number"}})],1)])],1)]),t._v(" "),n("a-col",{staticClass:"gutterRow",attrs:{lg:12,xxl:6}},[n("div",{staticClass:"gutterBox"},[n("a-form-item",{attrs:{"label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,label:t.$t("organizers/traineesManage_3",{zh:"消费区间"})}},[n("div",{staticClass:"centerAlign justifyContent"},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["startConsume",{rules:[{max:7,message:"最多只能输入7位"}]}],expression:"['startConsume',{rules:[{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_4",{zh:"元"}),type:"number"}}),t._v(" "),n("span",{staticStyle:{margin:"0px 5px"}},[t._v(t._s(t.$t("organizers/traineesManage_2",{zh:"至"})))]),t._v(" "),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["endConsume",{rules:[{max:7,message:"最多只能输入7位"}]}],expression:"['endConsume',{rules:[{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_4",{zh:"元"}),type:"number"}})],1)])],1)]),t._v(" "),n("a-col",{staticClass:"gutterRow",attrs:{lg:10,xxl:6}},[n("div",{staticClass:"gutterBox signUp"},[n("a-form-item",{attrs:{"wrapper-col":{span:24}}},[n("div",{staticStyle:{display:"flex"}},[n("a-dropdown",{staticStyle:{flex:"0 0 90px"}},[n("span",{staticClass:"oneLine"},[t._v("\n                    "+t._s(1===t.regType?this.$t("organizers/traineesManage_5",{zh:"报名单课"}):this.$t("organizers/traineesManage_14",{zh:"报名系列课"}))+" "),n("a-icon",{attrs:{type:"down"}})],1),t._v(" "),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"0",on:{click:function(e){return t.registerType(1)}}},[t._v("\n                      "+t._s(t.$t("organizers/traineesManage_5",{zh:"报名单课"}))+"\n                    ")]),t._v(" "),n("a-menu-item",{key:"1",on:{click:function(e){return t.registerType(2)}}},[t._v("\n                      "+t._s(this.$t("organizers/traineesManage_14",{zh:"报名系列课"}))+"\n                    ")])],1)],1),t._v(" "),n("div",{staticClass:"centerAlign justifyContent",staticStyle:{flex:"1 1 auto"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["startRegister",{rules:[{max:7,message:"最多只能输入7位"}]}],expression:"['startRegister',{rules:[{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_6",{zh:"个"}),type:"number"}}),t._v(" "),n("span",{staticStyle:{margin:"0px 5px"}},[t._v(t._s(t.$t("organizers/traineesManage_2",{zh:"至"})))]),t._v(" "),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["endRegister",{rules:[{max:7,message:"最多只能输入7位"}]}],expression:"['endRegister',{rules:[{max:7, message:'最多只能输入7位'}]}]"}],staticClass:"flexAuto",attrs:{suffix:t.$t("organizers/traineesManage_6",{zh:"个"}),type:"number"}})],1)],1)])],1)]),t._v(" "),n("a-col",{staticClass:"gutterRow",attrs:{lg:2,xxl:2}},[n("div",{staticClass:"gutterBox"},[n("a-form-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("\n                "+t._s(t.$t("organizers/traineesManage_7",{zh:"查询"}))+"\n              ")])],1)],1)])],1)],1)],1),t._v(" "),n("div",{staticStyle:{background:"white"}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.courseList,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"nickName",fn:function(text){return n("span",{},[t._v("\n        "+t._s(text||"-")+"\n      ")])}},{key:"studyTime",fn:function(text){return n("span",{},[t._v("\n        "+t._s(t.formatSeconds(text))+"\n      ")])}},{key:"handle",fn:function(text,e){return n("span",{staticClass:"msgPush"},[n("img",{attrs:{src:r(1492),alt:t.$t("organizers/traineesManage_8",{zh:"消息推送"})},on:{click:function(r){return t.stuPush(e)}}})])}}])})],1),t._v(" "),n("div",[n("a-modal",{attrs:{title:t.$t("organizers/traineesManage_8",{zh:"消息推送"}),visible:t.pushStatus,okText:t.$t("organizers/traineesManage_17",{zh:"确定"}),cancelText:t.$t("organizers/traineesManage_16",{zh:"取消"})},on:{cancel:t.handleCancel,ok:t.handleOk}},[n("a-form",{attrs:{form:t.form,"label-col":{span:3},"wrapper-col":{span:21}}},[n("a-form-item",{attrs:{label:t.$t("organizers/traineesManage_19",{zh:"标题"})}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:t.$t("organizers/traineesManage_20",{zh:"请输入推送消息的标题"})}]}],expression:"['title', { rules: [{ required: true, message: $t('organizers/traineesManage_20', {zh:'请输入推送消息的标题'}) }] }]"}],attrs:{placeholder:t.$t("organizers/traineesManage_19",{zh:"标题"})}})],1),t._v(" "),n("a-form-item",{attrs:{label:t.$t("organizers/traineesManage_23",{zh:"内容"})}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:t.$t("organizers/traineesManage_21",{zh:"请输入推送消息的内容"})}]}],expression:"['content', { rules: [{ required: true, message: $t('organizers/traineesManage_21', {zh:'请输入推送消息的内容'}) }] }]"}],attrs:{placeholder:t.$t("organizers/traineesManage_22",{zh:"允许输入108字"}),autoSize:{minRows:5},maxLength:108}})],1)],1)],1)],1)])}),[],!1,null,"55a77bd0",null);e.default=component.exports}}]);