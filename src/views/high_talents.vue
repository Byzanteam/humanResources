<template>
  <div class="high_talents">
    <navigator ref="navigator"/>
    <img ref="background" src="/hxrc/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '454px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '38px', left: '733px'}">
      高端人才专题
    </div>
    <div ref="talent-analysis" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '77px'}">
      申报分析
    </div>
    <div ref="apply-rank" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '1507px'}">
      申报数排名
    </div>
    <div ref="apply-route" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '517px'}">
      申报途径
    </div>
    <div ref="talent-type" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '957px'}">
      认定类型
    </div>
    <div ref="talent-past" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '590px', left: '517px'}">
      引进类型
    </div>
    <div ref="talent-now" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '590px', left: '837px'}">
      人才引进
    </div>
    <div ref="talent-abroad" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '590px', left: '1157px'}">
      人才区域
    </div>
    <div ref="talent-analysis-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '40px'}">
      >>
    </div>
    <div ref="apply-rank-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '1470px'}">
      >>
    </div>
    <div ref="apply-route-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '480px'}">
      >>
    </div>
    <div ref="talent-type-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '920px'}">
      >>
    </div>
    <div ref="talent-past-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '592px', left: '480px'}">
      >>
    </div>
    <div ref="talent-now-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '592px', left: '800px'}">
      >>
    </div>
    <div ref="talent-abroad-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '592px', left: '1120px'}">
      >>
    </div>
    <data-loader ref="department_select" @requestDone="(param)=>[setState('selectOptions', param.results ? param.results.map((item, index) => ({index: item[0], name: item[0]})) : [])]" :url="`/v1/components/00004ddd-39de-493f-84ab-9d87fcf23fee/data`" method="get" :data="[['']]" :style="{position: 'absolute', top: '140px', left: '760px'}">
      <Select class="departments-select" :clearable="true" placeholder="全部" :style="{width: '400px'}" v-model="craneStates.currentDepartment">
        <Option v-for="(item, key) in craneStates.selectOptions" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data`" method="get" :data="[[0, '暂无数据']]" :style="{width: '428px', height: '546px', position: 'absolute', top: '280px', left: '1470px'}">
      <vis-table theme="dark" stripe="" :headers="[{width: 88, key: 'index',}, {width: 226, key: 'name', title: '单位名称'}, {width: 114, key: 'value', title: '申报人数'}]" :data="results.map((item, index) => ({index: index + 1, name: item[0], value: item[1]}))" :style="{overflow: 'scroll'}">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00204ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '218px', position: 'absolute', top: '280px', left: '480px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, left: 250, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00304ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '218px', position: 'absolute', top: '280px', left: '920px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, left: 250, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00404ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '310px', height: '180px', position: 'absolute', top: '640px', left: '480px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, left: 180, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00504ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '310px', height: '180px', position: 'absolute', top: '640px', left: '804px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, left: 180, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00604ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '310px', height: '180px', position: 'absolute', top: '640px', left: '1120px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, left: 180, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[0], name: item[1]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data?area=${craneStates.currentDepartment ? craneStates.currentDepartment : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '400px', height: '571px', position: 'absolute', top: '281px', left: '40px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {icon: 'circle', itemWidth: 10, itemHeight: 10, top: '280', itemGap: 9, orient: 'vertical', textStyle: {color: '#4b9bbe', fontSize: 12, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349'], series: [{type: 'pie', top: -300, minAngle: 5, radius: ['0%', '55%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item[1], name: item[0]})) : {name: '暂无数据', value: 0}}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .1)', borderRadius: '5px', position: 'absolute', top: '140px', left: '40px'}" />
    <div :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '169px', left: '94px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/00104ddd-39de-493f-84ab-9d87fcf23fee/data`" method="get" :data="[['', 0]]" :style="{position: 'absolute', top: '146px', left: '120px'}">
      <digital-roll ref="talent-number-content" v-if="results" titlePosition="left" :content="{title: '2020年07月申报人数', digital: results.reduce((total, item) => total + item[1], 0), suffix: '人'}" :options="{separator: ','}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  VisTable,
  DigitalRoll,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
} from 'iview'
import Navigator from '../components/navigator'
export const high_talents = {
  mixins: [BuiltInMixin],

  components: {
    'v-chart': Echarts,
    DataLoader,
    VisTable,
    DigitalRoll,
    Select,
    Option,
    Navigator
  },

  created() {
    document.title = '高端人才统计'
  },

  data () {
    return {
      Echarts: Echarts,
      craneStates: {
        selectOptions: [],
        currentDepartment: null,
      },
    }
  },

  methods: {
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%&nbsp&nbsp${params.value}人`
    },
  }
}
export default high_talents
</script>
