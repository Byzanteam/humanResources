module.exports = [
  {
    id: 'high-talents-demand-change-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 518],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/32b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`",
      method: 'get',
      $data: "[['暂无数据', 0]]",
      $style: {
        width: '380px',
        height: '214px'
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
              bottom: '10%',
              $containLabel: true
            },
            backgroundColor: 'transparent',
            $color: "['#00fff2', '#7b43ff']",
            $tooltip: {
              trigger: 'axis',
              $formatter: "shortageTooltipFormatterFunc",
              backgroundColor: '#566374f0',
              $axisPointer: {
                $lineStyle: {
                  color: '#ffffff',
                  type: 'dotted'
                }
              }
            },
            $xAxis: {
              type: 'category',
              $data: "results ? results.map(item => (item[0])) : ['暂无数据']",
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
                align: 'right',
                $padding:"[0, 5, 0, 0]"
              },
              $axisLabel: {
                color: '#367391',
                $fontSize: 12,
                $fontWeight: 400,
                align: 'right'
              },
              $splitLine: {
                $show: false
              },
              $splitNumber: 4,
            },
            $series: "[{type: 'line', name: '紧缺人才', data: results ? results.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}]"
          }
        }
      }
    ]
  }
]
