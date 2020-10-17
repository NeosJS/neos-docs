# 查询日志 (Experimental) <BadgeTip text="异步" type="green"></BadgeTip><BadgeTip text="实验性" type="blue"></BadgeTip>
:::danger
仅对格式为`json`的日志有效。

这是一个实验性的功能，并不保证功能正常，请谨慎使用。
:::

## API
### `logger.query(options<object>)`
### 

## 示例代码
```js
// 引入模块
const { logger } = require('@neosjs/logger')

// 查询日志内容
const logs = await logger.query({
  from: new Date() - (24 * 60 * 60 * 1000),
  until: new Date(),
  limit: 10,
  order: 'desc',
  fields: ['message']
})

console.log(logs)

// output
// [ { message: 'xxxxxxx' }, { message: 'yyyyyyyy' } ]
```
## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 查询参数 | Object | — | —     |
| options['from'] | 日志开始时间 | Date | — | new Date() - (24 * 60 * 60 * 1000)     |
| options['until'] | 日志结束时间 | Date | — | new Date()     |
| options['limit'] | 查询条数 | Number | — | 10     |
| options['order'] | 排序 | String | desc、asc | desc     |
| options['fields'] | 查询结果显示的字段 | Array | — | message     |
