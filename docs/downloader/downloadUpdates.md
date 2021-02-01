# 下载升级包 <BadgeTip text="异步" type="green"></BadgeTip>

此接口适用于 **后台接口** 控制升级能力。


## API
### `downloaderApi.downloadUpdates(platform: <String>, url: <String>, callback: <Function>)`
### 

:::danger
- 返回的`state`取值为： `progressing`, `completed`, `failed`。
- 下载完成后，会自动解压zip包，为后续升级做准备。
- **事件**返回的数据和**回调**返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。**建议使用 回调**
- 文件下载完成后，具体使用方法请参阅 [下载升级包 升级方案](/updater/download.html)
- 返回的 `filePath` 为升级文件的在本机保存的路径。 [ **Windows系统** ]。

完整的文件地址，接口自动返回，业务层无需拼接。(filePath = `/xxxxxx/xxxxxxx/xxxxxx/xxxxxxx.exe`)
:::

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadUpdates('mac', 'https://xxxxxxx.zip', res => {
  console.log(res)
})

// window系统下载升级文件
await downloaderApi.downloadUpdates('win', 'https://xxxxxxx.exe', res => {
  console.log(res)
})
```

####  事件监听
```js
downloaderApi.on('downloadUpdates', res => {
  console.log(res)
})
```

#### 移除监听
```js
downloaderApi.removeAllListener('downloadUpdates')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| platform | 升级平台 | String | win、mac | — | 是 |
| url | 升级包地址 | String | —      | —      | 是      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态 (`progressing`, `completed`, `failed`) | String |
| percent | 百分比 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
| filePath | 升级文件的地址 **Widnows 返回** | String | 
| fileName | 下载的文件名称 | String |
