<template>
  <div class="resources">
    <navigator ref="navigator"/>
    <img ref="background" src="/hxrc/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/hxrc/images/Box-Bg.png" />
    <data-loader v-slot="{ results: results }" @requestDone="(param)=>[setState('mapData', param.results.map((item) => ({name: item[1], value: item[0]})))]" :url="`/v1/components/20b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : '福建'}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart  v-if="results" class="map-chart" :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: (params) => {return params.name + '<br />人才数量（人）：' + (isNaN(params.value) ? 0 : params.value)}, backgroundColor: '#566374f0'}, visualMap: {type: 'piecewise', pieces: [{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}], orient: 'horizontal', bottom: '6%', left: '26%', textStyle: {color: '#ffffff', fontSize: 14}, itemWidth: 18, itemGap: 10, textGap: 8, inRange: {color: ['rgba(106, 214, 255, .1)', 'rgba(106, 214, 255, .4)', 'rgba(106, 214, 255, .5)', 'rgba(106, 214, 255, .6)', 'rgba(106, 214, 255, .7)']}}, series: {type: 'map', mapType: craneStates.department ? craneStates.department.uuid : 'fujian', data: results.map(item => ({name: item[1], value: item[0]})), label: {show: true, fontSize: 14, color: 'white'}, itemStyle: {areaColor: 'rgba(106, 214, 255, .05)', borderColor: '#6ad6ff', borderType: 'solid', borderWidth: 0.5}, emphasis: {label: {color: 'white', fontWeight: 600}, itemStyle: {areaColor: '#6ad6ff'}}}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/21b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`" method="get" :data="[['暂无数据']]" :style="{width: '400px', height: '254px', overflow: 'scroll', position: 'absolute', top: '78px', left: '1490px'}">
      <vis-table :withHeader="false" theme="dark" stripe="" :headers="[{width: 120, key: 'index'}, {width: 280, key: 'name'}]" :data="results.map((item, index) => ({index: index + 1, name: item[0]}))">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '454px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '38px', left: '733px'}">
      全省人才资源态势总览
    </div>
    <div ref="talent-index" data-content="根据「区域」选择分析该地图人才指数分析数据，用于人才指数对比" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '262px', left: '73px'}">
      人才指数综合分析
    </div>
    <div ref="talent-education" data-content="根据「区域」选择统计该区域人才学历分布情况" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '704px', left: '73px'}">
      人才学历层次
    </div>
    <div ref="talent-industry" data-content="以「区域」作为筛选条件，统计分析历史简历数据判断岗位平均的流动时间并进行排名" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1530px'}">
      人才流动岗位排名
    </div>
    <div ref="industry-talent" data-content="以「区域」作为筛选条件，统计该区域人才所在行业分布" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '388px', left: '1530px'}">
      行业人才占比
    </div>
    <div ref="talent-demand" data-content="以「区域」作为筛选条件，统计各个行业发布的招聘人才数量" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '704px', left: '1530px'}">
      各行业人才需求
    </div>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '265px', left: '38px'}">
      >>
    </div>
    <div ref="talent-education-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '38px'}">
      >>
    </div>
    <div ref="talent-industry-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1498px'}">
      >>
    </div>
    <div ref="industry-talent-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '391px', left: '1498px'}">
      >>
    </div>
    <div ref="talent-demand-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '707px', left: '1498px'}">
      >>
    </div>
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '79px', left: '104px'}" />
    <div ref="number-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '159px', left: '104px'}" />
    <div ref="education-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '364px', left: '64px'}" />
    <div ref="rank-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '364px', left: '264px'}" />
    <div ref="age-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '472px', left: '64px'}" />
    <div ref="industry-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '472px', left: '264px'}" />
    <div ref="quality-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '580px', left: '64px'}" />
    <div ref="synthesis-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '580px', left: '264px'}" />
    <div ref="age-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '324px', left: '40px'}" />
    <div ref="education-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '324px', left: '240px'}" />
    <div ref="industry-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '432px', left: '40px'}" />
    <div ref="number-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '432px', left: '240px'}" />
    <div ref="quality-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '540px', left: '40px'}" />
    <div ref="synthesis-bg" :style="{height: '80px', width: '180px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '540px', left: '240px'}" />
    <div ref="production-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '50px', left: '30px'}" />
    <div ref="production-bg" :style="{height: '50px', width: '400px', backgroundColor: '#6ad6ff1a', borderRadius: '5px', position: 'absolute', top: '130px', left: '30px'}" />
    <div ref="departments-loader" :style="{position: 'absolute', top: '125px', left: '929px'}">
      <brick-radio-button-select ref="departments-select" :options="selectOptions" v-model="craneStates.department" placeholder="全省" />
    </div>
    <data-loader v-slot="{ results: results }" url="/v1/components/22b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[[0, '暂无数据']]" :style="{width: '460px', height: '218px', position: 'absolute', top: '435px', left: '1455px'}">
      <v-chart class="pie-chart" :options="{backgroundColor: 'transparent', legend: {formatter: legendText, type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, left: 270, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results.map(item => ({value: item[0], name: item[1]})).sort(compare())}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader ref="part-production-value" v-slot="{ results: results }" :url="`/v1/components/12b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '56px', left: '130px'}">
      <digital-roll ref="deal-number-total" v-if="results" data-content="根据「区域」选择统计该区域 2019 年地区生产总值" titlePosition="left" :content="{title: '地区生产总值', prefix: '￥', suffix: '亿元', digital: results[0][0] || 0}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-number" v-slot="{ results: results }" :url="`/v1/components/13b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '136px', left: '130px'}">
      <digital-roll ref="talent-number-content" v-if="results" data-content="根据「区域」选择统计该地区人才库中学历为「硕士」「博士」的人才数量" titlePosition="left" :content="{title: '中高端人才数量', digital: results[0][0] || 0, suffix: '人'}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-age-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才年龄指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '440px', left: '90px'}">
      <digital-roll ref="talent-age-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才年龄指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-education-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才学历指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '332px', left: '90px'}">
      <digital-roll ref="talent-education-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才学历指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-industry-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才产业指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '440px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才行业指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-quality-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才素质指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '548px', left: '90px'}">
      <digital-roll ref="talent-quality-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才素质指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-rank-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才职称指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '332px', left: '290px'}">
      <digital-roll ref="talent-rank-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才职称指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="talent-synthesis-index" v-slot="{ results: results }" :url="`/v1/components/14b74ddd-39de-493f-84ab-9d87fcf23fee/data?city=${craneStates.department ? craneStates.department.label : ''}市&type='人才综合指数'`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '548px', left: '290px'}">
      <digital-roll ref="talent-quality-index-content" v-if="results" titlePosition="bottom" :content="{title: '人才综合指数', digital: results[0][0] || 0}" :options="{separator: ''}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="ranking_rank" v-slot="{ results: results }" :url="`/v1/components/19b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.department ? craneStates.department.label : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '296px', height: '290px', overflow: 'scroll', position: 'absolute', top: '752px', left: '82px'}">
      <ranking ref="department-ranking-content" v-if="results" :data="results.map(item => ({label: item[1], amount: item[0]}))" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#4b9bbe', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#6ad6ff', fontSize: '16px', fontFamily: 'Oswald-Regular', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: '#ffffff1a', lineColor: ['#0885b5', '#6ad6ff'], height: '5px', borderRadius: '2.5px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#367391', name: 'circle-small', size: 14}}" :tooltipOptions="{background: '#566374f0', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="demand-vertical-bar" v-slot="{ results: results }" url="/v1/components/23b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '270px', position: 'absolute', top: '762px', left: '1490px'}">
      <v-chart class="bar-chart" ref="demand-vertical-bar-content" :options="{grid: {top: '12%', right: '1%'}, xAxis: {axisLabel: {formatter: limitXaxisLabel, rotate: -315, fontSize: 12, fontWeight: 400, color: '#367391'}, axisLine: {show: false}, data: results.map(item => (item[1]))}, yAxis: {axisLine: {show: false}, axisLabel: {formatter: limitLabelLength, rotate: 0, fontSize: 12, fontWeight: 400, color: '#367391', align: 'right'}, splitLine: {show: false}, splitNumber: 5, name: '千人', nameTextStyle: {fontSize: 12, fontWeight: 400, color: '#367391', align: 'right', padding: [0, 8, 0, 0]}}, series: {type: 'bar', barWidth: 7, barCategoryGap: '10%', itemStyle: {normal: {barBorderRadius: 7, color: new Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: '#117ea8'
                      },
                      {
                        offset: 1,
                        color: '#6ad6ff'
                      }], false),}}, data: results.map(item => (item[0]))}, tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
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
Echarts.registerMap('fujian', fujian);

const SELECT_OPTIONS = [{label: '福州', uuid: 'fuzhou'}, {label: '宁德', uuid: 'ningde'}, {label: '龙岩', uuid: 'longyan'}, {label: '莆田', uuid: 'putian'}, {label: '南平', uuid: 'nanping'}, {label: '三明', uuid: 'sanming'}, {label: '厦门', uuid: 'xiamen'}, {label: '漳州', uuid: 'zhangzhou'}, {label: '泉州', uuid: 'quanzhou'}]

import BuiltInMixin from '../mixins/built_in'
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

export const resources = {
  mixins: [BuiltInMixin],

  components: {
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
      selectOptions: SELECT_OPTIONS,
      craneStates: {
        department: null,
        mapData: []
      },
    }
  },

  mounted() {
    this.requestMapGeojson(Echarts)
  },

  created() {
    document.title = '全省人才资源态势总览'
  },

  methods: {
    demandTooltipFormatterFunc(params) {
      return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>${params[0].name}: ${params[0].data}人`
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
    }
  }
}
export default resources
</script>

<style lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}

.resources {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../public/hxrc/images/Bg.png');
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
        color: #4b9bbe;
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6ad6ff;
    color: #ffffff;
  }
}

[data-content]:hover {
  &:after {
    border-radius: 4px;
    /*line-height: 18px;*/
    padding: 6px;
    background-color: #566374f0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    content: attr(data-content);
  }
}
</style>
