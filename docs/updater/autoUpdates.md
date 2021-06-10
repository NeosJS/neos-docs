# 自动更新

应用程序在后台自动更新


## API
### `updaterApi.autoUpdates(updateUrl: <String>, notification: <Boject>)`
### 

:::info
该接口会在后台自动检查是否有更新。

检测到有更新，则自动下载更新，退出APP时将自动安装。

下载完成后，会通过通知接口提示用户。
:::

## 示例代码
```js
import { updaterApi } from '@neosjs/electron-ipc'

updaterApi.autoUpdates({
  title: '检测到有新版本可供使用',
  body: '新版本已经下载成功，退出程序以便安装新版'
})
```

:::danger
由于该接口是自动检测和下载，在体验上可能不能满足UI的界面需求。为了更加自由和主动，需要用户手动触发更新，建议使用： [checkUpdates](/updater/checkUpdates.html) 。
:::

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| updateUrl | 远程更新地址 | String | —      | —      | 否      |
| notification | 更新文件下载完成的通知信息 | Object | —      | —      | 否      |
