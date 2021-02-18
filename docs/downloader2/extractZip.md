# 解压文件 <BadgeTip text="异步" type="green"></BadgeTip>

解压一个压缩包到指定目录。  
该接口目前仅在API内部使用。

## API
### `downloaderApi.extractZip(zipFilePath: <String>, destFolder: <String>, overWrite: <Boolean>, callback: <Function>)`
### 

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

await downloaderApi.extractZip('/User/xxxxx/xxxxxxx.zip', 'asd123123nsadasbd')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| zipFilePath | 压缩包地址 | String | —      | —      | 是      |
| destFolder | 解压的目录 | String | —      | —      | 是      |
| overWrite | 是否覆盖原文件 | Boolean |  —     | true      | 否      |
| callback | 解压完成后的回调 | Function | —      | —      | 否      |

:::danger
这是一个后台运行接口，业务层不需要关心下载的结果。  
如果设置了`destFolder`，资源检查正确后，将自动解压到该目录下。
:::
