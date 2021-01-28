# 下载升级包

此接口适用于 **后台接口** 控制升级能力。


## API
### `downloaderApi.downloadUpdates(url: <String>, callback: <Function>)`
### 

:::danger
- 返回的`state`取值为： `progressing`, `completed`, `failed`。
- 下载完成后，会自动解压zip包，为后续升级做准备。
- **事件**返回的数据和**回调**返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。**建议使用 回调**
- 文件下载完成后，具体使用方法请参阅 [下载升级包 升级方案](/updater/download.html)
- 返回的 `filePath` 为升级文件的在本机保存的路径(**不包含文件名**)。
完整的文件地址，需要业务层拼装。(`${filePath}/xxxxxxx.exe`)
:::

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadUpdates('https://xxxxxxx.zip', res => {
  console.log(res)
})
```

####  事件监听
```js
downloaderApi.on('downloadUpdates', res => {
  console.log(res)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| url | 升级包地址 | String | —      | —      | 是      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态 | String |
| percent | 百分百 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
| filePath | 升级文件的地址 **下载成功后返回** | String | 
| fileName | 下载的文件名称 | String |
