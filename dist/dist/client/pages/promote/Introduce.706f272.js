(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1063:function(t,n,e){"use strict";e.d(n,"j",(function(){return l})),e.d(n,"l",(function(){return f})),e.d(n,"c",(function(){return v})),e.d(n,"a",(function(){return d})),e.d(n,"m",(function(){return _})),e.d(n,"b",(function(){return C})),e.d(n,"e",(function(){return m})),e.d(n,"d",(function(){return h})),e.d(n,"f",(function(){return y})),e.d(n,"i",(function(){return x})),e.d(n,"g",(function(){return k})),e.d(n,"k",(function(){return I})),e.d(n,"h",(function(){return w}));var r=e(19),c=e(30),o=e.n(c),l=function(){return r.a.post("/school/train/trade/coupon")},f=function(t){return r.a.post("/school/train/trade/submit",t,{headers:{"Content-Type":"application/json;charset=utf-8"}})},v=function(t){var n=t.categoryId,e=t.res;return r.a.post("/school/train/article/subject/".concat(n),o.a.stringify(e))},d=function(t){return r.a.post("/school/train/article/subject/detail/".concat(t))},_=function(t){return r.a.post("/school/train/trade/upload",t)},C=function(){return r.a.post("/school/train/article/experts")},m=function(t){var n=t.parentId,e=t.type;return r.a.post("/school/train/article/category/list/".concat(n,"/").concat(e))},h=function(t){return r.a.post("/school/train/article/category/info/".concat(t))},y=function(){return r.a.post("/school/train/store/category")},x=function(t){return r.a.post("/school/train/store/stores",o.a.stringify(t))},k=function(t){return r.a.post("/school/train/store/detail/".concat(t))},I=function(t){return r.a.post("/school/train/trade/problem",o.a.stringify(t))},w=function(t){return r.a.post("/school/train/store/info/".concat(t))}},1176:function(t,n,e){t.exports=e.p+"img/school.78184b9.png"},1177:function(t,n,e){t.exports=e.p+"img/offerItemBg.e337622.png"},1178:function(t,n,e){},1179:function(t,n,e){},1211:function(t,n,e){t.exports=e.p+"img/x1.d43545a.png"},1212:function(t,n,e){t.exports=e.p+"img/x2.0bdf515.png"},1213:function(t,n,e){t.exports=e.p+"img/x3.b3f7d56.png"},1214:function(t,n,e){t.exports=e.p+"img/x4.0f1a7a8.png"},1215:function(t,n,e){t.exports=e.p+"img/x5.f859347.png"},1216:function(t,n,e){t.exports=e.p+"img/x6.da54d84.png"},1217:function(t,n,e){t.exports=e.p+"img/x7.7b1f095.png"},1218:function(t,n,e){t.exports=e.p+"img/x8.83dbaf8.png"},1278:function(t,n,e){var map={"./x1.png":1211,"./x2.png":1212,"./x3.png":1213,"./x4.png":1214,"./x5.png":1215,"./x6.png":1216,"./x7.png":1217,"./x8.png":1218};function r(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=1278},1333:function(t,n,e){"use strict";var r=e(1178);e.n(r).a},1334:function(t,n,e){"use strict";var r=e(1179);e.n(r).a},1335:function(t,n,e){},1521:function(t,n,e){"use strict";var r=e(20),c={props:{data:{type:Object,default:function(){return{}}}},data:function(){return{config:r.a}}},o=(e(1333),e(18)),l={components:{ThinkTankCard:Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ThinkTankCard"},[e("a",{staticClass:"item",attrs:{href:t.config.LINK.ais_pc+"/thinkTank/expertDetail/"+t.data.qid,target:"_blank"}},[e("div",{staticClass:"itemContent"},[e("p",{staticClass:"f600 oneLine"},[t._v("\n        "+t._s(t.data.surname)+"\n      ")]),t._v(" "),e("p",{staticClass:"c-666 fs12 twoLine organ mt20"},[t._v("\n        "+t._s(t.data.organization)+"\n      ")])]),t._v(" "),e("div",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.config.IMG_URL.default+t.data.head,expression:"config.IMG_URL.default + data.head"}],staticClass:"avatorImg",attrs:{alt:""}})])])])}),[],!1,null,"37bed6fc",null).exports},props:{list:{type:Array,required:!0},type:{type:String,required:!0}},data:function(){return{config:r.a}}},f=(e(1334),Object(o.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("a-carousel",{attrs:{arrows:"",dots:!1,autoplay:""}},[r("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"10px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[r("a-icon",{attrs:{type:"left-circle"}})],1),t._v(" "),r("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"10px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[r("a-icon",{attrs:{type:"right-circle"}})],1),t._v(" "),t._l(t.list,(function(n,c){return r("div",{key:c,class:["cardWrap",{twoCardWrap:2===n.length}]},["offer"===t.type?t._l(n,(function(n){return r("div",{key:n.id,staticClass:"imgWrap"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+t.config.IMG_URL.default+n.resource,expression:"`${config.IMG_URL.default}${pItem.resource}`"}],attrs:{width:"236"}}),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e(1177),expression:"require(`@/assets/images/biunique/offerItemBg.png`)"}],staticClass:"imgBg"})])})):t._e(),t._v(" "),"thinkTank"===t.type?t._l(n,(function(t){return r("ThinkTankCard",{key:t.qid,attrs:{data:t}})})):t._e()],2)}))],2)],1)}),[],!1,null,"30d2786d",null));n.a=f.exports},1690:function(t,n,e){var map={"./c0.png":1691,"./c1.png":1692,"./c2.png":1693,"./c3.png":1694};function r(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=1690},1691:function(t,n,e){t.exports=e.p+"img/c0.b52d2fb.png"},1692:function(t,n,e){t.exports=e.p+"img/c1.e35237e.png"},1693:function(t,n,e){t.exports=e.p+"img/c2.8e522e7.png"},1694:function(t,n,e){t.exports=e.p+"img/c3.80dea78.png"},1695:function(t,n,e){t.exports=e.p+"img/book.0401eae.png"},1696:function(t,n,e){t.exports=e.p+"img/large.deab059.png"},1697:function(t,n,e){"use strict";var r=e(1335);e.n(r).a},2197:function(t,n,e){"use strict";e.r(n);var r=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"Introduce pt40 pb40 pl70 pr70"},[n("div",{staticClass:"c-fff border-y"},[this._v("\n      艾思云课堂科研辅导项目\n    ")]),this._v(" "),n("div",{staticClass:"fs14 c-333 titleWrap mt15"},[this._v("\n      科研之路，困难重重，论文一次次被拒，自己找不到方法，也没有人指导。在没有他人的帮助下，全靠自己摸索，很难在有效时间内发表论文，进而完成学业/工作目标。如果有老师能够指点一下，能够为我们的科研之路指出一条明路。在留学申请或保送升学时，有一篇科研论文或科研经验会大大提升你录取的概率。\n      "),n("div",{staticClass:"mt10"},[this._v("\n        艾思云课堂科研背景提升项目，由来自国内外知名高校的导师带领学员探索科研的乐趣、提升科研能力与学术经验，项目根据学生的科研兴趣方向匹配导师，制定个性化专属课程，培养学生科研能力、论文写作能力，产出科研论文/科研报告/导师推荐信/科研项目证明等，助力国内外名校申请/硕博毕业/职位晋升。\n      ")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"c-333 fs14 pl40 pr40 mt20 titleBg"},[n("span",{staticClass:"f600 fs18"},[this._v("根据")]),this._v("学员专业和研究领域定制科研项目，小班or一对一线上直播授课+学术研讨+助教答疑。在导师的带领下体验完整的科研项目，包括构思课题、确立课题、丰富专业知识、搜索与阅读文献、撰写学术论文以及投稿发表。\n    ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"peopleBg"},[n("div",{staticClass:"c-fff border-y"},[this._v("\n        使用人群\n      ")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"pt30 pb30 textCenter powerWrap"},[n("div",{staticClass:"c-333 border-y"},[this._v("\n      实力品牌保障 为论文发表护航\n    ")]),this._v(" "),n("img",{staticClass:"mr60",attrs:{src:e(1176)}})])}],c=(e(44),e(32),e(43),e(17)),o=e(1521),l=e(137),f=e(1063),v=e(42),d={components:{BiuniqueCarousel:o.a},asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)();case 2:return n=t.sent,t.next=5,Object(l.a)("pc_letterofoffer");case 5:return e=t.sent,t.abrupt("return",{thinkTanklist:Object(v.arrTrans)(8,n.data.data.entries),offerList:Object(v.arrTrans)(4,e.data.data.pc_letterofoffer)});case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{thinkTanklist:[],offerList:[],project:[{title:"PBL项目式学习"},{title:"Ph.D博士以上导师"},{title:"定制课程计划"},{title:"论文产出导向"}],people:[{title:"想申请国内外名校，却没有科研经历，简历没吸引力者"},{title:"投稿、返修屡屡被拒，急需导师针对性辅导修改者"},{title:"想申请海外留学，希望提升名校申请竞争力者"},{title:"已完成论文手稿，不懂投稿流程，需要帮助推荐发表论文者"},{title:"有科研经历，但没有论文，很难在众多申请中脱颖而出者"},{title:"想提升论文水平，发表高级别论文者"},{title:"无课题方向或者有课题方向却没有导师指导者"}],getting:[{title:"科研论文",value:"SCI/SSCI/EI期刊论文,EI/CPCI会议论文,中文核心期刊论文"},{title:"科研报告",value:"符合国际标准的学术报告,申请名校加分"},{title:"推荐信",value:"导师实名推荐信,助力申请名校"},{title:"项目结业证书",value:"提供科研项目,学术能力证明"}],arrange:[{title:"第一阶段：指导科研项目"},{title:"第二阶段：论文写作与发表课程+论文辅导"},{title:"第三阶段：论文投稿发表与返修指导"}],service:[{title:"论文指导修改",value:"大牛导师,一对一指导修改"},{title:"直播授课交流",value:"艾思云课堂直播平台,与导师实时互动交流"},{title:"学术大牛导师",value:"匹配国内外,知名高校导师,授课辅导"},{title:"课程私定+科研探索",value:"个性化定制,私人专属课程,参与科研项目,研究与探索"},{title:"双师作业辅导+答疑",value:"导师+助教,理论+实操应用,全程督学，答疑解惑"},{title:"论文发表支持",value:"SCI/SSCI/CSSCI/,EI/CPCI会议等,国内外核心刊物,推荐发表"}],commonList:[{title:"袁同学",value:"已经如愿申请上国外研究生，有幸跟随王老师一起学习。课程对于向我这样的科研小白非常友好，王老师深入浅出地向我讲授了专业领域的国际前沿知识，还成功发表论文了一篇EI国际会议论文，让我获得了推免机会。感谢！"},{title:"覃同学",value:"之前对科研完全不懂，谢谢老师的领路，发表了一篇核心论文，现在已就读于国内某985高校。"},{title:"朱同学",value:"已成功发表一篇SCI，为我的读博生涯更添一分色彩，以后要更加努力。"},{title:"杨同学",value:"国内C刊挺不好发的，老师建议发表SSCI。刘老师人很好，给了我很多的修改建议，不管是研究思路上还是论文写作上，都给了我很大的帮助。"}]}},head:function(){return{title:"科研背景提升—艾思云课堂"}}},_=(e(1697),e(18)),component=Object(_.a)(d,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"pt30 pb30 pl80 pr80 bg-fff"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      全科个性化定制 从指导选题到论文发表\n    ")]),t._v(" "),t._m(1),t._v(" "),r("ul",{staticClass:"mt20 projectWrap"},t._l(t.project,(function(n,c){return r("li",{key:c,staticClass:"projectItem"},[r("div",{staticClass:"imgWrap"},[r("img",{attrs:{src:e(1690)("./c"+c+".png"),width:"217"}})]),t._v(" "),r("div",{staticClass:"fs16 titleWrap"},[t._v("\n          "+t._s(n.title)+"\n        ")])])})),0)]),t._v(" "),r("div",[t._m(2),t._v(" "),r("ul",{staticClass:"peopleProject"},t._l(t.people,(function(n,e){return r("li",{key:e,staticClass:"peopleItem bg-fff"},[r("div",{staticClass:"iconWrap"},[r("a-icon",{attrs:{type:"right"}})],1),t._v(" "),r("div",{staticClass:"pl20"},[t._v("\n          "+t._s(n.title)+"\n        ")])])})),0)]),t._v(" "),r("div",{staticClass:"bg-fff pt30"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      项目收获\n    ")]),t._v(" "),r("ul",{staticClass:"gettingWrap"},t._l(t.getting,(function(n,e){return r("li",{key:e,class:"getItem"+e},[r("div",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),t._l(n.value.split(","),(function(n,e){return r("div",{key:e,staticClass:"textCenter c-333"},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)})),0)]),t._v(" "),r("div",{staticClass:"arrange"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      课程安排\n    ")]),t._v(" "),r("div",{staticClass:"c-333 fs18 mt15 textCenter"},[t._v("\n      "+t._s("12周/50课时起，9周授课&研讨+3周论文撰写+40节论文基础课")+"\n    ")]),t._v(" "),r("ul",{staticClass:"arrangeWrap"},t._l(t.arrange,(function(n,e){return r("li",{key:e,staticClass:"pt20 pb20 arrangeItem"},[r("a-icon",{staticClass:"icon",attrs:{type:"caret-right"}}),t._v(" "),r("div",{staticClass:"title ml16"},[t._v("\n          "+t._s(n.title)+"\n        ")])],1)})),0),t._v(" "),r("img",{staticClass:"book",attrs:{src:e(1695)}})]),t._v(" "),r("div",{staticClass:"bg-fff pt30 pl80 pr80 pb30"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      服务内容\n    ")]),t._v(" "),r("ul",{staticClass:"serverWrap mt20"},t._l(t.service,(function(n,e){return r("li",{key:e},[r("div",{staticClass:"title"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),t._l(n.value.split(","),(function(n,e){return r("div",{key:e,staticClass:"textCenter c-333"},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)})),0)]),t._v(" "),r("div",{staticClass:"pt30 pb30 flow textCenter"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      服务流程\n    ")]),t._v(" "),r("img",{staticClass:"mt20",attrs:{src:e(1696)}})]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"bg-fff pt30 pb30"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      名校大牛导师 带你科研起飞\n    ")]),t._v(" "),r("p",{staticClass:"c-333 fs14 textCenter mt20"},[t._v("\n      艾思云课堂汇集国内外智库资源，可为论文一对一和背景提升学员匹配同领域的专家进行个性化针对性的科研论文辅导培训，助力学员科研成果产出。\n    ")]),t._v(" "),r("BiuniqueCarousel",{attrs:{list:t.thinkTanklist,type:"thinkTank"}})],1),t._v(" "),r("div",{staticClass:"bg-fff pt30 pb30 offerWrap"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      名校Offer及录用函\n    ")]),t._v(" "),r("BiuniqueCarousel",{staticClass:"mt40",attrs:{list:t.offerList,type:"offer"}})],1),t._v(" "),r("div",{staticClass:"bg-fff pt30 pb30"},[r("div",{staticClass:"c-333 border-y"},[t._v("\n      来自于优秀学员的声音\n    ")]),t._v(" "),r("ul",{staticClass:"commentWrap"},t._l(t.commonList,(function(n,c){return r("li",{key:c},[r("div",{staticClass:"titleWrap"},[r("img",{attrs:{src:e(1278)("./x"+(c+1)+".png")}}),t._v(" "),r("div",{staticClass:"mt10 f600 c-333"},[t._v("\n            "+t._s(n.title)+"\n          ")])]),t._v(" "),r("div",{staticClass:"pl20 fs12 c-666 valueWrap"},[t._v("\n          "+t._s(n.value)+"\n        ")])])})),0)])])}),r,!1,null,"27da2b38",null);n.default=component.exports}}]);