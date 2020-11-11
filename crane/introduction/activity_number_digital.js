const {normal_digital_style} = require('../share')

module.exports = {
  id: 'activity-number-digital',
  component: '@byzanteam/vis-components/data-loader',
  position: [154, 258],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/43b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'activity-number-digital-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'data-content': '默认显示当年引才活动次数，可根据「区域」「时间」查看对应区域与年份的引才活动次数与历年的引才活动次数',
        titlePosition: 'left',
        $content: {
          title: '引才活动统计',
          suffix: '次',
          $digital: "results[0][0]",
        },
        $options: {
          separator: ',',
        },
        ...normal_digital_style,
      }
    },
  ]
}
