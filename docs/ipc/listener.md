# 监听消息 <BadgeTip text="main" type="green"></BadgeTip> <BadgeTip text="renderer" type="green"></BadgeTip> <BadgeTip text="worker" type="green"></BadgeTip>

监听进程之间的消息

## API
### `messageCenter.on(channel,listener)`
监听 `channel`，当接收到新的消息时 `listener` 会以 `listener(args...)` 的形式被调用。
###

## ipcMainManager
进程：[主进程](https://www.electronjs.org/docs/glossary#main-process)

> 从主进程到渲染进程的异步通信。

```js
const { ipcMainManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcMainManager()
```
### 示例代码
```js
messageCenter.on('closeWindow', message => {
  console.log(message)
})
```
## ipcRendererManager
进程：[渲染进程](https://www.electronjs.org/docs/glossary#renderer-process)

> 从渲染进程到主进程的异步通信。
```js
const { ipcRendererManager } = window.require('@neosjs/electron-ipc')
const messageCenter = ipcRendererManager()
```

### 示例代码
```js
messageCenter.on('closeWindow', message => {
  console.log(message)
})
```

## ipcWorkerManager
进程：[子进程](https://nodejs.org/api/child_process.html)

> 从渲染进程、主进程到子进程的异步通信。
```js
const { ipcWorkerManager } = require('@neosjs/electron-ipc')
const messageCenter = ipcWorkerManager()
```

### 示例代码
```js
messageCenter.on('closeWindow', message => {
  console.log(message)
})
```


## Params

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 必选  |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| channel               | 信号标示           | String | —               | —            | 是 |
| listener          | 侦听器                   | Function | —           | —           | 否 |
|    -- args          | 参数                   | any[] | —           | —           | 否 |

[[toc]]
