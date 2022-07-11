<template>
  <div id="app">
    <history-card :showCard="showCard" @changeShowCard="changeShowCard"></history-card>
    <Topbar @changeLogin="changeLogin"></Topbar>
    <transition name="el-fade-in">
      <login v-show="login" @changeLogin="changeLogin"> </login>
    </transition>
    <Menu></Menu>
    <Index :showCard="showCard"></Index>
    <About></About>
    <Photo></Photo>
    <picbar></picbar>
    <Comments></Comments>
    <dark-light></dark-light>
    <Footer></Footer>
  </div>
</template>
<script>
import Index from "@/components/Index";
import Photo from "@/components/Photo";
import About from "@/components/About";
import Topbar from "@/components/Topbar";
import Menu from "@/components/Menu";
import Picbar from "@/components/Picbar";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";
import HistoryCard from "./components/HistoryCard";
import DarkLight from "./components/DarkLight";
import Login from "./components/Login";
import "./assets/js/index";
export default {
  name: 'App',
  data(){
    return{
      showCard:false,
      login:false,
    }
  },
  methods:{
    changeLogin:function(data){
      this.login=data;
    },
    changeShowCard:function (data) {
      this.showCard=data;
    },
  },
  components: {
    Topbar,
    Login,
    DarkLight,
    HistoryCard,
    Index,
    Menu,
    Photo,
    About,
    Picbar,
    Comments,
    Footer
  }
}
</script>
