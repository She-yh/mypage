<template>
  <div id="app">
    <topbar-nav></topbar-nav>
    <router-view></router-view>
    <footer-panel></footer-panel>
    <dark-light></dark-light>
  </div>
</template>
<script>
import './assets/js/index'
import TopbarNav from '@/components/Topbar'
import FooterPanel from '@/components/Footer'
import DarkLight from './components/DarkLight.vue'
export default {
  name: 'App',
  components: {
    TopbarNav,
    FooterPanel,
    DarkLight
  },
  methods: {
  }

}
</script>
