# 设置窗口最小尺寸

设置当前窗口最小尺寸

## API 接口

### `nativeApi.setWindowMinSize(minWidth, minHeight)`
### 

## 示例代码

```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowMinSize(500, 500)
```

## 参数

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
| --------- | ------------ | ------ | ------ | ------ |
| minWidth  | 窗口最小宽度 | number | —      | —      |
| minHeight | 窗口最小高度 | number | —      | —      |

