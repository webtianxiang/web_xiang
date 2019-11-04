import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './theme/index.css'
import './plugin'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,

  store,
  render: h => h(App)
}).$mount('#app')
