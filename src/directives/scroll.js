class Scroll {
  constructor({el, value: {itemHeight, headerHeight}}) {
    let body_style = document.body.style
    let regex1 = /(?<=\().*?(?=\))/g;
    let elScale = body_style.transform.match(regex1)[0]
    this.el = el
    this.itemHeight = itemHeight
    this.headerHeight = headerHeight
    this.timr = null
    this.limit = 0
    this.distance = 0
    this.duration = '1.2s'
    this.itemHeight = itemHeight
    this.scrollAuto()
    this.elScale=elScale-0
  }

  init () {
    if (this.timr) {
      this.clearInterval(this.timr)
    }
    this.scrollTop()
  }

  setStyle () {
    this.el.style.transitionDuration = this.duration
    this.el.style.transitionProperty = 'transform'
    this.el.style.transform = `translate3d(0px, -${this.distance}px, 0px)`
  }

  scrollTop () {
    this.distance = 0
    this.duration = '0s'
    this.setStyle()
  }

  scrollAuto () {
    this.init()
    const clientHeight = this.el.parentNode.clientHeight,
          scrollHeight = this.el.parentNode.scrollHeight
    if (scrollHeight <= clientHeight) return
    this.limit = scrollHeight
    this.setTimr()
  }

  setTimr () {
    clearInterval(this.timr)
    this.timr = setInterval(() => {
      if(this.distance >= this.limit) {
        this.scrollTop(this.el)
      } else {
        if(this.duration === '0s') {
          this.duration = '1.2s'
        }
        if (this.distance === 0 && this.headerHeight) {
          this.distance = this.headerHeight
        } else {
          this.distance += this.itemHeight
        }
        this.setStyle()
      }
    }, 5000);
  }
}

export default {
  update(el, { value }) {
    if(el._scroll) clearInterval(el._scroll.timr)
    el._scroll = new Scroll({el, value})
  },
  unbind(el) {
    clearInterval(el._scroll.timr)
  }
}
