# 清除本地缓存 <BadgeTip text="异步" type="green"></BadgeTip>

清除本地缓存文件

## API
### `nativeApi.cleanCache(sound)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.cleanCache()

// 返回一个 Boolean
```
## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| sound | 是否播放提示音 | Boolean | true、false | false    |
