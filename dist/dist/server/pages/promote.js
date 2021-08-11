exports.ids = [26];
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7947a82c", content, true, context)
};

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_promote_vue_vue_type_style_index_0_id_977e78c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabBox[data-v-977e78c6]{display:flex;font-size:.4rem;font-weight:600;line-height:1.12rem}.tabBox[data-v-977e78c6],.tabBox li[data-v-977e78c6]{color:#666;text-align:center}.tabBox li[data-v-977e78c6]{width:33.3%;position:relative}.tabBox li[data-v-977e78c6]:not(:last-child):after{content:\"\";position:absolute;right:0;top:50%;transform:translateY(-50%);background:#d8d8d8;width:.02667rem;height:.53333rem}.tabBox .avtiveLi[data-v-977e78c6]{background:#fff;color:#1465c4}.tabBox .avtiveLi[data-v-977e78c6]:before{content:\"\";position:absolute;left:50%;bottom:.13333rem;transform:translateX(-50%);width:.66667rem;height:.10667rem;background:linear-gradient(99deg,#05c5ff,#0293ff)}.tabBox .avtiveLi[data-v-977e78c6]:after{background:transparent!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/promote.vue?vue&type=template&id=977e78c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"tabBox\" data-v-977e78c6>","</ul>",_vm._l((_vm.tabList),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass(null,[{'avtiveLi':_vm.currentPath ===item.path}]))+" data-v-977e78c6>","</li>",[_c('nuxt-link',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"to":item.path}},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")]),_vm._ssrNode(_vm._ssrEscape("\n      "+_vm._s(item.title)+"\n    "))],2)}),0),_vm._ssrNode(" "),_c('SwipeBanner',{attrs:{"banner":_vm.imgArr}}),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"backHomeIcon",attrs:{"to":"/"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/promote.vue?vue&type=template&id=977e78c6&scoped=true&

// EXTERNAL MODULE: ./api/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Common/SwipeBanner.vue + 4 modules
var SwipeBanner = __webpack_require__(247);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/promote.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var promotevue_type_script_lang_js_ = ({
  components: {
    SwipeBanner: SwipeBanner["a" /* default */]
  },

  async asyncData() {
    const res = await Object(common["a" /* batchList */])('H5_carousel');
    return {
      imgArr: res.data.data.H5_carousel
    };
  },

  data() {
    return {
      tabList: [{
        title: '简介',
        path: "/promote/Introduce"
      }, {
        title: '科研小组',
        path: "/promote/scientificGroup"
      }, {
        title: '科研一对一',
        path: "/promote/scientificBiunique"
      }],
      currentPath: null
    };
  },

  watch: {
    $route(val) {
      this.currentPath = val.fullPath;
    }

  },

  mounted() {
    this.currentPath = this.$route.fullPath;
  },

  methods: {
    tabClick(path) {
      this.$router.replace({
        path: path
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/promote.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_promotevue_type_script_lang_js_ = (promotevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/promote.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(397)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_promotevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "977e78c6",
  "e425f3e8"
  
)

/* harmony default export */ var promote = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=promote.js.map