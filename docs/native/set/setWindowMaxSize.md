# 设置窗口最大尺寸

设置当前窗口最大尺寸

## API 接口

### `nativeApi.setWindowMaxSize(maxWidth, maxHeight)`
### 

## 示例代码

```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowMaxSize(500, 500)
```

## 参数

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
| --------- | ------------ | ------ | ------ | ------ |
| maxWidth  | 窗口最大宽度 | number | —      | —      |
| maxHeight | 窗口最大高度 | number | —      | —      |

