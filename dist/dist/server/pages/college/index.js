exports.ids = [12];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e8584a4a", content, true, context)
};

/***/ }),

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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBanner_vue_vue_type_style_index_0_id_5c6a6622_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swipe[data-v-5c6a6622]{height:5.46667rem}.swipe .imgs[data-v-5c6a6622]{width:100%;height:100%}.swipe[data-v-5c6a6622] .van-swipe__indicator--active{width:.69333rem;border-radius:.26667rem;background:linear-gradient(90deg,#05c5ff,#0293ff)}.swipe[data-v-5c6a6622] .van-swipe__indicator{background:#fefefe}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/SwipeBanner.vue?vue&type=template&id=5c6a6622&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('van-swipe',{staticClass:"swipe"},_vm._l((_vm.banner),function(item,index){return _c('van-swipe-item',{key:index},[(item.redirectUrl)?_c('a',{attrs:{"href":item.redirectUrl}},[_c('img',{staticClass:"imgs",attrs:{"src":("" + (_vm.config.IMG_URL.default) + (item.resource))}})]):_c('img',{staticClass:"imgs",attrs:{"src":("" + (_vm.config.IMG_URL.default) + (item.resource))}})])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/SwipeBanner.vue?vue&type=template&id=5c6a6622&scoped=true&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/SwipeBanner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SwipeBannervue_type_script_lang_js_ = ({
  props: {
    banner: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  data() {
    return {
      config: common_config["a" /* default */]
    };
  }

});
// CONCATENATED MODULE: ./components/Common/SwipeBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_SwipeBannervue_type_script_lang_js_ = (SwipeBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/SwipeBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_SwipeBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c6a6622",
  "49e495ff"
  
)

/* harmony default export */ var SwipeBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8850cdaa", content, true, context)
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

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(378);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6fd7d488", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4af53f7f", content, true, context)
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("647736f8", content, true, context)
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

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/college_icon1.ac623fa.png";

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/college_icon2.7e9b3ba.png";

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_icon.822522b.png";

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_img1.1fde937.png";

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_img2.af5de6c.png";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_img3.c0358d8.png";

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_img4.fcadd02.png";

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_7.6e1c9ff.png";

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_4.da84650.png";

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_10.5512e8c.png";

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_3.64b2694.png";

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_1.f8ddec8.png";

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_6.67d41d0.png";

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_2.7c26b64.png";

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/college_icon3.56909a3.png";

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_20.81aee53.png";

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_21.36cbc3a.png";

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_22.f68fc5b.png";

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_23.abf6d55.png";

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_24.fc1ae8e.png";

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_25.3bad8e8.png";

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_26.2e99f67.png";

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_27.b8904e9.png";

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_28.82aea58.png";

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_29.8c15a9c.jpg";

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_30.3db12b5.jpg";

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_31.5781025.png";

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_icon.cd42519.png";

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard2_vue_vue_type_style_index_0_id_20e44387_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-20e44387]{padding:.26667rem;height:2.4rem;display:flex;align-items:flex-start;background:#fff}.box .img[data-v-20e44387]{flex:0 0 3.6rem;width:3.6rem;height:1.86667rem;margin-right:.26667rem}.box .txt[data-v-20e44387]{flex:1;width:0}.box .title[data-v-20e44387]{height:.90667rem}.box .addr .imgs[data-v-20e44387]{width:.32rem}.box .addr .address[data-v-20e44387]{width:90%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThinkTankCard_vue_vue_type_style_index_0_id_7c3365f7_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(379);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".thinkTankCard[data-v-7c3365f7]{width:100%;height:3.57333rem;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;box-sizing:border-box;padding:.45333rem .26667rem .26667rem;display:flex}.thinkTankCard .left[data-v-7c3365f7]{flex:1;width:0}.thinkTankCard .left .lis[data-v-7c3365f7]{position:relative;top:0;padding-left:.26667rem}.thinkTankCard .left .lis .point[data-v-7c3365f7]{position:absolute;left:0;top:.16rem;width:.10667rem;height:.10667rem;border-radius:50%;background:#144a7d}.thinkTankCard .right[data-v-7c3365f7]{flex:0 0 1.2rem;height:1.62667rem}.thinkTankCard .right .rIcon[data-v-7c3365f7]{display:block;width:100%;height:100%;border-radius:.08rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_11.99d483f.png";

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_5.b315947.png";

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_8.0dd35b5.png";

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_9.b48c9a2.png";

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_12.cb0058a.png";

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_13.05590b3.png";

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_14.83ee8a3.png";

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_15.65738e9.png";

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_16.258cab9.png";

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_17.86239f0.png";

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_18.eaf3ddb.png";

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_19.4563ccb.png";

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bc1d626_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(393);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(394);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".c-bbe[data-v-1bc1d626]{color:#2a6bbe}.thinkTankWrap[data-v-1bc1d626]{display:flex;justify-content:space-between;flex-wrap:wrap}.thinkTankWrap .thankItem[data-v-1bc1d626]{flex:0 0 48%;margin-bottom:.53333rem}.cooperationWrap[data-v-1bc1d626]{border-radius:.21333rem}.cooperationWrap .toAppayLink[data-v-1bc1d626]{padding:.08rem .32rem;color:#1e6aff;border:.02667rem solid #1e6aff;border-radius:.37333rem}.cooperationWrap .topWrap[data-v-1bc1d626]{display:flex}.cooperationWrap .topWrap .leftIcon[data-v-1bc1d626]{flex:0 0 1.33333rem}.cooperationWrap .topWrap .leftIcon .lIcon[data-v-1bc1d626]{display:block;width:1.33333rem;height:1.33333rem}.cooperationWrap .topWrap .rightWrap[data-v-1bc1d626]{flex:1;width:0;padding-left:.42667rem}.cooperationWrap .topWrap .rightWrap .qrcode[data-v-1bc1d626]{width:2.02667rem}.cooperationWrap .topWrap .rightWrap .rIcon[data-v-1bc1d626]{width:.32rem}.cooperationWrap .topWrap .rightWrap .rTips[data-v-1bc1d626]{max-width:80%}.index[data-v-1bc1d626]{min-height:100vh}.title[data-v-1bc1d626]{display:flex;align-items:center}.title img[data-v-1bc1d626]{width:.42667rem;vertical-align:middle}.title .more[data-v-1bc1d626]{padding:.08rem 0;width:2.26667rem;background:#e6e6e6;border-radius:1.06667rem;color:#333}.title .more .moreIcon[data-v-1bc1d626]{vertical-align:-.02667rem;color:#333}.title .txt[data-v-1bc1d626]{flex:1}.news[data-v-1bc1d626]{background:#fff;border-radius:.4rem .4rem 0 0;overflow:hidden}.news .news-img[data-v-1bc1d626]{width:100%;height:5.12rem;display:block}.explain-banner[data-v-1bc1d626]{height:5.62667rem;box-sizing:border-box;padding-top:1.36rem;margin:.32rem -.42667rem 0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat top;background-size:100% 100%;text-align:center;color:#fefefe}.explain-banner i[data-v-1bc1d626]{display:block;width:.85333rem;height:.08rem;border-radius:.05333rem;background:#fff;margin:.26667rem auto 0}.explain-banner2[data-v-1bc1d626]{width:9.14667rem;height:8.08rem;margin-top:-2.13333rem;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat top;background-size:100% 100%;box-sizing:border-box;padding:.74667rem .37333rem 0;position:relative;color:#fefefe;line-height:.53333rem;letter-spacing:.02667rem}.explain-banner2 .img[data-v-1bc1d626]{position:absolute;width:1.17333rem;top:-.58667rem;left:.18667rem}.explain-txt[data-v-1bc1d626]{line-height:.53333rem}.explain-txt i[data-v-1bc1d626]{display:inline-block;width:.08rem;height:.4rem;opacity:1;background:#1867b0;border-radius:.02667rem;margin-right:.32rem;transform:translateY(.05333rem)}.explain-card[data-v-1bc1d626]{height:1.89333rem;background:#fff;border-radius:.18667rem;display:flex;align-items:center;padding-right:.8rem}.explain-card .img[data-v-1bc1d626]{height:1.33333rem;margin:0 .4rem}.img-w[data-v-1bc1d626]{display:flex;justify-content:space-between;flex-wrap:wrap}.img-w .college-img[data-v-1bc1d626]{flex:0 0 48%;background:#fff;margin-bottom:.4rem}.img-w .college-img img[data-v-1bc1d626]{display:block;width:1.6rem;margin:0 auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_bg1.7f1efa4.png";

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/explain_bg2.3418256.png";

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".coolegeImg .van-image__img{width:80vw;height:80vw;margin:0 auto;position:relative;top:0;z-index:999}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/college/index.vue?vue&type=template&id=1bc1d626&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_c('SwipeBanner',{attrs:{"banner":_vm.banner}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pd16\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(347)))+" alt class=\"mr5\" data-v-1bc1d626> <span class=\"fs16 c-333\" data-v-1bc1d626>最新活动</span></div> "),_vm._l((_vm.courseData),function(item){return _vm._ssrNode("<div class=\"pt12\" data-v-1bc1d626>","</div>",[_c('nuxt-link',{attrs:{"to":("/courseDetail/" + (item.id))}},[_c('CourseCard',{attrs:{"courseInfo":item}})],1)],1)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"title mt12\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(348)))+" alt class=\"mr5\" data-v-1bc1d626> <span class=\"fs16 c-333 txt\" data-v-1bc1d626>往期回顾</span> "),_c('nuxt-link',{staticClass:"inlineBlock vMiddle fs12 more textCenter",attrs:{"to":"/college/newsList"}},[_vm._v("\n        查看更多 "),_c('van-icon',{staticClass:"moreIcon",attrs:{"name":"play"}})],1)],2),_vm._ssrNode(" "),(_vm.collegeNewsData.length)?_c('nuxt-link',{attrs:{"to":("/newsDetail/" + (_vm.collegeNewsData[0].id))}},[_c('div',{staticClass:"news mt12"},[_c('img',{staticClass:"news-img",attrs:{"src":_vm.config.IMG_URL.default + _vm.collegeNewsData[0].poster,"alt":""}}),_vm._v(" "),_c('p',{staticClass:"pd10"},[_c('span',{staticClass:"twoLine fs13 c-333 mb10 f500"},[_vm._v(_vm._s(_vm.collegeNewsData[0].title))]),_vm._v(" "),_c('span',{staticClass:"twoLine fs12 c-666"},[_vm._v(" "+_vm._s(_vm.collegeNewsData[0].description)+" ")])])])]):_vm._e(),_vm._ssrNode(" "),(_vm.collegeNewsData.length > 1)?_vm._l((_vm.collegeNewsData.slice(1)),function(item){return _vm._ssrNode("<div class=\"pt12\" data-v-1bc1d626>","</div>",[_c('nuxt-link',{attrs:{"to":("/newsDetail/" + (item.id))}},[_c('NewsCard',{attrs:{"news":item}})],1)],1)}):_vm._e(),_vm._ssrNode(" <div class=\"explain-banner fs22\" data-v-1bc1d626>\n      全国高校论文指导公益行\n      <i data-v-1bc1d626></i></div> <div class=\"explain-banner2 fs13\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(349)))+" alt class=\"img\" data-v-1bc1d626> <p class=\"mb15\" data-v-1bc1d626>\n        论文写作对增强高校师生的创新能力和科研能力、全面提高师生的专业技能和综合素质以及培养适应社会经济发展急需的高素质人才，有着极大的促进作用。\n      </p> <p class=\"mb15\" data-v-1bc1d626>\n        论文写作是科研学习与工作必不可少的一环节。随着学习及工作的深入，师生对本专业及行业会有深入的研究，而研究水平的衡量标准则体现在了论文发表上，即要求在公开发行的学术期刊上发表具有一定学术价值的论文。\n      </p> <p class=\"mb15\" data-v-1bc1d626>\n        论文发表，成了考量从业者水平的一个不可或缺甚至尤为重要的标准。\n      </p></div> <div class=\"explain-txt fs13 mt15 c-666\" data-v-1bc1d626><i data-v-1bc1d626></i>艾思云课堂希望通过开展全国高等院校公益性宣讲活动， 丰富高等院校校园文化生活，调动高校师生参加知识讲座的积极性，并帮助解决论文写作与发表的难题：\n    </div> <div class=\"explain-card fs12 c-333 mt10\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(350)))+" alt class=\"img\" data-v-1bc1d626> <span data-v-1bc1d626>论文从初稿撰写、修改稿件、论文定稿的全过程解析</span></div> <div class=\"explain-card fs12 c-333 mt10\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(351)))+" alt class=\"img\" data-v-1bc1d626> <span data-v-1bc1d626>高校教授从百余篇论文发表经验中总结的论文投稿与发表技巧</span></div> <div class=\"explain-card fs12 c-333 mt10\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(352)))+" alt class=\"img\" data-v-1bc1d626> <span data-v-1bc1d626>了解投稿流程，学会有效选择适合的期刊</span></div> <div class=\"explain-card fs12 c-333 mt10\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(353)))+" alt class=\"img\" data-v-1bc1d626> <span data-v-1bc1d626>掌握正确与期刊审稿人、编辑交流的方法</span></div> <div class=\"title mt12 pb14\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(354)))+" alt class=\"mr5\" data-v-1bc1d626> <span class=\"fs16 c-333\" data-v-1bc1d626>合作申请</span></div> "),_vm._ssrNode("<div class=\"bg-fff cooperationWrap pl16 pr16\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div class=\"topWrap van-hairline--bottom pt12 pb18\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div class=\"leftIcon\" data-v-1bc1d626>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(__webpack_require__(355)),expression:"require('@/assets/images/college/icon_4.png')"}],staticClass:"lIcon"},[])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rightWrap pt10\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div class=\"fs14 f600 c-333\" data-v-1bc1d626>\n            活动申请\n          </div> <div class=\"fs12 c-333 pt7\" data-v-1bc1d626><span class=\"f600\" data-v-1bc1d626>艾思科蓝：</span>承担活动经费、提供演讲导师并负责活动组织\n          </div> <div class=\"fs12 c-333 pt7\" data-v-1bc1d626><span class=\"f600\" data-v-1bc1d626>高校：</span>提供可容纳100人以上的活动场地，组织不少于100名师生参加讲座\n          </div> "),_vm._ssrNode("<div class=\"pt20\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.qrcode1))+" class=\"vMiddle qrcode\" data-v-1bc1d626> "),_vm._ssrNode("<div class=\"inlineBlock vMiddle pl5\" style=\"max-width: 63%\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div data-v-1bc1d626>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(__webpack_require__(356)),expression:"require('@/assets/images/college/icon_10.png')"}],staticClass:"vMiddle rIcon"},[]),_vm._ssrNode(" <span class=\"inlineBlock vMiddle fs12 f500 c-333 rTips\" data-v-1bc1d626>朱老师 18102514736</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-1bc1d626>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(__webpack_require__(357)),expression:"require('@/assets/images/college/icon_3.png')"}],staticClass:"vMiddle rIcon"},[]),_vm._ssrNode(" <span class=\"inlineBlock vMiddle fs12 f500 c-333 rTips\" data-v-1bc1d626>zhushihui@ais.cn</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-1bc1d626>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(__webpack_require__(358)),expression:"require('@/assets/images/college/icon_1.png')"}],staticClass:"vMiddle rIcon"},[]),_vm._ssrNode(" <span class=\"inlineBlock vMiddle fs12 f500 c-333 rTips\" data-v-1bc1d626>扫码添加老师了解详情吧</span>")],2)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"topWrap pt12 pb18\" data-v-1bc1d626>","</div>",[_vm._ssrNode("<div class=\"leftIcon\" data-v-1bc1d626>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(__webpack_require__(359)),expression:"require('@/assets/images/college/icon_6.png')"}],staticClass:"lIcon"},[])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rightWrap pt10\" data-v-1bc1d626>","</div>",[_c('van-row',{attrs:{"type":"flex","align":"center","justify":"space-between"}},[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"fs14 f600 c-333"},[_vm._v("\n                讲师申请\n              ")])]),_vm._v(" "),_c('van-col',{attrs:{"span":"8"}},[_c('a',{staticClass:"toAppayLink block textCenter fs12 f500",attrs:{"href":((_vm.config.LINK.ais_pc) + "/peerReview/joinIndex")}},[_vm._v("去申请>>")])])],1),_vm._ssrNode(" <div class=\"fs12 c-333 pt7\" data-v-1bc1d626>\n            我们诚邀您加入艾思云课堂讲师队伍，让您的知识和经验传递给更多科研人\n          </div> <div class=\"fs12 c-333 pt7\" data-v-1bc1d626>\n            添加下方微信，备注<span class=\"c-bbe\" data-v-1bc1d626>“导师”</span>咨询,或直接去导师招募申请吧\n          </div> <div class=\"pt20\" data-v-1bc1d626><div class=\"inlineBlock vMiddle\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",_vm.qrcode2))+" class=\"qrcode block\" style=\"margin: 0 auto;\" data-v-1bc1d626> <div class=\"textCenter fs12 c-333 f500 pt5\" data-v-1bc1d626>\n                理工科老师二维码\n              </div></div> <div class=\"inlineBlock vMiddle ml30\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",_vm.qrcode3))+" class=\"qrcode block\" style=\"margin: 0 auto;\" data-v-1bc1d626> <div class=\"textCenter fs12 c-333 f500 pt5\" data-v-1bc1d626>\n                人文社科老师二维码\n              </div></div></div>")],2)],2)],2),_vm._ssrNode(" <div class=\"title mt12 pb14\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(360)))+" alt class=\"mr5\" data-v-1bc1d626> <span class=\"fs16 c-333\" data-v-1bc1d626>名校大牛导师</span></div> "),_vm._ssrNode("<div class=\"thinkTankWrap\" data-v-1bc1d626>","</div>",_vm._l((_vm.thinkTankData),function(item,index){return _vm._ssrNode("<div class=\"thankItem\" data-v-1bc1d626>","</div>",[_c('ThinkTankCard',{attrs:{"data":item}})],1)}),0),_vm._ssrNode(" <div class=\"title mt12\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(361)))+" alt class=\"mr5\" data-v-1bc1d626> <span class=\"fs16 c-333\" data-v-1bc1d626>合作高校</span></div> <div class=\"img-w mt15\" data-v-1bc1d626><div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(362)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(363)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(364)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(365)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(366)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(368)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(369)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(370)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(371)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(372)))+" alt data-v-1bc1d626></div> <div class=\"college-img pt15 pb15\" data-v-1bc1d626><img"+(_vm._ssrAttr("src",__webpack_require__(373)))+" alt data-v-1bc1d626></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/college/index.vue?vue&type=template&id=1bc1d626&scoped=true&

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(6);

// EXTERNAL MODULE: ./api/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./api/college.js
var college = __webpack_require__(217);

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Common/SwipeBanner.vue + 4 modules
var SwipeBanner = __webpack_require__(247);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CourseCard2.vue?vue&type=template&id=20e44387&scoped=true&
var CourseCard2vue_type_template_id_20e44387_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.config.IMG_URL.default + _vm.courseInfo.poster))+" alt class=\"img\" data-v-20e44387> <div class=\"txt\" data-v-20e44387><p class=\"twoLine fs13 c-333 title f500\" data-v-20e44387>"+_vm._ssrEscape("\n      "+_vm._s(_vm.courseInfo.name)+"\n    ")+"</p> <p class=\"fs12 c-666 mt5\" data-v-20e44387>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$changeTime(_vm.courseInfo.activityTime, "YYYY/MM/DD"))+"\n    ")+"</p> <div class=\"addr fs12 c-666\" data-v-20e44387><img"+(_vm._ssrAttr("src",__webpack_require__(374)))+" alt CLASS=\"vMiddle imgs\" data-v-20e44387> <span class=\"oneLine inlineBlock vMiddle address\" data-v-20e44387>"+_vm._ssrEscape(_vm._s(_vm.courseInfo.location))+"</span></div></div>")])}
var CourseCard2vue_type_template_id_20e44387_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/CourseCard2.vue?vue&type=template&id=20e44387&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CourseCard2.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CourseCard2vue_type_script_lang_js_ = ({
  props: {
    courseInfo: {
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
// CONCATENATED MODULE: ./components/Common/CourseCard2.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_CourseCard2vue_type_script_lang_js_ = (CourseCard2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/CourseCard2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(375)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_CourseCard2vue_type_script_lang_js_,
  CourseCard2vue_type_template_id_20e44387_scoped_true_render,
  CourseCard2vue_type_template_id_20e44387_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "20e44387",
  "e5853380"
  
)

/* harmony default export */ var CourseCard2 = (component.exports);
// EXTERNAL MODULE: ./components/Common/NewsCard.vue + 4 modules
var NewsCard = __webpack_require__(325);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/college/ThinkTankCard.vue?vue&type=template&id=7c3365f7&scoped=true&
var ThinkTankCardvue_type_template_id_7c3365f7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thinkTankCard"},[_vm._ssrNode("<div class=\"left pr5\" data-v-7c3365f7><div class=\"fs12 c-333 f600 oneLine pb6\" data-v-7c3365f7>"+_vm._ssrEscape("\n      "+_vm._s(_vm.data.name)+"\n    ")+"</div> <ul data-v-7c3365f7>"+(_vm._ssrList((_vm.data.liList),function(item,index){return ("<li class=\"fs12 c-666 lis\" data-v-7c3365f7><span class=\"point\" data-v-7c3365f7></span>"+_vm._ssrEscape("\n        "+_vm._s(item.text)+"\n      ")+"</li>")}))+"</ul></div> <div class=\"right\" data-v-7c3365f7><img"+(_vm._ssrAttr("src",_vm.data.icon))+" alt class=\"rIcon\" data-v-7c3365f7></div>")])}
var ThinkTankCardvue_type_template_id_7c3365f7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/college/ThinkTankCard.vue?vue&type=template&id=7c3365f7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/college/ThinkTankCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ThinkTankCardvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/college/ThinkTankCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var college_ThinkTankCardvue_type_script_lang_js_ = (ThinkTankCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/college/ThinkTankCard.vue



function ThinkTankCard_injectStyles (context) {
  
  var style0 = __webpack_require__(377)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ThinkTankCard_component = Object(componentNormalizer["a" /* default */])(
  college_ThinkTankCardvue_type_script_lang_js_,
  ThinkTankCardvue_type_template_id_7c3365f7_scoped_true_render,
  ThinkTankCardvue_type_template_id_7c3365f7_scoped_true_staticRenderFns,
  false,
  ThinkTankCard_injectStyles,
  "7c3365f7",
  "7d1209e6"
  
)

/* harmony default export */ var ThinkTankCard = (ThinkTankCard_component.exports);
// EXTERNAL MODULE: ./assets/images/college/icon_5.png
var icon_5 = __webpack_require__(380);
var icon_5_default = /*#__PURE__*/__webpack_require__.n(icon_5);

// EXTERNAL MODULE: ./assets/images/college/icon_8.png
var icon_8 = __webpack_require__(381);
var icon_8_default = /*#__PURE__*/__webpack_require__.n(icon_8);

// EXTERNAL MODULE: ./assets/images/college/icon_9.png
var icon_9 = __webpack_require__(382);
var icon_9_default = /*#__PURE__*/__webpack_require__.n(icon_9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/college/index.vue?vue&type=script&lang=js&
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











/* harmony default export */ var collegevue_type_script_lang_js_ = ({
  components: {
    SwipeBanner: SwipeBanner["a" /* default */],
    CourseCard: CourseCard2,
    NewsCard: NewsCard["a" /* default */],
    ThinkTankCard: ThinkTankCard
  },

  async asyncData() {
    const courseData = await Object(college["a" /* collegeCourse */])({
      size: 8
    });
    const collegeNewsData = await Object(college["b" /* collegeNews */])({
      id: 32,
      info: {
        page: 1,
        pageSize: 4
      }
    });

    if (courseData.data.code === 0 && collegeNewsData.data.code === 0) {
      return {
        courseData: courseData.data.data,
        collegeNewsData: collegeNewsData.data.data.entries
      };
    }
  },

  data() {
    return {
      config: common_config["a" /* default */],
      qrcode1: icon_5_default.a,
      qrcode2: icon_8_default.a,
      qrcode3: icon_9_default.a,
      banner: [],
      thinkTankData: [{
        icon: __webpack_require__(383),
        name: 'David Bassir',
        liList: [{
          text: '广州中国科学院'
        }, {
          text: ' 工业技术研究院专家'
        }, {
          text: '交通运输学科带头人'
        }]
      }, {
        icon: __webpack_require__(384),
        name: '梁安辉 教授',
        liList: [{
          text: '美籍华人'
        }, {
          text: ' 山东科技大学教授'
        }, {
          text: '光电工程学科带头人'
        }]
      }, {
        icon: __webpack_require__(385),
        name: '曾庆生 教授',
        liList: [{
          text: '加拿大籍华人'
        }, {
          text: ' 加拿大政府通信研究中心研究院信息通信学科带头人'
        }]
      }, {
        icon: __webpack_require__(386),
        name: '杨俊 教授',
        liList: [{
          text: '北京林业大学教授/博导'
        }]
      }, {
        icon: __webpack_require__(387),
        name: '张德富 教授',
        liList: [{
          text: '厦门“双百计划”'
        }, {
          text: ' 领军型创业人才'
        }, {
          text: '中国大数据学术创新百人'
        }]
      }, {
        icon: __webpack_require__(388),
        name: 'Patrice Salzenstein',
        liList: [{
          text: '法国CNRS研究所高级研究员'
        }, {
          text: ' 机电学科带头人'
        }]
      }, {
        icon: __webpack_require__(389),
        name: 'Zied Moumni',
        liList: [{
          text: '上海交通大学机械工程系'
        }, {
          text: ' 首席科学家'
        }, {
          text: '材料学科带头人'
        }]
      }, {
        icon: __webpack_require__(390),
        name: 'Stuart Perrin',
        liList: [{
          text: '西交利物浦大学先进教育学院院长'
        }, {
          text: ' 教育学学科带头人'
        }]
      }]
    };
  },

  mounted() {
    this.getbatchList();
  },

  methods: {
    async getbatchList() {
      const {
        data
      } = await Object(common["a" /* batchList */])('h5_gaoxiao');

      if (data.code === 0) {
        this.banner = data.data.h5_gaoxiao;
      }
    },

    peerImg(src) {
      Object(external_vant_["ImagePreview"])({
        images: [src],
        showIndex: false,
        className: 'coolegeImg'
      });
    }

  },

  head() {
    return {
      title: '高校公益行-艾思云课堂'
    };
  }

});
// CONCATENATED MODULE: ./pages/college/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_collegevue_type_script_lang_js_ = (collegevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/college/index.vue



function college_injectStyles (context) {
  
  var style0 = __webpack_require__(391)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(395)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var college_component = Object(componentNormalizer["a" /* default */])(
  pages_collegevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  college_injectStyles,
  "1bc1d626",
  "2b272719"
  
)

/* harmony default export */ var pages_college = __webpack_exports__["default"] = (college_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map