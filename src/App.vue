<template>
  <div id="app">
    <topbar-nav></topbar-nav>
    <router-view></router-view>
    <footer-panel></footer-panel>

  </div>
</template>
<script>
import './assets/js/index'
import TopbarNav from '@/components/Topbar'
import FooterPanel from '@/components/Footer'

export default {
  name: 'App',
  components: {
    TopbarNav,
    FooterPanel

  },
  methods: {
  }
}
</script>
