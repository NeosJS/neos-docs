# 获取窗口状态 <BadgeTip text="异步" type="green"></BadgeTip>

获取当前主窗口状态

## API
### `nativeApi.getWindowState(callback: <Function>)`

### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowState()
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |

:::info
反回当前窗口的状态
isMaximized、isMinimized、isFullScreen、isNormal 
:::
