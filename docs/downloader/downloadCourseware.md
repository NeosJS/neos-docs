# 下载课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

下载课件静态资源文件。

在下载之前，会自动调用`checkCourseware`接口，检查文件是否存在、md5值是否一样。如果文件存且md5值一样，则放弃下载，否则开启后台下载功能。

该接口，会进行 `列队下载`，每次仅下载一个文件。

## API
### `downloaderApi.downloadCourseware(fileUrl, fileMD5, callback)`
### 

:::danger
1. 返回的`state`取值为： `completed`, `failed`。

2. 事件返回的数据和回调返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。
:::


## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadCourseware('https://xxxxxxx.zip', 'asd123123nsadasbd')
```

####  事件监听
```js
downloaderApi.on('downloadCourseware', res => {
  console.log(res)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| fileUrl | 需要下载的zip包地址 | String | —      | —      | 是      |
| fileMD5 | zip包的md5值 | String | —      | —      | 是      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态 | String |
| percent | 百分百 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
