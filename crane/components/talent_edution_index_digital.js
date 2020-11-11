const {normal_digital_style} = require('../share')

module.exports = {
  id: 'talent-education-index',
  component: '@byzanteam/vis-components/data-loader',
  position: [90, 332],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才学历指数'`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'talent-education-index-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '人才学历指数',
          $digital: "results[0][0] || 0",
        },
        $options: {
          separator: '',
          $decimalPlaces: 1,
        },
        ...normal_digital_style,
      }
    },
  ]
}
