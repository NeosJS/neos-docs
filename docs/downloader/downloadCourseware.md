# 下载课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

下载课件静态资源文件。

在下载之前，会自动调用`checkCourseware`接口，检查文件是否存在、md5值是否一样。如果文件存且md5值一样，则放弃下载，否则开启后台下载功能。

该接口默认会进行 `列队下载`，每次仅下载一个文件。

如果不希望进入队列下载，请传参 `needQueue`。

## API
### `downloaderApi.downloadCourseware(fileUrl: <String>, fileMD5: <String>, needQueue: <Boolean>, callback: <Function>)`
### 

:::danger
- 返回的`state`取值为： `progressing`, `completed`, `failed`, `exists`。
- **事件**返回的数据和**回调**返回的数据是一样的。具体用回调还是用事件，请业务层自行决定。
- 是否进入队列下载，取决于 `needQueue` 的值。默认 `true`。
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

#### 移除监听
```js
downloaderApi.removeAllListener('downloadCourseware')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| fileUrl | 需要下载的zip包地址 | String | —      | —      | 是      |
| fileMD5 | zip包的md5值 | String | —      | —      | 是      |
| needQueue | 是否进入队列下载 | Boolean | — | true | 否 |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| state | 当前下载的状态 (`progressing`, `completed`, `failed`, `exists`) | String |
| percent | 百分比 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| receivedSize | 接收的文件大小 | String | 
| fileName | 下载的文件名称 | String |
