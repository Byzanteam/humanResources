const { subtitle_icon } = require('../share')

module.exports = [
  {
    id: 'talent-index-icon',
    position: [1500, 50],
    ...subtitle_icon,
  },
  {
    id: 'talent-demand',
    component: 'div',
    position: [1533, 48],
    props: {
      'data-content': '根据「区域」「时间」进行筛选统计企业需求量显示 Top10 排名，以企业所属行业类型进行统计排名',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '6大重点行业的人才需求排名',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1500, 100],
    exports: {
      results: 'results',
    },
    props: {
      url: "/v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data",
      method: 'get',
      $data: "null",
      $style: {
        width: '380px',
        height: '221px',
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
          $headers: "[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'count'}]",
          $data: "results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1]})) : [{index: 0, name: '暂无数据', count: 0}]"
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
  },
]
