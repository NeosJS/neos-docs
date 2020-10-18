# 获取APP路径 <BadgeTip text="异步" type="green"></BadgeTip>
获取APP的安装路径

## API
### `nativeApi.getAppPath(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const path = await nativeApi.getAppPath()
```
:::tip
返回APP的安装路径地址
:::

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
