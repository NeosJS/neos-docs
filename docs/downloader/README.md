# 快速上手

该模块提供课件资源的检查下载解压等功能。


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

::: info
接口均提供事件。 

事件的名称，取决于接口提供的方法名。 如：`downloaderApi.downloadCourseware()`, 方法名为 `downloadCourseware`, 那么事件名称就是：`downloadCourseware`。 监听事件的方法是： `downloaderApi.on('downloadCourseware')`。
:::
