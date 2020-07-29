const map = require('./map')
const activity = require('./activity_number_bar')
const highLevel = require('./high_level_talent_bar')
const intro = require('./introduce_place_pie')
const donut = require('./talent_rank_dount')
const rank = require('./education_rank')
const activityDigital = require('./activity_number_digital')
const highLevelDigital = require('./high_level_talent_digital')
const date = require('./date_picker')
const { page_title_content } = require('../share')

module.exports = {
  route: {
    name: 'introduction',
    path: ''
  },
  title: '人才引进专题',
  states: [
    {
      id: 'year',
      value: ''
    },
    {
      id: 'dateRange',
      value: []
    },
    {
      id: 'selectedArea',
      value: {}
    },
    {
      id: 'selectOptions',
      value: [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}]
    },
    {
      id: 'department',
      value: null,
    }
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
    map,
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
    {
      ...page_title_content,
      content: '人才引进专题',
    },
    {
      id: 'activity-number',
      component: 'div',
      position: [74, 155],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引才活动数量统计',
    },
    {
      id: 'high-level-talent',
      component: 'div',
      position: [74, 631],
      props: {
        'data-content': '默认显示当年高层次人才引进人数，可根据「区域」「时间」查看对应区域与年份的引才人数与历年的引进数量',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '高层次人才引进统计',
    },
    {
      id: 'introduce-place',
      component: 'div',
      position: [1536, 46],
      props: {
        'data-content': '根据「区域」「时间」筛选统计引才活动发布方分布',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进渠道分析',
    },
    {
      id: 'talent-rank',
      component: 'div',
      position: [1536, 366],
      props: {
        'data-content': '根据活动要求需要的人类类型进行统计分析',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进人才职称分布',
    },
    {
      id: 'talent-education',
      component: 'div',
      position: [1536, 691],
      props: {
        'data-content': '根据「区域」「时间」筛选对应区域的引进人才的学历分布情况',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '引进人才学历分布',
    },
    {
      id: 'activity-number-icon',
      component: 'div',
      position: [40, 157],
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
      id: 'high-level-talent-icon',
      component: 'div',
      position: [40, 634],
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
      id: 'introduce-place-icon',
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
      id: 'talent-rank-icon',
      component: 'div',
      position: [1504, 369],
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
      id: 'talent-education-icon',
      component: 'div',
      position: [1504, 694],
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
      id: 'activity-number-circle',
      component: 'div',
      position: [128, 247],
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
      id: 'high-level-talent-circle',
      component: 'div',
      position: [104, 722],
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
      id: 'activity-bg',
      component: 'div',
      position: [30, 218],
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
      id: 'high-level-bg',
      component: 'div',
      position: [30, 693],
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
      component: '@byzanteam/vis-components/data-loader',
      position: [929, 125],
      children: [
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/brick-radio-button-select',
          props: {
            $options: "craneStates.selectOptions",
            'v-model': 'craneStates.department',
            placeholder: '全省',
          },
        },
      ],
    },
    activity,
    highLevel,
    intro,
    donut,
    rank,
    activityDigital,
    highLevelDigital,
    date,
  ]
}
