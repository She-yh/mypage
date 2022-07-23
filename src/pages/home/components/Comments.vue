/* eslint-disable vue/no-deprecated-v-on-native-modifier */
/* eslint-disable vue/no-deprecated-v-on-native-modifier */
/* eslint-disable vue/no-deprecated-v-on-native-modifier */
<template>
  <section id="comments">
    <div class="page-header container">
      <h2>留言区</h2>
      <p style="margin-top: 10px">评论公开，注意言辞= =</p>
    </div>

    <div id="comment-container">
      <div id="showcomments-container">
        <CommentLine v-for="(item,index) in this.comments_list"
        :comments="item"
        :time="time_list[index]"
                     :name="name_list[index]"
                     :key="id_list[index]"
                     @click.native="delete_comments(id_list[index])"
        />
      </div>
      <div id="comment-row">
        <div id="commenter-and-check">
          <div id="commenter" class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
            <input id="commenter-input" type="text" alt="wowowow" placeholder="评论人">
          </div>
          <div id="com-content" class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
            <textarea name="" id="comment-input"></textarea>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" id="check" @click="add_comments">
            评 论
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import CommentLine from './CommentLine'
import $ from 'jquery'
export default {
  name: 'CommentContainer',
  components: { CommentLine },
  data () {
    return {
      id_list: [],
      name_list: [],
      comments_list: [],
      time_list: []
    }
  },
  methods: {
    delete_comments (index) {
      const password = prompt('您的操作将删除评论', '请输入管理员密码')
      const params = new URLSearchParams()
      params.append('id', index)
      console.log(params)
      if (password === '1123') {
        axios.delete(`${process.env.VUE_APP_BASE_URL}api/comments`, params).then((response) => {
          console.log(response)
        }).then((error) => {
          console.log(error)
        })
        alert('删除成功，请刷新页面')
      } else {
        alert('密码错误')
      }
    },
    get_comments () {
      axios.get(`${process.env.VUE_APP_BASE_URL}api/comments`).then((response) => {
        for (const cur of response.data) {
          this.id_list.unshift(cur.id)
          this.name_list.unshift(cur.name)
          this.comments_list.unshift(cur.comments)
          this.time_list.unshift(cur.time.replaceAll('-', '/').replace(/T(.)*/, ''))
        }
      }, (err) => {
        console.log(err)
      })
    },
    add_comments () {
      const comment = $('#comment-input').val()
      const commenter = $('#commenter-input').val()
      if (commenter.match(/^[ ]*$/) || comment.match(/^[ ]*$/)) {
        alert('请检查是否输入完整')
        return
      }
      const params = new URLSearchParams()
      params.append('comment', comment)
      params.append('commenter', commenter)
      axios.post(`${process.env.VUE_APP_BASE_URL}api/comments`, params).then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
      alert('评论成功,请刷新页面查看！')
    }
  },
  beforeMount () {
    this.get_comments()
  }
}
</script>
