const {normal_digital_style} = require('../share')

module.exports = {
  id: 'force-value',
  component: '@byzanteam/vis-components/data-loader',
  position: [1614, 66],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/38b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.city ? craneStates.city.label : ''}&type='${this.craneStates.indicator}'`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'force-value-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        'data-content': '根据选择的对应十大指标体系结合「区域」统计分析该区域的综合竞争力指数',
        titlePosition: 'left',
        $content: {
          title: '竞争力指数',
          $digital: "results[0][0]",
        },
        $options: {
          separator: ',',
          $decimalPlaces: 1
        },
        ...normal_digital_style,
      }
    },
  ]
}
