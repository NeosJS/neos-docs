# 下载升级包

此接口适用于 **后台接口** 控制升级能力。


## API
### `downloaderApi.downloadUpdates(url: <String>, callback: <Function>)`
### 

:::danger
1. 返回的`state`取值为： `completed`, `failed`。

2. 下载完成后，会自动解压zip包，为后续升级做准备。

3. 事件返回的数据和回调返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。

4. 具体使用方法请参阅 [下载升级包 升级方案](/updater/download.html)
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

