module.exports = {
  position: [40, 48],
  component: 'iview/date-picker',
  props: {
    format: 'yyyy年',
    'v-model': 'craneStates.year',
    $style: {
      width: '380px',
      height: '50px'
    },
    $options: {
      $disabledDate: "(time) => {return !generateDateRange().includes(time.getFullYear())}"
    },
    type: 'year',
    class: 'supply-datepicker',
    placeholder: '选择时间'
  }
}
