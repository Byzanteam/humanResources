const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'education_rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [1542, 746],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/4ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '296px',
      height: '290px',
      overflow: 'scroll'
    },
  },
  children: [
    {
      id: 'education_rank-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        $data: "results ? results.map(item => { return {label: item[1], amount: item[0] ? item[0].toFixed(0) : 0 }}) : []",
        $keys: {
          label: 'label',
          value: 'amount',
          tooltip: 'name'
        },
        $labelStyle: {
          color: '#4b9bbe',
          fontSize: '16px',
          lineHeight: '24px',
        },
        $valueStyle: {
          color: '#6ad6ff',
          fontSize: '16px',
          fontFamily: 'Oswald-Regular',
          lineHeight: '1.5',
          fontWeight: 400,
        },
        $lineStyle: {
          background: '#ffffff1a',
          $lineColor: "['#0885b5', '#6ad6ff']",
          height: '5px',
          borderRadius: '2.5px'
        },
        ...chartTooltipOptions
      },
    },
  ],
}
