# 下载文件 <BadgeTip text="异步" type="green"></BadgeTip>

下载一般文件。

文件默认保存在用户的 **下载** 目录里。

## API
### `downloaderApi.download(fileUrl: <String>, callback: <Function>)`
### 

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadCourseware('https://xxxxxxx.exe', res => {
  console.log(res)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| fileUrl | 需要下载的文件地址 | String | —      | —      | 是      |
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
:::
