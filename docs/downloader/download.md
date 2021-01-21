# 下载文件 <BadgeTip text="异步" type="green"></BadgeTip>

下载一般文件。

文件默认保存在用户的 **下载** 目录里。

## API
### `downloaderApi.download(options: <Object>, callback: <Function>)`
### 

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.download({
  url: 'https://xxxxxxx.zip',
  saveName: '123123123.zip',
  savePath: '/User/xxxx/xxxxxx'
}, res => {
  console.log(res)
})
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
| state | 当前下载的状态 | String |
| percent | 百分百 | Number | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 

:::danger
`state`取值为： `completed`, `failed`。

`savePath` 不填，则保存在 用户的`downloads`目录下。 `saveName` 不填，则保存为原文件名。
:::
