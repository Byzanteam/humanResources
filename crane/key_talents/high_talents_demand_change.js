module.exports = [
  {
    component: 'div',
    position: [40, 497],
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
    position: [74, 494],
    props: {
      'data-content': '根据「区域」「供需需求关键字」选择统计该地区人才库中学历为「硕士」「博士」的人才数量',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '高层次人才供需变化',
  },
  {
    id: 'high-talents-demand-change-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [30, 550],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '400px',
        height: '200px'
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
            $color: "['#6ad6ff', '#367390']",
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
                color: '#4b9bbe',
                $fontSize: 14
              },
              inactiveColor: '#1C4159',
            },
            $xAxis: {
              type: 'category',
              $data: "results ? results.map(item => (item[1])) : ['暂无数据']",
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
            $series: "[{type: 'line', name: '人才供应', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]"
          }
        }
      }
    ]
  }
]
