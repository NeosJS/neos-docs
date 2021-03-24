<template>
  <canvas :id="countDownId"  ref="countDown" />
</template>

<script>
import merge from 'utils/merge'
import ClockCountdown from './main.js'

export default {
  name:'ClockCountdown',
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
      defaultOptions:{
        ratio:2,
        size: 300,
        countDownTime:60,
        borderWidth:10,
        borderColor:'#9DAAB6',
        pointerWidth:10,
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
    })
  },
  computed:{
    countDownId(){
      return `countDown_${this.uuid}`
    }
  },
  methods: {
    init(){

      this.obj = this.$refs.countDown,
      this.defaultOptions = merge({dom:this.obj}, this.defaultOptions, this.options)
      new ClockCountdown(this.defaultOptions)
    }
  },
}
</script>
