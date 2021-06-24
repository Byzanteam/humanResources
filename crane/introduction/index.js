const map = require('./map')
const activity = require('./activity_number_line')
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
      id: 'province',
      value: 'PROVINCE_OPTIONS[0]'
    },
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
      id: 'department',
      value: null,
    }
  ],
  components: [
    map,
    {
      id: 'title-bg',
      component: 'img',
      position: [610, 0],
      props: {
        $style: {
          width: '701px',
          height: '123px',
        },
        src: '../../public/hxrc/images/Title-Bg.png'
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
        src: '../../public/hxrc/images/Box-Bg.png'
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
        src: '../../public/hxrc/images/Box-Bg.png'
      },
    },
    {
      ...page_title_content,
      content: '人才引进专题',
    },
    {
      id: 'activity-number',
      component: 'div',
      position: [74, 200],
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
      position: [74, 660],
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
            'data-content': '默认显示当年高层次人才引进人数，可根据「区域」「时间」查看对应区域与年份的引才人数与历年的引进数量',
            $style: {
              position: 'relative'
            }
          },
          content: '高层次人才引进统计',
        }
      ]
    },
    {
      id: 'introduce-place',
      component: 'div',
      position: [1536, 48],
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
            'data-content': '根据「区域」「时间」筛选统计引才活动发布方分布',
            $style: {
              position: 'relative'
            }
          },
          content: '引进渠道分析',
        }
      ]
    },
    {
      id: 'talent-rank',
      component: 'div',
      position: [1536, 380],
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
            'data-content': '根据活动要求需要的人类类型进行统计分析',
            $style: {
              position: 'relative'
            }
          },
          content: '引进人才职称分布',
        }
      ]
    },
    {
      id: 'talent-education',
      component: 'div',
      position: [1536, 700],
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
            'data-content': '根据「区域」「时间」筛选对应区域的引进人才的学历分布情况',
            $style: {
              position: 'relative'
            }
          },
          content: '引进人才学历分布',
        }
      ]
    },
    {
      id: 'activity-number-icon',
      component: 'div',
      position: [40, 200],
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
      position: [40, 663],
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
      position: [1504, 51],
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
      position: [1504, 383],
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
      position: [1504, 704],
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
      position: [128, 281],
      props: {
        $style: {
          height:'10px',
          width: '10px',
          borderRadius: '10px',
          borderWidth: '1px',
          borderColor: '#00fff2',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'high-level-talent-circle',
      component: 'div',
      position: [104, 741],
      props: {
        $style: {
          height:'10px',
          width: '10px',
          borderRadius: '10px',
          borderWidth: '1px',
          borderColor: '#00fff2',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'activity-bg',
      component: 'div',
      position: [40, 252],
      props: {
        $style: {
          height: '50px',
          width: '380px',
          backgroundColor: 'rgba(13,45,120,.45)',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'high-level-bg',
      component: 'div',
      position: [40, 712],
      props: {
        $style: {
          height: '50px',
          width: '380px',
          backgroundColor: 'rgba(13,45,120,.45)',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'departments-loader',
      component: 'div',
      props: {
        class: 'center-select',
      },
      children: [
        {
          component: '@byzanteam/vis-components/brick-radio-button-select',
          props: {
            $options: "provinceOptions",
            'v-model': 'craneStates.province',
            placeholder: '全省',
          }
        },
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/brick-radio-button-select',
          props: {
            $options: "craneStates.selectOptions",
            'v-model': 'craneStates.department',
            placeholder: '全省',
            $style: {
              marginLeft: '12px'
            }
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
