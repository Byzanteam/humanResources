<template>
  <div class="key_talents">
    <navigator ref="navigator"/>
    <img ref="background" src="/hxrc/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '454px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '38px', left: '733px'}">
      重点人才专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/hxrc/images/Box-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/hxrc/images/Box-Bg.png" />
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '74px'}">
      高层次人才供需地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .1)', borderRadius: '5px', position: 'absolute', top: '88px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '117px', left: '119px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/24b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '94px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才数量统计', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :style="{width: '196px', height: '39px'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" />
    </data-loader>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .1)', borderRadius: '5px', position: 'absolute', top: '154px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '183px', left: '119px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentShortageType|| ''}&year=${this.craneStates.year ? this.craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '160px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才引进统计', digital: results ? results[0][0] : 0, suffix: '次'}" :options="{separator: ''}" :style="{width: '278px', height: '39px'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" />
    </data-loader>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      区域紧缺人才地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .1)', borderRadius: '5px', position: 'absolute', top: '128px', left: '1490px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '157px', left: '1588px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/29b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentShortageType|| ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '134px', left: '1614px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '紧缺人才数量', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :style="{width: '278px', height: '39px'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" />
    </data-loader>
    <div :style="{width: '400px', height: '220px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '244px', left: '30px'}" />
    <brick-tabs :tabNavs="craneStates.mapTabNavs" :activeTab="craneStates.mapTabCurrent" :style="{position: 'absolute', top: '256px', left: '126px'}" v-model="craneStates.mapTabCurrent" />
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[0]">
      <Select placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentTalentType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" v-model="craneStates.supplyInputWord" :style="{width: '180px', height: '48px', paddingLeft: '8px', backgroundColor: 'rgba(106, 214, 255, .1)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', outline: 'none', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button @click="()=>[setState('mapType', 'supply')]" type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才供应地图
      </brick-button>
    </div>
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[1]">
      <Select placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '324px', left: '43px'}" v-model="craneStates.currentDemandType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" v-model="craneStates.demandInputWord" :style="{width: '180px', height: '48px', paddingLeft: '8px', backgroundColor: 'rgba(106, 214, 255, .1)', border: '1px solid rgba(106, 214, 255, .12)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', outline: 'none', position: 'absolute', top: '324px', left: '237px'}" />
      <brick-button @click="()=>[setState('mapType', 'demand')]" type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '400px', left: '156px'}">
        查看人才需求地图
      </brick-button>
    </div>
    <div :style="{width: '400px', height: '180px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '225px', left: '1490px'}" />
    <div>
      <data-loader ref="job_select" @requestDone="(exports)=>[setState('dateRange', exports.results.map((item) => (Number(item[0]))))]" url="/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{position: 'absolute', top: '270px', left: '1503px'}">
        <date-picker class="map-tab-datepicker" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" :style="{width: '180px'}" format="yyyy年"  v-model="craneStates.year" type="year" placeholder="选择时间" />
      </data-loader>
      <data-loader ref="industry_select" v-slot="{ results: results }" url="/v1/components/30b74ddd-39de-493f-84ab-9d87fcf23fee/data?offset=10" method="get" :data="[['']]" :style="{position: 'absolute', top: '270px', left: '1697px'}">
        <Select placeholder="所有行业" clearable class="map-select" :style="{width: '180px'}" v-model="craneStates.currentShortageType">
          <Option v-for="(item, key) in results.map((item, index) => ({index: item[0], name: item[0]}))" :key="key" :value="item.index" :label="item.name">
            {{item.name}}
          </Option>
        </Select>
      </data-loader>
      <brick-button @click="()=>[setState('mapType', 'shortage')]" type="gradient" color="primary" :style="{width: '148px', height: '25px', position: 'absolute', top: '346px', left: '1616px'}">
        查看紧缺人才地图
      </brick-button>
    </div>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '497px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '494px', left: '74px'}">
      高层次人才供需变化
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" v-slot="{ results: results }" :url="`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '200px', position: 'absolute', top: '550px', left: '30px'}">
      <v-chart :options="{grid: {top: '24%', right: '5%', bottom: '10%'}, backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, legend: {icon: 'circle', right: 10, itemGap: 14, itemWidth: 8, itemHeight: 8, textStyle: {color: '#4b9bbe', fontSize: 14}, inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: results ? results.map(item => (item[1])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center', padding: [0, 5, 0, 0]}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center'}, splitLine: {show: false}, splitNumber: 4}, series: [{type: 'line', name: '人才供应', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '806px', left: '40px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '803px', left: '74px'}">
      高层次人才专业分布
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/28b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '600px', height: '218px', overflow: 'scroll', position: 'absolute', top: '841px', left: '-110px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, left: 350, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -120, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '805px', left: '1504px'}">
      >>
    </div>
    <div ref="degree-analysis-title" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '803px', left: '1536px'}">
      紧缺人才专业分布
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/33b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '600px', height: '218px', overflow: 'scroll', position: 'absolute', top: '841px', left: '1350px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {type: 'scroll', formatter: legendText, icon: 'circle', itemWidth: 10, itemHeight: 10, left: 350, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -120, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})).sort(compare()) : [{value: 0, name: '暂无数据'}]}]}" />
    </data-loader>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '459px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '456px', left: '1536px'}">
      区域紧缺人才趋势
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" v-slot="{ results: results }" :url="`/v1/components/32b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`" method="get" :data="[['暂无数据', 0]]" :style="{width: '400px', height: '214px', position: 'absolute', top: '518px', left: '1490px'}">
      <v-chart :options="{grid: {top: '24%', right: '5%', bottom: '10%'}, backgroundColor: 'transparent', color: ['#6ad6ff', '#367390'], tooltip: {trigger: 'axis', formatter: shortageTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, xAxis: {type: 'category', data: results ? results.map(item => (item[0])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center', padding: [0, 5, 0, 0]}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'center'}, splitLine: {show: false}, splitNumber: 4}, series: [{type: 'line', name: '紧缺人才', data: results ? results.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <brick-radio-button-select :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" :style="{position: 'absolute', top: '125px', left: '929px'}" />
    <data-loader v-slot="{ results: results }" :url="`${requestUrl}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: (params) => {return params.name + '<br />人才数量（人）：' + (isNaN(params.value) ? 0 : params.value)}, backgroundColor: '#566374f0'}, visualMap: {type: 'piecewise', pieces: [{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}], orient: 'horizontal', bottom: '6%', left: '26%', textStyle: {color: '#ffffff', fontSize: '14'}, itemWidth: 18, itemGap: 10, textGap: 8, inRange: {color: ['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']}}, series: [
                {
                  type: 'map',
                  mapType: craneStates.department ? craneStates.department.uuid : 'fujian',
                  data: results.map(item => {return {name: item[1], value: item[0]}}),
                  label: {
                    show: true,
                    fontSize: 14,
                    color: 'white'
                  },
                  itemStyle: {
                    areaColor: 'rgba(106, 214, 255, .05)',
                    borderColor: '#6ad6ff',
                    borderType: 'solid',
                    borderWidth: 0.5
                  },
                  emphasis: {
                    label: {
                      color: 'white',
                      fontWeight: 600,
                    },
                    itemStyle: {
                      areaColor: '#6ad6ff'
                    }
                  },
                }
              ]}" />
    </data-loader>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/legendScroll'
import fujian from '../../public/hxrc/fujian.json'
Echarts.registerMap('fujian', fujian);

import {
  DataLoader,
  DigitalRoll,
  BrickTabs,
  BrickButton,
  BrickRadioButtonSelect,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
  DatePicker,
} from 'iview'
import {
  Input,
} from 'element-ui'
import Navigator from '../components/navigator'

const MAP_TAB_NAVS = [{uuid: 1, label: '人才供应'}, {uuid: 2, label: '人才需求'}]

export const key_talents = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    DigitalRoll,
    BrickTabs,
    BrickButton,
    BrickRadioButtonSelect,
    Select,
    Option,
    DatePicker,
    Input,
    'v-chart': Echarts,
    Navigator
  },

  data () {
    return {
      Echarts: Echarts,
      craneStates: {
        types: [{index: 1, name: '学术型人才'}, {index: 2, name: '工程型人才'}, {index: 3, name: '技能型人才'}, {index: 4, name: '技术型人才'}],
        supplyInputWord: '',
        demandInputWord: '',
        mapType: 'supply',
        currentTalentType: '',
        currentDemandType: '',
        mapTabCurrent: MAP_TAB_NAVS[0],
        mapTabNavs: MAP_TAB_NAVS,
        time: '',
        year: new Date('2020'),
        dateRange: [],
        currentShortageType: '',
        selectOptions: [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}],
        department: null,
      },
    }
  },

  computed: {
    requestUrl() {
      switch (this.craneStates.mapType) {
        case "supply":
          return this.supplyUrl;
        case "demand":
          return this.demandUrl;
        case "shortage":
          return this.shortageUrl;
      }
    },
    supplyUrl() {
      return `/v1/components/25b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${this.craneStates.supplyInputWord}&area=${this.craneStates.department ? this.craneStates.department.label : ''}`
    },
    demandUrl() {
      return `/v1/components/26b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${this.craneStates.demandInputWord}&area=${this.craneStates.department ? this.craneStates.department.label : ''}`
    },
    shortageUrl() {
      return `/v1/components/31b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${this.craneStates.currentShortageType}&area=${this.craneStates.department ? this.craneStates.department.label : ''}&year=${this.craneStates.year ? this.craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`
    },
    digitalKeyword() {
      switch (this.craneStates.mapType) {
        case "supply":
          return this.craneStates.supplyInputWord;
        case "demand":
          return  this.craneStates.demandInputWord;
      }
    }
  },

  created() {
    document.title = '重点人才专题'
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
  },

  methods: {
    shortageTooltipFormatterFunc(params) {
      return `${params[0].name}<br/>${params[0].marker}${params[0].seriesName}：${params[0].data}人`
    },
    demandTooltipFormatterFunc(params) {
      const series = params.reduce((memo, serie) => {
        return `${memo}${serie.marker}${serie.seriesName}: ${serie.value}人<br />`
      }, '')
      return `${params[0].name}<br />${series}`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
    compare() {
      return function (value1, value2) {
        let v1 = value1.value;
        let v2 = value2.value;
        return v2 - v1
      }
    },
    legendText(name) {
      return this.makeMultiLine(name, 9)
    },
    makeMultiLine (str, charQty){
      const strs = str.split('')
      const len = strs.length
      if (len < charQty + 1) {
        return str
      }
      let result = ''
      strs.forEach((_, index) => {
        result += _
        if ((index + 1) % charQty === 0 && index < len - 1) {
          result += '\n'
        }
      })
      return result
    }
  }
}
export default key_talents
</script>
