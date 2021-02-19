# 检查课件 <BadgeTip text="异步" type="green"></BadgeTip>

检查课件资源是否存在

## API
### `downloaderApi.checkCourseware(file, MD5, destFolder, removeFile)`
### 



## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.checkCourseware('xxxxxxx.zip', 'asd123123nsadasbd')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| file | 需要检查的文件 | String | —      | —      | 是      |
| MD5 | 压缩包的md5值 | String | —      | —      | 是      |
| destFolder | 资源文件解压路径 | String | —      | —      | 否      |
| removeFile | 资源不合法时，是否需要删除文件 | Boolean | —      | —      | false      |

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。  
如果设置了`destFolder`，资源检查正确后，将自动解压到该目录下。

[下载课件资源](/downloader/downloadCourseware.html) 内部调用的该接口，不会进行解压操作，只做资源正确性的检查。
:::
