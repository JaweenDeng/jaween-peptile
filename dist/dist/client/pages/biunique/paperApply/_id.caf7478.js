(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{2224:function(e,t,r){"use strict";r.r(t);r(88),r(50);var n=r(41),o=(r(43),r(17)),c=(r(44),r(32),r(64),r(1643)),l=r(76),f=r(90);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={components:{BiuniqueForm:c.a},data:function(){return{formConfig:[{label:"论文名称",prop:"title",type:"input",required:!0},{label:"论文领域",prop:"domain",type:"select",options:[],required:!0},{label:"上传论文",prop:"document",type:"upload",required:!0},{label:"论文语言",prop:"language",type:"radio",options:[{name:"英文",value:1},{name:"中文",value:2}],required:!0},{label:"目标期刊级别",prop:"targetLevel",type:"select",options:Object.keys(f.o).map((function(e){return{name:f.o[e],value:+e}}))}]}},created:function(){this.getOptionsHandle()},methods:{getOptionsHandle:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,code,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.f)("domains");case 2:r=t.sent,n=r.data,code=n.code,o=n.data.domains,0===code&&e.$set(e.formConfig,1,m(m({},e.formConfig[1]),{},{options:o}));case 7:case"end":return t.stop()}}),t)})))()}}},y=r(18),component=Object(y.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("BiuniqueForm",{attrs:{formConfig:this.formConfig,otherConfig:{title:"上传初稿",type:11}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);