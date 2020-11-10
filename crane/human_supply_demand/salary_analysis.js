const {small_digital_style} = require('../share')

module.exports = [
  {
    id: 'salary-icon',
    component: 'div',
    position: [40, 722],
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
    id: 'salary-title·',
    component: 'div',
    position: [74, 720],
    props: {
      'data-content': '默认为所有岗位的平均薪资，可根据「岗位名」进行筛选统计查阅对应行位当年平均薪资与历年的平均薪资',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '人才薪酬分析',
  },
  {
    id: 'salary-count',
    component: '@byzanteam/vis-components/data-loader',
    position: [40, 764],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .1)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [116, 793],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
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
          ...small_digital_style,
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
            $color: "['#6ad6ff']",
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
              name: '元',
              splitNumber: 4,
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
                $padding: "[0, 0, 0, 3]"
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
            $series: "[{type: 'line', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]",
          }
        }
      }
    ]
  }
]
