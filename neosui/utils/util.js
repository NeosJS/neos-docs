import Vue from 'vue'

// eslint-disable-next-line no-useless-escape
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

export const noop = () => {}

export const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

// 过滤所有空格
export const trimAll = function(string) {
  return string.replace(/ /g, '')
}

// 自动加载全部文件
const modules = {}
export const requireAll = (context, excludePath) => {
  context.keys().forEach(path => {
    if (path === excludePath) return
    const key = path.match(/\/(\S+)\.js$/)[1]
    modules[key] = context(path).default
  })
  return modules
}

// 是否为空
export const isEmpty = val => {
  // null or undefined
  if (val == null) return true
  if (typeof val === 'boolean') return false
  if (typeof val === 'number') return !val
  if (val instanceof Error) return val.message === ''
  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }
  return false
}

// 是否IE
export const isIE = () => {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode))
}

export const isEdge = () => {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1
}

export const isFirefox = () => {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
}

export const autoprefixer = function(style) {
  if (typeof style !== 'object') return style
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 获取url参数
 * @param {*} param
 */
export const getQuery = param => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] == param) {
      return pair[1]
    }
  }
  return false
}

/**
 * 判断是否是安卓设备
 */
export const isAndroid = () => {
  const UA = window.navigator.userAgent
  return UA.indexOf('Android') > 0 || UA.indexOf('Adr') > 0 || /Android/.test(UA)
}
export const isMobile = () => {
  const UA = window.navigator.userAgent
  if (/Mobile/i.test(UA) || /iP[ao]d|iPhone/i.test(UA) || /Android/.test(UA)) {
    return true
  }
  return false
}
/**
 * 是否是PC
 */
export const isPC = () => {
  if (isMobile() || isAndroid()) {
    return false
  }
  return true
}

// 转换驼峰
export const camelCase = name => {
  return changeCase(name, 5)
    .replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

// type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
export const changeCase = (str, type) => {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2:
      return str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3:
      return str
        .split('')
        .map(function(word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase()
          } else {
            return word.toLowerCase()
          }
        })
        .join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

// object转换成array
export const objToArray = obj => {
  if (Array.isArray(obj)) {
    return obj
  }
  return isEmpty(obj) ? [] : [obj]
}

// export const getScore = score => {
//   const scoreData = new Array(101).fill(0).map((data, idx) => [idx, () => (idx < 60 ? '不及格' : '及格')])
//   const scoreMap = new Map(scoreData)
//   return scoreMap.get(score) ? scoreMap.get(score)() : '未知分数'
// }

// 检查对象是否具有该属性
const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (obj, key) => {
  return hasOwnProperty.call(obj, key)
}

// 属性判断
export const typeOf = obj => {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

const cached = fn => {
  var cache = Object.create(null)
  return function cachedFn(str) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

// 用连字符分隔的字符串
const hyphenateRE = /\B([A-Z])/g
export const hyphenateCase = cached(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

// 将属性混合到目标对象中
const extend = (to, _from) => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

// 将一个对象数组合并到一个对象中
export const toObject = arr => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

// 转换成数字
export const toNumber = val => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

// 将类似数组的对象转换为实际数组
export const toArray = (list, start) => {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

// 格式化手机号 xxx xxxx xxxx
// export const formatMobile = val => {
//   val = val.replace(/[^\d]/g, '').substr(0, 11)
//   if (val.length <= 3) {
//     return val
//   } else if (val.length <= 7) {
//     val = val.replace(/(\d{3})(\d{0,4})/, '$1 $2')
//   } else {
//     val = val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
//   }
//   return val
// }

export const getValueByPath = (object, prop) => {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

export const getPropByPath = (obj, path, strict) => {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
}

// 两个值是否相等
export const valueEquals = (a, b) => {
  if (a === b) return true
  if (!(a instanceof Array)) return false
  if (!(b instanceof Array)) return false
  if (a.length !== b.length) return false
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

// 转义正则表达式字符串
export const escapeRegexpString = (value = '') =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

export const generateId = function() {
  return Math.floor(Math.random() * 10000)
}

// base64转换成file
export const dataURItoFile = async (dataURI, fileName) => {
  const byteString = atob(dataURI.split(',')[1])
  const ab = new ArrayBuffer(byteString.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia = byteString.charCodeAt(i)
  }
  return new File([ia], fileName, { type: 'image/jpeg', lastModified: Date.now() })
}

export const getNowFormatDate = () => {
  var date = new Date()
  var seperator1 = '-'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}

export default {
  created() {
    this.uuid = Math.random()
      .toString(36)
      .substring(3, 20)
  }
}
