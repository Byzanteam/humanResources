module.exports = {
  id: 'job_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 50],
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
        $style: {
          width: '380px',
        },
        'v-model': 'craneStates.currentJob'
      },
      children: [
        {
          component: 'template',
          slot: 'input',
          props: {
            class: 'ivu-select-selection'
          },
          children: [
            {
              component: 'input',
              props: {
                'v-model': 'craneStates.inputQuery',
                type: 'text',
                placeholder: '全部',
                class: 'ivu-select-input'
              }
            },
            {
              component: 'i',
              props: {
                class: "ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow"
              }
            }
          ]
        },
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
