<template>
  <section id="HistoryCard">
    <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn" appear
                appear-active-class="fadeIn">
      <div id="HisCover" v-if="showCard"></div>
    </transition>
    <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn" appear
                appear-active-class="fadeIn">
      <div id="HisCover2" v-if="showCard"></div>
    </transition>
    <transition name="history-classes-transition" enter-active-class="history-appear-active-class"
                leave-active-class="animated zoomOut" appear appear-active-class="history-appear-active-class">
      <div id="HisContainer" v-if="showCard">
        <div id="back-s">
          S
        </div>
        <div id="CloseContainer">
          <i class="fa fa-minus" aria-hidden="true" @mouseenter="smaller" @mouseleave="bigger"
             @click="close_card"></i>
        </div>
        <div id="TitleContainer">
          <h2 id="HisTitle">
            欢 迎 访 问
          </h2>
          <div class="welcome visit">www.sheyh.com</div>
          <span class="welcome">欢迎访问<a href="https://www.sheyuanhang.com">我的个人网站</a></span>
          <span class="welcome">火花来自<a href="https://www.maorx.com">Maorx</a></span>
          <span class="welcome">全部代码由我个人完成</span>
          <span></span>
        </div>
        <div id="HisItems">
          <div class="Items" v-for="(items,index) in histories" :key="index">
            <span class="HisTime">- {{ items.time }}</span>
            <span class="HisContent" style="margin-left: 20px">{{ items.content }}</span>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "HistoryCard",
  props: {
    showCard: Boolean
  },
  data() {
    return {
      histories: [
        {time: "2021.8.23", content: "第一版告终"},
        {time: "2021.8.05", content: "词云小程序"},
        {time: "2021.7.23", content: "更新豆瓣TOP250，解决bug"},
        {time: "2021.7.16", content: "增加欢迎页，夜间模式"},
        {time: "2021.6.14", content: "增加评论区，前后端交互"},
        {time: "2021.3.24", content: "网站第一次运行在服务器上"},
        {time: "2020.11.20", content: "购买域名、服务器"},
        {time: "2020.11.11", content: "结束电赛，决定开始学习前端"}
      ]
    }
  },
  methods: {
    smaller: function () {
      document.getElementById("HisContainer").style.transform = "scale(99%)";
    },
    bigger: function () {
      document.getElementById("HisContainer").style.transform = "scale(1)";
    },
    close_card: function () {
      this.$emit("changeShowCard", false);
    }
  },
  watch: {
    showCard() {
      if (this.showCard)
        $("body").css("overflow", "hidden");
      else
        $("body").css("overflow", "scroll");
    },
  },
  beforeMount() {
    if (window.localStorage.getItem("ShowCard") == null) {
      window.localStorage.setItem("ShowCard", 1);
      this.$emit("changeShowCard", true);
      $("body").css("overflow", "hidden");
    } else {
      this.$emit("changeShowCard", false)
    }
  }
}
</script>

<style scoped>


</style>