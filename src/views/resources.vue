<template>
  <div class="resources" v-if="isShow">
    <navigator ref="navigator"/>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <date-picker format="yyyy年" v-model="craneStates.year" :style="{width: '380px', height: '50px', position: 'absolute', top: '48px', left: '40px'}" :options="{disabledDate: (time) => {return !generateDateRange().includes(time.getFullYear())}}" type="year" class="supply-datepicker" placeholder="选择时间" />
    <data-loader v-slot="{ results: results }" @requestDone="(param)=>[setState('mapData', param.results.map((item) => ({name: item[1], value: item[0]})))]" :url="`/v1/components/20b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '1100px', height: '900px', position: 'absolute', top: '176px', left: '480px', zIndex:-1}">
      <v-chart ref="map" @finished="bindMapEvents" v-if="results" class="map-chart" :options="mapOptions" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/21b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[['暂无数据']]" :style="{width: '380px', height: '620px', overflow: 'scroll', position: 'absolute', top: '400px', left: '1500px'}">
      <div :style="{overflow: 'scroll', height: '100%'}">
        <vis-table v-scrollUpdate="{itemHeight: 40, scrollRadio: scrollRadio}" @mouseover.native="closeScrollRadio" @mouseleave.native="openScrollRadio" :withHeader="false" theme="dark" stripe="" :headers="[{width: 80, key: 'index'}, {width: 300, key: 'name'}]" :data="results ? results.map((item, index) => ({index: index + 1, name: item[0]})) : [{index: 0, name: '暂无数据'}]">
          <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
          </template>
        </vis-table>
      </div>
    </data-loader>
    <img ref="title-bg" :style="{width: '700px', height: '124px', position: 'absolute', top: '0px', left: '610px'}" src="../../public/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '460px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      全省人才资源态势总览
    </div>
    <div ref="talent-education" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '360px', left: '73px'}">
      <div data-content="根据「区域」选择统计该区域人才学历分布情况" :style="{position: 'relative'}">
        人才学历层次
      </div>
    </div>
    <div ref="talent-industry" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '360px', left: '1533px'}">
      <div data-content="以「区域」作为筛选条件，统计分析历史简历数据判断岗位平均的流动时间并进行排名" :style="{position: 'relative'}">
        人才需求岗位排名TOP30
      </div>
    </div>
    <div ref="industry-talent" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '740px', left: '73px'}">
      <div data-content="以「区域」作为筛选条件，统计该区域人才所在行业分布" :style="{position: 'relative'}">
        人才专业占比
      </div>
    </div>
    <div ref="talent-education-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '362px', left: '40px'}">
      >>
    </div>
    <div ref="talent-industry-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '363px', left: '1500px'}">
      >>
    </div>
    <div ref="industry-talent-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '743px', left: '40px'}">
      >>
    </div>
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '157px', left: '104px'}" />
    <div ref="number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '237px', left: '104px'}" />
    <div ref="production-bg" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '128px', left: '40px'}" />
    <div ref="production-bg" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '208px', left: '40px'}" />
    <div ref="departments-loader" class="center-select">
      <div v-if="city" class="center-select__label">{{ city }}</div>
      <brick-radio-button-select v-else ref="departments-select" :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" />
    </div>
    <div ref="talents-demand-change-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '51px', left: '1500px'}">
      >>
    </div>
    <div ref="talents-demand-change-title·" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '48px', left: '1533px'}">
      <div data-content="根据「区域」「时间」进行筛选统计企业发布的招聘人才数量与人才投递简历情况对比折线图体现供需变化" :style="{position: 'relative'}">
        人才供需月度变化
      </div>
    </div>
    <data-loader ref="talents-demand-change-count-line-chart" v-slot="{ results: results }" :url="`/v1/components/50b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '230px', position: 'absolute', top: '100px', left: '1500px'}">
      <v-chart :options="{grid: {left: 52, right: -10, bottom: 30}, backgroundColor: 'transparent', color: ['#00fff2', '#7b43ff'], tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 0, itemGap: 14, textStyle: {color: '#ffffff', fontSize: '14'}, inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: results ? results.map(item => (`${item[1]}月`)) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'right', padding: [0, 5, 0, 0]}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'center'}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供应', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/22b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', position: 'absolute', top: '792px', left: '40px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {pageIconColor: '#2f4554', pageIconInactiveColor: '#aaa', formatter: legendText, type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, left: 230, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446', '#d98278','#f6e446', '#46f68c', '#46f6e1','#4697f6',  '#4a46f6', '#a946f6', '#f6469a'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: refresh ? results.map(item => ({value: item[0], name: item[1]})).sort(compare()): []}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="part-production-value" v-slot="{ results: results }" :url="`/v1/components/12b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '134px', left: '130px'}">
      <digital-roll ref="deal-number-total" v-if="results" data-content="根据「区域」选择统计该区域地区生产总值" titlePosition="left" :content="{title: '地区生产总值', suffix: '亿元', digital: results[0][0] || 0}" :options="{separator: ',', decimalPlaces: 2}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-number" v-slot="{ results: results }" :url="`/v1/components/13b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '214px', left: '130px'}">
      <digital-roll ref="talent-number-content" v-if="results" data-content="根据「区域」选择统计该地区人才库中学历为「专科」「本科」「硕士」「博士」的人才数量" titlePosition="left" :content="{title: '人才数量', digital: refresh ? (results[0][0] || 0) : 0, suffix: '人'}" :options="{separator: ','}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="ranking_rank" v-slot="{ results: results }" :url="`/v1/components/19b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[20, '暂无数据']]" :style="{width: '296px', height: '290px', overflow: 'scroll', position: 'absolute', top: '412px', left: '90px'}">
      <ranking ref="department-ranking-content" v-if="results" :data="results.map(item => ({label: item[1], amount: item[0]}))" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" v-scroll="{itemHeight: 47}" :labelStyle="{color: '#ffffff', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#00fff2', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff1a', lineColor: ['#7d40ff', '#00fff2'], height: '8px', borderRadius: '2.5px', marginTop: '3px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: '#566374f0', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <!-- <div ref="talents-demand-change-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '742px', left: '1500px'}">
      >>
    </div>
    <div ref="talents-demand-change-title·" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '740px', left: '1533px'}">
      全国人才区域分布
    </div>
    <div>
      <v-chart ref="map-thumbnail-chart" :style="{width: '270px', height: '250px', position: 'absolute', top: '792px', left: '1500px'}" :options="craneStates.mapThumbnailOptions" />
    </div>
    <span :style="{color: '#00fff2', fontSize: '14px', fontWeight: 400, lineHeight: '20px', position: 'absolute', top: '792px', left: '1776px'}">
      人才全国占比
    </span>
    <div :style="{position: 'absolute', top: '824px', left: '1765px'}">
      <span :style="{marginRight: '4px', color: '#ffffff'}">
        ·
      </span>
      <span :style="{color: '#ffffff', fontSize: '14px', fontWeight: 400, lineHeight: '20px'}">
        人才总数占比
      </span>
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/54b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{color: '#00fff2', fontSize: '14px', fontWeight: 400, lineHeight: '20px', position: 'absolute', top: '848px', left: '1776px'}">
      {{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}
    </data-loader>
    <div :style="{position: 'absolute', top: '876px', left: '1765px'}">
      <span :style="{marginRight: '4px', color: '#ffffff'}">
        ·
      </span>
      <span :style="{color: '#ffffff', fontSize: '14px', fontWeight: 400, lineHeight: '20px'}">
        第一产业人才
      </span>
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/51b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{color: '#00fff2', fontSize: '14px', fontWeight: 400, lineHeight: '20px', position: 'absolute', top: '900px', left: '1776px'}">
      {{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}
    </data-loader>
    <div :style="{position: 'absolute', top: '928px', left: '1765px'}">
      <span :style="{marginRight: '4px', color: '#ffffff'}">
        ·
      </span>
      <span :style="{color: '#ffffff', fontSize: '14px', fontWeight: 400, lineHeight: '20px'}">
        第二产业人才
      </span>
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/52b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{color: '#00fff2', fontSize: '14px', fontWeight: 400, lineHeight: '20px', position: 'absolute', top: '952px', left: '1776px'}">
      {{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}
    </data-loader>
    <div :style="{position: 'absolute', top: '980px', left: '1765px'}">
      <span :style="{marginRight: '4px', color: '#ffffff'}">
        ·
      </span>
      <span :style="{color: '#ffffff', fontSize: '14px', fontWeight: 400, lineHeight: '20px'}">
        第三产业人才
      </span>
    </div>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/53b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date().getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{color: '#00fff2', fontSize: '14px', fontWeight: 400, lineHeight: '20px', position: 'absolute', top: '1004px', left: '1776px'}">
      {{`${results[0][0] ? results[0][0].toFixed(2) : 0}%`}}
    </data-loader> -->
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/legendScroll'
import fujian from '../../public/hxrc/fujian.json'
import china from '../../public/hxrc/china.json'
Echarts.registerMap('fujian', fujian)
Echarts.registerMap('china', china)

const DATE_RANGE = [2006, new Date().getFullYear()]

import BuiltInMixin from '../mixins/built_in'
import {
  DatePicker,
} from 'iview'
import {
  DataLoader,
  VisTable,
  BrickRadioButtonSelect,
  DigitalRoll,
  Ranking,
} from '@byzanteam/vis-components'
import {
  Donut,
  VerticalBar,
} from '@byzanteam/graphite'
import Navigator from '../components/navigator'
import {PROVINCE_PIECES,CITY_PIECES} from './constants'

export const resources = {
  mixins: [BuiltInMixin],

  components: {
    DatePicker,
    DataLoader,
    VisTable,
    'v-chart': Echarts,
    BrickRadioButtonSelect,
    DigitalRoll,
    Ranking,
    Donut,
    VerticalBar,
    Navigator
  },

  data () {
    return {
      Echarts: Echarts,
      currentArea: '',
      city: '',
      scrollRadio: true,
      craneStates: {
        department: null,
        mapData: [],
        selectedArea: {},
        year: new Date(),
        mapThumbnailOptions: {backgroundColor: 'transparent', series: {type: 'map', mapType: 'china', itemStyle: {areaColor: '#0e3e7d', borderColor: '#68a4f0', borderWidth: 1}, emphasis: {label: {color: 'white', fontWeight: 600}, itemStyle: {areaColor: '#00fff2'}}}}
      },
    }
  },

  mounted() {
    this.requestMapGeojson(Echarts)
    // this.bindMapEvents()
  },

  created() {
    document.title = '人才资源综合驾驶舱'
    window.sessionStorage.setItem('distance', '0')
  },

  computed: {
    piecesArr(){
      return this.craneStates.department ? CITY_PIECES : PROVINCE_PIECES
    },
    mapOptions() {
      return {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: (params) => {return params.name + '<br />人才数量（人）：' + (isNaN(params.value) ? 0 : params.value) + '<br />全省人才数量排名：' + params.data.rank},
          backgroundColor: '#566374f0'
        },
        visualMap: {
          type: 'piecewise',
          inverse: true,
          pieces: this.piecesArr,
          orient: 'horizontal',
          bottom: '6%',
          left: '26%',
          textStyle: {
            color: '#ffffff',
            fontSize: 14
          },
          itemWidth: 18,
          itemGap: 10,
          textGap: 8,
          inRange: {
            color: ['#1c44a2', '#2174bb', '#e0ad3a', '#d98278', '#bb4e54']
          }
        },
        series: {
          type: 'map',
          mapType: this.craneStates.department ? this.craneStates.department.uuid : 'fujian',
          data: this.cityRank,
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
            borderWidth: 2
          },
          emphasis: {
            label: {
              color: 'white',
              fontWeight: 600
            },
            itemStyle: {
              areaColor: '#29e8de',
              shadowColor: 'rgba(0, 0, 0, .5)',
              shadowBlur: 12,
              shadowOffsetX: 0,
              shadowOffsetY: 10
            }
          }
        }
      }
    },

    // 如果选择区，又取消选择，则回溯选择市一级
    areaSelect() {
      if (this.currentArea) {
        return this.currentArea
      } else if (this.craneStates.department) {
        return this.craneStates.department.label
      } else  {
        return ''
      }
    },

    cityRank() {
      let rank = this.craneStates.mapData.sort((a,b) => (b.value-a.value))
      rank = rank.map((item,index) => {
        return {
          ...item,
          rank: index+1
        }
      })
      return rank
    }
  },

  watch: {
    'craneStates.department'(value) {
      this.currentArea = value ? value.label : ''
      this.setState('mapData', [])
    },

    'craneStates.selectedArea'(value) {
      if(value) {
        this.currentArea = value.name
      }
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
    },
  },

  methods: {
    closeScrollRadio() {
      this.scrollRadio = false
    },
    openScrollRadio() {
      this.scrollRadio = true
    },
    bindMapEvents() {
      const { chart } = this.$refs.map
      this.mapClickedFunc(chart)
      this.mapDbclickedFunc(chart)
    },
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
    limitXaxisLabel(value) {
      return value.length > 5 ? value.slice(0, 5) + '...' : value
    },
    limitLabelLength(value) {
      return (value/1000).toFixed(0)
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
    },
    generateDateRange() {
      var i = DATE_RANGE[1]
      var range = []
      while(i >= 2006) {
        range.push(i)
        i -= 1
      }
      return range
    },
  }
}
export default resources
</script>

<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}

.table {
  .table__body {
    tr {
      td:first-child {
        text-align: center;
        line-height: 46px;
      }
      td:last-child {
        text-align: left;
        line-height: 46px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .row-index-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #7b43ff;
    color: #ffffff;
  }
}

[data-content]:hover {
  &:after {
    border-radius: 4px;
    padding: 6px;
    background-color: #566374f0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    content: attr(data-content);
  }
}
</style>
