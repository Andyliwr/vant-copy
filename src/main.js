import Vue from 'vue'
import App from './App.vue'
import vant from './components'

// 组件样式
import './components/index.scss'

Vue.config.productionTip = false
Vue.use(vant)

new Vue({
  render: h => h(App),
}).$mount('#app')
