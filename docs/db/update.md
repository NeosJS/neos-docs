# 更新数据 <BadgeTip text="异步" type="green"></BadgeTip>
更新数据

## API
### `dbApi.update(collection, conditions, value)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

dbApi.update('users', { id: 2 }, { name: 'world' }).then(res => {
  console.log(res)
})
// 查找 users 数据表下面id=2的一条数据，并更新该条数据的name值

dbApi.update('lang','zh_CN')
// 更新一个string类型的数据表

dbApi.update('website.title','thinkacademy')
// 更新一个object类型的数据表
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| collection | 需要更新的数据表 | String | — | —     |
| conditions | 查询条件 | Any[] | — | —     |
| value | 新写入数据表的值 | Any[] |— | —     |
