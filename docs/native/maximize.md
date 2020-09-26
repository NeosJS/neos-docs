# 最大化窗口 <BadgeTip text="renderer" type="green"></BadgeTip>

将当前获得焦点的窗口最大化。

## API
### `nativeApi.maximizeWindow()`
### 

## 示例代码
```js
import nativeApi from '@neosjs/electron-native'

nativeApi.maximizeWindow()
```

:::info
该接口会自动获取当前屏幕的 `screen` 尺寸，然后调用 `native` 设置最大化，并固定尺寸。
:::
