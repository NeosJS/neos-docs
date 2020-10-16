# 查找数据 <BadgeTip text="异步" type="green"></BadgeTip>
在本地数据库中查找某条数据

## API
### `dbApi.find(collection, conditions)`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.find('users')

/* 返回 users 表下的所有数据

[
  {
    id: 1,
    name: '听着情歌流泪'
  },
  {
    id: 2,
    name: '张三'
  }
]
*/
```
### 带查询条件
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.find('users',{ id: 2 })

/* 返回 users 表下 id = 2 的数据

[
  {
    id: 2,
    name: '张三'
  }
]
*/

```
### 查询object的数据表
```js
import { dbApi } from '@neosjs/electron-ipc'
const res = await dbApi.find('users.name')

/* 返回 users的name数据

张三
*/
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| collection | 查找的字段 | String | — | —     |
| conditions | 查询条件 | Any[] | — | —     |
