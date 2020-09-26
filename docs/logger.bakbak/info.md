# Info 日志
写入一般级别的日志。

## API
### `logger.info(message)`
###

## 示例代码

```js
// 引入模块
const logger = require('@neosjs/electron-logger')

// 写入日志
logger.info('message info')

// output
// [2020-09-20 18:26:56.886] [RENDERER] INFO: message info}
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| message               | 要写入的日志信息           | Any[] | —               | —            | 是 |
