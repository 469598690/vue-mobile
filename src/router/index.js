import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import main from '@/views/main/index.vue'
Vue.use(Router)

let router = new Router({
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login,
      meta: {
        title: '登录'
      }
    },
  
    
  
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        title: '应用首页'
      }
    }
  ]
})

let indexScrollTop = 0
router.beforeEach((route, redirect, next) => {
  console.log(route)
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})

export default router
