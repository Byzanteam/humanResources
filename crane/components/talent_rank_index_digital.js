const {small_digital_style} = require('../share')

module.exports = {
  id: 'talent-rank-index',
  component: '@byzanteam/vis-components/data-loader',
  position: [290, 332],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才职称指数'`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'talent-rank-index-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '人才职称指数',
          $digital: "results[0][0] || 0",
        },
        $options: {
          separator: '',
          $decimalPlaces: 1
        },
        ...small_digital_style,
      }
    },
  ]
}
