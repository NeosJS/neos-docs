# 设置窗口尺寸范围

设置当前窗口尺寸范围

## API 接口

### `nativeApi.setWindowLimitSize(minWidth, minHeight, maxWidth, maxHeight)`

## 示例代码

```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowLimitSize(500, 500, 1000, 1000)
```

## 参数

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
| --------- | ------------ | ------ | ------ | ------ |
| minWidth  | 窗口最小宽度 | number | —      | —      |
| minHeight | 窗口最小高度 | number | —      | —      |
| maxWidth  | 窗口最大宽度 | number | —      | —      |
| maxHeight | 窗口最大高度 | number | —      | —      |

