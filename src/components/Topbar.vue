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
        <i id="toggle-button" class="fa fa-bars" aria-hidden="true" @click="toggleBar" v-if="showToggle"></i>
        <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
          <ul id="right-link">
            <a class="topbar-link" href="#homepage">首页</a>
            <a class="topbar-link" href="#about">关于</a>
            <a class="topbar-link" href="#photo">作品</a>
            <a class="topbar-link" href="#picbar">照片</a>
            <a class="topbar-link" href="#comments">留言</a>
            <a class="topbar-link" @click="openlogin">登录</a>
          </ul>
        </transition>
      </div>
    </nav>
  </section>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default { 
  name: "Topbar",
  data() {
    return {
      'showToggle' : true
    }
  },
  computed: { ...mapState(["showBar"]) },
  methods: {
    ...mapMutations(['changeShowBar']),
    toggleBar() {
      if (document.body.clientWidth < 780) {
        this.changeShowBar(!this.showBar);
      }
    },
    openlogin(){
      console.log("openlogin");
      this.$emit('changeLogin',true);
    }
  },
  beforeMount(){
      if (document.body.clientWidth > 780) {
        this.showToggle=false;
      }
  }
}
</script>