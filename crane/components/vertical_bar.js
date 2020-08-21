const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'demand-vertical-bar',
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 762],
  exports: {
    results: 'results',
  },

  props: {
    url: "/v1/components/23b74ddd-39de-493f-84ab-9d87fcf23fee/data",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '270px'
    },
  },
  children: [
    {
      id: 'demand-vertical-bar-content',
      component: 'v-chart',
      props: {
        class: 'bar-chart',
        $options: {
          $grid: {
            top: '12%',
            right: '1%'
          },
          $xAxis: {
            $axisLabel:{
              $formatter: "limitXaxisLabel",
              $rotate: -315,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            $axisLine:{
              $show: false
            },
            $data: "results.map(item => (item[1]))"
          },
          $yAxis: {
            $axisLine: {
              $show: false
            },
            $axisLabel:{
              $formatter: 'limitLabelLength',
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391',
              align: 'right'
            },
            $splitLine: {
              $show: false
            },
            $splitNumber: 5,
            name: '千人',
            $nameTextStyle: {
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391',
              align: 'right',
              $padding:"[0, 8, 0, 0]"
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
                    color: '#117ea8'
                  },
                  {
                    offset: 1,
                    color: '#6ad6ff'
                  }], false),`
              },
            },
            $data: "results.map(item => (item[0]))"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'shadow',
            },
            $formatter: "demandTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      },
    },
  ],
};
