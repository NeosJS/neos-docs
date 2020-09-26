# 快速上手

该模块提供日志写入本地文件的能力。这是一个node服务，需要在主进程进行开启。

:::info
如果是在渲染进程加载此模块，日志信息会通过 ipc 消息转发到主进程，然后主进程进行日志写入。

对于渲染进程而言，打印的日志会通过内部的ipc通信转发到主进程写日志。
:::

## 安装

![npm (scoped)](https://img.shields.io/npm/v/@neosjs/electron-logger)

#### NPM

```sh
npm i @neosjs/electron-logger -S
```

#### YARN

```sh
yarn add @neosjs/electron-logger
```
