# 创建数据表 <BadgeTip text="异步" type="green"></BadgeTip>

创建一个新的数据表

## API
### `dbApi.createCol(collection, type)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

// 创建一个 Array 类型的数据表
const res = await dbApi.createCol('users',[])

// 创建一个 Object 类型的数据表
const res = await dbApi.createCol('users',{})
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| collection | 创建的数据表名 | String | — | —     |
| type | 数据表类型 | Array、Object | — | —     |

:::danger
如果只是简单的存储一个`string`数据 , 不用单独创建数据表，直接调用 [写入数据](insert) 即可。对于存储的string数据，接口会自动创建一个数据表。
:::
