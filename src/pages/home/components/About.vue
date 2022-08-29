<template>
    <section id="about">
        <div class="container about-container">
            <p class="p-head" data-aos="fade-up" data-aos-anchor="#about">关于我</p>
            <p class="p-line" data-aos="fade-up" data-aos-anchor="#about"/>
            <p class="p-icon" data-aos="fade-up" data-aos-anchor="#about">
                <i class="el-icon-location-outline" aria-hidden="true" title="重庆市万盛区" @click="copy($event)"/>
                <i class="el-icon-mobile-phone" aria-hidden="true" title="965598930" @click="copy($event)"/>
                <i class="el-icon-message" aria-hidden="true" title="965598930@qq.com" @click="copy($event)"/>
            </p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">我是佘远航</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">很高兴在这里遇见你</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">我在重庆第二外国语中学度过美好了的六年</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">现就读于重庆邮电大学通信工程专业</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">我喜欢各种运动，也喜欢所有有趣的事情</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">高中开始自学OI,大学开始做嵌入式</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">后来我想,能有自己的网站很酷</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">以此网站献给我自己</p>
            <p data-aos="fade-up" data-aos-anchor="#about" class="about-p">还有一路上的每一个人</p>
        </div>
    </section>
</template>
<script>
export default {
  name: 'aboutMe',
  methods: {
    copy (e) {
      const tag = document.createElement('input')
      tag.setAttribute('id', 'cp_hgz_input')
      tag.value = e.target.title
      document.getElementsByTagName('body')[0].appendChild(tag)
      document.getElementById('cp_hgz_input').select()
      document.execCommand('copy')
      document.getElementById('cp_hgz_input').remove()
      alert('已复制到剪切板')
    }
  }
}
</script>
