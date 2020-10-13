# 关闭窗口

将当前获得焦点的窗口还原成初始尺寸。

## API
### `nativeApi.closeWindow(flag)`
### 

## 示例代码
```js
import nativeApi from '@neosjs/electron-native'

nativeApi.closeWindow()
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| flag | 是否需要退出App | Boolean | true、false | false     |
