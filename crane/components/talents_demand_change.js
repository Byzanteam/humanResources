const { axisLabelStyle } = require('../share')

module.exports = [
  {
    id: 'talents-demand-change-icon',
    component: 'div',
    position: [1500, 51],
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
    position: [1533, 48],
    props: {
      'data-content': '根据「区域」「时间」进行筛选统计企业发布的招聘人才数量与人才投递简历情况对比折线图体现供需变化',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '人才供需月度变化',
  },
  {
    id: 'talents-demand-change-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 100],
    exports: {
      results: 'results',
    },
    props: {
      url: "/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '380px',
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
            $color: "['#00fff2', '#7b43ff']",
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
                color: '#ffffff',
                fontSize: 14
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
              $axisLabel: axisLabelStyle,
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
                ...axisLabelStyle,
                align: 'right',
                $padding:"[0, 5, 0, 0]"
              },
              $axisLabel: {
                ...axisLabelStyle,
                align: 'center'
              },
              $splitLine: {
                $show: false
              }
            },
            $series: "[{type: 'line', name: '人才供应', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]",
          }
        }
      }
    ]
  }
]
