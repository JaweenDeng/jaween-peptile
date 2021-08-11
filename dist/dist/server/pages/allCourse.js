exports.ids = [2];
exports.modules = {

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("00aeee64", content, true, context)
};

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_style_index_0_id_764bc50c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Selection .list[data-v-764bc50c]{display:flex;align-items:center}.Selection .title[data-v-764bc50c]{white-space:nowrap}.Selection .list[data-v-764bc50c]:last-child{border:none}.Selection .selectWrap[data-v-764bc50c]{display:flex;align-items:center;overflow-x:auto;width:100%}.Selection .item[data-v-764bc50c]{padding:0 .13333rem;flex:0 0 auto}.Selection .allItem[data-v-764bc50c],.Selection .item[data-v-764bc50c]{height:.69333rem;line-height:.69333rem}.Selection .allItem[data-v-764bc50c]{width:1.44rem}.Selection .itemActive[data-v-764bc50c]{color:#4a90e2;background:#e9f3fd;border-radius:.42667rem}[data-v-764bc50c]::-webkit-scrollbar{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/allCourse.vue?vue&type=template&id=0c9e2f60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"courseList"},[_c('van-sticky',[_c('Selection',{attrs:{"navData":_vm.navData,"active":_vm.active},on:{"update":_vm.search}})],1),_vm._ssrNode(" "),_c('van-list',{attrs:{"finished":_vm.finished,"finishedText":"你已经看到我的底线了~"},on:{"load":_vm.onLoad},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"pt7"},[_c('nuxt-link',{attrs:{"to":("/courseDetail/" + (item.id))}},[_c('CourseCard',{attrs:{"data":item}})],1)],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/allCourse.vue?vue&type=template&id=0c9e2f60&scoped=true&

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Common/CourseCard.vue + 4 modules
var CourseCard = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Selection.vue?vue&type=template&id=764bc50c&scoped=true&
var Selectionvue_type_template_id_764bc50c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Selection bg-fff"},[_vm._ssrNode("<ul data-v-764bc50c>"+(_vm._ssrList((_vm.navData),function(item,index){return ("<li class=\"pd10 list\" data-v-764bc50c>"+((item.key)?("<div class=\"c-333 fs14 title\" data-v-764bc50c>"+_vm._ssrEscape("\n        "+_vm._s(item.key)+":\n      ")+"</div>"):"<!---->")+" <ul class=\"selectWrap c-666\" data-v-764bc50c><li"+(_vm._ssrClass(null,['item', 'textCenter', 'hand', 'ml7', 'fs14', 'f500', {'itemActive':!_vm.active[item.type]}]))+" data-v-764bc50c>"+_vm._ssrEscape("\n          "+_vm._s(item.allKey ||'全部')+"\n        ")+"</li> "+(_vm._ssrList((item.value),function(pItem){return ("<li"+(_vm._ssrClass(null,['item', 'textCenter', 'hand', 'ml7', 'fs14', 'f500', {'itemActive':+(_vm.active[item.type])===pItem.value}]))+" data-v-764bc50c>"+_vm._ssrEscape("\n          "+_vm._s(pItem.title)+"\n        ")+"</li>")}))+"</ul></li>")}))+"</ul>")])}
var Selectionvue_type_template_id_764bc50c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/Selection.vue?vue&type=template&id=764bc50c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Selection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Selectionvue_type_script_lang_js_ = ({
  props: {
    navData: {
      type: Array,
      required: true
    },
    active: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.calcSilder(document.getElementsByClassName('selectWrap')[0]);
  },

  methods: {
    calcSilder(ele) {
      let nodes = ele.children;
      let phoneWid = document.body.clientWidth;
      let currentWid = 74;
      let calcWid = 0;
      let nodesArray = [...nodes]; // 定位当前选中的导航

      let index = nodesArray.findIndex(node => {
        return node.className.split(' ').includes('itemActive');
      }); // 计算当前导航距离左边的宽度

      nodesArray.forEach((node, nodeIndex) => {
        if (nodeIndex > index) {
          return;
        }

        currentWid += node.clientWidth;
      }); // 如果当前导航宽度大于手机屏幕宽度,那就计算需要偏离的距离

      if (currentWid > phoneWid) {
        calcWid = currentWid - phoneWid + 74;
      }

      ele.scrollLeft = calcWid;
    },

    //刷选单个选择
    itemClick(type, value) {
      value ? this.$set(this.active, type, value) : this.$delete(this.active, type);
      this.$emit('update', this.active);
    }

  }
});
// CONCATENATED MODULE: ./components/Common/Selection.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Selectionvue_type_script_lang_js_ = (Selectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/Selection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Selectionvue_type_script_lang_js_,
  Selectionvue_type_template_id_764bc50c_scoped_true_render,
  Selectionvue_type_template_id_764bc50c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "764bc50c",
  "63943c76"
  
)

/* harmony default export */ var Selection = (component.exports);
// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// EXTERNAL MODULE: ./config/mock.js
var mock = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/allCourse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var allCoursevue_type_script_lang_js_ = ({
  components: {
    CourseCard: CourseCard["a" /* default */],
    Selection: Selection
  },

  async asyncData(context) {
    const params = {
      page: 1
    };
    if (context.route.query.search) params.name = context.route.query.search;
    const {
      data
    } = await Object(course["g" /* getAllCourseData */])(params);

    if (data.code === 0) {
      return {
        list: data.data.entries,
        total: +data.data.total
      };
    }
  },

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pagination: {
        page: 1
      },
      active: {},
      navData: [{
        allKey: '全部课程',
        value: [4, 5, 2, 3, 7, 1].map(item => ({
          title: mock["b" /* couseType */][item],
          value: item
        })),
        type: 'categoryId'
      }, {
        allKey: '全部类型',
        value: [{
          title: '免费',
          value: 1
        }, {
          title: "付费",
          value: 2
        }],
        type: 'type'
      }, {
        allKey: '课程难度',
        value: [{
          title: '初级',
          value: 1
        }, {
          title: "中级",
          value: 2
        }, {
          title: "高级",
          value: 3
        }],
        type: 'difficulty'
      }]
    };
  },

  created() {
    if (this.list.length >= this.total) {
      this.finished = true;
    }

    let {
      categoryId
    } = this.$route.query;

    if (categoryId) {
      this.active = {
        categoryId: Number(categoryId)
      };
      this.getListHand();
    }
  },

  methods: {
    async getListHand() {
      let params = { ...this.pagination,
        ...this.active
      };
      if (this.$route.query.search) params.name = this.$route.query.search;
      const {
        data
      } = await Object(course["g" /* getAllCourseData */])(params);
      this.loading = false;

      if (data.code === 0) {
        this.list = params.page === 1 ? data.data.entries : this.list.concat(data.data.entries);
        this.pagination.page = this.pagination.page + 1;

        if (this.list.length === +data.data.total) {
          this.finished = true;
          this.loading = false;
        }
      }
    },

    search() {
      this.pagination.page = 1;
      this.finished = false;
      Object(external_ais_common_utils_["backScrollTop"])(0);
      this.getListHand();
    },

    onLoad() {
      setTimeout(() => {
        this.getListHand();
      }, 500);
    }

  },

  head() {
    return {
      title: 'SCI论文写作公开课_国际学术会议交流直播-艾思云课堂',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '艾思云课堂每天更新学术会议直播课程，学术交流点播课，sci论文公开课，促进学术交流，帮助科研人员全方位提升科研能力。'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: '学术公开课，SCI写作课，学术交流课'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/allCourse.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_allCoursevue_type_script_lang_js_ = (allCoursevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/allCourse.vue



function allCourse_injectStyles (context) {
  
  
}

/* normalize component */

var allCourse_component = Object(componentNormalizer["a" /* default */])(
  pages_allCoursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  allCourse_injectStyles,
  "0c9e2f60",
  "5872d468"
  
)

/* harmony default export */ var allCourse = __webpack_exports__["default"] = (allCourse_component.exports);

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
//# sourceMappingURL=allCourse.js.map