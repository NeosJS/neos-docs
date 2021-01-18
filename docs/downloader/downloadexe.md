# Winodws升级下载方案

由于某些原因，windows的升级包无法实现自动升级。故：提供此示例进行曲线救国。

::: info
具体方案：
- 下载exe文件
- 文件下载完成后，调用 `nativeApi.exitApp()`，退出应用程序
- 调用 `nativeApi.openFileBySystem(filePath)`，打开第一步下载的exe文件

以上三步执行完毕，即可进行`windows`的升级。
:::

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

// 第一步 下载文件
downloaderApi.download('https://xxxxxxx.exe', res => {
  // 实时回调监听文件是否下载完成
  if(res.state === 'completed') {
    // 第二步 下载完成退出应用程序
    nativeApi.exitApp() 
  }
})

// 第三步 打开刚才下载的文件
nativeApi.openFileBySystem('xxxxxxx.exe')
```
