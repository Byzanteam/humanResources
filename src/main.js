import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locale/i18n'
import plugins from './plugins/index'
import directives from './directives/index'

import '@byzanteam/vis-components/dist/index.css'
import '@byzanteam/carbonium/dist/carbonium.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import './styles/reset.css'

plugins.install()
Vue.use(directives)

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
