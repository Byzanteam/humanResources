module.exports = {
  id: 'department_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [760, 140],
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('selectOptions', param.results ? param.results.map((item, index) => ({index: item[0], name: item[0]})) : [])"],
    },
  },
  props: {
    $url: '`/v1/components/00004ddd-39de-493f-84ab-9d87fcf23fee/data`',
    method: 'get',
    $data: "[['']]",
  },
  children: [
    {
      component: 'iview/Select',
      props: {
        class: 'departments-select',
        $clearable: true,
        $style: {
          width: '400px',
        },
        'v-model': 'craneStates.currentDepartment'
      },
      children: [
        {
          component: 'iview/Option',
          vfor: {
            data: "craneStates.selectOptions",
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
