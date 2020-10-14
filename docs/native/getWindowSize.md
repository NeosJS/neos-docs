# 获取窗口尺寸 <BadgeTip text="异步" type="green"></BadgeTip>
获取当前主窗口的宽高

## API
### `nativeApi.getWindowSize()`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowSize()
```
### 返回值

```json
{
  width: xxx,
  height: xxx
}
```
