(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1089:function(e,t,r){"use strict";t.a={phone:/^\d{11}$/,email:/^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9.]*\.[A-Za-z]{2,6}$/,money:/^(0|\+?[1-9][0-9]*)$/}},1104:function(e,t,r){},1187:function(e,t,r){"use strict";var n=r(1104);r.n(n).a},1215:function(e,t,r){"use strict";r(280),r(1050);var n=r(43),l={props:{country:{type:Number,required:!0},type:{type:String,default:"code"},disabled:{type:Boolean,default:!1}},data:function(){return{countryData:n.countryData}},computed:{countryValue:function(){var e=this,t=n.countryData.find((function(p){return p.code===e.country}));return t&&t.id?t.id:0}},methods:{handleChange:function(e){var t=n.countryData.find((function(p){return p.id===e}));this.$emit("update:country",t.code)}}},o=(r(1187),r(18)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CountrySelect"},[r("a-select",{attrs:{value:e.countryValue,placeholder:"请选择区号",disabled:e.disabled,"option-label-prop":"label",dropdownMatchSelectWidth:!1},on:{change:e.handleChange}},e._l(e.countryData,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.id,label:"+"+t.code}},[e._v("\n      "+e._s(t.name)+" + "+e._s(t.code)+"\n    ")])})),1)],1)}),[],!1,null,"d9e18f9e",null);t.a=component.exports},1343:function(e,t,r){},1344:function(e,t,r){},1345:function(e,t,r){},1531:function(e,t,r){e.exports=r.p+"img/icon.beafb0d.png"},1532:function(e,t,r){e.exports=r.p+"img/add.363435e.png"},1704:function(e,t,r){e.exports=r.p+"img/organ1.79847aa.png"},1705:function(e,t,r){e.exports=r.p+"img/organ.28ca362.png"},1706:function(e,t,r){e.exports=r.p+"img/teacher1.254d3d1.png"},1707:function(e,t,r){e.exports=r.p+"img/teacher.f703a57.png"},1708:function(e,t,r){e.exports=r.p+"img/banner.0c2ff81.png"},1709:function(e,t,r){e.exports=r.p+"img/status2.c181801.png"},1710:function(e,t,r){e.exports=r.p+"img/status1.a646e06.png"},1711:function(e,t,r){"use strict";var n=r(1343);r.n(n).a},1712:function(e,t,r){e.exports=r.p+"img/self.6b94fee.png"},1713:function(e,t,r){"use strict";var n=r(1344);r.n(n).a},1714:function(e,t,r){"use strict";var n=r(1345);r.n(n).a},2191:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner"},[t("img",{staticClass:"img",attrs:{src:r(1708)}})])}],l=(r(42),r(30),r(54),r(44),r(17)),o=r(19),c=r(31),d=r.n(c),m=r(20),f={props:{data:{type:Object,required:!0}},data:function(){return{config:m.a,init:!1}},mounted:function(){this.init=!0},methods:{againSubmit:function(){this.$emit("againSubmit")}}},v=(r(1711),r(18)),h=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content pt20 pb20"},[n("div",{staticClass:"container statusWrap"},[n("div",{staticClass:"mr25"},[e.init&&4===e.data.status?n("img",{attrs:{src:r(1709)}}):n("img",{attrs:{src:r(1710)}})]),e._v(" "),e.init&&1===e.data.status?n("div",{staticClass:"ml25"},[n("div",{staticClass:"fs20 f500",staticStyle:{color:"#F29B00"}},[e._v("\n        认证审核中…\n      ")]),e._v(" "),n("div",{staticClass:"mt10 c-666"},[e._v("\n        您的资料已提交到审核，将会在2-3天内完成认证！\n      ")])]):e._e(),e._v(" "),e.init&&4===e.data.status?n("div",{staticClass:"ml25"},[n("div",{staticClass:"fs20 f500",staticStyle:{color:"#F5303A"}},[e._v("\n        认证审核失败\n      ")]),e._v(" "),n("div",{staticClass:"mt10 c-666"},[e._v("\n        您提交的认证失败，请重新认证。\n      ")]),e._v(" "),n("div",{staticClass:"c-333 mt3"},[n("span",[e._v("失败原因：")]),e._v(" "),n("span",[e._v(e._s(e.data.audit))])]),e._v(" "),n("div",{staticClass:"mt30"},[n("div",{staticClass:"restartBtn textCenter hand",on:{click:e.againSubmit}},[e._v("\n          重新验证\n        ")]),e._v(" "),n("div",{staticClass:"kefu ml60 textCenter hand",on:{click:function(t){return e.$store.commit("common/setOnLineServer")}}},[e._v("\n          咨询客服\n        ")])])]):e._e()])])}),[],!1,null,"31c62e7e",null).exports,C=(r(76),r(45),r(91),r(108),r(33)),y=r(77),_=r(1089);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={components:{CountrySelect:r(1215).a},props:{data:{type:Object,required:!0},formConfig:{type:Array,required:!0}},data:function(){return{form:this.$form.createForm(this,{name:"form"}),posterList:{},config:m.a,reg:_.a,isTeacher:!1,countryCode:86}},mounted:function(){var e=this;if(this.isTeacher=this.formConfig.some((function(p){return"email"===p.value})),Object.keys(this.data).length>0){var t=this.data.draft;t.email&&!this.isTeacher||!t.email&&this.isTeacher?this.$nextTick((function(){e.form.resetFields({}),e.posterList={},e.countryCode=86})):(this.$nextTick((function(){e.form.setFieldsValue(O({},t)),e.countryCode=t.countryCode||86})),this.$set(this.posterList,"certificate",t.certificate),this.$set(this.posterList,"material",t.material),t.supplement&&this.$set(this.posterList,"supplement",t.supplement))}},methods:{beforePosterUpload:function(e){if(!e.type.includes("image"))return this.$message.error("请上传图片"),!1},customPosterRequest:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,l,data,title;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("certificate"!==e.action||!t.isTeacher){r.next=3;break}if(!(e.file.size/1024/1024>2)){r.next=3;break}return r.abrupt("return",t.$message.error("身份证明图片不能大于2M"));case 3:if("material"!==e.action||t.isTeacher){r.next=6;break}if(!(e.file.size/1024/1024>5)){r.next=6;break}return r.abrupt("return",t.$message.error("logo图片不能大于5M"));case 6:return(n=new FormData).append("file",e.file),r.next=10,Object(y.d)(n);case 10:l=r.sent,0===(data=l.data).code?(e.onSuccess(),t.$set(t.posterList,e.action,data.data),title="其它资质证明","certificate"===e.action?(t.form.setFieldsValue({certificate:data.data}),title=t.isTeacher?"身份证明":"营业执照/证明信(加盖公章)"):"material"===e.action?(t.form.setFieldsValue({material:data.data}),title=t.isTeacher?"资格证书":"身份证明"):"supplement"===e.action&&t.form.setFieldsValue({supplement:data.data}),t.$message.success("".concat(title,"上传成功!"))):e.onError();case 13:case"end":return r.stop()}}),r)})))()},handleSubmit:function(e,t){var r=this;t.preventDefault(),this.form.validateFields(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(n,l){var c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=9;break}if(c=r.reg.email,!l.email||c.test(l.email)){t.next=4;break}return t.abrupt("return",r.$message.error("请输入正确邮箱地址!"));case 4:return t.next=6,f=O(O({},l),{},{draft:e,cardType:l.cardType?l.cardType:0,type:r.isTeacher?2:1,countryCode:r.countryCode}),o.a.post("/school/user/settled/apply",d.a.stringify(f));case 6:m=t.sent,0===m.data.code&&(e||r.$router.push("/"),r.$message.success(e?"保存草稿成功!":"提交成功!"));case 9:case"end":return t.stop()}var f}),t)})));return function(e,r){return t.apply(this,arguments)}}())}}},T=(r(1713),Object(v.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-form",{attrs:{form:e.form}},[e._l(e.formConfig,(function(t,l){return n("div",{key:l},["input"===t.type?n("a-form-item",{class:t.class,attrs:{label:t.label,"label-col":t.labelCol?{span:t.labelCol}:{},"wrapper-col":t.wrapperCol?{span:t.wrapperCol}:{}}},["phone"===t.value?n("CountrySelect",{attrs:{country:e.countryCode},on:{"update:country":function(t){e.countryCode=t}}}):e._e(),e._v(" "),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[t.value,{rules:[{required:t.required,message:t.msg}]}],expression:"[item.value, { rules: [{ required: item.required, message: item.msg }]}]"}],attrs:{placeholder:t.msg,type:t.formAttr&&t.formAttr.type||"text"}})],1):e._e(),e._v(" "),"upload"===t.type?n("a-form-item",{class:t.class,attrs:{label:t.label,"label-col":t.labelCol?{span:t.labelCol}:{},"wrapper-col":t.wrapperCol?{span:t.wrapperCol}:{}}},[n("a-upload-dragger",{directives:[{name:"decorator",rawName:"v-decorator",value:[t.value,{rules:[{required:t.required,message:t.msg}]}],expression:"[\n            item.value,\n            {\n              rules: [{ required: item.required, message: item.msg }]\n            }\n          ]"}],attrs:{name:"files",accept:".jpg, .jpeg, .png",action:t.value,showUploadList:!1,beforeUpload:e.beforePosterUpload,customRequest:e.customPosterRequest}},[e.posterList[t.value]?n("div",[n("img",{staticClass:"formImg",attrs:{src:""+e.config.IMG_URL.default+e.posterList[t.value]}})]):e._e(),e._v(" "),"material"===t.value&&!e.posterList.material&&e.isTeacher?n("div",{staticStyle:{background:"#F5F5F5",padding:"10px 40px"}},[n("img",{attrs:{src:r(1531)}})]):e._e(),e._v(" "),"supplement"===t.value&&!e.posterList.supplement&&e.isTeacher?n("div",{staticClass:"formLogoBtn"},[n("img",{attrs:{src:r(1532)}}),e._v(" "),n("span",[e._v("上传资质图片")])]):e._e(),e._v(" "),"certificate"===t.value&&!e.posterList.certificate&&e.isTeacher?n("div",[n("img",{staticClass:"uploadDecImg",attrs:{src:r(1712)}})]):e._e(),e._v(" "),"certificate"!==t.value||e.posterList.certificate||e.isTeacher?e._e():n("div",{staticStyle:{background:"#F5F5F5",padding:"10px 40px"}},[n("img",{attrs:{src:r(1531)}})]),e._v(" "),"material"!==t.value||e.posterList.material||e.isTeacher?e._e():n("div",{staticClass:"formLogoBtn"},[n("img",{attrs:{src:r(1532)}}),e._v(" "),n("span",[e._v("上传logo图片")])])]),e._v(" "),"material"===t.value&&e.isTeacher?n("div",{staticClass:"c-98 fs12 ml25",staticStyle:{"align-self":"flex-end"}},[e._v("\n          请提交教师资格证、高学历证、专业证书、本人微博认证号等。\n        ")]):e._e(),e._v(" "),"certificate"===t.value&&e.isTeacher?n("div",{staticClass:"f500 fs12 c-98 ml21",staticStyle:{"align-self":"flex-end"}},[n("span",{staticStyle:{color:"#4A90E2"}},[e._v("温馨提示：")]),e._v("\n          请上传手持身份证的半身照。文件小于2M。支持png/jpg/BMP等格式图片。\n        ")]):e._e(),e._v(" "),"material"!==t.value||e.isTeacher?e._e():n("div",{staticClass:"tips ml21 fs12"},[n("span",{staticStyle:{color:"#4A90E2"}},[e._v("温馨提示：")]),e._v(" "),n("span",[e._v("您上传的LOGO将会更好的展示传播您的会议，并更好的宣传活动组织单位。LOGO图片支持png，jpg，gif格式。小于5M，并保持图片的清晰度。")])])],1):e._e(),e._v(" "),"select"===t.type?n("a-form-item",{class:t.class,attrs:{label:t.label,"label-col":t.labelCol?{span:t.labelCol}:{},"wrapper-col":t.wrapperCol?{span:t.wrapperCol}:{}}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[t.value,{rules:[{required:t.required,message:t.msg}]}],expression:"[item.value, { rules: [{ required: item.required, message: item.msg }]}]"}],class:t.class,attrs:{placeholder:t.msg}},e._l(t.options,(function(t){return n("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),1)],1):e._e()],1)})),e._v(" "),n("div",{staticClass:"textCenter mt30"},[n("div",{staticClass:"draff mr30",on:{click:function(t){return e.handleSubmit(!0,t)}}},[e._v("\n        保存草稿\n      ")]),e._v(" "),n("div",{staticClass:"submit ml30",on:{click:function(t){return e.handleSubmit(!1,t)}}},[e._v("\n        提交认证\n      ")])])],2)],1)}),[],!1,null,"96630b0a",null).exports),k={components:{StartClassStatus:h,OrganForm:T,TeacherForm:T},data:function(){return{isTeacher:!1,formTeachConfig:[{label:"真实姓名",msg:"请输入姓名",value:"name",type:"input",required:!0,labelCol:5,wrapperCol:16},{label:"手机号码",msg:"请输入手机号码",value:"phone",type:"input",required:!0,class:"formPhone",labelCol:5,wrapperCol:16},{label:"邮箱地址",msg:"请输入邮箱地址",value:"email",type:"input",required:!0,labelCol:5,wrapperCol:16,formAttr:{type:"email"}},{label:"身份证明",msg:"请选择身份证明",value:"cardType",type:"select",required:!0,labelCol:5,wrapperCol:10,options:[{label:"身份证",value:1},{label:"护照",value:2}],class:"formSelect"},{label:"上传身份证明",msg:"请上传身份证明",value:"certificate",type:"upload",required:!0,labelCol:5,wrapperCol:16,class:"uploadDec"},{label:"资格证书",msg:"请上传资格证书",value:"material",type:"upload",required:!0,class:"formBook",labelCol:5,wrapperCol:16},{label:"其它资质证明",msg:"请上传其它资质证明",value:"supplement",type:"upload",required:!1,class:"formLogo otherLogo",labelCol:5,wrapperCol:16},{label:"是否有入驻其它平台？如有，请列举",msg:"请列举平台名称!",value:"remark",type:"input",class:"formOther",required:!1,labelCol:8,wrapperCol:13}],formOrganConfig:[{label:"单位名称",msg:"请输入主办方名称!",value:"name",type:"input",required:!0,labelCol:5,wrapperCol:16},{label:"单位地址",msg:"请输入主办方地址!",value:"address",type:"input",required:!0,labelCol:5,wrapperCol:16},{label:"营业执照/证明信(加盖公章)",msg:"请上传营业执照/证明信(加盖公章)",value:"certificate",type:"upload",class:"official",required:!0},{label:"单位logo",msg:"请上传logo图片",value:"material",type:"upload",class:"formLogo",required:!0,labelCol:5,wrapperCol:16},{label:"联系人姓名",msg:"请输入真实姓名!",value:"contact",type:"input",class:"formOther",required:!0,labelCol:5,wrapperCol:16},{label:"联系人电话",msg:"请输入联系电话!",value:"phone",type:"input",class:"formOther formPhone",required:!0,labelCol:5,wrapperCol:16},{label:"是否有入驻其它平台？如有，请列举",msg:"请列举平台名称!",value:"remark",type:"input",class:"formOther",required:!1,labelCol:8,wrapperCol:13}],data:{},init:!1}},mounted:function(){this.getHandleInfo()},methods:{againSubmit:function(){this.$set(this.data,"status",0),this.isTeacher=2===this.data.draft.type},getHandleInfo:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/school/user/settled/index");case 2:r=t.sent,0===(data=r.data).code&&Object.keys(data.data).length>0&&(e.data=data.data,0===e.data.status?e.isTeacher=2===e.data.draft.type:2===e.data.status&&e.$router.push({path:"/organizers/courseManagement"})),e.init=!0;case 6:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:"我要开课",meta:[{hid:"description",name:"description",content:"我要开课"}]}}},S=(r(1714),Object(v.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.init?n("div",[e._m(0),e._v(" "),e.data.status&&0!==e.data.status?n("StartClassStatus",{attrs:{data:e.data},on:{againSubmit:e.againSubmit}}):n("div",{staticClass:"content pt20 pb20"},[n("div",{staticClass:"container"},[n("div",{staticClass:"selectWrap"},[n("div",{staticClass:"mr70",on:{click:function(t){e.isTeacher=!1}}},[e.isTeacher?n("img",{staticClass:"selectImg hand",attrs:{src:r(1705)}}):n("img",{staticClass:"selectImg hand",attrs:{src:r(1704)}})]),e._v(" "),n("div",{staticClass:"ml70",on:{click:function(t){e.isTeacher=!0}}},[e.isTeacher?n("img",{staticClass:"selectImg hand",attrs:{src:r(1706)}}):n("img",{staticClass:"selectImg hand",attrs:{src:r(1707)}})])]),e._v(" "),n("div",{staticClass:"formWrap pb30"},[e.isTeacher?n("TeacherForm",{attrs:{data:e.data,formConfig:e.formTeachConfig}}):n("OrganForm",{attrs:{data:e.data,formConfig:e.formOrganConfig}})],1)])])],1):e._e()}),n,!1,null,"090ccace",null));t.default=S.exports}}]);