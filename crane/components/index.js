const map = require('./map')
const table = require('./table')
const donut = require('./donut')
const partProduction = require('./part_production_digital')
const talentNumber = require('./talent_number_digital')
const talentAge = require('./talent_age_index_digital')
const talentEducation = require('./talent_edution_index_digital')
const talentIndustry = require('./talent_industry_index_digital')
const talentQuality = require('./talent_quality_index_digital')
const talentRank = require('./talent_rank_index_digital')
const talentSynthesis = require('./talent_synthesis_index_digital')
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
      id: 'talent-index',
      component: 'div',
      position: [73, 262],
      props: {
        'data-content': '根据「区域」选择分析该地图人才指数分析数据，用于人才指数对比',
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
          cursor: 'pointer',
        },
      },
      content: '人才指数综合分析',
    },
    {
      id: 'talent-education',
      component: 'div',
      position: [73, 704],
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
      position: [1530, 388],
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
      content: '行业人才占比',
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
      id: 'talent-index-icon',
      component: 'div',
      position: [38, 265],
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
      position: [38, 707],
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
      position: [1498, 391],
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
      position: [104, 79],
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
      position: [104, 159],
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
      id: 'education-circle',
      component: 'div',
      position: [64, 364],
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
      id: 'rank-circle',
      component: 'div',
      position: [264, 364],
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
      id: 'age-circle',
      component: 'div',
      position: [64, 472],
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
      id: 'industry-circle',
      component: 'div',
      position: [264, 472],
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
      id: 'quality-circle',
      component: 'div',
      position: [64, 580],
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
      id: 'synthesis-circle',
      component: 'div',
      position: [264, 580],
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
      id: 'age-bg',
      component: 'div',
      position: [40, 324],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'education-bg',
      component: 'div',
      position: [240, 324],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'industry-bg',
      component: 'div',
      position: [40, 432],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'number-bg',
      component: 'div',
      position: [240, 432],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'quality-bg',
      component: 'div',
      position: [40, 540],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'synthesis-bg',
      component: 'div',
      position: [240, 540],
      props: {
        $style: {
          height: '80px',
          width: '180px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    {
      id: 'production-bg',
      component: 'div',
      position: [30, 50],
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
      position: [30, 130],
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
    talentAge,
    talentEducation,
    talentIndustry,
    talentQuality,
    talentRank,
    talentSynthesis,
    rank,
    verticalBar,
  ]
}
