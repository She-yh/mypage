<template>
  <section id="comments">
    <div class="page-header container">
      <h2>留言区</h2>
      <p style="margin-top: 10px">评论公开，注意言辞= =</p>
    </div>

    <div id="comment-container">
      <div id="showcomments-container">
        <CommentLine v-for="(item,index) in this.comments_list" :comments="item" :time="time_list[index]"
                     :name="name_list[index]" :key="index" data-aos="flip-up"
                     :data-aos-delay="index*100"
                     data-aos-anchor="#comments"
                     @click.native="delete_comments(index)"
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
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" id="check" @click="post_comments">
            评 论
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommentLine from "@/components/CommentLine";
import axios from 'axios'

export default {
  name: "Comments",
  components: {CommentLine},
  data() {
    return {
      id_list: [],
      name_list: [],
      comments_list: [],
      time_list: [],
      test_list: ["1","2","3"]
    };
  },
  methods: {
    delete_comments(e) {
      var password = prompt("您的操作将删除评论", "请输入管理员密码");
      e = this.id_list[e];
      if (password === "1123") {
        console.log("ssss:" + e);
        axios.post('https://sheyh.cn/delete_comments', {
          data: e
        }).then(function (response) {
          console.log(response);
        }).then(function (error) {
          console.log(error);
        });
        alert("删除成功，请刷新页面");
      } else {
        alert("密码错误");
      }
      this.get_comments();
    },
    get_comments() {
      let rem_id = [], rem_list = [], rem_time = [], rem_name = [];
      axios.get("http://sheyh.cn/get_post").then(function (response) {
        for (let i in response.data) {
          rem_id.push(response.data[i][0]);
          rem_name.push(response.data[i][1]);
          rem_list.push(response.data[i][2]);
          let timetrans = response.data[i][3];
          timetrans = timetrans.replace(/\s00:.*/g, "");
          timetrans = timetrans.replace(/.*,/g, "");
          rem_time.push(timetrans);
        }
        rem_id=rem_id.reverse();
        rem_name=rem_name.reverse();
        rem_list=rem_list.reverse();
        rem_time=rem_time.reverse();
      }, function (err) {
        console.log(err);
      });
      this.id_list=JSON.parse(JSON.stringify(rem_id));
      this.id_list = rem_id;
      this.id_list = this.id_list.reverse();
      this.test_list.push("10");
      // console.log(this.test_list[1]);
      console.log(this.id_list[1]);
      this.name_list = rem_name;
      this.comments_list = rem_list;
      this.time_list = rem_time;
      this.time_list.reverse();
    },
    post_comments() {
      let comment = $('#comment-input').val();
      let commenter = $('#commenter-input').val();
      if (commenter.match(/^[ ]*$/) || comment.match(/^[ ]*$/)) {
        alert("请检查是否输入完整");
        return;
      }
      axios.post('https://sheyh.cn/post_comments', {
        data: {comment, commenter}
      }).then(function (response) {
        console.log(response);
      }).then(function (error) {
        console.log(error);
      });
      alert("评论成功,请刷新页面查看！");
      setTimeout(()=>{
        this.get_comments;
      },1500); 
    }
  },
  beforeMount() {
    this.get_comments()
  }
}
</script>
