<template>
  <section id="homepage">
    <div id="bg2"></div>
    <transition appear appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div id="bg1" v-if="theme"><div class="homepage-face" v-if="theme"></div></div>
    </transition>

    <div id="content">
      <h2 class="animated fadeIn" @click="changeShowCard" style="cursor: pointer">目录</h2>
      <h3 class="animated fadeIn">特别鸣谢<span v-if="!theme">胡宇</span><span v-if="theme">刘喆嘉</span>提供的摄影作品</h3>
      <ul>
        <a href="#about">
          <li v-html="'关\u3000于'"></li>
        </a>
        <a href="#photo">
          <li v-html="'作\u3000品'"></li>
        </a>
        <a href="#picbar">
          <li v-html="'照\u3000片'"></li>
        </a>
        <a href="#comments">
          <li v-html="'留\u3000言'"></li>
        </a>
      </ul>
    </div>
    <a class="el-icon-arrow-down" aria-hidden="true" href="#about"></a>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeList',
  computed: { ...mapState(['theme']) },
  props: {
    showCard: Boolean
  },
  methods: {
    changeShowCard: function () {
      this.$emit('changeShowCard', true)
    }
  }
}
</script>
