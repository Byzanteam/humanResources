module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 360],
  props: {
    $url: "tableRequestUrl",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '380px',
      height: '680px',
      overflow: 'scroll'
    }
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('mapData', param.results.map((item) => ({name: item.city, value: craneStates.areaCoordMap[item.city].concat(Number(item.value).toFixed(2))})))", "setState('tableData', param.results.map((item, index) => ({index: index + 1, name: item.city, value: Number(item.value).toFixed(2)})))"],
    },
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        'v-scroll': "{itemHeight: 40, headerHeight: 56}",
        theme: 'dark',
        stripe: '',
        $headers: "[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 140, key: 'value', title: '人才指标'}]",
        $data: "sortTableData"
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
