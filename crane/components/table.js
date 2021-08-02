module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1500, 400],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/21b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
    method: 'get',
    $data: "[['暂无数据']]",
    $style: {
      width: '380px',
      height: '280px',
      overflow: 'scroll'
    }
  },
  children: [
    {
      component: 'div',
      props: {
        $style: {
          overflow: 'scroll',
          height: '100%',
        }
      },
      children: [
        {
          component: '@byzanteam/vis-components/vis-table',
          props: {
            'v-scrollUpdate': "{itemHeight: 40, scrollRadio: scrollRadio}",
            '@mouseover.native': 'closeScrollRadio',
            '@mouseleave.native': 'openScrollRadio',
            $withHeader: false,
            theme: 'dark',
            stripe: '',
            $headers: "[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'count'}]",
            $data: "results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1] || 0})) : [{index: 0, name: '暂无数据', count: 0}]"
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
}
