const {high_level_legendStyle_normal, color_series} = require('../share')

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [480, 280],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/00204ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '218px'
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $legend: high_level_legendStyle_normal,
          $color: color_series,
          $series: "[{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}]",
          $tooltip: {
            trigger: 'item',
            $formatter: "pieTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        }
      }
    }
  ]
}
