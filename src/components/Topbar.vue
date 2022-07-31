<template>
  <section id="topbar">
    <nav id="topbar-container">
      <span id="topbar-left">
        <span id="topbar-logo"></span>
        <span id="topbar-text">
          SHEYH.CN
        </span>
      </span>

      <div id="topbar-right">
        <i id="toggle-button" class="el-icon-s-unfold" aria-hidden="true" @click="toggleBar" v-if="showToggle"></i>
        <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
          <ul id="right-link">
            <a class="topbar-link" href="#homepage">首页</a>
            <a class="topbar-link" href="#about">关于</a>
            <a class="topbar-link" href="#photo">作品</a>
            <a class="topbar-link" href="#picbar">照片</a>
            <a class="topbar-link" href="#comments">留言</a>
            <a class="topbar-link" v-if="haveToken" @click="openLogin">登录</a>
            <router-link class="topbar-link" v-else to="user">后台</router-link>
          </ul>
        </transition>
      </div>
    </nav>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Topbar-nav',
  data () {
    return {
      showToggle: true,
      haveToken: false
    }
  },
  computed: { ...mapState(['showBar']) },
  mounted () {
    this.haveToken = !localStorage.getItem('token')
  },
  methods: {
    ...mapMutations(['changeShowBar']),
    toggleBar () {
      if (document.body.clientWidth < 780) {
        this.changeShowBar(!this.showBar)
      }
    },
    openLogin () {
      this.$login.openLogin()
    }
  },
  beforeMount () {
    if (document.body.clientWidth > 780) {
      this.showToggle = false
    }
  }
}
</script>
