'use strict'

const cheerio = require('cheerio')
const container = require('markdown-it-container')
const md = require('markdown-it')()

const strip = (str, tags) => {
  var $ = cheerio.load(str, { decodeEntities: false })
  if (!tags || tags.length === 0) {
    return str
  }
  tags = !Array.isArray(tags) ? [tags] : tags
  var len = tags.length
  while (len--) {
    $(tags[len]).remove()
  }
  return $.html()
}

const fetch = (str, tag) => {
  var $ = cheerio.load(str, { decodeEntities: false })
  if (!tag) return str
  return $(tag).html()
}

const convert = str => {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

exports.createDemoContainer = klass => {
  return [
    container,
    klass,
    {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          var description = m && m.length > 1 ? m[1] : ''
          var content = tokens[idx + 1].content
          var html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
          var script = fetch(content, 'script')
          var style = fetch(content, 'style')
          var descriptionHTML = description ? md.render(description) : ''

          return `<demo-block class="demo-box">
                  <div class="source" slot="source">${html}</div>
                  ${descriptionHTML}
                  <div class="highlight" slot="highlight">`
        }
        return '</div></demo-block>\n'
      }
    }
  ]
}

exports.createContainer = klass => {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info
          .trim()
          .slice(klass.length)
          .trim()
        let _icon = ''
        switch (klass) {
          case 'info':
            _icon = '<i class="sealui-icon-info"></i>'
            break
          case 'success':
            _icon = '<i class="sealui-icon-check-circle"></i>'
            break
          case 'warn':
          case 'warning':
            _icon = '<i class="sealui-icon-alert-octagon"></i>'
            break
          case 'danger':
          case 'error':
            _icon = '<i class="sealui-icon-alert-triangle"></i>'
            break
        }
        if (token.nesting === 1) {
          return `<div class="sealui-customblock is-${klass}" ${_icon ? 'style="padding-left:3.5rem"' : ''}>${_icon ? '<div class="sealui-customblock__icon">' + _icon + '</div>' : ''}\n`
        } else {
          return `</div>\n`
        }
      }
    }
  ]
}
exports.createVpre = () => {
  return [
    container,
    'v-pre',
    {
      render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`)
    }
  ]
}

exports.createVue = () => {
  return [
    container,
    'vuee',
    {
      render: (tokens, idx) => (tokens[idx].nesting === 1 ? `<pre class="vue-container"><code>` : `</code></pre>`)
    }
  ]
}
