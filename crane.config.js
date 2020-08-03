const resources = require('./crane/components')
const supplyDemand = require('./crane/human_supply_demand')
const intro = require('./crane/introduction')
const keyTalents = require('./crane/key_talents')
const talentsCompetitiveness = require('./crane/talents_competitiveness')
const highTalents = require('./crane/high_talents')

module.exports = {
  // i18n 配置
  name: 'humanResources',
  // 屏幕默认尺寸, 所有页面都继承该值，页面可单独设置
  size: [1920, 1080],
  requestSettings: {
    baseURL: 'http://vis.cdyoue.com:35006/',
  },
  modules: {
    '@byzanteam/vis-components': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/index.css',
      },
    },
    '@byzanteam/graphite': {
      version: 'latest',
    },
    '@byzanteam/carbonium': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/carbonium.css',
      },
    },
    'element-ui': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'lib/theme-chalk/index.css',
      },
    },
    'iview': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/styles/iview.css',
      },
    },
  },
  // 页面
  pages: [
    resources,
    supplyDemand,
    keyTalents,
    talentsCompetitiveness,
    intro,
    highTalents
  ],
}
