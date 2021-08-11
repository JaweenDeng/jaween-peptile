exports.ids = [5];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("13ef0ff4", content, true, context)
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BiuniqueBanner_vue_vue_type_style_index_0_id_7537404e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".headerItem[data-v-7537404e]{height:1.12rem;text-align:center;line-height:1.12rem}.headerActive[data-v-7537404e]{background:#fff;color:#1465c4;position:relative}.headerActive[data-v-7537404e]:after{content:\"\";position:absolute;bottom:0;left:50%;transform:translateX(-50%);height:.10667rem;width:.93333rem;background:linear-gradient(90deg,#05c5ff,#0293ff)}.banner img[data-v-7537404e]{width:100%;display:block}.des[data-v-7537404e]{line-height:.45333rem}.modalHeader[data-v-7537404e]{position:relative}.modalHeader .closeIcon[data-v-7537404e]{position:absolute;top:.53333rem;right:.26667rem}.modalItem[data-v-7537404e]{display:inline-block;width:4.26667rem;height:.96rem;border:.02667rem solid #b57400;border-radius:.10667rem;text-align:center;color:#b57400;font-size:.37333rem;line-height:.96rem;margin-top:.53333rem}.modalItem[data-v-7537404e]:nth-child(2n){margin-left:.61333rem}.modalItemActive[data-v-7537404e]{background:#b57400;color:#fefefe}.modalBtns[data-v-7537404e]{background:linear-gradient(180deg,#ffa852,#ff6b1a);text-align:center;line-height:1.17333rem;font-size:.37333rem;font-weight:500;border-radius:.53333rem;color:#fefefe}.serveWrap[data-v-7537404e]{position:relative}.serveWrap[data-v-7537404e]:before{content:\"\";position:absolute;width:0;height:0;border-color:transparent #e02020;border-style:solid;border-width:0 0 .53333rem .53333rem;top:0;left:0}.serveWrap[data-v-7537404e] .van-field__label{font-weight:500;color:#191919}.footerWrap[data-v-7537404e]{display:flex;align-items:center;width:100%;position:fixed;bottom:0;left:50%;z-index:99;transform:translateX(-50%);box-shadow:0 0 .08rem .05333rem rgba(36,36,36,.2)}.footerWrap .shareWrap[data-v-7537404e]{display:flex;flex-direction:column;justify-content:center;align-items:center}.footerWrap .footerBtns[data-v-7537404e]{width:3.62667rem;border:.02667rem solid #36b7cf;border-radius:.58667rem;line-height:.98667rem;text-align:center;color:#36b7cf;font-size:.48rem;margin-left:.69333rem}.footerWrap .footerBtnsRed[data-v-7537404e]{background:linear-gradient(90deg,#ff514d,#f56966,#ff7572,#ff514d);color:#fff;border-color:#ff514d;margin-left:.29333rem}.footerWrap .footerBtn[data-v-7537404e]{width:2.61333rem;background:linear-gradient(90deg,#f58223,#ff9a54,#ff9d5e,#f58223);border-color:#ff9a54;color:#fff;font-size:.42667rem;margin-left:2.66667rem;border-radius:.58667rem;line-height:.98667rem;text-align:center}.footerWrap .footerBtnRed[data-v-7537404e]{background:#fff;color:#36b7cf;border:.02667rem solid #36b7cf;margin-left:.29333rem}.footerWrap .footerBtnYellow[data-v-7537404e]{background:linear-gradient(90deg,#f58223,#ff9a54,#ff9d5e,#f58223);border-color:#ff9a54;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/biunique/BiuniqueBanner.vue?vue&type=template&id=7537404e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.headerConfig.poster)?_c('van-row',{staticClass:"f500 fs16"},[_c('van-col',{class:['headerItem', {'headerActive':_vm.headerActive === 2}],attrs:{"span":"12"},on:{"click":function($event){return _vm.headerClick(2)}}},[_vm._v("\n      科研论文一对一\n    ")]),_vm._v(" "),_c('van-col',{class:['headerItem', {'headerActive':_vm.headerActive === 1}],attrs:{"span":"12"},on:{"click":function($event){return _vm.headerClick(1)}}},[_vm._v("\n      科研背景提升\n    ")])],1):_vm._e(),_vm._ssrNode(" <div class=\"mt3 banner\" data-v-7537404e><img"+(_vm._ssrAttr("src",_vm.bannerSrc))+" data-v-7537404e></div> <div class=\"bg-fff mt5 pt12 pl16 pr16 pb16\" data-v-7537404e><div class=\"fs18 c-333 f500\" data-v-7537404e>"+_vm._ssrEscape("\n      "+_vm._s(_vm.headerConfig.title)+"\n    ")+"</div> <div class=\"mt5 c-666 fs12 des\" data-v-7537404e>"+_vm._ssrEscape("\n      "+_vm._s(_vm.headerConfig.des)+"\n    ")+"</div></div> "),_c('van-field',{staticClass:"mt5 serveWrap",attrs:{"readonly":"","clickable":"","label":"请选择服务","value":null,"right-icon":"arrow"},on:{"click":function($event){_vm.serviceShow = true}}}),_vm._ssrNode(" "),_c('van-popup',{attrs:{"round":"","position":"bottom"},model:{value:(_vm.serviceShow),callback:function ($$v) {_vm.serviceShow=$$v},expression:"serviceShow"}},[_c('div',{staticClass:"c-333 fs16 textCenter pt20 modalHeader"},[_vm._v("\n      请选择服务项目\n      "),_c('van-icon',{staticClass:"closeIcon fs20",attrs:{"name":"close"},on:{"click":function($event){_vm.serviceShow = false}}})],1),_vm._v(" "),_c('ul',{staticClass:"pl16 pr16"},_vm._l((_vm.severList),function(item){return _c('li',{key:item.value,class:['modalItem', {'modalItemActive':_vm.service === item.value}],on:{"click":function($event){_vm.service = item.value}}},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")])}),0),_vm._v(" "),_c('div',{staticClass:"mt44 ml16 mr16 mb50 modalBtns",on:{"click":_vm.toApply}},[_vm._v("\n      "+_vm._s(_vm.headerConfig.btnTitle)+"\n    ")])]),_vm._ssrNode(" <div"+(_vm._ssrClass(null,['footerWrap', 'pl20', 'pr10','pt10', 'pb10', 'bg-fefe']))+" data-v-7537404e><div class=\"textCenter shareWrap\" data-v-7537404e><img"+(_vm._ssrAttr("src",__webpack_require__(89)))+" width=\"18\" data-v-7537404e> <div class=\"fs12 c-333 f500 mt5\" data-v-7537404e>\n        分享\n      </div></div> "+((_vm.headerConfig.key==='scientific')?("<a"+(_vm._ssrAttr("href",_vm.config.CONNACT_SERVE.ais_h5))+(_vm._ssrClass(null,['footerBtns']))+" data-v-7537404e>\n        咨询客服\n      </a> <div"+(_vm._ssrClass(null,['footerBtns', 'footerBtnsRed']))+" data-v-7537404e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.headerConfig.btnTitle)+"\n      ")+"</div>"):("<div"+(_vm._ssrClass(null,['footerBtns', 'footerBtnYellow']))+" data-v-7537404e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.headerConfig.btnTitle)+"\n      ")+"</div> <a"+(_vm._ssrAttr("href",_vm.config.CONNACT_SERVE.ais_h5))+(_vm._ssrClass(null,['footerBtns', 'footerBtnRed']))+" data-v-7537404e>\n        咨询客服\n      </a>"))+"</div> "),_c('ThirdShare',{ref:"ThirdShare",attrs:{"shareOption":_vm.shareOption}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/biunique/BiuniqueBanner.vue?vue&type=template&id=7537404e&scoped=true&

// EXTERNAL MODULE: ./components/Common/ThirdShare.vue + 4 modules
var ThirdShare = __webpack_require__(87);

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./config/mock.js
var mock = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/biunique/BiuniqueBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BiuniqueBannervue_type_script_lang_js_ = ({
  components: {
    ThirdShare: ThirdShare["a" /* default */]
  },
  props: {
    headerConfig: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      headerActive: this.$route.fullPath === '/biunique/scientific' ? 1 : 2,
      service: 1,
      serviceShow: false,
      config: common_config["a" /* default */]
    };
  },

  computed: {
    severList() {
      let obj = this.headerConfig.key === 'scientific' ? mock["f" /* scientificService */] : mock["e" /* paperService */];
      return Object.keys(obj).map(key => ({
        title: obj[key],
        value: +key
      }));
    },

    bannerSrc() {
      return this.headerConfig.poster ? `${common_config["a" /* default */].IMG_URL.default}${this.headerConfig.poster}` : `https://static.ais.cn/resource/meeting/photo/202011/${this.headerConfig.key === 'paper' ? '353201119134110010' : '302201118140744027'}.png`;
    },

    shareOption() {
      return {
        title: this.headerConfig.title,
        desc: `我已参加${this.headerConfig.title}，你也来一起参加吧!`,
        imgUrl: this.bannerSrc,
        link: `${common_config["a" /* default */].LINK.school_h5}${this.$route.fullPath}`
      };
    }

  },
  methods: {
    headerClick(val) {
      this.headerActive = val;
      this.$router.push(val === 1 ? '/biunique/scientific' : '/biunique/paper');
    },

    //打开分享窗口
    openShare() {
      this.$refs.ThirdShare.open();
    },

    goApply() {
      this.serviceShow = true;
    },

    toApply() {
      this.$router.push(`/biunique/${this.headerConfig.key === 'scientific' ? 'scientificApply' : 'paperApply'}/${this.service}?categoryId=${this.headerConfig.id || 0}`);
    }

  }
});
// CONCATENATED MODULE: ./components/biunique/BiuniqueBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var biunique_BiuniqueBannervue_type_script_lang_js_ = (BiuniqueBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/biunique/BiuniqueBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  biunique_BiuniqueBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7537404e",
  "6bff404e"
  
)

/* harmony default export */ var BiuniqueBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./mixins/isFirstShare.vue?vue&type=template&id=60eba4ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./mixins/isFirstShare.vue?vue&type=template&id=60eba4ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./mixins/isFirstShare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var isFirstSharevue_type_script_lang_js_ = ({
  data() {
    return {
      isBackHome: false
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.isBackHome = !Boolean(from.name);
    });
  }

});
// CONCATENATED MODULE: ./mixins/isFirstShare.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_isFirstSharevue_type_script_lang_js_ = (isFirstSharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/isFirstShare.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_isFirstSharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d958347"
  
)

/* harmony default export */ var isFirstShare = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/biunique/paperCategoryDetail/_id.vue?vue&type=template&id=df2f7998&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BiuniqueBanner',{attrs:{"headerConfig":_vm.data}}),_vm._ssrNode(" <div class=\"ueEditorStyle pd10 pb80\">"+(_vm._s(_vm.data.description))+"</div> "),_c('nuxt-link',{staticClass:"backHomeIcon",attrs:{"to":"/"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/biunique/paperCategoryDetail/_id.vue?vue&type=template&id=df2f7998&

// EXTERNAL MODULE: ./components/biunique/BiuniqueBanner.vue + 4 modules
var BiuniqueBanner = __webpack_require__(215);

// EXTERNAL MODULE: ./api/biunique.js
var biunique = __webpack_require__(77);

// EXTERNAL MODULE: ./mixins/isFirstShare.vue + 4 modules
var isFirstShare = __webpack_require__(328);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/biunique/paperCategoryDetail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    BiuniqueBanner: BiuniqueBanner["a" /* default */]
  },
  mixins: [isFirstShare["a" /* default */]],

  async asyncData(context) {
    const {
      data
    } = await Object(biunique["d" /* getCategoryInfo */])(context.route.params.id);

    if (data.code === 0) {
      return {
        data: { ...data.data.entries,
          title: data.data.entries.name,
          btnTitle: '上传手稿',
          des: data.data.entries.introduce,
          key: 'paper'
        }
      };
    }
  },

  head() {
    return {
      title: '科研论文一对一'
    };
  }

});
// CONCATENATED MODULE: ./pages/biunique/paperCategoryDetail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var paperCategoryDetail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/biunique/paperCategoryDetail/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paperCategoryDetail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b10904e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAllCourseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getCourseDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getCourseLiveDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return reportCourseLived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return collectCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getCourseMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getShareConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return getShareWXConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applyFreeCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getCourseOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getHomeTops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return buyCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getCourseCarryFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getCourseLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getForumFirstComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getForumSecondComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return submitForumComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return sendComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getCommentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return submitProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getLoadPushMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getCourseLastBuy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return courseDownlaod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return courseShareCallBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getCourseQrCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getClockRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getCourseClockInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getClockComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getProblemHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCallIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return joinCall; });
/* unused harmony export getCallPoster */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return lockCall; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/**课程接口 */

 //获取课程页数据

const getAllCourseData = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/courses`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //获取课程详情

const getCourseDetail = (courseId, params) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/detail/${courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //获取播放页详情

const getCourseLiveDetail = (id, params) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/play/${id}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //播放事件上报

const reportCourseLived = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/report/${params.courseId}/${params.liveId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params.options));
}; //收藏

const collectCourse = (courseId, favorite) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/favorite/favorite/${courseId}/${favorite}`);
}; //获取课程额外的信息

const getCourseMsg = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/info/${courseId}`);
};
/**分享*/

const getShareConfig = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/service/app/mp/makeJsMap`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params), {
    custom: {
      // 自定义的额外参数
      isAis: true
    }
  });
};
const getShareWXConfig = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/service/app/mp/makeJsMap`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //免费课程报名

const applyFreeCourse = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/apply/free/${courseId}`);
}; //获取确认订单页面详情

const getCourseOrder = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/index/${courseId}`);
}; //获取推荐课程

const getHomeTops = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/home/tops`);
}; //下单购买

const buyCourse = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/buy/${params.courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params.options));
}; //获取推广佣金

const getCourseCarryFee = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/promotion/${courseId}/carryFee`);
}; //获取课程推广链接

const getCourseLink = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/school/course/promotion/${courseId}/link`);
}; //获取课程讨论区一级列表

const getForumFirstComment = parmas => {
  let {
    courseId,
    ...rest
  } = parmas;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/comment/list/${courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(rest));
}; //获取课程讨论区二级列表

const getForumSecondComment = parmas => {
  let {
    courseId,
    parentId
  } = parmas;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/comment/subList/${courseId}/${parentId}`);
}; //提交讨论区评论

const submitForumComment = parmas => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/comment/submit`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(parmas));
}; //课程发表评论

const sendComment = params => {
  let {
    courseId,
    ...rest
  } = params;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/score/submit/${courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(rest));
}; //获取课程评论

const getCommentList = params => {
  let {
    courseId,
    ...rest
  } = params;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/score/list/${courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(rest));
}; //购买成功页，问答提交

const submitProblem = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/apply/problem/save`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //获取播放页推荐信息

const getLoadPushMsg = params => {
  const {
    courseId,
    liveId
  } = params;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/loadPush/${courseId}/${liveId}`);
}; //获取最新购买课程用户信息

const getCourseLastBuy = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/score/latestBuy/${courseId}`);
}; //课件下载

const courseDownlaod = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/down/document/${params.courseId}/${params.liveId}`);
}; //课程分享回调

const courseShareCallBack = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/course/callback/${courseId}`);
}; //获取课程客服二维码

const getCourseQrCode = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/complete`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //打卡-课程打卡记录列表

const getClockRecordList = (courseId, params) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/clock/record/list/${courseId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; // 打卡课程详情

const getCourseClockInfo = courseId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/clock/main/course/info/${courseId}`);
}; //打卡-打卡评价列表

const getClockComment = (recordId, params) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/clock/record/comment/list/${recordId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //课程回答历史

const getProblemHistory = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/apply/problem/history`);
}; //集call活动首页

const getCallIndex = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/activity/call/index/${params}`);
}; //集call活动参加

const joinCall = activityId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/activity/call/join/${activityId}`);
}; //集call活动海报

const getCallPoster = ({
  recordId,
  index
}) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/activity/call/poster/${recordId}/${index}`);
}; //集call活动打call

const applyCall = recordId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/activity/call/help/${recordId}`);
}; //集call活动手动解锁

const lockCall = recordId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/activity/call/unlock/${recordId}`);
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f671aba", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTradeCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return submitTrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return uploadTrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticleExperts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCategoryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getStoreCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getStoreStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStoreDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return submitProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getStoreInfo; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/**一对一接口 */

 //培训订单-获取优惠券

const getTradeCoupon = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/trade/coupon`);
}; //培训订单-创建订单

const submitTrade = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/trade/submit`, params, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
}; //培训文章-学科分类列表

const getArticleList = params => {
  const {
    categoryId,
    res
  } = params;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/article/subject/${categoryId}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(res));
}; //培训文章-学科文章详情

const getArticleDetail = articleId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/article/subject/detail/${articleId}`);
}; //一对一论文上传

const uploadTrade = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/trade/upload`, params);
}; //培训文章-专家列表

const getArticleExperts = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/article/experts`);
}; //获取一对一分类列表

const getCategoryList = params => {
  const {
    parentId,
    type
  } = params;
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/article/category/list/${parentId}/${type}`);
}; //获取一对一分类详情

const getCategoryInfo = id => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/article/category/info/${id}`);
}; //获取一对一栏目

const getStoreCategory = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/store/category`);
}; //获取一对一课程

const getStoreStores = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/store/stores`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //获取课程详情

const getStoreDetail = storeId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/store/detail/${storeId}`);
}; //背景提升问卷

const submitProblem = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/trade/problem`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //背景提升课程状态 

const getStoreInfo = storeId => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/store/info/${storeId}`);
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./mixins/WeChatShare.vue?vue&type=template&id=59a3d46c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./mixins/WeChatShare.vue?vue&type=template&id=59a3d46c&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./mixins/WeChatShare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var WeChatSharevue_type_script_lang_js_ = ({
  methods: {
    /**微信分享 */
    async getWechatShare(courseId) {
      await Object(external_ais_common_utils_["dynamicScript"])(`${common_config["a" /* default */].staticUrl}/jweixin-1.4.0.js`, 'wx');
      const params = {
        url: window.location.href
      };
      const {
        data
      } = this.isVideoWeChat ? await Object(course["A" /* getShareWXConfig */])(params) : await Object(course["z" /* getShareConfig */])(params);

      if (data.code === 0) {
        window.wx.config({
          appId: data.data.appid,
          timestamp: data.data.timestamp,
          nonceStr: data.data.noncestr,
          signature: data.data.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'showOptionMenu', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem']
        });
        window.wx.ready(() => {
          //设置微信内QQ & 微信分享参数
          const share = { ...this.shareOption,
            success: () => {
              this.show = false; //课程分享回调

              if (courseId) {
                Object(course["f" /* courseShareCallBack */])(courseId);
              }
            },
            cancel: () => {
              this.show = false;
            }
          }; //自定义分享给朋友

          window.wx.onMenuShareAppMessage({ ...share
          }); //自定义分享给QQ

          window.wx.onMenuShareQQ({ ...share
          }); //自定义分享到腾讯微博

          window.wx.onMenuShareWeibo({ ...share
          }); //自定义分享到QQ空间

          window.wx.onMenuShareQZone({ ...share
          }); //自定义分享到朋友圈

          window.wx.onMenuShareTimeline({ ...share
          }); // //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
          // window.wx.updateAppMessageShareData({ 
          //   ...share
          // })
          // //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
          // window.wx.updateTimelineShareData({
          //   ...share
          // })
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./mixins/WeChatShare.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_WeChatSharevue_type_script_lang_js_ = (WeChatSharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/WeChatShare.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_WeChatSharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a081bca"
  
)

/* harmony default export */ var WeChatShare = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point.2a5c52f.png";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export education */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return targetLevelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scientificService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return paperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return orderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return paperLevelWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return couseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clockRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return serviceType; });
/*
 * @Author: djw
 * @Descripttion: 通用字段
 */
// 最高学历
// export const education = {
//   1: '本科以下',
//   2: '本科',
//   3: '研究生',
//   4: '博士及以上'
// }
const education = that => {
  return {
    1: that.$t('pages/teacherRecruit_33'),
    //本科以下
    2: that.$t('pages/teacherRecruit_34'),
    //本科
    3: that.$t('pages/teacherRecruit_35'),
    //研究生
    4: that.$t('pages/teacherRecruit_36') //博士及以上

  };
}; //一对一论文申请目标期刊级别

const targetLevelList = {
  1: 'SCI',
  2: 'SSCI',
  3: 'EI期刊',
  4: 'EI国际会议',
  5: 'CPCI会议',
  6: '核心期刊',
  7: '普刊'
}; //科研一对一服务

const scientificService = {
  1: '科研全过程服务',
  2: '科研辅导',
  3: '论文发表推荐'
}; //论文一对一服务

const paperService = {
  1: '论文全过程服务',
  2: '论文辅导教学',
  3: '论文发表推荐'
}; //通用订单支付状态

const orderStatus = {
  0: '待付款',
  1: '待确认',
  2: '已付款',
  4: "退款中",
  5: "已退款",
  6: "取消中",
  7: "已取消"
}; //一对一表单论文级别

const paperLevelWrap = {
  1: 'SCI',
  2: 'SSCI',
  3: 'CSSCI',
  4: 'EI期刊',
  5: 'EI会议',
  6: 'CPCI',
  7: '普刊',
  8: '毕业论文'
}; // 课程分类

const couseType = {
  1: '学术会议',
  2: '科研论文',
  3: '学术大咖秀',
  4: '写作训练营',
  5: '科研软件',
  6: '论文1V1/小班课',
  7: '高校公益'
}; //打卡管理身份

const clockRole = {
  1: '导师',
  2: '助教',
  3: '班主任'
}; // 服务订单类型

const serviceType = {
  1: '科研一对一',
  2: '科研小组',
  3: '论文辅导'
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat.0f68c5c.png";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qq.656b905.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weibo.a845cb5.png";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThirdShare_vue_vue_type_style_index_0_id_1bf14d3f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-1bf14d3f]{display:flex;justify-content:space-around;align-items:center;padding:.26667rem 0}.img[data-v-1bf14d3f]{height:1.06667rem}.modal[data-v-1bf14d3f]{background:#fefefe;padding:.13333rem .53333rem}.modalContent[data-v-1bf14d3f]{height:2.66667rem;padding:.13333rem;background:#f5f5f5;word-break:break-all}.wechatPoint[data-v-1bf14d3f]{position:fixed;top:0;left:0;z-index:2001;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.wechatPoint .wechatImg[data-v-1bf14d3f]{width:6.45333rem;height:9.68rem;float:right;margin-right:.53333rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/ThirdShare.vue?vue&type=template&id=1bf14d3f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isWeChat)?_vm._ssrNode("<div class=\"wechatPoint\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-1bf14d3f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" class=\"wechatImg\" data-v-1bf14d3f>")],2):_c('van-popup',{attrs:{"position":"bottom"},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('div',{staticClass:"box"},[_c('img',{staticClass:"img",attrs:{"src":__webpack_require__(82)},on:{"click":function($event){return _vm.itemClick('wechat')}}}),_vm._v(" "),_c('img',{staticClass:"img",attrs:{"src":__webpack_require__(83)},on:{"click":function($event){return _vm.itemClick('qq')}}}),_vm._v(" "),_c('img',{staticClass:"img",attrs:{"src":__webpack_require__(84)},on:{"click":function($event){return _vm.itemClick('weibo')}}})])]),_vm._ssrNode(" "),_c('van-popup',{style:({ width: '80%' }),attrs:{"round":""},model:{value:(_vm.copyShow),callback:function ($$v) {_vm.copyShow=$$v},expression:"copyShow"}},[_c('div',{staticClass:"modal textCenter"},[_c('div',{staticClass:"fs16 "},[_vm._v("\n        链接已复制\n      ")]),_vm._v(" "),_c('div',{staticClass:"modalContent fs12 mt20"},[_vm._v("\n        "+_vm._s(_vm.url)+"\n      ")]),_vm._v(" "),_c('van-button',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.url),expression:"url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySuccess),expression:"onCopySuccess",arg:"success"}],staticClass:"fs12 c-ff mt20",attrs:{"id":"copyBtn","type":!_vm.isQQ ? 'primary' : 'danger',"size":"small"}},[_vm._v("\n        去"+_vm._s(_vm.isQQ ? "QQ" : "微信")+"粘贴给好友\n      ")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/ThirdShare.vue?vue&type=template&id=1bf14d3f&scoped=true&

// EXTERNAL MODULE: ./mixins/WeChatShare.vue + 4 modules
var WeChatShare = __webpack_require__(78);

// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/ThirdShare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ThirdSharevue_type_script_lang_js_ = ({
  mixins: [WeChatShare["a" /* default */]],
  props: {
    shareOption: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      data: [{
        title: "wechat"
      }, {
        title: "qq"
      }, {
        title: "weibo"
      }],
      url: null,
      copyShow: false,
      isQQ: true,
      isWeChat: false,
      //判断是否微信
      show: false //第三方分享弹窗显示

    };
  },

  mounted() {
    this.url = this.shareOption.link || window.location.href;
    this.isWeChat = Object(external_ais_common_utils_["isWeChat"])();

    if (this.isWeChat) {
      this.getWechatShare(this.shareOption.courseId);
    }
  },

  methods: {
    open() {
      this.show = true;
    },

    //课程分享回调
    courseShareCallBack() {
      if (this.shareOption.courseId) Object(course["f" /* courseShareCallBack */])(this.shareOption.courseId);
    },

    onCopySuccess() {
      this.$toast.success("复制成功");
      this.copyShow = false; //课程分享回调

      this.courseShareCallBack();
    },

    //分享图标点击
    itemClick(value) {
      if (value === "wechat" || value === "qq") {
        this.copyShow = true;
        this.isQQ = value === "qq";
      }

      if (value === "weibo") {
        const share = {
          title: this.shareOption.title,
          image_url: this.shareOption.imgUrl,
          share_url: window.location.href
        };
        location.replace("https://service.weibo.com/share/share.php?url=" + encodeURIComponent(share.share_url) + "&title=" + share.title + "&pic=" + share.image_url + "&searchPic=true"); //课程分享回调

        this.courseShareCallBack();
      }

      this.show = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Common/ThirdShare.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_ThirdSharevue_type_script_lang_js_ = (ThirdSharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/ThirdShare.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_ThirdSharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1bf14d3f",
  "99a46c62"
  
)

/* harmony default export */ var ThirdShare = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/share.cabe731.png";

/***/ })

};;
//# sourceMappingURL=_id.js.map