# 获取窗口坐标 <BadgeTip text="异步" type="green"></BadgeTip>
获取当前主窗口的坐标

## API
### `nativeApi.getWindowPosition()`
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
