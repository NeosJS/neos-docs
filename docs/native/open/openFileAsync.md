# 打开文件(异步方式) <BadgeTip text="异步" type="green"></BadgeTip>

用异步方式打开指定的文件。


## API
### `nativeApi.openFileAsync(filePath: <String>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.openFileAsync('xxxxx/xxxxxx.exe')
```
:::tip
返回一个布尔值。
:::

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| filePath | 需要打开的文件路径 | String | — | —     |
