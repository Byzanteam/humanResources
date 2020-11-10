const map = require('./map')
const table = require('./table')
const donut = require('./donut')
const partProduction = require('./part_production_digital')
const talentNumber = require('./talent_number_digital')
const rank = require('./rank')
const { page_title_content, page_title_bg } = require('../share')
const datePicker = require('./date_picker')
const talentsDemandChange = require('./talents_demand_change')
const mapThumbnail = require('./map_thumbnail')

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
    {
      id: 'mapThumbnailOptions',
      value: {backgroundColor: 'transparent', series: {type: 'map', mapType: 'china', itemStyle: {areaColor: '#0e3e7d', borderColor: '#68a4f0', borderWidth: 1}, emphasis: {label: {color: 'white', fontWeight: 600}, itemStyle: {areaColor: '#00fff2'}}}}
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
      ...page_title_bg,
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
      position: [1533, 360],
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
      position: [1500, 363],
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
      position: [40, 743],
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
          width: '380px',
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
          width: '380px',
          backgroundColor: '#6ad6ff1a',
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
    ...talentsDemandChange,
    donut,
    partProduction,
    talentNumber,
    rank,
    ...mapThumbnail,
  ]
}
