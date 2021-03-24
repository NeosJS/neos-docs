module.exports = {
  arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，不需要括号
  bracketSpacing: true, // 大括号内的首尾需要空格
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  printWidth: 100, // 一行最多 100 字符
  proseWrap: 'preserve', // 使用默认的折行标准
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  requirePragma: false,
  semi: false, // 行尾不需要有分号
  singleQuote: true, // 使用单引号
  tabWidth: 2, // 使用 2 个空格缩进
  trailingComma: 'none', // 末尾不需要逗号
  useTabs: false, // 不使用缩进符，而使用空格
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf' // 换行符使用 lf
}
