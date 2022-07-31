<template>
  <div>
    <history-card :showCard="showCard" @changeShowCard="changeShowCard"></history-card>
    <menu-list></menu-list>
    <home-list :showCard="showCard"></home-list>
    <About></About>
    <Photo></Photo>
    <picbar></picbar>
    <Comments></Comments>
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
    HistoryCard,
    HomeList,
    MenuList,
    Photo,
    About,
    Picbar,
    Comments
  }
}
</script>
<style  scoped>
@import '../../assets/css/homepage.css'

</style>
