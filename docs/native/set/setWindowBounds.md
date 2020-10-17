# 重置窗口界限

重置当前窗口界限

## API
### `nativeApi.setWindowBounds(options: <Object>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setWindowBounds({width:200, height:100}) // 重置窗口大小
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 需要设置的界限值 | Object | — | —      |
| options['width'] | 窗口宽度 | Number | — | —      |
| options['height'] | 窗口高度 | Number | — | —      |
| options['x'] | 窗口的x坐标 | Number | — | —      |
| options['y'] | 窗口的y坐标 | Number | — | —      |

