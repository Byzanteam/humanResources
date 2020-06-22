module.exports = {
  id: 'introduce-place',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 94],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/48b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '218px'
    },
  },
  children: [
    {
      id: 'introduce-place-content',
      component: 'v-chart',
      props: {
        $options:{
          $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
          $legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '8%',
            top: 'middle',
            icon: 'circle',
            $itemWidth: 8,
            $itemHeight: 8,
            $data: "results.map(item => (item[1]))",
            $textStyle: {
              color: '#489bbe',
              $fontSize: 14,
            },
            inactiveColor: '#1C4159',
          },
          $series: {
            name: '人才引进渠道',
            type: 'pie',
            left: '-34%',
            $radius: "['0%', '59%']",
            $label: {
              $show: false,
            },
            $labelLine: {
              $show: false,
            },
            $data: "results.map(item => ({name: item[1], value: item[0]}))"
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
