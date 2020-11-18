const { chartTooltipOptions, rankingStyle } = require('../share');

module.exports = {
  id: 'ranking_rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [90, 412],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/19b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
    method: 'get',
    $data: "[[20, '暂无数据']]",
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
        ...rankingStyle,
        ...chartTooltipOptions
      },
    },
  ],
}
