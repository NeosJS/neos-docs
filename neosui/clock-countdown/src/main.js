import { isServer } from 'utils/dom'
import { EventEmitter } from 'events'

const isArray = val => Array.isArray(val)
const requestAnimationFrame =
  (!isServer && (window.requestAnimationFrame || window.webkitRequestAnimationFrame)) ||
  (fn => setTimeout(fn, 16))
const cancelAnimationFrame =
  (!isServer && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame)) ||
  (id => clearTimeout(id))

export default class ClockCountdown extends EventEmitter {
  constructor(options = {}) {
    super()
    this.options = options
    this.ctx = null
    this.rotate = null
    this.stepRing = 60
    this.animationStep = 60
    this.animation = null
    this.countDownTime = 0
    this.init()
  }

  /**
   * 初始化
   */
  init() {
    const {
      dom,
      size,
      background,
      borderWidth,
      borderColor,
      pointerWidth,
      pointerColor,
      text,
      scale,
      countDownTime,
      ratio = 2
    } = this.options
    dom.setAttribute('width', size * ratio)
    dom.setAttribute('height', size * ratio)
    dom.style['width'] = `${size}px`
    dom.style['height'] = `${size}px`
    this.ctx = dom.getContext('2d')
    this.ctx.scale(ratio, ratio)
    this.stepRing++
    this.rotate = this.stepRing * (Math.PI / (((countDownTime / 1000) * this.animationStep) / 2))
    this.countDownTime = countDownTime / 1000
    this.text = text
    this.drawBg(size, background)
    scale && this.drawScale(size, scale, borderWidth)
    // text && size >= 150 && this.drawText(text, size, borderWidth)
    this.drawPointer(pointerColor, pointerWidth, size)
    this.drawBorder(borderWidth, borderColor, size)

    this.emit('remain', countDownTime - Math.floor(this.stepRing / 60))
    this.start()
  }
  start() {
    this.animation = requestAnimationFrame(this.init.bind(this))
    if (this.stepRing === this.countDownTime * this.animationStep) {
      cancelAnimationFrame(this.animation)
      this.emit('complete')
    }
  }
  destroy() {
    if (this.animation) {
      cancelAnimationFrame(this.animation)
      this.ctx = null
      this.rotate = null
      this.stepRing = 60
      this.animationStep = 60
      this.animation = null
      this.countDownTime = 0
    }
  }
  /**
   * 绘制表盘底色
   */
  drawBg(size, background) {
    const backgroundArr = isArray(background)
    let backgroundLingrad
    this.ctx.save()
    this.ctx.clearRect(0, 0, size, size)
    this.ctx.translate(size / 2, size / 2)
    this.ctx.rotate(-Math.PI / 2) //将坐标轴逆时针旋转90度，x轴正方向对准12点方向
    if (backgroundArr && background.length >= 2) {
      backgroundLingrad = this.ctx.createLinearGradient(size / 2, 0, -size / 2, 0)
      backgroundLingrad.addColorStop(0, background[0])
      backgroundLingrad.addColorStop(1, background[1])
    } else {
      backgroundLingrad = background
    }
    this.ctx.fillStyle = backgroundLingrad
    this.ctx.beginPath()
    this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2, true)
    this.ctx.fill()
  }

  /**
   * 绘制刻度
   * @param {*} size
   * @param {*} scale
   */
  drawScale(size, scale, borderWidth) {
    const { color = '#ffffff', lineWidth = 3 } = scale
    this.ctx.save()
    for (let i = 0; i < 12; i++) {
      this.ctx.beginPath()
      this.ctx.strokeStyle = color
      this.ctx.lineWidth = lineWidth
      this.ctx.rotate(Math.PI / 6)
      this.ctx.moveTo(size / 2 - lineWidth + 3 - borderWidth, 0)
      this.ctx.lineTo(size / 2 - lineWidth - 6 - borderWidth, 0)
      this.ctx.lineCap = 'round'
      this.ctx.stroke()
    }
    this.ctx.restore()

    if (!scale.small) return
    this.ctx.save()
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = lineWidth - 2
        this.ctx.moveTo(size / 2 - lineWidth + 3 - borderWidth, 0)
        this.ctx.lineTo(size / 2 - lineWidth - 15 - borderWidth, 0)
        this.ctx.stroke()
      }
      this.ctx.rotate(Math.PI / 30)
    }
    this.ctx.restore()
  }

  /**
   * 绘制文字
   * @param {*} text
   * @param {*} size
   * @param {*} borderWidth
   * @param {*} countDownTime
   * @returns
   */
  drawText(text, size, borderWidth) {
    const { content, color = '#ffffff', font = '20px Microsoft yahei' } = text
    if (!content.length) return
    const y = size / 2 - 30 - borderWidth
    this.ctx.save()
    this.ctx.rotate(Math.PI / 2)
    this.ctx.beginPath()
    this.ctx.fillStyle = color
    this.ctx.font = font
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'

    this.ctx.fillText(content[0], 0, -y)
    this.ctx.fillText(content[1], y, 0)
    this.ctx.fillText(content[2], 0, y)
    this.ctx.fillText(content[3], -y, 0)
    this.ctx.restore()

    this.ctx.save()
    this.ctx.rotate(Math.PI / 2)
    this.ctx.beginPath()
    this.ctx.fillStyle = color
    this.ctx.font = font
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText(
      '剩余 ' + (this.countDownTime - Math.floor(this.stepRing / 60)) + ' 秒',
      0,
      80
    )
    this.ctx.restore()
  }

  /**
   * 绘制指针
   * @param {*} pointerColor
   * @param {*} pointerWidth
   * @param {*} pointerDotColor
   * @param {*} size
   */
  drawPointer(pointerColor, pointerWidth = 0, size) {
    // 短针
    this.ctx.save()
    this.ctx.rotate(0)
    this.ctx.lineWidth = pointerWidth || size * 0.0525
    this.ctx.strokeStyle = pointerColor
    this.ctx.beginPath()
    this.ctx.lineCap = 'round'
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(size / 3.5, 0)
    this.ctx.stroke()

    // 短针针尾
    // this.ctx.beginPath()
    // this.ctx.lineWidth = pointerWidth || size * 0.0525
    // this.ctx.moveTo(0, 0)
    // this.ctx.lineTo(-12, 0)
    // this.ctx.stroke()
    // this.ctx.restore()

    // 长针
    this.ctx.save()
    this.ctx.rotate(this.rotate)
    this.ctx.beginPath()
    this.ctx.lineWidth = pointerWidth || size * 0.0525
    this.ctx.strokeStyle = pointerColor
    this.ctx.lineCap = 'round'
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(size / 3.5, 0)
    this.ctx.stroke()

    // 长针针尾
    // this.ctx.beginPath()
    // this.ctx.lineWidth = pointerWidth || size * 0.0525
    // this.ctx.moveTo(0, 0)
    // this.ctx.lineTo(-pointerWidth * 2.2, 0)
    // this.ctx.stroke()

    // this.ctx.beginPath()
    // this.ctx.fillStyle = pointerColor
    // this.ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    // this.ctx.fill()

    // this.ctx.beginPath()
    // this.ctx.strokeStyle = pointerDotColor
    // this.ctx.lineWidth = 2
    // this.ctx.arc(0, 0, 5, 0, Math.PI * 2, true)
    // this.ctx.stroke()
    // this.ctx.restore()
  }

  /**
   * 绘制边框
   * @param {*} lineWidth
   * @param {*} lineColor
   * @param {*} size
   */
  drawBorder(borderWidth, borderColor, size) {
    const lineColorArr = isArray(borderColor)
    let borderLingrad
    this.ctx.beginPath()
    this.ctx.lineWidth = borderWidth
    if (lineColorArr && borderColor.length >= 2) {
      borderLingrad = this.ctx.createLinearGradient(size / 2, 0, -size / 2, 0)
      borderLingrad.addColorStop(0, borderColor[0])
      borderLingrad.addColorStop(1, borderColor[1])
    } else {
      borderLingrad = borderColor
    }
    this.ctx.strokeStyle = borderLingrad
    this.ctx.arc(0, 0, size / 2 - borderWidth / 2.2, 0, Math.PI * 2, true)
    this.ctx.stroke()
    this.ctx.restore()
  }
}
