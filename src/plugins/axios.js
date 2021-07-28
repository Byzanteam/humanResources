import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults['baseURL'] = window.BACKEND_HOST

export default {
  install () {
    Vue.use(VueAxios, axios)
  },
}
