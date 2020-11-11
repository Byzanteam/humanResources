module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [480, 176],
  props: {
    $style: {
      width: '960px',
      height: '884px'
    }
  },
  children: [
    {
      id: 'map',
      component: 'v-chart',
      props: {
        $options: "mapOptions"
      }
    }
  ]
}
