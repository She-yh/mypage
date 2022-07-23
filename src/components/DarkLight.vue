<template>
  <div>
    <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
      <svg @click="changetheme" t="1626423140021" class="icon DarkLight" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2638" width="16" height="16" v-if="theme">
        <path d="M512 511.4m-212 0a212 212 0 1 0 424 0 212 212 0 1 0-424 0Z" fill="#FFF0C2" p-id="2639"></path>
        <path d="M512 511.4m-198.3 0a198.3 198.3 0 1 0 396.6 0 198.3 198.3 0 1 0-396.6 0Z" fill="#FFB948"
              p-id="2640"></path>
        <path
            d="M511.7 130.2c12.9-0.2 24.2 11.3 24.5 24.3l0.4 79.6c0.2 12.9-11.3 24.2-24.3 24.5-12.9 0.2-24.2-11.3-24.5-24.3l-0.4-79.6c0.9-14.9 11.4-24.3 24.3-24.5zM901.5 510c-0.2 12.9-9.6 23.4-24.5 24.3l-79.6-0.4c-12.9-0.2-24.5-11.5-24.3-24.5 0.2-12.9 11.5-24.5 24.5-24.3l79.6 0.4c12.9 0.3 24.5 11.6 24.3 24.5zM250.9 510c-0.2 12.9-9.6 23.4-24.5 24.3l-79.6-0.4c-12.9-0.2-24.5-11.5-24.3-24.5 0.2-12.9 11.5-24.5 24.5-24.3l79.6 0.4c12.9 0.3 24.5 11.6 24.3 24.5zM512.3 893.8c-12.9 0.2-24.2-11.3-24.5-24.3l-0.4-79.6c-0.2-12.9 11.3-24.2 24.3-24.5 12.9-0.2 24.2 11.3 24.5 24.3l0.4 79.6c-0.9 14.9-11.4 24.3-24.3 24.5z"
            fill="#FFB948" p-id="2641"></path>
        <path
            d="M781.2 242.3c9.3 9 9.1 25.1 0.1 34.5l-56 56.5c-9 9.3-25.1 9.1-34.5 0.1-9.3-9-9.1-25.1-0.1-34.5l56-56.5c11.1-9.9 25.1-9.1 34.5-0.1zM788.2 786.5c-9.3 9-23.3 9.8-34.5-0.1l-56-56.5c-9-9.3-9.2-25.5 0.1-34.5 9.3-9 25.5-9.2 34.5 0.1l56 56.5c9 9.3 9.2 25.5-0.1 34.5zM328.1 326.4c-9.3 9-23.3 9.8-34.5-0.1l-56-56.5c-9-9.3-9.2-25.5 0.1-34.5 9.3-9 25.5-9.2 34.5 0.1l56 56.5c9 9.4 9.3 25.5-0.1 34.5zM241.6 782.6c-9.3-9-9.1-25.1-0.1-34.5l56-56.5c9-9.3 25.1-9.1 34.5-0.1 9.3 9 9.1 25.1 0.1 34.5l-56 56.5c-11.1 9.9-25.2 9.1-34.5 0.1z"
            fill="#FFB948" p-id="2642"></path>
      </svg>
    </transition>
    <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
      <svg @click="changetheme" t="1626423266048" class="icon DarkLight" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="3725" width="16" height="16" v-if="!theme">
        <path
            d="M565 200.4c25.6 44.6 40.4 96.2 40.4 151.3 0 167.9-136.1 304-304 304-22.9 0-45.2-2.6-66.7-7.4C284.5 760.7 397 839.2 527.8 839.2c177 0 320.5-143.5 320.5-320.5 0-164.4-123.8-299.8-283.3-318.3zM312.9 243.6h-39.2v-39.2c0-10.8-8.8-19.6-19.6-19.6s-19.6 8.8-19.6 19.6v39.2h-39.2c-10.8 0-19.6 8.8-19.6 19.6s8.8 19.6 19.6 19.6h39.2V322c0 10.8 8.8 19.6 19.6 19.6s19.6-8.8 19.6-19.6v-39.2h39.2c10.8 0 19.6-8.8 19.6-19.6s-8.8-19.6-19.6-19.6z"
            fill="#FFF0C2" p-id="3726"></path>
        <path
            d="M306.9 245.6h-35.2v-35.2c0-9.7-7.9-17.6-17.6-17.6-9.7 0-17.6 7.9-17.6 17.6v35.2h-35.2c-9.7 0-17.6 7.9-17.6 17.6 0 9.7 7.9 17.6 17.6 17.6h35.2V316c0 9.7 7.9 17.6 17.6 17.6 9.7 0 17.6-7.9 17.6-17.6v-35.2h35.2c9.7 0 17.6-7.9 17.6-17.6 0-9.7-7.9-17.6-17.6-17.6z"
            fill="#FFC445" p-id="3727"></path>
        <path
            d="M427.8 475.3h-27.5v-27.5c0-7.6-6.2-13.8-13.8-13.8-7.6 0-13.8 6.2-13.8 13.8v27.5h-27.5c-7.6 0-13.8 6.2-13.8 13.8 0 7.6 6.2 13.8 13.8 13.8h27.5v27.5c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8v-27.5h27.5c7.6 0 13.8-6.2 13.8-13.8 0-7.6-6.2-13.8-13.8-13.8z"
            fill="#FFF0C2" p-id="3728"></path>
        <path
            d="M423.6 476.7h-24.7V452c0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4v24.7h-24.7c-6.8 0-12.4 5.5-12.4 12.4 0 6.8 5.5 12.4 12.4 12.4h24.7v24.7c0 6.8 5.5 12.4 12.4 12.4 6.8 0 12.4-5.5 12.4-12.4v-24.7h24.7c6.8 0 12.4-5.5 12.4-12.4 0-6.8-5.5-12.4-12.4-12.4z"
            fill="#FFC445" p-id="3729"></path>
        <path
            d="M563.4 223c23.8 41.4 37.5 89.4 37.5 140.6 0 156-126.5 282.5-282.5 282.5-21.3 0-42-2.4-62-6.9 46.3 104.5 150.8 177.4 272.4 177.4 164.5 0 297.9-133.4 297.9-297.9 0-152.7-115.1-278.6-263.3-295.7z"
            fill="#FFB948" p-id="3730"></path>
      </svg>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DarkLight',
  data() {
    return {
      darkback1: 'rgb(43,43,43)',
      darkback2: 'rgb(60,63,65)',
      darktext: 'rgb(233,245,251)',
      darkcomments: 'rgb(35,37,39)',
      lightback1: 'rgb(245,245,245)',
      lightback2: 'rgb(255,255,255)',
      lighttext: 'rgb(83,85,86)',
      lightcomments: 'rgb(255,255,255)',
      darktrans: 'rgba(60,63,65,0)',
      lighttrans: 'rgba(255,255,255,0)',
    };
  },
  computed: { ...mapState(['theme']) },
  methods: {
    ...mapMutations(['changeTheme']),
    changetheme() {
      if (this.theme) {
        document.documentElement.style.setProperty('--background-color1', this.lightback1);
        document.documentElement.style.setProperty('--background-color2', this.lightback2);
        document.documentElement.style.setProperty('--text-color', this.lighttext);
        document.documentElement.style.setProperty('--comments-line-back-color', this.lightcomments);
        document.documentElement.style.setProperty('--trans-color', this.lighttrans);
        this.changeTheme(false);
      } else {
        document.documentElement.style.setProperty('--background-color1', this.darkback1);
        document.documentElement.style.setProperty('--background-color2', this.darkback2);
        document.documentElement.style.setProperty('--text-color', this.darktext);
        document.documentElement.style.setProperty('--comments-line-back-color', this.darkcomments);
        document.documentElement.style.setProperty('--trans-color', this.darktrans);
        this.changeTheme(true);
      }
    },
  },
};
</script>

<style scoped>

</style>
