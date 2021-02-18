# 快速上手 <BadgeTip text="major版本" type="danger"></BadgeTip>

该模块提供课件资源的下载解压、更新文件的下载、普通文件的下载等功能。提供断点续传、暂停下载、恢复下载等功能！

:::danger
注： 这是一次破坏性的更新！！！接口参数、返回数据、回调均发生变化！
:::

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
接口均提供事件监听。  
事件的名称，取决于接口返回的当前下载的文件。  
如：
```js
const downloadTask = await downloaderApi.downloadCourseware({
  fileURL:'https://wwww.xxxxx.com/demo.zip'
})
```
下载器启动成功后，会返回当前正在下载的任务，那么监听事件为：
```js
downloaderApi.on(downloadTask,res => {
  console.log(res)
})
```
这样就能监听到 https://wwww.xxxxx.com/demo.zip 的下载状态 。  
移除事件监听： `downloaderApi.removeAllListener(downloadTask)`

为什么要如此设计？  
答： 因为是<font color="#db4437">**多文件同时下载**</font>，所以，某个文件下载状态的监听，需要分配一个独立的下载任务。
:::
