
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
          $xAxis: {
            $axisLabel:{
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391'
            },
            $axisLine:{
              $show: false
            },
            $data: "results ? results.map(item => (item[1])) : ['暂无数据']"
          },
          $yAxis: {
            $axisLabel:{
              $rotate: 0,
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391',
              align: 'center'
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
            name: '件',
            $nameTextStyle: {
              $fontSize: 12,
              $fontWeight: 400,
              color: '#367391',
              align: 'center',
              $padding:"[0, 5, 0, 0]"
            },
          },
          $series: {
            type: 'line',
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
            $data: "results ? results.map(item => (item[0])) : [0]"
          },
          $tooltip: {
            trigger: 'axis',
            $axisPointer: {
              type: 'shadow',
            },
            $formatter: "activityTooltipFormatterFunc",
            backgroundColor: '#566374f0',
          }
        },
      },
    },
  ],
};
