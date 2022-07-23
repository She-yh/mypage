<template>
  <div>
    <history-card :showCard="showCard" @changeShowCard="changeShowCard"></history-card>
    <transition name="el-fade-in">
      <login v-show="$store.state.showLogin"> </login>
    </transition>
    <menu-list></menu-list>
    <home-list :showCard="showCard"></home-list>
    <About></About>
    <Photo></Photo>
    <picbar></picbar>
    <Comments></Comments>
    <dark-light></dark-light>
  </div>
</template>
<script>
import HomeList from './components/HomeList'
import Photo from './components/Photo'
import About from './components/About'
import MenuList from './components/Menu'
import Picbar from './components/Picbar'
import Comments from './components/Comments'
import HistoryCard from './components/HistoryCard'
import Login from './components/Login'
import DarkLight from '@/components/DarkLight.vue'
import '@/assets/js/index'

export default {
  name: 'HomePage',
  data () {
    return {
      showCard: false
    }
  },
  beforeMount () {
  },
  methods: {
    changeLogin (data) {
      console.log('login')
      this.login = data
    },
    changeShowCard (data) {
      this.showCard = data
    }
  },
  components: {
    Login,
    HistoryCard,
    HomeList,
    MenuList,
    Photo,
    About,
    Picbar,
    Comments,
    DarkLight
  }
}
</script>
<style  scoped>
@import '../../assets/css/homepage.css'

</style>
