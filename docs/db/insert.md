# 写入数据 <BadgeTip text="异步" type="green"></BadgeTip>
写入数据到本地文件

## API
### `dbApi.insert(key, value)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.insert('test','demo')
// 反回一个 Boolean
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| key | 需要存储的字段 | String | — | —     |
| value | 需要存储的值 | Any[] | — | —     |
