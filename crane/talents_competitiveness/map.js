module.exports = [
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [864, 125],
    props: {
      $options: "provinceOptions",
      'v-model': 'craneStates.province',
      placeholder: '全省',
    }
  },
  {
    component: '@byzanteam/vis-components/brick-radio-button-select',
    position: [979, 125],
    props: {
      'v-if': 'craneStates.province',
      $options: "selectOptions",
      'v-model': 'craneStates.city',
      placeholder: '全省',
    }
  },
  {
  component: '@byzanteam/vis-components/data-loader',
  position: [480, 176],
  props: {
    $style: {
      width: '960px',
      height: '884px'
    }
  },
  children: [
    {
      id: 'map',
      component: 'v-chart',
      props: {
        $options: {
          backgroundColor: 'transparent',
          $geo: {
            $map: "craneStates.city ? craneStates.city.uuid : 'fujian'",
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
          $series: `[
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
              data: craneStates.mapData,
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
              data: craneStates.mapData,
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
