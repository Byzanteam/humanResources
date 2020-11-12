<template>
  <div class="supply">
    <navigator ref="navigator"/>
    <img ref="title-bg" :style="{width: '700px', height: '124px', position: 'absolute', top: '0px', left: '610px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '460px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      人才供需专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/hxrc/images/Box-Bg.png" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '176px', left: '480px'}">
      <v-chart ref="map" :options="mapOptions" />
    </data-loader>
    <div class="center-select">
      <brick-radio-button-select :options="provinceOptions" v-model="craneStates.province" placeholder="全省" />
      <brick-radio-button-select ref="departments-select" :options="selectOptions" v-model="craneStates.department" placeholder="全省" :style="{marginLeft: '12px'}" />
    </div>
    <data-loader ref="job_select" v-slot="{ results: results }" :url="`/v1/components/01b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.inputQuery}`" method="get" :data="[['']]" :style="{position: 'absolute', top: '48px', left: '40px'}">
      <Select class="departments-select" :clearable="true" :filterable="true" :style="{width: '380px'}" v-model="craneStates.currentJob">
        <template v-slot:input class="ivu-select-selection">
          <input v-model="craneStates.inputQuery" type="text" placeholder="全部" class="ivu-select-input" />
          <i class="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow" />
        </template>
        <Option v-for="(item, key) in results.map((item, index) => ({index: item[0], name: item[0]}))" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <data-loader ref="job_select" @requestDone="(param)=>[setState('dateRange', param.results.map((item) => (Number(item[0]))))]" url="/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{position: 'absolute', top: '114px', left: '40px'}">
      <date-picker format="yyyy年" v-model="craneStates.year" :style="{width: '380px', height: '50px'}" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" type="year" class="supply-datepicker" placeholder="选择时间" />
    </data-loader>
    <div ref="supply-demand-count" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '194px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '223px', left: '100px'}" />
    <data-loader ref="supply-demand-count" v-slot="{ results: results }" :url="`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&year=${generateYear}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '200px', left: '126px'}">
      <digital-roll ref="talent-age-index-content" data-content="默认为当年所有企业所需人才数量，可根据「区域」「岗位名」「时间」进行筛选统计查阅对应的企业人才需求数量" titlePosition="left" :content="{title: '企业人才需求数量', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ','}" :style="{height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '288px', left: '40px'}">
      >>
    </div>
    <div ref="talent-demand" class="line-break-talent-demand" data-content="岗位排名：根据「区域」「时间」进行筛选统计查阅对应的企业人才需求岗位排名岗位薪资排名：根据「区域」「时间」进行筛选统计查阅岗位的薪资排名情况" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '286px', left: '74px'}">
      需求岗位排名
    </div>
    <brick-tabs :tabNavs="craneStates.tabNavs" :activeTab="craneStates.tabCurrent" :style="{position: 'absolute', top: '330px', left: '110px'}" v-model="craneStates.tabCurrent" />
    <data-loader v-slot="{ results: results }" v-show="craneStates.tabCurrent === craneStates.tabNavs[0]" :url="`/v1/components/04b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="null" :style="{width: '380px', height: '280px', overflow: 'scroll', position: 'absolute', top: '392px', left: '40px'}">
      <vis-table v-scroll="{itemHeight: 40}" :withHeader="false" theme="dark" stripe="" :headers="[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'count'}]" :data="results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1]})) : [{index: 0, name: '暂无数据', count: 0}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader v-slot="{ results: results }" v-show="craneStates.tabCurrent === craneStates.tabNavs[1]" :url="`/v1/components/05b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="null" :style="{width: '380px', height: '280px', overflow: 'scroll', position: 'absolute', top: '392px', left: '40px'}">
      <vis-table v-scroll="{itemHeight: 40}" :withHeader="false" theme="dark" stripe="" :headers="[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'salary'}]" :data="results ? results.map((item, index) => ({index: index + 1, salary: item[0], name: item[1]})) : [{index: 0, name: '暂无数据', salary: 0}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <div ref="salary-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '722px', left: '40px'}">
      >>
    </div>
    <div ref="salary-title·" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '720px', left: '74px'}" data-content="默认为所有岗位的平均薪资，可根据「岗位名」进行筛选统计查阅对应行位当年平均薪资与历年的平均薪资">
      人才薪酬分析
    </div>
    <div ref="salary-count" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '764px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '793px', left: '116px'}" />
    <data-loader ref="salary-count-digital" v-slot="{ results: results }" :url="`/v1/components/06b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '770px', left: '146px'}">
      <digital-roll titlePosition="left" :content="{title: '岗位平均薪酬', digital: results ? results[0][0] : 0, prefix: '￥'}" :options="{separator: ','}" :style="{height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="salary-count-line-chart" v-slot="{ results: results }" :url="`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '200px', position: 'absolute', top: '838px', left: '40px'}">
      <v-chart :options="{color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], grid: {top: 30, left: 52, right: 10, bottom: 30}, backgroundColor: 'transparent', tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: salaryTooltipFormatterFunc, backgroundColor: '#566374f0'}, xAxis: {type: 'category', data: results ? results.map(item => (item[1])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '元', splitNumber: '4', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'center', padding: [0, 0, 0, 3]}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'center'}, splitLine: {show: false}}, series: [{type: 'line', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '50px', left: '1500px'}">
      >>
    </div>
    <div ref="talent-demand" data-content="根据「区域」「时间」进行筛选统计企业需求量显示 Top10 排名，以企业所属行业类型进行统计排名" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '48px', left: '1533px'}">
      6大重点行业的人才需求排名
    </div>
    <data-loader v-slot="{ results: results }" url="/v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="null" :style="{width: '380px', height: '240px', overflow: 'scroll', position: 'absolute', top: '100px', left: '1500px'}">
      <vis-table v-scroll="{itemHeight: 40}" :withHeader="false" theme="dark" stripe="" :headers="[{width: 60, key: 'index'}, {width: 140, key: 'name'}, {width: 100, key: 'count'}, {width: 100, key: 'ratio'}]" :data="results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1] || 0, ratio: item[2] || 0})) : [{index: 0, name: '暂无数据', count: 0, ratio: 0}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <div ref="talents-demand-change-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '382px', left: '1500px'}">
      >>
    </div>
    <div ref="talents-demand-change-title·" data-content="根据「区域」「时间」进行筛选统计企业发布的招聘人才数量与人才投递简历情况对比折线图体现供需变化" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '380px', left: '1532px'}">
      人才供需变化
    </div>
    <data-loader ref="talents-demand-change-count-line-chart" v-slot="{ results: results }" :url="`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '230px', position: 'absolute', top: '432px', left: '1500px'}">
      <v-chart :options="{grid: {left: 52, right: -10, bottom: 30}, backgroundColor: 'transparent', color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 0, itemGap: 14, textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: results ? results.map(item => (item[1])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {align: 'center', padding: [0, 5, 0, 0], color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, axisLabel: {align: 'center', color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供给', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '722px', left: '1500px'}">
      >>
    </div>
    <div ref="degree-analysis-title" class="line-break-degree" data-content="人才学历： 根据「区域」「时间」进行筛选统计对应的人才学历分布情况人才职称：根据「区域」「时间」进行筛选统计对应的人才职称分布情况" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '720px', left: '1532px'}">
      学历职称分析
    </div>
    <brick-tabs :tabNavs="craneStates.chartTabNavs" :activeTab="craneStates.chartTabCurrent" :style="{position: 'absolute', top: '764px', left: '1586px'}" v-model="craneStates.chartTabCurrent" />
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[0]" :url="`/v1/components/10b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[1]" :url="`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${currentRegion}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
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
  BrickRadioButtonSelect,
  DigitalRoll,
  BrickTabs,
  VisTable,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
  DatePicker,
} from 'iview'
import {
} from 'element-ui'
import Navigator from '../components/navigator'


const TAB_NAVS = [{uuid: 1, label: '岗位排名'}, {uuid: 2, label: '岗位薪资排名'}]

const CHART_TAB_NAVS = [{uuid: 1, label: '人才学历'}, {uuid: 2, label: '人才职称'}]

const SELECT_OPTIONS = [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}]

const PROVINCE_OPTIONS = [{label: '福建', uuid: 1}]

export const supply = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    BrickRadioButtonSelect,
    DigitalRoll,
    BrickTabs,
    VisTable,
    Select,
    Option,
    DatePicker,
    'v-chart': Echarts,
    Navigator
  },

  data () {
    return {
      selectOptions: SELECT_OPTIONS,
      provinceOptions: PROVINCE_OPTIONS,
      Echarts: Echarts,
      craneStates: {
        province: PROVINCE_OPTIONS[0],
        currentJob: '',
        inputQuery: '',
        year: new Date('2020'),
        department: null,
        dateRange: [],
        tabNavs: TAB_NAVS,
        tabCurrent: TAB_NAVS[0],
        chartTabNavs: CHART_TAB_NAVS,
        chartTabCurrent: CHART_TAB_NAVS[0],
        selectedArea: {}
      },
    }
  },

  watch: {
    'craneStates.currentJob' (value) {
      if(value) {
        this.craneStates.inputQuery = value
      } else {
        this.craneStates.inputQuery = ''
      }
    },
    'craneStates.department' (value) {
      this.craneStates.selectedArea = {}
    }
  },

  computed: {
    generateYear () {
      if(!this.craneStates.year) {
        return '2020'
      }
      return this.craneStates.year.getFullYear()
    },
    mapOptions () {
      return {
        backgroundColor: 'transparent',
        series: [
          {
            type: 'map',
            mapType: this.craneStates.department ? this.craneStates.department.uuid : 'fujian',
            label: {
              show: true,
              fontSize: 14,
              color: 'white'
            },
            itemStyle: {
              areaColor: '#0e3e7d',
              borderColor: '#4589e1',
              borderType: 'solid',
              borderWidth: 2
            },
            emphasis: {
              label: {
                color: 'white',
                fontWeight: 600
              },
              itemStyle: {
                areaColor: '#29e8de'
              }
            }
          }
        ]
      }
    },
    currentRegion () {
      const city = this.craneStates.department ? this.craneStates.department.label : ''
      const region = this.craneStates.selectedArea.name ? this.craneStates.selectedArea.name.slice(0, 2) : ''
      return `${city}${region}`
    }
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
  },

  created() {
    document.title = '人才供需专题'
  },

  mounted() {
    const { chart } = this.$refs.map
    chart.on('click', (params) => {
      chart.dispatchAction({
        type: 'mapSelect',
        dataIndex: params.dataIndex
      })
      if(this.craneStates.selectedArea) {
        chart.dispatchAction({
          type: 'mapUnSelect',
          dataIndex: this.craneStates.selectedArea.dataIndex
        })
      }
      if(this.craneStates.selectedArea.dataIndex === params.dataIndex) {
        this.craneStates.selectedArea = {}
      } else {
        this.craneStates.selectedArea = params
      }
    })
  },

  methods: {
    salaryTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>${params[0].seriesName}：${params[0].data}元`
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
  }
}
export default supply
</script>
