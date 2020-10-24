# 安装更新

当更新文件下载完成后，可调用该接口，进行安装

## API
### `updaterApi.installUpdates()`
### 

## 示例代码
```js
import { updaterApi } from '@neosjs/electron-ipc'

updaterApi.installUpdates()
```

:::danger
由于安全机制限制，经过签名的APP下载完更新后才能启动安装！！
:::
