# 获取窗口状态 <BadgeTip text="异步" type="green"></BadgeTip>

获取当前主窗口状态

## API
### `nativeApi.getWindowState(state)`

### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowState('maximize')
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| state | 窗口状态 | String | maximize，minimize，normal，fullscreen |-     |

