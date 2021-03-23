import NeCanvasCountdown from './src/countdown.vue'

NeCanvasCountdown.install = Vue => {
  Vue.component(NeCanvasCountdown.name, NeCanvasCountdown)
}

export default NeCanvasCountdown
