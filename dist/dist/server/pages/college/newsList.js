exports.ids = [13];
exports.modules = {

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5be5b2c1", content, true, context)
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collegeCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return collegeNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return newsDetail; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);

 // 高校公益活动首页课程

const collegeCourse = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/school/home/college/courses', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; // 往期回顾新闻列表

const collegeNews = ({
  id,
  info
}) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/service/cms/article/article/list/${id}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(info), {
    custom: {
      isAis: true
    }
  });
}; // 详情内容

const newsDetail = ({
  id,
  info
}) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/service/cms/article/article/details/${id}`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(info), {
    custom: {
      isAis: true
    }
  });
};

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_0d76fdd0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".newsCard[data-v-0d76fdd0]{padding:.26667rem;height:2.4rem;display:flex;align-items:flex-start;background:#fff}.newsCard .img[data-v-0d76fdd0]{width:3.6rem;height:1.86667rem;margin-right:.26667rem}.newsCard .txt[data-v-0d76fdd0]{display:flex;max-width:100%;flex-direction:column;justify-content:center}.newsCard .txt P[data-v-0d76fdd0]{width:4.8rem}.newsCard .title[data-v-0d76fdd0]{height:.90667rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6caeee6c", content, true, context)
};

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/NewsCard.vue?vue&type=template&id=0d76fdd0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"newsCard"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.config.IMG_URL.default + _vm.news.poster))+" alt class=\"img\" data-v-0d76fdd0> <div class=\"txt\" data-v-0d76fdd0><p class=\"twoLine fs13 c-333 title f500\" data-v-0d76fdd0>"+_vm._ssrEscape("\n      "+_vm._s(_vm.news.title)+"\n    ")+"</p> <p class=\"oneLine fs12 c-666 mt5\" data-v-0d76fdd0>"+_vm._ssrEscape("\n      "+_vm._s(_vm.news.description)+"\n    ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/NewsCard.vue?vue&type=template&id=0d76fdd0&scoped=true&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/NewsCard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NewsCardvue_type_script_lang_js_ = ({
  props: {
    news: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      config: common_config["a" /* default */]
    };
  }

});
// CONCATENATED MODULE: ./components/Common/NewsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_NewsCardvue_type_script_lang_js_ = (NewsCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/NewsCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(252)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_NewsCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d76fdd0",
  "66aeb5da"
  
)

/* harmony default export */ var NewsCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_newsList_vue_vue_type_style_index_0_id_a7913630_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".index[data-v-a7913630]{padding:0 .42667rem .42667rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/college/newsList.vue?vue&type=template&id=a7913630&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_c('van-pull-refresh',{on:{"refresh":_vm.onRefresh},model:{value:(_vm.refreshing),callback:function ($$v) {_vm.refreshing=$$v},expression:"refreshing"}},[_c('van-list',{attrs:{"finished":_vm.finished,"finished-text":"没有更多了"},on:{"load":_vm.onLoad},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},_vm._l((_vm.list),function(item){return _c('div',{key:item.id,staticClass:"pt10"},[_c('nuxt-link',{attrs:{"to":("/newsDetail/" + (item.id))}},[_c('NewsCard',{attrs:{"news":item}})],1)],1)}),0)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/college/newsList.vue?vue&type=template&id=a7913630&scoped=true&

// EXTERNAL MODULE: ./components/Common/NewsCard.vue + 4 modules
var NewsCard = __webpack_require__(325);

// EXTERNAL MODULE: ./api/college.js
var college = __webpack_require__(217);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/college/newsList.vue?vue&type=script&lang=js&
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


/* harmony default export */ var newsListvue_type_script_lang_js_ = ({
  components: {
    NewsCard: NewsCard["a" /* default */]
  },

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
      pageSize: 10
    };
  },

  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
        this.page = 1;
      }

      const {
        data
      } = await Object(college["b" /* collegeNews */])({
        id: 32,
        info: {
          page: this.page++,
          pageSize: this.pageSize
        }
      });
      this.loading = false;

      if (data.code === 0) {
        this.list = this.list.concat(data.data.entries);
        if (+data.data.total === this.list.length) this.finished = true;
      }
    },

    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    }

  },

  head() {
    return {
      title: '高校公益行往期回顾-艾思云课堂'
    };
  }

});
// CONCATENATED MODULE: ./pages/college/newsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var college_newsListvue_type_script_lang_js_ = (newsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/college/newsList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(434)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  college_newsListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a7913630",
  "39f6591a"
  
)

/* harmony default export */ var newsList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=newsList.js.map