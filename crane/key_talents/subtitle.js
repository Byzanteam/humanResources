const {subtitle_icon, subtitle_text} = require('../share')
const data_content_subtitle_text = {
  $style: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'left',
    letterSpacing: '1px',
    cursor: 'pointer',
  },
}
module.exports = [
  {
    position: [40, 49],
    ...subtitle_icon
  },
  {
    position: [74, 46],
    ...subtitle_text,
    content: '高层次人才供需地图',
  },
  {
    position: [1504, 49],
    ...subtitle_icon
  },
  {
    position: [1536, 46],
    ...subtitle_text,
    content: '区域紧缺人才地图',
  },
  {
    position: [40, 561],
    ...subtitle_icon
  },
  {
    component: 'div',
    position: [74, 558],
    props: {
      ...data_content_subtitle_text
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '根据「区域」「供需需求关键字」选择统计该地区人才库中学历为「硕士」「博士」的人才数量',
          $style: {
            position: 'relative'
          }
        },
        content: '高层次人才供需变化',
      }
    ]
  },
  {
    component: 'div',
    position: [40, 809],
    ...subtitle_icon
  },
  {
    component: 'div',
    position: [74, 806],
    props: {
      ...data_content_subtitle_text
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '统计人才库中高层次人才类型分布情况',
          $style: {
            position: 'relative'
          }
        },
        content: '高层次人才类型分布',
      }
    ]
  },
  {
    position: [1504, 459],
    ...subtitle_icon
  },
  {
    component: 'div',
    position: [1536, 456],
    props: {
      ...data_content_subtitle_text
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '根据「区域」「时间」「行业类型」进行筛选统计对应行业的历年紧缺人才数量情况',
          $style: {
            position: 'relative'
          }
        },
        content: '区域紧缺人才趋势',
      }
    ]
  },
  {
    position: [1504, 809],
    ...subtitle_icon
  },
  {
    component: 'div',
    position: [1536, 806],
    props: {
      ...data_content_subtitle_text
    },
    children: [
      {
        component: 'div',
        props: {
          'data-content': '根据「区域」「时间」「行业类型」统计紧缺人才企业的行业分布情况',
          $style: {
            position: 'relative'
          }
        },
        content: '紧缺人才专业分布',
      }
    ]
  },
]
