/* eslint-disable vue/no-deprecated-slot-attribute */
/* eslint-disable vue/no-deprecated-slot-attribute */
/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
  <section id="loginCard" class="transition-box">
    <el-card id="elcard">
        <div slot="header" class="clearfix" >
            <span>登录页</span>
            <el-button style="float: right;padding: 0;" type="text" size="small" @click="$store.commit('changeLogin',false)">关闭</el-button>
        </div>
        <el-form label-position = "top" label-width = "80px" ref="userInfo" :rules="rules">
            <el-form-item label="账号">
                <el-input v-model="formInfo.username" placeholder="请输入账号" prop="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="formInfo.password" placeholder="请输入密码" prop="password"></el-input>
            </el-form-item>
            <el-form-item style="margin-top:8px">
                <el-row>
                    <el-button round plain type="primary" :span="6" :offset="2" :disabled="!canSubmit" @click="submitForm('userInfo')">
                        登录
                    </el-button>
                </el-row>
            </el-form-item>
        </el-form>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'LoginCard',
  data () {
    return {
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
    canSubmit () {
      return Boolean(this.username && this.password)
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
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
