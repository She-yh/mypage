<template>
  <section id="photoCard" @click="toLink">
    <div class="cardContainer">
      <div id="cardPhoto" :style="{'background-image':'url('+introPic+')'}">
        <i :class="introIcon" id="introIcon" aria-hidden="true"></i>
      </div>
      <div id="cardIntro">
        <div id="introTitle" v-text="introTitle"></div>
        <div id="introContent" v-text="introContent"></div>
        <div id="introSub" v-text="introSub"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PhotoCard",
  props:{
    introIcon:String,
    introLink:String,
    introPic:String,
    introTitle:String,
    introContent:String,
    introSub:String
  },
  methods:{
    toLink(){
      window.open(this.introLink);
    }
  }
}
</script>

<style scoped>

</style>