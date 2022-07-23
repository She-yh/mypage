import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import store from './store/store'
import 'aos/dist/aos.css'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.css'
import './assets/css/about.css'
import './assets/css/base.css'
import './assets/css/footer.css'
import './assets/css/DarkLight.css'
import './assets/css/index.css'
import './assets/css/menu.css'
import './assets/css/photo.css'
import './assets/css/picbar.css'
import './assets/css/reset.css'
import './assets/css/comments.css'
import './assets/css/commentline.css'
import './assets/css/historycard.css'
import './assets/css/PhotoCard.css'
import router from './router/index'
// import router from './router/index'
window.$ = $
AOS.init({
  duration: 5000
})
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  render: (h) => h(App),
  $,
  router,
  store

}).$mount('#app')
console.log('%c -------------------------------------------\x0a丨\x0a' +
        '丨佘远航的个人网站\x0a丨\x0a' +
        '丨© 2021 Yuanhang She. All Rights Reserved.\x0a丨\x0a' +
        ' -------------------------------------------', 'color:rgb(125, 170, 192)')
// 锚点跳转滑动效果
$(() => {
  // 锚点跳转滑动效果
  $('a[href*=\\#],area[href*=\\#]').on('click', function () {
    console.log(this.pathname)
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let $target = $(this.hash)
      $target = ($target.length && $target) || $(`[name=${this.hash.slice(1)}]`)
      if ($target.length) {
        const targetOffset = $target.offset().top
        $('html,body').animate(
          {
            scrollTop: targetOffset
          },
          700
        )
        return false
      }
    }
  })
})
function preload () {
  const bg1 = new Image()
  bg1.src = 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/bc.jpg'
}
window.onload = function () {
  const bg2 = document.getElementById('bg2')
  bg2.style.transform = 'scale(1)'
  bg2.style.opacity = '1'
  preload()
}
// var _hmt = _hmt || [];
// window._hmt = _hmt; // 修改为window 全局变量
// (function () {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?a28d0055e73d6dc9af99438484929b06";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })();
