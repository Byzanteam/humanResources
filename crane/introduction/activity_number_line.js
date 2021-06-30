
const { axisLabelStyle } = require('../share');
module.exports = {
  id: 'activity-number-line',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 334],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/44b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '380px',
      height: '240px'
    },
  },
  children: [
    {
      id: 'activity-number-line-content',
      component: 'v-chart',
      'v-if': 'results',
      props: {
        $options: {
          $grid: {
            $left: 50,
            $right: 0
          },
          $xAxis: {
            $axisLabel: {
              ...axisLabelStyle,
              $rotate: 0,
            },
            $axisLine: {
              $show: false
            },
            $data: "results ? results.map(item => (item[1])) : ['暂无数据']"
          },
          $yAxis: {
            $axisLabel: {
              ...axisLabelStyle,
              $rotate: 0,
              align: 'right'
            },
            $axisTick: {
              $show: false
            },
            $axisLine: {
              $show: false
            },
            $splitLine: {
              $show: false
            },
            $splitNumber: 5,
            name: '次',
            $nameTextStyle: {
              align: 'right',
              $padding: "[0, 5, 0, 0]",
              ...axisLabelStyle
            },
          },
          $series: {
            type: 'line',
            $smooth: false,
            $showSymbol: false,
            $color: "['#00fff2']",
            $lineStyle: {
              $width: 4,
            },
            $areaStyle: {
              $color: `new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00fff2'
                },
                {
                  offset: 1,
                  color: 'rgba(0,255,242,0.6)'
                }
                ],
                false
              )`,
            },
            $data: "results ? results.map(item => (item[0])) : [0]"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'line',
            },
            backgroundColor: '#566374f0',
            $formatter: "activityTooltipFormatterFunc",
            $axisPointer: {
              $lineStyle: {
                color: '#ffffff',
                type: 'dotted'
              }
            }
          }
        },
      },
    },
  ],
};
