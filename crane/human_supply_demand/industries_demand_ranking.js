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
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '根据「区域」「时间」进行筛选统计企业需求量显示 Top10 排名，以企业所属行业类型进行统计排名',
          $style: {
            position: 'relative'
          }
        },
        content: '6大重点行业的人才需求排名',
      }
    ]
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
        height: '240px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: '@byzanteam/vis-components/vis-table',
        props: {
          'v-scroll': "{itemHeight: 40, headerHeight: 56}",
          theme: 'dark',
          stripe: '',
          $headers: "[{width: 60, key: 'index'}, {width: 140, key: 'name', title: '行业名称'}, {width: 100, key: 'count', title: '需求人数'}, {width: 100, key: 'ratio', title: '供求比'}]",
          $data: "results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1] || 0, ratio: item[2] || 0})) : [{index: 0, name: '暂无数据', count: 0, ratio: 0}]"
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
