const { page_title_content } = require('../share')
const subtitle = require('./subtitle')
const departmentSelect = require('./department_select')
const table = require('./table')
const applyRoute = require('./apply_route')
const talentType = require('./talent_type')
const talentPast = require('./talent_past')
const talentNow = require('./talent_now')
const talentAbroad = require('./talent_abroad')
const applyAnalysis = require('./apply_analysis')
const applyNumber = require('./apply_number')

module.exports = {
  route: {
    name: 'high_talents',
    path: 'highTalents'
  },
  title: '高端人才统计',
  states: [
    {
      id: 'selectOptions',
      value: []
    },
    {
      id: 'currentDepartment',
      value: null,
    }
  ],
  components: [
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/hxrc/images/Bg.png'
      },
    },
    {
      id: 'title-bg',
      component: 'img',
      position: [607, 0],
      props: {
        $style: {
          width: '701px',
          height: '123px',
        },
        src: '/hxrc/images/Title-Bg.png'
      },
    },
    {
      ...page_title_content,
      content: '高端人才专题',
    },
    ...subtitle,
    departmentSelect,
    table,
    applyRoute,
    talentType,
    talentPast,
    talentNow,
    talentAbroad,
    applyAnalysis,
    ...applyNumber,
  ]
}
