# 检查课件资源 <BadgeTip text="异步" type="green"></BadgeTip>

检查课件资源是否存在

如果课件资源存在，且md5值一样，则自动解压到课件临时目录。


## API
### `downloaderApi.checkCourseware(fileUrl, fileMD5)`
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

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。 
:::
