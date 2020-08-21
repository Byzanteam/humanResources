import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/hxrc/',
  routes: [
    {
      name: 'resources',
      path: '/resources',
      component: pages.resources,
    },
    {
      name: 'supply',
      path: '/supply',
      component: pages.supply,
    },
    {
      name: 'key_talents',
      path: '/key-talents',
      component: pages.key_talents,
    },
    {
      name: 'talents_competitiveness',
      path: '/talents-competitiveness',
      component: pages.talents_competitiveness,
    },
    {
      name: 'introduction',
      path: '/introduction',
      component: pages.introduction,
    },
    {
      name: 'high_talents',
      path: '/highTalents',
      component: pages.high_talents,
    },
  ],
})
