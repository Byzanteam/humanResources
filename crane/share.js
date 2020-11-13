exports.normal_digital_style = {
  $titleStyle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 400,
  },
  $prefixStyle: {
    color: '#00fff2',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#00fff2',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#00fff2',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    lineHeight: '38px',
    letterSpacing: '2.4px',
  },
};

exports.small_digital_style = {
  $suffixStyle: {
    color: '#00fff2',
    fontSize: '16px',
    fontWeight: 400,
  },
  $titleStyle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '20px',
    color: '#00fff2',
    fontWeight: 600,
    lineHeight: '32px',
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '2.4px',
  },
};

const chartTooltipOptions = {
  $tooltip: {
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $notation: {
      fill: '#367391',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: '#566374f0',
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $title:{
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
  }
};

exports.chartTooltipOptions = chartTooltipOptions;

exports.page_title_bg = {
  position: [610, 0],
  props: {
    $style: {
      width: '700px',
      height: '124px',
    },
    src: '/hxrc/images/Title-Bg.png'
  },
}

exports.page_title_content = {
  component: 'div',
  position: [730, 36],
  events: {
    'click': {
      actions: ["openNavigator()"]
    }
  },
  props: {
    $style: {
      cursor: 'pointer',
      width: '460px',
      color: '#fff',
      fontSize: '42px',
      $fontWeight: '600',
      textAlign: 'center',
      $lineHeight: 1,
    }
  }
}

exports.subtitle_text = {
  component: 'div',
  props: {
    $style: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'left',
      letterSpacing: '1px',
      cursor: 'pointer',
    },
  },
}

exports.subtitle_icon = {
  component: 'div',
  props: {
    $style: {
      color: '#41bcff',
      fontSize: '14px',
      fontWeight: 400,
      textAlign: 'left',
    },
  },
  content: '>>',
}

exports.high_level_legendStyle_normal = {
  icon: 'circle',
  $itemWidth: 10,
  $itemHeight: 10,
  $left: 250,
  top: 'middle',
  $itemGap: 9,
  orient: 'vertical',
  $textStyle: {
    color: '#ffffff',
    $fontSize: 12,
    $lineHeight: 15
  },
  inactiveColor: '#1C4159',
}

exports.high_level_legendStyle_small = {
  icon: 'circle',
  $itemWidth: 10,
  $itemHeight: 10,
  $left: 180,
  top: 'middle',
  $itemGap: 9,
  orient: 'vertical',
  $textStyle: {
    color: '#ffffff',
    $fontSize: 12,
    $lineHeight: 15
  },
  inactiveColor: '#1C4159',
}

exports.digital_bg = {
  component: 'div',
  props: {
    $style: {
      width: '380px',
      height: '50px',
      backgroundColor: 'rgba(13, 45, 120, .45)',
      borderRadius: '5px'
    }
  }
}

exports.digital_circle_icon = {
  component: 'div',
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
}

exports.rankingStyle = {
  'v-scroll': "{itemHeight: 47}",
  $labelStyle: {
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '24px',
  },
  $valueStyle: {
    color: '#00fff2',
    fontSize: '16px',
    fontFamily: 'Oswald-Regular',
    lineHeight: '1.5',
    fontWeight: 400,
  },
  $lineStyle: {
    background: '#ffffff1a',
    $lineColor: "['#7d40ff', '#00fff2']",
    height: '8px',
    borderRadius: '2.5px',
    marginTop: '3px'
  },
}

exports.serieColors = "['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446']"

exports.mapColors = "['#1c44a2', '#2174bb', '#e0ad3a', '#d98278', '#bb4e54']"

exports.axisLabelStyle = {
  color: 'rgba(255, 255, 255, .8)',
  $fontSize: 14,
  $fontWeight: 400,
}
