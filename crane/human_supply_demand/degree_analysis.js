const { serieColors, subtitle_icon } = require('../share')

module.exports = [
  {
    id: 'degree-analysis-icon',
    position: [1500, 722],
    ...subtitle_icon,
  },
  {
    id: 'degree-analysis-title',
    component: 'div',
    position: [1532, 720],
    props: {
      class: 'line-break-degree ranking-tooltip',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '人才学历： 根据「区域」「时间」进行筛选统计对应的人才学历分布情况人才职称：根据「区域」「时间」进行筛选统计对应的人才职称分布情况',
          $style: {
            position: 'relative'
          }
        },
        content: '学历职称分析',
      }
    ],
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [1586, 764],
    directive: {
      model: 'craneStates.chartTabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.chartTabNavs',
      $activeTab: 'craneStates.chartTabCurrent'
    }
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 822],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[0]',
      $url: "`/v1/components/10b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '380px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $legend: {
              type: 'scroll',
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 35,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#ffffff',
                $fontSize: 14
              },
              inactiveColor: '#1C4159',
            },
            $color: serieColors,
            $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 822],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.chartTabCurrent === craneStates.chartTabNavs[1]',
      $url: "`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '380px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $legend: {
              pageIconColor: '#aaa',
              pageIconInactiveColor: '#2f4554',
              $formatter: "legendText",
              type: 'scroll',
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $right: 35,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#ffffff',
                $fontSize: 14
              },
              inactiveColor: '#1C4159',
            },
            $color: serieColors,
            $series: "[{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]",
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            }
          }
        }
      }
    ]
  },
]
