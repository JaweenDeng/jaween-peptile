exports.ids = [18];
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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e4e4047c", content, true, context)
};

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/teachHome.70312ce.png";

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/one.817dd78.png";

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coach.9f1ac6d.png";

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/writing.41ad94a.png";

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paper.e1e3766.png";

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/software.fbcf5dd.png";

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/conference.3a23383.png";

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17041f7d_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(578);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(579);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(580);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, ".swipe[data-v-17041f7d]{height:5.46667rem}.swipe .imgs[data-v-17041f7d]{width:100%;height:100%}.swipe[data-v-17041f7d] .van-swipe__indicator--active{width:.69333rem;border-radius:.26667rem;background:linear-gradient(90deg,#05c5ff,#0293ff)}.swipe[data-v-17041f7d] .van-swipe__indicator{background:#fefefe}.more[data-v-17041f7d]{padding:.08rem 0;min-width:2.26667rem;background:#e7edff;border-radius:1.06667rem;color:#0293ff}.more .moreIcon[data-v-17041f7d]{vertical-align:-.02667rem}.title[data-v-17041f7d]{left:0}.title[data-v-17041f7d],.title .inTitle[data-v-17041f7d]{position:relative;top:0}.title[data-v-17041f7d]:before{content:\"\";width:.53333rem;height:.53333rem;position:absolute;bottom:0;left:0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100%}.column2 .title[data-v-17041f7d]:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.column3 .title[data-v-17041f7d]:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.nav[data-v-17041f7d]{display:flex;flex-wrap:wrap;justify-content:space-between}.nav .context[data-v-17041f7d]{display:flex;flex:0 0 32%;margin-bottom:.26667rem;box-shadow:0 .05333rem .10667rem 0 rgba(0,68,178,.2)}.nav .context .navIcon[data-v-17041f7d]{height:.72rem}.nav .context .alone[data-v-17041f7d],.nav .context .alone .alone[data-v-17041f7d]{flex:1;display:flex;flex-direction:column;align-items:center;font-size:.32rem;background:#fff;border-radius:.13333rem}.nav .context .alone .alone[data-v-17041f7d]{margin-bottom:.08rem;box-shadow:0 .05333rem .10667rem 0 rgba(0,68,178,.2)}.img[data-v-17041f7d]{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title1.45a5a28.png";

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title2.3f6a92d.png";

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title3.ec1b7fb.png";

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=17041f7d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_vm._ssrNode("<div class=\"wrap pb15\" data-v-17041f7d>","</div>",[_c('SwipeBanner',{attrs:{"banner":_vm.banner}}),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-17041f7d>","</div>",[_vm._ssrNode("<div class=\"nav pl10 pr10 mt15\" data-v-17041f7d>","</div>",_vm._l((_vm.navList),function(item){return _vm._ssrNode("<div class=\"context\" data-v-17041f7d>","</div>",[_c('nuxt-link',{staticClass:"alone pt10 pb10",attrs:{"to":item.path || ("/allCourse?categoryId=" + (item.id))}},[_c('img',{staticClass:"navIcon",attrs:{"src":item.url}}),_vm._v(" "),_c('span',{staticClass:"pt5 f500 fs13"},[_vm._v(_vm._s(item.text))])])],1)}),0),_vm._ssrNode(" "),_vm._l((_vm.dataConfig),function(p,q){return [(_vm.data[p.value].length)?_vm._ssrNode("<div"+(_vm._ssrClass(null,q%2 === 0 ? 'column2':'column3'))+" data-v-17041f7d>","</div>",[_c('van-row',{staticClass:"pl15 pr15",attrs:{"type":"flex","align":"center","justify":"space-between"}},[_c('van-col',{attrs:{"span":"12"}},[_c('div',{staticClass:"c-333 f600 fs17 title"},[_c('span',{staticClass:"inTitle"},[_vm._v(_vm._s(p.title))])])]),_vm._v(" "),_c('van-col',{staticClass:"textRight",attrs:{"span":"12"}},[_c('nuxt-link',{staticClass:"inlineBlock vMiddle fs12 more textCenter",attrs:{"to":"/allCourse"}},[_vm._v("\n                更多课程"),_c('van-icon',{staticClass:"moreIcon",attrs:{"name":"play","color":"#0293FF"}})],1)],1)],1),_vm._ssrNode(" "),_vm._l((_vm.data[p.value]),function(item,index){return _vm._ssrNode("<div class=\"pt8\" data-v-17041f7d>","</div>",[_c('nuxt-link',{attrs:{"to":("/courseDetail/" + (item.id))}},[_c('CourseCard',{attrs:{"data":item}})],1)],1)})],2):_vm._e(),_vm._ssrNode(" "+((q===0)?("<div data-v-17041f7d><img"+(_vm._ssrAttr("src",__webpack_require__(569)))+" class=\"img pd13\" data-v-17041f7d></div>"):"<!---->"))]})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=17041f7d&scoped=true&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/home.js
/**首页接口 */
 //获取首页数据

const getHomeData = () => {
  return request["a" /* default */].post(`/school/home/index`);
}; //获取首页轮播图数据

const getHomeImg = () => {
  return request["a" /* default */].post(`/service/cms/pics/list/school_h5`, null, {
    custom: {
      // 自定义的额外参数
      isAis: true
    }
  });
}; //获取推荐课程

const getHomeTops = () => {
  return request["a" /* default */].post(`/school/home/tops`);
};
// EXTERNAL MODULE: ./components/Common/SwipeBanner.vue + 4 modules
var SwipeBanner = __webpack_require__(247);

// EXTERNAL MODULE: ./components/Common/CourseCard.vue + 4 modules
var CourseCard = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    CourseCard: CourseCard["a" /* default */],
    SwipeBanner: SwipeBanner["a" /* default */]
  },

  async asyncData() {
    const {
      data
    } = await getHomeData();

    if (data.code === 0) {
      const res = await getHomeImg();

      if (res.data.code === 0) {
        return {
          data: data.data,
          banner: res.data.data
        };
      }
    }
  },

  data() {
    return {
      config: common_config["a" /* default */],
      navList: [{
        url: __webpack_require__(570),
        text: '科研背景提升',
        path: '/promote/Introduce'
      }, {
        url: __webpack_require__(571),
        text: '论文辅导',
        path: '/paper/coach'
      }, {
        url: __webpack_require__(572),
        text: '写作训练营',
        id: 4
      }, {
        url: __webpack_require__(573),
        text: '科研论文',
        id: 2
      }, {
        url: __webpack_require__(574),
        text: '科研软件',
        id: 5
      }, // {
      //   url:require("../assets/images/home/master.png"),
      //   text:'学术大咖秀',
      //   id:3
      // },
      {
        url: __webpack_require__(575),
        text: '高校公益行',
        path: '/college'
      }],
      dataConfig: [{
        title: '精品课程',
        value: 'tops'
      }, {
        title: '训练营',
        value: 'camp'
      }, {
        title: '科研软件',
        value: 'soft'
      }, {
        title: '学术大咖秀',
        value: 'shows'
      }, {
        title: '科研写作',
        value: 'papers'
      }, {
        title: '高校公益行',
        value: 'college'
      }, {
        title: '学术会议',
        value: 'meetings'
      }]
    };
  },

  mounted() {
    this.setScrollTop(0);
  },

  methods: {
    handlego() {
      location.href = `${common_config["a" /* default */].LINK.ais_h5}/JoinPeerReview?action=2`;
    },

    //滚动条回到头部
    setScrollTop(value) {
      if (typeof window !== 'undefined') {
        document.documentElement.scrollTop = document.body.scrollTop = value;
      }
    }

  },

  head() {
    return {
      title: '学术会议直播_学术在线课堂_学术知识服务平台-艾思云课堂',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '艾思云课堂是学术知识服务平台，为科研人员提供包括学术会议直播/点播、SCI论文写作培训、研究方法、学术技能、院士课堂、海外学历教育、网络教育、科研问答等知识服务，帮助科研人员全方位提升科研能力。'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: '学术直播,学术交流直播,学术公开课'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(576)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17041f7d",
  "39ece31e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("52005738", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return studyStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return studyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return studyFavoriteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStudyCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTradeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return payTrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancleTrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getbiuniqueTrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return previewCertificate; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/**学习中心 */

 // 获取学习统计

const studyStatistics = () => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/study/statistics`);
}; // 最近学习列表

const studyList = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/study/list`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; // 我的收藏

const studyFavoriteList = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/favorite/list`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //我的课程

const getStudyCourse = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/study/courses`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //获取我的订单列表

const getTradeList = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/list`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; //支付订单

const payTrade = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/pay/${params}`);
}; //取消订单

const cancleTrade = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/student/trade/cancel/${params}`);
}; //获取我的一对一订单

const getbiuniqueTrade = params => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/train/trade/list`, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params));
}; // 预览证书

const previewCertificate = ({
  courseId,
  receiveId
}) => {
  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/school/study/cert/${courseId}/${receiveId}`, {}, {
    responseType: 'arraybuffer'
  });
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrowDown.9fbc5b7.png";

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diploma.099447b.png";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/student.7ff9df0.png";

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_style_index_0_id_7f0c2dcc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".certificateBtn[data-v-7f0c2dcc]{background:#fff;display:flex;justify-content:flex-end;padding:0 .42667rem .26667rem;box-sizing:border-box}.certificateBtn .diploma[data-v-7f0c2dcc]{display:flex;align-items:center;padding:.18667rem .26667rem;border-radius:.13333rem;background-color:rgba(69,113,255,.1);color:#4571ff}.certificateBtn .student[data-v-7f0c2dcc]{color:#ff8515;background-color:rgba(255,95,27,.1);margin-left:.26667rem}.CourseCard[data-v-7f0c2dcc]{background:#fefdff;display:flex}.CourseCard .leftImg[data-v-7f0c2dcc]{flex:0 0 4rem;position:relative;top:0;height:2.4rem}.CourseCard .leftImg .certificate[data-v-7f0c2dcc]{position:absolute;top:.13333rem;right:.13333rem;display:flex}.CourseCard .leftImg .certificate img[data-v-7f0c2dcc]{width:2.4rem}.CourseCard .leftImg .leftImgIcon[data-v-7f0c2dcc]{display:block;width:100%;height:100%;border-radius:.13333rem}.CourseCard .leftImg .willStart[data-v-7f0c2dcc]{background:#63b900;border-radius:0 .08rem 0 .08rem}.CourseCard .leftImg .living[data-v-7f0c2dcc],.CourseCard .leftImg .willStart[data-v-7f0c2dcc]{position:absolute;top:0;right:0;width:1.33333rem;height:.53333rem;line-height:.53333rem}.CourseCard .leftImg .living[data-v-7f0c2dcc]{background:#f7b500;opacity:.9;border-radius:.02667rem}.CourseCard .leftImg .endLiving[data-v-7f0c2dcc]{position:absolute;top:0;right:0;width:1.33333rem;height:.53333rem;line-height:.53333rem;background:rgba(0,0,0,.5);border-radius:0 .08rem 0 .08rem}.CourseCard .leftTopImg[data-v-7f0c2dcc]{flex:0 0 4.34667rem;height:2.58667rem}.CourseCard .conter[data-v-7f0c2dcc]{flex:1;display:flex;flex-direction:column;justify-content:space-between}.CourseCard .conter .title[data-v-7f0c2dcc]{word-break:break-all;color:#191919;line-height:.56rem;flex-wrap:wrap}.CourseCard .conter .title .period[data-v-7f0c2dcc]{background:#4a90e2;color:#fff;font-size:.32rem;text-align:center;padding:.05333rem .18667rem;border-radius:.53333rem}.CourseCard .conter .statusWrap[data-v-7f0c2dcc]{display:flex;align-items:center;justify-content:space-between}.CourseCard .conter .limitDiscount[data-v-7f0c2dcc]{width:1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;border-radius:.10667rem;border:.02667rem solid #ed3833;color:#ed3833}.CourseCard .conter .fakePrice[data-v-7f0c2dcc]{text-decoration:line-through}.CourseCard .conter .studyNumber[data-v-7f0c2dcc]{align-self:flex-end;white-space:nowrap}.CourseCard .conter .processWrap[data-v-7f0c2dcc]{display:flex;align-items:center}.CourseCard .conter .processWrap[data-v-7f0c2dcc] .van-progress__pivot{display:none}.CourseCard .conter .processWrap[data-v-7f0c2dcc] .van-progress{width:2.53333rem;height:.18667rem}.CourseCard .conter .processWrap .processTitle[data-v-7f0c2dcc]{color:#d74700;word-break:keep-all}.CourseCard .conter .pays[data-v-7f0c2dcc]{color:#f57b23}.CourseCard .conter .inner[data-v-7f0c2dcc]{flex:1}.CourseCard .conter .end[data-v-7f0c2dcc],.CourseCard .conter .snece1[data-v-7f0c2dcc]{width:1.44rem;padding-right:.13333rem;height:.58667rem;line-height:.58667rem;position:relative;top:0;background:#f6f3f7}.CourseCard .conter .end[data-v-7f0c2dcc]:after,.CourseCard .conter .snece1[data-v-7f0c2dcc]:after{content:\"\";position:absolute;left:0;top:0;border:.26667rem solid transparent;border-left-color:#fff}.CourseCard .conter .snece1[data-v-7f0c2dcc]{background:#ebf2fd;color:#188ead}.CourseCard .conter .beStart[data-v-7f0c2dcc]{height:.58667rem;line-height:.58667rem;width:1.62667rem;text-align:center;background:#fcf2dc;color:#bf5a1a}.CourseCard .conter .start[data-v-7f0c2dcc]{width:1.2rem;height:.58667rem;line-height:.58667rem;background:#fde9f0;color:#c54854}.CourseCard .conter .liveIcon[data-v-7f0c2dcc]{width:.42667rem}.CourseCard .conter .hotIcon[data-v-7f0c2dcc]{width:.32rem}.CourseCard .conter .live[data-v-7f0c2dcc]{width:1.2rem;height:.58667rem;line-height:.58667rem;background:#e7f4fd;color:#4973c5}.layout[data-v-7f0c2dcc]{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.1);z-index:9999;justify-content:center;flex-direction:column}.layout[data-v-7f0c2dcc],.layout .save[data-v-7f0c2dcc]{display:flex;align-items:center}.layout .close[data-v-7f0c2dcc]{display:flex;width:90%;justify-content:flex-end;margin-bottom:.26667rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CourseCard.vue?vue&type=template&id=7f0c2dcc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"CourseCard pt12 pb12 pl16 pr16\" data-v-7f0c2dcc>","</div>",[_vm._ssrNode("<div class=\"leftImg\" data-v-7f0c2dcc>","</div>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("" + (_vm.config.IMG_URL.default) + (_vm.data.poster))),expression:"`${config.IMG_URL.default}${data.poster}`"}],class:['leftImgIcon', {'leftTopImg':_vm.isTops} ],attrs:{"alt":"","width":"100%"}},[]),_vm._ssrNode(" "+((!_vm.prosess && _vm.data.scene > 1 && _vm.livingStatus)?("<div"+(_vm._ssrClass(null,['fs12', 'f500', 'textCenter', 'c-fff', _vm.livingStatus.style]))+" data-v-7f0c2dcc><span data-v-7f0c2dcc>"+_vm._ssrEscape(_vm._s(_vm.livingStatus.title))+"</span></div>"):"<!---->"))],2),_vm._ssrNode(" "+((_vm.isTops)?("<div class=\"c-333 fs14 f500 van-multi-ellipsis--l2 title mt6\" data-v-7f0c2dcc>"+_vm._ssrEscape("\n      "+_vm._s(_vm.data.name)+"\n    ")+"</div>"):"<!---->")+" "),(!_vm.isTops)?_vm._ssrNode("<div class=\"conter pl12\" data-v-7f0c2dcc>","</div>",[_vm._ssrNode("<div class=\"c-333 fs16 f500 van-multi-ellipsis--l2 title\" data-v-7f0c2dcc>"+((_vm.data.type === 3 && _vm.data.period>0)?("<span class=\"period\" data-v-7f0c2dcc>"+_vm._ssrEscape("第"+_vm._s(_vm.data.period)+"期")+"</span>"):"<!---->")+" <span style=\"vertical-align: middle;\" data-v-7f0c2dcc>"+_vm._ssrEscape(_vm._s(_vm.data.name))+"</span></div> "),(_vm.prosess && _vm.data.scene < 2)?_vm._ssrNode("<div class=\"processWrap mt25\" data-v-7f0c2dcc>","</div>",[_vm._ssrNode("<span class=\"fs12 f500 mr7 processTitle\" data-v-7f0c2dcc>\n          学习进度\n        </span> "),_c('van-progress',{attrs:{"color":"linear-gradient(270deg, #fd2a5a 0%, #ffb85c 100%)","percentage":_vm.data.progress}}),_vm._ssrNode(" <span class=\"fs12 ml5\" data-v-7f0c2dcc>"+_vm._ssrEscape("\n          "+_vm._s(_vm.data.progress)+"%\n        ")+"</span>")],2):_vm._e(),_vm._ssrNode(" "+((_vm.isDisCount && !_vm.prosess)?("<div class=\"fs12 limitDiscount mt10\" data-v-7f0c2dcc>\n        限时优惠\n      </div>"):"<!---->")+" "+((!_vm.prosess)?("<div"+(_vm._ssrClass(null,['statusWrap', _vm.isDisCount ? 'mt1' : '']))+" data-v-7f0c2dcc><div class=\"fs16 pays f500\" data-v-7f0c2dcc><span data-v-7f0c2dcc>"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.price === 0 ? '免费' : _vm.isDisCount ? ("¥" + (_vm.data.discountPrice) + "元") : ("¥" + (_vm.data.price) + "元"))+"\n          ")+"</span> "+((_vm.isDisCount)?("<span class=\"fakePrice fs12 c-666 ml5\" data-v-7f0c2dcc>"+_vm._ssrEscape("\n            ¥"+_vm._s(_vm.data.price)+"\n          ")+"</span>"):"<!---->")+"</div> "+((!_vm.isOrder)?("<div class=\"textRight fs12 c-666 studyNumber\" data-v-7f0c2dcc>"+_vm._ssrEscape("\n          "+_vm._s(_vm.data.studyNumber)+"人"+_vm._s(_vm.data.price === 0 ? '学习' : '购买')+"\n        ")+"</div>"):"<!---->")+"</div>"):"<!---->"))],2):_vm._e()],2),_vm._ssrNode(" "),(_vm.url)?_vm._ssrNode("<div class=\"layout\" data-v-7f0c2dcc>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-7f0c2dcc>","</div>",[_c('van-icon',{attrs:{"name":"close","color":"#fff"}})],1),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",_vm.url))+" alt width=\"90%\" data-v-7f0c2dcc> "),_c('van-button',{staticClass:"mt20",attrs:{"round":""}},[_c('div',{staticClass:"save"},[_c('img',{attrs:{"src":__webpack_require__(90),"alt":""}}),_vm._v(" "),_c('span',{staticStyle:{"color":"#4571FF","font-size":"12pt","margin-left":"5px"}},[_vm._v("长按图片保存")])])])],2):_vm._e(),_vm._ssrNode(" "),(_vm.data.type === 3)?_vm._ssrNode("<div class=\"certificateBtn fs14 pr16\" data-v-7f0c2dcc>","</div>",[((_vm.data.cert & 2) > 0)?_vm._ssrNode("<div class=\"diploma\" data-v-7f0c2dcc>","</div>",[_c('van-image',{attrs:{"width":"15","src":__webpack_require__(91)}}),_vm._ssrNode(" <span class=\"pl5\" data-v-7f0c2dcc>毕业证书</span>")],2):_vm._e(),_vm._ssrNode(" "),((_vm.data.cert & 1) > 0)?_vm._ssrNode("<div class=\"diploma student\" data-v-7f0c2dcc>","</div>",[_c('van-image',{attrs:{"width":"15","src":__webpack_require__(92)}}),_vm._ssrNode(" <span class=\"pl5\" data-v-7f0c2dcc>优秀学员</span>")],2):_vm._e()],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/CourseCard.vue?vue&type=template&id=7f0c2dcc&scoped=true&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./api/studyCenter.js
var studyCenter = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CourseCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CourseCardvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    prosess: {
      // 显示进度条
      type: Boolean,
      default: false
    },
    isOrder: {
      //是否属于确认订单页
      type: Boolean,
      default: false
    },
    isTops: {
      //是否属于推荐会议
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      config: common_config["a" /* default */],
      url: '',
      currentTime: parseInt(new Date().getTime() / 1000)
    };
  },

  computed: {
    //判断是否优惠
    isDisCount() {
      return this.currentTime >= this.data.discountStart && this.data.discountEnd >= this.currentTime;
    },

    //判断直播状态
    livingStatus() {
      if (this.data.liveStatus === 1 || this.currentTime > this.data.start && this.data.end > this.currentTime && this.data.type !== 3) {
        return {
          title: '直播中',
          style: 'living'
        };
      } else if (this.data.start - this.currentTime < 900 && this.data.start - this.currentTime > 0 && this.data.type !== 3) {
        return {
          title: '即将开始',
          style: 'willStart'
        };
      } else if (this.currentTime > this.data.end && this.data.type === 1) {
        return {
          title: '已结束',
          style: 'endLiving'
        };
      }

      return null;
    }

  },
  methods: {
    preview({
      id
    }, type) {
      this.previewCertificate({
        courseId: id,
        receiveId: type
      });
    },

    goCourseDetail({
      id
    }) {
      this.$router.push(`/courseDetail/${id}`);
    },

    async previewCertificate(params) {
      let data = await Object(studyCenter["f" /* previewCertificate */])(params);
      let base64 = this.$transformArrayBufferToBase64(data.data);
      this.url = base64 ? 'data:image/png;base64,' + base64 : '';
    }

  }
});
// CONCATENATED MODULE: ./components/Common/CourseCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_CourseCardvue_type_script_lang_js_ = (CourseCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/CourseCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_CourseCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f0c2dcc",
  "4ee02f62"
  
)

/* harmony default export */ var CourseCard = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map