# 打开文件(同步方式)

用同步方式打开文件。


## API
### `nativeApi.openFileSync(filePath)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.openFileSync('index.js')
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| filePath | 文件路径 | String | —      | —      |
