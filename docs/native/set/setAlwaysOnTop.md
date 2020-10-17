# 置顶窗口

将当前获得焦点的窗口置顶

## API
### `nativeApi.setAlwaysOnTop(flag)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setAlwaysOnTop(true) // 置顶
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| flag | 是否置顶 | Boolean | true、false | —      |

