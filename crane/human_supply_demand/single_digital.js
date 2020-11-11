const {
  normal_digital_style,
  digital_circle_icon,
  digital_bg,
} = require('../share')

module.exports = [
  {
    id: 'supply-demand-count',
    position: [40, 194],
    ...digital_bg,
  },
  {
    id: 'value-circle',
    position: [100, 223],
    ...digital_circle_icon,
  },
  {
    id: 'supply-demand-count',
    component: '@byzanteam/vis-components/data-loader',
    position: [126, 200],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&year=${generateYear}`",
      method: 'get',
      $data: "[[0]]",
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          'data-content': '默认为当年所有企业所需人才数量，可根据「区域」「岗位名」「时间」进行筛选统计查阅对应的企业人才需求数量',
          titlePosition: 'left',
          $content: {
            title: '企业人才需求数量',
            $digital: "results ? results[0][0] : 0",
            suffix: '人'
          },
          $options: {
            separator: ',',
          },
          $style: {
            height: '39px'
          },
          ...normal_digital_style,
        }
      },
    ]
  }
]
