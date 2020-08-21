import _ from 'lodash'
// TODO: move methods to packages/ as crane-cli packages
export default {
  data () {
    return {
      craneStates: {},
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
      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=福建')
      .then(({data: { data }}) => {
        Echarts.registerMap('fujian', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=福州')
      .then(({data: { data }}) => {
        Echarts.registerMap('fuzhou', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=宁德')
      .then(({data: { data }}) => {
        Echarts.registerMap('ningde', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=龙岩')
      .then(({data: { data }}) => {
        Echarts.registerMap('longyan', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=莆田')
      .then(({data: { data }}) => {
        Echarts.registerMap('putian', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=南平')
      .then(({data: { data }}) => {
        Echarts.registerMap('nanping', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=三明')
      .then(({data: { data }}) => {
        Echarts.registerMap('sanming', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=厦门')
      .then(({data: { data }}) => {
        const region = data[0][0]
        region.features = region.features.map(item => {
          if (item.properties.name === '翔安区') {
            item.properties.cp = [118.240811, 24.637479]
          }
          if (item.properties.name === '思明区') {
            item.properties.cp = [118.148828, 24.462059]
          }
          return item
        })
        Echarts.registerMap('xiamen', region);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=漳州')
      .then(({data: { data }}) => {
        Echarts.registerMap('zhangzhou', data[0][0]);
      })

      this.axios.get('/v1/components/00b74ddd-39de-493f-84ab-9d87fcf23fee/data?name=泉州')
      .then(({data: { data }}) => {
        Echarts.registerMap('quanzhou', data[0][0]);
      })
    },
  },
}
