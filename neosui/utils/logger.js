const noop = () => {}

class Logger {
  constructor() {
    this.enabled = window.console && process.env.NODE_ENV === 'development'
    this.enabled = true
    this.logerName = ''
  }
  static transformMessage(orgin, color = '#0084ff') {
    return function() {
      arguments[0] = typeof arguments[0] == 'string' ? arguments[0] : JSON.stringify(arguments[0])
      arguments[1] = typeof arguments[1] == 'string' ? arguments[1] : JSON.stringify(arguments[1])
      orgin.call(
        console,
        `%c${this.logerName && '[' + this.logerName + '] '}%c[${Logger.formatDate(
          'yyyy-MM-dd HH:mm:ss S'
        )}]`,
        `color:${color};line-height:1.5`,
        `color:${color};`,
        ...arguments
      )
    }
  }
  static formatDate(fmt, date) {
    if (date === void 0) date = new Date()
    if (fmt === void 0) fmt = 'yyyy-MM-dd HH:mm:ss'

    date = typeof date === 'number' || typeof date === 'string' ? new Date(date) : date

    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
      'H+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    }
    const week = {
      '0': '\u65e5',
      '1': '\u4e00',
      '2': '\u4e8c',
      '3': '\u4e09',
      '4': '\u56db',
      '5': '\u4e94',
      '6': '\u516d'
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') +
          week[date.getDay() + '']
      )
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }

    return fmt
  }

  name(name) {
    this.logerName = name.toUpperCase()
  }

  get log() {
    return this.enabled ? Logger.transformMessage(console.log) : noop
  }
  get info() {
    return this.enabled ? Logger.transformMessage(console.info, '#4285f4') : noop
  }
  get warn() {
    return this.enabled ? Logger.transformMessage(console.warn, '#FFB610') : noop
  }

  get error() {
    return this.enabled ? Logger.transformMessage(console.error, '#E54124') : noop
  }
}

export default new Logger()
