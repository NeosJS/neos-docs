# 启动日志 <BadgeTip text="异步" type="green"></BadgeTip>

开启日志功能。

:::danger
该API，必须运行在主进程模块，因为这是一个 `node` 服务。
:::

## API

### `logger.start(<object>)`
### 
## 示例代码

```js
// 引入模块
const { logger } = require('@neosjs/electron-logger')

// 开启日志
await logger.start({
  filePath: 'xxxxxxx', // 日志存储路径
  maxSize: '10m', // 每个日志的最大10兆
  maxFiles: '1d' // 日志保留1天
})
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| filePath               | 要保存日志文件的目录名。           | String | —               | __dirname            | 否 |
| filename          | 要保存日志文件的文件名  。                 | String | —           | YYYY-MM-DD.log           | 否 |
| maxSize          | 单个日志文件最大值(k、m、g)。              | String | —           | 20m           | 否 |
| maxFiles          | 要保存的最大日志数。如果没有设置，则不会删除任何日志(d)。                   | String | —           | 7d           | 否 |
| debug | 开启控制台输出。| Boolean | true、false | false |否 |

