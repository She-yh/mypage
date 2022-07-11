<template>
  <section>
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <ul id="menu" v-show="showBar">
        <a class="menu-link" href="#homepage">首页</a>
        <a class="menu-link" href="#about">关于</a>
        <a class="menu-link" href="#photo">作品</a>
        <a class="menu-link" href="#picbar">照片</a>
        <a class="menu-link" href="#comments">留言</a>
        <a class="menu-link" href="/login">登录</a>
      </ul>
    </transition>
    <transition
      appear
      appear-active-class="animated fadeIn"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
    <div id="menu-face" @click="cancelFace" v-show="showBar"></div>
    </transition>
  </section>
</template>

<script>
import $ from "jquery";
import { mapState,mapMutations} from "vuex";
export default {
  name: "Menu",
  data() {
    return {};
  },
  computed: { ...mapState(["showBar"]) },
  methods: {
      ...mapMutations(['changeShowBar']),
    cancelFace() {
      if (document.body.clientWidth < 780) {
        this.changeShowBar(false);
        $("body").css("overflow", "scroll");
      }
    },
    anchorPoint(idName) {
      document.querySelector(idName).scrollIntoView(true);
    },
  },
  beforeMount() {
    if (window.screen.width < 780) {
      this.changeShowBar(false);
    }
  },
};
</script>