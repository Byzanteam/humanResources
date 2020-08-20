module.exports = {
  id: 'job_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 116],
  props: {
    url: '/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data',
    method: 'get',
    $data: "[['']]",
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('dateRange', param.results.map((item) => (Number(item[0]))))"],
    },
  },
  children: [
    {
      component: 'iview/date-picker',
      props: {
        format: 'yyyy年',
        'v-model': 'craneStates.year',
        $style: {
          width: '380px',
          height: '50px'
        },
        $options: {
          $disabledDate: "(time) => {return !craneStates.dateRange.includes(time.getFullYear())}"
        },
        type: 'year',
        class: 'supply-datepicker',
        placeholder: '选择时间'
      }
    }
  ]
}
