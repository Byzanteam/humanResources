const {normal_digital_style} = require('../share')

module.exports = {
  id: 'part-production-value',
  component: '@byzanteam/vis-components/data-loader',
  position: [130, 134],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/12b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'deal-number-total',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        'data-content': '根据「区域」选择统计该区域 2019 年地区生产总值',
        titlePosition: 'left',
        $content: {
          title: '地区生产总值',
          suffix: '亿元',
          $digital: "results[0][0] || 0",
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
