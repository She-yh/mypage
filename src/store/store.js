import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    showBar: false,
    theme: false,
    showLogin: false
  },
  /* 共享的数据
      * 访问:$store.state.名字
      *      import {mapState} from 'vuex'
      *      computed:{...mapState(['变量名'])}
     */
  mutations: {
    changeLogin (state, flag) {
      state.showLogin = flag
    },
    changeShowBar (state, flag) {
      state.showBar = flag
    },
    changeTheme (state, flag) {
      state.theme = flag
    }
  }, /* 更改值addN(第一个永远是默认的state,后面是自己的参数){}里面不能用异步操作
            this.$store.commit("mutation里的一个函数",自己的参数)
            第二种
            import {mapMutations} from 'vuex'
            methods:{
            ...mapMutations(['函数'])
            handler(){
              this.函数
            }
            }
          */
  actions: {
  } // 执行异步的改值
})
