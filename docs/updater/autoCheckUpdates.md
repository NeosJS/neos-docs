# 自动更新

应用程序在后台自动更新


## API
### `updaterApi.autoCheckUpdates()`
### 

:::info
该接口会在后台自动检查是否有更新。

检测到有更新，则自动下载更新，退出APP时将自动安装。

下载完成后，会通过通知接口提示用户。
:::

## 示例代码
```js
import { updaterApi } from '@neosjs/electron-ipc'

updaterApi.autoCheckUpdates()
```

:::danger
由于该接口是自动检测和下载，在体验上可能不能满足UI的界面需求。建议调用手动检测接口 [checkForUpdates](updater/checkForUpdates.html)。
:::
