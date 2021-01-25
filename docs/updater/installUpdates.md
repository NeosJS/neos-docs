# 安装更新 <BadgeTip text="MacOS" type="warn"></BadgeTip>

当更新文件下载完成后，可调用该接口，进行安装。

windows系统安装更新，请参阅[下载升级包 升级方案](download.html)

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

严格来讲，执行一次自动更新不一定要调用此方法。因为下载更新文件成功之后，下次应用启动的时候会强制更新！
:::
