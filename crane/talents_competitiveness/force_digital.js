const {normal_digital_style} = require('../share')

module.exports = {
  id: 'force-value',
  component: '@byzanteam/vis-components/data-loader',
  position: [1614, 66],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/custom/daas/api/9f5c2cc6-f4cc-4757-8a01-7d79cbb06125?tableName=${dataTableName}&filter=city=${ craneStates.city && craneStates.city.label || '福州市'}&fields=value&orderBy=&pageSize=100&pageNumber=1&apiID=9a7c1d5e-2380-49ab-940b-56b70fc69b3e&apiKey=54fc233d9f2b4aa3a7f7b3bf04f4d158`",
    method: 'get',
    $data: "[[0]]",
  },
  children: [
    {
      id: 'force-value-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
        'data-content': '根据选择的对应十大指标体系结合「区域」统计分析该区域的综合竞争力指数',
        titlePosition: 'left',
        $content: {
          title: '竞争力指数',
          $digital: "digitalData",
        },
        $options: {
          separator: ',',
          $decimalPlaces: 1
        },
        ...normal_digital_style,
      }
    },
  ]
}
