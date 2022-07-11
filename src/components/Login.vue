<template>
  <section id="login" class="transition-box">
    <el-card id="elcard">
        <div slot="header" class="clearfix" >
            <span>登录页</span>
            <el-button style="float: right;padding: 0;" type="text" size="small" @click="closelogin">关闭</el-button>
        </div>
        <el-form label-position = "top" label-width = "80px">
            <el-form-item label="账号">
                <el-input v-model="username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item style="margin-top:8px">
                <el-row>
                    <el-button round plain :span="6" :offset="5">
                        注册
                    </el-button>
                    <el-button round plain type="primary" :span="6" :offset="2">
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
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        closelogin(){
            this.$emit('changeLogin',false);
        }
    },
};
</script>

<style scoped>
    #login{
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