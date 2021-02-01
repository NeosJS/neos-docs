# 下载文件 <BadgeTip text="异步" type="green"></BadgeTip>

下载一般文件。

文件默认保存在用户的 **下载** 目录里。

## API
### `downloaderApi.downloadFiles(options: <Object>, callback: <Function>)`
### 

:::danger
- 返回的`state`取值为： `progressing`, `completed`, `failed`。
- `savePath` 不填，则保存在 用户的`downloads`目录下。 `saveName` 不填，则保存为原文件名。
- **事件**返回的数据和**回调**返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。 **建议使用 回调**
:::

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadFiles({
  url: 'https://xxxxxxx.zip',
  saveName: '123123123.zip', // 保存的文件名
  savePath: '/User/xxxx/xxxxxx' // 保存路径
}, res => {
  console.log(res)
})
```

####  事件监听
```js
downloaderApi.on('downloadFiles', res => {
  console.log(res)
})
```

#### 移除监听
```js
downloaderApi.removeAllListener('downloadFiles')
```


## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| options | 配置项 | Object | —      | —      | 是      |
| options['url'] | 远端地址 | String | —      | —      | 是      |
| options['saveName'] | 重命名文件 | String | —      | —      | 否      |
| options['savePath'] | 保存路径 | String | —      | —      | 否      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态 (`progressing`, `completed`, `failed`) | String |
| percent | 百分比 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
| fileName | 下载的文件名称 | String |
