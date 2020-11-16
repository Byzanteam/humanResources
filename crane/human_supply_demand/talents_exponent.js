const { subtitle_icon } = require('../share')

module.exports = [
  {
    id: 'talent-index-icon',
    position: [40, 288],
    ...subtitle_icon,
  },
  {
    id: 'talent-demand',
    component: 'div',
    position: [74, 286],
    props: {
      class: 'line-break-talent-demand',
      'data-content': '岗位排名：根据「区域」「时间」进行筛选统计查阅对应的企业人才需求岗位排名岗位薪资排名：根据「区域」「时间」进行筛选统计查阅岗位的薪资排名情况',
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '需求岗位排名',
  },
  {
    component: '@byzanteam/vis-components/brick-tabs',
    position: [110, 330],
    directive: {
      model: 'craneStates.tabCurrent',
    },
    props: {
      $tabNavs: 'craneStates.tabNavs',
      $activeTab: 'craneStates.tabCurrent'
    }
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [40, 392],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.tabCurrent === craneStates.tabNavs[0]',
      $url: "`/v1/components/04b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "null",
      $style: {
        width: '380px',
        height: '280px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: '@byzanteam/vis-components/vis-table',
        props: {
          'v-scroll': "{itemHeight: 40}",
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
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [40, 392],
    exports: {
      results: 'results',
    },
    props: {
      'v-if': 'craneStates.tabCurrent === craneStates.tabNavs[1]',
      $url: "`/v1/components/05b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`",
      method: 'get',
      $data: "null",
      $style: {
        width: '380px',
        height: '280px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: '@byzanteam/vis-components/vis-table',
        props: {
          'v-scroll': "{itemHeight: 40}",
          $withHeader: false,
          theme: 'dark',
          stripe: '',
          $headers: "[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'salary'}]",
          $data: "results ? results.map((item, index) => ({index: index + 1, salary: item[0], name: item[1]})) : [{index: 0, name: '暂无数据', salary: 0}]"
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
]
