# Info 日志
写入一般级别的日志。

## API
### `logger.info(message, ...args)`
###

## 示例代码

```js
// 引入模块
const { logger } = require('@neosjs/electron-logger')

// 写入日志
logger.info('message info',{userName:'听着情歌流泪'})

// output
// [2020-09-20 18:26:56.886] [RENDERER] INFO: {"message":"message info","meta":[{"userName":"听着情歌流泪"}]}
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| message               | 要写入的日志信息           | Any[] | —               | —            | 是 |
| args               | 额外需要写入的一些信息           | Any[] | —               | —            | 否 |
