const {
  serieColors,
  subtitle_icon,
  subtitle_text,
  axisLabelStyle,
} = require('../share')

const yAxis_style = {
  type: 'value',
  $axisLine: {
    $show: false
  },
  $axisTick: {
    $show: false,
  },
  $nameTextStyle: {
    align: 'right',
    $padding:"[0, 5, 0, 0]",
    ...axisLabelStyle,
  },
  $axisLabel: {
    align: 'right',
    ...axisLabelStyle,
  },
  $splitLine: {
    $show: false
  }
}

const yAxises = ['人', '百分比']

module.exports = [
  {
    id: 'talents-demand-change-icon',
    position: [1500, 382],
    ...subtitle_icon,
  },
  {
    id: 'talents-demand-change-title·',
    component: 'div',
    position: [1532, 380],
    props: {
      'data-content': '根据「区域」「时间」进行筛选统计企业发布的招聘人才数量与人才投递简历情况对比折线图体现供需变化',
      ...subtitle_text.props
    },
    content: '人才供需变化',
  },
  {
    id: 'talents-demand-change-count-line-chart',
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 432],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${currentRegion}`",
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
              $right: 50,
              $bottom: 30
            },
            backgroundColor: 'transparent',
            $color: serieColors,
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
              $axisLabel: axisLabelStyle,
              $splitLine: {
                $show: false
              }
            },
            $yAxis: `${yAxises.map(item => ({name: item, ...yAxis_style}))}`,
            $series: "[{type: 'line', name: '人才供给', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '供求比', yAxisIndex: 1, data: results ? results.map(item => (item[3])) : [0], showSymbol: false, lineStyle: {width: 4}}]",
          }
        }
      }
    ]
  }
]
