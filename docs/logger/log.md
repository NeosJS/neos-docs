# Log 集合

这是 `info`、`error`、`warn` 的一个集合。

## API
### `logger.log(<object>)`
###

## 示例代码
```js
// 引入模块
const { logger } = require('@neosjs/electron-logger')

// 写入日志
logger.log({
  level: 'info',
  label: 'main',
  message: 'message info',
  meta: {userName:'听着情歌流泪'}
})

// output
// [2020-09-20 18:26:56.886] [MAIN] INFO: {"message":"message info","meta":[{"userName":"听着情歌流泪"}]}
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| level               | 日志级别           | String | info、error、warn              | info            | — |
| label               | 日志标记。来源、分类等信息           | String | —               | main            | 是 |
| message               | 要写入的日志信息           | Any[] | —               | —            | 是 |
| meta               | 额外需要写入的一些信息           | Any[] | —               | —            | 否 |

