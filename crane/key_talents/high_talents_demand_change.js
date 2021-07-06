module.exports = [
  {
    id: 'high-talents-demand-change-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    exports: {
      results: 'supplyResults',
    },
    props: {
      $url: "`/v1/components/5ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&type=${digitalKeyword || ''}&job=${craneStates.supplyInputWord}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
    },
    children: [
      {
        id: 'high-talents-demand-change-line-chart',
        component: '@byzanteam/vis-components/data-loader',
        position: [40, 597],
        exports: {
          results: 'demandResults',
        },
        props: {
          $url: "`/v1/components/5bb74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&type=${digitalKeyword || ''}&job=${craneStates.supplyInputWord}`",
          method: 'get',
          $data: "[[0, '暂无数据']]",
          $style: {
            width: '380px',
            height: '180px'
          }
        },
        children: [
          {
            component: 'v-chart',
            props: {
              $options: {
                $grid: {
                  top: '24%',
                  $left: 0,
                  bottom: '12%',
                  $containLabel: true
                },
                backgroundColor: 'transparent',
                $color: "['#00fff2', '#7b43ff']",
                $tooltip: {
                  trigger: 'axis',
                  $formatter: "demandTooltipFormatterFunc",
                  backgroundColor: '#566374f0',
                  $axisPointer: {
                    $lineStyle: {
                      color: '#ffffff',
                      type: 'dotted'
                    }
                  }
                },
                $legend: {
                  icon: 'circle',
                  $right: 10,
                  $itemGap: 14,
                  $itemWidth: 8,
                  $itemHeight: 8,
                  $textStyle: {
                    color: '#ffffff',
                    $fontSize: 14
                  },
                  inactiveColor: '#1C4159',
                },
                $xAxis: {
                  type: 'category',
                  $data: "supplyResults ? supplyResults.map(item => (item[0])) : ['暂无数据']",
                  $axisLine: {
                    $show: false
                  },
                  $axisTick: {
                    $show: false,
                  },
                  $axisLabel: {
                    color: '#ffffff',
                    $fontSize: 12,
                    $fontWeight: 400
                  },
                  $splitLine: {
                    $show: false
                  }
                },
                $yAxis: {
                  type: 'value',
                  name: '人',
                  $axisLine: {
                    $show: false
                  },
                  $axisTick: {
                    $show: false,
                  },
                  $nameTextStyle: {
                    color: '#ffffff',
                    $fontSize: 12,
                    $fontWeight: 400,
                    align: 'right',
                    $padding:"[0, 5, 0, 0]"
                  },
                  $axisLabel: {
                    color: '#ffffff',
                    $fontSize: 12,
                    $fontWeight: 400,
                    align: 'right'
                  },
                  $splitLine: {
                    $show: false
                  },
                  $splitNumber: 4,
                },
                $series: "[{type: 'line', name: '人才供应', data: supplyResults ? supplyResults.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: demandResults ? demandResults.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}]"
              }
            }
          }
        ]
      },
    ]
  }
]
