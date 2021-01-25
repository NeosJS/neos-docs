# 检查更新(Deprecated) <BadgeTip text="异步" type="green"></BadgeTip> <BadgeTip text="弃用" type="danger"></BadgeTip>

检查应用是否有更新。

:::danger
此接口已经迁移成内部接口。已不再对外提供检查服务。
:::

## API
### `updaterApi.checkUpdates(callback: <Function>)`
### 


## 示例代码
```js
import { updaterApi } from '@neosjs/electron-ipc'

const res = await updaterApi.checkUpdates()
```
#### 带回调
```js
import { updaterApi } from '@neosjs/electron-ipc'

updaterApi.checkUpdates(res => {
  console.log(res)
})
```
## 返回数据
| Key | 说明    | 类型   |
| ---- | ------- | ------ |
| version | 最新版本号 | String |
| releaseDate | 发布时间 | String |
| totalSize | 文件总大小 | String |

> 如果有更新，则返回数据。没有更新则返回 false

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| callback | 检查更新的回调函数 | Function | —      | —      | 否      |
