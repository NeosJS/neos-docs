# 快速上手

基于 `electron` 的 `ipcMain` 和 `ipcRenderer` 进行的通信封装。它运行在 `electron` 的主进程、渲染进程、子进程(如果有)之间。

`@neosjs/electron-ipc` 内置三条通道：

- `ipcMainManager` 主进程通道
- `ipcRendererManage` 渲染进程通道
- `ipcWorkerManage` 子进程通道

## 安装

![npm (scoped)](https://img.shields.io/npm/v/@neosjs/electron-ipc)

#### NPM

```sh
npm i @neosjs/electron-ipc -S
```

#### YARN

```sh
yarn add @neosjs/electron-ipc
```

## 使用

### 主进程

```js
// 引入文件
const { ipcMainManager } = require('@neosjs/electron-ipc')

// 定义一个消息中心，方便后面调用
const messageCenter = ipcMainManager()
```

### 渲染进程

```js
// 引入文件
const { ipcRendererManager } = require('@neosjs/electron-ipc')

// 定义一个消息中心，方便后面调用
const messageCenter = ipcRendererManager()
```

### Worker 进程

```js
// 引入文件
const { ipcWorkerManager } = require('@neosjs/electron-ipc')

// 定义一个消息中心，方便后面调用
const messageCenter = ipcWorkerManager()
```

:::danger
如果要使用 `worker` 进程，还需要额外安装一个依赖包。
:::

