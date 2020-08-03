const {normal_digital_style} = require('../share')

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 140],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data`",
    method: 'get',
    $data: "[['', 0]]",
  },
  children: [
    {
      id: 'talent-number-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '2020年07月申报人数',
          $digital: "results.reduce((total, item) => total + item[1], 0)",
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
