(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1069:function(t,e,n){"use strict";n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"m",(function(){return v})),n.d(e,"b",(function(){return _})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return y})),n.d(e,"f",(function(){return x})),n.d(e,"i",(function(){return C})),n.d(e,"g",(function(){return k})),n.d(e,"k",(function(){return w})),n.d(e,"h",(function(){return O}));var r=n(19),o=n(31),c=n.n(o),l=function(){return r.a.post("/school/train/trade/coupon")},f=function(t){return r.a.post("/school/train/trade/submit",t,{headers:{"Content-Type":"application/json;charset=utf-8"}})},d=function(t){var e=t.categoryId,n=t.res;return r.a.post("/school/train/article/subject/".concat(e),c.a.stringify(n))},m=function(t){return r.a.post("/school/train/article/subject/detail/".concat(t))},v=function(t){return r.a.post("/school/train/trade/upload",t)},_=function(){return r.a.post("/school/train/article/experts")},h=function(t){var e=t.parentId,n=t.type;return r.a.post("/school/train/article/category/list/".concat(e,"/").concat(n))},y=function(t){return r.a.post("/school/train/article/category/info/".concat(t))},x=function(){return r.a.post("/school/train/store/category")},C=function(t){return r.a.post("/school/train/store/stores",c.a.stringify(t))},k=function(t){return r.a.post("/school/train/store/detail/".concat(t))},w=function(t){return r.a.post("/school/train/trade/problem",c.a.stringify(t))},O=function(t){return r.a.post("/school/train/store/info/".concat(t))}},1089:function(t,e,n){"use strict";e.a={phone:/^\d{11}$/,email:/^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9.]*\.[A-Za-z]{2,6}$/,money:/^(0|\+?[1-9][0-9]*)$/}},1098:function(t,e,n){t.exports=n.p+"img/kefu.1ded7b3.png"},1104:function(t,e,n){},1148:function(t,e,n){t.exports=n.p+"img/hoticon.6d31773.png"},1182:function(t,e,n){t.exports=n.p+"img/school.78184b9.png"},1183:function(t,e,n){t.exports=n.p+"img/offerItemBg.e337622.png"},1187:function(t,e,n){"use strict";var r=n(1104);n.n(r).a},1214:function(t,e,n){},1215:function(t,e,n){"use strict";n(280),n(1050);var r=n(43),o={props:{country:{type:Number,required:!0},type:{type:String,default:"code"},disabled:{type:Boolean,default:!1}},data:function(){return{countryData:r.countryData}},computed:{countryValue:function(){var t=this,e=r.countryData.find((function(p){return p.code===t.country}));return e&&e.id?e.id:0}},methods:{handleChange:function(t){var e=r.countryData.find((function(p){return p.id===t}));this.$emit("update:country",e.code)}}},c=(n(1187),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CountrySelect"},[n("a-select",{attrs:{value:t.countryValue,placeholder:"请选择区号",disabled:t.disabled,"option-label-prop":"label",dropdownMatchSelectWidth:!1},on:{change:t.handleChange}},t._l(t.countryData,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.id,label:"+"+e.code}},[t._v("\n      "+t._s(e.name)+" + "+t._s(e.code)+"\n    ")])})),1)],1)}),[],!1,null,"d9e18f9e",null);e.a=component.exports},1217:function(t,e,n){t.exports=n.p+"img/x1.d43545a.png"},1218:function(t,e,n){t.exports=n.p+"img/x2.0bdf515.png"},1219:function(t,e,n){t.exports=n.p+"img/x3.b3f7d56.png"},1220:function(t,e,n){t.exports=n.p+"img/x4.0f1a7a8.png"},1221:function(t,e,n){t.exports=n.p+"img/x5.f859347.png"},1222:function(t,e,n){t.exports=n.p+"img/x6.da54d84.png"},1223:function(t,e,n){t.exports=n.p+"img/x7.7b1f095.png"},1224:function(t,e,n){t.exports=n.p+"img/x8.83dbaf8.png"},1228:function(t,e,n){t.exports=n.p+"img/scientificSuccess.b98d308.png"},1285:function(t,e,n){t.exports=n.p+"img/c1.dce824c.png"},1286:function(t,e,n){t.exports=n.p+"img/c10.dce824c.png"},1287:function(t,e,n){t.exports=n.p+"img/c2.d9466f0.png"},1288:function(t,e,n){t.exports=n.p+"img/c3.a13556a.png"},1289:function(t,e,n){t.exports=n.p+"img/c4.0e1f0f6.png"},1290:function(t,e,n){t.exports=n.p+"img/c5.d950df5.png"},1291:function(t,e,n){t.exports=n.p+"img/c6.8af79ea.png"},1292:function(t,e,n){t.exports=n.p+"img/c7.ddf0fed.png"},1293:function(t,e,n){t.exports=n.p+"img/c8.085ae83.png"},1294:function(t,e,n){t.exports=n.p+"img/c9.ad17091.png"},1295:function(t,e,n){t.exports=n.p+"img/o1.e4ef0f1.png"},1296:function(t,e,n){t.exports=n.p+"img/o2.6005482.png"},1297:function(t,e,n){t.exports=n.p+"img/o3.120d082.png"},1298:function(t,e,n){t.exports=n.p+"img/o4.344f491.png"},1299:function(t,e,n){t.exports=n.p+"img/offerBg.4ac2300.png"},1300:function(t,e,n){t.exports=n.p+"img/arrowIcon.1142e37.png"},1301:function(t,e,n){t.exports=n.p+"img/s1.841693f.png"},1302:function(t,e,n){t.exports=n.p+"img/s2.2afe289.png"},1303:function(t,e,n){t.exports=n.p+"img/s3.1d4fd55.png"},1304:function(t,e,n){t.exports=n.p+"img/s4.8fd163d.png"},1380:function(t,e,n){var map={"./1.png":1381,"./2.png":1382,"./arrowIcon.png":1300,"./bg1.png":1383,"./bg2.png":1384,"./bg3.png":1385,"./bg4.png":1386,"./bgX.png":1387,"./c1.png":1285,"./c10.png":1286,"./c2.png":1287,"./c3.png":1288,"./c4.png":1289,"./c5.png":1290,"./c6.png":1291,"./c7.png":1292,"./c8.png":1293,"./c9.png":1294,"./flow1.png":1388,"./flow2.png":1389,"./formTitleBg.png":1390,"./hoticon.png":1148,"./kefu.png":1098,"./leftNav.png":1391,"./o1.png":1295,"./o2.png":1296,"./o3.png":1297,"./o4.png":1298,"./offerBg.png":1299,"./offerItemBg.png":1183,"./p1.png":1392,"./p10.png":1393,"./p2.png":1394,"./p3.png":1395,"./p4.png":1396,"./p5.png":1397,"./p6.png":1398,"./p7.png":1399,"./p8.png":1400,"./p9.png":1401,"./paperSuccess.png":1402,"./s1.png":1301,"./s2.png":1302,"./s3.png":1303,"./s4.png":1304,"./school.png":1182,"./scientificSuccess.png":1228,"./titleBg.png":1403,"./x1.png":1217,"./x2.png":1218,"./x3.png":1219,"./x4.png":1220,"./x5.png":1221,"./x6.png":1222,"./x7.png":1223,"./x8.png":1224};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=1380},1381:function(t,e,n){t.exports=n.p+"img/1.9ac98f8.png"},1382:function(t,e,n){t.exports=n.p+"img/2.9a7c57c.png"},1383:function(t,e,n){t.exports=n.p+"img/bg1.f0babb9.png"},1384:function(t,e,n){t.exports=n.p+"img/bg2.715dd84.png"},1385:function(t,e,n){t.exports=n.p+"img/bg3.e9a2401.png"},1386:function(t,e,n){t.exports=n.p+"img/bg4.628b9e7.png"},1387:function(t,e,n){t.exports=n.p+"img/bgX.a99c243.png"},1388:function(t,e,n){t.exports=n.p+"img/flow1.706ac33.png"},1389:function(t,e,n){t.exports=n.p+"img/flow2.de92b34.png"},1390:function(t,e,n){t.exports=n.p+"img/formTitleBg.a7382aa.png"},1391:function(t,e,n){t.exports=n.p+"img/leftNav.cf6b1dc.png"},1392:function(t,e,n){t.exports=n.p+"img/p1.abf2295.png"},1393:function(t,e,n){t.exports=n.p+"img/p10.9b00f97.png"},1394:function(t,e,n){t.exports=n.p+"img/p2.c959827.png"},1395:function(t,e,n){t.exports=n.p+"img/p3.cfe3249.png"},1396:function(t,e,n){t.exports=n.p+"img/p4.a26d17b.png"},1397:function(t,e,n){t.exports=n.p+"img/p5.bff5a62.png"},1398:function(t,e,n){t.exports=n.p+"img/p6.0390966.png"},1399:function(t,e,n){t.exports=n.p+"img/p7.bab507f.png"},1400:function(t,e,n){t.exports=n.p+"img/p8.35af4df.png"},1401:function(t,e,n){t.exports=n.p+"img/p9.9d32065.png"},1402:function(t,e,n){t.exports=n.p+"img/paperSuccess.a50ebd5.png"},1403:function(t,e,n){t.exports=n.p+"img/titleBg.5f2fff7.png"},1505:function(t,e,n){"use strict";var r=n(1214);n.n(r).a},1506:function(t,e,n){},1529:function(t,e,n){"use strict";var r=[{dataIndex:"titleLeft",key:"titleLeft",width:100},{dataIndex:"valueLeft",key:"valueLeft",width:300},{dataIndex:"titleRight",key:"titleRight",width:100},{dataIndex:"valueRight",key:"valueRight",width:300}],o=[{titleLeft:"甲方",valueLeft:"",titleRight:"乙方",valueRight:"广州科奥信息技术有限公司"},{titleLeft:"证件号",valueLeft:"",titleRight:"信用代码",valueRight:"91440104304765491G"},{titleLeft:"地址",valueLeft:"",titleRight:"地址",valueRight:"广东省广州市越秀区中山一路57号南方铁道大厦27楼"},{titleLeft:"联系人",valueLeft:"",titleRight:"联系人",valueRight:""},{titleLeft:"手机",valueLeft:"",titleRight:"手机",valueRight:""},{titleLeft:"电话",valueLeft:"",titleRight:"电话",valueRight:""},{titleLeft:"邮箱",valueLeft:"",titleRight:"邮箱",valueRight:"Service@keoaeic.org"},{titleLeft:"QQ",valueLeft:"",titleRight:"QQ",valueRight:""}],c={data:function(){return{columns:r,tableData:o,secordData:["1、乙方需对辅导质量和进度负责，若甲方对辅导方式、内容等有修改意见时（以邮件或者在线投诉等方式），乙方应按要求及时改进，同时乙方需按合同及时完成辅导。","2、乙方须在合同协定的时间内完成辅导，如因故无法在协定时间内完成辅导，须提前10个工作日与甲方协商改期。如非不可抗力原因，且未经和甲方协商改期造成课程无法按协定时间完成辅导，乙方须赔偿经济损失。","3、甲方须在合同协定的时间内完成听课，如因故无法在协定时间内完成听课，须提前10个工作日与乙方协商改期。如非不可抗力原因，且未经和乙方协商改期造成课程无法按协定时间完成听课所导致的服务时间延期，将由甲方自行承担。","4、乙方对投稿期刊拥有自主选择权，但保证所选目标期刊上一年度（期刊级别）影响因子能达到本合同条约要求。","5、服务期限到，若论文仍未被期刊录用，甲方有权更换本合同论文继续享有本合同服务，或者终止合同且乙方须退还论文发表推荐服务定金。","6、在论文录用后的1年内，非甲方原因导致论文在期刊录用后未见刊或未检索，乙方需退还甲方已支付的论文发表推荐服务全部费用。","7、甲方应按照本合同的约定及时足额向乙方支付服务费用。","8、甲方须保证论文的原创性、没有公开、没有处于其他期刊投稿的流程中和没有转于合同外的第三方，否则造成的论文未被期刊录用、在期刊录用后未见刊或未检索的后果由甲方自行承担，乙方有权没收定金并终止合同，并有追究连带责任的权利。","9、除双方明确约定外，甲乙双方不得单方面终止合同，否则守约方有权要求违约方支付不超合同金额150%的违约金并承担连带责任。","10、甲乙双方的任何一方由于不可抗力的因素或政策调整时，经双方裁定可终止本合同。","11、未经与乙方沟通，甲方不得而私自向期刊或出版社询问（包含但不限于通过电话、传真、QQ等方式）稿件进程，若因此产生对稿件的不利影响，甲方承担全部责任。","12、若因甲方原因（如不按时返稿、不及时缴纳期刊版面费、没按要求修改等）导致稿件不能成功发表，则乙方有权没收定金并终止合同，并有追究连带责任的权利。","13、自合同签订日起，乙方不得私自将本合同论文公开，或者转于合同外的第三方，若因此而造成论文在本合同目标期刊录用前被网络公开或者被其他期刊引用，乙方应承担全部责任，并赔偿甲方经济损失，赔偿金额最高不超过本合同金额的300%。","14、在合同行进过程中，对出现的各种问题，甲乙双方应坦诚沟通、积极协商和相互协助，以保障合同论文能高效发表。"],fourData:["1、若因甲方未按时支付服务费或期刊要求的费用（如版面费），而导致稿件未被期刊录用，不得归责于乙方。","2、甲方在支付定金后，不愿意继续履约的，视为违约，乙方有权没收定金作为违约金。","3、若甲方未在合同规定期限内缴纳全部服务款，且乙方书面催款2次后仍拖延，乙方有权向甲方所在单位发送费用的催缴通知。","4、服务有效期内，如因甲方论文质量或其他甲方的原因，而多次被期刊拒稿，乙方有权向甲方提出退稿要求并终止合同，定金全额退还。","5、乙方确保服务至本合同论文被期刊录用，但不保证该论文为甲方所指定的期刊所录用。","6、若录用时目标期刊影响因子已发生了变化，则以该期刊投稿时的影响因子为核准依据。"],sixData:["1、双方对于在履行本合同中所获得包含但不限于以下信息，应当严格保密：","①本合同的各项条款；","②有关本合同的谈判；","③本合同的标的；","④各方的商业秘密。","2、下列情况下，本合同双方可以披露：","①法律要求；","②任何有管辖权的政府机关、监管机构要求；","③向该方的专业顾问或律师披露（如有）；","④非因该方过错，信息进入公有领域","⑤双方事先给予书面同意"],sevenData:["1、本合同一式两份，甲、乙各方各执一份，每份具有同等法律效力。","2、本合同若包含附件，该附件为本合同不可分割之部分，与本合同具有同等法律效力。","3、在合同有效期间内，合同的变更、续签和其他事宜，经甲乙双方商定签署后，可视为本合同的补充协议，与本合同具有同等法律效力。","4、在合同履行过程中发生争议，双方应友好协商解决，双方不愿协商、调解解决或者协商、调解不成的，向乙方所在地人民法院起诉方式解决。"]}}},l=(n(1505),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h600"},[n("p",[t._v("甲方（委托方）：")]),t._v(" "),n("p",[t._v("乙方（服务方）：广州科奥信息技术有限公司")]),t._v(" "),n("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,bordered:"",showHeader:!1,pagination:!1}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第一部分 服务内容\n  ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第二部分 双方责任\n  ")]),t._v(" "),n("ul",t._l(t.secordData,(function(e,r){return n("li",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第三部分 服务费用及支付方式\n  ")]),t._v(" "),n("div",[t._v("\n    1、服务费用：\n  ")]),t._v(" "),n("div",[t._v("\n    本合同服务费用总额人民币:      元 （大写:      圆）。\n  ")]),t._v(" "),t._m(2),t._v(" "),n("div",[t._v("\n    论文确定被期刊录用后的10个工作日内，支付余款人民币¥:      元 （大写:      圆），若逾期，按合同总服务费的1%/天向乙方支付延滞金。\n  ")]),t._v(" "),n("div",[t._v("\n    本合同服务费用不包含合同履行过程中的其它费用（包含但不限于：期刊审稿费、版面费、购买文章抽印本费等）， 如有发生，均由甲方承担，乙方有提前告知甲方应按时缴纳的义务。\n  ")]),t._v(" "),n("div",[t._v("\n    2、支付方式：\n  ")]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第四部分 责任界定\n  ")]),t._v(" "),n("ul",t._l(t.fourData,(function(e,r){return n("li",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第五部分 合同期限\n  ")]),t._v(" "),n("div",[t._v("\n    本合同自甲乙双方签字或盖章之日起生效，自甲方按本合同约定向乙方支付定金之日起履行， 合同履行后至收到书面录用通知且甲方已支付全部服务款后失效， 但乙方还应协助甲方与期刊出版社的沟通，以完成后续校对和出版工作。\n  ")]),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第六部分 保密条款\n  ")]),t._v(" "),n("ul",t._l(t.sixData,(function(e,r){return n("li",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"f600 mt10"},[t._v("\n    第七部分 其他\n  ")]),t._v(" "),n("ul",t._l(t.sevenData,(function(e,r){return n("li",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("a-row",{attrs:{type:"flex"}},[n("a-col",{attrs:{span:18}},[t._v("\n      甲方:\n    ")]),t._v(" "),n("a-col",{attrs:{span:6}},[t._v("\n      乙方：广州科奥信息技术有限公司\n    ")])],1),t._v(" "),n("a-row",{attrs:{type:"flex"}},[n("a-col",{attrs:{span:18}},[t._v("\n      签署人或授权人: \n    ")]),t._v(" "),n("a-col",{attrs:{span:6}},[t._v("\n      法定代表人或授权代表：\n    ")])],1),t._v(" "),n("a-row",{attrs:{type:"flex"}},[n("a-col",{attrs:{span:18}},[t._v("\n      日期：\n    ")]),t._v(" "),n("a-col",{attrs:{span:6}},[t._v("\n      日期：\n    ")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    依据《中华人民共和国合同法》的有关规定，甲乙双方本着平等自愿、诚实信用的原则，根据甲方的实际情况，经双方友好协商，就乙方为甲方提供\n    "),e("span",{staticClass:"c-f81"},[this._v("科研背景提升服务（设置为读取），")]),this._v("\n    达成如下协议，以供双方共同恪守。\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v(" 1、乙方为甲方提供的科研课题项目及匹配合适导师进行"),n("span",{staticClass:"c-f81"},[t._v("科研辅导（设置为读取）")]),t._v("服务。")]),t._v(" "),n("li",[t._v(" 2、乙方提供直播授课平台、论文培训课程、助教服务等。")]),t._v(" "),n("li",[t._v(" 3、甲方委托乙方服务论文为"),n("span",{staticClass:"c-f81"},[t._v("《    （设置为读取）》")]),t._v("（编号：XXX）， 且乙方保证服务至本论文被"),n("span",{staticClass:"c-f81"},[t._v("（设置为读取）")]),t._v("级别期刊录用（邮件或文件等书面形式的录用通知）。")]),t._v(" "),n("li",[t._v(" 4、乙方根据甲方提供的论文，进行论文的初审、期刊匹配及协助发表等服务，以让论文更高效发表。")]),t._v(" "),n("li",[t._v(" 5、为了乙方能及时提供协助和支持等服务，保障论文高效发表，甲方应保证乙方可及时获知稿件在期刊系统中的进度、状态及详情。")]),t._v(" "),n("li",[t._v(" 6、服务期限："),n("span",{staticClass:"c-f81"},[t._v("科研辅导（设置为读取）")]),t._v("阶段服务为收到全款后的2-12个月内；论文发表推荐阶段服务为收到定金之日起的1年，服务期限满，双方若无异议，本合同服务期限自动续延至本合同论文被期刊录用。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    签订之日支付"),e("span",{staticClass:"c-f81"},[this._v("科研辅导（设置为读取）")]),this._v("服务全款¥:      元 （大写:      圆）、论文发表推荐定金人民币¥:      元 （大写:      圆）。共人民币¥:      元 （大写:      圆）\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    本合同约定的支付方式有银行转账、支付宝支付或微信支付等，甲方可自行选择支付方式，相关账号详见附件《"),e("span",{staticClass:"c-f81"},[this._v("（设置为读取）")]),this._v("费付款确认单》。\n  ")])}],!1,null,"40cc0f80",null);e.a=component.exports},1642:function(t,e,n){"use strict";n(76),n(45),n(140);var r=n(33),o=(n(196),n(44),n(17)),c=(n(42),n(30),n(54),n(77)),l=n(1069),f=n(1089),d=n(20),m=n(1529),v=n(1215),_=n(90);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{BiuniqueAgree:m.a,CountrySelect:v.a},props:{formConfig:{type:Array,required:!0},otherConfig:{type:Object,required:!0}},data:function(){return{form:{countryCode:86,customs:{}},optionsData:[],labelCol:{span:3},wrapperCol:{span:21},formNormalConfig:[{label:"姓名",prop:"surname",type:"input",required:!0},{label:"手机",prop:"phone",type:"input",required:!0},{label:"邮箱地址",prop:"email",type:"input",required:!0,formAttr:{type:"email"}},{label:"职称",prop:"position",type:"select"},{label:"学校/单位",prop:"organization",type:"input",required:!0},{label:"最高学历",prop:"education",type:"input",placeholder:"研一，研二",required:!0,iscCustoms:!0},{label:"专业",prop:"speciality",type:"input",placeholder:"本科、硕士、博士对应",required:!0,iscCustoms:!0},{label:"英语水平",prop:"englishLevel",type:"input",placeholder:"四级，550",required:!0,iscCustoms:!0},{label:"论文研究方向",prop:"paperDirection",type:"input",placeholder:"CAR-T细胞免疫疗法在癌症治疗中的进展",iscCustoms:!0,required:!0},{label:"论文级别",prop:"paperLevel",type:"select",placeholder:"SCI",tips:"请标注SCI,SSCI,CSSCI,EI，CPCI,普刊，EIE论文，毕业论文",iscCustoms:!0,options:Object.keys(_.j).map((function(p){return{name:_.j[p],value:+p}})),required:!0},{label:"已发表论文",prop:"paperStatus",type:"input",placeholder:"2篇EI国际会议论文",tips:"请标注SCI,SSCI,CSSCI,EI，CPCI,EI会议，普刊",iscCustoms:!0,required:!0},{label:"培训目标",prop:"trainTerget",type:"input",placeholder:"申博，海外",required:!0,tips:"请标注保研，申博（国内/海外），毕业，职位晋升等",iscCustoms:!0},{label:"论文发表时间",prop:"trainCycle",type:"input",placeholder:"2022年6月",required:!0,iscCustoms:!0,tips:"论文最迟发表时间"}],checked:!1,isSuccess:!1,config:d.a,visible:!1,positionList:[]}},created:function(){this.getOptionsHandle(),this.getPositionList()},methods:{getPositionList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.g)("userPosition");case 2:n=e.sent,0===(data=n.data).code&&(t.positionList=data.data.options,(r=t.formNormalConfig.findIndex((function(p){return"position"===p.prop})))>-1&&t.$set(t.formNormalConfig,r,y(y({},t.formNormalConfig[r]),{},{options:t.positionList})));case 5:case"end":return e.stop()}}),e)})))()},getOptionsHandle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.j)();case 2:return n=e.sent,0===(data=n.data).code&&t.$set(t.optionsData,"card",data.data.cardList),e.next=7,Object(c.e)({type:t.otherConfig.type,channel:0});case 7:0===(r=e.sent).data.code&&r.data.data.draftData&&(t.form=JSON.parse(r.data.data.draftData),t.form.draftId=r.data.data.draftId);case 9:case"end":return e.stop()}}),e)})))()},customRequest:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=new FormData).append("file",t.file),n.next=4,Object(l.m)(r);case 4:o=n.sent,0===(data=o.data).code&&(e.$message.success("上传成功!"),e.$set(e.form,"document",data.data),e.$refs.ruleForm.validateField(["document"]));case 7:case"end":return n.stop()}}),n)})))()},backLinkHistory:function(){var t=this;this.$confirm({content:"是否确定离开不进行".concat(this.otherConfig.title),onOk:function(){t.$router.go(-1)},onCancel:function(){}})},goBack:function(){var path=+this.$route.query.categoryId?"/biunique/".concat(12===this.otherConfig.type?"scientificCategoryDetail":"paperCategoryDetail","/").concat(this.$route.query.categoryId):"/biunique/".concat(12===this.otherConfig.type?"scientific":"paper");this.$router.replace(path)},onDraftSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.k)({type:t.otherConfig.type,draftId:t.form.draftId||0,content:JSON.stringify(t.form),channel:0});case 2:n=e.sent,0===n.data.code&&t.$message.success("保存成功!");case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r,o,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=18;break}if(r=f.a.email,!(o=t.form.email)||r.test(o)){e.next=5;break}return e.abrupt("return",t.$message.error("请输入正确邮箱地址!"));case 5:return d=y(y({},t.form),{},{productId:t.otherConfig.type%10,service:+t.$route.params.id}),+t.$route.query.categoryId&&(d.categoryId=+t.$route.query.categoryId),t.formNormalConfig.forEach((function(element){element.iscCustoms&&(d.customs[element.prop]=d[element.prop])})),e.next=10,Object(l.l)(d);case 10:if(m=e.sent,0!==m.data.code){e.next=18;break}if(t.$message.success("申请成功!"),t.isSuccess=!0,!t.form.draftId){e.next=18;break}return e.next=18,Object(c.c)({draftId:t.form.draftId});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},C=(n(2156),n(18)),component=Object(C.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isSuccess?r("div",{staticClass:"bg-fff textCenter mt10 statusWrap"},[r("img",{attrs:{src:n(1380)("./"+(12===t.otherConfig.type?"scientificSuccess":"paperSuccess")+".png")}}),t._v(" "),r("p",{staticClass:"c-f57 fs20 mt20"},[t._v("\n      "+t._s(12===t.otherConfig.type?"学科匹配中":"稿件上传成功")+"，我们课程顾问将会和您联系，请耐心等待哦~\n    ")]),t._v(" "),r("div",{staticClass:"hand backBtns",on:{click:t.goBack}},[t._v("\n      返回\n    ")])]):r("div",{staticClass:"container pt30"},[r("div",{staticClass:"fs20 c-fff textCenter titles pt10 pb10"},[t._v("\n      "+t._s(t.otherConfig.title)+"\n    ")]),t._v(" "),r("a-form-model",{ref:"ruleForm",staticClass:"bg-fff pt25 form",attrs:{model:t.form}},[r("div",{staticClass:"border5Bottom pl100 pr100"},t._l(t.formConfig,(function(e){return r("a-form-model-item",{key:e.prop,attrs:{label:e.label+":",prop:e.prop,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,rules:[{required:e.required,message:"请选择"+e.label,trigger:"radio"===e.type?"change":"blur"}]}},["select"===e.type?r("a-select",{attrs:{placeholder:"请选择"+e.label},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}},t._l(e.options,(function(e){return r("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),1):"input"===e.type?r("a-input",{attrs:{placeholder:"请输入"+e.label},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}}):"upload"===e.type?[t.form[e.prop]?r("a",{staticClass:"c-333 textCenter uploadBtn hand",attrs:{href:""+t.config.IMG_URL.default+t.form[e.prop],target:"_blank"}},[t._v("\n              论文.doc\n            ")]):t._e(),t._v(" "),r("a-upload",{attrs:{accept:".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",customRequest:t.customRequest,"show-upload-list":!1},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}},[t.form[e.prop]?r("div",{staticClass:"c-2E4 hand ml13"},[r("a-icon",{attrs:{type:"undo"}}),t._v("\n                重新上传\n              ")],1):r("div",{staticClass:"uploadBtn hand"},[r("a-icon",{attrs:{type:"plus-circle"}}),t._v("\n                上传文件\n              ")],1)])]:"radio"===e.type?r("a-radio-group",{model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}},t._l(e.options,(function(e){return r("a-radio",{key:e.value,attrs:{value:e.value}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),1):t._e()],2)})),1),t._v(" "),r("div",{staticClass:"border5Bottom pl100 pr100 normalFormWrap"},[r("div",{staticClass:"borderTitle fs16 pb5 mb25 pt25"},[t._v("\n          作者信息\n        ")]),t._v(" "),r("div",t._l(t.formNormalConfig,(function(e){return r("a-form-model-item",{key:e.prop,class:e.prop,attrs:{label:e.label+":",prop:e.prop,"label-col":{span:6},"wrapper-col":{span:18},rules:[{required:e.required,message:"请输入"+e.label}]}},["phone"===e.prop?r("div",{staticClass:"phoneItem"},[r("CountrySelect",{attrs:{country:t.form.countryCode},on:{"update:country":function(e){return t.$set(t.form,"countryCode",e)}}}),t._v(" "),"input"===e.type?r("a-input",{attrs:{placeholder:"请输入"+e.label},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}}):t._e()],1):"input"===e.type?[r("a-input",{attrs:{placeholder:e.placeholder||"请输入"+e.label,type:e.formAttr&&e.formAttr.type||"text"},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}}),t._v(" "),e.tips?r("span",{staticClass:"fs12"},[t._v("\n                "+t._s(e.tips)+"\n              ")]):t._e()]:"select"===e.type?r("a-select",{attrs:{placeholder:e.placeholder||"请选择"+e.label},model:{value:t.form[e.prop],callback:function(n){t.$set(t.form,e.prop,n)},expression:"form[item.prop]"}},t._l(e.options,(function(n,o){return r("a-select-option",{key:o,attrs:{value:"position"===e.prop?n.name:n.value}},[t._v("\n                "+t._s(n.name)+"\n              ")])})),1):t._e()],2)})),1)]),t._v(" "),r("div",{staticClass:"border5Bottom pl100 pr100 pt25"},[r("a-form-model-item",{attrs:{label:"优惠劵使用:",prop:"card","label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-select",{attrs:{placeholder:"请选择优惠劵使用",allowClear:""},model:{value:t.form.card,callback:function(e){t.$set(t.form,"card",e)},expression:"form.card"}},t._l(t.optionsData.card,(function(e){return r("a-select-option",{key:e.card,attrs:{value:e.card}},[t._v("\n              "+t._s(e.money)+"元优惠券\n            ")])})),1)],1),t._v(" "),(t.form.card,t._e()),t._v(" "),r("div",[r("a-form-model-item",{attrs:{label:"推荐码:",prop:"inviteCode","label-col":{span:3},"wrapper-col":{span:21}}},[r("a-input",{attrs:{placeholder:"请输入推荐码"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode",e)},expression:"form.inviteCode"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"pl100 pr100 pt25 pb25"},[r("a-form-model-item",{attrs:{label:"备注:",prop:"remark","label-col":{span:3},"wrapper-col":{span:21}}},[r("a-input",{attrs:{placeholder:"请输入备注",type:"textarea",rows:4},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),t._e()],1)]),t._v(" "),r("div",{staticClass:"textCenter pt20 pb50"},[t._e(),t._v(" "),r("a-button",{staticClass:"pl30 pr30 ml50 mr50",on:{click:t.onDraftSubmit}},[t._v("\n        保存草稿\n      ")]),t._v(" "),r("a-button",{staticClass:"pl30 pr30",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("\n        "+t._s(12===t.otherConfig.type?"立即提交":"立即投稿")+"\n      ")])],1)],1),t._v(" "),r("a-modal",{attrs:{title:"一对一服务合同",visible:t.visible,footer:null,width:1e3},on:{cancel:function(e){t.visible=!1}}},[r("BiuniqueAgree")],1)],1)}),[],!1,null,"a8a53a36",null);e.a=component.exports},2156:function(t,e,n){"use strict";var r=n(1506);n.n(r).a}}]);