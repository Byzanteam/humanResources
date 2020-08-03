const { subtitle_text, subtitle_icon } = require('../share')
module.exports = [
  {
    id: 'talent-analysis',
    position: [77, 230],
    ...subtitle_text,
    content: '申报分析',
  },
  {
    id: 'apply-rank',
    position: [1507, 230],
    ...subtitle_text,
    content: '申报数排名',
  },
  {
    id: 'apply-route',
    position: [517, 230],
    ...subtitle_text,
    content: '申报途径',
  },
  {
    id: 'talent-type',
    position: [957, 230],
    ...subtitle_text,
    content: '认定类型',
  },
  {
    id: 'talent-past',
    position: [517, 590],
    ...subtitle_text,
    content: '引进类型',
  },
  {
    id: 'talent-now',
    position: [837, 590],
    ...subtitle_text,
    content: '人才引进',
  },
  {
    id: 'talent-abroad',
    position: [1157, 590],
    ...subtitle_text,
    content: '人才区域',
  },
  {
    id: 'talent-analysis-icon',
    position: [40, 232],
    ...subtitle_icon
  },
  {
    id: 'apply-rank-icon',
    position: [1470, 232],
    ...subtitle_icon
  },
  {
    id: 'apply-route-icon',
    position: [480, 232],
    ...subtitle_icon
  },
  {
    id: 'talent-type-icon',
    component: 'div',
    position: [920, 232],
    ...subtitle_icon
  },
  {
    id: 'talent-past-icon',
    position: [480, 592],
    ...subtitle_icon
  },
  {
    id: 'talent-now-icon',
    position: [800, 592],
    ...subtitle_icon
  },
  {
    id: 'talent-abroad-icon',
    position: [1120, 592],
    ...subtitle_icon
  },
]
