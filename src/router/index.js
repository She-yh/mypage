import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../pages/user/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // store.commit('getToken')
//   // const token = store.state.user.token
//   // if (!token && to.name === 'user') {
//   //   next({ name: 'login' })
//   // } else {
//   //   next()
//   // }
// })
export default router
