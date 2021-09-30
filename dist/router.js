import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73714823 = () => interopDefault(import('..\\pages\\allCourse\\index.vue' /* webpackChunkName: "pages/allCourse/index" */))
const _cf6fd3f0 = () => interopDefault(import('..\\pages\\college\\index.vue' /* webpackChunkName: "pages/college/index" */))
const _2d8f2542 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _00210a3a = () => interopDefault(import('..\\pages\\promote.vue' /* webpackChunkName: "pages/promote" */))
const _1527d928 = () => interopDefault(import('..\\pages\\promote\\Introduce.vue' /* webpackChunkName: "pages/promote/Introduce" */))
const _39ded6f8 = () => interopDefault(import('..\\pages\\promote\\scientificBiunique.vue' /* webpackChunkName: "pages/promote/scientificBiunique" */))
const _034e79fa = () => interopDefault(import('..\\pages\\promote\\scientificGroup.vue' /* webpackChunkName: "pages/promote/scientificGroup" */))
const _013e2d83 = () => interopDefault(import('..\\pages\\StartClass.vue' /* webpackChunkName: "pages/StartClass" */))
const _4bbc2bbe = () => interopDefault(import('..\\pages\\studyCenter.vue' /* webpackChunkName: "pages/studyCenter" */))
const _d5cf8e76 = () => interopDefault(import('..\\pages\\studyCenter\\biuniqueOrder.vue' /* webpackChunkName: "pages/studyCenter/biuniqueOrder" */))
const _3ea7517c = () => interopDefault(import('..\\pages\\studyCenter\\lastStudy.vue' /* webpackChunkName: "pages/studyCenter/lastStudy" */))
const _6dd4bbc8 = () => interopDefault(import('..\\pages\\studyCenter\\myCourse.vue' /* webpackChunkName: "pages/studyCenter/myCourse" */))
const _28e34ca1 = () => interopDefault(import('..\\pages\\studyCenter\\myFavor.vue' /* webpackChunkName: "pages/studyCenter/myFavor" */))
const _7bfe8db1 = () => interopDefault(import('..\\pages\\studyCenter\\myOrder.vue' /* webpackChunkName: "pages/studyCenter/myOrder" */))
const _59292bb5 = () => interopDefault(import('..\\pages\\studyCenter\\punchMrg.vue' /* webpackChunkName: "pages/studyCenter/punchMrg" */))
const _4fb5c9b9 = () => interopDefault(import('..\\pages\\teacherRecruit\\index.vue' /* webpackChunkName: "pages/teacherRecruit/index" */))
const _38e4f55a = () => interopDefault(import('..\\pages\\videoDetail\\index.vue' /* webpackChunkName: "pages/videoDetail/index" */))
const _8aee3b52 = () => interopDefault(import('..\\pages\\biunique\\paper.vue' /* webpackChunkName: "pages/biunique/paper" */))
const _ee223c24 = () => interopDefault(import('..\\pages\\biunique\\scientific.vue' /* webpackChunkName: "pages/biunique/scientific" */))
const _b519606a = () => interopDefault(import('..\\pages\\college\\newsList.vue' /* webpackChunkName: "pages/college/newsList" */))
const _77fa2d36 = () => interopDefault(import('..\\pages\\organizers\\courseData.vue' /* webpackChunkName: "pages/organizers/courseData" */))
const _f1ea0b62 = () => interopDefault(import('..\\pages\\organizers\\courseManagement.vue' /* webpackChunkName: "pages/organizers/courseManagement" */))
const _439240aa = () => interopDefault(import('..\\pages\\organizers\\financialManagement.vue' /* webpackChunkName: "pages/organizers/financialManagement" */))
const _80db3ea0 = () => interopDefault(import('..\\pages\\organizers\\marketManagement.vue' /* webpackChunkName: "pages/organizers/marketManagement" */))
const _2b66558a = () => interopDefault(import('..\\pages\\organizers\\myCollege.vue' /* webpackChunkName: "pages/organizers/myCollege" */))
const _481504bf = () => interopDefault(import('..\\pages\\organizers\\traineesManagement.vue' /* webpackChunkName: "pages/organizers/traineesManagement" */))
const _5a11b367 = () => interopDefault(import('..\\pages\\paper\\cnEnCoach.vue' /* webpackChunkName: "pages/paper/cnEnCoach" */))
const _0cb843fb = () => interopDefault(import('..\\pages\\paper\\coach.vue' /* webpackChunkName: "pages/paper/coach" */))
const _6cdb9202 = () => interopDefault(import('..\\pages\\paper\\conferenceCoach.vue' /* webpackChunkName: "pages/paper/conferenceCoach" */))
const _113c6ac8 = () => interopDefault(import('..\\pages\\paper\\coreCoach.vue' /* webpackChunkName: "pages/paper/coreCoach" */))
const _304bf1f0 = () => interopDefault(import('..\\pages\\paper\\graduateCoach.vue' /* webpackChunkName: "pages/paper/graduateCoach" */))
const _2083f38c = () => interopDefault(import('..\\pages\\paper\\result.vue' /* webpackChunkName: "pages/paper/result" */))
const _111a1fb0 = () => interopDefault(import('..\\pages\\paper\\sciCoach.vue' /* webpackChunkName: "pages/paper/sciCoach" */))
const _a8c36ada = () => interopDefault(import('..\\pages\\paper\\components\\Flow.vue' /* webpackChunkName: "pages/paper/components/Flow" */))
const _4bf5b59c = () => interopDefault(import('..\\pages\\paper\\components\\Header.vue' /* webpackChunkName: "pages/paper/components/Header" */))
const _5824ded7 = () => interopDefault(import('..\\pages\\paper\\components\\Intro.vue' /* webpackChunkName: "pages/paper/components/Intro" */))
const _49a22c4a = () => interopDefault(import('..\\pages\\paper\\components\\Scheme.vue' /* webpackChunkName: "pages/paper/components/Scheme" */))
const _5e6cd299 = () => interopDefault(import('..\\pages\\paper\\components\\School.vue' /* webpackChunkName: "pages/paper/components/School" */))
const _7fd0fd9d = () => interopDefault(import('..\\pages\\paper\\components\\Swiper.vue' /* webpackChunkName: "pages/paper/components/Swiper" */))
const _b634767a = () => interopDefault(import('..\\pages\\paper\\components\\Title.vue' /* webpackChunkName: "pages/paper/components/Title" */))
const _36aacd43 = () => interopDefault(import('..\\pages\\biunique\\paperApply\\_id.vue' /* webpackChunkName: "pages/biunique/paperApply/_id" */))
const _15964784 = () => interopDefault(import('..\\pages\\biunique\\paperCategoryDetail\\_id.vue' /* webpackChunkName: "pages/biunique/paperCategoryDetail/_id" */))
const _a87907cc = () => interopDefault(import('..\\pages\\biunique\\scientificApply\\_id.vue' /* webpackChunkName: "pages/biunique/scientificApply/_id" */))
const _1fe14ae6 = () => interopDefault(import('..\\pages\\biunique\\scientificCategoryDetail\\_id.vue' /* webpackChunkName: "pages/biunique/scientificCategoryDetail/_id" */))
const _312878a8 = () => interopDefault(import('..\\pages\\biunique\\subjectMatch\\_id.vue' /* webpackChunkName: "pages/biunique/subjectMatch/_id" */))
const _f3cd3a4a = () => interopDefault(import('..\\pages\\biunique\\subjectMatchDetail\\_id.vue' /* webpackChunkName: "pages/biunique/subjectMatchDetail/_id" */))
const _223e26e0 = () => interopDefault(import('..\\pages\\organizers\\couponManagement\\_id.vue' /* webpackChunkName: "pages/organizers/couponManagement/_id" */))
const _e9811d68 = () => interopDefault(import('..\\pages\\pay\\finish\\_id.vue' /* webpackChunkName: "pages/pay/finish/_id" */))
const _533093d1 = () => interopDefault(import('..\\pages\\courseDetail\\_id.vue' /* webpackChunkName: "pages/courseDetail/_id" */))
const _cabd939e = () => interopDefault(import('..\\pages\\live\\_id.vue' /* webpackChunkName: "pages/live/_id" */))
const _49c9902a = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _6f3f58d9 = () => interopDefault(import('..\\pages\\newsDetail\\_id.vue' /* webpackChunkName: "pages/newsDetail/_id" */))
const _a875b262 = () => interopDefault(import('..\\pages\\promoteApply\\_id.vue' /* webpackChunkName: "pages/promoteApply/_id" */))
const _445ed156 = () => interopDefault(import('..\\pages\\promoteDetail\\_id.vue' /* webpackChunkName: "pages/promoteDetail/_id" */))
const _31ef0c21 = () => interopDefault(import('..\\pages\\promoteQuestion\\_id.vue' /* webpackChunkName: "pages/promoteQuestion/_id" */))
const _855a7f0a = () => interopDefault(import('..\\pages\\videoDetail\\_id.vue' /* webpackChunkName: "pages/videoDetail/_id" */))
const _0ae4a1b5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/allCourse",
    component: _73714823,
    name: "allCourse"
  }, {
    path: "/college",
    component: _cf6fd3f0,
    name: "college"
  }, {
    path: "/news",
    component: _2d8f2542,
    name: "news"
  }, {
    path: "/promote",
    component: _00210a3a,
    name: "promote",
    children: [{
      path: "Introduce",
      component: _1527d928,
      name: "promote-Introduce"
    }, {
      path: "scientificBiunique",
      component: _39ded6f8,
      name: "promote-scientificBiunique"
    }, {
      path: "scientificGroup",
      component: _034e79fa,
      name: "promote-scientificGroup"
    }]
  }, {
    path: "/StartClass",
    component: _013e2d83,
    name: "StartClass"
  }, {
    path: "/studyCenter",
    component: _4bbc2bbe,
    name: "studyCenter",
    children: [{
      path: "biuniqueOrder",
      component: _d5cf8e76,
      name: "studyCenter-biuniqueOrder"
    }, {
      path: "lastStudy",
      component: _3ea7517c,
      name: "studyCenter-lastStudy"
    }, {
      path: "myCourse",
      component: _6dd4bbc8,
      name: "studyCenter-myCourse"
    }, {
      path: "myFavor",
      component: _28e34ca1,
      name: "studyCenter-myFavor"
    }, {
      path: "myOrder",
      component: _7bfe8db1,
      name: "studyCenter-myOrder"
    }, {
      path: "punchMrg",
      component: _59292bb5,
      name: "studyCenter-punchMrg"
    }]
  }, {
    path: "/teacherRecruit",
    component: _4fb5c9b9,
    name: "teacherRecruit"
  }, {
    path: "/videoDetail",
    component: _38e4f55a,
    name: "videoDetail"
  }, {
    path: "/biunique/paper",
    component: _8aee3b52,
    name: "biunique-paper"
  }, {
    path: "/biunique/scientific",
    component: _ee223c24,
    name: "biunique-scientific"
  }, {
    path: "/college/newsList",
    component: _b519606a,
    name: "college-newsList"
  }, {
    path: "/organizers/courseData",
    component: _77fa2d36,
    name: "organizers-courseData"
  }, {
    path: "/organizers/courseManagement",
    component: _f1ea0b62,
    name: "organizers-courseManagement"
  }, {
    path: "/organizers/financialManagement",
    component: _439240aa,
    name: "organizers-financialManagement"
  }, {
    path: "/organizers/marketManagement",
    component: _80db3ea0,
    name: "organizers-marketManagement"
  }, {
    path: "/organizers/myCollege",
    component: _2b66558a,
    name: "organizers-myCollege"
  }, {
    path: "/organizers/traineesManagement",
    component: _481504bf,
    name: "organizers-traineesManagement"
  }, {
    path: "/paper/cnEnCoach",
    component: _5a11b367,
    name: "paper-cnEnCoach"
  }, {
    path: "/paper/coach",
    component: _0cb843fb,
    name: "paper-coach"
  }, {
    path: "/paper/conferenceCoach",
    component: _6cdb9202,
    name: "paper-conferenceCoach"
  }, {
    path: "/paper/coreCoach",
    component: _113c6ac8,
    name: "paper-coreCoach"
  }, {
    path: "/paper/graduateCoach",
    component: _304bf1f0,
    name: "paper-graduateCoach"
  }, {
    path: "/paper/result",
    component: _2083f38c,
    name: "paper-result"
  }, {
    path: "/paper/sciCoach",
    component: _111a1fb0,
    name: "paper-sciCoach"
  }, {
    path: "/paper/components/Flow",
    component: _a8c36ada,
    name: "paper-components-Flow"
  }, {
    path: "/paper/components/Header",
    component: _4bf5b59c,
    name: "paper-components-Header"
  }, {
    path: "/paper/components/Intro",
    component: _5824ded7,
    name: "paper-components-Intro"
  }, {
    path: "/paper/components/Scheme",
    component: _49a22c4a,
    name: "paper-components-Scheme"
  }, {
    path: "/paper/components/School",
    component: _5e6cd299,
    name: "paper-components-School"
  }, {
    path: "/paper/components/Swiper",
    component: _7fd0fd9d,
    name: "paper-components-Swiper"
  }, {
    path: "/paper/components/Title",
    component: _b634767a,
    name: "paper-components-Title"
  }, {
    path: "/biunique/paperApply/:id?",
    component: _36aacd43,
    name: "biunique-paperApply-id"
  }, {
    path: "/biunique/paperCategoryDetail/:id?",
    component: _15964784,
    name: "biunique-paperCategoryDetail-id"
  }, {
    path: "/biunique/scientificApply/:id?",
    component: _a87907cc,
    name: "biunique-scientificApply-id"
  }, {
    path: "/biunique/scientificCategoryDetail/:id?",
    component: _1fe14ae6,
    name: "biunique-scientificCategoryDetail-id"
  }, {
    path: "/biunique/subjectMatch/:id?",
    component: _312878a8,
    name: "biunique-subjectMatch-id"
  }, {
    path: "/biunique/subjectMatchDetail/:id?",
    component: _f3cd3a4a,
    name: "biunique-subjectMatchDetail-id"
  }, {
    path: "/organizers/couponManagement/:id?",
    component: _223e26e0,
    name: "organizers-couponManagement-id"
  }, {
    path: "/pay/finish/:id?",
    component: _e9811d68,
    name: "pay-finish-id"
  }, {
    path: "/courseDetail/:id?",
    component: _533093d1,
    name: "courseDetail-id"
  }, {
    path: "/live/:id?",
    component: _cabd939e,
    name: "live-id"
  }, {
    path: "/news/:id",
    component: _49c9902a,
    name: "news-id"
  }, {
    path: "/newsDetail/:id?",
    component: _6f3f58d9,
    name: "newsDetail-id"
  }, {
    path: "/promoteApply/:id?",
    component: _a875b262,
    name: "promoteApply-id"
  }, {
    path: "/promoteDetail/:id?",
    component: _445ed156,
    name: "promoteDetail-id"
  }, {
    path: "/promoteQuestion/:id?",
    component: _31ef0c21,
    name: "promoteQuestion-id"
  }, {
    path: "/videoDetail/:id",
    component: _855a7f0a,
    name: "videoDetail-id"
  }, {
    path: "/",
    component: _0ae4a1b5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
