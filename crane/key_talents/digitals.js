const {normal_digital_style, digital_circle_icon, digital_bg} = require('../share')

module.exports = [
  // 人才数量统计
  {
    component: 'div',
    position: [40, 84],
    props: {
      $style: {
        width: '380px',
        height: '143px',
        backgroundColor: 'rgba(13, 45, 120, .45)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    position: [119, 117],
    ...digital_circle_icon
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 94],
    props: {
      $url: "`/v1/components/24b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}`",
      method: 'get',
      $data: "[[0]]",
    },
    exports: {
      results: 'results',
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          'data-content': '统计人才库中学历为「硕士」「博士」的人才数量',
          titlePosition: 'left',
          $content: {
            title: '人才数量统计',
            $digital: "results ? results[0][0] : 0",
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '196px',
            height: '39px'
          },
          ...normal_digital_style
        }
      },
    ]
  },

  // 人才引进统计
  {
    position: [40, 243],
    ...digital_bg
  },
  {
    id: 'value-circle',
    position: [119, 183],
    ...digital_circle_icon
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 160],
    props: {
      $url: "`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentShortageType|| ''}&year=${this.craneStates.year ? this.craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
      method: 'get',
      $data: "[[0]]",
    },
    exports: {
      results: 'results',
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          'data-content': '统计历年举行的人才引进活动次数',
          titlePosition: 'left',
          $content: {
            title: '人才引进统计',
            $digital: "results ? results[0][0] : 0",
            suffix: '次',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '278px',
            height: '39px'
          },
          ...normal_digital_style
        }
      },
    ]
  },

  // 紧缺人才数量
  {
    position: [1500, 128],
    ...digital_bg
  },
  {
    id: 'value-circle',
    position: [1588, 157],
    ...digital_circle_icon
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1614, 134],
    props: {
      $url: "`/v1/components/29b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentShortageType|| ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
      method: 'get',
      $data: "[[0]]",
    },
    exports: {
      results: 'results',
    },
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          'data-content': '默认统计所有行业供大于求判定为紧缺人才，可根据「区域」「时间」「行业类型」进行筛选统计对应行业的紧缺人才数量情况',
          titlePosition: 'left',
          $content: {
            title: '紧缺人才数量',
            $digital: "results ? results[0][0] : 0",
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '278px',
            height: '39px'
          },
          ...normal_digital_style,
        }
      },
    ]
  }
]
