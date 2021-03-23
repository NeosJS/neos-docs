'use strict'

// 前端错误信息定义
const mapErrorMessage = code => {
  switch (code) {
    case 400:
      return '错误请求'
    case 401:
      return '未授权，请重新登录'
    case 403:
      return '拒绝访问'
    case 404:
      return '请求错误,未找到该资源'
    case 405:
      return '请求方法未允许'
    case 408:
      return '请求超时'
    case 500:
      return '服务器端出错'
    case 501:
      return '网络未实现'
    case 502:
      return '网络错误'
    case 503:
      return '服务不可用'
    case 504:
      return '网络超时'
    case 505:
      return 'http版本不支持该请求'
    case 10001:
      return '系统错误'
    case 10002:
      return '服务端资源不可用'
    case 10003:
      return '不允许覆盖已有的原型方法'
    case 20001:
      return 'nativeInstance 不存在'
    case 20002:
      return '获取本地全部拓展版本错误'
    case 20003:
      return '获取升级参数错误'
    case 20004:
      return '设置用户信息错误'
    case 20005:
      return '设置播放器静音状态错误'
    case 20006:
      return '取消全屏截屏窗错误'
    case 20007:
      return '获取设备麦克风错误'
    case 20008:
      return '获取设备摄像头错误'
    case 20009:
      return '获取设备硬盘空间错误'
    case 20010:
      return '设置基本信息错误'
    case 20011:
      return '获取系统信息与版本错误'
    case 20012:
      return '获取录制路径错误'
    case 20013:
      return '打开对话框错误'
    case 20014:
      return '设置代理错误'
    case 20015:
      return '设置采集器摄像头id错误'
    case 20016:
      return '直播云登录上报错误'
    case 0:
      return 'success'
    case -1:
      return '系统繁忙'
    default:
      return 'unknown error'
  }
}

class TalError {
  constructor(errCode = -1, data = '') {
    let error = new Error()

    error.errCode = errCode
    if (data) {
      error.data = data
    } else {
      error.errMsg = `${mapErrorMessage(errCode)}`
    }
    if (Error.captureStackTrace) {
      // required for non-V8 environments
      Error.captureStackTrace(this)
    }
    return JSON.parse(JSON.stringify(error))
  }
}

let talError = null
function talErrorManager() {
  if (talError == null) {
    talError = new TalError()
  }
  return talError
}

export { talErrorManager }

export default TalError
