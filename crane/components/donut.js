const { pieColors } = require('../share')

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 792],
  exports: {
    results: 'results',
  },
  props: {
    url: "/v1/components/22b74ddd-39de-493f-84ab-9d87fcf23fee/data",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '460px',
      height: '218px'
    },
  },
  children: [
    {
      component: 'v-chart',
      props: {
        class: "pie-chart",
        $options: {
          backgroundColor: 'transparent',
          $legend: {
            $formatter: "legendText",
            type: 'scroll',
            icon: 'circle',
            $itemWidth: 10,
            $itemHeight: 10,
            $left: 270,
            top: 'middle',
            $itemGap: 9,
            orient: 'vertical',
            $textStyle: {
              color: '#ffffff',
              $fontSize: 14,
              $lineHeight: 15
            },
            inactiveColor: '#1C4159',
          },
          $color: pieColors,
          $series: "[{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results.map(item => ({value: item[0], name: item[1]})).sort(compare())}]",
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
