(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1119:function(t,e,r){},1243:function(t,e,r){"use strict";var n=r(1119);r.n(n).a},1281:function(t,e,r){"use strict";var n=r(20),o={props:{data:{type:Array,required:!0}},data:function(){return{config:n.a}}},c=(r(1243),r(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("div",{staticClass:"page"},[r("a-carousel",{attrs:{arrows:"",autoplay:"",autoplaySpeed:3500}},[r("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"25px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[r("a-icon",{attrs:{type:"left-circle"}})],1),t._v(" "),r("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"25px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[r("a-icon",{attrs:{type:"right-circle"}})],1),t._v(" "),t._l(t.data,(function(e,n){return r("div",{key:n},[e.redirectUrl?r("a",{attrs:{href:e.redirectUrl,target:"_blank"}},[r("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})]):r("img",{staticClass:"img",attrs:{src:""+t.config.IMG_URL.default+e.resource}})])}))],2)],1):t._e()}),[],!1,null,"9244c814",null);e.a=component.exports},1339:function(t,e,r){},1696:function(t,e,r){"use strict";var n=r(1339);r.n(n).a},2203:function(t,e,r){"use strict";r.r(e);r(280),r(43);var n=r(17),o=r(1281),c=r(139),l=r(1114),d=r(1325),f={components:{IndexBanner:o.a,CooperateBottom:l.a,RightBoxWrap:d.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("PC_carousel");case 2:return e=t.sent,t.abrupt("return",{imgArr:e.data.data.PC_carousel});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{tabList:[{title:"科研背景提升简介",value:1,path:"/promote/Introduce"},{title:"科研小组",value:2,path:"/promote/scientificGroup"},{title:"科研一对一",value:3,path:"/promote/scientificBiunique"}],currentTab:0,bottomFix:!1,bottomShow:!1}},watch:{$route:function(t){this.selectCurrentTab(t.fullPath)}},mounted:function(){this.selectCurrentTab(this.$route.fullPath),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement,e=t.scrollHeight,r=t.scrollTop;this.bottomFix=r<e-1200,this.bottomShow=r>400},selectCurrentTab:function(path){var t=this.tabList.find((function(p){return path.indexOf(p.path)>-1}));this.currentTab=t&&t.value?t.value:0}}},v=(r(1696),r(18)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["containerWrap",t.bottomFix?"pb145":"pb40"]},[r("IndexBanner",{attrs:{data:t.imgArr}}),t._v(" "),r("div",{staticClass:"container"},[r("ul",{staticClass:"tabBox"},t._l(t.tabList,(function(e){return r("li",{key:e.value,class:[{avtiveLi:t.currentTab===e.value}]},[r("nuxt-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0),t._v(" "),r("nuxt-child"),t._v(" "),r("RightBoxWrap",{staticClass:"rightBox"})],1),t._v(" "),r("CooperateBottom",{directives:[{name:"show",rawName:"v-show",value:t.bottomShow,expression:"bottomShow"}],class:{CooperateBottom:t.bottomFix}})],1)}),[],!1,null,"1b0a6886",null);e.default=component.exports}}]);