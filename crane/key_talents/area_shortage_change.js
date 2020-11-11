module.exports = [
  {
    component: 'div',
    position: [1504, 459],
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
    component: 'div',
    position: [1536, 456],
    props: {
      'data-content': '根据「区域」「时间」「行业类型」进行筛选统计对应行业的历年紧缺人才数量情况',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '区域紧缺人才趋势',
  },
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
              right: '5%',
              bottom: '10%'
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
