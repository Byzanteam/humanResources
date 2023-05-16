<template>
  <div class="introduction" v-if="isShow">
    <navigator ref="navigator"/>
    <data-loader :style="{width: '960px', height: '884px', position: 'absolute', top: '176px', left: '480px'}">
      <v-chart ref="map" :options="mapOptions" />
    </data-loader>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '610px'}" src="../../public/hxrc/images/Title-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '460px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      人才引进专题
    </div>
    <div ref="activity-number" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '200px', left: '74px'}">
      引才活动数量统计
    </div>
    <div ref="high-level-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '660px', left: '74px'}">
      <div data-content="默认显示当年高层次人才引进人数，可根据「区域」「时间」查看对应区域与年份的引才人数与历年的引进数量" :style="{position: 'relative'}">
        高层次人才引进统计
      </div>
    </div>
    <div ref="introduce-place" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '48px', left: '1536px'}">
      <div data-content="根据「区域」「时间」筛选统计引才活动发布方分布" :style="{position: 'relative'}">
        引进渠道分析
      </div>
    </div>
    <div ref="talent-rank" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '380px', left: '1536px'}">
      <div data-content="根据活动要求需要的人才类型进行统计分析" :style="{position: 'relative'}">
        引进人才职称分布
      </div>
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '700px', left: '1536px'}">
      <div data-content="根据「区域」「时间」筛选对应区域的引进人才的学历分布情况" :style="{position: 'relative'}">
        引进人才学历分布
      </div>
    </div>
    <div ref="activity-number-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '200px', left: '40px'}">
      >>
    </div>
    <div ref="high-level-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '663px', left: '40px'}">
      >>
    </div>
    <div ref="introduce-place-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '51px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-rank-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '383px', left: '1504px'}">
      >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '704px', left: '1504px'}">
      >>
    </div>
    <div ref="activity-number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '281px', left: '128px'}" />
    <div ref="high-level-talent-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '741px', left: '104px'}" />
    <div ref="activity-bg" :style="{height: '50px', width: '380px', backgroundColor: 'rgba(13,45,120,.45)', borderRadius: '5px', position: 'absolute', top: '252px', left: '40px'}" />
    <div ref="high-level-bg" :style="{height: '50px', width: '380px', backgroundColor: 'rgba(13,45,120,.45)', borderRadius: '5px', position: 'absolute', top: '712px', left: '40px'}" />
    <div ref="departments-loader" class="center-select">
      <div v-if="city" class="center-select__label">{{ city }}</div>
      <brick-radio-button-select v-else ref="departments-select" :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" :style="{marginLeft: '12px'}" />
    </div>
    <data-loader ref="activity-number-line" v-slot="{ results: results }" :url="`/v1/components/44b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '240px', position: 'absolute', top: '334px', left: '40px'}">
      <v-chart ref="activity-number-line-content" :options="{grid: {left: 50, right: 0}, xAxis: {axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, rotate: 0}, axisLine: {show: false}, data: results ? results.map(item => (item[1])) : ['暂无数据']}, yAxis: {axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, rotate: 0, align: 'right'}, axisTick: {show: false}, axisLine: {show: false}, splitLine: {show: false}, splitNumber: 5, name: '次', nameTextStyle: {align: 'right', padding: [0, 5, 0, 0], color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}}, series: {type: 'line', smooth: false, showSymbol: false, color: ['#00fff2'], lineStyle: {width: 4}, areaStyle: {color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#00fff2'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,255,242,0.6)'
                    }
                    ],
                    false
                  )}, data: results ? results.map(item => (item[0])) : [0]}, tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, backgroundColor: '#566374f0', formatter: activityTooltipFormatterFunc}}" />
    </data-loader>
    <data-loader ref="high-level-talent-bar" v-slot="{ results: results }" :url="`/v1/components/46b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '240px', position: 'absolute', top: '794px', left: '40px'}">
      <v-chart ref="high-level-talent-content" :options="{grid:{left: 50, right: 0}, xAxis: {axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, rotate: 0}, axisLine: {show: false}, data: results ? results.map(item => (item[1])) : ['暂无数据']}, yAxis: {axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, rotate: 0, align: 'right'}, axisTick: {show: false}, axisLine: {show: false}, splitLine: {show: false}, splitNumber: 5, name: '人', nameTextStyle: {align: 'right', padding: [0, 5, 0, 0], color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}}, series: {type: 'bar', barWidth: 7, barCategoryGap: '10%', itemStyle: {normal: {barBorderRadius: 7, color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#7d40ff'
                      },
                      {
                        offset: 1,
                        color: '#00fff2'
                      }], false),}}, data: results ? results.map(item => (item[0])) : [0]}, tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, formatter: tooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="introduce-place" v-slot="{ results: results }" :url="`/v1/components/48b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', position: 'absolute', top: '100px', left: '1500px'}">
      <v-chart ref="introduce-place-content" :options="{color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], legend: {type: 'scroll', orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', itemWidth: 8, itemHeight: 8, data: results ? results.map(item => (item[1])) : ['暂无数据'], textStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, inactiveColor: '#1C4159'}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['0%', '59%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({name: item[1], value: item[0]})) : [{name: '暂无数据', value: 0}]}, tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="talent-rank" v-slot="{ results: results }" :url="`/v1/components/49b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', position: 'absolute', top: '432px', left: '1500px'}">
      <v-chart ref="talent-rank" :options="{color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], legend: {type: 'scroll', orient: 'vertical', right: '8%', top: 'middle', icon: 'circle', itemWidth: 8, itemHeight: 8, data: results ? results.map(item => (item[1])) : ['暂无数据'], textStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, inactiveColor: '#1C4159'}, series: {name: '人才引进渠道', type: 'pie', left: '-34%', radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({name: item[1], value: item[0]})) : [{name: '暂无数据', value: 0}]}, tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="education_rank" v-slot="{ results: results }" :url="`/v1/components/4ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${selectedArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '296px', height: '270px', overflow: 'scroll', position: 'absolute', top: '752px', left: '1542px'}">
      <ranking ref="education_rank-content" :data="results ? results.map(item => { return {label: item[1], amount: item[0] ? Number(item[0].toFixed(0)) : 0 }}) : []" :keys="{label: 'label', value: 'amount'}" v-scroll="{itemHeight: 47}" :labelStyle="{color: '#ffffff', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#00fff2', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff1a', lineColor: ['#7d40ff', '#00fff2'], height: '8px', borderRadius: '2.5px', marginTop: '3px'}" />
    </data-loader>
    <data-loader ref="activity-number-digital" v-slot="{ results: results }" :url="`/v1/components/43b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '258px', left: '154px'}">
      <digital-roll ref="activity-number-digital-content" data-content="默认显示当年引才活动次数，可根据「区域」「时间」查看对应区域与年份的引才活动次数与历年的引才活动次数" titlePosition="left" :content="{title: '引才活动统计', suffix: '次', digital: results ? (results[0][0] || 0) : 0}" :options="{separator: ','}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="high-level-talent-digital" v-slot="{ results: results }" :url="`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}&area=${selectedArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '718px', left: '130px'}">
      <digital-roll ref="high-level-talent-digital-content" v-if="results" titlePosition="left" :content="{title: '高层次人才引进总数', suffix: '人', digital: results ? (results[0][0] || 0) : 0}" :options="{separator: ','}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader @requestDone="(param)=>[setState('dateRange', param.results ? param.results.map((item) => (Number(item[0]))) : [])]" url="/v1/components/42b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]">
      <date-picker class="supply-datepicker" :style="{width: '380px', height: '50px', position: 'absolute', top: '48px', left: '40px'}" format="yyyy年" v-model="craneStates.year" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" type="year" placeholder="选择时间" />
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

const PROVINCE_OPTIONS = [{label: '福建', uuid: 1}]

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
      city: '',
      provinceOptions: PROVINCE_OPTIONS,
      craneStates: {
        province: PROVINCE_OPTIONS[0],
        year: new Date('2020'),
        dateRange: [],
        selectedArea: {},
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
              areaColor: '#0e3e7d',
              borderColor: '#4589e1',
              borderType: 'solid',
              borderWidth: 0.5
            },
            emphasis: {
              label: {
                color: 'white',
                fontWeight: 600
              },
              itemStyle: {
                areaColor: '#29e8d1'
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
    },
    '$route.query': {
      handler(value) {
        if(value.city) {
          this.city = value.city
          const area = _.find(this.craneStates.selectOptions, (option) => (option.value === value.city))
          this.craneStates.department = area ? area : this.craneStates.department
        }
      },
      immediate: true
    }
  },

  created() {
    document.title = '人才引进专题'
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
  },

  mounted() {
    this.$watch('isShow',val => {
      if(val){
        const { chart } = this.$refs.map
        this.mapClickedFunc(chart)
        this.mapDbclickedFunc(chart)
      }
    })
  },

  methods: {
    mapDbclickedFunc(chart) {
      chart.on('dblclick', (params) => {
        const { name } = params
        const area = _.find(this.craneStates.selectOptions, (option) => (option.label === name))
        this.craneStates.department = area ? area : this.craneStates.department
      })
    },
    mapClickedFunc(chart) {
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
    tooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background: linear-gradient(0deg, #7d40ff, #00fff2);"></span>高层次人才引进：${params[0].data}人`
    },
    activityTooltipFormatterFunc(params) {
      return `${params[0].name}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #00fff2;"></span>引才活动统计：${params[0].data}次`
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
  }
}
export default introduction
</script>
