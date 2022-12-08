<template>
  <div class="talents_competitiveness" v-if="isShow">
    <navigator ref="navigator"/>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="../../public/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '465px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      省域人才综合竞争力评估
    </div>
    <data-loader :style="{width: '960px', height: '884px', position: 'absolute', top: '176px', left: '480px'}">
      <v-chart ref="map" :options="{backgroundColor: 'transparent', geo: {map: craneStates.city ? craneStates.city.uuid : 'fujian', label: {normal: {show: false}, emphasis: {show: false}}, itemStyle: {normal: {areaColor: '#0e3e7d', borderColor: '#68a4f0', borderType: 'solid', borderWidth: 2}, emphasis: {areaColor: '#29e8de'}}, regions: [{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]}, series: [
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
                ]}" />
    </data-loader>
    <div class="center-select">
      <brick-radio-button-select :options="provinceOptions" v-model="craneStates.province" placeholder="全省" />
      <brick-radio-button-select :options="yearOptions" v-model="craneStates.currentYear" :placeholder="yearOptions[0].label" :style="{marginLeft: '12px'}" />
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <div ref="force-digital-bg" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '60px', left: '1500px'}" />
    <data-loader @requestDone="(param)=>[setState('indicators', param.results.map(item => ({name: item.index_2})))]" :url="RadioRequestUrl" method="get" :data="[]">
      <RadioGroup v-model="craneStates.indicator" type="button" :style="{width: '388px', height: '184px', position: 'absolute', top: '92px', left: '37px'}">
        <Radio v-for="(item, key) in craneStates.indicators" v-if="item.name !== '综合指标'" :key="key" :label="item.name" />
      </RadioGroup>
    </data-loader>
    <data-loader @requestDone="(param)=>[setState('radarData', param.results || [])]" :url="radarRequestUrl" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '480px', position: 'absolute', top: '455px', left: '1500px'}">
      <v-chart :options="{legend: {orient: 'vertical', top: 274, icon: 'circle', inactiveColor: '#1C4159', itemGap: 5, itemWidth: 10, itemHeight: 10, textStyle: {color: '#ffffff', fontSize: 14, padding: [2, 4]}}, tooltip: {trigger: 'item', backgroundColor: '#566374f0'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], radiusAxis: {axisLine: {color: '#19394f'}, splitLine: {color: '#19394f'}}, radar: {shape: 'circle', center: ['50%', '26%'], radius: '50% ', name: {textStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}}, axisLine: {lineStyle: {color: '#19394f'}}, splitArea: {areaStyle: {color: 'transparent'}}, splitLine: {lineStyle: {color: '#19394f'}}, indicator: craneStates.indicators}, series: [{
                  type: 'radar',
                  areaStyle: {opacity: 0.2},
                  lineStyle: {width: 1},
                  axisLine: {},
                  symbol: 'none',
                  data: generateRadarData()
                }
              ]}" />
    </data-loader>
    <div ref="province-talent-number" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '48px', left: '74px'}">
      <div data-content="根据选择的对应十大指标体系结合「区域」检索对应区域对应的指标排名情况" :style="{position: 'relative'}">
        省域人才指标汇总
      </div>
    </div>
    <div ref="province-talent-number-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '50px', left: '40px'}">
      >>
    </div>
    <div ref="ten-number" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '214px', left: '1533px'}">
      <div data-content="区域为省级可横向对比市级的指标指数对比，区域为市级可横向对应区级的指标指数对比" :style="{position: 'relative'}">
        18大指标汇总
      </div>
    </div>
    <div ref="ten-number-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '217px', left: '1500px'}">
      >>
    </div>
    <div ref="force-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '89px', left: '1588px'}" />
    <div :style="{position: 'absolute', top: '299px', left: '1500px'}">
      <Select ref="area-select" :multiple="true" placeholder="选择省市" class="map-select" :style="{width: '382px'}" v-model="craneStates.currentProvince">
        <Option v-for="(item, key) in craneStates.multipleSelectData" :key="key" :value="item[0]" :label="item[0]">
          {{item[0]}}
        </Option>
      </Select>
    </div>
    <data-loader @requestDone="(param)=>[setState('mapData', param.results.map((item) => ({name: item.city, value: craneStates.areaCoordMap[item.city].concat(Number(item.value).toFixed(2))}))), setState('tableData', param.results.map((item, index) => ({name: item.city, value: Number(item.value).toFixed(2)})))]" :url="tableRequestUrl" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '594px', overflow: 'scroll', position: 'absolute', top: '446px', left: '40px'}">
      <vis-table v-scroll="{itemHeight: 40, headerHeight: 56}" theme="dark" stripe="" :headers="[{width: 80, key: 'index',}, {width: 160, key: 'name', title: '省市排名'}, {width: 140, key: 'value', title: '人才指标'}]" :data="sortTableData">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader ref="force-value" v-slot="{ results: results }" :url="digitalRequestUrl" method="get" :data="[[0]]" :style="{position: 'absolute', top: '66px', left: '1614px'}">
      <digital-roll ref="force-value-content" v-if="results" data-content="根据选择的对应十大指标体系结合「区域」统计分析该区域的综合竞争力指数" titlePosition="left" :content="{title: '福建省综合指标', digital: digitalData}" :options="{separator: ',', decimalPlaces: 1}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import fujian from '../../public/hxrc/fujian.json'
Echarts.registerMap('fujian', fujian);

import BuiltInMixin from '../mixins/built_in'

import {
  BrickRadioButtonSelect,
  DataLoader,
  VisTable,
  DigitalRoll,
} from '@byzanteam/vis-components'
import {
  RadioGroup,
  Radio,
  Select,
  Option,
} from 'iview'
import Navigator from '../components/navigator'

const PROVINCE_OPTIONS = [{label: '福建', uuid: 1}]
const YEAR_OPTIONS = [{label: '2022', uuid: 3}, {label: '2021', uuid: 2},  {label: '2020', uuid: 1}, {label: '2019', uuid: 0}]

export const talents_competitiveness = {
  mixins: [BuiltInMixin],

  components: {
    BrickRadioButtonSelect,
    DataLoader,
    'v-chart': Echarts,
    VisTable,
    RadioGroup,
    Radio,
    DigitalRoll,
    Select,
    Option,
    Navigator
  },

  data () {
    return {
      provinceOptions: PROVINCE_OPTIONS,
      yearOptions: YEAR_OPTIONS,
      Echarts: Echarts,
      dataTableName: 'fj_index_2',
      craneStates: {
        province: PROVINCE_OPTIONS[0],
        city: null,
        indicators: [],
        indicator: '',
        types: [{index: 1, name: '四川省'}, {index: 2, name: '重庆市'}, {index: 3, name: '青海省'}, {index: 4, name: '浙江省'}, {index: 5, name: '湖南省'}, {index: 6, name: '湖北省'}, {index: 7, name: '甘肃省'}, {index: 8, name: '山东省'}, {index: 9, name: '江苏省'}, {index: 10, name: '江西省'}, {index: 11, name: '福建省'}, {index: 12, name: '贵州省'}, {index: 13, name: '陕西省'}, {index: 14, name: '山西省'}],
        currentProvince: [],
        currentYear: null,
        selectedArea: {},
        radarData: [],
        mapData: [],
        tableData: [],
        multipleSelectData: [],
        areaCoordMap: {福州市: [119.306239, 26.075302], 厦门市: [118.11022, 24.490474], 莆田市: [119.007558, 25.431011], 三明市: [117.635001, 26.265444], 泉州市: [118.589421, 24.908853], 漳州市: [117.661801, 24.510897], 南平市: [118.178459, 26.635627], 龙岩市: [117.02978, 25.091603], 宁德市: [119.527082, 26.65924], 鼓楼区: [119.29929, 26.082284], 台江区: [119.310156, 26.058616], 仓山区: [119.320988, 26.038912], 马尾区: [119.458725, 25.991975], 晋安区: [119.328597, 26.078837], 长乐区: [119.510849, 25.960583], 闽侯县: [119.145117, 26.148567], 连江县: [119.538365, 26.202109], 罗源县: [119.552645, 26.487234], 闽清县: [118.868416, 26.223793], 永泰县: [118.939089, 25.864825], 平潭县: [119.791197, 25.503672], 福清市: [119.376992, 25.720402], 思明区: [118.087828, 24.462059], 海沧区: [118.036364, 24.492512], 湖里区: [118.10943, 24.512764], 集美区: [118.100869, 24.572874], 同安区: [118.150455, 24.729333], 翔安区: [118.242811, 24.637479], 城厢区: [119.001028, 25.433737], 涵江区: [119.119102, 25.459273], 荔城区: [119.020047, 25.430047], 秀屿区: [119.092607, 25.316141], 仙游县: [118.694331, 25.356529], 梅列区: [117.63687, 26.269208], 三元区: [117.607418, 26.234191], 明溪县: [117.201845, 26.357375], 清流县: [116.815821, 26.17761], 宁化县: [116.659725, 26.259932], 大田县: [117.849355, 25.690803], 尤溪县: [118.188577, 26.169261], 沙县: [117.789095, 26.397361], 将乐县: [117.473558, 26.728667], 泰宁县: [117.177522, 26.897995], 建宁县: [116.845832, 26.831398], 永安市: [117.364447, 25.974075], 鲤城区: [118.588929, 24.907645], 丰泽区: [118.605147, 24.896041], 洛江区: [118.670312, 24.941153], 泉港区: [118.912285, 25.126859], 惠安县: [118.798954, 25.028718], 安溪县: [118.186014, 25.056824], 永春县: [118.29503, 25.320721], 德化县: [118.242986, 25.489004], 金门县: [118.323221, 24.436417], 石狮市: [118.628402, 24.731978], 晋江市: [118.577338, 24.807322], 南安市: [118.387031, 24.959494], 芗城区: [117.656461, 24.509955], 龙文区: [117.671387, 24.515656], 云霄县: [117.340946, 23.950486], 漳浦县: [117.614023, 24.117907], 诏安县: [117.176083, 23.710834], 长泰县: [117.755913, 24.621475], 东山县: [117.427679, 23.702845], 南靖县: [117.365462, 24.516425], 平和县: [117.313549, 24.366158], 华安县: [117.53631, 25.001416], 龙海市: [117.817292, 24.445341], 延平区: [118.178918, 26.636079], 建阳区: [118.12267, 27.332067], 顺昌县: [117.80771, 26.792851], 浦城县: [118.536822, 27.920412], 光泽县: [117.337897, 27.542803], 松溪县: [118.783491, 27.525785], 政和县: [118.858661, 27.365398], 邵武市: [117.491544, 27.337952], 武夷山市: [118.032796, 27.751733], 建瓯市: [118.321765, 27.03502], 新罗区: [117.030721, 25.0918], 永定区: [116.732691, 24.720442], 长汀县: [116.361007, 25.842278], 上杭县: [116.424774, 25.050019], 武平县: [116.100928, 25.08865], 连城县: [116.756687, 25.708506], 漳平市: [117.42073, 25.291597], 蕉城区: [119.527225, 26.659253], 霞浦县: [120.005214, 26.882068], 古田县: [118.743156, 26.577491], 屏南县: [118.987544, 26.910826], 寿宁县: [119.506733, 27.457798], 周宁县: [119.338239, 27.103106], 柘荣县: [119.898226, 27.236163], 福安市: [119.650798, 27.084246], 福鼎市: [120.219761, 27.318884]},
      },
    }
  },

  created() {
    document.title = '省域人才综合竞争力评估'
    this.areaSelectRequest()
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
  },

  watch: {
    'craneStates.currentYear'(value) {
      if(value===null) {
        this.setState('currentYear', this.yearOptions[0])
      }
    },
    'craneStates.city' (value) {
      if(!value) {
        this.craneStates.city = null
      }
      this.craneStates.currentProvince = []
    },
    'craneStates.province' (value) {
      if(!value) {
        this.$nextTick(() => {
          this.craneStates.province = PROVINCE_OPTIONS[0]
        })
      }
    },
    'craneStates.indicators'(value) {
      this.craneStates.indicator = value[0] ? value[0].name : ''
    }
  },

  computed: {
    digitalRequestUrl() {
      return `/custom/daas/api/${window.appRequestId}?tableName=${this.dataTableName}&filter=city=${ this.craneStates.city && this.craneStates.city.label || '福州市'}andtime=${this.craneStates.currentYear ? this.craneStates.currentYear.label : '2021'}&fields=value&orderBy=&pageSize=200&pageNumber=1&apiID=${window.apiID}&apiKey=${window.apiKey}`
    },
    RadioRequestUrl() {
      return `/custom/daas/api/${window.appRequestId}?tableName=${this.dataTableName}&filter=city=${ this.craneStates.city && this.craneStates.city.label || '福州市'}andtime=${this.craneStates.currentYear ? this.craneStates.currentYear.label : '2021'}&fields=index_2&orderBy=&pageSize=200&pageNumber=1&apiID=${window.apiID}&apiKey=${window.apiKey}`
    },
    tableRequestUrl () {
      return `/custom/daas/api/${window.appRequestId}?tableName=${this.dataTableName}&filter=index_2=${ this.craneStates.indicator || ''}andtime=${this.craneStates.currentYear ? this.craneStates.currentYear.label : '2021'}&fields=&orderBy=&pageSize=200&pageNumber=1&apiID=${window.apiID}&apiKey=${window.apiKey}`
    },
    radarRequestUrl () {
      return `/custom/daas/api/${window.appRequestId}?tableName=${this.dataTableName}&filter=time=${this.craneStates.currentYear ? this.craneStates.currentYear.label : '2021'}&fields=&orderBy=&pageSize=200&pageNumber=1&apiID=${window.apiID}&apiKey=${window.apiKey}`
    },
    areaSelectRequestUrl () {
      // 请求市区列表
      return `/custom/daas/api/${window.appRequestId}?tableName=${this.dataTableName}&filter=time=${this.craneStates.currentYear ? this.craneStates.currentYear.label : '2021'}&fields=city&orderBy=&pageSize=200&pageNumber=1&apiID=${window.apiID}&apiKey=${window.apiKey}`
    },
    sortTableData () {
      const sorted_data = this.craneStates.tableData.sort(this.compare())
      return sorted_data.map((item, index) => ({...item, index: index+1}))
    },
    radarData() {
      return  _.chain(this.craneStates.radarData)
      .groupBy('city')
      .reduce((acc, item, key) => {
        acc.push({
          name: key,
          value: this.craneStates.indicators.map(indicator => {
            const value = _.find(item, indicator_value => {
              return indicator_value.index_2 === indicator.name
            })
            return value ? Number(value.value) : 0
          })
        })
        return acc
      }, [])
      .value()
    },
    digitalData() {
      var data
      if(this.craneStates.city) {
        data = _.find(this.craneStates.tableData, item => (item.name === this.craneStates.city.label))
      } else {
        data = this.craneStates.tableData[0]
      }
      return data ? Number(data.value) : 0
    }
  },

  methods: {
    generateRadarData () {
      const { currentProvince } = this.craneStates
      const areas = currentProvince.reduce((acc, item, index) => {
        if(index === currentProvince.length - 1) {
          return `${acc}'${item}'`
        }
        return `${acc}'${item}',`
      }, '')
      return _.filter(this.radarData, item => (areas.includes(item.name)))
    },
    compare() {
      return function (value1, value2) {
        let v1 = Number(value1.value);
        let v2 = Number(value2.value);
        return v2 - v1
      }
    },
    areaSelectRequest() {
      this.axios.get(this.areaSelectRequestUrl).then(({data: {data}}) => {
        const citys = data.reduce((acc, item) => {
          acc[item.city] = [item.city]
          return acc
        }, {})
        this.craneStates.multipleSelectData = _.values(citys)
        this.craneStates.currentProvince = ['厦门市', '福州市']
      })
    }
  },
}
export default talents_competitiveness
</script>
<style lang="scss">
.ivu-select-multiple .ivu-select-dropdown {
  margin-top: 26px;
  border: 1px solid #6ad6ff1f;
  max-height: 384px;
}

.ivu-select-multiple .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item {
  font-size: 14px !important;
}

.ivu-select-multiple .ivu-icon-ios-close:before {
  color: #6ad6ff33
}

.ivu-tag {
  background: #00fff233 !important;
  border: 1px solid #00fff2 !important;
  margin: 3px 8px 3px 0 !important;
  padding-right: 14px !important;
  height: 30px !important;

  .ivu-tag-text {
    color: #00fff2;
    font-size: 14px;
    padding-bottom: 4px;
    padding-top: 4px;
  }
}

.ivu-select-multiple .ivu-select-selection {
  padding:7px 24px 7px 12px !important;
  height: auto!important;
  max-height: 88px;
  overflow: scroll;
}

.ivu-select-multiple .ivu-select-item {
  font-weight: 400 !important;
}

.ivu-select-multiple .ivu-select-item:hover {
  font-weight: 500 !important;
  background-color: #00fff233 !important;
}

.ivu-select-multiple .ivu-select-item-selected:after {
  font-size: 36px !important;
}

:root .ivu-tag .ivu-icon-ios-close {
  font-size: 18px !important;
  color: #b7c0ca66;
}

.ivu-select-multiple .ivu-tag i {
  right: 6px !important;
  top: 6px !important;
}

.ivu-select-visible .ivu-select-selection {
  box-shadow: none !important;
}

.ivu-select-multiple .ivu-select-item-selected:after{
  color: #6ad6ff !important;
}

.ivu-select-multiple .ivu-select-selection .ivu-select-placeholder{
  height: auto!important;
  line-height: 32px !important;
}
</style>
