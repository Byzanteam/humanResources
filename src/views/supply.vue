<template>
  <div class="supply" v-if="isShow">
    <navigator ref="navigator" :city="city" />
    <img ref="title-bg" :style="{width: '700px', height: '124px', position: 'absolute', top: '0px', left: '610px'}" src="../../public/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '460px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      人才供需专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <img ref="right-box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="../../public/hxrc/images/Box-Bg.png" />
    <data-loader :style="{width: '1100px', height: '900px', position: 'absolute', top: '176px', left: '480px'}">
      <v-chart ref="map" :options="mapOptions" />
    </data-loader>
    <div class="center-select">
      <div v-if="city" class="center-select__label">{{ city }}</div>
      <brick-radio-button-select v-else ref="departments-select" :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" :style="{marginLeft: '12px'}" />
    </div>
    <data-loader ref="job_select" :style="{position: 'absolute', top: '48px', left: '40px'}">
      <Select class="departments-select" placeholder="全部" :clearable="true" :filterable="true" :remote-method="selectOptionsRequest" :loading="selectRemoteLoading" :style="{width: '380px'}" v-model="craneStates.currentJob">
        <Option v-for="(item, key) in jobOptions" :key="key+item.name" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <data-loader ref="job_select" @requestDone="(param)=>[setState('dateRange', param.results.map((item) => (Number(item[0]))))]" url="/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{position: 'absolute', top: '114px', left: '40px'}">
      <date-picker
        type="year"
        format="yyyy年"
        v-model="craneStates.year"
        :style="{width: '180px', height: '50px',marginRight:'20px'}"
        :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}"
        class="supply-datepicker"
        placeholder="按年选择"
      />
      <Select class="month-select" placeholder="选择月份" :clearable="true" :style="{width: '180px'}" v-model="craneStates.month">
        <Option v-for="(item, key) in months" :key="key+item.name" :value="item.value" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <div ref="supply-demand-count" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '194px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '223px', left: '100px'}" />
    <data-loader ref="supply-demand-count" v-slot="{ results: results }" :url="`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&year=${generateYear}&month=${generateMonth}&area=${areaSelect}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '200px', left: '126px'}">
      <digital-roll ref="talent-age-index-content" data-content="默认为当年所有企业所需人才数量，可根据「区域」「岗位名」「时间」进行筛选统计查阅对应的企业人才需求数量" titlePosition="left" :content="{title: '企业人才需求数量', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ','}" :style="{height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '288px', left: '40px'}">
      >>
    </div>
    <div ref="talent-demand" class="line-break-talent-demand ranking-tooltip" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '286px', left: '74px'}">
      <div :style="{position: 'relative'}">
        <div data-content="岗位排名：根据「区域」「时间」进行筛选统计查阅对应的企业人才需求岗位排名岗位薪资排名：根据「区域」「时间」进行筛选统计查阅岗位的薪资排名情况" :style="{position: 'relative'}">
          需求岗位排名
        </div>
      </div>
    </div>
    <brick-tabs :tabNavs="craneStates.tabNavs" :activeTab="craneStates.tabCurrent" :style="{position: 'absolute', top: '330px', left: '110px'}" v-model="craneStates.tabCurrent" />
    <data-loader v-slot="{ results: results }" v-if="craneStates.tabCurrent === craneStates.tabNavs[0]" :url="`/v1/components/04b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&month=${generateMonth}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="null" :style="{width: '380px', height: '280px', overflow: 'scroll', position: 'absolute', top: '392px', left: '40px'}">
      <vis-table v-scroll="{itemHeight: 40}" key="04b74ddd-39de-493f-84ab-9d87fcf23fee" :withHeader="false" theme="dark" stripe="" :headers="[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'count'}]" :data="results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1]})) : [{index: 0, name: '暂无数据', count: 0}]">
        <template v-slot="{ cell: cell, columnKey: columnKey }">
          <span :class="columnKey === 'index' ? 'row-index-cell' : ''">
            {{cell}}
          </span>
        </template>
      </vis-table>
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.tabCurrent === craneStates.tabNavs[1]" :url="`/v1/components/05b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&month=${generateMonth}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="null" :style="{width: '380px', height: '280px', overflow: 'scroll', position: 'absolute', top: '392px', left: '40px'}">
      <vis-table v-scroll="{itemHeight: 40}" key="05b74ddd-39de-493f-84ab-9d87fcf23fee" :withHeader="false" theme="dark" stripe="" :headers="[{width: 80, key: 'index'}, {width: 200, key: 'name'}, {width: 100, key: 'count'}]" :data="results ? results.map((item, index) => ({index: index + 1, count: item[0], name: item[1]})) : [{index: 0, name: '暂无数据', count: 0}]">
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
    <div ref="salary-title·" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '720px', left: '74px'}">
      <div data-content="默认为所有岗位的平均薪资，可根据「岗位名」进行筛选统计查阅对应行位当年平均薪资与历年的平均薪资" :style="{position: 'relative'}">
        人才薪酬分析
      </div>
    </div>
    <div ref="salary-count" :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '764px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '793px', left: '116px'}" />
    <data-loader ref="salary-count-digital" v-slot="{ results: results }" :url="`/v1/components/06b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&month=${generateMonth}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '770px', left: '146px'}">
      <digital-roll titlePosition="left" :content="{title: '岗位平均薪酬', digital: results ? results[0][0] : 0, prefix: '￥'}" :options="{separator: ','}" :style="{height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <data-loader ref="salary-count-line-chart" v-slot="{ results: results }" :url="`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&year=${generateYear}&area=${areaSelect}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '200px', position: 'absolute', top: '838px', left: '40px'}">
      <v-chart :options="{color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], grid: {top: 30, left: 52, right: 10, bottom: 30}, backgroundColor: 'transparent', tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: salaryTooltipFormatterFunc, backgroundColor: '#566374f0'}, xAxis: {type: 'category', data: results ? results.map(item => (item[1])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '元', splitNumber: '4', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'right', padding: [0, 5, 0, 0]}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400, align: 'right'}, splitLine: {show: false}}, series: [{type: 'line', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '50px', left: '1500px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '48px', left: '1533px'}">
      <div :style="{position: 'relative'}">
        重点行业分析
      </div>
    </div>
    <div class="rank" :style="{display: 'flex', position: 'absolute', top: '100px', left: '1500px'}">
      <div :style="{width: '60px'}" />
      <div :style="{width: '140px'}">
        行业名称
      </div>
      <div :style="{width: '100px'}">
        需求人数
      </div>
      <div :style="{width: '100px'}">
        供求比
      </div>
    </div>
    <data-loader v-slot="{ results: results }" url="/v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="null" :style="{width: '380px', height: '198px', overflow: 'scroll', position: 'absolute', top: '142px', left: '1500px'}">
      <vis-table v-scroll="{itemHeight: 40}" key="08b74ddd-39de-493f-84ab-9d87fcf23fee" theme="dark" stripe="" :withHeader="false" :headers="[{width: 60, key: 'index'}, {width: 140, key: 'name', title: '行业名称'}, {width: 100, key: 'count', title: '需求人数'}, {width: 100, key: 'ratio', title: '供求比'}]" :data="results ? results.map((item, index) => ({index: index + 1, name: item[0], count: item[1] || 0, ratio: item[2] || 0})) : [{index: 0, name: '暂无数据', count: 0, ratio: 0}]">
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
    <div ref="talents-demand-change-title·" :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '380px', left: '1532px'}">
      <div data-content="根据「区域」「时间」进行筛选统计企业发布的招聘人才数量与人才投递简历情况对比折线图体现供需变化" :style="{position: 'relative'}">
        人才供需变化
      </div>
    </div>
    <data-loader ref="talents-demand-change-count-line-chart" v-slot="{ results: results }" @requestDone="(param)=>[setState('supplyLineChartData', param.results.map(item => (item[3])))]" :url="`/v1/components/09b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${craneStates.currentJob || ''}&area=${areaSelect}&year=${craneStates.year ? craneStates.year.getFullYear() : ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '230px', position: 'absolute', top: '432px', left: '1500px'}">
      <v-chart :options="{grid: {left: 52, right: 0, bottom: 30}, backgroundColor: 'transparent', color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}, formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {icon: 'circle', itemWidth: 8, itemHeight: 8, right: 0, itemGap: 14, textStyle: {color: '#ffffff', fontSize: 14}, data: ['人才供给', '岗位需求'], inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: results ? results.map(item => (item[1])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, yAxis: {name: '人', type: 'value', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {align: 'center', padding: [0, -14, 0, 0], color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, axisLabel: {align: 'center', color: 'rgba(255, 255, 255, .8)', fontSize: 14, fontWeight: 400}, splitLine: {show: false}}, series: [{type: 'line', name: '人才供给', data: results ? results.map(item => (item[2])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '岗位需求', data: results ? results.map(item => (item[0])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <div ref="degree-analysis-icon" :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '722px', left: '1500px'}">
      >>
    </div>
    <div ref="degree-analysis-title" class="line-break-degree ranking-tooltip" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '720px', left: '1532px'}">
      <div data-content="人才学历： 根据「区域」「时间」进行筛选统计对应的人才学历分布情况人才职称：根据「区域」「时间」进行筛选统计对应的人才职称分布情况" :style="{position: 'relative'}">
        学历职称分析
      </div>
    </div>
    <brick-tabs :tabNavs="craneStates.chartTabNavs" :activeTab="craneStates.chartTabCurrent" :style="{position: 'absolute', top: '764px', left: '1496px'}" v-model="craneStates.chartTabCurrent" />
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[0]" :url="`/v1/components/10b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {pageIconColor: '#aaa', pageIconInactiveColor: '#2f4554', type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#f6e446', '#46f68c', '#46f6e1','#4697f6',  '#4a46f6', '#a946f6', '#f6469a'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[1]" :url="`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {pageIconColor: '#aaa', pageIconInactiveColor: '#2f4554', formatter: legendText, type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#f6e446', '#46f68c', '#46f6e1','#4697f6',  '#4a46f6', '#a946f6', '#f6469a'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[2]" :url="`/v1/components/61b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {pageIconColor: '#aaa', pageIconInactiveColor: '#2f4554', type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#f6e446', '#46f68c', '#46f6e1','#4697f6',  '#4a46f6', '#a946f6', '#f6469a'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [1], name: item[0]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" v-if="craneStates.chartTabCurrent === craneStates.chartTabNavs[3]" :url="`/v1/components/62b74ddd-39de-493f-84ab-9d87fcf23fee/data?year=${generateYear}&job=${craneStates.currentJob || ''}&area=${areaSelect}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '218px', overflow: 'scroll', position: 'absolute', top: '822px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', legend: {pageIconColor: '#aaa', pageIconInactiveColor: '#2f4554', formatter: legendText, type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 35, top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#f6e446', '#46f68c', '#46f6e1','#4697f6',  '#4a46f6', '#a946f6', '#f6469a'], series: [{type: 'pie', left: -140, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [1], name: item[0]})) : [{value: 0, name: '暂无数据'}]}], tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}}" />
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
} from 'view-design'
import {
} from 'element-ui'
import Navigator from '../components/navigator'


const TAB_NAVS = [{uuid: 1, label: '岗位排名'}, {uuid: 2, label: '岗位薪资排名'}]

const CHART_TAB_NAVS = [{uuid: 1, label: '人才学历'}, {uuid: 2, label: '人才职称'},{uuid: 1, label: '需求学历'}, {uuid: 2, label: '需求职称'}]

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
      provinceOptions: PROVINCE_OPTIONS,
      Echarts: Echarts,
      currentArea: '',
      city: '',
      clickType: false,
      months: [
        {name:'一月',value:1},{name:'二月',value:2},{name:'三月',value:3},{name:'四月',value:4},{name:'五月',value:5},
        {name:'六月',value:6},{name:'七月',value:7},{name:'八月',value:8},{name:'九月',value:9},{name:'十月',value:10},
        {name:'十一月',value:11},{name:'十二月',value:12}],
      selectRemoteLoading: false,
      jobOptions: [],
      craneStates: {
        province: PROVINCE_OPTIONS[0],
        currentJob: '',
        inputQuery: '',
        year: new Date('2020'),
        month: null,
        department: null,
        dateRange: [],
        tabNavs: TAB_NAVS,
        tabCurrent: TAB_NAVS[0],
        chartTabNavs: CHART_TAB_NAVS,
        chartTabCurrent: CHART_TAB_NAVS[0],
        selectedArea: {},
        supplyLineChartData: [],
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
    'craneStates.department'(value) {
      this.currentArea = value ? value.value : ''
    },
    'craneStates.selectedArea'(value) {
      if(value) {
        const area = _.find(this.craneStates.selectOptions, (option) => (option.label === value.name))
        this.currentArea = area!==undefined ? area.value : value.name
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
    }
  },

  computed: {
    generateYear () {
      if(this.craneStates.year) {
        return this.craneStates.year.getFullYear()
      } else {
        return  ''
      }
    },
    generateMonth() {
      if (this.craneStates.year && this.craneStates.month) {
        return this.craneStates.month
      } else return ''
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
    // 如果选择区，又取消选择，则回溯选择市一级
    areaSelect() {
      if (this.currentArea) {
        return this.currentArea
      } else if (this.craneStates.department) {
        return this.craneStates.department.value
      } else  {
        return ''
      }
    },
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
    this.selectOptionsRequest()
  },

  created() {
    document.title = '人才供需专题'
  },

  mounted() {
    const { chart } = this.$refs.map
    this.mapClickedFunc(chart)
    this.mapDbclickedFunc(chart)
  },

  methods: {
    salaryTooltipFormatterFunc(params) {
      return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #6ad6ff;"></span>${params[0].name+'月'}：${params[0].data}元`
    },
    mapDbclickedFunc(chart) {
      chart.on('dblclick', (params) => {
        this.clickType = true;
        const { name } = params
        const area = _.find(this.craneStates.selectOptions, (option) => (option.label === name))
        this.craneStates.department = area ? area : this.craneStates.department
      })
    },
    mapClickedFunc(chart) {
      chart.on('click', (params) => {
        this.clickType = false;
        let _this = this
        setTimeout(function () {
          if (_this.clickType !== false) return;
          chart.dispatchAction({
            type: 'mapSelect',
            dataIndex: params.dataIndex
          })
          if(_this.craneStates.selectedArea) {
            chart.dispatchAction({
              type: 'mapUnSelect',
              dataIndex: _this.craneStates.selectedArea.dataIndex
            })
          }
          _this.craneStates.selectedArea = _this.craneStates.selectedArea.dataIndex === params.dataIndex ? {} : params
          const { name } = params
          const area = _.find(_this.craneStates.selectOptions, (option) => (option.label === name))
          _this.currentArea = area!==undefined ?  (area.value === _this.currentArea ? '' : area.value) : name
        }, 500);
      })
    },
    demandTooltipFormatterFunc(params) {
      const series = params.reduce((memo, serie) => {
        if(serie.seriesName === '供求比') {
          const marker = serie.marker.replace(/transparent/, )
          return `${memo}${marker}${serie.seriesName}: ${serie.value}`
        }
        return `${memo}${serie.marker}${serie.seriesName}: ${serie.value}人<br />`
      }, '')
      return `
        ${params[0].name}<br />
        ${series}
        <span style="display: inline-block; margin-right: 5px; border-radius: 10px; width:10px; height: 10px; background-color: #e0ad3a;"></span>供求比: ${this.craneStates.supplyLineChartData[params[0].dataIndex]}
      `
    },
    pieTooltipFormatterFunc(params) {
      return `${params.marker}${params.name}：${params.percent}%`
    },
    legendText(name) {
      return this.makeMultiLine(name, 7)
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
    async selectOptionsRequest(query='') {
      const {data:{data}} = await this.axios.get(`/v1/components/01b74ddd-39de-493f-84ab-9d87fcf23fee/data?job=${query}`)
      this.jobOptions = data.map((item) => ({index: item[0], name: item[0]}))
    }
  }
}
export default supply
</script>
