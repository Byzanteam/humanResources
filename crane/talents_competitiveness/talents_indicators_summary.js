module.exports =
  {
    component: '@byzanteam/vis-components/data-loader',
    props: {
      $url: "`/custom/daas/api/9f5c2cc6-f4cc-4757-8a01-7d79cbb06125?tableName=${dataTableName}&filter=city=${ craneStates.city && craneStates.city.label || '福州市'}&fields=index_2&orderBy=&pageSize=100&pageNumber=1&apiID=9a7c1d5e-2380-49ab-940b-56b70fc69b3e&apiKey=54fc233d9f2b4aa3a7f7b3bf04f4d158`",
      method: 'get',
      $data: "[]",
    },
    events: {
      requestDone: {
        params: ['param'],
        actions: ["setState('indicators', param.results.map(item => ({name: item.index_2})))"],
      },
    },
    children: [
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
    ]
  }

