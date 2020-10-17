# 获取窗口界限值 <BadgeTip text="异步" type="green"></BadgeTip>

获取当前窗口的界限值

## API
### `nativeApi.getWindowBounds()`
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
