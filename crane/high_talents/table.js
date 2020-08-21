module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1470, 280],
  exports: {
    results: 'results',
  },
  props: {
    $url: '`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data`',
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '428px',
      height: '546px',
    }
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        theme: 'dark',
        stripe: '',
        $headers: "[{width: 88, key: 'index',}, {width: 226, key: 'name', title: '单位名称'}, {width: 114, key: 'value', title: '申报人数'}]",
        $data: "results.map((item, index) => ({index: index + 1, name: item[0], value: item[1]}))",
        $style: {
          overflow: 'scroll'
        }
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
