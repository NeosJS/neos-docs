# 获取APP版本 <BadgeTip text="异步" type="green"></BadgeTip>
获取APP版本号

## API
### `nativeApi.getAppVersion(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const version = await nativeApi.getAppVersion()
```
:::tip
返回 package.json 中定义的 version 的值
:::

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
