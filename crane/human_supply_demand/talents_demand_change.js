
module.exports = [
  {
    id: 'talents-demand-change-icon',
    component: 'div',
    position: [1504, 374],
    props: {
      $style: {
        color: '#6ad6ff',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'left',
      },
    },
    content: '>>',
  },
  {
    id: 'talents-demand-change-title·',
    component: 'div',
    position: [1536, 371],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '人才供需变化',
  },
  {
    id: 'talents-demand-change-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 419],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0]]",
      $style: {
        width: '400px',
        height: '230px'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            grid: {
              $left: 52,
              $right: -10,
              $bottom: 30
            },
            backgroundColor: 'transparent',
            $color: "['#6ad6ff', '#367390']",
            $tooltip: {
              trigger: 'axis',
              $axisPointer: {
                $lineStyle: {
                  color: '#ffffff',
                  type: 'dotted'
                }
              },
              $formatter: "demandTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              icon: 'circle',
              $itemWidth: 8,
              $itemHeight: 8,
              $right: 0,
              $itemGap: 14,
              $textStyle: {
                color: '#4b9bbe',
                fontSize: 14
              },
              inactiveColor: '#1C4159',
            },
            $xAxis: {
              type: 'category',
              $data: "results ? results.map(item => (item[1])) : [0]",
              $axisLine: {
                $show: false
              },
              $axisTick: {
                $show: false,
              },
              $axisLabel: {
                color: '#367391',
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
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400,
                align: 'center',
                $padding:"[0, 5, 0, 0]"
              },
              $axisLabel: {
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400,
                align: 'center'
              },
              $splitLine: {
                $show: false
              }
            },
            $series: "[{type: 'line', name: '人才供给', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]",

          }
        }
      }
    ]
  }
]
