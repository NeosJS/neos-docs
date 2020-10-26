# 主进程检查更新
该接口主要用于顶部导航菜单

## API
### `checkUpdates()`
### 

:::danger
该接口必须在主进程调用，且必须在 app 处于 ready 的状态下 !!!

为了配合UI渲染，该接口不做自动下载、安装。当检测到有更新时，主进程会给渲染进程发送一条消息。渲染进程监听次消息进行UI渲染即可。
:::

## 示例代码
#### 主进程
```js
const { ipcMainManager } = require('@neosjs/electron-ipc')
const IPC = ipcMainManager()

IPC.checkUpdates()
```

#### 渲染进程
```js
const { ipcRendererManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcRendererManager()

messageCenter.on('MAIN_CHECK_UPDATES',(event, res) => {
  console.log(res)
})
```
> 没有更新会返回false。有更新，则返回更新数据。详见：[checkUpdates](/updater/checkUpdates.html#fan-hui-shu-ju) 接口

> 当有数据返回时，此时调用 [downloadUpdates](/updater/downloadUpdates.html) 即可开始下载。

