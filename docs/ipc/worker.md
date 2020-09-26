# 快速上手
基于 `nodejs` 的 `process` 通信封装。因为它是一个nodejs的进程服务，所以它只能运行在 `electron` 的主进程上。

:::danger
如果项目里需要用到 `worker` 进程，则安装该模块。模块引入后，会挂载到 `global` 上，方便其它进程调用。

worker进程自身不提供api出来。该模块相应的api已内置在 `@neosjs/electron-ipc` 模块里。
:::

## 安装
![npm (scoped)](https://img.shields.io/npm/v/@neosjs/electron-worker)
#### NPM
```sh
npm i @neosjs/electron-worker -S
```
#### YARN
```sh
yarn add @neosjs/electron-worker
```

## 使用
运行进程：[主进程](https://www.electronjs.org/docs/glossary#main-process)
```js
// 引入文件
const { getWorkerService } = require('@neosjs/electron-worker')

// 初始化一个workerService，传递worker进程工作的的路径
const workerService = getWorkerService(WORK_PATH)
```
### 启动进程
```js
workerService.start()
```

