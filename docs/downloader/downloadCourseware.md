# 下载课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

下载课件静态资源文件。

在下载之前，会自动调用`checkCourseware`接口，检查文件是否存在、md5值是否一样。如果文件存且md5值一样，则放弃下载，否则开启后台下载功能。

## API
### `downloaderApi.downloadCourseware(fileUrl, fileMD5)`
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

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。 
:::
