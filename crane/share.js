exports.normal_digital_style = {
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $prefixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#6ad6ff',
    fontWeight: 400,
    fontFamily: 'Oswald-Regular',
    format: '11',
    letterSpacing: '2.4px',
  },
};

exports.small_digital_style = {
  $prefixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $suffixStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $titleStyle: {
    color: '#367391',
    fontSize: '16px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '32px',
    color: '#6ad6ff',
    fontWeight: 400,
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

exports.page_title_content = {
  component: 'div',
  position: [733, 38],
  events: {
    'click': {
      actions: ["openNavigator()"]
    }
  },
  props: {
    $style: {
      cursor: 'pointer',
      width: '454px',
      color: '#fff',
      fontSize: '42px',
      $fontWeight: '600',
      textAlign: 'center',
      $lineHeight: 1,
    }
  }
}

exports.subtitle_text= {
  component: 'div',
  props: {
    $style: {
      color: '#fff',
      fontSize: '18px',
      fontWeight: '600',
      textAlign: 'left',
      letterSpacing: '1px',
    },
  },
}

exports.subtitle_icon = {
  component: 'div',
  props: {
    $style: {
      color: '#6ad6ff',
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
    color: '#4b9bbe',
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
    color: '#4b9bbe',
    $fontSize: 12,
    $lineHeight: 15
  },
  inactiveColor: '#1C4159',
}

exports.color_series = "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']"

exports.digital_bg_400_50 = {
  component: 'div',
  props: {
    $style: {
      width: '400px',
      height: '50px',
      backgroundColor: 'rgba(106, 214, 255, .1)',
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
      borderColor: '#6ad6ff',
      borderStyle: 'solid',
    }
  },
}
