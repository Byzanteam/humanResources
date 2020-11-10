const map = require('./map')
const table = require('./table')
const donut = require('./donut')
const partProduction = require('./part_production_digital')
const talentNumber = require('./talent_number_digital')
const rank = require('./rank')
const verticalBar = require('./vertical_bar')
const { page_title_content } = require('../share')
const datePicker = require('./date_picker')


module.exports = {
  route: {
    name: 'resources',
    path: ''
  },
  title: '全国人才资源态势总览',
  states: [
    {
      id: 'department',
      value: null
    },
    {
      id: 'mapData',
      value: []
    },
  ],
  components: [
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/hxrc/images/Bg.png'
      },
    },
    {
      id: 'box-bg',
      component: 'img',
      position: [10, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/hxrc/images/Box-Bg.png'
      },
    },
    {
      id: 'right-box-bg',
      component: 'img',
      position: [1471, 10],
      props: {
        $style: {
          width: '440px',
          height: '1059px',
        },
        src: '/hxrc/images/Box-Bg.png'
      },
    },
    datePicker,
    map,
    table,
    {
      id: 'title-bg',
      component: 'img',
      position: [607, 0],
      props: {
        $style: {
          width: '701px',
          height: '123px',
        },
        src: '/hxrc/images/Title-Bg.png'
      },
    },
    {
      ...page_title_content,
      content: '全省人才资源态势总览',
    },
    {
      id: 'talent-education',
      component: 'div',
      position: [73, 360],
      props: {
        'data-content': '根据「区域」选择统计该区域人才学历分布情况',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
          cursor: 'pointer',
        },
      },
      content: '人才学历层次',
    },
    {
      id: 'talent-industry',
      component: 'div',
      position: [1530, 46],
      props: {
        'data-content': '以「区域」作为筛选条件，统计分析历史简历数据判断岗位平均的流动时间并进行排名',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
          cursor: 'pointer',
        },
      },
      content: '人才流动岗位排名',
    },
    {
      id: 'industry-talent',
      component: 'div',
      position: [73, 740],
      props: {
        'data-content': '以「区域」作为筛选条件，统计该区域人才所在行业分布',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
          cursor: 'pointer',
        },
      },
      content: '人才专业占比',
    },
    {
      id: 'talent-demand',
      component: 'div',
      position: [1530, 704],
      props: {
        'data-content': '以「区域」作为筛选条件，统计各个行业发布的招聘人才数量',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
          cursor: 'pointer',
        },
      },
      content: '各行业人才需求',
    },
    {
      id: 'talent-education-icon',
      component: 'div',
      position: [40, 362],
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
      id: 'talent-industry-icon',
      component: 'div',
      position: [1498, 49],
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
      id: 'industry-talent-icon',
      component: 'div',
      position: [40, 742],
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
      id: 'talent-demand-icon',
      component: 'div',
      position: [1498, 707],
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
      id: 'value-circle',
      component: 'div',
      position: [104, 157],
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
      id: 'number-circle',
      component: 'div',
      position: [104, 237],
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
      id: 'production-bg',
      component: 'div',
      position: [40, 128],
      props: {
        $style: {
          height: '50px',
          width: '400px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'production-bg',
      component: 'div',
      position: [40, 208],
      props: {
        $style: {
          height: '50px',
          width: '400px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'departments-loader',
      component: 'div',
      position: [929, 125],
      children: [
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/brick-radio-button-select',
          props: {
            $options: "selectOptions",
            'v-model': 'craneStates.department',
            placeholder: '全省',
          },
        },
      ],
    },
    donut,
    partProduction,
    talentNumber,
    rank,
    verticalBar,
  ]
}
