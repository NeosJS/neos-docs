# 设置窗口能力 <BadgeTip text="renderer" type="green"></BadgeTip>

设置当前主窗口的native能力

## API
### `nativeApi.setWindowAble(type, flag)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowAble('maximize', true) // 设置最大化窗口的能力
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| type | 能力类型 | string | maximize(最大化)、minimize(最小化)、close(关闭)、move(移动)、resize(缩放)、fullscreen(全屏) | —      |
| flag | 是否开启(true：开启，false：关闭) | Boolean | true、false | true      |

