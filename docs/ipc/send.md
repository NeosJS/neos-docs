# 发送消息 <BadgeTip text="main" type="green"></BadgeTip> <BadgeTip text="renderer" type="green"></BadgeTip> <BadgeTip text="worker" type="green"></BadgeTip>

发送消息给各进程。

## API
- `messageCenter.sendToMain(channel, ...params)`
- `messageCenter.sendToRenderer(channel, ...params)`
- `messageCenter.sendToWorker(channel, ...params)`

:::danger
当发送消息给对应的进程时，同时也需要在相应的进程里监听 <b>`channel`</b>。
:::

## sendToMain 
运行进程：[渲染进程](https://www.electronjs.org/docs/glossary#renderer-process) [子进程](https://nodejs.org/api/child_process.html)

> 从渲染进程、子进程到主进程的异步通信。

```js
const { ipcRendererManager } = window.require('@neosjs/electron-ipc')
const messageCenter = ipcRendererManager()

// const { ipcWorkerManager } = require('@neosjs/electron-ipc')
// const messageCenter = ipcWorkerManager()
```
### 示例代码
```js
// 有数据
messageCenter.sendToMain('changeUserName', {
  userName:'听着情歌流泪'
})
// 没数据
messageCenter.sendToMain('openWindow')
```
:::info
上面的例子里，需要在主进程里监听：`changeUserName`, `openWindow`。
:::

## sendToRender 
运行进程：[主进程](https://www.electronjs.org/docs/glossary#main-process) [子进程](https://nodejs.org/api/child_process.html)

> 从主进程、子进程到渲染进程的异步通信。

```js
const { ipcMainManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcMainManager()

// const { ipcWorkerManager } = require('@neosjs/electron-ipc')
// const messageCenter = ipcWorkerManager()
```
### 示例代码
```js
// 有数据
messageCenter.sendToRender('changeUserName', {
  userName:'听着情歌流泪'
})
// 没数据
messageCenter.sendToRender('openWindow')
```
:::info
上面的例子里，需要在渲染进程里监听：`changeUserName`, `openWindow`。
:::

## sendToWorker

运行进程：[主进程](https://www.electronjs.org/docs/glossary#main-process) [渲染进程](https://www.electronjs.org/docs/glossary#renderer-process)

> 从主进程、渲染进程到子进程的异步通信。

```js
const { ipcRendererManager } = window.require('@neosjs/electron-ipc')
const messageCenter = ipcRendererManager()

// const { ipcMainManager } = require('@neosjs/electron-ipc')
// const messageCenter = ipcMainManager()
```
### 示例代码
```js
// 有数据
messageCenter.sendToWorker('changeUserName', {
  userName:'听着情歌流泪'
})
// 没数据
messageCenter.sendToWorker('openWindow')
```
:::info
上面的例子里，需要在子进程里监听：`changeUserName`, `openWindow`。
:::

## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| channel               | 信号标示           | String | —               | —            | 是 |
| params          | 需要发送的数据                   | Any[] | —           | —           | 否 |

[[toc]]
