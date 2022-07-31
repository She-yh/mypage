import Vue from 'vue'
import VueRouter from 'vue-router'
import loginDialog from '@/utils/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../pages/user/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.name === 'user') {
    loginDialog.openLogin()
    next(false)
  } else {
    next()
  }
})
export default router
