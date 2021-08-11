exports.ids = [20];
exports.modules = {

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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(562);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44fbced1", content, true, context)
};

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/detail_btn.a914eaa.png";

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/share.07743e4.png";

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(318);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7a94e257_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".content[data-v-7a94e257]{background:#fff;padding:.26667rem .4rem}.btn-w[data-v-7a94e257]{height:1.14667rem;background:#fff;font-size:.34667rem}.btn-w[data-v-7a94e257],.btn-w .btn[data-v-7a94e257]{display:flex;align-items:center}.btn-w .btn[data-v-7a94e257]{flex:1;height:100%;justify-content:center}.btn-w .btn .img1[data-v-7a94e257],.btn-w .btn .img2[data-v-7a94e257]{width:.42667rem}.btn-w .btn .img2[data-v-7a94e257]{transform:rotate(180deg)}.btn-w .btn1[data-v-7a94e257]{border-right:.02667rem solid #f6f6f6}.btn-w .btn2[data-v-7a94e257]{border-left:.02667rem solid #f6f6f6}.intro[data-v-7a94e257]{border-top:.05333rem solid #e2f1ff;display:flex}.intro .intro-txt[data-v-7a94e257]{height:1.6rem;flex:1;padding:.26667rem .53333rem;background:#fff}.intro .intro-txt1[data-v-7a94e257]{border-right:.02667rem solid #f6f6f6}.intro .intro-txt2[data-v-7a94e257]{border-left:.02667rem solid #f6f6f6}.share[data-v-7a94e257]{position:fixed;bottom:0;width:100%;height:1.30667rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fff;border-top:.02667rem solid rgba(0,0,0,.1)}.share .img[data-v-7a94e257]{width:.45333rem;margin-bottom:.13333rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsDetail/_id.vue?vue&type=template&id=7a94e257&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index pb60"},[_vm._ssrNode("<div class=\"content mb10\" data-v-7a94e257><h3 class=\"title fs21 c-333 fBold\" data-v-7a94e257>"+_vm._ssrEscape("\n      "+_vm._s(_vm.data.entry.title)+"\n    ")+"</h3> <span class=\"fs15 c-999\" data-v-7a94e257>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$changeTime(_vm.data.entry.createTime, 'YYYY-MM-DD'))+"\n    ")+"</span> <div class=\"fs13 c-333 ueEditorStyle mt12\" data-v-7a94e257>"+(_vm._s(_vm.data.entry.content))+"</div></div> <div class=\"btn-w\" data-v-7a94e257><span class=\"btn btn1\" data-v-7a94e257><img"+(_vm._ssrAttr("src",__webpack_require__(333)))+" alt class=\"img1 mr10\" data-v-7a94e257>\n      上一篇\n    </span> <span class=\"btn btn2\" data-v-7a94e257>\n      下一篇\n      <img"+(_vm._ssrAttr("src",__webpack_require__(333)))+" alt class=\"img2 ml10\" data-v-7a94e257></span></div> <div class=\"intro fs13\" data-v-7a94e257><div class=\"intro-txt intro-txt1\" data-v-7a94e257><p class=\"twoLine\" data-v-7a94e257>"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.front ? _vm.data.front.title : '没有了')+"\n      ")+"</p></div> <div class=\"intro-txt intro-txt2\" data-v-7a94e257><p class=\"twoLine\" data-v-7a94e257>"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.next ? _vm.data.next.title : '没有了')+"\n      ")+"</p></div></div> <div class=\"share\" data-v-7a94e257><img"+(_vm._ssrAttr("src",__webpack_require__(560)))+" alt class=\"img\" data-v-7a94e257> <div class=\"fs12 c-333 f500\" data-v-7a94e257>\n      分享\n    </div></div> "),_c('ThirdShare',{ref:"ThirdShare",attrs:{"shareOption":_vm.shareOption}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newsDetail/_id.vue?vue&type=template&id=7a94e257&scoped=true&

// EXTERNAL MODULE: ./api/college.js
var college = __webpack_require__(217);

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Common/ThirdShare.vue + 4 modules
var ThirdShare = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newsDetail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ThirdShare: ThirdShare["a" /* default */]
  },

  async asyncData(ctx) {
    const {
      data
    } = await Object(college["c" /* newsDetail */])({
      id: +ctx.route.params.id,
      info: {
        correlation: true
      }
    });

    if (data.code === 0) {
      return {
        data: data.data,
        shareOption: {
          title: data.data.entry.title,
          desc: data.data.entry.description,
          imgUrl: `${common_config["a" /* default */].IMG_URL.default}${data.data.entry.poster}`,
          link: `${common_config["a" /* default */].LINK.school_h5}/newsDetail/${+ctx.route.params.id}`
        }
      };
    }
  },

  methods: {
    //打开分享窗口
    openShare() {
      this.$refs.ThirdShare.open();
    },

    handelGo(info) {
      if (info) {
        this.$router.replace(`/newsDetail/${info.id}`);
      }
    }

  },

  head() {
    return {
      title: `${this.data.entry.title}—艾思云课堂`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.data.entry.description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.data.entry.keywords
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/newsDetail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var newsDetail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/newsDetail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(561)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newsDetail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a94e257",
  "512f4246"
  
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

/***/ })

};;
//# sourceMappingURL=_id.js.map