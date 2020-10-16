# 删除数据库 <BadgeTip text="异步" type="green"></BadgeTip>

删除数据库里所有的数据表

## API
### `dbApi.drop()`
### 

## 示例代码
```js
import { dbApi } from '@neosjs/electron-ipc'

const res = await dbApi.drop()
```
:::danger
慎用！！！
:::
