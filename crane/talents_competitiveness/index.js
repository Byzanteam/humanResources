const map = require('./map')
const table = require('./table')
const talentsIndicatorsSummary = require('./talents_indicators_summary')
const radar = require('./radar')
const digital = require('./force_digital')
const { page_title_content } = require('../share')

module.exports = {
  route: {
    name: 'talents_competitiveness',
    path: 'talents-competitiveness'
  },
  title:'省域人才综合竞争力',
  states: [
    {
      id: 'province',
      value: {label: '福建', uuid: 1}
    },
    {
      id: 'city',
      value: ''
    },
    {
      id: 'indicators',
      value: [{name: '人才数量指标'}, {name: '人才质量指标'}, {name: '人才结构指标'}, {name: '人才投入指标'}, {name: '人才平台指标'}, {name: '人才生活指标'}, {name: '人才环境指标'}, {name: '人才效能指标'}, {name: '人才效益指标'}, {name: '人才发展指标'}]
    },
    {
      id: 'indicator',
      value: '人才数量指标'
    },
    {
      id: 'types',
      value: [
        {index: 1, name: '四川省'},
        {index: 2, name: '重庆市'},
        {index: 3, name: '青海省'},
        {index: 4, name: '浙江省'},
        {index: 5, name: '湖南省'},
        {index: 6, name: '湖北省'},
        {index: 7, name: '甘肃省'},
        {index: 8, name: '山东省'},
        {index: 9, name: '江苏省'},
        {index: 10, name: '江西省'},
        {index: 11, name: '福建省'},
        {index: 12, name: '贵州省'},
        {index: 13, name: '陕西省'},
        {index: 14, name: '山西省'},
      ]
    },
    {
      id: 'currentProvince',
      value: []
    },
    {
      id: 'selectedArea',
      value: {}
    },
    {
      id: 'radarData',
      value: []
    },
    {
      id: 'mapData',
      value: []
    },
    {
      id: 'tableData',
      value: []
    },
    {
      id: 'multipleSelectData',
      value: []
    },
    {
      id: 'areaCoordMap',
      value: {
        '福州市': [119.306239,26.075302],
        '厦门市': [118.11022,24.490474],
        '莆田市': [119.007558,25.431011],
        '三明市': [117.635001,26.265444],
        '泉州市': [118.589421,24.908853],
        '漳州市': [117.661801,24.510897],
        '南平市': [118.178459,26.635627],
        '龙岩市': [117.02978,25.091603],
        '宁德市': [119.527082,26.65924],
        '鼓楼区': [119.29929,26.082284],
        '台江区': [119.310156,26.058616],
        '仓山区': [119.320988,26.038912],
        '马尾区': [119.458725,25.991975],
        '晋安区': [119.328597,26.078837],
        '长乐区': [119.510849,25.960583],
        '闽侯县': [119.145117,26.148567],
        '连江县': [119.538365,26.202109],
        '罗源县': [119.552645,26.487234],
        '闽清县': [118.868416,26.223793],
        '永泰县': [118.939089,25.864825],
        '平潭县': [119.791197,25.503672],
        '福清市': [119.376992,25.720402],
        '思明区': [118.087828,24.462059],
        '海沧区': [118.036364,24.492512],
        '湖里区': [118.10943,24.512764],
        '集美区': [118.100869,24.572874],
        '同安区': [118.150455,24.729333],
        '翔安区': [118.242811,24.637479],
        '城厢区': [119.001028,25.433737],
        '涵江区': [119.119102,25.459273],
        '荔城区': [119.020047,25.430047],
        '秀屿区': [119.092607,25.316141],
        '仙游县': [118.694331,25.356529],
        '梅列区': [117.63687,26.269208],
        '三元区': [117.607418,26.234191],
        '明溪县': [117.201845,26.357375],
        '清流县': [116.815821,26.17761],
        '宁化县': [116.659725,26.259932],
        '大田县': [117.849355,25.690803],
        '尤溪县': [118.188577,26.169261],
        '沙县': [117.789095,26.397361],
        '将乐县': [117.473558,26.728667],
        '泰宁县': [117.177522,26.897995],
        '建宁县': [116.845832,26.831398],
        '永安市': [117.364447,25.974075],
        '鲤城区': [118.588929,24.907645],
        '丰泽区': [118.605147,24.896041],
        '洛江区': [118.670312,24.941153],
        '泉港区': [118.912285,25.126859],
        '惠安县': [118.798954,25.028718],
        '安溪县': [118.186014,25.056824],
        '永春县': [118.29503,25.320721],
        '德化县': [118.242986,25.489004],
        '金门县': [118.323221,24.436417],
        '石狮市': [118.628402,24.731978],
        '晋江市': [118.577338,24.807322],
        '南安市': [118.387031,24.959494],
        '芗城区': [117.656461,24.509955],
        '龙文区': [117.671387,24.515656],
        '云霄县': [117.340946,23.950486],
        '漳浦县': [117.614023,24.117907],
        '诏安县': [117.176083,23.710834],
        '长泰县': [117.755913,24.621475],
        '东山县': [117.427679,23.702845],
        '南靖县': [117.365462,24.516425],
        '平和县': [117.313549,24.366158],
        '华安县': [117.53631,25.001416],
        '龙海市': [117.817292,24.445341],
        '延平区': [118.178918,26.636079],
        '建阳区': [118.12267,27.332067],
        '顺昌县': [117.80771,26.792851],
        '浦城县': [118.536822,27.920412],
        '光泽县': [117.337897,27.542803],
        '松溪县': [118.783491,27.525785],
        '政和县': [118.858661,27.365398],
        '邵武市': [117.491544,27.337952],
        '武夷山市': [118.032796,27.751733],
        '建瓯市': [118.321765,27.03502],
        '新罗区': [117.030721,25.0918],
        '永定区': [116.732691,24.720442],
        '长汀县': [116.361007,25.842278],
        '上杭县': [116.424774,25.050019],
        '武平县': [116.100928,25.08865],
        '连城县': [116.756687,25.708506],
        '漳平市': [117.42073,25.291597],
        '蕉城区': [119.527225,26.659253],
        '霞浦县': [120.005214,26.882068],
        '古田县': [118.743156,26.577491],
        '屏南县': [118.987544,26.910826],
        '寿宁县': [119.506733,27.457798],
        '周宁县': [119.338239,27.103106],
        '柘荣县': [119.898226,27.236163],
        '福安市': [119.650798,27.084246],
        '福鼎市': [120.219761,27.318884]
      }
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
      content: '省域人才综合竞争力',
    },
    ...map,
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
    {
      id: 'force-digital-bg',
      component: 'div',
      position: [1490, 60],
      props: {
        $style: {
          height: '50px',
          width: '400px',
          backgroundColor: '#6ad6ff1a',
          borderRadius: '5px',
        }
      }
    },
    talentsIndicatorsSummary,
    radar,
    {
      id: 'province-talent-number',
      component: 'div',
      position: [74, 46],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '省域人才指标汇总',
    },
    {
      id: 'province-talent-number-icon',
      component: 'div',
      position: [48, 49],
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
      id: 'ten-number',
      component: 'div',
      position: [1536, 216],
      props: {
        $style: {
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          letterSpacing: '1px',
        },
      },
      content: '10大指标汇总',
    },
    {
      id: 'ten-number-icon',
      component: 'div',
      position: [1512, 219],
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
      id: 'force-circle',
      component: 'div',
      position: [1588, 89],
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
      component: '@byzanteam/vis-components/data-loader',
      position: [1500, 299],
      exports: {
        results: 'results',
      },
      props: {
        $url: "areaSelectRequestUrl",
        method: 'get',
        $data: "[['暂无数据']]",
      },
      children: [
        {
          id: 'area-select',
          component: 'iview/Select',
          props: {
            $multiple: true,
            placeholder: '选择省市',
            class: 'map-select',
            $style: {
              width: '382px',
            },
            'v-model': 'craneStates.currentProvince'
          },
          children: [
            {
              component: 'iview/Option',
              vfor: {
                data: "results",
                exports: {item: 'item', index: 'key'}
              },
              props: {
                $value: "item[0]",
                $label: "item[0]"
              },
              content: '{{item[0]}}',
            }
          ]
        },
      ]
    },
    table,
    digital
  ]
}
