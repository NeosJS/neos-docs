import { EventEmitter } from 'events'
import { isAndroid } from 'utils/util'

class Bridge extends EventEmitter {
  constructor() {
    super()
    this.init()
  }
  /**
   * 初始化
   */
  init() {
    if (!isAndroid()) {
      // ios要定义jsCallClient
      window.JsInjectionActivity = {}
      window.JsInjectionActivity.jsCallClient = function(data) {
        window.webkit.messageHandlers.HWClassCourseware.postMessage(data)
      }
    }
    this.onMessage()
  }
  /**
   * 监听端上发来的消息
   */
  onMessage() {
    // 监听端上发来的消息
    window.clientMessageHandlers = msg => {
      this.emit('clientMessage', msg)
    }
  }
  /**
   * 发送消息给端上
   * @param {*} methodName
   * @param {*} params
   */
  emitMessage(methodName, params) {
    const data = JSON.stringify({
      className: 'HWClassCourseware',
      methodName,
      params: params || ''
    })
    process.env.NODE_ENV !== 'development' && window.JsInjectionActivity.jsCallClient(data)
  }
}

export default Bridge
