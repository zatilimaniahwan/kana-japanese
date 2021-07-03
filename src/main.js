import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueTypedJs from 'vue-typed-js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  data () {
    return {
      appName: 'KANA'
    }
  },
  i18n,
  render: h => h(App)
}).$mount('#app')
