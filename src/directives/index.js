import scroll from './scroll'

const directives = {
  scroll,
}

const install = Vue => {
  Object.entries(directives).forEach(directive => Vue.directive(...directive))
}

export default {
  install,
}
