const title_style = {
  color: '#00fff2',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

const subtitle_style = {
  color: '#ffffff',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

const value_style = {
  color: '#00fff2',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

module.exports = [
  {
    id: 'talents-demand-change-icon',
    component: 'div',
    position: [1500, 742],
    props: {
      $style: {
        color: '#6ad6ff',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'left',
      },
    },
    content: '>>',
  },
  {
    id: 'talents-demand-change-title·',
    component: 'div',
    position: [1533, 740],
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
    content: '全国人才区域分布',
  },
  {
    component: 'div',
    children: [
      {
        component: 'v-chart',
        id: 'map-thumbnail-chart',
        position: [1500, 792],
        props: {
          $style: {
            width: '240px',
            height: '248px',
          },
          $options: "craneStates.mapThumbnailOptions"
        }
      }
    ]
  },
  {
    component: 'span',
    position: [1776, 792],
    props: {
      $style: title_style
    },
    content: '人才全国占比'
  },
  {
    component: 'div',
    position: [1765, 824],
    children: [
      {
        component: 'span',
        content: '·',
        props: {
          $style: {
            marginRight: '4px',
            color: '#ffffff'
          }
        }
      },
      {
        component: 'span',
        props: {
          $style: subtitle_style
        },
        content: '人才总数占比'
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1776, 848],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/54b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: value_style
    },
    content: '{{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}'
  },
  {
    component: 'div',
    position: [1765, 876],
    children: [
      {
        component: 'span',
        content: '·',
        props: {
          $style: {
            marginRight: '4px',
            color: '#ffffff'
          }
        }
      },
      {
        component: 'span',
        props: {
          $style: subtitle_style
        },
        content: '第一产业人才'
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1776, 900],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/51b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: value_style
    },
    content: '{{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}'
  },
  {
    component: 'div',
    position: [1765, 928],
    children: [
      {
        component: 'span',
        content: '·',
        props: {
          $style: {
            marginRight: '4px',
            color: '#ffffff'
          }
        }
      },
      {
        component: 'span',
        props: {
          $style: subtitle_style
        },
        content: '第二产业人才'
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1776, 952],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/52b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: value_style
    },
    content: '{{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}'
  },
  {
    component: 'div',
    position: [1765, 980],
    children: [
      {
        component: 'span',
        content: '·',
        props: {
          $style: {
            marginRight: '4px',
            color: '#ffffff'
          }
        }
      },
      {
        component: 'span',
        props: {
          $style: subtitle_style
        },
        content: '第三产业人才'
      }
    ]
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1776, 1004],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/53b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea ? currentArea : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: value_style
    },
    content: '{{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}'
  },
]
