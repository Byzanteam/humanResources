const {color_series} = require('../share')

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 281],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '571px'
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $legend: {
            icon: 'circle',
            $itemWidth: 10,
            $itemHeight: 10,
            top: 280,
            $itemGap: 9,
            orient: 'vertical',
            $textStyle: {
              color: '#4b9bbe',
              $fontSize: 12,
              $lineHeight: 15
            },
            inactiveColor: '#1C4159',
          },
          $color: color_series,
          $series: "[{type: 'pie', top: -300, minAngle: 5, radius: ['0%', '55%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[1], name: item[0]})) : {name: '暂无数据', value: 0}}]",
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
