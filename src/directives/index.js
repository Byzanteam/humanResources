import scroll from './scroll'
import scrollUpdate from './scroll_update'

const directives = {
  scroll,
  scrollUpdate
}

const install = Vue => {
  Object.entries(directives).forEach(directive => Vue.directive(...directive))
}

export default {
  install,
}
