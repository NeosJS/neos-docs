# 下载文件 <BadgeTip text="异步" type="green"></BadgeTip>

下载一般文件。如果传了MD5，将做文件校验。  
文件默认保存在用户的 **下载** 目录里。

## API
### `downloaderApi.downloadFile(options: <Object>)`
### 

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

const res = await downloaderApi.downloadFile({
  fileURL:'https://www.xxxxx.com/xxxxxx.zip',
  fileMD5:'xxxxxxxxxxxxxxx'
})
```

### 回调
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadFile({
  fileURL:'https://www.xxxxx.com/xxxxxx.zip',
  fileMD5:'xxxxxxxxxxxxxxx',
  start: res => { // 下载器开始启动下载
    console.log(res)
  },
  progress: res => { // 下载进度
    console.log(res)
  },
  complete: res => { // 下载完成
    console.log(res)
  },
  fail: err => { // 下载失败
    console.log(err)
  },
  exists: res => { // 文件已经存在
    console.log(res)
  }
})
```
### 暂停、恢复下载
```js
import { downloaderApi } from '@neosjs/electron-ipc'

const downloadTask = await downloaderApi.downloadFile({
  fileURL:'https://www.xxxxx.com/xxxxxx.zip',
  fileMD5:'xxxxxxxxxxxxxxx'
})

// 暂停下载
downloaderApi.pause(downloadTask) 

// 恢复下载
downloaderApi.resume(downloadTask)
```

### 监听下载
```js
import { downloaderApi } from '@neosjs/electron-ipc'

const downloadTask = await downloaderApi.downloadCourseware({
  fileURL:'https://www.xxxxx.com/xxxxxx.zip',
  fileMD5:'xxxxxxxxxxxxxxx'
})

// 监听 downloadTask 的下载状态
downloaderApi.on(downloadTask, res => {
  console.log(res)
})

// 移除监听
downloaderApi.removeListener(downloadTask)
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| options[] | 接口参数 | Object | —      | —      | 是      |
| options['fileURL'] | 下载资源的 url | String | —      | —      | 是      |
| options['fileMD5'] | zip包的md5值 | String | —      | —      | 是      |
| options['savePath'] | 文件保存的目录 | String | — | — | 否 |
| options['saveName'] | 重命名的文件名称 | String | — | — | 否 |
| options['retry'] | 重试次数 | Number | — | 10 | 否 |
| options['interval'] | 发送下载状态的时间间隔，单位为毫秒| Number | —      | 1000      | 否      |
| options['headers'] | Header | Object | — | —| 否|
| options['timeout'] | 请求超时时间，单位为毫秒 | Number | — | 300000 | 否|
| options['extract'] | 下载完成后，是否需要解压 | Boolean | — | false | 否|
|  | <font color="#db4437">**以下为回调配置**</font> |  |  |  |  |
| options['start'] | 开始下载的回调函数 | Function | — | — | 否|
| options['progress'] | 下载进度的回调函数 | Function | — | — | 否|
| options['complete'] | 下载完成的回调函数 | Function | — | — | 否|
| options['pause'] | 下载暂停的回调函数 | Function | — | — | 否|
| options['fail'] | 下载错误的回调函数 | Function | — | — | 否|
| options['exists'] | 文件已经存在的回调函数 | Function | — | — | 否|

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态: <br>(`start`, `progress`, `complete`, `fail`, `exists`) | String |
| percent | 下载进度百分比 | String | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
| fileName | 下载的文件名称 | String |
| uptime | 运行时间，单位为毫秒 | Number |
| remaining | 剩余时间，单位为毫秒 | Number |
| <font color="#db4437">**MD5**</font> | 下载完成后的文件MD5值，仅 `complete` 状态返回 | String |

:::info
`percent` 默认保留两位小数返回。业务层，请根据实际需要自行格式化。
:::
