# 获取窗口界限值 <BadgeTip text="异步" type="green"></BadgeTip>

获取当前窗口的界限值

## API
### `nativeApi.getWindowBounds(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowBounds()
```
### 返回值

```json
{
  x: xxx,
  y: xxx,
  width: xxx,
  height: xxx
}
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
