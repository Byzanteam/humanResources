const { serieColors } = require('../share')

module.exports = [
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [40, 845],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/28b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '380px',
        height: '180px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              type: 'scroll',
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              right: 'right',
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 12
              },
              inactiveColor: '#1C4159',
            },
            $color: serieColors,
            $series: "[{type: 'pie', minAngle: 5, left: -140, radius: ['45%', '76%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]"
          }
        }
      }
    ]
  },
]
