/* eslint-disable vue/no-deprecated-slot-attribute */
/* eslint-disable vue/no-deprecated-slot-attribute */
/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
    <transition name="el-fade-in">
      <section id="loginCard" class="transition-box" v-show = 'showLogin'>
        <el-card id="elcard">
            <div slot="header" class="clearfix" >
                <span>登录页</span>
                <el-button style="float: right;padding: 0;" type="text" size="small" @click="showLogin=false">关闭</el-button>
            </div>
            <el-form :model="formInfo" label-position = "top" label-width = "80px" ref="userInfo" :rules="rules">
                <el-form-item label="账号">
                    <el-input v-model="formInfo.username" placeholder="请输入账号" prop="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formInfo.password" placeholder="请输入密码" prop="password"></el-input>
                </el-form-item>
                <el-form-item style="margin-top:8px">
                    <el-row>
                        <el-button round plain type="primary" :span="6" :offset="2" @click="submitForm('userInfo')">
                            登录
                        </el-button>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-card>
      </section>
  </transition>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'LoginDialog',
  data () {
    return {
      showLogin: false,
      formInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 9, message: '长度不能小于9', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 9, message: '长度不能小于9', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  methods: {
    openLogin () {
      this.showLogin = true
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = new URLSearchParams()
          params.append('username', this.formInfo.username)
          params.append('password', this.formInfo.password)
          axios.post(`${process.env.VUE_APP_BASE_URL}user/login`, params).then(res => {
            if (res.data.status === 0) {
              localStorage.setItem('token', res.data.token)
              this.showLogin = false
              router.push('/user')
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
    #loginCard{
        position: fixed;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    #elcard{
        min-width: 300px;
    }
</style>
