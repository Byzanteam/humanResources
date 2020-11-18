<template>
  <div class="key_talents">
    <navigator ref="navigator"/>
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '460px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '36px', left: '730px'}">
      重点人才专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/hxrc/images/Box-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/hxrc/images/Box-Bg.png" />
    <div :style="{width: '380px', height: '143px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '84px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '117px', left: '80px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/55b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '94px', left: '106px'}">
      <digital-roll ref="talent-age-index-content" data-content="统计人才库中学历为「硕士」「博士」的人才数量" titlePosition="left" :content="{title: '中高端人才总数', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :style="{width: '250px', height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="cut-line" :style="{width: '360px', borderBottom: '1px solid rgba(69, 137, 225, .5)', position: 'absolute', top: '146px', left: '50px'}" />
    <div :style="{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '120px', position: 'absolute', top: '163px', left: '50px'}">
      <div :style="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}">
        杰出人才
      </div>
      <data-loader v-slot="{ results: results }" :url="`/v1/components/56b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea}`" method="get" :data="[[0]]">
        <digital-roll :content="{digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '20px', color: '#00fff2', fontWeight: '600', lineHeight: '32px', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
      </data-loader>
    </div>
    <div :style="{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '120px', position: 'absolute', top: '163px', left: '170px'}">
      <div :style="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}">
        领军人才
      </div>
      <data-loader v-slot="{ results: results }" :url="`/v1/components/57b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea}`" method="get" :data="[[0]]">
        <digital-roll :content="{digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '20px', color: '#00fff2', fontWeight: '600', lineHeight: '32px', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
      </data-loader>
    </div>
    <div :style="{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '120px', position: 'absolute', top: '163px', left: '290px'}">
      <div :style="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}">
        紧缺人才
      </div>
      <data-loader v-slot="{ results: results }" :url="`/v1/components/58b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea}`" method="get" :data="[[0]]">
        <digital-roll :content="{digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '20px', color: '#00fff2', fontWeight: '600', lineHeight: '32px', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
      </data-loader>
    </div>
    <div :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '243px', left: '40px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '272px', left: '130px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/45b74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '249px', left: '156px'}">
      <digital-roll ref="talent-age-index-content" data-content="统计历年举行的人才引进活动次数" titlePosition="left" :content="{title: '人才引进统计', digital: results ? results[0][0] : 0, suffix: '次'}" :options="{separator: ''}" :style="{width: '278px', height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <div :style="{width: '380px', height: '50px', backgroundColor: 'rgba(13, 45, 120, .45)', borderRadius: '5px', position: 'absolute', top: '128px', left: '1500px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#00fff2', borderStyle: 'solid', position: 'absolute', top: '157px', left: '1588px'}" />
    <data-loader v-slot="{ results: results }" :url="`/v1/components/58b74ddd-39de-493f-84ab-9d87fcf23fee/data?type=${digitalKeyword || ''}&tag=${craneStates.supplyInputWord}&area=${currentArea}`" method="get" :data="[[0]]" :style="{position: 'absolute', top: '134px', left: '1614px'}">
      <digital-roll ref="talent-age-index-content" data-content="默认统计所有行业供大于求判定为紧缺人才，可根据「区域」「时间」「行业类型」进行筛选统计对应行业的紧缺人才数量情况" titlePosition="left" :content="{title: '紧缺人才数量', digital: results ? results[0][0] : 0, suffix: '人'}" :options="{separator: ''}" :style="{width: '278px', height: '39px'}" :titleStyle="{color: '#ffffff', fontSize: '16px', fontWeight: '400'}" :prefixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :suffixStyle="{color: '#00fff2', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#00fff2', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', lineHeight: '38px', letterSpacing: '2.4px'}" />
    </data-loader>
    <div :style="{width: '400px', height: '220px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '309px', left: '30px'}" />
    <brick-tabs :tabNavs="craneStates.mapTabNavs" :activeTab="craneStates.mapTabCurrent" :style="{position: 'absolute', top: '325px', left: '126px'}" v-model="craneStates.mapTabCurrent" />
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[0]">
      <Select :clearable="true" placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '391px', left: '43px'}" v-model="craneStates.currentTalentType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" v-model="craneStates.supplyInputWord" :style="{width: '180px', height: '48px', paddingLeft: '8px', backgroundColor: 'rgba(9, 32, 91, 1)', border: '1px solid rgba(69, 137, 225, 1)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', outline: 'none', position: 'absolute', top: '391px', left: '237px'}" />
      <brick-button @click="()=>[setState('mapType', 'supply')]" type="gradient" color="primary" :style="{width: '148px', height: '28px', position: 'absolute', top: '465px', left: '156px'}">
        查看人才供应地图
      </brick-button>
    </div>
    <div v-if="craneStates.mapTabCurrent === craneStates.mapTabNavs[1]">
      <Select :clearable="true" placeholder="全部类型" class="map-select" :style="{width: '180px', position: 'absolute', top: '391px', left: '43px'}" v-model="craneStates.currentDemandType">
        <Option v-for="(item, key) in craneStates.types" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
      <input placeholder="关键词" class="map-tabs-input" v-model="craneStates.demandInputWord" :style="{width: '180px', height: '48px', paddingLeft: '8px', backgroundColor: 'rgba(9, 32, 91, 1)', border: '1px solid rgba(69, 137, 225, 1)', borderRadius: '4px', color: '#ffffff', fontSize: '16px', fontWeight: '500', outline: 'none', position: 'absolute', top: '391px', left: '237px'}" />
      <brick-button @click="()=>[setState('mapType', 'demand')]" type="gradient" color="primary" :style="{width: '148px', height: '28px', position: 'absolute', top: '465px', left: '156px'}">
        查看人才需求地图
      </brick-button>
    </div>
    <div :style="{width: '400px', height: '180px', backgroundColor: 'rgba(0, 0, 0, .03)', borderRadius: '4px', border: '1px dotted rgba(106, 214, 255, .3)', position: 'absolute', top: '225px', left: '1490px'}" />
    <div>
      <data-loader ref="job_select" @requestDone="(exports)=>[setState('dateRange', exports.results ? exports.results.map((item) => (Number(item[0]))) : [])]" url="/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" :data="[['']]" :style="{position: 'absolute', top: '270px', left: '1503px'}">
        <date-picker class="map-tab-datepicker" :options="{disabledDate: (time) => {return !craneStates.dateRange.includes(time.getFullYear())}}" :style="{width: '180px'}" format="yyyy年" v-model="craneStates.year" type="year" placeholder="选择时间" />
      </data-loader>
      <data-loader ref="industry_select" v-slot="{ results: results }" url="/v1/components/30b74ddd-39de-493f-84ab-9d87fcf23fee/data?offset=10" method="get" :data="[['']]" :style="{position: 'absolute', top: '270px', left: '1697px'}">
        <Select :clearable="true" placeholder="所有行业" class="map-select" :style="{width: '180px'}" v-model="craneStates.currentShortageType">
          <Option v-for="(item, key) in results ? results.map((item, index) => ({index: item[0], name: item[0]})) : []" :key="key" :value="item.index" :label="item.name">
            {{item.name}}
          </Option>
        </Select>
      </data-loader>
      <brick-button @click="()=>[setState('mapType', 'shortage')]" type="gradient" color="primary" :style="{width: '148px', height: '28px', position: 'absolute', top: '346px', left: '1616px'}">
        查看紧缺人才地图
      </brick-button>
    </div>
    <data-loader ref="high-talents-demand-change-line-chart" v-slot="{ results: supplyResults }" :url="`/v1/components/5ab74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea}&type=${digitalKeyword || ''}&job=${craneStates.supplyInputWord}`" method="get" :data="[[0, '暂无数据']]">
      <data-loader ref="high-talents-demand-change-line-chart" v-slot="{ results: demandResults }" :url="`/v1/components/5bb74ddd-39de-493f-84ab-9d87fcf23fee/data?area=${currentArea}&type=${digitalKeyword || ''}&job=${craneStates.supplyInputWord}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '180px', position: 'absolute', top: '597px', left: '40px'}">
        <v-chart :options="{grid: {top: '24%', left: 0, bottom: '12%', containLabel: true}, backgroundColor: 'transparent', color: ['#00fff2', '#7b43ff'], tooltip: {trigger: 'axis', formatter: demandTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, legend: {icon: 'circle', right: 10, itemGap: 14, itemWidth: 8, itemHeight: 8, textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, xAxis: {type: 'category', data: supplyResults ? supplyResults.map(item => (item[0])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#ffffff', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#ffffff', fontSize: 12, fontWeight: 400, align: 'right', padding: [0, 5, 0, 0]}, axisLabel: {color: '#ffffff', fontSize: 12, fontWeight: 400, align: 'right'}, splitLine: {show: false}, splitNumber: 4}, series: [{type: 'line', name: '人才供应', data: supplyResults ? supplyResults.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}, {type: 'line', name: '人才需求', data: demandResults ? demandResults.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
      </data-loader>
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/28b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '180px', overflow: 'scroll', position: 'absolute', top: '845px', left: '40px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {type: 'scroll', icon: 'circle', itemWidth: 10, itemHeight: 10, right: 'right', top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14}, inactiveColor: '#1C4159'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['45%', '76%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/33b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}&year=${craneStates.year ? craneStates.year.getFullYear() : new Date(Date.now()).getFullYear()}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '380px', height: '180px', overflow: 'scroll', position: 'absolute', top: '845px', left: '1500px'}">
      <v-chart :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: pieTooltipFormatterFunc, backgroundColor: '#566374f0'}, legend: {type: 'scroll', formatter: legendText, icon: 'circle', itemWidth: 10, itemHeight: 10, right: 'right', top: 'middle', itemGap: 9, orient: 'vertical', textStyle: {color: '#ffffff', fontSize: 14, lineHeight: 15}, inactiveColor: '#1C4159'}, color: ['#00fff2', '#7b43ff', '#e0ad3a', '#189ef1', '#2174b8', '#f65446'], series: [{type: 'pie', minAngle: 5, left: -140, radius: ['45%', '76%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})).sort(compare()) : [{value: 0, name: '暂无数据'}]}]}" />
    </data-loader>
    <data-loader ref="high-talents-demand-change-line-chart" v-slot="{ results: results }" :url="`/v1/components/32b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageType|| ''}`" method="get" :data="[['暂无数据', 0]]" :style="{width: '380px', height: '214px', position: 'absolute', top: '518px', left: '1500px'}">
      <v-chart :options="{grid: {top: '24%', left: 0, bottom: '10%', containLabel: true}, backgroundColor: 'transparent', color: ['#00fff2', '#7b43ff'], tooltip: {trigger: 'axis', formatter: shortageTooltipFormatterFunc, backgroundColor: '#566374f0', axisPointer: {lineStyle: {color: '#ffffff', type: 'dotted'}}}, xAxis: {type: 'category', data: results ? results.map(item => (item[0])) : ['暂无数据'], axisLine: {show: false}, axisTick: {show: false}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400}, splitLine: {show: false}}, yAxis: {type: 'value', name: '人', axisLine: {show: false}, axisTick: {show: false}, nameTextStyle: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'right', padding: [0, 5, 0, 0]}, axisLabel: {color: '#367391', fontSize: 12, fontWeight: 400, align: 'right'}, splitLine: {show: false}, splitNumber: 4}, series: [{type: 'line', name: '紧缺人才', data: results ? results.map(item => (item[1])) : [0], showSymbol: false, lineStyle: {width: 4}}]}" />
    </data-loader>
    <brick-radio-button-select :options="craneStates.selectOptions" v-model="craneStates.department" placeholder="全省" :style="{position: 'absolute', top: '125px', left: '929px'}" />
    <data-loader @requestDone="(param)=>[setState('mapData', param.results.map((item) => ({name: item[1], value: item[0]})))]" :url="`${requestUrl}`" method="get" :data="[[0, '暂无数据']]" :style="{width: '1100px', height: '900px', position: 'absolute', top: '160px', left: '410px'}">
      <v-chart ref="map" :options="{backgroundColor: 'transparent', tooltip: {trigger: 'item', formatter: (params) => {return params.name + '<br />人才数量（人）：' + (isNaN(params.value) ? 0 : params.value)}, backgroundColor: '#566374f0'}, geo: {map: craneStates.department ? craneStates.department.uuid : 'fujian', label: {normal: {show: false}, emphasis: {show: false}}, itemStyle: {normal: {areaColor: '#0e3e7d', borderColor: '#68a4f0', borderType: 'solid', borderWidth: 2}, emphasis: {areaColor: '#29e8de'}}, regions: [{name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false}}}}]}, visualMap: {type: 'piecewise', inverse: true, pieces: [{gt: 1500, label: '1500人及以上'}, {gt: 1000, lte: 1500, label: '1000-1500人'}, {gt: 100, lte: 999, label: '100-999人'}, {gt: 10, lte: 99, label: '10-99人'}, {gt: 1, lt: 9, label: '1-9人'}], orient: 'horizontal', bottom: '6%', left: '26%', textStyle: {color: '#ffffff', fontSize: '14'}, itemWidth: 18, itemGap: 10, textGap: 8, inRange: {color: ['#1c44a2', '#2174bb', '#e0ad3a', '#d98278', '#bb4e54']}}, series: [
                {
                  type: 'map',
                  mapType: craneStates.department ? craneStates.department.uuid : 'fujian',
                  geoIndex: 0,
                  data: craneStates.mapData,
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
                    borderWidth: 0.5
                  },
                  emphasis: {
                    label: {
                      color: 'white',
                      fontWeight: 600,
                    },
                    itemStyle: {
                      areaColor: '#29e8de',
                      shadowColor: 'rgba(0, 0, 0, .5)',
                      shadowBlur: 12,
                      shadowOffsetX: 0,
                      shadowOffsetY: 10
                    }
                  },
                },
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
                  data: [],
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
                  data: [],
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  zlevel: 1
                },
              ]}" />
    </data-loader>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '46px', left: '74px'}">
      高层次人才供需地图
    </div>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '46px', left: '1536px'}">
      区域紧缺人才地图
    </div>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '561px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '558px', left: '74px'}">
      <div data-content="根据「区域」「供需需求关键字」选择统计该地区人才库中学历为「硕士」「博士」的人才数量" :style="{position: 'relative'}">
        高层次人才供需变化
      </div>
    </div>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '809px', left: '40px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '806px', left: '74px'}">
      <div data-content="统计人才库中职称类型分布情况" :style="{position: 'relative'}">
        高层次人才类型分布
      </div>
    </div>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '459px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '456px', left: '1536px'}">
      <div data-content="根据「区域」「时间」「行业类型」进行筛选统计对应行业的历年紧缺人才数量情况" :style="{position: 'relative'}">
        区域紧缺人才趋势
      </div>
    </div>
    <div :style="{color: '#41bcff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '809px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '20px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', cursor: 'pointer', position: 'absolute', top: '806px', left: '1536px'}">
      <div data-content="根据「区域」「时间」「行业类型」统计紧缺人才企业的行业分布情况" :style="{position: 'relative'}">
        紧缺人才专业分布
      </div>
    </div>
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
import 'echarts/lib/chart/scatter'
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
    Navigator,
  },

  data () {
    return {
      Echarts: Echarts,
      currentArea: '',
      craneStates: {
        selectedArea: {},
        mapData: [],
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

  watch: {
    'craneStates.department'() {
      this.currentArea = value ? value.label : ''
      this.setState('mapData', [])
    },
    'craneStates.selectedArea'(value) {
      if(value) {
        this.currentArea = value.name
      }
    }
  },

  created() {
    document.title = '重点人才专题'
  },

  mounted() {
    const { chart } = this.$refs.map
    this.mapClickedFunc(chart)
    this.mapDbclickedFunc(chart)
  },

  beforeMount() {
    this.requestMapGeojson(Echarts)
  },

  methods: {
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
    mapDbclickedFunc(chart) {
      chart.on('dblclick', (params) => {
        const { name } = params
        const area = _.find(this.craneStates.selectOptions, (option) => (option.label === name))
        this.craneStates.department = area ? area : this.craneStates.department
      })
    },
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
