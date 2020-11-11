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
      actions: ["setState('mapData', param.results.map((item) => ({name: item[1], value: craneStates.areaCoordMap[item[1]].concat(item[0].toFixed(2))})))", "setState('tableData', param.results.map((item, index) => ({index: index + 1, name: item[1], value: item[0].toFixed(2)})))"],
    },
  },
  children: [
    {
      component: '@byzanteam/vis-components/vis-table',
      props: {
        theme: 'dark',
        stripe: '',
        $headers: "[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 160, key: 'value', title: '人才质量指标'}]",
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
