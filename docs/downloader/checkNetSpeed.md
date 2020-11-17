# 网速检测  <BadgeTip text="异步" type="green"></BadgeTip>

检测指定的资源地址下载速度


## API
### `downloaderApi.checkNetSpeed(checkUrl: < Array >, callback: < Function >)`
### 

:::info
请在调用下载课件接口之前，调用该接口进行网速检测
:::

## 示例代码
```js
import { downloaderApi } from '@neosjs/electron-ipc'

const fastDomain = await downloaderApi.checkNetSpeed([
  'https://www.xxxxxx.com/asdasdasd',
  'https://www.yyyyyyy.com/asdasdasd'
])
```
#### 回调
```js
import { downloaderApi } from '@neosjs/electron-ipc'

downloaderApi.checkNetSpeed([
  'https://www.xxxxxx.com/asdasdasd',
  'https://www.yyyyyyy.com/asdasdasd'
],fastDomain => {
  console.log(fastDomain)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| checkUrl | 需要测试的远程地址 | Array | —      | —      | 是      |
| callback | 回调，返回当前给定的地址里最快的一个域名 | Function | —      | —      | 否      |


