module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1490, 78],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/21b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department.label}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '400px',
      height: '254px',
      overflow: 'scroll'
    }
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        $withHeader: false,
        theme: 'dark',
        stripe: '',
        $headers: "[{width: 120, key: 'index'}, {width: 280, key: 'name'}]",
        $data: "results.map((item, index) => ({index: index + 1, name: item[0]}))"
      },
      children: [
        {
          component: 'template',
          exports: {
            cell: 'cell',
            columnKey: 'columnKey',
          },
          children: [
            {
              component: 'span',
              content: '{{cell}}',
              props: {
                $class: "columnKey === 'index' ? 'row-index-cell' : ''",
              },
            },
          ],
        },
      ]
    }
  ]
}
