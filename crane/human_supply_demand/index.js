const jobSelect = require('./job_select')
const datePicker = require('./date_picker')
const singleDigital = require('./single_digital')
const talentsExponent = require('./talents_exponent')
const salaryAnalysis = require('./salary_analysis')
const industriesDemandRanking = require('./industries_demand_ranking')
const talentsDemandChange = require('./talents_demand_change')
const degreeAnalysis = require('./degree_analysis')
const map = require('./map')
const { page_title_content, page_title_bg } = require('../share')

module.exports = {
  route: {
    name: 'supply',
    path: 'supply'
  },
  title:'人才供需专题',
  states: [
    {
      id: 'province',
      value: 'PROVINCE_OPTIONS[0]'
    },
    {
      id: 'currentJob',
      value: ''
    },
    {
      id: 'inputQuery',
      value: ''
    },
    {
      id: 'year',
      value: ''
    },
    {
      id: 'department',
      value: {}
    },
    {
      id: 'dateRange',
      value: []
    },
    {
      id: 'tabNavs',
      value: 'TAB_NAVS'
    },
    {
      id: 'tabCurrent',
      value: 'TAB_NAVS[0]'
    },
    {
      id: 'chartTabNavs',
      value: 'CHART_TAB_NAVS'
    },
    {
      id: 'chartTabCurrent',
      value: 'CHART_TAB_NAVS[0]'
    },
    {
      id: 'selectedArea',
      value: {}
    }
  ],
  components: [
    {
      id: 'title-bg',
      component: 'img',
      ...page_title_bg
    },
    {
      ...page_title_content,
      content: '人才供需专题',
    },
    {
      id: 'box-bg',
      component: 'img',
      position: [10, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/hxrc/images/Box-Bg.png'
      },
    },
    {
      id: 'right-box-bg',
      component: 'img',
      position: [1471, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/hxrc/images/Box-Bg.png'
      },
    },
    ...map,
    jobSelect,
    datePicker,
    ...singleDigital,
    ...talentsExponent,
    ...salaryAnalysis,
    ...industriesDemandRanking,
    ...talentsDemandChange,
    ...degreeAnalysis
  ]
}
