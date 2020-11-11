module.exports =
  {
    component: 'iview/RadioGroup',
    position: [37, 92],
    props: {
      'v-model': 'craneStates.indicator',
      type: 'button',
      $style: {
        width: '388px',
        height: '184px'
      },
    },
    children: [
      {
        component: 'iview/Radio',
        vfor: {
          data: "craneStates.indicators",
          exports: {item: 'item', index: 'key'}
        },
        props: {
          $label: 'item.name'
        },

      }
    ]
  }

