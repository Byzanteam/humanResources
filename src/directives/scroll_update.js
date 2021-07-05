class scrollUpdate {
  constructor({el, value: {itemHeight, headerHeight, scrollRadio}}) {
    let body_style = document.body.style
    let regex1 = /(?<=\().*?(?=\))/g;
    let elScale = body_style.transform.match(regex1)[0]
    this.el = el
    this.itemHeight = itemHeight
    this.headerHeight = headerHeight
    this.timr = null
    this.limit = 0
    this.distance = window.sessionStorage.getItem('distance') ? Number(window.sessionStorage.getItem('distance')) : 0
    this.duration = '1.2s'
    this.itemHeight = itemHeight
    this.scrollRadio = scrollRadio
    this.scrollAuto()
    this.elScale=elScale-0
  }

  init () {
    if (this.timr) {
      clearInterval(this.timr)
    }
    this.scrollTopDir()
  }

  setStyle () {
    this.el.style.transitionDuration = this.duration
    this.el.style.transitionProperty = 'transform'
    // 刷新（初始）进入/鼠标移出
    if(this.scrollRadio) {
      // 有滑动滚动条，设置distance为滚动距离
      if(this.el.parentNode.scrollTop !==0) {
        window.sessionStorage.setItem('distance', this.el.parentNode.scrollTop.toString())
        this.distance = this.el.parentNode.scrollTop
      }
      // 获取存到本地的distance，在鼠标移出后把translate的值设置回去，归0滚动条的值
      let currentDistance = window.sessionStorage.getItem('distance') ? Number(window.sessionStorage.getItem('distance')) : this.distance
      this.el.style.transform = `translate3d(0px, -${currentDistance}px, 0px)`
      this.el.parentNode.scrollTop = 0
    } else {
      // 在这里获取到定时器里存的distance，赋值给scrollTop,实现滚动条到固定位置，把translate归0
      window.sessionStorage.getItem('distance')
      this.el.parentNode.scrollTop = window.sessionStorage.getItem('distance') ? Number(window.sessionStorage.getItem('distance')) : 0
      this.el.style.transform = `translate3d(0px, 0px, 0px)`
    }
  }

  // 这里distance不能归0，会导致鼠标移出后回到第一行
  // scrollInit() {
  //   this.distance = 0
  //   this.duration = '0s'
  //   this.setStyle()
  // }

  scrollTopDir () {
    this.distance = window.sessionStorage.getItem('distance') ? Number(window.sessionStorage.getItem('distance')) : 0
    this.duration = '0s'
    this.setStyle()
  }

  scrollAuto () {
    this.init()
    // 父节点的可见区域高度
    const clientHeight = this.el.parentNode.clientHeight,
      // 父节点的实际内容高度
      scrollHeight = this.el.parentNode.scrollHeight
    if (scrollHeight <= clientHeight) return
    // 实际内容高度
    this.limit = scrollHeight
    // 设置定时器
    this.setTimr()
  }

  setTimr () {
    clearInterval(this.timr)
    this.timr = setInterval(() => {
      // 偏移距离大于内容尺寸，归0
      if(this.distance >= this.limit) {
        this.scrollTopDir(this.el)
      } else {
        // 时间归0后，重置duration
        if(this.duration === '0s') {
          this.duration = '1.2s'
        }
        // 未偏移且有header高度设置
        if (this.distance === 0 && this.headerHeight) {
          this.distance = this.headerHeight
        } else {
          this.distance += this.itemHeight
          window.sessionStorage.setItem('distance', this.distance.toString())
        }
        this.setStyle()
      }
    }, 5000);
  }
}

export default {
  update(el, { value }) {
    if(el._scrollUpdate) clearInterval(el._scrollUpdate.timr)
    el._scrollUpdate = new scrollUpdate({el, value})
  },
  // 必须dom节点被销毁才能调用，这里不起作用
  unbind(el) {
    clearInterval(el._scrollUpdate.timr)
  }
}
