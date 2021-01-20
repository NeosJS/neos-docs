# 升级下载方案

由于某些原因，自动升级无法满足业务需求，故：制订该下载升级方案。

此方法适合所有平台！可自定义安装包地址。

::: info
具体方案：
- 下载安装文件 (windows系统下载`.exe`，mac系统下载`.zip`)
- 调用 `nativeApi.openFileBySystem(filePath)`，打开第一步下载的文件
- 调用 `nativeApi.exitApp()`，退出应用程序

以上三步执行完毕，即可进行下载升级。
:::

## 示例代码
### Windows系统升级方案
```js
import { downloaderApi } from '@neosjs/electron-ipc'

// 第一步 下载文件
downloaderApi.download('https://xxxxxxx.exe', res => {
  // 实时回调监听文件是否下载完成
  if(res.state === 'completed') {
    // 第二步 打开刚才下载的文件
    nativeApi.openFileBySystem('xxxxxxx.exe')
    // 第三步 下载完成退出应用程序
    nativeApi.exitApp() 
  }
})
```

### Mac系统升级方案
```js
import { downloaderApi,updaterApi } from '@neosjs/electron-ipc'

// 第一步 下载文件
downloaderApi.download('https://xxxxxxx.zip', res => {
  if(res.state === 'completed') {
    // 第二步 调用mac的自动检查更新
    updaterApi.checkUpdates()
  }
})

// 第三步 如果有界面显示需要手动点击安装
updaterApi.downloadUpdates(true) // 注意：这里不再需要显示进度了。第一步已经下载好文件了。
```
