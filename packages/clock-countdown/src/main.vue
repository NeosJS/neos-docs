<template>
  <canvas :id="countDownId"  ref="countDown" :class="customClass" />
</template>

<script>
import merge from 'utils/merge'
import ClockCountdown from './main.js'

export default {
  name:'NeClockCountdown',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    customClass:{
      type: String,
      default:''
    }
  },
  data(){
    return {
      countdown:null,
      opts:{
        ratio:2,
        size: 60,
        countDownTime:0,
        borderWidth:2,
        borderColor:'#9DAAB6',
        pointerWidth:2,
        pointerColor:'#9DAAB6',
        pointerDotColor:'#ffffff',
        background:'#E6ECF1'
      },
      uuid: Math.random()
        .toString(36)
        .substring(3, 20)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.countdown.on('complete',() => {
        this.$emit('complete')
        this.countdown.destroy()
      })
      this.countdown.on('remain', time => {
        this.$emit('remain', time)
      })
    })
  },
  computed:{
    countDownId(){
      return `countDown_${this.uuid}`
    }
  },
  methods: {
    init(){
      const dom = this.$refs.countDown
      this.opts = merge({dom}, this.opts, this.options)
      this.countdown = new ClockCountdown(this.opts)
    }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        if (options) {
          this.init()
        }
      }
    }
  },
  beforeDestroy() {
    this.countdown.destroy()
  },
  destroyed() {
    this.$destroy()
  },
}
</script>
