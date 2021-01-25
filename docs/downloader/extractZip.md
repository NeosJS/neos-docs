# 压缩包解压 <BadgeTip text="异步" type="green"></BadgeTip>

解压一个压缩包到指定目录。

该接口目前仅在API内部使用。

## API
### `downloaderApi.extractZip(zipFile, destFolder, overwrite, callback)`
### 



## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.extractZip('xxxxxxx.zip', 'asd123123nsadasbd')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| zipFile | 压缩包文件名 | String | —      | —      | 是      |
| destFolder | 解压的目录 | String | —      | —      | 是      |
| overwrite | 是否覆盖文件 | Boolean |  —     | true      | 否      |
| callback | 解压完成后的回调 | Function | —      | —      | 否      |

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。 

如果设置了`destFolder`，资源检查正确后，将自动解压到该目录下。
:::
