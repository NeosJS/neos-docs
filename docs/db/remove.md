# 删除数据 <BadgeTip text="异步" type="green"></BadgeTip>
删除一条数据

## API
### `dbApi.remove(key)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.remove('test')
// 反回一个 Boolean
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| key | 需要删除的数据字段 | String | — | —     |
