const { mapColors } = require('../share')

module.exports = [
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [929, 125],
    props: {
      $options: "craneStates.selectOptions",
      'v-model': 'craneStates.department',
      placeholder: '全省',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [410, 160],
  props: {
    $url: "`${requestUrl}`",
    method: 'get',
    $data: "[[0, '暂无数据']]",
    $style: {
      width: '1100px',
      height: '900px'
    }
  },
  events: {
    requestDone: {
      params: ['param'],
      actions: ["setState('mapData', param.results.map((item) => ({name: item[1], value: item[0]})))"],
    },
  },
  children: [
    {
      id: 'map',
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $tooltip: {
            trigger: 'item',
            $formatter: "(params) => {return params.name + '<br />人才数量（人）：' + (isNaN(params.value) ? 0 : params.value)}",
            backgroundColor: '#566374f0',
          },
          $geo: {
            $map: "craneStates.department ? craneStates.department.uuid : 'fujian'",
            $label: {
              $normal: {
                $show: false
              },
              $emphasis: {
                $show: false,
              }
            },
            $itemStyle: {
              normal: {
                areaColor: '#0e3e7d',
                borderColor: '#68a4f0',
                borderType: 'solid',
                $borderWidth: 2
              },
              emphasis: {
                areaColor: '#29e8de',
              }
            },
            $regions: "[{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]",
          },
          $visualMap: {
            type: 'piecewise',
            $inverse: true,
            $pieces: "[{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}]",
            orient: 'horizontal',
            bottom: '6%',
            left: '26%',
            $textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
            $itemWidth: 18,
            $itemGap: 10,
            $textGap: 8,
            $inRange: {
              $color: mapColors
            }
          },
          $series: `[
            {
              type: 'map',
              mapType: craneStates.department ? craneStates.department.uuid : 'fujian',
              geoIndex: 0,
              data: craneStates.mapData,
              label: {
                show: true,
                fontSize: 15,
                color: 'white',
                fontWeight: 700
              },
              itemStyle: {
                areaColor: '#0e3e7d',
                borderColor: '#68a4f0',
                borderType: 'solid',
                borderWidth: 0.5
              },
              emphasis: {
                label: {
                  color: 'white',
                  fontWeight: 600,
                },
                itemStyle: {
                  areaColor: '#29e8de',
                  shadowColor: 'rgba(0, 0, 0, .5)',
                  shadowBlur: 12,
                  shadowOffsetX: 0,
                  shadowOffsetY: 10
                }
              },
            },
            {
              symbolSize: 0.1,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'bottom',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#fff'
                }
              },
              type: 'scatter',
              coordinateSystem: 'geo',
              data: [],
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: [48, 54],
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 500,
                  formatter (value){
                    return value.data.value[2]
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#41bcff',
                  opacity: 1
                }
              },
              data: [],
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              zlevel: 1
            },
          ]`
        }
      }
    }
  ]
}]
