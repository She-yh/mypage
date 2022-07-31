import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import LoginDialog from '@/components/Login'
Vue.use(ElementUI, { locale })
const loginDialog = new Vue(LoginDialog)
loginDialog.$mount(document.createElement('div'))
document.body.appendChild(loginDialog.$el)

Vue.prototype.$loginDialog = loginDialog

export default loginDialog
