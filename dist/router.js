import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe3fd48e = () => interopDefault(import('..\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _93698fb0 = () => interopDefault(import('..\\pages\\allCourse.vue' /* webpackChunkName: "pages/allCourse" */))
const _6aa84eff = () => interopDefault(import('..\\pages\\college\\index.vue' /* webpackChunkName: "pages/college/index" */))
const _7a0b59cc = () => interopDefault(import('..\\pages\\promote.vue' /* webpackChunkName: "pages/promote" */))
const _8aee0e3a = () => interopDefault(import('..\\pages\\promote\\Introduce.vue' /* webpackChunkName: "pages/promote/Introduce" */))
const _5dc8e4ed = () => interopDefault(import('..\\pages\\promote\\scientificBiunique.vue' /* webpackChunkName: "pages/promote/scientificBiunique" */))
const _087b733a = () => interopDefault(import('..\\pages\\promote\\scientificGroup.vue' /* webpackChunkName: "pages/promote/scientificGroup" */))
const _01b28552 = () => interopDefault(import('..\\pages\\pushSell\\index.vue' /* webpackChunkName: "pages/pushSell/index" */))
const _e52e463c = () => interopDefault(import('..\\pages\\teacherRecruit\\index.vue' /* webpackChunkName: "pages/teacherRecruit/index" */))
const _aeab2a6c = () => interopDefault(import('..\\pages\\videoDetail\\index.vue' /* webpackChunkName: "pages/videoDetail/index" */))
const _342fc840 = () => interopDefault(import('..\\pages\\biunique\\paper.vue' /* webpackChunkName: "pages/biunique/paper" */))
const _7a6845a5 = () => interopDefault(import('..\\pages\\biunique\\scientific.vue' /* webpackChunkName: "pages/biunique/scientific" */))
const _50f85f74 = () => interopDefault(import('..\\pages\\college\\newsList.vue' /* webpackChunkName: "pages/college/newsList" */))
const _76114386 = () => interopDefault(import('..\\pages\\paper\\apply.vue' /* webpackChunkName: "pages/paper/apply" */))
const _0cf04eb2 = () => interopDefault(import('..\\pages\\paper\\coach.vue' /* webpackChunkName: "pages/paper/coach" */))
const _274d3fb5 = () => interopDefault(import('..\\pages\\paper\\result.vue' /* webpackChunkName: "pages/paper/result" */))
const _11c99b11 = () => interopDefault(import('..\\pages\\paper\\types.vue' /* webpackChunkName: "pages/paper/types" */))
const _6bf2522c = () => interopDefault(import('..\\pages\\pushSell\\agree.vue' /* webpackChunkName: "pages/pushSell/agree" */))
const _026e8203 = () => interopDefault(import('..\\pages\\pushSell\\success.vue' /* webpackChunkName: "pages/pushSell/success" */))
const _4c333e4c = () => interopDefault(import('..\\pages\\pushSell\\withDraw.vue' /* webpackChunkName: "pages/pushSell/withDraw" */))
const _bd609188 = () => interopDefault(import('..\\pages\\studyCenter\\biuniqueOrder.vue' /* webpackChunkName: "pages/studyCenter/biuniqueOrder" */))
const _595ba939 = () => interopDefault(import('..\\pages\\studyCenter\\lastStudy.vue' /* webpackChunkName: "pages/studyCenter/lastStudy" */))
const _a8f0621e = () => interopDefault(import('..\\pages\\studyCenter\\myCourse.vue' /* webpackChunkName: "pages/studyCenter/myCourse" */))
const _1a5cb058 = () => interopDefault(import('..\\pages\\studyCenter\\myFavor.vue' /* webpackChunkName: "pages/studyCenter/myFavor" */))
const _6d77f168 = () => interopDefault(import('..\\pages\\studyCenter\\myOrder.vue' /* webpackChunkName: "pages/studyCenter/myOrder" */))
const _70de23ec = () => interopDefault(import('..\\pages\\biunique\\paperApply\\_id.vue' /* webpackChunkName: "pages/biunique/paperApply/_id" */))
const _d581420a = () => interopDefault(import('..\\pages\\biunique\\paperCategoryDetail\\_id.vue' /* webpackChunkName: "pages/biunique/paperCategoryDetail/_id" */))
const _9be5c864 = () => interopDefault(import('..\\pages\\biunique\\paperCategoryList\\_id.vue' /* webpackChunkName: "pages/biunique/paperCategoryList/_id" */))
const _8ace31de = () => interopDefault(import('..\\pages\\biunique\\scientificApply\\_id.vue' /* webpackChunkName: "pages/biunique/scientificApply/_id" */))
const _46e55514 = () => interopDefault(import('..\\pages\\biunique\\scientificCategoryDetail\\_id.vue' /* webpackChunkName: "pages/biunique/scientificCategoryDetail/_id" */))
const _6bcc7509 = () => interopDefault(import('..\\pages\\biunique\\scientificCategoryList\\_id.vue' /* webpackChunkName: "pages/biunique/scientificCategoryList/_id" */))
const _62241415 = () => interopDefault(import('..\\pages\\biunique\\subjectMatch\\_id.vue' /* webpackChunkName: "pages/biunique/subjectMatch/_id" */))
const _46754883 = () => interopDefault(import('..\\pages\\pay\\finish\\_id.vue' /* webpackChunkName: "pages/pay/finish/_id" */))
const _5778bb66 = () => interopDefault(import('..\\pages\\courseCall\\_id.vue' /* webpackChunkName: "pages/courseCall/_id" */))
const _0294b90c = () => interopDefault(import('..\\pages\\courseDetail\\_id.vue' /* webpackChunkName: "pages/courseDetail/_id" */))
const _daec4f6a = () => interopDefault(import('..\\pages\\courseOrder\\_id.vue' /* webpackChunkName: "pages/courseOrder/_id" */))
const _117a99fe = () => interopDefault(import('..\\pages\\coursePoster\\_id.vue' /* webpackChunkName: "pages/coursePoster/_id" */))
const _1d94f9dc = () => interopDefault(import('..\\pages\\inviteFriends\\_id.vue' /* webpackChunkName: "pages/inviteFriends/_id" */))
const _2e33827c = () => interopDefault(import('..\\pages\\newsDetail\\_id.vue' /* webpackChunkName: "pages/newsDetail/_id" */))
const _574a3678 = () => interopDefault(import('..\\pages\\promoteApply\\_id.vue' /* webpackChunkName: "pages/promoteApply/_id" */))
const _097bb6cd = () => interopDefault(import('..\\pages\\promoteDetail\\_id.vue' /* webpackChunkName: "pages/promoteDetail/_id" */))
const _71da8e98 = () => interopDefault(import('..\\pages\\promoteOrder\\_id.vue' /* webpackChunkName: "pages/promoteOrder/_id" */))
const _23686fd8 = () => interopDefault(import('..\\pages\\promoteQuestion\\_id.vue' /* webpackChunkName: "pages/promoteQuestion/_id" */))
const _788897b2 = () => interopDefault(import('..\\pages\\videoDetail\\_id.vue' /* webpackChunkName: "pages/videoDetail/_id" */))
const _31a74acc = () => interopDefault(import('..\\pages\\videoWeChatDetail\\_id.vue' /* webpackChunkName: "pages/videoWeChatDetail/_id" */))
const _6d0d26de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _fe3fd48e,
    meta: {"title":"我的","notab":false,"needLogin":false},
    name: "account"
  }, {
    path: "/allCourse",
    component: _93698fb0,
    meta: {"title":"全部课程","notab":false,"needLogin":false},
    name: "allCourse"
  }, {
    path: "/college",
    component: _6aa84eff,
    meta: {"title":"高校公益行活动","notab":true,"needLogin":false},
    name: "college"
  }, {
    path: "/promote",
    component: _7a0b59cc,
    meta: {"title":"科研背景提升","perv":"/","notab":true,"needLogin":false},
    name: "promote",
    children: [{
      path: "Introduce",
      component: _8aee0e3a,
      meta: {"title":"科研背景提升","perv":"/","notab":true,"needLogin":false},
      name: "promote-Introduce"
    }, {
      path: "scientificBiunique",
      component: _5dc8e4ed,
      meta: {"title":"科研背景提升一对一","perv":"/","notab":true,"needLogin":false},
      name: "promote-scientificBiunique"
    }, {
      path: "scientificGroup",
      component: _087b733a,
      meta: {"title":"科研背景提升科研小组","perv":"/","notab":true,"needLogin":false},
      name: "promote-scientificGroup"
    }]
  }, {
    path: "/pushSell",
    component: _01b28552,
    meta: {"title":"推广收益","perv":"/pushSell","notab":true,"needLogin":true},
    name: "pushSell"
  }, {
    path: "/teacherRecruit",
    component: _e52e463c,
    meta: {"title":"协议","perv":"/","notab":true,"needLogin":true},
    name: "teacherRecruit"
  }, {
    path: "/videoDetail",
    component: _aeab2a6c,
    meta: {"title":"课程详情","perv":"/courseDetail","notab":true,"needLogin":true},
    name: "videoDetail"
  }, {
    path: "/biunique/paper",
    component: _342fc840,
    meta: {"title":"科研论文一对一","perv":"/","notab":true,"needLogin":false},
    name: "biunique-paper"
  }, {
    path: "/biunique/scientific",
    component: _7a6845a5,
    meta: {"title":"科研背景提升","perv":"/","notab":true,"needLogin":false},
    name: "biunique-scientific"
  }, {
    path: "/college/newsList",
    component: _50f85f74,
    meta: {"title":"最新活动","perv":"/college","notab":true,"needLogin":false},
    name: "college-newsList"
  }, {
    path: "/paper/apply",
    component: _76114386,
    meta: {"title":"SCI/SSCI期刊论文","notab":true,"needLogin":true},
    name: "paper-apply"
  }, {
    path: "/paper/coach",
    component: _0cf04eb2,
    meta: {"title":"论文辅导","notab":true,"needLogin":false},
    name: "paper-coach"
  }, {
    path: "/paper/result",
    component: _274d3fb5,
    meta: {"title":"最新成果展示","notab":true,"needLogin":false},
    name: "paper-result"
  }, {
    path: "/paper/types",
    component: _11c99b11,
    meta: {"title":"毕业论文辅导","notab":true,"needLogin":false},
    name: "paper-types"
  }, {
    path: "/pushSell/agree",
    component: _6bf2522c,
    meta: {"title":"协议","perv":"/pushSell","notab":true,"needLogin":true},
    name: "pushSell-agree"
  }, {
    path: "/pushSell/success",
    component: _026e8203,
    meta: {"title":"提交成功","perv":"/pushSell","notab":true,"needLogin":true},
    name: "pushSell-success"
  }, {
    path: "/pushSell/withDraw",
    component: _4c333e4c,
    meta: {"title":"提现","perv":"/pushSell","notab":true,"needLogin":true},
    name: "pushSell-withDraw"
  }, {
    path: "/studyCenter/biuniqueOrder",
    component: _bd609188,
    meta: {"title":"一对一订单","perv":"/account","notab":true,"needLogin":true},
    name: "studyCenter-biuniqueOrder"
  }, {
    path: "/studyCenter/lastStudy",
    component: _595ba939,
    meta: {"title":"最近学习","perv":"/account","notab":true,"needLogin":true},
    name: "studyCenter-lastStudy"
  }, {
    path: "/studyCenter/myCourse",
    component: _a8f0621e,
    meta: {"title":"我的课程","perv":"/account","notab":true,"needLogin":true},
    name: "studyCenter-myCourse"
  }, {
    path: "/studyCenter/myFavor",
    component: _1a5cb058,
    meta: {"title":"我的收藏","perv":"/account","notab":true,"needLogin":true},
    name: "studyCenter-myFavor"
  }, {
    path: "/studyCenter/myOrder",
    component: _6d77f168,
    meta: {"title":"课程订单","perv":"/account","notab":true,"needLogin":true},
    name: "studyCenter-myOrder"
  }, {
    path: "/biunique/paperApply/:id?",
    component: _70de23ec,
    meta: {"title":"科研论文一对一","perv":"/biunique/paper","notab":true,"needLogin":true},
    name: "biunique-paperApply-id"
  }, {
    path: "/biunique/paperCategoryDetail/:id?",
    component: _d581420a,
    meta: {"title":"科研论文一对一","perv":"/biunique/paperCategoryList","notab":true,"needLogin":false},
    name: "biunique-paperCategoryDetail-id"
  }, {
    path: "/biunique/paperCategoryList/:id?",
    component: _9be5c864,
    meta: {"title":"科研论文一对一","perv":"/biunique/paper","notab":true,"needLogin":false},
    name: "biunique-paperCategoryList-id"
  }, {
    path: "/biunique/scientificApply/:id?",
    component: _8ace31de,
    meta: {"title":"科研背景提升","perv":"/biunique/scientific","notab":true,"needLogin":true},
    name: "biunique-scientificApply-id"
  }, {
    path: "/biunique/scientificCategoryDetail/:id?",
    component: _46e55514,
    meta: {"title":"科研背景提升","perv":"/biunique/scientificCategoryList","notab":true,"needLogin":false},
    name: "biunique-scientificCategoryDetail-id"
  }, {
    path: "/biunique/scientificCategoryList/:id?",
    component: _6bcc7509,
    meta: {"title":"科研背景提升","perv":"/biunique/scientific","notab":true,"needLogin":false},
    name: "biunique-scientificCategoryList-id"
  }, {
    path: "/biunique/subjectMatch/:id?",
    component: _62241415,
    meta: {"title":"科研背景提升","perv":"/biunique/scientific","notab":true,"needLogin":false},
    name: "biunique-subjectMatch-id"
  }, {
    path: "/pay/finish/:id?",
    component: _46754883,
    meta: {"title":"支付成功","perv":"/courseDetail","notab":true,"needLogin":true},
    name: "pay-finish-id"
  }, {
    path: "/courseCall/:id?",
    component: _5778bb66,
    meta: {"title":"集call免费学","notab":true,"needLogin":false},
    name: "courseCall-id"
  }, {
    path: "/courseDetail/:id?",
    component: _0294b90c,
    meta: {"title":"课程详情","perv":"/allCourse","notab":true,"needLogin":false},
    name: "courseDetail-id"
  }, {
    path: "/courseOrder/:id?",
    component: _daec4f6a,
    meta: {"title":"课程详情","perv":"/allCourse","notab":true,"needLogin":false},
    name: "courseOrder-id"
  }, {
    path: "/coursePoster/:id?",
    component: _117a99fe,
    meta: {"title":"集call免费学","notab":true,"needLogin":false},
    name: "coursePoster-id"
  }, {
    path: "/inviteFriends/:id?",
    component: _1d94f9dc,
    meta: {"title":"邀请好友","perv":"/courseDetail","notab":true,"needLogin":true},
    name: "inviteFriends-id"
  }, {
    path: "/newsDetail/:id?",
    component: _2e33827c,
    meta: {"title":"文章详情","notab":true,"needLogin":false},
    name: "newsDetail-id"
  }, {
    path: "/promoteApply/:id?",
    component: _574a3678,
    meta: {"title":"科研背景提升申请","notab":true,"needLogin":true},
    name: "promoteApply-id"
  }, {
    path: "/promoteDetail/:id?",
    component: _097bb6cd,
    meta: {"title":"科研背景提升详情","notab":true,"needLogin":false},
    name: "promoteDetail-id"
  }, {
    path: "/promoteOrder/:id?",
    component: _71da8e98,
    meta: {"title":"科研背景提升订单确认","notab":true,"needLogin":false},
    name: "promoteOrder-id"
  }, {
    path: "/promoteQuestion/:id?",
    component: _23686fd8,
    meta: {"title":"科研背景提升问卷","notab":true,"needLogin":false},
    name: "promoteQuestion-id"
  }, {
    path: "/videoDetail/:id",
    component: _788897b2,
    meta: {"title":"课程详情","perv":"/courseDetail","notab":true,"needLogin":true},
    name: "videoDetail-id"
  }, {
    path: "/videoWeChatDetail/:id?",
    component: _31a74acc,
    meta: {"title":"课程详情","perv":"/courseDetail","notab":true,"needLogin":false},
    name: "videoWeChatDetail-id"
  }, {
    path: "/",
    component: _6d0d26de,
    meta: {"title":"艾思云课堂","notab":false,"needLogin":false},
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
