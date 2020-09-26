# 消息回调 <BadgeTip text="main" type="green"></BadgeTip> <BadgeTip text="renderer" type="green"></BadgeTip> <BadgeTip text="worker" type="green"></BadgeTip>

消息发送后，需要获取到接收方的反馈。

## API

- `messageCenter.callMain(channel, ...params)`
- `messageCenter.callRenderer(channel, ...params)`
- `messageCenter.callWorker(channel, ...params)`

:::danger
消息回调是一个双向通信，对哪个进程的数据感兴趣，就需要在哪个进程了 <b>`answerCall`</b> 一个 <b>`channel`</b>。
:::

## callMain

运行进程：[渲染进程](https://www.electronjs.org/docs/glossary#renderer-process) [子进程](https://nodejs.org/api/child_process.html)

> 从渲染进程、子进程到主进程的异步通信。

```js
const { ipcRendererManager } = window.require('@neosjs/electron-ipc')
const messageCenter = ipcRendererManager()

// const { ipcMainManager } = require('@neosjs/electron-ipc')
// const messageCenter = ipcMainManager()
```

### 示例代码

渲染进程 或 子进程

```js
const message = await messageCenter.callMain('changeUserName', {
  userName: '听着情歌流泪'
})

// message 的值是主进程 answerCall 返回的
```

主进程

```js
// 主进程set一条信号 'changeUserName'
messageCenter.answerCall('changeUserName', async data => {
  // ... code
  return {
    userName: '这是Main回复的消息'
  }
})
```

## callRender

运行进程：[主进程](https://www.electronjs.org/docs/glossary#main-process) [子进程](https://nodejs.org/api/child_process.html)

> 从主进程、子进程到主进程的异步通信。

```js
const { ipcMainManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcMainManager()

// const { ipcWorkerManager } = require('@neosjs/electron-ipc')
// const messageCenter = ipcWorkerManager()
```

### 示例代码

主进程 或 子进程

```js
const message = await messageCenter.callRender('changeUserName', {
  userName: '听着情歌流泪'
})

// message 的值是渲染进程 answerCall 返回的
```

渲染进程

```js
// 渲染进程set一条信号 'changeUserName'
messageCenter.answerCall('changeUserName', async data => {
  // ... code
  return {
    userName: '这是Main回复的消息'
  }
})
```

## callWorker

运行进程：[主进程](https://www.electronjs.org/docs/glossary#main-process) [渲染进程](https://www.electronjs.org/docs/glossary#renderer-process)

> 从渲染进程、主进程到子进程的异步通信。

```js
const { ipcMainManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcMainManager()

// const { ipcRendererManager } = window.require('@neosjs/electron-ipc')
// const messageCenter = ipcRendererManager()
```

### 示例代码

主进程 或 渲染进程

```js
const message = await messageCenter.callWorker('changeUserName', {
  userName: '听着情歌流泪'
})

// message 的值是worker进程 answerCall 返回的
```

子进程

```js
// 子进程set一条信号 'changeUserName'
messageCenter.answerCall('changeUserName', async data => {
  // ... code
  return {
    userName: '这是Main回复的消息'
  }
})
```

## Params

| 参数    | 说明           | 类型   | 可选值 | 默认值 | 必选 |
| ------- | -------------- | ------ | ------ | ------ | ---- |
| channel | 信号标示       | String | —      | —      | 是   |
| params  | 需要发送的数据 | Any[]  | —      | —      | 否   |

[[toc]]
