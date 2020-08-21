const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'ranking_rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [82, 752],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/19b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`",
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
      id: 'department-ranking-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        'v-if': 'results',
        $data: "results.map(item => ({label: item[1], amount: item[0]}))",
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
