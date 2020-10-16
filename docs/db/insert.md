# 写入数据 <BadgeTip text="异步" type="green"></BadgeTip>
写入数据到本地文件

## API
### `dbApi.insert(collection, value)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

// 保存一个string
const res = await dbApi.insert('test','demo')
// 保存一个object
const result = await dbApi.insert('users',{ id: 1, name: '听着情歌流泪' })
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| collection | 需要存储的字段 | String | — | —     |
| value | 需要存储的值 | Any[] | — | —     |
