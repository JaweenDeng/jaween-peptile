exports.ids = [15];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/comment.6bdafe9.png";

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3eb14af9", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("91be342a", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1a0030b8", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bbdace88", content, true, context)
};

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b1a0884", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/master.e1780ae.png";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/warn.09bfcde.png";

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseEvaluate.vue?vue&type=template&id=23a6583b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.data.apply && !_vm.data.evaluated)?_vm._ssrNode("<div class=\"comment mt5\" data-v-23a6583b>","</div>",[_vm._ssrNode("<div class=\"star\" data-v-23a6583b>","</div>",[_vm._ssrNode("<span style=\"font-size: 13px; color: #3a3a3a; margin-right: 17px\" data-v-23a6583b>课程评星</span> "),_c('van-rate',{attrs:{"readonly":"","value":5,"size":25,"color":"#ffd21e","void-icon":"star","void-color":"#eee"}})],2),_vm._ssrNode(" "),_c('van-button',{staticStyle:{"width":"108px","height":"38px"},attrs:{"round":"","color":"linear-gradient(to right, #00B5F1, #0080DB)"},on:{"click":_vm.sendComment}},[_vm._v("\n      我要评价\n    ")])],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"list mt5\" data-v-23a6583b>","</div>",[(_vm.courseCommentTotal > 0)?_vm._ssrNode("<div class=\"allComment\" data-v-23a6583b>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-23a6583b>"+_vm._ssrEscape("\n        全部评论 ( "+_vm._s(_vm.courseCommentTotal)+" )\n      ")+"</div> "),_vm._ssrNode("<div class=\"commentList\" data-v-23a6583b>","</div>",[_vm._l((_vm.courseCommentList),function(item,index){return _vm._ssrNode("<div class=\"alone\" data-v-23a6583b>","</div>",[_vm._ssrNode("<div class=\"header mb10 pt14\" data-v-23a6583b><div class=\"fs14\" data-v-23a6583b>"+_vm._ssrEscape("\n              "+_vm._s(item.nickname)+"\n            ")+"</div> <div class=\"fs12 c-9898\" data-v-23a6583b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$changeTime(item.createTime, "YYYY/MM/DD"))+"\n            ")+"</div></div> "),_c('van-rate',{attrs:{"value":item.score,"allow-half":"","size":15,"color":"#ffd21e","void-icon":"star","void-color":"#eee"}}),_vm._ssrNode(" <div class=\"c-333 fs12 mt10 breakAll\" data-v-23a6583b>"+_vm._ssrEscape("\n            "+_vm._s(item.content || "没有评论")+"\n          ")+"</div> "+((item.replyContent)?("<div class=\"mt10 scoreListAns fs12\" data-v-23a6583b><p class=\"f500 c-009\" data-v-23a6583b>\n              艾思科蓝官方回复：\n            </p> <div class=\"c-666 mt5 breakAll\" data-v-23a6583b>"+_vm._ssrEscape("\n              "+_vm._s(item.replyContent)+"\n            ")+"</div></div>"):"<!---->"))],2)}),_vm._ssrNode(" "+((_vm.courseCommentTotal - _vm.courseCommentList.length > 0)?("<div class=\"more\" data-v-23a6583b>\n          更多回复\n        </div>"):"<!---->"))],2)],2):_vm._ssrNode("<div class=\"noComment\" data-v-23a6583b>","</div>",[_c('van-image',{attrs:{"width":"206","src":__webpack_require__(108),"alt":"无评论"}}),_vm._ssrNode(" <p class=\"fs12 c-666 mt10\" data-v-23a6583b>\n        暂无评论\n      </p>")],2)]),_vm._ssrNode(" "),_c('comment-pop',{ref:"comment",attrs:{"courseId":+_vm.data.courseId},on:{"getComment":_vm.updateComment,"setIsEnd":_vm.setIsEnd}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CourseDetail/CourseEvaluate.vue?vue&type=template&id=23a6583b&scoped=true&

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Common/CommentPop.vue + 4 modules
var CommentPop = __webpack_require__(176);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseEvaluate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CourseEvaluatevue_type_script_lang_js_ = ({
  components: {
    CommentPop: CommentPop["a" /* default */]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      courseCommentTotal: 0,
      courseCommentList: [],
      courseCommentPage: 1
    };
  },

  methods: {
    setIsEnd() {
      this.$emit('setIsEnd', false);
    },

    // 我要评论
    sendComment() {
      this.$emit('setIsEnd', true);
      this.$refs.comment.toggle(false);
    },

    // 获取评论
    async getCommentList() {
      let {
        data: {
          code,
          data
        }
      } = await Object(course["k" /* getCommentList */])({
        courseId: this.data.courseId,
        page: this.courseCommentPage,
        pageSize: 20
      });

      if (code === 0) {
        this.courseCommentList = this.courseCommentPage === 1 ? data.entries : [...this.courseCommentList, ...data.entries];
        this.courseCommentTotal = +data.total;
      }
    },

    //评论后刷新页面
    updateComment() {
      this.$emit('setIsEnd', false);
      this.courseCommentPage = 1;
      this.getCommentList();
      Object(course["n" /* getCourseDetail */])(this.data.courseId).then(res => {
        if (res.data.code === 0) {
          this.$set(this.data, 'score', res.data.data.score);
        }
      });
    },

    //评论列表下拉加载
    showMoreComment() {
      this.courseCommentPage += 1;
      this.getCommentList();
    }

  }
});
// CONCATENATED MODULE: ./components/CourseDetail/CourseEvaluate.vue?vue&type=script&lang=js&
 /* harmony default export */ var CourseDetail_CourseEvaluatevue_type_script_lang_js_ = (CourseEvaluatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CourseDetail/CourseEvaluate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CourseDetail_CourseEvaluatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23a6583b",
  "2b80562c"
  
)

/* harmony default export */ var CourseEvaluate = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseClock.vue?vue&type=template&id=d53f8a7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-fff pl20 pr20 fs14"},[_vm._ssrNode("<div class=\"clockTab\" data-v-d53f8a7a><img"+(_vm._ssrAttr("src",__webpack_require__(191)))+" data-v-d53f8a7a> <span class=\"f500\" data-v-d53f8a7a>"+_vm._ssrEscape("今日已有"+_vm._s(_vm.clockDay)+"人打卡")+"</span> <ul class=\"switch\" data-v-d53f8a7a><li data-v-d53f8a7a>\n        精华\n      </li> <li data-v-d53f8a7a>\n        最新\n      </li> <li"+(_vm._ssrClass(null,['switchMove', _vm.clockType=== 0 ?'moveLeft':'moveRight']))+" data-v-d53f8a7a>"+_vm._ssrEscape("\n        "+_vm._s(_vm.clockType=== 1 ? '精华' : '最新')+"\n      ")+"</li></ul></div> "),(_vm.clockTotal > 0)?_vm._ssrNode("<ul data-v-d53f8a7a>","</ul>",[_vm._ssrNode((_vm._ssrList((_vm.clockList),function(item,index){return ("<li class=\"clockItem\" data-v-d53f8a7a><img"+(_vm._ssrAttr("src",("" + (item.avatar ? item.avatar : __webpack_require__(161)))))+" class=\"avatar\" data-v-d53f8a7a> <div class=\"pl10 wrap\" data-v-d53f8a7a><div class=\"f500 name\" data-v-d53f8a7a>"+_vm._ssrEscape("\n          "+_vm._s(item.nickname)+"\n        ")+"</div> <div class=\"createTime\" data-v-d53f8a7a><span data-v-d53f8a7a>"+_vm._ssrEscape(_vm._s(_vm.$changeTime(item.createTime)))+"</span> <span style=\"color:#F78500;\" data-v-d53f8a7a>"+_vm._ssrEscape(_vm._s(("已打卡" + (item.myClockNum) + "次"))+" ")+"</span></div> "+((item.content && item.content!== 'undefined')?("<div class=\"f500 content mt5 mb5\" data-v-d53f8a7a>"+_vm._ssrEscape("\n          "+_vm._s(item.content)+"\n        ")+"</div>"):"<!---->")+" "+(_vm._ssrList((_vm.changePic(item.pic)),function(pItem,pIndex){return ("<div class=\"pic mr10\" data-v-d53f8a7a><img"+(_vm._ssrAttr("src",_vm.changeImgurl(("" + (_vm.config.IMG_URL.default) + pItem))))+" data-v-d53f8a7a></div>")}))+" "+((item.teacherComment && item.teacherComment.length)?("<ul data-v-d53f8a7a>"+(_vm._ssrList((item.teacherComment),function(pItem){return ("<li class=\"teacherItem\" data-v-d53f8a7a><div class=\"textCenter\" data-v-d53f8a7a><img"+(_vm._ssrAttr("src",("" + (pItem.avatar ? pItem.avatar : __webpack_require__(161)))))+" class=\"avatar\" data-v-d53f8a7a> <p"+(_vm._ssrClass(null,['role', ("role" + (pItem.role))]))+" data-v-d53f8a7a>"+_vm._ssrEscape("\n                "+_vm._s(_vm.clockRole[pItem.role])+"\n              ")+"</p></div> <div class=\"desc\" data-v-d53f8a7a><div class=\"descName\" data-v-d53f8a7a>"+_vm._ssrEscape("\n                "+_vm._s(pItem.userName)+"\n              ")+"</div> <div class=\"descContent\" data-v-d53f8a7a>"+_vm._ssrEscape("\n                "+_vm._s(pItem.content)+"\n              ")+"</div></div></li>")}))+"</ul>"):"<!---->")+" "+(((item.comments - item.teacherComment.length) > 0)?("<p class=\"hand mt16 chatIcon fs12\" data-v-d53f8a7a><img"+(_vm._ssrAttr("src",__webpack_require__(192)))+" class=\"mr5\" data-v-d53f8a7a>"+_vm._ssrEscape("\n          "+_vm._s(("查看全部评论(" + (item.comments - item.teacherComment.length) + ")"))+"\n        ")+"</p>"):"<!---->")+" "+((item.commentList)?("<ul class=\"fs12 commentWrap\" data-v-d53f8a7a>"+(_vm._ssrList((item.commentList),function(pItem){return ("<li data-v-d53f8a7a><div class=\"c-333 f500\" data-v-d53f8a7a><div data-v-d53f8a7a><span style=\"color:#EC8567;\" data-v-d53f8a7a>"+_vm._ssrEscape(_vm._s(pItem.userName || '艾思用户'))+"</span> "+((pItem.replyUserName)?("<span data-v-d53f8a7a>"+_vm._ssrEscape("@"+_vm._s(pItem.replyUserName || '艾思用户')+" : "+_vm._s(pItem.replyContent))+"</span>"):"<!---->")+"</div> <div data-v-d53f8a7a>"+_vm._ssrEscape("\n                "+_vm._s(pItem.content)+"\n              ")+"</div></div> <div class=\"c-666 mt5\" data-v-d53f8a7a>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$changeTime(item.createTime))+"\n            ")+"</div></li>")}))+" "+((item.commentList.length < item.total)?("<div class=\"hand textCenter\" data-v-d53f8a7a>\n            查看更多\n          </div>"):"<!---->")+"</ul>"):"<!---->")+"</div></li>")}))+" "),(_vm.clockTotal > _vm.clockList.length)?_vm._ssrNode("<div class=\"c-f57 hand textCenter mb25\" data-v-d53f8a7a>","</div>",[_vm._ssrNode("\n      展开更多评论\n      "),_c('a-icon',{attrs:{"type":"caret-down"}})],2):_vm._e()],2):_vm._ssrNode("<div class=\"noComment\" data-v-d53f8a7a>","</div>",[_c('van-image',{attrs:{"width":"206","src":__webpack_require__(108),"alt":"暂无数据"}}),_vm._ssrNode(" <p class=\"fs12 c-666 mt10\" data-v-d53f8a7a>\n      暂无数据\n    </p>")],2),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(193)))+" width=\"70\" height=\"70\" class=\"clock\" data-v-d53f8a7a> "),_c('div',{directives:[{name:"viewer",rawName:"v-viewer",value:({movable: false, toolbar:false}),expression:"{movable: false, toolbar:false}"}],staticClass:"images"},[_vm._ssrNode((_vm._ssrList((_vm.images),function(src){return ("<img"+(_vm._ssrAttr("src",src))+" data-v-d53f8a7a>")})))]),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"showConfirmButton":false},model:{value:(_vm.clockVisible),callback:function ($$v) {_vm.clockVisible=$$v},expression:"clockVisible"}},[(_vm.data && _vm.data.type === 1 && _vm.data.lives && _vm.data.lives[0] && _vm.data.lives[0].end &&_vm.data.lives[0].end < _vm.currentTime)?_c('div',{staticClass:"pd30 f500 textCenter"},[_c('img',{attrs:{"src":__webpack_require__(162),"width":"40","height":"40"}}),_vm._v(" "),_c('div',{staticClass:"mt10 c-666 fs13"},[_vm._v("\n        课程已结束报名，请您参加下一期课程\n      ")]),_vm._v(" "),_c('van-button',{staticClass:"ml5 mr5 btnClock btnClockWhite",on:{"click":function($event){_vm.clockVisible=false}}},[_vm._v("\n        关闭\n      ")])],1):(!_vm.data.apply)?_c('div',{staticClass:"textCenter pd30 f500"},[_c('img',{attrs:{"src":__webpack_require__(162),"width":"40","height":"40"}}),_vm._v(" "),_c('div',{staticClass:"c-666 fs13"},[_vm._v("\n        "+_vm._s(("您还未" + (_vm.data.price > 0 ? '购买':'报名') + "该课程，请" + (_vm.data.price > 0 ? '购买' : '报名') + "参加吧。"))+"\n      ")]),_vm._v(" "),_c('van-button',{staticClass:"ml5 mr5 btnClock btnClockColor",on:{"click":_vm.goApply}},[_vm._v("\n        确定\n      ")]),_vm._v(" "),_c('van-button',{staticClass:"ml5 mr5 btnClock btnClockWhite",on:{"click":function($event){_vm.clockVisible=false}}},[_vm._v("\n        关闭\n      ")])],1):_c('div',{staticClass:"textCenter pd30"},[_c('img',{attrs:{"src":__webpack_require__(194),"width":"40","height":"40"}}),_vm._v(" "),_c('div',{staticClass:"mt10 c-666 fs13"},[_vm._v("\n        请前往艾思打卡小程序进行报名,添加小程序二维码~\n      ")]),_vm._v(" "),_c('div',{staticClass:"textCenter mt15"},[_c('img',{attrs:{"src":__webpack_require__(195),"width":"130","height":"130"}})]),_vm._v(" "),_c('van-button',{staticClass:"ml5 mr5 btnClock btnClockWhite",on:{"click":function($event){_vm.clockVisible=false}}},[_vm._v("\n        关闭\n      ")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CourseDetail/CourseClock.vue?vue&type=template&id=d53f8a7a&scoped=true&

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./config/mock.js
var mock = __webpack_require__(80);

// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseClock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CourseClockvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      clockPage: [],
      clockTotal: 0,
      clockList: [],
      clockType: 1,
      //0:最新打卡，1：精华打卡
      clockDay: 0,
      //今日打卡数
      clockRole: mock["a" /* clockRole */],
      clockVisible: false,
      config: common_config["a" /* default */],
      images: [],
      currentTime: parseInt(new Date().getTime() / 1000) //获取当前时间

    };
  },

  created() {
    this.getCourseClockInfo();
    this.getClockRecordList();
  },

  methods: {
    //打卡切换
    clockSwitch() {
      this.clockType = this.clockType === 1 ? 0 : 1;
      this.clockPage = 1;
      this.getClockRecordList();
    },

    changePic(pic) {
      return pic ? pic.includes(',') ? pic.split(',') : [pic] : [];
    },

    //获取课程打卡详情
    async getCourseClockInfo() {
      const {
        data
      } = await Object(course["m" /* getCourseClockInfo */])(this.data.courseId);

      if (data.code === 0) {
        this.clockDay = data.data.dayClock;
      }
    },

    //获取打卡评论区列表
    async getClockRecordList() {
      const {
        data
      } = await Object(course["j" /* getClockRecordList */])(this.data.courseId, {
        page: this.clockPage,
        pageSize: 10,
        type: this.clockType
      });

      if (data.code === 0) {
        this.clockList = this.clockPage === 1 ? data.data.entries : [...this.clockList, ...data.data.entries];
        this.clockTotal = +data.data.total;
      }
    },

    //获取打卡学员评论列表
    async getClockCommentList(index, row, flag = true) {
      if (flag) {
        const page = (row.page || 0) + 1;
        const {
          data
        } = await Object(course["i" /* getClockComment */])(row.id, {
          page: page,
          pageSize: 100
        });

        if (data.code === 0) {
          const commentList = page === 1 ? data.data.entries : [...row.commentList, ...data.data.entries];
          this.$set(this.clockList, index, { ...row,
            page: page,
            total: data.data.total,
            commentList: commentList
          });
        }
      } else {
        delete row.page;
        delete row.total;
        delete row.commentList;
        this.$set(this.clockList, index, row);
      }
    },

    showMoreClock() {
      this.clockPage += 1;
      this.getClockRecordList();
    },

    picClick(index, pic) {
      const arr = this.changePic(pic);
      let realArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(common_config["a" /* default */].IMG_URL.default)) {
          arr[i] = `${common_config["a" /* default */].IMG_URL.default}${arr[i]}`;
        }

        if (i < index) {
          arr.push(arr[i]);
        } else {
          realArr.push(arr[i]);
        }
      }

      this.images = realArr;
      const viewer = this.$el.querySelector('.images').$viewer;
      viewer.show(0);
    },

    changeImgurl(imgUrl) {
      return Object(external_ais_common_utils_["changeImgurl"])(imgUrl, 85, 85);
    },

    async goApply() {
      if (this.data.price > 0) {
        this.$router.push(`/courseOrder/${this.data.courseId}`);
      } else {
        const {
          data
        } = await Object(course["b" /* applyFreeCourse */])(this.data.courseId);

        if (data.code === 0) {
          this.$router.push(`/pay/finish/${this.data.courseId}`);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/CourseDetail/CourseClock.vue?vue&type=script&lang=js&
 /* harmony default export */ var CourseDetail_CourseClockvue_type_script_lang_js_ = (CourseClockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CourseDetail/CourseClock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CourseDetail_CourseClockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d53f8a7a",
  "88097fe6"
  
)

/* harmony default export */ var CourseClock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CommentPop.vue?vue&type=template&id=95192a46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"warp"},[_c('van-dialog',{staticStyle:{"border-radius":"5px"},attrs:{"title":_vm.title,"showCancelButton":false,"showConfirmButton":false},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[(_vm.show)?_c('div',{staticClass:"close"},[_c('van-icon',{attrs:{"name":"close"},on:{"click":_vm.toggle}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"star mt5"},[_c('van-rate',{attrs:{"size":34,"color":"#ffd21e","void-icon":"star","void-color":"#eee"},model:{value:(_vm.score),callback:function ($$v) {_vm.score=$$v},expression:"score"}})],1),_vm._v(" "),_c('div',{staticClass:"writeComment"},[_c('p',{staticClass:"mb10",staticStyle:{"font-size":"13px"}},[_vm._v("\n        写下您的评论\n      ")]),_vm._v(" "),_c('van-field',{staticClass:"textareaBg",attrs:{"type":"textarea","placeholder":"说点什么","maxlength":"200"},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1),_vm._v(" "),_c('div',{staticClass:"sendComment mt10"},[_c('van-button',{staticStyle:{"width":"100%","height":"38px"},attrs:{"round":"","color":"linear-gradient(to right, #00B5F1, #0080DB)"},on:{"click":_vm.sendComment}},[_vm._v("\n        发表评价\n      ")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Common/CommentPop.vue?vue&type=template&id=95192a46&scoped=true&

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/CommentPop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CommentPopvue_type_script_lang_js_ = ({
  props: {
    courseId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    show: false,
    title: '课程已结束',
    score: 0,
    content: ''
  }),
  methods: {
    toggle(autoCilck) {
      if (!this.show) {
        this.title = autoCilck ? '课程已结束' : '课程评星';
      } //关闭弹窗处理


      if (this.show) {
        this.$emit('setIsEnd', false);
      }

      this.show = !this.show; //this.$emit('getComment')
    },

    async sendComment() {
      if (!this.score) {
        return this.$toast.fail("请评分!");
      }

      if (!this.content) {
        return this.$toast.fail("请输入评论内容!");
      }

      try {
        let {
          data: {
            code
          }
        } = await Object(course["E" /* sendComment */])({
          courseId: this.courseId,
          content: this.content,
          score: this.score
        });

        if (code === 0) {
          this.$toast.success("评论成功");
          this.$emit('getComment');
        }
      } catch (error) {
        this.$notify('评论失败');
        console.log(error);
      }

      this.show = !this.show;
    }

  }
});
// CONCATENATED MODULE: ./components/Common/CommentPop.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_CommentPopvue_type_script_lang_js_ = (CommentPopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Common/CommentPop.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(187)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_CommentPopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "95192a46",
  "5d997589"
  
)

/* harmony default export */ var CommentPop = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video.9e098fd.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/operation4.b240b32.png";

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPop_vue_vue_type_style_index_0_id_95192a46_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".warp .star[data-v-95192a46]{text-align:center;margin-top:.13333rem!important}.warp .writeComment[data-v-95192a46]{box-sizing:border-box;padding:0 .74667rem;margin-bottom:.26667rem;margin-top:.26667rem}.warp .textareaBg[data-v-95192a46]{background:#efefef}.warp .sendComment[data-v-95192a46]{box-sizing:border-box;padding:0 .74667rem;margin-bottom:.53333rem}.close[data-v-95192a46]{position:absolute;top:.26667rem;right:.26667rem;font-size:.53333rem;z-index:9999}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEvaluate_vue_vue_type_style_index_0_id_23a6583b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".comment[data-v-23a6583b]{width:100%;height:1.36rem;box-sizing:border-box;padding:0 .32rem 0 .45333rem;justify-content:space-between;background-color:#fff}.comment[data-v-23a6583b],.comment .star[data-v-23a6583b]{display:flex;align-items:center}.comment .star[data-v-23a6583b]{height:100%}.list[data-v-23a6583b]{box-sizing:border-box;padding:0 .45333rem;background:#fff}.list .allComment[data-v-23a6583b]{padding-bottom:.4rem}.list .allComment .title[data-v-23a6583b]{font-size:.34667rem;font-weight:700;padding:.45333rem 0}.list .allComment .commentList .alone[data-v-23a6583b]{display:flex;flex-direction:column;border-bottom:.02667rem solid #efefef;padding-bottom:.26667rem}.list .allComment .commentList .alone .header[data-v-23a6583b]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.26667rem;padding-top:.37333rem}.list .allComment .commentList .scoreListAns[data-v-23a6583b]{background:#f6f6f6;border-radius:.08rem;padding:.18667rem}.list .noComment[data-v-23a6583b]{display:flex;flex-direction:column;align-items:center;padding:.53333rem 0}[data-v-23a6583b] .van-dialog__header{padding-top:.64rem!important;font-weight:500;color:#333}[data-v-23a6583b] .van-cell{padding:.26667rem .42667rem;margin-top:.26667rem}.mt10[data-v-23a6583b]{margin-top:.26667rem!important}.more[data-v-23a6583b]{font-size:.34667rem;height:1.06667rem;display:flex;align-items:center;justify-content:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flash.addcd9d.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chatIcon.687be35.png";

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clock.95be175.png";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/greenArrow.9a75e22.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/smallCode.e14f95c.jpg";

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseClock_vue_vue_type_style_index_0_id_d53f8a7a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".clockTab[data-v-d53f8a7a]{display:flex;align-items:center;padding-top:.4rem;color:#666}.clockTab .switch[data-v-d53f8a7a]{display:flex;width:2.24rem;height:.64rem;background:#eaeaea;border-radius:.26667rem;font-size:.32rem;position:relative;margin-left:auto}.clockTab .switch>li[data-v-d53f8a7a]{text-align:center;line-height:.64rem;width:50%;cursor:pointer}.clockTab .switch .switchMove[data-v-d53f8a7a]{background:linear-gradient(180deg,#fff,#f4f4f4);border-radius:.26667rem;box-shadow:.05333rem .05333rem .10667rem 0 rgba(0,0,0,.15);width:1.28rem;height:.64rem;position:absolute;top:0;left:1.12rem;color:#2b8ae4;transition:all .2s}.clockTab .switch .moveRight[data-v-d53f8a7a]{transform:translateX(-1.12rem)}.clockTab .switch .moveLeft[data-v-d53f8a7a]{transform:translateX(0)}.clockItem[data-v-d53f8a7a]{display:flex;padding:.4rem 0;border-bottom:.02667rem solid #eee}.clockItem .avatar[data-v-d53f8a7a]{width:1.06667rem;height:1.06667rem;border-radius:50%}.clockItem .wrap[data-v-d53f8a7a]{flex:1}.clockItem .name[data-v-d53f8a7a]{color:#0074e9}.clockItem .createTime[data-v-d53f8a7a]{color:#989898}.clockItem .content[data-v-d53f8a7a]{color:#3a3a3a}.clockItem .teacherItem[data-v-d53f8a7a]{display:flex;margin-top:.4rem;width:100%}.clockItem .teacherItem .role[data-v-d53f8a7a]{width:1.2rem;line-height:.45333rem;border-radius:.24rem;text-align:center;color:#fff;font-size:.32rem;margin-top:.13333rem}.clockItem .teacherItem .role3[data-v-d53f8a7a]{background:#fa6400}.clockItem .teacherItem .role1[data-v-d53f8a7a]{background:#2b8ae4}.clockItem .teacherItem .role2[data-v-d53f8a7a]{background:#36b7cf}.clockItem .teacherItem .desc[data-v-d53f8a7a]{box-shadow:0 .02667rem .16rem 0 rgba(0,0,0,.1);background:#fefefe;padding:.26667rem;font-weight:500;flex:1;border-radius:.13333rem;margin-left:.26667rem}.clockItem .teacherItem .desc .descName[data-v-d53f8a7a]{color:#ec8567}.clockItem .teacherItem .desc .descContent[data-v-d53f8a7a]{color:#3a3a3a}.clockItem .chatIcon[data-v-d53f8a7a]{display:flex;align-items:center}.commentWrap[data-v-d53f8a7a]{padding:0 .53333rem .26667rem;position:relative;background:#f6f6f6;margin-top:.53333rem}.commentWrap[data-v-d53f8a7a]:before{content:\"\";position:absolute;width:0;height:0;border-color:transparent transparent #f6f6f6;border-style:solid;border-width:.4rem .26667rem .26667rem;top:-.66667rem;left:1.33333rem;transform:translateX(-50%)}.commentWrap>li[data-v-d53f8a7a]{padding:.26667rem 0;border-bottom:.02667rem solid #d1d1d1}.clock[data-v-d53f8a7a]{position:fixed;bottom:5.86667rem;right:0;z-index:100}.btnClock[data-v-d53f8a7a]{display:inline-block;width:2.29333rem;line-height:.64rem;text-align:center;margin-top:.66667rem;border-radius:.26667rem;font-size:.32rem}.btnClockColor[data-v-d53f8a7a]{background:linear-gradient(180deg,#ffa852,#ff6b1a 99%);color:#fff;height:.93333rem}.btnClockWhite[data-v-d53f8a7a]{background:#fff;color:#333;border:.02667rem solid #eee;height:.93333rem}.images[data-v-d53f8a7a]{display:none}.pic[data-v-d53f8a7a]{display:inline-block;width:2.26667rem;height:2.26667rem;overflow:hidden}.noComment[data-v-d53f8a7a]{display:flex;flex-direction:column;align-items:center;padding:.53333rem 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDiscussion_vue_vue_type_style_index_0_id_8287ec24_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".forum[data-v-8287ec24]{box-sizing:border-box;width:100%;padding:0 .37333rem 0 .45333rem;background:#fff;margin-top:.13333rem}.forum .title[data-v-8287ec24]{font-size:.34667rem;color:#4c4c4c;font-weight:500;padding:.24rem 0}.forum .content .alone[data-v-8287ec24]{margin-top:.21333rem;border-bottom:.02667rem solid #efefef}.forum .content .alone .firstLeave[data-v-8287ec24]{display:flex;flex-direction:column}.forum .content .alone .childrenReply[data-v-8287ec24]{display:flex;font-size:.32rem;align-items:center;margin-bottom:.26667rem}.forum .content .alone .childrenReply span[data-v-8287ec24]{margin-right:.13333rem;color:#0293ff}.forum .content .alone .name[data-v-8287ec24]{font-size:.37333rem;color:#333;font-weight:600;margin-bottom:.10667rem}.forum .content .alone .text[data-v-8287ec24]{font-size:.34667rem;font-weight:400;color:#3a3a3a;margin-bottom:.13333rem}.forum .content .alone .hander[data-v-8287ec24]{font-size:.32rem;font-weight:500;color:#989898;display:flex;margin-bottom:.26667rem;justify-content:space-between}.forum .content .alone .children[data-v-8287ec24]{margin-left:.53333rem;border-top:.02667rem solid #efefef}.forum .content .alone .children .name[data-v-8287ec24]{margin-top:.26667rem;font-size:.37333rem;color:#3a3a3a;font-weight:600}.forum .content .alone .children .reply[data-v-8287ec24]{font-size:.34667rem;margin-bottom:.13333rem}.forum .more[data-v-8287ec24]{font-size:.34667rem;height:1.06667rem;display:flex;align-items:center;justify-content:center}.replyInput[data-v-8287ec24]{position:fixed;left:0;bottom:0;width:100%;height:1.46667rem;background:#fff;border-top:.02667rem solid #efefef;box-shadow:0 0 .08rem .05333rem rgba(36,36,36,.2);z-index:100}.replyInput .box[data-v-8287ec24]{width:100%;box-sizing:border-box;padding:.29333rem 0 .34667rem .45333rem;display:flex;align-items:center}.replyInput .box .input[data-v-8287ec24]{flex:auto;background:#f6f6f6;padding:.13333rem 0 .13333rem .53333rem;border-radius:.4rem}.replyInput .box .text[data-v-8287ec24]{flex:0 0 1.86667rem;font-size:.4rem;padding:0 .53333rem;color:#0293ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonContent_vue_vue_type_style_index_0_id_7ce338ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".c-ff5[data-v-7ce338ac]{color:#ff5400}.c-009[data-v-7ce338ac]{color:#0090e1}.htmlCont[data-v-7ce338ac]{padding:.26667rem;font-size:.37333rem}.htmlCont[data-v-7ce338ac] img{max-width:100%}.htmlCont[data-v-7ce338ac] p{margin-top:1em;margin-bottom:1em}.htmlCont[data-v-7ce338ac] table{border-top:.02667rem solid #ccc;border-left:.02667rem solid #ccc;max-width:100%!important;table-layout:fixed;width:100%!important}.htmlCont[data-v-7ce338ac] table td,.htmlCont[data-v-7ce338ac] table th{border-bottom:.02667rem solid #ccc;border-right:.02667rem solid #ccc;padding:.08rem .13333rem}.htmlCont[data-v-7ce338ac] a{text-decoration:underline;color:-webkit-link}.htmlCont[data-v-7ce338ac] .list-paddingleft-2{padding-left:.53333rem}.chapterTitle[data-v-7ce338ac]{color:#037ac5}.videoIcon[data-v-7ce338ac]{padding-top:.08rem}.flexWrap[data-v-7ce338ac]{display:flex}.icon[data-v-7ce338ac]{flex:0 0 0.69333rem}.courseTime[data-v-7ce338ac]{flex:0 0 1.46667rem}.conter[data-v-7ce338ac]{flex:1}.series[data-v-7ce338ac] .van-tabs__nav{display:flex;justify-content:space-around}[data-v-7ce338ac] .van-tabs__nav{background:none}[data-v-7ce338ac] .van-tab{color:#666}[data-v-7ce338ac] .van-tab /deep/ .van-tab__text{z-index:9}[data-v-7ce338ac] .van-tab--active{color:#333;font-size:.42667rem}[data-v-7ce338ac] .van-tabs__line{width:1.06667rem;height:.16rem;background:linear-gradient(90deg,#05c5ff,#0293ff)}[data-v-7ce338ac] .van-hairline--top-bottom:after{border:none}[data-v-7ce338ac] .van-tabs__wrap{background:#fefefe}.topsWrap[data-v-7ce338ac]{display:flex;flex-wrap:wrap}.topsWrap .topsCourse[data-v-7ce338ac]{width:50%}.topsWrap[data-v-7ce338ac] .CourseCard{display:inline-block;padding:0}.topsWrap[data-v-7ce338ac] .leftImgIcon{border-radius:.26667rem}.topsWrap[data-v-7ce338ac] .title{width:100%;height:1.01333rem;line-height:.50667rem;word-break:break-all}.topsHeader[data-v-7ce338ac]{width:3.2rem;border-bottom:.02667rem solid #d5d3d3;padding:.32rem 0 .16rem}.discussion[data-v-7ce338ac] .replyInput{padding-left:1.6rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CommonContent.vue?vue&type=template&id=7ce338ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CommonContent"},[_vm._ssrNode("<div id=\"courseBottom\""+(_vm._ssrClass(null,['pt5', 'courseBottom', {'series':_vm.data.type !== 1}]))+" data-v-7ce338ac>","</div>",[_c('van-tabs',{attrs:{"sticky":_vm.sticky},on:{"click":_vm.changeActive},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('van-tab',{attrs:{"title":"课程介绍","name":1}},[_c('div',{staticClass:"htmlCont mt10 bg-fff",domProps:{"innerHTML":_vm._s(_vm.xssDefenseHand(_vm.data.content))}})]),_vm._v(" "),(_vm.data.type !== 1)?_c('van-tab',{staticClass:"mt10 bg-fff pb15",attrs:{"title":"课程目录","name":2}},_vm._l((_vm.data.livesObj),function(val,key,index){return _c('div',{key:index,staticClass:"pt15 pl15 pr15"},[(key !== 'null')?_c('div',{staticClass:"chapterTitle fs15 f500"},[_vm._v("\n            "+_vm._s(key)+"\n          ")]):_vm._e(),_vm._v(" "),_vm._l((val),function(item){return _c('div',{key:item.id,staticClass:"flexWrap pt15",on:{"click":function($event){return _vm.changeListPath(item)}}},[_c('nuxt-link',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"to":("/videoDetail/" + (item.id))}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"icon"},[_c('img',{staticClass:"block videoIcon",attrs:{"src":__webpack_require__(185),"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"courseTime pl9"},[_c('div',{staticClass:"fs14 f500 c-333"},[_vm._v("\n                课时\n              ")]),_vm._v(" "),_c('div',{staticClass:"fs12 c-999 pt5"},[_vm._v("\n                时长\n              ")])]),_vm._v(" "),_c('div',{staticClass:"conter pl20"},[_c('div',{staticClass:"fs14 f500 c-333"},[_c('span',[_vm._v(_vm._s(item.name))]),_vm._v(" "),(((item.previewTime > 0 || item.previewTime === -1) && item.scene ===1) && !_vm.data.apply)?_c('img',{staticClass:"previewImg",attrs:{"src":__webpack_require__(186),"title":"免费试听"},on:{"click":function($event){$event.stopPropagation();return _vm.previewClick(item.id)}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"fs12 c-999 pt5"},[_vm._v("\n                "+_vm._s(_vm.timeFnHand(item))+"\n              ")])]),_vm._v(" "),(item.document)?_c('div',{staticClass:"fs12",staticStyle:{"display":"flex","align-items":"flex-end"},on:{"click":function($event){$event.stopPropagation();return _vm.downLoadCourse(item)}}},[_c('van-icon',{staticStyle:{"transform":"rotate(180deg)","margin-bottom":"1px","margin-right":"2px"},attrs:{"name":"back-top"}}),_vm._v(" "),_c('span',{staticStyle:{"color":"#0293FF"}},[_vm._v("课件下载")])],1):_vm._e()],1)})],2)}),0):_vm._e(),_vm._v(" "),_c('van-tab',{class:[{'pb60':_vm.$route.fullPath.includes('videoDetail')}, 'bg-fff'],attrs:{"title":"讨论区","name":3}},[_c('CourseDiscussion',{ref:"CourseDiscussion",class:{'discussion':_vm.isShowPushCourse},attrs:{"data":_vm.data}})],1),_vm._v(" "),_c('van-tab',{attrs:{"title":"评论","name":4}},[_c('CourseEvaluate',{ref:"CourseEvaluate",attrs:{"data":_vm.data}})],1),_vm._v(" "),_c('van-tab',{staticClass:"mt10",attrs:{"title":"打卡区","name":5}},[(_vm.active === 5)?_c('CourseClock',{ref:"CourseClock",attrs:{"data":_vm.data}}):_vm._e()],1)],1)],1),_vm._ssrNode(" "),(_vm.tops)?_vm._ssrNode("<div class=\"tops mt5 bg-fefe pl16 pr16 pb16\" data-v-7ce338ac>","</div>",[_vm._ssrNode("<div class=\"topsHeader fs16 f600 c-333\" data-v-7ce338ac>\n      精品推荐\n    </div> "),_vm._ssrNode("<div class=\"topsWrap\" data-v-7ce338ac>","</div>",_vm._l((_vm.tops),function(item,index){return _c('nuxt-link',{key:index,class:['mt15', 'topsCourse', index%2 ===0 ? 'pr10' :'pl10' ],attrs:{"to":("/courseDetail/" + (item.id))}},[_c('CourseCard',{attrs:{"data":item,"isTops":""}})],1)}),1)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CourseDetail/CommonContent.vue?vue&type=template&id=7ce338ac&scoped=true&

// EXTERNAL MODULE: external "xss"
var external_xss_ = __webpack_require__(72);
var external_xss_default = /*#__PURE__*/__webpack_require__.n(external_xss_);

// CONCATENATED MODULE: ./utils/xssConfig.js
 // https://github.com/leizongmin/js-xss/blob/master/README.zh.md

const whiteList = external_xss_default.a.getDefaultWhiteList();

const handleTagAttr = (tag, name, value) => {
  if (name === "style") {
    return `${name}="${value}"`;
  }
};

const options = {
  whiteList,
  onTagAttr: handleTagAttr
};
const xssDefense = new external_xss_default.a.FilterXSS(options);
/* harmony default export */ var xssConfig = (xssDefense);
// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Common/CourseCard.vue + 4 modules
var CourseCard = __webpack_require__(97);

// EXTERNAL MODULE: ./components/CourseDetail/CourseEvaluate.vue + 4 modules
var CourseEvaluate = __webpack_require__(174);

// EXTERNAL MODULE: ./components/CourseDetail/CourseClock.vue + 4 modules
var CourseClock = __webpack_require__(175);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseDiscussion.vue?vue&type=template&id=8287ec24&scoped=true&
var CourseDiscussionvue_type_template_id_8287ec24_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"forum"},[_vm._ssrNode("<div class=\"title\" data-v-8287ec24>"+_vm._ssrEscape("\n    全部评论 "+_vm._s(_vm.forumSum > 0 && ("( " + _vm.forumSum + " )") || '')+"\n  ")+"</div> "),(_vm.forumSum === 0)?_vm._ssrNode("<div style=\"text-align:center;padding:10px 0\" data-v-8287ec24>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(108)))+" alt=\"没有讨论\" width=\"100%\" data-v-8287ec24> <span style=\"font-size:12px;color:#666666\" data-v-8287ec24>快来发布第一条讨论吧</span>")],2):_vm._ssrNode("<div class=\"content\" data-v-8287ec24>","</div>",_vm._l((_vm.forumList),function(item,index){return _vm._ssrNode("<div class=\"alone\" data-v-8287ec24>","</div>",[_vm._ssrNode("<div class=\"firstLeave\" data-v-8287ec24>","</div>",[_vm._ssrNode("<div class=\"name\" data-v-8287ec24>"+_vm._ssrEscape("\n          "+_vm._s(item.userName)+"\n        ")+"</div> <div class=\"text breakAll\" data-v-8287ec24>"+_vm._ssrEscape("\n          "+_vm._s(item.content)+"\n        ")+"</div> "),_vm._ssrNode("<div class=\"hander\" data-v-8287ec24>","</div>",[_vm._ssrNode("<span data-v-8287ec24>"+_vm._ssrEscape(_vm._s(_vm.$changeTime(item.createTime)))+"</span> "),_vm._ssrNode("<span style=\"display:flex;align-items:center;\" data-v-8287ec24>","</span>",[_c('van-icon',{staticStyle:{"margin-right":"5px"},attrs:{"name":"chat-o"}}),_vm._ssrNode("回复")],2)],2)],2),_vm._ssrNode(" "),(item.replies > 0 && item.childrenStatus)?_vm._l((item.children),function(childrenList){return _vm._ssrNode("<div class=\"children\" data-v-8287ec24>","</div>",[_vm._ssrNode("<div class=\"name\" data-v-8287ec24>"+_vm._ssrEscape("\n            "+_vm._s(childrenList.userName)+"\n          ")+"</div> <div class=\"reply breakAll\" data-v-8287ec24>\n            回复 <span style=\"color:#0293FF\" data-v-8287ec24>"+_vm._ssrEscape(" @"+_vm._s(childrenList.replyUserName)+" ")+"</span>"+_vm._ssrEscape("："+_vm._s(childrenList.content)+"\n          ")+"</div> "),_vm._ssrNode("<div class=\"hander\" data-v-8287ec24>","</div>",[_vm._ssrNode("<span data-v-8287ec24>"+_vm._ssrEscape(_vm._s(_vm.$changeTime(childrenList.createTime)))+"</span> "),_vm._ssrNode("<span style=\"display:flex;align-items:center;\" data-v-8287ec24>","</span>",[_c('van-icon',{staticStyle:{"margin-right":"5px"},attrs:{"name":"chat-o"}}),_vm._ssrNode("回复")],2)],2)],2)}):_vm._e(),_vm._ssrNode(" "),(item.children&&item.children.length > 0)?_vm._ssrNode("<div class=\"childrenReply\" data-v-8287ec24>","</div>",[_vm._ssrNode("<span data-v-8287ec24>"+_vm._ssrEscape(" "+_vm._s(!item.childrenStatus ? ("展开其他" + (item.children.length) + "条回复"):'收起回复'))+"</span> "),_c('van-icon',{attrs:{"name":!item.childrenStatus?'arrow-down':'arrow-up',"size":"12","color":"#0293FF"}})],2):_vm._e()],2)}),0),_vm._ssrNode(" "+((_vm.forumTotal - _vm.forumList.length > 0)?("<div class=\"more\" data-v-8287ec24>\n    更多回复\n  </div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"replyInput\" data-v-8287ec24>","</div>",[_vm._ssrNode("<div class=\"box\" data-v-8287ec24>","</div>",[_c('van-field',{ref:"reply",staticClass:"input",attrs:{"placeholder":_vm.placeholder},model:{value:(_vm.replyContent),callback:function ($$v) {_vm.replyContent=$$v},expression:"replyContent"}}),_vm._ssrNode(" <span class=\"text\" data-v-8287ec24>发布</span>")],2)])],2)}
var CourseDiscussionvue_type_template_id_8287ec24_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CourseDetail/CourseDiscussion.vue?vue&type=template&id=8287ec24&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CourseDiscussion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CourseDiscussionvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      forumList: [],
      forumSum: 0,
      placeholder: '发布讨论...',
      replyContent: '',
      replyInfo: {},
      forumTotal: 0
    };
  },

  methods: {
    // 获取讨论区一级评论
    async getForumFirstComment(params = {
      page: 1
    }, move) {
      let {
        page
      } = params;
      let {
        data: {
          code,
          data: list
        }
      } = await Object(course["u" /* getForumFirstComment */])({
        courseId: this.data.courseId,
        page,
        pageSize: 20
      });

      if (code === 0) {
        let entries = list.entries; // 获取对应的二级回复

        entries.forEach(async element => {
          let i = -1;

          if (this.forumList.length > 0) {
            i = this.forumList.findIndex(item => item.id === element.id);
          }

          if (element.replies > 0) {
            element['children'] = []; // 保留当前的收起/展示状态

            element['childrenStatus'] = i !== -1 ? this.forumList[i].childrenStatus : false;
            let {
              data: {
                code,
                data: childrenList
              }
            } = await Object(course["v" /* getForumSecondComment */])({
              parentId: element.id,
              courseId: this.data.courseId
            });

            if (code === 0) {
              element['children'] = childrenList.entries;
            }
          }
        });
        this.forumList = move ? [...this.forumList, ...entries] : [...entries];
        this.forumSum = list.sum;
        this.forumTotal = list.total;
      }
    },

    // 提交讨论区评论
    async submitForumComment(params) {
      let {
        data: {
          code
        }
      } = await Object(course["F" /* submitForumComment */])(params);

      if (code === 0) {
        this.$toast({
          type: 'success',
          message: params.parentId ? '回复成功' : '发布成功'
        });
        this.clearReply();
        this.getForumFirstComment();
      }
    },

    reply(info) {
      this.placeholder = "回复" + info.userName;
      this.replyInfo = info;
      this.$refs.reply.focus();
    },

    // 发布讨论
    async publishReply() {
      this.$refs.reply.focus();

      if (!this.replyContent) {
        this.$notify('内容不能为空');
        return;
      }

      let params = {
        content: this.replyContent,
        topticId: this.data.courseId,
        parentId: this.replyInfo.parentId || this.replyInfo.id || 0,
        replyId: this.replyInfo.id || 0
      };
      this.submitForumComment(params);
    },

    // 切换讨论区回复状态
    toggleChildrenStatus(index, item) {
      let copyForumList = [...this.forumList];
      copyForumList[index].childrenStatus = !item.childrenStatus;
      this.forumList = copyForumList;
    },

    // 重置讨论数据
    clearReply() {
      this.replyContent = '';
      this.replyInfo = {};
      this.placeholder = '发布讨论...';
    },

    // 加载更多讨论区数据
    more() {
      if (this.forumTotal - this.forumList.length > 0) {
        this.getForumFirstComment({
          page: this.forumList.length / 20 + 1
        }, true);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/CourseDetail/CourseDiscussion.vue?vue&type=script&lang=js&
 /* harmony default export */ var CourseDetail_CourseDiscussionvue_type_script_lang_js_ = (CourseDiscussionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CourseDetail/CourseDiscussion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CourseDetail_CourseDiscussionvue_type_script_lang_js_,
  CourseDiscussionvue_type_template_id_8287ec24_scoped_true_render,
  CourseDiscussionvue_type_template_id_8287ec24_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "8287ec24",
  "1f23528e"
  
)

/* harmony default export */ var CourseDiscussion = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CourseDetail/CommonContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







 //import CourseLastBuy from '@/components/CourseDetail/CourseLastBuy'

/* harmony default export */ var CommonContentvue_type_script_lang_js_ = ({
  components: {
    CourseCard: CourseCard["a" /* default */],
    CourseEvaluate: CourseEvaluate["a" /* default */],
    CourseDiscussion: CourseDiscussion,
    //CourseLastBuy,
    CourseClock: CourseClock["a" /* default */]
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        lives: [],
        livesObj: {}
      })
    },
    tops: {
      type: Array,
      default: () => {
        [];
      }
    },
    isShowPushCourse: {
      // 是否展示推荐课程图标
      type: Boolean,
      default: false
    },
    isVideoWeChat: {
      //微信小程序端页面适配
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      active: 0,
      sticky: false,
      activeArr: []
    };
  },

  mounted() {
    this.sticky = true; //路由带参数切tab菜单

    if (this.$route.fullPath.indexOf('/courseDetail') > -1 && this.$route.query.activeKey) {
      this.active = +this.$route.query.activeKey; //this.getCommentList()

      this.$nextTick(() => {
        this.$refs.CourseEvaluate.getCommentList();
      });
    }
  },

  methods: {
    //跳登录
    goLogin(url) {
      if (!external_ais_common_utils_["storage"].get('userStatus')) {
        window.location.href = `${common_config["a" /* default */].POST.school_h5}/school/passport/login?mobile=1&state=${url}`;
        return false;
      }
    },

    // 验证课程是否已经购买或者已经报名
    verifyCourseStatus(item) {
      //没有报名或者没有购买，有试听的跳转试听，否则付费直接弹出订单确认页，免费就直接弹提示
      if (!this.data.apply) {
        if ((item.previewTime > 0 || item.previewTime === -1) && item.scene === 1) {
          this.$router.push({
            path: `/videoDetail/${item.id}?isPreview=true`
          });
          return false;
        } else {
          if (this.data.price > 0) {
            //小程序，未购买直接跳小程序订单页
            if (this.isVideoWeChat && !this.data.apply) {
              window.wx.miniProgram.navigateTo({
                url: `/pages/courseOrder/courseOrder?id=${this.data.courseId}`
              });
              return;
            } //未登录，点击购买需跳转登录


            if (!this.data.apply) {
              const url = encodeURIComponent(this.$route.query.inviterId ? `${common_config["a" /* default */].LINK.school_pc}/courseOrder/${this.data.courseId}?inviterId=${this.$route.query.inviterId}` : `${common_config["a" /* default */].LINK.school_pc}/courseOrder/${this.data.courseId}`);
              this.goLogin(url);
            }

            this.$router.push({
              path: `/courseOrder/${this.data.courseId}`
            });
            return false;
          } else {
            this.$toast.fail('请先报名课程!');
            return false;
          }
        }
      }

      return true;
    },

    changeListPath(item) {
      if (!this.verifyCourseStatus(item)) return;
      const currentTime = parseInt(new Date().getTime() / 1000); //直播已结束不跳转

      if (item.scene !== 1 && currentTime > item.end) {
        return false;
      } //直播未开始不跳转


      if (item.scene !== 1 && !(item.liveStatus === 1 || item.end > currentTime > item.start || item.start - currentTime < 900 && item.liveStatus === 0)) {
        return this.$toast.fail('讲师还没有开课!');
      } // 判断是否是免费的直播


      this.$router.push(`/videoDetail/${item.id}`);
    },

    // 修改tab栏
    changeActive(val) {
      this.active = val;

      if (val === 4 && !this.activeArr.includes(val)) {
        //this.getCommentList()
        this.$nextTick(() => {
          this.$refs.CourseEvaluate.getCommentList();
        });
      }

      const top = document.getElementById('courseBottom').offsetTop;
      document.documentElement.scrollTop = top - 25;
      document.body.scrollTop = top - 25;

      if (val === 3) {
        this.footer = false; //this.getForumFirstComment()

        if (!this.activeArr.includes(val)) {
          this.$nextTick(() => {
            this.$refs.CourseDiscussion.getForumFirstComment();
          });
        }

        this.$nextTick(() => {
          this.$refs.CourseDiscussion.clearReply();
        });
      } else {
        this.footer = true; //this.clearReply()
      }

      if (!this.activeArr.includes(val)) {
        this.activeArr.push(val);
      }
    },

    // 课程介绍
    xssDefenseHand(content) {
      return xssConfig.process(content);
    },

    // 课程时间
    timeFnHand(item) {
      if (item.scene === 1) {
        const {
          h,
          m,
          s
        } = Object(external_ais_common_utils_["secondsChangeFormat"])(item.duration);
        if (Number(h) > 0) return `${h}:${m}:${s}(录播)`;
        return `${m}:${s}(录播)`;
      } else {
        const nowTime = parseInt(new Date().getTime() / 1000);
        let str = `${this.$changeTime(item.start)}`;

        if (item.liveStatus === 1 || nowTime > item.start && item.end > nowTime) {
          str = str + '(直播中)';
        } else if (nowTime > item.end) {
          str = str + '(直播已结束)';
        } else if (item.start - nowTime > 0) {
          str = str + (0 < item.start - nowTime && item.start - nowTime < 900 ? '(直播即将开始)' : '直播');
        }

        return str;
      }
    },

    //系列课子课程试听
    previewClick(id) {
      this.$router.push({
        path: `/videoDetail/${id}?isPreview=true`
      });
    },

    // 训练营课件下载
    async downLoadCourse(item) {
      //未登录，点击购买需跳转登录
      const url = encodeURIComponent(`${common_config["a" /* default */].LINK.school_h5}/courseDetail/${this.data.courseId}`);
      this.goLogin(url);

      if (!this.data.apply) {
        return this.data.price === 0 ? this.$toast.fail('请先报名课程!') : this.$router.push({
          path: `/courseOrder/${this.data.courseId}`
        });
      }

      let {
        data: {
          code,
          data: list
        }
      } = await Object(course["e" /* courseDownlaod */])({
        courseId: this.data.courseId,
        liveId: item.id
      });

      if (code === 0) {
        window.location.href = list.document;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/CourseDetail/CommonContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var CourseDetail_CommonContentvue_type_script_lang_js_ = (CommonContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CourseDetail/CommonContent.vue



function CommonContent_injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommonContent_component = Object(componentNormalizer["a" /* default */])(
  CourseDetail_CommonContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  CommonContent_injectStyles,
  "7ce338ac",
  "5b4e6168"
  
)

/* harmony default export */ var CommonContent = __webpack_exports__["a"] = (CommonContent_component.exports);

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0cdf6e11", content, true, context)
};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/collection.0375eff.png";

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/collectioned.15a5858.png";

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play.b06945f.png";

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/erweima.467736c.png";

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6290d508_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(539);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(540);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(541);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(542);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(543);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, ".wait[data-v-6290d508]{color:#333}.end[data-v-6290d508]{color:#989898}.bein[data-v-6290d508]{color:#449ce6}.flexBox[data-v-6290d508]{display:flex;align-items:center}.banner[data-v-6290d508]{width:100%;height:5.46667rem}.courseShare[data-v-6290d508]{position:fixed;top:4rem;right:.53333rem;width:1.38667rem;height:1.46667rem;z-index:100;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%}.courseShare .priceShare[data-v-6290d508]{position:absolute;left:0;right:0;bottom:-.02667rem}[data-v-6290d508] .CommonContent{padding-bottom:1.86667rem}.limitDiscount[data-v-6290d508]{display:flex;align-items:center;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;background-size:100% 100%;height:1.06667rem;width:100%}.limitDiscount .limitBg[data-v-6290d508]{width:1.65333rem;height:.66667rem;line-height:.53333rem;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;background-size:100% 100%}.limitDiscount .fake[data-v-6290d508]{text-decoration:line-through}.limitDiscount .countTime[data-v-6290d508]{margin-left:auto;color:#f5303a}.limitDiscount .discountTime[data-v-6290d508]{display:flex;align-items:center;color:#ed3833;line-height:0}.limitDiscount .discountTime .number[data-v-6290d508]{display:inline-block;width:.53333rem;height:.53333rem;font-size:.32rem;line-height:.53333rem;font-weight:500;text-align:center;background:#ed3833;color:#fff;border-radius:.02667rem}.studyNumber[data-v-6290d508]{position:relative;top:.13333rem}.c-ff5[data-v-6290d508]{color:#ff5400}.title[data-v-6290d508]{background:#fefefe;line-height:.58667rem;border-radius:.26667rem .26667rem 0 0}.description[data-v-6290d508],.title[data-v-6290d508]{word-break:break-all}.description[data-v-6290d508]{line-height:.45333rem}.statusWrap[data-v-6290d508]{display:flex;justify-content:space-between;align-items:center;line-height:0}.fakePrice[data-v-6290d508]{text-decoration:line-through;color:#999}.flexPlay[data-v-6290d508]{display:flex;align-items:center}.flexPlay .flexOne[data-v-6290d508]{flex:0 0 0.8rem}.flexPlay .share[data-v-6290d508]{margin-left:.05333rem;margin-bottom:.08rem}.flexPlay .callBtn[data-v-6290d508]{flex:0 0 4rem;padding:.64rem 0;line-height:0;text-align:center;font-size:.42667rem;font-weight:500;color:#fff;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;background-size:100% 100%}.flexPlay .statusBtn[data-v-6290d508]{display:flex;justify-content:center;align-items:center;flex:0 0 4.93333rem;border-radius:1.06667rem;padding:.21333rem 0;line-height:0;margin-left:auto}.flexPlay .statusBtn.join[data-v-6290d508]{background:linear-gradient(90deg,#ff9c00,#ffb022,#ffb32b,#ffa300)}.flexPlay .statusBtn.buy[data-v-6290d508]{background:linear-gradient(90deg,#ff514d,#ff5854,#ff625e,#e8322d)}.flexPlay .statusBtn.joined[data-v-6290d508]{background:linear-gradient(90deg,#7cb934,#82ba3f,#80c231,#71ae29)}.flexPlay .statusBtn.living[data-v-6290d508]{background:linear-gradient(90deg,#ff6400,#ff8232,#fd7015,#ed6106)}.flexPlay .statusBtn.unstart[data-v-6290d508]{background:linear-gradient(90deg,#64d2ac,#6dd8b3,#76d9b7,#55c79f)}.flexPlay .statusBtn.disabled[data-v-6290d508]{background:linear-gradient(90deg,#c5c5c5,#d1d1d1,#d3d3d3,#b5b5b5);box-shadow:.02667rem .02667rem .10667rem rgba(0,0,0,.4)}.flexPlay .statusBtn .playImg[data-v-6290d508]{height:.74667rem}.flexPlay .listenStatus[data-v-6290d508]{flex:0 0 2.66667rem;padding:.13333rem 0;height:.96rem;line-height:.96rem}.palyWrap[data-v-6290d508]{width:100%;position:fixed;bottom:0;left:50%;z-index:99;transform:translateX(-50%);box-shadow:0 0 .08rem .05333rem rgba(36,36,36,.2)}.applyModal[data-v-6290d508]{padding:.4rem}.applyModal .img[data-v-6290d508]{width:100%}.listenBtn[data-v-6290d508]{position:fixed;bottom:1.33333rem;right:0;display:inline-block;width:1.86667rem;height:1.86667rem;border-radius:.48rem;line-height:2.4rem;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;background-size:100% 100%;color:#fff;font-size:.32rem}.camp[data-v-6290d508]{margin-top:.53333rem}.camp .period[data-v-6290d508]{flex:0 0 33.333333%;padding:0 .13333rem;margin-bottom:.26667rem}.camp .period .periodTitle[data-v-6290d508]{font-size:.32rem;color:#fff;text-align:center;padding:.21333rem 0;background:linear-gradient(#6cc6f6,#449ce6)}.camp .period .periodStatus[data-v-6290d508]{font-size:.34667rem;background:#fff;height:1.46667rem;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:.13333rem .26667rem;text-align:center}.camp .movePeriod[data-v-6290d508]{font-size:.32rem;color:#666;text-align:center;display:flex;flex-direction:column}.periodNum[data-v-6290d508]{background:#4a90e2;color:#fff;font-size:.32rem;padding:.05333rem .05333rem .05333rem .18667rem;border-radius:.53333rem;margin-right:.13333rem}.ccourseDownload[data-v-6290d508]{display:flex;align-items:flex-end;color:#0293ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/courseShare.083bdca.png";

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/discountBG.2d75df9.png";

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg1.c3824fe.png";

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/callBtn.d3606e8.png";

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/listenBtn.3983550.png";

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/courseDetail/_id.vue?vue&type=template&id=6290d508&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"courseDetail"},[_vm._ssrNode("<div data-v-6290d508>","</div>",[_vm._ssrNode("<div class=\"banner\" data-v-6290d508><img"+(_vm._ssrAttr("src",("" + (_vm.config.IMG_URL.default) + (_vm.data.poster))))+" class=\"banner\" data-v-6290d508></div> "+((_vm.data.carry_fee > 0)?("<div class=\"courseShare\" data-v-6290d508><span class=\"textCenter fs14 c-fff priceShare\" data-v-6290d508>"+_vm._ssrEscape("赚¥"+_vm._s(_vm.data.carry_fee))+"</span></div>"):"<!---->")+" "+((_vm.currentTime < _vm.data.discountEnd && _vm.currentTime > _vm.data.discountStart)?("<div class=\"limitDiscount\" data-v-6290d508><span class=\"c-fff fs14 ml12\" data-v-6290d508>¥</span> <span class=\"c-fff fs20\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.data.discountPrice))+"</span> <span class=\"c-fff fs12 ml5 mt5 fake\" data-v-6290d508>"+_vm._ssrEscape("¥"+_vm._s(_vm.data.price))+"</span> <span class=\"c-fff textCenter fs12 ml15 limitBg\" data-v-6290d508>限时特惠</span> <div class=\"countTime mr13\" data-v-6290d508><p class=\"fs12 textCenter\" data-v-6290d508>\n          距优惠结束还剩：\n        </p> <div class=\"discountTime\" data-v-6290d508><span class=\"number\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.discountTime('d')))+"</span> <span class=\"f600 fs12 ml5 mr5\" data-v-6290d508>天</span> <span class=\"number\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.discountTime('h')))+"</span> <span class=\"f600 fs12 ml5 mr5\" data-v-6290d508>:</span> <span class=\"number\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.discountTime('m')))+"</span> <span class=\"f600 fs12 ml5 mr5\" data-v-6290d508>:</span> <span class=\"number\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.discountTime('s')))+"</span></div></div></div>"):"<!---->")+" <div class=\"c-333 f500 pd15 title\" data-v-6290d508><div class=\"fs16 f600\" data-v-6290d508>"+((_vm.data.type === 3 && _vm.data.period>0)?("<span class=\"periodNum\" data-v-6290d508>"+_vm._ssrEscape("\n          第"+_vm._s(_vm.data.period)+"期\n        ")+"</span>"):"<!---->")+" <span style=\"vertical-align: bottom;\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.data.name))+"</span></div> <div class=\"fs12 c-666 mt8 van-multi-ellipsis--l2 description\" data-v-6290d508>"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.description)+"\n      ")+"</div> <div class=\"statusWrap mt15 pb11\" data-v-6290d508><div data-v-6290d508>"+((_vm.data.price === 0)?("<span class=\"fs20 f600 c-ff5\" data-v-6290d508>免费</span>"):"<!---->")+" "+((_vm.isDisCount && _vm.data.price > 0)?("<span class=\"fs19 f600 c-ff5\" data-v-6290d508>"+_vm._ssrEscape("¥"+_vm._s(_vm.data.discountPrice))+"</span>"):"<!---->")+" "+((!_vm.isDisCount && _vm.data.price > 0)?("<span class=\"fs19 f500 c-ff5\" data-v-6290d508>"+_vm._ssrEscape("¥"+_vm._s(_vm.data.price))+"</span>"):"<!---->")+"</div> <div class=\"fs12 c-999 mt5 studyNumber\" data-v-6290d508><span class=\"f500\" data-v-6290d508>"+_vm._ssrEscape(_vm._s(_vm.data.studyNumber))+"</span> <span data-v-6290d508>"+_vm._ssrEscape("人加入"+_vm._s(_vm.data.price>0 ? '购买':'学习'))+"</span></div></div></div> "),(_vm.data.type === 3)?_vm._ssrNode("<div class=\"camp\" data-v-6290d508>","</div>",[_vm._ssrNode("<div style=\"display:flex;flex-wrap: wrap;\" data-v-6290d508>"+(_vm._ssrList((_vm.data.camps&&_vm.data.camps.slice(0, (_vm.campPage + 1)*3)),function(item){return ("<div class=\"period\" data-v-6290d508><div class=\"periodTitle\" data-v-6290d508>"+_vm._ssrEscape("\n            第"+_vm._s(item.period)+"期\n          ")+"</div> <div"+(_vm._ssrClass(null,['periodStatus', _vm.status(item).style]))+" data-v-6290d508>"+_vm._ssrEscape("\n            "+_vm._s(_vm.status(item).status)+"\n          ")+"</div></div>")}))+"</div> "),(_vm.data.camps&&_vm.data.camps.length > 3&& Math.ceil(_vm.data.camps.length / 3) > _vm.campPage+1)?_vm._ssrNode("<div class=\"movePeriod\" data-v-6290d508>","</div>",[_vm._ssrNode("<span data-v-6290d508>查看更多</span> "),_c('van-icon',{attrs:{"name":"arrow-down"}})],2):_vm._e()],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt5 fs12 c-666 bg-fefe pd15\" data-v-6290d508>","</div>",[_vm._ssrNode("<p class=\"flexBox\" data-v-6290d508>","</p>",[_vm._ssrNode(_vm._ssrEscape("\n        说明："+_vm._s(_vm.explain)+"\n        ")),_c('van-rate',{staticClass:"ml20",attrs:{"readonly":"","allow-half":"","value":_vm.data.score%10 === 0 ? (_vm.data.score/10) : (Math.floor(_vm.data.score/10)+0.5),"size":14,"color":"#ffd21e","void-icon":"star","void-color":"#eee"}})],2),_vm._ssrNode(" <p class=\"mt5\" data-v-6290d508>"+_vm._ssrEscape("\n        课程难度： "+_vm._s(_vm.data.difficulty === 1 ? '初级' : _vm.data.difficulty === 2 ? '中级' : '高级')+"\n      ")+"</p> "),(_vm.singleCourseDownload)?_vm._ssrNode("<div class=\"fs12 mt5 ccourseDownload\" data-v-6290d508>","</div>",[_c('van-icon',{staticStyle:{"transform":"rotate(180deg)","margin-bottom":"1px","margin-right":"2px"},attrs:{"name":"back-top"}}),_vm._ssrNode(" <span data-v-6290d508>课件下载</span>")],2):_vm._e()],2)],2),_vm._ssrNode(" "),_c('CommonContent',{ref:"commonContent",attrs:{"data":_vm.data,"tops":_vm.tops}}),_vm._ssrNode(" "+((_vm.initData && _vm.$refs.commonContent.active !== 3)?("<div class=\"palyWrap pt10 pb10 pl20 pr20 bg-fefe\" data-v-6290d508><div class=\"flexPlay\" data-v-6290d508><div class=\"flexOne\" data-v-6290d508><div data-v-6290d508>"+((!_vm.data.favorite)?("<img"+(_vm._ssrAttr("src",__webpack_require__(533)))+" alt width=\"21px\" class=\"share block\" data-v-6290d508>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(534)))+" alt width=\"21px\" class=\"share block\" data-v-6290d508>"))+"</div> <div class=\"fs12 c-333 f500\" data-v-6290d508>\n          收藏\n        </div></div> <div class=\"flexOne ml20\" data-v-6290d508><div data-v-6290d508><img"+(_vm._ssrAttr("src",__webpack_require__(89)))+" alt width=\"18px\" class=\"share block\" data-v-6290d508></div> <div class=\"fs12 c-333 f500\" data-v-6290d508>\n          分享\n        </div></div> "+((_vm.previewItem)?("<div class=\"textCenter f600 ml10 listenBtn fs14\" data-v-6290d508>\n        免费试听\n      </div>"):"<!---->")+" "+((_vm.isCall)?("<div class=\"ml20 callBtn\" data-v-6290d508>\n        集call免费学\n      </div>"):"<!---->")+" "+((_vm.data.lives.length > 0)?("<div"+(_vm._ssrClass(null,['statusBtn', _vm.liveStatusTitle.style,{'listenStatus':_vm.isCall}]))+" data-v-6290d508><div class=\"fs16 c-fff f500 ml5 mr5\" data-v-6290d508>"+_vm._ssrEscape("\n          "+_vm._s(_vm.liveStatusTitle.title)+"\n        ")+"</div> "+((!_vm.isCall || _vm.data.apply)?("<div class=\"ml5 mr5\" data-v-6290d508><img"+(_vm._ssrAttr("src",__webpack_require__(535)))+" class=\"playImg\" data-v-6290d508></div>"):"<!---->")+"</div>"):"<!---->")+"</div></div>"):"<!---->")+" "),_c('ThirdShare',{ref:"ThirdShare",attrs:{"shareOption":_vm.shareOption}}),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"backHomeIcon",attrs:{"to":"/"}}),_vm._ssrNode(" "),_c('van-dialog',{attrs:{"title":"报名成功"},model:{value:(_vm.visibleTips),callback:function ($$v) {_vm.visibleTips=$$v},expression:"visibleTips"}},[_c('div',{staticClass:"textCenter applyModal"},[_c('p',[_vm._v("\n        扫码关注公众号, 课程开始前将会发送消息通知你上课\n      ")]),_vm._v(" "),_c('img',{staticClass:"img",attrs:{"src":__webpack_require__(536)}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courseDetail/_id.vue?vue&type=template&id=6290d508&scoped=true&

// EXTERNAL MODULE: ./config/common.config.js
var common_config = __webpack_require__(2);

// EXTERNAL MODULE: ./api/course.js
var course = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Common/ThirdShare.vue + 4 modules
var ThirdShare = __webpack_require__(87);

// EXTERNAL MODULE: ./components/CourseDetail/CommonContent.vue + 10 modules
var CommonContent = __webpack_require__(214);

// EXTERNAL MODULE: external "ais-common-utils"
var external_ais_common_utils_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courseDetail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CommonContent: CommonContent["a" /* default */],
    ThirdShare: ThirdShare["a" /* default */]
  },

  async asyncData(context) {
    const {
      data
    } = await Object(course["n" /* getCourseDetail */])(context.route.params.id);

    if (data.code === 0) {
      data.data.courseId = context.route.params.id;
      let livesObj = {};
      data.data.lives.forEach(item => {
        if (!livesObj[item.chapterName]) {
          livesObj[item.chapterName] = [];
          livesObj[item.chapterName].push(item);
        } else {
          livesObj[item.chapterName].push(item);
        }
      });
      data.data.livesObj = livesObj; //获取推荐课程

      const res = await Object(course["w" /* getHomeTops */])();

      if (res.data.code === 0) {
        return {
          data: data.data,
          //设置第三方分享参数
          shareOption: {
            title: data.data.name,
            desc: `我已参加这个课程，你也来一起参加吧!`,
            imgUrl: `${common_config["a" /* default */].IMG_URL.default}${data.data.poster}`,
            link: `${common_config["a" /* default */].LINK.school_h5}/courseDetail/${data.data.courseId}`,
            courseId: data.data.courseId
          },
          //设置推荐课程
          tops: res.data.data.tops
        };
      }
    }
  },

  data() {
    return {
      data: {
        lives: [],
        livesObj: {}
      },
      tops: [],
      //保存推荐会议
      active: 0,
      shareOption: {},
      config: common_config["a" /* default */],
      currentTime: parseInt(new Date().getTime() / 1000),
      //获取当前时间
      timer: null,
      //计时器
      visibleTips: false,
      //直播报名成功后二维码窗口开关
      initData: false,
      //获取数据后，渲染界面
      campPage: 0
    };
  },

  computed: {
    explain() {
      return this.data.type === 2 ? '系列课' : this.data.type === 3 ? '训练营' : this.data.lives.length > 0 && this.data.lives[0].start && this.data.lives[0].end ? `${this.$changeTime(this.data.lives[0].start)}~${this.$changeTime(this.data.lives[0].end)}直播` : '永久有效';
    },

    //设置播放按钮状态,以及按钮背景色
    liveStatusTitle() {
      //系列课,单课录播
      if (this.data.type === 2 || this.data.type === 3 || this.data.type === 1 && this.data.lives[0].scene === 1) {
        //没有报名显示'报名学习';没有购买，显示'购买课程';报名后和购买后，有播放记录显示'继续学习',没有播放记录，显示'立即学习'
        return !this.data.apply ? this.data.price === 0 ? {
          title: '报名学习',
          style: 'join'
        } : {
          title: '立即购买',
          style: 'buy'
        } : this.data.lastLiveId ? {
          title: '继续学习',
          style: 'joined'
        } : {
          title: '立即学习',
          style: 'join'
        };
      } //单课直播


      if (this.data.lives[0].scene !== 1) {
        //购买/报名，显示'观看直播'
        if (this.data.apply && this.livingStatus === 2) {
          return {
            title: '观看直播',
            style: 'living'
          };
        } //在直播结束前，未报名的，显示'立即报名'，报名显示'已报名';未购买显示'购买课程'；购买后，显示'暂未开始'


        if (this.livingStatus === 1 || this.livingStatus === 2) {
          return this.data.price === 0 ? !this.data.apply ? {
            title: '立即报名',
            style: 'join'
          } : {
            title: '已报名',
            style: 'joined'
          } : !this.data.apply ? {
            title: '立即购买',
            style: 'buy'
          } : {
            title: '暂未开始',
            style: 'unstart'
          };
        } //过了播放时间，统一显示已结束


        if (this.livingStatus === 3) {
          return {
            title: '已结束',
            style: 'disabled'
          };
        }
      }

      return null;
    },

    //优惠倒计时
    discountTime() {
      return function (tg) {
        return Object(external_ais_common_utils_["countTime"])(this.data.discountEnd * 1000, this.currentTime * 1000, tg);
      };
    },

    //判断是否优惠
    isDisCount() {
      return this.currentTime >= this.data.discountStart && this.data.discountEnd >= this.currentTime;
    },

    //判断直播状态
    //返回1：暂未开始， 2：直播中， 3：已结束
    livingStatus() {
      if (!this.data.lives[0].start && !this.data.lives[0].end) {
        return null;
      }

      if (this.data.liveStatus === 1 || this.currentTime > this.data.lives[0].start && this.data.lives[0].end > this.currentTime) {
        return 2;
      } else if (this.currentTime > this.data.lives[0].end) {
        return 3;
      } else if (this.data.lives[0].start - this.currentTime > 0) {
        return 1;
      }

      return null;
    },

    //判断课程是否有试听,返回有试听的对象,-1为整节课都试听
    previewItem() {
      if (!this.data.apply) {
        const index = this.data.lives.findIndex(p => (p.previewTime > 0 || p.previewTime === -1) && p.scene === 1);
        return index > -1 ? { ...this.data.lives[index],
          previewTime: this.data.lives[index].duration
        } : false;
      }

      return false;
    },

    //展示集call按钮
    isCall() {
      return this.data.call > 0 && !this.data.apply && (this.data.type > 1 || this.livingStatus !== 3);
    },

    //单课课件下载
    singleCourseDownload() {
      return this.data.type === 1 && this.data.lives && this.data.lives.length && this.data.lives[0] && this.data.lives[0].document ? this.data.lives[0].document : false;
    }

  },

  mounted() {
    Object(external_ais_common_utils_["backScrollTop"])(0);
    this.getCourseMsgHand();
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000); //把url上推荐人的id保存到本地

    if (this.$route.query.inviterCode) {
      external_ais_common_utils_["storage"].set('inviterObj', {
        inviterCode: this.$route.query.inviterCode,
        courseId: this.$route.params.id
      });
    }
  },

  methods: {
    //登录跳转
    goLogin(url) {
      if (!external_ais_common_utils_["storage"].get('userStatus')) {
        window.location.href = `${common_config["a" /* default */].POST.school_h5}/school/passport/login?mobile=1&state=${url}`;
        return false;
      }
    },

    jump() {
      const redirect_url = encodeURIComponent(`${window.location.origin}/inviteFriends/${this.data.courseId}?&surname=__NICKNAME__&portrait=__AVATAR__`);

      if (!external_ais_common_utils_["storage"].get('userStatus')) {
        const url = encodeURIComponent(`${common_config["a" /* default */].POST.school_h5}/school/common/mp/authorize?redirect_url=${redirect_url}`);
        window.location.href = `${common_config["a" /* default */].POST.school_h5}/school/passport/login?mobile=1&state=${url}`;
        return;
      }

      window.location.href = `${common_config["a" /* default */].POST.school_h5}/school/common/mp/authorize?redirect_url=${redirect_url}`;
    },

    callClick() {
      const path = `/courseCall/${this.data.call}`;
      const url = encodeURIComponent(window.location.origin + path);
      this.goLogin(url);
      this.$router.push({
        path: path
      });
    },

    async hanldeCourseClick() {
      //未购买，点击购买需跳转登录
      if (!this.data.apply) {
        const url = encodeURIComponent(this.$route.query.inviterId ? `${common_config["a" /* default */].LINK.school_pc}/courseDetail/${this.data.courseId}?inviterId=${this.$route.query.inviterId}` : `${common_config["a" /* default */].LINK.school_pc}/courseDetail/${this.data.courseId}`);
        this.goLogin(url);
      } //(系列课，单课)
      //已购买或者已申请报名的，单课跳视频播放页；系列课有观看历史的，跳视频播放页，没有则当前页面改变tab到课程目录
      //未报名，调报名接口
      //未购买，弹出确认订单窗口


      if (this.data.type === 2 || this.data.type === 3 || this.data.lives[0].scene === 1 && this.data.type === 1) {
        if (this.data.apply) {
          //已购买，已报名
          if (this.data.type === 2 || this.data.type === 3) {
            //系列课，有观看历史（lastLiveId不为空）跳视频播放页，否则tab切换到课程目录
            const isExitLiveId = this.data.lives.some(item => {
              //判断lastLiveId是否存在lives数组里
              return item.id === this.data.lastLiveId;
            });

            if (isExitLiveId) {
              this.$router.push({
                //有观看历史，跳视频播放页
                path: `/videoDetail/${this.data.lastLiveId}`
              });
            } else {
              //没有观看历史，tab切换到课程目录
              this.$refs.commonContent.changeActive(2);
            }
          } else {
            //录播直接跳播放页
            this.$router.push({
              path: `/videoDetail/${this.data.lives[0].id}`
            });
          }
        } else if (this.data.price === 0) {
          //免费，未报名调报名接口
          const {
            data
          } = await Object(course["b" /* applyFreeCourse */])(this.data.courseId);

          if (data.code === 0) {
            this.$toast.success('报名成功!'); //报名成功后统一跳转报名成功页

            this.$router.push(`/pay/finish/${this.data.courseId}`);
          }
        } else {
          //付费，未购买打开付费窗口
          this.$router.push({
            path: this.$route.query.inviterId ? `/courseOrder/${this.data.courseId}?inviterId=${this.$route.query.inviterId}` : `/courseOrder/${this.data.courseId}`
          });
        }
      } else {
        //直播
        //免费：直播未结束前，未报名的，调报名接口；报名后，直播开始前，弹出报名成功二维码，直播中，跳转到直播页面；
        //付费: 直播未结束前，未购买的，弹确认订单窗口；购买后，直播开始前不做操作；直播中，跳转到直播页面
        if (!this.data.apply && (this.livingStatus === 1 || this.livingStatus === 2)) {
          if (this.data.price === 0) {
            //免费
            const {
              data
            } = await Object(course["b" /* applyFreeCourse */])(this.data.courseId);

            if (data.code === 0) {
              this.$toast.success('报名成功!'); //报名成功后统一跳转报名成功页

              this.$router.push(`/pay/finish/${this.data.courseId}`);
            }
          } else {
            //收费
            this.$router.push({
              path: this.$route.query.inviterId ? `/courseOrder/${this.data.courseId}?inviterId=${this.$route.query.inviterId}` : `/courseOrder/${this.data.courseId}`
            });
          }
        } else if (this.data.apply && (this.livingStatus === 2 || this.livingStatus === 1)) {
          if (this.livingStatus === 2 || 900 >= this.data.lives[0].start - this.currentTime) {
            //即将开始，直播中可以进去直播间
            this.$router.push({
              path: `/videoDetail/${this.data.lives[0].id}`
            });
          } else {
            this.$toast.fail('讲师还没有开课!');
          }
        }
      }
    },

    //试听点击
    previewClick() {
      this.$router.push({
        path: `/videoDetail/${this.previewItem.id}?isPreview=true`
      });
    },

    //获取课程信息信息
    async getCourseMsgHand() {
      const {
        data
      } = await Object(course["r" /* getCourseMsg */])(this.$route.params.id);

      if (data.code === 0) {
        Object.keys(data.data).forEach(key => {
          this.$set(this.data, key, data.data[key]);
          this.initData = true;
        });
      }
    },

    // 操作收藏
    async handleCollect() {
      const {
        data
      } = await Object(course["d" /* collectCourse */])(this.data.courseId, !this.data.favorite);

      if (data.code === 0) {
        this.$toast(!this.data.favorite ? '收藏成功!' : '取消收藏成功!');
        this.$set(this.data, 'favorite', !this.data.favorite);
      }
    },

    //打开分享窗口
    openShare() {
      this.$refs.ThirdShare.open();
    },

    //获取当前时间
    getCurrentTime() {
      this.currentTime = parseInt(new Date().getTime() / 1000);
    },

    status(item) {
      let currentTime = parseInt(new Date().getTime() / 1000),
          currentItem = {};
      let time = `${this.$changeTime(item.start, 'YYYY-MM-DD HH:mm')}`;

      if (currentTime < item.start) {
        currentItem = {
          status: time + (this.data.apply ? '开营' : '待开营'),
          style: 'wait',
          type: 1
        };
      } else {
        let status = currentTime > item.end;
        currentItem = {
          status: time + (status ? '已结束' : '正在开营'),
          style: status ? 'end' : 'bein',
          type: status ? 2 : 3
        };
      }

      return currentItem;
    },

    goDetailPeriod(id) {
      this.$router.push(`/courseDetail/${id}`);
    },

    movePeriod() {
      this.campPage += 1;
    },

    //单课课件下载
    async downLoadCourse() {
      //未登录，点击购买需跳转登录
      const url = encodeURIComponent(`${common_config["a" /* default */].LINK.school_h5}/courseDetail/${this.data.courseId}`);
      this.goLogin(url);

      if (!this.data.apply) {
        return this.data.price === 0 ? this.$toast.fail('请先报名课程!') : this.$router.push({
          path: `/courseOrder/${this.data.courseId}`
        });
      }

      let {
        data: {
          code,
          data: list
        }
      } = await Object(course["e" /* courseDownlaod */])({
        courseId: this.data.courseId,
        liveId: this.data.lives[0].id
      });

      if (code === 0) {
        window.open(list.document);
      }
    }

  },

  head() {
    return {
      title: (this.data.seo && this.data.seo.title ? this.data.seo.title : this.data.name) + '—艾思云课堂',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.data.seo && this.data.seo.description ? this.data.seo.description : this.data.description
      }, {
        hid: 'Keywords',
        name: 'Keywords',
        content: this.data.seo && this.data.seo.keywords ? this.data.seo.keywords : '课程详情'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/courseDetail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var courseDetail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/courseDetail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(537)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courseDetail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6290d508",
  "8b9f12e4"
  
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
//# sourceMappingURL=_id.js.map