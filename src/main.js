import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 全局样式表
import Vant from 'vant' // 加载vant组件库
import 'vant/lib/index.css' // 加载vant样式

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
