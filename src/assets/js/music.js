let int;
let a = 0;
// Vue.filter('filter',function (msg) {
//     return msg+'嘿嘿'
// })
function timehandler() {
  if (a < 500) a += 5;
  $('.audio-bar-face').css('width', `${a}px`);
  $('.audio-bar-button').css('margin-left', `${a}px`);
}
const app = new Vue({
  el: '#all',
  delimiters: ['[[', ']]'],
  data: {
    searchname: '',
    musiclist: [],
    musicurl: '',
    musicpicurl: '../static/images/zjl.jpg',
    show: false,
  },
  methods: {
    searchmusic() {
      this.show = true;
      const that = this;
      axios.get(`https://autumnfish.cn/search?keywords=${this.searchname}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          that.musiclist = response.data.result.songs;
        }, (err) => {
          console.log(err);
        });
    },
    playmusic(musicid) {
      const that = this;
      axios.get(`https://autumnfish.cn/song/url?id=${musicid}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          that.musicurl = response.data.data[0].url;
        }, (err) => {
          console.log(err);
        });
      axios.get(`https://autumnfish.cn/song/detail?ids=${musicid}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          that.musicpicurl = response.data.songs[0].al.picUrl;
        }, (err) => {
          console.log(err);
        });
      setTimeout(() => {
        that.show = false;
        if (typeof (int) !== 'undefined') {
          clearInterval(int);
          a = 0;
        }
        const time = document.getElementsByClassName('audiobar')[0].duration;
        const timesec = (time / 100) * 1000;
        $(document).ready(() => {
          int = setInterval(timehandler, timesec);
        });
      }, 500);
    },
  },
});
