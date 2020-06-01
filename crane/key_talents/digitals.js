const {small_digital_style} = require('../share')

const digital_style = {
  ...small_digital_style,
  letterSpacing: '0.8px',
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
}

module.exports = [
  {
    component: 'div',
    position: [10, 10],
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
    component: 'div',
    position: [74, 46],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '高层次人才供需地图',
  },
  {
    component: 'div',
    position: [30, 88],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [119, 117],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 94],
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '人才数量统计',
            $digital: 5200,
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '196px',
            height: '39px'
          },
          ...digital_style
        }
      },
    ]
  },
  {
    component: 'div',
    position: [30, 154],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [119, 183],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [145, 160],
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '人才引进统计',
            $digital: 67,
            suffix: '次',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '158px',
            height: '39px'
          },
          ...digital_style
        }
      },
    ]
  },
  {
    component: 'div',
    position: [1504, 49],
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
    component: 'div',
    position: [1536, 46],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '区域紧缺人才地图',
  },
  {
    component: 'div',
    position: [1490, 128],
    props: {
      $style: {
        width: '400px',
        height: '50px',
        backgroundColor: 'rgba(106, 214, 255, .02)',
        borderRadius: '5px'
      }
    }
  },
  {
    id: 'value-circle',
    component: 'div',
    position: [1588, 157],
    props: {
      $style: {
        height:'10px',
        width: '10px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: '#6ad6ff',
        borderStyle: 'solid',
      }
    },
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1614, 134],
    children: [
      {
        id: 'talent-age-index-content',
        component: '@byzanteam/vis-components/digital-roll',
        props: {
          titlePosition: 'left',
          $content: {
            title: '紧缺人才数量',
            $digital: 564,
            suffix: '人',
          },
          $options: {
            separator: '',
          },
          $style: {
            width: '178px',
            height: '39px'
          },
          ...digital_style,
        }
      },
    ]
  }
]