var timr = null
var limit = 0

const scrollAuto = (el, { itemHeight }) => {
  el.style.transitionDuration = '1.2s'
  el.style.transitionProperty = 'transform'
  const clientHeight = el.parentNode.clientHeight,
        scrollHeight = el.parentNode.scrollHeight
  if (scrollHeight <= clientHeight) return
  limit = scrollHeight - clientHeight
  setTimr(el, itemHeight)
}

const setTimr = (el, itemHeight) => {
  var distance = 0
  timr = setInterval(() => {
    if(distance >= limit) {
      distance = 0
      el.style.transform = `translate3d(0px, ${distance}px, 0px)`
    } else {
      distance += itemHeight
      el.style.transform = `translate3d(0px, -${distance}px, 0px)`
    }

  }, 5000);
}

export default {
  componentUpdated(el, { value }) {
    scrollAuto(el, value)
  },
}
