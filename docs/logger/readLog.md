# 读取日志 <BadgeTip text="异步" type="green"></BadgeTip>
该接口会返回需要读取的日志路径，可用作上传日志文件到服务器。

## API

### `logger.readLog(filename)`
### 

## 示例代码

```js
// 引入模块
const { logger } = require('@neosjs/electron-logger')

// 读取2020-09-26的日志
const res  = await logger.readLog('2020-09-26')

// output
// {
//   errCode: 0,
//   errMsg: 'success'
//   data: {
//     filepath: 'xxxxxxxx/xxxxxxx.log',
//     filename: 'xxxxxxx.log'
//   }
// }
```

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| filename               | 需要读取的日志文件名           | String | —               | —            | 是 |
