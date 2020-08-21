module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  props: {
    url: '/v1/components/42b74ddd-39de-493f-84ab-9d87fcf23fee/data',
    method: 'get',
    $data: "[['']]",
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('dateRange', param.results ? param.results.map((item) => (Number(item[0]))) : [])"],
    },
  },
  children: [
    {
      component: 'iview/date-picker',
      position: [40, 50],
      props: {
        class: 'supply-datepicker',
        $style: {
          width: '380px',
          height: '50px'
        },
        format: 'yyyy年',
        'v-model': 'craneStates.year',
        $options: {
          $disabledDate: "(time) => {return !craneStates.dateRange.includes(time.getFullYear())}"
        },
        type: 'year',
        placeholder: '选择时间'
      }
    }
  ]
}
