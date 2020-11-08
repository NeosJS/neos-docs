# 检查课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

检查课件资源是否存在

## API
### `downloaderApi.checkCourseware(fileUrl, fileMD5, destFolder, callback)`
### 



## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.checkCourseware('https://xxxxxxx.zip', 'asd123123nsadasbd')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| fileUrl | 需要下载的zip包地址 | String | —      | —      | 是      |
| fileMD5 | zip包的md5值 | String | —      | —      | 是      |
| destFolder | 资源文件解压路径 | String | —      | —      | 否      |
| callback | 检查回调 | Function | —      | —      | 否      |

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。 

如果设置了`destFolder`，资源检查正确后，将自动解压到该目录下。

[下载课件资源](/downloader/downloadCourseware.html) 内部调用的该接口，不会进行解压操作，只做资源正确性的检查。
:::
