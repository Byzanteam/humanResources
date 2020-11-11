const { rankingStyle } = require('../share');

module.exports = {
  id: 'education_rank',
  component: '@byzanteam/vis-components/data-loader',
  position: [1542, 752],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/4ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '296px',
      height: '270px',
      overflow: 'scroll'
    },
  },
  children: [
    {
      id: 'education_rank-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        $data: "results ? results.map(item => { return {label: item[1], amount: item[0] ? Number(item[0].toFixed(0)) : 0 }}) : []",
        $keys: {
          label: 'label',
          value: 'amount',
        },
        ...rankingStyle,
      },
    },
  ],
}
