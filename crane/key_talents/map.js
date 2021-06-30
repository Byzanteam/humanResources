const { mapColors } = require('../share')

module.exports = [
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [929, 125],
    props: {
      $options: "craneStates.selectOptions",
      'v-model': 'craneStates.department',
      placeholder: '全省',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  props: {
    $url: "`${requestUrl}`",
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
      id: 'map',
      component: 'v-chart',
      props: {
        $options: 'mapOptions'
      }
    }
  ]
}]
