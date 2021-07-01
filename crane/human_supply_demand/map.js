module.exports = [
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [480, 176],
    props: {
      $style: {
        width: '1100px',
        height: '900px'
      }
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
  },
  {
    component: 'div',
    props: {
      class: 'center-select',
    },
    children: [
      {
        id: 'departments-select',
        component: '@byzanteam/vis-components/brick-radio-button-select',
        props: {
          $options: "craneStates.selectOptions",
          'v-model': 'craneStates.department',
          placeholder: '全省',
          $style: {
            marginLeft: '12px'
          }
        },
      },
    ],
  },
]
