<template>
  <div class="introduction">
    <navigator ref="navigator"/>
    <img ref="background" src="/hxrc/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart ref="map" :options="mapOptions" />
    </data-loader>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/hxrc/images/Box-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '454px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '38px', left: '733px'}">
      人才引进专题
    </div>
    <div ref="activity-number" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '155px', left: '74px'}">
      引才活动数量统计
    </div>
    <div ref="high-level-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '631px', left: '74px'}">
      高层次人才引进统计
    </div>
    <div ref="introduce-place" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      引进渠道分析
    </div>
    <div ref="talent-rank" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '366px', left: '1536px'}">
      引进人才职称分布
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '691px', left: '1536px'}">
      引进人才学历分布
    </div>
    <div ref="activity-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '157px', left: '40px'}">
      >>
    </div>
    <div ref="high-level-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '634px', left: '40px'}">
      >>
    </div>
    <div ref="introduce-place-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-rank-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '369px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '694px', left: '1504px'}">
      >>
    </div>
    <div ref="activity-number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '247px', left: '128px'}" />
    <div ref="high-level-talent-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '722px', left: '104px'}" />
    <div ref="activity-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '218px', left: '30px'}" />
    <div ref="high-level-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '693px', left: '30px'}" />
    <data-loader ref="departments-loader" :style="{position: 'absolute', top: '125px', left: '929px'}">
      <brick-radio-button-select ref="departments-select" :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" />
    </data-loader>
    <data-loader ref="activity-number-bar" v-slot="{ results: results }" :url="`/v1/components/44b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '250px', position: 'absolute', top: '308px', left: '30px'}">
      <v-chart ref="activity-number-bar-content" :options="{xAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: results ? results.map(item => (item[1])) : ['暂无数据']}, yAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391', align: 'center'}, axisTick: {show: false}, axisLine: {show: false}, splitLine: {show: false}, splitNumber: 5, name: '件', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391', align: 'center', padding: [0, 5, 0, 0]}}, series: {type: 'bar', barWidth: 7, barCategoryGap: '10%', itemStyle: {normal: {barBorderRadius: 7, color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: results ? results.map(item => (item[0])) : [0]}, tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, formatter: activityTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="high-level-talent-bar" v-slot="{ results: results }" :url="`/v1/components/46b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '250px', position: 'absolute', top: '783px', left: '30px'}">
      <v-chart ref="high-level-talent-content" :options="{xAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: results ? results.map(item => (item[1])) : ['暂无数据']}, yAxis: {axisLabel: {rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391', align: 'center'}, axisTick: {show: false}, axisLine: {show: false}, splitLine: {show: false}, splitNumber: 5, name: '件', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391', align: 'center', padding: [0, 5, 0, 0]}}, series: {type: 'bar', barWidth: 7, barCategoryGap: '10%', itemStyle: {normal: {barBorderRadius: 7, color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: results ? results.map(item => (item[0])) : [0]}, tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, formatter: tooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="introduce-place" v-slot="{ results: results }" :url="`/v1/components/48b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '218px', position: 'absolute', top: '94px', left: '1490px'}">
      <v-chart ref="introduce-place-content" :options="{color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], legend: {type: 'scroll', orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', itemWidth: 8, itemHeight: 8, data: results ? results.map(item => (item[1])) : ['暂无数据'], textStyle: {color: '#489bbe', fontSize: 14}, inactiveColor: '#1C4159'}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['0%', '59%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({name: item[1], value: item[0]})) : [{name: '暂无数据', value: 0}]}, tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="talent-rank" v-slot="{ results: results }" :url="`/v1/components/49b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '218px', position: 'absolute', top: '414px', left: '1490px'}">
      <v-chart ref="talent-rank" :options="{color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], legend: {type: 'scroll', orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', itemWidth: 8, itemHeight: 8, data: results ? results.map(item => (item[1])) : ['暂无数据'], textStyle: {color: '#489bbe', fontSize: 14}, inactiveColor: '#1C4159'}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({name: item[1], value: item[0]})) : [{name: '暂无数据', value: 0}]}, tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="education_rank" v-slot="{ results: results }" :url="`/v1/components/4ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '296px', height: '290px', overflow: 'scroll', position: 'absolute', top: '746px', left: '1542px'}">
      <ranking ref="education_rank-content" :data="results ? results.map(item => { return {label: item[1], amount: item[0] ? item[0].toFixed(0) : 0 }}) : []" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#4b9bbe', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#6ad6ff', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff1a', lineColor: ['#0885b5', '#6ad6ff'], height: '5px', borderRadius: '2.5px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: '#566374f0', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="activity-number-digital" v-slot="{ results: results }" :url="`/v1/components/43b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '224px', left: '154px'}">
      <digital-roll ref="activity-number-digital-content" titlePosition="left" :content="{title: '引才活动统计', suffix: '次', digital: results[0][0]}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="high-level-talent-digital" v-slot="{ results: results }" :url="`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '699px', left: '130px'}">
      <digital-roll ref="high-level-talent-digital-content" v-if="results" titlePosition="left" :content="{title: '高层次人才引进总数', suffix: '人', digital: results[0][0]}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader @requestDone="(param)=>[setState('dateRange', param.results ? param.results.map((item) => (Number(item[0]))) : [])]" url="/v1/components/42b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]">
      <date-picker class="supply-datepicker" :style="{width: '380px', height: '50px', position: 'absolute', top: '50px', left: '40px'}" format="yyyy年" v-model="craneStates.year" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" type="year" placeholder="选择时间" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/legendScroll'
import fujian from '../../public/hxrc/fujian.json'
Echarts.registerMap('fujian', fujian);

import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  BrickRadioButtonSelect,
  Ranking,
  DigitalRoll,
} from '@byzanteam/vis-components'
import {
  DatePicker,
} from 'iview'
import Navigator from '../components/navigator'

export const introduction = {
  mixins: [BuiltInMixin],

  components: {
    'v-chart': Echarts,
    DataLoader,
    BrickRadioButtonSelect,
    Ranking,
    DigitalRoll,
    DatePicker,
    Navigator
  },

  data () {
    return {
      Echarts: Echarts,
      craneStates: {
        year: new Date('2020'),
        dateRange: [],
        selectedArea: {},
        selectOptions: [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}],
        department: null,
      },
    }
  },

  computed: {
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
              areaColor: 'rgba(106, 214, 255, .05)',
              borderColor: '#6ad6ff',
              borderType: 'solid',
              borderWidth: 0.5
            },
            emphasis: {
              label: {
                color: 'white',
                fontWeight: 600
              },
              itemStyle: {
                areaColor: '#4B9BBE'
              }
            }
          }
        ]
      }
    },
    selectedArea () {
      const name = this.craneStates.selectedArea.name ? this.craneStates.selectedArea.name : ''
      const city = this.craneStates.department ? this.craneStates.department.label : ''
      if(name) {
        return name
      }
      return city
    }
  },

  watch: {
    'craneStates.department' () {
      this.craneStates.selectedArea = {}
    }
  },

  created() {
    document.title = '人才引进专题'
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
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
    tooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>高层次人才引进：${params[0].data}人`
    },
    activityTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>引才活动统计：${params[0].data}次`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
  }
}
export default introduction
</script>
