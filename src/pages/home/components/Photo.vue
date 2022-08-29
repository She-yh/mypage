<template>
  <section id="photo">
    <h2 id="photo-title">作品</h2>
    <div class="photoContainer">
      <photo-card class="clearfix" v-for="(item,index) in workList" :intro-pic="item.picSrc" :introTitle="item.workTitle"
                  :intro-content="item.workContent" :intro-icon="item.workicon"
                  :intro-sub="item.workSub" :intro-link="item.link" :key="index">
      </photo-card>
    </div>
  </section>
</template>

<script>
import PhotoCard from './PhotoCard'

export default {
  name: 'photoContainer',
  components: { PhotoCard },
  data () {
    return {
      workList: [
        {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/crawler.png',
          link: '/crawler',
          workTitle: '豆瓣TOP250',
          workContent: '一切的开始',
          workSub: 'Python bs4 SQLite Echarts'
        },
        {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/julia.png',
          link: '/julia',
          workTitle: 'Julia分形',
          workContent: '混沌的美',
          workSub: 'Vuex Router stm32'
        }, {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/parrot.png',
          link: '/Parrot',
          workTitle: 'Parrot',
          workContent: '3D秀',
          workSub: 'Three.js'
        },
        {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/word_icon.png',
          link: '/wordCloud',
          workTitle: '微信词云',
          workContent: '"微信搜索S词云"',
          workSub: '微信小程序 uni-app'
        },
        {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/donuts.png',
          link: '/donuts',
          workTitle: 'Donuts',
          workContent: '用blender做的一个甜甜圈',
          workSub: 'Blender Three.js'
        },
        {
          // picSrc: "https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/music.jpg",
          workicon: 'el-icon-headset',
          link: '/music',
          workTitle: '网页音乐播放器',
          workContent: '学习Axios',
          workSub: 'Vue Axios'
        },
        {
          picSrc: 'https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/wave.jpg',
          link: ' ',
          workTitle: '信号发生器',
          workContent: '唯一有记录的电赛项目',
          workSub: 'stm32 嵌入式'
        }
      ]
    }
  }
}
</script>
