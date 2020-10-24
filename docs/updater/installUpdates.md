# 安装更新

当更新文件下载完成后，可调用该接口，进行安装

## API
### `appUpdater.installUpdates()`
### 

## 示例代码
```js
import { appUpdater } from '@neosjs/electron-ipc'

appUpdater.installUpdates()
```

:::danger
由于安全机制限制，经过签名的APP下载完更新后才能启动安装！！
:::
