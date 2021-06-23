import _ from 'lodash'
// TODO: move methods to packages/ as crane-cli packages
export default {
  data () {
    return {
      craneStates: {
        selectOptions: [{label: '福州市', uuid: 'fuzhou'}, {label: '宁德市', uuid: 'ningde'}, {label: '龙岩市', uuid: 'longyan'}, {label: '莆田市', uuid: 'putian'}, {label: '南平市', uuid: 'nanping'}, {label: '三明市', uuid: 'sanming'}, {label: '厦门市', uuid: 'xiamen'}, {label: '漳州市', uuid: 'zhangzhou'}, {label: '泉州市', uuid: 'quanzhou'}]
      },
    }
  },

  computed: {
    routeParams () {
      return this.$route.params
    }
  },

  methods: {
    getAttr (target, key) {
      return target[key]
    },

    linkTo (url) {
      this.$router.push(url)
    },

    linkToByName (name, params) {
      this.$router.push({
        name,
        params,
      })
    },

    getState (key) {
      return this.craneStates[key]
    },

    setState (state_id, value) {
      this.$set(this.craneStates, state_id, value)
    },

    getComponent (component_id) {
      return this.$refs[component_id]
    },

    excute (component_id, method, ...args) {
      const component = this.getComponent(component_id)
      if (component && _.isFunction(component[method])) {
        component[method](...args)
      }
    },

    translate (path) {
      return this.$t(path)
    },

    sum (a, b) {
      return a + b
    },

    openNavigator() {
      this.$refs.navigator.open()
    },

    requestMapGeojson (Echarts) {
      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=福建')
      .then(({data: { data }}) => {
        Echarts.registerMap('fujian', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=福州')
      .then(({data: { data }}) => {
        Echarts.registerMap('fuzhou', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=宁德')
      .then(({data: { data }}) => {
        Echarts.registerMap('ningde', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=龙岩')
      .then(({data: { data }}) => {
        Echarts.registerMap('longyan', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=莆田')
      .then(({data: { data }}) => {
        Echarts.registerMap('putian', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=南平')
      .then(({data: { data }}) => {
        Echarts.registerMap('nanping', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=三明')
      .then(({data: { data }}) => {
        Echarts.registerMap('sanming', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=厦门')
      .then(({data: { data }}) => {
        Echarts.registerMap('xiamen', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=漳州')
      .then(({data: { data }}) => {
        Echarts.registerMap('zhangzhou', data[0][0]);
      })

      this.axios.get('http://vis.cdyoue.com:35006/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=泉州')
      .then(({data: { data }}) => {
        Echarts.registerMap('quanzhou', data[0][0]);
      })
    },
  },
}
