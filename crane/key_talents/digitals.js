const {normal_digital_style, small_digital_style, digital_circle_icon, digital_bg} = require('../share')

const small_digital_container = {
  component: 'div',
  props: {
    $style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems : 'center',
      flexDirection: 'column',
      width: '120px'
    }
  }
}
const small_digital_title = {
  component: 'div',
  props: {
    $style: {
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 400,
    }
  }
}
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
    position: [80, 117],
    ...digital_circle_icon
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [106, 94],
    props: {
      $url: "`/v1/components/55b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea ? currentArea : ''}`",
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
            title: '中高端人才总数',
            $digital: "results[0][0] ? results[0][0] : 0",
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '250px',
            height: '39px'
          },
          ...normal_digital_style
        }
      },
    ]
  },

    // 杰出人才 领军人才 紧缺人才
  {
    id: 'cut-line',
    component: 'div',
    position: [50, 146],
    props: {
      $style: {
        width: '360px',
        borderBottom: '1px solid rgba(69, 137, 225, .5)'
      }
    }
  },
  {
    ...small_digital_container,
    position: [50, 163],
    children: [
      {
        ...small_digital_title,
        content: '杰出人才'
      },
      {
        component: '@byzanteam/vis-components/data-loader',
        props: {
          $url: "`/v1/components/56b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea ? currentArea : ''}`",
          method: 'get',
          $data: "[[0]]",
        },
        exports: {
          results: 'results',
        },
        children: [
          {
            component: '@byzanteam/vis-components/digital-roll',
            props: {
              $content: {
                $digital: "results[0][0] ? results[0][0] : 0",
                suffix: '人',
              },
              $options: {
                separator: '',
              },
              ...small_digital_style
            }
          },
        ]
      },
    ]
  },
  {
    ...small_digital_container,
    position: [170, 163],
    children: [
      {
        ...small_digital_title,
        content: '领军人才'
      },
      {
        component: '@byzanteam/vis-components/data-loader',
        props: {
          $url: "`/v1/components/57b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea ? currentArea : ''}`",
          method: 'get',
          $data: "[[0]]",
        },
        exports: {
          results: 'results',
        },
        children: [
          {
            component: '@byzanteam/vis-components/digital-roll',
            props: {
              $content: {
                $digital: "results[0][0] ? results[0][0] : 0",
                suffix: '人',
              },
              $options: {
                separator: '',
              },
              ...small_digital_style
            }
          },
        ]
      },
    ]
  },
  {
    ...small_digital_container,
    position: [290, 163],
    children: [
      {
        ...small_digital_title,
        content: '紧缺人才'
      },
      {
        component: '@byzanteam/vis-components/data-loader',
        props: {
          $url: "`/v1/components/58b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea ? currentArea : ''}`",
          method: 'get',
          $data: "[[0]]",
        },
        exports: {
          results: 'results',
        },
        children: [
          {
            component: '@byzanteam/vis-components/digital-roll',
            props: {
              $content: {
                $digital: "results[0][0] ? results[0][0] : 0",
                suffix: '人',
              },
              $options: {
                separator: '',
              },
              ...small_digital_style
            }
          },
        ]
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
    position: [130, 272],
    ...digital_circle_icon
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [156, 249],
    props: {
      $url: "`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`",
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
            $digital: "results[0][0] ? results[0][0] : 0",
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
      $url: "`/v1/components/58b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea ? currentArea : ''}`",
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
            $digital: "results[0][0] ? results[0][0] : 0",
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
