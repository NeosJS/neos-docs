# 查找数据 <BadgeTip text="异步" type="green"></BadgeTip>
在本地数据库中查找某条数据

## API
### `dbApi.find(key)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.find('test')
// 反回key所对应的value
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| key | 查找的字段 | String | — | —     |
