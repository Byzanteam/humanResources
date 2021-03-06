module.exports = {
  id: 'job_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 48],
  exports: {
    results: 'results',
  },
  props: {
    $url: '`/v1/components/01b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.inputQuery}`',
    method: 'get',
    $data: "[['']]",
  },
  children: [
    {
      component: 'iview/Select',
      props: {
        class: 'departments-select',
        $clearable: true,
        $filterable: true,
        placeholder: "全部",
        $style: {
          width: '380px',
        },
        'v-model': 'craneStates.currentJob'
      },
      children: [
        {
          component: 'iview/Option',
          vfor: {
            data: "results.map((item, index) => ({index: item[0], name: item[0]}))",
            exports: {item: 'item', index: 'key'}
          },
          props: {
            $value: "item.index",
            $label: "item.name"
          },
          content: '{{item.name}}',
        }
      ]
    }
  ]

}
