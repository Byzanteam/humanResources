module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [1504, 805],
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
    id: 'degree-analysis-title',
    component: 'div',
    position: [1536, 803],
    props: {
      'data-content': '根据「区域」「时间」「行业类型」统计紧缺人才企业的行业分布情况',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '紧缺人才专业分布',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1350, 841],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/33b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '600px',
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
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              type: 'scroll',
              $formatter: "legendText",
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $left: 350,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                $fontSize: 12,
                $lineHeight: 15
              },
              inactiveColor: '#1C4159',
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', minAngle: 5, left: -120, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})).sort(compare()) : [{value: 0, name: '暂无数据'}]}]"
          }
        }
      }
    ]
  },
]
