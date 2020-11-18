const {normal_digital_style} = require('../share')

module.exports = {
  id: 'talent-number',
  component: '@byzanteam/vis-components/data-loader',
  position: [130, 214],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/13b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'talent-number-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        'data-content': '根据「区域」选择统计该地区人才库中学历为「硕士」「博士」的人才数量',
        titlePosition: 'left',
        $content: {
          title: '中高端人才数量',
          $digital: "results[0][0] || 0",
          suffix: '人',
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
