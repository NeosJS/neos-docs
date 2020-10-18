# 获取窗口坐标 <BadgeTip text="异步" type="green"></BadgeTip>
获取当前主窗口的坐标

## API
### `nativeApi.getWindowPosition(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowPosition()
```
### 返回值

```json
{
  x: xxx,
  y: xxx
}
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
