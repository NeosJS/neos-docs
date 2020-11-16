# 下载课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

下载课件静态资源文件。

在下载之前，会自动调用`checkCourseware`接口，检查文件是否存在、md5值是否一样。如果文件存且md5值一样，则放弃下载，否则开启后台下载功能。

该接口，会进行 `列队下载`，每次仅下载一个文件。

## API
### `downloaderApi.downloadCourseware(fileUrl, fileMD5, resume, callback)`
### 



## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.downloadCourseware('https://xxxxxxx.zip', 'asd123123nsadasbd')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| fileUrl | 需要下载的zip包地址 | String | —      | —      | 是      |
| fileMD5 | zip包的md5值 | String | —      | —      | 是      |
| resume | 重试次数 | Number | —      | 3      | 否      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| percent | 百分百 | Number | 
| speed | 下载速度 | String | 
| totalSize | 文件总大小 | String | 
| finishSize | 文件下载大小 | String | 
| complete | 是否下载完成 | Boolean | 
| md5 | 文件md5值 | String | 

:::danger
`complete`, `md5` 仅在文件下载成功后返回。
:::