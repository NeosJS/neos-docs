import Countdown from './countdown/index.js'
import ClockCountdown from './clock-countdown/index.js'
import PieCountdown from './pie-countdown/index.js'
import Loading from './loading/index.js'
import Icon from './icon/index.js'
// import Carousel from './carousel/index.js'
// import CarouselItem from './carousel-item/index.js'

const components = [Countdown, ClockCountdown, PieCountdown, Loading, Icon]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$ThinkAcademy = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  Countdown,
  ClockCountdown,
  PieCountdown,
  Loading,
  Icon
}
