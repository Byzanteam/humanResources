
const { axisLabelStyle } = require('../share');
module.exports = {
  id: 'high-level-talent-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 794],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/46b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '380px',
      height: '240px'
    },
  },
  children: [
    {
      id: 'high-level-talent-content',
      component: 'v-chart',
      props: {
        $options: {
          $grid:{
            $left: 50,
            $right: 0
          },
          $xAxis: {
            $axisLabel:{
              ...axisLabelStyle,
              $rotate: 0,
            },
            $axisLine:{
              $show: false
            },
            $data: "results ? results.map(item => (item[1])) : ['暂无数据']"
          },
          $yAxis: {
            $axisLabel:{
              ...axisLabelStyle,
              $rotate: 0,
              align: 'right'
            },
            $axisTick: {
              $show: false
            },
            $axisLine:{
              $show: false
            },
            $splitLine: {
              $show: false
            },
            $splitNumber: 5,
            name: '人',
            $nameTextStyle: {
              align: 'right',
              $padding:"[0, 5, 0, 0]",
              ...axisLabelStyle
            },
          },
          $series: {
            type: 'bar',
            $barWidth: 7,
            barCategoryGap: '10%',
            itemStyle: {
              $normal: {
                $barBorderRadius: 7,
                $color: `new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#7d40ff'
                  },
                  {
                    offset: 1,
                    color: '#00fff2'
                  }], false),`
              },
            },
            $data: "results ? results.map(item => (item[0])) : [0]"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'shadow',
            },
            $formatter: "tooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      },
    },
  ],
};
