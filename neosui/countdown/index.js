import NeCountdown from './src/countdown.vue'

NeCountdown.install = Vue => {
  Vue.component(NeCountdown.name, NeCountdown)
}

export default NeCountdown
