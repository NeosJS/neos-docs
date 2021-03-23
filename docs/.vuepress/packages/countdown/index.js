import ScCountdown from './countdown.vue'

ScCountdown.install = Vue => {
  Vue.component(ScCountdown.name, ScCountdown)
}

export default ScCountdown
