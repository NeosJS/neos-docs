# 启动日志 <BadgeTip text="异步" type="green"></BadgeTip>

开启日志功能。

:::info
开启后，日志文件会存在指定目录下，并以当天的日志为文件名。例如：logs/2020-09-26.log
:::

## API

### `logger.start(logPath)`
### 
## 示例代码

```js
// 引入模块
const logger = require('@neosjs/electron-logger')

// 开启日志
await logger.start('./Logs')
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| logPath               | 要保存日志文件的目录名。           | String | —               | __dirname            | 否 |

