<template>
  <section id="picbar">
    <h2 id="pic-title-container">照片墙</h2>
    <p style="margin-bottom: 50px">左右拖动查看图片</p>
    <div class="picbar-container">
      <swiper ref="mySwiper" :options="swiperOptions"
              :space-between="50">
        <swiper-slide v-for="(item,index) in images" :key=index>
          <div class="swiper-pic" :style="{'background-image':'url('+item+')'}">
          </div>
          <div class="swiper-time">
            {{ list[index].time }}
          </div>
          <div class="swiper-text">
            {{ list[index].discribe }}
          </div>
        </swiper-slide>
      </swiper>
      <div class="mask-left"></div>
      <div class="mask-right"></div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'PicPanel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      changeDirection: true,
      list: [{
        time: '2014.00.00',
        discribe: '全家福'
      }, {
        time: '2012.06.00',
        discribe: '从万盛小学毕业'
      }, {
        time: '2016.06.00',
        discribe: '从重庆二外初中毕业'
      }, {
        time: '2019.06.00',
        discribe: '从重庆二外高中毕业'
      }],
      swiperOptions: {
        slidesPerView: 'auto',
        freeMode: true,
        loop: true
      },
      images: []
    }
  },
  methods: {
    getimgurl () {
      const imgurl = []
      for (let i = 0; i < 4; i++) {
        // imgurl[i] = process.env.NODE_ENV === 'production' ? ("https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/picbar-" + i + ".jpg") : "";
        imgurl[i] = 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/picbar-' + i + '.jpg'
      }
      this.images = imgurl
    }
  },
  beforeMount () {
    this.getimgurl()
  }
}
</script>
