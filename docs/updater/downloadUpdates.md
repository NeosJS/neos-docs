# 下载更新 <BadgeTip text="异步" type="green"></BadgeTip>

当检查到有新版的时候，可调用该接口下载更新

## API
### `updaterApi.downloadUpdates(autoInstall: <Boolean>, callback: <Function>)`
### 

:::info 
如果设置了 `autoInstall` , 当更新文件下载完以后，会自动启动安装程序。
:::

## 示例代码
```js
import { updaterApi } from '@neosjs/electron-ipc'

const res = await updaterApi.downloadUpdates()
```
#### 自动安装
> 由于安全机制限制，经过签名的APP下载完更新后才能启动安装！！
```js
import { updaterApi } from '@neosjs/electron-ipc'

const res = await updaterApi.downloadUpdates(true)
```
#### 带回调
```js
import { updaterApi } from '@neosjs/electron-ipc'

updaterApi.downloadUpdates(res => {
  console.log(res)
})
```
## 返回数据
| Key | 说明    | 类型   |
| ---- | ------- | ------ |
| success | 是否下载完成 | Boolean |
| speed | 下载速度 | String |
| percent | 百分比 | Number |
| loadedSize | 当前已经下载的文件大小 | String |
| totalSize | 文件总大小 | String |

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| callback | 检查更新的回调函数 | Function | —      | —      | 否      |
| autoInstall | 现在完更新后，是否自动安装 | Boolean| —      | false     | 否      |

