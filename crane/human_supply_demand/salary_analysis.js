const {
  normal_digital_style,
  digital_circle_icon,
  subtitle_icon,
  subtitle_text,
  digital_bg,
  serieColors,
  axisLabelStyle,
} = require('../share')

module.exports = [
  {
    id: 'salary-icon',
    component: 'div',
    position: [40, 722],
    ...subtitle_icon,
  },
  {
    id: 'salary-title·',
    component: 'div',
    position: [74, 720],
    props: {
      ...subtitle_text.props,
      'data-content': '默认为所有岗位的平均薪资，可根据「岗位名」进行筛选统计查阅对应行位当年平均薪资与历年的平均薪资',
    },
    content: '人才薪酬分析',
  },
  {
    id: 'salary-count',
    position: [40, 764],
    ...digital_bg,
  },
  {
    id: 'value-circle',
    position: [116, 793],
    ...digital_circle_icon
  },
  {
    id: 'salary-count-digital',
    component: '@byzanteam/vis-components/data-loader',
    position: [146, 770],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/06b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0]]",
    },
    children: [
      {
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '岗位平均薪酬',
            $digital: "results ? results[0][0] : 0",
            prefix: '￥',
          },
          $options: {
            separator: ',',
          },
          $style: {
            height: '39px'
          },
          ...normal_digital_style,
        }
      },
    ]
  },
  {
    id: 'salary-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [40, 838],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '380px',
        height: '200px'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            $color: serieColors,
            grid: {
              $top: 30,
              $left: 52,
              $right: 10,
              $bottom: 30
            },
            backgroundColor: 'transparent',
            $tooltip: {
              trigger: 'axis',
              $axisPointer: {
                $lineStyle: {
                  color: '#ffffff',
                  type: 'dotted'
                }
              },
              $formatter: "salaryTooltipFormatterFunc",
              backgroundColor: '#566374f0',
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
              name: '元',
              splitNumber: 4,
              $axisLine: {
                $show: false
              },
              $axisTick: {
                $show: false,
              },
              $nameTextStyle: {
                ...axisLabelStyle,
                align: 'right',
                $padding: "[0, 5, 0, 0]"
              },
              $axisLabel: {
                ...axisLabelStyle,
                align: 'center'
              },
              $splitLine: {
                $show: false
              }
            },
            $series: "[{type: 'line', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]",
          }
        }
      }
    ]
  }
]
