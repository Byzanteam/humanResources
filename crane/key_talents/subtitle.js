const {subtitle_icon, subtitle_text} = require('../share')

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
]
