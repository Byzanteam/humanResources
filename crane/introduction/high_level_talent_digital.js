const {normal_digital_style} = require('../share')

module.exports = {
  id: 'high-level-talent-digital',
  component: '@byzanteam/vis-components/data-loader',
  position: [130, 718],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'high-level-talent-digital-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '高层次人才引进总数',
          suffix: '人',
          $digital: "results ? (results[0][0] || 0) : 0",
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
