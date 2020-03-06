import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/theme/style/theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import echarts from 'echarts'
import 'font-awesome/scss/font-awesome.scss'
// library.add(fas, far, fab)

Vue.prototype.$echarts = echarts
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')