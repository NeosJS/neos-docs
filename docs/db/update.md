# 更新数据 <BadgeTip text="异步" type="green"></BadgeTip>
跟新数据

## API
### `dbApi.update(key, value)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.update('test','demo')
// 反回一个 Boolean
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| key | 需要更新的字段 | String | — | —     |
| value | 需要更新的值 | Any[] | — | —     |
