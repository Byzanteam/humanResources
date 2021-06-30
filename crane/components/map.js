const { mapColors } = require('../share')

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [480, 176],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/20b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '1100px',
      height: '900px'
    }
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('mapData', param.results.map((item) => ({name: item[1], value: item[0]})))"],
    },
  },
  children: [
    {
      component: 'v-chart',
      id: 'map',
      props: {
        'v-if': 'results',
        class: "map-chart",
        $options: 'mapOptions'
      }
    }
  ]
}
