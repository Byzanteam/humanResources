const { pieColors, axisLabelStyle } = require('../share')
module.exports = {
  id: 'talent-rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [1500, 432],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/49b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '380px',
      height: '218px'
    },
  },
  children: [
    {
      id: 'talent-rank',
      component: 'v-chart',
      props: {
        $options:{
          $color: pieColors,
          $legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '8%',
            top: 'middle',
            icon: 'circle',
            $itemWidth: 8,
            $itemHeight: 8,
            $data: "results ? results.map(item => (item[1])) : ['暂无数据']",
            $textStyle: {
              ...axisLabelStyle,
            },
            inactiveColor: '#1C4159',
          },
          $series: {
            name: '人才引进渠道',
            type: 'pie',
            left: '-34%',
            $radius: "['35%', '62%']",
            $label: {
              $show: false,
            },
            $labelLine: {
              $show: false,
            },
            $data: "results ? results.map(item => ({name: item[1], value: item[0]})) : [{name: '暂无数据', value: 0}]"
          },
          $tooltip: {
            trigger: 'item',
            $formatter: "pieTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      }
    }
  ]
}
