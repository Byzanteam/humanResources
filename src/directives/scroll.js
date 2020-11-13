var timr = null
var limit = 0
var distance = 0
var duration = '1.2s'

const init = el => {
  if (timr) {
    clearInterval(timr)
  }

  scrollTop(el)
}

const setStyle = el => {
  el.style.transitionDuration = duration
  el.style.transitionProperty = 'transform'
  el.style.transform = `translate3d(0px, ${distance}px, 0px)`
}

const scrollTop = el => {
  distance = 0
  duration = '0s'
  setStyle(el)
}

const scrollAuto = (el, { itemHeight }) => {
  init(el)
  const clientHeight = el.parentNode.clientHeight,
        scrollHeight = el.parentNode.scrollHeight
  if (scrollHeight <= clientHeight) return
  limit = scrollHeight
  setTimr(el, itemHeight)
}

const setTimr = (el, itemHeight) => {
  timr = setInterval(() => {
    if(distance >= limit) {
      scrollTop(el)
    } else {
      if(duration === '0s') {
        duration = '1.2s'
        setStyle(el)
      }
      distance += itemHeight
      el.style.transform = `translate3d(0px, -${distance}px, 0px)`
    }

  }, 5000);
}

export default {
  update(el, { value }) {
    scrollAuto(el, value)
  },
  unbind() {
    clearInterval(timr)
  }
}
