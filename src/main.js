import Vue from 'vue'
import router from '@/router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
