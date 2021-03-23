import Toast from './toast'
import { submitUserAnswer } from './utils/request'
import { showRightText } from './utils'
// import logger from 'utils/logger'
export default class Main {
  constructor(opts = {}) {
    this.options = opts
    this.headers = opts.headers
    this.headers['Content-Type'] = 'application/json'
    this.requestUrl = opts.requestUrl
  }

  /**
   * 提交数据
   * @param {*} rightRate
   */
  async submitAnswer(rightRate, isAnswer) {
    const params = {
      rightRate,
      isAnswer,
      interactId: this.options.interactId,
      planId: this.options.planId,
      classId: this.options.classId
    }
    let res = {
      isSubmit: true
    }
    const { code, data } = await submitUserAnswer(params, this.headers, this.requestUrl)
    // 没有作答直接退出，不在任何处理
    if (isAnswer === 2) {
      return res
    }
    if (code !== 0) {
      res.isSubmit = false
    } else {
      if (rightRate === 0) {
        Toast({
          type: 'wrong',
          title: 'Oops !',
          message: 'Try it next time',
          duration: 5000
        })
      } else if (rightRate === 100) {
        Toast({
          type: 'right',
          title: `${showRightText()} ${this.options.nickName}`,
          message: 'Rewarding Coins For You!',
          coin: data.rightCoin,
          duration: 5000
        })
      } else {
        Toast({
          type: 'halfRight',
          title: 'Not Bad',
          message: 'You are almost there',
          coin: data.rightCoin,
          duration: 5000
        })
      }
      res.data = data
    }
    return res
  }

  // async interactReport(type = 'open') {
  //   const params = {
  //     interactId: this.options.interactId,
  //     planId: this.options.planId
  //   }
  //   return await interactReport(type, params, this.headers, this.requestUrl)
  // }

  /**
   * 获取正确率
   * @param {*} rightNum
   * @param {*} totalSum
   */
  getRightRate(rightNum, totalSum) {
    return Math.round((rightNum / totalSum) * 100)
  }
  /**
   * 关闭toast
   */
  closeToast() {
    return Toast.close()
  }
}
