import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import './permission'
import './style/index.scss'
import './assets/icon'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = api

Vue.use(ElementUI,{locale})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
