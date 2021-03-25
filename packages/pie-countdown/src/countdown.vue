<template>
  <canvas :id="'countdown_' + uuid" ref="countdown" class="ne-canvas-countdown"></canvas>
</template>

<script>
import merge from 'utils/merge'
export default {
  name: 'NePieCountdown',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      settings: {
        size: 60, // 绘制圆形的最大尺寸，宽=高
        outerBorderWidth: 4, // 边框宽度
        innerBorderWidth: 5, // 边框宽度
        borderColor: '#ffaa0a', // 边框颜色
        outerColor: '#ffaa0a', // 最外层底圆颜色
        scheduleColor: '#ffffff', // 进度条动画颜色
        fontColor: '#3370ff', // 字体颜色
        ringColor: '#ffaa0a', // 进度条环形颜色
        innerColor: '#FFD518', // 最内圆底色
        fontSize: 0, // 字体大小
        beginTime: +new Date(), // 开始时间
        nowTime: +new Date(), // 结束时间
        countDownTime: 0, // 倒计时时长
        drawInnerRing: false, // 是否绘制内环
        stepRing: 100, // 步长（值越小，圆环的动效约流畅）
        ratio:2
      },
      timer: null,
      uuid: Math.random()
        .toString(36)
        .substring(3, 20)
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
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  destroyed() {
    this.$destroy()
  },
  methods: {
    init() {
      this.settings = merge({}, this.settings, this.options)
      this.obj = this.$refs.countdown
      this.obj.width = this.settings.size * this.settings.ratio
      this.obj.height = this.settings.size * this.settings.ratio
      this.obj.style.width=`${this.settings.size}px`
      this.obj.style.height=`${this.settings.size}px`
      this.ctx = this.obj.getContext('2d')
      this.ctx.scale(this.settings.ratio, this.settings.ratio)
      this.settings.countDownTime && this.startCountdown()
    },
    /**
     * 绘制底色
     */
    drawBackground() {
      this.drawCircle(0, 360, 0, this.settings.outerColor)
    },
    /**
     * 绘制进度条背景
     */
    drawProcess() {
      this.drawCircle(0, 360, 4, this.settings.ringColor)
    },
    /**
     * 绘制内环
     */
    drawInner() {
      this.drawCircle(0, 360, 50, this.settings.innerColor)
      this.strokeBorder(this.settings.innerBorderWidth)
    },
    /**
     * 绘制进度条动画
     */
    drawAnimate() {
      // 旋转的角度
      let deg = Math.PI / 180
      let v = this.schedule * 360,
        startAng = -90,
        endAng = -90 + v

      this.ctx.beginPath()
      this.ctx.moveTo(this.settings.size / 2, this.settings.size / 2)
      this.ctx.arc(
        this.settings.size / 2,
        this.settings.size / 2,
        this.settings.size / 2 - this.settings.outerBorderWidth,
        startAng * deg,
        endAng * deg,
        false
      )
      this.ctx.fillStyle = this.settings.scheduleColor
      this.ctx.fill()
      this.ctx.closePath()
    },
    /**
     * 绘制边框
     * @param {*} borderWidth
     */
    strokeBorder(borderWidth) {
      this.ctx.lineWidth = borderWidth
      this.ctx.strokeStyle = this.settings.borderColor
      this.ctx.stroke()
    },
    /**
     * 绘制文本
     * @param {*} text
     */
    strokeText(text) {
      this.ctx.textAlign = 'center'
      this.ctx.textBaseline = 'middle'
      this.ctx.font = this.settings.fontSize + 'px' + ' microsoft yahei'
      this.ctx.fillStyle = this.settings.fontColor
      this.ctx.fillText(text, this.settings.size / 2, this.settings.size / 2)
    },

    /**
     * 绘制圆环
     * @param {*} startAng
     * @param {*} endAng
     * @param {*} border
     * @param {*} fillColor
     */
    drawCircle(startAng, endAng, border, fillColor) {
      let deg = Math.PI / 180
      this.ctx.beginPath()
      this.ctx.arc(
        this.settings.size / 2,
        this.settings.size / 2,
        this.settings.size / 2 - border,
        startAng * deg,
        endAng * deg,
        false
      )
      this.ctx.fillStyle = fillColor
      this.ctx.fill()
      this.ctx.closePath()
    },

    /**
     * 开始倒计时
     */
    startCountdown() {
      let beginTime = this.settings.beginTime
      let nowTime = this.settings.nowTime
      this.timer = setInterval(() => {
        let allMs = this.settings.countDownTime * 1000 // 如30*1000=30 000ms
        nowTime = nowTime + this.settings.stepRing
        // 步长=（当前的时间-过去的时间）/总秒数
        this.schedule = (nowTime - beginTime) / allMs
        this.drawCanvas(this.schedule)
        if (nowTime - beginTime >= allMs) {
          // 重绘
          this.drawBackground()
          this.drawProcess()
          this.drawAnimate()
          this.settings.drawInnerRing && this.drawInner()
          this.settings.fontSize && this.strokeText(0)
          clearInterval(this.timer)
          this.timer = null
          this.$emit('complete')
        }
      }, this.settings.stepRing)
    },

    /**
     * 绘制全部元素
     * @param {*} schedule
     */
    drawCanvas(schedule) {
      schedule = schedule >= 1 ? 1 : schedule
      let text = parseInt(this.settings.countDownTime * (1 - schedule)) + 1
      // 清除画布
      this.ctx.clearRect(0, 0, this.settings.size, this.settings.size)
      this.drawBackground()
      this.drawProcess()
      this.drawAnimate()
      this.$emit('remain', text)
      this.settings.drawInnerRing && this.drawInner()
      this.settings.fontSize && this.strokeText(text)
    }
  }
}
</script>
