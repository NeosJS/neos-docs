# 设置窗口尺寸

设定当前获得焦点的窗口尺寸。

## API
### `nativeApi.setWindowSize(width, height)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowSize(800, 600)
```
:::danger
窗口的尺寸不能小于创建时设定的最小值。
:::

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| width | 窗口宽 | number |  —  | —      |
| height | 窗口高 | number |  —  | —      |

